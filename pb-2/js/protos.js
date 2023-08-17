/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.abc = (function() {

    /**
     * Namespace abc.
     * @exports abc
     * @namespace
     */
    var abc = {};

    abc.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof abc
         * @namespace
         */
        var v1 = {};

        v1.Abc = (function() {

            /**
             * Properties of an Abc.
             * @memberof abc.v1
             * @interface IAbc
             * @property {string|null} [name] Abc name
             * @property {number|null} [id] Abc id
             * @property {string|null} [email] Abc email
             */

            /**
             * Constructs a new Abc.
             * @memberof abc.v1
             * @classdesc Represents an Abc.
             * @implements IAbc
             * @constructor
             * @param {abc.v1.IAbc=} [properties] Properties to set
             */
            function Abc(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Abc name.
             * @member {string|null|undefined} name
             * @memberof abc.v1.Abc
             * @instance
             */
            Abc.prototype.name = null;

            /**
             * Abc id.
             * @member {number|null|undefined} id
             * @memberof abc.v1.Abc
             * @instance
             */
            Abc.prototype.id = null;

            /**
             * Abc email.
             * @member {string|null|undefined} email
             * @memberof abc.v1.Abc
             * @instance
             */
            Abc.prototype.email = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Abc _name.
             * @member {"name"|undefined} _name
             * @memberof abc.v1.Abc
             * @instance
             */
            Object.defineProperty(Abc.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Abc _id.
             * @member {"id"|undefined} _id
             * @memberof abc.v1.Abc
             * @instance
             */
            Object.defineProperty(Abc.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Abc _email.
             * @member {"email"|undefined} _email
             * @memberof abc.v1.Abc
             * @instance
             */
            Object.defineProperty(Abc.prototype, "_email", {
                get: $util.oneOfGetter($oneOfFields = ["email"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Abc instance using the specified properties.
             * @function create
             * @memberof abc.v1.Abc
             * @static
             * @param {abc.v1.IAbc=} [properties] Properties to set
             * @returns {abc.v1.Abc} Abc instance
             */
            Abc.create = function create(properties) {
                return new Abc(properties);
            };

            /**
             * Encodes the specified Abc message. Does not implicitly {@link abc.v1.Abc.verify|verify} messages.
             * @function encode
             * @memberof abc.v1.Abc
             * @static
             * @param {abc.v1.IAbc} message Abc message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Abc.encode = function encode(message, writer) {
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
             * Encodes the specified Abc message, length delimited. Does not implicitly {@link abc.v1.Abc.verify|verify} messages.
             * @function encodeDelimited
             * @memberof abc.v1.Abc
             * @static
             * @param {abc.v1.IAbc} message Abc message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Abc.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Abc message from the specified reader or buffer.
             * @function decode
             * @memberof abc.v1.Abc
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {abc.v1.Abc} Abc
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Abc.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.abc.v1.Abc();
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
             * Decodes an Abc message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof abc.v1.Abc
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {abc.v1.Abc} Abc
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Abc.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Abc message.
             * @function verify
             * @memberof abc.v1.Abc
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Abc.verify = function verify(message) {
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
             * Creates an Abc message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof abc.v1.Abc
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {abc.v1.Abc} Abc
             */
            Abc.fromObject = function fromObject(object) {
                if (object instanceof $root.abc.v1.Abc)
                    return object;
                var message = new $root.abc.v1.Abc();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.email != null)
                    message.email = String(object.email);
                return message;
            };

            /**
             * Creates a plain object from an Abc message. Also converts values to other types if specified.
             * @function toObject
             * @memberof abc.v1.Abc
             * @static
             * @param {abc.v1.Abc} message Abc
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Abc.toObject = function toObject(message, options) {
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
             * Converts this Abc to JSON.
             * @function toJSON
             * @memberof abc.v1.Abc
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Abc.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Abc
             * @function getTypeUrl
             * @memberof abc.v1.Abc
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Abc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/abc.v1.Abc";
            };

            return Abc;
        })();

        return v1;
    })();

    return abc;
})();

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

$root.xyz = (function() {

    /**
     * Namespace xyz.
     * @exports xyz
     * @namespace
     */
    var xyz = {};

    xyz.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof xyz
         * @namespace
         */
        var v1 = {};

        v1.Xyz = (function() {

            /**
             * Properties of a Xyz.
             * @memberof xyz.v1
             * @interface IXyz
             * @property {string|null} [name] Xyz name
             * @property {number|null} [id] Xyz id
             * @property {string|null} [email] Xyz email
             */

            /**
             * Constructs a new Xyz.
             * @memberof xyz.v1
             * @classdesc Represents a Xyz.
             * @implements IXyz
             * @constructor
             * @param {xyz.v1.IXyz=} [properties] Properties to set
             */
            function Xyz(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Xyz name.
             * @member {string|null|undefined} name
             * @memberof xyz.v1.Xyz
             * @instance
             */
            Xyz.prototype.name = null;

            /**
             * Xyz id.
             * @member {number|null|undefined} id
             * @memberof xyz.v1.Xyz
             * @instance
             */
            Xyz.prototype.id = null;

            /**
             * Xyz email.
             * @member {string|null|undefined} email
             * @memberof xyz.v1.Xyz
             * @instance
             */
            Xyz.prototype.email = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Xyz _name.
             * @member {"name"|undefined} _name
             * @memberof xyz.v1.Xyz
             * @instance
             */
            Object.defineProperty(Xyz.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Xyz _id.
             * @member {"id"|undefined} _id
             * @memberof xyz.v1.Xyz
             * @instance
             */
            Object.defineProperty(Xyz.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Xyz _email.
             * @member {"email"|undefined} _email
             * @memberof xyz.v1.Xyz
             * @instance
             */
            Object.defineProperty(Xyz.prototype, "_email", {
                get: $util.oneOfGetter($oneOfFields = ["email"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Xyz instance using the specified properties.
             * @function create
             * @memberof xyz.v1.Xyz
             * @static
             * @param {xyz.v1.IXyz=} [properties] Properties to set
             * @returns {xyz.v1.Xyz} Xyz instance
             */
            Xyz.create = function create(properties) {
                return new Xyz(properties);
            };

            /**
             * Encodes the specified Xyz message. Does not implicitly {@link xyz.v1.Xyz.verify|verify} messages.
             * @function encode
             * @memberof xyz.v1.Xyz
             * @static
             * @param {xyz.v1.IXyz} message Xyz message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Xyz.encode = function encode(message, writer) {
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
             * Encodes the specified Xyz message, length delimited. Does not implicitly {@link xyz.v1.Xyz.verify|verify} messages.
             * @function encodeDelimited
             * @memberof xyz.v1.Xyz
             * @static
             * @param {xyz.v1.IXyz} message Xyz message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Xyz.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Xyz message from the specified reader or buffer.
             * @function decode
             * @memberof xyz.v1.Xyz
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {xyz.v1.Xyz} Xyz
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Xyz.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.xyz.v1.Xyz();
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
             * Decodes a Xyz message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof xyz.v1.Xyz
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {xyz.v1.Xyz} Xyz
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Xyz.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Xyz message.
             * @function verify
             * @memberof xyz.v1.Xyz
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Xyz.verify = function verify(message) {
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
             * Creates a Xyz message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof xyz.v1.Xyz
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {xyz.v1.Xyz} Xyz
             */
            Xyz.fromObject = function fromObject(object) {
                if (object instanceof $root.xyz.v1.Xyz)
                    return object;
                var message = new $root.xyz.v1.Xyz();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.email != null)
                    message.email = String(object.email);
                return message;
            };

            /**
             * Creates a plain object from a Xyz message. Also converts values to other types if specified.
             * @function toObject
             * @memberof xyz.v1.Xyz
             * @static
             * @param {xyz.v1.Xyz} message Xyz
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Xyz.toObject = function toObject(message, options) {
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
             * Converts this Xyz to JSON.
             * @function toJSON
             * @memberof xyz.v1.Xyz
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Xyz.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Xyz
             * @function getTypeUrl
             * @memberof xyz.v1.Xyz
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Xyz.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/xyz.v1.Xyz";
            };

            return Xyz;
        })();

        return v1;
    })();

    return xyz;
})();

module.exports = $root;
