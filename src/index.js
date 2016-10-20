import angular from 'angular';
import app from './app';
import chatApp from './components/app';
import lobby from './components/lobby';
import login from './components/login';

//register components
app
.component("chatApp",chatApp)
.component("lobby",lobby)
.component("login",login);


app.config(function($stateProvider) {

  const lobbyState = {
    name: 'lobby',
    url: '/',
    template: '<lobby />'
  };

  const loginState = {
    name: 'login',
    url: '/login',
    template: '<login />'
  };


  $stateProvider.state(lobbyState);
  $stateProvider.state(loginState);

});
