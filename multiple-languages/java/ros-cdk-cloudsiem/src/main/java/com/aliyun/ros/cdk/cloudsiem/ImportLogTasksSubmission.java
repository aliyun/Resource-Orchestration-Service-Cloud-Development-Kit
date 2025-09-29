package com.aliyun.ros.cdk.cloudsiem;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudSiem::ImportLogTasksSubmission</code>, which is used to import and submit a log collection task.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.290Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsiem.$Module.class, fqn = "@alicloud/ros-cdk-cloudsiem.ImportLogTasksSubmission")
public class ImportLogTasksSubmission extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudsiem.IImportLogTasksSubmission {

    protected ImportLogTasksSubmission(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ImportLogTasksSubmission(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ImportLogTasksSubmission(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmissionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ImportLogTasksSubmission(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmissionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmissionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmissionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmission}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmission> {
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
        private final com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmissionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmissionProps.Builder();
        }

        /**
         * Property accounts: The list of accounts to be submitted.
         * <p>
         * @return {@code this}
         * @param accounts Property accounts: The list of accounts to be submitted. This parameter is required.
         */
        public Builder accounts(final com.aliyun.ros.cdk.core.IResolvable accounts) {
            this.props.accounts(accounts);
            return this;
        }
        /**
         * Property accounts: The list of accounts to be submitted.
         * <p>
         * @return {@code this}
         * @param accounts Property accounts: The list of accounts to be submitted. This parameter is required.
         */
        public Builder accounts(final java.util.List<? extends java.lang.Object> accounts) {
            this.props.accounts(accounts);
            return this;
        }

        /**
         * Property cloudCode: The cloud code.
         * <p>
         * The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
         * <p>
         * @return {@code this}
         * @param cloudCode Property cloudCode: The cloud code. This parameter is required.
         */
        public Builder cloudCode(final java.lang.String cloudCode) {
            this.props.cloudCode(cloudCode);
            return this;
        }
        /**
         * Property cloudCode: The cloud code.
         * <p>
         * The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
         * <p>
         * @return {@code this}
         * @param cloudCode Property cloudCode: The cloud code. This parameter is required.
         */
        public Builder cloudCode(final com.aliyun.ros.cdk.core.IResolvable cloudCode) {
            this.props.cloudCode(cloudCode);
            return this;
        }

        /**
         * Property logCodes: The list of log codes to be submitted.
         * <p>
         * For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
         * <p>
         * @return {@code this}
         * @param logCodes Property logCodes: The list of log codes to be submitted. This parameter is required.
         */
        public Builder logCodes(final com.aliyun.ros.cdk.core.IResolvable logCodes) {
            this.props.logCodes(logCodes);
            return this;
        }
        /**
         * Property logCodes: The list of log codes to be submitted.
         * <p>
         * For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
         * <p>
         * @return {@code this}
         * @param logCodes Property logCodes: The list of log codes to be submitted. This parameter is required.
         */
        public Builder logCodes(final java.util.List<? extends java.lang.Object> logCodes) {
            this.props.logCodes(logCodes);
            return this;
        }

        /**
         * Property prodCode: The product code.
         * <p>
         * For all available product codes, query the Cloud Siem ListAllProds API.
         * <p>
         * @return {@code this}
         * @param prodCode Property prodCode: The product code. This parameter is required.
         */
        public Builder prodCode(final java.lang.String prodCode) {
            this.props.prodCode(prodCode);
            return this;
        }
        /**
         * Property prodCode: The product code.
         * <p>
         * For all available product codes, query the Cloud Siem ListAllProds API.
         * <p>
         * @return {@code this}
         * @param prodCode Property prodCode: The product code. This parameter is required.
         */
        public Builder prodCode(final com.aliyun.ros.cdk.core.IResolvable prodCode) {
            this.props.prodCode(prodCode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmission}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmission build() {
            return new com.aliyun.ros.cdk.cloudsiem.ImportLogTasksSubmission(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
