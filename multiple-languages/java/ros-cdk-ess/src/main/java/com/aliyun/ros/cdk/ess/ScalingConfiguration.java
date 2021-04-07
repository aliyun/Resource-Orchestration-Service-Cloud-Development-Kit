package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingConfiguration`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.491Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingConfiguration")
public class ScalingConfiguration extends com.aliyun.ros.cdk.core.Resource {

    protected ScalingConfiguration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingConfiguration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingConfiguration`.
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
    public ScalingConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingConfigurationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingConfiguration`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ScalingConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingConfigurationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScalingConfigurationId: The scaling configuration id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScalingConfiguration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScalingConfiguration> {
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
        private final com.aliyun.ros.cdk.ess.ScalingConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScalingConfigurationProps.Builder();
        }

        /**
         * Property scalingGroupId: Scaling group id to create the scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: Scaling group id to create the scaling configuration. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: Scaling group id to create the scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: Scaling group id to create the scaling configuration. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property deploymentSetId: Deployment set ID.
         * <p>
         * @return {@code this}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID. This parameter is required.
         */
        public Builder deploymentSetId(final java.lang.String deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }
        /**
         * Property deploymentSetId: Deployment set ID.
         * <p>
         * @return {@code this}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID. This parameter is required.
         */
        public Builder deploymentSetId(final com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }

        /**
         * Property diskMappings: Disk mappings to attach to instance.
         * <p>
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }
        /**
         * Property diskMappings: Disk mappings to attach to instance.
         * <p>
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs. This parameter is required.
         */
        public Builder hpcClusterId(final java.lang.String hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }
        /**
         * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs. This parameter is required.
         */
        public Builder hpcClusterId(final com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }

        /**
         * Property imageId: Image ID to create ecs instance .
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance . This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: Image ID to create ecs instance .
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance . This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceName: The name of the instance launched from the current scaling configuration.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance launched from the current scaling configuration. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance launched from the current scaling configuration.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance launched from the current scaling configuration. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceType: ecs supported instance type.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: ecs supported instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: ecs supported instance type.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: ecs supported instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property instanceTypes: ecs supported instance types.
         * <p>
         * Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
         * <p>
         * @return {@code this}
         * @param instanceTypes Property instanceTypes: ecs supported instance types. This parameter is required.
         */
        public Builder instanceTypes(final java.util.List<? extends java.lang.Object> instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }
        /**
         * Property instanceTypes: ecs supported instance types.
         * <p>
         * Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
         * <p>
         * @return {@code this}
         * @param instanceTypes Property instanceTypes: ecs supported instance types. This parameter is required.
         */
        public Builder instanceTypes(final com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }

        /**
         * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).
         * <p>
         * The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final java.lang.Number internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }
        /**
         * Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).
         * <p>
         * The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
         * <p>
         * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
         * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
         * <p>
         * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
         * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property ioOptimized: The 'optimized' instance can provide better IO performance.
         * <p>
         * Support 'none' and 'optimized' only, default is 'none'.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance. This parameter is required.
         */
        public Builder ioOptimized(final java.lang.String ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }
        /**
         * Property ioOptimized: The 'optimized' instance can provide better IO performance.
         * <p>
         * Support 'none' and 'optimized' only, default is 'none'.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance. This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property passwordInherit: Whether to use the password pre-configured in the image you select or not.
         * <p>
         * When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Whether to use the password pre-configured in the image you select or not. This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * Property passwordInherit: Whether to use the password pre-configured in the image you select or not.
         * <p>
         * When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Whether to use the password pre-configured in the image you select or not. This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * Property ramRoleName: Instance RAM role name.
         * <p>
         * The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: Instance RAM role name. This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * Property ramRoleName: Instance RAM role name.
         * <p>
         * The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: Instance RAM role name. This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
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
         * Property scalingConfigurationName: Name of created scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationName Property scalingConfigurationName: Name of created scaling configuration. This parameter is required.
         */
        public Builder scalingConfigurationName(final java.lang.String scalingConfigurationName) {
            this.props.scalingConfigurationName(scalingConfigurationName);
            return this;
        }
        /**
         * Property scalingConfigurationName: Name of created scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationName Property scalingConfigurationName: Name of created scaling configuration. This parameter is required.
         */
        public Builder scalingConfigurationName(final com.aliyun.ros.cdk.core.IResolvable scalingConfigurationName) {
            this.props.scalingConfigurationName(scalingConfigurationName);
            return this;
        }

        /**
         * Property securityGroupId: Security Group to create ecs instance.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security Group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security Group to create ecs instance.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security Group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property spotPriceLimit: Set the hourly maximum price for the instance.
         * <p>
         * Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price for the instance. This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * Property spotPriceLimit: Set the hourly maximum price for the instance.
         * <p>
         * Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price for the instance. This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
         * <p>
         * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
         * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         * At most 50 items can be specified.
         * Key
         * ecs instance type
         * Value
         * Supports a maximum of 3 decimal places.
         * <p>
         * @return {@code this}
         * @param spotPriceLimitForInstanceType Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type. This parameter is required.
         */
        public Builder spotPriceLimitForInstanceType(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimitForInstanceType) {
            this.props.spotPriceLimitForInstanceType(spotPriceLimitForInstanceType);
            return this;
        }
        /**
         * Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
         * <p>
         * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
         * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         * At most 50 items can be specified.
         * Key
         * ecs instance type
         * Value
         * Supports a maximum of 3 decimal places.
         * <p>
         * @return {@code this}
         * @param spotPriceLimitForInstanceType Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type. This parameter is required.
         */
        public Builder spotPriceLimitForInstanceType(final java.util.Map<java.lang.String, ? extends java.lang.Object> spotPriceLimitForInstanceType) {
            this.props.spotPriceLimitForInstanceType(spotPriceLimitForInstanceType);
            return this;
        }

        /**
         * Property spotStrategy: Preemption strategy for post-paid instances.
         * <p>
         * It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
         * NoSpot: Normal pay-per-use instance
         * SpotWithPriceLimit: Set a preemptive instance of the cap price
         * SpotAsPriceGo: System automatic bidding, following the current market actual price
         * Default: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: Preemption strategy for post-paid instances. This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * Property spotStrategy: Preemption strategy for post-paid instances.
         * <p>
         * It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
         * NoSpot: Normal pay-per-use instance
         * SpotWithPriceLimit: Set a preemptive instance of the cap price
         * SpotAsPriceGo: System automatic bidding, following the current market actual price
         * Default: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: Preemption strategy for post-paid instances. This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * <p>
         * @return {@code this}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID. This parameter is required.
         */
        public Builder systemDiskAutoSnapshotPolicyId(final java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.props.systemDiskAutoSnapshotPolicyId(systemDiskAutoSnapshotPolicyId);
            return this;
        }
        /**
         * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * <p>
         * @return {@code this}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID. This parameter is required.
         */
        public Builder systemDiskAutoSnapshotPolicyId(final com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
            this.props.systemDiskAutoSnapshotPolicyId(systemDiskAutoSnapshotPolicyId);
            return this;
        }

        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }
        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * Property systemDiskPerformanceLevel: The performance level of an ESSD.
         * <p>
         * @return {@code this}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of an ESSD. This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final java.lang.String systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }
        /**
         * Property systemDiskPerformanceLevel: The performance level of an ESSD.
         * <p>
         * @return {@code this}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of an ESSD. This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }

        /**
         * Property systemDiskSize: Size of system disk.
         * <p>
         * Unit is GB.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: Size of system disk. This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }
        /**
         * Property systemDiskSize: Size of system disk.
         * <p>
         * Unit is GB.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: Size of system disk. This parameter is required.
         */
        public Builder systemDiskSize(final com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }

        /**
         * Property tagList: The tags of an instance in list format.
         * <p>
         * Do not use with Tags at the same time.
         * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
         * At most 20 tags can be specified.
         * Key
         * It can be up to 64 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Cannot be a null string.
         * Value
         * It can be up to 128 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
         * <p>
         * @return {@code this}
         * @param tagList Property tagList: The tags of an instance in list format. This parameter is required.
         */
        public Builder tagList(final com.aliyun.ros.cdk.core.IResolvable tagList) {
            this.props.tagList(tagList);
            return this;
        }
        /**
         * Property tagList: The tags of an instance in list format.
         * <p>
         * Do not use with Tags at the same time.
         * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
         * At most 20 tags can be specified.
         * Key
         * It can be up to 64 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Cannot be a null string.
         * Value
         * It can be up to 128 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
         * <p>
         * @return {@code this}
         * @param tagList Property tagList: The tags of an instance in list format. This parameter is required.
         */
        public Builder tagList(final java.util.List<? extends java.lang.Object> tagList) {
            this.props.tagList(tagList);
            return this;
        }

        /**
         * Property userData: User data to pass to instance.
         * <p>
         * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User data to pass to instance. This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * Property userData: User data to pass to instance.
         * <p>
         * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User data to pass to instance. This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.ScalingConfiguration}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ScalingConfiguration build() {
            return new com.aliyun.ros.cdk.ess.ScalingConfiguration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
