const ticketContainer=[];

function clickListener(){
    if(ticketContainer.includes(seat)===false){
        addTicket(seat);
    }
    else{
        removeTicket(seat);
    }
}

function addTicket(ticket){
    if (ticketContainer.length<=4){
        ticketContainer.push(ticket);
    }
    setBgColor(ticket);
}
function removeTicket(ticket){
    if (ticketContainer.length<=4){
        ticketContainer.pop(ticket);
    }
    removeBgColor(ticket);
}


console.log('Ticketing connected')