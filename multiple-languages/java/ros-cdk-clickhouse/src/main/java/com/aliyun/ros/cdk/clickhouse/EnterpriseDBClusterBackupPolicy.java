package com.aliyun.ros.cdk.clickhouse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ClickHouse::EnterpriseDBClusterBackupPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.546Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicy")
public class EnterpriseDBClusterBackupPolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.clickhouse.IEnterpriseDBClusterBackupPolicy {

    protected EnterpriseDBClusterBackupPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EnterpriseDBClusterBackupPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EnterpriseDBClusterBackupPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EnterpriseDBClusterBackupPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupState: Backup switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupState() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PreferredBackupPeriod: The backup cycle.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrPreferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PreferredBackupTime: The backup time window within which the backup task is performed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupTime() {
        return software.amazon.jsii.Kernel.get(this, "attrPreferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicy> {
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
        private final com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicyProps.Builder();
        }

        /**
         * Property backupRetentionPeriod: The number of days for which you can retain the backup data.
         * <p>
         * @return {@code this}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The number of days for which you can retain the backup data. This parameter is required.
         */
        public Builder backupRetentionPeriod(final java.lang.Number backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }
        /**
         * Property backupRetentionPeriod: The number of days for which you can retain the backup data.
         * <p>
         * @return {@code this}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The number of days for which you can retain the backup data. This parameter is required.
         */
        public Builder backupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }

        /**
         * Property dbInstanceId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data.
         * <p>
         * Separate multiple dates with commas (,).
         * <p>
         * @return {@code this}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. This parameter is required.
         */
        public Builder preferredBackupPeriod(final java.lang.String preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }
        /**
         * Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data.
         * <p>
         * Separate multiple dates with commas (,).
         * <p>
         * @return {@code this}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. This parameter is required.
         */
        public Builder preferredBackupPeriod(final com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }

        /**
         * Property preferredBackupTime: The backup time window within which the backup task is performed.
         * <p>
         * The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
         * <p>
         * @return {@code this}
         * @param preferredBackupTime Property preferredBackupTime: The backup time window within which the backup task is performed. This parameter is required.
         */
        public Builder preferredBackupTime(final java.lang.String preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }
        /**
         * Property preferredBackupTime: The backup time window within which the backup task is performed.
         * <p>
         * The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
         * <p>
         * @return {@code this}
         * @param preferredBackupTime Property preferredBackupTime: The backup time window within which the backup task is performed. This parameter is required.
         */
        public Builder preferredBackupTime(final com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicy build() {
            return new com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterBackupPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
