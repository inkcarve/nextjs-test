import * as React from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../store/store'
import Page from '../components/Page'

export default class Counter extends React.Component {
  // private jj:string='ll';
  private store:any;
  static getInitialProps ({req}:{req:any}) {
    const isServer = !!req
    const store = initStore(isServer)
    return { lastUpdate: store.lastUpdate, isServer }
  }

  constructor (props:any) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Page title='Test' linkTo='/other' />
      </Provider>
    )
  }
}
