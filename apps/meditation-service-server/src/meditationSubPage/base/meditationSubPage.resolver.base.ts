/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { MeditationSubPage } from "./MeditationSubPage";
import { MeditationSubPageCountArgs } from "./MeditationSubPageCountArgs";
import { MeditationSubPageFindManyArgs } from "./MeditationSubPageFindManyArgs";
import { MeditationSubPageFindUniqueArgs } from "./MeditationSubPageFindUniqueArgs";
import { CreateMeditationSubPageArgs } from "./CreateMeditationSubPageArgs";
import { UpdateMeditationSubPageArgs } from "./UpdateMeditationSubPageArgs";
import { DeleteMeditationSubPageArgs } from "./DeleteMeditationSubPageArgs";
import { MeditationSubPageService } from "../meditationSubPage.service";
@graphql.Resolver(() => MeditationSubPage)
export class MeditationSubPageResolverBase {
  constructor(protected readonly service: MeditationSubPageService) {}

  async _meditationSubPagesMeta(
    @graphql.Args() args: MeditationSubPageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MeditationSubPage])
  async meditationSubPages(
    @graphql.Args() args: MeditationSubPageFindManyArgs
  ): Promise<MeditationSubPage[]> {
    return this.service.meditationSubPages(args);
  }

  @graphql.Query(() => MeditationSubPage, { nullable: true })
  async meditationSubPage(
    @graphql.Args() args: MeditationSubPageFindUniqueArgs
  ): Promise<MeditationSubPage | null> {
    const result = await this.service.meditationSubPage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MeditationSubPage)
  async createMeditationSubPage(
    @graphql.Args() args: CreateMeditationSubPageArgs
  ): Promise<MeditationSubPage> {
    return await this.service.createMeditationSubPage({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MeditationSubPage)
  async updateMeditationSubPage(
    @graphql.Args() args: UpdateMeditationSubPageArgs
  ): Promise<MeditationSubPage | null> {
    try {
      return await this.service.updateMeditationSubPage({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MeditationSubPage)
  async deleteMeditationSubPage(
    @graphql.Args() args: DeleteMeditationSubPageArgs
  ): Promise<MeditationSubPage | null> {
    try {
      return await this.service.deleteMeditationSubPage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
