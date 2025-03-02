// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var ไม่จำเป็นต้องกําหนดค่าเริ่มต้น สามารถเปลี่ยนค่าได้ เป็นตัวแปร global
var aa = 10
// let ไม่จำเป็นต้องกําหนดค่าเริ่มต้น สามารถเปลี่ยนค่าได้ เป็นตัวแปร local
let bb = 20
// const ต้องกำหนดค่าเริ่มต้น ไม่สามารถเปลี่ยนค่าได้ เป็นตัวแปร local
const cc = 30

aa = 111
bb = 222
//cc = 333 const ไม่สามารถเปลี่ยนค่าได้

{
    var wow = 10
    {
        console.log(wow)
        let wee = 20
        const woo = 30
        console.log(wee)
        console.log(woo)
    }
    {
        console.log(wow)
        //console.log(wee
        //console.log(woo)
    }
    console.log(wow)

}
console.log(wow)