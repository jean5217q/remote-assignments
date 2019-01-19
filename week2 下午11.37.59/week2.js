/*
Assignment 1: Function and Array
find the  max number  of passing numbers
*/

//ANS1
function max(...num) {
  let x = num.sort((a,b)=>a-b)
  return x[x.length-1]
}
console.log('result: '+max(1, 2, 4, 5))
console.log('result: '+max(5, 2, 7, 1, 6))

//ANS2
function max2(...num){
  let max = num[0]
  num.forEach(el=>{
    if(max<el) {
      max = el
    }
  })
  return max
}
console.log('result: '+max2(1, 2, 4, 5))
console.log('result: '+max2(5, 2, 7, 1, 6))


/*
Assignment 2: Object
create a proper object as a parameter of the calculate function.
*/
function calculate(args){
  let result
  if(args.op==='+'){
    result=args.n1+args.n2
  }
  else if(args.op==='-'){
    result=args.n1-args.n2
  }
  else {
    result="Not supported"
  }
  return result
}
//obj1
let obj1 = new Object()
obj1.op = '+'
obj1.n1 = 3
obj1.n2 = 4
calculate(obj1)

//obj2
let obj2 = {}
obj2['op'] = '+'
obj2['n1'] = 3
obj2['n2'] = 4
calculate(obj2)

//obj3
function calcObj(op, n1, n2) {
  this.op = op
  this.n1 = n1
  this.n2 = n2
}
let obj3 = new calcObj('+', 3, 4)
calculate(obj3)

/*
Assignment 3: Function, Array, and Object
calculate the average price of all the products
*/
function avg(data){
  const num = data.size
  const priceArray = data.products.map(el=>el.price)
  const total = priceArray.reduce((total,price)=>total+price,0)
  return total / num
}
let avgPrice = avg({
  size:3,
  products:[
    {
    name:"Product 1",
    price:100
    },
    {
    name:"Product 2",
    price:700
    },
    {
    name:"Product 3",
    price:250
    }
  ]
})
console.log('average price: '+avgPrice)





/* 
Assignment 5: 
Algorithm Practice (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
陣列中兩個值相加等於target
*/
function twoSum(nums, target){
  let result = []
  for(let i= 0;i<nums.length;i++) {
    let num1 = nums[i]
    let num2 = target - nums[i]
    if(nums.indexOf(num1)!==-1 && nums.indexOf(num2)!==-1){
      result.push(nums.indexOf(num1))
      result.push(nums.indexOf(num2))
      return result
    }
  }
}
console.log('twoSum: '+twoSum([2, 7, 11, 15],9))
twoSum([2, 7, 11, 15],26) //[2,3]

