 
/*code to display output on the page*/
/*function to be called after taking and submitting the input*/
function getInfo()
{
    //taking an input from the user
    var n=document.getElementById("name").value;
    var h=document.getElementById("height").value;
    //creating an object using object constructor 
    var createObject = {
        //we can't use this to initialize object properties,but this can be used to call methods.
        name:n,
        height:h,
        //method in a object constructor
        aboutYourSelf: function() {
        return"I am "+this.name+".I am "+this.height+" cm height";
         }
        };
    // construstor function is called using new keyword.
    //var me = new createObject(name, height);
    var me=createObject;
    // displaying the out put o the page
    document.getElementById("display").innerText=me.aboutYourSelf();
    //displaying the type of constructor in html page
    document.getElementById("constructor").innerText=createObject.constructor;


}

//Code for output on console after taking input from the user
//taking an input from the user
/*var n=window.prompt("enter uour name");
var h=window.prompt("enter ur height");
//creating an object using object constructor 
var createObject = {
    name:n,
    height:h,
    aboutYourSelf: function() {
    return"I am "+this.name+".I am "+this.height+" cm height";
     }
    };
     var me=createObject;
     console.log(me.aboutYourSelf());*/

//Constructing an Object with a Constructor Function
/*function createObject(n,h) 
{
    //Within the constructor function, the object that is being created is refered as this.When function
     //is called using new, inside that function, a new, empty object is created and the this keyword is 
    //set to that object.Then this is used to set the values of the properties in that object.
        this.myName = n;
        this.myHeight =h;
    //Functions are called methods when they are inside an object.Here aboutYourSelf is a method
        this.aboutYourSelf = function() {
    //At the end of the function, nothing has to explicitly return the object which is created. It is
    //automatically done by JS because the function is called using new keyword. The object that is returned is
    //this:
       
        document.getElementById("display").innerText= "I am "+this.myName+".I am "+this.myHeight+" cm height";
    
    };
}*/
   
   /*--------------------------------------------------------------------------------------------------*/
    //Code for output on console after taking input from the user
    //Constructing an Object with a Constructor Function
   /*function createObject(name, height) 
   {
            //Within the constructor function, the object that is being created is refered as this.When function
            // is called using new, inside that function, a new, empty object is created and the this keyword is 
            //set to that object.Then this is used to set the values of the properties in that object.
        this.name = name;
        this.height =height;
            //Functions are called methods when they are inside an object.Here aboutYourSelf is a method
        this.aboutYourSelf = function() {
            //At the end of the function, nothing has to explicitly return the object which is created. It is
            //automatically done by JS because the function is called using new keyword. The object that is returned is
            // this:
        console.log("I am "+this.name+".I am "+this.height+" cm height");
         };
    }
    //taking an input from the user
        var n=window.prompt("enter uour name");
        var h=window.prompt("enter ur height");
        var me = new createObject(n, h); // construstor function is called using new keyword.
        console.log( me.aboutYourSelf());*/
    
   