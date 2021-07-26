import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

import { Category } from '../pages/Dashboard/Category';
import { Product } from '../pages/Dashboard/Product';

// import { Customize } from '../pages/Customize';
// import { CustomizeText } from '../pages/Customize/steps/CustomizeText';
// import { CustomizeFull } from '../pages/Customize/steps/CustomizeFull';
// import { CustomizePhoto } from '../pages/Customize/steps/CustomizePhoto';
// import { CustomizeStickers } from '../pages/Customize/steps/CustomizeStickers';
// import { CustomizeBackground } from '../pages/Customize/steps/CustomizeBackground';
// import { CustomizeLayout } from '../pages/Customize/components/Layout';

import { InfosWho } from '../pages/Dashboard/Infos/Who';
import { InfosPresent } from '../pages/Dashboard/Infos/Present';

import { Cart } from '../pages/Cart';
import { DetailsCartPage } from '../pages/Cart/DetailsPage';

import { UserData } from '../pages/User';
import { SignIn } from '../pages/User/SignIn';
import { Register } from '../pages/User/Register';
import { FinishBuy } from '../pages/Cart/FinishBuy';

// import { CustomizeContextProvider } from "../hooks/useCustomize";
import { CustomizeRoutes } from './CustomizeRoutes';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />

      <Route path="/infos/who" component={InfosWho}/>
      <Route path="/infos/present" component={InfosPresent}/>

      <Route path="/category/:id" exact component={Category}/>
      <Route path="/category/:name/product/:id" exact component={Product}/>

      <Route path="/cart" component={Cart}/>
      <Route path="/shopDetails" component={DetailsCartPage}/>
      <Route path="/shopFinish/:id" component={FinishBuy}/>

      <Route path="/user" exact component={UserData}/>
      <Route path="/user/login" component={SignIn}/>
      <Route path="/user/register" component={Register}/>

      {/* <CustomizeRoutes/> */}
    </Switch>
  );
}
