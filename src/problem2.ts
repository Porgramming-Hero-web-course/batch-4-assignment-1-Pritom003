{ type Numberarr=number[]
    const  removeDuplicates =(arr:Numberarr):Numberarr=>{
        return [...new Set(arr)];
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,8,2]));
}