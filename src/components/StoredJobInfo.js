import React, { Component } from 'react'
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
    const { info, editJob } = this.props

    const slides = info.jobs.map((job) => {
      const id = job.id
      const primaryText = job.companyName
      const secondaryText = job.positionTitle
      return (
        <SwiperSlide key={id}>
          <CardSlide dataid={id} primarytext={primaryText} secondarytext={secondaryText} editJob={editJob}></CardSlide>
        </SwiperSlide>
      )
    })
    return (
      <div className="stored-job-info">
        <div>
          <img src={workerStickerMale}></img>
          <p className="job-info-heading">Your Job History</p>
          <p>
            Here you can see a card for each position you've added. Have a flick through your deck and click "edit" on any you'd like to change the details for.
            To save your changes click the "+" (save) button at the bottom.
          </p>
        </div>
        <div>
          {info.jobs.length ? (
            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards, Pagination]} pagination={{ type: 'fraction' }} className="mySwiper">
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