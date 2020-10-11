## Inspiration
We’ve often had the desire to do something spontaneous and fun, but have always had trouble finding something to do! We wanted to design a tool that assists people with finding fun and convenient activities. Since so many people are stuck at home and bored during this time, 
we thought it would be fun to have a website that gives you a place to go to and a thing to do at that place (while staying safe, of course!) . 

## What it does
Our website helps users be more spontaneous. When someone navigates to our website, it automatically generates a place between 1 and 3 miles away for them to go to, and gives them an activity to do at that location. For instance, if they’re given a library to go to, the website will suggest activities like “ask the librarian for a book recommendation” or “study in the library’s reading room.” If the user wishes to go somewhere else, they can modify the distance and type of place and receive another randomized location! Right now, our website can send the user to a library, park, or restaurant, but this can be easily expanded to include more location and activity types. 

## How we built it
We were inspired to use the Google Maps JavaScript API after doing research and seeing how many different features are available. We start by fetching the user’s location using the Geolocation API built into the Navigator object. We render a new map centered around the user’s location, and place a marker on the map so that the user knows where they are. 

To generate a random nearby place, we begin by calculating a random latitude and longitude position within the area specified by the minimum and maximum ranges. We then use the Nearby Search function from the Places library in the Maps API to generate a set of nearby places, filtering by type of location (e.g. ‘restaurant’ or ‘library’) if applicable. We select a random place, then place a new marker on the map corresponding to the random location and pan the map to show both markers. We also fetch the relevant Place Details to display to the user, including the name, address, and Google Maps URL of the chosen place. Based on the type of location we recommended, we suggest an activity to the user from a set of pre-defined options. 

We used Vue.js for the project since that allowed us to easily integrate the JavaScript information into our display, as well as clearly define separate components on the screen. We also used Bootstrap to improve the overall layout and ensure adaptability across different screen sizes. 

## Challenges we ran into
We ran into many challenges during the development process. None of us had used the Google Maps API before and most of us had limited to no experience with JavaScript and Vue, so there was a big learning process. 

One major roadblock that we encountered with the back-end processes involved a request to the API taking time to return, causing the program to advance past it and return an error. Thanks to the help of some of the mentors, we learned about asynchronous functions in JavaScript. After reading the documentation extensively, we were able to successfully implement this into our code and got it working. 

On the front end, implementing our conceptual view of the page into the code was a challenge because of our limited past experience with Vue, Bootstrap, and CSS. It sometimes took longer than expected to implement a certain element, leading to more documentation reading and lots of learning. 

## Accomplishments that we're proud of
Overall, we’re most proud of what we were able to achieve given our limited experience with many of the tools that we were using. At the beginning, we were unsure if we’d even be able to produce anything using the Google Maps API because of our complete lack of experience, and so we’re very proud of what we were able to produce in the end. We ended up finishing not only our base functionality but also adding extra features to improve the tool, such as adding the ability to filter places by what type of location it is. 

## What we learned
We all learned a huge amount about Vue, JavaScript, and working with the Google Maps API. On the front-end side, we gained a lot of experience with passing data back and forth between the HTML and JavaScript. For the back-end, we learned a lot about working with different parts of the Google Maps API, especially getting the data we wanted from the Places library. 

## What's next for Spontanowity
While our project is currently functional, there are some features that we would improve or add in the future. 

There are a few changes to back-end functionality we would make. Because the Google Maps API supports many more types of places, we could add more variety to the possible places a user can be suggested. This would also help improve speed of locating a nearby place, since it would allow for more options to be available. Our program is also slower in more rural areas because they are less places to choose from, and so the place selection process could be further optimized.

For the front-end side, we would enable more helpful error messages if the user tries to input invalid values into the input boxes (e.g. setting the maximum range lower than the minimum range). Additionally, there is sometimes an issue where the user’s location isn’t properly fetched when the page is first loaded - this can be easily fixed by doing a hard reload on the page, but we would like to completely remove that error. 
