package com.aliyun.ros.cdk.core;

/**
 * Interface for Stack Synthesizers that can be used for more than one stack.
 * <p>
 * Regular <code>IStackSynthesizer</code> instances can only be bound to a Stack once.
 * <code>IReusableStackSynthesizer</code> instances.
 * <p>
 * For backwards compatibility reasons, this class inherits from
 * <code>IStackSynthesizer</code>, but if an object implements <code>IReusableStackSynthesizer</code>,
 * no other methods than <code>reusableBind()</code> will be called.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.854Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IReusableStackSynthesizer")
@software.amazon.jsii.Jsii.Proxy(IReusableStackSynthesizer.Jsii$Proxy.class)
public interface IReusableStackSynthesizer extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IStackSynthesizer {

    /**
     * Produce a bound Stack Synthesizer for the given stack.
     * <p>
     * This method may be called more than once on the same object.
     * <p>
     * @param stack This parameter is required.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IBoundStackSynthesizer reusableBind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IReusableStackSynthesizer.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Register a File Asset.
         * <p>
         * Returns the parameters that can be used to refer to the asset inside the template.
         * <p>
         * @param asset This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetLocation addFileAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetSource asset) {
            return software.amazon.jsii.Kernel.call(this, "addFileAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.FileAssetLocation.class), new Object[] { java.util.Objects.requireNonNull(asset, "asset is required") });
        }

        /**
         * Bind to the stack this environment is going to be used on.
         * <p>
         * Must be called before any of the other methods are called.
         * <p>
         * @param stack This parameter is required.
         */
        @Override
        public final void bind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack) {
            software.amazon.jsii.Kernel.call(this, "bind", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(stack, "stack is required") });
        }

        /**
         * Synthesize the associated stack to the session.
         * <p>
         * @param session This parameter is required.
         */
        @Override
        public final void synthesize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
            software.amazon.jsii.Kernel.call(this, "synthesize", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
        }

        /**
         * Produce a bound Stack Synthesizer for the given stack.
         * <p>
         * This method may be called more than once on the same object.
         * <p>
         * @param stack This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IBoundStackSynthesizer reusableBind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack) {
            return software.amazon.jsii.Kernel.call(this, "reusableBind", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IBoundStackSynthesizer.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required") });
        }
    }

    /**
     * Internal default implementation for {@link IReusableStackSynthesizer}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IReusableStackSynthesizer, com.aliyun.ros.cdk.core.IStackSynthesizer.Jsii$Default {

        /**
         * Register a File Asset.
         * <p>
         * Returns the parameters that can be used to refer to the asset inside the template.
         * <p>
         * @param asset This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetLocation addFileAsset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetSource asset) {
            return software.amazon.jsii.Kernel.call(this, "addFileAsset", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.FileAssetLocation.class), new Object[] { java.util.Objects.requireNonNull(asset, "asset is required") });
        }

        /**
         * Bind to the stack this environment is going to be used on.
         * <p>
         * Must be called before any of the other methods are called.
         * <p>
         * @param stack This parameter is required.
         */
        @Override
        default void bind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack) {
            software.amazon.jsii.Kernel.call(this, "bind", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(stack, "stack is required") });
        }

        /**
         * Synthesize the associated stack to the session.
         * <p>
         * @param session This parameter is required.
         */
        @Override
        default void synthesize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
            software.amazon.jsii.Kernel.call(this, "synthesize", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
        }

        /**
         * Produce a bound Stack Synthesizer for the given stack.
         * <p>
         * This method may be called more than once on the same object.
         * <p>
         * @param stack This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IBoundStackSynthesizer reusableBind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack) {
            return software.amazon.jsii.Kernel.call(this, "reusableBind", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IBoundStackSynthesizer.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required") });
        }
    }
}
