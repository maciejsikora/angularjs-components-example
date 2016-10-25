import monit from '../../../../../monit.js';
/**
Client add components manages inputs and button for client add.
**/
class Controller {

  constructor(){

    this.resetClientData();

  }

  resetClientData(){

    //client is fully local scope data, it is isolated data
    this.client={
      name:"",
      surname:"",
      "age":""
    };
  }

  $onInit(){

    monit.monitInit("ADDCLIENT",3);
  }

  $onDestroy(){

    monit.monitDestroy("ADDCLIENT",3);
  }

  handleButtonClick(){

    if (this.client.name.trim().length===0 || this.client.surname.trim().length===0 || !(this.client.age>0) ) 
    return;//wrong data

    //run out callback
    // <---- communicate with parent component
    monit.monitOut("ADDCLIENT","onAdd",3);
    this.onAdd({client:this.client});
    this.resetClientData();

  };

};

//client add
const component = {

  bindings: {
    onAdd: '&' // OUT <-- connection with parent component
  },
  controller:Controller,
  template:`
  <div layout="row" layout-padding layout-wrap layout-fill style="padding-bottom: 32px;" ng-cloak>

  <div class="padded noclients" md-whiteframe="1"  layout layout-align="center center">
      <div width="100%" class="addclient" >
      <md-input-container flex="33" >
        <label>Name</label>
        <input name="clientName" ng-model="$ctrl.client.name" type="text">
      </md-input-container>
      <md-input-container flex="33">
        <label>Surname</label>
        <input name="clientSurName" ng-model="$ctrl.client.surname" type="text">
      </md-input-container>
      <md-input-container flex="33">
        <label>Age</label>
        <input name="clientAge" ng-model="$ctrl.client.age" type="number">
      </md-input-container>
      <md-button ng-click="$ctrl.handleButtonClick()" class="md-raised md-primary">Add client</md-button>
      </div>
  </div>

  </div>
  `

};

export default component;
