const register=document.getElementById('register')
const namee=document.getElementById('name')
const lastName=document.getElementById('lastName')
const date=document.getElementById('date')
const number=document.getElementById('tel')
const email=document.getElementById('email')
const password=document.getElementById('password')
const lastPassword=document.getElementById('lastPassword')


register.addEventListener('click',(e)=>{
    const testName=/^[A-Z]+$/gi
    const testLastName=/^[A-Z]+$/gi
    const testNumber=/3\d{9}$/gi
    const testDate=/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/gi
    const testemail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi
    let contador=0;

    if(testName.test(namee.value)){
        console.log('correcto')
        contador++;
    }else{
        alert('El nombre contiene numeros')
        contador--;
    }
    if(testLastName.test(lastName.value)){
        console.log('correcto')
        contador++;
    }else{
        alert('El apellido contiene numeros')
        contador--;
    }
    if(testDate.test(date.value)){
        contador++;
        console.log('correcto')
    }else{
        alert('Formato incorrecto de fecha')
        contador--;
    }
    if(testNumber.test(parseInt(number.value))){
        contador++;
        console.log(number.value)
        console.log('correcto')
    }else{
        alert('Formato incorrecto del numero')
        contador--;
    }
    if(testemail.test(email.value)){
        contador++;
        console.log('correcto')
    }else{
        alert('formato incorrecto de email')
        contador--;
    }if(password.value===lastPassword.value){
        contador++;
        console.log('correcto')
    }else{
        alert('Las contraseñas son diferentes')
    }
    if(contador>=6){
        alert('Registro exitoso')
    }else{
        alert('Corrige los errores para que el envío sea exitoso')
    }
})