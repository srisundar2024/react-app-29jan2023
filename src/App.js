import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//Step 6: Import the Class Component which is needed to be called here
import HeaderClassComponent from './ClassComponent/HeaderClassComponent';
import LifeCycleOfCC from './ClassComponent/LifeCycleOfCC'; 
import StatefullVariablePropsAndEvents from './ClassComponent/StatefullVariablePropsAndEvents';

//Import Functional Component
import HeaderFunctionalComponent from './FunctionalComponent/HeaderFunctionalComponent';
import StatefullVariablePropsAndEventsFC from './FunctionalComponent/StatefullVariablePropsAndEvents';

//Routing
import RoutingConfig from './Routing/RoutingConfig';
import Menu from './Routing/Menu';

//Import Export
//Default Import
import ImpExp from './ImportExport/ImportExportExample';

//Named Import
import {ImportExportExample2} from './ImportExport/ImportExportExample';

//UNivertsal Import
import * as UniversalImportExport from './ImportExport/ImportExportExample';

//CRUD Operation
import CRUDMenu from './CRUDOperation/CRUDMenu';
import CRUDRouterHome from './CRUDOperation/CRUDRouterHome';

function App() {
  return (
    <>
    {/* Step 7: call the Class Component */}
    {/* <HeaderClassComponent></HeaderClassComponent> */}
    {/* <LifeCycleOfCC></LifeCycleOfCC> */}
    {/* <StatefullVariablePropsAndEvents></StatefullVariablePropsAndEvents> */}
    {/* <StatefullVariablePropsAndEvents productName="Poco" productPrice="21000"></StatefullVariablePropsAndEvents> */}

     {/* call the Functional Component */}
    {/* <HeaderFunctionalComponent></HeaderFunctionalComponent> */}
    {/* <StatefullVariablePropsAndEventsFC></StatefullVariablePropsAndEventsFC> */}
    {/* <StatefullVariablePropsAndEventsFC productName3="Poco" productPrice3="21000"></StatefullVariablePropsAndEventsFC> */}

    {/* <BrowserRouter>
    <Menu></Menu>
      <RoutingConfig></RoutingConfig>
      
    </BrowserRouter> */}

    {/* <ImpExp></ImpExp> */}
    {/* <ImportExportExample2></ImportExportExample2> */}

    {/* <UniversalImportExport.ImportExportExample1></UniversalImportExport.ImportExportExample1> */}
    {/* <UniversalImportExport.ImportExportExample2></UniversalImportExport.ImportExportExample2> */}
    {/* <UniversalImportExport></UniversalImportExport> */}
    {/* <UniversalImportExport.default></UniversalImportExport.default> */}
    
    <BrowserRouter>
        <CRUDMenu></CRUDMenu>
        <CRUDRouterHome></CRUDRouterHome>
    </BrowserRouter>
    </>
  );
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

}

export default App;
