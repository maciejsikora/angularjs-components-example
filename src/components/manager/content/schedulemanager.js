import monit from '../../../monit.js';

class Controller{

  $onInit(){

    monit.monitInit("SCHEDULEMANAGER",1);
  }

  $onDestroy(){

    monit.monitDestroy("SCHEDULEMANAGER",1);
  }
}

//content
const component = {

  controller:Controller,
  template:`<div style="padding:20px;">
  <h2>Schedule manager is not part of this example</h2>
  </div>`

};

export default component;
