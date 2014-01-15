# magickartenmarkt.de / magiccardmarket.eu

##card-view.user.js
+ change: extracts average price (sold) 
+ data: save that price to local storage to be accessible for all other user scripts

### show average price (sold)
![image](https://rawgithub.com/solygen/userscripts/master/doc/img/magickartenmarkt.de-cardview-001.jpg)


##browse-view.user.js
+ add: new row with average price sold
+ add: calculate price level (add this information to headline and to local storage)
+ change: order table (card, sale price)
+ change: empty table cell when a card has more than one row 
+ change: colorize sales price based on average price (sold) 
  + green: below or equal (with a tolerance of 0.10 Euro)
  + red: else

```
hint: only average prices you've 'collected' with the card-view.user.js are available (and only in same browser)
```

![image](https://rawgithub.com/solygen/userscripts/master/doc/img/magickartenmarkt.de-browseview-001.jpg)


##wants-view.user.js
+ replaces 'price begins at' row with 'average price (sold)' 
+ change: price level based on gathered information by browse-view script

![image](https://rawgithub.com/solygen/userscripts/master/doc/img/magickartenmarkt.de-wants-001.jpg)

```
hint: only average prices you've 'collected' with the card-view.user.js are available (and only in same browser)
```


##redirect.user.js
+ skip meta card page 
+ skip search result page