import Contact from "../models/contactModal.js";

export const CreateContact = async(req, res)=>{
    try{
        const{
        email,
        subject,
        message,
        phone,
        status
        }=req.body;
        const newContact = new Contact({email, subject, message, phone, status});

        await newContact.save();

        res.status(201).json({success: true, message:'Contact created successfully', Contact: newContact});
    }

    catch(error){
        res.status(500).json({success:false, message:'Server Error', error: error.message});

}
}