package com.aliyun.ros.cdk.core;

/**
 * Encodes information how a certain Stack should be deployed.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.158Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.IStackSynthesizer")
@software.amazon.jsii.Jsii.Proxy(IStackSynthesizer.Jsii$Proxy.class)
public interface IStackSynthesizer extends software.amazon.jsii.JsiiSerializable {

    /**
     * Bind to the stack this environment is going to be used on.
     * <p>
     * Must be called before any of the other methods are called.
     * <p>
     * @param stack This parameter is required.
     */
    void bind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack);

    /**
     * (experimental) Synthesize all artifacts required for the stack into the session.
     * <p>
     * @param session This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    void synthesizeStackArtifacts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IStackSynthesizer.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
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
         * (experimental) Synthesize all artifacts required for the stack into the session.
         * <p>
         * @param session This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        @Override
        public final void synthesizeStackArtifacts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
            software.amazon.jsii.Kernel.call(this, "synthesizeStackArtifacts", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
        }
    }

    /**
     * Internal default implementation for {@link IStackSynthesizer}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IStackSynthesizer {

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
         * (experimental) Synthesize all artifacts required for the stack into the session.
         * <p>
         * @param session This parameter is required.
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        @Override
        default void synthesizeStackArtifacts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ISynthesisSession session) {
            software.amazon.jsii.Kernel.call(this, "synthesizeStackArtifacts", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(session, "session is required") });
        }
    }
}
