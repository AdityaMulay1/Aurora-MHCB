import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BedtimeReminderList } from "./bedtimeReminder/BedtimeReminderList";
import { BedtimeReminderCreate } from "./bedtimeReminder/BedtimeReminderCreate";
import { BedtimeReminderEdit } from "./bedtimeReminder/BedtimeReminderEdit";
import { BedtimeReminderShow } from "./bedtimeReminder/BedtimeReminderShow";
import { SleepPatternList } from "./sleepPattern/SleepPatternList";
import { SleepPatternCreate } from "./sleepPattern/SleepPatternCreate";
import { SleepPatternEdit } from "./sleepPattern/SleepPatternEdit";
import { SleepPatternShow } from "./sleepPattern/SleepPatternShow";
import { RelaxationExerciseList } from "./relaxationExercise/RelaxationExerciseList";
import { RelaxationExerciseCreate } from "./relaxationExercise/RelaxationExerciseCreate";
import { RelaxationExerciseEdit } from "./relaxationExercise/RelaxationExerciseEdit";
import { RelaxationExerciseShow } from "./relaxationExercise/RelaxationExerciseShow";
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
        title={"Sleep Regulator Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BedtimeReminder"
          list={BedtimeReminderList}
          edit={BedtimeReminderEdit}
          create={BedtimeReminderCreate}
          show={BedtimeReminderShow}
        />
        <Resource
          name="SleepPattern"
          list={SleepPatternList}
          edit={SleepPatternEdit}
          create={SleepPatternCreate}
          show={SleepPatternShow}
        />
        <Resource
          name="RelaxationExercise"
          list={RelaxationExerciseList}
          edit={RelaxationExerciseEdit}
          create={RelaxationExerciseCreate}
          show={RelaxationExerciseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
