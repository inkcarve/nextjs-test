import * as React from 'react';
import Head from 'next/head';
const core_scss = require( '../scss/core.scss');

// const core_scss = require( '../scss/core.scss');
export default () => (
  <div>
    <Head>
      <title>My styled page</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      {/*<meta name="description" content={description} />*/}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="static/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <style>{core_scss}</style>
    </Head>
  </div>
)