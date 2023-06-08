import SwiperCore, { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SmallButton from '@/Components/SmallButton';

// import { ItemListProps } from './types';

export default function ItemList() {
  // const {
  //   itemPrice = '500',
  //   itemName = '원씽 The One Thing',
  //   itemState = '대여가능',
  //   itemUrl = 'src/assets/books/oneTHing.png',
  // } = props;

  const BookList = [
    {
      itemPrice: '1500',
      itemName: '최애의 아이',
      itemState: '대여가능',
      itemUrl: 'src/assets/books/cho.jpeg',
    },
    {
      itemPrice: '1000',
      itemName: '세이노의 가르침',
      itemState: '대여가능',
      itemUrl: 'src/assets/books/seino.jpeg',
    },
    {
      itemPrice: '500',
      itemName: '5년 후 나는 어디에 있을 것인가?',
      itemState: '대여가능',
      itemUrl: 'src/assets/books/5y.jpeg',
    },
    {
      itemPrice: '700',
      itemName: '나는 자기계발서를 읽고 벤츠를 ...',
      itemState: '대여가능',
      itemUrl: 'src/assets/books/benz.jpeg',
    },
    {
      itemPrice: '500',
      itemName: '원씽 The One Thing',
      itemState: '대여가능',
      itemUrl: 'src/assets/books/oneTHing.png',
    },
    {
      itemPrice: '500',
      itemName: '햄릿',
      itemState: '대여가능',
      itemUrl: 'src/assets/books/ham.jpeg',
    },
    {
      itemPrice: '500',
      itemName: '정의란 무엇인가?',
      itemState: '대여가능',
      itemUrl: 'src/assets/books/justice.jpeg',
    },
    {
      itemPrice: '500',
      itemName: '한 문장으로 말하라',
      itemState: '대여가능',
      itemUrl: 'src/assets/books/word.jpeg',
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        className="drop-shadow-lg"
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {BookList.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex" key={idx}>
              <div className="flex  flex-col gap-1 align-text-bottom  w-[230px] h-[300px] border rounded-xl border-gray  relative overflow-hidden">
                <img
                  className=" border border-gray border-l-0 border-r-0 border-t-0 left-0 top-0 h-3/5 "
                  src={item.itemUrl}
                />
                <div className="pt-3 mx-2 left-0 top-0 w-1/3 ">
                  <SmallButton content={item.itemState} />
                </div>
                <div className="mx-2 font-semibold font-[18px] ">{item.itemName}</div>
                <div className="mx-2 font-semibold font-[16px] ">{item.itemPrice}원</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
