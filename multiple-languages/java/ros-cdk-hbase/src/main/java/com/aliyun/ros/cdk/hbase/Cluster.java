package com.aliyun.ros.cdk.hbase;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::HBase::Cluster</code>, which is used to create an ApsaraDB for HBase cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.390Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbase.$Module.class, fqn = "@alicloud/ros-cdk-hbase.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.hbase.ICluster {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlbConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrSlbConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ThriftConn: Thrift Connection address list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrThriftConn() {
        return software.amazon.jsii.Kernel.get(this, "attrThriftConn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUiProxyConnAddrInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrUiProxyConnAddrInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZkConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrZkConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.ClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbase.ClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.hbase.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbase.Cluster> {
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
        private final com.aliyun.ros.cdk.hbase.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbase.ClusterProps.Builder();
        }

        /**
         * Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * <p>
         * @return {@code this}
         * @param coreInstanceType Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter. This parameter is required.
         */
        public Builder coreInstanceType(final java.lang.String coreInstanceType) {
            this.props.coreInstanceType(coreInstanceType);
            return this;
        }
        /**
         * Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * <p>
         * @return {@code this}
         * @param coreInstanceType Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter. This parameter is required.
         */
        public Builder coreInstanceType(final com.aliyun.ros.cdk.core.IResolvable coreInstanceType) {
            this.props.coreInstanceType(coreInstanceType);
            return this;
        }

        /**
         * Property engine: The type of the service.
         * <p>
         * Valid values:
         * hbase
         * hbaseue
         * bds
         * <p>
         * @return {@code this}
         * @param engine Property engine: The type of the service. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: The type of the service.
         * <p>
         * Valid values:
         * hbase
         * hbaseue
         * bds
         * <p>
         * @return {@code this}
         * @param engine Property engine: The type of the service. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property engineVersion: The version of the engine.
         * <p>
         * Valid values:
         * hbase:1.1, 2.0
         * hbaseue:2.0
         * bds:1.0
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the engine. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: The version of the engine.
         * <p>
         * Valid values:
         * hbase:1.1, 2.0
         * hbaseue:2.0
         * bds:1.0
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the engine. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property nodeCount: The number of nodes.
         * <p>
         * Valid values: 1 to 100.
         * ApsaraDB for HBase in single-node mode: one node
         * ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
         * ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
         * nodes
         * <p>
         * @return {@code this}
         * @param nodeCount Property nodeCount: The number of nodes. This parameter is required.
         */
        public Builder nodeCount(final java.lang.Number nodeCount) {
            this.props.nodeCount(nodeCount);
            return this;
        }
        /**
         * Property nodeCount: The number of nodes.
         * <p>
         * Valid values: 1 to 100.
         * ApsaraDB for HBase in single-node mode: one node
         * ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
         * ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
         * nodes
         * <p>
         * @return {@code this}
         * @param nodeCount Property nodeCount: The number of nodes. This parameter is required.
         */
        public Builder nodeCount(final com.aliyun.ros.cdk.core.IResolvable nodeCount) {
            this.props.nodeCount(nodeCount);
            return this;
        }

        /**
         * Property payType: The billing method.
         * <p>
         * Prepaid: The subscription billing method is used.
         * Postpaid: The pay-as-you-go billing method is used.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method.
         * <p>
         * Prepaid: The subscription billing method is used.
         * Postpaid: The pay-as-you-go billing method is used.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoRenewPeriod: The auto-renewal period.
         * <p>
         * Unit: month.
         * The default value of this parameter is 0. This value indicates that auto-renewal is
         * disabled.
         * If this parameter is set to 2, the instance is automatically renewed for a two-month
         * subscription after the instance expires.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: The auto-renewal period.
         * <p>
         * Unit: month.
         * The default value of this parameter is 0. This value indicates that auto-renewal is
         * disabled.
         * If this parameter is set to 2, the instance is automatically renewed for a two-month
         * subscription after the instance expires.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property clusterName: The name of the instance.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of the instance. This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: The name of the instance.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of the instance. This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * Property coldStorageSize: The size of cold data storage.
         * <p>
         * If this parameter is set to 0, cold data storage is disabled.
         * If this parameter is set to a value greater than 0, cold data storage is enabled.
         * The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
         * <p>
         * @return {@code this}
         * @param coldStorageSize Property coldStorageSize: The size of cold data storage. This parameter is required.
         */
        public Builder coldStorageSize(final java.lang.Number coldStorageSize) {
            this.props.coldStorageSize(coldStorageSize);
            return this;
        }
        /**
         * Property coldStorageSize: The size of cold data storage.
         * <p>
         * If this parameter is set to 0, cold data storage is disabled.
         * If this parameter is set to a value greater than 0, cold data storage is enabled.
         * The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
         * <p>
         * @return {@code this}
         * @param coldStorageSize Property coldStorageSize: The size of cold data storage. This parameter is required.
         */
        public Builder coldStorageSize(final com.aliyun.ros.cdk.core.IResolvable coldStorageSize) {
            this.props.coldStorageSize(coldStorageSize);
            return this;
        }

        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
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
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The disk size of the node. This parameter is required.
         */
        public Builder diskSize(final java.lang.Number diskSize) {
            this.props.diskSize(diskSize);
            return this;
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
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The disk size of the node. This parameter is required.
         */
        public Builder diskSize(final com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.props.diskSize(diskSize);
            return this;
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
         * <p>
         * @return {@code this}
         * @param diskType Property diskType: The type of the disk. This parameter is required.
         */
        public Builder diskType(final java.lang.String diskType) {
            this.props.diskType(diskType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param diskType Property diskType: The type of the disk. This parameter is required.
         */
        public Builder diskType(final com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.props.diskType(diskType);
            return this;
        }

        /**
         * Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
         * <p>
         * It shows that the current cloud disk version is unable to close after the encryption is turned on.
         * <p>
         * @return {@code this}
         * @param encryptionKey Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled. This parameter is required.
         */
        public Builder encryptionKey(final java.lang.String encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }
        /**
         * Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
         * <p>
         * It shows that the current cloud disk version is unable to close after the encryption is turned on.
         * <p>
         * @return {@code this}
         * @param encryptionKey Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled. This parameter is required.
         */
        public Builder encryptionKey(final com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }

        /**
         * Property masterInstanceType: The instance type of the master node.
         * <p>
         * You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * <p>
         * @return {@code this}
         * @param masterInstanceType Property masterInstanceType: The instance type of the master node. This parameter is required.
         */
        public Builder masterInstanceType(final java.lang.String masterInstanceType) {
            this.props.masterInstanceType(masterInstanceType);
            return this;
        }
        /**
         * Property masterInstanceType: The instance type of the master node.
         * <p>
         * You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * <p>
         * @return {@code this}
         * @param masterInstanceType Property masterInstanceType: The instance type of the master node. This parameter is required.
         */
        public Builder masterInstanceType(final com.aliyun.ros.cdk.core.IResolvable masterInstanceType) {
            this.props.masterInstanceType(masterInstanceType);
            return this;
        }

        /**
         * Property period: The subscription period.
         * <p>
         * This parameter only takes effect when the PayType parameter is set to Prepaid.
         * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
         * from 1 to 5.
         * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
         * from 1 to 9.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period.
         * <p>
         * This parameter only takes effect when the PayType parameter is set to Prepaid.
         * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
         * from 1 to 5.
         * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
         * from 1 to 9.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription period.
         * <p>
         * Valid values:
         * year
         * month
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription period. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription period.
         * <p>
         * Valid values:
         * year
         * month
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription period. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * You can query the group ID in the resource group console.
         * If you leave this parameter empty, the instance is allocated to the default resource
         * group.
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
         * You can query the group ID in the resource group console.
         * If you leave this parameter empty, the instance is allocated to the default resource
         * group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityIpList: The IP addresses in the whitelist.
         * <p>
         * Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
         * be added to the whitelist. Separate multiple IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP addresses in the whitelist. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The IP addresses in the whitelist.
         * <p>
         * Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
         * be added to the whitelist. Separate multiple IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP addresses in the whitelist. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * If you leave this parameter and the VSwitchId
         * parameter empty, the classic network type is used. The VPC network type is preferred.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * If you leave this parameter and the VSwitchId
         * parameter empty, the classic network type is used. The VPC network type is preferred.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbase.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.hbase.Cluster build() {
            return new com.aliyun.ros.cdk.hbase.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
