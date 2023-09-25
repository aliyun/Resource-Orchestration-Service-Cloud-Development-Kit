package com.aliyun.ros.cdk.core;

/**
 * Compares if two values are equal.
 * <p>
 * Returns true if the two values are equal or false
 * if they aren't.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.138Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnEquals")
public class FnEquals extends com.aliyun.ros.cdk.core.Intrinsic implements com.aliyun.ros.cdk.core.IRosConditionExpression {

    protected FnEquals(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnEquals(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::Equals</code> condition function.
     * <p>
     * @param lhs A value of any type that you want to compare. This parameter is required.
     * @param rhs A value of any type that you want to compare. This parameter is required.
     */
    public FnEquals(final @org.jetbrains.annotations.NotNull java.lang.Object lhs, final @org.jetbrains.annotations.NotNull java.lang.Object rhs) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { lhs, rhs });
    }
}
