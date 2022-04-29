# Practice Launch X - Twitter

This repository is to practice TDD, organize and structure a node project following the following sprints
### ⭐️ Sprint 1: Add models
Requirement 1: We need a model User to save the information of a user in our app: `id`, `username`, `name`, `bio`, `dateCreated` and `lastUpdated`. 
 
Requirement 2: The attributes `dateCreated` and `lastUpdated` must be date type and save the moment when a new object of the class `User` is instantiated.
 
Requirement 3: Each user object needs the next getters: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 
Requirement 4: Each user object needs the next setters: `setUsername` and `setBio`, and update the properties username and bio.

### ⭐️ Sprint 2: Add services
Requirement 1: Create a new user with what was already defined in the previous sprint, using a new class called `UserService`.
Criteria of acceptance:
1. This class must have a `create` method that can be used without instantiating (static method), and that receives only the `id`, `username` and `name` parameters.
2. The value of `bio` should be the default for all `user` created.

Requirement 2: Add a new static method in `UserService` called `getInfo` that, when receiving an object of the `User` class, returns a list with all the values of the attributes of said object.

Requirement 3: Add a new static method in `UserService` called `updateUserUsername`, which receives an object of class `User` and a new string, which will update the value of `username`.

Requirement 4: Add a new static method in `UserService` called `getAllUsernames`, which will receive a list of objects of the `User` class, and return a list of all the usernames of those objects.

### ⭐️ Sprint 3: Add views
Create a class called `UserView` that will be used to interact with the `User` model through the `userService`. Create a method in this class called `create User` that is used to create a new user object from a `payload`, I mean an object that contains information to create it.

Requirements:
1. Validate that when sending a `null` value in the `payload`, it obtains an object with the key `error` and the value indicates `payload does not exist`.
2. Validates that a `payload` contains a `null` value in any of the keys `username`, `name`, or `id`. If there is a `null` value, it returns an object with the key `error` and indicating the text: `need to have a valid value`.
3. Validate that a `payload` with some of the necessary properties returns an object with the `error` key indicating `they need to have a valid value`.
4. Verify that a `User` object can be created, by sending a payload with the following properties: `username`, `id` and `name`.