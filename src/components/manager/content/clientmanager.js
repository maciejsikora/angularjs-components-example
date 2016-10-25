import monit from '../../../monit.js';

class Controller{

  constructor(){

    this.resetSearch();

  }

  resetSearch(){

    this.search={
      name:"",
      surname:""
    };

  }

  //its manage search operation
  handleSearch(name,surname){


    //!!!CHANGE OBJECT TO NEW ONE TO HAVE NEW REFERENCE AND COMMUNICATE TO CHILD COMPONENTS
    this.search = {name,surname};
    monit.monitIn("CLIENTMANAGER","handleSearch",1);

  }

  handleSearchClear(){

    monit.monitIn("CLIENTMANAGER","handleSearchClear",1);
    this.resetSearch();

  }

  $onInit(){

    monit.monitInit("CLIENTMANAGER",1);
  }

  $onDestroy(){

    monit.monitDestroy("CLIENTMANAGER",1);
  }

}

//content
const component = {

  controller:Controller,
  template:`<div>
  <search on-clear="$ctrl.handleSearchClear()" on-search="$ctrl.handleSearch(name,surname)" search="$ctrl.search" ></search>
  <clientlist on-clear-search="$ctrl.handleSearchClear()" search="$ctrl.search" ></clientlist>
  </div>`

};

export default component;
