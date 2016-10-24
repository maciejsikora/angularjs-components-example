class Controller{


  handleSearchClick(){

    this.onSearch(this.search);

  }


  handleKeyPress(e){

    if (e.charCode===13)//enter
    this.onSearch(this.search);

  }

  //change from parent is only possible for clearing
  $onChanges(objs){


    if (objs.search.currentValue.name==this.search.name && objs.search.currentValue.surname==this.search.surname)
    return; //no changes

    this.search=objs.search.currentValue;
    this.onSearch(this.search);
    //this.handleClearClick();
  }

}

//search
const component = {

  bindings:{

    search:"<",
    onSearch:"&",
    onClear:"&"

  },
  controller:Controller,
  template:`<md-toolbar>
      <div class="md-toolbar-tools">
        <md-button aria-label="Go Back">
          Go Back
        </md-button>
        <md-input-container class="search-input">
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
        <md-button class="md-raised md-warn" ng-click="$ctrl.onClear()" >
          Clear
        </md-button>
      </div>
    </md-toolbar>`

};

export default component;
