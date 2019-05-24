module.exports = (sequelize, DataTypes)=>(
    sequelize.define('lectures',{
        LectureName:{
            type: DataTypes.STRING(20),
            allowNull: false,
            unique:true,
        },
        StudentNumber:{
            type:DataTypes.INTEGER(3),
            allowNull: false,
        },
        CurrentNumber:{
            type:DataTypes.INTEGER(3),
            allowNull: true,
        },
        ProperNumber:{
            type:DataTypes.INTEGER(3),
            allowNull: true,
        },
    },{
        timestamps: true,
        paranoid:true,
    })
);