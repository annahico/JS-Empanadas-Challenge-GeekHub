export const fn = (a, b, c) => { // Esta línea declara una función llamada FN que toma tres parámetros: a, b, y c.

   const priceA = 12; // precio de la empanada de pollo  
   const priceB = 14; // precio empanada ternera 
   const priceC = 16; // precio empanada vegana 

   if (a < 0 || b < 0 || c < 0) {                                                
      throw new Error("Please enter a valid quantity of empanadas"); 
   } //Esta línea verifica si alguna de las cantidades de empanadas es menor que cero. Si es así, arroja un error con el mensaje "Please enter a valid quantity of empanadas".

   else if ((a + b + c) >= 40) {                                                
      throw new Error("Exceeds maximum quantity of empanadas");
   } //Esta línea verifica si la suma total de las cantidades de empanadas es mayor o igual a 40. Si es así, arroja un error con el mensaje "Exceeds maximum quantity of empanadas".

   else if ((a + b + c) % 3 != 0) {                                              
      throw new Error("3x1 offer not applicable");
   } //Esta línea verifica si la suma total de las cantidades de empanadas no es divisible por 3. Si es así, arroja un error con el mensaje "3x1 offer not applicable".
   else {
      let output = Math.ceil(((a * priceA) + (b * priceB) + (c * priceC)) / 3);         
// Esta línea calcula el costo total de las empanadas después de aplicar la oferta 3x1. Multiplica la cantidad de cada tipo de empanada por su precio respectivo, luego suma estos valores y divide por 3. Utiliza Math.ceil() para redondear hacia arriba al número entero más cercano.
      return output;                                                                         
   }; //Esta línea devuelve el costo total de las empanadas después de aplicar la oferta 3x1.

}
