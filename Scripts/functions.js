function getElement(element) {
    const getByID = document.getElementById(element);
    return getByID;
}
function getInnerText(git) {
    const text = document.getElementById(git).innerText;
    return text;
}
// function click(s){
//     s.addEventListener("click", clickListener);
// }
function setBgColor(he){
    
    getElement(he).classList.add('bg-btnGreen');
}
function removeBgColor(re){
    getElement(re).classList.remove('bg-btnGreen');
}

function hideElement(he) {
    getElement(he).classList.add('hidden');
}
function ShowElement(re) {
    getElement(re).classList.remove('hidden');
}

function reduceTotalSeat(seat){
    const totalNumber=getInnerText(seat);
const number= parseInt(totalNumber)-1;
getInnerText(seat)=number;
}
function increaseNumber(seat){
    const totalNumber=getInnerText(seat);
const number= parseInt(totalNumber)+1;
getInnerText(seat)=number;
}


// function getInputValue(element){
//     const getByID=document.getElementById('element') ;
//     return getByID;
//  }
// const Ticket1 = getInnerText('seat-Number');
// getElement('seat-1').classList.add('hidden');

// const Ticket1Hidden=getElement('seat-1').classList;

// console.log(Ticket1);