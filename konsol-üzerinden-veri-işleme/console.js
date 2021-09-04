var myArgs = parseInt(process.argv[2]);

let radius = () =>{
    return myArgs ? `Yarıçapı ${myArgs} olan dairenin alanı: ${Math.pow(myArgs,2)*Math.PI}` : "Konsola Değer Giriniz"
}
console.log(radius())