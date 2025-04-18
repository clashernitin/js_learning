# Projects Related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution 

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const boxColor = e.target.id
    body.style.backgroundColor = boxColor
  })
})

```
## Project 5

```javascript
const insert = document.getElementById('insert')


window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class ='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  <div>
  `
})
```

## Project 6

```javascript

// generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i = 0; i< 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

let intervalId
const startChangingColor = () => {
  if(!intervalId) {
    intervalId = setInterval(changeColor, 1)

  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }  
    
}

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)

```
