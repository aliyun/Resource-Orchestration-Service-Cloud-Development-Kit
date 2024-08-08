package com.aliyun.ros.cdk.cxapi;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:06.764Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.EnvironmentUtils")
public class EnvironmentUtils extends software.amazon.jsii.JsiiObject {

    protected EnvironmentUtils(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EnvironmentUtils(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public EnvironmentUtils() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Format an environment string from an account and region.
     * <p>
     * @param account This parameter is required.
     * @param region This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String format(final @org.jetbrains.annotations.NotNull java.lang.String account, final @org.jetbrains.annotations.NotNull java.lang.String region) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.cxapi.EnvironmentUtils.class, "format", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(account, "account is required"), java.util.Objects.requireNonNull(region, "region is required") });
    }

    /**
     * Build an environment object from an account and region.
     * <p>
     * @param account This parameter is required.
     * @param region This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.Environment make(final @org.jetbrains.annotations.NotNull java.lang.String account, final @org.jetbrains.annotations.NotNull java.lang.String region) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.cxapi.EnvironmentUtils.class, "make", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.Environment.class), new Object[] { java.util.Objects.requireNonNull(account, "account is required"), java.util.Objects.requireNonNull(region, "region is required") });
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.Environment parse(final @org.jetbrains.annotations.NotNull java.lang.String environment) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.cxapi.EnvironmentUtils.class, "parse", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.Environment.class), new Object[] { java.util.Objects.requireNonNull(environment, "environment is required") });
    }
}
