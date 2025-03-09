// funtion Ep.2
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
//3. no parameter, has return
function myFunctC(){
    console.log('Woo....')
    return 'Wow Wow Wow....'
}


//4. have parameter, has return
function myFunctD(n1, n2){
    return n1+n2
}

//เวลาที่เรียกใช้ควรเอาค่าที่ return ไปใช้งาน
//myFunctD(10, 20)เรียกใช้แบบนี้ได้ แต่ไม่ควรทำ
console.log(myFunctD(10, 20))
let xx = myFunctC()
console.log(`${xx} ^_^`)