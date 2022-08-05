package com.aliyun.ros.cdk.core;

/**
 * Interface for lazy string producers.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:02.562Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IStringProducer")
@software.amazon.jsii.Jsii.Proxy(IStringProducer.Jsii$Proxy.class)
public interface IStringProducer extends software.amazon.jsii.JsiiSerializable {

    /**
     * Produce the string value.
     * <p>
     * @param context This parameter is required.
     */
    @org.jetbrains.annotations.Nullable java.lang.String produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IStringProducer.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Produce the string value.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.Nullable java.lang.String produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "produce", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }
    }

    /**
     * Internal default implementation for {@link IStringProducer}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IStringProducer {

        /**
         * Produce the string value.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.Nullable java.lang.String produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return software.amazon.jsii.Kernel.call(this, "produce", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(context, "context is required") });
        }
    }
}
