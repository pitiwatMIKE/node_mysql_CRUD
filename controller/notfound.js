const notFound = (req,res) =>{
    res.render('notfound',{
        data:{
            pageName:"NotFound",
            message:"NotFound 404"
        }
    });
}
module.exports.notFound = notFound;