package com.aliyun.ros.cdk.core;

/**
 * Current resolution context for tokens.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.068Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IResolveContext")
@software.amazon.jsii.Jsii.Proxy(IResolveContext.Jsii$Proxy.class)
public interface IResolveContext extends software.amazon.jsii.JsiiSerializable {

    /**
     * True when we are still preparing, false if we're rendering the final output.
     */
    @org.jetbrains.annotations.NotNull java.lang.Boolean getPreparing();

    /**
     * The scope from which resolution has been initiated.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct getScope();

    /**
     * Use this postprocessor after the entire token structure has been resolved.
     * <p>
     * @param postProcessor This parameter is required.
     */
    void registerPostProcessor(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IPostProcessor postProcessor);

    /**
     * Resolve an inner object.
     * <p>
     * @param x This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull java.lang.Object x);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IResolveContext.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * True when we are still preparing, false if we're rendering the final output.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Boolean getPreparing() {
            return software.amazon.jsii.Kernel.get(this, "preparing", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * The scope from which resolution has been initiated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct getScope() {
            return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
        }

        /**
         * Use this postprocessor after the entire token structure has been resolved.
         * <p>
         * @param postProcessor This parameter is required.
         */
        @Override
        public final void registerPostProcessor(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IPostProcessor postProcessor) {
            software.amazon.jsii.Kernel.call(this, "registerPostProcessor", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(postProcessor, "postProcessor is required") });
        }

        /**
         * Resolve an inner object.
         * <p>
         * @param x This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull java.lang.Object x) {
            return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { x });
        }
    }

    /**
     * Internal default implementation for {@link IResolveContext}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IResolveContext {

        /**
         * True when we are still preparing, false if we're rendering the final output.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Boolean getPreparing() {
            return software.amazon.jsii.Kernel.get(this, "preparing", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * The scope from which resolution has been initiated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct getScope() {
            return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
        }

        /**
         * Use this postprocessor after the entire token structure has been resolved.
         * <p>
         * @param postProcessor This parameter is required.
         */
        @Override
        default void registerPostProcessor(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IPostProcessor postProcessor) {
            software.amazon.jsii.Kernel.call(this, "registerPostProcessor", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(postProcessor, "postProcessor is required") });
        }

        /**
         * Resolve an inner object.
         * <p>
         * @param x This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull java.lang.Object x) {
            return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { x });
        }
    }
}
