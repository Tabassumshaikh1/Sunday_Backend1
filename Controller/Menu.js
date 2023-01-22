const Module = require('../Model/Module');

exports.CreateModules = async (req, res)=>{
    
   
   const modulename= await Module.findOne({name: req.body.name })
    if (modulename)
    {
        res.send({ 'err': "1", "msg": 'Module is Already exist'})
        
    }
    else
    {
         const menu = new Module({
        ...req.body
    })

        await menu.save();
        res.send({ 'err': "0", "msg": 'Module is Added successfully'})
        }

}

exports.GetModuleList = async (req, res) => {
    let data = await Module.find()
    res.send(data);
}

exports.UpdateModule = async (req, res) => {
    const { id, name, role } = req.body
    await Module.findByIdAndUpdate({ _id: id }, { $set: { name, role } })
res.send({ 'err': "0", "msg": 'Module is Updated successfully'})
}