package com.aliyun.ros.cdk.core;

/**
 * Local bundling.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:42.962Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ILocalBundling")
@software.amazon.jsii.Jsii.Proxy(ILocalBundling.Jsii$Proxy.class)
public interface ILocalBundling extends software.amazon.jsii.JsiiSerializable {

    /**
     * This method is called before attempting docker bundling to allow the bundler to be executed locally.
     * <p>
     * If the local bundler exists, and bundling
     * was performed locally, return <code>true</code>. Otherwise, return <code>false</code>.
     * <p>
     * @param outputDir the directory where the bundled asset should be output. This parameter is required.
     * @param options bundling options for this asset. This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Boolean tryBundle(final @org.jetbrains.annotations.NotNull java.lang.String outputDir, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.BundlingOptions options);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.ILocalBundling.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * This method is called before attempting docker bundling to allow the bundler to be executed locally.
         * <p>
         * If the local bundler exists, and bundling
         * was performed locally, return <code>true</code>. Otherwise, return <code>false</code>.
         * <p>
         * @param outputDir the directory where the bundled asset should be output. This parameter is required.
         * @param options bundling options for this asset. This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Boolean tryBundle(final @org.jetbrains.annotations.NotNull java.lang.String outputDir, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.BundlingOptions options) {
            return software.amazon.jsii.Kernel.call(this, "tryBundle", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { java.util.Objects.requireNonNull(outputDir, "outputDir is required"), java.util.Objects.requireNonNull(options, "options is required") });
        }
    }

    /**
     * Internal default implementation for {@link ILocalBundling}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ILocalBundling {

        /**
         * This method is called before attempting docker bundling to allow the bundler to be executed locally.
         * <p>
         * If the local bundler exists, and bundling
         * was performed locally, return <code>true</code>. Otherwise, return <code>false</code>.
         * <p>
         * @param outputDir the directory where the bundled asset should be output. This parameter is required.
         * @param options bundling options for this asset. This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Boolean tryBundle(final @org.jetbrains.annotations.NotNull java.lang.String outputDir, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.BundlingOptions options) {
            return software.amazon.jsii.Kernel.call(this, "tryBundle", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { java.util.Objects.requireNonNull(outputDir, "outputDir is required"), java.util.Objects.requireNonNull(options, "options is required") });
        }
    }
}
