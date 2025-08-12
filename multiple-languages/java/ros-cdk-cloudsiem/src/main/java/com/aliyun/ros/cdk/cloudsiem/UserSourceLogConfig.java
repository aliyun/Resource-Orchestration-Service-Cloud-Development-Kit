package com.aliyun.ros.cdk.cloudsiem;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudSiem::UserSourceLogConfig</code>, which is used to add logs of a cloud service within an account.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.703Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsiem.$Module.class, fqn = "@alicloud/ros-cdk-cloudsiem.UserSourceLogConfig")
public class UserSourceLogConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudsiem.IUserSourceLogConfig {

    protected UserSourceLogConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserSourceLogConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public UserSourceLogConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public UserSourceLogConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfig> {
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
        private final com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfigProps.Builder();
        }

        /**
         * Property sourceLogCode: The source log code.
         * <p>
         * For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
         * <p>
         * @return {@code this}
         * @param sourceLogCode Property sourceLogCode: The source log code. This parameter is required.
         */
        public Builder sourceLogCode(final java.lang.String sourceLogCode) {
            this.props.sourceLogCode(sourceLogCode);
            return this;
        }
        /**
         * Property sourceLogCode: The source log code.
         * <p>
         * For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
         * <p>
         * @return {@code this}
         * @param sourceLogCode Property sourceLogCode: The source log code. This parameter is required.
         */
        public Builder sourceLogCode(final com.aliyun.ros.cdk.core.IResolvable sourceLogCode) {
            this.props.sourceLogCode(sourceLogCode);
            return this;
        }

        /**
         * Property sourceLogInfo: The info of log to be added.
         * <p>
         * @return {@code this}
         * @param sourceLogInfo Property sourceLogInfo: The info of log to be added. This parameter is required.
         */
        public Builder sourceLogInfo(final com.aliyun.ros.cdk.core.IResolvable sourceLogInfo) {
            this.props.sourceLogInfo(sourceLogInfo);
            return this;
        }
        /**
         * Property sourceLogInfo: The info of log to be added.
         * <p>
         * @return {@code this}
         * @param sourceLogInfo Property sourceLogInfo: The info of log to be added. This parameter is required.
         */
        public Builder sourceLogInfo(final com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty sourceLogInfo) {
            this.props.sourceLogInfo(sourceLogInfo);
            return this;
        }

        /**
         * Property sourceProdCode: The product code.
         * <p>
         * For all available product codes, query the Cloud Siem ListAllProds API.
         * <p>
         * @return {@code this}
         * @param sourceProdCode Property sourceProdCode: The product code. This parameter is required.
         */
        public Builder sourceProdCode(final java.lang.String sourceProdCode) {
            this.props.sourceProdCode(sourceProdCode);
            return this;
        }
        /**
         * Property sourceProdCode: The product code.
         * <p>
         * For all available product codes, query the Cloud Siem ListAllProds API.
         * <p>
         * @return {@code this}
         * @param sourceProdCode Property sourceProdCode: The product code. This parameter is required.
         */
        public Builder sourceProdCode(final com.aliyun.ros.cdk.core.IResolvable sourceProdCode) {
            this.props.sourceProdCode(sourceProdCode);
            return this;
        }

        /**
         * Property subUserId: The Id of the account to be submitted.
         * <p>
         * @return {@code this}
         * @param subUserId Property subUserId: The Id of the account to be submitted. This parameter is required.
         */
        public Builder subUserId(final java.lang.String subUserId) {
            this.props.subUserId(subUserId);
            return this;
        }
        /**
         * Property subUserId: The Id of the account to be submitted.
         * <p>
         * @return {@code this}
         * @param subUserId Property subUserId: The Id of the account to be submitted. This parameter is required.
         */
        public Builder subUserId(final com.aliyun.ros.cdk.core.IResolvable subUserId) {
            this.props.subUserId(subUserId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfig build() {
            return new com.aliyun.ros.cdk.cloudsiem.UserSourceLogConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
