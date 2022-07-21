package com.aliyun.ros.cdk.core;

/**
 * Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.
 * <p>
 * <code>Fn::Not</code> acts as a NOT operator.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:23.417Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnNot")
public class FnNot extends com.aliyun.ros.cdk.core.Intrinsic implements com.aliyun.ros.cdk.core.IRosConditionExpression {

    protected FnNot(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnNot(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Fn::Not`` condition function.
     * <p>
     * @param condition A condition such as ``Fn::Equals`` that evaluates to true or false. This parameter is required.
     */
    public FnNot(final @org.jetbrains.annotations.NotNull java.lang.Object condition) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(condition, "condition is required") });
    }
}
