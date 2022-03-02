package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::InstanceClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.368Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.InstanceClone")
public class InstanceClone extends com.aliyun.ros.cdk.core.Resource {

    protected InstanceClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
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
    public InstanceClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceCloneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public InstanceClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceCloneProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HostName: Host name of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostName() {
        return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InnerIp: Inner IP address of the specified instance.
     * <p>
     * Only for classical instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerIp() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The instance ID of created ecs instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimaryNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrivateIp: Private IP address of created ecs instance.
     * <p>
     * Only for VPC instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicIp: Public IP address of created ecs instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneId: Zone ID of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.InstanceClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.InstanceClone> {
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
        private final com.aliyun.ros.cdk.ecs.InstanceCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.InstanceCloneProps.Builder();
        }

        /**
         * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.
         * <p>
         * It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * <p>
         * @return {@code this}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         */
        public Builder sourceInstanceId(final java.lang.String sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }
        /**
         * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.
         * <p>
         * It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * <p>
         * @return {@code this}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         */
        public Builder sourceInstanceId(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }

        /**
         * Property backendServerWeight: The weight of backend server of load balancer.
         * <p>
         * From 0 to 100, 0 means offline. Default is 100.
         * <p>
         * @return {@code this}
         * @param backendServerWeight Property backendServerWeight: The weight of backend server of load balancer. This parameter is required.
         */
        public Builder backendServerWeight(final java.lang.Number backendServerWeight) {
            this.props.backendServerWeight(backendServerWeight);
            return this;
        }
        /**
         * Property backendServerWeight: The weight of backend server of load balancer.
         * <p>
         * From 0 to 100, 0 means offline. Default is 100.
         * <p>
         * @return {@code this}
         * @param backendServerWeight Property backendServerWeight: The weight of backend server of load balancer. This parameter is required.
         */
        public Builder backendServerWeight(final com.aliyun.ros.cdk.core.IResolvable backendServerWeight) {
            this.props.backendServerWeight(backendServerWeight);
            return this;
        }

        /**
         * Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property description: Description of the instance, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the instance, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the instance, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the instance, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property diskMappings: Disk mappings to attach to instance.
         * <p>
         * Max support 16 disks.
         * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
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
         * Max support 16 disks.
         * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
         * <p>
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * Property imageId: Image ID to create ecs instance.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: Image ID to create ecs instance.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         * <p>
         * If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         * <p>
         * If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         * <p>
         * The range is [1,200], default is 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final java.lang.Number internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }
        /**
         * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         * <p>
         * The range is [1,200], default is 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
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
         * Property loadBalancerIdToAttach: After the instance is created.
         * <p>
         * Automatic attach it to the load balancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerIdToAttach Property loadBalancerIdToAttach: After the instance is created. This parameter is required.
         */
        public Builder loadBalancerIdToAttach(final java.lang.String loadBalancerIdToAttach) {
            this.props.loadBalancerIdToAttach(loadBalancerIdToAttach);
            return this;
        }
        /**
         * Property loadBalancerIdToAttach: After the instance is created.
         * <p>
         * Automatic attach it to the load balancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerIdToAttach Property loadBalancerIdToAttach: After the instance is created. This parameter is required.
         */
        public Builder loadBalancerIdToAttach(final com.aliyun.ros.cdk.core.IResolvable loadBalancerIdToAttach) {
            this.props.loadBalancerIdToAttach(loadBalancerIdToAttach);
            return this;
        }

        /**
         * Property password: Password of created ecs instance.
         * <p>
         * Must contain at least 3 types of special character, lower character, upper character, number.
         * <p>
         * @return {@code this}
         * @param password Property password: Password of created ecs instance. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: Password of created ecs instance.
         * <p>
         * Must contain at least 3 types of special character, lower character, upper character, number.
         * <p>
         * @return {@code this}
         * @param password Property password: Password of created ecs instance. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property period: Prepaid time period.
         * <p>
         * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
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
         * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
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
         * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         * <p>
         * Three decimals is allowed at most.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.String spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         * <p>
         * Three decimals is allowed at most.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         * <p>
         * Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         * <p>
         * Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone to which the instance belongs.
         * <p>
         * For more information,
         * call the DescribeZones operation to query the most recent zone list.
         * Default value is empty, which means random selection.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone to which the instance belongs.
         * <p>
         * For more information,
         * call the DescribeZones operation to query the most recent zone list.
         * Default value is empty, which means random selection.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.InstanceClone}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.InstanceClone build() {
            return new com.aliyun.ros.cdk.ecs.InstanceClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
