// control statement (loop/iteration/repetition) Ep.2
// break and continue ใน loop
//------------------------------
// 1. break in loop ทำงานเมื่อไหร่จบเลย
let aa = 1
while (aa <= 5){
    aa++;
    if ( aa == 3){
        break
    }
    console.log(aa-1,'Hello....')
    //aa++; //++a หรือ a = a + 1 หรือ a += 1
}


// 2. continue in loop ทำงานเมื่อไหร่ จบรอบนั้นไปรอบต่อไปเลย

let bb = 1
while (bb <= 5){
    bb++;
    if (bb == 3){
        continue
    }
    console.log(bb-1,'Hi....')
    //aa++; //++a หรือ a = a + 1 หรือ a += 1
}