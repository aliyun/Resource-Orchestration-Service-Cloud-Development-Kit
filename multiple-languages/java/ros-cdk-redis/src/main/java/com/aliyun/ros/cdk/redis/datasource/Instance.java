package com.aliyun.ros.cdk.redis.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::REDIS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:32.988Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.datasource.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArchitectureType() {
        return software.amazon.jsii.Kernel.get(this, "attrArchitectureType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Bandwidth: Bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Capacity: Capacity.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrCapacity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CloudType: Cloud category.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCloudType() {
        return software.amazon.jsii.Kernel.get(this, "attrCloudType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Config: Config.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ConnectionDomain: Connection domain.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreateTime: Create time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBInstanceId: Database instance id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBInstanceName: Instance name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EndTime: End time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EngineVersion: Engine version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HasRenewChangeOrder: Has renew change order.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHasRenewChangeOrder() {
        return software.amazon.jsii.Kernel.get(this, "attrHasRenewChangeOrder", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceClass: Instance class.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceReleaseProtection: Instance release protection.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceReleaseProtection() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceReleaseProtection", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceType: Instance type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IsRds: is RDS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsRds() {
        return software.amazon.jsii.Kernel.get(this, "attrIsRds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MaintainEndTime: Maintain end time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaintainEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MaintainStartTime: Maintain start time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaintainStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NetworkType: Network type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PackageType: Package type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPackageType() {
        return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: Payment type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Port: Port.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrivateIp: Private IP.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Qps: QPS.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQps() {
        return software.amazon.jsii.Kernel.get(this, "attrQps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReadOnlyCount: The number of read-only nodes.
     * <p>
     * This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReadOnlyCount() {
        return software.amazon.jsii.Kernel.get(this, "attrReadOnlyCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReplacateId: Replacate id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplacateId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplacateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecondaryZoneId: The ID of the standby zone.
     * <p>
     * You can call the [DescribeZones](~~ 94527 ~~) operation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecondaryZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecondaryZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityGroupId: Security group id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIpGroupAttribute() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityIpGroupName: Security IP group name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIpGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityIps: Security IPs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ShardCount: The number of slices.
     * <p>
     * This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrShardCount() {
        return software.amazon.jsii.Kernel.get(this, "attrShardCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: Tags.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcAuthMode: Vpc auth mode.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcAuthMode() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcAuthMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcCloudInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: Vpc id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: Vswitch id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneId: Zone id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.datasource.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
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
