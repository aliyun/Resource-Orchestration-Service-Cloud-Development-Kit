package com.aliyun.ros.cdk.computenest;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ComputeNest::ServiceInstance</code>The , which type is used to create and deploy a service instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.641Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.ServiceInstance")
public class ServiceInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.computenest.IServiceInstance {

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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrComponents() {
        return software.amazon.jsii.Kernel.get(this, "attrComponents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableInstanceOps: Whether the service instance has the O &amp; M function.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableInstanceOps() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableInstanceOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableUserPrometheus() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableUserPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IsOperated: Whether the generation O &amp; M function of the service instance is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsOperated() {
        return software.amazon.jsii.Kernel.get(this, "attrIsOperated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LicenseEndTime: License expiration time.
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
     * Attribute NetworkConfig: Network configuration information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Output: Create the output Field returned by the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutput() {
        return software.amazon.jsii.Kernel.get(this, "attrOutput", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Outputs: Create the output Field returned by the service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Parameters: The parameters entered by the deployment service instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PredefinedParameterName: Package name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPredefinedParameterName() {
        return software.amazon.jsii.Kernel.get(this, "attrPredefinedParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Progress: The deployment progress of the service instance.
     * <p>
     * Unit:%.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
        return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Service: Service details.
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
     * Attribute ServiceType: Service type.
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
     * Attribute StatusDetail: The status description of the deployment instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusDetail() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SupplierUid: Service provider AliUid.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupplierUid() {
        return software.amazon.jsii.Kernel.get(this, "attrSupplierUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: User-defined labels.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TemplateName: Template name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: Update time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: AliUid of the user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.ServiceInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.ServiceInstanceProps.class));
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
         * Property commodity: The purchase order information of the cloud market does not need to be transmitted if the service is not on the cloud market or charged by volume.
         * <p>
         * @return {@code this}
         * @param commodity Property commodity: The purchase order information of the cloud market does not need to be transmitted if the service is not on the cloud market or charged by volume. This parameter is required.
         */
        public Builder commodity(final com.aliyun.ros.cdk.core.IResolvable commodity) {
            this.props.commodity(commodity);
            return this;
        }
        /**
         * Property commodity: The purchase order information of the cloud market does not need to be transmitted if the service is not on the cloud market or charged by volume.
         * <p>
         * @return {@code this}
         * @param commodity Property commodity: The purchase order information of the cloud market does not need to be transmitted if the service is not on the cloud market or charged by volume. This parameter is required.
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
         * Property dryRun: Whether to perform PreCheck on the creation request, including permissions and instance status verification.
         * <p>
         * Possible values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: The request is sent without creating a service instance.</li>
         * <li><strong>false</strong>: Sends the request and creates a service instance after the check is passed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dryRun Property dryRun: Whether to perform PreCheck on the creation request, including permissions and instance status verification. This parameter is required.
         */
        public Builder dryRun(final java.lang.Boolean dryRun) {
            this.props.dryRun(dryRun);
            return this;
        }
        /**
         * Property dryRun: Whether to perform PreCheck on the creation request, including permissions and instance status verification.
         * <p>
         * Possible values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: The request is sent without creating a service instance.</li>
         * <li><strong>false</strong>: Sends the request and creates a service instance after the check is passed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dryRun Property dryRun: Whether to perform PreCheck on the creation request, including permissions and instance status verification. This parameter is required.
         */
        public Builder dryRun(final com.aliyun.ros.cdk.core.IResolvable dryRun) {
            this.props.dryRun(dryRun);
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
         * Property resourceAutoPay: Whether the resource is automatically deducted from the balance.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><strong>true</strong>: automatic payment.</li>
         * <li><strong>false</strong>: Do not pay automatically.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceAutoPay Property resourceAutoPay: Whether the resource is automatically deducted from the balance. This parameter is required.
         */
        public Builder resourceAutoPay(final java.lang.Boolean resourceAutoPay) {
            this.props.resourceAutoPay(resourceAutoPay);
            return this;
        }
        /**
         * Property resourceAutoPay: Whether the resource is automatically deducted from the balance.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><strong>true</strong>: automatic payment.</li>
         * <li><strong>false</strong>: Do not pay automatically.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceAutoPay Property resourceAutoPay: Whether the resource is automatically deducted from the balance. This parameter is required.
         */
        public Builder resourceAutoPay(final com.aliyun.ros.cdk.core.IResolvable resourceAutoPay) {
            this.props.resourceAutoPay(resourceAutoPay);
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
         * Property serviceInstanceName: The name of the service instance.
         * <p>
         * @return {@code this}
         * @param serviceInstanceName Property serviceInstanceName: The name of the service instance. This parameter is required.
         */
        public Builder serviceInstanceName(final java.lang.String serviceInstanceName) {
            this.props.serviceInstanceName(serviceInstanceName);
            return this;
        }
        /**
         * Property serviceInstanceName: The name of the service instance.
         * <p>
         * @return {@code this}
         * @param serviceInstanceName Property serviceInstanceName: The name of the service instance. This parameter is required.
         */
        public Builder serviceInstanceName(final com.aliyun.ros.cdk.core.IResolvable serviceInstanceName) {
            this.props.serviceInstanceName(serviceInstanceName);
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
