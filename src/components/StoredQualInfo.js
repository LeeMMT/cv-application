import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import '../styles/stored-job-info.css'
import educationHistoryMale from '../stickers/education-male.svg'

class StoredQualInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { info, editQual } = this.props
    const slides = info.qualifications.map((qual) => {
      return (
        <SwiperSlide key={qual.id}>
          <div className="slide-info">
            <p>{qual.qualName}</p>
            <p>{qual.placeOfStudy}</p>
            <button type="button" data-key={qual.id} onClick={editQual}>
              Edit
            </button>
          </div>
        </SwiperSlide>
      )
    })
    return (
      <div className="stored-job-info">
        <div>
          <img src={educationHistoryMale}></img>
          <p className="job-info-heading">Your Job History</p>
          <p>
            Here you can see a card for each position you've added. Have a flick through your deck and click "edit" on any you'd like to change the details for.
            To save your changes click the "+" (save) button at the bottom.
          </p>
        </div>
        <div>
          {info.qualifications.length ? (
            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards, Pagination]} pagination={{ type: 'fraction' }} className="mySwiper">
              {slides}
            </Swiper>
          ) : (
            <div className="default-card">
              <div className="slide-info">
                <p>No qualifications added</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default StoredQualInfo
