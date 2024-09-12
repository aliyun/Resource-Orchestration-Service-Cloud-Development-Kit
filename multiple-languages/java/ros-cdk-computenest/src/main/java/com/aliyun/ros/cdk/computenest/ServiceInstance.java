package com.aliyun.ros.cdk.computenest;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ComputeNest::ServiceInstance</code>, which is used to create and deploy a service instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:24.709Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.ServiceInstance")
public class ServiceInstance extends com.aliyun.ros.cdk.core.Resource {

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
    public ServiceInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.ServiceInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ServiceInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.ServiceInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Components: Additional billing items.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrComponents() {
        return software.amazon.jsii.Kernel.get(this, "attrComponents", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreateTime: Creation time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EnableInstanceOps: Whether the service instance has the O &amp; M function.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableInstanceOps() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableInstanceOps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableUserPrometheus() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableUserPrometheus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IsOperated: Whether the generation O &amp; M function of the service instance is enabled.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsOperated() {
        return software.amazon.jsii.Kernel.get(this, "attrIsOperated", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LicenseEndTime: License expiration time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLicenseEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrLicenseEndTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: The name of the service instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetworkConfig: Network configuration information.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Outputs: Create the output Field returned by the service instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Parameters: The parameters entered by the deployment service instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PredefinedParameterName: Package name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPredefinedParameterName() {
        return software.amazon.jsii.Kernel.get(this, "attrPredefinedParameterName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Progress: The deployment progress of the service instance.
     * <p>
     * Unit:%.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProgress() {
        return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Service: Service details.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrService() {
        return software.amazon.jsii.Kernel.get(this, "attrService", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceInstanceId: The ID of the service instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceType: Service type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceType() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Source: The source of the service instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSource() {
        return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StatusDetail: The status description of the deployment instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatusDetail() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusDetail", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SupplierUid: Service provider AliUid.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSupplierUid() {
        return software.amazon.jsii.Kernel.get(this, "attrSupplierUid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: User-defined labels.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TemplateName: Template name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UpdateTime: Update time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserId: AliUid of the user.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.ServiceInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.ServiceInstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.ServiceInstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.computenest.ServiceInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.computenest.ServiceInstance> {
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
        private final com.aliyun.ros.cdk.computenest.ServiceInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.computenest.ServiceInstanceProps.Builder();
        }

        /**
         * Property service: Service details.
         * <p>
         * @return {@code this}
         * @param service Property service: Service details. This parameter is required.
         */
        public Builder service(final com.aliyun.ros.cdk.core.IResolvable service) {
            this.props.service(service);
            return this;
        }
        /**
         * Property service: Service details.
         * <p>
         * @return {@code this}
         * @param service Property service: Service details. This parameter is required.
         */
        public Builder service(final com.aliyun.ros.cdk.computenest.RosServiceInstance.ServiceProperty service) {
            this.props.service(service);
            return this;
        }

        /**
         * Property commodity: Cloud market commodity purchase parameters.
         * <p>
         * @return {@code this}
         * @param commodity Property commodity: Cloud market commodity purchase parameters. This parameter is required.
         */
        public Builder commodity(final com.aliyun.ros.cdk.core.IResolvable commodity) {
            this.props.commodity(commodity);
            return this;
        }
        /**
         * Property commodity: Cloud market commodity purchase parameters.
         * <p>
         * @return {@code this}
         * @param commodity Property commodity: Cloud market commodity purchase parameters. This parameter is required.
         */
        public Builder commodity(final com.aliyun.ros.cdk.computenest.RosServiceInstance.CommodityProperty commodity) {
            this.props.commodity(commodity);
            return this;
        }

        /**
         * Property contactGroup: Alarm Contact Group.
         * <p>
         * @return {@code this}
         * @param contactGroup Property contactGroup: Alarm Contact Group. This parameter is required.
         */
        public Builder contactGroup(final java.lang.String contactGroup) {
            this.props.contactGroup(contactGroup);
            return this;
        }
        /**
         * Property contactGroup: Alarm Contact Group.
         * <p>
         * @return {@code this}
         * @param contactGroup Property contactGroup: Alarm Contact Group. This parameter is required.
         */
        public Builder contactGroup(final com.aliyun.ros.cdk.core.IResolvable contactGroup) {
            this.props.contactGroup(contactGroup);
            return this;
        }

        /**
         * Property enableInstanceOps: Whether the service instance has the O &amp; M function.
         * <p>
         * Possible values:
         * <p>
         * <ul>
         * <li>true: The service instance has a generation O &amp; M function.</li>
         * <li>false: The service instance does not have the O &amp; M function.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableInstanceOps Property enableInstanceOps: Whether the service instance has the O &amp; M function. This parameter is required.
         */
        public Builder enableInstanceOps(final java.lang.Boolean enableInstanceOps) {
            this.props.enableInstanceOps(enableInstanceOps);
            return this;
        }
        /**
         * Property enableInstanceOps: Whether the service instance has the O &amp; M function.
         * <p>
         * Possible values:
         * <p>
         * <ul>
         * <li>true: The service instance has a generation O &amp; M function.</li>
         * <li>false: The service instance does not have the O &amp; M function.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableInstanceOps Property enableInstanceOps: Whether the service instance has the O &amp; M function. This parameter is required.
         */
        public Builder enableInstanceOps(final com.aliyun.ros.cdk.core.IResolvable enableInstanceOps) {
            this.props.enableInstanceOps(enableInstanceOps);
            return this;
        }

        /**
         * Property enableUserPrometheus: Whether Prometheus monitoring is enabled.
         * <p>
         * Possible values:
         * <p>
         * <ul>
         * <li>true: enabled.</li>
         * <li>false: not enabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableUserPrometheus Property enableUserPrometheus: Whether Prometheus monitoring is enabled. This parameter is required.
         */
        public Builder enableUserPrometheus(final java.lang.Boolean enableUserPrometheus) {
            this.props.enableUserPrometheus(enableUserPrometheus);
            return this;
        }
        /**
         * Property enableUserPrometheus: Whether Prometheus monitoring is enabled.
         * <p>
         * Possible values:
         * <p>
         * <ul>
         * <li>true: enabled.</li>
         * <li>false: not enabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableUserPrometheus Property enableUserPrometheus: Whether Prometheus monitoring is enabled. This parameter is required.
         */
        public Builder enableUserPrometheus(final com.aliyun.ros.cdk.core.IResolvable enableUserPrometheus) {
            this.props.enableUserPrometheus(enableUserPrometheus);
            return this;
        }

        /**
         * Property marketInstanceId: The ID of the cloud marketplace instance.
         * <p>
         * @return {@code this}
         * @param marketInstanceId Property marketInstanceId: The ID of the cloud marketplace instance. This parameter is required.
         */
        public Builder marketInstanceId(final java.lang.String marketInstanceId) {
            this.props.marketInstanceId(marketInstanceId);
            return this;
        }
        /**
         * Property marketInstanceId: The ID of the cloud marketplace instance.
         * <p>
         * @return {@code this}
         * @param marketInstanceId Property marketInstanceId: The ID of the cloud marketplace instance. This parameter is required.
         */
        public Builder marketInstanceId(final com.aliyun.ros.cdk.core.IResolvable marketInstanceId) {
            this.props.marketInstanceId(marketInstanceId);
            return this;
        }

        /**
         * Property name: The name of the service instance.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the service instance. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the service instance.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the service instance. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property operationName: Change operation name.
         * <p>
         * @return {@code this}
         * @param operationName Property operationName: Change operation name. This parameter is required.
         */
        public Builder operationName(final java.lang.String operationName) {
            this.props.operationName(operationName);
            return this;
        }
        /**
         * Property operationName: Change operation name.
         * <p>
         * @return {@code this}
         * @param operationName Property operationName: Change operation name. This parameter is required.
         */
        public Builder operationName(final com.aliyun.ros.cdk.core.IResolvable operationName) {
            this.props.operationName(operationName);
            return this;
        }

        /**
         * Property parameters: The parameters entered by the deployment service instance.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The parameters entered by the deployment service instance. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * Property parameters: The parameters entered by the deployment service instance.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The parameters entered by the deployment service instance. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * Property predefinedParameterName: Package name.
         * <p>
         * @return {@code this}
         * @param predefinedParameterName Property predefinedParameterName: Package name. This parameter is required.
         */
        public Builder predefinedParameterName(final java.lang.String predefinedParameterName) {
            this.props.predefinedParameterName(predefinedParameterName);
            return this;
        }
        /**
         * Property predefinedParameterName: Package name.
         * <p>
         * @return {@code this}
         * @param predefinedParameterName Property predefinedParameterName: Package name. This parameter is required.
         */
        public Builder predefinedParameterName(final com.aliyun.ros.cdk.core.IResolvable predefinedParameterName) {
            this.props.predefinedParameterName(predefinedParameterName);
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
         * Property specificationCode: Commodity specification Code.
         * <p>
         * @return {@code this}
         * @param specificationCode Property specificationCode: Commodity specification Code. This parameter is required.
         */
        public Builder specificationCode(final java.lang.String specificationCode) {
            this.props.specificationCode(specificationCode);
            return this;
        }
        /**
         * Property specificationCode: Commodity specification Code.
         * <p>
         * @return {@code this}
         * @param specificationCode Property specificationCode: Commodity specification Code. This parameter is required.
         */
        public Builder specificationCode(final com.aliyun.ros.cdk.core.IResolvable specificationCode) {
            this.props.specificationCode(specificationCode);
            return this;
        }

        /**
         * Property tags: Tags of service instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of service instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property templateName: Template name.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: Template name. This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props.templateName(templateName);
            return this;
        }
        /**
         * Property templateName: Template name.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: Template name. This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props.templateName(templateName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.computenest.ServiceInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.computenest.ServiceInstance build() {
            return new com.aliyun.ros.cdk.computenest.ServiceInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
