/**
 * Relay v1.4.1
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule RelayCompilerPublic
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(7),
	    CodegenRunner = _require.CodegenRunner,
	    ConsoleReporter = _require.ConsoleReporter,
	    MultiReporter = _require.MultiReporter;

	module.exports = {
	  Compiler: __webpack_require__(34),
	  ConsoleReporter: ConsoleReporter,

	  /** @deprecated Use JSModuleParser. */
	  FileIRParser: __webpack_require__(40),

	  FileWriter: __webpack_require__(69),
	  IRTransforms: __webpack_require__(72),
	  JSModuleParser: __webpack_require__(40),
	  MultiReporter: MultiReporter,
	  Runner: CodegenRunner,
	  formatGeneratedModule: __webpack_require__(76)
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("fbjs/lib/invariant");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("babel-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("graphql");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("fs");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule GraphQLCompilerPublic
	 * @format
	 */

	'use strict';

	module.exports = {
	  ASTConvert: __webpack_require__(53),
	  CodegenDirectory: __webpack_require__(55),
	  CodegenRunner: __webpack_require__(56),
	  Compiler: __webpack_require__(59),
	  CompilerContext: __webpack_require__(10),
	  ConsoleReporter: __webpack_require__(60),
	  DotGraphQLParser: __webpack_require__(57),
	  ASTCache: __webpack_require__(28),
	  IRTransformer: __webpack_require__(14),
	  IRTransforms: __webpack_require__(61),
	  IRVisitor: __webpack_require__(32),
	  MultiReporter: __webpack_require__(62),
	  Parser: __webpack_require__(63),
	  Printer: __webpack_require__(18),
	  SchemaUtils: __webpack_require__(12),
	  Validator: __webpack_require__(33),
	  WatchmanClient: __webpack_require__(15),
	  filterContextForNode: __webpack_require__(23),
	  getIdentifierForArgumentValue: __webpack_require__(46),
	  getLiteralArgumentValues: __webpack_require__(48),

	  AutoAliasTransform: __webpack_require__(54),
	  FilterDirectivesTransform: __webpack_require__(30),
	  FlattenTransform: __webpack_require__(17),
	  SkipClientFieldTransform: __webpack_require__(44),
	  SkipRedundantNodesTransform: __webpack_require__(22),
	  SkipUnreachableNodeTransform: __webpack_require__(45),
	  StripUnusedVariablesTransform: __webpack_require__(74)
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule GraphQLCompilerContext
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(31),
	    createUserError = _require.createUserError;

	var ImmutableList = __webpack_require__(11).List,
	    ImmutableOrderedMap = __webpack_require__(11).OrderedMap,
	    Record = __webpack_require__(11).Record;

	var Document = Record({
	  errors: null,
	  name: null,
	  node: null
	});

	/**
	 * An immutable representation of a corpus of documents being compiled together.
	 * For each document, the context stores the IR and any validation errors.
	 */

	var GraphQLCompilerContext = function () {
	  function GraphQLCompilerContext(schema) {
	    (0, _classCallCheck3['default'])(this, GraphQLCompilerContext);

	    this._documents = new ImmutableOrderedMap();
	    this.schema = schema;
	  }

	  /**
	   * Returns the documents for the context in the order they were added.
	   */


	  GraphQLCompilerContext.prototype.documents = function documents() {
	    return this._documents.valueSeq().map(function (doc) {
	      return doc.get('node');
	    }).toJS();
	  };

	  GraphQLCompilerContext.prototype.updateSchema = function updateSchema(schema) {
	    var context = new GraphQLCompilerContext(schema);
	    context._documents = this._documents;
	    return context;
	  };

	  GraphQLCompilerContext.prototype.add = function add(node) {
	    __webpack_require__(1)(!this._documents.has(node.name), 'GraphQLCompilerContext: Duplicate document named `%s`. GraphQL ' + 'fragments and roots must have unique names.', node.name);
	    return this._update(this._documents.set(node.name, new Document({
	      name: node.name,
	      node: node
	    })));
	  };

	  GraphQLCompilerContext.prototype.addAll = function addAll(nodes) {
	    return nodes.reduce(function (ctx, definition) {
	      return ctx.add(definition);
	    }, this);
	  };

	  GraphQLCompilerContext.prototype.addError = function addError(name, error) {
	    var record = this._get(name);
	    var errors = record.get('errors');
	    if (errors) {
	      errors = errors.push(error);
	    } else {
	      errors = ImmutableList([error]);
	    }
	    return this._update(this._documents.set(name, record.set('errors', errors)));
	  };

	  GraphQLCompilerContext.prototype.get = function get(name) {
	    var record = this._documents.get(name);
	    return record && record.get('node');
	  };

	  GraphQLCompilerContext.prototype.getFragment = function getFragment(name) {
	    var record = this._documents.get(name);
	    var node = record && record.get('node');
	    if (!(node && node.kind === 'Fragment')) {
	      var childModule = name.substring(0, name.lastIndexOf('_'));
	      throw createUserError('GraphQLCompilerContext: Cannot find fragment `%s`.' + ' Please make sure the fragment exists in `%s`.', name, childModule);
	    }
	    return node;
	  };

	  GraphQLCompilerContext.prototype.getRoot = function getRoot(name) {
	    var record = this._documents.get(name);
	    var node = record && record.get('node');
	    __webpack_require__(1)(node && node.kind === 'Root', 'GraphQLCompilerContext: Expected `%s` to be a root, got `%s`.', name, node && node.kind);
	    return node;
	  };

	  GraphQLCompilerContext.prototype.getErrors = function getErrors(name) {
	    return this._get(name).get('errors');
	  };

	  GraphQLCompilerContext.prototype.remove = function remove(name) {
	    return this._update(this._documents['delete'](name));
	  };

	  GraphQLCompilerContext.prototype._get = function _get(name) {
	    var record = this._documents.get(name);
	    __webpack_require__(1)(record, 'GraphQLCompilerContext: Unknown document `%s`.', name);
	    return record;
	  };

	  GraphQLCompilerContext.prototype._update = function _update(documents) {
	    var context = new GraphQLCompilerContext(this.schema);
	    context._documents = documents;
	    return context;
	  };

	  return GraphQLCompilerContext;
	}();

	module.exports = GraphQLCompilerContext;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("immutable");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLSchemaUtils
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(3),
	    assertAbstractType = _require.assertAbstractType,
	    getNamedType = _require.getNamedType,
	    getNullableType = _require.getNullableType,
	    isType = _require.isType,
	    print = _require.print,
	    typeFromAST = _require.typeFromAST,
	    GraphQLInterfaceType = _require.GraphQLInterfaceType,
	    GraphQLList = _require.GraphQLList,
	    GraphQLObjectType = _require.GraphQLObjectType,
	    GraphQLSchema = _require.GraphQLSchema,
	    GraphQLUnionType = _require.GraphQLUnionType;

	var ID = 'id';
	var ID_TYPE = 'ID';

	/**
	 * Determine if the given type may implement the named type:
	 * - it is the named type
	 * - it implements the named interface
	 * - it is an abstract type and *some* of its concrete types may
	 *   implement the named type
	 */
	function mayImplement(schema, type, typeName) {
	  var unmodifiedType = getRawType(type);
	  return unmodifiedType.toString() === typeName || implementsInterface(unmodifiedType, typeName) || isAbstractType(unmodifiedType) && hasConcreteTypeThatImplements(schema, unmodifiedType, typeName);
	}

	function canHaveSelections(type) {
	  return type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType;
	}

	/**
	 * Implements duck typing that checks whether a type has an id field of the ID
	 * type. This is approximating what we can hopefully do with the __id proposal
	 * a bit more cleanly.
	 *
	 * https://github.com/graphql/graphql-future/blob/master/01%20-%20__id.md
	 */
	function hasID(schema, type) {
	  var unmodifiedType = getRawType(type);
	  __webpack_require__(1)(unmodifiedType instanceof GraphQLObjectType || unmodifiedType instanceof GraphQLInterfaceType, 'GraphQLSchemaUtils.hasID(): Expected a concrete type or interface, ' + 'got type `%s`.', type);
	  var idType = schema.getType(ID_TYPE);
	  var idField = unmodifiedType.getFields()[ID];
	  return idField && getRawType(idField.type) === idType;
	}

	/**
	 * Determine if a type is abstract (not concrete).
	 *
	 * Note: This is used in place of the `graphql` version of the function in order
	 * to not break `instanceof` checks with Jest. This version also unwraps
	 * non-null/list wrapper types.
	 */
	function isAbstractType(type) {
	  var rawType = getRawType(type);
	  return rawType instanceof GraphQLInterfaceType || rawType instanceof GraphQLUnionType;
	}

	function isUnionType(type) {
	  return type instanceof GraphQLUnionType;
	}

	/**
	 * Get the unmodified type, with list/null wrappers removed.
	 */
	function getRawType(type) {
	  return __webpack_require__(80)(getNamedType(type));
	}

	/**
	 * Gets the non-list type, removing the list wrapper if present.
	 */
	function getSingularType(type) {
	  var unmodifiedType = type;
	  while (unmodifiedType instanceof GraphQLList) {
	    unmodifiedType = unmodifiedType.ofType;
	  }
	  return unmodifiedType;
	}

	/**
	 * @public
	 */
	function implementsInterface(type, interfaceName) {
	  return getInterfaces(type).some(function (interfaceType) {
	    return interfaceType.toString() === interfaceName;
	  });
	}

	/**
	 * @private
	 */
	function hasConcreteTypeThatImplements(schema, type, interfaceName) {
	  return isAbstractType(type) && getConcreteTypes(schema, type).some(function (concreteType) {
	    return implementsInterface(concreteType, interfaceName);
	  });
	}

	/**
	 * @private
	 */
	function getConcreteTypes(schema, type) {
	  return schema.getPossibleTypes(assertAbstractType(type));
	}

	/**
	 * @private
	 */
	function getInterfaces(type) {
	  if (type instanceof GraphQLObjectType) {
	    return type.getInterfaces();
	  }
	  return [];
	}

	/**
	 * @public
	 *
	 * Determine if an AST node contains a fragment/operation definition.
	 */
	function isOperationDefinitionAST(ast) {
	  return ast.kind === 'FragmentDefinition' || ast.kind === 'OperationDefinition';
	}

	/**
	 * @public
	 *
	 * Determine if an AST node contains a schema definition.
	 */
	function isSchemaDefinitionAST(ast) {
	  return ast.kind === 'DirectiveDefinition' || ast.kind === 'EnumTypeDefinition' || ast.kind === 'InputObjectTypeDefinition' || ast.kind === 'InterfaceTypeDefinition' || ast.kind === 'ObjectTypeDefinition' || ast.kind === 'ScalarTypeDefinition' || ast.kind === 'TypeExtensionDefinition' || ast.kind === 'UnionTypeDefinition';
	}

	function assertTypeWithFields(type) {
	  __webpack_require__(1)(type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType, 'GraphQLSchemaUtils: Expected type `%s` to be an object or interface type.', type);
	  return type;
	}

	/**
	 * Helper for calling `typeFromAST()` with a clear warning when the type does
	 * not exist. This enables the pattern `assertXXXType(getTypeFromAST(...))`,
	 * emitting distinct errors for unknown types vs types of the wrong category.
	 */
	function getTypeFromAST(schema, ast) {
	  var type = typeFromAST(schema, ast);
	  __webpack_require__(1)(isType(type), 'GraphQLSchemaUtils: Unknown type `%s`.', print(ast));
	  return type;
	}

	/**
	 * Given a defitinition AST node, gives us a unique name for that node.
	 * Note: this can be tricky for type extensions: while types always have one
	 * name, type extensions are defined by everything inside them.
	 *
	 * TODO @mmahoney: t16495627 write tests or remove uses of this
	 */
	function definitionName(definition) {
	  switch (definition.kind) {
	    case 'DirectiveDefinition':
	    case 'EnumTypeDefinition':
	    case 'FragmentDefinition':
	    case 'InputObjectTypeDefinition':
	    case 'InterfaceTypeDefinition':
	    case 'ObjectTypeDefinition':
	    case 'ScalarTypeDefinition':
	    case 'UnionTypeDefinition':
	      return definition.name.value;
	    case 'OperationDefinition':
	      return definition.name ? definition.name.value : '';
	    case 'TypeExtensionDefinition':
	      return definition.toString();
	    case 'SchemaDefinition':
	      return 'schema';
	  }
	  throw new Error('Unkown definition kind: ' + definition.kind);
	}

	module.exports = {
	  assertTypeWithFields: assertTypeWithFields,
	  definitionName: definitionName,
	  canHaveSelections: canHaveSelections,
	  getNullableType: getNullableType,
	  getRawType: getRawType,
	  getSingularType: getSingularType,
	  getTypeFromAST: getTypeFromAST,
	  hasID: hasID,
	  implementsInterface: implementsInterface,
	  isAbstractType: isAbstractType,
	  isUnionType: isUnionType,
	  isOperationDefinitionAST: isOperationDefinitionAST,
	  isSchemaDefinitionAST: isSchemaDefinitionAST,
	  mayImplement: mayImplement
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLIRTransformer
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @public
	 *
	 * Helper for writing compiler transforms that apply "map" and/or "filter"-style
	 * operations to compiler contexts. The `visitor` argument accepts a map of IR
	 * kinds to user-defined functions that can map nodes of that kind to new values
	 * (of the same kind).
	 *
	 * If a visitor function is defined for a kind, the visitor function is
	 * responsible for traversing its children (by calling `this.traverse(node)`)
	 * and returning either the input (to indicate no changes), a new node (to
	 * indicate changes), or null/undefined (to indicate the removal of that node
	 * from the output).
	 *
	 * If a visitor function is *not* defined for a kind, a default traversal is
	 * used to evaluate its children.
	 *
	 * The `stateInitializer` argument accepts a function to construct the state for
	 * each document (fragment or root) in the context. Any documents for which the
	 * initializer returns null/undefined is deleted from the context without being
	 * traversed.
	 *
	 * Example: Alias all scalar fields with the reverse of their name:
	 *
	 * ```
	 * transform(
	 *   context,
	 *   {
	 *     ScalarField: visitScalarField,
	 *   },
	 *   () => ({}) // dummy non-null state
	 * );
	 *
	 * function visitScalarField(field: ScalarField, state: State): ?ScalarField {
	 *   // Traverse child nodes - for a scalar field these are the arguments &
	 *   // directives.
	 *   const nextField = this.traverse(field, state);
	 *   // Return a new node with a different alias.
	 *   return {
	 *     ...nextField,
	 *     alias: nextField.name.split('').reverse().join(''),
	 *   };
	 * }
	 * ```
	 */
	function transform(context, visitor, stateInitializer) {
	  var transformer = new Transformer(context, visitor);
	  var nextContext = context;
	  context.documents().forEach(function (prevNode) {
	    var state = stateInitializer(prevNode);
	    var nextNode = void 0;
	    if (state != null) {
	      nextNode = transformer.visit(prevNode, state);
	    }
	    if (!nextNode) {
	      nextContext = nextContext.remove(prevNode.name);
	    } else if (nextNode !== prevNode) {
	      nextContext = nextContext.remove(prevNode.name);
	      nextContext = nextContext.add(nextNode);
	    }
	  });
	  return nextContext;
	}

	/**
	 * @internal
	 */

	var Transformer = function () {
	  function Transformer(context, visitor) {
	    (0, _classCallCheck3['default'])(this, Transformer);

	    this._context = context;
	    this._states = [];
	    this._visitor = visitor;
	  }

	  /**
	   * @public
	   *
	   * Returns the original compiler context that is being transformed. This can
	   * be used to look up fragments by name, for example.
	   */


	  Transformer.prototype.getContext = function getContext() {
	    return this._context;
	  };

	  /**
	   * @public
	   *
	   * Transforms the node, calling a user-defined visitor function if defined for
	   * the node's kind. Uses the given state for this portion of the traversal.
	   *
	   * Note: This differs from `traverse` in that it calls a visitor function for
	   * the node itself.
	   */


	  Transformer.prototype.visit = function visit(node, state) {
	    this._states.push(state);
	    var nextNode = this._visit(node);
	    this._states.pop();
	    return nextNode;
	  };

	  /**
	   * @public
	   *
	   * Transforms the children of the given node, skipping the user-defined
	   * visitor function for the node itself. Uses the given state for this portion
	   * of the traversal.
	   *
	   * Note: This differs from `visit` in that it does not call a visitor function
	   * for the node itself.
	   */


	  Transformer.prototype.traverse = function traverse(node, state) {
	    this._states.push(state);
	    var nextNode = this._traverse(node);
	    this._states.pop();
	    return nextNode;
	  };

	  Transformer.prototype._visit = function _visit(node) {
	    var nodeVisitor = this._visitor[node.kind];
	    if (nodeVisitor) {
	      // If a handler for the kind is defined, it is responsible for calling
	      // `traverse` to transform children as necessary.
	      var _state = this._getState();
	      var nextNode = nodeVisitor.call(this, node, _state);
	      return nextNode;
	    }
	    // Otherwise traverse is called automatically.
	    return this._traverse(node);
	  };

	  Transformer.prototype._traverse = function _traverse(prevNode) {
	    var nextNode = void 0;
	    switch (prevNode.kind) {
	      case 'Argument':
	        nextNode = this._traverseChildren(prevNode, null, ['value']);
	        break;
	      case 'Literal':
	      case 'LocalArgumentDefinition':
	      case 'RootArgumentDefinition':
	      case 'Variable':
	        nextNode = prevNode;
	        break;
	      case 'Directive':
	        nextNode = this._traverseChildren(prevNode, ['args']);
	        break;
	      case 'FragmentSpread':
	      case 'ScalarField':
	        nextNode = this._traverseChildren(prevNode, ['args', 'directives']);
	        break;
	      case 'LinkedField':
	        nextNode = this._traverseChildren(prevNode, ['args', 'directives', 'selections']);
	        if (!nextNode.selections.length) {
	          nextNode = null;
	        }
	        break;
	      case 'ListValue':
	        nextNode = this._traverseChildren(prevNode, ['items']);
	        break;
	      case 'ObjectFieldValue':
	        nextNode = this._traverseChildren(prevNode, null, ['value']);
	        break;
	      case 'ObjectValue':
	        nextNode = this._traverseChildren(prevNode, ['fields']);
	        break;
	      case 'Condition':
	      case 'InlineFragment':
	        nextNode = this._traverseChildren(prevNode, ['directives', 'selections']);
	        if (!nextNode.selections.length) {
	          nextNode = null;
	        }
	        break;
	      case 'Fragment':
	      case 'Root':
	        nextNode = this._traverseChildren(prevNode, ['argumentDefinitions', 'directives', 'selections']);
	        if (!nextNode.selections.length) {
	          nextNode = null;
	        }
	        break;
	      default:
	        __webpack_require__(1)(false, 'GraphQLIRTransformer: Unknown kind `%s`.', prevNode.kind);
	    }
	    return nextNode;
	  };

	  Transformer.prototype._traverseChildren = function _traverseChildren(prevNode, pluralKeys, singularKeys) {
	    var _this = this;

	    var nextNode = void 0;
	    pluralKeys && pluralKeys.forEach(function (key) {
	      var prevItems = prevNode[key];
	      if (!prevItems) {
	        return;
	      }
	      __webpack_require__(1)(Array.isArray(prevItems), 'GraphQLIRTransformer: Expected data for `%s` to be an array, got `%s`.', key, prevItems);
	      var nextItems = _this._map(prevItems);
	      if (nextNode || nextItems !== prevItems) {
	        nextNode = nextNode || (0, _extends3['default'])({}, prevNode);
	        nextNode[key] = nextItems;
	      }
	    });
	    singularKeys && singularKeys.forEach(function (key) {
	      var prevItem = prevNode[key];
	      if (!prevItem) {
	        return;
	      }
	      var nextItem = _this._visit(prevItem);
	      if (nextNode || nextItem !== prevItem) {
	        nextNode = nextNode || (0, _extends3['default'])({}, prevNode);
	        nextNode[key] = nextItem;
	      }
	    });
	    return nextNode || prevNode;
	  };

	  Transformer.prototype._map = function _map(prevItems) {
	    var _this2 = this;

	    var nextItems = void 0;
	    prevItems.forEach(function (prevItem, index) {
	      var nextItem = _this2._visit(prevItem);
	      if (nextItems || nextItem !== prevItem) {
	        nextItems = nextItems || prevItems.slice(0, index);
	        if (nextItem) {
	          nextItems.push(nextItem);
	        }
	      }
	    });
	    return nextItems || prevItems;
	  };

	  Transformer.prototype._getState = function _getState() {
	    __webpack_require__(1)(this._states.length, 'GraphQLIRTransformer: Expected a current state to be set but found none. ' + 'This is usually the result of mismatched number of pushState()/popState() ' + 'calls.');
	    return this._states[this._states.length - 1];
	  };

	  return Transformer;
	}();

	module.exports = { transform: transform };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLWatchmanClient
	 * 
	 * @format
	 */
	'use strict';

	var _asyncToGenerator2 = __webpack_require__(13);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var GraphQLWatchmanClient = function () {
	  GraphQLWatchmanClient.isAvailable = function isAvailable() {
	    return new Promise(function (resolve) {
	      var client = new GraphQLWatchmanClient();
	      client.on('error', function () {
	        resolve(false);
	        client.end();
	      });
	      client.hasCapability('relative_root').then(function (hasRelativeRoot) {
	        resolve(hasRelativeRoot);
	        client.end();
	      }, function () {
	        resolve(false);
	        client.end();
	      });
	    });
	  };

	  function GraphQLWatchmanClient() {
	    (0, _classCallCheck3['default'])(this, GraphQLWatchmanClient);

	    this._client = new (__webpack_require__(87).Client)();
	  }

	  GraphQLWatchmanClient.prototype.command = function command() {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return new Promise(function (resolve, reject) {
	      _this._client.command(args, function (error, response) {
	        if (error) {
	          reject(error);
	        } else {
	          resolve(response);
	        }
	      });
	    });
	  };

	  GraphQLWatchmanClient.prototype.hasCapability = (() => {
	    var _ref = (0, _asyncToGenerator3.default)(function* (capability) {
	      var resp = yield this.command('list-capabilities');
	      return resp.capabilities.includes(capability);
	    });

	    function hasCapability(_x) {
	      return _ref.apply(this, arguments);
	    }

	    return hasCapability;
	  })();

	  GraphQLWatchmanClient.prototype.watchProject = (() => {
	    var _ref2 = (0, _asyncToGenerator3.default)(function* (baseDir) {
	      var resp = yield this.command('watch-project', baseDir);
	      if ('warning' in resp) {
	        console.error('Warning:', resp.warning);
	      }
	      return {
	        root: resp.watch,
	        relativePath: resp.relative_path
	      };
	    });

	    function watchProject(_x2) {
	      return _ref2.apply(this, arguments);
	    }

	    return watchProject;
	  })();

	  GraphQLWatchmanClient.prototype.on = function on(event, callback) {
	    this._client.on(event, callback);
	  };

	  GraphQLWatchmanClient.prototype.end = function end() {
	    this._client.end();
	  };

	  return GraphQLWatchmanClient;
	}();

	module.exports = GraphQLWatchmanClient;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule CodegenWatcher
	 * 
	 * @format
	 */
	'use strict';

	var _asyncToGenerator2 = __webpack_require__(13);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	let queryFiles = (() => {
	  var _ref3 = (0, _asyncToGenerator3.default)(function* (baseDir, expression, filter) {
	    var client = new (__webpack_require__(15))();

	    var _ref = yield Promise.all([client.watchProject(baseDir), getFields(client)]),
	        watchResp = _ref[0],
	        fields = _ref[1];

	    var resp = yield client.command('query', watchResp.root, {
	      expression: expression,
	      fields: fields,
	      relative_root: watchResp.relativePath
	    });
	    client.end();
	    return updateFiles(new Set(), baseDir, filter, resp.files);
	  });

	  return function queryFiles(_x, _x2, _x3) {
	    return _ref3.apply(this, arguments);
	  };
	})();

	let getFields = (() => {
	  var _ref4 = (0, _asyncToGenerator3.default)(function* (client) {
	    var fields = ['name', 'exists'];
	    if (yield client.hasCapability('field-content.sha1hex')) {
	      fields.push('content.sha1hex');
	    }
	    return fields;
	  });

	  return function getFields(_x4) {
	    return _ref4.apply(this, arguments);
	  };
	})();

	// For use when not using Watchman.


	let queryFilepaths = (() => {
	  var _ref5 = (0, _asyncToGenerator3.default)(function* (baseDir, filepaths, filter) {
	    // Construct WatchmanChange objects as an intermediate step before
	    // calling updateFiles to produce file content.
	    var files = filepaths.map(function (filepath) {
	      return {
	        name: filepath,
	        exists: true,
	        'content.sha1hex': null
	      };
	    });
	    return updateFiles(new Set(), baseDir, filter, files);
	  });

	  return function queryFilepaths(_x5, _x6, _x7) {
	    return _ref5.apply(this, arguments);
	  };
	})();

	/**
	 * Provides a simplified API to the watchman API.
	 * Given some base directory and a list of subdirectories it calls the callback
	 * with watchman change events on file changes.
	 */


	let watch = (() => {
	  var _ref6 = (0, _asyncToGenerator3.default)(function* (baseDir, expression, callback) {
	    var client = new (__webpack_require__(15))();
	    var watchResp = yield client.watchProject(baseDir);

	    yield makeSubscription(client, watchResp.root, watchResp.relativePath, expression, callback);
	  });

	  return function watch(_x8, _x9, _x10) {
	    return _ref6.apply(this, arguments);
	  };
	})();

	let makeSubscription = (() => {
	  var _ref7 = (0, _asyncToGenerator3.default)(function* (client, root, relativePath, expression, callback) {
	    client.on('subscription', function (resp) {
	      if (resp.subscription === SUBSCRIPTION_NAME) {
	        callback(resp);
	      }
	    });
	    var fields = yield getFields(client);
	    yield client.command('subscribe', root, SUBSCRIPTION_NAME, {
	      expression: expression,
	      fields: fields,
	      relative_root: relativePath
	    });
	  });

	  return function makeSubscription(_x11, _x12, _x13, _x14, _x15) {
	    return _ref7.apply(this, arguments);
	  };
	})();

	/**
	 * Further simplifies `watch` and calls the callback on every change with a
	 * full list of files that match the conditions.
	 */


	let watchFiles = (() => {
	  var _ref8 = (0, _asyncToGenerator3.default)(function* (baseDir, expression, filter, callback) {
	    var files = new Set();
	    yield watch(baseDir, expression, function (changes) {
	      if (!changes.files) {
	        // Watchmen fires a change without files when a watchman state changes,
	        // for example during an hg update.
	        return;
	      }
	      files = updateFiles(files, baseDir, filter, changes.files);
	      callback(files);
	    });
	  });

	  return function watchFiles(_x16, _x17, _x18, _x19) {
	    return _ref8.apply(this, arguments);
	  };
	})();

	/**
	 * Similar to watchFiles, but takes an async function. The `compile` function
	 * is awaited and not called in parallel. If multiple changes are triggered
	 * before a compile finishes, the latest version is called after the compile
	 * finished.
	 *
	 * TODO: Consider changing from a Promise to abortable, so we can abort mid
	 *       compilation.
	 */


	let watchCompile = (() => {
	  var _ref9 = (0, _asyncToGenerator3.default)(function* (baseDir, expression, filter, compile) {
	    var compiling = false;
	    var needsCompiling = false;
	    var latestFiles = null;

	    watchFiles(baseDir, expression, filter, (() => {
	      var _ref10 = (0, _asyncToGenerator3.default)(function* (files) {
	        needsCompiling = true;
	        latestFiles = files;
	        if (compiling) {
	          return;
	        }
	        compiling = true;
	        while (needsCompiling) {
	          needsCompiling = false;
	          yield compile(latestFiles);
	        }
	        compiling = false;
	      });

	      return function (_x24) {
	        return _ref10.apply(this, arguments);
	      };
	    })());
	  });

	  return function watchCompile(_x20, _x21, _x22, _x23) {
	    return _ref9.apply(this, arguments);
	  };
	})();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SUBSCRIPTION_NAME = 'graphql-codegen';

	function updateFiles(files, baseDir, filter, fileChanges) {
	  var fileMap = new Map();
	  files.forEach(function (file) {
	    fileMap.set(file.relPath, file);
	  });

	  fileChanges.forEach(function (_ref2) {
	    var name = _ref2.name,
	        exists = _ref2.exists,
	        hash = _ref2['content.sha1hex'];

	    var file = {
	      relPath: name,
	      hash: hash || hashFile(__webpack_require__(5).join(baseDir, name))
	    };
	    if (exists && filter(file)) {
	      fileMap.set(name, file);
	    } else {
	      fileMap['delete'](name);
	    }
	  });
	  return new Set(fileMap.values());
	}

	function hashFile(filename) {
	  var content = __webpack_require__(4).readFileSync(filename);
	  return __webpack_require__(26).createHash('sha1').update(content).digest('hex');
	}

	module.exports = {
	  queryFiles: queryFiles,
	  queryFilepaths: queryFilepaths,
	  watch: watch,
	  watchFiles: watchFiles,
	  watchCompile: watchCompile
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule FlattenTransform
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(31),
	    createUserError = _require.createUserError;

	var _require2 = __webpack_require__(18),
	    printField = _require2.printField;

	var _require3 = __webpack_require__(3),
	    GraphQLNonNull = _require3.GraphQLNonNull,
	    GraphQLList = _require3.GraphQLList;

	var RELAY = 'relay';

	var getRawType = __webpack_require__(12).getRawType,
	    isAbstractType = __webpack_require__(12).isAbstractType;

	/**
	 * Transform that flattens inline fragments, fragment spreads, and conditionals.
	 *
	 * Inline fragments are inlined (replaced with their selections) when:
	 * - The fragment type matches the type of its parent.
	 * - The fragment has an abstract type and the `flattenAbstractTypes` option has
	 *   been set.
	 * - The 'flattenInlineFragments' option has been set.
	 *
	 * Fragment spreads are inlined when the `flattenFragmentSpreads` option is set.
	 * In this case the fragment is converted to an inline fragment, which is
	 * then inlined according to the rules above.
	 *
	 * Conditions are inlined when the `flattenConditions` option is set.
	 * In this case the condition is converted to an inline fragment, which is then
	 * inlined according to the rules above.
	 */
	function transform(context, options) {
	  var flattenOptions = {
	    flattenAbstractTypes: !!(options && options.flattenAbstractTypes),
	    flattenFragmentSpreads: !!(options && options.flattenFragmentSpreads),
	    flattenInlineFragments: !!(options && options.flattenInlineFragments),
	    flattenConditions: !!(options && options.flattenConditions)
	  };
	  return context.documents().reduce(function (ctx, node) {
	    if (flattenOptions.flattenFragmentSpreads && node.kind === 'Fragment') {
	      return ctx;
	    }
	    var state = {
	      kind: 'FlattenState',
	      node: node,
	      selections: {},
	      type: node.type
	    };
	    visitNode(context, flattenOptions, state, node);
	    var flattenedNode = buildNode(state);
	    __webpack_require__(1)(flattenedNode.kind === 'Root' || flattenedNode.kind === 'Fragment', 'FlattenTransform: Expected Root `%s` to flatten back to a Root ' + ' or Fragment.', node.name);
	    return ctx.add(flattenedNode);
	  }, new (__webpack_require__(10))(context.schema));
	}

	function buildNode(state) {
	  return (0, _extends3['default'])({}, state.node, {
	    selections: Object.keys(state.selections).map(function (key) {
	      var selectionState = state.selections[key];
	      if (selectionState.kind === 'FragmentSpread' || selectionState.kind === 'ScalarField') {
	        return selectionState;
	      } else if (selectionState.kind === 'FlattenState') {
	        var _node = buildNode(selectionState);
	        __webpack_require__(1)(_node.kind !== 'Root' && _node.kind !== 'Fragment', 'FlattenTransform: got a `%s`, expected a selection.', _node.kind);
	        return _node;
	      } else {
	        __webpack_require__(1)(false, 'FlattenTransform: Unexpected kind `%s`.', selectionState.kind);
	      }
	    })
	  });
	}

	/**
	 * @internal
	 */
	function visitNode(context, options, state, node) {
	  node.selections.forEach(function (selection) {
	    if (selection.kind === 'FragmentSpread' && shouldFlattenFragmentSpread(selection, options)) {
	      __webpack_require__(1)(!selection.args.length, 'FlattenTransform: Cannot flatten fragment spread `%s` with ' + 'arguments. Use the `ApplyFragmentArgumentTransform` before flattening', selection.name);
	      var fragment = context.get(selection.name);
	      __webpack_require__(1)(fragment && fragment.kind === 'Fragment', 'FlattenTransform: Unknown fragment `%s`.', selection.name);
	      // Replace the spread with an inline fragment containing the fragment's
	      // contents
	      selection = {
	        directives: selection.directives,
	        kind: 'InlineFragment',
	        metadata: {},
	        selections: fragment.selections,
	        typeCondition: fragment.type
	      };
	    }
	    if (selection.kind === 'Condition' && options.flattenConditions) {
	      selection = {
	        directives: [],
	        kind: 'InlineFragment',
	        metadata: {},
	        selections: selection.selections,
	        typeCondition: state.type
	      };
	    }
	    if (selection.kind === 'InlineFragment' && shouldFlattenInlineFragment(selection, options, state)) {
	      visitNode(context, options, state, selection);
	      return;
	    }
	    var nodeIdentifier = __webpack_require__(47)(selection);
	    if (selection.kind === 'Condition' || selection.kind === 'InlineFragment') {
	      var selectionState = state.selections[nodeIdentifier];
	      if (!selectionState) {
	        selectionState = state.selections[nodeIdentifier] = {
	          kind: 'FlattenState',
	          node: selection,
	          selections: {},
	          type: selection.kind === 'InlineFragment' ? selection.typeCondition : state.type
	        };
	      }
	      visitNode(context, options, selectionState, selection);
	    } else if (selection.kind === 'FragmentSpread') {
	      state.selections[nodeIdentifier] = selection;
	    } else if (selection.kind === 'LinkedField') {
	      var _selectionState = state.selections[nodeIdentifier];
	      if (!_selectionState) {
	        _selectionState = state.selections[nodeIdentifier] = {
	          kind: 'FlattenState',
	          node: selection,
	          selections: {},
	          type: selection.type
	        };
	      } else {
	        __webpack_require__(1)(_selectionState.node.kind === 'LinkedField' || _selectionState.node.kind === 'ScalarField', 'FlattenTransform: Expected a Field, got %s.', _selectionState.node.kind);
	        var prevField = _selectionState.node;
	        assertUniqueArgsForAlias(selection, prevField);
	        // merge fields
	        var handles = dedupe(prevField.handles, selection.handles);
	        _selectionState.node = (0, _extends3['default'])({}, selection, {
	          handles: handles
	        });
	      }
	      visitNode(context, options, _selectionState, selection);
	    } else if (selection.kind === 'ScalarField') {
	      var field = selection;
	      var prevSelection = state.selections[nodeIdentifier];
	      if (prevSelection && (prevSelection.kind === 'ScalarField' || prevSelection.kind === 'LinkedField')) {
	        var _prevField = prevSelection;
	        assertUniqueArgsForAlias(field, _prevField);
	        if (field.handles || _prevField.handles) {
	          var _handles = dedupe(field.handles, _prevField.handles);
	          field = (0, _extends3['default'])({}, selection, {
	            handles: _handles
	          });
	        }
	      }
	      state.selections[nodeIdentifier] = field;
	    } else {
	      __webpack_require__(1)(false, 'FlattenTransform: Unknown kind `%s`.', selection.kind);
	    }
	  });
	}

	/**
	 * @internal
	 */
	function assertUniqueArgsForAlias(field, otherField) {
	  if (!areEqualFields(field, otherField)) {
	    throw createUserError('Expected all fields on the same parent with the name or alias `%s` ' + 'to have the same name and arguments. Got `%s` and `%s`.', field.alias || field.name, printField(field), printField(otherField));
	  }
	}

	/**
	 * @internal
	 */
	function shouldFlattenFragmentSpread(fragment, options) {
	  if (options.flattenFragmentSpreads) {
	    return true;
	  }
	  var relayDirective = fragment.directives.find(function (_ref) {
	    var name = _ref.name;
	    return name === RELAY;
	  });
	  if (!relayDirective) {
	    return false;
	  }

	  var _getLiteralArgumentVa = __webpack_require__(48)(relayDirective.args),
	      mask = _getLiteralArgumentVa.mask;

	  return mask === false;
	}

	/**
	 * @internal
	 */
	function shouldFlattenInlineFragment(fragment, options, state) {
	  return !!(isEquivalentType(fragment.typeCondition, state.type) || options.flattenInlineFragments || options.flattenAbstractTypes && isAbstractType(getRawType(fragment.typeCondition)));
	}

	/**
	 * @internal
	 *
	 * Verify that two fields are equal in all properties other than their
	 * selections.
	 */
	function areEqualFields(thisField, thatField) {
	  return thisField.kind === thatField.kind && thisField.name === thatField.name && thisField.alias === thatField.alias && __webpack_require__(75)(thisField.args, thatField.args);
	}

	/**
	 * @internal
	 */
	function dedupe() {
	  var uniqueItems = new Map();

	  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
	    arrays[_key] = arguments[_key];
	  }

	  arrays.forEach(function (items) {
	    items && items.forEach(function (item) {
	      uniqueItems.set(__webpack_require__(24)(item), item);
	    });
	  });
	  return Array.from(uniqueItems.values());
	}

	/**
	 *
	 * @internal
	 * Determine if a type is the same type (same name and class) as another type.
	 * Needed if we're comparing IRs created at different times: we don't yet have
	 * an IR schema, so the type we assign to an IR field could be !== than
	 * what we assign to it after adding some schema definitions or extensions.
	 */
	function isEquivalentType(typeA, typeB) {
	  // Easy short-circuit: equal types are equal.
	  if (typeA === typeB) {
	    return true;
	  }

	  // If either type is non-null, the other must also be non-null.
	  if (typeA instanceof GraphQLNonNull && typeB instanceof GraphQLNonNull) {
	    return isEquivalentType(typeA.ofType, typeB.ofType);
	  }

	  // If either type is a list, the other must also be a list.
	  if (typeA instanceof GraphQLList && typeB instanceof GraphQLList) {
	    return isEquivalentType(typeA.ofType, typeB.ofType);
	  }

	  // Make sure the two types are of the same class
	  if (typeA.constructor.name === typeB.constructor.name) {
	    var rawA = getRawType(typeA);
	    var rawB = getRawType(typeB);

	    // And they must have the exact same name
	    return rawA.name === rawB.name;
	  }

	  // Otherwise the types are not equal.
	  return false;
	}

	module.exports = {
	  transform: transform
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule GraphQLIRPrinter
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(29),
	    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

	var _require2 = __webpack_require__(3),
	    GraphQLEnumType = _require2.GraphQLEnumType,
	    GraphQLInputObjectType = _require2.GraphQLInputObjectType,
	    GraphQLList = _require2.GraphQLList,
	    GraphQLNonNull = _require2.GraphQLNonNull;

	var INDENT = '  ';

	/**
	 * Converts a GraphQLIR node into a GraphQL string. Custom Relay
	 * extensions (directives) are not supported; to print fragments with
	 * variables or fragment spreads with arguments, transform the node
	 * prior to printing.
	 */
	function print(node) {
	  if (node.kind === 'Fragment') {
	    return 'fragment ' + node.name + ' on ' + String(node.type) + printFragmentArgumentDefinitions(node.argumentDefinitions) + printDirectives(node.directives) + printSelections(node, '') + '\n';
	  } else if (node.kind === 'Root') {
	    return node.operation + ' ' + node.name + printArgumentDefinitions(node.argumentDefinitions) + printDirectives(node.directives) + printSelections(node, '') + '\n';
	  } else {
	    __webpack_require__(1)(false, 'GraphQLIRPrinter: Unsupported IR node `%s`.', node.kind);
	  }
	}

	function printSelections(node, indent, parentCondition) {
	  var selections = node.selections;
	  if (selections == null) {
	    return '';
	  }
	  var printed = selections.map(function (selection) {
	    return printSelection(selection, indent, parentCondition);
	  });
	  return printed.length ? ' {\n' + (indent + INDENT) + printed.join('\n' + indent + INDENT) + '\n' + indent + '}' : '';
	}

	/**
	 * Prints a field without subselections.
	 */
	function printField(field) {
	  var parentCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  return (field.alias != null ? field.alias + ': ' + field.name : field.name) + printArguments(field.args) + parentCondition + printDirectives(field.directives) + printHandles(field);
	}

	function printSelection(selection, indent, parentCondition) {
	  parentCondition = parentCondition || '';
	  var str = void 0;
	  if (selection.kind === 'LinkedField') {
	    str = printField(selection, parentCondition);
	    str += printSelections(selection, indent + INDENT);
	  } else if (selection.kind === 'ScalarField') {
	    str = printField(selection, parentCondition);
	  } else if (selection.kind === 'InlineFragment') {
	    str = '... on ' + selection.typeCondition.toString();
	    str += parentCondition;
	    str += printDirectives(selection.directives);
	    str += printSelections(selection, indent + INDENT);
	  } else if (selection.kind === 'FragmentSpread') {
	    str = '...' + selection.name;
	    str += parentCondition;
	    str += printFragmentArguments(selection.args);
	    str += printDirectives(selection.directives);
	  } else if (selection.kind === 'Condition') {
	    var value = printValue(selection.condition);
	    // For Flow
	    __webpack_require__(1)(value != null, 'GraphQLIRPrinter: Expected a variable for condition, got a literal `null`.');
	    var condStr = selection.passingValue ? ' @include' : ' @skip';
	    condStr += '(if: ' + value + ')';
	    condStr += parentCondition;
	    // For multi-selection conditions, pushes the condition down to each
	    var subSelections = selection.selections.map(function (sel) {
	      return printSelection(sel, indent, condStr);
	    });
	    str = subSelections.join('\n' + INDENT);
	  } else {
	    __webpack_require__(1)(false, 'GraphQLIRPrinter: Unknown selection kind `%s`.', selection.kind);
	  }
	  return str;
	}

	function printArgumentDefinitions(argumentDefinitions) {
	  var printed = argumentDefinitions.map(function (def) {
	    var str = '$' + def.name + ': ' + def.type.toString();
	    if (def.defaultValue != null) {
	      str += ' = ' + printLiteral(def.defaultValue, def.type);
	    }
	    return str;
	  });
	  return printed.length ? '(\n' + INDENT + printed.join('\n' + INDENT) + '\n)' : '';
	}

	function printFragmentArgumentDefinitions(argumentDefinitions) {
	  var printed = void 0;
	  argumentDefinitions.forEach(function (def) {
	    if (def.kind !== 'LocalArgumentDefinition') {
	      return;
	    }
	    printed = printed || [];
	    var str = def.name + ': {type: "' + def.type.toString() + '"';
	    if (def.defaultValue != null) {
	      str += ', defaultValue: ' + printLiteral(def.defaultValue, def.type);
	    }
	    str += '}';
	    printed.push(str);
	  });
	  return printed && printed.length ? ' @argumentDefinitions(\n' + INDENT + printed.join('\n' + INDENT) + '\n)' : '';
	}

	function printHandles(field) {
	  if (!field.handles) {
	    return '';
	  }
	  var printed = field.handles.map(function (handle) {
	    // For backward compatibility and also because this module is shared by ComponentScript.
	    var key = handle.key === DEFAULT_HANDLE_KEY ? '' : ', key: "' + handle.key + '"';
	    var filters = handle.filters == null ? '' : ', filters: ' + JSON.stringify(handle.filters.sort());
	    return '@__clientField(handle: "' + handle.name + '"' + key + filters + ')';
	  });
	  return printed.length ? ' ' + printed.join(' ') : '';
	}

	function printDirectives(directives) {
	  var printed = directives.map(function (directive) {
	    return '@' + directive.name + printArguments(directive.args);
	  });
	  return printed.length ? ' ' + printed.join(' ') : '';
	}

	function printFragmentArguments(args) {
	  var printedArgs = printArguments(args);
	  if (!printedArgs.length) {
	    return '';
	  }
	  return ' @arguments' + printedArgs;
	}

	function printArguments(args) {
	  var printed = [];
	  args.forEach(function (arg) {
	    var printedValue = printValue(arg.value, arg.type);
	    if (printedValue != null) {
	      printed.push(arg.name + ': ' + printedValue);
	    }
	  });
	  return printed.length ? '(' + printed.join(', ') + ')' : '';
	}

	function printValue(value, type) {
	  if (value.kind === 'Variable') {
	    return '$' + value.variableName;
	  } else if (value.kind === 'ObjectValue') {
	    __webpack_require__(1)(type instanceof GraphQLInputObjectType, 'GraphQLIRPrinter: Need an InputObject type to print objects.');

	    var typeFields = type.getFields();
	    var pairs = value.fields.map(function (field) {
	      var innerValue = printValue(field.value, typeFields[field.name].type);
	      return innerValue == null ? null : field.name + ': ' + innerValue;
	    }).filter(Boolean);

	    return '{' + pairs.join(', ') + '}';
	  } else if (value.kind === 'ListValue') {
	    __webpack_require__(1)(type instanceof GraphQLList, 'GraphQLIRPrinter: Need a type in order to print arrays.');
	    var innerType = type.ofType;
	    return '[' + value.items.map(function (i) {
	      return printValue(i, innerType);
	    }).join(', ') + ']';
	  } else if (value.value != null) {
	    return printLiteral(value.value, type);
	  } else {
	    return null;
	  }
	}

	function printLiteral(value, type) {
	  if (type instanceof GraphQLNonNull) {
	    type = type.ofType;
	  }
	  if (type instanceof GraphQLEnumType) {
	    __webpack_require__(1)(typeof value === 'string', 'GraphQLIRPrinter: Expected value of type %s to be a string, got `%s`.', type.name, value);
	    return value;
	  }
	  if (Array.isArray(value)) {
	    __webpack_require__(1)(type instanceof GraphQLList, 'GraphQLIRPrinter: Need a type in order to print arrays.');
	    var itemType = type.ofType;
	    return '[' + value.map(function (item) {
	      return printLiteral(item, itemType);
	    }).join(', ') + ']';
	  } else if (typeof value === 'object' && value) {
	    var fields = [];
	    __webpack_require__(1)(type instanceof GraphQLInputObjectType, 'GraphQLIRPrinter: Need an InputObject type to print objects.');
	    var typeFields = type.getFields();
	    for (var key in value) {
	      if (value.hasOwnProperty(key)) {
	        fields.push(key + ': ' + printLiteral(value[key], typeFields[key].type));
	      }
	    }
	    return '{' + fields.join(', ') + '}';
	  } else {
	    return JSON.stringify(value);
	  }
	}

	module.exports = { print: print, printField: printField };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule RelayConnectionTransform
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    getLiteralArgumentValues = _require.getLiteralArgumentValues,
	    IRTransformer = _require.IRTransformer,
	    SchemaUtils = _require.SchemaUtils;

	var _require2 = __webpack_require__(67),
	    AFTER = _require2.AFTER,
	    BEFORE = _require2.BEFORE,
	    FIRST = _require2.FIRST,
	    KEY = _require2.KEY,
	    LAST = _require2.LAST;
	// TODO T21875029 ../../../relay-runtime/RelayRuntime


	var _require3 = __webpack_require__(89),
	    ConnectionInterface = _require3.ConnectionInterface;

	var _require4 = __webpack_require__(3),
	    assertCompositeType = _require4.assertCompositeType,
	    GraphQLInterfaceType = _require4.GraphQLInterfaceType,
	    GraphQLList = _require4.GraphQLList,
	    GraphQLObjectType = _require4.GraphQLObjectType,
	    GraphQLScalarType = _require4.GraphQLScalarType,
	    GraphQLUnionType = _require4.GraphQLUnionType,
	    parse = _require4.parse;
	// TODO T21875029 ../../../relay-runtime/handlers/connection/RelayConnectionHandler


	var CONNECTION = 'connection';

	/**
	 * @public
	 *
	 * Transforms fields with the `@connection` directive:
	 * - Verifies that the field type is connection-like.
	 * - Adds a `handle` property to the field, either the user-provided `handle`
	 *   argument or the default value "connection".
	 * - Inserts a sub-fragment on the field to ensure that standard connection
	 *   fields are fetched (e.g. cursors, node ids, page info).
	 */
	function transform(context) {
	  return IRTransformer.transform(context, {
	    Fragment: visitFragmentOrRoot,
	    LinkedField: visitLinkedField,
	    Root: visitFragmentOrRoot
	  }, function () {
	    return {
	      path: [],
	      connectionMetadata: [],
	      definitionName: null
	    };
	  });
	}

	var SCHEMA_EXTENSION = 'directive @connection(key: String!, filters: [String]) on FIELD';

	/**
	 * @internal
	 */
	function visitFragmentOrRoot(node, options) {
	  var passedOptions = (0, _extends3['default'])({}, options, {
	    definitionName: node.name
	  });
	  var transformedNode = this.traverse(node, passedOptions);
	  var connectionMetadata = passedOptions.connectionMetadata;
	  if (connectionMetadata.length) {
	    return (0, _extends3['default'])({}, transformedNode, {
	      metadata: (0, _extends3['default'])({}, transformedNode.metadata, {
	        connection: connectionMetadata
	      })
	    });
	  }
	  return transformedNode;
	}

	/**
	 * @internal
	 */
	function visitLinkedField(field, options) {
	  var isPlural = SchemaUtils.getNullableType(field.type) instanceof GraphQLList;
	  options.path.push(isPlural ? null : field.alias || field.name);
	  var transformedField = this.traverse(field, options);
	  var connectionDirective = field.directives.find(function (directive) {
	    return directive.name === CONNECTION;
	  });
	  if (!connectionDirective) {
	    options.path.pop();
	    return transformedField;
	  }
	  var definitionName = options.definitionName;

	  __webpack_require__(1)(definitionName, 'RelayConnectionTransform: Transform error, expected a name to have ' + 'been set by the parent operation or fragment definition.');
	  validateConnectionSelection(definitionName, transformedField);
	  validateConnectionType(definitionName, transformedField.type);

	  var pathHasPlural = options.path.includes(null);
	  var firstArg = findArg(transformedField, FIRST);
	  var lastArg = findArg(transformedField, LAST);
	  var direction = null;
	  var countArg = null;
	  var cursorArg = null;
	  if (firstArg && !lastArg) {
	    direction = 'forward';
	    countArg = firstArg;
	    cursorArg = findArg(transformedField, AFTER);
	  } else if (lastArg && !firstArg) {
	    direction = 'backward';
	    countArg = lastArg;
	    cursorArg = findArg(transformedField, BEFORE);
	  }
	  var countVariable = countArg && countArg.value.kind === 'Variable' ? countArg.value.variableName : null;
	  var cursorVariable = cursorArg && cursorArg.value.kind === 'Variable' ? cursorArg.value.variableName : null;
	  options.connectionMetadata.push({
	    count: countVariable,
	    cursor: cursorVariable,
	    direction: direction,
	    path: pathHasPlural ? null : [].concat((0, _toConsumableArray3['default'])(options.path))
	  });
	  options.path.pop();

	  var _getLiteralArgumentVa = getLiteralArgumentValues(connectionDirective.args),
	      key = _getLiteralArgumentVa.key,
	      filters = _getLiteralArgumentVa.filters;

	  __webpack_require__(1)(typeof key === 'string', 'RelayConnectionTransform: Expected the %s argument to @%s to ' + 'be a string literal for field %s', KEY, CONNECTION, field.name);
	  var postfix = '' + (field.alias || field.name);
	  __webpack_require__(1)(key.endsWith('_' + postfix), 'RelayConnectionTransform: Expected the %s argument to @%s to ' + 'be of form <SomeName>_%s, but get %s. For detailed explanation, check out the dex page ' + 'https://facebook.github.io/relay/docs/pagination-container.html#connection-directive', KEY, CONNECTION, postfix, key);

	  var generateFilters = function generateFilters() {
	    var filteredVariableArgs = field.args.filter(function (arg) {
	      return !ConnectionInterface.isConnectionCall({
	        name: arg.name,
	        value: null
	      });
	    }).map(function (arg) {
	      return arg.name;
	    });
	    return filteredVariableArgs.length === 0 ? null : filteredVariableArgs;
	  };

	  var handle = {
	    name: CONNECTION,
	    key: key,
	    filters: filters || generateFilters()
	  };

	  if (direction !== null) {
	    var fragment = generateConnectionFragment(this.getContext(), transformedField.type, direction);
	    transformedField = (0, _extends3['default'])({}, transformedField, {
	      selections: transformedField.selections.concat(fragment)
	    });
	  }
	  return (0, _extends3['default'])({}, transformedField, {
	    directives: transformedField.directives.filter(function (directive) {
	      return directive.name !== CONNECTION;
	    }),
	    handles: transformedField.handles ? [].concat((0, _toConsumableArray3['default'])(transformedField.handles), [handle]) : [handle]
	  });
	}

	/**
	 * @internal
	 *
	 * Generates a fragment on the given type that fetches the minimal connection
	 * fields in order to merge different pagination results together at runtime.
	 */
	function generateConnectionFragment(context, type, direction) {
	  var _ConnectionInterface$ = ConnectionInterface.get(),
	      CURSOR = _ConnectionInterface$.CURSOR,
	      EDGES = _ConnectionInterface$.EDGES,
	      END_CURSOR = _ConnectionInterface$.END_CURSOR,
	      HAS_NEXT_PAGE = _ConnectionInterface$.HAS_NEXT_PAGE,
	      HAS_PREV_PAGE = _ConnectionInterface$.HAS_PREV_PAGE,
	      NODE = _ConnectionInterface$.NODE,
	      PAGE_INFO = _ConnectionInterface$.PAGE_INFO,
	      START_CURSOR = _ConnectionInterface$.START_CURSOR;

	  var compositeType = assertCompositeType(SchemaUtils.getNullableType(type));

	  var pageInfo = PAGE_INFO;
	  if (direction === 'forward') {
	    pageInfo += '{\n      ' + END_CURSOR + '\n      ' + HAS_NEXT_PAGE + '\n    }';
	  } else {
	    pageInfo += '{\n      ' + HAS_PREV_PAGE + '\n      ' + START_CURSOR + '\n    }';
	  }

	  var fragmentString = 'fragment ConnectionFragment on ' + String(compositeType) + ' {\n      ' + EDGES + ' {\n        ' + CURSOR + '\n        ' + NODE + ' {\n          __typename # rely on GenerateRequisiteFieldTransform to add "id"\n        }\n      }\n      ' + pageInfo + '\n    }';

	  var ast = parse(fragmentString);
	  var fragmentAST = ast.definitions[0];
	  __webpack_require__(1)(fragmentAST && fragmentAST.kind === 'FragmentDefinition', 'RelayConnectionTransform: Expected a fragment definition AST.');
	  var fragment = __webpack_require__(20).transform(context.schema, fragmentAST);
	  __webpack_require__(1)(fragment && fragment.kind === 'Fragment', 'RelayConnectionTransform: Expected a connection fragment.');
	  return {
	    directives: [],
	    kind: 'InlineFragment',
	    metadata: null,
	    selections: fragment.selections,
	    typeCondition: compositeType
	  };
	}

	function findArg(field, argName) {
	  return field.args && field.args.find(function (arg) {
	    return arg.name === argName;
	  });
	}

	/**
	 * @internal
	 *
	 * Validates that the selection is a valid connection:
	 * - Specifies a first or last argument to prevent accidental, unconstrained
	 *   data access.
	 * - Has an `edges` selection, otherwise there is nothing to paginate.
	 *
	 * TODO: This implementation requires the edges field to be a direct selection
	 * and not contained within an inline fragment or fragment spread. It's
	 * technically possible to remove this restriction if this pattern becomes
	 * common/necessary.
	 */
	function validateConnectionSelection(definitionName, field) {
	  var _ConnectionInterface$2 = ConnectionInterface.get(),
	      EDGES = _ConnectionInterface$2.EDGES;

	  __webpack_require__(1)(findArg(field, FIRST) || findArg(field, LAST), 'RelayConnectionTransform: Expected field `%s: %s` to have a %s or %s ' + 'argument in document `%s`.', field.name, field.type, FIRST, LAST, definitionName);
	  __webpack_require__(1)(field.selections.some(function (selection) {
	    return selection.kind === 'LinkedField' && selection.name === EDGES;
	  }), 'RelayConnectionTransform: Expected field `%s: %s` to have a %s ' + 'selection in document `%s`.', field.name, field.type, EDGES, definitionName);
	}

	/**
	 * @internal
	 *
	 * Validates that the type satisfies the Connection specification:
	 * - The type has an edges field, and edges have scalar `cursor` and object
	 *   `node` fields.
	 * - The type has a page info field which is an object with the correct
	 *   subfields.
	 */
	function validateConnectionType(definitionName, type) {
	  var _ConnectionInterface$3 = ConnectionInterface.get(),
	      CURSOR = _ConnectionInterface$3.CURSOR,
	      EDGES = _ConnectionInterface$3.EDGES,
	      END_CURSOR = _ConnectionInterface$3.END_CURSOR,
	      HAS_NEXT_PAGE = _ConnectionInterface$3.HAS_NEXT_PAGE,
	      HAS_PREV_PAGE = _ConnectionInterface$3.HAS_PREV_PAGE,
	      NODE = _ConnectionInterface$3.NODE,
	      PAGE_INFO = _ConnectionInterface$3.PAGE_INFO,
	      START_CURSOR = _ConnectionInterface$3.START_CURSOR;

	  var typeWithFields = SchemaUtils.assertTypeWithFields(SchemaUtils.getNullableType(type));
	  var typeFields = typeWithFields.getFields();
	  var edges = typeFields[EDGES];

	  __webpack_require__(1)(edges, 'RelayConnectionTransform: Expected type `%s` to have an %s field in ' + 'document `%s`.', type, EDGES, definitionName);

	  var edgesType = SchemaUtils.getNullableType(edges.type);
	  __webpack_require__(1)(edgesType instanceof GraphQLList, 'RelayConnectionTransform: Expected `%s` field on type `%s` to be a ' + 'list type in document `%s`.', EDGES, type, definitionName);
	  var edgeType = SchemaUtils.getNullableType(edgesType.ofType);
	  __webpack_require__(1)(edgeType instanceof GraphQLObjectType, 'RelayConnectionTransform: Expected %s field on type `%s` to be a list ' + 'of objects in document `%s`.', EDGES, type, definitionName);

	  var node = edgeType.getFields()[NODE];
	  __webpack_require__(1)(node, 'RelayConnectionTransform: Expected type `%s` to have an %s.%s field in ' + 'document `%s`.', type, EDGES, NODE, definitionName);
	  var nodeType = SchemaUtils.getNullableType(node.type);
	  if (!(nodeType instanceof GraphQLInterfaceType || nodeType instanceof GraphQLUnionType || nodeType instanceof GraphQLObjectType)) {
	    __webpack_require__(1)(false, 'RelayConnectionTransform: Expected type `%s` to have an %s.%s field' + 'for which the type is an interface, object, or union in document `%s`.', type, EDGES, NODE, definitionName);
	  }

	  var cursor = edgeType.getFields()[CURSOR];
	  if (!cursor || !(SchemaUtils.getNullableType(cursor.type) instanceof GraphQLScalarType)) {
	    __webpack_require__(1)(false, 'RelayConnectionTransform: Expected type `%s` to have an ' + '%s.%s field for which the type is a scalar in document `%s`.', type, EDGES, CURSOR, definitionName);
	  }

	  var pageInfo = typeFields[PAGE_INFO];
	  __webpack_require__(1)(pageInfo, 'RelayConnectionTransform: Expected type `%s` to have a %s field ' + 'in document `%s`.', type, PAGE_INFO, definitionName);
	  var pageInfoType = SchemaUtils.getNullableType(pageInfo.type);
	  if (!(pageInfoType instanceof GraphQLObjectType)) {
	    __webpack_require__(1)(false, 'RelayConnectionTransform: Expected type `%s` to have a %s field for ' + 'which the type is an object in document `%s`.', type, PAGE_INFO, definitionName);
	  }

	  [END_CURSOR, HAS_NEXT_PAGE, HAS_PREV_PAGE, START_CURSOR].forEach(function (fieldName) {
	    var pageInfoField = pageInfoType.getFields()[fieldName];
	    if (!pageInfoField || !(SchemaUtils.getNullableType(pageInfoField.type) instanceof GraphQLScalarType)) {
	      __webpack_require__(1)(false, 'RelayConnectionTransform: Expected type `%s` to have an ' + '%s field for which the type is an scalar in document `%s`.', pageInfo.type, fieldName, definitionName);
	    }
	  });
	}

	module.exports = {
	  CONNECTION: CONNECTION,
	  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
	  transform: transform
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayParser
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(85));

	var _inherits3 = _interopRequireDefault(__webpack_require__(84));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    Parser = _require.Parser,
	    SchemaUtils = _require.SchemaUtils;

	var _require2 = __webpack_require__(3),
	    assertAbstractType = _require2.assertAbstractType,
	    isAbstractType = _require2.isAbstractType;

	var getRawType = SchemaUtils.getRawType;

	var RelayParser = function (_Parser) {
	  (0, _inherits3['default'])(RelayParser, _Parser);

	  function RelayParser(schema, definition) {
	    (0, _classCallCheck3['default'])(this, RelayParser);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _Parser.call(this, schema, definition));

	    _this._definition = definition;
	    _this._schema = schema;
	    return _this;
	  }

	  /**
	   * Find the definition of a field of the specified type.
	   */


	  RelayParser.prototype.getFieldDefinition = function getFieldDefinition(parentType, fieldName, fieldAST) {
	    var schemaFieldDef = _Parser.prototype.getFieldDefinition.call(this, parentType, fieldName, fieldAST);
	    if (!schemaFieldDef) {
	      var type = getRawType(parentType);
	      schemaFieldDef = getClassicFieldDefinition(this._schema, type, fieldName, fieldAST);
	    }
	    return schemaFieldDef || null;
	  };

	  return RelayParser;
	}(Parser);

	function getName(ast) {
	  var name = ast.name ? ast.name.value : null;
	  __webpack_require__(1)(typeof name === 'string', 'RelayParser: Expected ast node `%s` to have a name.', ast);
	  return name;
	}

	function getClassicFieldDefinition(schema, type, fieldName, fieldAST) {
	  if (isAbstractType(type) && fieldAST && fieldAST.directives && fieldAST.directives.some(function (directive) {
	    return getName(directive) === 'fixme_fat_interface';
	  })) {
	    var possibleTypes = schema.getPossibleTypes(assertAbstractType(type));
	    var schemaFieldDef = void 0;

	    var _loop = function _loop(ii) {
	      var possibleField = possibleTypes[ii].getFields()[fieldName];
	      if (possibleField) {
	        // Fat interface fields can have differing arguments. Try to return
	        // a field with matching arguments, but still return a field if the
	        // arguments do not match.
	        schemaFieldDef = possibleField;
	        if (fieldAST && fieldAST.arguments) {
	          var argumentsAllExist = fieldAST.arguments.every(function (argument) {
	            return possibleField.args.find(function (argDef) {
	              return argDef.name === getName(argument);
	            });
	          });
	          if (argumentsAllExist) {
	            return 'break';
	          }
	        }
	      }
	    };

	    for (var ii = 0; ii < possibleTypes.length; ii++) {
	      var _ret = _loop(ii);

	      if (_ret === 'break') break;
	    }
	    return schemaFieldDef;
	  }
	}

	module.exports = RelayParser;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayRelayDirectiveTransform
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    CompilerContext = _require.CompilerContext,
	    IRTransformer = _require.IRTransformer,
	    getLiteralArgumentValues = _require.getLiteralArgumentValues;

	var RELAY = 'relay';
	var PLURAL = 'plural';
	var SCHEMA_EXTENSION = 'directive @relay(\n  # Marks a connection field as containing nodes without \'id\' fields.\n  # This is used to silence the warning when diffing connections.\n  isConnectionWithoutNodeID: Boolean,\n\n  # Marks a fragment as intended for pattern matching (as opposed to fetching).\n  # Used in Classic only.\n  pattern: Boolean,\n\n  # Marks a fragment as being backed by a GraphQLList.\n  plural: Boolean,\n\n  # Marks a fragment spread which should be unmasked if provided false\n  mask: Boolean = true,\n\n  # Selectively pass variables down into a fragment. Only used in Classic.\n  variables: [String!],\n) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT | FIELD';

	/**
	 * A transform that extracts `@relay(plural: Boolean)` directives and converts
	 * them to metadata that can be accessed at runtime.
	 */
	function transform(context) {
	  return IRTransformer.transform(context, {
	    Fragment: visitFragment
	  }, function () {
	    return {};
	  } // empty state
	  );
	}

	function visitFragment(fragment) {
	  var relayDirective = fragment.directives.find(function (_ref) {
	    var name = _ref.name;
	    return name === RELAY;
	  });
	  if (!relayDirective) {
	    return fragment;
	  }

	  var _getLiteralArgumentVa = getLiteralArgumentValues(relayDirective.args),
	      plural = _getLiteralArgumentVa.plural;

	  __webpack_require__(1)(plural === undefined || typeof plural === 'boolean', 'RelayRelayDirectiveTransform: Expected the %s argument to @%s to be ' + 'a boolean literal or not specified.', PLURAL, RELAY);
	  return (0, _extends3['default'])({}, fragment, {
	    directives: fragment.directives.filter(function (directive) {
	      return directive !== relayDirective;
	    }),
	    metadata: (0, _extends3['default'])({}, fragment.metadata || {}, {
	      plural: plural
	    })
	  });
	}

	module.exports = {
	  RELAY: RELAY,
	  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
	  transform: transform
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule SkipRedundantNodesTransform
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var IMap = __webpack_require__(11).Map;

	/**
	 * A transform that removes redundant fields and fragment spreads. Redundancy is
	 * defined in this context as any selection that is guaranteed to already be
	 * fetched by an ancestor selection. This can occur in two cases:
	 *
	 * 1. Simple duplicates at the same level of the document can always be skipped:
	 *
	 * ```
	 * fragment Foo on FooType {
	 *   id
	 *   id
	 *   ...Bar
	 *   ...Bar
	 * }
	 * ```
	 *
	 * Becomes
	 *
	 * ```
	 * fragment Foo on FooType {
	 *   id
	 *   ...Bar
	 * }
	 * ```
	 *
	 * 2. Inline fragments and conditions introduce the possibility for duplication
	 * at different levels of the tree. Whenever a selection is fetched in a parent,
	 * it is redundant to also fetch it in a child:
	 *
	 * ```
	 * fragment Foo on FooType {
	 *   id
	 *   ... on OtherType {
	 *     id # 1
	 *   }
	 *   ... on FooType @include(if: $cond) {
	 *     id # 2
	 *   }
	 * }
	 * ```
	 *
	 * Becomes:
	 *
	 * ```
	 * fragment Foo on FooType {
	 *   id
	 * }
	 * ```
	 *
	 * In this example:
	 * - 1 can be skipped because `id` is already fetched by the parent. Even
	 *   though the type is different (FooType/OtherType), the inline fragment
	 *   cannot match without the outer fragment matching so the outer `id` is
	 *   guaranteed to already be fetched.
	 * - 2 can be skipped for similar reasons: it doesn't matter if the condition
	 *   holds, `id` is already fetched by the parent regardless.
	 *
	 * This transform also handles more complicated cases in which selections are
	 * nested:
	 *
	 * ```
	 * fragment Foo on FooType {
	 *   a {
	 *     bb
	 *   }
	 *   ... on OtherType {
	 *     a {
	 *       bb # 1
	 *       cc
	 *     }
	 *   }
	*  }
	 * ```
	 *
	 * Becomes
	 *
	 * ```
	 * fragment Foo on FooType {
	 *   a {
	 *     bb
	 *   }
	 *   ... on OtherType {
	 *     a {
	 *       cc
	 *     }
	 *   }
	*  }
	 * ```
	 *
	 * 1 can be skipped because it is already fetched at the outer level.
	 */


	/**
	 * A simplified representation of a document: keys in the map are unique
	 * identifiers for the selections of a node, values are either null (for scalars)
	 * or nested maps for items with subselections (linked fields, inline fragments,
	 * etc).
	 */
	function transform(context) {
	  return context.documents().reduce(function (ctx, node) {
	    var selectionMap = new IMap();
	    var transformed = transformNode(node, selectionMap);
	    if (transformed) {
	      return ctx.add(transformed.node);
	    } else {
	      return ctx;
	    }
	  }, new (__webpack_require__(10))(context.schema));
	}

	/**
	 * The most straightforward approach would be two passes: one to record the
	 * structure of the document, one to prune duplicates. This implementation uses
	 * a single pass. Selections are sorted with fields first, "conditionals"
	 * (inline fragments & conditions) last. This means that all fields that are
	 * guaranteed to be fetched are encountered prior to any duplicates that may be
	 * fetched within a conditional.
	 *
	 * Because selections fetched within a conditional are not guaranteed to be
	 * fetched in the parent, a fork of the selection map is created when entering a
	 * conditional. The sort ensures that guaranteed fields have already been seen
	 * prior to the clone.
	 */
	function transformNode(node, selectionMap) {
	  var selections = [];
	  sortSelections(node.selections).forEach(function (selection) {
	    var identifier = __webpack_require__(47)(selection);
	    switch (selection.kind) {
	      case 'ScalarField':
	      case 'FragmentSpread':
	        {
	          if (!selectionMap.has(identifier)) {
	            selections.push(selection);
	            selectionMap = selectionMap.set(identifier, null);
	          }
	          break;
	        }
	      case 'LinkedField':
	        {
	          var transformed = transformNode(selection, selectionMap.get(identifier) || new IMap());
	          if (transformed) {
	            selections.push(transformed.node);
	            selectionMap = selectionMap.set(identifier, transformed.selectionMap);
	          }
	          break;
	        }
	      case 'InlineFragment':
	      case 'Condition':
	        {
	          // Fork the selection map to prevent conditional selections from
	          // affecting the outer "guaranteed" selections.
	          var _transformed = transformNode(selection, selectionMap.get(identifier) || selectionMap);
	          if (_transformed) {
	            selections.push(_transformed.node);
	            selectionMap = selectionMap.set(identifier, _transformed.selectionMap);
	          }
	          break;
	        }
	      default:
	        __webpack_require__(1)(false, 'SkipRedundantNodesTransform: Unexpected node kind `%s`.', selection.kind);
	    }
	  });
	  if (!selections.length) {
	    return null;
	  }
	  return {
	    selectionMap: selectionMap,
	    node: (0, _extends3['default'])({}, node, {
	      selections: selections
	    })
	  };
	}

	/**
	 * Sort inline fragments and conditions after other selections.
	 */
	function sortSelections(selections) {
	  return [].concat((0, _toConsumableArray3['default'])(selections)).sort(function (a, b) {
	    return a.kind === 'InlineFragment' || a.kind === 'Condition' ? 1 : b.kind === 'InlineFragment' || b.kind === 'Condition' ? -1 : 0;
	  });
	}

	module.exports = { transform: transform };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule filterContextForNode
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(32),
	    visit = _require.visit;

	/**
	 * Returns a GraphQLCompilerContext containing only the documents referenced
	 * by and including the provided node.
	 */
	function filterContextForNode(node, context) {
	  var queue = [node];
	  var filteredContext = new (__webpack_require__(10))(context.schema).add(node);
	  var visitorConfig = {
	    FragmentSpread: function FragmentSpread(fragmentSpread) {
	      var name = fragmentSpread.name;

	      if (!filteredContext.get(name)) {
	        var fragment = context.getFragment(name);
	        filteredContext = filteredContext.add(fragment);
	        queue.push(fragment);
	      }
	    }
	  };
	  while (queue.length) {
	    visit(queue.pop(), visitorConfig);
	  }
	  return filteredContext;
	}

	module.exports = filterContextForNode;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Simple recursive stringifier that produces a stable JSON string suitable for
	 * use as a cache key. Does not handle corner-cases such as circular references
	 * or exotic types.
	 */

	function stableJSONStringifyOSS(obj) {
	  if (Array.isArray(obj)) {
	    var result = [];
	    for (var ii = 0; ii < obj.length; ii++) {
	      var value = obj[ii] !== undefined ? obj[ii] : null;
	      result.push(stableJSONStringifyOSS(value));
	    }
	    return '[' + result.join(',') + ']';
	  } else if (typeof obj === 'object' && obj) {
	    var _result = [];
	    var keys = Object.keys(obj);
	    keys.sort();
	    for (var _ii = 0; _ii < keys.length; _ii++) {
	      var key = keys[_ii];
	      var _value = stableJSONStringifyOSS(obj[key]);
	      _result.push('"' + key + '":' + _value);
	    }
	    return '{' + _result.join(',') + '}';
	  } else {
	    return JSON.stringify(obj);
	  }
	}

	module.exports = stableJSONStringifyOSS;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = require("chalk");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = require("crypto");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = require("util");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ASTCache
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(11),
	    ImmutableMap = _require.Map;

	var ASTCache = function () {
	  function ASTCache(config) {
	    (0, _classCallCheck3['default'])(this, ASTCache);
	    this._documents = new Map();

	    this._baseDir = config.baseDir;
	    this._parse = config.parse;
	  }

	  // Short-term: we don't do subscriptions/delta updates, instead always use all definitions


	  ASTCache.prototype.documents = function documents() {
	    return ImmutableMap(this._documents);
	  };

	  // parse should return the set of changes


	  ASTCache.prototype.parseFiles = function parseFiles(files) {
	    var _this = this;

	    var documents = ImmutableMap();

	    files.forEach(function (file) {
	      var doc = function () {
	        try {
	          return _this._parse(_this._baseDir, file);
	        } catch (error) {
	          throw new Error('Parse error: ' + error + ' in "' + file.relPath + '"');
	        }
	      }();

	      if (!doc) {
	        _this._documents['delete'](file.relPath);
	        return;
	      }

	      documents = documents.set(file.relPath, doc);
	      _this._documents.set(file.relPath, doc);
	    });

	    return documents;
	  };

	  return ASTCache;
	}();

	module.exports = ASTCache;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule DefaultHandleKey
	 * 
	 * @format
	 */

	'use strict';

	module.exports = {
	  DEFAULT_HANDLE_KEY: ''
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule FilterDirectivesTransform
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * A transform that removes any directives that were not present in the
	 * original schema.
	 */
	function transform(context, schema) {
	  return __webpack_require__(14).transform(context, { Directive: visitDirective }, function () {
	    return schema;
	  });
	}

	/**
	 * @internal
	 *
	 * Skip directives not defined in the original schema.
	 */
	function visitDirective(directive, state) {
	  if (state.getDirectives().some(function (schemaDirective) {
	    return schemaDirective.name === directive.name;
	  })) {
	    return directive;
	  }
	  return null;
	}

	module.exports = { transform: transform };

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLCompilerUserError
	 * 
	 * @format
	 */

	'use strict';

	var createUserError = function createUserError(format) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  var index = 0;
	  var formatted = format.replace(/%s/g, function (match) {
	    return args[index++];
	  });
	  return new Error(formatted);
	};

	module.exports = { createUserError: createUserError };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLIRVisitor
	 * 
	 * @format
	 */
	'use strict';

	var visit = __webpack_require__(3).visit;

	var NodeKeys = {
	  Argument: ['value'],
	  Condition: ['condition', 'selections'],
	  Directive: ['args'],
	  Fragment: ['argumentDefinitions', 'directives', 'selections'],
	  FragmentSpread: ['args', 'directives'],
	  InlineFragment: ['directives', 'selections'],
	  LinkedField: ['args', 'directives', 'selections'],
	  Literal: [],
	  LocalArgumentDefinition: [],
	  Root: ['argumentDefinitions', 'directives', 'selections'],
	  RootArgumentDefinition: [],
	  ScalarField: ['args', 'directives'],
	  Variable: []
	};

	function visitIR(root, visitor) {
	  return visit(root, visitor, NodeKeys);
	}

	module.exports = { visit: visitIR };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule GraphQLValidator
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(3),
	    ArgumentsOfCorrectTypeRule = _require.ArgumentsOfCorrectTypeRule,
	    DefaultValuesOfCorrectTypeRule = _require.DefaultValuesOfCorrectTypeRule,
	    formatError = _require.formatError,
	    FragmentsOnCompositeTypesRule = _require.FragmentsOnCompositeTypesRule,
	    KnownArgumentNamesRule = _require.KnownArgumentNamesRule,
	    KnownTypeNamesRule = _require.KnownTypeNamesRule,
	    LoneAnonymousOperationRule = _require.LoneAnonymousOperationRule,
	    NoFragmentCyclesRule = _require.NoFragmentCyclesRule,
	    NoUnusedVariablesRule = _require.NoUnusedVariablesRule,
	    PossibleFragmentSpreadsRule = _require.PossibleFragmentSpreadsRule,
	    ProvidedNonNullArgumentsRule = _require.ProvidedNonNullArgumentsRule,
	    ScalarLeafsRule = _require.ScalarLeafsRule,
	    UniqueArgumentNamesRule = _require.UniqueArgumentNamesRule,
	    UniqueFragmentNamesRule = _require.UniqueFragmentNamesRule,
	    UniqueInputFieldNamesRule = _require.UniqueInputFieldNamesRule,
	    UniqueOperationNamesRule = _require.UniqueOperationNamesRule,
	    UniqueVariableNamesRule = _require.UniqueVariableNamesRule,
	    validate = _require.validate,
	    VariablesAreInputTypesRule = _require.VariablesAreInputTypesRule,
	    VariablesInAllowedPositionRule = _require.VariablesInAllowedPositionRule;

	function validateOrThrow(document, schema, rules) {
	  var validationErrors = validate(schema, document, rules);
	  if (validationErrors && validationErrors.length > 0) {
	    var formattedErrors = validationErrors.map(formatError);
	    var errorMessages = validationErrors.map(function (e) {
	      return e.source ? e.source.name + ': ' + e.message : e.message;
	    });

	    var error = new Error(__webpack_require__(27).format('You supplied a GraphQL document with validation errors:\n%s', errorMessages.join('\n')));
	    error.validationErrors = formattedErrors;
	    throw error;
	  }
	}

	module.exports = {
	  GLOBAL_RULES: [KnownArgumentNamesRule,
	  // TODO #19327202 Relay Classic generates some fragments in runtime, so Relay
	  // Modern queries might reference fragments unknown in build time
	  //KnownFragmentNamesRule,
	  NoFragmentCyclesRule,
	  // TODO #19327144 Because of @argumentDefinitions, this validation
	  // incorrectly marks some fragment variables as undefined.
	  // NoUndefinedVariablesRule,
	  // TODO #19327202 Queries generated dynamically with Relay Classic might use
	  // unused fragments
	  // NoUnusedFragmentsRule,
	  NoUnusedVariablesRule,
	  // TODO #19327202 Relay Classic auto-resolves overlapping fields by
	  // generating aliases
	  //OverlappingFieldsCanBeMergedRule,
	  ProvidedNonNullArgumentsRule, UniqueArgumentNamesRule, UniqueFragmentNamesRule, UniqueInputFieldNamesRule, UniqueOperationNamesRule, UniqueVariableNamesRule],
	  LOCAL_RULES: [ArgumentsOfCorrectTypeRule, DefaultValuesOfCorrectTypeRule,
	  // TODO #13818691: make this aware of @fixme_fat_interface
	  // FieldsOnCorrectTypeRule,
	  FragmentsOnCompositeTypesRule, KnownTypeNamesRule,
	  // TODO #17737009: Enable this after cleaning up existing issues
	  // KnownDirectivesRule,
	  LoneAnonymousOperationRule, PossibleFragmentSpreadsRule, ScalarLeafsRule, VariablesAreInputTypesRule, VariablesInAllowedPositionRule],
	  validate: validateOrThrow
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule RelayCompiler
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(7),
	    Compiler = _require.Compiler;

	/**
	 * For now, the `RelayCompiler` *is* the `GraphQLCompiler`, but we're creating
	 * this aliasing module to provide for the possibility of divergence (as the
	 * `RelayCompiler` becomes more specific, and the `GraphQLCompiler` becomes more
	 * general).
	 */


	var RelayCompiler = Compiler;

	module.exports = RelayCompiler;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayCompilerScope
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(3),
	    GraphQLNonNull = _require.GraphQLNonNull;

	/**
	 * A scope is a mapping of the values for each argument defined by the nearest
	 * ancestor root or fragment of a given IR selection. A scope maps argument
	 * names to the argument's statically determined value, which can be either a
	 * variable or a literal.
	 *
	 * There are two categories of scopes: root scopes and fragment scopes.
	 *
	 * Root scopes apply to `Root` IR and their subselections, up until any fragment
	 * spreads. Root scopes have the property that any argument may be provided at
	 * runtime: even where a default value is defined, the compiler must consider
	 * the value to be variable. Therefore, root scopes are a mapping of argument
	 * name to variables of the same name:
	 *
	 *   Map {
	 *     foo: $foo
	 *   }
	 *
	 * Fragment scopes apply to `Fragment` IR nodes and their subselections, up
	 * until any fragment spreads. Fragment scopes differ from root scopes in
	 * several ways:
	 * - Arguments may be overridden by the including fragment spread.
	 * - Arguments may import values from the root scope.
	 * - All other arguments must have their default values, or be null.
	 *
	 * Fragment scopes are also a mapping of argument name to value, but the value
	 * may also be a literal:
	 *
	 *   Map {
	 *     foo: $foo
	 *     bar: 42
	 *   }
	 */


	/**
	 * Creates a scope for a `Root`, with each argument mapped to a variable of the
	 * same name. Example:
	 *
	 * Query:
	 * query Foo($id: ID, $size: Int = 42) { ... }
	 *
	 * Scope:
	 * {
	 *   id: $id,
	 *   size: $size,
	 * }
	 *
	 * Note that even though a default value is defined for $size, the scope must
	 * assume that this could be overridden at runtime. The value cannot be decided
	 * statically and therefore is set to a variable.
	 */
	function getRootScope(definitions) {
	  var scope = {};
	  definitions.forEach(function (definition) {
	    scope[definition.name] = {
	      kind: 'Variable',
	      variableName: definition.name
	    };
	  });
	  return scope;
	}

	/**
	 * Creates a scope for a `Fragment` by translating fragment spread arguments in
	 * the context of a parent scope into a new scope and validating them against
	 * the argument definitions.
	 *
	 *
	 * Parent Scope:
	 * {
	 *   active: $parentActive
	 * }
	 *
	 * Fragment Spread:
	 * ...Bar(size: 42, enabled: $active)
	 *
	 * Fragment:
	 * fragment Bar on Foo @argumentDefinitions(
	 *   id: {type: "ID"}
	 *   size: {type: "Int"}
	 *   enabled: {type: "Boolean}
	 *   scale: {type: "Int", imports: "pixelRatio"}
	 * )
	 *
	 * Scope:
	 * {
	 *   // No argument is provided for $id, it gets the default value which in this
	 *   // case is `null`:
	 *   id: null,
	 *
	 *   // The parent passes 42 as a literal value for $size:
	 *   size: 42,
	 *
	 *   // The parent passes a variable as the value of $enabled. This variable is
	 *   // resolved in the parent scope to the value $parentActive, which becomes
	 *   // the value of $enabled:
	 *   $enabled: $parentActive,
	 *
	 *   // $scale imports pixelRatio from the root scope. Since any argument in a
	 *   // root scope maps to a variable of the same name, that means the value of
	 *   // pixelRatio in the root is $pixelRatio:
	 *   $scale: $pixelRatio,
	 * }
	 */
	function getFragmentScope(definitions, args, parentScope) {
	  var argMap = {};
	  args.forEach(function (arg) {
	    if (arg.value.kind === 'Literal') {
	      argMap[arg.name] = arg.value;
	    } else if (arg.value.kind === 'Variable') {
	      argMap[arg.name] = parentScope[arg.value.variableName];
	    }
	  });

	  var fragmentScope = {};
	  definitions.forEach(function (definition) {
	    if (definition.kind === 'RootArgumentDefinition') {
	      __webpack_require__(1)(!argMap.hasOwnProperty(definition.name), 'RelayCompilerScope: Unexpected argument for global variable `%s`. ' + '@arguments may only be provided for variables defined in the ' + "fragment's @argumentDefinitions list.", definition.name);
	      fragmentScope[definition.name] = {
	        kind: 'Variable',
	        variableName: definition.name
	      };
	    } else {
	      var arg = argMap[definition.name];
	      if (arg == null || arg.kind === 'Literal' && arg.value == null) {
	        // No variable or literal null was passed, fall back to default
	        // value.
	        __webpack_require__(1)(definition.defaultValue != null || !(definition.type instanceof GraphQLNonNull), 'RelayCompilerScope: No value found for required argument ' + '`$%s: %s`.', definition.name, definition.type.toString());
	        fragmentScope[definition.name] = {
	          kind: 'Literal',
	          value: definition.defaultValue
	        };
	      } else {
	        // Variable or non-null literal.
	        fragmentScope[definition.name] = arg;
	      }
	    }
	  });
	  return fragmentScope;
	}

	module.exports = { getFragmentScope: getFragmentScope, getRootScope: getRootScope };

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayDefaultHandleKey
	 * 
	 * @format
	 */

	'use strict';

	module.exports = {
	  DEFAULT_HANDLE_KEY: ''
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayFlowBabelFactories
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * {|
	 *   PROPS
	 * |}
	 */
	function exactObjectTypeAnnotation(props) {
	  var typeAnnotation = __webpack_require__(2).objectTypeAnnotation(props);
	  typeAnnotation.exact = true;
	  return typeAnnotation;
	}

	/**
	 * export type NAME = TYPE
	 */
	function exportType(name, type) {
	  return __webpack_require__(2).exportNamedDeclaration(__webpack_require__(2).typeAlias(__webpack_require__(2).identifier(name), null, type), [], null);
	}

	function lineComments() {
	  for (var _len = arguments.length, lines = Array(_len), _key = 0; _key < _len; _key++) {
	    lines[_key] = arguments[_key];
	  }

	  return lines.map(function (line) {
	    return { type: 'CommentLine', value: ' ' + line };
	  });
	}

	/**
	 * $ReadOnlyArray<TYPE>
	 */
	function readOnlyArrayOfType(thing) {
	  return __webpack_require__(2).genericTypeAnnotation(__webpack_require__(2).identifier('$ReadOnlyArray'), __webpack_require__(2).typeParameterInstantiation([thing]));
	}

	/**
	 * +KEY: VALUE
	 */
	function readOnlyObjectTypeProperty(key, value) {
	  var prop = __webpack_require__(2).objectTypeProperty(__webpack_require__(2).identifier(key), value);
	  prop.variance = 'plus';
	  return prop;
	}

	function stringLiteralTypeAnnotation(value) {
	  var annotation = __webpack_require__(2).stringLiteralTypeAnnotation();
	  annotation.value = value;
	  return annotation;
	}

	module.exports = {
	  exactObjectTypeAnnotation: exactObjectTypeAnnotation,
	  exportType: exportType,
	  lineComments: lineComments,
	  readOnlyArrayOfType: readOnlyArrayOfType,
	  readOnlyObjectTypeProperty: readOnlyObjectTypeProperty,
	  stringLiteralTypeAnnotation: stringLiteralTypeAnnotation
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayFlowGenerator
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    FlattenTransform = _require.FlattenTransform,
	    IRVisitor = _require.IRVisitor,
	    SchemaUtils = _require.SchemaUtils;

	var _require2 = __webpack_require__(37),
	    exactObjectTypeAnnotation = _require2.exactObjectTypeAnnotation,
	    exportType = _require2.exportType,
	    lineComments = _require2.lineComments,
	    readOnlyArrayOfType = _require2.readOnlyArrayOfType,
	    readOnlyObjectTypeProperty = _require2.readOnlyObjectTypeProperty,
	    stringLiteralTypeAnnotation = _require2.stringLiteralTypeAnnotation;

	var _require3 = __webpack_require__(70),
	    transformScalarType = _require3.transformScalarType,
	    transformInputType = _require3.transformInputType;

	var _require4 = __webpack_require__(3),
	    GraphQLNonNull = _require4.GraphQLNonNull;

	var babelGenerator = __webpack_require__(83)['default'];

	var isAbstractType = SchemaUtils.isAbstractType;


	function generate(node, customScalars, inputFieldWhiteList) {
	  var ast = IRVisitor.visit(node, createVisitor(customScalars || {}, inputFieldWhiteList));
	  return babelGenerator(ast).code;
	}

	function makeProp(_ref, customScalars, concreteType) {
	  var key = _ref.key,
	      schemaName = _ref.schemaName,
	      value = _ref.value,
	      conditional = _ref.conditional,
	      nodeType = _ref.nodeType,
	      nodeSelections = _ref.nodeSelections;

	  if (nodeType) {
	    value = transformScalarType(nodeType, customScalars, selectionsToBabel([Array.from(nodeSelections.values())], customScalars));
	  }
	  if (schemaName === '__typename' && concreteType) {
	    value = stringLiteralTypeAnnotation(concreteType);
	  }
	  var typeProperty = readOnlyObjectTypeProperty(key, value);
	  if (conditional) {
	    typeProperty.optional = true;
	  }
	  return typeProperty;
	}

	var isTypenameSelection = function isTypenameSelection(selection) {
	  return selection.schemaName === '__typename';
	};
	var hasTypenameSelection = function hasTypenameSelection(selections) {
	  return selections.some(isTypenameSelection);
	};
	var onlySelectsTypename = function onlySelectsTypename(selections) {
	  return selections.every(isTypenameSelection);
	};

	function selectionsToBabel(selections, customScalars) {
	  var baseFields = new Map();
	  var byConcreteType = {};

	  flattenArray(selections).forEach(function (selection) {
	    var concreteType = selection.concreteType;

	    if (concreteType) {
	      byConcreteType[concreteType] = byConcreteType[concreteType] || [];
	      byConcreteType[concreteType].push(selection);
	    } else {
	      var previousSel = baseFields.get(selection.key);

	      baseFields.set(selection.key, previousSel ? mergeSelection(selection, previousSel) : selection);
	    }
	  });

	  var types = [];

	  if (Object.keys(byConcreteType).length && onlySelectsTypename(Array.from(baseFields.values())) && (hasTypenameSelection(Array.from(baseFields.values())) || Object.keys(byConcreteType).every(function (type) {
	    return hasTypenameSelection(byConcreteType[type]);
	  }))) {
	    var _loop = function _loop(concreteType) {
	      types.push(exactObjectTypeAnnotation([].concat((0, _toConsumableArray3['default'])(Array.from(baseFields.values()).map(function (selection) {
	        return makeProp(selection, customScalars, concreteType);
	      })), (0, _toConsumableArray3['default'])(byConcreteType[concreteType].map(function (selection) {
	        return makeProp(selection, customScalars, concreteType);
	      })))));
	    };

	    for (var concreteType in byConcreteType) {
	      _loop(concreteType);
	    }
	    // It might be some other type then the listed concrete types. Ideally, we
	    // would set the type to diff(string, set of listed concrete types), but
	    // this doesn't exist in Flow at the time.
	    var otherProp = readOnlyObjectTypeProperty('__typename', stringLiteralTypeAnnotation('%other'));
	    otherProp.leadingComments = lineComments("This will never be '%other', but we need some", 'value in case none of the concrete values match.');
	    types.push(exactObjectTypeAnnotation([otherProp]));
	  } else {
	    var selectionMap = selectionsToMap(Array.from(baseFields.values()));
	    for (var concreteType in byConcreteType) {
	      selectionMap = mergeSelections(selectionMap, selectionsToMap(byConcreteType[concreteType].map(function (sel) {
	        return (0, _extends3['default'])({}, sel, {
	          conditional: true
	        });
	      })));
	    }
	    var selectionMapValues = Array.from(selectionMap.values()).map(function (sel) {
	      return isTypenameSelection(sel) && sel.concreteType ? makeProp((0, _extends3['default'])({}, sel, { conditional: false }), customScalars, sel.concreteType) : makeProp(sel, customScalars);
	    });
	    types.push(exactObjectTypeAnnotation(selectionMapValues));
	  }

	  if (types.length === 0) {
	    return exactObjectTypeAnnotation([]);
	  }

	  return types.length > 1 ? __webpack_require__(2).unionTypeAnnotation(types) : types[0];
	}

	function mergeSelection(a, b) {
	  if (!a) {
	    return (0, _extends3['default'])({}, b, {
	      conditional: true
	    });
	  }
	  return (0, _extends3['default'])({}, a, {
	    nodeSelections: a.nodeSelections ? mergeSelections(a.nodeSelections, b.nodeSelections) : null,
	    conditional: a.conditional && b.conditional
	  });
	}

	function mergeSelections(a, b) {
	  var merged = new Map();
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = a.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = _step.value,
	          key = _step$value[0],
	          value = _step$value[1];

	      merged.set(key, value);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = b.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var _step2$value = _step2.value,
	          key = _step2$value[0],
	          value = _step2$value[1];

	      merged.set(key, mergeSelection(a.get(key), value));
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	        _iterator2['return']();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  return merged;
	}

	function isPlural(_ref2) {
	  var directives = _ref2.directives;

	  var relayDirective = directives.find(function (_ref3) {
	    var name = _ref3.name;
	    return name === 'relay';
	  });
	  return relayDirective != null && relayDirective.args.some(function (_ref4) {
	    var name = _ref4.name,
	        value = _ref4.value;
	    return name === 'plural' && value.value;
	  });
	}

	function createVisitor(customScalars, inputFieldWhiteList) {
	  return {
	    leave: {
	      Root: function Root(node) {
	        var statements = [];
	        if (node.operation !== 'query') {
	          statements.push(generateInputVariablesType(node, customScalars, inputFieldWhiteList));
	        }
	        statements.push(exportType(node.name + 'Response', selectionsToBabel(node.selections, customScalars)));
	        return __webpack_require__(2).program(statements);
	      },
	      Fragment: function Fragment(node) {
	        var selections = flattenArray(node.selections);
	        var numConecreteSelections = selections.filter(function (s) {
	          return s.concreteType;
	        }).length;
	        selections = selections.map(function (selection) {
	          if (numConecreteSelections <= 1 && isTypenameSelection(selection) && !isAbstractType(node.type)) {
	            return [(0, _extends3['default'])({}, selection, {
	              concreteType: node.type.toString()
	            })];
	          }
	          return [selection];
	        });
	        var baseType = selectionsToBabel(selections, customScalars);
	        var type = isPlural(node) ? readOnlyArrayOfType(baseType) : baseType;

	        return __webpack_require__(2).program([exportType(node.name, type)]);
	      },
	      InlineFragment: function InlineFragment(node) {
	        var typeCondition = node.typeCondition;
	        return flattenArray(node.selections).map(function (typeSelection) {
	          return isAbstractType(typeCondition) ? (0, _extends3['default'])({}, typeSelection, {
	            conditional: true
	          }) : (0, _extends3['default'])({}, typeSelection, {
	            concreteType: typeCondition.toString()
	          });
	        });
	      },
	      Condition: function Condition(node) {
	        return flattenArray(node.selections).map(function (selection) {
	          return (0, _extends3['default'])({}, selection, {
	            conditional: true
	          });
	        });
	      },
	      ScalarField: function ScalarField(node) {
	        return [{
	          key: node.alias || node.name,
	          schemaName: node.name,
	          value: transformScalarType(node.type, customScalars)
	        }];
	      },
	      LinkedField: function LinkedField(node) {
	        return [{
	          key: node.alias || node.name,
	          schemaName: node.name,
	          nodeType: node.type,
	          nodeSelections: selectionsToMap(flattenArray(node.selections))
	        }];
	      },
	      FragmentSpread: function FragmentSpread(node) {
	        return [];
	      }
	    }
	  };
	}

	function selectionsToMap(selections) {
	  var map = new Map();
	  selections.forEach(function (selection) {
	    var previousSel = map.get(selection.key);
	    map.set(selection.key, previousSel ? mergeSelection(previousSel, selection) : selection);
	  });
	  return map;
	}

	function flattenArray(arrayOfArrays) {
	  var result = [];
	  arrayOfArrays.forEach(function (array) {
	    return result.push.apply(result, (0, _toConsumableArray3['default'])(array));
	  });
	  return result;
	}

	function generateInputVariablesType(node, customScalars, inputFieldWhiteList) {
	  return exportType(node.name + 'Variables', exactObjectTypeAnnotation(node.argumentDefinitions.map(function (arg) {
	    var property = __webpack_require__(2).objectTypeProperty(__webpack_require__(2).identifier(arg.name), transformInputType(arg.type, customScalars, inputFieldWhiteList));
	    if (!(arg.type instanceof GraphQLNonNull)) {
	      property.optional = true;
	    }
	    return property;
	  })));
	}

	var FLOW_TRANSFORMS = [function (ctx) {
	  return FlattenTransform.transform(ctx, {});
	}];

	module.exports = {
	  generate: generate,
	  flowTransforms: FLOW_TRANSFORMS
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule RelayGenerateTypeNameTransform
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    CompilerContext = _require.CompilerContext,
	    SchemaUtils = _require.SchemaUtils;

	var _require2 = __webpack_require__(41),
	    hasUnaliasedSelection = _require2.hasUnaliasedSelection;

	var _require3 = __webpack_require__(3),
	    assertLeafType = _require3.assertLeafType;

	var isAbstractType = SchemaUtils.isAbstractType;


	var TYPENAME_KEY = '__typename';
	var STRING_TYPE = 'String';

	/**
	 * A transform that adds `__typename` field on any `LinkedField` of a union/interface type where
	 * there is no unaliased `__typename` selection. The `__typename` field is guaranteed to be put in
	 * the first place of the selections.
	 */

	function transform(context) {
	  var documents = context.documents();
	  return documents.reduce(function (ctx, node) {
	    var transformedNode = transformNode(context, node);
	    return ctx.add(transformedNode);
	  }, new CompilerContext(context.schema));
	}

	function transformNode(context, node) {
	  var selections = node.selections.map(function (selection) {
	    if (selection.kind === 'LinkedField') {
	      return transformField(context, selection);
	    } else if (selection.kind === 'InlineFragment' || selection.kind === 'Condition') {
	      return transformNode(context, selection);
	    } else {
	      return selection;
	    }
	  });
	  return (0, _extends3['default'])({}, node, {
	    selections: sortSelections(selections)
	  });
	}

	function transformField(context, field) {
	  var transformedNode = transformNode(context, field);
	  var type = field.type;

	  var generatedSelections = [].concat((0, _toConsumableArray3['default'])(transformedNode.selections));
	  if (isAbstractType(type) && !hasUnaliasedSelection(field, TYPENAME_KEY)) {
	    var stringType = assertLeafType(context.schema.getType(STRING_TYPE));
	    generatedSelections.push({
	      kind: 'ScalarField',
	      alias: null,
	      args: [],
	      directives: [],
	      handles: null,
	      metadata: null,
	      name: TYPENAME_KEY,
	      type: stringType
	    });
	  }
	  var selections = sortSelections(generatedSelections);
	  return (0, _extends3['default'])({}, transformedNode, {
	    selections: selections
	  });
	}

	/**
	 * @internal
	 *
	 * For interoperability with classic systems, sort `__typename` first.
	 */
	function sortSelections(selections) {
	  return [].concat((0, _toConsumableArray3['default'])(selections)).sort(function (a, b) {
	    return a.kind === 'ScalarField' && a.name === TYPENAME_KEY ? -1 : b.kind === 'ScalarField' && b.name === TYPENAME_KEY ? 1 : 0;
	  });
	}

	module.exports = { transform: transform };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayJSModuleParser
	 * 
	 * @format
	 */

	'use strict';

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    ASTCache = _require.ASTCache;

	// Throws an error if parsing the file fails
	function parseFile(baseDir, file) {
	  var text = __webpack_require__(4).readFileSync(__webpack_require__(5).join(baseDir, file.relPath), 'utf8');

	  __webpack_require__(1)(text.indexOf('graphql') >= 0, 'RelayJSModuleParser: Files should be filtered before passed to the ' + 'parser, got unfiltered file `%s`.', file);

	  var astDefinitions = [];
	  __webpack_require__(58).memoizedFind(text, baseDir, file).forEach(function (_ref) {
	    var tag = _ref.tag,
	        template = _ref.template;

	    if (!(tag === 'graphql' || tag === 'graphql.experimental')) {
	      throw new Error('Invalid tag ' + tag + ' in ' + file.relPath + '. Expected graphql``.');
	    }

	    if (tag === 'graphql.experimental') {
	      console.warn(__webpack_require__(25).yellow('DEPRECATED: graphql.experimental`...` usage should be replaced ' + ('with graphql`...` in "' + file.relPath + '". No other changes are ') + 'needed. graphql.experimental will be removed in a future version.'));
	    }

	    var ast = __webpack_require__(3).parse(new (__webpack_require__(3).Source)(template, file.relPath));
	    __webpack_require__(1)(ast.definitions.length, 'RelayJSModuleParser: Expected GraphQL text to contain at least one ' + 'definition (fragment, mutation, query, subscription), got `%s`.', template);

	    astDefinitions.push.apply(astDefinitions, (0, _toConsumableArray3['default'])(ast.definitions));
	  });

	  return {
	    kind: 'Document',
	    definitions: astDefinitions
	  };
	}

	function getParser(baseDir) {
	  return new ASTCache({
	    baseDir: baseDir,
	    parse: parseFile
	  });
	}

	function getFileFilter(baseDir) {
	  return function (file) {
	    var text = __webpack_require__(4).readFileSync(__webpack_require__(5).join(baseDir, file.relPath), 'utf8');
	    return text.indexOf('graphql') >= 0;
	  };
	}

	module.exports = {
	  getParser: getParser,
	  getFileFilter: getFileFilter
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule RelayTransformUtils
	 * @format
	 */

	'use strict';

	function hasUnaliasedSelection(field, fieldName) {
	  return field.selections.some(function (selection) {
	    return selection.kind === 'ScalarField' && selection.alias == null && selection.name === fieldName;
	  });
	}

	module.exports = { hasUnaliasedSelection: hasUnaliasedSelection };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule RelayValidator
	 * @format
	 */

	'use strict';

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    Validator = _require.Validator;

	var GLOBAL_RULES = Validator.GLOBAL_RULES,
	    LOCAL_RULES = Validator.LOCAL_RULES,
	    validate = Validator.validate;


	function DisallowIdAsAliasValidationRule(context) {
	  return {
	    Field: function Field(field) {
	      if (field.alias && field.alias.value === 'id' && field.name.value !== 'id') {
	        throw new Error('RelayValidator: Relay does not allow aliasing fields to `id`. ' + 'This name is reserved for the globally unique `id` field on ' + '`Node`.');
	      }
	    }
	  };
	}

	var relayGlobalRules = GLOBAL_RULES;

	var relayLocalRules = [].concat((0, _toConsumableArray3['default'])(LOCAL_RULES), [DisallowIdAsAliasValidationRule]);

	module.exports = {
	  GLOBAL_RULES: relayGlobalRules,
	  LOCAL_RULES: relayLocalRules,
	  validate: validate
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule RelayViewerHandleTransform
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    IRTransformer = _require.IRTransformer,
	    SchemaUtils = _require.SchemaUtils;
	// TODO T21875029 ../../../relay-runtime/util/RelayDefaultHandleKey


	var _require2 = __webpack_require__(36),
	    DEFAULT_HANDLE_KEY = _require2.DEFAULT_HANDLE_KEY;

	var _require3 = __webpack_require__(3),
	    GraphQLObjectType = _require3.GraphQLObjectType;

	var getRawType = SchemaUtils.getRawType;


	var ID = 'id';
	var VIEWER_HANDLE = 'viewer';
	var VIEWER_TYPE = 'Viewer';

	/**
	 * A transform that adds a "viewer" handle to all fields whose type is `Viewer`.
	 */
	function transform(context, schema) {
	  var viewerType = schema.getType(VIEWER_TYPE);
	  if (viewerType == null || !(viewerType instanceof GraphQLObjectType) || viewerType.getFields()[ID] != null) {
	    return context;
	  }
	  return IRTransformer.transform(context, {
	    LinkedField: visitLinkedField
	  }, function () {
	    return {};
	  });
	}

	function visitLinkedField(field, state) {
	  var transformedNode = this.traverse(field, state);
	  if (getRawType(field.type).name !== VIEWER_TYPE) {
	    return transformedNode;
	  }
	  var handles = transformedNode.handles;
	  var viewerHandle = {
	    name: VIEWER_HANDLE,
	    key: DEFAULT_HANDLE_KEY,
	    filters: null
	  };

	  if (handles && !handles.find(function (handle) {
	    return handle.name === VIEWER_HANDLE;
	  })) {
	    handles = [].concat((0, _toConsumableArray3['default'])(handles), [viewerHandle]);
	  } else if (!handles) {
	    handles = [viewerHandle];
	  }
	  return handles !== transformedNode.handles ? (0, _extends3['default'])({}, transformedNode, { handles: handles }) : transformedNode;
	}

	module.exports = { transform: transform };

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule SkipClientFieldTransform
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(12),
	    assertTypeWithFields = _require.assertTypeWithFields,
	    canHaveSelections = _require.canHaveSelections,
	    getRawType = _require.getRawType;

	var _require2 = __webpack_require__(3),
	    SchemaMetaFieldDef = _require2.SchemaMetaFieldDef,
	    TypeMetaFieldDef = _require2.TypeMetaFieldDef,
	    TypeNameMetaFieldDef = _require2.TypeNameMetaFieldDef;

	/**
	 * A transform that removes any selections that are not valid relative to the
	 * given schema. The primary use case is for fields added via client
	 * `extend type ...` definitions and for inline fragments / fragment spreads
	 * whose types are added with client `type ...` type extensions.
	 *
	 * Given a base schema:
	 *
	 * ```
	 * # Note: full schema definition elided for clarity
	 * interface Viewer {
	 *   name: String
	 * }
	 * type User implements Viewer {
	 *   name: String
	 * }
	 * ```
	 *
	 * And a fragment:
	 *
	 * ```
	 * fragment on Viewer {
	 *   name
	 *   ... on User {
	 *     clientField # (1)
	 *   }
	 *   ... on ClientType { # (2)
	 *     clientField
	 *   }
	 * }
	 * extend type User {
	 *   clientField: String
	 * }
	 * type ClientType implements Viewer {
	 *   name: String
	 *   clientField: String
	 * }
	 * ```
	 *
	 * This transform will output:
	 *
	 * ```
	 * fragment on Viewer {
	 *   name
	 * }
	 * ```
	 *
	 * Note that (1) is removed because this field does not exist on the base `User`
	 * type, and (2) is removed because the `ClientType` type does not exist in the
	 * base schema.
	 */
	function transform(context, schema) {
	  return __webpack_require__(14).transform(context, {
	    FragmentSpread: visitFragmentSpread,
	    InlineFragment: visitInlineFragment,
	    LinkedField: visitField,
	    ScalarField: visitField
	  }, buildState.bind(null, schema));
	}

	/**
	 * @internal
	 *
	 * Build the initial state, returning null for fragments whose type is not
	 * defined in the original schema.
	 */
	function buildState(schema, node) {
	  var parentType = void 0;
	  if (node.kind === 'Fragment') {
	    parentType = schema.getType(node.type.name);
	  } else {
	    switch (node.operation) {
	      case 'query':
	        parentType = schema.getQueryType();
	        break;
	      case 'mutation':
	        parentType = schema.getMutationType();
	        break;
	      case 'subscription':
	        parentType = schema.getSubscriptionType();
	        break;
	    }
	  }
	  if (parentType) {
	    return {
	      schema: schema,
	      parentType: parentType
	    };
	  } else {
	    return null;
	  }
	}

	/**
	 * @internal
	 *
	 * Skip fields that were added via `extend type ...`.
	 */
	function visitField(field, state) {
	  if (
	  // Field is defined in the original parent type definition:
	  canHaveSelections(state.parentType) && assertTypeWithFields(state.parentType).getFields()[field.name] ||
	  // Allow metadata fields and fields defined on classic "fat" interfaces
	  field.name === SchemaMetaFieldDef.name || field.name === TypeMetaFieldDef.name || field.name === TypeNameMetaFieldDef.name || field.directives.some(function (_ref) {
	    var name = _ref.name;
	    return name === 'fixme_fat_interface';
	  })) {
	    var rawType = getRawType(field.type);
	    var type = state.schema.getType(rawType.name);
	    __webpack_require__(1)(type, 'SkipClientFieldTransform: Expected type `%s` to be defined in ' + 'the original schema.', rawType.name);
	    return this.traverse(field, (0, _extends3['default'])({}, state, {
	      parentType: type
	    }));
	  }
	  return null;
	}

	/**
	 * @internal
	 *
	 * Skip fragment spreads where the referenced fragment is not defined in the
	 * original schema.
	 */
	function visitFragmentSpread(spread, state) {
	  var context = this.getContext();
	  var fragment = context.get(spread.name);
	  __webpack_require__(1)(fragment && fragment.kind === 'Fragment', 'SkipClientFieldTransform: Expected a fragment named `%s` to be defined.', spread.name);
	  if (state.schema.getType(fragment.type.name)) {
	    return this.traverse(spread, state);
	  }
	  return null;
	}

	/**
	 * @internal
	 *
	 * Skip inline fragments where the type is not in the schema.
	 */
	function visitInlineFragment(fragment, state) {
	  var type = state.schema.getType(fragment.typeCondition.name);
	  if (type) {
	    return this.traverse(fragment, (0, _extends3['default'])({}, state, {
	      parentType: type
	    }));
	  }
	  return null;
	}

	module.exports = { transform: transform };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule SkipUnreachableNodeTransform
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var FAIL = 'fail';
	var PASS = 'pass';
	var VARIABLE = 'variable';

	/**
	 * A tranform that removes unreachable IR nodes from all documents in a corpus.
	 * The following nodes are removed:
	 * - Any node with `@include(if: false)`
	 * - Any node with `@skip(if: true)`
	 * - Any node with empty `selections`
	 */
	function transform(context) {
	  var documents = context.documents();
	  var fragments = new Map();
	  var nextContext = documents.reduce(function (ctx, node) {
	    if (node.kind === 'Root') {
	      var transformedNode = transformNode(context, fragments, node);
	      if (transformedNode) {
	        return ctx.add(transformedNode);
	      }
	    }
	    return ctx;
	  }, new (__webpack_require__(10))(context.schema));
	  return Array.from(fragments.values()).reduce(function (ctx, fragment) {
	    return fragment ? ctx.add(fragment) : ctx;
	  }, nextContext);
	}

	function transformNode(context, fragments, node) {
	  var queue = [].concat((0, _toConsumableArray3['default'])(node.selections));
	  var selections = void 0;
	  while (queue.length) {
	    var selection = queue.shift();
	    var nextSelection = void 0;
	    if (selection.kind === 'Condition') {
	      var match = testCondition(selection);
	      if (match === PASS) {
	        queue.unshift.apply(queue, (0, _toConsumableArray3['default'])(selection.selections));
	      } else if (match === VARIABLE) {
	        nextSelection = transformNode(context, fragments, selection);
	      }
	    } else if (selection.kind === 'FragmentSpread') {
	      // Skip fragment spreads if the referenced fragment is empty
	      if (!fragments.has(selection.name)) {
	        var fragment = context.get(selection.name);
	        __webpack_require__(1)(fragment && fragment.kind === 'Fragment', 'SkipUnreachableNodeTransform: Found a reference to undefined ' + 'fragment `%s`.', selection.name);
	        var nextFragment = transformNode(context, fragments, fragment);
	        fragments.set(selection.name, nextFragment);
	      }
	      if (fragments.get(selection.name)) {
	        nextSelection = selection;
	      }
	    } else if (selection.kind === 'LinkedField' || selection.kind === 'InlineFragment') {
	      nextSelection = transformNode(context, fragments, selection);
	    } else {
	      // scalar field
	      nextSelection = selection;
	    }
	    if (nextSelection) {
	      selections = selections || [];
	      selections.push(nextSelection);
	    }
	  }
	  if (selections) {
	    return (0, _extends3['default'])({}, node, {
	      selections: selections
	    });
	  }
	  return null;
	}

	/**
	 * Determines whether a condition statically passes/fails or is unknown
	 * (variable).
	 */
	function testCondition(condition) {
	  if (condition.condition.kind === 'Variable') {
	    return VARIABLE;
	  }
	  return condition.condition.value === condition.passingValue ? PASS : FAIL;
	}

	module.exports = { transform: transform };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule getIdentifierForArgumentValue
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Generates an identifier for an argument value. The identifier is based on the
	 * structure/order of items and keys in the value.
	 */
	function getIdentifierForArgumentValue(value) {
	  switch (value.kind) {
	    case 'Variable':
	      return { variable: value.variableName };
	    case 'Literal':
	      return { value: value.value };
	    case 'ListValue':
	      return {
	        list: value.items.map(function (item) {
	          return getIdentifierForArgumentValue(item);
	        })
	      };
	    case 'ObjectValue':
	      return {
	        object: value.fields.map(function (field) {
	          return {
	            name: field.name,
	            value: getIdentifierForArgumentValue(field.value)
	          };
	        })
	      };
	    default:
	      __webpack_require__(1)(false, 'getIdentifierForArgumentValue(): Unsupported AST kind `%s`.', value.kind);
	  }
	}

	module.exports = getIdentifierForArgumentValue;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule getIdentifierForSelection
	 * @format
	 */

	'use strict';

	/**
	 * Generates an identifier that is unique to a given selection: the alias for
	 * fields, the type for inline fragments, and a summary of the condition
	 * variable and passing value for conditions.
	 */
	function getIdentifierForSelection(node) {
	  var obj = void 0;
	  switch (node.kind) {
	    case 'LinkedField':
	    case 'ScalarField':
	      obj = {
	        directives: node.directives,
	        field: node.alias || node.name
	      };
	      break;
	    case 'InlineFragment':
	      obj = {
	        inlineFragment: node.typeCondition.toString()
	      };
	      break;
	    case 'Condition':
	      obj = {
	        condition: node.condition,
	        passingValue: node.passingValue
	      };
	      break;
	    case 'FragmentSpread':
	      obj = {
	        fragmentSpread: node.name,
	        args: node.args
	      };
	      break;
	    default:
	      __webpack_require__(1)(false, 'getIdentifierForSelection: Unexpected kind `%s`.', node.kind);
	  }
	  return __webpack_require__(24)(obj);
	}

	module.exports = getIdentifierForSelection;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule getLiteralArgumentValues
	 * 
	 * @format
	 */

	'use strict';

	// Copy of Variables type from '../../../react-relay/classic/tools/RelayTypes'
	// Duplicating here rather than importing it since we can't take on a dependency
	// outside of graphql-compiler.
	function getLiteralArgumentValues(args) {
	  var values = {};
	  args.forEach(function (arg) {
	    __webpack_require__(1)(arg.value.kind === 'Literal', 'getLiteralArgumentValues(): Expected all args to be literals.');
	    values[arg.name] = arg.value.value;
	  });
	  return values;
	}

	module.exports = getLiteralArgumentValues;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * Based on implementations by Gary Court and Austin Appleby, 2011, MIT.
	 *
	 * @providesModule murmurHash
	 * 
	 * @format
	 */

	'use strict';

	var BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	/**
	 * @param {string} key A UTF-16 or ASCII string
	 * @return {string} a base62 murmur hash
	 */
	function murmurHash(str) {
	  /* eslint-disable no-bitwise */
	  var length = str.length;
	  var rem = length & 3;
	  var len = length ^ rem;

	  var h = 0;
	  var i = 0;
	  var k = void 0;

	  while (i !== len) {
	    var ch4 = str.charCodeAt(i + 3);

	    k = str.charCodeAt(i) ^ str.charCodeAt(i + 1) << 8 ^ str.charCodeAt(i + 2) << 16 ^ (ch4 & 0xff) << 24 ^ (ch4 & 0xff00) >> 8;

	    i += 4;

	    k = k * 0x2d51 + (k & 0xffff) * 0xcc9e0000 >>> 0;
	    k = k << 15 | k >>> 17;
	    k = k * 0x3593 + (k & 0xffff) * 0x1b870000 >>> 0;
	    h ^= k;
	    h = h << 13 | h >>> 19;
	    h = h * 5 + 0xe6546b64 >>> 0;
	  }

	  k = 0;
	  switch (rem) {
	    /* eslint-disable no-fallthrough */
	    case 3:
	      k ^= str.charCodeAt(len + 2) << 16;
	    case 2:
	      k ^= str.charCodeAt(len + 1) << 8;
	    case 1:
	      k ^= str.charCodeAt(len);

	      k = k * 0x2d51 + (k & 0xffff) * 0xcc9e0000 >>> 0;
	      k = k << 15 | k >>> 17;
	      k = k * 0x3593 + (k & 0xffff) * 0x1b870000 >>> 0;
	      h ^= k;
	  }

	  h ^= length;
	  h ^= h >>> 16;
	  h = h * 0xca6b + (h & 0xffff) * 0x85eb0000 >>> 0;
	  h ^= h >>> 13;
	  h = h * 0xae35 + (h & 0xffff) * 0xc2b20000 >>> 0;
	  h ^= h >>> 16;

	  h >>>= 0;

	  if (!h) {
	    return '0';
	  }

	  var s = '';
	  while (h) {
	    var d = h % 62;
	    s = BASE62[d] + s;
	    h = (h - d) / 62;
	  }
	  return s;
	}

	module.exports = murmurHash;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule prettyStringify
	 * @format
	 */

	'use strict';

	/**
	 * Simple wrapper for `JSON.stringify` that adds whitespace to aid readability:
	 *
	 * ```
	 * const object = {a: 1, b 2};
	 *
	 * JSON.stringify(object);  // {"a":1,"b":2}
	 *
	 * prettyStringify(object); // {
	 *                          //   "a": 1,
	 *                          //   "b": 2
	 *                          // }
	 * ```
	 */

	function prettyStringify(stringifiable) {
	  return JSON.stringify(stringifiable, null, 2);
	}

	module.exports = prettyStringify;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = require("fbjs/lib/partitionArray");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = require("os");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ASTConvert
	 * 
	 * @format
	 */

	'use strict';

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(12),
	    isOperationDefinitionAST = _require.isOperationDefinitionAST,
	    isSchemaDefinitionAST = _require.isSchemaDefinitionAST;

	var _require2 = __webpack_require__(3),
	    extendSchema = _require2.extendSchema,
	    parse = _require2.parse,
	    visit = _require2.visit;

	function convertASTDocuments(schema, documents, validationRules, transform) {
	  var definitions = definitionsFromDocuments(documents);

	  var astDefinitions = [];
	  documents.forEach(function (doc) {
	    doc.definitions.forEach(function (definition) {
	      if (isOperationDefinitionAST(definition)) {
	        astDefinitions.push(definition);
	      }
	    });
	  });

	  return convertASTDefinitions(schema, definitions, validationRules, transform);
	}

	function convertASTDocumentsWithBase(schema, baseDocuments, documents, validationRules, transform) {
	  var baseDefinitions = definitionsFromDocuments(baseDocuments);
	  var definitions = definitionsFromDocuments(documents);

	  var requiredDefinitions = new Map();
	  var baseMap = new Map();
	  baseDefinitions.forEach(function (definition) {
	    if (isOperationDefinitionAST(definition)) {
	      if (definition.name) {
	        // If there's no name, no reason to put in the map
	        baseMap.set(definition.name.value, definition);
	      }
	    }
	  });

	  var definitionsToVisit = [];
	  definitions.forEach(function (definition) {
	    if (isOperationDefinitionAST(definition)) {
	      definitionsToVisit.push(definition);
	    }
	  });
	  while (definitionsToVisit.length > 0) {
	    var _definition = definitionsToVisit.pop();
	    var name = _definition.name;
	    if (!name || requiredDefinitions.has(name.value)) {
	      continue;
	    }
	    requiredDefinitions.set(name.value, _definition);
	    visit(_definition, {
	      FragmentSpread: function FragmentSpread(spread) {
	        var baseDefinition = baseMap.get(spread.name.value);
	        if (baseDefinition) {
	          // We only need to add those definitions not already included
	          // in definitions
	          definitionsToVisit.push(baseDefinition);
	        }
	      }
	    });
	  }

	  var definitionsToConvert = [];
	  requiredDefinitions.forEach(function (definition) {
	    return definitionsToConvert.push(definition);
	  });
	  return convertASTDefinitions(schema, definitionsToConvert, validationRules, transform);
	}

	function convertASTDefinitions(schema, definitions, validationRules, transform) {
	  var operationDefinitions = [];
	  definitions.forEach(function (definition) {
	    if (isOperationDefinitionAST(definition)) {
	      operationDefinitions.push(definition);
	    }
	  });

	  var validationAST = {
	    kind: 'Document',
	    // DocumentNode doesn't accept that a node of type
	    // FragmentDefinitionNode | OperationDefinitionNode is a DefinitionNode
	    definitions: operationDefinitions
	  };
	  // Will throw an error if there are validation issues
	  __webpack_require__(33).validate(validationAST, schema, validationRules);
	  return operationDefinitions.map(function (definition) {
	    return transform(schema, definition);
	  });
	}

	function definitionsFromDocuments(documents) {
	  var definitions = [];
	  documents.forEach(function (doc) {
	    doc.definitions.forEach(function (definition) {
	      return definitions.push(definition);
	    });
	  });
	  return definitions;
	}

	function transformASTSchema(schema, schemaExtensions) {
	  return schemaExtensions.length > 0 ? extendSchema(schema, parse(schemaExtensions.join('\n'))) : schema;
	}

	function extendASTSchema(baseSchema, documents) {
	  // Should be TypeSystemDefinitionNode
	  var schemaExtensions = [];
	  documents.forEach(function (doc) {
	    // TODO: isSchemaDefinitionAST should %checks, once %checks is available
	    schemaExtensions.push.apply(schemaExtensions, (0, _toConsumableArray3['default'])(doc.definitions.filter(isSchemaDefinitionAST)));
	  });

	  if (schemaExtensions.length <= 0) {
	    return baseSchema;
	  }

	  return extendSchema(baseSchema, {
	    kind: 'Document',
	    // Flow doesn't recognize that TypeSystemDefinitionNode is a subset of
	    // DefinitionNode
	    definitions: schemaExtensions
	  });
	}

	module.exports = {
	  convertASTDocuments: convertASTDocuments,
	  convertASTDocumentsWithBase: convertASTDocumentsWithBase,
	  extendASTSchema: extendASTSchema,
	  transformASTSchema: transformASTSchema
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule AutoAliasTransform
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * A transform to generate a unique alias for every combination of field name
	 * and static calls. This transform requires that fragment spreads with
	 * arguments have been inlined.
	 */
	function transform(context) {
	  var documents = context.documents();
	  return documents.reduce(function (ctx, node) {
	    var selections = transformSelections(node.selections);
	    return ctx.add((0, _extends3['default'])({}, node, {
	      selections: selections
	    }));
	  }, new (__webpack_require__(10))(context.schema));
	}

	function transformSelections(nodeSelections) {
	  return nodeSelections.map(function (selection) {
	    if (selection.kind === 'LinkedField') {
	      var alias = generateAlias(selection);
	      var selections = transformSelections(selection.selections);
	      return (0, _extends3['default'])({}, selection, {
	        alias: alias,
	        selections: selections
	      });
	    } else if (selection.kind === 'ScalarField') {
	      var _alias = generateAlias(selection);
	      return (0, _extends3['default'])({}, selection, {
	        alias: _alias
	      });
	    } else if (selection.kind === 'InlineFragment' || selection.kind === 'Condition') {
	      var _selections = transformSelections(selection.selections);
	      return (0, _extends3['default'])({}, selection, {
	        selections: _selections
	      });
	    } else if (selection.kind === 'FragmentSpread') {
	      __webpack_require__(1)(!selection.args.length, 'AutoAliasTransform: Expected arguments to fragment spread ' + '`%s` to be inlined.', selection.name);
	      return selection;
	    } else {
	      __webpack_require__(1)(false, 'AutoAliasTransform: Unexpected node kind `%s`.', selection.kind);
	    }
	  });
	}

	function generateAlias(field) {
	  if (!field.args.length) {
	    return null;
	  }
	  var args = [].concat((0, _toConsumableArray3['default'])(field.args)).sort(sortByName).map(function (arg) {
	    return __webpack_require__(46)(arg.value);
	  });
	  var hash = __webpack_require__(49)(__webpack_require__(24)(args));
	  return (field.alias || field.name) + '_' + hash;
	}

	function sortByName(a, b) {
	  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
	}

	module.exports = { transform: transform };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule CodegenDirectory
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * CodegenDirectory is a helper class for scripts that generate code into one
	 * output directory. The purpose is to make it easy to only write files that
	 * have changed and delete files that are no longer generated.
	 * It gives statistics about added/removed/updated/unchanged in the end.
	 * The class also has an option to "validate" which means that no file
	 * operations are performed and only the statistics are created for what would
	 * have happened. If there's anything but "unchanged", someone probably forgot
	 * to run the codegen script.
	 *
	 * Example:
	 *
	 *   const dir = new CodegenDirectory('/some/path/generated');
	 *   // write files in case content changed (less watchman/mtime changes)
	 *   dir.writeFile('OneFile.js', contents);
	 *   dir.writeFile('OtherFile.js', contents);
	 *
	 *   // delete files that are not generated
	 *   dir.deleteExtraFiles();
	 *
	 *   // arrays of file names to print or whatever
	 *   dir.changes.created
	 *   dir.changes.updated
	 *   dir.changes.deleted
	 *   dir.changes.unchanged
	 */
	var CodegenDirectory = function () {
	  function CodegenDirectory(dir) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    (0, _classCallCheck3['default'])(this, CodegenDirectory);

	    this.onlyValidate = !!options.onlyValidate;
	    if (__webpack_require__(4).existsSync(dir)) {
	      __webpack_require__(1)(__webpack_require__(4).statSync(dir).isDirectory(), 'Expected `%s` to be a directory.', dir);
	    } else if (!this.onlyValidate) {
	      __webpack_require__(4).mkdirSync(dir);
	    }
	    this._files = new Set();
	    this.changes = {
	      deleted: [],
	      updated: [],
	      created: [],
	      unchanged: []
	    };
	    this._dir = dir;
	  }

	  CodegenDirectory.prototype.read = function read(filename) {
	    var filePath = __webpack_require__(5).join(this._dir, filename);
	    if (__webpack_require__(4).existsSync(filePath)) {
	      return __webpack_require__(4).readFileSync(filePath, 'utf8');
	    }
	    return null;
	  };

	  CodegenDirectory.prototype.markUnchanged = function markUnchanged(filename) {
	    this._addGenerated(filename);
	    this.changes.unchanged.push(filename);
	  };

	  /**
	   * Marks a files as updated or out of date without actually writing the file.
	   * This is probably only be useful when doing validation without intention to
	   * actually write to disk.
	   */


	  CodegenDirectory.prototype.markUpdated = function markUpdated(filename) {
	    this._addGenerated(filename);
	    this.changes.updated.push(filename);
	  };

	  CodegenDirectory.prototype.writeFile = function writeFile(filename, content) {
	    this._addGenerated(filename);
	    var filePath = __webpack_require__(5).join(this._dir, filename);
	    if (__webpack_require__(4).existsSync(filePath)) {
	      var existingContent = __webpack_require__(4).readFileSync(filePath, 'utf8');
	      if (existingContent === content) {
	        this.changes.unchanged.push(filename);
	      } else {
	        this._writeFile(filePath, content);
	        this.changes.updated.push(filename);
	      }
	    } else {
	      this._writeFile(filePath, content);
	      this.changes.created.push(filename);
	    }
	  };

	  CodegenDirectory.prototype._writeFile = function _writeFile(filePath, content) {
	    if (!this.onlyValidate) {
	      __webpack_require__(4).writeFileSync(filePath, content, 'utf8');
	    }
	  };

	  /**
	   * Deletes all non-generated files, except for invisible "dot" files (ie.
	   * files with names starting with ".").
	   */


	  CodegenDirectory.prototype.deleteExtraFiles = function deleteExtraFiles() {
	    var _this = this;

	    __webpack_require__(4).readdirSync(this._dir).forEach(function (actualFile) {
	      if (!_this._files.has(actualFile) && !/^\./.test(actualFile)) {
	        if (!_this.onlyValidate) {
	          try {
	            __webpack_require__(4).unlinkSync(__webpack_require__(5).join(_this._dir, actualFile));
	          } catch (e) {
	            throw new Error('CodegenDirectory: Failed to delete `' + actualFile + '` in `' + _this._dir + '`.');
	          }
	        }
	        _this.changes.deleted.push(actualFile);
	      }
	    });
	  };

	  CodegenDirectory.prototype.getPath = function getPath(filename) {
	    return __webpack_require__(5).join(this._dir, filename);
	  };

	  CodegenDirectory.prototype._addGenerated = function _addGenerated(filename) {
	    __webpack_require__(1)(!this._files.has(filename), 'CodegenDirectory: Tried to generate `%s` twice in `%s`.', filename, this._dir);
	    this._files.add(filename);
	  };

	  return CodegenDirectory;
	}();

	module.exports = CodegenDirectory;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule CodegenRunner
	 * 
	 * @format
	 */

	'use strict';

	var _asyncToGenerator2 = __webpack_require__(13);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(11),
	    ImmutableMap = _require.Map;

	/* eslint-disable no-console */

	var CodegenRunner = function () {
	  // parser => writers that are affected by it
	  function CodegenRunner(options) {
	    var _this = this;

	    (0, _classCallCheck3['default'])(this, CodegenRunner);
	    this.parsers = {};

	    this.parserConfigs = options.parserConfigs;
	    this.writerConfigs = options.writerConfigs;
	    this.onlyValidate = options.onlyValidate;
	    this._reporter = options.reporter;

	    this.parserWriters = {};
	    for (var _parser in options.parserConfigs) {
	      this.parserWriters[_parser] = new Set();
	    }

	    var _loop = function _loop(_writer) {
	      var config = options.writerConfigs[_writer];
	      config.baseParsers && config.baseParsers.forEach(function (parser) {
	        return _this.parserWriters[parser].add(_writer);
	      });
	      _this.parserWriters[config.parser].add(_writer);
	    };

	    for (var _writer in options.writerConfigs) {
	      _loop(_writer);
	    }
	  }

	  CodegenRunner.prototype.compileAll = (() => {
	    var _ref = (0, _asyncToGenerator3.default)(function* () {
	      // reset the parsers
	      this.parsers = {};
	      for (var parserName in this.parserConfigs) {
	        try {
	          yield this.parseEverything(parserName);
	        } catch (e) {
	          this._reporter.reportError('CodegenRunner.compileAll', e);
	          return 'ERROR';
	        }
	      }

	      var hasChanges = false;
	      for (var writerName in this.writerConfigs) {
	        var result = yield this.write(writerName);
	        if (result === 'ERROR') {
	          return 'ERROR';
	        }
	        if (result === 'HAS_CHANGES') {
	          hasChanges = true;
	        }
	      }
	      return hasChanges ? 'HAS_CHANGES' : 'NO_CHANGES';
	    });

	    function compileAll() {
	      return _ref.apply(this, arguments);
	    }

	    return compileAll;
	  })();

	  CodegenRunner.prototype.compile = (() => {
	    var _ref2 = (0, _asyncToGenerator3.default)(function* (writerName) {
	      var _this2 = this;

	      var writerConfig = this.writerConfigs[writerName];

	      var parsers = [writerConfig.parser];
	      if (writerConfig.baseParsers) {
	        writerConfig.baseParsers.forEach(function (parser) {
	          return parsers.push(parser);
	        });
	      }
	      // Don't bother resetting the parsers
	      yield Promise.all(parsers.map(function (parser) {
	        return _this2.parseEverything(parser);
	      }));

	      return yield this.write(writerName);
	    });

	    function compile(_x) {
	      return _ref2.apply(this, arguments);
	    }

	    return compile;
	  })();

	  CodegenRunner.prototype.getDirtyWriters = (() => {
	    var _ref3 = (0, _asyncToGenerator3.default)(function* (filePaths) {
	      var _this3 = this;

	      var dirtyWriters = new Set();

	      // Check if any files are in the output
	      for (var configName in this.writerConfigs) {
	        var config = this.writerConfigs[configName];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = filePaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _filePath = _step.value;

	            if (config.isGeneratedFile(_filePath)) {
	              dirtyWriters.add(configName);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	              _iterator['return']();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }

	      var client = new (__webpack_require__(15))();

	      // Check for files in the input
	      yield Promise.all(Object.keys(this.parserConfigs).map((() => {
	        var _ref4 = (0, _asyncToGenerator3.default)(function* (parserConfigName) {
	          var config = _this3.parserConfigs[parserConfigName];
	          var dirs = yield client.watchProject(config.baseDir);

	          var relativeFilePaths = filePaths.map(function (filePath) {
	            return __webpack_require__(5).relative(config.baseDir, filePath);
	          });

	          var query = {
	            expression: ['allof', config.watchmanExpression, ['name', relativeFilePaths, 'wholename']],
	            fields: ['exists'],
	            relative_root: dirs.relativePath
	          };

	          var result = yield client.command('query', dirs.root, query);
	          if (result.files.length > 0) {
	            _this3.parserWriters[parserConfigName].forEach(function (writerName) {
	              return dirtyWriters.add(writerName);
	            });
	          }
	        });

	        return function (_x3) {
	          return _ref4.apply(this, arguments);
	        };
	      })()));

	      client.end();
	      return dirtyWriters;
	    });

	    function getDirtyWriters(_x2) {
	      return _ref3.apply(this, arguments);
	    }

	    return getDirtyWriters;
	  })();

	  CodegenRunner.prototype.parseEverything = (() => {
	    var _ref5 = (0, _asyncToGenerator3.default)(function* (parserName) {
	      if (this.parsers[parserName]) {
	        // no need to parse
	        return;
	      }

	      var parserConfig = this.parserConfigs[parserName];
	      this.parsers[parserName] = parserConfig.getParser(parserConfig.baseDir);
	      var filter = parserConfig.getFileFilter ? parserConfig.getFileFilter(parserConfig.baseDir) : anyFileFilter;

	      if (parserConfig.filepaths && parserConfig.watchmanExpression) {
	        throw new Error('Provide either `watchmanExpression` or `filepaths` but not both.');
	      }

	      var files = void 0;
	      if (parserConfig.watchmanExpression) {
	        files = yield __webpack_require__(16).queryFiles(parserConfig.baseDir, parserConfig.watchmanExpression, filter);
	      } else if (parserConfig.filepaths) {
	        files = yield __webpack_require__(16).queryFilepaths(parserConfig.baseDir, parserConfig.filepaths, filter);
	      } else {
	        throw new Error('Either `watchmanExpression` or `filepaths` is required to query files');
	      }
	      this.parseFileChanges(parserName, files);
	    });

	    function parseEverything(_x4) {
	      return _ref5.apply(this, arguments);
	    }

	    return parseEverything;
	  })();

	  CodegenRunner.prototype.parseFileChanges = function parseFileChanges(parserName, files) {
	    var tStart = Date.now();
	    var parser = this.parsers[parserName];
	    // this maybe should be await parser.parseFiles(files);
	    parser.parseFiles(files);
	    var tEnd = Date.now();
	    console.log('Parsed %s in %s', parserName, toSeconds(tStart, tEnd));
	  };

	  // We cannot do incremental writes right now.
	  // When we can, this could be writeChanges(writerName, parserName, parsedDefinitions)


	  CodegenRunner.prototype.write = (() => {
	    var _ref6 = (0, _asyncToGenerator3.default)(function* (writerName) {
	      var _this4 = this;

	      try {
	        var combineChanges = function combineChanges(accessor) {
	          var combined = [];
	          __webpack_require__(1)(outputDirectories, 'CodegenRunner: Expected outputDirectories to be set');
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = outputDirectories.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var dir = _step2.value;

	              combined.push.apply(combined, (0, _toConsumableArray3['default'])(accessor(dir.changes)));
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                _iterator2['return']();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          return combined;
	        };

	        console.log('\nWriting %s', writerName);
	        var tStart = Date.now();
	        var _writerConfigs$writer = this.writerConfigs[writerName],
	            _getWriter = _writerConfigs$writer.getWriter,
	            _parser2 = _writerConfigs$writer.parser,
	            _baseParsers = _writerConfigs$writer.baseParsers,
	            _isGeneratedFile = _writerConfigs$writer.isGeneratedFile;


	        var _baseDocuments = ImmutableMap();
	        if (_baseParsers) {
	          _baseParsers.forEach(function (baseParserName) {
	            _baseDocuments = _baseDocuments.merge(_this4.parsers[baseParserName].documents());
	          });
	        }

	        // always create a new writer: we have to write everything anyways
	        var _documents = this.parsers[_parser2].documents();
	        var _schema = this.parserConfigs[_parser2].getSchema();
	        var _writer2 = _getWriter(this.onlyValidate, _schema, _documents, _baseDocuments);

	        var outputDirectories = yield _writer2.writeAll();

	        var tWritten = Date.now();

	        var created = combineChanges(function (_) {
	          return _.created;
	        });
	        var updated = combineChanges(function (_) {
	          return _.updated;
	        });
	        var deleted = combineChanges(function (_) {
	          return _.deleted;
	        });
	        var unchanged = combineChanges(function (_) {
	          return _.unchanged;
	        });

	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	          for (var _iterator3 = outputDirectories.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var dir = _step3.value;

	            var all = [].concat((0, _toConsumableArray3['default'])(dir.changes.created), (0, _toConsumableArray3['default'])(dir.changes.updated), (0, _toConsumableArray3['default'])(dir.changes.deleted), (0, _toConsumableArray3['default'])(dir.changes.unchanged));

	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	              for (var _iterator4 = all[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                var filename = _step4.value;

	                var _filePath2 = dir.getPath(filename);
	                __webpack_require__(1)(_isGeneratedFile(_filePath2), 'CodegenRunner: %s returned false for isGeneratedFile, ' + 'but was in generated directory', _filePath2);
	              }
	            } catch (err) {
	              _didIteratorError4 = true;
	              _iteratorError4 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion4 && _iterator4['return']) {
	                  _iterator4['return']();
	                }
	              } finally {
	                if (_didIteratorError4) {
	                  throw _iteratorError4;
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	              _iterator3['return']();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }

	        if (this.onlyValidate) {
	          printFiles('Missing', created);
	          printFiles('Out of date', updated);
	          printFiles('Extra', deleted);
	        } else {
	          printFiles('Created', created);
	          printFiles('Updated', updated);
	          printFiles('Deleted', deleted);
	          console.log('Unchanged: %s files', unchanged.length);
	        }

	        console.log('Written %s in %s', writerName, toSeconds(tStart, tWritten));

	        return created.length + updated.length + deleted.length > 0 ? 'HAS_CHANGES' : 'NO_CHANGES';
	      } catch (e) {
	        this._reporter.reportError('CodegenRunner.write', e);
	        return 'ERROR';
	      }
	    });

	    function write(_x5) {
	      return _ref6.apply(this, arguments);
	    }

	    return write;
	  })();

	  CodegenRunner.prototype.watchAll = (() => {
	    var _ref7 = (0, _asyncToGenerator3.default)(function* () {
	      // get everything set up for watching
	      yield this.compileAll();

	      for (var parserName in this.parserConfigs) {
	        yield this.watch(parserName);
	      }
	    });

	    function watchAll() {
	      return _ref7.apply(this, arguments);
	    }

	    return watchAll;
	  })();

	  CodegenRunner.prototype.watch = (() => {
	    var _ref8 = (0, _asyncToGenerator3.default)(function* (parserName) {
	      var _this5 = this;

	      var parserConfig = this.parserConfigs[parserName];

	      if (!parserConfig.watchmanExpression) {
	        throw new Error('`watchmanExpression` is required to watch files');
	      }

	      // watchCompile starts with a full set of files as the changes
	      // But as we need to set everything up due to potential parser dependencies,
	      // we should prevent the first watch callback from doing anything.
	      var firstChange = true;

	      yield __webpack_require__(16).watchCompile(parserConfig.baseDir, parserConfig.watchmanExpression, parserConfig.getFileFilter ? parserConfig.getFileFilter(parserConfig.baseDir) : anyFileFilter, (() => {
	        var _ref9 = (0, _asyncToGenerator3.default)(function* (files) {
	          __webpack_require__(1)(_this5.parsers[parserName], 'Trying to watch an uncompiled parser config: %s', parserName);
	          if (firstChange) {
	            firstChange = false;
	            return;
	          }
	          var dependentWriters = [];
	          _this5.parserWriters[parserName].forEach(function (writer) {
	            return dependentWriters.push(writer);
	          });

	          try {
	            if (!_this5.parsers[parserName]) {
	              // have to load the parser and make sure all of its dependents are set
	              yield _this5.parseEverything(parserName);
	            } else {
	              _this5.parseFileChanges(parserName, files);
	            }
	            yield Promise.all(dependentWriters.map(function (writer) {
	              return _this5.write(writer);
	            }));
	          } catch (error) {
	            _this5._reporter.reportError('CodegenRunner.watch', error);
	          }
	          console.log('Watching for changes to %s...', parserName);
	        });

	        return function (_x7) {
	          return _ref9.apply(this, arguments);
	        };
	      })());
	      console.log('Watching for changes to %s...', parserName);
	    });

	    function watch(_x6) {
	      return _ref8.apply(this, arguments);
	    }

	    return watch;
	  })();

	  return CodegenRunner;
	}();

	function anyFileFilter(file) {
	  return true;
	}

	function toSeconds(t0, t1) {
	  return ((t1 - t0) / 1000).toFixed(2) + 's';
	}

	function printFiles(label, files) {
	  if (files.length > 0) {
	    console.log(label + ':');
	    files.forEach(function (file) {
	      console.log(' - ' + file);
	    });
	  }
	}

	module.exports = CodegenRunner;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule DotGraphQLParser
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(3),
	    parse = _require.parse,
	    Source = _require.Source;

	function parseFile(baseDir, file) {
	  var text = __webpack_require__(4).readFileSync(__webpack_require__(5).join(baseDir, file.relPath), 'utf8');
	  return parse(new Source(text, file.relPath));
	}

	exports.getParser = function getParser(baseDir) {
	  return new (__webpack_require__(28))({ baseDir: baseDir, parse: parseFile });
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule FindGraphQLTags
	 * 
	 * @format
	 */

	'use strict';

	// Attempt to be as inclusive as possible of source text.
	var BABYLON_OPTIONS = {
	  allowImportExportEverywhere: true,
	  allowReturnOutsideFunction: true,
	  allowSuperOutsideMethod: true,
	  sourceType: 'module',
	  plugins: [
	  // Previously "*"
	  'asyncGenerators', 'classProperties', 'decorators', 'doExpressions', 'dynamicImport', 'exportExtensions', 'flow', 'functionBind', 'functionSent', 'jsx', 'objectRestSpread'],
	  strictMode: false
	};

	function find(text, filePath) {
	  var result = [];
	  var ast = __webpack_require__(86).parse(text, BABYLON_OPTIONS);
	  var moduleName = __webpack_require__(78)(filePath);

	  var visitors = {
	    CallExpression: function CallExpression(node) {
	      var callee = node.callee;
	      if (!(callee.type === 'Identifier' && CREATE_CONTAINER_FUNCTIONS[callee.name] || callee.kind === 'MemberExpression' && callee.object.type === 'Identifier' && callee.object.value === 'Relay' && callee.property.type === 'Identifier' && CREATE_CONTAINER_FUNCTIONS[callee.property.name])) {
	        traverse(node, visitors);
	        return;
	      }
	      var fragments = node.arguments[1];
	      if (fragments.type === 'ObjectExpression') {
	        fragments.properties.forEach(function (property) {
	          !(property.type === 'ObjectProperty' && property.key.type === 'Identifier' && property.value.type === 'TaggedTemplateExpression') ?  true ? invariant(false, 'FindGraphQLTags: `%s` expects fragment definitions to be ' + '`key: graphql`.', node.callee.name) : invariant(false) : void 0;
	          var keyName = property.key.name;
	          var tagName = getGraphQLTagName(property.value.tag);
	          !tagName ?  true ? invariant(false, 'FindGraphQLTags: `%s` expects fragment definitions to be tagged ' + 'with `graphql`, got `%s`.', node.callee.name, getSourceTextForLocation(text, property.value.tag.loc)) : invariant(false) : void 0;
	          var template = getGraphQLText(property.value.quasi);
	          if (tagName === 'graphql' || tagName === 'graphql.experimental') {
	            validateTemplate(template, moduleName, keyName, filePath, getSourceLocationOffset(property.value.quasi));
	          }
	          result.push({
	            tag: tagName,
	            template: template
	          });
	        });
	      } else {
	        !(fragments && fragments.type === 'TaggedTemplateExpression') ?  true ? invariant(false, 'FindGraphQLTags: `%s` expects a second argument of fragment ' + 'definitions.', node.callee.name) : invariant(false) : void 0;
	        var tagName = getGraphQLTagName(fragments.tag);
	        !tagName ?  true ? invariant(false, 'FindGraphQLTags: `%s` expects fragment definitions to be tagged ' + 'with `graphql`, got `%s`.', node.callee.name, getSourceTextForLocation(text, fragments.tag.loc)) : invariant(false) : void 0;
	        var _template = getGraphQLText(fragments.quasi);
	        if (tagName === 'graphql' || tagName === 'graphql.experimental') {
	          validateTemplate(_template, moduleName, null, filePath, getSourceLocationOffset(fragments.quasi));
	        }
	        result.push({
	          tag: tagName,
	          template: _template
	        });
	      }

	      // Visit remaining arguments
	      for (var ii = 2; ii < node.arguments.length; ii++) {
	        visit(node.arguments[ii], visitors);
	      }
	    },
	    TaggedTemplateExpression: function TaggedTemplateExpression(node) {
	      var tagName = getGraphQLTagName(node.tag);
	      if (tagName != null) {
	        var _template2 = getGraphQLText(node.quasi);
	        if (tagName === 'graphql' || tagName === 'graphql.experimental') {
	          validateTemplate(_template2, moduleName, null, filePath, getSourceLocationOffset(node.quasi));
	        }
	        result.push({
	          tag: tagName,
	          template: node.quasi.quasis[0].value.raw
	        });
	      }
	    }
	  };
	  visit(ast, visitors);
	  return result;
	}

	var cache = new (__webpack_require__(66))('FindGraphQLTags', 'v1');

	function memoizedFind(text, baseDir, file) {
	  return cache.getOrCompute(file.hash, function () {
	    var absPath = __webpack_require__(5).join(baseDir, file.relPath);
	    return find(text, absPath);
	  });
	}

	var CREATE_CONTAINER_FUNCTIONS = {
	  createFragmentContainer: true,
	  createPaginationContainer: true,
	  createRefetchContainer: true
	};

	var IDENTIFIERS = {
	  graphql: true,
	  // TODO: remove this deprecated usage
	  Relay2QL: true
	};

	var IGNORED_KEYS = {
	  comments: true,
	  end: true,
	  leadingComments: true,
	  loc: true,
	  name: true,
	  start: true,
	  trailingComments: true,
	  type: true
	};

	function getGraphQLTagName(tag) {
	  if (tag.type === 'Identifier' && IDENTIFIERS.hasOwnProperty(tag.name)) {
	    return tag.name;
	  } else if (tag.type === 'MemberExpression' && tag.object.type === 'Identifier' && tag.object.name === 'graphql' && tag.property.type === 'Identifier' && tag.property.name === 'experimental') {
	    return 'graphql.experimental';
	  }
	  return null;
	}

	function getTemplateNode(quasi) {
	  var quasis = quasi.quasis;
	  !(quasis && quasis.length === 1) ?  true ? invariant(false, 'FindGraphQLTags: Substitutions are not allowed in graphql tags.') : invariant(false) : void 0;
	  return quasis[0];
	}

	function getGraphQLText(quasi) {
	  return getTemplateNode(quasi).value.raw;
	}

	function getSourceLocationOffset(quasi) {
	  var loc = getTemplateNode(quasi).loc.start;
	  return {
	    line: loc.line,
	    column: loc.column + 1 // babylon is 0-indexed, graphql expects 1-indexed
	  };
	}

	function getSourceTextForLocation(text, loc) {
	  if (loc == null) {
	    return '(source unavailable)';
	  }
	  var lines = text.split('\n').slice(loc.start.line - 1, loc.end.line);
	  lines[0] = lines[0].slice(loc.start.column);
	  lines[lines.length - 1] = lines[lines.length - 1].slice(0, loc.end.column);
	  return lines.join('\n');
	}

	function validateTemplate(template, moduleName, keyName, filePath, loc) {
	  var ast = __webpack_require__(3).parse(new (__webpack_require__(3).Source)(template, filePath, loc));
	  ast.definitions.forEach(function (def) {
	    !def.name ?  true ? invariant(false, 'FindGraphQLTags: In module `%s`, a definition of kind `%s` requires a name.', moduleName, def.kind) : invariant(false) : void 0;
	    var definitionName = def.name.value;
	    if (def.kind === 'OperationDefinition') {
	      var operationNameParts = definitionName.match(/^(.*)(Mutation|Query|Subscription)$/);
	      !(operationNameParts && definitionName.startsWith(moduleName)) ?  true ? invariant(false, 'FindGraphQLTags: Operation names in graphql tags must be prefixed ' + 'with the module name and end in "Mutation", "Query", or ' + '"Subscription". Got `%s` in module `%s`.', definitionName, moduleName) : invariant(false) : void 0;
	    } else if (def.kind === 'FragmentDefinition') {
	      if (keyName) {
	        !(definitionName === moduleName + '_' + keyName) ?  true ? invariant(false, 'FindGraphQLTags: Container fragment names must be ' + '`<ModuleName>_<propName>`. Got `%s`, expected `%s`.', definitionName, moduleName + '_' + keyName) : invariant(false) : void 0;
	      } else {
	        !definitionName.startsWith(moduleName) ?  true ? invariant(false, 'FindGraphQLTags: Fragment names in graphql tags must be prefixed ' + 'with the module name. Got `%s` in module `%s`.', definitionName, moduleName) : invariant(false) : void 0;
	      }
	    }
	  });
	}

	function invariant(condition, msg) {
	  if (!condition) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    throw new Error(__webpack_require__(27).format.apply(__webpack_require__(27), [msg].concat(args)));
	  }
	}

	function visit(node, visitors) {
	  var fn = visitors[node.type];
	  if (fn != null) {
	    fn(node);
	    return;
	  }
	  traverse(node, visitors);
	}

	function traverse(node, visitors) {
	  for (var key in node) {
	    if (IGNORED_KEYS[key]) {
	      continue;
	    }
	    var prop = node[key];
	    if (prop && typeof prop === 'object' && typeof prop.type === 'string') {
	      visit(prop, visitors);
	    } else if (Array.isArray(prop)) {
	      prop.forEach(function (item) {
	        if (item && typeof item === 'object' && typeof item.type === 'string') {
	          visit(item, visitors);
	        }
	      });
	    }
	  }
	}

	module.exports = {
	  find: find,
	  memoizedFind: memoizedFind
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule GraphQLCompiler
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * A utility class for parsing a corpus of GraphQL documents, transforming them
	 * with a standardized set of transforms, and generating runtime representations
	 * of each definition.
	 */


	// <CodegenNode> is a generic type here,
	// which represents the node type we get from the CodeGenerator's generation function.
	var GraphQLCompiler = function () {

	  // The context passed in must already have any Relay-specific schema extensions
	  function GraphQLCompiler(schema, context, transforms, codeGenerator) {
	    (0, _classCallCheck3['default'])(this, GraphQLCompiler);

	    this._context = context;
	    // some transforms depend on this being the original schema,
	    // not the transformed schema/context's schema
	    this._schema = schema;
	    this._transforms = transforms;
	    this._codeGenerator = codeGenerator;
	  }

	  GraphQLCompiler.prototype.clone = function clone() {
	    return new GraphQLCompiler(this._schema, this._context, this._transforms, this._codeGenerator);
	  };

	  GraphQLCompiler.prototype.context = function context() {
	    return this._context;
	  };

	  GraphQLCompiler.prototype.addDefinitions = function addDefinitions(definitions) {
	    this._context = this._context.addAll(definitions);
	    return this._context.documents();
	  };

	  // Can only be called once per compiler. Once run, will use cached context
	  // To re-run, clone the compiler.


	  GraphQLCompiler.prototype.transformedQueryContext = function transformedQueryContext() {
	    var _this = this;

	    if (this._transformedQueryContext) {
	      return this._transformedQueryContext;
	    }
	    this._transformedQueryContext = this._transforms.queryTransforms.reduce(function (ctx, transform) {
	      return transform(ctx, _this._schema);
	    }, this._context);
	    return this._transformedQueryContext;
	  };

	  GraphQLCompiler.prototype.compile = function compile() {
	    var _this2 = this;

	    var transformContext = function transformContext(ctx, transform) {
	      return transform(ctx, _this2._schema);
	    };
	    var fragmentContext = this._transforms.fragmentTransforms.reduce(transformContext, this._context);
	    var queryContext = this.transformedQueryContext();
	    var printContext = this._transforms.printTransforms.reduce(transformContext, queryContext);
	    var codeGenContext = this._transforms.codegenTransforms.reduce(transformContext, queryContext);

	    var compiledDocuments = new Map();
	    fragmentContext.documents().forEach(function (node) {
	      if (node.kind !== 'Fragment') {
	        return;
	      }
	      var generatedFragment = _this2._codeGenerator(node);
	      compiledDocuments.set(node.name, generatedFragment);
	    });
	    queryContext.documents().forEach(function (node) {
	      if (node.kind !== 'Root') {
	        return;
	      }
	      var name = node.name;
	      // The unflattened query is used for printing, since flattening creates an
	      // invalid query.

	      var text = __webpack_require__(23)(printContext.getRoot(name), printContext).documents().map(__webpack_require__(18).print).join('\n');
	      // The original query (with fragment spreads) is converted to a fragment
	      // for reading out the root data.
	      var sourceNode = fragmentContext.getRoot(name);
	      var rootFragment = buildFragmentForRoot(sourceNode);
	      var generatedFragment = _this2._codeGenerator(rootFragment);
	      // The flattened query is used for codegen in order to reduce the number of
	      // duplicate fields that must be processed during response normalization.
	      var codeGenNode = codeGenContext.getRoot(name);
	      var generatedQuery = _this2._codeGenerator(codeGenNode);

	      var batchQuery = {
	        fragment: generatedFragment,
	        id: null,
	        kind: 'Batch',
	        metadata: node.metadata || {},
	        name: name,
	        query: generatedQuery,
	        text: text
	      };
	      compiledDocuments.set(name, batchQuery);
	    });
	    return compiledDocuments;
	  };

	  return GraphQLCompiler;
	}();

	/**
	 * Construct the fragment equivalent of a root node.
	 */


	function buildFragmentForRoot(root) {
	  return {
	    argumentDefinitions: root.argumentDefinitions,
	    directives: root.directives,
	    kind: 'Fragment',
	    metadata: null,
	    name: root.name,
	    selections: root.selections,
	    type: root.type
	  };
	}

	module.exports = GraphQLCompiler;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLConsoleReporter
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var GraphQLConsoleReporter = function () {
	  function GraphQLConsoleReporter(options) {
	    (0, _classCallCheck3['default'])(this, GraphQLConsoleReporter);

	    this._verbose = options.verbose;
	  }

	  GraphQLConsoleReporter.prototype.reportError = function reportError(caughtLocation, error) {
	    process.stdout.write(__webpack_require__(25).red('ERROR:\n' + error.message + '\n'));
	    if (this._verbose) {
	      var frames = error.stack.match(/^ {4}at .*$/gm);
	      if (frames) {
	        process.stdout.write(__webpack_require__(25).gray('From: ' + caughtLocation + '\n' + frames.join('\n') + '\n'));
	      }
	    }
	  };

	  return GraphQLConsoleReporter;
	}();

	module.exports = GraphQLConsoleReporter;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLIRTransforms
	 * 
	 * @format
	 */

	'use strict';

	// Transforms applied to fragments used for reading data from a store
	var FRAGMENT_TRANSFORMS = [function (ctx) {
	  return __webpack_require__(17).transform(ctx, {
	    flattenAbstractTypes: true
	  });
	}, __webpack_require__(22).transform];

	// Transforms applied to queries/mutations/subscriptions that are used for
	// fetching data from the server and parsing those responses.
	var QUERY_TRANSFORMS = [__webpack_require__(44).transform, __webpack_require__(45).transform];

	// Transforms applied to the code used to process a query response.
	var CODEGEN_TRANSFORMS = [function (ctx) {
	  return __webpack_require__(17).transform(ctx, {
	    flattenAbstractTypes: true,
	    flattenFragmentSpreads: true
	  });
	}, __webpack_require__(22).transform, __webpack_require__(30).transform];

	module.exports = {
	  codegenTransforms: CODEGEN_TRANSFORMS,
	  fragmentTransforms: FRAGMENT_TRANSFORMS,
	  queryTransforms: QUERY_TRANSFORMS
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLMultiReporter
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var GraphQLMultiReporter = function () {
	  function GraphQLMultiReporter() {
	    (0, _classCallCheck3['default'])(this, GraphQLMultiReporter);

	    for (var _len = arguments.length, reporters = Array(_len), _key = 0; _key < _len; _key++) {
	      reporters[_key] = arguments[_key];
	    }

	    this._reporters = reporters;
	  }

	  GraphQLMultiReporter.prototype.reportError = function reportError(caughtLocation, error) {
	    this._reporters.forEach(function (reporter) {
	      reporter.reportError(caughtLocation, error);
	    });
	  };

	  return GraphQLMultiReporter;
	}();

	module.exports = GraphQLMultiReporter;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule GraphQLParser
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(29),
	    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

	var _require2 = __webpack_require__(12),
	    getNullableType = _require2.getNullableType,
	    getRawType = _require2.getRawType,
	    getTypeFromAST = _require2.getTypeFromAST,
	    isOperationDefinitionAST = _require2.isOperationDefinitionAST;

	var _require3 = __webpack_require__(3),
	    assertCompositeType = _require3.assertCompositeType,
	    assertInputType = _require3.assertInputType,
	    assertOutputType = _require3.assertOutputType,
	    extendSchema = _require3.extendSchema,
	    getNamedType = _require3.getNamedType,
	    GraphQLEnumType = _require3.GraphQLEnumType,
	    GraphQLInputObjectType = _require3.GraphQLInputObjectType,
	    GraphQLInterfaceType = _require3.GraphQLInterfaceType,
	    GraphQLList = _require3.GraphQLList,
	    GraphQLObjectType = _require3.GraphQLObjectType,
	    GraphQLScalarType = _require3.GraphQLScalarType,
	    GraphQLUnionType = _require3.GraphQLUnionType,
	    isLeafType = _require3.isLeafType,
	    isTypeSubTypeOf = _require3.isTypeSubTypeOf,
	    _parse = _require3.parse,
	    parseType = _require3.parseType,
	    SchemaMetaFieldDef = _require3.SchemaMetaFieldDef,
	    Source = _require3.Source,
	    TypeMetaFieldDef = _require3.TypeMetaFieldDef,
	    TypeNameMetaFieldDef = _require3.TypeNameMetaFieldDef;

	var ARGUMENT_DEFINITIONS = 'argumentDefinitions';
	var ARGUMENTS = 'arguments';

	/**
	 * @internal
	 *
	 * This directive is not intended for use by developers directly. To set a field
	 * handle in product code use a compiler plugin.
	 */
	var CLIENT_FIELD = '__clientField';
	var CLIENT_FIELD_HANDLE = 'handle';
	var CLIENT_FIELD_KEY = 'key';
	var CLIENT_FIELD_FILTERS = 'filters';

	var INCLUDE = 'include';
	var SKIP = 'skip';
	var IF = 'if';

	var GraphQLParser = function () {
	  GraphQLParser.parse = function parse(schema, text, filename) {
	    var _this = this;

	    var ast = _parse(new Source(text, filename));
	    var nodes = [];
	    schema = extendSchema(schema, ast);
	    ast.definitions.forEach(function (definition) {
	      if (isOperationDefinitionAST(definition)) {
	        nodes.push(_this.transform(schema, definition));
	      }
	    }, this);
	    return nodes;
	  };

	  /**
	   * Transforms a raw GraphQL AST into a simpler representation with type
	   * information.
	   */


	  GraphQLParser.transform = function transform(schema, definition) {
	    var parser = new this(schema, definition);
	    return parser.transform();
	  };

	  function GraphQLParser(schema, definition) {
	    (0, _classCallCheck3['default'])(this, GraphQLParser);

	    this._definition = definition;
	    this._referencedVariables = {};
	    this._schema = schema;
	  }

	  /**
	   * Find the definition of a field of the specified type.
	   */


	  GraphQLParser.prototype.getFieldDefinition = function getFieldDefinition(parentType, fieldName, fieldAST) {
	    var type = getRawType(parentType);
	    var isQueryType = type === this._schema.getQueryType();
	    var hasTypeName = type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;

	    var schemaFieldDef = void 0;
	    if (isQueryType && fieldName === SchemaMetaFieldDef.name) {
	      schemaFieldDef = SchemaMetaFieldDef;
	    } else if (isQueryType && fieldName === TypeMetaFieldDef.name) {
	      schemaFieldDef = TypeMetaFieldDef;
	    } else if (hasTypeName && fieldName === TypeNameMetaFieldDef.name) {
	      schemaFieldDef = TypeNameMetaFieldDef;
	    } else if (type instanceof GraphQLInterfaceType || type instanceof GraphQLObjectType) {
	      schemaFieldDef = type.getFields()[fieldName];
	    }
	    return schemaFieldDef;
	  };

	  GraphQLParser.prototype._getErrorContext = function _getErrorContext() {
	    var message = 'document `' + getName(this._definition) + '`';
	    if (this._definition.loc && this._definition.loc.source) {
	      message += ' file: `' + this._definition.loc.source.name + '`';
	    }
	    return message;
	  };

	  GraphQLParser.prototype._recordVariableReference = function _recordVariableReference(name, type) {
	    var prevType = this._referencedVariables[name];
	    if (type && prevType) {
	      __webpack_require__(1)(this._referencedVariables[name] == null || isTypeSubTypeOf(this._schema, this._referencedVariables[name], type), 'GraphQLParser: Variable `$%s` was used in locations expecting ' + 'the conflicting types `%s` and `%s`. Source: %s.', name, prevType, type, this._getErrorContext());
	    }
	    this._referencedVariables[name] = prevType || type;
	  };

	  GraphQLParser.prototype.transform = function transform() {
	    switch (this._definition.kind) {
	      case 'OperationDefinition':
	        return this._transformOperation(this._definition);
	      case 'FragmentDefinition':
	        return this._transformFragment(this._definition);
	      default:
	        __webpack_require__(1)(false, 'GraphQLParser: Unknown AST kind `%s`. Source: %s.', this._definition.kind, this._getErrorContext());
	    }
	  };

	  GraphQLParser.prototype._transformFragment = function _transformFragment(fragment) {
	    var _this2 = this;

	    var argumentDefinitions = this._buildArgumentDefinitions(fragment);
	    var directives = this._transformDirectives((fragment.directives || []).filter(function (directive) {
	      return getName(directive) !== ARGUMENT_DEFINITIONS;
	    }));
	    var type = assertCompositeType(getTypeFromAST(this._schema, fragment.typeCondition));
	    var selections = this._transformSelections(fragment.selectionSet, type);

	    var _loop = function _loop(_name) {
	      if (_this2._referencedVariables.hasOwnProperty(_name)) {
	        var variableType = _this2._referencedVariables[_name];
	        var localArgument = argumentDefinitions.find(function (argDef) {
	          return argDef.name === _name;
	        });
	        if (localArgument) {
	          __webpack_require__(1)(variableType == null || isTypeSubTypeOf(_this2._schema, localArgument.type, variableType), 'GraphQLParser: Variable `$%s` was defined as type `%s`, but used ' + 'in a location that expects type `%s`. Source: %s.', _name, localArgument.type, variableType, _this2._getErrorContext());
	        } else {
	          argumentDefinitions.push({
	            kind: 'RootArgumentDefinition',
	            metadata: null,
	            name: _name,
	            // $FlowFixMe - could be null
	            type: variableType
	          });
	        }
	      }
	    };

	    for (var _name in this._referencedVariables) {
	      _loop(_name);
	    }
	    return {
	      kind: 'Fragment',
	      directives: directives,
	      metadata: null,
	      name: getName(fragment),
	      selections: selections,
	      type: type,
	      argumentDefinitions: argumentDefinitions
	    };
	  };

	  /**
	   * Polyfills suport for fragment variable definitions via the
	   * @argumentDefinitions directive. Returns the equivalent AST
	   * to the `argumentDefinitions` property on queries/mutations/etc.
	   */


	  GraphQLParser.prototype._buildArgumentDefinitions = function _buildArgumentDefinitions(fragment) {
	    var _this3 = this;

	    var variableDirectives = (fragment.directives || []).filter(function (directive) {
	      return getName(directive) === ARGUMENT_DEFINITIONS;
	    });
	    if (!variableDirectives.length) {
	      return [];
	    }
	    __webpack_require__(1)(variableDirectives.length === 1, 'GraphQLParser: Directive %s may be defined at most once on fragment ' + '`%s`. Source: %s.', ARGUMENT_DEFINITIONS, getName(fragment), this._getErrorContext());
	    var variableDirective = variableDirectives[0];
	    // $FlowIssue: refining directly on `variableDirective.arguments` doesn't
	    // work, below accesses all report arguments could still be null/undefined.
	    var args = variableDirective.arguments;
	    if (variableDirective == null || !Array.isArray(args)) {
	      return [];
	    }
	    __webpack_require__(1)(args.length, 'GraphQLParser: Directive %s requires arguments: remove the directive ' + 'to skip defining local variables for this fragment `%s`. Source: %s.', ARGUMENT_DEFINITIONS, getName(fragment), this._getErrorContext());
	    return args.map(function (arg) {
	      var argName = getName(arg);
	      var argValue = _this3._transformValue(arg.value);
	      __webpack_require__(1)(argValue.kind === 'Literal', 'GraphQLParser: Expected definition for variable `%s` to be an ' + 'object with the following shape: `{type: string, defaultValue?: ' + 'mixed}`, got `%s`. Source: %s.', argValue, _this3._getErrorContext());
	      var value = argValue.value;
	      __webpack_require__(1)(!Array.isArray(value) && typeof value === 'object' && value !== null && typeof value.type === 'string', 'GraphQLParser: Expected definition for variable `%s` to be an ' + 'object with the following shape: `{type: string, defaultValue?: ' + 'mixed, nonNull?: boolean, list?: boolean}`, got `%s`. Source: %s.', argName, argValue, _this3._getErrorContext());

	      var valueType = value.type;

	      var unknownKeys = Object.keys(value).filter(function (key) {
	        return key !== 'type' && key !== 'defaultValue' && key !== 'nonNull' && key !== 'list';
	      });
	      __webpack_require__(1)(unknownKeys.length === 0, 'GraphQLParser: Expected definition for variable `%s` to be an ' + 'object with the following shape: `{type: string, defaultValue?: ' + 'mixed, nonNull?: boolean, list?: boolean}`, got unknown key(s) ' + '`%s`. Source: %s.', argName, unknownKeys.join('`, `'), _this3._getErrorContext());

	      var typeAST = parseType(valueType);
	      var type = assertInputType(getTypeFromAST(_this3._schema, typeAST));
	      return {
	        kind: 'LocalArgumentDefinition',
	        defaultValue: value.defaultValue != null ? value.defaultValue : null,
	        metadata: null,
	        name: argName,
	        type: type
	      };
	    });
	  };

	  GraphQLParser.prototype._transformOperation = function _transformOperation(definition) {
	    var name = getName(definition);
	    var argumentDefinitions = this._transformArgumentDefinitions(definition.variableDefinitions || []);
	    var directives = this._transformDirectives(definition.directives || []);
	    var type = void 0;
	    var operation = void 0;
	    switch (definition.operation) {
	      case 'query':
	        operation = 'query';
	        type = assertCompositeType(this._schema.getQueryType());
	        break;
	      case 'mutation':
	        operation = 'mutation';
	        type = assertCompositeType(this._schema.getMutationType());
	        break;
	      case 'subscription':
	        operation = 'subscription';
	        type = assertCompositeType(this._schema.getSubscriptionType());
	        break;
	      default:
	        __webpack_require__(1)(false, 'GraphQLParser: Unknown AST kind `%s`. Source: %s.', definition.operation, this._getErrorContext());
	    }
	    __webpack_require__(1)(definition.selectionSet, 'GraphQLParser: Expected %s `%s` to have selections. Source: %s.', operation, name, this._getErrorContext());
	    var selections = this._transformSelections(definition.selectionSet, type);
	    return {
	      kind: 'Root',
	      operation: operation,
	      metadata: null,
	      name: name,
	      argumentDefinitions: argumentDefinitions,
	      directives: directives,
	      selections: selections,
	      type: type
	    };
	  };

	  GraphQLParser.prototype._transformArgumentDefinitions = function _transformArgumentDefinitions(argumentDefinitions) {
	    var _this4 = this;

	    return argumentDefinitions.map(function (def) {
	      var name = getName(def.variable);
	      var type = assertInputType(getTypeFromAST(_this4._schema, def.type));
	      var defaultLiteral = def.defaultValue ? _this4._transformValue(def.defaultValue) : null;
	      __webpack_require__(1)(defaultLiteral === null || defaultLiteral.kind === 'Literal', 'GraphQLParser: Expected null or Literal default value, got: `%s`. ' + 'Source: %s.', defaultLiteral && defaultLiteral.kind, _this4._getErrorContext());
	      return {
	        kind: 'LocalArgumentDefinition',
	        metadata: null,
	        name: name,
	        defaultValue: defaultLiteral ? defaultLiteral.value : null,
	        type: type
	      };
	    });
	  };

	  GraphQLParser.prototype._transformSelections = function _transformSelections(selectionSet, parentType) {
	    var _this5 = this;

	    return selectionSet.selections.map(function (selection) {
	      var node = void 0;
	      if (selection.kind === 'Field') {
	        node = _this5._transformField(selection, parentType);
	      } else if (selection.kind === 'FragmentSpread') {
	        node = _this5._transformFragmentSpread(selection, parentType);
	      } else if (selection.kind === 'InlineFragment') {
	        node = _this5._transformInlineFragment(selection, parentType);
	      } else {
	        __webpack_require__(1)(false, 'GraphQLParser: Unexpected AST kind `%s`. Source: %s.', selection.kind, _this5._getErrorContext());
	      }

	      var _splitConditions2 = _this5._splitConditions(node.directives),
	          conditions = _splitConditions2[0],
	          directives = _splitConditions2[1];

	      var conditionalNodes = applyConditions(conditions,
	      // $FlowFixMe(>=0.28.0)
	      [(0, _extends3['default'])({}, node, { directives: directives })]);
	      __webpack_require__(1)(conditionalNodes.length === 1, 'GraphQLParser: Expected exactly one conditional node, got `%s`. ' + 'Source: %s.', conditionalNodes.length, _this5._getErrorContext());
	      return conditionalNodes[0];
	    });
	  };

	  GraphQLParser.prototype._transformInlineFragment = function _transformInlineFragment(fragment, parentType) {
	    var typeCondition = assertCompositeType(fragment.typeCondition ? getTypeFromAST(this._schema, fragment.typeCondition) : parentType);
	    var directives = this._transformDirectives(fragment.directives || []);
	    var selections = this._transformSelections(fragment.selectionSet, typeCondition);
	    return {
	      kind: 'InlineFragment',
	      directives: directives,
	      metadata: null,
	      selections: selections,
	      typeCondition: typeCondition
	    };
	  };

	  GraphQLParser.prototype._transformFragmentSpread = function _transformFragmentSpread(fragment, parentType) {
	    var _this6 = this;

	    var fragmentName = getName(fragment);

	    var _partitionArray = __webpack_require__(51)(fragment.directives || [], function (directive) {
	      return getName(directive) !== ARGUMENTS;
	    }),
	        otherDirectives = _partitionArray[0],
	        argumentDirectives = _partitionArray[1];

	    __webpack_require__(1)(argumentDirectives.length <= 1, 'GraphQLParser: Directive %s may be used at most once in fragment ' + 'spread `...%s`. Source: %s.', ARGUMENTS, fragmentName, this._getErrorContext());
	    var args = void 0;
	    if (argumentDirectives.length) {
	      args = (argumentDirectives[0].arguments || []).map(function (arg) {
	        var argValue = arg.value;
	        __webpack_require__(1)(argValue.kind === 'Variable', 'GraphQLParser: All @arguments() args must be variables, got %s. ' + 'Source: %s.', argValue.kind, _this6._getErrorContext());

	        return {
	          kind: 'Argument',
	          metadata: null,
	          name: getName(arg),
	          value: _this6._transformVariable(argValue),
	          type: null // TODO: can't get type until referenced fragment is defined
	        };
	      });
	    }
	    var directives = this._transformDirectives(otherDirectives);
	    return {
	      kind: 'FragmentSpread',
	      args: args || [],
	      metadata: null,
	      name: fragmentName,
	      directives: directives
	    };
	  };

	  GraphQLParser.prototype._transformField = function _transformField(field, parentType) {
	    var name = getName(field);
	    var fieldDef = this.getFieldDefinition(parentType, name, field);
	    __webpack_require__(1)(fieldDef, 'GraphQLParser: Unknown field `%s` on type `%s`. Source: %s.', name, parentType, this._getErrorContext());
	    var alias = field.alias ? field.alias.value : null;
	    var args = this._transformArguments(field.arguments || [], fieldDef.args);

	    var _partitionArray2 = __webpack_require__(51)(field.directives || [], function (directive) {
	      return getName(directive) !== CLIENT_FIELD;
	    }),
	        otherDirectives = _partitionArray2[0],
	        clientFieldDirectives = _partitionArray2[1];

	    var directives = this._transformDirectives(otherDirectives);
	    var type = assertOutputType(fieldDef.type);
	    var handles = this._transformHandle(name, args, clientFieldDirectives);
	    if (isLeafType(getNamedType(type))) {
	      __webpack_require__(1)(!field.selectionSet || !field.selectionSet.selections || !field.selectionSet.selections.length, 'GraphQLParser: Expected no selections for scalar field `%s` on type ' + '`%s`. Source: %s.', name, this._getErrorContext());
	      return {
	        kind: 'ScalarField',
	        alias: alias,
	        args: args,
	        directives: directives,
	        handles: handles,
	        metadata: null,
	        name: name,
	        type: assertScalarFieldType(type)
	      };
	    } else {
	      var selections = field.selectionSet ? this._transformSelections(field.selectionSet, type) : null;
	      __webpack_require__(1)(selections && selections.length, 'GraphQLParser: Expected at least one selection for non-scalar field ' + '`%s` on type `%s`. Source: %s.', name, type, this._getErrorContext());
	      return {
	        kind: 'LinkedField',
	        alias: alias,
	        args: args,
	        directives: directives,
	        handles: handles,
	        metadata: null,
	        name: name,
	        selections: selections,
	        type: type
	      };
	    }
	  };

	  GraphQLParser.prototype._transformHandle = function _transformHandle(fieldName, fieldArgs, clientFieldDirectives) {
	    var _this7 = this;

	    var handles = void 0;
	    clientFieldDirectives.forEach(function (clientFieldDirective) {
	      var handleArgument = (clientFieldDirective.arguments || []).find(function (arg) {
	        return getName(arg) === CLIENT_FIELD_HANDLE;
	      });
	      if (handleArgument) {
	        var _name2 = null;
	        var key = DEFAULT_HANDLE_KEY;
	        var filters = null;
	        var maybeHandle = _this7._transformValue(handleArgument.value);
	        __webpack_require__(1)(maybeHandle.kind === 'Literal' && typeof maybeHandle.value === 'string', 'GraphQLParser: Expected the %s argument to @%s to be a literal ' + 'string, got `%s` on field `%s`. Source: %s.', CLIENT_FIELD_HANDLE, CLIENT_FIELD, maybeHandle, fieldName, _this7._getErrorContext());
	        _name2 = maybeHandle.value;

	        var keyArgument = (clientFieldDirective.arguments || []).find(function (arg) {
	          return getName(arg) === CLIENT_FIELD_KEY;
	        });
	        if (keyArgument) {
	          var maybeKey = _this7._transformValue(keyArgument.value);
	          __webpack_require__(1)(maybeKey.kind === 'Literal' && typeof maybeKey.value === 'string', 'GraphQLParser: Expected %s argument to @%s to be a literal ' + 'string, got `%s` on field `%s`. Source: %s.', CLIENT_FIELD_KEY, CLIENT_FIELD, maybeKey, fieldName, _this7._getErrorContext());
	          key = maybeKey.value;
	        }
	        var filtersArgument = (clientFieldDirective.arguments || []).find(function (arg) {
	          return getName(arg) === CLIENT_FIELD_FILTERS;
	        });
	        if (filtersArgument) {
	          var maybeFilters = _this7._transformValue(filtersArgument.value);
	          __webpack_require__(1)(maybeFilters.kind === 'Literal' && Array.isArray(maybeFilters.value) && maybeFilters.value.every(function (filter) {
	            return fieldArgs.some(function (fieldArg) {
	              return fieldArg.name === filter;
	            });
	          }), 'GraphQLParser: Expected %s argument to @%s to be an array of ' + 'argument names on field `%s`, but get %s. Source: %s.', CLIENT_FIELD_FILTERS, CLIENT_FIELD, fieldName, maybeFilters, _this7._getErrorContext());
	          // $FlowFixMe
	          filters = maybeFilters.value;
	        }
	        handles = handles || [];
	        handles.push({ name: _name2, key: key, filters: filters });
	      }
	    });
	    return handles;
	  };

	  GraphQLParser.prototype._transformDirectives = function _transformDirectives(directives) {
	    var _this8 = this;

	    return directives.map(function (directive) {
	      var name = getName(directive);
	      var directiveDef = _this8._schema.getDirective(name);
	      __webpack_require__(1)(directiveDef, 'GraphQLParser: Unknown directive `@%s`. Source: %s.', name, _this8._getErrorContext());
	      var args = _this8._transformArguments(directive.arguments || [], directiveDef.args);
	      return {
	        kind: 'Directive',
	        metadata: null,
	        name: name,
	        args: args
	      };
	    });
	  };

	  GraphQLParser.prototype._transformArguments = function _transformArguments(args, argumentDefinitions) {
	    var _this9 = this;

	    return args.map(function (arg) {
	      var argName = getName(arg);
	      var argDef = argumentDefinitions.find(function (def) {
	        return def.name === argName;
	      });
	      __webpack_require__(1)(argDef, 'GraphQLParser: Unknown argument `%s`. Source: %s.', argName, _this9._getErrorContext());
	      var value = _this9._transformValue(arg.value, argDef.type);
	      return {
	        kind: 'Argument',
	        metadata: null,
	        name: argName,
	        value: value,
	        type: argDef.type
	      };
	    });
	  };

	  GraphQLParser.prototype._splitConditions = function _splitConditions(mixedDirectives) {
	    var _this10 = this;

	    var conditions = [];
	    var directives = [];
	    mixedDirectives.forEach(function (directive) {
	      if (directive.name === INCLUDE || directive.name === SKIP) {
	        var passingValue = directive.name === INCLUDE;
	        var arg = directive.args[0];
	        __webpack_require__(1)(arg && arg.name === IF, 'GraphQLParser: Expected an `if` argument to @%s. Source: %s.', directive.name, _this10._getErrorContext());
	        __webpack_require__(1)(arg.value.kind === 'Variable' || arg.value.kind === 'Literal', 'GraphQLParser: Expected the `if` argument to @%s to be a variable. ' + 'Source: %s.', directive.name, _this10._getErrorContext());
	        conditions.push({
	          kind: 'Condition',
	          condition: arg.value,
	          metadata: null,
	          passingValue: passingValue,
	          selections: []
	        });
	      } else {
	        directives.push(directive);
	      }
	    });
	    var sortedConditions = [].concat(conditions).sort(function (a, b) {
	      if (a.condition.kind === 'Variable' && b.condition.kind === 'Variable') {
	        return a.condition.variableName < b.condition.variableName ? -1 : a.condition.variableName > b.condition.variableName ? 1 : 0;
	      } else {
	        // sort literals earlier, variables later
	        return a.condition.kind === 'Variable' ? 1 : b.condition.kind === 'Variable' ? -1 : 0;
	      }
	    });
	    return [sortedConditions, directives];
	  };

	  GraphQLParser.prototype._transformVariable = function _transformVariable(ast, type) {
	    var variableName = getName(ast);
	    this._recordVariableReference(variableName, type);
	    return {
	      kind: 'Variable',
	      metadata: null,
	      variableName: variableName
	    };
	  };

	  /**
	   * Transforms AST values into IR values, extracting the literal JS values of any
	   * subtree of the AST that does not contain a variable.
	   */


	  GraphQLParser.prototype._transformValue = function _transformValue(ast, type) {
	    var _this11 = this;

	    switch (ast.kind) {
	      case 'IntValue':
	        return {
	          kind: 'Literal',
	          metadata: null,
	          value: parseInt(ast.value, 10)
	        };
	      case 'FloatValue':
	        return {
	          kind: 'Literal',
	          metadata: null,
	          value: parseFloat(ast.value)
	        };
	      case 'StringValue':
	      case 'BooleanValue':
	      case 'EnumValue':
	        return {
	          kind: 'Literal',
	          metadata: null,
	          value: ast.value
	        };
	      case 'ListValue':
	        var itemType = void 0;
	        if (type) {
	          var listType = getNullableType(type);
	          // The user entered a list, a `type` was expected; this is only valid
	          // if `type` is a List.
	          __webpack_require__(1)(listType instanceof GraphQLList, 'GraphQLParser: Expected a value matching type `%s`, but ' + 'got a list value. Source: %s.', type, this._getErrorContext());
	          itemType = assertInputType(listType.ofType);
	        }
	        var literalList = [];
	        var items = [];
	        var areAllItemsScalar = true;
	        ast.values.forEach(function (item) {
	          var itemValue = _this11._transformValue(item, itemType);
	          if (itemValue.kind === 'Literal') {
	            literalList.push(itemValue.value);
	          }
	          items.push(itemValue);
	          areAllItemsScalar = areAllItemsScalar && itemValue.kind === 'Literal';
	        });
	        if (areAllItemsScalar) {
	          return {
	            kind: 'Literal',
	            metadata: null,
	            value: literalList
	          };
	        } else {
	          return {
	            kind: 'ListValue',
	            metadata: null,
	            items: items
	          };
	        }
	      case 'NullValue':
	        return {
	          kind: 'Literal',
	          metadata: null,
	          value: null
	        };
	      case 'ObjectValue':
	        var literalObject = {};
	        var fields = [];
	        var areAllFieldsScalar = true;
	        ast.fields.forEach(function (field) {
	          var fieldName = getName(field);
	          var fieldType = void 0;
	          if (type) {
	            var objectType = getNullableType(type);
	            // The user entered an object, a `type` was expected; this is only
	            // valid if `type` is an Object.
	            __webpack_require__(1)(objectType instanceof GraphQLInputObjectType, 'GraphQLParser: Expected a value matching type `%s`, but ' + 'got an object value. Source: %s.', type, _this11._getErrorContext());
	            var fieldConfig = objectType.getFields()[fieldName];
	            __webpack_require__(1)(fieldConfig, 'GraphQLParser: Unknown field `%s` on type `%s`. Source: %s.', fieldName, type, _this11._getErrorContext());
	            fieldType = assertInputType(fieldConfig.type);
	          }
	          var fieldValue = _this11._transformValue(field.value, fieldType);
	          if (fieldValue.kind === 'Literal') {
	            literalObject[field.name.value] = fieldValue.value;
	          }
	          fields.push({
	            kind: 'ObjectFieldValue',
	            metadata: null,
	            name: fieldName,
	            value: fieldValue
	          });
	          areAllFieldsScalar = areAllFieldsScalar && fieldValue.kind === 'Literal';
	        });
	        if (areAllFieldsScalar) {
	          return {
	            kind: 'Literal',
	            metadata: null,
	            value: literalObject
	          };
	        } else {
	          return {
	            kind: 'ObjectValue',
	            metadata: null,
	            fields: fields
	          };
	        }
	      case 'Variable':
	        return this._transformVariable(ast, type);
	      // eslint-disable: no-fallthrough
	      default:
	        __webpack_require__(1)(false, 'GraphQLParser: Unknown ast kind: %s. Source: %s.', ast.kind, this._getErrorContext());
	      // eslint-enable
	    }
	  };

	  return GraphQLParser;
	}();

	function isScalarFieldType(type) {
	  var namedType = getNamedType(type);
	  return namedType instanceof GraphQLScalarType || namedType instanceof GraphQLEnumType;
	}

	function assertScalarFieldType(type) {
	  __webpack_require__(1)(isScalarFieldType(type), 'Expected %s to be a Scalar Field type.', type);
	  return type;
	}

	function applyConditions(conditions, selections) {
	  var nextSelections = selections;
	  conditions.forEach(function (condition) {
	    nextSelections = [(0, _extends3['default'])({}, condition, {
	      selections: nextSelections
	    })];
	  });
	  return nextSelections;
	}

	function getName(ast) {
	  var name = ast.name ? ast.name.value : null;
	  __webpack_require__(1)(typeof name === 'string', 'GraphQLParser: Expected ast node `%s` to have a name.', ast);
	  return name;
	}

	module.exports = GraphQLParser;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayApplyFragmentArgumentTransform
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    CompilerContext = _require.CompilerContext,
	    getIdentifierForArgumentValue = _require.getIdentifierForArgumentValue;

	var getFragmentScope = __webpack_require__(35).getFragmentScope,
	    getRootScope = __webpack_require__(35).getRootScope;

	/**
	 * A tranform that converts a set of documents containing fragments/fragment
	 * spreads *with* arguments to one where all arguments have been inlined. This
	 * is effectively static currying of functions. Nodes are changed as follows:
	 * - Fragment spreads with arguments are replaced with references to an inlined
	 *   version of the referenced fragment.
	 * - Fragments with argument definitions are cloned once per unique set of
	 *   arguments, with the name changed to original name + hash and all nested
	 *   variable references changed to the value of that variable given its
	 *   arguments.
	 * - Field & directive argument variables are replaced with the value of those
	 *   variables in context.
	 * - All nodes are cloned with updated children.
	 *
	 * The transform also handles statically passing/failing Condition nodes:
	 * - Literal Conditions with a passing value are elided and their selections
	 *   inlined in their parent.
	 * - Literal Conditions with a failing value are removed.
	 * - Nodes that would become empty as a result of the above are removed.
	 *
	 * Note that unreferenced fragments are not added to the output.
	 */


	function transform(context) {
	  var documents = context.documents();
	  var fragments = new (__webpack_require__(88))();
	  var nextContext = new CompilerContext(context.schema);
	  nextContext = documents.reduce(function (ctx, node) {
	    if (node.kind === 'Root') {
	      var scope = getRootScope(node.argumentDefinitions);
	      var transformedNode = transformNode(context, fragments, scope, node);
	      return transformedNode ? ctx.add(transformedNode) : ctx;
	    } else {
	      // fragments are transformed when referenced; unreferenced fragments are
	      // not added to the output.
	      return ctx;
	    }
	  }, nextContext);
	  return Array.from(fragments.values()).reduce(function (ctx, fragment) {
	    return fragment ? ctx.add(fragment) : ctx;
	  }, nextContext);
	}

	function transformNode(context, fragments, scope, node) {
	  var selections = transformSelections(context, fragments, scope, node.selections);
	  if (!selections) {
	    return null;
	  }
	  if (node.hasOwnProperty('directives')) {
	    var directives = transformDirectives(scope, node.directives);
	    // $FlowIssue: this is a valid `Node`:
	    return (0, _extends3['default'])({}, node, {
	      directives: directives,
	      selections: selections
	    });
	  }
	  return (0, _extends3['default'])({}, node, {
	    selections: selections
	  });
	}

	function transformFragmentSpread(context, fragments, scope, spread) {
	  var directives = transformDirectives(scope, spread.directives);
	  var fragment = context.getFragment(spread.name);
	  var appliedFragment = transformFragment(context, fragments, scope, fragment, spread.args);
	  if (!appliedFragment) {
	    return null;
	  }
	  return (0, _extends3['default'])({}, spread, {
	    args: [],
	    directives: directives,
	    name: appliedFragment.name
	  });
	}

	function transformField(context, fragments, scope, field) {
	  var args = transformArguments(scope, field.args);
	  var directives = transformDirectives(scope, field.directives);
	  if (field.kind === 'LinkedField') {
	    var selections = transformSelections(context, fragments, scope, field.selections);
	    if (!selections) {
	      return null;
	    }
	    // $FlowFixMe(>=0.28.0)
	    return (0, _extends3['default'])({}, field, {
	      args: args,
	      directives: directives,
	      selections: selections
	    });
	  } else {
	    return (0, _extends3['default'])({}, field, {
	      args: args,
	      directives: directives
	    });
	  }
	}

	function transformCondition(context, fragments, scope, node) {
	  var condition = transformValue(scope, node.condition);
	  __webpack_require__(1)(condition.kind === 'Literal' || condition.kind === 'Variable', 'RelayApplyFragmentArgumentTransform: A non-scalar value was applied to ' + 'an @include or @skip directive, the `if` argument value must be a ' + 'variable or a Boolean, got `%s`.', condition);
	  if (condition.kind === 'Literal' && condition.value !== node.passingValue) {
	    // Dead code, no need to traverse further.
	    return null;
	  }
	  var selections = transformSelections(context, fragments, scope, node.selections);
	  if (!selections) {
	    return null;
	  }
	  if (condition.kind === 'Literal' && condition.value === node.passingValue) {
	    // Always passes, return inlined selections
	    return selections;
	  }
	  return [(0, _extends3['default'])({}, node, {
	    condition: condition,
	    selections: selections
	  })];
	}

	function transformSelections(context, fragments, scope, selections) {
	  var nextSelections = null;
	  selections.forEach(function (selection) {
	    var nextSelection = void 0;
	    if (selection.kind === 'InlineFragment') {
	      nextSelection = transformNode(context, fragments, scope, selection);
	    } else if (selection.kind === 'FragmentSpread') {
	      nextSelection = transformFragmentSpread(context, fragments, scope, selection);
	    } else if (selection.kind === 'Condition') {
	      var conditionSelections = transformCondition(context, fragments, scope, selection);
	      if (conditionSelections) {
	        var _nextSelections;

	        nextSelections = nextSelections || [];
	        (_nextSelections = nextSelections).push.apply(_nextSelections, (0, _toConsumableArray3['default'])(conditionSelections));
	      }
	    } else {
	      nextSelection = transformField(context, fragments, scope, selection);
	    }
	    if (nextSelection) {
	      nextSelections = nextSelections || [];
	      nextSelections.push(nextSelection);
	    }
	  });
	  return nextSelections;
	}

	function transformDirectives(scope, directives) {
	  return directives.map(function (directive) {
	    var args = transformArguments(scope, directive.args);
	    return (0, _extends3['default'])({}, directive, {
	      args: args
	    });
	  });
	}

	function transformArguments(scope, args) {
	  return args.map(function (arg) {
	    var value = transformValue(scope, arg.value);
	    return value === arg.value ? arg : (0, _extends3['default'])({}, arg, { value: value });
	  });
	}

	function transformValue(scope, value) {
	  if (value.kind === 'Variable') {
	    var scopeValue = scope[value.variableName];
	    __webpack_require__(1)(scopeValue != null, 'RelayApplyFragmentArgumentTransform: variable `%s` is not in scope.', value.variableName);
	    return scopeValue;
	  } else if (value.kind === 'ListValue') {
	    return (0, _extends3['default'])({}, value, {
	      items: value.items.map(function (item) {
	        return transformValue(scope, item);
	      })
	    });
	  } else if (value.kind === 'ObjectValue') {
	    return (0, _extends3['default'])({}, value, {
	      fields: value.fields.map(function (field) {
	        return (0, _extends3['default'])({}, field, {
	          value: transformValue(scope, field.value)
	        });
	      })
	    });
	  }
	  return value;
	}

	/**
	 * Apply arguments to a fragment, creating a new fragment (with the given name)
	 * with all values recursively applied.
	 */
	function transformFragment(context, fragments, parentScope, fragment, args) {
	  var argumentsHash = hashArguments(args, parentScope);
	  var fragmentName = argumentsHash ? fragment.name + '_' + argumentsHash : fragment.name;
	  var appliedFragment = fragments.get(fragmentName);
	  if (appliedFragment) {
	    return appliedFragment;
	  }
	  var fragmentScope = getFragmentScope(fragment.argumentDefinitions, args, parentScope);
	  __webpack_require__(1)(!fragments.has(fragmentName) || fragments.get(fragmentName) !== undefined, 'RelayApplyFragmentArgumentTransform: Found a circular reference from ' + 'fragment `%s`.', fragment.name);
	  fragments.set(fragmentName, undefined); // to detect circular references
	  var transformedFragment = null;
	  var selections = transformSelections(context, fragments, fragmentScope, fragment.selections);
	  if (selections) {
	    transformedFragment = (0, _extends3['default'])({}, fragment, {
	      selections: selections,
	      name: fragmentName,
	      argumentDefinitions: []
	    });
	  }
	  fragments.set(fragmentName, transformedFragment);
	  return transformedFragment;
	}

	function hashArguments(args, scope) {
	  if (!args.length) {
	    return null;
	  }
	  var sortedArgs = [].concat((0, _toConsumableArray3['default'])(args)).sort(function (a, b) {
	    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
	  });
	  var printedArgs = JSON.stringify(sortedArgs.map(function (arg) {
	    var value = void 0;
	    if (arg.value.kind === 'Variable') {
	      value = scope[arg.value.variableName];
	      __webpack_require__(1)(value != null, 'RelayApplyFragmentArgumentTransform: variable `%s` is not in scope.', arg.value.variableName);
	    } else {
	      value = arg.value;
	    }
	    return {
	      name: arg.name,
	      value: getIdentifierForArgumentValue(value)
	    };
	  }));
	  return __webpack_require__(49)(printedArgs);
	}

	module.exports = { transform: transform };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayCodeGenerator
	 * 
	 * @format
	 */

	'use strict';

	// TODO T21875029 ../../relay-runtime/util/formatStorageKey

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	// TODO T21875029 ../../relay-runtime/util/prettyStringify


	var _require = __webpack_require__(7),
	    IRVisitor = _require.IRVisitor,
	    SchemaUtils = _require.SchemaUtils;

	var _require2 = __webpack_require__(3),
	    GraphQLList = _require2.GraphQLList;
	// TODO T21875029 ../../relay-runtime/util/RelayConcreteNode


	var getRawType = SchemaUtils.getRawType,
	    isAbstractType = SchemaUtils.isAbstractType,
	    getNullableType = SchemaUtils.getNullableType;


	/**
	 * @public
	 *
	 * Converts a GraphQLIR node into a plain JS object representation that can be
	 * used at runtime.
	 */
	function generate(node) {
	  __webpack_require__(1)(['Root', 'Fragment'].indexOf(node.kind) >= 0, 'RelayCodeGenerator: Unknown AST kind `%s`. Source: %s.', node.kind, getErrorMessage(node));
	  return IRVisitor.visit(node, RelayCodeGenVisitor);
	}

	var RelayCodeGenVisitor = {
	  leave: {
	    Root: function Root(node) {
	      return {
	        argumentDefinitions: node.argumentDefinitions,
	        kind: 'Root',
	        name: node.name,
	        operation: node.operation,
	        selections: flattenArray(node.selections)
	      };
	    },
	    Fragment: function Fragment(node) {
	      return {
	        argumentDefinitions: node.argumentDefinitions,
	        kind: 'Fragment',
	        metadata: node.metadata || null,
	        name: node.name,
	        selections: flattenArray(node.selections),
	        type: node.type.toString()
	      };
	    },
	    LocalArgumentDefinition: function LocalArgumentDefinition(node) {
	      return {
	        kind: 'LocalArgument',
	        name: node.name,
	        type: node.type.toString(),
	        defaultValue: node.defaultValue
	      };
	    },
	    RootArgumentDefinition: function RootArgumentDefinition(node) {
	      return {
	        kind: 'RootArgument',
	        name: node.name,
	        type: node.type ? node.type.toString() : null
	      };
	    },
	    Condition: function Condition(node, key, parent, ancestors) {
	      __webpack_require__(1)(node.condition.kind === 'Variable', 'RelayCodeGenerator: Expected static `Condition` node to be ' + 'pruned or inlined. Source: %s.', getErrorMessage(ancestors[0]));
	      return {
	        kind: 'Condition',
	        passingValue: node.passingValue,
	        condition: node.condition.variableName,
	        selections: flattenArray(node.selections)
	      };
	    },
	    FragmentSpread: function FragmentSpread(node) {
	      return {
	        kind: 'FragmentSpread',
	        name: node.name,
	        args: valuesOrNull(sortByName(node.args))
	      };
	    },
	    InlineFragment: function InlineFragment(node) {
	      return {
	        kind: 'InlineFragment',
	        type: node.typeCondition.toString(),
	        selections: flattenArray(node.selections)
	      };
	    },
	    LinkedField: function LinkedField(node) {
	      var handles = node.handles && node.handles.map(function (handle) {
	        return {
	          kind: 'LinkedHandle',
	          alias: node.alias,
	          args: valuesOrNull(sortByName(node.args)),
	          handle: handle.name,
	          name: node.name,
	          key: handle.key,
	          filters: handle.filters
	        };
	      }) || [];
	      var type = getRawType(node.type);
	      return [{
	        kind: 'LinkedField',
	        alias: node.alias,
	        args: valuesOrNull(sortByName(node.args)),
	        concreteType: !isAbstractType(type) ? type.toString() : null,
	        name: node.name,
	        plural: isPlural(node.type),
	        selections: flattenArray(node.selections),
	        storageKey: getStorageKey(node.name, node.args)
	      }].concat((0, _toConsumableArray3['default'])(handles));
	    },
	    ScalarField: function ScalarField(node) {
	      var handles = node.handles && node.handles.map(function (handle) {
	        return {
	          kind: 'ScalarHandle',
	          alias: node.alias,
	          args: valuesOrNull(sortByName(node.args)),
	          handle: handle.name,
	          name: node.name,
	          key: handle.key,
	          filters: handle.filters
	        };
	      }) || [];
	      return [{
	        kind: 'ScalarField',
	        alias: node.alias,
	        args: valuesOrNull(sortByName(node.args)),
	        name: node.name,
	        selections: valuesOrUndefined(flattenArray(node.selections)),
	        storageKey: getStorageKey(node.name, node.args)
	      }].concat((0, _toConsumableArray3['default'])(handles));
	    },
	    Variable: function Variable(node, key, parent) {
	      return {
	        kind: 'Variable',
	        name: parent.name,
	        variableName: node.variableName,
	        type: parent.type ? parent.type.toString() : null
	      };
	    },
	    Literal: function Literal(node, key, parent) {
	      return {
	        kind: 'Literal',
	        name: parent.name,
	        value: node.value,
	        type: parent.type ? parent.type.toString() : null
	      };
	    },
	    Argument: function Argument(node, key, parent, ancestors) {
	      __webpack_require__(1)(['Variable', 'Literal'].indexOf(node.value.kind) >= 0, 'RelayCodeGenerator: Complex argument values (Lists or ' + 'InputObjects with nested variables) are not supported, argument ' + '`%s` had value `%s`. Source: %s.', node.name, __webpack_require__(50)(node.value), getErrorMessage(ancestors[0]));
	      return node.value.value !== null ? node.value : null;
	    }
	  }
	};

	function isPlural(type) {
	  return getNullableType(type) instanceof GraphQLList;
	}

	function valuesOrUndefined(array) {
	  return !array || array.length === 0 ? undefined : array;
	}

	function valuesOrNull(array) {
	  return !array || array.length === 0 ? null : array;
	}

	function flattenArray(array) {
	  return array ? Array.prototype.concat.apply([], array) : [];
	}

	function sortByName(array) {
	  return array instanceof Array ? array.sort(function (a, b) {
	    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
	  }) : array;
	}

	function getErrorMessage(node) {
	  return 'document ' + node.name;
	}

	/**
	 * Computes storage key if possible.
	 *
	 * Storage keys which can be known ahead of runtime are:
	 *
	 * - Fields that do not take arguments.
	 * - Fields whose arguments are all statically known (ie. literals) at build
	 *   time.
	 */
	function getStorageKey(fieldName, args) {
	  if (!args || !args.length) {
	    return null;
	  }
	  var isLiteral = true;
	  var preparedArgs = {};
	  args.forEach(function (arg) {
	    if (arg.kind !== 'Literal') {
	      isLiteral = false;
	    } else {
	      preparedArgs[arg.name] = arg.value;
	    }
	  });
	  return isLiteral ? __webpack_require__(77)(fieldName, preparedArgs) : null;
	}

	module.exports = { generate: generate };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayCompilerCache
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * A file backed cache. Values are JSON encoded on disk, so only JSON
	 * serializable values should be used.
	 */
	var RelayCompilerCache = function () {

	  /**
	   * @param name         Human readable identifier for the cache
	   * @param cacheBreaker This should be changed in order to invalidate existing
	   *                     caches.
	   */
	  function RelayCompilerCache(name, cacheBreaker) {
	    (0, _classCallCheck3['default'])(this, RelayCompilerCache);

	    // Include username in the cache dir to avoid issues with directories being
	    // owned by a different user.
	    var username = __webpack_require__(52).userInfo().username;
	    var cacheID = __webpack_require__(26).createHash('md5').update(cacheBreaker).update(username).digest('hex');
	    this._dir = __webpack_require__(5).join(__webpack_require__(52).tmpdir(), name + '-' + cacheID);
	    if (!__webpack_require__(4).existsSync(this._dir)) {
	      __webpack_require__(4).mkdirSync(this._dir);
	    }
	  }

	  RelayCompilerCache.prototype.getOrCompute = function getOrCompute(key, compute) {
	    var cacheFile = __webpack_require__(5).join(this._dir, key);
	    if (__webpack_require__(4).existsSync(cacheFile)) {
	      return JSON.parse(__webpack_require__(4).readFileSync(cacheFile, 'utf8'));
	    }
	    var value = compute();
	    __webpack_require__(4).writeFileSync(cacheFile, JSON.stringify(value), 'utf8');
	    return value;
	  };

	  return RelayCompilerCache;
	}();

	module.exports = RelayCompilerCache;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayConnectionConstants
	 * 
	 * @format
	 */

	'use strict';

	var AFTER = 'after';
	var BEFORE = 'before';
	var FIRST = 'first';
	var KEY = 'key';
	var LAST = 'last';

	module.exports = {
	  AFTER: AFTER,
	  BEFORE: BEFORE,
	  FIRST: FIRST,
	  KEY: KEY,
	  LAST: LAST
	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayFieldHandleTransform
	 * 
	 * @format
	 */

	'use strict';

	// TODO T21875029 ../../relay-runtime/util/getRelayHandleKey

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    CompilerContext = _require.CompilerContext,
	    IRTransformer = _require.IRTransformer;

	function transform(context, schema) {
	  return IRTransformer.transform(context, {
	    LinkedField: visitField,
	    ScalarField: visitField
	  }, function () {
	    return true;
	  });
	}

	/**
	 * @internal
	 */
	function visitField(field, state) {
	  if (field.kind === 'LinkedField') {
	    field = this.traverse(field, state);
	  }
	  var handles = field.handles;
	  if (!handles || !handles.length) {
	    return field;
	  }
	  // ensure exactly one handle
	  __webpack_require__(1)(handles.length === 1, 'RelayFieldHandleTransform: Expected fields to have at most one ' + '"handle" property, got `%s`.', handles.join(', '));
	  var alias = field.alias || field.name;
	  var handle = handles[0];
	  var name = __webpack_require__(79)(handle.name, handle.key, field.name);
	  var filters = handle.filters;
	  var args = filters ? field.args.filter(function (arg) {
	    return filters.indexOf(arg.name) > -1;
	  }) : [];

	  return (0, _extends3['default'])({}, field, {
	    args: args,
	    alias: alias,
	    name: name,
	    handles: null
	  });
	}

	module.exports = { transform: transform };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayFileWriter
	 * 
	 * @format
	 */

	'use strict';

	var _asyncToGenerator2 = __webpack_require__(13);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(9));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(65),
	    generate = _require.generate;

	var _require2 = __webpack_require__(7),
	    ASTConvert = _require2.ASTConvert,
	    CodegenDirectory = _require2.CodegenDirectory,
	    CompilerContext = _require2.CompilerContext,
	    SchemaUtils = _require2.SchemaUtils;

	var _require3 = __webpack_require__(11),
	    ImmutableMap = _require3.Map;
	// TODO T21875029 ../../relay-runtime/util/RelayConcreteNode


	var isOperationDefinitionAST = SchemaUtils.isOperationDefinitionAST;

	var RelayFileWriter = function () {
	  function RelayFileWriter(options) {
	    (0, _classCallCheck3['default'])(this, RelayFileWriter);
	    var config = options.config,
	        onlyValidate = options.onlyValidate,
	        baseDocuments = options.baseDocuments,
	        documents = options.documents,
	        schema = options.schema;

	    this._baseDocuments = baseDocuments || ImmutableMap();
	    this._baseSchema = schema;
	    this._config = config;
	    this._documents = documents;
	    this._onlyValidate = onlyValidate;

	    validateConfig(this._config);
	  }

	  RelayFileWriter.prototype.writeAll = (() => {
	    var _ref = (0, _asyncToGenerator3.default)(function* () {
	      var _this = this;

	      var tStart = Date.now();

	      // Can't convert to IR unless the schema already has Relay-local extensions
	      var transformedSchema = ASTConvert.transformASTSchema(this._baseSchema, this._config.schemaExtensions);
	      var extendedSchema = ASTConvert.extendASTSchema(transformedSchema, this._baseDocuments.merge(this._documents).valueSeq().toArray());

	      // Build a context from all the documents
	      var baseDefinitionNames = new Set();
	      this._baseDocuments.forEach(function (doc) {
	        doc.definitions.forEach(function (def) {
	          if (isOperationDefinitionAST(def) && def.name) {
	            baseDefinitionNames.add(def.name.value);
	          }
	        });
	      });
	      var definitionDirectories = new Map();
	      var allOutputDirectories = new Map();
	      var addCodegenDir = function addCodegenDir(dirPath) {
	        var codegenDir = new CodegenDirectory(dirPath, {
	          onlyValidate: _this._onlyValidate
	        });
	        allOutputDirectories.set(dirPath, codegenDir);
	        return codegenDir;
	      };

	      var configOutputDirectory = void 0;
	      if (this._config.outputDir) {
	        configOutputDirectory = addCodegenDir(this._config.outputDir);
	      } else {
	        this._documents.forEach(function (doc, filePath) {
	          doc.definitions.forEach(function (def) {
	            if (isOperationDefinitionAST(def) && def.name) {
	              definitionDirectories.set(def.name.value, __webpack_require__(5).join(_this._config.baseDir, __webpack_require__(5).dirname(filePath)));
	            }
	          });
	        });
	      }

	      var definitions = ASTConvert.convertASTDocumentsWithBase(extendedSchema, this._baseDocuments.valueSeq().toArray(), this._documents.valueSeq().toArray(),
	      // Verify using local and global rules, can run global verifications here
	      // because all files are processed together
	      [].concat((0, _toConsumableArray3['default'])(__webpack_require__(42).LOCAL_RULES), (0, _toConsumableArray3['default'])(__webpack_require__(42).GLOBAL_RULES)), __webpack_require__(20).transform.bind(__webpack_require__(20)));

	      var compilerContext = new CompilerContext(extendedSchema);
	      var compiler = new (__webpack_require__(34))(this._baseSchema, compilerContext, this._config.compilerTransforms, generate);

	      var getGeneratedDirectory = function getGeneratedDirectory(definitionName) {
	        if (configOutputDirectory) {
	          return configOutputDirectory;
	        }
	        var definitionDir = definitionDirectories.get(definitionName);
	        __webpack_require__(1)(definitionDir, 'RelayFileWriter: Could not determine source directory for definition: %s', definitionName);
	        var generatedPath = __webpack_require__(5).join(definitionDir, '__generated__');
	        var cachedDir = allOutputDirectories.get(generatedPath);
	        if (!cachedDir) {
	          cachedDir = addCodegenDir(generatedPath);
	        }
	        return cachedDir;
	      };

	      compiler.addDefinitions(definitions);

	      var transformedFlowContext = __webpack_require__(38).flowTransforms.reduce(function (ctx, transform) {
	        return transform(ctx, extendedSchema);
	      }, compiler.context());
	      var transformedQueryContext = compiler.transformedQueryContext();
	      var compiledDocumentMap = compiler.compile();

	      var tCompiled = Date.now();

	      var tGenerated = void 0;
	      try {
	        yield Promise.all(transformedFlowContext.documents().map((() => {
	          var _ref2 = (0, _asyncToGenerator3.default)(function* (node) {
	            if (baseDefinitionNames.has(node.name)) {
	              // don't add definitions that were part of base context
	              return;
	            }

	            var flowTypes = __webpack_require__(38).generate(node, _this._config.customScalars, _this._config.inputFieldWhiteListForFlow);

	            var compiledNode = compiledDocumentMap.get(node.name);
	            __webpack_require__(1)(compiledNode, 'RelayCompiler: did not compile definition: %s', node.name);
	            yield __webpack_require__(82)(getGeneratedDirectory(compiledNode.name), getGeneratedNode(compiledNode), _this._config.formatModule, flowTypes, _this._config.persistQuery, _this._config.platform, _this._config.relayRuntimeModule || 'relay-runtime');
	          });

	          return function (_x) {
	            return _ref2.apply(this, arguments);
	          };
	        })()));
	        tGenerated = Date.now();

	        if (this._config.generateExtraFiles) {
	          var configDirectory = this._config.outputDir;
	          this._config.generateExtraFiles(function (dir) {
	            var outputDirectory = dir || configDirectory;
	            __webpack_require__(1)(outputDirectory, 'RelayFileWriter: cannot generate extra files without specifying ' + 'an outputDir in the config or passing it in.');
	            var outputDir = allOutputDirectories.get(outputDirectory);
	            if (!outputDir) {
	              outputDir = addCodegenDir(outputDirectory);
	            }
	            return outputDir;
	          }, transformedQueryContext, getGeneratedDirectory);
	        }

	        // clean output directories
	        allOutputDirectories.forEach(function (dir) {
	          dir.deleteExtraFiles();
	        });
	      } catch (error) {
	        tGenerated = Date.now();
	        var details = void 0;
	        try {
	          details = JSON.parse(error.message);
	        } catch (_) {}
	        if (details && details.name === 'GraphQL2Exception' && details.message) {
	          throw new Error('GraphQL error writing modules:\n' + details.message);
	        }
	        throw new Error('Error writing modules:\n' + error.toString());
	      }

	      var tExtra = Date.now();
	      // eslint-disable-next-line no-console
	      console.log('Writer time: %s [%s compiling, %s generating, %s extra]', toSeconds(tStart, tExtra), toSeconds(tStart, tCompiled), toSeconds(tCompiled, tGenerated), toSeconds(tGenerated, tExtra));
	      return allOutputDirectories;
	    });

	    function writeAll() {
	      return _ref.apply(this, arguments);
	    }

	    return writeAll;
	  })();

	  return RelayFileWriter;
	}();

	function getGeneratedNode(compiledNode) {
	  __webpack_require__(1)(typeof compiledNode === 'object' && compiledNode !== null && (compiledNode.kind === 'Fragment' || compiledNode.kind === 'Batch'), 'getGeneratedNode: Expected a GeneratedNode, got `%s`.', JSON.stringify(compiledNode));
	  return compiledNode;
	}

	function toSeconds(t0, t1) {
	  return ((t1 - t0) / 1000).toFixed(2) + 's';
	}

	function validateConfig(config) {
	  if (config.buildCommand) {
	    process.stderr.write('WARNING: RelayFileWriter: For RelayFileWriter to work you must ' + 'replace config.buildCommand with config.formatModule.\n');
	  }
	}

	module.exports = RelayFileWriter;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayFlowTypeTransformers
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(37),
	    readOnlyArrayOfType = _require.readOnlyArrayOfType,
	    stringLiteralTypeAnnotation = _require.stringLiteralTypeAnnotation;

	var _require2 = __webpack_require__(3),
	    GraphQLEnumType = _require2.GraphQLEnumType,
	    GraphQLInputType = _require2.GraphQLInputType,
	    GraphQLInputObjectType = _require2.GraphQLInputObjectType,
	    GraphQLInterfaceType = _require2.GraphQLInterfaceType,
	    GraphQLList = _require2.GraphQLList,
	    GraphQLNonNull = _require2.GraphQLNonNull,
	    GraphQLObjectType = _require2.GraphQLObjectType,
	    GraphQLScalarType = _require2.GraphQLScalarType,
	    GraphQLType = _require2.GraphQLType,
	    GraphQLUnionType = _require2.GraphQLUnionType;

	function transformScalarType(type, customScalars, objectProps) {
	  if (type instanceof GraphQLNonNull) {
	    return transformNonNullableScalarType(type.ofType, objectProps, customScalars);
	  } else {
	    return __webpack_require__(2).nullableTypeAnnotation(transformNonNullableScalarType(type, objectProps, customScalars));
	  }
	}

	function transformNonNullableScalarType(type, objectProps, customScalars) {
	  if (type instanceof GraphQLList) {
	    return readOnlyArrayOfType(transformScalarType(type.ofType, customScalars, objectProps));
	  } else if (type instanceof GraphQLObjectType || type instanceof GraphQLUnionType || type instanceof GraphQLInterfaceType) {
	    return objectProps;
	  } else if (type instanceof GraphQLScalarType) {
	    return transformGraphQLScalarType(type, customScalars);
	  } else if (type instanceof GraphQLEnumType) {
	    return transformGraphQLEnumType(type);
	  } else {
	    throw new Error('Could not convert from GraphQL type ' + type.toString());
	  }
	}

	function transformGraphQLScalarType(type, customScalars) {
	  switch (customScalars[type.name] || type.name) {
	    case 'ID':
	    case 'String':
	    case 'Url':
	      return __webpack_require__(2).stringTypeAnnotation();
	    case 'Float':
	    case 'Int':
	      return __webpack_require__(2).numberTypeAnnotation();
	    case 'Boolean':
	      return __webpack_require__(2).booleanTypeAnnotation();
	    default:
	      return __webpack_require__(2).anyTypeAnnotation();
	  }
	}

	function transformGraphQLEnumType(type) {
	  // TODO create a flow type for enums
	  return __webpack_require__(2).unionTypeAnnotation(type.getValues().map(function (_ref) {
	    var value = _ref.value;
	    return stringLiteralTypeAnnotation(value);
	  }));
	}

	function transformInputType(type, customScalars, inputFieldWhiteList) {
	  if (type instanceof GraphQLNonNull) {
	    return transformNonNullableInputType(type.ofType, customScalars, inputFieldWhiteList);
	  } else {
	    return __webpack_require__(2).nullableTypeAnnotation(transformNonNullableInputType(type, customScalars, inputFieldWhiteList));
	  }
	}

	function transformNonNullableInputType(type, customScalars, inputFieldWhiteList) {
	  if (type instanceof GraphQLList) {
	    return readOnlyArrayOfType(transformInputType(type.ofType, customScalars, inputFieldWhiteList));
	  } else if (type instanceof GraphQLScalarType) {
	    return transformGraphQLScalarType(type, customScalars);
	  } else if (type instanceof GraphQLEnumType) {
	    return transformGraphQLEnumType(type);
	  } else if (type instanceof GraphQLInputObjectType) {
	    var fields = type.getFields();
	    var props = Object.keys(fields).map(function (key) {
	      return fields[key];
	    }).filter(function (field) {
	      return !inputFieldWhiteList || inputFieldWhiteList.indexOf(field.name) < 0;
	    }).map(function (field) {
	      var property = __webpack_require__(2).objectTypeProperty(__webpack_require__(2).identifier(field.name), transformInputType(field.type, customScalars, inputFieldWhiteList));
	      if (!(field.type instanceof GraphQLNonNull)) {
	        property.optional = true;
	      }
	      return property;
	    });
	    return __webpack_require__(2).objectTypeAnnotation(props);
	  } else {
	    throw new Error('Could not convert from GraphQL type ' + type.toString());
	  }
	}

	module.exports = {
	  transformInputType: transformInputType,
	  transformScalarType: transformScalarType
	};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule RelayGenerateIDFieldTransform
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    CompilerContext = _require.CompilerContext,
	    SchemaUtils = _require.SchemaUtils;

	var _require2 = __webpack_require__(41),
	    hasUnaliasedSelection = _require2.hasUnaliasedSelection;

	var _require3 = __webpack_require__(3),
	    assertAbstractType = _require3.assertAbstractType,
	    assertCompositeType = _require3.assertCompositeType,
	    assertLeafType = _require3.assertLeafType;

	var canHaveSelections = SchemaUtils.canHaveSelections,
	    getRawType = SchemaUtils.getRawType,
	    hasID = SchemaUtils.hasID,
	    implementsInterface = SchemaUtils.implementsInterface,
	    isAbstractType = SchemaUtils.isAbstractType,
	    mayImplement = SchemaUtils.mayImplement;


	var ID = 'id';
	var ID_TYPE = 'ID';
	var NODE_TYPE = 'Node';

	/**
	 * A transform that adds "requisite" fields to all nodes:
	 * - Adds an `id` selection on any `LinkedField` of type that implements `Node`
	 *   or has an id field but where there is no unaliased `id` selection.
	 */
	function transform(context) {
	  var documents = context.documents();
	  return documents.reduce(function (ctx, node) {
	    var transformedNode = transformNode(context, node);
	    return ctx.add(transformedNode);
	  }, new CompilerContext(context.schema));
	}

	function transformNode(context, node) {
	  var selections = node.selections.map(function (selection) {
	    if (selection.kind === 'LinkedField') {
	      return transformField(context, selection);
	    } else if (selection.kind === 'InlineFragment' || selection.kind === 'Condition') {
	      return transformNode(context, selection);
	    } else {
	      return selection;
	    }
	  });
	  return (0, _extends3['default'])({}, node, {
	    selections: selections
	  });
	}

	function transformField(context, field) {
	  var transformedNode = transformNode(context, field);
	  var selections = [].concat((0, _toConsumableArray3['default'])(transformedNode.selections));
	  var idSelections = generateIDSelections(context, field, field.type);
	  if (idSelections) {
	    selections.push.apply(selections, (0, _toConsumableArray3['default'])(idSelections));
	  }

	  return (0, _extends3['default'])({}, transformedNode, {
	    selections: selections
	  });
	}

	/**
	 * @internal
	 *
	 * Returns an array of zero or more selections to fetch `id` depending on the
	 * type of the given field:
	 * - If the field already has an unaliased `id` field, do nothing
	 * - If the field type has an `id` subfield, return an `id` selection
	 * - If the field type is abstract, then generate a `... on Node { id }`
	 *   fragment if *any* concrete type implements Node. Then generate a
	 *   `... on PossibleType { id }` for every concrete type that does *not*
	 *   implement `Node`
	 */
	function generateIDSelections(context, field, type) {
	  if (hasUnaliasedSelection(field, ID)) {
	    return null;
	  }
	  var unmodifiedType = assertCompositeType(getRawType(type));
	  var generatedSelections = [];
	  // Object or  Interface type that has `id` field
	  if (canHaveSelections(unmodifiedType) && hasID(context.schema, unmodifiedType)) {
	    var idType = assertLeafType(context.schema.getType(ID_TYPE));
	    generatedSelections.push({
	      kind: 'ScalarField',
	      alias: null,
	      args: [],
	      directives: [],
	      handles: null,
	      metadata: null,
	      name: ID,
	      type: idType
	    });
	  } else if (isAbstractType(unmodifiedType)) {
	    // Union or interface: concrete types may implement `Node` or have an `id`
	    // field
	    var _idType = assertLeafType(context.schema.getType(ID_TYPE));
	    if (mayImplement(context.schema, unmodifiedType, NODE_TYPE)) {
	      var nodeType = assertCompositeType(context.schema.getType(NODE_TYPE));
	      generatedSelections.push(buildIdFragment(nodeType, _idType));
	    }
	    var abstractType = assertAbstractType(unmodifiedType);
	    context.schema.getPossibleTypes(abstractType).forEach(function (possibleType) {
	      if (!implementsInterface(possibleType, NODE_TYPE) && hasID(context.schema, possibleType)) {
	        generatedSelections.push(buildIdFragment(possibleType, _idType));
	      }
	    });
	  }
	  return generatedSelections;
	}

	/**
	 * @internal
	 */
	function buildIdFragment(fragmentType, idType) {
	  return {
	    kind: 'InlineFragment',
	    directives: [],
	    metadata: null,
	    typeCondition: fragmentType,
	    selections: [{
	      kind: 'ScalarField',
	      alias: null,
	      args: [],
	      directives: [],
	      handles: null,
	      metadata: null,
	      name: ID,
	      type: idType
	    }]
	  };
	}

	module.exports = { transform: transform };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelayIRTransforms
	 * 
	 * @format
	 */

	'use strict';

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    FilterDirectivesTransform = _require.FilterDirectivesTransform,
	    FlattenTransform = _require.FlattenTransform,
	    IRTransforms = _require.IRTransforms,
	    SkipRedundantNodesTransform = _require.SkipRedundantNodesTransform;

	var fragmentTransforms = IRTransforms.fragmentTransforms,
	    queryTransforms = IRTransforms.queryTransforms;

	// Transforms applied to the code used to process a query response.

	var relaySchemaExtensions = [__webpack_require__(19).SCHEMA_EXTENSION, __webpack_require__(21).SCHEMA_EXTENSION];

	// Transforms applied to fragments used for reading data from a store
	var relayFragmentTransforms = [function (ctx) {
	  return __webpack_require__(19).transform(ctx);
	}, __webpack_require__(43).transform, __webpack_require__(21).transform, __webpack_require__(68).transform].concat((0, _toConsumableArray3['default'])(fragmentTransforms));

	// Transforms applied to queries/mutations/subscriptions that are used for
	// fetching data from the server and parsing those responses.
	var relayQueryTransforms = [function (ctx) {
	  return __webpack_require__(19).transform(ctx);
	}, __webpack_require__(43).transform, __webpack_require__(64).transform].concat((0, _toConsumableArray3['default'])(queryTransforms), [__webpack_require__(21).transform, __webpack_require__(71).transform]);

	// Transforms applied to the code used to process a query response.
	var relayCodegenTransforms = [function (ctx) {
	  return FlattenTransform.transform(ctx, {
	    flattenAbstractTypes: true,
	    flattenFragmentSpreads: true
	  });
	}, SkipRedundantNodesTransform.transform,
	// Must be put after `SkipRedundantNodesTransform` which could shuffle the order.
	__webpack_require__(39).transform, FilterDirectivesTransform.transform];

	// Transforms applied before printing the query sent to the server.
	var relayPrintTransforms = [function (ctx) {
	  return FlattenTransform.transform(ctx, {});
	}, __webpack_require__(39).transform, __webpack_require__(73).transform, FilterDirectivesTransform.transform];

	module.exports = {
	  codegenTransforms: relayCodegenTransforms,
	  fragmentTransforms: relayFragmentTransforms,
	  printTransforms: relayPrintTransforms,
	  queryTransforms: relayQueryTransforms,
	  schemaExtensions: relaySchemaExtensions
	};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule RelaySkipHandleFieldTransform
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(7),
	    CompilerContext = _require.CompilerContext,
	    IRTransformer = _require.IRTransformer;

	/**
	 * A transform that removes field `handles`. Intended for use when e.g.
	 * printing queries to send to a GraphQL server.
	 */
	function transform(context, schema) {
	  return IRTransformer.transform(context, {
	    LinkedField: visitField,
	    ScalarField: visitField
	  }, function () {
	    return true;
	  });
	}

	function visitField(field, state) {
	  var transformedNode = this.traverse(field, state);
	  if (transformedNode.handles) {
	    return (0, _extends3['default'])({}, transformedNode, {
	      handles: null
	    });
	  }
	  return transformedNode;
	}

	module.exports = { transform: transform };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule StripUnusedVariablesTransform
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * A transform that removes variables from root queries that aren't referenced
	 * by the query itself.
	 */
	function transform(context) {
	  return context.documents().reduce(function (ctx, node) {
	    return ctx.add(node.kind === 'Root' ? transformRoot(context, node) : node);
	  }, new (__webpack_require__(10))(context.schema));
	}

	function transformRoot(context, root) {
	  var state = {
	    referencedVariables: new Set()
	  };
	  var newContext = __webpack_require__(14).transform(__webpack_require__(23)(root, context), {
	    Argument: visitArgument,
	    Condition: visitCondition
	  }, function () {
	    return state;
	  });
	  var transformedNode = newContext.getRoot(root.name);
	  /**
	   * Remove the extraneous arguments *after* transform returns, since fragments
	   * could be transformed after the root query.
	   */
	  return (0, _extends3['default'])({}, transformedNode, {
	    argumentDefinitions: transformedNode.argumentDefinitions.filter(function (arg) {
	      return state.referencedVariables.has(arg.name);
	    })
	  });
	}

	function visitArgument(argument, state) {
	  var value = argument.value;

	  if (value.kind === 'Variable') {
	    state.referencedVariables.add(value.variableName);
	  }
	  return argument;
	}

	function visitCondition(condition, state) {
	  var innerCondition = condition.condition;
	  if (innerCondition.kind === 'Variable') {
	    state.referencedVariables.add(innerCondition.variableName);
	  }
	  return condition;
	}

	module.exports = { transform: transform };

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule areEqualOSS
	 * 
	 * @format
	 */
	'use strict';

	var aStackPool = [];
	var bStackPool = [];

	/**
	 * Checks if two values are equal. Values may be primitives, arrays, or objects.
	 * Returns true if both arguments have the same keys and values.
	 *
	 * @see http://underscorejs.org
	 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
	 * @license MIT
	 */
	function areEqual(a, b) {
	  var aStack = aStackPool.length ? aStackPool.pop() : [];
	  var bStack = bStackPool.length ? bStackPool.pop() : [];
	  var result = eq(a, b, aStack, bStack);
	  aStack.length = 0;
	  bStack.length = 0;
	  aStackPool.push(aStack);
	  bStackPool.push(bStack);
	  return result;
	}

	function eq(a, b, aStack, bStack) {
	  if (a === b) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    return a !== 0 || 1 / a === 1 / b;
	  }
	  if (a == null || b == null) {
	    // a or b can be `null` or `undefined`
	    return false;
	  }
	  if (typeof a !== 'object' || typeof b !== 'object') {
	    return false;
	  }
	  var objToStr = Object.prototype.toString;
	  var className = objToStr.call(a);
	  if (className !== objToStr.call(b)) {
	    return false;
	  }
	  switch (className) {
	    case '[object String]':
	      return a === String(b);
	    case '[object Number]':
	      return isNaN(a) || isNaN(b) ? false : a === Number(b);
	    case '[object Date]':
	    case '[object Boolean]':
	      return +a === +b;
	    case '[object RegExp]':
	      return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.ignoreCase === b.ignoreCase;
	  }
	  // Assume equality for cyclic structures.
	  var length = aStack.length;
	  while (length--) {
	    if (aStack[length] === a) {
	      return bStack[length] === b;
	    }
	  }
	  aStack.push(a);
	  bStack.push(b);
	  var size = 0;
	  // Recursively compare objects and arrays.
	  if (className === '[object Array]') {
	    size = a.length;
	    if (size !== b.length) {
	      return false;
	    }
	    // Deep compare the contents, ignoring non-numeric properties.
	    while (size--) {
	      if (!eq(a[size], b[size], aStack, bStack)) {
	        return false;
	      }
	    }
	  } else {
	    if (a.constructor !== b.constructor) {
	      return false;
	    }
	    if (a.hasOwnProperty('valueOf') && b.hasOwnProperty('valueOf')) {
	      return a.valueOf() === b.valueOf();
	    }
	    var keys = Object.keys(a);
	    if (keys.length !== Object.keys(b).length) {
	      return false;
	    }
	    for (var i = 0; i < keys.length; i++) {
	      if (keys[i] === '_owner') {
	        // HACK: Comparing deeply nested React trees is slow since you end up
	        // comparing the entire tree (all ancestors and all children) and
	        // likely not what you want if you're comparing two elements with
	        // areEqual. We bail out here for now.
	        continue;
	      }
	      if (!b.hasOwnProperty(keys[i]) || !eq(a[keys[i]], b[keys[i]], aStack, bStack)) {
	        return false;
	      }
	    }
	  }
	  aStack.pop();
	  bStack.pop();
	  return true;
	}

	module.exports = areEqual;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule formatGeneratedModule
	 * 
	 * @format
	 */

	'use strict';

	var formatGeneratedModule = function formatGeneratedModule(_ref) {
	  var moduleName = _ref.moduleName,
	      documentType = _ref.documentType,
	      docText = _ref.docText,
	      concreteText = _ref.concreteText,
	      flowText = _ref.flowText,
	      hash = _ref.hash,
	      devTextGenerator = _ref.devTextGenerator,
	      relayRuntimeModule = _ref.relayRuntimeModule;

	  var objectName = documentType === 'ConcreteBatch' ? 'batch' : 'fragment';
	  var docTextComment = docText ? '\n/*\n' + docText.trim() + '\n*/\n' : '';
	  var hashText = hash ? '\n * ' + hash : '';
	  var devOnlyText = devTextGenerator ? devTextGenerator(objectName) : '';
	  return '/**\n * ' + '@' + 'flow' + hashText + '\n */\n\n/* eslint-disable */\n\n\'use strict\';\n\n/*::\nimport type {' + documentType + '} from \'' + relayRuntimeModule + '\';\n' + (flowText || '') + '\n*/\n\n' + docTextComment + '\nconst ' + objectName + ' /*: ' + documentType + '*/ = ' + concreteText + ';\n' + devOnlyText + '\nmodule.exports = ' + objectName + ';\n';
	};

	module.exports = formatGeneratedModule;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule formatStorageKey
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Given a `fieldName` (eg. "foo") and an object representing arguments and
	 * values (eg. `{first: 10, orberBy: "name"}`) returns a unique storage key
	 * (ie. `foo{"first":10,"orderBy":"name"}`).
	 */
	function formatStorageKey(fieldName, argsWithValues) {
	  if (!argsWithValues) {
	    return fieldName;
	  }
	  var filtered = null;
	  for (var argName in argsWithValues) {
	    if (argsWithValues.hasOwnProperty(argName)) {
	      var value = argsWithValues[argName];
	      if (value != null) {
	        if (!filtered) {
	          filtered = {};
	        }
	        filtered[argName] = value;
	      }
	    }
	  }
	  return filtered ? fieldName + __webpack_require__(81)(filtered) : fieldName;
	}

	module.exports = formatStorageKey;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule getModuleName
	 * 
	 * @format
	 */

	'use strict';

	function getModuleName(filePath) {
	  // index.js -> index
	  // index.js.flow -> index.js
	  var filename = __webpack_require__(5).basename(filePath, __webpack_require__(5).extname(filePath));

	  // index.js -> index (when extension has multiple segments)
	  filename = filename.replace(/(?:\.\w+)+/, '');

	  // /path/to/button/index.js -> button
	  var moduleName = filename === 'index' ? __webpack_require__(5).basename(__webpack_require__(5).dirname(filePath)) : filename;

	  // Example.ios -> Example
	  // Example.product.android -> Example
	  moduleName = moduleName.replace(/(?:\.\w+)+/, '');

	  // foo-bar -> fooBar
	  // Relay compatibility mode splits on _, so we can't use that here.
	  moduleName = moduleName.replace(/[^a-zA-Z0-9]+(\w?)/g, function (match, next) {
	    return next.toUpperCase();
	  });

	  return moduleName;
	}

	module.exports = getModuleName;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule getRelayHandleKey
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(36),
	    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

	/**
	 * @internal
	 *
	 * Helper to create a unique name for a handle field based on the handle name, handle key and
	 * source field.
	 */


	function getRelayHandleKey(handleName, key, fieldName) {
	  if (key && key !== DEFAULT_HANDLE_KEY) {
	    return '__' + key + '_' + handleName;
	  }

	  __webpack_require__(1)(fieldName != null, 'getRelayHandleKey: Expected either `fieldName` or `key` in `handle` to be provided');
	  return '__' + fieldName + '_' + handleName;
	}

	module.exports = getRelayHandleKey;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule nullthrowsOSS
	 * 
	 * @format
	 */
	'use strict';

	var nullthrows = function nullthrows(x) {
	  if (x != null) {
	    return x;
	  }
	  throw new Error('Got unexpected null or undefined');
	};

	module.exports = nullthrows;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @providesModule stableJSONStringify
	 * @format
	 */

	'use strict';

	/**
	 * Simple recursive stringifier that produces a stable JSON string suitable for
	 * use as a cache key. Does not handle corner-cases such as circular references
	 * or exotic types.
	 */

	function stableJSONStringify(obj) {
	  if (Array.isArray(obj)) {
	    var result = [];
	    for (var ii = 0; ii < obj.length; ii++) {
	      var value = obj[ii] !== undefined ? obj[ii] : null;
	      result.push(stableJSONStringify(value));
	    }
	    return '[' + result.join(',') + ']';
	  } else if (typeof obj === 'object' && obj) {
	    var _result = [];
	    var keys = Object.keys(obj);
	    keys.sort();
	    for (var _ii = 0; _ii < keys.length; _ii++) {
	      var key = keys[_ii];
	      var _value = stableJSONStringify(obj[key]);
	      _result.push('"' + key + '":' + _value);
	    }
	    return '{' + _result.join(',') + '}';
	  } else {
	    return JSON.stringify(obj);
	  }
	}

	module.exports = stableJSONStringify;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule writeRelayGeneratedFile
	 * 
	 * @format
	 */

	'use strict';

	var _asyncToGenerator2 = __webpack_require__(13);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _extends3 = _interopRequireDefault(__webpack_require__(6));

	// TODO T21875029 ../../relay-runtime/util/RelayConcreteNode


	/**
	 * Generate a module for the given document name/text.
	 */
	let writeRelayGeneratedFile = (() => {
	  var _ref = (0, _asyncToGenerator3.default)(function* (codegenDir, generatedNode, formatModule, flowText, persistQuery, platform, relayRuntimeModule) {
	    var moduleName = generatedNode.name + '.graphql';
	    var platformName = platform ? moduleName + '.' + platform : moduleName;
	    var filename = platformName + '.js';
	    var flowTypeName = generatedNode.kind === 'Batch' ? 'ConcreteBatch' : 'ConcreteFragment';
	    var devOnlyProperties = {};

	    var text = null;
	    var hash = null;
	    if (generatedNode.kind === 'Batch') {
	      text = generatedNode.text;
	      __webpack_require__(1)(text, 'codegen-runner: Expected query to have text before persisting.');
	      var oldContent = codegenDir.read(filename);
	      // Hash the concrete node including the query text.
	      var hasher = __webpack_require__(26).createHash('md5');
	      hasher.update('cache-breaker-2');
	      hasher.update(JSON.stringify(generatedNode));
	      if (flowText) {
	        hasher.update(flowText);
	      }
	      if (persistQuery) {
	        hasher.update('persisted');
	      }
	      hash = hasher.digest('hex');
	      if (hash === extractHash(oldContent)) {
	        codegenDir.markUnchanged(filename);
	        return null;
	      }
	      if (codegenDir.onlyValidate) {
	        codegenDir.markUpdated(filename);
	        return null;
	      }
	      if (persistQuery) {
	        generatedNode = (0, _extends3['default'])({}, generatedNode, {
	          text: null,
	          id: yield persistQuery(text)
	        });

	        devOnlyProperties.text = text;
	      }
	    }

	    var moduleText = formatModule({
	      moduleName: moduleName,
	      documentType: flowTypeName,
	      docText: text,
	      flowText: flowText,
	      hash: hash ? '@relayHash ' + hash : null,
	      concreteText: __webpack_require__(50)(generatedNode),
	      devTextGenerator: makeDevTextGenerator(devOnlyProperties),
	      relayRuntimeModule: relayRuntimeModule
	    });

	    codegenDir.writeFile(filename, moduleText);
	    return generatedNode;
	  });

	  return function writeRelayGeneratedFile(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
	    return _ref.apply(this, arguments);
	  };
	})();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	// TODO T21875029 ../../relay-runtime/util/prettyStringify


	function makeDevTextGenerator(devOnlyProperties) {
	  return function (objectName) {
	    var assignments = Object.keys(devOnlyProperties).map(function (key) {
	      var value = devOnlyProperties[key];
	      var stringifiedValue = value === undefined ? 'undefined' : JSON.stringify(value);

	      return '  ' + objectName + '[\'' + key + '\'] = ' + stringifiedValue + ';';
	    });

	    if (!assignments.length) {
	      return '';
	    }

	    return '\n\nif (__DEV__) {\n' + assignments.join('\n') + '\n}\n';
	  };
	}

	function extractHash(text) {
	  if (!text) {
	    return null;
	  }
	  if (/<<<<<|>>>>>/.test(text)) {
	    // looks like a merge conflict
	    return null;
	  }
	  var match = text.match(/@relayHash (\w{32})\b/m);
	  return match && match[1];
	}

	module.exports = writeRelayGeneratedFile;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = require("babel-generator");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = require("babylon");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = require("fb-watchman");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = require("fbjs/lib/Map");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = require("relay-runtime");

/***/ })
/******/ ]);