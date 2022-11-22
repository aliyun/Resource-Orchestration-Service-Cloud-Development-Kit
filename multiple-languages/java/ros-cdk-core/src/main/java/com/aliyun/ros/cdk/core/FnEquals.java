package com.aliyun.ros.cdk.core;

/**
 * Compares if two values are equal.
 * <p>
 * Returns true if the two values are equal or false
 * if they aren't.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:27.263Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnEquals")
public class FnEquals extends com.aliyun.ros.cdk.core.Intrinsic implements com.aliyun.ros.cdk.core.IRosConditionExpression {

    protected FnEquals(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnEquals(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Fn::Equals`` condition function.
     * <p>
     * @param lhs A value of any type that you want to compare. This parameter is required.
     * @param rhs A value of any type that you want to compare. This parameter is required.
     */
    public FnEquals(final @org.jetbrains.annotations.NotNull java.lang.Object lhs, final @org.jetbrains.annotations.NotNull java.lang.Object rhs) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { lhs, rhs });
    }
}
