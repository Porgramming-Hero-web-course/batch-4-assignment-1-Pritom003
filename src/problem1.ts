{

const sumArray =(arr:number[]):number=>{
const result=arr.reduce((sum:number ,i :number)=>sum+i ,0  )
return result
}




console.log(sumArray([1, 2, 3, 4, 5]));







}