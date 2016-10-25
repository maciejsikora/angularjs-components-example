import monit from '../../../../../monit.js';
//SINGLE CLIENT ROW COMPONENT -- SHOULD BE DUMP COMPONENT
class Controller{

  handleButtonClick(){

    monit.monitOut("CLIENT","onDelete",3);
    this.onDelete({index:this.index});

  }

  handleQuestionClick(){

    //change in the same reference
    //MODYFICATION OF ONE-WAY-BINDED DATA!!
    //IT SHOULD NOT BE HERE!!
    //BAD PRACTICE
    // this.client.name="=====";
    // this.client.surname="=====";
    // this.client.age="====";


    monit.monitOut("CLIENT","onQuestion",3);
    this.onQuestion({client:this.client,index:this.index});

    //NO CHANGE IN PARENT SCOPE
    //BAD PRACTICE
    this.client={name:"Jaś",surname:"Fasola",age:"60"};//reference change
  }

  $onDestroy(){

    monit.monitDestroy("CLIENT",3);
  }

  $onInit(){

    monit.monitInit("CLIENT",3);

  }

  $onChanges(changes){

    //WHEN DELETES ONLY INDEX IS CHANGING

    //client data changes
    monit.monitIn("CLIENT","$onChanges",3);

  }

  $postLink(){

    //HERE EXAMPLE ACCESS TO DOM
    //console.log(document.querySelectorAll('client md-list-item')[this.index]);
  }



};


//client
const component = {

  bindings:{
    client: '<', // IN one way binding --> from parent
    index: '<', //IN one way binding --> from parent
    onDelete:'&', // OUT <-- conection to parent
    onQuestion:'&'// OUT <-- conection to parent
  },
  controller:Controller,
  template:`
  <md-list-item class="client-row" >
    <span flex="10" >
    {{$ctrl.index+1}}
    <md-icon md-svg-src="/res/img/user_icon.svg" class="s24"></md-icon>
    </span>
    <span flex="20">{{$ctrl.client.name}}</span>
    <span flex="30">{{$ctrl.client.surname}}</span>
    <span flex="20">{{$ctrl.client.age}}</span>
    <span flex="10">
      <md-button ng-click="$ctrl.handleButtonClick()" class="md-fab md-warn md-mini" aria-label="Delete client">
          <md-icon md-svg-src="/res/img/user_delete.svg"></md-icon>
      </md-button>
    </span>
    <span flex="10">
      <md-button ng-click="$ctrl.handleQuestionClick()" class="md-fab md-mini md-raised" aria-label="Client question" >
          <md-icon md-svg-src="/res/img/question.svg"></md-icon>
      </md-button>
    </span>
  </md-list-item>
   <md-divider ></md-divider>
  `

};

export default component;
