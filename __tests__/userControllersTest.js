const mongoose = require('mongoose');
const {userController} = require('../server/controllers/userControllers');
const { User, Item } = require('../server/models/usersModel');

// Connect to MongoDB before running tests
beforeAll(async () => {
  const MONGO_URI = "mongodb+srv://gmogi92:basketball123@cluster0.jtsrl7y.mongodb.net/"; 
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to Mongo DB Test.');
});

// Disconnect from MongoDB after running tests
afterAll(async () => {
  await mongoose.disconnect();
  console.log('Disconnected from Mongo DB Test.');
});

describe('Test userController : user signup', () =>{
  it ('User successfully passes in both username and password', async () => {
    // Create a mock request and response object
    const req = {
      body: {
        username: 'newuser',
        password: 'newpassword',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

     // Mock the User.create function to simulate successful user creation
     User.create = jest.fn().mockResolvedValue({
      username: 'newuser',
    });

     // Call the signUp function
     await userController.signUp(req, res, next);

      // Assertions
    expect(res.locals.success).toBe(true); 
    expect(res.locals.user.username).toBe('newuser');
    expect(res.locals.user.password).toBeUndefined();
    expect(next).toHaveBeenCalled(); 
  })
  it ('Successfully signs up : No existing users ', async () => {
    // Create a mock request and response object
    const req = {
      body: {
        username: 'existinguser',
        password: 'newpassword',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

     // Mock the User.findOne function to simulate no existing users
     
    // User.findOne = jest.fn().mockResolvedValue(true);
    jest.spyOn(User, 'findOne').mockResolvedValue(null);

     // Call the signUp function
     await userController.signUp(req, res, next);

      // Assertions
    expect(res.locals.success).toBe(true); 
    expect(next).toHaveBeenCalled(); 
  })

  it ('Successfully signs up as a new user', async () => {
    // Create a mock request and response object
    const req = {
      body: {
        username: 'newuser',
        password: 'newpassword',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

     // Mock the User.create function to simulate successful user creation
     User.create = jest.fn().mockResolvedValue({
      username: 'newuser',
    });

     // Call the signUp function
     await userController.signUp(req, res, next);

      // Assertions
    expect(res.locals.success).toBe(true); 
    expect(res.locals.user.username).toBe('newuser');
    expect(res.locals.user.password).toBeUndefined();
    expect(next).toHaveBeenCalled(); 
  })
})