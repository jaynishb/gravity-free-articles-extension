const loadCachPageUrl = (url, isInNewTab = true) => {
    const twelveFtUrl = `https://12ft.io/${url}`
    if (isInNewTab) {
        chrome.tabs.create({ url: twelveFtUrl });
    } else {
        chrome.tabs.update({ url: twelveFtUrl });
    }
}

chrome.runtime.onMessage.addListener((request) => {
    if (request.message == 'buttonClicked') {
        chrome.tabs.query({ active: true,currentWindow: true },function([tab]) {
            chrome.storage.sync.get(['isInNewTab'], ({ isInNewTab }) => {
                loadCachPageUrl(tab.url, isInNewTab)
            });
        });
    }
});
