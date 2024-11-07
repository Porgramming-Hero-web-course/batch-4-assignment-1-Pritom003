# Understanding the Significance of Union and Intersection Types in TypeScript

TypeScript, a superset of JavaScript, introduces powerful typing features that help developers write more robust and maintainable code. 

In this blog, we will explore the significance of Union and Intersection Types features and understand how they can help us in handaling types 

## Union Types

Union types in TypeScript allow a variable to hold values of different types. There are many cases when we will not be sure what the type will be exactly but we have the idea of the value in those case we can use union types .

to define union type we use  (`|`) symbol.


```typescript

type UnionValue= string | number
const value1:UnionValue = "Hello";  
const Value2:UnionValue= 2;      
const Value3:UnionValue = true;   
```
in this example case the example ```value1``` and ```value2```  are correct cause we declare the type with  (`|`)  this symbol so it can be either of them but other than string or number is cant be any other type
## benifits of Union
### Flexibility 
: Union types give you flexibility to accept multiple types, making functions or variables more versatile.

### Type Narrowing:
 TypeScript can infer the correct type using control flow, allowing you to narrow down the type within conditional blocks.

## Intersection type 
Intersection types in TypeScript allow us to combine multiple types into one. TA variable with an intersection type must satisfy all the types it intersects with. 
ntersection types are defined using the ampersand (``&``) symbol.
```typescript
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
    department: string;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "John",
    age: 30,
    employeeId: "E123",
    department: "Engineering"
};



```
## benifits of intersection 
Intersection types are useful when you need to combine multiple objects or types into one, where the variable must satisfy both types.