// import React from 'react';
import { Text, View } from 'react-native';

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const HelloWorldApp = () => {
  return (
     <WebView
        originWhitelist={['*']}
        source={{ html: '<br/><h1>This is a static HTML source!</h1>'+
        '<body><h1>test</h1></body>' }}
      />

  )
}
export default HelloWorldApp;