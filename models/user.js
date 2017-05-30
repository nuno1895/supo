module.exports = function(sequelize, Sequelize) {
 
// The next thing we are going to do is create the user model, which is basically the user table. This will contain basic user information.

// In our models folder, we create a file and name it user.js. The full path for this file should be app/models/user.js.
  var User = sequelize.define('User', {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    firstname: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    lastname: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    username: {
        type: Sequelize.TEXT
    },

    about: {
        type: Sequelize.TEXT
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    last_login: {
        type: Sequelize.DATE
    },

    status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
  });

  return User;  
}
