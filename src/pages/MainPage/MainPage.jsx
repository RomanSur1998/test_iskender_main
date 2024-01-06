import React, { useRef } from "react";
import Headers from "../../components/Headers/Headers";
import ActionIcon from "../../components/ActionIcon/ActionIcon";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import styles from "../MainPage/MainPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import NewaCard from "../../components/NewsCard/NewaCard";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import AddressCard from "../../components/AddressCard/AddressCard";

const MainPage = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <Headers />
      <section className={styles.container}>
        <div className={styles.actionBar}>
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
        </div>
        <div>
          <h2>Категории</h2>
          <BlockTitle title={"Категории"} />
          <div className={styles.Catrgory}>
            {/* Здесь можно отрендерить данные карточки через map из redux или запроса */}
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
        <div>
          <div>
            <BlockTitle
              title={"Хиты продаж"}
              additionaly={"перейти в каталог"}
            />
          </div>

          <div className={styles.Catrgory}>
            {/* Здесь можно отрендерить данные карточки через map из redux или запроса */}
            <Swiper
              ref={swiperRef}
              slidesPerView={6}
              spaceBetween={10}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              pagination={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <BlockTitle title={"Новости"} additionaly={"все"} />
          <div className={styles.Catrgory}>
            {/* Здесь можно отрендерить данные карточки через map из redux или запроса */}
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={10}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              pagination={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <NewaCard />
              </SwiperSlide>
              <SwiperSlide>
                <NewaCard />
              </SwiperSlide>
              <SwiperSlide>
                <NewaCard />
              </SwiperSlide>
              <SwiperSlide>
                <NewaCard />
              </SwiperSlide>
              <SwiperSlide>
                <NewaCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <BlockTitle
            title={"Аукционные товары"}
            additionaly={"перейти в каталог"}
          />

          <div className={styles.Catrgory}>
            {/* Здесь можно отрендерить данные карточки через map из redux или запроса */}
            <Swiper
              ref={swiperRef}
              slidesPerView={6}
              spaceBetween={10}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              pagination={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>

              <SwiperSlide>
                <ProductCard promotionPrice={2000} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <BlockTitle title={"Адреса магазинов"} additionaly={"все"} />

          <div className={styles.Catrgory}>
            {/* Здесь можно отрендерить данные карточки через map из redux или запроса */}
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={10}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              pagination={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <AddressCard />
              </SwiperSlide>
              <SwiperSlide>
                <AddressCard />
              </SwiperSlide>
              <SwiperSlide>
                <AddressCard />
              </SwiperSlide>
              <SwiperSlide>
                <AddressCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
