package com.aliyun.ros.cdk.ossdeployment;

/**
 * Represents a source for bucket deployments.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:55.264Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ossdeployment.$Module.class, fqn = "@alicloud/ros-cdk-ossdeployment.ISource")
@software.amazon.jsii.Jsii.Proxy(ISource.Jsii$Proxy.class)
public interface ISource extends software.amazon.jsii.JsiiSerializable {

    /**
     * Binds the source to a bucket deployment.
     * <p>
     * @param scope The construct tree context. This parameter is required.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.SourceConfig bind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ossdeployment.ISource.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * Binds the source to a bucket deployment.
         * <p>
         * @param scope The construct tree context. This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.SourceConfig bind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope) {
            return software.amazon.jsii.Kernel.call(this, "bind", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.SourceConfig.class), new Object[] { java.util.Objects.requireNonNull(scope, "scope is required") });
        }
    }

    /**
     * Internal default implementation for {@link ISource}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISource {

        /**
         * Binds the source to a bucket deployment.
         * <p>
         * @param scope The construct tree context. This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.SourceConfig bind(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope) {
            return software.amazon.jsii.Kernel.call(this, "bind", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.SourceConfig.class), new Object[] { java.util.Objects.requireNonNull(scope, "scope is required") });
        }
    }
}
