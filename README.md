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
scripts
├── [ 102]  bricklink.com
│   └── [1.3K]  data-extract.user.js
├── [ 170]  deckstats.net
│   ├── [2.0K]  deck-list.user.js
│   └── [7.9K]  deck-view.user.js
├── [ 136]  fastfoodpreise.de
│   └── [1.4K]  toJson.user.js
├── [ 102]  fettrechner.de
│   └── [ 979]  kA.user.js
├── [ 102]  github.com
│   └── [ 944]  trending.user.js
├── [ 102]  imdb.com
│   └── [1.3K]  link-to-trakt.user.js
├── [ 170]  kleinanzeigen.ebay.de
│   ├── [2.1K]  hide-ads.user.js
│   └── [2.3K]  listimage.user.js
├── [  68]  magiccardmarket.eu
├── [ 170]  magiccards.info
│   ├── [2.7K]  detail-view.user.js
│   └── [ 797]  proxies.user.js
├── [ 238]  magickartenmarkt.de
│   ├── [6.0K]  browse-view.user.js
│   ├── [1.6K]  card-view.user.js
│   ├── [2.0K]  redirect.user.js
│   └── [2.6K]  wants.user.js
├── [ 102]  mcdonalds.de
│   └── [ 10K]  prices.user.js
├── [ 204]  open-xchange.com
│   ├── [3.1K]  appsuite.user.js
│   ├── [2.8K]  gravatar.user.js
│   └── [2.4K]  report.user.js
├── [ 102]  slimkicker.com
│   └── [1.1K]  hide.user.js
├── [ 170]  transfermarkt.de
│   ├── [ 995]  hide.user.js
│   └── [1.3K]  transfer-externals.user.js
├── [ 102]  wdr.de
│   └── [1011]  hide.user.js
├── [ 102]  wetter.com
│   └── [ 939]  hide.user.js
└── [ 102]  zalando.de
    └── [1.7K]  sortbydiscount.user.js


```


**Please note**<br>
In case you would enter the registration form of magickartenmarkt/magiccardsmarket my username will be automatically prefilled in the referrer field in case it's empty. This will give me a 1% bonus for all your purchases and has absolutly no disadvantages for you... just in case you want to say 'thank you' for sharing these userscripts with you ;-)
