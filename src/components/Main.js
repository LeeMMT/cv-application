import React, { Component } from 'react'
import BuildView from './BuildView'
import ViewMode from './ViewMode'
import '../styles/main.css'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, saveInfo } = this.props

    return (
      <div>
        {data.activeView === 'preview' && <ViewMode data={data} />}
        {data.activeView === 'edit' && <BuildView data={data} saveInfo={saveInfo} />}
      </div>
    )
  }
}

export default Main
