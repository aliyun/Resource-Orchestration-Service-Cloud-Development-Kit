package com.aliyun.ros.cdk.core;

/**
 * Less oft-needed functions to manipulate Tokens.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.126Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Tokenization")
public class Tokenization extends software.amazon.jsii.JsiiObject {

    protected Tokenization(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Tokenization(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Return whether the given object is an IResolvable object  This is different from Token.isUnresolved() which will also check for encoded Tokens, whereas this method will only do a type check on the given object.
     * <p>
     * @param obj This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isResolvable(final @org.jetbrains.annotations.NotNull java.lang.Object obj) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Tokenization.class, "isResolvable", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { obj });
    }

    /**
     * Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.
     * <p>
     * Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.
     * <p>
     * @param obj The object to resolve. This parameter is required.
     * @param options Prefix key path components for diagnostics. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull java.lang.Object obj, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResolveOptions options) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Tokenization.class, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { obj, java.util.Objects.requireNonNull(options, "options is required") });
    }

    /**
     * Un-encode a Tokenized value from a list.
     * <p>
     * @param l This parameter is required.
     */
    public static @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable reverseList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> l) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Tokenization.class, "reverseList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(l, "l is required") });
    }

    /**
     * Un-encode a Tokenized value from a number.
     * <p>
     * @param n This parameter is required.
     */
    public static @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable reverseNumber(final @org.jetbrains.annotations.NotNull java.lang.Number n) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Tokenization.class, "reverseNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(n, "n is required") });
    }

    /**
     * Un-encode a string potentially containing encoded tokens.
     * <p>
     * @param s This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TokenizedStringFragments reverseString(final @org.jetbrains.annotations.NotNull java.lang.String s) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Tokenization.class, "reverseString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TokenizedStringFragments.class), new Object[] { java.util.Objects.requireNonNull(s, "s is required") });
    }

    /**
     * Stringify a number directly or lazily if it's a Token.
     * <p>
     * If it is an object (i.e., { Ref: 'SomeLogicalId' }), return it as-is.
     * <p>
     * @param x This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String stringifyNumber(final @org.jetbrains.annotations.NotNull java.lang.Number x) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Tokenization.class, "stringifyNumber", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(x, "x is required") });
    }
}
