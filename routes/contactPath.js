import { CreateContact, getAllContact,getContactById,deleteContactById,updateContactById } from "../controllers/contactController.js";
import express from 'express';
import { admin } from "../middlewares/roleIdentification.js";
import{auth} from "../middlewares/tokenVerification.js"



const contactRouter = express();

contactRouter.post('/createContact', CreateContact);
contactRouter.get("/getAllContact",auth,admin,getAllContact);
contactRouter.get("/getContactById/:id",getContactById);
contactRouter.delete("/deleteContactById/:id",admin,auth,deleteContactById);
contactRouter.put("/updateContactById/:id", updateContactById);


export default contactRouter; 