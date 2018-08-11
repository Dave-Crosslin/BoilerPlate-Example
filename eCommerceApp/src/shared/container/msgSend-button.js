// @flow

import {connect} from 'react-redux'
import {msgSend} from '../action/msgSend'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'test btn'
})

const mapDispatchToProps = () => ({
  handleClick: () => {dispatch(msgSend('Success!')) },
})

export default (mapStateToProps, mapDispatchToProps) (Button)
