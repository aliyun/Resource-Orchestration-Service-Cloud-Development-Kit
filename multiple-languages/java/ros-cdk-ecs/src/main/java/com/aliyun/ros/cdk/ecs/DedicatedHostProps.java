package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>DedicatedHost</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:06.100Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DedicatedHostProps")
@software.amazon.jsii.Jsii.Proxy(DedicatedHostProps.Jsii$Proxy.class)
public interface DedicatedHostProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dedicatedHostType: The instance type of host.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDedicatedHostType();

    /**
     * Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActionOnMaintenance() {
        return null;
    }

    /**
     * Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.
     * <p>
     * If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPlacement() {
        return null;
    }

    /**
     * Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time.
     * <p>
     * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoReleaseTime() {
        return null;
    }

    /**
     * Property autoRenew: Whether renew the fee automatically?
     * <p>
     * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: The time period of auto renew.
     * <p>
     * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
     * <p>
     * If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters.
     * <p>
     * It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostName() {
        return null;
    }

    /**
     * Property description: The description of host.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host.
     * <p>
     * Unit: seconds. Valid values: 15 to 310.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAttributesSlbUdpTimeout() {
        return null;
    }

    /**
     * Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host.
     * <p>
     * Unit: seconds. Valid values: 15 to 310.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAttributesUdpTimeout() {
        return null;
    }

    /**
     * Property period: Prepaid time period.
     * <p>
     * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
     * <p>
     * Default value is Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property quantity: The number of dedicated hosts that you want to create.
     * <p>
     * Valid values: 1 to 100.Default value: 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuantity() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to DedicatedHost.
     * <p>
     * Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property zoneId: The zone to create the host.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DedicatedHostProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DedicatedHostProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DedicatedHostProps> {
        java.lang.Object dedicatedHostType;
        java.lang.Object actionOnMaintenance;
        java.lang.Object autoPlacement;
        java.lang.Object autoReleaseTime;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object chargeType;
        java.lang.Object dedicatedHostName;
        java.lang.Object description;
        java.lang.Object networkAttributesSlbUdpTimeout;
        java.lang.Object networkAttributesUdpTimeout;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object quantity;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> tags;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link DedicatedHostProps#getDedicatedHostType}
         * @param dedicatedHostType Property dedicatedHostType: The instance type of host. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostType(java.lang.String dedicatedHostType) {
            this.dedicatedHostType = dedicatedHostType;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getDedicatedHostType}
         * @param dedicatedHostType Property dedicatedHostType: The instance type of host. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostType(com.aliyun.ros.cdk.core.IResolvable dedicatedHostType) {
            this.dedicatedHostType = dedicatedHostType;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getActionOnMaintenance}
         * @param actionOnMaintenance Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
         * @return {@code this}
         */
        public Builder actionOnMaintenance(java.lang.String actionOnMaintenance) {
            this.actionOnMaintenance = actionOnMaintenance;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getActionOnMaintenance}
         * @param actionOnMaintenance Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
         * @return {@code this}
         */
        public Builder actionOnMaintenance(com.aliyun.ros.cdk.core.IResolvable actionOnMaintenance) {
            this.actionOnMaintenance = actionOnMaintenance;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoPlacement}
         * @param autoPlacement Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.
         *                      If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
         * @return {@code this}
         */
        public Builder autoPlacement(java.lang.String autoPlacement) {
            this.autoPlacement = autoPlacement;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoPlacement}
         * @param autoPlacement Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.
         *                      If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
         * @return {@code this}
         */
        public Builder autoPlacement(com.aliyun.ros.cdk.core.IResolvable autoPlacement) {
            this.autoPlacement = autoPlacement;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoReleaseTime}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time.
         *                        format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * @return {@code this}
         */
        public Builder autoReleaseTime(java.lang.String autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoReleaseTime}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time.
         *                        format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * @return {@code this}
         */
        public Builder autoReleaseTime(com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?.
         *                  When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?.
         *                  When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getChargeType}
         * @param chargeType Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         *                   If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getChargeType}
         * @param chargeType Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         *                   If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getDedicatedHostName}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters.
         *                          It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
         * @return {@code this}
         */
        public Builder dedicatedHostName(java.lang.String dedicatedHostName) {
            this.dedicatedHostName = dedicatedHostName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getDedicatedHostName}
         * @param dedicatedHostName Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters.
         *                          It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
         * @return {@code this}
         */
        public Builder dedicatedHostName(com.aliyun.ros.cdk.core.IResolvable dedicatedHostName) {
            this.dedicatedHostName = dedicatedHostName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getDescription}
         * @param description Property description: The description of host.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getDescription}
         * @param description Property description: The description of host.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getNetworkAttributesSlbUdpTimeout}
         * @param networkAttributesSlbUdpTimeout Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host.
         *                                       Unit: seconds. Valid values: 15 to 310.
         * @return {@code this}
         */
        public Builder networkAttributesSlbUdpTimeout(java.lang.Number networkAttributesSlbUdpTimeout) {
            this.networkAttributesSlbUdpTimeout = networkAttributesSlbUdpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getNetworkAttributesSlbUdpTimeout}
         * @param networkAttributesSlbUdpTimeout Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host.
         *                                       Unit: seconds. Valid values: 15 to 310.
         * @return {@code this}
         */
        public Builder networkAttributesSlbUdpTimeout(com.aliyun.ros.cdk.core.IResolvable networkAttributesSlbUdpTimeout) {
            this.networkAttributesSlbUdpTimeout = networkAttributesSlbUdpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getNetworkAttributesUdpTimeout}
         * @param networkAttributesUdpTimeout Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host.
         *                                    Unit: seconds. Valid values: 15 to 310.
         * @return {@code this}
         */
        public Builder networkAttributesUdpTimeout(java.lang.Number networkAttributesUdpTimeout) {
            this.networkAttributesUdpTimeout = networkAttributesUdpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getNetworkAttributesUdpTimeout}
         * @param networkAttributesUdpTimeout Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host.
         *                                    Unit: seconds. Valid values: 15 to 310.
         * @return {@code this}
         */
        public Builder networkAttributesUdpTimeout(com.aliyun.ros.cdk.core.IResolvable networkAttributesUdpTimeout) {
            this.networkAttributesUdpTimeout = networkAttributesUdpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getQuantity}
         * @param quantity Property quantity: The number of dedicated hosts that you want to create.
         *                 Valid values: 1 to 100.Default value: 1.
         * @return {@code this}
         */
        public Builder quantity(java.lang.Number quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getQuantity}
         * @param quantity Property quantity: The number of dedicated hosts that you want to create.
         *                 Valid values: 1 to 100.Default value: 1.
         * @return {@code this}
         */
        public Builder quantity(com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getTags}
         * @param tags Property tags: Tags to attach to DedicatedHost.
         *             Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getZoneId}
         * @param zoneId Property zoneId: The zone to create the host.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedHostProps#getZoneId}
         * @param zoneId Property zoneId: The zone to create the host.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DedicatedHostProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DedicatedHostProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DedicatedHostProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DedicatedHostProps {
        private final java.lang.Object dedicatedHostType;
        private final java.lang.Object actionOnMaintenance;
        private final java.lang.Object autoPlacement;
        private final java.lang.Object autoReleaseTime;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object chargeType;
        private final java.lang.Object dedicatedHostName;
        private final java.lang.Object description;
        private final java.lang.Object networkAttributesSlbUdpTimeout;
        private final java.lang.Object networkAttributesUdpTimeout;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object quantity;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> tags;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostType = software.amazon.jsii.Kernel.get(this, "dedicatedHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.actionOnMaintenance = software.amazon.jsii.Kernel.get(this, "actionOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPlacement = software.amazon.jsii.Kernel.get(this, "autoPlacement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoReleaseTime = software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostName = software.amazon.jsii.Kernel.get(this, "dedicatedHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkAttributesSlbUdpTimeout = software.amazon.jsii.Kernel.get(this, "networkAttributesSlbUdpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkAttributesUdpTimeout = software.amazon.jsii.Kernel.get(this, "networkAttributesUdpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quantity = software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty.class)));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostType = java.util.Objects.requireNonNull(builder.dedicatedHostType, "dedicatedHostType is required");
            this.actionOnMaintenance = builder.actionOnMaintenance;
            this.autoPlacement = builder.autoPlacement;
            this.autoReleaseTime = builder.autoReleaseTime;
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.chargeType = builder.chargeType;
            this.dedicatedHostName = builder.dedicatedHostName;
            this.description = builder.description;
            this.networkAttributesSlbUdpTimeout = builder.networkAttributesSlbUdpTimeout;
            this.networkAttributesUdpTimeout = builder.networkAttributesUdpTimeout;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.quantity = builder.quantity;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty>)builder.tags;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDedicatedHostType() {
            return this.dedicatedHostType;
        }

        @Override
        public final java.lang.Object getActionOnMaintenance() {
            return this.actionOnMaintenance;
        }

        @Override
        public final java.lang.Object getAutoPlacement() {
            return this.autoPlacement;
        }

        @Override
        public final java.lang.Object getAutoReleaseTime() {
            return this.autoReleaseTime;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDedicatedHostName() {
            return this.dedicatedHostName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getNetworkAttributesSlbUdpTimeout() {
            return this.networkAttributesSlbUdpTimeout;
        }

        @Override
        public final java.lang.Object getNetworkAttributesUdpTimeout() {
            return this.networkAttributesUdpTimeout;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getQuantity() {
            return this.quantity;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dedicatedHostType", om.valueToTree(this.getDedicatedHostType()));
            if (this.getActionOnMaintenance() != null) {
                data.set("actionOnMaintenance", om.valueToTree(this.getActionOnMaintenance()));
            }
            if (this.getAutoPlacement() != null) {
                data.set("autoPlacement", om.valueToTree(this.getAutoPlacement()));
            }
            if (this.getAutoReleaseTime() != null) {
                data.set("autoReleaseTime", om.valueToTree(this.getAutoReleaseTime()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDedicatedHostName() != null) {
                data.set("dedicatedHostName", om.valueToTree(this.getDedicatedHostName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getNetworkAttributesSlbUdpTimeout() != null) {
                data.set("networkAttributesSlbUdpTimeout", om.valueToTree(this.getNetworkAttributesSlbUdpTimeout()));
            }
            if (this.getNetworkAttributesUdpTimeout() != null) {
                data.set("networkAttributesUdpTimeout", om.valueToTree(this.getNetworkAttributesUdpTimeout()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getQuantity() != null) {
                data.set("quantity", om.valueToTree(this.getQuantity()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.DedicatedHostProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DedicatedHostProps.Jsii$Proxy that = (DedicatedHostProps.Jsii$Proxy) o;

            if (!dedicatedHostType.equals(that.dedicatedHostType)) return false;
            if (this.actionOnMaintenance != null ? !this.actionOnMaintenance.equals(that.actionOnMaintenance) : that.actionOnMaintenance != null) return false;
            if (this.autoPlacement != null ? !this.autoPlacement.equals(that.autoPlacement) : that.autoPlacement != null) return false;
            if (this.autoReleaseTime != null ? !this.autoReleaseTime.equals(that.autoReleaseTime) : that.autoReleaseTime != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.dedicatedHostName != null ? !this.dedicatedHostName.equals(that.dedicatedHostName) : that.dedicatedHostName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.networkAttributesSlbUdpTimeout != null ? !this.networkAttributesSlbUdpTimeout.equals(that.networkAttributesSlbUdpTimeout) : that.networkAttributesSlbUdpTimeout != null) return false;
            if (this.networkAttributesUdpTimeout != null ? !this.networkAttributesUdpTimeout.equals(that.networkAttributesUdpTimeout) : that.networkAttributesUdpTimeout != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.quantity != null ? !this.quantity.equals(that.quantity) : that.quantity != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostType.hashCode();
            result = 31 * result + (this.actionOnMaintenance != null ? this.actionOnMaintenance.hashCode() : 0);
            result = 31 * result + (this.autoPlacement != null ? this.autoPlacement.hashCode() : 0);
            result = 31 * result + (this.autoReleaseTime != null ? this.autoReleaseTime.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostName != null ? this.dedicatedHostName.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.networkAttributesSlbUdpTimeout != null ? this.networkAttributesSlbUdpTimeout.hashCode() : 0);
            result = 31 * result + (this.networkAttributesUdpTimeout != null ? this.networkAttributesUdpTimeout.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.quantity != null ? this.quantity.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
