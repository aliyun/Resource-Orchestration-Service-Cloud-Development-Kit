package com.aliyun.ros.cdk.redis;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::REDIS::PrepayInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:28.864Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.PrepayInstance")
public class PrepayInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.redis.IPrepayInstance {

    protected PrepayInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PrepayInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PrepayInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.PrepayInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PrepayInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.PrepayInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public PrepayInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ArchitectureType: The architecture.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitectureType() {
        return software.amazon.jsii.Kernel.get(this, "attrArchitectureType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Bandwidth: The bandwidth of the instance.
     * <p>
     * Unit: Mbit/s.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Capacity: The storage capacity of the instance.
     * <p>
     * Unit: MB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChargeType: The billing method of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicInnerConnectionPort() {
        return software.amazon.jsii.Kernel.get(this, "attrClassicInnerConnectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClassicInnerConnectionString: The classic inner connection string of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicInnerConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrClassicInnerConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnectionDomain: Connection domain of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Connections: The maximum number of connections supported by the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnections() {
        return software.amazon.jsii.Kernel.get(this, "attrConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DirectConnectionPort: The direct connection port of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDirectConnectionPort() {
        return software.amazon.jsii.Kernel.get(this, "attrDirectConnectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DirectConnectionString: The direct connection string of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDirectConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrDirectConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EngineVersion: The engine version of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasRenewChangeOrder() {
        return software.amazon.jsii.Kernel.get(this, "attrHasRenewChangeOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceClass: Redis instance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: Instance id of created redis instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceName: Name of created redis instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceType: The engine type of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkType: The network type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeType: The type of node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeType() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: Order Id of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PackageType: The plan type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType() {
        return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Port: Port of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateIp: The internal IP address of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicConnectionPort: The public connection port of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicConnectionString: The public connection string of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QPS: The queries per second (QPS) supported by the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQps() {
        return software.amazon.jsii.Kernel.get(this, "attrQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcPrivateConnectionPort() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcPrivateConnectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcPrivateConnectionString: The vpc private connection string of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcPrivateConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcPrivateConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: The ID of the zone.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.PrepayInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.PrepayInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.PrepayInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.PrepayInstance> {
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
        private com.aliyun.ros.cdk.redis.PrepayInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property autoPay: Indicates whether automatic payment is enabled.
         * <p>
         * Valid values:
         * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         * true: Automatic payment is enabled. The payment is automatically made.
         * Default is False
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Indicates whether automatic payment is enabled.
         * <p>
         * Valid values:
         * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         * true: Automatic payment is enabled. The payment is automatically made.
         * Default is False
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenewDuration: The auto-renewal period.
         * <p>
         * Valid values: 1 to 12.
         * When the instance is about to expire, the instance is automatically renewed
         * based on the number of months specified by this parameter.
         * Note This parameter is valid only when ChargeType is set to PrePaid.
         * <p>
         * @return {@code this}
         * @param autoRenewDuration Property autoRenewDuration: The auto-renewal period. This parameter is required.
         */
        public Builder autoRenewDuration(final java.lang.Number autoRenewDuration) {
            this.props().autoRenewDuration(autoRenewDuration);
            return this;
        }
        /**
         * Property autoRenewDuration: The auto-renewal period.
         * <p>
         * Valid values: 1 to 12.
         * When the instance is about to expire, the instance is automatically renewed
         * based on the number of months specified by this parameter.
         * Note This parameter is valid only when ChargeType is set to PrePaid.
         * <p>
         * @return {@code this}
         * @param autoRenewDuration Property autoRenewDuration: The auto-renewal period. This parameter is required.
         */
        public Builder autoRenewDuration(final com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
            this.props().autoRenewDuration(autoRenewDuration);
            return this;
        }

        /**
         * Property backupPolicy: Backup policy.
         * <p>
         * @return {@code this}
         * @param backupPolicy Property backupPolicy: Backup policy. This parameter is required.
         */
        public Builder backupPolicy(final com.aliyun.ros.cdk.core.IResolvable backupPolicy) {
            this.props().backupPolicy(backupPolicy);
            return this;
        }
        /**
         * Property backupPolicy: Backup policy.
         * <p>
         * @return {@code this}
         * @param backupPolicy Property backupPolicy: Backup policy. This parameter is required.
         */
        public Builder backupPolicy(final com.aliyun.ros.cdk.redis.RosPrepayInstance.BackupPolicyProperty backupPolicy) {
            this.props().backupPolicy(backupPolicy);
            return this;
        }

        /**
         * Property connections: Connection address.
         * <p>
         * @return {@code this}
         * @param connections Property connections: Connection address. This parameter is required.
         */
        public Builder connections(final com.aliyun.ros.cdk.core.IResolvable connections) {
            this.props().connections(connections);
            return this;
        }
        /**
         * Property connections: Connection address.
         * <p>
         * @return {@code this}
         * @param connections Property connections: Connection address. This parameter is required.
         */
        public Builder connections(final com.aliyun.ros.cdk.redis.RosPrepayInstance.ConnectionsProperty connections) {
            this.props().connections(connections);
            return this;
        }

        /**
         * Property deletionForce: Whether destroy instance when it is in recycle.
         * <p>
         * Default is false
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether destroy instance when it is in recycle. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props().deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether destroy instance when it is in recycle.
         * <p>
         * Default is false
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether destroy instance when it is in recycle. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props().deletionForce(deletionForce);
            return this;
        }

        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the instance.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the instance. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props().deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the instance.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the instance. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props().deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property engineVersion: Engine version.
         * <p>
         * Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Engine version. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: Engine version.
         * <p>
         * Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Engine version. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }

        /**
         * Property evictionPolicy: The eviction policy of cache data storage.
         * <p>
         * @return {@code this}
         * @param evictionPolicy Property evictionPolicy: The eviction policy of cache data storage. This parameter is required.
         */
        public Builder evictionPolicy(final java.lang.String evictionPolicy) {
            this.props().evictionPolicy(evictionPolicy);
            return this;
        }
        /**
         * Property evictionPolicy: The eviction policy of cache data storage.
         * <p>
         * @return {@code this}
         * @param evictionPolicy Property evictionPolicy: The eviction policy of cache data storage. This parameter is required.
         */
        public Builder evictionPolicy(final com.aliyun.ros.cdk.core.IResolvable evictionPolicy) {
            this.props().evictionPolicy(evictionPolicy);
            return this;
        }

        /**
         * Property instanceClass: Redis instance type.
         * <p>
         * Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: Redis instance type. This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.props().instanceClass(instanceClass);
            return this;
        }
        /**
         * Property instanceClass: Redis instance type.
         * <p>
         * Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: Redis instance type. This parameter is required.
         */
        public Builder instanceClass(final com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.props().instanceClass(instanceClass);
            return this;
        }

        /**
         * Property instanceMaintainTime: Instance maintain time.
         * <p>
         * @return {@code this}
         * @param instanceMaintainTime Property instanceMaintainTime: Instance maintain time. This parameter is required.
         */
        public Builder instanceMaintainTime(final com.aliyun.ros.cdk.core.IResolvable instanceMaintainTime) {
            this.props().instanceMaintainTime(instanceMaintainTime);
            return this;
        }
        /**
         * Property instanceMaintainTime: Instance maintain time.
         * <p>
         * @return {@code this}
         * @param instanceMaintainTime Property instanceMaintainTime: Instance maintain time. This parameter is required.
         */
        public Builder instanceMaintainTime(final com.aliyun.ros.cdk.redis.RosPrepayInstance.InstanceMaintainTimeProperty instanceMaintainTime) {
            this.props().instanceMaintainTime(instanceMaintainTime);
            return this;
        }

        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }

        /**
         * Property nodeType: The type of node.
         * <p>
         * Valid value:
         * <p>
         * <ul>
         * <li><strong>STAND_ALONE</strong></li>
         * <li><strong>MASTER_SLAVE</strong></li>
         * <li><strong>double</strong></li>
         * <li><strong>single</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param nodeType Property nodeType: The type of node. This parameter is required.
         */
        public Builder nodeType(final java.lang.String nodeType) {
            this.props().nodeType(nodeType);
            return this;
        }
        /**
         * Property nodeType: The type of node.
         * <p>
         * Valid value:
         * <p>
         * <ul>
         * <li><strong>STAND_ALONE</strong></li>
         * <li><strong>MASTER_SLAVE</strong></li>
         * <li><strong>double</strong></li>
         * <li><strong>single</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param nodeType Property nodeType: The type of node. This parameter is required.
         */
        public Builder nodeType(final com.aliyun.ros.cdk.core.IResolvable nodeType) {
            this.props().nodeType(nodeType);
            return this;
        }

        /**
         * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props().password(password);
            return this;
        }
        /**
         * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props().password(password);
            return this;
        }

        /**
         * Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props().period(period);
            return this;
        }
        /**
         * Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props().period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props().periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props().periodUnit(periodUnit);
            return this;
        }

        /**
         * Property productType: Product type.
         * <p>
         * Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
         * <p>
         * @return {@code this}
         * @param productType Property productType: Product type. This parameter is required.
         */
        public Builder productType(final java.lang.String productType) {
            this.props().productType(productType);
            return this;
        }
        /**
         * Property productType: Product type.
         * <p>
         * Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
         * <p>
         * @return {@code this}
         * @param productType Property productType: Product type. This parameter is required.
         */
        public Builder productType(final com.aliyun.ros.cdk.core.IResolvable productType) {
            this.props().productType(productType);
            return this;
        }

        /**
         * Property readOnlyCount: The number of read replicas in the primary zone.
         * <p>
         * Valid values: 1 to 9.
         * <p>
         * @return {@code this}
         * @param readOnlyCount Property readOnlyCount: The number of read replicas in the primary zone. This parameter is required.
         */
        public Builder readOnlyCount(final java.lang.Number readOnlyCount) {
            this.props().readOnlyCount(readOnlyCount);
            return this;
        }
        /**
         * Property readOnlyCount: The number of read replicas in the primary zone.
         * <p>
         * Valid values: 1 to 9.
         * <p>
         * @return {@code this}
         * @param readOnlyCount Property readOnlyCount: The number of read replicas in the primary zone. This parameter is required.
         */
        public Builder readOnlyCount(final com.aliyun.ros.cdk.core.IResolvable readOnlyCount) {
            this.props().readOnlyCount(readOnlyCount);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property secondaryZoneId: The secondary zone ID of the instance.
         * <p>
         * @return {@code this}
         * @param secondaryZoneId Property secondaryZoneId: The secondary zone ID of the instance. This parameter is required.
         */
        public Builder secondaryZoneId(final java.lang.String secondaryZoneId) {
            this.props().secondaryZoneId(secondaryZoneId);
            return this;
        }
        /**
         * Property secondaryZoneId: The secondary zone ID of the instance.
         * <p>
         * @return {@code this}
         * @param secondaryZoneId Property secondaryZoneId: The secondary zone ID of the instance. This parameter is required.
         */
        public Builder secondaryZoneId(final com.aliyun.ros.cdk.core.IResolvable secondaryZoneId) {
            this.props().secondaryZoneId(secondaryZoneId);
            return this;
        }

        /**
         * Property securityGroupId: The IDs of security groups.
         * <p>
         * Separate multiple security group IDs with commas (,) and up to 10 can be set.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The IDs of security groups. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props().securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The IDs of security groups.
         * <p>
         * Separate multiple security group IDs with commas (,) and up to 10 can be set.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The IDs of security groups. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props().securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property shardCount: The number of data nodes in the instance.
         * <p>
         * Default value: 1. Valid values:
         * 1: You can create an instance in the standard architecture that contains only a single data node.
         * For more information about the standard architecture, see Cluster master-replica instances.
         * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes.
         * For more information about the cluster architecture, see Cluster master-replica instances.
         * <p>
         * @return {@code this}
         * @param shardCount Property shardCount: The number of data nodes in the instance. This parameter is required.
         */
        public Builder shardCount(final java.lang.Number shardCount) {
            this.props().shardCount(shardCount);
            return this;
        }
        /**
         * Property shardCount: The number of data nodes in the instance.
         * <p>
         * Default value: 1. Valid values:
         * 1: You can create an instance in the standard architecture that contains only a single data node.
         * For more information about the standard architecture, see Cluster master-replica instances.
         * 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes.
         * For more information about the cluster architecture, see Cluster master-replica instances.
         * <p>
         * @return {@code this}
         * @param shardCount Property shardCount: The number of data nodes in the instance. This parameter is required.
         */
        public Builder shardCount(final com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.props().shardCount(shardCount);
            return this;
        }

        /**
         * Property sslEnabled: Modifies the SSL status.
         * <p>
         * Valid values:
         * Disable: disables SSL encryption.
         * Enable: enables SSL encryption.
         * Update: updates the SSL certificate.
         * <p>
         * @return {@code this}
         * @param sslEnabled Property sslEnabled: Modifies the SSL status. This parameter is required.
         */
        public Builder sslEnabled(final java.lang.String sslEnabled) {
            this.props().sslEnabled(sslEnabled);
            return this;
        }
        /**
         * Property sslEnabled: Modifies the SSL status.
         * <p>
         * Valid values:
         * Disable: disables SSL encryption.
         * Enable: enables SSL encryption.
         * Update: updates the SSL certificate.
         * <p>
         * @return {@code this}
         * @param sslEnabled Property sslEnabled: Modifies the SSL status. This parameter is required.
         */
        public Builder sslEnabled(final com.aliyun.ros.cdk.core.IResolvable sslEnabled) {
            this.props().sslEnabled(sslEnabled);
            return this;
        }

        /**
         * Property subscriptionDeletionForce: This option is only applicable to subscription instances.
         * <p>
         * For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
         * <p>
         * @return {@code this}
         * @param subscriptionDeletionForce Property subscriptionDeletionForce: This option is only applicable to subscription instances. This parameter is required.
         */
        public Builder subscriptionDeletionForce(final java.lang.Boolean subscriptionDeletionForce) {
            this.props().subscriptionDeletionForce(subscriptionDeletionForce);
            return this;
        }
        /**
         * Property subscriptionDeletionForce: This option is only applicable to subscription instances.
         * <p>
         * For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
         * <p>
         * @return {@code this}
         * @param subscriptionDeletionForce Property subscriptionDeletionForce: This option is only applicable to subscription instances. This parameter is required.
         */
        public Builder subscriptionDeletionForce(final com.aliyun.ros.cdk.core.IResolvable subscriptionDeletionForce) {
            this.props().subscriptionDeletionForce(subscriptionDeletionForce);
            return this;
        }

        /**
         * Property tags: Tags to attach to redis.
         * <p>
         * Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to redis. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property tairConfig: Tair config.
         * <p>
         * This parameter is available only if the InstanceClass parameter is start with tair.
         * <p>
         * @return {@code this}
         * @param tairConfig Property tairConfig: Tair config. This parameter is required.
         */
        public Builder tairConfig(final com.aliyun.ros.cdk.core.IResolvable tairConfig) {
            this.props().tairConfig(tairConfig);
            return this;
        }
        /**
         * Property tairConfig: Tair config.
         * <p>
         * This parameter is available only if the InstanceClass parameter is start with tair.
         * <p>
         * @return {@code this}
         * @param tairConfig Property tairConfig: Tair config. This parameter is required.
         */
        public Builder tairConfig(final com.aliyun.ros.cdk.redis.RosPrepayInstance.TairConfigProperty tairConfig) {
            this.props().tairConfig(tairConfig);
            return this;
        }

        /**
         * Property vpcId: The VPC id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create ecs instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create ecs instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
         * <p>
         * If set to:
         * <p>
         * <ul>
         * <li>true: enables password free.</li>
         * <li>false: disables password free.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. This parameter is required.
         */
        public Builder vpcPasswordFree(final java.lang.Boolean vpcPasswordFree) {
            this.props().vpcPasswordFree(vpcPasswordFree);
            return this;
        }
        /**
         * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
         * <p>
         * If set to:
         * <p>
         * <ul>
         * <li>true: enables password free.</li>
         * <li>false: disables password free.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. This parameter is required.
         */
        public Builder vpcPasswordFree(final com.aliyun.ros.cdk.core.IResolvable vpcPasswordFree) {
            this.props().vpcPasswordFree(vpcPasswordFree);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch Id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch Id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone id of input region.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone id of input region. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone id of input region.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone id of input region. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.PrepayInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.PrepayInstance build() {
            return new com.aliyun.ros.cdk.redis.PrepayInstance(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.redis.PrepayInstanceProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.redis.PrepayInstanceProps.Builder();
            }
            return this.props;
        }
    }
}
