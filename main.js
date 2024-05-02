export const fn = (a, b, c) => {
   const priceA = 12; // precio empanada de pollo  
   const priceB = 14; // precio empanada ternera 
   const priceC = 16; // precio empanada vegana 

   if (a < 0 || b < 0 || c < 0) {                                                
      throw new Error("Please enter a valid quantity of empanadas"); 
   }

   else if ((a + b + c) >= 40) {                                                
      throw new Error("Exceeds maximum quantity of empanadas");
   }

   else if ((a + b + c) % 3 != 0) {                                              
      throw new Error("3x1 offer not applicable");
   }
}