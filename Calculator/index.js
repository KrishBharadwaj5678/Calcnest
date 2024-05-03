// Gsap

let t=gsap.timeline();

t.from("div.main-box",{
    x:-20,
    opacity: 0,
    delay: 0.4,
    duraton: 0.5
})


t.from("button",{
    opacity: 0,
    duraton: 0.1,
    y: 80,
    stagger: 0.1

})

// If Enter Key is Pressed,then call calculate Function

window.addEventListener('keydown',(e)=>{
    if(e.key=="Enter"){
        calculate();
    }
})

// Input Box
let input=document.querySelector("input.input_box");

// Click 1
let audio1=new Audio();
audio1.src="click1.mp3";

// Click 2
let audio2=new Audio();
audio2.src="click2.mp3";


// C Button

function remove(data){
    let input_box_data=input.value;
    let input_box_length=input.value.length;
    input.value=input_box_data.slice(0,input_box_length-1);
    audio2.play();
}

// Function For Calculating i.e '=' Button

function calculate(){
    try{
        audio1.play();
        let cal=eval(input.value);
        let strConvert=cal.toString();
        if(strConvert.includes(".")){
            input.value=cal.toFixed(4);
        }
        else{
            input.value=cal;
        }
    }
    catch(error){
        audio1.play();
        input.value="Invalid!";
    }
    
    
}

// All Keys Sound Effect except '='

function put(key){

    if(key=='AC'){
        input.value="";
    }
    else{
        input.value+=key;
    }
    audio2.play();


}
