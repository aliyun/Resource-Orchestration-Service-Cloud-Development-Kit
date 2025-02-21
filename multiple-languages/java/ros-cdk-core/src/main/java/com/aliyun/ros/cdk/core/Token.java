package com.aliyun.ros.cdk.core;

/**
 * Represents a special or lazily-evaluated value.
 * <p>
 * Can be used to delay evaluation of a certain value in case, for example,
 * that it requires some context or late-bound data. Can also be used to
 * mark values that need special processing at document rendering time.
 * <p>
 * Tokens can be embedded into strings while retaining their original
 * semantics.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.951Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Token")
public class Token extends software.amazon.jsii.JsiiObject {

    protected Token(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Token(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Return a resolvable representation of the given value.
     * <p>
     * @param value This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable asAny(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Token.class, "asAny", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { value });
    }

    /**
     * Return a reversible list representation of this token.
     * <p>
     * @param value This parameter is required.
     * @param options
     */
    public static @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> asList(final @org.jetbrains.annotations.NotNull java.lang.Object value, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.EncodingOptions options) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Token.class, "asList", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)), new Object[] { value, options }));
    }

    /**
     * Return a reversible list representation of this token.
     * <p>
     * @param value This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> asList(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Token.class, "asList", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)), new Object[] { value }));
    }

    /**
     * Return a reversible number representation of this token.
     * <p>
     * @param value This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Number asNumber(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Token.class, "asNumber", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { value });
    }

    /**
     * Return a reversible string representation of this token.
     * <p>
     * If the Token is initialized with a literal, the stringified value of the
     * literal is returned. Otherwise, a special quoted string representation
     * of the Token is returned that can be embedded into other strings.
     * <p>
     * Strings with quoted Tokens in them can be restored back into
     * complex values with the Tokens restored by calling <code>resolve()</code>
     * on the string.
     * <p>
     * @param value This parameter is required.
     * @param options
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String asString(final @org.jetbrains.annotations.NotNull java.lang.Object value, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.EncodingOptions options) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Token.class, "asString", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { value, options });
    }

    /**
     * Return a reversible string representation of this token.
     * <p>
     * If the Token is initialized with a literal, the stringified value of the
     * literal is returned. Otherwise, a special quoted string representation
     * of the Token is returned that can be embedded into other strings.
     * <p>
     * Strings with quoted Tokens in them can be restored back into
     * complex values with the Tokens restored by calling <code>resolve()</code>
     * on the string.
     * <p>
     * @param value This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String asString(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Token.class, "asString", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { value });
    }

    /**
     * Compare two strings that might contain Tokens with each other.
     * <p>
     * @param possibleToken1 This parameter is required.
     * @param possibleToken2 This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TokenComparison compareStrings(final @org.jetbrains.annotations.NotNull java.lang.String possibleToken1, final @org.jetbrains.annotations.NotNull java.lang.String possibleToken2) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Token.class, "compareStrings", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TokenComparison.class), new Object[] { java.util.Objects.requireNonNull(possibleToken1, "possibleToken1 is required"), java.util.Objects.requireNonNull(possibleToken2, "possibleToken2 is required") });
    }

    /**
     * Returns true if obj represents an unresolved value.
     * <p>
     * One of these must be true:
     * <p>
     * <ul>
     * <li><code>obj</code> is an IResolvable</li>
     * <li><code>obj</code> is a string containing at least one encoded <code>IResolvable</code></li>
     * <li><code>obj</code> is either an encoded number or list</li>
     * </ul>
     * <p>
     * This does NOT recurse into lists or objects to see if they
     * containing resolvables.
     * <p>
     * @param obj The object to test. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isUnresolved(final @org.jetbrains.annotations.NotNull java.lang.Object obj) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Token.class, "isUnresolved", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { obj });
    }
}
