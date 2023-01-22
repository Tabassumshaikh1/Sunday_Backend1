const  UserRole=require('../Model/userRole')
exports.GetUserRoleList=async (req, res)=> {
    let UserRoleList = await UserRole.find()
    if ( UserRoleList){ 
    res.send (UserRoleList)
  }
    else{
      res.send({ "err":1, "msg": " Data doesnot Exist"})
    }
  }

  exports.CreateUserRole=async (req,res)=>{
    const {name} = req.body
    const userrole = new UserRole({
       name : name,
      })
const role= await UserRole.findOne({name:name})
      if(role)
      {
        res.send({"err":1 , "msg": "User Role is Already Created"})
      }
      if(!role)
      {
        await userrole.save()

      res.send({"err":0 , "msg": "User Role is Created"})
      }
      
  }

  exports.UpdateUserRole=async (req,res)=>{
    let id = req.params.id
       let {status,name}= req.body;
    let UpdateUser= await UserRole.updateOne({_id:id},{$set:{'name':name,'status':status}})
    if (UpdateUser){
      res.send(UpdateUser)
    }
    else{
      res.send({ "err":1, "msg": " Data doesnot Exist"})
    }
  }
  exports.toggleRoleStatus= async(req, res)=>{
   
    let status=req.body.value
    
    let Isexist = await UserRole.findOneAndUpdate({ _id:req.body.userid }, { $set: {status} })
    if (Isexist) {
        res.send({ "err": 0, "msg": "user Status is updated" })
    }
    if (!Isexist) {
        res.send({ "err": 1, "msg": "user is not exist" })
    }
}