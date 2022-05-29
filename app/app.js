const dailyBtn = document.querySelector('.daily-btn');
const weeklyBtn = document.querySelector('.weekly-btn');
const monthlyBtn = document.querySelector('.monthly-btn');

const buttonsNavigation = document.querySelectorAll('.select-btn');




buttonsNavigation.forEach( btn => {
    btn.addEventListener('click', handleClickBtn, getDataFetch);
})



function handleClickBtn(event) {
    let click = event.target;
    buttonsNavigation.forEach(btn => {
        btn.classList.remove("white-nav-btns");
        getDataFetch(click);

    })
    click.classList.add("white-nav-btns");
    return click;
    };

async function getDataFetch(click) {
        const data1 = await fetch("./data.json")
        const response = await data1.json()
        let clickDiv = click.innerHTML.toLowerCase();
        function upgradeCard() {
            for (let i = 0; i < response.length; i++) {
                let title = response[i].title;
                let replacedTitle = title.replace(" ", "-").toLowerCase();
                let elementToImplenet = document.querySelector('.hours-' + replacedTitle);
                let elementToImplenetLastWeek = document.querySelector('.last-week-' + replacedTitle);
                let lastVariable = document.querySelectorAll('.last-whatever');
                // console.log(clickDiv == 'daily')
                if (clickDiv == 'daily') {
                    elementToImplenetLastWeek.innerHTML = response[i].timeframes.daily.previous;
                    elementToImplenet.innerHTML = response[i].timeframes.daily.current;
                    lastVariable.forEach(element => element.innerHTML = "Yesterday")
                }
                if (clickDiv == 'weekly') {
                    elementToImplenetLastWeek.innerHTML = response[i].timeframes.weekly.previous;
                    elementToImplenet.innerHTML = response[i].timeframes.weekly.current;
                    lastVariable.forEach(element => element.innerHTML = "Last week")
                }
                if (clickDiv == 'monthly') {
                    elementToImplenetLastWeek.innerHTML = response[i].timeframes.monthly.previous;
                    elementToImplenet.innerHTML = response[i].timeframes.monthly.current;
                    lastVariable.forEach(element => element.innerHTML = "Last month")
                }
            }   
        }
        upgradeCard()
        }

window.onload = dailyBtn.click();