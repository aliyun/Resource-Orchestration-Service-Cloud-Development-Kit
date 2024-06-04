package com.aliyun.ros.cdk.core;

/**
 * Interface for examining a construct and exposing metadata.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.207Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IInspectable")
@software.amazon.jsii.Jsii.Proxy(IInspectable.Jsii$Proxy.class)
public interface IInspectable extends software.amazon.jsii.JsiiSerializable {

    /**
     * Examines construct.
     * <p>
     * @param inspector <ul><li>tree inspector to collect and process attributes.</li></ul> This parameter is required.
     */
    void inspect(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TreeInspector inspector);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IInspectable.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Examines construct.
         * <p>
         * @param inspector <ul><li>tree inspector to collect and process attributes.</li></ul> This parameter is required.
         */
        @Override
        public final void inspect(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TreeInspector inspector) {
            software.amazon.jsii.Kernel.call(this, "inspect", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(inspector, "inspector is required") });
        }
    }

    /**
     * Internal default implementation for {@link IInspectable}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInspectable {

        /**
         * Examines construct.
         * <p>
         * @param inspector <ul><li>tree inspector to collect and process attributes.</li></ul> This parameter is required.
         */
        @Override
        default void inspect(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TreeInspector inspector) {
            software.amazon.jsii.Kernel.call(this, "inspect", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(inspector, "inspector is required") });
        }
    }
}
