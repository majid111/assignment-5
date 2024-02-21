const ticketContainer = [];

function clickListener() {
    if (ticketContainer.includes(seat) === false && ticketContainer.length < 4) {
        addTicket(seat);
    }
    else if (ticketContainer.includes(seat) === true) {
        removeTicket(seat);
    }
}

function addTicket(ticket) {
    // indexing in array
    ticketContainer.push(ticket);
    console.log(ticketContainer);
    // Setting bg color
    setBgColor(ticket);
    // showing the ticket
    if (ticketContainer.length === 0) {
        ShowElement('seat-1');
        getInnerText('seatNumber - 1') = getInnerText(ticket);
    }
    else if (ticketContainer.length === 1) {
        ShowElement('seat-2');
        getInnerText('seatNumber - 2') = getInnerText(ticket);
    }
    else if (ticketContainer.length === 2) {
        ShowElement('seat-3');
        getInnerText('seatNumber - 3') = getInnerText(ticket);
    }
    else if (ticketContainer.length === 3) {
        ShowElement('seat-4');
        getInnerText('seatNumber - 4') = getInnerText(ticket);
    }
    // reducing total number
    reduceTotalSeat('total-Seat');
    increaseNumber('seat-Number');
    total();


}


function removeTicket(ticket) {
    for (const element of ticketContainer) {
        if (ticket === element) {
            continue;
        }
        ticketContainer.push(element);
    }
    removeBgColor(ticket);
    // hiding the ticket
    if (getInnerText('seatNumber - 1') === getInnerText(ticket)) { hideElement('seat-1'); }
    else if (getInnerText('seatNumber - 2') === getInnerText(ticket)) { hideElement('seat-2'); }
    else if (getInnerText('seatNumber - 3') === getInnerText(ticket)) { hideElement('seat-3'); }
    else if (getInnerText('seatNumber - 4') === getInnerText(ticket)) { hideElement('seat-4'); }
    // reducing total number
    reduceTotalSeat('seat-Number');
    increaseNumber('total-Seat');
    total();
    discount();

}


function discount() {
    const a=getElement("coupon-input").value;
    if(a==="NEW15"){
        const total = getInnerText('grand-total');
    const discount = ticketContainer.length * 550*.15;
    total = ticketContainer.length * 550-discount;
    }
    else if (a==='Couple 20'){
        const total = getInnerText('grand-total');
    const discount = ticketContainer.length * 550*.20;
    total = ticketContainer.length * 550-discount;
    }
    // console.log(getInnerText('coupon-input'));
}


document.getElementById('coupon-input')

console.log('Ticketing connected')