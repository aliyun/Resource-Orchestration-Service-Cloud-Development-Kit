package com.aliyun.ros.cdk.core;

/**
 * Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.139Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnIf")
public class FnIf extends com.aliyun.ros.cdk.core.Intrinsic implements com.aliyun.ros.cdk.core.IRosConditionExpression {

    protected FnIf(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnIf(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Fn::If</code> condition function.
     * <p>
     * @param condition A reference to a condition in the Conditions section. This parameter is required.
     * @param valueIfTrue A value to be returned if the specified condition evaluates to true. This parameter is required.
     * @param valueIfFalse A value to be returned if the specified condition evaluates to false. This parameter is required.
     */
    public FnIf(final @org.jetbrains.annotations.NotNull java.lang.Object condition, final @org.jetbrains.annotations.NotNull java.lang.Object valueIfTrue, final @org.jetbrains.annotations.NotNull java.lang.Object valueIfFalse) {
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
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(condition, "condition is required"), valueIfTrue, valueIfFalse });
    }
}
