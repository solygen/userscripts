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
+ [magickartenmarkt.de](https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md)

## Scripts ##
```
scripts-min
── [ 136]  deckstats.net
│   ├── [1.7K]  deck-list-min.user.js
│   └── [4.6K]  deck-view-min.user.js
├── [ 102]  fastfoodpreise.de
│   └── [1.1K]  toJson-min.user.js
├── [ 102]  github.com
│   └── [ 756]  trending-min.user.js
├── [ 136]  magiccards.info
│   ├── [2.0K]  detail-view-min.user.js
│   └── [ 738]  proxies-min.user.js
├── [ 204]  magickartenmarkt.de
│   ├── [2.5K]  browse-view-min.user.js
│   ├── [2.2K]  card-view-min.user.js
│   ├── [2.6K]  redirect-min.user.js
│   └── [1.4K]  wants-min.user.js
├── [ 102]  mcdonalds.de
│   └── [4.8K]  prices-min.user.js
├── [ 170]  open-xchange.com
│   ├── [1.6K]  appsuite-min.user.js
│   ├── [1.6K]  gravatar-min.user.js
│   └── [1.6K]  report-min.user.js
└── [ 102]  slimkicker.com
    └── [ 982]  hide-min.user.js

```


**Please note**<br>
In case you would enter the registration form of magickartenmarkt/magiccardsmarket my username will be automatically prefilled in the referrer field in case it's empty. This will give me a 1% bonus for all your purchases and has absolutly no disadvantages for you... just in case you want to say 'thank you' for sharing these userscripts with you ;-)