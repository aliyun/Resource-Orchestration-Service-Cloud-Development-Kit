package com.aliyun.ros.cdk.cms2;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CMS2::PrometheusInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.166Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosPrometheusInstance")
public class RosPrometheusInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPrometheusInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPrometheusInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms2.RosPrometheusInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPrometheusInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.RosPrometheusInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpApiInterUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiInterUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpApiIntraUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiIntraUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrometheusInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPushGatewayInterUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrPushGatewayInterUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPushGatewayIntraUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrPushGatewayIntraUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemoteReadInterUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteReadInterUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemoteReadIntraUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteReadIntraUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemoteWriteInterUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteInterUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemoteWriteIntraUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrRemoteWriteIntraUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrometheusInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "prometheusInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrometheusInstanceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "prometheusInstanceName", java.util.Objects.requireNonNull(value, "prometheusInstanceName is required"));
    }

    /**
     */
    public void setPrometheusInstanceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "prometheusInstanceName", java.util.Objects.requireNonNull(value, "prometheusInstanceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getArchiveDuration() {
        return software.amazon.jsii.Kernel.get(this, "archiveDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArchiveDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "archiveDuration", value);
    }

    /**
     */
    public void setArchiveDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "archiveDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthFreeReadPolicy() {
        return software.amazon.jsii.Kernel.get(this, "authFreeReadPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthFreeReadPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authFreeReadPolicy", value);
    }

    /**
     */
    public void setAuthFreeReadPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authFreeReadPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthFreeWritePolicy() {
        return software.amazon.jsii.Kernel.get(this, "authFreeWritePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthFreeWritePolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authFreeWritePolicy", value);
    }

    /**
     */
    public void setAuthFreeWritePolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authFreeWritePolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBasicMetricQueryLimit() {
        return software.amazon.jsii.Kernel.get(this, "basicMetricQueryLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBasicMetricQueryLimit(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "basicMetricQueryLimit", value);
    }

    /**
     */
    public void setBasicMetricQueryLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "basicMetricQueryLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAuthFreeRead() {
        return software.amazon.jsii.Kernel.get(this, "enableAuthFreeRead", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAuthFreeRead(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAuthFreeRead", value);
    }

    /**
     */
    public void setEnableAuthFreeRead(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAuthFreeRead", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAuthFreeWrite() {
        return software.amazon.jsii.Kernel.get(this, "enableAuthFreeWrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAuthFreeWrite(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAuthFreeWrite", value);
    }

    /**
     */
    public void setEnableAuthFreeWrite(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAuthFreeWrite", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAuthToken() {
        return software.amazon.jsii.Kernel.get(this, "enableAuthToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAuthToken(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAuthToken", value);
    }

    /**
     */
    public void setEnableAuthToken(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAuthToken", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageDuration() {
        return software.amazon.jsii.Kernel.get(this, "storageDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "storageDuration", value);
    }

    /**
     */
    public void setStorageDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkspace() {
        return software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspace(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspace", value);
    }

    /**
     */
    public void setWorkspace(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspace", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms2.RosPrometheusInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms2.RosPrometheusInstance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms2.RosPrometheusInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms2.RosPrometheusInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param prometheusInstanceName This parameter is required.
         */
        public Builder prometheusInstanceName(final java.lang.String prometheusInstanceName) {
            this.props.prometheusInstanceName(prometheusInstanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param prometheusInstanceName This parameter is required.
         */
        public Builder prometheusInstanceName(final com.aliyun.ros.cdk.core.IResolvable prometheusInstanceName) {
            this.props.prometheusInstanceName(prometheusInstanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param archiveDuration This parameter is required.
         */
        public Builder archiveDuration(final java.lang.Number archiveDuration) {
            this.props.archiveDuration(archiveDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param archiveDuration This parameter is required.
         */
        public Builder archiveDuration(final com.aliyun.ros.cdk.core.IResolvable archiveDuration) {
            this.props.archiveDuration(archiveDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param authFreeReadPolicy This parameter is required.
         */
        public Builder authFreeReadPolicy(final java.lang.String authFreeReadPolicy) {
            this.props.authFreeReadPolicy(authFreeReadPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param authFreeReadPolicy This parameter is required.
         */
        public Builder authFreeReadPolicy(final com.aliyun.ros.cdk.core.IResolvable authFreeReadPolicy) {
            this.props.authFreeReadPolicy(authFreeReadPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param authFreeWritePolicy This parameter is required.
         */
        public Builder authFreeWritePolicy(final java.lang.String authFreeWritePolicy) {
            this.props.authFreeWritePolicy(authFreeWritePolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param authFreeWritePolicy This parameter is required.
         */
        public Builder authFreeWritePolicy(final com.aliyun.ros.cdk.core.IResolvable authFreeWritePolicy) {
            this.props.authFreeWritePolicy(authFreeWritePolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param basicMetricQueryLimit This parameter is required.
         */
        public Builder basicMetricQueryLimit(final java.lang.Boolean basicMetricQueryLimit) {
            this.props.basicMetricQueryLimit(basicMetricQueryLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param basicMetricQueryLimit This parameter is required.
         */
        public Builder basicMetricQueryLimit(final com.aliyun.ros.cdk.core.IResolvable basicMetricQueryLimit) {
            this.props.basicMetricQueryLimit(basicMetricQueryLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAuthFreeRead This parameter is required.
         */
        public Builder enableAuthFreeRead(final java.lang.Boolean enableAuthFreeRead) {
            this.props.enableAuthFreeRead(enableAuthFreeRead);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAuthFreeRead This parameter is required.
         */
        public Builder enableAuthFreeRead(final com.aliyun.ros.cdk.core.IResolvable enableAuthFreeRead) {
            this.props.enableAuthFreeRead(enableAuthFreeRead);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAuthFreeWrite This parameter is required.
         */
        public Builder enableAuthFreeWrite(final java.lang.Boolean enableAuthFreeWrite) {
            this.props.enableAuthFreeWrite(enableAuthFreeWrite);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAuthFreeWrite This parameter is required.
         */
        public Builder enableAuthFreeWrite(final com.aliyun.ros.cdk.core.IResolvable enableAuthFreeWrite) {
            this.props.enableAuthFreeWrite(enableAuthFreeWrite);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAuthToken This parameter is required.
         */
        public Builder enableAuthToken(final java.lang.Boolean enableAuthToken) {
            this.props.enableAuthToken(enableAuthToken);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAuthToken This parameter is required.
         */
        public Builder enableAuthToken(final com.aliyun.ros.cdk.core.IResolvable enableAuthToken) {
            this.props.enableAuthToken(enableAuthToken);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageDuration This parameter is required.
         */
        public Builder storageDuration(final java.lang.Number storageDuration) {
            this.props.storageDuration(storageDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageDuration This parameter is required.
         */
        public Builder storageDuration(final com.aliyun.ros.cdk.core.IResolvable storageDuration) {
            this.props.storageDuration(storageDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspace This parameter is required.
         */
        public Builder workspace(final java.lang.String workspace) {
            this.props.workspace(workspace);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspace This parameter is required.
         */
        public Builder workspace(final com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.props.workspace(workspace);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms2.RosPrometheusInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.cms2.RosPrometheusInstance build() {
            return new com.aliyun.ros.cdk.cms2.RosPrometheusInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
