const home = (req,res)=>{
    res.render('home',{
        data:{
            pageName:'Home',
            message:'Home Page'
        }
    });
}
module.exports.home = home;