let coxinha = (prompt(`Quer uma coxinha? 
                             \n Digite:
                             \n SIM ou NÃO`)).toLowerCase()
let valorCoxinha = 0
while (coxinha == "sim"){
    valorCoxinha += 2.5
    coxinha = (prompt(`Quer uma coxinha? 
                             \n Digite:
                             \n SIM ou NÃO`))
    //console.log(coxinha)
    
    }console.log("total a pagar: R$", valorCoxinha)