// background.js

function changeBackground() {
    let mainPage = document.getElementById('main');
    if (mainPage) {
        chrome.storage.sync.get({
            urlImage: '',
            imagePosition: 'center',
          }, function(items) {
            console.log(items);
            mainPage.style.backgroundImage = `url("${items.urlImage}")`;
            mainPage.style.backgroundPosition = items.imagePosition;
            mainPage.style.backgroundSize = 'cover';
          });
    }
}

let tryingGet = setInterval(() => {
    
    let chatTabs = document.querySelectorAll('div[data-testid="chat-list"] > div > div');
    if (chatTabs) {
            
        for (const tab of chatTabs) {
            tab.addEventListener('click', changeBackground);
        }
        clearTimeout(tryingGet);
    }

}, 3000);