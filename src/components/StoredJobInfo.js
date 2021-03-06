import React, { Component, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination } from 'swiper'
import CardSlide from './CardSlide'
import 'swiper/css'
import 'swiper/css/effect-cards'
import '../styles/stored-job-info.css'
import workerStickerMale from '../stickers/work-history-male.svg'

class StoredJobInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, cardClickHandler } = this.props

    const slides = data.map((job) => {
      const id = job.id
      const primaryText = job.companyName
      const secondaryText = job.positionTitle
      const startDate = job.positionStartDate
      const endDate = job.positionEndDate
      return (
        <SwiperSlide key={id}>
          <CardSlide
            dataObject="jobs"
            dataId={id}
            primaryText={primaryText}
            secondaryText={secondaryText}
            dateOne={startDate}
            dateTwo={endDate}
            cardClickHandler={cardClickHandler}
          ></CardSlide>
        </SwiperSlide>
      )
    })
    return (
      <div className="stored-job-info">
        <div>
          <img src={workerStickerMale}></img>
          <p className="job-info-heading">Your Job History</p>
          <p>Add, edit or delete your jobs here. When editing, save your changes by clicking the "+" (save) button below.</p>
        </div>
        <div>
          {data.length ? (
            <Swiper
              slidePerView={1}
              centeredSlides={true}
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination]}
              navigation={false}
              pagination={{ type: 'fraction' }}
              className="mySwiper"
            >
              {slides}
            </Swiper>
          ) : (
            <div className="default-card">
              <div className="slide-info">
                <p>No jobs added</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default StoredJobInfo
