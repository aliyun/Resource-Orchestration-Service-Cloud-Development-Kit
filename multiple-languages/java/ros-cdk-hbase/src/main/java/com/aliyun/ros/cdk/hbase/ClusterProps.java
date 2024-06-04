package com.aliyun.ros.cdk.hbase;

/**
 * Properties for defining a <code>Cluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:55.837Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbase.$Module.class, fqn = "@alicloud/ros-cdk-hbase.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCoreInstanceType();

    /**
     * Property engine: The type of the service.
     * <p>
     * Valid values:
     * hbase
     * hbaseue
     * bds
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     * Property engineVersion: The version of the engine.
     * <p>
     * Valid values:
     * hbase:1.1, 2.0
     * hbaseue:2.0
     * bds:1.0
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     * Property nodeCount: The number of nodes.
     * <p>
     * Valid values: 1 to 100.
     * ApsaraDB for HBase in single-node mode: one node
     * ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
     * ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
     * nodes
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeCount();

    /**
     * Property payType: The billing method.
     * <p>
     * Prepaid: The subscription billing method is used.
     * Postpaid: The pay-as-you-go billing method is used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property zoneId: The ID of the zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

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
     * Property coldStorageSize: The size of cold data storage.
     * <p>
     * If this parameter is set to 0, cold data storage is disabled.
     * If this parameter is set to a value greater than 0, cold data storage is enabled.
     * The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColdStorageSize() {
        return null;
    }

    /**
     * Property diskSize: The disk size of the node.
     * <p>
     * Unit: GB.
     * For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
     * GB and the step size is 1 GB.
     * For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
     * from 400 GB to 64,000 GB and the step size is 40 GB.
     * For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
     * varies by instance type. The following list provides the mappings between disks sizes
     * and instance types:
     * hbase.d1.4xlarge =44000
     * hbase.d1.6xlarge =66000
     * hbase.d1.8xlarge =88000
     * hbase.i2.xlarge =894
     * hbase.i2.2xlarge =1788
     * hbase.i2.4xlarge =3576
     * hbase.i2.8xlarge =7152
     * hbase.d2s.5xlarge =58400
     * hbase.d2s.10xlarge =109500
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
        return null;
    }

    /**
     * Property diskType: The type of the disk.
     * <p>
     * Valid values:
     * cloud_efficiency
     * cloud_ssd
     * local_hdd_pro
     * local_ssd_pro
     * cloud_essd_pl1
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskType() {
        return null;
    }

    /**
     * Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
     * <p>
     * It shows that the current cloud disk version is unable to close after the encryption is turned on.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKey() {
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
     * Property vSwitchId: The ID of the vSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterProps> {
        java.lang.Object coreInstanceType;
        java.lang.Object engine;
        java.lang.Object engineVersion;
        java.lang.Object nodeCount;
        java.lang.Object payType;
        java.lang.Object zoneId;
        java.lang.Object autoRenewPeriod;
        java.lang.Object clusterName;
        java.lang.Object coldStorageSize;
        java.lang.Object diskSize;
        java.lang.Object diskType;
        java.lang.Object encryptionKey;
        java.lang.Object masterInstanceType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resourceGroupId;
        java.lang.Object securityIpList;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link ClusterProps#getCoreInstanceType}
         * @param coreInstanceType Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter. This parameter is required.
         * @return {@code this}
         */
        public Builder coreInstanceType(java.lang.String coreInstanceType) {
            this.coreInstanceType = coreInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getCoreInstanceType}
         * @param coreInstanceType Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter. This parameter is required.
         * @return {@code this}
         */
        public Builder coreInstanceType(com.aliyun.ros.cdk.core.IResolvable coreInstanceType) {
            this.coreInstanceType = coreInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEngine}
         * @param engine Property engine: The type of the service. This parameter is required.
         *               Valid values:
         *               hbase
         *               hbaseue
         *               bds
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEngine}
         * @param engine Property engine: The type of the service. This parameter is required.
         *               Valid values:
         *               hbase
         *               hbaseue
         *               bds
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the engine. This parameter is required.
         *                      Valid values:
         *                      hbase:1.1, 2.0
         *                      hbaseue:2.0
         *                      bds:1.0
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the engine. This parameter is required.
         *                      Valid values:
         *                      hbase:1.1, 2.0
         *                      hbaseue:2.0
         *                      bds:1.0
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNodeCount}
         * @param nodeCount Property nodeCount: The number of nodes. This parameter is required.
         *                  Valid values: 1 to 100.
         *                  ApsaraDB for HBase in single-node mode: one node
         *                  ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
         *                  ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
         *                  nodes
         * @return {@code this}
         */
        public Builder nodeCount(java.lang.Number nodeCount) {
            this.nodeCount = nodeCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNodeCount}
         * @param nodeCount Property nodeCount: The number of nodes. This parameter is required.
         *                  Valid values: 1 to 100.
         *                  ApsaraDB for HBase in single-node mode: one node
         *                  ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
         *                  ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
         *                  nodes
         * @return {@code this}
         */
        public Builder nodeCount(com.aliyun.ros.cdk.core.IResolvable nodeCount) {
            this.nodeCount = nodeCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPayType}
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
         * Sets the value of {@link ClusterProps#getPayType}
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
         * Sets the value of {@link ClusterProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAutoRenewPeriod}
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
         * Sets the value of {@link ClusterProps#getAutoRenewPeriod}
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
         * Sets the value of {@link ClusterProps#getClusterName}
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
         * Sets the value of {@link ClusterProps#getClusterName}
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
         * Sets the value of {@link ClusterProps#getColdStorageSize}
         * @param coldStorageSize Property coldStorageSize: The size of cold data storage.
         *                        If this parameter is set to 0, cold data storage is disabled.
         *                        If this parameter is set to a value greater than 0, cold data storage is enabled.
         *                        The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
         * @return {@code this}
         */
        public Builder coldStorageSize(java.lang.Number coldStorageSize) {
            this.coldStorageSize = coldStorageSize;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getColdStorageSize}
         * @param coldStorageSize Property coldStorageSize: The size of cold data storage.
         *                        If this parameter is set to 0, cold data storage is disabled.
         *                        If this parameter is set to a value greater than 0, cold data storage is enabled.
         *                        The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
         * @return {@code this}
         */
        public Builder coldStorageSize(com.aliyun.ros.cdk.core.IResolvable coldStorageSize) {
            this.coldStorageSize = coldStorageSize;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDiskSize}
         * @param diskSize Property diskSize: The disk size of the node.
         *                 Unit: GB.
         *                 For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
         *                 GB and the step size is 1 GB.
         *                 For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
         *                 from 400 GB to 64,000 GB and the step size is 40 GB.
         *                 For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
         *                 varies by instance type. The following list provides the mappings between disks sizes
         *                 and instance types:
         *                 hbase.d1.4xlarge =44000
         *                 hbase.d1.6xlarge =66000
         *                 hbase.d1.8xlarge =88000
         *                 hbase.i2.xlarge =894
         *                 hbase.i2.2xlarge =1788
         *                 hbase.i2.4xlarge =3576
         *                 hbase.i2.8xlarge =7152
         *                 hbase.d2s.5xlarge =58400
         *                 hbase.d2s.10xlarge =109500
         * @return {@code this}
         */
        public Builder diskSize(java.lang.Number diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDiskSize}
         * @param diskSize Property diskSize: The disk size of the node.
         *                 Unit: GB.
         *                 For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
         *                 GB and the step size is 1 GB.
         *                 For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
         *                 from 400 GB to 64,000 GB and the step size is 40 GB.
         *                 For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
         *                 varies by instance type. The following list provides the mappings between disks sizes
         *                 and instance types:
         *                 hbase.d1.4xlarge =44000
         *                 hbase.d1.6xlarge =66000
         *                 hbase.d1.8xlarge =88000
         *                 hbase.i2.xlarge =894
         *                 hbase.i2.2xlarge =1788
         *                 hbase.i2.4xlarge =3576
         *                 hbase.i2.8xlarge =7152
         *                 hbase.d2s.5xlarge =58400
         *                 hbase.d2s.10xlarge =109500
         * @return {@code this}
         */
        public Builder diskSize(com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDiskType}
         * @param diskType Property diskType: The type of the disk.
         *                 Valid values:
         *                 cloud_efficiency
         *                 cloud_ssd
         *                 local_hdd_pro
         *                 local_ssd_pro
         *                 cloud_essd_pl1
         * @return {@code this}
         */
        public Builder diskType(java.lang.String diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDiskType}
         * @param diskType Property diskType: The type of the disk.
         *                 Valid values:
         *                 cloud_efficiency
         *                 cloud_ssd
         *                 local_hdd_pro
         *                 local_ssd_pro
         *                 cloud_essd_pl1
         * @return {@code this}
         */
        public Builder diskType(com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEncryptionKey}
         * @param encryptionKey Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
         *                      It shows that the current cloud disk version is unable to close after the encryption is turned on.
         * @return {@code this}
         */
        public Builder encryptionKey(java.lang.String encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEncryptionKey}
         * @param encryptionKey Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
         *                      It shows that the current cloud disk version is unable to close after the encryption is turned on.
         * @return {@code this}
         */
        public Builder encryptionKey(com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMasterInstanceType}
         * @param masterInstanceType Property masterInstanceType: The instance type of the master node.
         *                           You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * @return {@code this}
         */
        public Builder masterInstanceType(java.lang.String masterInstanceType) {
            this.masterInstanceType = masterInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMasterInstanceType}
         * @param masterInstanceType Property masterInstanceType: The instance type of the master node.
         *                           You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * @return {@code this}
         */
        public Builder masterInstanceType(com.aliyun.ros.cdk.core.IResolvable masterInstanceType) {
            this.masterInstanceType = masterInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPeriod}
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
         * Sets the value of {@link ClusterProps#getPeriod}
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
         * Sets the value of {@link ClusterProps#getPeriodUnit}
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
         * Sets the value of {@link ClusterProps#getPeriodUnit}
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
         * Sets the value of {@link ClusterProps#getResourceGroupId}
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
         * Sets the value of {@link ClusterProps#getResourceGroupId}
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
         * Sets the value of {@link ClusterProps#getSecurityIpList}
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
         * Sets the value of {@link ClusterProps#getSecurityIpList}
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
         * Sets the value of {@link ClusterProps#getVpcId}
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
         * Sets the value of {@link ClusterProps#getVpcId}
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
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.Object coreInstanceType;
        private final java.lang.Object engine;
        private final java.lang.Object engineVersion;
        private final java.lang.Object nodeCount;
        private final java.lang.Object payType;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object clusterName;
        private final java.lang.Object coldStorageSize;
        private final java.lang.Object diskSize;
        private final java.lang.Object diskType;
        private final java.lang.Object encryptionKey;
        private final java.lang.Object masterInstanceType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityIpList;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.coreInstanceType = software.amazon.jsii.Kernel.get(this, "coreInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeCount = software.amazon.jsii.Kernel.get(this, "nodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coldStorageSize = software.amazon.jsii.Kernel.get(this, "coldStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKey = software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterInstanceType = software.amazon.jsii.Kernel.get(this, "masterInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.coreInstanceType = java.util.Objects.requireNonNull(builder.coreInstanceType, "coreInstanceType is required");
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.nodeCount = java.util.Objects.requireNonNull(builder.nodeCount, "nodeCount is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.clusterName = builder.clusterName;
            this.coldStorageSize = builder.coldStorageSize;
            this.diskSize = builder.diskSize;
            this.diskType = builder.diskType;
            this.encryptionKey = builder.encryptionKey;
            this.masterInstanceType = builder.masterInstanceType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityIpList = builder.securityIpList;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getCoreInstanceType() {
            return this.coreInstanceType;
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
        public final java.lang.Object getNodeCount() {
            return this.nodeCount;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
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
        public final java.lang.Object getColdStorageSize() {
            return this.coldStorageSize;
        }

        @Override
        public final java.lang.Object getDiskSize() {
            return this.diskSize;
        }

        @Override
        public final java.lang.Object getDiskType() {
            return this.diskType;
        }

        @Override
        public final java.lang.Object getEncryptionKey() {
            return this.encryptionKey;
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
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("coreInstanceType", om.valueToTree(this.getCoreInstanceType()));
            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("nodeCount", om.valueToTree(this.getNodeCount()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getClusterName() != null) {
                data.set("clusterName", om.valueToTree(this.getClusterName()));
            }
            if (this.getColdStorageSize() != null) {
                data.set("coldStorageSize", om.valueToTree(this.getColdStorageSize()));
            }
            if (this.getDiskSize() != null) {
                data.set("diskSize", om.valueToTree(this.getDiskSize()));
            }
            if (this.getDiskType() != null) {
                data.set("diskType", om.valueToTree(this.getDiskType()));
            }
            if (this.getEncryptionKey() != null) {
                data.set("encryptionKey", om.valueToTree(this.getEncryptionKey()));
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
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbase.ClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterProps.Jsii$Proxy that = (ClusterProps.Jsii$Proxy) o;

            if (!coreInstanceType.equals(that.coreInstanceType)) return false;
            if (!engine.equals(that.engine)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!nodeCount.equals(that.nodeCount)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.clusterName != null ? !this.clusterName.equals(that.clusterName) : that.clusterName != null) return false;
            if (this.coldStorageSize != null ? !this.coldStorageSize.equals(that.coldStorageSize) : that.coldStorageSize != null) return false;
            if (this.diskSize != null ? !this.diskSize.equals(that.diskSize) : that.diskSize != null) return false;
            if (this.diskType != null ? !this.diskType.equals(that.diskType) : that.diskType != null) return false;
            if (this.encryptionKey != null ? !this.encryptionKey.equals(that.encryptionKey) : that.encryptionKey != null) return false;
            if (this.masterInstanceType != null ? !this.masterInstanceType.equals(that.masterInstanceType) : that.masterInstanceType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.coreInstanceType.hashCode();
            result = 31 * result + (this.engine.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.nodeCount.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.clusterName != null ? this.clusterName.hashCode() : 0);
            result = 31 * result + (this.coldStorageSize != null ? this.coldStorageSize.hashCode() : 0);
            result = 31 * result + (this.diskSize != null ? this.diskSize.hashCode() : 0);
            result = 31 * result + (this.diskType != null ? this.diskType.hashCode() : 0);
            result = 31 * result + (this.encryptionKey != null ? this.encryptionKey.hashCode() : 0);
            result = 31 * result + (this.masterInstanceType != null ? this.masterInstanceType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
