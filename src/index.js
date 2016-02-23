import Component, { updateQueue } from './Component'
import createClass from './createClass'
import createElement, { isValidElement, cloneElement, createFactory } from './createElement'
import * as Children from './Children'
import * as ReactDOM from './ReactDOM'
import PropTypes from './PropTypes'
import DOM from './DOM'
import * as _ from './util'

let $exports = {
    extend: _.extend,
    batchedUpdates(callback) {
        updateQueue.batchUpdate()
        callback()
    }
}

let React = _.extend({
    $exports,
    version: '0.14.7',
    cloneElement,
    isValidElement,
    createElement,
    createFactory,
    Component,
    createClass,
    Children,
    PropTypes,
    DOM
}, ReactDOM)

export default React