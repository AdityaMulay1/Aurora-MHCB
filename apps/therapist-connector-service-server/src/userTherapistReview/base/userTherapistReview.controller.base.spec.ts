import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UserTherapistReviewController } from "../userTherapistReview.controller";
import { UserTherapistReviewService } from "../userTherapistReview.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  rating: 42.42,
  reviewId: "exampleReviewId",
  reviewText: "exampleReviewText",
  therapistId: "exampleTherapistId",
  timestamp: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  rating: 42.42,
  reviewId: "exampleReviewId",
  reviewText: "exampleReviewText",
  therapistId: "exampleTherapistId",
  timestamp: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    rating: 42.42,
    reviewId: "exampleReviewId",
    reviewText: "exampleReviewText",
    therapistId: "exampleTherapistId",
    timestamp: new Date(),
    updatedAt: new Date(),
    userId: "exampleUserId",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  rating: 42.42,
  reviewId: "exampleReviewId",
  reviewText: "exampleReviewText",
  therapistId: "exampleTherapistId",
  timestamp: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
};

const service = {
  createUserTherapistReview() {
    return CREATE_RESULT;
  },
  userTherapistReviews: () => FIND_MANY_RESULT,
  userTherapistReview: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UserTherapistReview", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserTherapistReviewService,
          useValue: service,
        },
      ],
      controllers: [UserTherapistReviewController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /userTherapistReviews", async () => {
    await request(app.getHttpServer())
      .post("/userTherapistReviews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /userTherapistReviews", async () => {
    await request(app.getHttpServer())
      .get("/userTherapistReviews")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /userTherapistReviews/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userTherapistReviews"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userTherapistReviews/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userTherapistReviews"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /userTherapistReviews existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userTherapistReviews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userTherapistReviews")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
