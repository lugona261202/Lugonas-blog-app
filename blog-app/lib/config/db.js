import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://lugona:121422@cluster0.bkycjao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog-app');
    console.log("DB Connected");
}