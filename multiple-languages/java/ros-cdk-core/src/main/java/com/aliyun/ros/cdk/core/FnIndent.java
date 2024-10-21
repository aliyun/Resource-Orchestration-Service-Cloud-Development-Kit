package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:26.089Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnIndent")
public class FnIndent extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnIndent(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnIndent(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Indent</code> function.
     * <p>
     * @param str This parameter is required.
     * @param level This parameter is required.
     * @param indent
     */
    public FnIndent(final @org.jetbrains.annotations.NotNull java.lang.Object str, final @org.jetbrains.annotations.NotNull java.lang.Object level, final @org.jetbrains.annotations.Nullable java.lang.Object indent) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(str instanceof java.lang.String)
                && !(str instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(str.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("str")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(str.getClass()).toString());
            }
            if (
                 !(level instanceof java.lang.Number)
                && !(level instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(level.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("level")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(level.getClass()).toString());
            }
            if (
                 !(indent instanceof java.lang.Number)
                && !(indent instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(indent.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("indent")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(indent.getClass()).toString());
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(str, "str is required"), java.util.Objects.requireNonNull(level, "level is required"), indent });
    }

    /**
     * Creates an <code>Indent</code> function.
     * <p>
     * @param str This parameter is required.
     * @param level This parameter is required.
     */
    public FnIndent(final @org.jetbrains.annotations.NotNull java.lang.Object str, final @org.jetbrains.annotations.NotNull java.lang.Object level) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(str instanceof java.lang.String)
                && !(str instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(str.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("str")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(str.getClass()).toString());
            }
            if (
                 !(level instanceof java.lang.Number)
                && !(level instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(level.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("level")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(level.getClass()).toString());
            }
        }
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(str, "str is required"), java.util.Objects.requireNonNull(level, "level is required") });
    }
}
