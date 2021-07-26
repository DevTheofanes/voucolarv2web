import { Route, Switch } from 'react-router-dom';

import { useUser } from '../hooks/useUser';

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

export function AcessRoutes() {
  const { manager } = useUser()

  return (
    <Switch>
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


