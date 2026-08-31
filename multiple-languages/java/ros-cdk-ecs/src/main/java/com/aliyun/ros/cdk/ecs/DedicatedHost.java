package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::DedicatedHost</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:37:38.213Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DedicatedHost")
public class DedicatedHost extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IDedicatedHost {

    protected DedicatedHost(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedHost(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DedicatedHost(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DedicatedHostProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DedicatedHost(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DedicatedHostProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedHostIds: The host id list of created hosts.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.DedicatedHostProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.DedicatedHostProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.DedicatedHost}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.DedicatedHost> {
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
        private final com.aliyun.ros.cdk.ecs.DedicatedHostProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.DedicatedHostProps.Builder();
        }

        /**
         * Property dedicatedHostType: The dedicated host type.
         * <p>
         * You can call the <a href="">DescribeDedicatedHostTypes</a>
         * operation to query the most recent list of dedicated host types.
         * <p>
         * @return {@code this}
         * @param dedicatedHostType Property dedicatedHostType: The dedicated host type. This parameter is required.
         */
        public Builder dedicatedHostType(final java.lang.String dedicatedHostType) {
            this.props.dedicatedHostType(dedicatedHostType);
            return this;
        }
        /**
         * Property dedicatedHostType: The dedicated host type.
         * <p>
         * You can call the <a href="">DescribeDedicatedHostTypes</a>
         * operation to query the most recent list of dedicated host types.
         * <p>
         * @return {@code this}
         * @param dedicatedHostType Property dedicatedHostType: The dedicated host type. This parameter is required.
         */
        public Builder dedicatedHostType(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostType) {
            this.props.dedicatedHostType(dedicatedHostType);
            return this;
        }

        /**
         * Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Migrate: The instances are migrated to another physical machine and then
         * restarted.
         * If cloud disks are attached to the dedicated host, the default value is Migrate.</li>
         * <li>Stop: The instances are stopped. If the dedicated host cannot be repaired, the
         * instances are migrated to another physical machine and then restarted.
         * If local disks are attached to the dedicated host, the default value is Stop.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param actionOnMaintenance Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online. This parameter is required.
         */
        public Builder actionOnMaintenance(final java.lang.String actionOnMaintenance) {
            this.props.actionOnMaintenance(actionOnMaintenance);
            return this;
        }
        /**
         * Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Migrate: The instances are migrated to another physical machine and then
         * restarted.
         * If cloud disks are attached to the dedicated host, the default value is Migrate.</li>
         * <li>Stop: The instances are stopped. If the dedicated host cannot be repaired, the
         * instances are migrated to another physical machine and then restarted.
         * If local disks are attached to the dedicated host, the default value is Stop.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param actionOnMaintenance Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online. This parameter is required.
         */
        public Builder actionOnMaintenance(final com.aliyun.ros.cdk.core.IResolvable actionOnMaintenance) {
            this.props.actionOnMaintenance(actionOnMaintenance);
            return this;
        }

        /**
         * Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.
         * <p>
         * If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
         * <p>
         * @return {@code this}
         * @param autoPlacement Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. This parameter is required.
         */
        public Builder autoPlacement(final java.lang.String autoPlacement) {
            this.props.autoPlacement(autoPlacement);
            return this;
        }
        /**
         * Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.
         * <p>
         * If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
         * <p>
         * @return {@code this}
         * @param autoPlacement Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. This parameter is required.
         */
        public Builder autoPlacement(final com.aliyun.ros.cdk.core.IResolvable autoPlacement) {
            this.props.autoPlacement(autoPlacement);
            return this;
        }

        /**
         * Property autoReleaseTime: The time when to automatically release the dedicated host.
         * <p>
         * Specify the time in
         * the <code>ISO 8601</code> standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in
         * UTC.
         * <p>
         * <blockquote></blockquote>
         * <p>
         * <ul>
         * <li>It must be at least half an hour later than the current time.</li>
         * <li>It must be at most three years later than the current time.</li>
         * <li>If the value of seconds (ss) is not 00, it is automatically set to 00.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoReleaseTime Property autoReleaseTime: The time when to automatically release the dedicated host. This parameter is required.
         */
        public Builder autoReleaseTime(final java.lang.String autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }
        /**
         * Property autoReleaseTime: The time when to automatically release the dedicated host.
         * <p>
         * Specify the time in
         * the <code>ISO 8601</code> standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in
         * UTC.
         * <p>
         * <blockquote></blockquote>
         * <p>
         * <ul>
         * <li>It must be at least half an hour later than the current time.</li>
         * <li>It must be at most three years later than the current time.</li>
         * <li>If the value of seconds (ss) is not 00, it is automatically set to 00.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoReleaseTime Property autoReleaseTime: The time when to automatically release the dedicated host. This parameter is required.
         */
        public Builder autoReleaseTime(final com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }

        /**
         * Property autoRenew: Whether renew the fee automatically?
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?. This parameter is required.
         */
        public Builder autoRenew(final java.lang.String autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether renew the fee automatically?
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: The time period of auto renew.
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: The time period of auto renew.
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         * <p>
         * If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         * <p>
         * If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property cpuOverCommitRatio: The CPU overcommit ratio.
         * <p>
         * You can configure CPU overcommit ratios only for the
         * following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
         * The CPU overcommit ratio affects the number of available vCPUs on a dedicated
         * host. You can use the following formula to calculate the number of available
         * vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU
         * cores * 2 * CPU overcommit ratio. For example, the number of physical CPU cores
         * on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s
         * dedicated host to 4, the number of available vCPUs on the dedicated host is 416.
         * For scenarios that have minimal requirements on CPU stability or where CPU load
         * is not heavy, such as development and test environments, you can increase the
         * number of available vCPUs on a dedicated host by increasing the CPU overcommit
         * ratio. This way, you can deploy more ECS instances of the same specifications on
         * the dedicated host and reduce the unit deployment cost.
         * <p>
         * @return {@code this}
         * @param cpuOverCommitRatio Property cpuOverCommitRatio: The CPU overcommit ratio. This parameter is required.
         */
        public Builder cpuOverCommitRatio(final java.lang.Number cpuOverCommitRatio) {
            this.props.cpuOverCommitRatio(cpuOverCommitRatio);
            return this;
        }
        /**
         * Property cpuOverCommitRatio: The CPU overcommit ratio.
         * <p>
         * You can configure CPU overcommit ratios only for the
         * following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
         * The CPU overcommit ratio affects the number of available vCPUs on a dedicated
         * host. You can use the following formula to calculate the number of available
         * vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU
         * cores * 2 * CPU overcommit ratio. For example, the number of physical CPU cores
         * on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s
         * dedicated host to 4, the number of available vCPUs on the dedicated host is 416.
         * For scenarios that have minimal requirements on CPU stability or where CPU load
         * is not heavy, such as development and test environments, you can increase the
         * number of available vCPUs on a dedicated host by increasing the CPU overcommit
         * ratio. This way, you can deploy more ECS instances of the same specifications on
         * the dedicated host and reduce the unit deployment cost.
         * <p>
         * @return {@code this}
         * @param cpuOverCommitRatio Property cpuOverCommitRatio: The CPU overcommit ratio. This parameter is required.
         */
        public Builder cpuOverCommitRatio(final com.aliyun.ros.cdk.core.IResolvable cpuOverCommitRatio) {
            this.props.cpuOverCommitRatio(cpuOverCommitRatio);
            return this;
        }

        /**
         * Property dedicatedHostClusterId: The ID of the dedicated host cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostClusterId Property dedicatedHostClusterId: The ID of the dedicated host cluster. This parameter is required.
         */
        public Builder dedicatedHostClusterId(final java.lang.String dedicatedHostClusterId) {
            this.props.dedicatedHostClusterId(dedicatedHostClusterId);
            return this;
        }
        /**
         * Property dedicatedHostClusterId: The ID of the dedicated host cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostClusterId Property dedicatedHostClusterId: The ID of the dedicated host cluster. This parameter is required.
         */
        public Builder dedicatedHostClusterId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostClusterId) {
            this.props.dedicatedHostClusterId(dedicatedHostClusterId);
            return this;
        }

        /**
         * Property dedicatedHostName: The name of the dedicated host.
         * <p>
         * The name must be 2 to 128 characters in length
         * and can contain letters and digits. The name can contain colons (:), underscores
         * (_), periods (.), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host. This parameter is required.
         */
        public Builder dedicatedHostName(final java.lang.String dedicatedHostName) {
            this.props.dedicatedHostName(dedicatedHostName);
            return this;
        }
        /**
         * Property dedicatedHostName: The name of the dedicated host.
         * <p>
         * The name must be 2 to 128 characters in length
         * and can contain letters and digits. The name can contain colons (:), underscores
         * (_), periods (.), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host. This parameter is required.
         */
        public Builder dedicatedHostName(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostName) {
            this.props.dedicatedHostName(dedicatedHostName);
            return this;
        }

        /**
         * Property description: The description of the dedicated host.
         * <p>
         * The description must be 2 to 256
         * characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the dedicated host. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the dedicated host.
         * <p>
         * The description must be 2 to 256
         * characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the dedicated host. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property minQuantity: The minimum number of dedicated hosts to create.
         * <p>
         * Valid values: 1 to 100.
         * <p>
         * <blockquote>
         * <p>
         * If the number of available dedicated hosts is less than the minimum number of
         * dedicated hosts to create, the dedicated hosts fail to be created.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param minQuantity Property minQuantity: The minimum number of dedicated hosts to create. This parameter is required.
         */
        public Builder minQuantity(final java.lang.Number minQuantity) {
            this.props.minQuantity(minQuantity);
            return this;
        }
        /**
         * Property minQuantity: The minimum number of dedicated hosts to create.
         * <p>
         * Valid values: 1 to 100.
         * <p>
         * <blockquote>
         * <p>
         * If the number of available dedicated hosts is less than the minimum number of
         * dedicated hosts to create, the dedicated hosts fail to be created.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param minQuantity Property minQuantity: The minimum number of dedicated hosts to create. This parameter is required.
         */
        public Builder minQuantity(final com.aliyun.ros.cdk.core.IResolvable minQuantity) {
            this.props.minQuantity(minQuantity);
            return this;
        }

        /**
         * Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host.
         * <p>
         * Unit: seconds. Valid values: 15 to 310.
         * <p>
         * @return {@code this}
         * @param networkAttributesSlbUdpTimeout Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. This parameter is required.
         */
        public Builder networkAttributesSlbUdpTimeout(final java.lang.Number networkAttributesSlbUdpTimeout) {
            this.props.networkAttributesSlbUdpTimeout(networkAttributesSlbUdpTimeout);
            return this;
        }
        /**
         * Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host.
         * <p>
         * Unit: seconds. Valid values: 15 to 310.
         * <p>
         * @return {@code this}
         * @param networkAttributesSlbUdpTimeout Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. This parameter is required.
         */
        public Builder networkAttributesSlbUdpTimeout(final com.aliyun.ros.cdk.core.IResolvable networkAttributesSlbUdpTimeout) {
            this.props.networkAttributesSlbUdpTimeout(networkAttributesSlbUdpTimeout);
            return this;
        }

        /**
         * Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host.
         * <p>
         * Unit: seconds. Valid values: 15 to 310.
         * <p>
         * @return {@code this}
         * @param networkAttributesUdpTimeout Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. This parameter is required.
         */
        public Builder networkAttributesUdpTimeout(final java.lang.Number networkAttributesUdpTimeout) {
            this.props.networkAttributesUdpTimeout(networkAttributesUdpTimeout);
            return this;
        }
        /**
         * Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host.
         * <p>
         * Unit: seconds. Valid values: 15 to 310.
         * <p>
         * @return {@code this}
         * @param networkAttributesUdpTimeout Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. This parameter is required.
         */
        public Builder networkAttributesUdpTimeout(final com.aliyun.ros.cdk.core.IResolvable networkAttributesUdpTimeout) {
            this.props.networkAttributesUdpTimeout(networkAttributesUdpTimeout);
            return this;
        }

        /**
         * Property period: Prepaid time period.
         * <p>
         * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Prepaid time period.
         * <p>
         * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         * <p>
         * Default value is Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         * <p>
         * Default value is Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property quantity: The number of dedicated hosts that you want to create.
         * <p>
         * Valid values: 1 to 100.Default value: 1.
         * <p>
         * @return {@code this}
         * @param quantity Property quantity: The number of dedicated hosts that you want to create. This parameter is required.
         */
        public Builder quantity(final java.lang.Number quantity) {
            this.props.quantity(quantity);
            return this;
        }
        /**
         * Property quantity: The number of dedicated hosts that you want to create.
         * <p>
         * Valid values: 1 to 100.Default value: 1.
         * <p>
         * @return {@code this}
         * @param quantity Property quantity: The number of dedicated hosts that you want to create. This parameter is required.
         */
        public Builder quantity(final com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.props.quantity(quantity);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to DedicatedHost.
         * <p>
         * Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to DedicatedHost. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone in which to create the dedicated host.
         * <p>
         * This parameter is empty by default. If you do not specify a zone, the system
         * selects a zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which to create the dedicated host. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone in which to create the dedicated host.
         * <p>
         * This parameter is empty by default. If you do not specify a zone, the system
         * selects a zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which to create the dedicated host. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.DedicatedHost}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.DedicatedHost build() {
            return new com.aliyun.ros.cdk.ecs.DedicatedHost(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
