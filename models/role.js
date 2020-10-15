module.exports = function(sequelize, DataTypes) {
    const userTable = sequelize.define('userTable', {
        UserPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        PhoneNum: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
        }
        },
        ZipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        Role: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, 
        timestamps: true,
        createdAt: true  
    });
    userTable.associate = function(models) {
        userTable.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return userTable
}