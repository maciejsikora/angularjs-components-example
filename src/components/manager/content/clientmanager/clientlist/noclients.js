import monit from '../../../../../monit.js';

class Controller{

  handleClearClick(){

      monit.monitOut("NOCLIENTS","onClearSearch",3);
      this.onClearSearch();
  }

  $onInit(){

      monit.monitInit("NOCLIENTS",3);
  }

  $onDestroy(){

      monit.monitDestroy("NOCLIENTS",3);
  }

}

// EMPTY INFO SHOW - DUMP COMPONENT
//component shows info about empty list
export default {

  bindings:{
    onClearSearch:"&" //OUT
  },
  controller:Controller,
  template:`
  <div layout="row" layout-padding layout-wrap layout-fill style="padding-bottom: 32px;" ng-cloak>

  <div class="padded noclients" md-whiteframe="1"  layout layout-align="center center">
    <h3>Client list is empty</h3>
    <md-button class="md-raised md-warn" ng-click="$ctrl.handleClearClick()" >
      Clear Search
    </md-button>
  </div>

  </div>
  `
}
