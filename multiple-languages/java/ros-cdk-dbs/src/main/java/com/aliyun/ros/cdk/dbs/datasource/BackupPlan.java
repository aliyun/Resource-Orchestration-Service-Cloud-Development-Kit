package com.aliyun.ros.cdk.dbs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::DBS::BackupPlan</code>, which is used to query the information about a backup schedule.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.365Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.datasource.BackupPlan")
public class BackupPlan extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dbs.datasource.IBackupPlan {

    protected BackupPlan(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BackupPlan(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public BackupPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public BackupPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BackupGatewayId: The ID of the backup gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupMethod: Backup method.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupMethod() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupObjects: The backup object.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupObjects() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupPeriod: Full backup cycle.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupPlanId: The ID of the backup plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanId() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupPlanName: The name of the backup plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanName() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupPlanName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupRetentionPeriod: The retention time of backup data.
     * <p>
     * Valid values: 0 to 1825. Default value: 730 days.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupStartTime: The start time of full Backup.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupStorageType: Built-in storage type:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the backup plans.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossAliyunId() {
        return software.amazon.jsii.Kernel.get(this, "attrCrossAliyunId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrCrossRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DatabaseType: Database type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseType() {
        return software.amazon.jsii.Kernel.get(this, "attrDatabaseType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuplicationArchivePeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrDuplicationArchivePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.
     * <p>
     * The default time is 180 days.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuplicationInfrequentAccessPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrDuplicationInfrequentAccessPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableBackupLog: Whether to enable incremental log Backup.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBackupLog() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceClass: Instance class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OssBucketName: OSS Bucket name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOssBucketName() {
        return software.amazon.jsii.Kernel.get(this, "attrOssBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceEndpointDatabaseName: The name of the database.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointDatabaseName() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceEndpointInstanceId: The ID of the database instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceEndpointInstanceType: The location of the database.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceEndpointRegion: The region of the database.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointRegion() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceEndpointSid: Oracle SID name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointSid() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceEndpointUserName: Database account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dbs.datasource.BackupPlan}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dbs.datasource.BackupPlan> {
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
        private final com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps.Builder();
        }

        /**
         * Property backupPlanId: The ID of the backup plan.
         * <p>
         * @return {@code this}
         * @param backupPlanId Property backupPlanId: The ID of the backup plan. This parameter is required.
         */
        public Builder backupPlanId(final java.lang.String backupPlanId) {
            this.props.backupPlanId(backupPlanId);
            return this;
        }
        /**
         * Property backupPlanId: The ID of the backup plan.
         * <p>
         * @return {@code this}
         * @param backupPlanId Property backupPlanId: The ID of the backup plan. This parameter is required.
         */
        public Builder backupPlanId(final com.aliyun.ros.cdk.core.IResolvable backupPlanId) {
            this.props.backupPlanId(backupPlanId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dbs.datasource.BackupPlan}.
         */
        @Override
        public com.aliyun.ros.cdk.dbs.datasource.BackupPlan build() {
            return new com.aliyun.ros.cdk.dbs.datasource.BackupPlan(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
