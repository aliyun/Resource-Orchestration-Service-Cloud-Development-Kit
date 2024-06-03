package com.aliyun.ros.cdk.clickhouse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ClickHouse::DBCluster</code>, which is used to create an ApsaraDB for ClickHouse cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:50.062Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.DBCluster")
public class DBCluster extends com.aliyun.ros.cdk.core.Resource {

    protected DBCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.DBClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.DBClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AliUid: AliUid.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAliUid() {
        return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Bid: BusinessID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBid() {
        return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Category: The edition of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CommodityCode: Product Code.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommodityCode() {
        return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ConnectionString: ConnectionString.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterDescription: The description of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterId: The id of DBCluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterNetworkType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterType: The specification of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterVersion: Version, value:  19.15.2.2.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBNodeClass: DBNodeClass.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeClass() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBNodeCount: The number of nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBNodeStorage: The storage capacity of a single node.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DbNodeStorageType: Instance node storage type.
     * <p>
     * Valid values:  cloud_essd, cloud_efficiency.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorageType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EncryptionKey: KMS key ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEncryptionKey() {
        return software.amazon.jsii.Kernel.get(this, "attrEncryptionKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEncryptionType() {
        return software.amazon.jsii.Kernel.get(this, "attrEncryptionType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Engine: Engine.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEngine() {
        return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EngineVersion: EngineVersion.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IsExpired: IsExpired.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsExpired() {
        return software.amazon.jsii.Kernel.get(this, "attrIsExpired", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LockMode: LockMode.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLockMode() {
        return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LockReason: Reason for lock.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLockReason() {
        return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: PayType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Port: Connection port.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicConnectionString: Internet connection address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicPort: PublicPort.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StorageType: StorageType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcCloudInstanceId: VpcCloudInstanceId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcCloudInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: VpcId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: VSwitchId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneId: ZoneId.
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.DBClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.DBClusterProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.DBClusterProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.DBCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.DBCluster> {
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
        private final com.aliyun.ros.cdk.clickhouse.DBClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.DBClusterProps.Builder();
        }

        /**
         * Property category: The edition of the cluster.
         * <p>
         * Valid values:
         * Basic: Single-replica Edition
         * HighAvailability: Double-replica Edition
         * <p>
         * @return {@code this}
         * @param category Property category: The edition of the cluster. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The edition of the cluster.
         * <p>
         * Valid values:
         * Basic: Single-replica Edition
         * HighAvailability: Double-replica Edition
         * <p>
         * @return {@code this}
         * @param category Property category: The edition of the cluster. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.
         * <p>
         * @return {@code this}
         * @param dbClusterNetworkType Property dbClusterNetworkType: Network type of the cluster instance, value: VPC. This parameter is required.
         */
        public Builder dbClusterNetworkType(final java.lang.String dbClusterNetworkType) {
            this.props.dbClusterNetworkType(dbClusterNetworkType);
            return this;
        }
        /**
         * Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.
         * <p>
         * @return {@code this}
         * @param dbClusterNetworkType Property dbClusterNetworkType: Network type of the cluster instance, value: VPC. This parameter is required.
         */
        public Builder dbClusterNetworkType(final com.aliyun.ros.cdk.core.IResolvable dbClusterNetworkType) {
            this.props.dbClusterNetworkType(dbClusterNetworkType);
            return this;
        }

        /**
         * Property dbClusterType: The specification of the cluster.
         * <p>
         * If the cluster is of the Single-replica Edition, the following values are valid:
         * S4: 4 cores, 16 GB.
         * S8: 8 cores, 32 GB.
         * S16: 16 cores, 64 GB.
         * S32: 32 cores, 128 GB.
         * S64: 64 cores, 256 GB.
         * S104: 104 cores, 384 GB.
         * If the cluster is of the Double-replica Edition, the following values are valid:
         * C4: 4 cores, 16 GB.
         * C8: 8 cores, 32 GB.
         * C16: 16 cores, 64 GB.
         * C32: 32 cores, 128 GB.
         * C64: 64 cores, 256 GB.
         * C104: 104 cores, 384 GB.
         * <p>
         * @return {@code this}
         * @param dbClusterType Property dbClusterType: The specification of the cluster. This parameter is required.
         */
        public Builder dbClusterType(final java.lang.String dbClusterType) {
            this.props.dbClusterType(dbClusterType);
            return this;
        }
        /**
         * Property dbClusterType: The specification of the cluster.
         * <p>
         * If the cluster is of the Single-replica Edition, the following values are valid:
         * S4: 4 cores, 16 GB.
         * S8: 8 cores, 32 GB.
         * S16: 16 cores, 64 GB.
         * S32: 32 cores, 128 GB.
         * S64: 64 cores, 256 GB.
         * S104: 104 cores, 384 GB.
         * If the cluster is of the Double-replica Edition, the following values are valid:
         * C4: 4 cores, 16 GB.
         * C8: 8 cores, 32 GB.
         * C16: 16 cores, 64 GB.
         * C32: 32 cores, 128 GB.
         * C64: 64 cores, 256 GB.
         * C104: 104 cores, 384 GB.
         * <p>
         * @return {@code this}
         * @param dbClusterType Property dbClusterType: The specification of the cluster. This parameter is required.
         */
        public Builder dbClusterType(final com.aliyun.ros.cdk.core.IResolvable dbClusterType) {
            this.props.dbClusterType(dbClusterType);
            return this;
        }

        /**
         * Property dbClusterVersion: Version, value:  19.15.2.2.
         * <p>
         * @return {@code this}
         * @param dbClusterVersion Property dbClusterVersion: Version, value:  19.15.2.2. This parameter is required.
         */
        public Builder dbClusterVersion(final java.lang.String dbClusterVersion) {
            this.props.dbClusterVersion(dbClusterVersion);
            return this;
        }
        /**
         * Property dbClusterVersion: Version, value:  19.15.2.2.
         * <p>
         * @return {@code this}
         * @param dbClusterVersion Property dbClusterVersion: Version, value:  19.15.2.2. This parameter is required.
         */
        public Builder dbClusterVersion(final com.aliyun.ros.cdk.core.IResolvable dbClusterVersion) {
            this.props.dbClusterVersion(dbClusterVersion);
            return this;
        }

        /**
         * Property dbNodeCount: The number of nodes.
         * <p>
         * If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
         * If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
         * <p>
         * @return {@code this}
         * @param dbNodeCount Property dbNodeCount: The number of nodes. This parameter is required.
         */
        public Builder dbNodeCount(final java.lang.Number dbNodeCount) {
            this.props.dbNodeCount(dbNodeCount);
            return this;
        }
        /**
         * Property dbNodeCount: The number of nodes.
         * <p>
         * If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
         * If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
         * <p>
         * @return {@code this}
         * @param dbNodeCount Property dbNodeCount: The number of nodes. This parameter is required.
         */
        public Builder dbNodeCount(final com.aliyun.ros.cdk.core.IResolvable dbNodeCount) {
            this.props.dbNodeCount(dbNodeCount);
            return this;
        }

        /**
         * Property dbNodeStorage: The storage capacity of a single node.
         * <p>
         * Valid values: 100 to 32000. Unit: GB.
         * Note self value is a multiple of 100.
         * <p>
         * @return {@code this}
         * @param dbNodeStorage Property dbNodeStorage: The storage capacity of a single node. This parameter is required.
         */
        public Builder dbNodeStorage(final java.lang.Number dbNodeStorage) {
            this.props.dbNodeStorage(dbNodeStorage);
            return this;
        }
        /**
         * Property dbNodeStorage: The storage capacity of a single node.
         * <p>
         * Valid values: 100 to 32000. Unit: GB.
         * Note self value is a multiple of 100.
         * <p>
         * @return {@code this}
         * @param dbNodeStorage Property dbNodeStorage: The storage capacity of a single node. This parameter is required.
         */
        public Builder dbNodeStorage(final com.aliyun.ros.cdk.core.IResolvable dbNodeStorage) {
            this.props.dbNodeStorage(dbNodeStorage);
            return this;
        }

        /**
         * Property dbNodeStorageType: Instance node storage type.
         * <p>
         * Valid values:  cloud_essd, cloud_efficiency.
         * <p>
         * @return {@code this}
         * @param dbNodeStorageType Property dbNodeStorageType: Instance node storage type. This parameter is required.
         */
        public Builder dbNodeStorageType(final java.lang.String dbNodeStorageType) {
            this.props.dbNodeStorageType(dbNodeStorageType);
            return this;
        }
        /**
         * Property dbNodeStorageType: Instance node storage type.
         * <p>
         * Valid values:  cloud_essd, cloud_efficiency.
         * <p>
         * @return {@code this}
         * @param dbNodeStorageType Property dbNodeStorageType: Instance node storage type. This parameter is required.
         */
        public Builder dbNodeStorageType(final com.aliyun.ros.cdk.core.IResolvable dbNodeStorageType) {
            this.props.dbNodeStorageType(dbNodeStorageType);
            return this;
        }

        /**
         * Property paymentType: The billing method of the cluster.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The billing method of the cluster. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The billing method of the cluster.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The billing method of the cluster. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property dbClusterDescription: The description of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster. This parameter is required.
         */
        public Builder dbClusterDescription(final java.lang.String dbClusterDescription) {
            this.props.dbClusterDescription(dbClusterDescription);
            return this;
        }
        /**
         * Property dbClusterDescription: The description of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster. This parameter is required.
         */
        public Builder dbClusterDescription(final com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.props.dbClusterDescription(dbClusterDescription);
            return this;
        }

        /**
         * Property encryptionKey: KMS key ID.
         * <p>
         * @return {@code this}
         * @param encryptionKey Property encryptionKey: KMS key ID. This parameter is required.
         */
        public Builder encryptionKey(final java.lang.String encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }
        /**
         * Property encryptionKey: KMS key ID.
         * <p>
         * @return {@code this}
         * @param encryptionKey Property encryptionKey: KMS key ID. This parameter is required.
         */
        public Builder encryptionKey(final com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }

        /**
         * Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
         * <p>
         * @return {@code this}
         * @param encryptionType Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk. This parameter is required.
         */
        public Builder encryptionType(final java.lang.String encryptionType) {
            this.props.encryptionType(encryptionType);
            return this;
        }
        /**
         * Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
         * <p>
         * @return {@code this}
         * @param encryptionType Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk. This parameter is required.
         */
        public Builder encryptionType(final com.aliyun.ros.cdk.core.IResolvable encryptionType) {
            this.props.encryptionType(encryptionType);
            return this;
        }

        /**
         * Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property usedTime: The subscription duration.
         * <p>
         * Valid values:
         * When Period is Month, it could be from 1 to 9, 12, 24, 36.
         * When Period is Year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: The subscription duration. This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }
        /**
         * Property usedTime: The subscription duration.
         * <p>
         * Valid values:
         * When Period is Month, it could be from 1 to 9, 12, 24, 36.
         * When Period is Year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: The subscription duration. This parameter is required.
         */
        public Builder usedTime(final com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }

        /**
         * Property vpcId: VpcId.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VpcId. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VpcId.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VpcId. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: VSwitchId.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitchId. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VSwitchId.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitchId. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: ZoneId.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: ZoneId. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: ZoneId.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: ZoneId. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.DBCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.DBCluster build() {
            return new com.aliyun.ros.cdk.clickhouse.DBCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
