package com.aliyun.ros.cdk.dbs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::DBS::BackupPlans</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:14.791Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.datasource.BackupPlans")
public class BackupPlans extends com.aliyun.ros.cdk.core.Resource {

    protected BackupPlans(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BackupPlans(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public BackupPlans(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public BackupPlans(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public BackupPlans(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute BackupPlanIds: The list of backup plan IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBackupPlanIds() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupPlanIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BackupPlans: The list of backup plans.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBackupPlans() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupPlans", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dbs.datasource.BackupPlans}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dbs.datasource.BackupPlans> {
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
        private com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property backupPlanId: The ID of the backup schedule.
         * <p>
         * @return {@code this}
         * @param backupPlanId Property backupPlanId: The ID of the backup schedule. This parameter is required.
         */
        public Builder backupPlanId(final java.lang.String backupPlanId) {
            this.props().backupPlanId(backupPlanId);
            return this;
        }
        /**
         * Property backupPlanId: The ID of the backup schedule.
         * <p>
         * @return {@code this}
         * @param backupPlanId Property backupPlanId: The ID of the backup schedule. This parameter is required.
         */
        public Builder backupPlanId(final com.aliyun.ros.cdk.core.IResolvable backupPlanId) {
            this.props().backupPlanId(backupPlanId);
            return this;
        }

        /**
         * Property backupPlanName: The name of the backup schedule.
         * <p>
         * @return {@code this}
         * @param backupPlanName Property backupPlanName: The name of the backup schedule. This parameter is required.
         */
        public Builder backupPlanName(final java.lang.String backupPlanName) {
            this.props().backupPlanName(backupPlanName);
            return this;
        }
        /**
         * Property backupPlanName: The name of the backup schedule.
         * <p>
         * @return {@code this}
         * @param backupPlanName Property backupPlanName: The name of the backup schedule. This parameter is required.
         */
        public Builder backupPlanName(final com.aliyun.ros.cdk.core.IResolvable backupPlanName) {
            this.props().backupPlanName(backupPlanName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dbs.datasource.BackupPlans}.
         */
        @Override
        public com.aliyun.ros.cdk.dbs.datasource.BackupPlans build() {
            return new com.aliyun.ros.cdk.dbs.datasource.BackupPlans(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.dbs.datasource.BackupPlansProps.Builder();
            }
            return this.props;
        }
    }
}
