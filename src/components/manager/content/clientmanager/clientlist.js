import monit from '../../../../monit.js';
// CLIENTLIST - SMART COMPONENT WITH DATA MUTATION

class Controller{

  constructor($mdToast){

    this.allclients=[
      {name:"Bruce",surname:"Wayne", age:38},
      {name:"Clark",surname:"Kent", age:30},
      {name:"James",surname:"Howlett ( Logan )", age:40},
      {name:"Floyd",surname:"Lawton ( Deadshot )", age:40},
      {name:"Wade",surname:"Winston ( Deadpool )", age:35},
      {name:"Nicolas",surname:"Cage ( ... )", age:50}



    ]; //all clients in list
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

    monit.monitIn("CLIENTLIST","handleAddClient",2);

    this.allclients.unshift(client);//push client to client list
    this.generateVisibleList();

    this.showToastSuccess("Client added to list");

  }

  //remove client from list
  handleClientDelete(index){

    monit.monitIn("CLIENTLIST","handleClientDelete",2);

    this.allclients.splice(index, 1); //remove element
    this.generateVisibleList();

    this.showToast("Client removed from list");

  }

  $onChanges(objs){

    monit.monitIn("CLIENTLIST","$onChanges",2);

    //FILTER LIST AFTER EVERY DATA CHANGE ( SEARCH CHANGE )
    this.generateVisibleList();

  }

  $onDestroy(){

    monit.monitDestroy("CLIENTLIST",2);

  }

  //method shows visible rows by search -> its is filering list
  generateVisibleList(){

      const nameReg=new RegExp(this.search.name,"i");
      const surnameReg=new RegExp(this.search.surname,"i");

      // LIST FILTERING
      this.clients=this.allclients.filter((client)=>{

        return  nameReg.test(client.name) && surnameReg.test(client.surname);

      });
  }

  handleClientQuestion(client,index){

    monit.monitIn("CLIENTLIST","handleClientQuestion",2);
    //NO REFERENCE CHANGE - NO COMMUNICATION WITH COMPONENTS ONLY SCOPE CHANGES

    const nclient={...client};//copy client data and create new object

    nclient.name="????";
    nclient.surname="????";

    //console.log(client===nclient);//false it is different object

    //HERE IS REFERENCE CHANGE
    this.clients[index]=nclient; //new object reference

    //WHAT IF WE NOT CREATE NEW OBJECT AND ONLY MUTATE
    //client.name="????";
    //client.surname="????";
    //SO JAŚ FASOLA ACCURSE. WHY?

  }

  //method only for monitoring
  onClearSearchProxy(){

    monit.monitOut("CLIENTLIST","onClearSearch",2);
    //go to parent
    this.onClearSearch();

  }

};

//client list
const component = {

  bindings:{
    search:"<", //IN
    onClearSearch:"&" //OUT
  },
  controller:["$mdToast",Controller],//set our class as controller
  template:`
  <md-content>
    <md-list ng-if="$ctrl.hasClients()" ng-repeat="client in $ctrl.clients">
      <client on-question="$ctrl.handleClientQuestion(client,index)" on-delete="$ctrl.handleClientDelete(index)" client="client" index="$index" ></client>
    </md-list>
    <noclients ng-show="!$ctrl.hasClients()" on-clear-search="$ctrl.onClearSearchProxy()" clients="$ctrl.clients" allclients="$ctrl.allclients"></noclients>
  </md-content>
  <addclient on-add="$ctrl.handleAddClient(client)"></addclient>
  `

};

export default component;
