package com.aliyun.ros.cdk.core;

/**
 * Interface for lazy number producers.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:40.201Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.INumberProducer")
@software.amazon.jsii.Jsii.Proxy(INumberProducer.Jsii$Proxy.class)
public interface INumberProducer extends software.amazon.jsii.JsiiSerializable {

    /**
     * Produce the number value.
     * <p>
     * @param context This parameter is required.
     */
    @org.jetbrains.annotations.Nullable java.lang.Number produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.INumberProducer.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Produce the number value.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.Nullable java.lang.Number produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "produce", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }
    }

    /**
     * Internal default implementation for {@link INumberProducer}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INumberProducer {

        /**
         * Produce the number value.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.Nullable java.lang.Number produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "produce", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }
    }
}
