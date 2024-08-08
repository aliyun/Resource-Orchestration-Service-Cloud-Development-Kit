package com.aliyun.ros.cdk.cxapi;

/**
 * Placeholders which can be used manifests.
 * <p>
 * These can occur both in the Asset Manifest as well as the general
 * Cloud Assembly manifest.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:06.762Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.EnvironmentPlaceholders")
public class EnvironmentPlaceholders extends software.amazon.jsii.JsiiObject {

    protected EnvironmentPlaceholders(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EnvironmentPlaceholders(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        CURRENT_ACCOUNT = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cxapi.EnvironmentPlaceholders.class, "CURRENT_ACCOUNT", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        CURRENT_REGION = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cxapi.EnvironmentPlaceholders.class, "CURRENT_REGION", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public EnvironmentPlaceholders() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Replace the environment placeholders in all strings found in a complex object.
     * <p>
     * @param object This parameter is required.
     * @param values This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Object replace(final @org.jetbrains.annotations.NotNull java.lang.Object object, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.EnvironmentPlaceholderValues values) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.cxapi.EnvironmentPlaceholders.class, "replace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { object, java.util.Objects.requireNonNull(values, "values is required") });
    }

    /**
     * Like 'replace', but asynchronous.
     * <p>
     * @param object This parameter is required.
     * @param provider This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Object replaceAsync(final @org.jetbrains.annotations.NotNull java.lang.Object object, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.IEnvironmentPlaceholderProvider provider) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.cxapi.EnvironmentPlaceholders.class, "replaceAsync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { object, java.util.Objects.requireNonNull(provider, "provider is required") });
    }

    /**
     * Insert this into the destination fields to be replaced with the current account.
     */
    public final static java.lang.String CURRENT_ACCOUNT;

    /**
     * Insert this into the destination fields to be replaced with the current region.
     */
    public final static java.lang.String CURRENT_REGION;
}
