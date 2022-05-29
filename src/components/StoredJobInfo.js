import React, { Component } from 'react'
import '../styles/stored-job-info.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'

class StoredJobInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { info } = this.props

    const slides = info.jobs.map((job) => {
      return (
        <SwiperSlide key={job.id}>
          <div className="slide-info">
            <p>{job.companyName}</p>
            <p>{job.positionTitle}</p>
            <button type="button">Edit</button>
          </div>
        </SwiperSlide>
      )
    })
    return (
      <div className="stored-job-info">
        <div>
          <p className="job-info-heading">Your job deck</p>
        </div>
        <div>
          <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
            {slides}
          </Swiper>
        </div>
      </div>
    )
  }
}

export default StoredJobInfo
