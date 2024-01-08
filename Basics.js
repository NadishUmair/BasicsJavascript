


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



// ################## factorial of number #######################
// function findfactorial(getnum){

//   let b=1;
//     for(var i=getnum;i>=1;i--){
      
//        b *=i;
    
//     }
//    return b;
// }

// let a=5;
// let result=findfactorial(a);
// console.log(result)


// ################### palindrome ####################

// function ispalindrome(getstr){
//       let newstr='';
//     for(var i=getstr.length-1;i>=0;i--){
//       newstr +=getstr[i];
//     }
  
//   if(getstr===newstr){
//     console.log('is palindrome')
//   }else{
//     console.log('not palindrome');
//   }
//   return newstr;
// }
// let str="level"
// let result=ispalindrome(str)



// function convert(getarray){
//    console.log(getarray);
//    let reversed = "";
    // for(let i = getarray.length; i>=1 ; i--){
    //     reversed += getarray[i-1];
    // }
    // for(let i of getarray)
    // {
    //     reversed += i
    // }
    // let i=getarray.length
    // while(i>=1){
    //     reversed += getarray[i-1];
    //     i--;
    // }

//     let i=getarray.length
//     do {
//         reversed += getarray[i-1];
//         i--;

//     } while (i>0);
//    return reversed;
// }
// let array=['a','b','c','h','k'];
// console.log(convert(array));



// function calculate(width,height){
//    return width*height
// }
// console.log(calculate(6,7))


// function findDuplicate(getarray){
// var newarray=[""]
//     for(let i=0;i<getarray.length;i++){
//        for(let n=i+1;n<getarray.length;n++){
//            if(getarray[i]==getarray[n]){
//            newarray +=getarray[i];
//            }
//        }
//     }
//     return newarray;
// }
// let array=[1,3,4,5,6,7,3,2,4]
// console.log(findDuplicate(array))


// faltten Array 
// function flattenArray(getarray){
//     var makearray=[];
//    for(i=0;i<getarray.length;i++){
//     if(Array.isArray(getarray[i])){
//         let nestedfirst=getarray[i]
//     for(n=0;n<nestedfirst.length;n++){
//         let secondnested=nestedfirst[n];
//         if(Array.isArray(secondnested)){
//             for(m=0;m<secondnested.length;m++){
//                 makearray.push(secondnested[m]);
//             }
//         }else{
//             makearray.push(nestedfirst[n])
//         }
//     }
//     }else{
//         makearray.push(getarray[i]);
//     }
//    }
//    return makearray;
// }
// let array=[1,[2,[3,4],5],6];
// console.log(flattenArray(array))

// sum of all numbers of array
// function sumarray(getarray){
//     var newarray=0;
//    for(let i=0;i<getarray.length;i++){
//        newarray +=getarray[i];

//    }
//    return newarray;
// }

// let array=[2,3,4,5,6];
// console.log(sumarray(array))

// using reduced in js

// function sumarray(getarray){
//     const sum=getarray.reduce((a,b)=>{
//         return a+b

//     })
//     return sum;
// }
// let array=[2,3,5,6,7,8];
// console.log(sumarray(array))

// check vowels in string

// function checkvowels(getstr){
//     var vowels='';
//     let count=0;
//    for(let i=0;i<getstr.length;i++){
//       if(getstr[i]=== 'a' || getstr[i]==='e' || getstr[i]==='i'|| getstr[i]=== 'o'||getstr[i]=== 'u'){
//           vowels +=getstr[i];
//           count++;
//       }
//    }
//    return {vowels,count};
// }
// let str='my name is nadish umair';
// console.log(checkvowels(str).vowels)
// console.log(checkvowels(str).count)