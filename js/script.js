let histories = [];

const cards = document.getElementsByClassName('call');
const historyContainer = document.getElementById('history');
const coinElement = document.getElementById('available-coin');


for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('click', function () {
        const cardContent = card.parentElement.parentElement.parentElement.children;

        const ServiceTitle = cardContent[index].getElementsByTagName('p')[0].innerText;
        const ServiceCallNumber = cardContent[index].getElementsByTagName('p')[2].innerText;

        const createdAt = new Date().toLocaleTimeString();

        const coin = coinElement.innerText;
        if (coin >= 0 && coin < 20) {
            alert('Insufficient coins to make a call.');
            return;
        }
        else {
            coinElement.innerText = parseInt(coin) - 20;
        }

        histories.push({ServiceTitle, ServiceCallNumber, createdAt});

        const lastPushed = histories[histories.length - 1];
        

        historyContainer.innerHTML += `
            <div class="flex justify-between items-center bg-[#fafafa] shadow-sm rounded-lg p-2 mt-3">
                <div class="text-sm">
                    <p>${lastPushed.ServiceTitle}</p>
                    <p>${lastPushed.ServiceCallNumber}</p>
                </div>
                <div class="text-sm text-gray-500">
                    <p>${lastPushed.createdAt}</p>
                </div>
            </div>
        `

        document.getElementById('btn-clear').addEventListener('click', function (){
            historyContainer.innerHTML = '';
        })
    })
}

