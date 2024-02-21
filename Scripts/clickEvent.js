const a1 = getElement("a1").onclick=checkFunction('a1');


 function checkFunction(e){
    
    console.log(getInnerText(e));
    console.log('in Function');
 }