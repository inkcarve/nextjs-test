//** ../d.ts/_style_d.ts

import * as React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import  Clock  from './Clock';
import  Head from './Head';
const core_scss = require( '../scss/core.scss');

@inject('store') @observer
class Page extends React.Component<any, any> {
  componentDidMount () {
    this.props.store.start()
  }

  componentWillUnmount () {
    this.props.store.stop()
  }

  render () {
    return (
      <div>
      <Head></Head>
      <style>{core_scss}</style>
        <h1>{this.props.title}</h1>
        <Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} />
        <nav>
          <Link href={this.props.linkTo}><a>Navigate</a></Link>
        </nav>
      </div>
    )
  }
}

export default Page;
