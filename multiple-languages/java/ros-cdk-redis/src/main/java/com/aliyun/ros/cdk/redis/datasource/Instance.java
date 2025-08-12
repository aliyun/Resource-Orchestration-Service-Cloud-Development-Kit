package com.aliyun.ros.cdk.redis.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::REDIS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.100Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.datasource.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.redis.datasource.IInstance {

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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ArchitectureType: Architecture type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitectureType() {
        return software.amazon.jsii.Kernel.get(this, "attrArchitectureType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Bandwidth: Bandwidth.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Capacity: Capacity.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CloudType: Cloud category.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCloudType() {
        return software.amazon.jsii.Kernel.get(this, "attrCloudType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Config: Config.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnectionDomain: Connection domain.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Create time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceId: Database instance id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceName: Instance name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndTime: End time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EngineVersion: Engine version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HasRenewChangeOrder: Has renew change order.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasRenewChangeOrder() {
        return software.amazon.jsii.Kernel.get(this, "attrHasRenewChangeOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceClass: Instance class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceReleaseProtection: Instance release protection.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceReleaseProtection() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceReleaseProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceType: Instance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IsRds: is RDS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsRds() {
        return software.amazon.jsii.Kernel.get(this, "attrIsRds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintainEndTime: Maintain end time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintainStartTime: Maintain start time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkType: Network type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PackageType: Package type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType() {
        return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: Payment type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Port: Port.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateIp: Private IP.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Qps: QPS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQps() {
        return software.amazon.jsii.Kernel.get(this, "attrQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReadOnlyCount: The number of read-only nodes.
     * <p>
     * This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyCount() {
        return software.amazon.jsii.Kernel.get(this, "attrReadOnlyCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReplacateId: Replacate id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplacateId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplacateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecondaryZoneId: The ID of the standby zone.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityGroupId: Security group id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupAttribute() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIpGroupName: Security IP group name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIps: Security IPs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ShardCount: The number of slices.
     * <p>
     * This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrShardCount() {
        return software.amazon.jsii.Kernel.get(this, "attrShardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: Tags.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcAuthMode: Vpc auth mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAuthMode() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcAuthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: Vpc id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: Vswitch id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: Zone id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.datasource.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.datasource.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.datasource.Instance> {
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
        private final com.aliyun.ros.cdk.redis.datasource.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.redis.datasource.InstanceProps.Builder();
        }

        /**
         * Property dbInstanceId: Database instance id.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Database instance id. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: Database instance id.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Database instance id. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.datasource.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.datasource.Instance build() {
            return new com.aliyun.ros.cdk.redis.datasource.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
