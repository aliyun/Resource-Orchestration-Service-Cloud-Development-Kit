package com.aliyun.ros.cdk.core;

/**
 * An enum-like class that represents the result of comparing two Tokens.
 * <p>
 * The return type of <code>Token.compareStrings</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.030Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.TokenComparison")
public class TokenComparison extends software.amazon.jsii.JsiiObject {

    protected TokenComparison(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TokenComparison(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        BOTH_UNRESOLVED = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.TokenComparison.class, "BOTH_UNRESOLVED", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TokenComparison.class));
        DIFFERENT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.TokenComparison.class, "DIFFERENT", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TokenComparison.class));
        ONE_UNRESOLVED = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.TokenComparison.class, "ONE_UNRESOLVED", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TokenComparison.class));
        SAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.TokenComparison.class, "SAME", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TokenComparison.class));
    }

    /**
     * This means both components are Tokens.
     */
    public final static com.aliyun.ros.cdk.core.TokenComparison BOTH_UNRESOLVED;

    /**
     * This means we're certain the two components are NOT Tokens, and different.
     */
    public final static com.aliyun.ros.cdk.core.TokenComparison DIFFERENT;

    /**
     * This means exactly one of the components is a Token.
     */
    public final static com.aliyun.ros.cdk.core.TokenComparison ONE_UNRESOLVED;

    /**
     * This means we're certain the two components are NOT Tokens, and identical.
     */
    public final static com.aliyun.ros.cdk.core.TokenComparison SAME;
}
