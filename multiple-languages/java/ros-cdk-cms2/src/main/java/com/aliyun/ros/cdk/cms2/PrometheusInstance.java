package com.aliyun.ros.cdk.cms2;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS2::PrometheusInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.160Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.PrometheusInstance")
public class PrometheusInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cms2.IPrometheusInstance {

    protected PrometheusInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PrometheusInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public PrometheusInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.PrometheusInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public PrometheusInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.PrometheusInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiInterUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiIntraUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayInterUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrPushGatewayInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPushGatewayIntraUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrPushGatewayIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadInterUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteReadInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteReadIntraUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteReadIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteInterUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteInterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemoteWriteIntraUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteIntraUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.PrometheusInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.PrometheusInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cms2.PrometheusInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms2.PrometheusInstance> {
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
        private final com.aliyun.ros.cdk.cms2.PrometheusInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms2.PrometheusInstanceProps.Builder();
        }

        /**
         * Property prometheusInstanceName: The name of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param prometheusInstanceName Property prometheusInstanceName: The name of the Prometheus instance. This parameter is required.
         */
        public Builder prometheusInstanceName(final java.lang.String prometheusInstanceName) {
            this.props.prometheusInstanceName(prometheusInstanceName);
            return this;
        }
        /**
         * Property prometheusInstanceName: The name of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param prometheusInstanceName Property prometheusInstanceName: The name of the Prometheus instance. This parameter is required.
         */
        public Builder prometheusInstanceName(final com.aliyun.ros.cdk.core.IResolvable prometheusInstanceName) {
            this.props.prometheusInstanceName(prometheusInstanceName);
            return this;
        }

        /**
         * Property archiveDuration: The archive duration of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param archiveDuration Property archiveDuration: The archive duration of the Prometheus instance. This parameter is required.
         */
        public Builder archiveDuration(final java.lang.Number archiveDuration) {
            this.props.archiveDuration(archiveDuration);
            return this;
        }
        /**
         * Property archiveDuration: The archive duration of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param archiveDuration Property archiveDuration: The archive duration of the Prometheus instance. This parameter is required.
         */
        public Builder archiveDuration(final com.aliyun.ros.cdk.core.IResolvable archiveDuration) {
            this.props.archiveDuration(archiveDuration);
            return this;
        }

        /**
         * Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param authFreeReadPolicy Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance. This parameter is required.
         */
        public Builder authFreeReadPolicy(final java.lang.String authFreeReadPolicy) {
            this.props.authFreeReadPolicy(authFreeReadPolicy);
            return this;
        }
        /**
         * Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param authFreeReadPolicy Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance. This parameter is required.
         */
        public Builder authFreeReadPolicy(final com.aliyun.ros.cdk.core.IResolvable authFreeReadPolicy) {
            this.props.authFreeReadPolicy(authFreeReadPolicy);
            return this;
        }

        /**
         * Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param authFreeWritePolicy Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance. This parameter is required.
         */
        public Builder authFreeWritePolicy(final java.lang.String authFreeWritePolicy) {
            this.props.authFreeWritePolicy(authFreeWritePolicy);
            return this;
        }
        /**
         * Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param authFreeWritePolicy Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance. This parameter is required.
         */
        public Builder authFreeWritePolicy(final com.aliyun.ros.cdk.core.IResolvable authFreeWritePolicy) {
            this.props.authFreeWritePolicy(authFreeWritePolicy);
            return this;
        }

        /**
         * Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param basicMetricQueryLimit Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance. This parameter is required.
         */
        public Builder basicMetricQueryLimit(final java.lang.Boolean basicMetricQueryLimit) {
            this.props.basicMetricQueryLimit(basicMetricQueryLimit);
            return this;
        }
        /**
         * Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param basicMetricQueryLimit Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance. This parameter is required.
         */
        public Builder basicMetricQueryLimit(final com.aliyun.ros.cdk.core.IResolvable basicMetricQueryLimit) {
            this.props.basicMetricQueryLimit(basicMetricQueryLimit);
            return this;
        }

        /**
         * Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param enableAuthFreeRead Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance. This parameter is required.
         */
        public Builder enableAuthFreeRead(final java.lang.Boolean enableAuthFreeRead) {
            this.props.enableAuthFreeRead(enableAuthFreeRead);
            return this;
        }
        /**
         * Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param enableAuthFreeRead Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance. This parameter is required.
         */
        public Builder enableAuthFreeRead(final com.aliyun.ros.cdk.core.IResolvable enableAuthFreeRead) {
            this.props.enableAuthFreeRead(enableAuthFreeRead);
            return this;
        }

        /**
         * Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param enableAuthFreeWrite Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance. This parameter is required.
         */
        public Builder enableAuthFreeWrite(final java.lang.Boolean enableAuthFreeWrite) {
            this.props.enableAuthFreeWrite(enableAuthFreeWrite);
            return this;
        }
        /**
         * Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param enableAuthFreeWrite Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance. This parameter is required.
         */
        public Builder enableAuthFreeWrite(final com.aliyun.ros.cdk.core.IResolvable enableAuthFreeWrite) {
            this.props.enableAuthFreeWrite(enableAuthFreeWrite);
            return this;
        }

        /**
         * Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param enableAuthToken Property enableAuthToken: Whether to enable authentication token for the Prometheus instance. This parameter is required.
         */
        public Builder enableAuthToken(final java.lang.Boolean enableAuthToken) {
            this.props.enableAuthToken(enableAuthToken);
            return this;
        }
        /**
         * Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param enableAuthToken Property enableAuthToken: Whether to enable authentication token for the Prometheus instance. This parameter is required.
         */
        public Builder enableAuthToken(final com.aliyun.ros.cdk.core.IResolvable enableAuthToken) {
            this.props.enableAuthToken(enableAuthToken);
            return this;
        }

        /**
         * Property paymentType: The payment type of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the Prometheus instance. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The payment type of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the Prometheus instance. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property status: The status of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the Prometheus instance. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The status of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the Prometheus instance. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property storageDuration: The storage duration of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param storageDuration Property storageDuration: The storage duration of the Prometheus instance. This parameter is required.
         */
        public Builder storageDuration(final java.lang.Number storageDuration) {
            this.props.storageDuration(storageDuration);
            return this;
        }
        /**
         * Property storageDuration: The storage duration of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param storageDuration Property storageDuration: The storage duration of the Prometheus instance. This parameter is required.
         */
        public Builder storageDuration(final com.aliyun.ros.cdk.core.IResolvable storageDuration) {
            this.props.storageDuration(storageDuration);
            return this;
        }

        /**
         * Property workspace: The workspace of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param workspace Property workspace: The workspace of the Prometheus instance. This parameter is required.
         */
        public Builder workspace(final java.lang.String workspace) {
            this.props.workspace(workspace);
            return this;
        }
        /**
         * Property workspace: The workspace of the Prometheus instance.
         * <p>
         * @return {@code this}
         * @param workspace Property workspace: The workspace of the Prometheus instance. This parameter is required.
         */
        public Builder workspace(final com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.props.workspace(workspace);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms2.PrometheusInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.cms2.PrometheusInstance build() {
            return new com.aliyun.ros.cdk.cms2.PrometheusInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
