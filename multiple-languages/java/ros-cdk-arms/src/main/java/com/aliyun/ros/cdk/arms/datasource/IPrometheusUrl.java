package com.aliyun.ros.cdk.arms.datasource;

/**
 * Represents a <code>PrometheusUrl</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.170Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.IPrometheusUrl")
@software.amazon.jsii.Jsii.Proxy(IPrometheusUrl.Jsii$Proxy.class)
public interface IPrometheusUrl extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ClusterId: Cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute ClusterType: Cluster type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType();

    /**
     * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaUrl();

    /**
     * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetGrafanaUrl();

    /**
     * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetOpenTelemetryUrl();

    /**
     * Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPushGatewayUrl();

    /**
     * Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetRemoteReadUrl();

    /**
     * Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetRemoteWriteUrl();

    /**
     * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenTelemetryUrl();

    /**
     * Attribute PushGatewayUrl: Internal push gateway URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayUrl();

    /**
     * Attribute RemoteReadUrl: Internal remote read URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadUrl();

    /**
     * Attribute RemoteWriteUrl: Internal remote write URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteUrl();

    /**
     * Attribute Token: The token for Grafana read URL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrToken();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.arms.datasource.IPrometheusUrl.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ClusterId: Cluster ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: Cluster type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetGrafanaUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetGrafanaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetOpenTelemetryUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetOpenTelemetryUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetPushGatewayUrl: Internet push gateway URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPushGatewayUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetPushGatewayUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetRemoteReadUrl: Internet remote read URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetRemoteReadUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetRemoteReadUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetRemoteWriteUrl: Internet remote write URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetRemoteWriteUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetRemoteWriteUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenTelemetryUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrOpenTelemetryUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PushGatewayUrl: Internal push gateway URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrPushGatewayUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteReadUrl: Internal remote read URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteReadUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteWriteUrl: Internal remote write URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Token: The token for Grafana read URL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrToken() {
            return software.amazon.jsii.Kernel.get(this, "attrToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPrometheusUrl}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPrometheusUrl, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ClusterId: Cluster ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: Cluster type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrGrafanaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetGrafanaUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetGrafanaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetOpenTelemetryUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetOpenTelemetryUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetPushGatewayUrl: Internet push gateway URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPushGatewayUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetPushGatewayUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetRemoteReadUrl: Internet remote read URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetRemoteReadUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetRemoteReadUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetRemoteWriteUrl: Internet remote write URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetRemoteWriteUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetRemoteWriteUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenTelemetryUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrOpenTelemetryUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PushGatewayUrl: Internal push gateway URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrPushGatewayUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteReadUrl: Internal remote read URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteReadUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemoteWriteUrl: Internal remote write URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Token: The token for Grafana read URL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrToken() {
            return software.amazon.jsii.Kernel.get(this, "attrToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps.class));
        }
    }
}
