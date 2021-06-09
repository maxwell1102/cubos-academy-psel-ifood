function solucao(produtos) {
	//seu codigo aqui
    var valorTotal=0;
    var valorTop=0;
        for(let x=0;x< produtos.length;x++){
            valorTotal+=produtos[x].preco;
        }
             
      for(let x=0;x< produtos.length;x++){
        if (produtos[x].preco >= 10000){
          valorTop+=produtos[x].preco;
        }
      }
    valorPerc=(valorTop/valorTotal)
    
   var produtoFinal=
        {
            "totalTop":valorTop,
            "percentual":valorPerc
        }
        
    
    console.log(produtoFinal);
}