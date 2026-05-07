package com.aliyun.ros.cdk.hbr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::HBR::NasBackupPlan</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.221Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosNasBackupPlan")
public class RosNasBackupPlan extends com.aliyun.ros.cdk.core.RosResource {

    protected RosNasBackupPlan(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosNasBackupPlan(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.hbr.RosNasBackupPlan.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosNasBackupPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.RosNasBackupPlanProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPlanId() {
        return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBackupType() {
        return software.amazon.jsii.Kernel.get(this, "backupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupType", java.util.Objects.requireNonNull(value, "backupType is required"));
    }

    /**
     */
    public void setBackupType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupType", java.util.Objects.requireNonNull(value, "backupType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFileSystemId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemId", java.util.Objects.requireNonNull(value, "fileSystemId is required"));
    }

    /**
     */
    public void setFileSystemId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemId", java.util.Objects.requireNonNull(value, "fileSystemId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPaths() {
        return software.amazon.jsii.Kernel.get(this, "paths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaths(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paths", java.util.Objects.requireNonNull(value, "paths is required"));
    }

    /**
     */
    public void setPaths(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "paths", java.util.Objects.requireNonNull(value, "paths is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPlanName() {
        return software.amazon.jsii.Kernel.get(this, "planName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPlanName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "planName", java.util.Objects.requireNonNull(value, "planName is required"));
    }

    /**
     */
    public void setPlanName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "planName", java.util.Objects.requireNonNull(value, "planName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRetention() {
        return software.amazon.jsii.Kernel.get(this, "retention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRetention(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "retention", java.util.Objects.requireNonNull(value, "retention is required"));
    }

    /**
     */
    public void setRetention(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "retention", java.util.Objects.requireNonNull(value, "retention is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSchedule() {
        return software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSchedule(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "schedule", java.util.Objects.requireNonNull(value, "schedule is required"));
    }

    /**
     */
    public void setSchedule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "schedule", java.util.Objects.requireNonNull(value, "schedule is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVaultId() {
        return software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVaultId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vaultId", java.util.Objects.requireNonNull(value, "vaultId is required"));
    }

    /**
     */
    public void setVaultId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vaultId", java.util.Objects.requireNonNull(value, "vaultId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountRoleName() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountRoleName", value);
    }

    /**
     */
    public void setCrossAccountRoleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountType() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountType", value);
    }

    /**
     */
    public void setCrossAccountType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountUserId() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountUserId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountUserId", value);
    }

    /**
     */
    public void setCrossAccountUserId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountUserId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
        return software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "disabled", value);
    }

    /**
     */
    public void setDisabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "options", value);
    }

    /**
     */
    public void setOptions(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "options", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.RosNasBackupPlan}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.RosNasBackupPlan> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.hbr.RosNasBackupPlanProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.RosNasBackupPlanProps.Builder();
        }

        /**
         * @return {@code this}
         * @param backupType This parameter is required.
         */
        public Builder backupType(final java.lang.String backupType) {
            this.props.backupType(backupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupType This parameter is required.
         */
        public Builder backupType(final com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.props.backupType(backupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param fileSystemId This parameter is required.
         */
        public Builder fileSystemId(final java.lang.String fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }
        /**
         * @return {@code this}
         * @param fileSystemId This parameter is required.
         */
        public Builder fileSystemId(final com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }

        /**
         * @return {@code this}
         * @param paths This parameter is required.
         */
        public Builder paths(final com.aliyun.ros.cdk.core.IResolvable paths) {
            this.props.paths(paths);
            return this;
        }
        /**
         * @return {@code this}
         * @param paths This parameter is required.
         */
        public Builder paths(final java.util.List<? extends java.lang.Object> paths) {
            this.props.paths(paths);
            return this;
        }

        /**
         * @return {@code this}
         * @param planName This parameter is required.
         */
        public Builder planName(final java.lang.String planName) {
            this.props.planName(planName);
            return this;
        }
        /**
         * @return {@code this}
         * @param planName This parameter is required.
         */
        public Builder planName(final com.aliyun.ros.cdk.core.IResolvable planName) {
            this.props.planName(planName);
            return this;
        }

        /**
         * @return {@code this}
         * @param retention This parameter is required.
         */
        public Builder retention(final java.lang.Number retention) {
            this.props.retention(retention);
            return this;
        }
        /**
         * @return {@code this}
         * @param retention This parameter is required.
         */
        public Builder retention(final com.aliyun.ros.cdk.core.IResolvable retention) {
            this.props.retention(retention);
            return this;
        }

        /**
         * @return {@code this}
         * @param schedule This parameter is required.
         */
        public Builder schedule(final java.lang.String schedule) {
            this.props.schedule(schedule);
            return this;
        }
        /**
         * @return {@code this}
         * @param schedule This parameter is required.
         */
        public Builder schedule(final com.aliyun.ros.cdk.core.IResolvable schedule) {
            this.props.schedule(schedule);
            return this;
        }

        /**
         * @return {@code this}
         * @param vaultId This parameter is required.
         */
        public Builder vaultId(final java.lang.String vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vaultId This parameter is required.
         */
        public Builder vaultId(final com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossAccountRoleName This parameter is required.
         */
        public Builder crossAccountRoleName(final java.lang.String crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountRoleName This parameter is required.
         */
        public Builder crossAccountRoleName(final com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossAccountType This parameter is required.
         */
        public Builder crossAccountType(final java.lang.String crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountType This parameter is required.
         */
        public Builder crossAccountType(final com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossAccountUserId This parameter is required.
         */
        public Builder crossAccountUserId(final java.lang.String crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountUserId This parameter is required.
         */
        public Builder crossAccountUserId(final com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }

        /**
         * @return {@code this}
         * @param disabled This parameter is required.
         */
        public Builder disabled(final java.lang.Boolean disabled) {
            this.props.disabled(disabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param disabled This parameter is required.
         */
        public Builder disabled(final com.aliyun.ros.cdk.core.IResolvable disabled) {
            this.props.disabled(disabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param options This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }
        /**
         * @return {@code this}
         * @param options This parameter is required.
         */
        public Builder options(final java.util.Map<java.lang.String, ? extends java.lang.Object> options) {
            this.props.options(options);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.RosNasBackupPlan}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.RosNasBackupPlan build() {
            return new com.aliyun.ros.cdk.hbr.RosNasBackupPlan(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
