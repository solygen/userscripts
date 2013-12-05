# Userscripts #
A collection of userscripts and bookmarklets

### Chrome ###


**Native Support**

* Open [chrome://chrome/extensions/](chrome://chrome/extensions/)
* Drag the script you want to load to the window
* Additionally you can add github to ExtensionInstallSources to get a install promt when you opening raw 

```
defaults write com.google.Chrome ExtensionInstallSources -array "https://*.github.com/*" "http://userscripts.org/*"
defaults write com.google.Chrome.canary ExtensionInstallSources -array "https://*.github.com/*" "http://userscripts.org/*"
``` 

**Tampermonkey**

* Install chrome extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)


### Firefox ###
* Install [Greasmonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
* Browse to the scripts folder inside Firefox (either local or from github)
* Click on the user.js script that you want to install

## Scripts ##
```
scripts
├── bugs.open-xchange.com
│   ├── gravatar.user.js
│   └── report.user.js
├── deckstats.net
│   ├── deck-list.user.js
│   └── deck-view.user.js
├── magiccards.info
│   ├── detail-view.user.js
│   └── proxies.user.js
└── magickartenmarkt.de
    ├── detail-view.user.js
    └── metacard.user.js



```