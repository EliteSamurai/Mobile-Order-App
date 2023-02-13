import { menuArray } from "./data.js";

const menu = document.getElementById('menu')

for (let option of menuArray){    
menu.innerHTML += `<div class="menu-item"> 
               <div class="h1-emoji">
                <h1 id="big-emoji">${option.emoji}<h1>
                </div>
                <div class="small-text">
                    <p>${option.name}</p>
                    <span class="ingredients">${option.ingredients}</span>
                    <div class="price">$${option.price}</div>
                </div>
                <div class="icon">
                <i id="add" class="fa-solid fa-plus" data-food="${option.id}"></i>
                </div>
           </div>
                    `
}

const orderArr = []
let occurrences = {}
let total = 0

document.addEventListener('click', function(e){
    if (e.target.getAttribute('data-food')){
            orderArr.unshift(menuArray[e.target.getAttribute('data-food')])

    let filtered = orderArr.filter(function(x) {
        if (occurrences[x.name]) {
          return false
        }
        occurrences[x.name] = true;
        return true;
      })

      if (e.target.getAttribute('data-food')){
        total += filtered[0].price
        document.getElementById('price').innerHTML = ` <p id="total" class="hide">Total Price: <span>${total}</span></p> `
      }    

function renderOrder(){
        if (!menu.innerHTML.includes('Your Order')){
                             
menu.innerHTML += `
                   <h4 class="hide">Your Order</h4>
                  `
            } 
 menu.innerHTML += `<main id="container" class="hide">
                    <section class="buy-item">
                    <span class="order-name">
                    <p class="name">${filtered[0].name}</p>
                    <p id="remove">Remove</p>
                    </span>
                    <p id="order-price">${filtered[0].price}</p>
                    </section>
                    <button id="button">Complete Order</button>
                    </main>
                    `
            } 
            renderOrder()
                            }
        }
)

const remove = document.getElementById('remove')
const name = document.getElementById('text')
const modalOuter = document.getElementById('modal-outer')
const modalInner = document.getElementById('modal-inner')
const thanks = document.getElementById('thanks')

document.addEventListener('click',  function (e){
    if(e.target.id === 'remove'){
        e.target.parentElement.parentElement.remove()
    }

    if(e.target.id === 'button'){
        modalOuter.classList.remove('hidden')
        modalInner.classList.remove('hidden')
    }
} )

document.getElementById('pay').addEventListener('click', function thanks1(){
        modalOuter.classList.add('hidden')
        modalInner.classList.add('hidden')
        const list = document.querySelectorAll('.hide')
        for (let item of list){
            item.style.display = 'none'
        }
        thanks.classList.remove('hidden')
        thanks.innerHTML = `<p class="thanks">Thanks ${name.value}! Your order is on its way!</p>`
})






