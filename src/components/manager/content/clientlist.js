class Controller{

  constructor($mdToast){

    this.allclients=[{name:"Jan",surname:"Kowalski", age:55}]; //all clients in list
    this.generateVisibleList();

    this.$toast=$mdToast;

  }


  showToastSuccess(text){

    this.showToast(text,"toast-success");
  }

  //shows info message
  showToast(text,htmlClass="toast-standard"){

      this.$toast.show(
        this.$toast.simple()
        .textContent(text)
        .hideDelay(5000)
        .toastClass(htmlClass)
      );
  }

  //@return boolean
  hasClients(){

    return this.clients.length>0;
  }

  //method adds client to list
  handleAddClient(client){

    this.allclients.unshift(client);//push client to client list
    this.generateVisibleList();

    this.showToastSuccess("Client added to list");

  }

  //remove client from list
  handleClientDelete(index){


    this.allclients.splice(index, 1); //remove element
    this.generateVisibleList();

    this.showToast("Client removed from list");

  }

  $onChanges(objs){

    this.search=objs.search.currentValue;
    this.generateVisibleList();

  }

  //method shows visible rows by search -> its is filering list
  generateVisibleList(){

      const nameReg=new RegExp(this.search.name,"i");
      const surnameReg=new RegExp(this.search.surname,"i");

      this.clients=this.allclients.filter((client)=>{

        return  nameReg.test(client.name) && surnameReg.test(client.surname);

      });
  }

  handleClientQuestion(client,index){



  }

};

//client list
const component = {

  bindings:{
    search:"<", //one way binding from parent
    onClearSearch:"&"
  },
  controller:["$mdToast",Controller],//set our class as controller
  template:`
  <md-content>
    <md-list ng-if="$ctrl.hasClients()" ng-repeat="client in $ctrl.clients">
      <client on-question="$ctrl.handleClientQuestion(client,index)" on-delete="$ctrl.handleClientDelete(index)" client="client" index="$index" ></client>
    </md-list>
    <noclients ng-show="!$ctrl.hasClients()" on-clear-search="$ctrl.onClearSearch()" clients="$ctrl.clients" allclients="$ctrl.allclients"></noclients>
  </md-content>
  <addclient on-add="$ctrl.handleAddClient(client)"></addclient>
  `

};

export default component;
