import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

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

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
