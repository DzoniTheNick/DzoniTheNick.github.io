# Crypto Tracker

Crypto Tracker is a website that is powered by the CoinGecko API. This repository represents the frontend part (*build using Angular*) of the application while the [backend](https://github.com/DzoniTheNick/crypto-tracker-backend) (middleware) part of the website is run on NodeJS.

The frontend is hosted via Github Pages while the backend is hosted via Heroku.

# Frontend

The frontend part of the application consists of **3 main components** and **3 *supporting* components**.

## Main Components
### [list-coins](https://github.com/DzoniTheNick/DzoniTheNick.github.io/tree/main/src/app/components/list-coins) 
The list-coins component represents a dynamic table that uses the HttpClient module in order to make a HTTP call to the backend of the application. By the default 
the table will show the first page of the results from the API request and only a 100 results. The user can then use the pagination buttons to chose which page he would like to see and also to change the number of results that are shown per page. The column of the page are sortable via the ***MatSortModule***.

### [compare-coins](https://github.com/DzoniTheNick/DzoniTheNick.github.io/tree/main/src/app/components/compare-coins)
**The compare-coins component is still being worked on!**
The general idea behind this components is to allow for the user to chose which two crypto currencies (from the CoinGecko API) he would like to compare. Upon the users choice the frontend would fetch the data from the backend and generate a *"table"* that would show a number of important parameters (*i.e. price change, market cap, conversion rate*) and also a couple useful graphs (*i.e. candlestick of value in usd of the crypto currency, spikeline of the price change*).  

### [convert-coins](https://github.com/DzoniTheNick/DzoniTheNick.github.io/tree/main/src/app/components/convert-coins)
**The convert-coins component is still being worked on!**
The general idea behind this components is to allow for the user to chose which two crypto currencies (from the CoinGecko API) he would like to convert. Upon the users choice the frontend would fetch the data from the backend and generate a *"form"* that would allow for the user to input the amount that he would like convert. 

## Supporting Components
### [footer](https://github.com/DzoniTheNick/DzoniTheNick.github.io/tree/main/src/app/components/footer)
The footer component, as the name would suggest, represents the fixed footer of the website. The footer contains the *About* information of the website and in is interactable, in a way that the user can see the *about information* if he hovers over the footer.

### [menu](https://github.com/DzoniTheNick/DzoniTheNick.github.io/tree/main/src/app/components/menu)
The menu component in a way respresents the landing page of the website, as it is the first thing the users sees once he loads up the website. It's main purpouse is to direct the user to the application routes - its functionalities. Once the user selects a option from the menu, the menu disappears and its functionality is replaced by the **nav-bar**.

### [nav-bar](https://github.com/DzoniTheNick/DzoniTheNick.github.io/tree/main/src/app/components/nav-bar)
As the name would suggest, the nav-bar component represents the navigation bar of the website. It is only visible once the user leaves the **menu** component. Its main function is to allow for the user to access the different parts of the website (*routes*) after the **menu** isnt available anymore.
