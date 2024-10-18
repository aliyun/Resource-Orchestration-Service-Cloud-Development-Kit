package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:26.091Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnMatchPattern")
public class FnMatchPattern extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnMatchPattern(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnMatchPattern(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>MatchPattern</code> function.
     * <p>
     * @param pattern This parameter is required.
     * @param value This parameter is required.
     */
    public FnMatchPattern(final @org.jetbrains.annotations.NotNull java.lang.Object pattern, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(pattern instanceof java.lang.String)
                && !(pattern instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(pattern.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("pattern")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(pattern.getClass()).toString());
            }
            if (
                 !(value instanceof java.lang.String)
                && !(value instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(value.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(value.getClass()).toString());
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(pattern, "pattern is required"), java.util.Objects.requireNonNull(value, "value is required") });
    }
}
