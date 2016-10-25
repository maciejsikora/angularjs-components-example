// MAIN APPLICATION COMPONENT. APP NEEDS TO HAVE ROOT - IT IS TREE OF COMPONENTS
class Controller{

  constructor(){

    this.content="CLIENTS";
  }

  handleMenuChange(menu){

    this.content=menu.content;

  }
}

//main component
const component = {

  controller:Controller,
  template:`<div layout="row" layout-xs="column">
  <leftmenu on-menu-change="$ctrl.handleMenuChange(menu)" flex-gt-sm="20" flex-sm="30"></leftmenu>
  <content content="$ctrl.content" flex-gt-sm="80" flex-sm="70" ></content>
  </div>
  `

};

export default component;
