package com.aliyun.ros.cdk.rocketmq5;

/**
 * A ROS resource type:  <code>ALIYUN::ROCKETMQ5::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.043Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ROCKETMQ5::Instance</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ROCKETMQ5::Instance</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: Instance ID created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceName: Instance name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternetEndpoint: Internet endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcEndpoint: VPC endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rocketmq5.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rocketmq5.Instance> {
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
        private final com.aliyun.ros.cdk.rocketmq5.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rocketmq5.InstanceProps.Builder();
        }

        /**
         * Property internetInfo: Public network configuration information.
         * <p>
         * @return {@code this}
         * @param internetInfo Property internetInfo: Public network configuration information. This parameter is required.
         */
        public Builder internetInfo(final com.aliyun.ros.cdk.core.IResolvable internetInfo) {
            this.props.internetInfo(internetInfo);
            return this;
        }
        /**
         * Property internetInfo: Public network configuration information.
         * <p>
         * @return {@code this}
         * @param internetInfo Property internetInfo: Public network configuration information. This parameter is required.
         */
        public Builder internetInfo(final com.aliyun.ros.cdk.rocketmq5.RosInstance.InternetInfoProperty internetInfo) {
            this.props.internetInfo(internetInfo);
            return this;
        }

        /**
         * Property productInfo: Instance specification information.
         * <p>
         * @return {@code this}
         * @param productInfo Property productInfo: Instance specification information. This parameter is required.
         */
        public Builder productInfo(final com.aliyun.ros.cdk.core.IResolvable productInfo) {
            this.props.productInfo(productInfo);
            return this;
        }
        /**
         * Property productInfo: Instance specification information.
         * <p>
         * @return {@code this}
         * @param productInfo Property productInfo: Instance specification information. This parameter is required.
         */
        public Builder productInfo(final com.aliyun.ros.cdk.rocketmq5.RosInstance.ProductInfoProperty productInfo) {
            this.props.productInfo(productInfo);
            return this;
        }

        /**
         * Property seriesCode: The primary series code of the instance.
         * <p>
         * @return {@code this}
         * @param seriesCode Property seriesCode: The primary series code of the instance. This parameter is required.
         */
        public Builder seriesCode(final java.lang.String seriesCode) {
            this.props.seriesCode(seriesCode);
            return this;
        }
        /**
         * Property seriesCode: The primary series code of the instance.
         * <p>
         * @return {@code this}
         * @param seriesCode Property seriesCode: The primary series code of the instance. This parameter is required.
         */
        public Builder seriesCode(final com.aliyun.ros.cdk.core.IResolvable seriesCode) {
            this.props.seriesCode(seriesCode);
            return this;
        }

        /**
         * Property subSeriesCode: The sub series code of the instance.
         * <p>
         * @return {@code this}
         * @param subSeriesCode Property subSeriesCode: The sub series code of the instance. This parameter is required.
         */
        public Builder subSeriesCode(final java.lang.String subSeriesCode) {
            this.props.subSeriesCode(subSeriesCode);
            return this;
        }
        /**
         * Property subSeriesCode: The sub series code of the instance.
         * <p>
         * @return {@code this}
         * @param subSeriesCode Property subSeriesCode: The sub series code of the instance. This parameter is required.
         */
        public Builder subSeriesCode(final com.aliyun.ros.cdk.core.IResolvable subSeriesCode) {
            this.props.subSeriesCode(subSeriesCode);
            return this;
        }

        /**
         * Property vpcInfo: Private network configuration information.
         * <p>
         * @return {@code this}
         * @param vpcInfo Property vpcInfo: Private network configuration information. This parameter is required.
         */
        public Builder vpcInfo(final com.aliyun.ros.cdk.core.IResolvable vpcInfo) {
            this.props.vpcInfo(vpcInfo);
            return this;
        }
        /**
         * Property vpcInfo: Private network configuration information.
         * <p>
         * @return {@code this}
         * @param vpcInfo Property vpcInfo: Private network configuration information. This parameter is required.
         */
        public Builder vpcInfo(final com.aliyun.ros.cdk.rocketmq5.RosInstance.VpcInfoProperty vpcInfo) {
            this.props.vpcInfo(vpcInfo);
            return this;
        }

        /**
         * Property autoRenew: Whether to auto-renew.
         * <p>
         * This parameter takes effect only when the PaymentType=Subscription.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto-renew. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to auto-renew.
         * <p>
         * This parameter takes effect only when the PaymentType=Subscription.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto-renew. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: Automatic renewal period.
         * <p>
         * This parameter is valid only when automatic renewal is enabled. Unit: Month.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal period. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: Automatic renewal period.
         * <p>
         * This parameter is valid only when automatic renewal is enabled. Unit: Month.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal period. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property instanceName: The name of the instance to be created.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance to be created. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance to be created.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance to be created. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property paymentType: The sub series code of the instance.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The sub series code of the instance. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The sub series code of the instance.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The sub series code of the instance. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property period: The subscription duration.
         * <p>
         * Valid values:
         * When Period is Month, it could be from 1 to 6, 12, 24, 36.
         * When Period is Year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription duration.
         * <p>
         * Valid values:
         * When Period is Month, it could be from 1 to 6, 12, 24, 36.
         * When Period is Year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The period unit for the duration of the instance.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The period unit for the duration of the instance. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The period unit for the duration of the instance.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The period unit for the duration of the instance. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property remark: The remark of instance.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remark of instance. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The remark of instance.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remark of instance. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rocketmq5.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.rocketmq5.Instance build() {
            return new com.aliyun.ros.cdk.rocketmq5.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
