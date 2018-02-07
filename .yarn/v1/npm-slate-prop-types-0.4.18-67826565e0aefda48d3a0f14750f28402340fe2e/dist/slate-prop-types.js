(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SlatePropTypes = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = (window.Slate);

/**
 * Create a prop type checker for Slate objects with `name` and `validate`.
 *
 * @param {String} name
 * @param {Function} validate
 * @return {Function}
 */

function create(name, validate) {
  function check(isRequired, props, propName, componentName, location) {
    var value = props[propName];
    if (value == null && !isRequired) return null;
    if (value == null && isRequired) return new Error('The ' + location + ' `' + propName + '` is marked as required in `' + componentName + '`, but it was not supplied.');
    if (validate(value)) return null;
    return new Error('Invalid ' + location + ' `' + propName + '` supplied to `' + componentName + '`, expected a Slate `' + name + '` but received: ' + value);
  }

  function propType() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return check.apply(undefined, [false].concat(args));
  }

  propType.isRequired = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return check.apply(undefined, [true].concat(args));
  };

  return propType;
}

/**
 * Prop type checkers.
 *
 * @type {Object}
 */

var Types = {
  block: create('Block', function (v) {
    return _slate.Block.isBlock(v);
  }),
  blocks: create('List<Block>', function (v) {
    return _slate.Block.isBlockList(v);
  }),
  change: create('Change', function (v) {
    return _slate.Change.isChange(v);
  }),
  character: create('Character', function (v) {
    return _slate.Character.isCharacter(v);
  }),
  characters: create('List<Character>', function (v) {
    return _slate.Character.isCharacterList(v);
  }),
  data: create('Data', function (v) {
    return _slate.Data.isData(v);
  }),
  document: create('Document', function (v) {
    return _slate.Document.isDocument(v);
  }),
  history: create('History', function (v) {
    return _slate.History.isHistory(v);
  }),
  inline: create('Inline', function (v) {
    return _slate.Inline.isInline(v);
  }),
  inlines: create('Inline', function (v) {
    return _slate.Inline.isInlineList(v);
  }),
  leaf: create('Leaf', function (v) {
    return _slate.Leaf.isLeaf(v);
  }),
  leaves: create('List<Leaf>', function (v) {
    return _slate.Leaf.isLeafList(v);
  }),
  mark: create('Mark', function (v) {
    return _slate.Mark.isMark(v);
  }),
  marks: create('Set<Mark>', function (v) {
    return _slate.Mark.isMarkSet(v);
  }),
  node: create('Node', function (v) {
    return _slate.Node.isNode(v);
  }),
  nodes: create('List<Node>', function (v) {
    return _slate.Node.isNodeList(v);
  }),
  range: create('Range', function (v) {
    return _slate.Range.isRange(v);
  }),
  ranges: create('List<Range>', function (v) {
    return _slate.Range.isRangeList(v);
  }),
  schema: create('Schema', function (v) {
    return _slate.Schema.isSchema(v);
  }),
  stack: create('Stack', function (v) {
    return _slate.Stack.isStack(v);
  }),
  value: create('Value', function (v) {
    return _slate.Value.isValue(v);
  }),
  text: create('Text', function (v) {
    return _slate.Text.isText(v);
  }),
  texts: create('List<Text>', function (v) {
    return _slate.Text.isTextList(v);
  })
};

/**
 * Export.
 *
 * @type {Object}
 */

exports.default = Types;

},{}]},{},[1])(1)
});