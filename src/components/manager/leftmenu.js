//COMPONENT ENABLES TO SET CURRENT WORKING IN CONTENT COMPONENT
const component = {

  bindings:{
    onMenuChange:"&" //out
  },
  controller:function(){

      //some example menu elements
      this.elements=[
        { label:"Client managment",content:"CLIENTS"},
        { label:"Schedule managment",content:"SCHEDULE"}
      ];
  },
  template:`
        <md-content>
          <md-toolbar class="md-hue-2" style="padding:20px;">
            <div id="menu-logo"></div>
            <div><p style="text-align:center">Menu</p></div>
          </md-toolbar>
          <md-list>
          <md-list-item class="menu-list" ng-repeat="item in $ctrl.elements" md-ink-ripple ng-click="$ctrl.onMenuChange({menu:item})">
              <p>{{item.label}}</p>
          </md-list-item>
          </md-list>
        </md-content>
  `

};

export default component;
