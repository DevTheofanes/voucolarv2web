import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Category } from '../pages/Dashboard/Category';
import { Product } from '../pages/Dashboard/Product';
import { InfosWho } from '../pages/Dashboard/Infos/Who';
import { InfosPresent } from '../pages/Dashboard/Infos/Present';
import { Cart } from '../pages/Cart';
import { DetailsCartPage } from '../pages/Cart/DetailsPage';
import { UserData } from '../pages/User';
import { SignIn } from '../pages/User/SignIn';
import { Register } from '../pages/User/Register';
import { FinishBuy } from '../pages/Cart/FinishBuy';

import { AcessDashboard } from '../pages/Acess/Dashboard';
import { AcessOrders } from '../pages/Acess/Orders';
import { AcessMarks } from '../pages/Acess/Marks';
import { AcessModels } from '../pages/Acess/Phones';
import { AcessCategories } from '../pages/Acess/Categories';
import { AcessProducts } from '../pages/Acess/Products';
import { AcessUsers } from '../pages/Acess/Users';
import { AcessPersonalize } from '../pages/Acess/Personalize';
import { AcessBackground } from '../pages/Acess/Uploads/background';
import { AcessFigures } from '../pages/Acess/Uploads/figures';
import { AcessLogin } from '../pages/Acess/Login';

import { useUser } from '../hooks/useUser';

import { Customize } from '../pages/Customize';
import { CustomizeText } from '../pages/Customize/steps/CustomizeText';
import { CustomizeFull } from '../pages/Customize/steps/CustomizeFull';
import { CustomizePhoto } from '../pages/Customize/steps/CustomizePhoto';
import { CustomizeStickers } from '../pages/Customize/steps/CustomizeStickers';
import { CustomizeBackground } from '../pages/Customize/steps/CustomizeBackground';
import { CustomizeLayout } from '../pages/Customize/components/Layout';

import { CustomizeContextProvider } from "../hooks/useCustomize";

export function Routes() {
  const { manager } = useUser()

  return (
    <Switch>
      {/* !ROTAS INICIAIS */}
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

      {/* <CustomizeContextProvider>       
        <CustomizeLayout>
          <Route path="/customize" exact component={Customize} />
          <Route path="/customize/background" component={CustomizeBackground} />
          <Route path="/customize/image" component={CustomizePhoto} />
          <Route path="/customize/stickers" component={CustomizeStickers} />
          <Route path="/customize/text" component={CustomizeText} />
          <Route path="/customize/full" component={CustomizeFull} />
        </CustomizeLayout>
      </CustomizeContextProvider> */}

      {
        manager ? (
          <>
          <Route path="/acess/dashboard" exact component={AcessDashboard} />
          <Route path="/acess/orders" exact component={AcessOrders} />
          <Route path="/acess/marks" exact component={AcessMarks} />
          <Route path="/acess/models" exact component={AcessModels} />
          <Route path="/acess/categories" exact component={AcessCategories} />
          <Route path="/acess/category/:id" exact component={AcessProducts} />
          <Route path="/acess/users" exact component={AcessUsers} />
          <Route path="/acess/personalize" exact component={AcessPersonalize} />
          <Route path="/acess/background" exact component={AcessBackground} />
          <Route path="/acess/figures" exact component={AcessFigures} />
        </>
        ) : <Route path="/acess" exact component={AcessLogin} />
      }
    </Switch>
  );
}
