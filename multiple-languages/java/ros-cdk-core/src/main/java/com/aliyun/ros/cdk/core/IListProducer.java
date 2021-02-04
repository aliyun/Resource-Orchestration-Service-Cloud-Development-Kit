package com.aliyun.ros.cdk.core;

/**
 * Interface for lazy list producers.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:34.131Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IListProducer")
@software.amazon.jsii.Jsii.Proxy(IListProducer.Jsii$Proxy.class)
public interface IListProducer extends software.amazon.jsii.JsiiSerializable {

    /**
     * Produce the list value.
     * <p>
     * @param context This parameter is required.
     */
    @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IListProducer.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Produce the list value.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.call(this, "produce", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)), new Object[] { java.util.Objects.requireNonNull(context, "context is required") }))).map(java.util.Collections::unmodifiableList).orElse(null);
        }
    }

    /**
     * Internal default implementation for {@link IListProducer}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IListProducer {

        /**
         * Produce the list value.
         * <p>
         * @param context This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> produce(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext context) {
            return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.call(this, "produce", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)), new Object[] { java.util.Objects.requireNonNull(context, "context is required") }))).map(java.util.Collections::unmodifiableList).orElse(null);
        }
    }
}
