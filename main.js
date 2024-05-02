export const fn = (a, b, c) => {  //Esta línea define una función llamada fn que toma tres parámetros: a, b, y c.
   const priceA = 12; 
   const priceB = 14; 
   const priceC = 16; 

   if (a < 0 || b < 0 || c < 0) {                                                
      throw new Error("Please enter a valid quantity of empanadas"); 
   } //Esta línea verifica si alguna de las cantidades de empanadas (a, b o c) es menor que cero. Si alguna de ellas es menor que cero, se lanza un error con el mensaje "Please enter a valid quantity of empanadas".

   else if ((a + b + c) >= 40) {                                                
      throw new Error("Exceeds maximum quantity of empanadas"); //
   } //Esta línea verifica si la suma total de las cantidades de empanadas (a + b + c) es mayor o igual a 40. Si es así, se lanza un error con el mensaje "Exceeds maximum quantity of empanadas".

   else if ((a + b + c) % 3 !== 0) {                                              
      throw new Error("3x1 offer not applicable");
   }// Esta línea verifica si la suma total de las cantidades de empanadas no es divisible por 3. Si la suma no es divisible por 3, se lanza un error con el mensaje "3x1 offer not applicable".

   else {
      let output = Math.ceil(((a * priceA) + (b * priceB) + (c * priceC)) / 3); 

      return output;                                                                 
   }; //Si ninguna de las condiciones anteriores se cumple, significa que se puede aplicar la oferta 3x1. En este caso, se calcula el costo total de las empanadas después de aplicar la oferta 3x1. Se multiplican las cantidades de cada tipo de empanada por su precio respectivo, se suman estos valores y se dividen por 3. Se utiliza Math.ceil() para redondear hacia arriba al número entero más cercano. Finalmente, se devuelve el costo total calculado.
}
