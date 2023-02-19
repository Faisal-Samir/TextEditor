let no = 0;
document.getElementById('bold').addEventListener('click',function(){
    no += 1;
    if(no % 2 == 1){
        const textArea = document.getElementById('textEditor');
        textArea.style.fontWeight = "700";
        const boldB = document.getElementById('boldB');
        boldB.style.backgroundColor = 'rgba(201, 76, 76, 0.3)';
    }
    else{
        const textArea = document.getElementById('textEditor');
        textArea.style.fontWeight = "400";
        const boldB = document.getElementById('boldB');
        boldB.style.backgroundColor = 'white';
    }
})

document.getElementById('italic').addEventListener('click',function(){
    no += 1;
    if(no % 2 == 1){
        const textArea = document.getElementById('textEditor');
        textArea.style.fontStyle = "italic";
        const boldB = document.getElementById('italicI');
        boldB.style.backgroundColor = 'rgba(201, 76, 76, 0.3)';
    }
    else{
        const textArea = document.getElementById('textEditor');
        textArea.style.fontStyle = "normal";
        const boldB = document.getElementById('italicI');
        boldB.style.backgroundColor = 'white';
    }
})

document.getElementById('underline').addEventListener('click',function(){
    no += 1;
    if(no % 2 == 1){
        const textArea = document.getElementById('textEditor');
        textArea.style.textDecoration = "underline";
        const boldB = document.getElementById('underlineU');
        boldB.style.backgroundColor = 'rgba(201, 76, 76, 0.3)';
    }
    else{
        const textArea = document.getElementById('textEditor');
        textArea.style.textDecoration = "none";
        const boldB = document.getElementById('underlineU');
        boldB.style.backgroundColor = 'white';
    }
})
// alignment start
document.getElementById('leftAlign').addEventListener('click',function(){
    
    const textArea = document.getElementById('textEditor');
    textArea.style.textAlign  = "left";
})
// alignment center
document.getElementById('centerAlign').addEventListener('click',function(){
    const textArea = document.getElementById('textEditor');
    textArea.style.textAlign  = "center";
})
// alignment right
document.getElementById('rightAlign').addEventListener('click',function(){
    const textArea = document.getElementById('textEditor');
    textArea.style.textAlign  = "right";
})
// alignment justify
document.getElementById('justifyAlign').addEventListener('click',function(){
    const textArea = document.getElementById('textEditor');
    textArea.style.textAlign  = "justify";
})

document.getElementById('fontSize').addEventListener('input',function(event){
    
    const fontSizeField = document.getElementById('fontSize');
    const fontsize = fontSizeField.value + "px";
       
    const textArea = document.getElementById('textEditor'); 
    textArea.style.fontSize = fontsize;
})

document.getElementById('upperCase').addEventListener('click',function(){
    no += 1;
    if(no % 2 == 1){
        const textArea = document.getElementById('textEditor');
        textArea.style.textTransform  = "uppercase";
        const boldB = document.getElementById('upperCase');
        boldB.style.backgroundColor = 'rgba(201, 76, 76, 0.3)';
    }
    else{
        const textArea = document.getElementById('textEditor');
        textArea.style.textTransform = "initial";
        const boldB = document.getElementById('upperCase');
        boldB.style.backgroundColor = 'white';
    }
})

document.getElementById('colorPicker').addEventListener('input',function(){
    const textArea = document.getElementById('textEditor');
    const textColor = document.getElementById('colorPicker').value;
    textArea.style.color = textColor
})