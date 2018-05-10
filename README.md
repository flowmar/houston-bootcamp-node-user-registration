* Create API requests to handle user registration function

1.  Set up a Node.js instance to listen to a port of your choice
2.  Accept a POST request to path "/register"
3.  Expect to receive data of a JSON object containing the following information of a user

* Email
* First Name
* Last Name
* Password
* Gender
* Date of Birth
* Zipcode
* Height
* Gender Preference
* Age Preference Min
* Age Preference Max
* Race (optional)
* Religion (optional)

4.  Securely hash the Password for storage
5.  Allow user to upload a profile picture via path "/uploadProfile"
6.  Enforce necessary data validation and proper errors should be returned
7.  Return a success message if all validations are passed
8.  Store information in a local database, preferably, MySQL

**Requirements**

1.  Accept input and return output in JSON

2.  Ensure there's no build or run-time errors
    Other Notes
    You may use any open-source libraries you see necessary. Please limit the external libraries to partials and modules that are assisting the functionality of the registration API. No usage of libraries that can replace the entire functionality of a user registration API.
