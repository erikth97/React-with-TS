import { useEffect, useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/data"

function App() {

    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])

    const MIN_ITEMS = 1
    const MAX_ITEM = 5

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item) {
        const itemExsists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExsists >= 0 ) { //exsiste en el carrito
            if(cart[itemExsists].quantity >= MAX_ITEM) return
            const updatedCart = [...cart]
            updatedCart[itemExsists].quantity++
            setCart(updatedCart)
        } else {
            item.quantity = 1
            setCart([...cart, item])
        }
    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity -1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }   

  return (
    <>
    <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                <Guitar 
                    key={guitar.id}
                    guitar={guitar}
                    setCart={setCart}
                    addToCart={addToCart}
                />
            ))}

        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
