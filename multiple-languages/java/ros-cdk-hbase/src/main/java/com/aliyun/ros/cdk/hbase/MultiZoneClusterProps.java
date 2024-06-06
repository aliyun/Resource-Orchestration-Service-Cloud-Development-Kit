package com.aliyun.ros.cdk.hbase;

/**
 * Properties for defining a <code>MultiZoneCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:15.546Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbase.$Module.class, fqn = "@alicloud/ros-cdk-hbase.MultiZoneClusterProps")
@software.amazon.jsii.Jsii.Proxy(MultiZoneClusterProps.Jsii$Proxy.class)
public interface MultiZoneClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property arbiterVSwitchId: Arbitration virtual switch ID.
     * <p>
     * The switch must be in the availability zone corresponding to ArbiterZoneId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArbiterVSwitchId();

    /**
     * Property arbiterZoneId: Arbiter zond id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArbiterZoneId();

    /**
     * Property archVersion: Version of the deployment architecture.
     * <p>
     * Currently, only the hbaseue engine type is supported. The value can be 2.0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArchVersion();

    /**
     * Property coreDiskSize: The value ranges from 400 GB to 64,000 GB.
     * <p>
     * The step size is 40 GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreDiskSize();

    /**
     * Property coreDiskType: Core node disk type.
     * <p>
     * Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreDiskType();

    /**
     * Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreInstanceType();

    /**
     * Property coreNodeCount: Number of Core nodes.
     * <p>
     * The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreNodeCount();

    /**
     * Property engine: Service type.
     * <p>
     * Currently, only HBase enhanced version is supported. The value can be hbaseue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     * Property engineVersion: The version of the engine.
     * <p>
     * Valid values:
     * hbaseue:2.0
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     * Property logDiskSize: log disk size.
     * <p>
     * The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogDiskSize();

    /**
     * Property logDiskType: Log node disk type.
     * <p>
     * Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogDiskType();

    /**
     * Property logInstanceType: Log instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogInstanceType();

    /**
     * Property logNodeCount: Log number of nodes.
     * <p>
     * The value of log nodes ranges from 4 to 400 and is a multiple of 4.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogNodeCount();

    /**
     * Property multiZoneCombination: Availability zone combination.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMultiZoneCombination();

    /**
     * Property payType: The billing method.
     * <p>
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryVSwitchId();

    /**
     * Property primaryZoneId: Availability zone ID of the primary availability zone instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryZoneId();

    /**
     * Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStandbyVSwitchId();

    /**
     * Property standbyZoneId: Standby zone id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStandbyZoneId();

    /**
     * Property autoRenewPeriod: The auto-renewal period.
     * <p>
     * Unit: month.
     * The default value of this parameter is 0. This value indicates that auto-renewal is
     * disabled.
     * If this parameter is set to 2, the instance is automatically renewed for a two-month
     * subscription after the instance expires.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property clusterName: The name of the instance.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterName() {
        return null;
    }

    /**
     * Property masterInstanceType: The instance type of the master node.
     * <p>
     * You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterInstanceType() {
        return null;
    }

    /**
     * Property period: The subscription period.
     * <p>
     * This parameter only takes effect when the PayType parameter is set to Prepaid.
     * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
     * from 1 to 5.
     * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
     * from 1 to 9.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the subscription period.
     * <p>
     * Valid values:
     * year
     * month
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     * <p>
     * You can query the group ID in the resource group console.
     * If you leave this parameter empty, the instance is allocated to the default resource
     * group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityIpList: The IP addresses in the whitelist.
     * <p>
     * Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
     * be added to the whitelist. Separate multiple IP addresses with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC).
     * <p>
     * If you leave this parameter and the VSwitchId
     * parameter empty, the classic network type is used. The VPC network type is preferred.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MultiZoneClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MultiZoneClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MultiZoneClusterProps> {
        java.lang.Object arbiterVSwitchId;
        java.lang.Object arbiterZoneId;
        java.lang.Object archVersion;
        java.lang.Object coreDiskSize;
        java.lang.Object coreDiskType;
        java.lang.Object coreInstanceType;
        java.lang.Object coreNodeCount;
        java.lang.Object engine;
        java.lang.Object engineVersion;
        java.lang.Object logDiskSize;
        java.lang.Object logDiskType;
        java.lang.Object logInstanceType;
        java.lang.Object logNodeCount;
        java.lang.Object multiZoneCombination;
        java.lang.Object payType;
        java.lang.Object primaryVSwitchId;
        java.lang.Object primaryZoneId;
        java.lang.Object standbyVSwitchId;
        java.lang.Object standbyZoneId;
        java.lang.Object autoRenewPeriod;
        java.lang.Object clusterName;
        java.lang.Object masterInstanceType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resourceGroupId;
        java.lang.Object securityIpList;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link MultiZoneClusterProps#getArbiterVSwitchId}
         * @param arbiterVSwitchId Property arbiterVSwitchId: Arbitration virtual switch ID. This parameter is required.
         *                         The switch must be in the availability zone corresponding to ArbiterZoneId.
         * @return {@code this}
         */
        public Builder arbiterVSwitchId(java.lang.String arbiterVSwitchId) {
            this.arbiterVSwitchId = arbiterVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getArbiterVSwitchId}
         * @param arbiterVSwitchId Property arbiterVSwitchId: Arbitration virtual switch ID. This parameter is required.
         *                         The switch must be in the availability zone corresponding to ArbiterZoneId.
         * @return {@code this}
         */
        public Builder arbiterVSwitchId(com.aliyun.ros.cdk.core.IResolvable arbiterVSwitchId) {
            this.arbiterVSwitchId = arbiterVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getArbiterZoneId}
         * @param arbiterZoneId Property arbiterZoneId: Arbiter zond id. This parameter is required.
         * @return {@code this}
         */
        public Builder arbiterZoneId(java.lang.String arbiterZoneId) {
            this.arbiterZoneId = arbiterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getArbiterZoneId}
         * @param arbiterZoneId Property arbiterZoneId: Arbiter zond id. This parameter is required.
         * @return {@code this}
         */
        public Builder arbiterZoneId(com.aliyun.ros.cdk.core.IResolvable arbiterZoneId) {
            this.arbiterZoneId = arbiterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getArchVersion}
         * @param archVersion Property archVersion: Version of the deployment architecture. This parameter is required.
         *                    Currently, only the hbaseue engine type is supported. The value can be 2.0.
         * @return {@code this}
         */
        public Builder archVersion(java.lang.String archVersion) {
            this.archVersion = archVersion;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getArchVersion}
         * @param archVersion Property archVersion: Version of the deployment architecture. This parameter is required.
         *                    Currently, only the hbaseue engine type is supported. The value can be 2.0.
         * @return {@code this}
         */
        public Builder archVersion(com.aliyun.ros.cdk.core.IResolvable archVersion) {
            this.archVersion = archVersion;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getCoreDiskSize}
         * @param coreDiskSize Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. This parameter is required.
         *                     The step size is 40 GB.
         * @return {@code this}
         */
        public Builder coreDiskSize(java.lang.Number coreDiskSize) {
            this.coreDiskSize = coreDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getCoreDiskSize}
         * @param coreDiskSize Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. This parameter is required.
         *                     The step size is 40 GB.
         * @return {@code this}
         */
        public Builder coreDiskSize(com.aliyun.ros.cdk.core.IResolvable coreDiskSize) {
            this.coreDiskSize = coreDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getCoreDiskType}
         * @param coreDiskType Property coreDiskType: Core node disk type. This parameter is required.
         *                     Valid values:
         *                     cloud_efficiency
         *                     cloud_ssd
         *                     local_hdd_pro
         *                     local_ssd_pro
         * @return {@code this}
         */
        public Builder coreDiskType(java.lang.String coreDiskType) {
            this.coreDiskType = coreDiskType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getCoreDiskType}
         * @param coreDiskType Property coreDiskType: Core node disk type. This parameter is required.
         *                     Valid values:
         *                     cloud_efficiency
         *                     cloud_ssd
         *                     local_hdd_pro
         *                     local_ssd_pro
         * @return {@code this}
         */
        public Builder coreDiskType(com.aliyun.ros.cdk.core.IResolvable coreDiskType) {
            this.coreDiskType = coreDiskType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getCoreInstanceType}
         * @param coreInstanceType Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter. This parameter is required.
         * @return {@code this}
         */
        public Builder coreInstanceType(java.lang.String coreInstanceType) {
            this.coreInstanceType = coreInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getCoreInstanceType}
         * @param coreInstanceType Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter. This parameter is required.
         * @return {@code this}
         */
        public Builder coreInstanceType(com.aliyun.ros.cdk.core.IResolvable coreInstanceType) {
            this.coreInstanceType = coreInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getCoreNodeCount}
         * @param coreNodeCount Property coreNodeCount: Number of Core nodes. This parameter is required.
         *                      The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
         * @return {@code this}
         */
        public Builder coreNodeCount(java.lang.Number coreNodeCount) {
            this.coreNodeCount = coreNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getCoreNodeCount}
         * @param coreNodeCount Property coreNodeCount: Number of Core nodes. This parameter is required.
         *                      The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
         * @return {@code this}
         */
        public Builder coreNodeCount(com.aliyun.ros.cdk.core.IResolvable coreNodeCount) {
            this.coreNodeCount = coreNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getEngine}
         * @param engine Property engine: Service type. This parameter is required.
         *               Currently, only HBase enhanced version is supported. The value can be hbaseue.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getEngine}
         * @param engine Property engine: Service type. This parameter is required.
         *               Currently, only HBase enhanced version is supported. The value can be hbaseue.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the engine. This parameter is required.
         *                      Valid values:
         *                      hbaseue:2.0
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the engine. This parameter is required.
         *                      Valid values:
         *                      hbaseue:2.0
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getLogDiskSize}
         * @param logDiskSize Property logDiskSize: log disk size. This parameter is required.
         *                    The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
         * @return {@code this}
         */
        public Builder logDiskSize(java.lang.Number logDiskSize) {
            this.logDiskSize = logDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getLogDiskSize}
         * @param logDiskSize Property logDiskSize: log disk size. This parameter is required.
         *                    The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
         * @return {@code this}
         */
        public Builder logDiskSize(com.aliyun.ros.cdk.core.IResolvable logDiskSize) {
            this.logDiskSize = logDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getLogDiskType}
         * @param logDiskType Property logDiskType: Log node disk type. This parameter is required.
         *                    Valid values:
         *                    cloud_efficiency
         *                    cloud_ssd
         *                    local_hdd_pro
         *                    local_ssd_pro
         * @return {@code this}
         */
        public Builder logDiskType(java.lang.String logDiskType) {
            this.logDiskType = logDiskType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getLogDiskType}
         * @param logDiskType Property logDiskType: Log node disk type. This parameter is required.
         *                    Valid values:
         *                    cloud_efficiency
         *                    cloud_ssd
         *                    local_hdd_pro
         *                    local_ssd_pro
         * @return {@code this}
         */
        public Builder logDiskType(com.aliyun.ros.cdk.core.IResolvable logDiskType) {
            this.logDiskType = logDiskType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getLogInstanceType}
         * @param logInstanceType Property logInstanceType: Log instance type. This parameter is required.
         * @return {@code this}
         */
        public Builder logInstanceType(java.lang.String logInstanceType) {
            this.logInstanceType = logInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getLogInstanceType}
         * @param logInstanceType Property logInstanceType: Log instance type. This parameter is required.
         * @return {@code this}
         */
        public Builder logInstanceType(com.aliyun.ros.cdk.core.IResolvable logInstanceType) {
            this.logInstanceType = logInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getLogNodeCount}
         * @param logNodeCount Property logNodeCount: Log number of nodes. This parameter is required.
         *                     The value of log nodes ranges from 4 to 400 and is a multiple of 4.
         * @return {@code this}
         */
        public Builder logNodeCount(java.lang.Number logNodeCount) {
            this.logNodeCount = logNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getLogNodeCount}
         * @param logNodeCount Property logNodeCount: Log number of nodes. This parameter is required.
         *                     The value of log nodes ranges from 4 to 400 and is a multiple of 4.
         * @return {@code this}
         */
        public Builder logNodeCount(com.aliyun.ros.cdk.core.IResolvable logNodeCount) {
            this.logNodeCount = logNodeCount;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getMultiZoneCombination}
         * @param multiZoneCombination Property multiZoneCombination: Availability zone combination. This parameter is required.
         * @return {@code this}
         */
        public Builder multiZoneCombination(java.lang.String multiZoneCombination) {
            this.multiZoneCombination = multiZoneCombination;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getMultiZoneCombination}
         * @param multiZoneCombination Property multiZoneCombination: Availability zone combination. This parameter is required.
         * @return {@code this}
         */
        public Builder multiZoneCombination(com.aliyun.ros.cdk.core.IResolvable multiZoneCombination) {
            this.multiZoneCombination = multiZoneCombination;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPayType}
         * @param payType Property payType: The billing method. This parameter is required.
         *                Prepaid: The subscription billing method is used.
         *                Postpaid: The pay-as-you-go billing method is used.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPayType}
         * @param payType Property payType: The billing method. This parameter is required.
         *                Prepaid: The subscription billing method is used.
         *                Postpaid: The pay-as-you-go billing method is used.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPrimaryVSwitchId}
         * @param primaryVSwitchId Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryVSwitchId(java.lang.String primaryVSwitchId) {
            this.primaryVSwitchId = primaryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPrimaryVSwitchId}
         * @param primaryVSwitchId Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryVSwitchId(com.aliyun.ros.cdk.core.IResolvable primaryVSwitchId) {
            this.primaryVSwitchId = primaryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPrimaryZoneId}
         * @param primaryZoneId Property primaryZoneId: Availability zone ID of the primary availability zone instance. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryZoneId(java.lang.String primaryZoneId) {
            this.primaryZoneId = primaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPrimaryZoneId}
         * @param primaryZoneId Property primaryZoneId: Availability zone ID of the primary availability zone instance. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryZoneId(com.aliyun.ros.cdk.core.IResolvable primaryZoneId) {
            this.primaryZoneId = primaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getStandbyVSwitchId}
         * @param standbyVSwitchId Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId. This parameter is required.
         * @return {@code this}
         */
        public Builder standbyVSwitchId(java.lang.String standbyVSwitchId) {
            this.standbyVSwitchId = standbyVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getStandbyVSwitchId}
         * @param standbyVSwitchId Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId. This parameter is required.
         * @return {@code this}
         */
        public Builder standbyVSwitchId(com.aliyun.ros.cdk.core.IResolvable standbyVSwitchId) {
            this.standbyVSwitchId = standbyVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getStandbyZoneId}
         * @param standbyZoneId Property standbyZoneId: Standby zone id. This parameter is required.
         * @return {@code this}
         */
        public Builder standbyZoneId(java.lang.String standbyZoneId) {
            this.standbyZoneId = standbyZoneId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getStandbyZoneId}
         * @param standbyZoneId Property standbyZoneId: Standby zone id. This parameter is required.
         * @return {@code this}
         */
        public Builder standbyZoneId(com.aliyun.ros.cdk.core.IResolvable standbyZoneId) {
            this.standbyZoneId = standbyZoneId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period.
         *                        Unit: month.
         *                        The default value of this parameter is 0. This value indicates that auto-renewal is
         *                        disabled.
         *                        If this parameter is set to 2, the instance is automatically renewed for a two-month
         *                        subscription after the instance expires.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period.
         *                        Unit: month.
         *                        The default value of this parameter is 0. This value indicates that auto-renewal is
         *                        disabled.
         *                        If this parameter is set to 2, the instance is automatically renewed for a two-month
         *                        subscription after the instance expires.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getClusterName}
         * @param clusterName Property clusterName: The name of the instance.
         *                    The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         *                    (.), underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getClusterName}
         * @param clusterName Property clusterName: The name of the instance.
         *                    The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         *                    (.), underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getMasterInstanceType}
         * @param masterInstanceType Property masterInstanceType: The instance type of the master node.
         *                           You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * @return {@code this}
         */
        public Builder masterInstanceType(java.lang.String masterInstanceType) {
            this.masterInstanceType = masterInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getMasterInstanceType}
         * @param masterInstanceType Property masterInstanceType: The instance type of the master node.
         *                           You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * @return {@code this}
         */
        public Builder masterInstanceType(com.aliyun.ros.cdk.core.IResolvable masterInstanceType) {
            this.masterInstanceType = masterInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPeriod}
         * @param period Property period: The subscription period.
         *               This parameter only takes effect when the PayType parameter is set to Prepaid.
         *               When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
         *               from 1 to 5.
         *               When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
         *               from 1 to 9.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPeriod}
         * @param period Property period: The subscription period.
         *               This parameter only takes effect when the PayType parameter is set to Prepaid.
         *               When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
         *               from 1 to 5.
         *               When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
         *               from 1 to 9.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription period.
         *                   Valid values:
         *                   year
         *                   month
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription period.
         *                   Valid values:
         *                   year
         *                   month
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         *                        You can query the group ID in the resource group console.
         *                        If you leave this parameter empty, the instance is allocated to the default resource
         *                        group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         *                        You can query the group ID in the resource group console.
         *                        If you leave this parameter empty, the instance is allocated to the default resource
         *                        group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The IP addresses in the whitelist.
         *                       Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
         *                       be added to the whitelist. Separate multiple IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The IP addresses in the whitelist.
         *                       Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
         *                       be added to the whitelist. Separate multiple IP addresses with commas (,).
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC).
         *              If you leave this parameter and the VSwitchId
         *              parameter empty, the classic network type is used. The VPC network type is preferred.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link MultiZoneClusterProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC).
         *              If you leave this parameter and the VSwitchId
         *              parameter empty, the classic network type is used. The VPC network type is preferred.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MultiZoneClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MultiZoneClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MultiZoneClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MultiZoneClusterProps {
        private final java.lang.Object arbiterVSwitchId;
        private final java.lang.Object arbiterZoneId;
        private final java.lang.Object archVersion;
        private final java.lang.Object coreDiskSize;
        private final java.lang.Object coreDiskType;
        private final java.lang.Object coreInstanceType;
        private final java.lang.Object coreNodeCount;
        private final java.lang.Object engine;
        private final java.lang.Object engineVersion;
        private final java.lang.Object logDiskSize;
        private final java.lang.Object logDiskType;
        private final java.lang.Object logInstanceType;
        private final java.lang.Object logNodeCount;
        private final java.lang.Object multiZoneCombination;
        private final java.lang.Object payType;
        private final java.lang.Object primaryVSwitchId;
        private final java.lang.Object primaryZoneId;
        private final java.lang.Object standbyVSwitchId;
        private final java.lang.Object standbyZoneId;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object clusterName;
        private final java.lang.Object masterInstanceType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityIpList;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.arbiterVSwitchId = software.amazon.jsii.Kernel.get(this, "arbiterVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.arbiterZoneId = software.amazon.jsii.Kernel.get(this, "arbiterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archVersion = software.amazon.jsii.Kernel.get(this, "archVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreDiskSize = software.amazon.jsii.Kernel.get(this, "coreDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreDiskType = software.amazon.jsii.Kernel.get(this, "coreDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreInstanceType = software.amazon.jsii.Kernel.get(this, "coreInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreNodeCount = software.amazon.jsii.Kernel.get(this, "coreNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logDiskSize = software.amazon.jsii.Kernel.get(this, "logDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logDiskType = software.amazon.jsii.Kernel.get(this, "logDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logInstanceType = software.amazon.jsii.Kernel.get(this, "logInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logNodeCount = software.amazon.jsii.Kernel.get(this, "logNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiZoneCombination = software.amazon.jsii.Kernel.get(this, "multiZoneCombination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryVSwitchId = software.amazon.jsii.Kernel.get(this, "primaryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryZoneId = software.amazon.jsii.Kernel.get(this, "primaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyVSwitchId = software.amazon.jsii.Kernel.get(this, "standbyVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyZoneId = software.amazon.jsii.Kernel.get(this, "standbyZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterInstanceType = software.amazon.jsii.Kernel.get(this, "masterInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.arbiterVSwitchId = java.util.Objects.requireNonNull(builder.arbiterVSwitchId, "arbiterVSwitchId is required");
            this.arbiterZoneId = java.util.Objects.requireNonNull(builder.arbiterZoneId, "arbiterZoneId is required");
            this.archVersion = java.util.Objects.requireNonNull(builder.archVersion, "archVersion is required");
            this.coreDiskSize = java.util.Objects.requireNonNull(builder.coreDiskSize, "coreDiskSize is required");
            this.coreDiskType = java.util.Objects.requireNonNull(builder.coreDiskType, "coreDiskType is required");
            this.coreInstanceType = java.util.Objects.requireNonNull(builder.coreInstanceType, "coreInstanceType is required");
            this.coreNodeCount = java.util.Objects.requireNonNull(builder.coreNodeCount, "coreNodeCount is required");
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.logDiskSize = java.util.Objects.requireNonNull(builder.logDiskSize, "logDiskSize is required");
            this.logDiskType = java.util.Objects.requireNonNull(builder.logDiskType, "logDiskType is required");
            this.logInstanceType = java.util.Objects.requireNonNull(builder.logInstanceType, "logInstanceType is required");
            this.logNodeCount = java.util.Objects.requireNonNull(builder.logNodeCount, "logNodeCount is required");
            this.multiZoneCombination = java.util.Objects.requireNonNull(builder.multiZoneCombination, "multiZoneCombination is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.primaryVSwitchId = java.util.Objects.requireNonNull(builder.primaryVSwitchId, "primaryVSwitchId is required");
            this.primaryZoneId = java.util.Objects.requireNonNull(builder.primaryZoneId, "primaryZoneId is required");
            this.standbyVSwitchId = java.util.Objects.requireNonNull(builder.standbyVSwitchId, "standbyVSwitchId is required");
            this.standbyZoneId = java.util.Objects.requireNonNull(builder.standbyZoneId, "standbyZoneId is required");
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.clusterName = builder.clusterName;
            this.masterInstanceType = builder.masterInstanceType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityIpList = builder.securityIpList;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getArbiterVSwitchId() {
            return this.arbiterVSwitchId;
        }

        @Override
        public final java.lang.Object getArbiterZoneId() {
            return this.arbiterZoneId;
        }

        @Override
        public final java.lang.Object getArchVersion() {
            return this.archVersion;
        }

        @Override
        public final java.lang.Object getCoreDiskSize() {
            return this.coreDiskSize;
        }

        @Override
        public final java.lang.Object getCoreDiskType() {
            return this.coreDiskType;
        }

        @Override
        public final java.lang.Object getCoreInstanceType() {
            return this.coreInstanceType;
        }

        @Override
        public final java.lang.Object getCoreNodeCount() {
            return this.coreNodeCount;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getLogDiskSize() {
            return this.logDiskSize;
        }

        @Override
        public final java.lang.Object getLogDiskType() {
            return this.logDiskType;
        }

        @Override
        public final java.lang.Object getLogInstanceType() {
            return this.logInstanceType;
        }

        @Override
        public final java.lang.Object getLogNodeCount() {
            return this.logNodeCount;
        }

        @Override
        public final java.lang.Object getMultiZoneCombination() {
            return this.multiZoneCombination;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPrimaryVSwitchId() {
            return this.primaryVSwitchId;
        }

        @Override
        public final java.lang.Object getPrimaryZoneId() {
            return this.primaryZoneId;
        }

        @Override
        public final java.lang.Object getStandbyVSwitchId() {
            return this.standbyVSwitchId;
        }

        @Override
        public final java.lang.Object getStandbyZoneId() {
            return this.standbyZoneId;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getMasterInstanceType() {
            return this.masterInstanceType;
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
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("arbiterVSwitchId", om.valueToTree(this.getArbiterVSwitchId()));
            data.set("arbiterZoneId", om.valueToTree(this.getArbiterZoneId()));
            data.set("archVersion", om.valueToTree(this.getArchVersion()));
            data.set("coreDiskSize", om.valueToTree(this.getCoreDiskSize()));
            data.set("coreDiskType", om.valueToTree(this.getCoreDiskType()));
            data.set("coreInstanceType", om.valueToTree(this.getCoreInstanceType()));
            data.set("coreNodeCount", om.valueToTree(this.getCoreNodeCount()));
            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("logDiskSize", om.valueToTree(this.getLogDiskSize()));
            data.set("logDiskType", om.valueToTree(this.getLogDiskType()));
            data.set("logInstanceType", om.valueToTree(this.getLogInstanceType()));
            data.set("logNodeCount", om.valueToTree(this.getLogNodeCount()));
            data.set("multiZoneCombination", om.valueToTree(this.getMultiZoneCombination()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("primaryVSwitchId", om.valueToTree(this.getPrimaryVSwitchId()));
            data.set("primaryZoneId", om.valueToTree(this.getPrimaryZoneId()));
            data.set("standbyVSwitchId", om.valueToTree(this.getStandbyVSwitchId()));
            data.set("standbyZoneId", om.valueToTree(this.getStandbyZoneId()));
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getClusterName() != null) {
                data.set("clusterName", om.valueToTree(this.getClusterName()));
            }
            if (this.getMasterInstanceType() != null) {
                data.set("masterInstanceType", om.valueToTree(this.getMasterInstanceType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbase.MultiZoneClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MultiZoneClusterProps.Jsii$Proxy that = (MultiZoneClusterProps.Jsii$Proxy) o;

            if (!arbiterVSwitchId.equals(that.arbiterVSwitchId)) return false;
            if (!arbiterZoneId.equals(that.arbiterZoneId)) return false;
            if (!archVersion.equals(that.archVersion)) return false;
            if (!coreDiskSize.equals(that.coreDiskSize)) return false;
            if (!coreDiskType.equals(that.coreDiskType)) return false;
            if (!coreInstanceType.equals(that.coreInstanceType)) return false;
            if (!coreNodeCount.equals(that.coreNodeCount)) return false;
            if (!engine.equals(that.engine)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!logDiskSize.equals(that.logDiskSize)) return false;
            if (!logDiskType.equals(that.logDiskType)) return false;
            if (!logInstanceType.equals(that.logInstanceType)) return false;
            if (!logNodeCount.equals(that.logNodeCount)) return false;
            if (!multiZoneCombination.equals(that.multiZoneCombination)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!primaryVSwitchId.equals(that.primaryVSwitchId)) return false;
            if (!primaryZoneId.equals(that.primaryZoneId)) return false;
            if (!standbyVSwitchId.equals(that.standbyVSwitchId)) return false;
            if (!standbyZoneId.equals(that.standbyZoneId)) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.clusterName != null ? !this.clusterName.equals(that.clusterName) : that.clusterName != null) return false;
            if (this.masterInstanceType != null ? !this.masterInstanceType.equals(that.masterInstanceType) : that.masterInstanceType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.arbiterVSwitchId.hashCode();
            result = 31 * result + (this.arbiterZoneId.hashCode());
            result = 31 * result + (this.archVersion.hashCode());
            result = 31 * result + (this.coreDiskSize.hashCode());
            result = 31 * result + (this.coreDiskType.hashCode());
            result = 31 * result + (this.coreInstanceType.hashCode());
            result = 31 * result + (this.coreNodeCount.hashCode());
            result = 31 * result + (this.engine.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.logDiskSize.hashCode());
            result = 31 * result + (this.logDiskType.hashCode());
            result = 31 * result + (this.logInstanceType.hashCode());
            result = 31 * result + (this.logNodeCount.hashCode());
            result = 31 * result + (this.multiZoneCombination.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.primaryVSwitchId.hashCode());
            result = 31 * result + (this.primaryZoneId.hashCode());
            result = 31 * result + (this.standbyVSwitchId.hashCode());
            result = 31 * result + (this.standbyZoneId.hashCode());
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.clusterName != null ? this.clusterName.hashCode() : 0);
            result = 31 * result + (this.masterInstanceType != null ? this.masterInstanceType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
