
function textStyle(type){
    if(type == 'bold'){
        takeInputeText('editor-fild').classList.toggle('bold')
    }
    else if(type == 'italic'){
        takeInputeText('editor-fild').classList.toggle('italic')
    }
    else{
        takeInputeText('editor-fild').classList.toggle('underline')
    }
}


function textLeft(){
    takeInputeText('editor-fild').style.textAlign = 'left';
}
function textCenter(){
    takeInputeText('editor-fild').style.textAlign = 'center';
}
function textRight(){
    takeInputeText('editor-fild').style.textAlign = 'right';
}
function textJustify(){
    takeInputeText('editor-fild').style.textAlign = 'justify';
}

function fontSize(){
    const fontSizeElement = document.getElementById('font-size');
    const fontSizeValue = fontSizeElement.value
    takeInputeText('editor-fild').style.fontSize = fontSizeValue + 'px';
}

function textColor(){
    const colorElement = document.getElementById('color-picker');
    const colorValue = colorElement.value;
    takeInputeText('editor-fild').style.color = colorValue;
}

document.getElementById('head-text').addEventListener('click', function(){
    document.getElementById('head-text').style.color = 'white';
})