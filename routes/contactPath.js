import { CreateContact } from "../controllers/contactController.js";
import express from 'express';
const contactRouter = express();

contactRouter.post('/createContact', CreateContact);
export default contactRouter;