import {
  ADD_CART,
  DECREASE_CART,
  DEL_CART
} from './../../actionType'
const initialState = [
  {
    id: 1,
    name: "Chữ kí số cho cán bộ nhân viên",
    by: "NewCA",
    deliveryBy: "Wed Sep 17",
    offers: "17% off 4 offers Available",
    price: "880000",
    freeShipping: true,
    number: 1,
    soluong : 0,
    total  : 0,
  },
  {
    id: 2,
    name: "Chữ kí số cho tổ chức, doanh nghiệp",
    by: "NewCA",
    deliveryBy: "Mon Sep 15",
    offers: "7% off 1 offers Available",
    price: "1827000",
    freeShipping: true,
    number: 1,
    soluong : 0,
    total  : 0,
  },
  {
    id: 3,
    name: "Chữ kí số cho cá nhân",
    by: "NewCA",
    deliveryBy: "Sat Sep 20",
    offers: "3% off 1 offers Available",
    price: "880000",
    freeShipping: false,
    number: 1,
    soluong : 0,
    total  : 0,
  },
  {
    id: 4,
    name: "Chữ kí số cho thiết bị HSM",
    by: "NewCA",
    deliveryBy: "Fri Sep 19",
    offers: "5% off 2 offers Available",
    price: "759000",
    freeShipping: true,
    number: 1,
    soluong : 0,
    total  : 0,
  }
]

const myCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      let listCart = [...state]
      let newData = {}
      const index = listCart.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        newData = {
          ...listCart[index],
          number: action.payload.quanty
        }
        listCart.splice(index, 1 , newData)
      } else {
        newData = {
          ...action.payload,
          number: 1
        }
        listCart.push(newData)
      }
      return listCart

    }
    case DECREASE_CART: {
      let listCart = [...state]
      let newData = {}
      const index = listCart.findIndex(item => item.id === action.payload.id)
      newData = {
        ...listCart[index],
        number: listCart[index].number - 1
      }
      listCart.splice(index, 1 , newData)
      return listCart
    }
    case DEL_CART: {
      let listCart = [...state]
      const index = listCart.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        listCart.splice(index, 1)
      } 
      return listCart
    }
    default:
      return state
  }
}

export default myCart
