import React from 'react'
import { formatDateDDMMYYYY } from '../../utils/date'
import "./styles/PurchaseCard.css"

const PurchaseCard = ({purchase}) => {  

  return (
    <article className='purchaseCard'>
        <div className='purchaseCard__header'>
            <div >
                <img className='purchaseCard__img' src={purchase.product.images[0].url} alt="" />
            </div>
                <h4>{purchase.product.title}</h4>
            </div>
            <div>
            <h4>{formatDateDDMMYYYY(purchase.createdAt)}</h4>
                <div>
                    <h4>{purchase.quantity}</h4>
                </div>
            <h4>$ {purchase.product.price}</h4>
        </div>
    </article>
  )
}

export default PurchaseCard