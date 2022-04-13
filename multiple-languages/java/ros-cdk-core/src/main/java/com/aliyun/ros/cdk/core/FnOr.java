package com.aliyun.ros.cdk.core;

/**
 * Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.
 * <p>
 * <code>Fn::Or</code> acts as an OR operator. The minimum number
 * of conditions that you can include is 2, and the maximum is 10.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:13.502Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnOr")
public class FnOr extends com.aliyun.ros.cdk.core.Intrinsic implements com.aliyun.ros.cdk.core.IRosConditionExpression {

    protected FnOr(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnOr(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Fn::Or`` condition function.
     * <p>
     * @param condition A condition that evaluates to true or false. This parameter is required.
     */
    public FnOr(final @org.jetbrains.annotations.NotNull java.lang.Object... condition) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, java.util.Arrays.<Object>stream(condition).toArray(Object[]::new));
    }
}
