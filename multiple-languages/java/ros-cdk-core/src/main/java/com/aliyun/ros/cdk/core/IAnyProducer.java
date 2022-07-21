package com.aliyun.ros.cdk.core;

/**
 * Interface for lazy untyped value producers.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:23.418Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IAnyProducer")
@software.amazon.jsii.Jsii.Proxy(IAnyProducer.Jsii$Proxy.class)
public interface IAnyProducer extends software.amazon.jsii.JsiiSerializable {

    /**
     * Produce the value.
     * <p>
     * @param context This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IAnyProducer.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Produce the value.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "produce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }
    }

    /**
     * Internal default implementation for {@link IAnyProducer}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAnyProducer {

        /**
         * Produce the value.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "produce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }
    }
}
