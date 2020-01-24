import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
// import Auth from "./containers/Auth/Auth";
// import TheotrySections from "./containers/TheotrySections/TheotrySections";
// import TheotrySection from "./containers/TheotrySection/TheotrySection";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import RestorePassPage from "./Pages/RestorePassPage/RestorePassPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import TarifPage from "./Pages/TarifPage/TarifPage";
import RulesPage from "./Pages/RulesPage/RulesPage";
import AgreementPage from "./Pages/AgreementPage/AgreementPage";
// Profile Pages
import Theory from "./ProfilePages/Theory/Theory";

function App() {
  return (
    <Layout>
      <Switch>
        {/* <Route path="/theory-sections" component={TheotrySections} />
        <Route path="/theory-section" component={TheotrySection} /> */}
        <Route path="/register" component={RegisterPage} />
        <Route path="/restore-password" component={RestorePassPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/tarifs" component={TarifPage} />
        <Route path="/agreement" component={AgreementPage} />
        <Route path="/rules" component={RulesPage} />
        {/* Profile Pages */}
        <Route path="/theory" component={Theory} />
        <Route path="/practice" component={Theory} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Layout>
  );
}

export default App;
