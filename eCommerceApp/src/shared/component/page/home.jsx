// @flow

import React from 'react'
import Helmet from 'react-helmet'

import {APP_NAME} from '../../config'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'header', content:'Landing Page!' },
        { property: 'title', content: APP_NAME},
      ]}
      />
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3 mb-5">{APP_NAME}</h1>
        </div>
      </div>
        <p>
          <button type="button" role="button" className="btn-primary">CLICK ME</button>
        </p>
      </div>
export default HomePage
