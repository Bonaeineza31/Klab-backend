export const admin =(req,res,next) =>{
    if(req.userRole !=="admin"){
        return res.status(403).json({message :"Access denied contact Admin Please!"})
    }
    next()
};