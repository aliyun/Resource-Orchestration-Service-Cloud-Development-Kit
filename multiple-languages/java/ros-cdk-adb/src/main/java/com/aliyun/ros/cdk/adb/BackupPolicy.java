package com.aliyun.ros.cdk.adb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ADB::BackupPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:44.939Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adb.$Module.class, fqn = "@alicloud/ros-cdk-adb.BackupPolicy")
public class BackupPolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.adb.IBackupPolicy {

    protected BackupPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BackupPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public BackupPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.BackupPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public BackupPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.BackupPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.BackupPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.adb.BackupPolicyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.adb.BackupPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.adb.BackupPolicy> {
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
        private final com.aliyun.ros.cdk.adb.BackupPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.adb.BackupPolicyProps.Builder();
        }

        /**
         * Property dbClusterId: The ID of the ADB cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ADB cluster. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the ADB cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ADB cluster. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property preferredBackupPeriod: The preferred backup period.
         * <p>
         * Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
         * <p>
         * @return {@code this}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The preferred backup period. This parameter is required.
         */
        public Builder preferredBackupPeriod(final com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }
        /**
         * Property preferredBackupPeriod: The preferred backup period.
         * <p>
         * Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
         * <p>
         * @return {@code this}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The preferred backup period. This parameter is required.
         */
        public Builder preferredBackupPeriod(final java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }

        /**
         * Property preferredBackupTime: The preferred backup time.
         * <p>
         * Format: HH:mmZ-HH:mmZ. Example: 02:00Z-03:00Z
         * <p>
         * @return {@code this}
         * @param preferredBackupTime Property preferredBackupTime: The preferred backup time. This parameter is required.
         */
        public Builder preferredBackupTime(final java.lang.String preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }
        /**
         * Property preferredBackupTime: The preferred backup time.
         * <p>
         * Format: HH:mmZ-HH:mmZ. Example: 02:00Z-03:00Z
         * <p>
         * @return {@code this}
         * @param preferredBackupTime Property preferredBackupTime: The preferred backup time. This parameter is required.
         */
        public Builder preferredBackupTime(final com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }

        /**
         * Property backupRetentionPeriod: The number of days for which backup files are retained.
         * <p>
         * Valid values: 7 to 730.
         * <p>
         * @return {@code this}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The number of days for which backup files are retained. This parameter is required.
         */
        public Builder backupRetentionPeriod(final java.lang.Number backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }
        /**
         * Property backupRetentionPeriod: The number of days for which backup files are retained.
         * <p>
         * Valid values: 7 to 730.
         * <p>
         * @return {@code this}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The number of days for which backup files are retained. This parameter is required.
         */
        public Builder backupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }

        /**
         * Property enableBackupLog: Whether to enable log backup.
         * <p>
         * Valid values: Enable, Disable.
         * <p>
         * @return {@code this}
         * @param enableBackupLog Property enableBackupLog: Whether to enable log backup. This parameter is required.
         */
        public Builder enableBackupLog(final java.lang.String enableBackupLog) {
            this.props.enableBackupLog(enableBackupLog);
            return this;
        }
        /**
         * Property enableBackupLog: Whether to enable log backup.
         * <p>
         * Valid values: Enable, Disable.
         * <p>
         * @return {@code this}
         * @param enableBackupLog Property enableBackupLog: Whether to enable log backup. This parameter is required.
         */
        public Builder enableBackupLog(final com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
            this.props.enableBackupLog(enableBackupLog);
            return this;
        }

        /**
         * Property logBackupRetentionPeriod: The number of days for which log backup files are retained.
         * <p>
         * Valid values: 7 to 730.
         * <p>
         * @return {@code this}
         * @param logBackupRetentionPeriod Property logBackupRetentionPeriod: The number of days for which log backup files are retained. This parameter is required.
         */
        public Builder logBackupRetentionPeriod(final java.lang.Number logBackupRetentionPeriod) {
            this.props.logBackupRetentionPeriod(logBackupRetentionPeriod);
            return this;
        }
        /**
         * Property logBackupRetentionPeriod: The number of days for which log backup files are retained.
         * <p>
         * Valid values: 7 to 730.
         * <p>
         * @return {@code this}
         * @param logBackupRetentionPeriod Property logBackupRetentionPeriod: The number of days for which log backup files are retained. This parameter is required.
         */
        public Builder logBackupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable logBackupRetentionPeriod) {
            this.props.logBackupRetentionPeriod(logBackupRetentionPeriod);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.adb.BackupPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.adb.BackupPolicy build() {
            return new com.aliyun.ros.cdk.adb.BackupPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
