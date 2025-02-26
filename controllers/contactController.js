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

export const getAllContact=async (req,res)=>{

    try{
          const contacts=await Contact.find();
          res.status(200).json({sucess:true,contacts})
        }
        catch(error)
    {
        res.status(500).json({success:false, message:'Server Error', error: error.message});
    }
}


export const getContactById=async(req,res)=>{
    try{
        const {id}=req.params;
        const contacts=await Contact.findById(id)
    if(!contacts){
        res.status(404).json({sucess:false,contacts,message:'Contact not found'})
    }
    res.status(200).json({sucess:true,contacts})
       }

        catch(error)
    {
        res.status(500).json({success:false, message:'Server Error', error: error.message});
    }
    
}




export const deleteContactById =async(req,res)=>{
    try{
        const {id}=req.params;
        const contacts=await Contact.findByIdAndDelete(id);
        if(!contacts){
            return res.status(404).json({sucess:false,contacts, message:'Didnt delete sucessfully'})
        }
        res.status(200).json({sucess:true,contacts})
       }

        catch(error)
    {
        res.status(500).json({success:false, message:'Server Error', error: error.message});
    }
    }

  export const updateContactById = async(req,res)=>{
        try{
            const {id}=req.params;
            const contacts=await Contact.findByIdAndUpdate(id, req.body, {new:true});
            if(!contacts){
                return res.status(404).json({sucess:false,contacts, message:'Contact not found'})
            }
            res.status(200).json({sucess:true,contacts})
        }
        catch(error)
        {
            res.status(500).json({success:false, message:'Server Error', error: error.message});
        }
    }


    