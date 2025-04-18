# Projects Related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution 

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