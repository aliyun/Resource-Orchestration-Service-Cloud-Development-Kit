package com.aliyun.ros.cdk.hbr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::HBR::OssBackupPlan</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:25:51.772Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.OssBackupPlan")
public class OssBackupPlan extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.hbr.IOssBackupPlan {

    protected OssBackupPlan(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OssBackupPlan(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public OssBackupPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.OssBackupPlanProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public OssBackupPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.OssBackupPlanProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PlanId: The ID of the backup plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanId() {
        return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.OssBackupPlanProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.OssBackupPlanProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.OssBackupPlan}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.OssBackupPlan> {
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
        private final com.aliyun.ros.cdk.hbr.OssBackupPlanProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.OssBackupPlanProps.Builder();
        }

        /**
         * Property backupType: Backup type.
         * <p>
         * Valid values: COMPLETE.
         * <p>
         * @return {@code this}
         * @param backupType Property backupType: Backup type. This parameter is required.
         */
        public Builder backupType(final java.lang.String backupType) {
            this.props.backupType(backupType);
            return this;
        }
        /**
         * Property backupType: Backup type.
         * <p>
         * Valid values: COMPLETE.
         * <p>
         * @return {@code this}
         * @param backupType Property backupType: Backup type. This parameter is required.
         */
        public Builder backupType(final com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.props.backupType(backupType);
            return this;
        }

        /**
         * Property bucket: The name of OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucket Property bucket: The name of OSS bucket. This parameter is required.
         */
        public Builder bucket(final java.lang.String bucket) {
            this.props.bucket(bucket);
            return this;
        }
        /**
         * Property bucket: The name of OSS bucket.
         * <p>
         * @return {@code this}
         * @param bucket Property bucket: The name of OSS bucket. This parameter is required.
         */
        public Builder bucket(final com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.props.bucket(bucket);
            return this;
        }

        /**
         * Property planName: The name of the backup plan.
         * <p>
         * 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
         * <p>
         * @return {@code this}
         * @param planName Property planName: The name of the backup plan. This parameter is required.
         */
        public Builder planName(final java.lang.String planName) {
            this.props.planName(planName);
            return this;
        }
        /**
         * Property planName: The name of the backup plan.
         * <p>
         * 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
         * <p>
         * @return {@code this}
         * @param planName Property planName: The name of the backup plan. This parameter is required.
         */
        public Builder planName(final com.aliyun.ros.cdk.core.IResolvable planName) {
            this.props.planName(planName);
            return this;
        }

        /**
         * Property retention: Backup retention days, the minimum is 1.
         * <p>
         * @return {@code this}
         * @param retention Property retention: Backup retention days, the minimum is 1. This parameter is required.
         */
        public Builder retention(final java.lang.Number retention) {
            this.props.retention(retention);
            return this;
        }
        /**
         * Property retention: Backup retention days, the minimum is 1.
         * <p>
         * @return {@code this}
         * @param retention Property retention: Backup retention days, the minimum is 1. This parameter is required.
         */
        public Builder retention(final com.aliyun.ros.cdk.core.IResolvable retention) {
            this.props.retention(retention);
            return this;
        }

        /**
         * Property schedule: Backup strategy.
         * <p>
         * Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
         * <p>
         * @return {@code this}
         * @param schedule Property schedule: Backup strategy. This parameter is required.
         */
        public Builder schedule(final java.lang.String schedule) {
            this.props.schedule(schedule);
            return this;
        }
        /**
         * Property schedule: Backup strategy.
         * <p>
         * Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
         * <p>
         * @return {@code this}
         * @param schedule Property schedule: Backup strategy. This parameter is required.
         */
        public Builder schedule(final com.aliyun.ros.cdk.core.IResolvable schedule) {
            this.props.schedule(schedule);
            return this;
        }

        /**
         * Property vaultId: The ID of backup vault.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: The ID of backup vault. This parameter is required.
         */
        public Builder vaultId(final java.lang.String vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }
        /**
         * Property vaultId: The ID of backup vault.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: The ID of backup vault. This parameter is required.
         */
        public Builder vaultId(final com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }

        /**
         * Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
         * <p>
         * @return {@code this}
         * @param crossAccountRoleName Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account. This parameter is required.
         */
        public Builder crossAccountRoleName(final java.lang.String crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }
        /**
         * Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
         * <p>
         * @return {@code this}
         * @param crossAccountRoleName Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account. This parameter is required.
         */
        public Builder crossAccountRoleName(final com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }

        /**
         * Property crossAccountType: The type of the cross account backup.
         * <p>
         * Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
         * <p>
         * @return {@code this}
         * @param crossAccountType Property crossAccountType: The type of the cross account backup. This parameter is required.
         */
        public Builder crossAccountType(final java.lang.String crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }
        /**
         * Property crossAccountType: The type of the cross account backup.
         * <p>
         * Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
         * <p>
         * @return {@code this}
         * @param crossAccountType Property crossAccountType: The type of the cross account backup. This parameter is required.
         */
        public Builder crossAccountType(final com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }

        /**
         * Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
         * <p>
         * @return {@code this}
         * @param crossAccountUserId Property crossAccountUserId: The original account ID of the cross account backup managed by the current account. This parameter is required.
         */
        public Builder crossAccountUserId(final java.lang.String crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }
        /**
         * Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
         * <p>
         * @return {@code this}
         * @param crossAccountUserId Property crossAccountUserId: The original account ID of the cross account backup managed by the current account. This parameter is required.
         */
        public Builder crossAccountUserId(final com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }

        /**
         * Property disabled: Whether to disable the backup task.
         * <p>
         * Valid values: true, false.
         * <p>
         * @return {@code this}
         * @param disabled Property disabled: Whether to disable the backup task. This parameter is required.
         */
        public Builder disabled(final java.lang.Boolean disabled) {
            this.props.disabled(disabled);
            return this;
        }
        /**
         * Property disabled: Whether to disable the backup task.
         * <p>
         * Valid values: true, false.
         * <p>
         * @return {@code this}
         * @param disabled Property disabled: Whether to disable the backup task. This parameter is required.
         */
        public Builder disabled(final com.aliyun.ros.cdk.core.IResolvable disabled) {
            this.props.disabled(disabled);
            return this;
        }

        /**
         * Property prefix: Backup prefix.
         * <p>
         * Once specified, only objects with matching prefixes will be backed up.
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Backup prefix. This parameter is required.
         */
        public Builder prefix(final java.lang.String prefix) {
            this.props.prefix(prefix);
            return this;
        }
        /**
         * Property prefix: Backup prefix.
         * <p>
         * Once specified, only objects with matching prefixes will be backed up.
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Backup prefix. This parameter is required.
         */
        public Builder prefix(final com.aliyun.ros.cdk.core.IResolvable prefix) {
            this.props.prefix(prefix);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.OssBackupPlan}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.OssBackupPlan build() {
            return new com.aliyun.ros.cdk.hbr.OssBackupPlan(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
