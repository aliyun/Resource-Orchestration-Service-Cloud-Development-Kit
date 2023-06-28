package com.aliyun.ros.cdk.core;

/**
 * Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.
 * <p>
 * <code>Fn::Not</code> acts as a NOT operator.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:26.407Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnNot")
public class FnNot extends com.aliyun.ros.cdk.core.Intrinsic implements com.aliyun.ros.cdk.core.IRosConditionExpression {

    protected FnNot(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnNot(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::Not</code> condition function.
     * <p>
     * @param condition A condition such as <code>Fn::Equals</code> that evaluates to true or false. This parameter is required.
     */
    public FnNot(final @org.jetbrains.annotations.NotNull java.lang.Object condition) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(condition instanceof java.lang.String)
                && !(condition instanceof com.aliyun.ros.cdk.core.IRosConditionExpression)
                && !(condition.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("condition")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IRosConditionExpression; received ")
                        .append(condition.getClass()).toString());
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(condition, "condition is required") });
    }
}
