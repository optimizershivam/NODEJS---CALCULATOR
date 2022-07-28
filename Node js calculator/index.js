const args = process.argv.slice(2);
// console.log(args[0]);

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });
const fun = args[0]
a=+args[1]
b=+args[2]

const print =(fun,a,b)=>
{
  // console.log('fun:', fun)
  // console.log('a:', a)
  // console.log('b:', b)
    if(fun=="add")
    {
      return a+b
    }
    if(fun=="sub")
    {
      return a-b
    }
    if(fun=="mul")
    {
      return a*b
    }
    if(fun=="div")
    {
      return a/b
    }
    if(fun=="sin")
    {
      return Math.sin(a)
    }
    if(fun=="cos")
    {
      return Math.cos(a)
    }
    if(fun=="tan")
    {
      return Math.tan(a)
    }
    
    if(fun=="random" )
    {
      
     const {
       randomInt,
     } = require('node:crypto');
   if(a && b)
     {
      
      const n = randomInt(a, b);
      return(`random: ${n}`)
     }
 else if(a)
     {
      
      const n = randomInt(a);
      return(`random: ${n}`)
     }
  else 
  {
    {
      const n = randomInt(10000);
       return(`random: ${n}`);
      }
  }
    }
 
    
   
}
console.log(print(fun,a,b))

//   console.log('args:', args[0])
//   console.log('args:', args[1])
//   console.log('args:', args[2])

