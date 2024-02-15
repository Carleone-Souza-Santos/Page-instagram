
// assim que inicia a função dispara com o evento pronto pra iniciar 
document.addEventListener("DOMContentLoaded", function() {  

  // recolhendo do dom ...
  const imgcellphone = document.querySelectorAll('.img-celular '); 

  //contador
  let accountant= 0;   

  // criamos um temporizador que executa uma função a cada 5 segundos.  
  setInterval(() => {
      accountant = (accountant + 1) % imgcellphone.length;  // criamos um controle ao array de img-celular e criamos um controle
      update_Carousel(); //função sendo chamada callback.
      // console.log('test '  + accountant)  visualiza no console o que está acontecendo ao accountant.
      //tempo milessegndos para executar
  }, 5000); 

  //função para atualizar 
  function update_Carousel() {   
      imgcellphone.forEach(imagem => {
          imagem.style.opacity = 0; 
      });
        // contador recolhendo 1 a 1 seguindo de 0 a 3 e aplocando opacity
        imgcellphone[accountant].style.opacity = 1;   
        imgcellphone[accountant].style.transition= 1;
    }
  });

