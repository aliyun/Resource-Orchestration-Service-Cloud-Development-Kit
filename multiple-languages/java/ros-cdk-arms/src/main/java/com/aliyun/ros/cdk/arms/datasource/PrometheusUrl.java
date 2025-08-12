package com.aliyun.ros.cdk.arms.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ARMS::PrometheusUrl</code>, which is used to query all URLs of a cluster, including the URLs for remote read, remote write, Pushgateway, and Grafana.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.048Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.PrometheusUrl")
public class PrometheusUrl extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.arms.datasource.IPrometheusUrl {

    protected PrometheusUrl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PrometheusUrl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public PrometheusUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public PrometheusUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public PrometheusUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ClusterId: Cluster ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterType: Cluster type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrGrafanaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetGrafanaUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetGrafanaUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetOpenTelemetryUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetOpenTelemetryUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPushGatewayUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetPushGatewayUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetRemoteReadUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetRemoteReadUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetRemoteWriteUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetRemoteWriteUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenTelemetryUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrOpenTelemetryUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PushGatewayUrl: Internal push gateway URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrPushGatewayUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemoteReadUrl: Internal remote read URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteReadUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemoteWriteUrl: Internal remote write URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Token: The token for Grafana read URL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrToken() {
        return software.amazon.jsii.Kernel.get(this, "attrToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.datasource.PrometheusUrl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.datasource.PrometheusUrl> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property clusterId: Cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props().clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: Cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props().clusterId(clusterId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.datasource.PrometheusUrl}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.datasource.PrometheusUrl build() {
            return new com.aliyun.ros.cdk.arms.datasource.PrometheusUrl(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.arms.datasource.PrometheusUrlProps.Builder();
            }
            return this.props;
        }
    }
}
