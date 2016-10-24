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

      this.search = {name,surname};

  }

  handleSearchClear(){

    this.resetSearch();

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
