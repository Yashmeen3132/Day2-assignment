//Assignment-1
let arrMax = [1,21,67,45,33,18,1000,101,22,0,1]
let maxValue = arrMax[0]

arrMax.forEach((element, index, arrMax) => {
if(maxValue<element)
maxValue=element
});
console.log(maxValue)

//Assignment-2
let list1=[1,2,3,4,5,6,7,8,9,10];
newlist = list1.map(
    (element,index,list1) => {
            return{ list1 : element*10}

});

console.log(newlist)

//Assignment-3
arr2=[2,2,2,9,5]
 
let sum=0
function sumEvens(a){

    arr2.forEach(
        (element,index, arr2) => {
            if(element%2==0){
                sum=sum+element
                return sum
            }
        
    });
}

let sum1 = sumEvens(arr2);
console.log(sum)

//Assignment-4
let numbers = [4, -4, 10, 203, 53, 11];

let a = numbers.reduce((i,j)=>{
    if(i<j)
    return i
    else 
    return j
})

console.log(a)