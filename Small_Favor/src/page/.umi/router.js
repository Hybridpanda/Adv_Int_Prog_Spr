import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: require('../login').default,
    exact: true,
  },
  {
    path: '/',
    component: require('../../layout').default,
    routes: [
      {
        path: '/HomePage',
        routes: [
          {
            path: '/HomePage',
            component: require('../HomePage/index').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/PC/Documents/GitHub/Adv_Int_Prog_Spr/Small_Favor/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/page', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/Owing',
        routes: [
          {
            path: '/Owing',
            component: require('../Owing/index').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/PC/Documents/GitHub/Adv_Int_Prog_Spr/Small_Favor/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/page', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/Owed',
        routes: [
          {
            path: '/Owed',
            component: require('../Owed/index').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/PC/Documents/GitHub/Adv_Int_Prog_Spr/Small_Favor/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/page', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/Request',
        routes: [
          {
            path: '/Request',
            component: require('../Request/index').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/PC/Documents/GitHub/Adv_Int_Prog_Spr/Small_Favor/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/page', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/Ranking',
        routes: [
          {
            path: '/Ranking',
            component: require('../Ranking/index').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/PC/Documents/GitHub/Adv_Int_Prog_Spr/Small_Favor/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/page', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/PC/Documents/GitHub/Adv_Int_Prog_Spr/Small_Favor/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/page', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/PC/Documents/GitHub/Adv_Int_Prog_Spr/Small_Favor/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/page', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
