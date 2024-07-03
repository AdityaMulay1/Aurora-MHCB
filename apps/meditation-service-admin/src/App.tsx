import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MeditationSubPageList } from "./meditationSubPage/MeditationSubPageList";
import { MeditationSubPageCreate } from "./meditationSubPage/MeditationSubPageCreate";
import { MeditationSubPageEdit } from "./meditationSubPage/MeditationSubPageEdit";
import { MeditationSubPageShow } from "./meditationSubPage/MeditationSubPageShow";
import { MeditationSessionList } from "./meditationSession/MeditationSessionList";
import { MeditationSessionCreate } from "./meditationSession/MeditationSessionCreate";
import { MeditationSessionEdit } from "./meditationSession/MeditationSessionEdit";
import { MeditationSessionShow } from "./meditationSession/MeditationSessionShow";
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
        title={"Meditation Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MeditationSubPage"
          list={MeditationSubPageList}
          edit={MeditationSubPageEdit}
          create={MeditationSubPageCreate}
          show={MeditationSubPageShow}
        />
        <Resource
          name="MeditationSession"
          list={MeditationSessionList}
          edit={MeditationSessionEdit}
          create={MeditationSessionCreate}
          show={MeditationSessionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
