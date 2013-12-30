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

## Documentation
+ [deckstats.net](https://github.com/solygen/userscripts/blob/master/doc/deckstats.net.md)
+ [magiccards.info](https://github.com/solygen/userscripts/blob/master/doc/magiccards.info.md)

## Scripts ##
```
scripts
├── [ 170]  deckstats.net
│   ├── [1.9K]  deck-list.user.js
│   └── [7.8K]  deck-view.user.js
├── [ 136]  fastfoodpreise.de
│   └── [1.4K]  toJson.user.js
├── [ 170]  magiccards.info
│   ├── [2.7K]  detail-view.user.js
│   └── [ 749]  proxies.user.js
├── [ 170]  magickartenmarkt.de
│   ├── [2.3K]  card-view.user.js
│   └── [2.9K]  redirect.user.js
├── [ 102]  mcdonalds.de
│   └── [9.9K]  prices.user.js
└── [ 204]  open-xchange.com
    ├── [2.2K]  appsuite.user.js
    ├── [2.5K]  gravatar.user.js
    └── [1.6K]  report.user.js

```


**Please note**<br>
In case you would enter the registration form of magickartenmarkt/magiccardsmarket my username will be automatically prefilled in the referrer field in case it's empty. This will give me a 1% bonus for all your purchases and has absolutly no disadvantages for you... just in case you want to say 'thank you' for sharing these userscripts with you ;-)