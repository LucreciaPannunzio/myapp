const productos = [
    {
        img: "../../assets/empanadas.jpg",
        name: 'Empanadas de soja texturizada',
        price: 600,
        category: 'comida-vegana',
        stock: 50,
        description: 'Empanadas con masa casera vegana, rellenas de soja texturizada'
    },
    {
        img: "../../assets/burger.jpg",
        name: 'Hamburguesas veganas',
        price: 480,
        category: 'comida-vegana',
        stock: 30,
        description: 'Hamburguesas veganas, de calabaza, lentejas o garbanzos'
    },
    {
        img: "../../assets/pasta-vegana.jpg",
        name: 'Pastas',
        price: 400,
        category: 'comida-vegana',
        stock: 20,
        description: 'Pastas caseras veganas'
    },
    {
        img: "../../assets/milanesas.jpg",
        name: 'Milanesas de berenjenas',
        price: 280,
        category: 'comida-vegana',
        stock: 30,
        description: 'Milanesas de berenjenas, simples o napolitanas'
    },
    {
        img: "../../assets/pizzas.jpg",
        name: 'Pizzas a la piedra',
        price: 350,
        category: 'comida-vegana',
        stock: 20,
        description: 'Pizzas a la piedra, con queso vegano'
    },
    {
        img: "../../assets/guiso.jpg",
        name: 'Guisos veganos',
        price: 500,
        category: 'comida-vegana',
        stock: 10,
        description: 'Guiso de verduras'
    },
    {
        img: "../../assets/alitas-pollo.png",
        name: 'Alitas de pollo con salsa de mostaza',
        price: 650,
        category: 'comida-no-vegana',
        stock: 8,
        description: 'Alitas de pollo con salsa de mostaza y miel'
    },
    {
        img: "../../assets/bondiola.png",
        name: 'Bondiola a la cerveza',
        price: 600,
        category: 'comida-no-vegana',
        stock: 6,
        description: 'Bondiola a la cerveza con papas'
    },
    {
        img: "../../assets/cazuela-pollo.png",
        name: 'Cazuela de pollo',
        price: 500,
        category: 'comida-no-vegana',
        stock: 4,
        description: 'Cazuela de pollo con verduras'
    },
    {
        img: "../../assets/empanadas-carne.png",
        name: 'Empanadas de carne cortada a cuchillo',
        price: 600,
        category: 'comida-no-vegana',
        stock: 24,
        description: 'Empanadas de carne cortada a cuchillo'
    },
    {
        img: "../../assets/panceta.png",
        name: 'Panceta al estilo chino',
        price: 700,
        category: 'comida-no-vegana',
        stock: 4,
        description: 'Panceta con salsa al estilo chino'
    },
]

const categories = [
    {id: 'comida-vegana' , description: 'Comida Vegana'},
    {id: 'comida-no-vegana' , description: 'Comida No Vegana'}
]

export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)        
    })
}

export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)        
    })
}

export default productos;