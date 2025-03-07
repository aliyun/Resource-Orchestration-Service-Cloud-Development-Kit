package com.aliyun.ros.cdk.graphdatabase;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GraphDatabase::DbInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.326Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.DbInstance")
public class DbInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.graphdatabase.IDbInstance {

    protected DbInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DbInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DbInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.DbInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DbInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.DbInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CurrentMinorVersion: The current kernel image version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentMinorVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrCurrentMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceCategory: The category of the db instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceDescription: According to the practical example or notes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArray() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceMemory: Instance memory, which is measured in MB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceMemory() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceNetworkType: The network type of the db instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceStorageType: Cloud Disk.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceType: The type of the db instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbNodeClass: The class of the db node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbNodeCount: The count of the db node.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbNodeStorage: Instance storage space, which is measured in GB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EcsSecurityGroupRelations: Security group information array.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsSecurityGroupRelations() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsSecurityGroupRelations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Expired: The expire status of the db instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpired() {
        return software.amazon.jsii.Kernel.get(this, "attrExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpireTime: The instance after it expires time for subscription instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LatestMinorVersion: The latest kernel image version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestMinorVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrLatestMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LockMode: Instance lock state.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
        return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LockReason: An instance is locked the reason.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
        return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Port: Application Port.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicConnectionString: The public connection string ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicPort: The public port ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: Resource Group ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: resource Tag group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The vpc id of the db instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: The vpc switch id of the resource.
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.DbInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.graphdatabase.DbInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.graphdatabase.DbInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.graphdatabase.DbInstance> {
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
        private final com.aliyun.ros.cdk.graphdatabase.DbInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.graphdatabase.DbInstanceProps.Builder();
        }

        /**
         * Property dbInstanceCategory: The category of the db instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceCategory Property dbInstanceCategory: The category of the db instance. This parameter is required.
         */
        public Builder dbInstanceCategory(final java.lang.String dbInstanceCategory) {
            this.props.dbInstanceCategory(dbInstanceCategory);
            return this;
        }
        /**
         * Property dbInstanceCategory: The category of the db instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceCategory Property dbInstanceCategory: The category of the db instance. This parameter is required.
         */
        public Builder dbInstanceCategory(final com.aliyun.ros.cdk.core.IResolvable dbInstanceCategory) {
            this.props.dbInstanceCategory(dbInstanceCategory);
            return this;
        }

        /**
         * Property dbInstanceNetworkType: The network type of the db instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceNetworkType Property dbInstanceNetworkType: The network type of the db instance. This parameter is required.
         */
        public Builder dbInstanceNetworkType(final java.lang.String dbInstanceNetworkType) {
            this.props.dbInstanceNetworkType(dbInstanceNetworkType);
            return this;
        }
        /**
         * Property dbInstanceNetworkType: The network type of the db instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceNetworkType Property dbInstanceNetworkType: The network type of the db instance. This parameter is required.
         */
        public Builder dbInstanceNetworkType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceNetworkType) {
            this.props.dbInstanceNetworkType(dbInstanceNetworkType);
            return this;
        }

        /**
         * Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd.
         * <p>
         * @return {@code this}
         * @param dbInstanceStorageType Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd. This parameter is required.
         */
        public Builder dbInstanceStorageType(final java.lang.String dbInstanceStorageType) {
            this.props.dbInstanceStorageType(dbInstanceStorageType);
            return this;
        }
        /**
         * Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd.
         * <p>
         * @return {@code this}
         * @param dbInstanceStorageType Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd. This parameter is required.
         */
        public Builder dbInstanceStorageType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.props.dbInstanceStorageType(dbInstanceStorageType);
            return this;
        }

        /**
         * Property dbNodeClass: The class of the db node.
         * <p>
         * Valid values:
         * gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
         * <p>
         * @return {@code this}
         * @param dbNodeClass Property dbNodeClass: The class of the db node. This parameter is required.
         */
        public Builder dbNodeClass(final java.lang.String dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }
        /**
         * Property dbNodeClass: The class of the db node.
         * <p>
         * Valid values:
         * gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
         * <p>
         * @return {@code this}
         * @param dbNodeClass Property dbNodeClass: The class of the db node. This parameter is required.
         */
        public Builder dbNodeClass(final com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }

        /**
         * Property dbNodeStorage: Instance storage space, which is measured in GB.
         * <p>
         * The minimum storage space is 20 GB and the step size is 10GB.
         * <p>
         * @return {@code this}
         * @param dbNodeStorage Property dbNodeStorage: Instance storage space, which is measured in GB. This parameter is required.
         */
        public Builder dbNodeStorage(final java.lang.Number dbNodeStorage) {
            this.props.dbNodeStorage(dbNodeStorage);
            return this;
        }
        /**
         * Property dbNodeStorage: Instance storage space, which is measured in GB.
         * <p>
         * The minimum storage space is 20 GB and the step size is 10GB.
         * <p>
         * @return {@code this}
         * @param dbNodeStorage Property dbNodeStorage: Instance storage space, which is measured in GB. This parameter is required.
         */
        public Builder dbNodeStorage(final com.aliyun.ros.cdk.core.IResolvable dbNodeStorage) {
            this.props.dbNodeStorage(dbNodeStorage);
            return this;
        }

        /**
         * Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher. This parameter is required.
         */
        public Builder dbVersion(final java.lang.String dbVersion) {
            this.props.dbVersion(dbVersion);
            return this;
        }
        /**
         * Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher. This parameter is required.
         */
        public Builder dbVersion(final com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.props.dbVersion(dbVersion);
            return this;
        }

        /**
         * Property backupSetId: Backup set id.
         * <p>
         * @return {@code this}
         * @param backupSetId Property backupSetId: Backup set id. This parameter is required.
         */
        public Builder backupSetId(final java.lang.String backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }
        /**
         * Property backupSetId: Backup set id.
         * <p>
         * @return {@code this}
         * @param backupSetId Property backupSetId: Backup set id. This parameter is required.
         */
        public Builder backupSetId(final com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }

        /**
         * Property createType: The creation method.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>CreateDBInstance: Create instance</li>
         * <li>CloneDBInstance: Clone instance</li>
         * <li>CreateReadDBInstance: Create a read-only instance</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param createType Property createType: The creation method. This parameter is required.
         */
        public Builder createType(final java.lang.String createType) {
            this.props.createType(createType);
            return this;
        }
        /**
         * Property createType: The creation method.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>CreateDBInstance: Create instance</li>
         * <li>CloneDBInstance: Clone instance</li>
         * <li>CreateReadDBInstance: Create a read-only instance</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param createType Property createType: The creation method. This parameter is required.
         */
        public Builder createType(final com.aliyun.ros.cdk.core.IResolvable createType) {
            this.props.createType(createType);
            return this;
        }

        /**
         * Property dbInstanceDescription: According to the practical example or notes.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: According to the practical example or notes. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: According to the practical example or notes.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: According to the practical example or notes. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * Property dbInstanceIpArray: IP address whitelist for the instance group list.
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArray Property dbInstanceIpArray: IP address whitelist for the instance group list. This parameter is required.
         */
        public Builder dbInstanceIpArray(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArray) {
            this.props.dbInstanceIpArray(dbInstanceIpArray);
            return this;
        }
        /**
         * Property dbInstanceIpArray: IP address whitelist for the instance group list.
         * <p>
         * @return {@code this}
         * @param dbInstanceIpArray Property dbInstanceIpArray: IP address whitelist for the instance group list. This parameter is required.
         */
        public Builder dbInstanceIpArray(final java.util.List<? extends java.lang.Object> dbInstanceIpArray) {
            this.props.dbInstanceIpArray(dbInstanceIpArray);
            return this;
        }

        /**
         * Property ecsSecurityGroupRelations: Security group information array.
         * <p>
         * @return {@code this}
         * @param ecsSecurityGroupRelations Property ecsSecurityGroupRelations: Security group information array. This parameter is required.
         */
        public Builder ecsSecurityGroupRelations(final com.aliyun.ros.cdk.core.IResolvable ecsSecurityGroupRelations) {
            this.props.ecsSecurityGroupRelations(ecsSecurityGroupRelations);
            return this;
        }
        /**
         * Property ecsSecurityGroupRelations: Security group information array.
         * <p>
         * @return {@code this}
         * @param ecsSecurityGroupRelations Property ecsSecurityGroupRelations: Security group information array. This parameter is required.
         */
        public Builder ecsSecurityGroupRelations(final java.util.List<? extends java.lang.Object> ecsSecurityGroupRelations) {
            this.props.ecsSecurityGroupRelations(ecsSecurityGroupRelations);
            return this;
        }

        /**
         * Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
         * <p>
         * @return {@code this}
         * @param maintainTime Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance. This parameter is required.
         */
        public Builder maintainTime(final java.lang.String maintainTime) {
            this.props.maintainTime(maintainTime);
            return this;
        }
        /**
         * Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
         * <p>
         * @return {@code this}
         * @param maintainTime Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance. This parameter is required.
         */
        public Builder maintainTime(final com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.props.maintainTime(maintainTime);
            return this;
        }

        /**
         * Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
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
         * Property restoreType: Restore type.
         * <p>
         * @return {@code this}
         * @param restoreType Property restoreType: Restore type. This parameter is required.
         */
        public Builder restoreType(final java.lang.String restoreType) {
            this.props.restoreType(restoreType);
            return this;
        }
        /**
         * Property restoreType: Restore type.
         * <p>
         * @return {@code this}
         * @param restoreType Property restoreType: Restore type. This parameter is required.
         */
        public Builder restoreType(final com.aliyun.ros.cdk.core.IResolvable restoreType) {
            this.props.restoreType(restoreType);
            return this;
        }

        /**
         * Property sourceDbInstanceId: Source Instance Id.
         * <p>
         * @return {@code this}
         * @param sourceDbInstanceId Property sourceDbInstanceId: Source Instance Id. This parameter is required.
         */
        public Builder sourceDbInstanceId(final java.lang.String sourceDbInstanceId) {
            this.props.sourceDbInstanceId(sourceDbInstanceId);
            return this;
        }
        /**
         * Property sourceDbInstanceId: Source Instance Id.
         * <p>
         * @return {@code this}
         * @param sourceDbInstanceId Property sourceDbInstanceId: Source Instance Id. This parameter is required.
         */
        public Builder sourceDbInstanceId(final com.aliyun.ros.cdk.core.IResolvable sourceDbInstanceId) {
            this.props.sourceDbInstanceId(sourceDbInstanceId);
            return this;
        }

        /**
         * Property tags: Tags of db instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of db instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vpcId: The vpc id of the db instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The vpc id of the db instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The vpc id of the db instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The vpc id of the db instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The vpc switch id of the resource.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vpc switch id of the resource. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vpc switch id of the resource.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vpc switch id of the resource. This parameter is required.
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.graphdatabase.DbInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.graphdatabase.DbInstance build() {
            return new com.aliyun.ros.cdk.graphdatabase.DbInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
