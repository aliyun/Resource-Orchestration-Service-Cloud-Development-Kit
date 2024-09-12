package com.aliyun.ros.cdk.core;

/**
 * Represents a single session of synthesis.
 * <p>
 * Passed into <code>Construct.synthesize()</code> methods.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:22.538Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ISynthesisSession")
@software.amazon.jsii.Jsii.Proxy(ISynthesisSession.Jsii$Proxy.class)
public interface ISynthesisSession extends software.amazon.jsii.JsiiSerializable {

    /**
     * Cloud assembly builder.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder getAssembly();

    /**
     * Cloud assembly builder.
     */
    void setAssembly(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder value);

    /**
     * The output directory for this synthesis session.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOutdir();

    /**
     * The output directory for this synthesis session.
     */
    void setOutdir(final @org.jetbrains.annotations.NotNull java.lang.String value);

    /**
     * Whether the stack should be validated after synthesis to check for error metadata.
     * <p>
     * Default: - false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getValidateOnSynth() {
        return null;
    }

    /**
     * Whether the stack should be validated after synthesis to check for error metadata.
     * <p>
     * Default: - false
     */
    @software.amazon.jsii.Optional
    default void setValidateOnSynth(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        throw new UnsupportedOperationException("'void " + getClass().getCanonicalName() + "#setValidateOnSynth(@org.jetbrains.annotations.Nullable java.lang.Boolean)' is not implemented!");
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.ISynthesisSession.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Cloud assembly builder.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder getAssembly() {
            return software.amazon.jsii.Kernel.get(this, "assembly", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder.class));
        }

        /**
         * Cloud assembly builder.
         */
        @Override
        public final void setAssembly(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder value) {
            software.amazon.jsii.Kernel.set(this, "assembly", java.util.Objects.requireNonNull(value, "assembly is required"));
        }

        /**
         * The output directory for this synthesis session.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String getOutdir() {
            return software.amazon.jsii.Kernel.get(this, "outdir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * The output directory for this synthesis session.
         */
        @Override
        public final void setOutdir(final @org.jetbrains.annotations.NotNull java.lang.String value) {
            software.amazon.jsii.Kernel.set(this, "outdir", java.util.Objects.requireNonNull(value, "outdir is required"));
        }

        /**
         * Whether the stack should be validated after synthesis to check for error metadata.
         * <p>
         * Default: - false
         */
        @Override
        public final @org.jetbrains.annotations.Nullable java.lang.Boolean getValidateOnSynth() {
            return software.amazon.jsii.Kernel.get(this, "validateOnSynth", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Whether the stack should be validated after synthesis to check for error metadata.
         * <p>
         * Default: - false
         */
        @Override
        public final void setValidateOnSynth(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
            software.amazon.jsii.Kernel.set(this, "validateOnSynth", value);
        }
    }

    /**
     * Internal default implementation for {@link ISynthesisSession}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISynthesisSession {

        /**
         * Cloud assembly builder.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder getAssembly() {
            return software.amazon.jsii.Kernel.get(this, "assembly", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder.class));
        }

        /**
         * Cloud assembly builder.
         */
        @Override
        default void setAssembly(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssemblyBuilder value) {
            software.amazon.jsii.Kernel.set(this, "assembly", java.util.Objects.requireNonNull(value, "assembly is required"));
        }

        /**
         * The output directory for this synthesis session.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.String getOutdir() {
            return software.amazon.jsii.Kernel.get(this, "outdir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * The output directory for this synthesis session.
         */
        @Override
        default void setOutdir(final @org.jetbrains.annotations.NotNull java.lang.String value) {
            software.amazon.jsii.Kernel.set(this, "outdir", java.util.Objects.requireNonNull(value, "outdir is required"));
        }

        /**
         * Whether the stack should be validated after synthesis to check for error metadata.
         * <p>
         * Default: - false
         */
        @Override
        default @org.jetbrains.annotations.Nullable java.lang.Boolean getValidateOnSynth() {
            return software.amazon.jsii.Kernel.get(this, "validateOnSynth", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Whether the stack should be validated after synthesis to check for error metadata.
         * <p>
         * Default: - false
         */
        @Override
        default void setValidateOnSynth(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
            software.amazon.jsii.Kernel.set(this, "validateOnSynth", value);
        }
    }
}
