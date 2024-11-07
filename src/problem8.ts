{


      const validateKeys = <T extends object, K extends keyof T>(person: T, arr: K[]): boolean => {
        if( arr.every(key => key in person)){
            return true
        }
        return false
      }
      
      // Sample Input:
      const person= { name: "Alice", age: 25, email: "alice@example.com" };
      console.log(validateKeys(person, ["name", "age"]))
    
      



}