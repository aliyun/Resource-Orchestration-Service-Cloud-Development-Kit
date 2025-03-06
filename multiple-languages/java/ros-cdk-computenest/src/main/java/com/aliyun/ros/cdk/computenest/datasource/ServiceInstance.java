package com.aliyun.ros.cdk.computenest.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ComputeNest::ServiceInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.210Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.datasource.ServiceInstance")
public class ServiceInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.computenest.datasource.IServiceInstance {

    protected ServiceInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServiceInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ServiceInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ServiceInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Components: Cloud Marketplace additional billing items.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrComponents() {
        return software.amazon.jsii.Kernel.get(this, "attrComponents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the serviceInstance was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableInstanceOps() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableInstanceOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableUserPrometheus() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableUserPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IsOperated: Indicates whether the hosted O&amp;M feature is enabled for the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsOperated() {
        return software.amazon.jsii.Kernel.get(this, "attrIsOperated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LicenseEndTime: The expiration time of licence.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLicenseEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrLicenseEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MarketInstanceId: The ID of the cloud marketplace instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMarketInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrMarketInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkConfig: The network configurations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Outputs: The outputs returned from creating the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Parameters: The parameters configured for the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PredefinedParameterName: The name of the package .
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredefinedParameterName() {
        return software.amazon.jsii.Kernel.get(this, "attrPredefinedParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Progress: The deployment progress of the service instance.
     * <p>
     * Unit: percentage.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
        return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Service: The information about the service to which the service instance belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrService() {
        return software.amazon.jsii.Kernel.get(this, "attrService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceInstanceName: The name of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceType: The type of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceType() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Source: The source of the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource() {
        return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StatusDetail: The description of the deployment state of the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusDetail() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupplierUid() {
        return software.amazon.jsii.Kernel.get(this, "attrSupplierUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags of the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TemplateName: The name of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: The time when the serviceInstance was last updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: The AliUid of the user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.computenest.datasource.ServiceInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.computenest.datasource.ServiceInstance> {
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
        private final com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.computenest.datasource.ServiceInstanceProps.Builder();
        }

        /**
         * Property serviceInstanceId: The ID of the service instance.
         * <p>
         * @return {@code this}
         * @param serviceInstanceId Property serviceInstanceId: The ID of the service instance. This parameter is required.
         */
        public Builder serviceInstanceId(final java.lang.String serviceInstanceId) {
            this.props.serviceInstanceId(serviceInstanceId);
            return this;
        }
        /**
         * Property serviceInstanceId: The ID of the service instance.
         * <p>
         * @return {@code this}
         * @param serviceInstanceId Property serviceInstanceId: The ID of the service instance. This parameter is required.
         */
        public Builder serviceInstanceId(final com.aliyun.ros.cdk.core.IResolvable serviceInstanceId) {
            this.props.serviceInstanceId(serviceInstanceId);
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
            this.props.refreshOptions(refreshOptions);
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
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.computenest.datasource.ServiceInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.computenest.datasource.ServiceInstance build() {
            return new com.aliyun.ros.cdk.computenest.datasource.ServiceInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
