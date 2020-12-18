# Getting started with Sports Wagering

1. Download (`git clone`) the codebase from 

  <a href="https://github.com/madelinerys/CS546-Final-Project">
  https://github.com/madelinerys/CS546-Final-Project</a>

1, Start Mongo database.

1. Using a terminal window, change to the project directory.

1. Download dependencies for the project via `npm install`.

1. Seed the database using either `npm seed` or `node seed.js`.

1. Check to verify that you now have a database called `jerry` (the code name
for our project). 

1. You will need an internet connection to run the app. It uses two external
web sites through makeshift APIs (screen scraping), to pull down betting lines and final scores.

# Running the app

Note: The app was tested using Chrome on a Windows PC.

1. Start the app using `npm start` or `node app.js`.
2. Navigate to localhost:3000 on your browser of choice (Google Chrome Preferred)

# Using the app
1. Log In or Create and Account using the sign up link on the home page
    a. To create an account, you must enter a username between 8 and 16 characters, and a password of the same length which contains at least 1 uppercase letter, 1 lowercase letter, and one number
    b. Once you register, you will be redirected to the login page, where you can enter your newly created username and password!
2. Once logged in, you will be brought to the betting page, where you can place several types of bets on multiple upcoming games. More on this in the next section.
3. On the top of your screen you can see the navigation bar, which has options for "Fund Account",  "History", "Log Out" and "About Us". There is also a hidden admin panel which is accessible by double-clicking the Jerry icon in the top right of the screen. These pages will all be discussedin more detail in their own dedicated sections.
4. When you are finished betting, click the logout button on the navigation bar, and you will be all logged out!

# Betting Page
1. On the betting page, you will see panels for each of the upcoming NFL games for the week. At the top of the panel reads the Away Team, the Home Team, and the date of the game. At the top right is a "submit button".
2. The left column describes the types of bets you can make, those being Away spread, Away money line, Home spread, Home money line, Over and Under.
3. To the right of the type of bet and the "number" for that bet, if applicable, is a column where you can enter how much you'd like to bet. Once you do this, the "Win" and "Collect" column will automatically be populated with how much money you would stand to win and collect if you were to place this bet.
4. Once you are satisfied with your bet(s), you may click "Submit" on the top right corner of the panel. If the bet is accepted, the box will then read "CONFIRMED". 
    a. NOTE: if you do not have enough money in your account to place the bet as you have indicated, an alert will pop up on the screen letting you know that you have insufficient funds.
5. You place as many bets as you have funds for, and the bets are placed on a game-by-game basis, meaning you have to click submit on each panel for each game you choose to place a bet on.

# Fund Account Page
1. On the fund account page, you can view your balance at the top.
2. Underneath the balance is a form to enter your card information, along with a field to enter how much money you wish to fund your account with.
    a. For testing purposes use the numbers 5100000000000000 for MASTERCARD, 4111111111111111 for VISA, 340000000000009 for AMEX, 6011000000000004 for DISCOVER
3. Once you have entered your card information and preferred amount, press submit on the form.
4. Once you submit the form to fund your account, you will be redirected to the betting page to place more bets!
    a. If you return to the Fund Account page, you can view your updated balance!

# History
1. The history page will tell you your betting history. 
2. At the top are two summaries, one for how much you've won (or lost!) so far, on bets that have resolved, and another for how much money you could potentially win based on bets that are still in progress.
3. Below those summaries is a table of each individual bet you've placed. 
4. At the bottom of the history table is a row for the totals of each column where a total would be relevant (Bet amount, Win amount, Collect amount, and Paid amount).
5. For some columns, there is no data available (ex. number for Over/Under bets, or resolved date for bets which are not resolved). These fields are intentionally left blank.

# Admin
** Reminder: Access by double clicking Jerry icon at top right **
1. NOTE: If you are already authenticated, you can also go directly to http://localhost:3000/admin and leave that tab up in a separate window.
2. The admin panel is extremely useful for both testing and adminsitrative purposes, and has functionality for both.
3. The first function on the admin page is "Set SimDate". This allows an adminstrator to set a simulated date some time in the past, which can allow them to place bets on past games.
4. The next function is "Delete all Bets" which, as it sounds, clears the betting collection of the database and starts fresh.
5. The third function is "Resolve Bets" which resolves all bets that can be resolved, if they have not been resolved already.
    a. A bet that can be resolved is one in which the game it was bet on already completed, so it has data to be resolved.
    b. The resolve bets sbutton queries the NFL lines API for game data and updates the bets database with the win/loss data.
6. The fourth function is "Generate Random Bets". This button allows the user to populate their own betting history with randomized bets. It takes into account the SimDate, mentioned earlier. It will generate as many bets as your balance allows, with random amounts.
7. The final function is a link to see the house's take. The text "Summary of how the house is doing on betting payout" is a link to this page.
    a. The house take page is very similar to the betting history page, with a few key differences. 
      1. There are four summaries at the top of the house take page. The first is how much the house has had to pay out so far on all resolved bets. The second is how much the house has profited so far on resolved bets (a negative number indicates a loss). The third is potential future payout, which is how much the house may have to pay on unresolved bets in the future. The final summary is potential future profit, which is how much the house could potentially make if all the unresolved bets end in a loss (no payout to bettors). These update as bets are resolved.
      2. Under the summaries is a table similar to the betting history page, but instead of listing only the bets for the logged in user, it lists all bets for all users.
      3. At the bottom of the table is the totals for each column for which a column is relevant. 

<a href="doc/TechnicalReferenceSportsWagering.md">Tech Reference</a>

Thank you for using our Sports Betting Web application! Hope you enjoyed. 
