# This is a node backend application which is used for weather data and forcast

# Here are the details that describe how can we use this service

1. After cloning from git run "npm install" in the same directory
2. It will install all the dependencies of this application
3. Now this app by "node index.js"
4. It will listen to port 3000
5. We can see the weather details of 5 random indian city at root(http://localhost/3000/)
6. Now, to check weather data of a particular city we can use(http://localhost/3000/api/weather/<city_name>). It will results weather data of that particular city
7. Now, to check weather forcast for a city upto 30 days we can use (http://localhost/3000/api/weather/<no_of_days>/<city_name>)
