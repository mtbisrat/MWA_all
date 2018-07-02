const express = require('express');
const myvalidator = require('./validator')
const app = express();
const router = express.Router();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

let myarray =[{
    id : 1,
    name : "Michael Bisrat",
    myclass : "Algorithm",
    grade : 95
}];


// ---------Geting users------------

router.route('/users')
.get((request, response) =>{
    response.json(myarray);
});

// ------Submit data --------------
router.route('/users')
.post((request, response)=>{
   
    let checkError = myvalidator.validateMyData(request.body,"id", "name", "myclass", "grade");
    if(checkError.error){
        response.status(400).json(checkError.error.details[0].message);
        return;
    }
    let dataToSubmit = {
        id : request.body.id,
        name : request.body.name,
        class : request.body.myclass,
        grade : request.body.grade
    }
    myarray.push(dataToSubmit);
    response.json("Data inserted Successfully");
});

// -------Get specfici-vali- user -----------
router.route('/users/:id')
.get((request, response)=>{
    let searchId = request.params.id;
    let searchData = myarray.filter(data => data.id == searchId);
    if(JSON.stringify(searchData) === '[]'){
        response.json("No Record Found");
    }else{
        response.json(searchData);
    }
})

// ------Delete the specific user ----------
router.route('/users/:id')
.delete((request, response)=>{
    let deleteId = request.params.id;
    let arrayAfterRemove = myarray.filter(obj => obj.id != deleteId);
    myarray = arrayAfterRemove;
    response.json("Object deleted successfully!!!")
})

// ------Update the specific user --------
router.route('/users/:id')
.put((request, response)=>{
    let checkError = myvalidator.validateMyData(request.body,"name", "myclass", "grade");
    
    if(checkError.error){
        response.status(400).json(checkError.error.details[0].message)
        return
    }
    let updateId = request.params.id;
    if(updateId != -1){
    let indexOfObject = myarray.findIndex(data => data.id == updateId);
    myarray[indexOfObject].name = request.body.name;
    myarray[indexOfObject].class = request.body.myclass;
    myarray[indexOfObject].grade = request.body.grade;
    response.json("Data Updated Successfully!!!");
    }else{
        response.json("Unable to find the Object");
    }
})
app.use('/api', router);
app.listen(4000, ()=>{console.log("Server is starting at port 4000!!!!")})