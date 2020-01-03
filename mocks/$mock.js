/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './namespaces'

export default (client) => mockServer([
  {
    path: '/namespaces',
    methods: mock0
  }
], client, '')
