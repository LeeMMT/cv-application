import React, { Component, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination } from 'swiper'
import CardSlide from './CardSlide'
import 'swiper/css'
import 'swiper/css/effect-cards'
import '../styles/stored-job-info.css'
import educationHistoryMale from '../stickers/education-male.svg'

class StoredSkillsInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, cardClickHandler } = this.props

    const slides = data.map((skill) => {
      const id = skill.id
      const primaryText = skill.skillName
      return (
        <SwiperSlide key={id}>
          <CardSlide dataObject="skills" dataId={id} primaryText={primaryText} cardClickHandler={cardClickHandler}></CardSlide>
        </SwiperSlide>
      )
    })
    return (
      <div className="stored-job-info">
        <div>
          <img src={educationHistoryMale} alt=""></img>
          <p className="job-info-heading">Your Skills</p>
          <p>Add, edit or delete your skills here. When editing, save your changes by clicking the "+" (save) button below.</p>
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
                <p>No skills added</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default StoredSkillsInfo
