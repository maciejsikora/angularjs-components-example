class Controller{

  handleButtonClick(){

    this.onDelete({index:this.index});

  }

  handleQuestionClick(){

    //change in the same reference
    this.client.name="=====";
    this.client.surname="=====";
    this.client.age="====";


    this.onQuestion({client:this.client,index:this.index});

  }



};


//client
const component = {

  bindings:{
    client: '<', //one way binding --> from parent
    index: '<', //one way binding --> from parent
    onDelete:'&', // <-- conection to parent
    onQuestion:'&'// <-- conection to parent
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
