export = Key;
/**
 * A Key represents the unique identifier of an object.
 * Our Key scheme is inspired by file systems and Google App Engine key model.
 * Keys are meant to be unique across a system. Keys are hierarchical,
 * incorporating more and more specific namespaces. Thus keys can be deemed
 * 'children' or 'ancestors' of other keys:
 * - `new Key('/Comedy')`
 * - `new Key('/Comedy/MontyPython')`
 * Also, every namespace can be parametrized to embed relevant object
 * information. For example, the Key `name` (most specific namespace) could
 * include the object type:
 * - `new Key('/Comedy/MontyPython/Actor:JohnCleese')`
 * - `new Key('/Comedy/MontyPython/Sketch:CheeseShop')`
 * - `new Key('/Comedy/MontyPython/Sketch:CheeseShop/Character:Mousebender')`
 *
 */
declare class Key {
    /**
     * Constructs a key out of a namespace array.
     *
     * @param {Array<string>} list - The array of namespaces
     * @returns {Key}
     *
     * @example
     * ```js
     * Key.withNamespaces(['one', 'two'])
     * // => Key('/one/two')
     * ```
     */
    static withNamespaces(list: Array<string>): Key;
    /**
     * Returns a randomly (uuid) generated key.
     *
     * @returns {Key}
     *
     * @example
     * ```js
     * Key.random()
     * // => Key('/f98719ea086343f7b71f32ea9d9d521d')
     * ```
     */
    static random(): Key;
    /**
     * @param {*} other
     */
    static asKey(other: any): Key | null;
    /**
     * @param {string | Uint8Array} s
     * @param {boolean} [clean]
     */
    constructor(s: string | Uint8Array, clean?: boolean | undefined);
    _buf: Uint8Array;
    /**
     * Convert to the string representation
     *
     * @param {import('uint8arrays/to-string').SupportedEncodings} [encoding='utf8'] - The encoding to use.
     * @returns {string}
     */
    toString(encoding?: import("uint8arrays/util/bases").SupportedEncodings | undefined): string;
    /**
     * Return the Uint8Array representation of the key
     *
     * @returns {Uint8Array}
     */
    uint8Array(): Uint8Array;
    /**
     * Cleanup the current key
     *
     * @returns {void}
     */
    clean(): void;
    /**
     * Check if the given key is sorted lower than ourself.
     *
     * @param {Key} key - The other Key to check against
     * @returns {boolean}
     */
    less(key: Key): boolean;
    /**
     * Returns the key with all parts in reversed order.
     *
     * @returns {Key}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython/Actor:JohnCleese').reverse()
     * // => Key('/Actor:JohnCleese/MontyPython/Comedy')
     * ```
     */
    reverse(): Key;
    /**
     * Returns the `namespaces` making up this Key.
     *
     * @returns {Array<string>}
     */
    namespaces(): Array<string>;
    /** Returns the "base" namespace of this key.
     *
     * @returns {string}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython/Actor:JohnCleese').baseNamespace()
     * // => 'Actor:JohnCleese'
     * ```
     */
    baseNamespace(): string;
    /**
     * Returns the `list` representation of this key.
     *
     * @returns {Array<string>}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython/Actor:JohnCleese').list()
     * // => ['Comedy', 'MontyPythong', 'Actor:JohnCleese']
     * ```
     */
    list(): Array<string>;
    /**
     * Returns the "type" of this key (value of last namespace).
     *
     * @returns {string}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython/Actor:JohnCleese').type()
     * // => 'Actor'
     * ```
     */
    type(): string;
    /**
     * Returns the "name" of this key (field of last namespace).
     *
     * @returns {string}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython/Actor:JohnCleese').name()
     * // => 'JohnCleese'
     * ```
     */
    name(): string;
    /**
     * Returns an "instance" of this type key (appends value to namespace).
     *
     * @param {string} s - The string to append.
     * @returns {Key}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython/Actor').instance('JohnClesse')
     * // => Key('/Comedy/MontyPython/Actor:JohnCleese')
     * ```
     */
    instance(s: string): Key;
    /**
     * Returns the "path" of this key (parent + type).
     *
     * @returns {Key}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython/Actor:JohnCleese').path()
     * // => Key('/Comedy/MontyPython/Actor')
     * ```
     */
    path(): Key;
    /**
     * Returns the `parent` Key of this Key.
     *
     * @returns {Key}
     *
     * @example
     * ```js
     * new Key("/Comedy/MontyPython/Actor:JohnCleese").parent()
     * // => Key("/Comedy/MontyPython")
     * ```
     */
    parent(): Key;
    /**
     * Returns the `child` Key of this Key.
     *
     * @param {Key} key - The child Key to add
     * @returns {Key}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython').child(new Key('Actor:JohnCleese'))
     * // => Key('/Comedy/MontyPython/Actor:JohnCleese')
     * ```
     */
    child(key: Key): Key;
    /**
     * Returns whether this key is a prefix of `other`
     *
     * @param {Key} other - The other key to test against
     * @returns {boolean}
     *
     * @example
     * ```js
     * new Key('/Comedy').isAncestorOf('/Comedy/MontyPython')
     * // => true
     * ```
     */
    isAncestorOf(other: Key): boolean;
    /**
     * Returns whether this key is a contains another as prefix.
     *
     * @param {Key} other - The other Key to test against
     * @returns {boolean}
     *
     * @example
     * ```js
     * new Key('/Comedy/MontyPython').isDecendantOf('/Comedy')
     * // => true
     * ```
     */
    isDecendantOf(other: Key): boolean;
    /**
     * Checks if this key has only one namespace.
     *
     * @returns {boolean}
     *
     */
    isTopLevel(): boolean;
    /**
     * Concats one or more Keys into one new Key.
     *
     * @param {Array<Key>} keys - The array of keys to concatenate
     * @returns {Key}
     */
    concat(...keys: Array<Key>): Key;
    /**
     * Return string representation of the key
     *
     * @returns {string}
     */
    get [Symbol.toStringTag](): string;
}
//# sourceMappingURL=key.d.ts.map