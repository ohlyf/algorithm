const factorial=(num )=>{
  let ans=0
  let cur=1
  for(let i=1;i<=num;i++){
    cur=cur*i
    ans+=cur
  }
  return ans
}