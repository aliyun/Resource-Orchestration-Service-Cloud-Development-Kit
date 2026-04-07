package com.aliyun.ros.cdk.swas.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::SWAS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.473Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.swas.$Module.class, fqn = "@alicloud/ros-cdk-swas.datasource.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.swas.datasource.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.datasource.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.datasource.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BusinessStatus: The business status of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChargeType: The billing method of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Combination: Indicates whether the instance is a combination instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCombination() {
        return software.amazon.jsii.Kernel.get(this, "attrCombination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreationTime: The creation time of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DdosStatus: The anti-DDoS status of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDdosStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrDdosStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DisableReason: The reason why the instance is disabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableReason() {
        return software.amazon.jsii.Kernel.get(this, "attrDisableReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Disks: The disks of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisks() {
        return software.amazon.jsii.Kernel.get(this, "attrDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpiredTime: The expiration time of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Image: The image information of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
        return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageId: The ID of the image used by the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InnerIpAddress: The private IP address of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceName: The name of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkAttributes: The network attributes of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAttributes() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PlanId: The plan ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanId() {
        return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PlanType: The plan type of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanType() {
        return software.amazon.jsii.Kernel.get(this, "attrPlanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicIpAddress: The public IP address of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RegionId: The ID of the region where the instance is deployed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceSpec: The resource specification of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Status: The status of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Uuid: The unique identifier of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.datasource.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.swas.datasource.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.swas.datasource.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.swas.datasource.Instance> {
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
        private final com.aliyun.ros.cdk.swas.datasource.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.swas.datasource.InstanceProps.Builder();
        }

        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.swas.datasource.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.swas.datasource.Instance build() {
            return new com.aliyun.ros.cdk.swas.datasource.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
