package com.aliyun.ros.cdk.cloudsiem;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CloudSiem::ImportLogTasksSubmission</code>, which is used to import and submit a log collection task.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.699Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsiem.$Module.class, fqn = "@alicloud/ros-cdk-cloudsiem.RosImportLogTasksSubmission")
public class RosImportLogTasksSubmission extends com.aliyun.ros.cdk.core.RosResource {

    protected RosImportLogTasksSubmission(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosImportLogTasksSubmission(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmission.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosImportLogTasksSubmission(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmissionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccounts() {
        return software.amazon.jsii.Kernel.get(this, "accounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccounts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accounts", java.util.Objects.requireNonNull(value, "accounts is required"));
    }

    /**
     */
    public void setAccounts(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "accounts", java.util.Objects.requireNonNull(value, "accounts is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCloudCode() {
        return software.amazon.jsii.Kernel.get(this, "cloudCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCloudCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cloudCode", java.util.Objects.requireNonNull(value, "cloudCode is required"));
    }

    /**
     */
    public void setCloudCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cloudCode", java.util.Objects.requireNonNull(value, "cloudCode is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogCodes() {
        return software.amazon.jsii.Kernel.get(this, "logCodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogCodes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logCodes", java.util.Objects.requireNonNull(value, "logCodes is required"));
    }

    /**
     */
    public void setLogCodes(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "logCodes", java.util.Objects.requireNonNull(value, "logCodes is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProdCode() {
        return software.amazon.jsii.Kernel.get(this, "prodCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProdCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "prodCode", java.util.Objects.requireNonNull(value, "prodCode is required"));
    }

    /**
     */
    public void setProdCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "prodCode", java.util.Objects.requireNonNull(value, "prodCode is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmission}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmission> {
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
        private final com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmissionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmissionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param accounts This parameter is required.
         */
        public Builder accounts(final com.aliyun.ros.cdk.core.IResolvable accounts) {
            this.props.accounts(accounts);
            return this;
        }
        /**
         * @return {@code this}
         * @param accounts This parameter is required.
         */
        public Builder accounts(final java.util.List<? extends java.lang.Object> accounts) {
            this.props.accounts(accounts);
            return this;
        }

        /**
         * @return {@code this}
         * @param cloudCode This parameter is required.
         */
        public Builder cloudCode(final java.lang.String cloudCode) {
            this.props.cloudCode(cloudCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param cloudCode This parameter is required.
         */
        public Builder cloudCode(final com.aliyun.ros.cdk.core.IResolvable cloudCode) {
            this.props.cloudCode(cloudCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param logCodes This parameter is required.
         */
        public Builder logCodes(final com.aliyun.ros.cdk.core.IResolvable logCodes) {
            this.props.logCodes(logCodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param logCodes This parameter is required.
         */
        public Builder logCodes(final java.util.List<? extends java.lang.Object> logCodes) {
            this.props.logCodes(logCodes);
            return this;
        }

        /**
         * @return {@code this}
         * @param prodCode This parameter is required.
         */
        public Builder prodCode(final java.lang.String prodCode) {
            this.props.prodCode(prodCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param prodCode This parameter is required.
         */
        public Builder prodCode(final com.aliyun.ros.cdk.core.IResolvable prodCode) {
            this.props.prodCode(prodCode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmission}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmission build() {
            return new com.aliyun.ros.cdk.cloudsiem.RosImportLogTasksSubmission(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
