(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Is this browser sufficiently modern to continue?
if ( !( "querySelector" in document
  && "addEventListener" in window
  && "getComputedStyle" in window) ) {
    return;
}
window.document.documentElement.className += " enhanced";

var nav = document.querySelector( "nav ul" ),
navToggle = document.querySelector( "nav .skip" );

if ( navToggle ) {
  navToggle.addEventListener( "click",   function( e ) {
    if ( nav.className == "open" ) {
      nav.className = "";
    } else {
    nav.className = "open";
    }
    e.preventDefault();
  }, false );
}

},{}]},{},[1])