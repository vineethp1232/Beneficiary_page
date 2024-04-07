import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ManageBeneficiary from './components/ManageBeneficiary';
import Home from './components/Home';
import {Provider} from "react-redux"
import appStore from './utils/Redux/appStore';
import AddBeneficiary from './components/AddBeneficiary';
import EditBeneficiary from './components/EditBeneficiary';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Home/>
    },
  {
    path:"/beneficiary",
    element:<ManageBeneficiary/>
  },{
    path:"/beneficiary/new",
    element:<AddBeneficiary/>

  },{
    path:"beneficiary/edit",
    element:<EditBeneficiary/>
  }]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
