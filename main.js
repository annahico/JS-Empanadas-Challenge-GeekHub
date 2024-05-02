export const fn = (a, b, c) => {
   const priceA = 12; // precio empanada de pollo  
   const priceB = 14; // precio empanada ternera 
   const priceC = 16; // precio empanada vegana 

   if (a < 0 || b < 0 || c < 0) {                                                
      throw new Error("Please enter a valid quantity of empanadas"); 
   }
}