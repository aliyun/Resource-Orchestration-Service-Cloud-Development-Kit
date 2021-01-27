package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:32.156Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosInfo")
public class RosInfo extends com.aliyun.ros.cdk.core.RosElement {

    protected RosInfo(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInfo(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates properties for this stack.
     * <p>
     * @param scope The parent construct. This parameter is required.
     * @param id This parameter is required.
     * @param info This parameter is required.
     */
    public RosInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull java.lang.Object info) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(info, "info is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String getDescription() {
        return software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosInfo.class, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public static void setDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.JsiiObject.jsiiStaticSet(com.aliyun.ros.cdk.core.RosInfo.class, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String getFormatVersion() {
        return software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosInfo.class, "formatVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public static void setFormatVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.JsiiObject.jsiiStaticSet(com.aliyun.ros.cdk.core.RosInfo.class, "formatVersion", java.util.Objects.requireNonNull(value, "formatVersion is required"));
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String getMetadata() {
        return software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosInfo.class, "metadata", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public static void setMetadata(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.JsiiObject.jsiiStaticSet(com.aliyun.ros.cdk.core.RosInfo.class, "metadata", java.util.Objects.requireNonNull(value, "metadata is required"));
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String getV20150901() {
        return software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.RosInfo.class, "v20150901", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public static void setV20150901(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.JsiiObject.jsiiStaticSet(com.aliyun.ros.cdk.core.RosInfo.class, "v20150901", java.util.Objects.requireNonNull(value, "v20150901 is required"));
    }
}
