{



const countWordOccurrences =(sentence:string,word:string):number =>{
const result =sentence.split(word).length -1
return result
}



// Sample Input:
console.log(countWordOccurrences("I love typescript", "typescript"));




}