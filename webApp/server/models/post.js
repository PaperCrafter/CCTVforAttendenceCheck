module.exports = (sequelize, DataTypes)=>(
    sequelize.define('post',{
        Date:{
            type: DataTypes.DATE(),
            allowNull: false,
            defaultValue:Date(),
        },
        Time:{
            type:DataTypes.TIME(),
            allowNull: false,
            defaultValue:(new Date()).getTime(),
        },
        Body:{
            type:DataTypes.STRING(100),
            allowNull: true,
        },
        ImgBefore:{
            type:DataTypes.STRING(100),
            allowNull: true,
        },
        ImgAfter:{
            type:DataTypes.STRING(100),
            allowNull: true,
        }
    },{
        timestamps: true,
        paranoid:true,
    })
);