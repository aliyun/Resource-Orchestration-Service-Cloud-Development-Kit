package com.aliyun.ros.cdk.cloudphone;

/**
 * A ROS resource type:  <code>ALIYUN::CloudPhone::InstanceGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:58.546Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.InstanceGroup")
public class InstanceGroup extends com.aliyun.ros.cdk.core.Resource {

    protected InstanceGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::CloudPhone::InstanceGroup</code>.
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
    public InstanceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.InstanceGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::CloudPhone::InstanceGroup</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public InstanceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.InstanceGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceIds: instance ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: oder id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TradePrice: price.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTradePrice() {
        return software.amazon.jsii.Kernel.get(this, "attrTradePrice", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudphone.InstanceGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudphone.InstanceGroup> {
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
        private final com.aliyun.ros.cdk.cloudphone.InstanceGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudphone.InstanceGroupProps.Builder();
        }

        /**
         * Property imageId: The image id.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The image id. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The image id.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The image id. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property instanceType: instance type.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: instance type.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property securityGroupId: Security group to create ecs instance.
         * <p>
         * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security group to create ecs instance.
         * <p>
         * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property vSwitchId: vswitch id.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: vswitch id. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: vswitch id.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: vswitch id. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.
         * <p>
         * @return {@code this}
         * @param amount Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1. This parameter is required.
         */
        public Builder amount(final java.lang.Number amount) {
            this.props.amount(amount);
            return this;
        }
        /**
         * Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.
         * <p>
         * @return {@code this}
         * @param amount Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1. This parameter is required.
         */
        public Builder amount(final com.aliyun.ros.cdk.core.IResolvable amount) {
            this.props.amount(amount);
            return this;
        }

        /**
         * Property autoPay: Whether to pay automatically, the default is true.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to pay automatically, the default is true. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to pay automatically, the default is true.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to pay automatically, the default is true. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Whether renew the fee automatically.
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect.
         * Range of value:True: automatic renewal.
         * False: no automatic renewal. Default value is False.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether renew the fee automatically.
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect.
         * Range of value:True: automatic renewal.
         * False: no automatic renewal. Default value is False.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property chargeType: Instance internet access charge type.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: Instance internet access charge type. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: Instance internet access charge type.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: Instance internet access charge type. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property description: Description of instance.
         * <p>
         * The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of instance. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of instance.
         * <p>
         * The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of instance. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
         * <p>
         * Setting this parameter will automatically create an EIP instance
         * corresponding to the bandwidth and bind the EIP instance to the
         * cloud phone instance. When the instance is released, this EIP
         * instance will be released and recycled together.
         * <p>
         * @return {@code this}
         * @param eipBandwidth Property eipBandwidth: EIP bandwidth value, the value range is 1-200. This parameter is required.
         */
        public Builder eipBandwidth(final java.lang.Number eipBandwidth) {
            this.props.eipBandwidth(eipBandwidth);
            return this;
        }
        /**
         * Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
         * <p>
         * Setting this parameter will automatically create an EIP instance
         * corresponding to the bandwidth and bind the EIP instance to the
         * cloud phone instance. When the instance is released, this EIP
         * instance will be released and recycled together.
         * <p>
         * @return {@code this}
         * @param eipBandwidth Property eipBandwidth: EIP bandwidth value, the value range is 1-200. This parameter is required.
         */
        public Builder eipBandwidth(final com.aliyun.ros.cdk.core.IResolvable eipBandwidth) {
            this.props.eipBandwidth(eipBandwidth);
            return this;
        }

        /**
         * Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-". This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-". This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property keyPairName: Cloud phone instance key pair name.
         * <p>
         * The cloud phone key can be imported through the ImportKeyPair interface.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: Cloud phone instance key pair name. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: Cloud phone instance key pair name.
         * <p>
         * The cloud phone key can be imported through the ImportKeyPair interface.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: Cloud phone instance key pair name. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property period: Prepaid time period.
         * <p>
         * While PeriodUnit is month, it could be 1, 2, 3, 6.
         * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Prepaid time period.
         * <p>
         * While PeriodUnit is month, it could be 1, 2, 3, 6.
         * While PeriodUnit is year, it could be from 1 to 5Default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: Unit of prepaid time period, it could be Month/Year.
         * <p>
         * Default value is Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Month/Year. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Unit of prepaid time period, it could be Month/Year.
         * <p>
         * Default value is Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Month/Year. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution.
         * <p>
         * @return {@code this}
         * @param resolution Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution. This parameter is required.
         */
        public Builder resolution(final java.lang.String resolution) {
            this.props.resolution(resolution);
            return this;
        }
        /**
         * Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution.
         * <p>
         * @return {@code this}
         * @param resolution Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution. This parameter is required.
         */
        public Builder resolution(final com.aliyun.ros.cdk.core.IResolvable resolution) {
            this.props.resolution(resolution);
            return this;
        }

        /**
         * Property tag: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tag Property tag: Tags to attach to instance. This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * Property tag: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tag Property tag: Tags to attach to instance. This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * Property vncPassword: Cloud phone VNC password.
         * <p>
         * The password must be six characters long, and must contain only uppercase,
         * lowercase English letters and Arabic numerals.
         * <p>
         * @return {@code this}
         * @param vncPassword Property vncPassword: Cloud phone VNC password. This parameter is required.
         */
        public Builder vncPassword(final java.lang.String vncPassword) {
            this.props.vncPassword(vncPassword);
            return this;
        }
        /**
         * Property vncPassword: Cloud phone VNC password.
         * <p>
         * The password must be six characters long, and must contain only uppercase,
         * lowercase English letters and Arabic numerals.
         * <p>
         * @return {@code this}
         * @param vncPassword Property vncPassword: Cloud phone VNC password. This parameter is required.
         */
        public Builder vncPassword(final com.aliyun.ros.cdk.core.IResolvable vncPassword) {
            this.props.vncPassword(vncPassword);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudphone.InstanceGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudphone.InstanceGroup build() {
            return new com.aliyun.ros.cdk.cloudphone.InstanceGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
