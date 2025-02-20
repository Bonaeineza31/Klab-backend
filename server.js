import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import mainRouter from './routes/indexRouting.js'
import bodyParser from 'body-parser';
dotenv.config();

// Get environment variables
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASS;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser,json());
app.use('/', mainRouter);

const dbUri = `mongodb+srv://${db_user}:${encodeURIComponent(db_pass)}@cluster0.qfmve.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set("strictQuery", false);

app.get('/', (req, res) => {
    res.send("this is my first project of node.js");
});

app.post('/postrequest', (req, res) => {
    res.send("Got a Post request");
});

mongoose
    .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
    })
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
        process.exit(1);
    });