const login = (req,res)=>{
    res.json({
     msg: 'Login post',
    });
};

const register = (req,res)=>{
    res.json({
     msg: 'Register post',
    });
};

module.exports = {
    login, 
    register
}