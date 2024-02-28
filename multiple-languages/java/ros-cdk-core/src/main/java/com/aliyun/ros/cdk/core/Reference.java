package com.aliyun.ros.cdk.core;

/**
 * An intrinsic Token that represents a reference to a construct.
 * <p>
 * References are recorded.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:26.449Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Reference")
public abstract class Reference extends com.aliyun.ros.cdk.core.Intrinsic {

    protected Reference(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Reference(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    protected Reference(final @org.jetbrains.annotations.NotNull java.lang.Object value, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct target, final @org.jetbrains.annotations.Nullable java.lang.String displayName) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value, java.util.Objects.requireNonNull(target, "target is required"), displayName });
    }

    protected Reference(final @org.jetbrains.annotations.NotNull java.lang.Object value, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct target) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value, java.util.Objects.requireNonNull(target, "target is required") });
    }

    /**
     * Check whether this is actually a Reference.
     * <p>
     * @param x This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isReference(final @org.jetbrains.annotations.NotNull java.lang.Object x) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Reference.class, "isReference", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { x });
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct getTarget() {
        return software.amazon.jsii.Kernel.get(this, "target", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    private static final class Jsii$Proxy extends com.aliyun.ros.cdk.core.Reference implements com.aliyun.ros.cdk.core.IResolvable.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }
    }
}
