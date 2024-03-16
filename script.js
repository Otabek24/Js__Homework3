let age = +prompt("O'z yoshingizni kiriting")

if (age<=18){
    alert("Yoshsiz. O'qishingiz kerak.")
}else if (age<=50){
    alert("Ishlashingiz kerak")
}
else if (age<=59){
    alert("Yaqinda pensiyaga chiqasiz")
}
else if (age<=150){
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz")
}
else{
    alert("Nimadir noto'g'ri ketganga o'xshaydi")
}