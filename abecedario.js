function solucao(letra, palavras) {
	//seu codigo aqui
    var resultado=0;
    for(let item of palavras){
        if(item[0] != letra[0]){
            resultado+=1            
        } 
      }
   console.log(resultado); 
}