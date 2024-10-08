import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">Propinas y Consumo App</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className='p-5'>
          <h2 className='font-black text-4xl'>Menu</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                />
            ))}
          </div>
        </div>

        <div>
          <h2>Consumo</h2>


        </div>
      </main>

    </>
  )
}

export default App
