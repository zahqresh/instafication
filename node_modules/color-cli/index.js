#!/usr/bin/env node

var hexRgb = require( 'hex-rgb' )
var argv = require( 'minimist' )( process.argv.slice( 2 ) )

argv._.forEach( hex => {
  console.log( 'rgb( ' + hexRgb( hex + '' ).join( ', ' ) + ' )' )
})




