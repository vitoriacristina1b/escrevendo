//  circulox = 0,0, 0
// circuloy = 300, 150,50

function draw() {
  
  fill(cor);
  
  // console.log(circuloX.length);
  for(let contador in circuloX) {
 // console.log(contador);
   circule(circuloX[contador], circuloY[contador], 50);
   circuloX[contador] += random(0, 3);
   circuloY[contador] += rondom(-3, 3);
    
    if (circuloX[contador] >= width) {
       circuloX[contador]  = 0;
       circuloY[contador]  = rondom(height);
     
    
      
    
