# Userscripts #
A collection of userscripts and bookmarklets

### Chrome ###


**Native Support**

* Open [chrome://chrome/extensions/](chrome://chrome/extensions/)
* Drag the script you want to load to the window
 

**Tampermonkey**

* Install chrome extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)


### Firefox ###
* Install [Greasmonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
* Browse to the scripts folder inside Firefox (either local or from github)
* Click on the user.js script that you want to install

## Scripts ##
* just take a look at the directories of this repo


<br>
<hr>


# Bookmarklets #

### Install ###
* Create a usual bookmark in your favorite Browser 
* Set the 'Address/Url' field to the content of the javascript code block below.
* Click on edited bookmark while you are visiting the supported page ('example')

###deckstats.net: deck view###

+ replaces us price column with price for each card in Euro and some other tweaks
+ example: http://deckstats.net/decks/5855/42152-concept-skullduggery

```
javascript:(function() {var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://raw.github.com/solygen/bookmarklets/master/deckstats.net/deck-view-bookmarklet.js');document.body.appendChild(jsCode)})();
```

###magickartenmarkt.de: detail view ###
+ show average price (sold) based on the provided data
+ example: https://www.magickartenmarkt.de/Power_Conduit_Mirrodin.c1p229.prod

```
javascript:(function() {var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://raw.github.com/solygen/bookmarklets/master/magickartenmarkt.de/detail-view-bookmarklet.js');document.body.appendChild(jsCode)})();
```
