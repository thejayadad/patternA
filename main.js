

for (let i = 0; i < 7; i++){
    for (let j = 7; j > i; j--){
        document.write(" &nbsp")
    } 
    for (let k =0; k<=i; k++){
        if (i == 4 || k == 0 || k ==i){
            document.write(" X")
        } else {
            document.write(" &nbsp "+" &nbsp")
        }
    }

    document.write("<br />")
}