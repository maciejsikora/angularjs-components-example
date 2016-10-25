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

import schedulemanager from './components/manager/content/schedulemanager';
import clientmanager from './components/manager/content/clientmanager';
//client manager
import search from './components/manager/content/clientmanager/search';
import clientlist from './components/manager/content/clientmanager/clientlist';

import addclient from './components/manager/content/clientmanager/clientlist/addclient';
import client from './components/manager/content/clientmanager/clientlist/client';
import noclients from './components/manager/content/clientmanager/clientlist/noclients';

const app=angular.module("app",['ngMaterial']);

app.config(function($mdThemingProvider) {

  $mdThemingProvider.theme('default');

});

//register components
app
.component("manager",manager)
  .component("leftmenu",leftmenu)
  .component("content",content)
    .component("scheduleManager",schedulemanager)
    .component("clientManager",clientmanager)
      .component("search",search)
      .component("clientlist",clientlist)
        .component("addclient",addclient)
        .component("client",client)
        .component("noclients",noclients);
