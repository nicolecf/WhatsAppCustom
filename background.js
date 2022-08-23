async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    
    return tab;
};

function getTitle() {
    return document.title;
}

let tabId = await getCurrentTab();
tabId.then((res) => {
    
})
chrome.scripting.executeScript(
    {
    target: {tabId: tabId, allFrames: true},
    func: getTitle,
    },
    (injectionResults) => {
    for (const frameResult of injectionResults)
        console.log('Frame Title: ' + frameResult.result);
    }
);