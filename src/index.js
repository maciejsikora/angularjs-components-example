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


const app=angular.module("app",['ngMaterial']);

app.config(function($mdThemingProvider) {

  $mdThemingProvider.theme('default');

});

//register components
app
.component("manager",manager)
  .component("leftmenu",leftmenu)
  .component("content",content);
