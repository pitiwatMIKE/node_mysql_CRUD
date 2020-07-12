const register = (req,res) =>{
    res.render('register',{
        data:{
            pageName:'Register'
        }
    });
}
module.exports.register = register;