import * as React from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../store/store'
// import Page from '../components/Page'
import  Head from '../components/Head';
import  Nav from '../components/Nav';

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
      <Nav></Nav>
      <section className="header">
      <div className="container-fluid">
        {/*<Page title='' linkTo='/other' />*/}
        
        <div className="embed-responsive embed-responsive-16by9">
        <video autoPlay loop className="embed-responsive-item">
          <source src="static/video/Lamp-small.mp4" type="video/mp4"></source>
          {/*<source src="movie.ogg" type="video/ogg">*/}
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
      </section>
      </div>
      </Provider>
    )
  }
}
