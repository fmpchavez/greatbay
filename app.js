var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    database:"greatbay_db"
})

connection.connect(function(err){
    console.log("Connected as id: "+connection.threadId);
    start();
})

var start = function(){
    inquirer.prompt({
        name:"postOrBid",
        type:"rawlist",
        message:"Would you like to [POST] an auction or [BID] on an auction?",
        choices:["POST","BID"]
    }).then(function(answer){
        if(answer.postOrBid.toUpperCase()=="POST"){
            //postAuction();
        } else {
            //bidAuction();
        }
    })
}

var postAuction = function(){
    inquirer.prompt([{
        name:"item",
        type:"input",
        message:"What is the item you wish to submit?"
    }, {
        name:"category",
        type:"input",
        message:"what category would you like to place it in?"
    },{
        name:"startingBid",
        type:"input",
        message:"what would you like the starting bid to be?",
        validate: function(value){
            if(isNaN(value)==false){
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer){
        connection.query("INSERT INTO auctions SET ?", {
            itemname:answer.item,
            category:answer.category,
            startingbid:answer.startingBid,
            highestbid:answer.startingBid
        },function(err,res){
            console.log("Your auction was created successfully!");
            start();
        }) 
    }) //the above code sends query to mysql adding item to db
}