function solucao(precos) {
    //seu codigo aqui
    var soma = 0; 
    var menorValor=precos[0];
    var valorTotal=0;    
   
    for(let x=0;x<precos.length;x++){
        valorTotal+=precos[x];
    }
    
    
    if(precos.length>=5){
        for(let x=0;x<precos.length;x++){
            if(precos[x]<menorValor){
                menorValor=precos[x];
             }   
         }
        soma=valorTotal-menorValor;
    }
    else{
        soma=valorTotal;
                        
    }
    console.log(soma);
}