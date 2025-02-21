package com.aliyun.ros.cdk.clickhouse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ClickHouse::DBCluster</code>, which is used to create an ApsaraDB for ClickHouse cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.704Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.DBCluster")
public class DBCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.clickhouse.IDBCluster {

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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
        return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Bid: BusinessID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
        return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Category: The edition of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CommodityCode: Product Code.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
        return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnectionString: ConnectionString.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBClusterDescription: The description of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBClusterId: The id of DBCluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBClusterType: The specification of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBClusterVersion: Version, value:  19.15.2.2.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBNodeClass: DBNodeClass.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBNodeCount: The number of nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBNodeStorage: The storage capacity of a single node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbNodeStorageType: Instance node storage type.
     * <p>
     * Valid values:  cloud_essd, cloud_efficiency.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EncryptionKey: KMS key ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKey() {
        return software.amazon.jsii.Kernel.get(this, "attrEncryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionType() {
        return software.amazon.jsii.Kernel.get(this, "attrEncryptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Engine: Engine.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
        return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EngineVersion: EngineVersion.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IsExpired: IsExpired.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsExpired() {
        return software.amazon.jsii.Kernel.get(this, "attrIsExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LockMode: LockMode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
        return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LockReason: Reason for lock.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
        return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: PayType.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Port: Connection port.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicConnectionString: Internet connection address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicPort: PublicPort.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageType: StorageType.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcCloudInstanceId: VpcCloudInstanceId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: VpcId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: VSwitchId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: ZoneId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.DBClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.DBClusterProps.class));
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
