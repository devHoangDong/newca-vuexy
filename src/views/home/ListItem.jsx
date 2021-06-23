import React from 'react';
import ProductItem from './productItem'
import Slider from 'react-slick';
import '../../assets/scss/ListItem.scss'

const ListItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  const data = [
    {
      id: 1,
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      name: 'Chữ kí số cho cá nhân gói 3 năm',
      price: '1.700.000'
    },
    {
      id: 2,
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      name: 'Chữ kí số cho cá nhân gói 3 năm',
      price: '4500.000'
    },
    {
      id: 3,
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      name: 'Chữ kí số cho cá nhân gói 3 năm',
      price: '900.000'
    },
    {
      id: 4,
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      name: 'Chữ kí số cho cá nhân gói 3 năm',
      price: '600.000'
    },
    {
      id: 5,
      img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      name: 'Chữ kí số cho cá nhân gói 3 năm',
      price: '800.000'
    }
  ]
  return (
    <>
      <div className="listItem">
        <div className="listItem__title">Limited-Time Offers</div>
        <Slider {...settings}>
          {
            data && data.map((item, index) => {
              return (
                <div key={index}>
                  <ProductItem dataItem={item} />
                </div>
              )
            })
          }

        </Slider>
      </div>
    </>
  )
}

export default ListItem;
