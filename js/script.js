let histories = [];

const cards = document.getElementsByClassName("call");
const copyButtons = document.getElementsByClassName("btn-copy");
const heartButtons = document.getElementsByClassName("btn-heart");

const historyContainer = document.getElementById("history");
const coinElement = document.getElementById("available-coin");


for (let index = 0; index < heartButtons.length; index++) {
    const heart = heartButtons[index];
    heart.addEventListener("click", function () {
        const heartCount = document.getElementById("heart-count").innerText;
        document.getElementById("heart-count").innerText = parseInt(heartCount) + 1;
    });
}


for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("click", function () {
        const cardContent =
            card.parentElement.parentElement.parentElement.children;

        const ServiceTitle =
            cardContent[index].getElementsByTagName("p")[0].innerText;
        const ServiceCallNumber =
            cardContent[index].getElementsByTagName("p")[2].innerText;

        const createdAt = new Date().toLocaleTimeString();

        const coin = coinElement.innerText;
        if (coin >= 0 && coin < 20) {
            alert("Insufficient coins to make a call.");
            return;
        } else {
            alert("Calling " + ServiceTitle + " at " + ServiceCallNumber + "....");
            coinElement.innerText = parseInt(coin) - 20;
        }

        histories.push({ ServiceTitle, ServiceCallNumber, createdAt });

        const lastPushed = histories[histories.length - 1];

        historyContainer.innerHTML += `
            <div class="flex justify-between items-center bg-[#fafafa] shadow-sm rounded-lg p-2 mt-3">
                <div class="text-sm">
                    <p class="font-semibold">${lastPushed.ServiceTitle}</p>
                    <p class="font-semibold">${lastPushed.ServiceCallNumber}</p>
                </div>
                <div class="text-sm text-gray-500">
                    <p>${lastPushed.createdAt}</p>
                </div>
            </div>
        `;

        document
            .getElementById("btn-clear")
            .addEventListener("click", function () {
                historyContainer.innerHTML = "";
            });
    });
}

for (let index = 0; index < copyButtons.length; index++) {
    const copyButton = copyButtons[index];
    copyButton.addEventListener("click", async function () {
        const cardContent =
            copyButton.parentElement.parentElement.parentElement.children;
        const ServiceCallNumber =
            cardContent[index].getElementsByTagName("p")[2].innerText;
        await navigator.clipboard.writeText(ServiceCallNumber)
        .then( res => {
            alert("Phone number copied to clipboard: " + ServiceCallNumber);
        });

        let totalCopy = document.getElementById("total-copy").innerText;
        totalCopy++;
        document.getElementById("total-copy").innerText = totalCopy;
    });
}
