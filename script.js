// handle First Class Ticket
var firstClassTicketTotal;
incBtnForFirstClass = document.getElementById('first-classs-ticket-increase-btn');
incBtnForFirstClass.addEventListener('click', function() {
    const firstClassInput = document.getElementById('first-classs-ticket-text-field');
    const inputCount = parseInt(firstClassInput.value);

    const inputNewCount = inputCount + 1;

    firstClassInput.value = inputNewCount;
    firstClassTicketTotal = inputNewCount * 150;
    document.getElementById('firstClassTicketTotal-id').innerText = firstClassTicketTotal;


});


decBtnForFirstClass = document.getElementById('first-classs-ticket-decrease-btn');
decBtnForFirstClass.addEventListener('click', function() {
    const firstClassInput = document.getElementById('first-classs-ticket-text-field');
    const inputCount = parseInt(firstClassInput.value);

    const inputNewCount = inputCount - 1;

    firstClassInput.value = inputNewCount;
    firstClassTicketTotal = inputNewCount * 150;
    document.getElementById('firstClassTicketTotal-id').innerText = firstClassTicketTotal;



});




// handle Economy Class Ticket
var economyClassTicketTotal;
incBtnForEconomyClass = document.getElementById('economy-classs-ticket-increase-btn');
incBtnForEconomyClass.addEventListener('click', function() {
    const economyClassInput = document.getElementById('economy-classs-ticket-text-field');
    const inputCount = parseInt(economyClassInput.value);

    const inputNewCount = inputCount + 1;

    economyClassInput.value = inputNewCount;
    economyClassTicketTotal = inputNewCount * 100;
    document.getElementById('economyClassTicketTotal-id').innerText = economyClassTicketTotal;


});


incBtnForEconomyClass = document.getElementById('economy-classs-ticket-deccrease-btn');
incBtnForEconomyClass.addEventListener('click', function() {
    const economyClassInput = document.getElementById('economy-classs-ticket-text-field');
    const inputCount = parseInt(economyClassInput.value);

    const inputNewCount = inputCount - 1;

    economyClassInput.value = inputNewCount;
    economyClassTicketTotal = inputNewCount * 100;
    document.getElementById('economyClassTicketTotal-id').innerText = economyClassTicketTotal;


});



const subTotal = Math.round(firstClassTicketTotal + economyClassTicketTotal);
console.log(subTotal);
//document.getElementById('sub-total').innerText = subTotal.value;