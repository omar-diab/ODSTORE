import './brands.css'

import { brands } from '../../data/brands'

const Brands = () => {
  return (
    <div className="brands-wrapper">
        {brands.map(brand => (
            <div key={brand.id} className="brand">
                <img src={brand.image} alt='brand' className="brand-img" />
            </div>
        ))}
    </div>
  )
}

export default Brands