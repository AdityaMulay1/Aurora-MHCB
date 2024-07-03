import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TherapistProfileList } from "./therapistProfile/TherapistProfileList";
import { TherapistProfileCreate } from "./therapistProfile/TherapistProfileCreate";
import { TherapistProfileEdit } from "./therapistProfile/TherapistProfileEdit";
import { TherapistProfileShow } from "./therapistProfile/TherapistProfileShow";
import { UserTherapistReviewList } from "./userTherapistReview/UserTherapistReviewList";
import { UserTherapistReviewCreate } from "./userTherapistReview/UserTherapistReviewCreate";
import { UserTherapistReviewEdit } from "./userTherapistReview/UserTherapistReviewEdit";
import { UserTherapistReviewShow } from "./userTherapistReview/UserTherapistReviewShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Therapist Connector Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TherapistProfile"
          list={TherapistProfileList}
          edit={TherapistProfileEdit}
          create={TherapistProfileCreate}
          show={TherapistProfileShow}
        />
        <Resource
          name="UserTherapistReview"
          list={UserTherapistReviewList}
          edit={UserTherapistReviewEdit}
          create={UserTherapistReviewCreate}
          show={UserTherapistReviewShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
