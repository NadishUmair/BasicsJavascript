


//  ################## ecapsulation #######################
// class wildlife
// {
//     constructor(name,type,living)
//     {
//         this.name=name;
//         this.type=type;
//         this.living=living;
//     }
//    detail(animalsdetail){
          
//         console.log("this is",this.name);
//         console.log(this.type);
//         console.log(this.living);
//         console.log('deatailof animals')

//    }
// }
// let crow=new wildlife ( 'crow','bird',  'villages' );
// let dog =new wildlife ('dog','Animal', 'fields' );
// crow.detail();
// dog.detail();



// class Animal{
//     constructor(){
//         console.log("sounds of animals")
//     }
//     makesound(){
//         console.log('aimal make sound')
//     }
// }

//  ############# polymorphism ###############
// class dog extends Animal{
//     makesound(){
//         console.log("bark")
//     }
// }
// class cow extends Animal{
//     makesound(){
//         console.log("cow sound ")
//     }
// }

// let sound=new dog();
// sound.makesound();


// ############################ Abstruction ##############################
// class Art{
//     constructor(color){  
//         this.color=color;
//     }
//     draw(){
//         console.log("draw a shape type")
//     }
// }
// class circle extends Art{
//     constructor(color,radius){
//         super(color)
//         this.radius=radius
//     }
//     draw(){
//         console.log(`this art color ${this.color} and this is the radius ${this.radius}`)
//     }
// }
// let otherelements=new Art('white')
// otherelements.draw();
// let elements=new circle('200px');
// elements.draw();



// ##################### inheritence ############################
// class animal{
//     constructor(name){
//     this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} is speak`)
//     }
// }


// class dog extends animal{
//     constructor(name,breed){
//         super(name);
//         this.breed=breed;
//     }
//     sound(){
//         console.log(`${this.name} of breed ${this.breed} is bark loduely`)
//     }
// }

// let a=new animal('tommy');
// a.speak();
// let b=new dog('tommy','German Sheperd')
// b.sound();



// callback function k andr function hota ha
// function mainfunction(mecallback){
//     setTimeout(()=>{
//         console.log("main function")
//         mecallback();
//     },2000)
// }

// function callback(){
//     console.log('call back is executed')
// }

// mainfunction(callback);

// ################ Promise ###########################
// new Promise((res,rej)=>{
//     setTimeout(()=>{
//           const succes=false;
//           if(succes){
//             res('succcefully  fetched')
//           }else{
//             rej('error in fetching')
//           }
//     },2000)
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error);
// })


// let a=6;
// let fact=1;
// for(let i=fact;i<=a;i++){
//     fact *=i

// }
// console.log(fact);

// ########################## factorial ##########################
// function factorial(getinput){
//     let fact=1;
//     for(let i=fact;i<=getinput;i++)
//     {
//         fact *=i;
        
//     }
//     console.log(fact);
// }
// let input=8;
// factorial(input);


// function secondlargest(getarray){
//    getarray.sort(function(a,b){
//      return b-a;
//    })
//    return getarray[1]
   
// }
// let array=[4,5,6,7,8,5,10,56]

// let largest=secondlargest(array)
// console.log(largest);

// Reverse String

// function Reverse(getstring){
//   var split=getstring.split("")
//   console.log(split);
//   var reverse=split.reverse();
//   console.log(reverse);
//   var join=reverse.join("");

//   console.log(join);
// }
// let a="hello,world!"
// Reverse(a);


// function reverse(getstr){
//   var newstring=""
//   for(var i=getstr.length-1;i>0;i--){
//     newstring +=getstr[i]
   
//   }
//   return newstring;
// }

// let a="hello";
// let result=reverse(a);
// console.log(result);


// function reverse(getstr){
//  if(getstr===""){
//     return "";
//  }else{
//      return reverse(getstr.substr(1))+getstr.charAt(0)
//     // console.log(getstr.substr(1))
//     // console.log(getstr.charAt(0))
//     // console.log(reverse(getstr.substr(1)+getstr.charAt(0)))
//  }
// }

// let a="hello";
// let result=reverse(a)
// console.log(result);



// function sum(a,b){
//     return a+b;
// }
// let result=sum(2,3);
// console.log(result);

// array reverse
// function reverse(getstr){
//    var newstr=""
//    for(var i=getstr.length-1;i>=0;i--){
//     newstr+=getstr[i];
  
//    }
//    return newstr;
// }

// let result=reverse("helloworld")
// console.log(result);

// sum of array variables
// function sum(getarray){
//     let a=0;
//  for(let i=0;i<=getarray.length-1;i++){
//     a +=getarray[i];

//  }
//  return a;
// }
// let array=[2,5,6,7,8]
// let result=sum(array);
// console.log(result)


// find vowels

// function findvowels(getstr){
//     var split=Array.from(getstr);
  
// for(var i=0;i<=split.length-1;i++){
//    if(split[i].toLowerCase()==='a' ||split[i].toLowerCase()==='e' 
//    ||split[i].toLowerCase()==='i' ||split[i].toLowerCase()==='o' ||
//    split[i].toLowerCase()==='u' ){
//    console.log(split[i]);
//    }
// }
// }
// let a='nadishumar'
// findvowels(a);

// array of strings used to get length of string to make new array
// function greaterstring(getarray){
//     var a=6;
//     var newarray=[]
//     for(let i=0;i<=getarray.length-1;i++){
        
//         if(getarray[i].length===a){
//             console.log(getarray[i])
//             newarray.push(getarray[i])
//         }
//     }
//     console.log(newarray);
// }
// let array=['nadish','umair','Umt','student','school','first','nation','pattoki'];
// greaterstring(array);


// function checknumber(getnum){
//    if(getnum%2===0){
//     console.log('even number')
//    }else{
//     console.log('odd number')
//    }
// }
//  let a=0;
//  checknumber(a)

// revers a sentence 
// function revSentence(getstr){
//     var newstr='';
//  for(var i=getstr.length-1;i>=0;i--){
    
//     newstr +=getstr[i];
//  }
//  console.log(newstr);
// }
// let a="Certainly! Here's another JavaScript question for you:"
// revSentence(a);