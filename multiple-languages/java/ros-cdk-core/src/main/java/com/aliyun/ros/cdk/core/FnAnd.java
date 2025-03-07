package com.aliyun.ros.cdk.core;

/**
 * Returns true if all the specified conditions evaluate to true, or returns false if any one   of the conditions evaluates to false.
 * <p>
 * <code>Fn::And</code> acts as an AND operator. The minimum number of
 * conditions that you can include is 2, and the maximum is 10.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.668Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnAnd")
public class FnAnd extends com.aliyun.ros.cdk.core.Intrinsic implements com.aliyun.ros.cdk.core.IRosConditionExpression {

    protected FnAnd(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnAnd(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public FnAnd(final @org.jetbrains.annotations.NotNull java.lang.Object... condition) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            final java.util.List<java.lang.Object> __condition__asList = java.util.Arrays.asList(condition);
            for (int __idx_24648a = 0; __idx_24648a < __condition__asList.size(); __idx_24648a++) {
                final java.lang.Object __val_24648a = __condition__asList.get(__idx_24648a);
                if (
                     !(__val_24648a instanceof java.lang.String)
                    && !(__val_24648a instanceof com.aliyun.ros.cdk.core.IRosConditionExpression)
                    && !(__val_24648a.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("condition").append("[").append(__idx_24648a).append("]")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IRosConditionExpression; received ")
                            .append(__val_24648a.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, java.util.Arrays.<Object>stream(condition).toArray(Object[]::new));
    }
}
