# Refine JavaScript Prototypes / Classes
## Examples
### How to use it.
```js
function complex_math() {
  
  const x = 1
  console.log(x.bytes) // undefined

  // we are going to change all numbers to have a new property! (bytes)
  // refine function needs an example of what we want to change (we use `0`)
  // next it needs an object with functions that will become properties
  //
  const revoke = refine(0, { bytes() { return this * 8 } })
  
  console.log(x.bytes) // 8 (1 * 8 = 8)

  console.log(x.bytes.bytes) // 64

  revoke()

  console.log(x.bytes) // undefined

}
```
### Add extension methods to Arrays
```js
const revokeArr = refine([], { rgb() { 
  const [r,g,b] = this; 
  return `rgb(${r},${g},${b})` 
  } 
})

const color = [25, 210, 52]

console.log(color.rgb) // "rgb(25,210,52)"
revokeArr()
console.log(color.rgb) // undefined
```
