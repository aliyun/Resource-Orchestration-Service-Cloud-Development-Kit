package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>EcsBackupPlan</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.154Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.EcsBackupPlanProps")
@software.amazon.jsii.Jsii.Proxy(EcsBackupPlanProps.Jsii$Proxy.class)
public interface EcsBackupPlanProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property backupType: Backup type.
     * <p>
     * Valid values: COMPLETE.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackupType();

    /**
     * Property instanceId: The ID of ECS instance.
     * <p>
     * The ecs backup client must have been installed on the host.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property planName: The name of the backup plan.
     * <p>
     * 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPlanName();

    /**
     * Property retention: Backup retention days, the minimum is 1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetention();

    /**
     * Property schedule: Backup strategy.
     * <p>
     * Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSchedule();

    /**
     * Property vaultId: The ID of backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultId();

    /**
     * Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountRoleName() {
        return null;
    }

    /**
     * Property crossAccountType: The type of the cross account backup.
     * <p>
     * Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountType() {
        return null;
    }

    /**
     * Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountUserId() {
        return null;
    }

    /**
     * Property detail: The detail of the backup plan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetail() {
        return null;
    }

    /**
     * Property disabled: Whether to disable the backup task.
     * <p>
     * Valid values: true, false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
        return null;
    }

    /**
     * Property exclude: The exclude paths of the backup plan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclude() {
        return null;
    }

    /**
     * Property include: The include paths of the backup plan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInclude() {
        return null;
    }

    /**
     * Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     * Property paths: The paths of the backup plan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaths() {
        return null;
    }

    /**
     * Property speedLimit: The speed limit of the backup plan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpeedLimit() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EcsBackupPlanProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EcsBackupPlanProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EcsBackupPlanProps> {
        java.lang.Object backupType;
        java.lang.Object instanceId;
        java.lang.Object planName;
        java.lang.Object retention;
        java.lang.Object schedule;
        java.lang.Object vaultId;
        java.lang.Object crossAccountRoleName;
        java.lang.Object crossAccountType;
        java.lang.Object crossAccountUserId;
        java.lang.Object detail;
        java.lang.Object disabled;
        java.lang.Object exclude;
        java.lang.Object include;
        java.lang.Object options;
        java.lang.Object paths;
        java.lang.Object speedLimit;

        /**
         * Sets the value of {@link EcsBackupPlanProps#getBackupType}
         * @param backupType Property backupType: Backup type. This parameter is required.
         *                   Valid values: COMPLETE.
         * @return {@code this}
         */
        public Builder backupType(java.lang.String backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getBackupType}
         * @param backupType Property backupType: Backup type. This parameter is required.
         *                   Valid values: COMPLETE.
         * @return {@code this}
         */
        public Builder backupType(com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of ECS instance. This parameter is required.
         *                   The ecs backup client must have been installed on the host.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of ECS instance. This parameter is required.
         *                   The ecs backup client must have been installed on the host.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getPlanName}
         * @param planName Property planName: The name of the backup plan. This parameter is required.
         *                 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
         * @return {@code this}
         */
        public Builder planName(java.lang.String planName) {
            this.planName = planName;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getPlanName}
         * @param planName Property planName: The name of the backup plan. This parameter is required.
         *                 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
         * @return {@code this}
         */
        public Builder planName(com.aliyun.ros.cdk.core.IResolvable planName) {
            this.planName = planName;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getRetention}
         * @param retention Property retention: Backup retention days, the minimum is 1. This parameter is required.
         * @return {@code this}
         */
        public Builder retention(java.lang.Number retention) {
            this.retention = retention;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getRetention}
         * @param retention Property retention: Backup retention days, the minimum is 1. This parameter is required.
         * @return {@code this}
         */
        public Builder retention(com.aliyun.ros.cdk.core.IResolvable retention) {
            this.retention = retention;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getSchedule}
         * @param schedule Property schedule: Backup strategy. This parameter is required.
         *                 Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
         * @return {@code this}
         */
        public Builder schedule(java.lang.String schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getSchedule}
         * @param schedule Property schedule: Backup strategy. This parameter is required.
         *                 Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
         * @return {@code this}
         */
        public Builder schedule(com.aliyun.ros.cdk.core.IResolvable schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getVaultId}
         * @param vaultId Property vaultId: The ID of backup vault. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(java.lang.String vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getVaultId}
         * @param vaultId Property vaultId: The ID of backup vault. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getCrossAccountRoleName}
         * @param crossAccountRoleName Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(java.lang.String crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getCrossAccountRoleName}
         * @param crossAccountRoleName Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getCrossAccountType}
         * @param crossAccountType Property crossAccountType: The type of the cross account backup.
         *                         Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
         * @return {@code this}
         */
        public Builder crossAccountType(java.lang.String crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getCrossAccountType}
         * @param crossAccountType Property crossAccountType: The type of the cross account backup.
         *                         Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
         * @return {@code this}
         */
        public Builder crossAccountType(com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getCrossAccountUserId}
         * @param crossAccountUserId Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
         * @return {@code this}
         */
        public Builder crossAccountUserId(java.lang.String crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getCrossAccountUserId}
         * @param crossAccountUserId Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
         * @return {@code this}
         */
        public Builder crossAccountUserId(com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getDetail}
         * @param detail Property detail: The detail of the backup plan.
         * @return {@code this}
         */
        public Builder detail(com.aliyun.ros.cdk.core.IResolvable detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getDetail}
         * @param detail Property detail: The detail of the backup plan.
         * @return {@code this}
         */
        public Builder detail(java.util.Map<java.lang.String, ? extends java.lang.Object> detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getDisabled}
         * @param disabled Property disabled: Whether to disable the backup task.
         *                 Valid values: true, false.
         * @return {@code this}
         */
        public Builder disabled(java.lang.Boolean disabled) {
            this.disabled = disabled;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getDisabled}
         * @param disabled Property disabled: Whether to disable the backup task.
         *                 Valid values: true, false.
         * @return {@code this}
         */
        public Builder disabled(com.aliyun.ros.cdk.core.IResolvable disabled) {
            this.disabled = disabled;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getExclude}
         * @param exclude Property exclude: The exclude paths of the backup plan.
         * @return {@code this}
         */
        public Builder exclude(java.lang.String exclude) {
            this.exclude = exclude;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getExclude}
         * @param exclude Property exclude: The exclude paths of the backup plan.
         * @return {@code this}
         */
        public Builder exclude(com.aliyun.ros.cdk.core.IResolvable exclude) {
            this.exclude = exclude;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getInclude}
         * @param include Property include: The include paths of the backup plan.
         * @return {@code this}
         */
        public Builder include(java.lang.String include) {
            this.include = include;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getInclude}
         * @param include Property include: The include paths of the backup plan.
         * @return {@code this}
         */
        public Builder include(com.aliyun.ros.cdk.core.IResolvable include) {
            this.include = include;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getOptions}
         * @param options Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
         * @return {@code this}
         */
        public Builder options(com.aliyun.ros.cdk.core.IResolvable options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getOptions}
         * @param options Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
         * @return {@code this}
         */
        public Builder options(java.util.Map<java.lang.String, ? extends java.lang.Object> options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getPaths}
         * @param paths Property paths: The paths of the backup plan.
         * @return {@code this}
         */
        public Builder paths(com.aliyun.ros.cdk.core.IResolvable paths) {
            this.paths = paths;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getPaths}
         * @param paths Property paths: The paths of the backup plan.
         * @return {@code this}
         */
        public Builder paths(java.util.List<? extends java.lang.Object> paths) {
            this.paths = paths;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getSpeedLimit}
         * @param speedLimit Property speedLimit: The speed limit of the backup plan.
         * @return {@code this}
         */
        public Builder speedLimit(java.lang.String speedLimit) {
            this.speedLimit = speedLimit;
            return this;
        }

        /**
         * Sets the value of {@link EcsBackupPlanProps#getSpeedLimit}
         * @param speedLimit Property speedLimit: The speed limit of the backup plan.
         * @return {@code this}
         */
        public Builder speedLimit(com.aliyun.ros.cdk.core.IResolvable speedLimit) {
            this.speedLimit = speedLimit;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EcsBackupPlanProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EcsBackupPlanProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EcsBackupPlanProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EcsBackupPlanProps {
        private final java.lang.Object backupType;
        private final java.lang.Object instanceId;
        private final java.lang.Object planName;
        private final java.lang.Object retention;
        private final java.lang.Object schedule;
        private final java.lang.Object vaultId;
        private final java.lang.Object crossAccountRoleName;
        private final java.lang.Object crossAccountType;
        private final java.lang.Object crossAccountUserId;
        private final java.lang.Object detail;
        private final java.lang.Object disabled;
        private final java.lang.Object exclude;
        private final java.lang.Object include;
        private final java.lang.Object options;
        private final java.lang.Object paths;
        private final java.lang.Object speedLimit;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backupType = software.amazon.jsii.Kernel.get(this, "backupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.planName = software.amazon.jsii.Kernel.get(this, "planName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retention = software.amazon.jsii.Kernel.get(this, "retention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schedule = software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultId = software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountRoleName = software.amazon.jsii.Kernel.get(this, "crossAccountRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountType = software.amazon.jsii.Kernel.get(this, "crossAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountUserId = software.amazon.jsii.Kernel.get(this, "crossAccountUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.detail = software.amazon.jsii.Kernel.get(this, "detail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disabled = software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exclude = software.amazon.jsii.Kernel.get(this, "exclude", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.include = software.amazon.jsii.Kernel.get(this, "include", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paths = software.amazon.jsii.Kernel.get(this, "paths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.speedLimit = software.amazon.jsii.Kernel.get(this, "speedLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backupType = java.util.Objects.requireNonNull(builder.backupType, "backupType is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.planName = java.util.Objects.requireNonNull(builder.planName, "planName is required");
            this.retention = java.util.Objects.requireNonNull(builder.retention, "retention is required");
            this.schedule = java.util.Objects.requireNonNull(builder.schedule, "schedule is required");
            this.vaultId = java.util.Objects.requireNonNull(builder.vaultId, "vaultId is required");
            this.crossAccountRoleName = builder.crossAccountRoleName;
            this.crossAccountType = builder.crossAccountType;
            this.crossAccountUserId = builder.crossAccountUserId;
            this.detail = builder.detail;
            this.disabled = builder.disabled;
            this.exclude = builder.exclude;
            this.include = builder.include;
            this.options = builder.options;
            this.paths = builder.paths;
            this.speedLimit = builder.speedLimit;
        }

        @Override
        public final java.lang.Object getBackupType() {
            return this.backupType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getPlanName() {
            return this.planName;
        }

        @Override
        public final java.lang.Object getRetention() {
            return this.retention;
        }

        @Override
        public final java.lang.Object getSchedule() {
            return this.schedule;
        }

        @Override
        public final java.lang.Object getVaultId() {
            return this.vaultId;
        }

        @Override
        public final java.lang.Object getCrossAccountRoleName() {
            return this.crossAccountRoleName;
        }

        @Override
        public final java.lang.Object getCrossAccountType() {
            return this.crossAccountType;
        }

        @Override
        public final java.lang.Object getCrossAccountUserId() {
            return this.crossAccountUserId;
        }

        @Override
        public final java.lang.Object getDetail() {
            return this.detail;
        }

        @Override
        public final java.lang.Object getDisabled() {
            return this.disabled;
        }

        @Override
        public final java.lang.Object getExclude() {
            return this.exclude;
        }

        @Override
        public final java.lang.Object getInclude() {
            return this.include;
        }

        @Override
        public final java.lang.Object getOptions() {
            return this.options;
        }

        @Override
        public final java.lang.Object getPaths() {
            return this.paths;
        }

        @Override
        public final java.lang.Object getSpeedLimit() {
            return this.speedLimit;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backupType", om.valueToTree(this.getBackupType()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("planName", om.valueToTree(this.getPlanName()));
            data.set("retention", om.valueToTree(this.getRetention()));
            data.set("schedule", om.valueToTree(this.getSchedule()));
            data.set("vaultId", om.valueToTree(this.getVaultId()));
            if (this.getCrossAccountRoleName() != null) {
                data.set("crossAccountRoleName", om.valueToTree(this.getCrossAccountRoleName()));
            }
            if (this.getCrossAccountType() != null) {
                data.set("crossAccountType", om.valueToTree(this.getCrossAccountType()));
            }
            if (this.getCrossAccountUserId() != null) {
                data.set("crossAccountUserId", om.valueToTree(this.getCrossAccountUserId()));
            }
            if (this.getDetail() != null) {
                data.set("detail", om.valueToTree(this.getDetail()));
            }
            if (this.getDisabled() != null) {
                data.set("disabled", om.valueToTree(this.getDisabled()));
            }
            if (this.getExclude() != null) {
                data.set("exclude", om.valueToTree(this.getExclude()));
            }
            if (this.getInclude() != null) {
                data.set("include", om.valueToTree(this.getInclude()));
            }
            if (this.getOptions() != null) {
                data.set("options", om.valueToTree(this.getOptions()));
            }
            if (this.getPaths() != null) {
                data.set("paths", om.valueToTree(this.getPaths()));
            }
            if (this.getSpeedLimit() != null) {
                data.set("speedLimit", om.valueToTree(this.getSpeedLimit()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.EcsBackupPlanProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EcsBackupPlanProps.Jsii$Proxy that = (EcsBackupPlanProps.Jsii$Proxy) o;

            if (!backupType.equals(that.backupType)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!planName.equals(that.planName)) return false;
            if (!retention.equals(that.retention)) return false;
            if (!schedule.equals(that.schedule)) return false;
            if (!vaultId.equals(that.vaultId)) return false;
            if (this.crossAccountRoleName != null ? !this.crossAccountRoleName.equals(that.crossAccountRoleName) : that.crossAccountRoleName != null) return false;
            if (this.crossAccountType != null ? !this.crossAccountType.equals(that.crossAccountType) : that.crossAccountType != null) return false;
            if (this.crossAccountUserId != null ? !this.crossAccountUserId.equals(that.crossAccountUserId) : that.crossAccountUserId != null) return false;
            if (this.detail != null ? !this.detail.equals(that.detail) : that.detail != null) return false;
            if (this.disabled != null ? !this.disabled.equals(that.disabled) : that.disabled != null) return false;
            if (this.exclude != null ? !this.exclude.equals(that.exclude) : that.exclude != null) return false;
            if (this.include != null ? !this.include.equals(that.include) : that.include != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            if (this.paths != null ? !this.paths.equals(that.paths) : that.paths != null) return false;
            return this.speedLimit != null ? this.speedLimit.equals(that.speedLimit) : that.speedLimit == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backupType.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.planName.hashCode());
            result = 31 * result + (this.retention.hashCode());
            result = 31 * result + (this.schedule.hashCode());
            result = 31 * result + (this.vaultId.hashCode());
            result = 31 * result + (this.crossAccountRoleName != null ? this.crossAccountRoleName.hashCode() : 0);
            result = 31 * result + (this.crossAccountType != null ? this.crossAccountType.hashCode() : 0);
            result = 31 * result + (this.crossAccountUserId != null ? this.crossAccountUserId.hashCode() : 0);
            result = 31 * result + (this.detail != null ? this.detail.hashCode() : 0);
            result = 31 * result + (this.disabled != null ? this.disabled.hashCode() : 0);
            result = 31 * result + (this.exclude != null ? this.exclude.hashCode() : 0);
            result = 31 * result + (this.include != null ? this.include.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.paths != null ? this.paths.hashCode() : 0);
            result = 31 * result + (this.speedLimit != null ? this.speedLimit.hashCode() : 0);
            return result;
        }
    }
}
