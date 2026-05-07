package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>OtsBackupPlan</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.191Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.OtsBackupPlanProps")
@software.amazon.jsii.Jsii.Proxy(OtsBackupPlanProps.Jsii$Proxy.class)
public interface OtsBackupPlanProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property backupType: Backup type.
     * <p>
     * Valid values: COMPLETE.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackupType();

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
     * Property disabled: Whether to disable the backup task.
     * <p>
     * Valid values: true, false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
        return null;
    }

    /**
     * Property instanceName: The name of the Table store instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property otsDetail: The details about the Table store instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOtsDetail() {
        return null;
    }

    /**
     * Property rules: The backup plan rule.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRules() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link OtsBackupPlanProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OtsBackupPlanProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OtsBackupPlanProps> {
        java.lang.Object backupType;
        java.lang.Object planName;
        java.lang.Object retention;
        java.lang.Object schedule;
        java.lang.Object vaultId;
        java.lang.Object crossAccountRoleName;
        java.lang.Object crossAccountType;
        java.lang.Object crossAccountUserId;
        java.lang.Object disabled;
        java.lang.Object instanceName;
        java.lang.Object otsDetail;
        java.lang.Object rules;

        /**
         * Sets the value of {@link OtsBackupPlanProps#getBackupType}
         * @param backupType Property backupType: Backup type. This parameter is required.
         *                   Valid values: COMPLETE.
         * @return {@code this}
         */
        public Builder backupType(java.lang.String backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getBackupType}
         * @param backupType Property backupType: Backup type. This parameter is required.
         *                   Valid values: COMPLETE.
         * @return {@code this}
         */
        public Builder backupType(com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getPlanName}
         * @param planName Property planName: The name of the backup plan. This parameter is required.
         *                 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
         * @return {@code this}
         */
        public Builder planName(java.lang.String planName) {
            this.planName = planName;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getPlanName}
         * @param planName Property planName: The name of the backup plan. This parameter is required.
         *                 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
         * @return {@code this}
         */
        public Builder planName(com.aliyun.ros.cdk.core.IResolvable planName) {
            this.planName = planName;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getRetention}
         * @param retention Property retention: Backup retention days, the minimum is 1. This parameter is required.
         * @return {@code this}
         */
        public Builder retention(java.lang.Number retention) {
            this.retention = retention;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getRetention}
         * @param retention Property retention: Backup retention days, the minimum is 1. This parameter is required.
         * @return {@code this}
         */
        public Builder retention(com.aliyun.ros.cdk.core.IResolvable retention) {
            this.retention = retention;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getSchedule}
         * @param schedule Property schedule: Backup strategy. This parameter is required.
         *                 Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
         * @return {@code this}
         */
        public Builder schedule(java.lang.String schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getSchedule}
         * @param schedule Property schedule: Backup strategy. This parameter is required.
         *                 Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
         * @return {@code this}
         */
        public Builder schedule(com.aliyun.ros.cdk.core.IResolvable schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getVaultId}
         * @param vaultId Property vaultId: The ID of backup vault. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(java.lang.String vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getVaultId}
         * @param vaultId Property vaultId: The ID of backup vault. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getCrossAccountRoleName}
         * @param crossAccountRoleName Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(java.lang.String crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getCrossAccountRoleName}
         * @param crossAccountRoleName Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getCrossAccountType}
         * @param crossAccountType Property crossAccountType: The type of the cross account backup.
         *                         Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
         * @return {@code this}
         */
        public Builder crossAccountType(java.lang.String crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getCrossAccountType}
         * @param crossAccountType Property crossAccountType: The type of the cross account backup.
         *                         Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
         * @return {@code this}
         */
        public Builder crossAccountType(com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getCrossAccountUserId}
         * @param crossAccountUserId Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
         * @return {@code this}
         */
        public Builder crossAccountUserId(java.lang.String crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getCrossAccountUserId}
         * @param crossAccountUserId Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
         * @return {@code this}
         */
        public Builder crossAccountUserId(com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getDisabled}
         * @param disabled Property disabled: Whether to disable the backup task.
         *                 Valid values: true, false.
         * @return {@code this}
         */
        public Builder disabled(java.lang.Boolean disabled) {
            this.disabled = disabled;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getDisabled}
         * @param disabled Property disabled: Whether to disable the backup task.
         *                 Valid values: true, false.
         * @return {@code this}
         */
        public Builder disabled(com.aliyun.ros.cdk.core.IResolvable disabled) {
            this.disabled = disabled;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the Table store instance.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the Table store instance.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getOtsDetail}
         * @param otsDetail Property otsDetail: The details about the Table store instance.
         * @return {@code this}
         */
        public Builder otsDetail(com.aliyun.ros.cdk.core.IResolvable otsDetail) {
            this.otsDetail = otsDetail;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getOtsDetail}
         * @param otsDetail Property otsDetail: The details about the Table store instance.
         * @return {@code this}
         */
        public Builder otsDetail(com.aliyun.ros.cdk.hbr.RosOtsBackupPlan.OtsDetailProperty otsDetail) {
            this.otsDetail = otsDetail;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getRules}
         * @param rules Property rules: The backup plan rule.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link OtsBackupPlanProps#getRules}
         * @param rules Property rules: The backup plan rule.
         * @return {@code this}
         */
        public Builder rules(java.util.List<? extends java.lang.Object> rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OtsBackupPlanProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OtsBackupPlanProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OtsBackupPlanProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OtsBackupPlanProps {
        private final java.lang.Object backupType;
        private final java.lang.Object planName;
        private final java.lang.Object retention;
        private final java.lang.Object schedule;
        private final java.lang.Object vaultId;
        private final java.lang.Object crossAccountRoleName;
        private final java.lang.Object crossAccountType;
        private final java.lang.Object crossAccountUserId;
        private final java.lang.Object disabled;
        private final java.lang.Object instanceName;
        private final java.lang.Object otsDetail;
        private final java.lang.Object rules;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backupType = software.amazon.jsii.Kernel.get(this, "backupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.planName = software.amazon.jsii.Kernel.get(this, "planName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retention = software.amazon.jsii.Kernel.get(this, "retention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schedule = software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultId = software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountRoleName = software.amazon.jsii.Kernel.get(this, "crossAccountRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountType = software.amazon.jsii.Kernel.get(this, "crossAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountUserId = software.amazon.jsii.Kernel.get(this, "crossAccountUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disabled = software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.otsDetail = software.amazon.jsii.Kernel.get(this, "otsDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backupType = java.util.Objects.requireNonNull(builder.backupType, "backupType is required");
            this.planName = java.util.Objects.requireNonNull(builder.planName, "planName is required");
            this.retention = java.util.Objects.requireNonNull(builder.retention, "retention is required");
            this.schedule = java.util.Objects.requireNonNull(builder.schedule, "schedule is required");
            this.vaultId = java.util.Objects.requireNonNull(builder.vaultId, "vaultId is required");
            this.crossAccountRoleName = builder.crossAccountRoleName;
            this.crossAccountType = builder.crossAccountType;
            this.crossAccountUserId = builder.crossAccountUserId;
            this.disabled = builder.disabled;
            this.instanceName = builder.instanceName;
            this.otsDetail = builder.otsDetail;
            this.rules = builder.rules;
        }

        @Override
        public final java.lang.Object getBackupType() {
            return this.backupType;
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
        public final java.lang.Object getDisabled() {
            return this.disabled;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getOtsDetail() {
            return this.otsDetail;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backupType", om.valueToTree(this.getBackupType()));
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
            if (this.getDisabled() != null) {
                data.set("disabled", om.valueToTree(this.getDisabled()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getOtsDetail() != null) {
                data.set("otsDetail", om.valueToTree(this.getOtsDetail()));
            }
            if (this.getRules() != null) {
                data.set("rules", om.valueToTree(this.getRules()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.OtsBackupPlanProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OtsBackupPlanProps.Jsii$Proxy that = (OtsBackupPlanProps.Jsii$Proxy) o;

            if (!backupType.equals(that.backupType)) return false;
            if (!planName.equals(that.planName)) return false;
            if (!retention.equals(that.retention)) return false;
            if (!schedule.equals(that.schedule)) return false;
            if (!vaultId.equals(that.vaultId)) return false;
            if (this.crossAccountRoleName != null ? !this.crossAccountRoleName.equals(that.crossAccountRoleName) : that.crossAccountRoleName != null) return false;
            if (this.crossAccountType != null ? !this.crossAccountType.equals(that.crossAccountType) : that.crossAccountType != null) return false;
            if (this.crossAccountUserId != null ? !this.crossAccountUserId.equals(that.crossAccountUserId) : that.crossAccountUserId != null) return false;
            if (this.disabled != null ? !this.disabled.equals(that.disabled) : that.disabled != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.otsDetail != null ? !this.otsDetail.equals(that.otsDetail) : that.otsDetail != null) return false;
            return this.rules != null ? this.rules.equals(that.rules) : that.rules == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backupType.hashCode();
            result = 31 * result + (this.planName.hashCode());
            result = 31 * result + (this.retention.hashCode());
            result = 31 * result + (this.schedule.hashCode());
            result = 31 * result + (this.vaultId.hashCode());
            result = 31 * result + (this.crossAccountRoleName != null ? this.crossAccountRoleName.hashCode() : 0);
            result = 31 * result + (this.crossAccountType != null ? this.crossAccountType.hashCode() : 0);
            result = 31 * result + (this.crossAccountUserId != null ? this.crossAccountUserId.hashCode() : 0);
            result = 31 * result + (this.disabled != null ? this.disabled.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.otsDetail != null ? this.otsDetail.hashCode() : 0);
            result = 31 * result + (this.rules != null ? this.rules.hashCode() : 0);
            return result;
        }
    }
}
