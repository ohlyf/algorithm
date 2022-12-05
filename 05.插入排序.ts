const insertSore=(arr)=>{
   if(arr==null||arr.length<2){
    return 
   }
   const N=arr.length
   for(let end=1;end<N;end++){
    for(let pre=end-1;pre>=0&&arr[pre]>arr[pre+1];pre--){
      let temp=arr[pre+1]
      arr[pre+1]=arr[pre]
      arr[pre]=temp
    }
   }
   return arr
}

console.log(insertSore([5,1,5,7,7,1,4,7,8,2,4]))