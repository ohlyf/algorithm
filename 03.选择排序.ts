const selectionSort=(arr)=>{
  if(arr==null||arr.length<2){
    return
  }
  const N=arr.length
  for(let i=0;i<N;i++){
    let minValueIndex=i
    for(let j=i+1;j<N;j++){
      minValueIndex=arr[j]<arr[minValueIndex]?j:minValueIndex
    }
    // [i,minValueIndex]=[minValueIndex,i]
    // [arr[i],arr[minValueIndex]]=[arr[minValueIndex],arr[i]]
    let temp=arr[i]
    arr[i]=arr[minValueIndex]
    arr[minValueIndex]=temp
  }
  return arr
}

console.log(selectionSort([5,1,5,7,7,1,4,7,8,2,4]))