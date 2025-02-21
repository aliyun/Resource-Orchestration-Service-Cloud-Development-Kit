package com.aliyun.ros.cdk.kms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::KMS::Instance</code>, which is used to create a Key Management Service (KMS) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.729Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.kms.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.kms.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kms.Instance> {
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
        private final com.aliyun.ros.cdk.kms.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kms.InstanceProps.Builder();
        }

        /**
         * Property productVersion: KMS Instance commodity type (software/software-small/hardware/hardware-small).
         * <p>
         * @return {@code this}
         * @param productVersion Property productVersion: KMS Instance commodity type (software/software-small/hardware/hardware-small). This parameter is required.
         */
        public Builder productVersion(final java.lang.String productVersion) {
            this.props.productVersion(productVersion);
            return this;
        }
        /**
         * Property productVersion: KMS Instance commodity type (software/software-small/hardware/hardware-small).
         * <p>
         * @return {@code this}
         * @param productVersion Property productVersion: KMS Instance commodity type (software/software-small/hardware/hardware-small). This parameter is required.
         */
        public Builder productVersion(final com.aliyun.ros.cdk.core.IResolvable productVersion) {
            this.props.productVersion(productVersion);
            return this;
        }

        /**
         * Property connection:.
         * <p>
         * @return {@code this}
         * @param connection Property connection:. This parameter is required.
         */
        public Builder connection(final com.aliyun.ros.cdk.core.IResolvable connection) {
            this.props.connection(connection);
            return this;
        }
        /**
         * Property connection:.
         * <p>
         * @return {@code this}
         * @param connection Property connection:. This parameter is required.
         */
        public Builder connection(final com.aliyun.ros.cdk.kms.RosInstance.ConnectionProperty connection) {
            this.props.connection(connection);
            return this;
        }

        /**
         * Property instanceChargeType: Billing method of the KMS instance, default to Subscription.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Billing method of the KMS instance, default to Subscription. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Billing method of the KMS instance, default to Subscription.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Billing method of the KMS instance, default to Subscription. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property keyNum: Maximum number of stored keys.
         * <p>
         * It is required when the InstanceCharge is Subscription.
         * <p>
         * @return {@code this}
         * @param keyNum Property keyNum: Maximum number of stored keys. This parameter is required.
         */
        public Builder keyNum(final java.lang.Number keyNum) {
            this.props.keyNum(keyNum);
            return this;
        }
        /**
         * Property keyNum: Maximum number of stored keys.
         * <p>
         * It is required when the InstanceCharge is Subscription.
         * <p>
         * @return {@code this}
         * @param keyNum Property keyNum: Maximum number of stored keys. This parameter is required.
         */
        public Builder keyNum(final com.aliyun.ros.cdk.core.IResolvable keyNum) {
            this.props.keyNum(keyNum);
            return this;
        }

        /**
         * Property log: Whether to enable log.
         * <p>
         * @return {@code this}
         * @param log Property log: Whether to enable log. This parameter is required.
         */
        public Builder log(final java.lang.Boolean log) {
            this.props.log(log);
            return this;
        }
        /**
         * Property log: Whether to enable log.
         * <p>
         * @return {@code this}
         * @param log Property log: Whether to enable log. This parameter is required.
         */
        public Builder log(final com.aliyun.ros.cdk.core.IResolvable log) {
            this.props.log(log);
            return this;
        }

        /**
         * Property logStorage: Log storage.
         * <p>
         * @return {@code this}
         * @param logStorage Property logStorage: Log storage. This parameter is required.
         */
        public Builder logStorage(final java.lang.Number logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }
        /**
         * Property logStorage: Log storage.
         * <p>
         * @return {@code this}
         * @param logStorage Property logStorage: Log storage. This parameter is required.
         */
        public Builder logStorage(final com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }

        /**
         * Property period: The subscription duration of the KMS instance.
         * <p>
         * If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
         * If PeriodUnit is Year, the valid range is 1, 2, 3
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration of the KMS instance. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription duration of the KMS instance.
         * <p>
         * If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
         * If PeriodUnit is Year, the valid range is 1, 2, 3
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration of the KMS instance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property renewPeriod: Automatic renewal period, in months.
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod: Automatic renewal period, in months. This parameter is required.
         */
        public Builder renewPeriod(final java.lang.Number renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }
        /**
         * Property renewPeriod: Automatic renewal period, in months.
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod: Automatic renewal period, in months. This parameter is required.
         */
        public Builder renewPeriod(final com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }

        /**
         * Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
         * <p>
         * @return {@code this}
         * @param renewStatus Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal). This parameter is required.
         */
        public Builder renewStatus(final java.lang.String renewStatus) {
            this.props.renewStatus(renewStatus);
            return this;
        }
        /**
         * Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
         * <p>
         * @return {@code this}
         * @param renewStatus Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal). This parameter is required.
         */
        public Builder renewStatus(final com.aliyun.ros.cdk.core.IResolvable renewStatus) {
            this.props.renewStatus(renewStatus);
            return this;
        }

        /**
         * Property secretNum: Maximum number of secrets.
         * <p>
         * It is required when the InstanceCharge is Subscription.
         * <p>
         * @return {@code this}
         * @param secretNum Property secretNum: Maximum number of secrets. This parameter is required.
         */
        public Builder secretNum(final java.lang.Number secretNum) {
            this.props.secretNum(secretNum);
            return this;
        }
        /**
         * Property secretNum: Maximum number of secrets.
         * <p>
         * It is required when the InstanceCharge is Subscription.
         * <p>
         * @return {@code this}
         * @param secretNum Property secretNum: Maximum number of secrets. This parameter is required.
         */
        public Builder secretNum(final com.aliyun.ros.cdk.core.IResolvable secretNum) {
            this.props.secretNum(secretNum);
            return this;
        }

        /**
         * Property spec: The computation performance level of the KMS instance.
         * <p>
         * @return {@code this}
         * @param spec Property spec: The computation performance level of the KMS instance. This parameter is required.
         */
        public Builder spec(final java.lang.Number spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: The computation performance level of the KMS instance.
         * <p>
         * @return {@code this}
         * @param spec Property spec: The computation performance level of the KMS instance. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * Property vpcNum: The number of managed accesses.
         * <p>
         * The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
         * <p>
         * @return {@code this}
         * @param vpcNum Property vpcNum: The number of managed accesses. This parameter is required.
         */
        public Builder vpcNum(final java.lang.Number vpcNum) {
            this.props.vpcNum(vpcNum);
            return this;
        }
        /**
         * Property vpcNum: The number of managed accesses.
         * <p>
         * The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
         * <p>
         * @return {@code this}
         * @param vpcNum Property vpcNum: The number of managed accesses. This parameter is required.
         */
        public Builder vpcNum(final com.aliyun.ros.cdk.core.IResolvable vpcNum) {
            this.props.vpcNum(vpcNum);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kms.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.kms.Instance build() {
            return new com.aliyun.ros.cdk.kms.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
