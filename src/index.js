import angular from 'angular';

import 'angular-touch';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import manager from './components/manager';
//inside app componnets
import leftmenu from './components/manager/leftmenu';
import content from './components/manager/content';

import search from './components/manager/content/search';
import clientlist from './components/manager/content/clientlist';

import addclient from './components/manager/content/clientlist/addclient';
import client from './components/manager/content/clientlist/client';
import noclients from './components/manager/content/clientlist/noclients';

const app=angular.module("app",['ngMaterial']);

app.config(function($mdThemingProvider) {

  $mdThemingProvider.theme('default');

});

//register components
app
.component("manager",manager)
  .component("leftmenu",leftmenu)
  .component("content",content)
    .component("search",search)
    .component("clientlist",clientlist)
      .component("addclient",addclient)
      .component("client",client)
      .component("noclients",noclients);
