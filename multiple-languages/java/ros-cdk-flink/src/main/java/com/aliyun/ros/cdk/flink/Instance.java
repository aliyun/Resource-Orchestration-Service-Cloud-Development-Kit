package com.aliyun.ros.cdk.flink;

/**
 * A ROS resource type:  <code>ALIYUN::Flink::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:10.177Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.flink.$Module.class, fqn = "@alicloud/ros-cdk-flink.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::Flink::Instance</code>.
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.flink.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::Flink::Instance</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.flink.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: Instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: Order information.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.flink.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.flink.Instance> {
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
        private final com.aliyun.ros.cdk.flink.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.flink.InstanceProps.Builder();
        }

        /**
         * Property bucket: OSS bucket name.
         * <p>
         * @return {@code this}
         * @param bucket Property bucket: OSS bucket name. This parameter is required.
         */
        public Builder bucket(final java.lang.String bucket) {
            this.props.bucket(bucket);
            return this;
        }
        /**
         * Property bucket: OSS bucket name.
         * <p>
         * @return {@code this}
         * @param bucket Property bucket: OSS bucket name. This parameter is required.
         */
        public Builder bucket(final com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.props.bucket(bucket);
            return this;
        }

        /**
         * Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go.
         * <p>
         * PRE: subscription.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go.
         * <p>
         * PRE: subscription.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property instanceName: The name of instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchIds: Virtual switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: Virtual switch ID. This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * Property vSwitchIds: Virtual switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: Virtual switch ID. This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * Property zoneId: The available area ID of the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The available area ID of the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The available area ID of the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The available area ID of the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal.
         * <p>
         * false: Manual renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal.
         * <p>
         * false: Manual renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property duration: Number of order cycle.
         * <p>
         * When ChargeType is configured as PRE, the duration parameter must be filled.
         * If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
         * If PricingCycle is year, the valid range is 1 to 3
         * <p>
         * @return {@code this}
         * @param duration Property duration: Number of order cycle. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: Number of order cycle.
         * <p>
         * When ChargeType is configured as PRE, the duration parameter must be filled.
         * If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
         * If PricingCycle is year, the valid range is 1 to 3
         * <p>
         * @return {@code this}
         * @param duration Property duration: Number of order cycle. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property pricingCycle: The ordering cycle only supports ordering in the year and month.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The ordering cycle only supports ordering in the year and month. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: The ordering cycle only supports ordering in the year and month.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The ordering cycle only supports ordering in the year and month. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property promotionCode: Promo Code.
         * <p>
         * @return {@code this}
         * @param promotionCode Property promotionCode: Promo Code. This parameter is required.
         */
        public Builder promotionCode(final java.lang.String promotionCode) {
            this.props.promotionCode(promotionCode);
            return this;
        }
        /**
         * Property promotionCode: Promo Code.
         * <p>
         * @return {@code this}
         * @param promotionCode Property promotionCode: Promo Code. This parameter is required.
         */
        public Builder promotionCode(final com.aliyun.ros.cdk.core.IResolvable promotionCode) {
            this.props.promotionCode(promotionCode);
            return this;
        }

        /**
         * Property resourceSpec: Resource specifications.
         * <p>
         * When ChargeType is configured as PRE, the resource specification parameters must be filled.
         * <p>
         * @return {@code this}
         * @param resourceSpec Property resourceSpec: Resource specifications. This parameter is required.
         */
        public Builder resourceSpec(final com.aliyun.ros.cdk.core.IResolvable resourceSpec) {
            this.props.resourceSpec(resourceSpec);
            return this;
        }
        /**
         * Property resourceSpec: Resource specifications.
         * <p>
         * When ChargeType is configured as PRE, the resource specification parameters must be filled.
         * <p>
         * @return {@code this}
         * @param resourceSpec Property resourceSpec: Resource specifications. This parameter is required.
         */
        public Builder resourceSpec(final com.aliyun.ros.cdk.flink.RosInstance.ResourceSpecProperty resourceSpec) {
            this.props.resourceSpec(resourceSpec);
            return this;
        }

        /**
         * Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use.
         * <p>
         * @return {@code this}
         * @param usePromotionCode Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use. This parameter is required.
         */
        public Builder usePromotionCode(final java.lang.Boolean usePromotionCode) {
            this.props.usePromotionCode(usePromotionCode);
            return this;
        }
        /**
         * Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use.
         * <p>
         * @return {@code this}
         * @param usePromotionCode Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use. This parameter is required.
         */
        public Builder usePromotionCode(final com.aliyun.ros.cdk.core.IResolvable usePromotionCode) {
            this.props.usePromotionCode(usePromotionCode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.flink.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.flink.Instance build() {
            return new com.aliyun.ros.cdk.flink.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
