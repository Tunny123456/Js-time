<<<<<<< HEAD
// let name =prompt("WHAT IS YOUR NAME")
// let greetings=document.getElementById('greet')
// greetings.innerText = ['GOOD DAY'+ '-' + name]





// let num = parseInt(prompt('ENTER NUMBER'))
// let Num = parseInt(prompt('ENTER NUMBER'))

// if (num ==0) {
// 	('you are even ')
// }
// else if ( num !=0) {
// 	('you are odd')
// }


 let num =parseInt(prompt('Enter num'))
 // let Num =parseInt(prompt('Enter num'))
 console.log(num)

   if( num  %2  ){
    alert("odd")
  }
  else if( num !=0){
    alert("even")
  }

 // let numoutput=document.getElementById("number");
 //      var nmbr = 156;
 //      if(nmbr % 2 == 0)
 //         numoutput.innerHTML = nmbr + " is Even";
 //      else
 //         numoutput.innerHTML = nmbr + " is Odd";




let myDate=new Date()


// for years
let dayOfMonth = myDate.getDate();
let monthOfYear = myDate.getMonth()+1;
let myYear = myDate.getFullYear();
let completeDate = [dayOfMonth + '/' + monthOfYear + '/' + myYear]



let TimeHours=myDate.getHours()
let TimeMinutes=myDate.getMinutes()
let TimeSeconds=myDate.getSeconds()
let completeTime=[TimeHours + ' : '+ TimeMinutes]

// 


let userInput=prompt('What is your name')

document.getElementById('user-name').innerText=userInput


let NewStyle = document.getElementById('user-name').style.color='red'

// html varables for id


let greetings= document.getElementById('greet')
greetings.innerHTML= ['how was your day' ]

let Timing= document.getElementById('time')
Timing.innerHTML= completeTime

let dayDate= document.getElementById('date')
dayDate.innerHTML= completeDate

if(TimeHours < 12 ){
	greetings.innerText='Good Morning';
	document.getElementById('lound').style.size='200'

} else if (TimeHours > 12 && TimeHours < 16){
	greetings.innerText='Good Afternoon' 
}else if (TimeHours >=16){
	greetings.innerText='Good Evening' 
} 







=======
// let name =prompt("WHAT IS YOUR NAME")
// let greetings=document.getElementById('greet')
// greetings.innerText = ['GOOD DAY'+ '-' + name]





// let num = parseInt(prompt('ENTER NUMBER'))
// let Num = parseInt(prompt('ENTER NUMBER'))

// if (num ==0) {
// 	('you are even ')
// }
// else if ( num !=0) {
// 	('you are odd')
// }


 let num =parseInt(prompt('Enter num'))
 // let Num =parseInt(prompt('Enter num'))
 console.log(num)

   if( num  %2  ){
    alert("odd")
  }
  else if( num !=0){
    alert("even")
  }

 // let numoutput=document.getElementById("number");
 //      var nmbr = 156;
 //      if(nmbr % 2 == 0)
 //         numoutput.innerHTML = nmbr + " is Even";
 //      else
 //         numoutput.innerHTML = nmbr + " is Odd";




let myDate=new Date()


// for years
let dayOfMonth = myDate.getDate();
let monthOfYear = myDate.getMonth()+1;
let myYear = myDate.getFullYear();
let completeDate = [dayOfMonth + '/' + monthOfYear + '/' + myYear]



let TimeHours=myDate.getHours()
let TimeMinutes=myDate.getMinutes()
let TimeSeconds=myDate.getSeconds()
let completeTime=[TimeHours + ' : '+ TimeMinutes]

// 


let userInput=prompt('What is your name')

document.getElementById('user-name').innerText=userInput


let NewStyle = document.getElementById('user-name').style.color='red'

// html varables for id


let greetings= document.getElementById('greet')
greetings.innerHTML= ['how was your day' ]

let Timing= document.getElementById('time')
Timing.innerHTML= completeTime

let dayDate= document.getElementById('date')
dayDate.innerHTML= completeDate

if(TimeHours < 12 ){
	greetings.innerText='Good Morning';
	document.getElementById('lound').style.size='200'

} else if (TimeHours > 12 && TimeHours < 16){
	greetings.innerText='Good Afternoon' 
}else if (TimeHours >=16){
	greetings.innerText='Good Evening' 
} 







>>>>>>> 1f715d8bcd94afa32771026f1160bbcfa733aa93
