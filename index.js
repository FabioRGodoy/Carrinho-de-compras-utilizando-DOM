const productsCart = [
    {
        id: 1,
        name: "Mouse Gamer",
        price: 80.22
    },
    {
        id: 2,
        name: "Mouse Pad",
        price: 55.35
    },
    {
        id: 3,
        name: "Mesa Digitalizadora",
        price: 150.34
    },
    {
        id: 4,
        name: "Teclado Gamer",
        price: 99.67
    },
    {
        id: 5,
        name: "HeadSet JBL",
        price: 130.08
    }
]

const body = document.querySelector('body')

let main = document.createElement('main')
body.appendChild(main)

let sectionUp = document.createElement('section')
main.appendChild(sectionUp)

let cabecalho = document.createElement('div')
sectionUp.appendChild(cabecalho)

let titulo = document.createElement('div')
sectionUp.appendChild(titulo)

let tituloPrincipal = document.createElement('h1')
titulo.appendChild(tituloPrincipal)
tituloPrincipal.innerText = "Virtual Market"
tituloPrincipal.className = "titulo"

let ItenEValor = document.createElement('div')
sectionUp.appendChild(ItenEValor)
ItenEValor.className = "itemEValor"

let item = document.createElement('p')
ItenEValor.appendChild(item)
item.innerHTML = "Item"

let valor = document.createElement('p')
ItenEValor.appendChild(valor)
valor.innerText = "Valor"

let productsList = document.createElement('ul')
main.appendChild(productsList)
 
productsList.className = "lista"

function somarProdutos(){
    let total = 0
    for( let i = 0; i < productsCart.length; i++){
        total += productsCart[i].price
    }
    return total
}
console.log(somarProdutos())

for(let i = 0; i < productsCart.length; i++){

    let productsDetail = document.createElement('li')
    let productItem = document.createElement('div')
    let productSome = document.createElement('p')
    let productPrice = document.createElement('span')
    let nome = document.createElement('p')
    let preco = document.createElement('span')
    productsDetail.className = 'classe'
    productItem.className = 'classeItem'

    nome.innerText = productsCart[i].name
    preco.innerText = `R$ ${productsCart[i].price.toString().replace(".", ",")}`

    productsDetail.append(productItem)
    productItem.append(productSome, productPrice)
    productSome.append(nome)
    productPrice.append(preco)

    productsList.appendChild(productsDetail)
}
// console.log(resultado)

let valorTratado = somarProdutos().toString().replace(".", ",")

let sectionDown = document.createElement('section')
main.appendChild(sectionDown)

let div = document.createElement('div')
sectionDown.appendChild(div)

let total = document.createElement('p')
div.appendChild(total)
total.innerText = "Total"

 div.className = 'divTotal'

 let valorTotal = document.createElement('p')
 div.appendChild(valorTotal)
 valorTotal.innerText = `R$ ${valorTratado}`

let botao = document.createElement('button')
sectionDown.appendChild(botao)
botao.className = 'botao'
botao.appendChild(document.createTextNode('Finalizar Compra'));



