package com.aliyun.ros.cdk.core;

/**
 * Fragments of a concatenated string containing stringified Tokens.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:40.832Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.TokenizedStringFragments")
public class TokenizedStringFragments extends software.amazon.jsii.JsiiObject {

    protected TokenizedStringFragments(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TokenizedStringFragments(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public TokenizedStringFragments() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    public void addIntrinsic(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "addIntrinsic", software.amazon.jsii.NativeType.VOID, new Object[] { value });
    }

    public void addLiteral(final @org.jetbrains.annotations.NotNull java.lang.Object lit) {
        software.amazon.jsii.Kernel.call(this, "addLiteral", software.amazon.jsii.NativeType.VOID, new Object[] { lit });
    }

    public void addToken(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable token) {
        software.amazon.jsii.Kernel.call(this, "addToken", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(token, "token is required") });
    }

    /**
     * Combine the string fragments using the given joiner.
     * <p>
     * If there are any
     * <p>
     * @param concat This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object join(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IFragmentConcatenator concat) {
        return software.amazon.jsii.Kernel.call(this, "join", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(concat, "concat is required") });
    }

    /**
     * Apply a transformation function to all tokens in the string.
     * <p>
     * @param mapper This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TokenizedStringFragments mapTokens(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ITokenMapper mapper) {
        return software.amazon.jsii.Kernel.call(this, "mapTokens", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TokenizedStringFragments.class), new Object[] { java.util.Objects.requireNonNull(mapper, "mapper is required") });
    }

    public @org.jetbrains.annotations.NotNull java.lang.Object getFirstValue() {
        return software.amazon.jsii.Kernel.get(this, "firstValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Number getLength() {
        return software.amazon.jsii.Kernel.get(this, "length", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     * Return all Tokens from this string.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.core.IResolvable> getTokens() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.get(this, "tokens", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class))));
    }

    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable getFirstToken() {
        return software.amazon.jsii.Kernel.get(this, "firstToken", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }
}
