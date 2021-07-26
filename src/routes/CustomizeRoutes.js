import { Route } from 'react-router-dom';

import { Customize } from '../pages/Customize';
import { CustomizeText } from '../pages/Customize/steps/CustomizeText';
import { CustomizeFull } from '../pages/Customize/steps/CustomizeFull';
import { CustomizePhoto } from '../pages/Customize/steps/CustomizePhoto';
import { CustomizeStickers } from '../pages/Customize/steps/CustomizeStickers';
import { CustomizeBackground } from '../pages/Customize/steps/CustomizeBackground';
import { CustomizeLayout } from '../pages/Customize/components/Layout';

import { CustomizeContextProvider } from "../hooks/useCustomize";

export function CustomizeRoutes() {
  return (
    // <Switch>
      <CustomizeContextProvider>       
        <CustomizeLayout>
          <Route path="/customize" exact component={Customize} />
          <Route path="/customize/background" component={CustomizeBackground} />
          <Route path="/customize/image" component={CustomizePhoto} />
          <Route path="/customize/stickers" component={CustomizeStickers} />
          <Route path="/customize/text" component={CustomizeText} />
          <Route path="/customize/full" component={CustomizeFull} />
        </CustomizeLayout>
      </CustomizeContextProvider>
    // </Switch>
  );
}
