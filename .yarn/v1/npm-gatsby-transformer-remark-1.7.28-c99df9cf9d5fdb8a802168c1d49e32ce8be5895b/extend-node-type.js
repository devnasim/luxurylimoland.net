"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require(`graphql`),
    GraphQLObjectType = _require.GraphQLObjectType,
    GraphQLList = _require.GraphQLList,
    GraphQLString = _require.GraphQLString,
    GraphQLInt = _require.GraphQLInt,
    GraphQLEnumType = _require.GraphQLEnumType;

var Remark = require(`remark`);
var select = require(`unist-util-select`);
var sanitizeHTML = require(`sanitize-html`);
var _ = require(`lodash`);
var visit = require(`unist-util-visit`);
var toHAST = require(`mdast-util-to-hast`);
var hastToHTML = require(`hast-util-to-html`);
var mdastToToc = require(`mdast-util-toc`);
var Promise = require(`bluebird`);
var prune = require(`underscore.string/prune`);
var unified = require(`unified`);
var parse = require(`remark-parse`);
var stringify = require(`remark-stringify`);
var english = require(`retext-english`);
var remark2retext = require(`remark-retext`);

var pluginsCacheStr = ``;
var astCacheKey = function astCacheKey(node) {
  return `transformer-remark-markdown-ast-${node.internal.contentDigest}-${pluginsCacheStr}`;
};
var htmlCacheKey = function htmlCacheKey(node) {
  return `transformer-remark-markdown-html-${node.internal.contentDigest}-${pluginsCacheStr}`;
};
var headingsCacheKey = function headingsCacheKey(node) {
  return `transformer-remark-markdown-headings-${node.internal.contentDigest}-${pluginsCacheStr}`;
};
var tableOfContentsCacheKey = function tableOfContentsCacheKey(node) {
  return `transformer-remark-markdown-toc-${node.internal.contentDigest}-${pluginsCacheStr}`;
};

module.exports = function (_ref, pluginOptions) {
  var type = _ref.type,
      store = _ref.store,
      pathPrefix = _ref.pathPrefix,
      getNode = _ref.getNode,
      cache = _ref.cache;

  if (type.name !== `MarkdownRemark`) {
    return {};
  }

  pluginsCacheStr = pluginOptions.plugins.map(function (p) {
    return p.name;
  }).join(``);

  return new Promise(function (resolve, reject) {
    var getAST = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(markdownNode) {
        var cachedAST, files, ast;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return cache.get(astCacheKey(markdownNode));

              case 2:
                cachedAST = _context.sent;

                if (!cachedAST) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", cachedAST);

              case 7:
                files = _.values(store.getState().nodes).filter(function (n) {
                  return n.internal.type === `File`;
                });
                _context.next = 10;
                return new Promise(function (resolve, reject) {
                  // Use Bluebird's Promise function "each" to run remark plugins serially.
                  Promise.each(pluginOptions.plugins, function (plugin) {
                    var requiredPlugin = require(plugin.resolve);
                    if (_.isFunction(requiredPlugin.mutateSource)) {
                      return requiredPlugin.mutateSource({
                        markdownNode,
                        files,
                        getNode
                      }, plugin.pluginOptions);
                    } else {
                      return Promise.resolve();
                    }
                  }).then(function () {
                    var markdownAST = remark.parse(markdownNode.internal.content);

                    // source => parse (can order parsing for dependencies) => typegen
                    //
                    // source plugins identify nodes, provide id, initial parse, know
                    // when nodes are created/removed/deleted
                    // get passed cached DataTree and return list of clean and dirty nodes.
                    // Also get passed `dirtyNodes` function which they can call with an array
                    // of node ids which will then get re-parsed and the inferred schema
                    // recreated (if inferring schema gets too expensive, can also
                    // cache the schema until a query fails at which point recreate the
                    // schema).
                    //
                    // parse plugins take data from source nodes and extend it, never mutate
                    // it. Freeze all nodes once done so typegen plugins can't change it
                    // this lets us save off the DataTree at that point as well as create
                    // indexes.
                    //
                    // typegen plugins identify further types of data that should be lazily
                    // computed due to their expense, or are hard to infer graphql type
                    // (markdown ast), or are need user input in order to derive e.g.
                    // markdown headers or date fields.
                    //
                    // wrap all resolve functions to (a) auto-memoize and (b) cache to disk any
                    // resolve function that takes longer than ~10ms (do research on this
                    // e.g. how long reading/writing to cache takes), and (c) track which
                    // queries are based on which source nodes. Also if connection of what
                    // which are always rerun if their underlying nodes change..
                    //
                    // every node type in DataTree gets a schema type automatically.
                    // typegen plugins just modify the auto-generated types to add derived fields
                    // as well as computationally expensive fields.
                    var files = _.values(store.getState().nodes).filter(function (n) {
                      return n.internal.type === `File`;
                    });
                    // Use Bluebird's Promise function "each" to run remark plugins serially.
                    Promise.each(pluginOptions.plugins, function (plugin) {
                      var requiredPlugin = require(plugin.resolve);
                      if (_.isFunction(requiredPlugin)) {
                        return requiredPlugin({
                          markdownAST,
                          markdownNode,
                          getNode,
                          files,
                          pathPrefix
                        }, plugin.pluginOptions);
                      } else {
                        return Promise.resolve();
                      }
                    }).then(function () {
                      resolve(markdownAST);
                    });
                  });
                });

              case 10:
                ast = _context.sent;


                // Save new AST to cache and return
                cache.set(astCacheKey(markdownNode), ast);
                return _context.abrupt("return", ast);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getAST(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var getHeadings = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(markdownNode) {
        var cachedHeadings, ast, headings;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return cache.get(headingsCacheKey(markdownNode));

              case 2:
                cachedHeadings = _context2.sent;

                if (!cachedHeadings) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", cachedHeadings);

              case 7:
                _context2.next = 9;
                return getAST(markdownNode);

              case 9:
                ast = _context2.sent;
                headings = select(ast, `heading`).map(function (heading) {
                  return {
                    value: _.first(select(heading, `text`).map(function (text) {
                      return text.value;
                    })),
                    depth: heading.depth
                  };
                });


                cache.set(headingsCacheKey(markdownNode), headings);
                return _context2.abrupt("return", headings);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getHeadings(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    var getTableOfContents = function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(markdownNode) {
        var cachedToc, ast, tocAst, toc, addSlugToUrl;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return cache.get(tableOfContentsCacheKey(markdownNode));

              case 2:
                cachedToc = _context3.sent;

                if (!cachedToc) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", cachedToc);

              case 7:
                _context3.next = 9;
                return getAST(markdownNode);

              case 9:
                ast = _context3.sent;
                tocAst = mdastToToc(ast);
                toc = void 0;

                if (tocAst.map) {
                  addSlugToUrl = function addSlugToUrl(node) {
                    if (node.url) {
                      node.url = [pathPrefix, markdownNode.fields.slug, node.url].join(`/`).replace(/\/\//g, `/`);
                    }
                    if (node.children) {
                      node.children = node.children.map(function (node) {
                        return addSlugToUrl(node);
                      });
                    }

                    return node;
                  };

                  tocAst.map = addSlugToUrl(tocAst.map);

                  toc = hastToHTML(toHAST(tocAst.map));
                } else {
                  toc = ``;
                }
                cache.set(tableOfContentsCacheKey(markdownNode), toc);
                return _context3.abrupt("return", toc);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getTableOfContents(_x3) {
        return _ref5.apply(this, arguments);
      };
    }();

    var getHTML = function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(markdownNode) {
        var cachedHTML, html;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return cache.get(htmlCacheKey(markdownNode));

              case 2:
                cachedHTML = _context4.sent;

                if (!cachedHTML) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", cachedHTML);

              case 7:
                _context4.next = 9;
                return new Promise(function (resolve, reject) {
                  getAST(markdownNode).then(function (ast) {
                    resolve(hastToHTML(toHAST(ast, { allowDangerousHTML: true }), {
                      allowDangerousHTML: true
                    }));
                  });
                });

              case 9:
                html = _context4.sent;


                // Save new HTML to cache and return
                cache.set(htmlCacheKey(markdownNode), html);
                return _context4.abrupt("return", html);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getHTML(_x4) {
        return _ref6.apply(this, arguments);
      };
    }();

    // Setup Remark.
    var remark = new Remark().data(`settings`, {
      commonmark: true,
      footnotes: true,
      pedantic: true
    });

    for (var _iterator = pluginOptions.plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var plugin = _ref2;

      var requiredPlugin = require(plugin.resolve);
      if (_.isFunction(requiredPlugin.setParserPlugins)) {
        for (var _iterator2 = requiredPlugin.setParserPlugins(plugin.pluginOptions), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref9;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref9 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref9 = _i2.value;
          }

          var parserPlugin = _ref9;

          if (_.isArray(parserPlugin)) {
            var parser = parserPlugin[0],
                options = parserPlugin[1];

            remark = remark.use(parser, options);
          } else {
            remark = remark.use(parserPlugin);
          }
        }
      }
    }

    var HeadingType = new GraphQLObjectType({
      name: `MarkdownHeading`,
      fields: {
        value: {
          type: GraphQLString,
          resolve(heading) {
            return heading.value;
          }
        },
        depth: {
          type: GraphQLInt,
          resolve(heading) {
            return heading.depth;
          }
        }
      }
    });

    var HeadingLevels = new GraphQLEnumType({
      name: `HeadingLevels`,
      values: {
        h1: { value: 1 },
        h2: { value: 2 },
        h3: { value: 3 },
        h4: { value: 4 },
        h5: { value: 5 },
        h6: { value: 6 }
      }
    });

    return resolve({
      html: {
        type: GraphQLString,
        resolve(markdownNode) {
          return getHTML(markdownNode);
        }
      },
      excerpt: {
        type: GraphQLString,
        args: {
          pruneLength: {
            type: GraphQLInt,
            defaultValue: 140
          }
        },
        resolve(markdownNode, _ref7) {
          var pruneLength = _ref7.pruneLength;

          if (markdownNode.excerpt) {
            return Promise.resolve(markdownNode.excerpt);
          }
          return getAST(markdownNode).then(function (ast) {
            var excerptNodes = [];
            visit(ast, function (node) {
              if (node.type === `text` || node.type === `inlineCode`) {
                excerptNodes.push(node.value);
              }
              return;
            });

            return prune(excerptNodes.join(` `), pruneLength, `…`);
          });
        }
      },
      headings: {
        type: new GraphQLList(HeadingType),
        args: {
          depth: {
            type: HeadingLevels
          }
        },
        resolve(markdownNode, _ref8) {
          var depth = _ref8.depth;

          return getHeadings(markdownNode).then(function (headings) {
            if (typeof depth === `number`) {
              headings = headings.filter(function (heading) {
                return heading.depth === depth;
              });
            }
            return headings;
          });
        }
      },
      timeToRead: {
        type: GraphQLInt,
        resolve(markdownNode) {
          return getHTML(markdownNode).then(function (html) {
            var timeToRead = 0;
            var pureText = sanitizeHTML(html, { allowTags: [] });
            var avgWPM = 265;
            var wordCount = _.words(pureText).length;
            timeToRead = Math.round(wordCount / avgWPM);
            if (timeToRead === 0) {
              timeToRead = 1;
            }
            return timeToRead;
          });
        }
      },
      tableOfContents: {
        type: GraphQLString,
        resolve(markdownNode) {
          return getTableOfContents(markdownNode);
        }
      },
      // TODO add support for non-latin languages https://github.com/wooorm/remark/issues/251#issuecomment-296731071
      wordCount: {
        type: new GraphQLObjectType({
          name: `wordCount`,
          fields: {
            paragraphs: {
              type: GraphQLInt
            },
            sentences: {
              type: GraphQLInt
            },
            words: {
              type: GraphQLInt
            }
          }
        }),
        resolve(markdownNode) {
          var counts = {};

          unified().use(parse).use(remark2retext, unified().use(english).use(count)).use(stringify).processSync(markdownNode.internal.content);

          return {
            paragraphs: counts.ParagraphNode,
            sentences: counts.SentenceNode,
            words: counts.WordNode
          };

          function count() {
            return counter;
            function counter(tree) {
              visit(tree, visitor);
              function visitor(node) {
                counts[node.type] = (counts[node.type] || 0) + 1;
              }
            }
          }
        }
      }
    });
  });
};