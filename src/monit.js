// Class for component monitoring
class Monit{

  _prepareData(data){

    const dataArr=[];
    for (var property in data) {
      if (data.hasOwnProperty(property)) {

          dataArr.push(property+"="+(data[property]?data[property]:"''") );
      }
    };

    return dataArr.join();
  }

  _getLevelSpaces(level){

      let spaces="";

      for (let i=1; i<level; i++){

        spaces+="  ";
      }

      return spaces;
  }

  monitIn(compName,method,data={},level=1){

    if (typeof data === "number")
    level=data,data={};

    console.log(`${this._getLevelSpaces(level)} %c #${compName}# --> IN-->  %c ${method} %c ${this._prepareData(data)}`,'color:blue','color:black; font-weight:bold','color:green; font-weight:bold');
  }

  monitOut(compName,method,data={},level=1){

    if (typeof data === "number")
    level=data,data={};

    console.log(`${this._getLevelSpaces(level)} %c #${compName}# <-- OUT <- %c ${method} %c ${this._prepareData(data)}`,'color:brown','color:black; font-weight:bold','color:green; font-weight:bold');

  }

  monitInit(compName,level=1){

    console.log(`${this._getLevelSpaces(level)} %c #${compName}# COMPONENT IS INITED`,'color:black');
  }

  monitDestroy(compName,level=1){

    console.log(`${this._getLevelSpaces(level)} %c #${compName}# COMPONENT WAS DESTROYED`,'color:red');
  }

}


export default new Monit();
