import monit from '../../../../monit.js';

// SEARCH TIPICAL DUMP component
// NO DATA MUTATION
class Controller{


  //click in search button
  handleSearchClick(){

    this.doSearch();

  }

  //sends info about search to parent component
  doSearch(){

    monit.monitOut("SEARCH","onSearch",2);
    //calling parent scope callback
    this.onSearch(this.search);


  }

  //click in clear button
  handleClearClick(){

    monit.monitOut("SEARCH","onClear",2);
    // OUT
    this.onClear();

  }


  //on press key on inputs
  handleKeyPress(e){

    if (e.charCode===13)//enter
    this.doSearch();

  }

  $onInit(){

      monit.monitInit("SEARCH",2);
  }

  //change from parent is only possible for clearing
  $onChanges(objs){

    monit.monitIn("SEARCH","$onChanges",2);

  }

  $onDestroy(objs){

    monit.monitDestroy("SEARCH",2);

  }

}

//search
const component = {

  bindings:{

    search:"<", // IN
    onSearch:"&", // OUT
    onClear:"&" // OUT

  },
  controller:Controller,
  template:`<md-toolbar>
      <div class="md-toolbar-tools">
        <md-icon md-svg-src="/res/img/search.svg" class="s24" aria-label="Search"></md-icon>
        <md-input-container class="search-input search-first-input">
          <label>Name</label>
          <input ng-model="$ctrl.search.name" ng-keypress="$ctrl.handleKeyPress($event)" name="searchName" type="text">
        </md-input-container>
        <md-input-container class="search-input" >
          <label>Surname</label>
          <input ng-model="$ctrl.search.surname" ng-keypress="$ctrl.handleKeyPress($event)" name="searchSurname" type="text">
        </md-input-container>
        <span flex></span>
        <md-button class="md-raised" aria-label="Search" ng-click="$ctrl.handleSearchClick()">
          Search
        </md-button>
        <md-button class="md-raised md-warn" ng-click="$ctrl.handleClearClick()" >
          Clear
        </md-button>
      </div>
    </md-toolbar>`

};

export default component;
