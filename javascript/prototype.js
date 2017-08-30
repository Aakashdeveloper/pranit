function Dog(breed){
    this.breed= breed;
};

Dog.prototype.bark = function(){
    console.log("hiiiiiii")
}

var buddy = new Dog("pug");
/*buddy.bark = function(){
    console.log("hiiiiii")
}*/


var snoopy = new Dog("lab");
/*snoopy.bark = function(){
    console.log("hiiiiii")
}
*/