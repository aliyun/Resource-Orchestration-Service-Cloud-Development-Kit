package com.aliyun.ros.cdk.adb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ADB::BackupPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:21.087Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adb.$Module.class, fqn = "@alicloud/ros-cdk-adb.RosBackupPolicy")
public class RosBackupPolicy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBackupPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBackupPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.adb.RosBackupPolicy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBackupPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.RosBackupPolicyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPreferredBackupPeriod() {
        return software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreferredBackupPeriod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupPeriod", java.util.Objects.requireNonNull(value, "preferredBackupPeriod is required"));
    }

    /**
     */
    public void setPreferredBackupPeriod(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "preferredBackupPeriod", java.util.Objects.requireNonNull(value, "preferredBackupPeriod is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPreferredBackupTime() {
        return software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreferredBackupTime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupTime", java.util.Objects.requireNonNull(value, "preferredBackupTime is required"));
    }

    /**
     */
    public void setPreferredBackupTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupTime", java.util.Objects.requireNonNull(value, "preferredBackupTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "backupRetentionPeriod", value);
    }

    /**
     */
    public void setBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupRetentionPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableBackupLog() {
        return software.amazon.jsii.Kernel.get(this, "enableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableBackupLog(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enableBackupLog", value);
    }

    /**
     */
    public void setEnableBackupLog(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableBackupLog", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "logBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "logBackupRetentionPeriod", value);
    }

    /**
     */
    public void setLogBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logBackupRetentionPeriod", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.adb.RosBackupPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.adb.RosBackupPolicy> {
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
        private final com.aliyun.ros.cdk.adb.RosBackupPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.adb.RosBackupPolicyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param preferredBackupPeriod This parameter is required.
         */
        public Builder preferredBackupPeriod(final com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param preferredBackupPeriod This parameter is required.
         */
        public Builder preferredBackupPeriod(final java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param preferredBackupTime This parameter is required.
         */
        public Builder preferredBackupTime(final java.lang.String preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param preferredBackupTime This parameter is required.
         */
        public Builder preferredBackupTime(final com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupRetentionPeriod This parameter is required.
         */
        public Builder backupRetentionPeriod(final java.lang.Number backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupRetentionPeriod This parameter is required.
         */
        public Builder backupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableBackupLog This parameter is required.
         */
        public Builder enableBackupLog(final java.lang.String enableBackupLog) {
            this.props.enableBackupLog(enableBackupLog);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableBackupLog This parameter is required.
         */
        public Builder enableBackupLog(final com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
            this.props.enableBackupLog(enableBackupLog);
            return this;
        }

        /**
         * @return {@code this}
         * @param logBackupRetentionPeriod This parameter is required.
         */
        public Builder logBackupRetentionPeriod(final java.lang.Number logBackupRetentionPeriod) {
            this.props.logBackupRetentionPeriod(logBackupRetentionPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param logBackupRetentionPeriod This parameter is required.
         */
        public Builder logBackupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable logBackupRetentionPeriod) {
            this.props.logBackupRetentionPeriod(logBackupRetentionPeriod);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.adb.RosBackupPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.adb.RosBackupPolicy build() {
            return new com.aliyun.ros.cdk.adb.RosBackupPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
