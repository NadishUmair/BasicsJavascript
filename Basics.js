


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
