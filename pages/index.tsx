import * as React from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../store/store'
// import Page from '../components/Page'
import  Head from '../components/Head';
import  Nav from '../components/Nav';
const core_scss = require( '../scss/core.scss');

export default class Index extends React.Component {
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
      <div>
      <Head></Head>
      <style>{core_scss}</style>
      <Nav></Nav>
      <div className="container">
        {/*<Page title='' linkTo='/other' />*/}
        <h1>React + NextJs + reactstrap</h1>
      </div>
      </div>
      </Provider>
    )
  }
}
