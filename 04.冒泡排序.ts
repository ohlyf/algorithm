const bubbleSore=(arr)=>{
  let N=arr.length
  for(let end=N-1;end>=0;end--){
    for(let i=0;i<end-1;i++){
      if(arr[i]>arr[i+1]){
        let temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
      }
    }
  }
  return arr
}

console.log(bubbleSore([5,1,5,7,7,1,4,7,8,2,4]))