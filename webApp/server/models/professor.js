module.exports = (sequelize, DataTypes)=>(
    sequelize.define('professor',{
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