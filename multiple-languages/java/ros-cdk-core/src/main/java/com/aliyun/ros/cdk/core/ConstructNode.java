package com.aliyun.ros.cdk.core;

/**
 * Represents the construct node in the scope tree.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:27:59.381Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ConstructNode")
public class ConstructNode extends software.amazon.jsii.JsiiObject {

    protected ConstructNode(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ConstructNode(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        PATH_SEP = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.ConstructNode.class, "PATH_SEP", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public ConstructNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct host, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(host, "host is required"), java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * (deprecated) Invokes "prepare" on all constructs (depth-first, post-order) in the tree under <code>node</code>.
     * <p>
     * @deprecated Use <code>app.synth()</code> instead
     * @param node The root node. This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public static void prepare(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode node) {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.ConstructNode.class, "prepare", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(node, "node is required") });
    }

    /**
     * (deprecated) Synthesizes a CloudAssembly from a construct tree.
     * <p>
     * @deprecated Use <code>app.synth()</code> or <code>stage.synth()</code> instead
     * @param node The root of the construct tree. This parameter is required.
     * @param options Synthesis options.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly synth(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode node, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.SynthesisOptions options) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.ConstructNode.class, "synth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class), new Object[] { java.util.Objects.requireNonNull(node, "node is required"), options });
    }

    /**
     * (deprecated) Synthesizes a CloudAssembly from a construct tree.
     * <p>
     * @deprecated Use <code>app.synth()</code> or <code>stage.synth()</code> instead
     * @param node The root of the construct tree. This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly synth(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode node) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.ConstructNode.class, "synth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class), new Object[] { java.util.Objects.requireNonNull(node, "node is required") });
    }

    /**
     * Invokes "validate" on all constructs in the tree (depth-first, pre-order) and returns the list of all errors.
     * <p>
     * An empty list indicates that there are no errors.
     * <p>
     * @param node The root node. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.ValidationError> validate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode node) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.ConstructNode.class, "validate", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ValidationError.class)), new Object[] { java.util.Objects.requireNonNull(node, "node is required") }));
    }

    /**
     * Add an ordering dependency on another Construct.
     * <p>
     * All constructs in the dependency's scope will be deployed before any
     * construct in this construct's scope.
     * <p>
     * @param dependencies This parameter is required.
     */
    public void addDependency(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IDependable... dependencies) {
        software.amazon.jsii.Kernel.call(this, "addDependency", software.amazon.jsii.NativeType.VOID, java.util.Arrays.<Object>stream(dependencies).toArray(Object[]::new));
    }

    /**
     * Adds an { "error": <message> } metadata entry to this construct.
     * <p>
     * The toolkit will fail synthesis when errors are reported.
     * <p>
     * @param message The error message. This parameter is required.
     */
    public void addError(final @org.jetbrains.annotations.NotNull java.lang.String message) {
        software.amazon.jsii.Kernel.call(this, "addError", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(message, "message is required") });
    }

    /**
     * Adds a { "info": <message> } metadata entry to this construct.
     * <p>
     * The toolkit will display the info message when apps are synthesized.
     * <p>
     * @param message The info message. This parameter is required.
     */
    public void addInfo(final @org.jetbrains.annotations.NotNull java.lang.String message) {
        software.amazon.jsii.Kernel.call(this, "addInfo", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(message, "message is required") });
    }

    /**
     * Adds a metadata entry to this construct.
     * <p>
     * Entries are arbitrary values and will also include a stack trace to allow tracing back to
     * the code location for when the entry was added. It can be used, for example, to include source
     * mapping in templates to improve diagnostics.
     * <p>
     * @param type a string denoting the type of metadata. This parameter is required.
     * @param data the value of the metadata (can be a Token). This parameter is required.
     * @param fromFunction a function under which to restrict the metadata entry's stack trace (defaults to this.addMetadata).
     */
    public void addMetadata(final @org.jetbrains.annotations.NotNull java.lang.String type, final @org.jetbrains.annotations.NotNull java.lang.Object data, final @org.jetbrains.annotations.Nullable java.lang.Object fromFunction) {
        software.amazon.jsii.Kernel.call(this, "addMetadata", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(type, "type is required"), data, fromFunction });
    }

    /**
     * Adds a metadata entry to this construct.
     * <p>
     * Entries are arbitrary values and will also include a stack trace to allow tracing back to
     * the code location for when the entry was added. It can be used, for example, to include source
     * mapping in templates to improve diagnostics.
     * <p>
     * @param type a string denoting the type of metadata. This parameter is required.
     * @param data the value of the metadata (can be a Token). This parameter is required.
     */
    public void addMetadata(final @org.jetbrains.annotations.NotNull java.lang.String type, final @org.jetbrains.annotations.NotNull java.lang.Object data) {
        software.amazon.jsii.Kernel.call(this, "addMetadata", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(type, "type is required"), data });
    }

    /**
     * Adds a { "warning": <message> } metadata entry to this construct.
     * <p>
     * The toolkit will display the warning when an app is synthesized, or fail
     * if run in --strict mode.
     * <p>
     * @param message The warning message. This parameter is required.
     */
    public void addWarning(final @org.jetbrains.annotations.NotNull java.lang.String message) {
        software.amazon.jsii.Kernel.call(this, "addWarning", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(message, "message is required") });
    }

    /**
     * Return this construct and all of its children in the given order.
     * <p>
     * @param order
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.IConstruct> findAll(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.ConstructOrder order) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "findAll", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class)), new Object[] { order }));
    }

    /**
     * Return this construct and all of its children in the given order.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.IConstruct> findAll() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "findAll", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class))));
    }

    /**
     * Return a direct child by id.
     * <p>
     * Throws an error if the child is not found.
     * <p>
     * @return Child with the given id.
     * @param id Identifier of direct child. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct findChild(final @org.jetbrains.annotations.NotNull java.lang.String id) {
        return software.amazon.jsii.Kernel.call(this, "findChild", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class), new Object[] { java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * This can be used to set contextual values.
     * <p>
     * Context must be set before any children are added, since children may consult context info during construction.
     * If the key already exists, it will be overridden.
     * <p>
     * @param key The context key. This parameter is required.
     * @param value The context value. This parameter is required.
     */
    public void setContext(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "setContext", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key, "key is required"), value });
    }

    /**
     * Return a direct child by id, or undefined.
     * <p>
     * @return the child if found, or undefined
     * @param id Identifier of direct child. This parameter is required.
     */
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IConstruct tryFindChild(final @org.jetbrains.annotations.NotNull java.lang.String id) {
        return software.amazon.jsii.Kernel.call(this, "tryFindChild", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class), new Object[] { java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Retrieves a value from tree context.
     * <p>
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     * <p>
     * @return The context value or <code>undefined</code> if there is no context value for thie key.
     * @param key The context key. This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object tryGetContext(final @org.jetbrains.annotations.NotNull java.lang.String key) {
        return software.amazon.jsii.Kernel.call(this, "tryGetContext", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(key, "key is required") });
    }

    /**
     * (experimental) Remove the child with the given name, if present.
     * <p>
     * @return Whether a child with the given name was deleted.
     * @param childName This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public @org.jetbrains.annotations.NotNull java.lang.Boolean tryRemoveChild(final @org.jetbrains.annotations.NotNull java.lang.String childName) {
        return software.amazon.jsii.Kernel.call(this, "tryRemoveChild", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { java.util.Objects.requireNonNull(childName, "childName is required") });
    }

    /**
     * Separator used to delimit construct path components.
     */
    public final static java.lang.String PATH_SEP;

    /**
     * All direct children of this construct.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.IConstruct> getChildren() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "children", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class))));
    }

    /**
     * Return all dependencies registered on this node or any of its children.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.Dependency> getDependencies() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "dependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Dependency.class))));
    }

    /**
     * The id of this construct within the current scope.
     * <p>
     * This is a a scope-unique id. To obtain an app-unique id for this construct, use <code>uniqueId</code>.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Returns true if this construct or the scopes in which it is defined are locked.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getLocked() {
        return software.amazon.jsii.Kernel.get(this, "locked", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * An immutable array of metadata objects associated with this construct.
     * <p>
     * This can be used, for example, to implement support for deprecation notices, source mapping, etc.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.cxapi.MetadataEntry> getMetadata() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "metadata", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.MetadataEntry.class))));
    }

    /**
     * The full, absolute path of this construct in the tree.
     * <p>
     * Components are separated by '/'.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getPath() {
        return software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @return The root of the construct tree.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct getRoot() {
        return software.amazon.jsii.Kernel.get(this, "root", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
    }

    /**
     * All parent scopes of this construct.
     * <p>
     * @return a list of parent scopes. The last element in the list will always
     * be the current construct and the first element will be the root of the
     * tree.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.IConstruct> getScopes() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "scopes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class))));
    }

    /**
     * A tree-global unique alphanumeric identifier for this construct.
     * <p>
     * Includes all components of the tree.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "uniqueId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Returns the scope in which this construct is defined.
     * <p>
     * The value is <code>undefined</code> at the root of the construct scope tree.
     */
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IConstruct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
    }

    /**
     * Returns the child construct that has the id <code>Default</code> or <code>Resource"</code>.
     * <p>
     * This is usually the construct that provides the bulk of the underlying functionality.
     * Useful for modifications of the underlying construct that are not available at the higher levels.
     * Override the defaultChild property.
     * <p>
     * This should only be used in the cases where the correct
     * default child is not named 'Resource' or 'Default' as it
     * should be.
     * <p>
     * If you set this to undefined, the default behavior of finding
     * the child named 'Resource' or 'Default' will be used.
     * <p>
     * @return a construct or undefined if there is no default child
     */
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IConstruct getDefaultChild() {
        return software.amazon.jsii.Kernel.get(this, "defaultChild", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
    }

    /**
     * Returns the child construct that has the id <code>Default</code> or <code>Resource"</code>.
     * <p>
     * This is usually the construct that provides the bulk of the underlying functionality.
     * Useful for modifications of the underlying construct that are not available at the higher levels.
     * Override the defaultChild property.
     * <p>
     * This should only be used in the cases where the correct
     * default child is not named 'Resource' or 'Default' as it
     * should be.
     * <p>
     * If you set this to undefined, the default behavior of finding
     * the child named 'Resource' or 'Default' will be used.
     * <p>
     * @return a construct or undefined if there is no default child
     */
    public void setDefaultChild(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IConstruct value) {
        software.amazon.jsii.Kernel.set(this, "defaultChild", value);
    }
}
