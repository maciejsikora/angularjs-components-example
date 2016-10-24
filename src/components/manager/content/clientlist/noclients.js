class Controller{


  handleQuestionClick(){

    //change properties
    this.allclients.push({ name:"Clark",surname:"Kent",age:"==="}); //reference change
    this.clients.push({ name:"Clark",surname:"Kent",age:"==="});
    //new reference - to all list
    //this.allclients=[{ name:"Clark",surname:"Kent",age:"==="},{ name:"James",surname:"Howlett ( Logan )",age:"==="},{ name:"Wade",surname:"Wilson",age:"==="}];

  }


  $onChanges(objs){

    console.log("Change of clients list visivle in noclient component");
  }

};
//component shows info about empty list
export default {

  bindings:{

    allclients:"<", //ome // two way binding
    clients:"<",
    onClearSearch:"&"
  },
  controller:Controller,
  template:`
  <div layout="row" layout-padding layout-wrap layout-fill style="padding-bottom: 32px;" ng-cloak>

  <div class="padded noclients" md-whiteframe="1"  layout layout-align="center center">
    <h3>Client list is empty</h3>
    <md-button ng-click="$ctrl.handleQuestionClick()" class="md-fab md-mini md-raised" aria-label="Client question" >
        <md-icon md-svg-src="/res/img/question.svg"></md-icon>
    </md-button>
    <md-button class="md-raised md-warn" ng-click="$ctrl.onClearSearch()" >
      Clear Search
    </md-button>
  </div>

  </div>
  `
}
