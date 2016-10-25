import monit from '../../../../monit.js';

// EMPTY INFO SHOW - DUMP COMPONENT
//component shows info about empty list
export default {

  bindings:{
    onClearSearch:"&" //OUT
  },
  controller:function(){

      this.handleClearClick=()=>{

          monit.monitOut("NOCLIENTS","onClearSearch",3);
          this.onClearSearch();
      };
  },
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
