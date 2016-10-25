//CONTENT COMPONENT ONLY SHOWS CHOSEN COMPONENT BY MENU -- DUMP COMPONENT
const component = {

  bindings:{
    content:"<" // IN
  },
  template:`
  <client-manager ng-if="$ctrl.content==='CLIENTS'" ></client-manager>
  <schedule-manager ng-if="$ctrl.content==='SCHEDULE'" ></schedule-manager>
  `

};

export default component;
