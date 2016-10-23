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
        <md-content style="background-color:#1C5792; color:white; height:100%;">
          <md-toolbar class="md-hue-2" style="padding:10px;">
            <span>Menu</span>
          </md-toolbar>
          <md-list>
          <md-list-item style="cursor:pointer" ng-repeat="item in $ctrl.elements" md-ink-ripple>
              <p>{{item}}</p>
          </md-list-item>
          </md-list>
        </md-content>
  `

};

export default component;
