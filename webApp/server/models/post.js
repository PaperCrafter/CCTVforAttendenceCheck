module.exports = (sequelize, DataTypes)=>(
    sequelize.define('Post',{
        Date:{
            type: DataTypes.DATE(),
            allowNull: false,
        },
        Time:{
            type:DataTypes.TIME(),
            allowNull: false,
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