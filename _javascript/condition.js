//判斷式
// if
let x = 0;

if(x>0){
    console.log('success');
}

if(x>0){
    console.log('success2');
}else{
    console.log('error2');
}


if(x>0){
    console.log('正');
}else if(x<0){
    console.log('負')
}else{
    console.log('error3');
}


// switch
let i = 0;

switch(i){
    case 0:
        console.log(0);
        break;
    case 10:
        console.log(10);
        break;
    case 100:
        console.log(100);
        break;
    default:
        console.log('error');
}
switch(true){
    case i > 0:
        console.log('正數');
        break;
    case i < 0:
        console.log('負數');
        break;
    default:
        console.log('errorrrrrrr');
}