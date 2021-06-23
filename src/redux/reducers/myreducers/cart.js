import {
  ADD_CART
} from '../actionType'

const initialState = [
  {
    id: 99,
    img: 'http://test.newca.vn/img/uploads/fca.jpg',
    name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
    price: '800.000',
    number: 0,
    soluong : 0,
    total  : 0,
  },
  {
    id: 95,
    img: 'http://test.newca.vn/img/uploads/fca.jpg',
    name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
    price: '800.000',
    number: 0,
    soluong : 0,
    total  : 0,
  },
  {
    id: 91,
    img: 'http://test.newca.vn/img/uploads/fca.jpg',
    name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
    price: '800.000',
    number: 0,
    soluong : 0,
    total  : 0,
  }
]

const myCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      console.log(action);
      let listCart = [...state]
      let newData = {}
      const index = listCart.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        newData = {
          ...listCart[index],
          number: listCart[index].number + 1
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
    default:
      return state
  }
}

export default myCart
