package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>RosOtsBackupPlan</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:25:51.818Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosOtsBackupPlanProps")
@software.amazon.jsii.Jsii.Proxy(RosOtsBackupPlanProps.Jsii$Proxy.class)
public interface RosOtsBackupPlanProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackupType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPlanName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetention();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSchedule();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountUserId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOtsDetail() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRules() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosOtsBackupPlanProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosOtsBackupPlanProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosOtsBackupPlanProps> {
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
         * Sets the value of {@link RosOtsBackupPlanProps#getBackupType}
         * @param backupType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backupType(java.lang.String backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getBackupType}
         * @param backupType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backupType(com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getPlanName}
         * @param planName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder planName(java.lang.String planName) {
            this.planName = planName;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getPlanName}
         * @param planName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder planName(com.aliyun.ros.cdk.core.IResolvable planName) {
            this.planName = planName;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getRetention}
         * @param retention the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retention(java.lang.Number retention) {
            this.retention = retention;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getRetention}
         * @param retention the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retention(com.aliyun.ros.cdk.core.IResolvable retention) {
            this.retention = retention;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getSchedule}
         * @param schedule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder schedule(java.lang.String schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getSchedule}
         * @param schedule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder schedule(com.aliyun.ros.cdk.core.IResolvable schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getVaultId}
         * @param vaultId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(java.lang.String vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getVaultId}
         * @param vaultId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getCrossAccountRoleName}
         * @param crossAccountRoleName the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(java.lang.String crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getCrossAccountRoleName}
         * @param crossAccountRoleName the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getCrossAccountType}
         * @param crossAccountType the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountType(java.lang.String crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getCrossAccountType}
         * @param crossAccountType the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountType(com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getCrossAccountUserId}
         * @param crossAccountUserId the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountUserId(java.lang.String crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getCrossAccountUserId}
         * @param crossAccountUserId the value to be set.
         * @return {@code this}
         */
        public Builder crossAccountUserId(com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getDisabled}
         * @param disabled the value to be set.
         * @return {@code this}
         */
        public Builder disabled(java.lang.Boolean disabled) {
            this.disabled = disabled;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getDisabled}
         * @param disabled the value to be set.
         * @return {@code this}
         */
        public Builder disabled(com.aliyun.ros.cdk.core.IResolvable disabled) {
            this.disabled = disabled;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getOtsDetail}
         * @param otsDetail the value to be set.
         * @return {@code this}
         */
        public Builder otsDetail(com.aliyun.ros.cdk.core.IResolvable otsDetail) {
            this.otsDetail = otsDetail;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getOtsDetail}
         * @param otsDetail the value to be set.
         * @return {@code this}
         */
        public Builder otsDetail(com.aliyun.ros.cdk.hbr.RosOtsBackupPlan.OtsDetailProperty otsDetail) {
            this.otsDetail = otsDetail;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getRules}
         * @param rules the value to be set.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosOtsBackupPlanProps#getRules}
         * @param rules the value to be set.
         * @return {@code this}
         */
        public Builder rules(java.util.List<? extends java.lang.Object> rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosOtsBackupPlanProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosOtsBackupPlanProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosOtsBackupPlanProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosOtsBackupPlanProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosOtsBackupPlanProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosOtsBackupPlanProps.Jsii$Proxy that = (RosOtsBackupPlanProps.Jsii$Proxy) o;

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
