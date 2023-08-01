/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.test = (function() {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    var test = {};

    test.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof test
         * @namespace
         */
        var v1 = {};

        v1.Test = (function() {

            /**
             * Properties of a Test.
             * @memberof test.v1
             * @interface ITest
             * @property {string|null} [name] Test name
             * @property {number|null} [id] Test id
             * @property {string|null} [email] Test email
             * @property {common.v1.IABC|null} [abc] Test abc
             */

            /**
             * Constructs a new Test.
             * @memberof test.v1
             * @classdesc Represents a Test.
             * @implements ITest
             * @constructor
             * @param {test.v1.ITest=} [properties] Properties to set
             */
            function Test(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Test name.
             * @member {string|null|undefined} name
             * @memberof test.v1.Test
             * @instance
             */
            Test.prototype.name = null;

            /**
             * Test id.
             * @member {number|null|undefined} id
             * @memberof test.v1.Test
             * @instance
             */
            Test.prototype.id = null;

            /**
             * Test email.
             * @member {string|null|undefined} email
             * @memberof test.v1.Test
             * @instance
             */
            Test.prototype.email = null;

            /**
             * Test abc.
             * @member {common.v1.IABC|null|undefined} abc
             * @memberof test.v1.Test
             * @instance
             */
            Test.prototype.abc = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Test _name.
             * @member {"name"|undefined} _name
             * @memberof test.v1.Test
             * @instance
             */
            Object.defineProperty(Test.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Test _id.
             * @member {"id"|undefined} _id
             * @memberof test.v1.Test
             * @instance
             */
            Object.defineProperty(Test.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Test _email.
             * @member {"email"|undefined} _email
             * @memberof test.v1.Test
             * @instance
             */
            Object.defineProperty(Test.prototype, "_email", {
                get: $util.oneOfGetter($oneOfFields = ["email"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Test instance using the specified properties.
             * @function create
             * @memberof test.v1.Test
             * @static
             * @param {test.v1.ITest=} [properties] Properties to set
             * @returns {test.v1.Test} Test instance
             */
            Test.create = function create(properties) {
                return new Test(properties);
            };

            /**
             * Encodes the specified Test message. Does not implicitly {@link test.v1.Test.verify|verify} messages.
             * @function encode
             * @memberof test.v1.Test
             * @static
             * @param {test.v1.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.abc != null && Object.hasOwnProperty.call(message, "abc"))
                    $root.common.v1.ABC.encode(message.abc, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Test message, length delimited. Does not implicitly {@link test.v1.Test.verify|verify} messages.
             * @function encodeDelimited
             * @memberof test.v1.Test
             * @static
             * @param {test.v1.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Test message from the specified reader or buffer.
             * @function decode
             * @memberof test.v1.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {test.v1.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.v1.Test();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.id = reader.int32();
                            break;
                        }
                    case 3: {
                            message.email = reader.string();
                            break;
                        }
                    case 4: {
                            message.abc = $root.common.v1.ABC.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Test message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof test.v1.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {test.v1.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Test message.
             * @function verify
             * @memberof test.v1.Test
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Test.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.name != null && message.hasOwnProperty("name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.id != null && message.hasOwnProperty("id")) {
                    properties._id = 1;
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                }
                if (message.email != null && message.hasOwnProperty("email")) {
                    properties._email = 1;
                    if (!$util.isString(message.email))
                        return "email: string expected";
                }
                if (message.abc != null && message.hasOwnProperty("abc")) {
                    var error = $root.common.v1.ABC.verify(message.abc);
                    if (error)
                        return "abc." + error;
                }
                return null;
            };

            /**
             * Creates a Test message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof test.v1.Test
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {test.v1.Test} Test
             */
            Test.fromObject = function fromObject(object) {
                if (object instanceof $root.test.v1.Test)
                    return object;
                var message = new $root.test.v1.Test();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.email != null)
                    message.email = String(object.email);
                if (object.abc != null) {
                    if (typeof object.abc !== "object")
                        throw TypeError(".test.v1.Test.abc: object expected");
                    message.abc = $root.common.v1.ABC.fromObject(object.abc);
                }
                return message;
            };

            /**
             * Creates a plain object from a Test message. Also converts values to other types if specified.
             * @function toObject
             * @memberof test.v1.Test
             * @static
             * @param {test.v1.Test} message Test
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Test.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.abc = null;
                if (message.name != null && message.hasOwnProperty("name")) {
                    object.name = message.name;
                    if (options.oneofs)
                        object._name = "name";
                }
                if (message.id != null && message.hasOwnProperty("id")) {
                    object.id = message.id;
                    if (options.oneofs)
                        object._id = "id";
                }
                if (message.email != null && message.hasOwnProperty("email")) {
                    object.email = message.email;
                    if (options.oneofs)
                        object._email = "email";
                }
                if (message.abc != null && message.hasOwnProperty("abc"))
                    object.abc = $root.common.v1.ABC.toObject(message.abc, options);
                return object;
            };

            /**
             * Converts this Test to JSON.
             * @function toJSON
             * @memberof test.v1.Test
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Test.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Test
             * @function getTypeUrl
             * @memberof test.v1.Test
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Test.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/test.v1.Test";
            };

            return Test;
        })();

        return v1;
    })();

    test.v2 = (function() {

        /**
         * Namespace v2.
         * @memberof test
         * @namespace
         */
        var v2 = {};

        v2.Test = (function() {

            /**
             * Properties of a Test.
             * @memberof test.v2
             * @interface ITest
             * @property {string|null} [name] Test name
             * @property {number|null} [id] Test id
             * @property {string|null} [email] Test email
             */

            /**
             * Constructs a new Test.
             * @memberof test.v2
             * @classdesc Represents a Test.
             * @implements ITest
             * @constructor
             * @param {test.v2.ITest=} [properties] Properties to set
             */
            function Test(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Test name.
             * @member {string|null|undefined} name
             * @memberof test.v2.Test
             * @instance
             */
            Test.prototype.name = null;

            /**
             * Test id.
             * @member {number|null|undefined} id
             * @memberof test.v2.Test
             * @instance
             */
            Test.prototype.id = null;

            /**
             * Test email.
             * @member {string|null|undefined} email
             * @memberof test.v2.Test
             * @instance
             */
            Test.prototype.email = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Test _name.
             * @member {"name"|undefined} _name
             * @memberof test.v2.Test
             * @instance
             */
            Object.defineProperty(Test.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Test _id.
             * @member {"id"|undefined} _id
             * @memberof test.v2.Test
             * @instance
             */
            Object.defineProperty(Test.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Test _email.
             * @member {"email"|undefined} _email
             * @memberof test.v2.Test
             * @instance
             */
            Object.defineProperty(Test.prototype, "_email", {
                get: $util.oneOfGetter($oneOfFields = ["email"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Test instance using the specified properties.
             * @function create
             * @memberof test.v2.Test
             * @static
             * @param {test.v2.ITest=} [properties] Properties to set
             * @returns {test.v2.Test} Test instance
             */
            Test.create = function create(properties) {
                return new Test(properties);
            };

            /**
             * Encodes the specified Test message. Does not implicitly {@link test.v2.Test.verify|verify} messages.
             * @function encode
             * @memberof test.v2.Test
             * @static
             * @param {test.v2.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                return writer;
            };

            /**
             * Encodes the specified Test message, length delimited. Does not implicitly {@link test.v2.Test.verify|verify} messages.
             * @function encodeDelimited
             * @memberof test.v2.Test
             * @static
             * @param {test.v2.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Test message from the specified reader or buffer.
             * @function decode
             * @memberof test.v2.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {test.v2.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.v2.Test();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.id = reader.int32();
                            break;
                        }
                    case 3: {
                            message.email = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Test message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof test.v2.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {test.v2.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Test message.
             * @function verify
             * @memberof test.v2.Test
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Test.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.name != null && message.hasOwnProperty("name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.id != null && message.hasOwnProperty("id")) {
                    properties._id = 1;
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                }
                if (message.email != null && message.hasOwnProperty("email")) {
                    properties._email = 1;
                    if (!$util.isString(message.email))
                        return "email: string expected";
                }
                return null;
            };

            /**
             * Creates a Test message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof test.v2.Test
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {test.v2.Test} Test
             */
            Test.fromObject = function fromObject(object) {
                if (object instanceof $root.test.v2.Test)
                    return object;
                var message = new $root.test.v2.Test();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.email != null)
                    message.email = String(object.email);
                return message;
            };

            /**
             * Creates a plain object from a Test message. Also converts values to other types if specified.
             * @function toObject
             * @memberof test.v2.Test
             * @static
             * @param {test.v2.Test} message Test
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Test.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.name != null && message.hasOwnProperty("name")) {
                    object.name = message.name;
                    if (options.oneofs)
                        object._name = "name";
                }
                if (message.id != null && message.hasOwnProperty("id")) {
                    object.id = message.id;
                    if (options.oneofs)
                        object._id = "id";
                }
                if (message.email != null && message.hasOwnProperty("email")) {
                    object.email = message.email;
                    if (options.oneofs)
                        object._email = "email";
                }
                return object;
            };

            /**
             * Converts this Test to JSON.
             * @function toJSON
             * @memberof test.v2.Test
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Test.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Test
             * @function getTypeUrl
             * @memberof test.v2.Test
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Test.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/test.v2.Test";
            };

            return Test;
        })();

        return v2;
    })();

    return test;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof common
         * @namespace
         */
        var v1 = {};

        v1.ABC = (function() {

            /**
             * Properties of a ABC.
             * @memberof common.v1
             * @interface IABC
             * @property {string|null} [name] ABC name
             * @property {number|null} [id] ABC id
             * @property {string|null} [email] ABC email
             */

            /**
             * Constructs a new ABC.
             * @memberof common.v1
             * @classdesc Represents a ABC.
             * @implements IABC
             * @constructor
             * @param {common.v1.IABC=} [properties] Properties to set
             */
            function ABC(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ABC name.
             * @member {string|null|undefined} name
             * @memberof common.v1.ABC
             * @instance
             */
            ABC.prototype.name = null;

            /**
             * ABC id.
             * @member {number|null|undefined} id
             * @memberof common.v1.ABC
             * @instance
             */
            ABC.prototype.id = null;

            /**
             * ABC email.
             * @member {string|null|undefined} email
             * @memberof common.v1.ABC
             * @instance
             */
            ABC.prototype.email = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ABC _name.
             * @member {"name"|undefined} _name
             * @memberof common.v1.ABC
             * @instance
             */
            Object.defineProperty(ABC.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ABC _id.
             * @member {"id"|undefined} _id
             * @memberof common.v1.ABC
             * @instance
             */
            Object.defineProperty(ABC.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ABC _email.
             * @member {"email"|undefined} _email
             * @memberof common.v1.ABC
             * @instance
             */
            Object.defineProperty(ABC.prototype, "_email", {
                get: $util.oneOfGetter($oneOfFields = ["email"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ABC instance using the specified properties.
             * @function create
             * @memberof common.v1.ABC
             * @static
             * @param {common.v1.IABC=} [properties] Properties to set
             * @returns {common.v1.ABC} ABC instance
             */
            ABC.create = function create(properties) {
                return new ABC(properties);
            };

            /**
             * Encodes the specified ABC message. Does not implicitly {@link common.v1.ABC.verify|verify} messages.
             * @function encode
             * @memberof common.v1.ABC
             * @static
             * @param {common.v1.IABC} message ABC message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ABC.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                return writer;
            };

            /**
             * Encodes the specified ABC message, length delimited. Does not implicitly {@link common.v1.ABC.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.v1.ABC
             * @static
             * @param {common.v1.IABC} message ABC message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ABC.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ABC message from the specified reader or buffer.
             * @function decode
             * @memberof common.v1.ABC
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.v1.ABC} ABC
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ABC.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.v1.ABC();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.id = reader.int32();
                            break;
                        }
                    case 3: {
                            message.email = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ABC message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.v1.ABC
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.v1.ABC} ABC
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ABC.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ABC message.
             * @function verify
             * @memberof common.v1.ABC
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ABC.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.name != null && message.hasOwnProperty("name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.id != null && message.hasOwnProperty("id")) {
                    properties._id = 1;
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                }
                if (message.email != null && message.hasOwnProperty("email")) {
                    properties._email = 1;
                    if (!$util.isString(message.email))
                        return "email: string expected";
                }
                return null;
            };

            /**
             * Creates a ABC message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.v1.ABC
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.v1.ABC} ABC
             */
            ABC.fromObject = function fromObject(object) {
                if (object instanceof $root.common.v1.ABC)
                    return object;
                var message = new $root.common.v1.ABC();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.email != null)
                    message.email = String(object.email);
                return message;
            };

            /**
             * Creates a plain object from a ABC message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.v1.ABC
             * @static
             * @param {common.v1.ABC} message ABC
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ABC.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.name != null && message.hasOwnProperty("name")) {
                    object.name = message.name;
                    if (options.oneofs)
                        object._name = "name";
                }
                if (message.id != null && message.hasOwnProperty("id")) {
                    object.id = message.id;
                    if (options.oneofs)
                        object._id = "id";
                }
                if (message.email != null && message.hasOwnProperty("email")) {
                    object.email = message.email;
                    if (options.oneofs)
                        object._email = "email";
                }
                return object;
            };

            /**
             * Converts this ABC to JSON.
             * @function toJSON
             * @memberof common.v1.ABC
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ABC.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ABC
             * @function getTypeUrl
             * @memberof common.v1.ABC
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ABC.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.v1.ABC";
            };

            return ABC;
        })();

        return v1;
    })();

    return common;
})();

module.exports = $root;
