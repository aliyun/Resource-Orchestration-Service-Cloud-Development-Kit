package com.aliyun.ros.cdk.cddc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CDDC::MyBase</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:26.950Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.MyBase")
public class MyBase extends com.aliyun.ros.cdk.core.Resource {

    protected MyBase(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MyBase(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MyBase(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.MyBaseProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MyBase(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.MyBaseProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceIds: The instance id list of created ecs instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderIds: The order id list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cddc.MyBase}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cddc.MyBase> {
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
        private final com.aliyun.ros.cdk.cddc.MyBaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cddc.MyBaseProps.Builder();
        }

        /**
         * Property ecsClassList: ECS Class List.
         * <p>
         * @return {@code this}
         * @param ecsClassList Property ecsClassList: ECS Class List. This parameter is required.
         */
        public Builder ecsClassList(final com.aliyun.ros.cdk.core.IResolvable ecsClassList) {
            this.props.ecsClassList(ecsClassList);
            return this;
        }
        /**
         * Property ecsClassList: ECS Class List.
         * <p>
         * @return {@code this}
         * @param ecsClassList Property ecsClassList: ECS Class List. This parameter is required.
         */
        public Builder ecsClassList(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> ecsClassList) {
            this.props.ecsClassList(ecsClassList);
            return this;
        }

        /**
         * Property engine: Database type.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database type. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: Database type.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database type. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property payType: Payment type, currently only supports PrePaid.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Payment type, currently only supports PrePaid. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: Payment type, currently only supports PrePaid.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Payment type, currently only supports PrePaid. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: The period of the subscription in months.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of the subscription in months. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The period of the subscription in months.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of the subscription in months. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: Virtual switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Virtual switch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: Virtual switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Virtual switch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: Availability Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Availability Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoRenew: Whether to enable auto renew.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable auto renew. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to enable auto renew.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable auto renew. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property dedicatedHostGroupDescription: The name of the dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupDescription Property dedicatedHostGroupDescription: The name of the dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostGroupDescription(final java.lang.String dedicatedHostGroupDescription) {
            this.props.dedicatedHostGroupDescription(dedicatedHostGroupDescription);
            return this;
        }
        /**
         * Property dedicatedHostGroupDescription: The name of the dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupDescription Property dedicatedHostGroupDescription: The name of the dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostGroupDescription(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupDescription) {
            this.props.dedicatedHostGroupDescription(dedicatedHostGroupDescription);
            return this;
        }

        /**
         * Property dedicatedHostGroupId: The ID of the dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final java.lang.String dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }
        /**
         * Property dedicatedHostGroupId: The ID of the dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }

        /**
         * Property ecsDeploymentSetId: The ID of the deployment set.
         * <p>
         * @return {@code this}
         * @param ecsDeploymentSetId Property ecsDeploymentSetId: The ID of the deployment set. This parameter is required.
         */
        public Builder ecsDeploymentSetId(final java.lang.String ecsDeploymentSetId) {
            this.props.ecsDeploymentSetId(ecsDeploymentSetId);
            return this;
        }
        /**
         * Property ecsDeploymentSetId: The ID of the deployment set.
         * <p>
         * @return {@code this}
         * @param ecsDeploymentSetId Property ecsDeploymentSetId: The ID of the deployment set. This parameter is required.
         */
        public Builder ecsDeploymentSetId(final com.aliyun.ros.cdk.core.IResolvable ecsDeploymentSetId) {
            this.props.ecsDeploymentSetId(ecsDeploymentSetId);
            return this;
        }

        /**
         * Property ecsHostName: The host name of the ECS instance.
         * <p>
         * @return {@code this}
         * @param ecsHostName Property ecsHostName: The host name of the ECS instance. This parameter is required.
         */
        public Builder ecsHostName(final java.lang.String ecsHostName) {
            this.props.ecsHostName(ecsHostName);
            return this;
        }
        /**
         * Property ecsHostName: The host name of the ECS instance.
         * <p>
         * @return {@code this}
         * @param ecsHostName Property ecsHostName: The host name of the ECS instance. This parameter is required.
         */
        public Builder ecsHostName(final com.aliyun.ros.cdk.core.IResolvable ecsHostName) {
            this.props.ecsHostName(ecsHostName);
            return this;
        }

        /**
         * Property ecsInstanceName: The name of the ECS instance.
         * <p>
         * @return {@code this}
         * @param ecsInstanceName Property ecsInstanceName: The name of the ECS instance. This parameter is required.
         */
        public Builder ecsInstanceName(final java.lang.String ecsInstanceName) {
            this.props.ecsInstanceName(ecsInstanceName);
            return this;
        }
        /**
         * Property ecsInstanceName: The name of the ECS instance.
         * <p>
         * @return {@code this}
         * @param ecsInstanceName Property ecsInstanceName: The name of the ECS instance. This parameter is required.
         */
        public Builder ecsInstanceName(final com.aliyun.ros.cdk.core.IResolvable ecsInstanceName) {
            this.props.ecsInstanceName(ecsInstanceName);
            return this;
        }

        /**
         * Property ecsUniqueSuffix: The unique suffix of the ECS instance.
         * <p>
         * @return {@code this}
         * @param ecsUniqueSuffix Property ecsUniqueSuffix: The unique suffix of the ECS instance. This parameter is required.
         */
        public Builder ecsUniqueSuffix(final java.lang.Boolean ecsUniqueSuffix) {
            this.props.ecsUniqueSuffix(ecsUniqueSuffix);
            return this;
        }
        /**
         * Property ecsUniqueSuffix: The unique suffix of the ECS instance.
         * <p>
         * @return {@code this}
         * @param ecsUniqueSuffix Property ecsUniqueSuffix: The unique suffix of the ECS instance. This parameter is required.
         */
        public Builder ecsUniqueSuffix(final com.aliyun.ros.cdk.core.IResolvable ecsUniqueSuffix) {
            this.props.ecsUniqueSuffix(ecsUniqueSuffix);
            return this;
        }

        /**
         * Property imageId: The image ID.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The image ID. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The image ID.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The image ID. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property internetChargeType: Network billing type.
         * <p>
         * Value range:
         * PayByBandwidth: billed based on fixed bandwidth.
         * PayByTraffic: Pay by traffic usage.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Network billing type. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: Network billing type.
         * <p>
         * Value range:
         * PayByBandwidth: billed based on fixed bandwidth.
         * PayByTraffic: Pay by traffic usage.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Network billing type. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         * <p>
         * Unit is Mbps(Mega bit per second).
         * Range is [0,200]. Default is 1.
         * While the property is not 0, public ip will be assigned for instance.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         * <p>
         * Unit is Mbps(Mega bit per second).
         * Range is [0,200]. Default is 1.
         * While the property is not 0, public ip will be assigned for instance.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property keyPairName: The name of the key pair.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: The name of the key pair.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property osPassword: Password of created ecs instance.
         * <p>
         * Must contain at least 3 types of special character, lower character, upper character, number.
         * <p>
         * @return {@code this}
         * @param osPassword Property osPassword: Password of created ecs instance. This parameter is required.
         */
        public Builder osPassword(final java.lang.String osPassword) {
            this.props.osPassword(osPassword);
            return this;
        }
        /**
         * Property osPassword: Password of created ecs instance.
         * <p>
         * Must contain at least 3 types of special character, lower character, upper character, number.
         * <p>
         * @return {@code this}
         * @param osPassword Property osPassword: Password of created ecs instance. This parameter is required.
         */
        public Builder osPassword(final com.aliyun.ros.cdk.core.IResolvable osPassword) {
            this.props.osPassword(osPassword);
            return this;
        }

        /**
         * Property passwordInherit: Whether to inherit the password from the parent cluster.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Whether to inherit the password from the parent cluster. This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * Property passwordInherit: Whether to inherit the password from the parent cluster.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Whether to inherit the password from the parent cluster. This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Prepaid type, currently only supports Monthly (monthly subscription). This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }
        /**
         * Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Prepaid type, currently only supports Monthly (monthly subscription). This parameter is required.
         */
        public Builder periodType(final com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.props.periodType(periodType);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property userData: User-defined script data, the original data is up to 16KB.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User-defined script data, the original data is up to 16KB. This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * Property userData: User-defined script data, the original data is up to 16KB.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User-defined script data, the original data is up to 16KB. This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * Property userDataInBase64: The user data of the ECS instance.
         * <p>
         * @return {@code this}
         * @param userDataInBase64 Property userDataInBase64: The user data of the ECS instance. This parameter is required.
         */
        public Builder userDataInBase64(final java.lang.Boolean userDataInBase64) {
            this.props.userDataInBase64(userDataInBase64);
            return this;
        }
        /**
         * Property userDataInBase64: The user data of the ECS instance.
         * <p>
         * @return {@code this}
         * @param userDataInBase64 Property userDataInBase64: The user data of the ECS instance. This parameter is required.
         */
        public Builder userDataInBase64(final com.aliyun.ros.cdk.core.IResolvable userDataInBase64) {
            this.props.userDataInBase64(userDataInBase64);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cddc.MyBase}.
         */
        @Override
        public com.aliyun.ros.cdk.cddc.MyBase build() {
            return new com.aliyun.ros.cdk.cddc.MyBase(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
