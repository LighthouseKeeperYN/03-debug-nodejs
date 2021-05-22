const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'ghastb0i', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

sequelize.import('project', (sequelize, DataTypes) => {
  return sequelize.define('project', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  });
});

module.exports = sequelize