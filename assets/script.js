//console.log(addBtn)
//add qty
//get elements
//Select Button
//add click function listener
//add to quantity

const addBtn = document.querySelector('#quantity-up');
const subBtn = document.querySelector('#quantity-down');

const totalQuantity = document.querySelector('.total-quantity');
let totalNum = parseFloat(totalQuantity.textContent.split(' ')[1])

//event listener
addBtn.addEventListener('click', () =>{
    totalNum = totalNum +1;
    totalQuantity.textContent = `Quantity: ${totalNum}`
});
subBtn.addEventListener('click', () =>{
if (totalNum >0){
totalNum = totalNum -1;
totalQuantity.textContent = `Quantity: ${totalNum}`
}
});