package com.aliyun.ros.cdk.core;

/**
 * Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.
 * <p>
 * <code>Fn::Not</code> acts as a NOT operator.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.240Z")
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
