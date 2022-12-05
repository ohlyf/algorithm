// 打印整数的三十二位

const print=(num)=>{
  let res=''
  for(let i=31;i>=0;i--){
   res+=(num&(1<<i))==0?"0":"1"
  }
  console.log(res);
}

print(2)
print(-1)
print(2|-1)
print(2&-1)
print(2^-1)

print(1024>>1)


// 求一个数的相反数
const c=5
const d=~c+1
print(d)

// 负数最小取反+1对应自己
// ~100000----000+1=100000----000

// 0取反+1还是自己
