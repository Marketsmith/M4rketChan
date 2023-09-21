const mongoose = require('mongoose');
const { userController } = require('../server/controllers/userControllers');
const { User, Item } = require('../server/models/usersModel');
const bcrypt = require('bcryptjs');

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

describe('Test userController : user signup', () => {
  it('User successfully passes in both username and password', async () => {
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
      password: undefined
    });

    // Call the signUp function
    await userController.signUp(req, res, next);

    // Assertions
    expect(res.locals.success).toBe(true);
    expect(res.locals.user.username).toBe('newuser');
    expect(res.locals.user.password).toBeUndefined();
    expect(next).toHaveBeenCalled();
  })
  it('Rejects incoming requests to make an account with pre-existing username', async () => {
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
    jest.spyOn(User, 'findOne').mockResolvedValue(true);

    // Call the signUp function
    await userController.signUp(req, res, next);

    // Assertions
    expect(res.locals.success).toBe(false);
    expect(res.locals.exists).toBe(true);
    expect(next).toHaveBeenCalledWith({
      log: 'username already exists, userController.signUp failed',
      message: 'username already exists, userController.signUp failed',
    });
  })

  it('Successfully signs up as a new user', async () => {
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
    jest.spyOn(User, 'findOne').mockResolvedValue(null);
    // Mock the User.create function to simulate successful user creation
    User.create = jest.fn().mockResolvedValue({
      username: 'newuser'
    });

    // Call the signUp function
    await userController.signUp(req, res, next);

    // Assertions
    expect(res.locals.success).toBe(true);
    expect(res.locals.user.username).toBe('newuser');
    expect(res.locals.user.password).toBeUndefined();
    expect(next).toHaveBeenCalled();
  })
});

describe('Test userController : login', () => {
  it('User successfully passes in both username and password', async () => {
    const req = {
      body: {
        username: 'username',
      }
    };
    const res = {};
    const next = jest.fn();
    await userController.login(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'props not passed into userController.login',
      message: 'props not passed into userController.login',
    });
  })

  it('res.locals.user is set to the input user when DB finds a match', async () => {
    const req = {
      body: {
        username: 'existingUser',
        password: 'existingPassword'
      }
    }

    const res = {
      locals: {}
    };

    const next = jest.fn();

    jest.spyOn(User, 'findOne').mockResolvedValue(true);
    await userController.login(req, res, next);
    expect(res.locals.user).toBe(true);
  })

  it('res.locals.success becomes false when the password is not hashed', async () => {
    const req = {
      body: {
        username: 'bill rodgers',
        password: 'password'
      }
    }
    const res = {
      locals: {}
    }
    const next = jest.fn();

    jest.spyOn(User, 'findOne').mockResolvedValue(true);
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);

    await userController.login(req, res, next);
    expect(res.locals.success).toBe(false);
  });


});