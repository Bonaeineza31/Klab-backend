import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    },
    userPassword: {
      type: String,
      required: true
    },
    userRole: {
      type: String,
      required: false,
      default: "user",
      enum: ["user", "admin"]
    },
    tokens: {
      accessToken: {
        type: String,
        default: ""
      }
    }
  }
);

// Export the model
const User = model("User", userSchema);
export default User;