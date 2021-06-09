unction solucao(tempo, distancia) {
	//seu codigo aqui
    var resultado;
    
    if(tempo<5){
        console.log(600);
     }
       
    if(tempo>=5 && tempo<=60){
        resultado= (100*tempo)+(50*distancia)
        console.log(resultado);
    }
    else if (tempo>60){
                if(distancia < 100){
                    resultado=200*distancia;
                    console.log(resultado);            
                }
                else if(distancia>=100){
                        resultado=150*distancia;
                        console.log(resultado);            
                       }  
        
        
       
    }
    
    
}