package com.aliyun.ros.cdk.graphdatabase.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::GraphDatabase::DbInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.351Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.datasource.DbInstance")
public class DbInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.graphdatabase.datasource.IDbInstance {

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
    public DbInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.datasource.DbInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DbInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.datasource.DbInstanceProps props) {
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
     * Attribute DbInstanceId: The ID of the GDB Instance.
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
     * Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.
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
     * Attribute PublicConnectionString: The public connection string ID of the DB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicPort: The public port ID of the DB instance.
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
     * Attribute Tags: The tags of the GDB Instance.
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
     * Attribute VSwitchId: The vswitch id of the DB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: The zone ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.datasource.DbInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.graphdatabase.datasource.DbInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.graphdatabase.datasource.DbInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.graphdatabase.datasource.DbInstance> {
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
        private final com.aliyun.ros.cdk.graphdatabase.datasource.DbInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.graphdatabase.datasource.DbInstanceProps.Builder();
        }

        /**
         * Property dbInstanceId: The ID of the GDB Instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the GDB Instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the GDB Instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the GDB Instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.graphdatabase.datasource.DbInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.graphdatabase.datasource.DbInstance build() {
            return new com.aliyun.ros.cdk.graphdatabase.datasource.DbInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
