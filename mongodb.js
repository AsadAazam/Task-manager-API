const {MongoClient,ObjectID}=require('mongodb')
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
// const id= new ObjectID
// console.log(id)
// console.log(id.getTimestamp())
MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
if(error){
   return console.log('unable to connect to database')
}
console.log('connected corectly')
const db=client.db(databaseName)

// db.collection('users').insertMany([{
//      name:"Mudassir",
//      age:18
// },{
//     name:'Nazish',
//     age:25
// }
// ],(error , result)=>{
//     if(error)
//     {
//         return console.log('Couldnot insert')
//     }
//      console.log(result.ops)
// })
// db.collection('tasks').insertMany([{
//     description:"Buy fruits",
//     complete:true
// },{
//     description:"Go to gym",
//     complete:false
// },
// {
//     description:"Eat lunch",
//     complete:false
// }],(error,result)=>{
//     if(error)
//     {
//        return  console.log("Cant insert")
//     }
//     console.log(result.ops)
// })

// db.collection('users').findOne({name:'Nawaz', age:1},(error,user)=>{
//     if(error)
//     {
//         return console.log('Unable to connect')
//     }
//     console.log(user)

// })


// db.collection('users').findOne({_id: new ObjectID("5c97df38056eb8167cc0e1ef")},(error,user)=>{
//     if(error)
//     {
//         return console.log('Unable to connect')
//     }
//     console.log(user)

// })


// db.collection('users').find({age:22}).toArray((error,users)=>{
// console.log(users)
// })
// db.collection('users').find({age:22}).count((error,count)=>{
//     console.log(count)
//     })


// db.collection('tasks').findOne({_id:new ObjectID("5c97d10e383f2034a02bc5ad")},(error,task)=>{
//     console.log(task)
//      })
// db.collection('tasks').find({complete:false}).toArray((error,tasks)=>{
// console.log(tasks)
// })

// db.collection('users').updateOne({
//    _id: new ObjectID("5c97a6df574c8e11008afe33")
// },{
//    $inc:{
//       age:1
//    }
// }).then((result)=>{
//    console.log(result)
// }).catch((error)=>{
//    console.log(error)
//})
// db.collection('tasks').updateMany({
//    complete:false
// },{
//    $set:{
//       complete:true
//    }
// }).then((result)=>{
//    console.log(result)
// }).catch((error)=>{
//    console.log(error)
// })


// db.collection('users').deleteMany({
//    age:21
// }).then((result)=>{
//    console.log(result)
// }).catch((error)=>{
//    console.log(error)
// })

db.collection('tasks').deleteOne({
   description:"Go to gym"
}).then((result)=>{
   console.log(result)
}).catch((error)=>{
   console.log(error)
})

 })