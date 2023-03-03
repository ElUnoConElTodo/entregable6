import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'
import "./styles/Home.css"

const Home = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [nameFilter, setNameFilter] = useState("")
    const [filterProducts, setFilterProducts] = useState([])
    const [categoryFilter, setCategoryFilter] = useState(0)


    const handleSubmit = (e) =>{
        e.preventDefault()
        const nameProduct = e.target.nameProduct.value;
        setNameFilter(nameProduct);
    }

    useEffect(() => {
        axiosEcommerce
        .get("/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err))
    }
    , [])

    useEffect(() => {
    axiosEcommerce
        .get("/categories")
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err))
    },[])
    
    useEffect(() => {
        const newProductsByName = products.filter(product => product.title.toLowerCase().includes(nameFilter.toLowerCase()))
        if(categoryFilter){
            const newProductsByCategory = newProductsByName.filter(product => product.categoryId === categoryFilter)
            setFilterProducts(newProductsByCategory)
        }else{
            setFilterProducts(newProductsByName)
        }
        
    },[nameFilter, products, categoryFilter])

  return (
    <main className='home'>
        <form className='homeFilter' onSubmit={handleSubmit}>
            <div>
                <input className='homeSeach' id="nameProduct" type="text" />
                <button className='homeSeach_btn'><i className='bx bx-search-alt-2' ></i></button>
            </div>
            <div>
                <h3>Category</h3>
                <ul className='homeCategory' >
                    <li onClick={() => setCategoryFilter(0)}>All</li>
                    {
                        categories.map(category => <li className='homeCategory_list' onClick={() => setCategoryFilter(category.id)} key={category.id}> {category.name}</li>)
                    }
                </ul>
            </div>
        </form>
        <section className='home_listProducts'>
            {
            filterProducts.map(product => (<ProductCard key={product.id}
            product={product}/>))
            }
        </section>
    </main>
  )
}

export default Home