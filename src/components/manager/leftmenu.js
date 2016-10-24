//left menu
const component = {

  controller:function(){

      //some example menu elements
      this.elements=[
        "Client managment",
        "Schedule managment",
        "User managment"
      ];
  },
  template:`
        <md-content>
          <md-toolbar class="md-hue-2" style="padding:20px;">
            <div id="menu-logo"></div>
          </md-toolbar>
          <md-list>
          <md-list-item class="menu-list" ng-repeat="item in $ctrl.elements" md-ink-ripple>
              <p>{{item}}</p>
          </md-list-item>
          </md-list>
        </md-content>
  `

};

export default component;
