package com.aliyun.ros.cdk.cr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CR::InstanceV2</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:54:06.902Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.InstanceV2")
public class InstanceV2 extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cr.IInstanceV2 {

    protected InstanceV2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceV2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public InstanceV2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceV2Props props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public InstanceV2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceV2Props props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The time when the instance was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndTime: Expiration Time of instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceEndpoints: Instance Network Access Endpoints.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceEndpoints() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceEndpoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the Container Registry instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceIssue: The issue occurs on the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIssue() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIssue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceName: The name of the Container Registry instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModifiedTime: The time when the instance was last modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: Payment type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RenewalStatus: Automatic renewal status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewalStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RenewPeriod: Automatic renewal cycle, in months.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.InstanceV2Props getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.InstanceV2Props.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.InstanceV2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.InstanceV2> {
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
        private final com.aliyun.ros.cdk.cr.InstanceV2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.InstanceV2Props.Builder();
        }

        /**
         * Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last). This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last). This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition.
         * <p>
         * Valid values:
         * Basic: Basic instance.
         * Standard: Standard instance.
         * Advanced: Advanced Edition Instance.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition.
         * <p>
         * Valid values:
         * Basic: Basic instance.
         * Standard: Standard instance.
         * Advanced: Advanced Edition Instance.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property paymentType: Payment type, value: - Subscription: Prepaid.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Payment type, value: - Subscription: Prepaid. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: Payment type, value: - Subscription: Prepaid.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Payment type, value: - Subscription: Prepaid. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property customOssBucket: Custom OSS Bucket name.
         * <p>
         * @return {@code this}
         * @param customOssBucket Property customOssBucket: Custom OSS Bucket name. This parameter is required.
         */
        public Builder customOssBucket(final java.lang.String customOssBucket) {
            this.props.customOssBucket(customOssBucket);
            return this;
        }
        /**
         * Property customOssBucket: Custom OSS Bucket name.
         * <p>
         * @return {@code this}
         * @param customOssBucket Property customOssBucket: Custom OSS Bucket name. This parameter is required.
         */
        public Builder customOssBucket(final com.aliyun.ros.cdk.core.IResolvable customOssBucket) {
            this.props.customOssBucket(customOssBucket);
            return this;
        }

        /**
         * Property defaultOssBucket: Whether to use the default OSS Bucket.
         * <p>
         * Value:
         * true: Use the default OSS Bucket.
         * false: Use a custom OSS Bucket.
         * <p>
         * @return {@code this}
         * @param defaultOssBucket Property defaultOssBucket: Whether to use the default OSS Bucket. This parameter is required.
         */
        public Builder defaultOssBucket(final java.lang.Boolean defaultOssBucket) {
            this.props.defaultOssBucket(defaultOssBucket);
            return this;
        }
        /**
         * Property defaultOssBucket: Whether to use the default OSS Bucket.
         * <p>
         * Value:
         * true: Use the default OSS Bucket.
         * false: Use a custom OSS Bucket.
         * <p>
         * @return {@code this}
         * @param defaultOssBucket Property defaultOssBucket: Whether to use the default OSS Bucket. This parameter is required.
         */
        public Builder defaultOssBucket(final com.aliyun.ros.cdk.core.IResolvable defaultOssBucket) {
            this.props.defaultOssBucket(defaultOssBucket);
            return this;
        }

        /**
         * Property imageScanner: The security scan engine used by the Enterprise Edition of Container Image Service.
         * <p>
         * Value:
         * ACR: Uses the Trivy scan engine provided by default.
         * SAS: uses the enhanced cloud security scan engine.
         * <p>
         * @return {@code this}
         * @param imageScanner Property imageScanner: The security scan engine used by the Enterprise Edition of Container Image Service. This parameter is required.
         */
        public Builder imageScanner(final java.lang.String imageScanner) {
            this.props.imageScanner(imageScanner);
            return this;
        }
        /**
         * Property imageScanner: The security scan engine used by the Enterprise Edition of Container Image Service.
         * <p>
         * Value:
         * ACR: Uses the Trivy scan engine provided by default.
         * SAS: uses the enhanced cloud security scan engine.
         * <p>
         * @return {@code this}
         * @param imageScanner Property imageScanner: The security scan engine used by the Enterprise Edition of Container Image Service. This parameter is required.
         */
        public Builder imageScanner(final com.aliyun.ros.cdk.core.IResolvable imageScanner) {
            this.props.imageScanner(imageScanner);
            return this;
        }

        /**
         * Property password: Login password, 8-32 digits, must contain at least two letters, symbols, or numbers.
         * <p>
         * @return {@code this}
         * @param password Property password: Login password, 8-32 digits, must contain at least two letters, symbols, or numbers. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: Login password, 8-32 digits, must contain at least two letters, symbols, or numbers.
         * <p>
         * @return {@code this}
         * @param password Property password: Login password, 8-32 digits, must contain at least two letters, symbols, or numbers. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property period: Prepaid cycle.
         * <p>
         * The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
         * <p>
         * <blockquote>
         * <p>
         * must be set when creating a prepaid instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid cycle. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Prepaid cycle.
         * <p>
         * The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
         * <p>
         * <blockquote>
         * <p>
         * must be set when creating a prepaid instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid cycle. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
         * <p>
         * <ul>
         * <li>ManualRenewal: manual renewal.
         * Default ManualRenewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }
        /**
         * Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
         * <p>
         * <ul>
         * <li>ManualRenewal: manual renewal.
         * Default ManualRenewal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }

        /**
         * Property renewPeriod: Automatic renewal cycle, in months.
         * <p>
         * <blockquote>
         * <p>
         * When <strong>RenewalStatus</strong> is set to <strong>AutoRenewal</strong>, it must be set.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod: Automatic renewal cycle, in months. This parameter is required.
         */
        public Builder renewPeriod(final java.lang.Number renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }
        /**
         * Property renewPeriod: Automatic renewal cycle, in months.
         * <p>
         * <blockquote>
         * <p>
         * When <strong>RenewalStatus</strong> is set to <strong>AutoRenewal</strong>, it must be set.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod: Automatic renewal cycle, in months. This parameter is required.
         */
        public Builder renewPeriod(final com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.InstanceV2}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.InstanceV2 build() {
            return new com.aliyun.ros.cdk.cr.InstanceV2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
