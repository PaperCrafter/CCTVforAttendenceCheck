module.exports = (sequelize, DataTypes)=>(
    sequelize.define('student',{
        professorNo:{
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        Name:{
            type:DataTypes.STRING(),
            allowNull: false,
        },
    },{
        timestamps: true,
        paranoid:true,
    })
);