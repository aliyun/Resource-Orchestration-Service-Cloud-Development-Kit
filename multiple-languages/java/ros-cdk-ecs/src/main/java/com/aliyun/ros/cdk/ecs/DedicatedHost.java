package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::DedicatedHost</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.799Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DedicatedHost")
public class DedicatedHost extends com.aliyun.ros.cdk.core.Resource {

    protected DedicatedHost(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedHost(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::DedicatedHost</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new <code>ALIYUN::ECS::DedicatedHost</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Attribute DedicatedHostIds: The host id list of created hosts.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property dedicatedHostType: The instance type of host.
         * <p>
         * @return {@code this}
         * @param dedicatedHostType Property dedicatedHostType: The instance type of host. This parameter is required.
         */
        public Builder dedicatedHostType(final java.lang.String dedicatedHostType) {
            this.props.dedicatedHostType(dedicatedHostType);
            return this;
        }
        /**
         * Property dedicatedHostType: The instance type of host.
         * <p>
         * @return {@code this}
         * @param dedicatedHostType Property dedicatedHostType: The instance type of host. This parameter is required.
         */
        public Builder dedicatedHostType(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostType) {
            this.props.dedicatedHostType(dedicatedHostType);
            return this;
        }

        /**
         * Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
         * <p>
         * @return {@code this}
         * @param actionOnMaintenance Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop. This parameter is required.
         */
        public Builder actionOnMaintenance(final java.lang.String actionOnMaintenance) {
            this.props.actionOnMaintenance(actionOnMaintenance);
            return this;
        }
        /**
         * Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
         * <p>
         * @return {@code this}
         * @param actionOnMaintenance Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop. This parameter is required.
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
         * Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time.
         * <p>
         * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * <p>
         * @return {@code this}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. This parameter is required.
         */
        public Builder autoReleaseTime(final java.lang.String autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }
        /**
         * Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time.
         * <p>
         * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * <p>
         * @return {@code this}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. This parameter is required.
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
         * Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters.
         * <p>
         * It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
         * <p>
         * @return {@code this}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. This parameter is required.
         */
        public Builder dedicatedHostName(final java.lang.String dedicatedHostName) {
            this.props.dedicatedHostName(dedicatedHostName);
            return this;
        }
        /**
         * Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters.
         * <p>
         * It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
         * <p>
         * @return {@code this}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. This parameter is required.
         */
        public Builder dedicatedHostName(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostName) {
            this.props.dedicatedHostName(dedicatedHostName);
            return this;
        }

        /**
         * Property description: The description of host.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of host. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of host.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of host. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
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
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property zoneId: The zone to create the host.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone to create the host. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone to create the host.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone to create the host. This parameter is required.
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
