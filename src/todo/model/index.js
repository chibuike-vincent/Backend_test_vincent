// import Sequelize from "sequelize";
// const Model = Sequelize.Model;

// class TodoModel extends Model {
//   static init(sequelize, DataTypes) {
//     return super.init(
//       {
//         id: {
//           allowNull: false,
//           autoIncrement: true,
//           primaryKey: true,
//           type: DataTypes.INTEGER
//         },
//         label: {
//           type: DataTypes.STRING,
//           allowNull: false
//         },
//         completed: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false
//           },
//         createdAt: {
//             type: DataTypes.DATE,
//             defaultValue: Date.now()
//           },
//           updatedAt: {
//             type: DataTypes.DATE,
//             defaultValue:Date.now()
//           }
//       },
//       {
//         sequelize,
//         modelName: "todo"
//       }
//     );
//   }
// }

// export default TodoModel;


import mongoose, { Schema } from 'mongoose';

/**
 * Todo Schema
 * */
const TodoSchema = new Schema(
    {
        label: {
            type: String,
            required:true
        },
        completed: {
            type: Boolean,
            default:false,
        },
    },
    {
        autoCreate: true,
        timestamps: true,
        toJSON: { virtuals: true },
    },
);

export const TodoModel = mongoose.model('Todo', TodoSchema);


