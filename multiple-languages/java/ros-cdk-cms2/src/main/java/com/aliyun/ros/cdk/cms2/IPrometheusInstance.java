package com.aliyun.ros.cdk.cms2;

/**
 * Represents a <code>PrometheusInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.157Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.IPrometheusInstance")
@software.amazon.jsii.Jsii.Proxy(IPrometheusInstance.Jsii$Proxy.class)
public interface IPrometheusInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiInterUrl();

    /**
     * Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiIntraUrl();

    /**
     * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId();

    /**
     * Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayInterUrl();

    /**
     * Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayIntraUrl();

    /**
     * Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadInterUrl();

    /**
     * Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadIntraUrl();

    /**
     * Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteInterUrl();

    /**
     * Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteIntraUrl();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.PrometheusInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cms2.IPrometheusInstance.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiInterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiIntraUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayInterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrPushGatewayInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayIntraUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrPushGatewayIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadInterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteReadInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadIntraUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteReadIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteInterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteIntraUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.PrometheusInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.PrometheusInstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPrometheusInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPrometheusInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiInterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiIntraUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayInterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrPushGatewayInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayIntraUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrPushGatewayIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadInterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteReadInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadIntraUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteReadIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteInterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteIntraUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.PrometheusInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.PrometheusInstanceProps.class));
        }
    }
}
