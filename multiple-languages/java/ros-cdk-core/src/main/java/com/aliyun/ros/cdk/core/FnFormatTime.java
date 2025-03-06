package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.671Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnFormatTime")
public class FnFormatTime extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnFormatTime(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnFormatTime(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>FormatTime</code> function.
     * <p>
     * @param format This parameter is required.
     * @param timeZone This parameter is required.
     */
    public FnFormatTime(final @org.jetbrains.annotations.NotNull java.lang.Object format, final @org.jetbrains.annotations.NotNull java.lang.Object timeZone) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(format instanceof java.lang.String)
                && !(format instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(format.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("format")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(format.getClass()).toString());
            }
            if (
                 !(timeZone instanceof java.lang.String)
                && !(timeZone instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(timeZone.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("timeZone")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(timeZone.getClass()).toString());
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(format, "format is required"), java.util.Objects.requireNonNull(timeZone, "timeZone is required") });
    }
}
