import Contact from "../models/contactModal.js";

export const CreateContact = async(requestAnimationFrame, res)=>{
    try{
        const{names, email, subject, message, phone, status} = requestAnimationFrame.body;
        const newContact = new Contact({names, email, subject, message, phone, status});

        await newContact.save();

        res.status(201).json({success: true, message:'Contact created successfully', Contact: newContact});
    }

    catch(error){
        res.status(500).json({success:false, message:'Server Error', error: error.message});

    }
}