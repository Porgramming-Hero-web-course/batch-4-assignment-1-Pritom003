{
class Car {
    constructor(public carbrand:string , public cartlype:string , public year:number){}


    getCarAge():number{
        const currentYear =new Date().getFullYear();
        const carAge=currentYear-this.year
        return carAge 
    }



}



// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());


}