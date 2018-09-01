const yargs = require("yargs");
const nhap = require("readline-sync");
const fs = require("fs");
const rd = require("randomstring");
var arr=[];


    var argv = yargs.argv;
    var command = argv._[0];
    
    if(command == "a" )
    {
        
        // add a contact
        try {
            var val=fs.readFileSync("data.json");
            arr = JSON.parse(val);
        } catch(e) {}
        
        var id= rd.generate(20);
        var firstname = nhap.question("? Enter firstname .. ");
        var lastname = nhap.question("? Enter lastname .. ");
        var phone = nhap.question("? Enter phone number .. ");
        var email = nhap.question("? Enter email address .. ");
        var text = {"id: ":id,"firstname: ": firstname,"lastname: ":lastname,"phone: ":phone,"email: ":email};
        arr.push(text);
        
        fs.writeFile('data.json',JSON.stringify(arr), function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("New contact added");
        });
    }
    else if(command == "r")
    {
        var val=fs.readFileSync("data.json");
        arr = JSON.parse(val);
       var name = nhap.question("Nhap ten can lay:");
        for(var i=0;i<arr.length;i++){
            if(arr[i]['firstname: '] == name)
                console.log(arr[i]);
        }
        
    }
    else if(command == "u")
    {
        //update
        var val=fs.readFileSync("data.json");
        arr = JSON.parse(val);
        var maid = nhap.question("Nhap id can update:");
        for(var i=0;i<arr.length;i++){
            if(arr[i]['id: '] == maid){
                arr[i]['firstname: ']=nhap.question("Enter new first name .. "); 
                arr[i]['lastname: ']=nhap.question("Enter new last name .. ");
                arr[i]['phone: ']=nhap.question("Enter new phone number .. ");
                arr[i]['email: ']=nhap.question("Enter new email .. ");
                fs.writeFile('data.json',JSON.stringify(arr), function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("Update thanh cong");
                });
                break;
            }
            if(i==arr.length-1)
                console.log("Khong tim thay id");
        }
    }
    else if(command == "d")
    {
        //delete
        var val=fs.readFileSync("data.json");
            arr = JSON.parse(val);
        var maid = nhap.question("Nhap id can xoa:");
        for(var i=0;i<arr.length;i++){
            if(arr[i]['id: '] == maid){
                arr.splice(i,1);
                fs.writeFile('data.json',JSON.stringify(arr), function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("Xoa thanh cong");
                });
                break;
            }
            if(i==arr.length-1)
                console.log("Khong tim thay id");
        }


    }
    else if(command == "l")
    {
        try {
            var val=fs.readFileSync("data.json");
            arr = JSON.parse(val);
            console.log(arr);
        } catch(e) {
            console.log("Ban chua nhap nguoi nao");
        }
    }
    else if(command == "" || command == null)
    {
        console.log("   addContact|a            Add a contact");
        console.log("   getContact|r (name)     Get contact");
        console.log("   updateContact|u <id>    Update contact");
        console.log("   deleteContact|d <id>    Delete contact");
        console.log("   listContact|l           List contact");
    }   
    else
        console.log("Command not found");
        
