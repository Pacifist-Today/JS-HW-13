const arr = [1, 2, 3, 4, 5]

let sum = null

for (let i = 0; i <= arr.length - 1; i++) {
    sum += Math.pow(arr[i], 2)
    console.log(sum)
}