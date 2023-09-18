package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::InstanceGroupClone</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:25.353Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.InstanceGroupClone")
public class InstanceGroupClone extends com.aliyun.ros.cdk.core.Resource {

    protected InstanceGroupClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceGroupClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::InstanceGroupClone</code>.
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
    public InstanceGroupClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECS::InstanceGroupClone</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public InstanceGroupClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HostNames: Host names of created instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostNames() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InnerIps: Inner IP address list of the specified instances.
     * <p>
     * Only for classical instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerIps() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceIds: The instance id list of created ecs instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.
     * <p>
     * Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6Addresses() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6Addresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.
     * <p>
     * Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6AddressIds() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrivateIps: Private IP address list of created ecs instances.
     * <p>
     * Only for VPC instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicIps: Public IP address list of created ecs instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RelatedOrderIds: The related order id list of created ecs instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRelatedOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRelatedOrderIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneIds: Zone id of created instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.InstanceGroupClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.InstanceGroupClone> {
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
        private final com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.InstanceGroupCloneProps.Builder();
        }

        /**
         * Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
         * <p>
         * @return {@code this}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000. This parameter is required.
         */
        public Builder maxAmount(final java.lang.Number maxAmount) {
            this.props.maxAmount(maxAmount);
            return this;
        }
        /**
         * Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
         * <p>
         * @return {@code this}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000. This parameter is required.
         */
        public Builder maxAmount(final com.aliyun.ros.cdk.core.IResolvable maxAmount) {
            this.props.maxAmount(maxAmount);
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
         * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
         * <p>
         * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * <p>
         * @return {@code this}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. This parameter is required.
         */
        public Builder autoReleaseTime(final java.lang.String autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }
        /**
         * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
         * <p>
         * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * <p>
         * @return {@code this}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. This parameter is required.
         */
        public Builder autoReleaseTime(final com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }

        /**
         * Property autoRenew: Whether renew the fee automatically?
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?. This parameter is required.
         */
        public Builder autoRenew(final java.lang.String autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether renew the fee automatically?
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: The time period of auto renew.
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: The time period of auto renew.
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
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
         * Property deploymentSetId: Deployment set ID.
         * <p>
         * The change of the property does not affect existing instances.
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
         * The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID. This parameter is required.
         */
        public Builder deploymentSetId(final com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }

        /**
         * Property description: Description of the instance, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty. Old instances will not be changed.
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
         * Do not fill or empty, the default is empty. Old instances will not be changed.
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
         * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
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
         * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * Property eniMappings: NetworkInterface to attach to instance.
         * <p>
         * Max support 1 ENI.
         * <p>
         * @return {@code this}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance. This parameter is required.
         */
        public Builder eniMappings(final com.aliyun.ros.cdk.core.IResolvable eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }
        /**
         * Property eniMappings: NetworkInterface to attach to instance.
         * <p>
         * Max support 1 ENI.
         * <p>
         * @return {@code this}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance. This parameter is required.
         */
        public Builder eniMappings(final java.util.List<? extends java.lang.Object> eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }

        /**
         * Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances. This parameter is required.
         */
        public Builder hpcClusterId(final java.lang.String hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }
        /**
         * Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances. This parameter is required.
         */
        public Builder hpcClusterId(final com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
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
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.  Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail.  The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:  1. 'name_prefix' is required.  2. 'name_suffix' is optional.  3. The name regular expression can't include any spaces.  4. The 'bits' must be in range [1, 6].  5. The 'begin_number' must be in range [0, 999999].  6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default.  7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.  8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.  Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail.  The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:  1. 'name_prefix' is required.  2. 'name_suffix' is optional.  3. The name regular expression can't include any spaces.  4. The 'bits' must be in range [1, 6].  5. The 'begin_number' must be in range [0, 999999].  6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default.  7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.  8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.  Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail.  The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:  1. 'name_prefix' is required.  2. 'name_suffix' is optional.  3. The name regular expression can't include any spaces.  4. The 'bits' must be in range [1, 6].  5. The 'begin_number' must be in range [0, 999999].  6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default.  7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.  8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.  Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail.  The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:  1. 'name_prefix' is required.  2. 'name_suffix' is optional.  3. The name regular expression can't include any spaces.  4. The 'bits' must be in range [1, 6].  5. The 'begin_number' must be in range [0, 999999].  6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default.  7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.  8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         * <p>
         * The range is [0,200], default is 200 Mbps.
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
         * The range is [0,200], default is 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         * <p>
         * Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
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
         * Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
         * <p>
         * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC. This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
         * <p>
         * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC. This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
         * <p>
         * Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
         * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param ipv6Addresses Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. This parameter is required.
         */
        public Builder ipv6Addresses(final java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.props.ipv6Addresses(ipv6Addresses);
            return this;
        }
        /**
         * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
         * <p>
         * Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
         * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         * The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param ipv6Addresses Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. This parameter is required.
         */
        public Builder ipv6Addresses(final com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.props.ipv6Addresses(ipv6Addresses);
            return this;
        }

        /**
         * Property keyPairName: SSH key pair name.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name.Old instances will not be changed. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: SSH key pair name.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name.Old instances will not be changed. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property launchTemplateId: ID of launch template.
         * <p>
         * Launch template id or name must be specified to use launch template
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: ID of launch template. This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }
        /**
         * Property launchTemplateId: ID of launch template.
         * <p>
         * Launch template id or name must be specified to use launch template
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: ID of launch template. This parameter is required.
         */
        public Builder launchTemplateId(final com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * Property launchTemplateName: Name of launch template.
         * <p>
         * Launch template id or name must be specified to use launch template
         * <p>
         * @return {@code this}
         * @param launchTemplateName Property launchTemplateName: Name of launch template. This parameter is required.
         */
        public Builder launchTemplateName(final java.lang.String launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }
        /**
         * Property launchTemplateName: Name of launch template.
         * <p>
         * Launch template id or name must be specified to use launch template
         * <p>
         * @return {@code this}
         * @param launchTemplateName Property launchTemplateName: Name of launch template. This parameter is required.
         */
        public Builder launchTemplateName(final com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }

        /**
         * Property launchTemplateVersion: Version of launch template.
         * <p>
         * Default version is used if version is not specified.
         * <p>
         * @return {@code this}
         * @param launchTemplateVersion Property launchTemplateVersion: Version of launch template. This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }
        /**
         * Property launchTemplateVersion: Version of launch template.
         * <p>
         * Default version is used if version is not specified.
         * <p>
         * @return {@code this}
         * @param launchTemplateVersion Property launchTemplateVersion: Version of launch template. This parameter is required.
         */
        public Builder launchTemplateVersion(final com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
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
         * Property passwordInherit: Specifies whether to use the password preset in the image.
         * <p>
         * To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image. This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * Property passwordInherit: Specifies whether to use the password preset in the image.
         * <p>
         * To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image. This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * Property period: Prepaid time period.
         * <p>
         * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
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
         * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         * <p>
         * Default value is Month.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         * <p>
         * Default value is Month.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
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
         * Property securityGroupIds: The IDs of security groups N to which the instance belongs.
         * <p>
         * The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups N to which the instance belongs. This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * Property securityGroupIds: The IDs of security groups N to which the instance belongs.
         * <p>
         * The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups N to which the instance belongs. This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
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
         * Property systemDiskBurstingEnabled: Whether enable bursting.
         * <p>
         * @return {@code this}
         * @param systemDiskBurstingEnabled Property systemDiskBurstingEnabled: Whether enable bursting. This parameter is required.
         */
        public Builder systemDiskBurstingEnabled(final java.lang.Boolean systemDiskBurstingEnabled) {
            this.props.systemDiskBurstingEnabled(systemDiskBurstingEnabled);
            return this;
        }
        /**
         * Property systemDiskBurstingEnabled: Whether enable bursting.
         * <p>
         * @return {@code this}
         * @param systemDiskBurstingEnabled Property systemDiskBurstingEnabled: Whether enable bursting. This parameter is required.
         */
        public Builder systemDiskBurstingEnabled(final com.aliyun.ros.cdk.core.IResolvable systemDiskBurstingEnabled) {
            this.props.systemDiskBurstingEnabled(systemDiskBurstingEnabled);
            return this;
        }

        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto.Old instances will not be changed.
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
         * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.Old instances will not be changed. This parameter is required.
         */
        public Builder systemDiskDescription(final java.lang.String systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }
        /**
         * Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.Old instances will not be changed. This parameter is required.
         */
        public Builder systemDiskDescription(final com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }

        /**
         * Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.Old instances will not be changed. This parameter is required.
         */
        public Builder systemDiskDiskName(final java.lang.String systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }
        /**
         * Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.Old instances will not be changed. This parameter is required.
         */
        public Builder systemDiskDiskName(final com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }

        /**
         * Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ase-256</li>
         * <li>sm4-128
         * Default value: ase-256.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskEncryptAlgorithm Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskEncryptAlgorithm(final java.lang.String systemDiskEncryptAlgorithm) {
            this.props.systemDiskEncryptAlgorithm(systemDiskEncryptAlgorithm);
            return this;
        }
        /**
         * Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ase-256</li>
         * <li>sm4-128
         * Default value: ase-256.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskEncryptAlgorithm Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskEncryptAlgorithm(final com.aliyun.ros.cdk.core.IResolvable systemDiskEncryptAlgorithm) {
            this.props.systemDiskEncryptAlgorithm(systemDiskEncryptAlgorithm);
            return this;
        }

        /**
         * Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: encrypts the system disk.</li>
         * <li>false: does not encrypt the system disk.
         * Default value: false.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskEncrypted Property systemDiskEncrypted: Specifies whether to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskEncrypted(final java.lang.String systemDiskEncrypted) {
            this.props.systemDiskEncrypted(systemDiskEncrypted);
            return this;
        }
        /**
         * Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: encrypts the system disk.</li>
         * <li>false: does not encrypt the system disk.
         * Default value: false.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskEncrypted Property systemDiskEncrypted: Specifies whether to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskEncrypted(final com.aliyun.ros.cdk.core.IResolvable systemDiskEncrypted) {
            this.props.systemDiskEncrypted(systemDiskEncrypted);
            return this;
        }

        /**
         * Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskKmsKeyId Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk. This parameter is required.
         */
        public Builder systemDiskKmsKeyId(final java.lang.String systemDiskKmsKeyId) {
            this.props.systemDiskKmsKeyId(systemDiskKmsKeyId);
            return this;
        }
        /**
         * Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskKmsKeyId Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk. This parameter is required.
         */
        public Builder systemDiskKmsKeyId(final com.aliyun.ros.cdk.core.IResolvable systemDiskKmsKeyId) {
            this.props.systemDiskKmsKeyId(systemDiskKmsKeyId);
            return this;
        }

        /**
         * Property systemDiskProvisionedIops: Provisioning IOPS.
         * <p>
         * @return {@code this}
         * @param systemDiskProvisionedIops Property systemDiskProvisionedIops: Provisioning IOPS. This parameter is required.
         */
        public Builder systemDiskProvisionedIops(final java.lang.Number systemDiskProvisionedIops) {
            this.props.systemDiskProvisionedIops(systemDiskProvisionedIops);
            return this;
        }
        /**
         * Property systemDiskProvisionedIops: Provisioning IOPS.
         * <p>
         * @return {@code this}
         * @param systemDiskProvisionedIops Property systemDiskProvisionedIops: Provisioning IOPS. This parameter is required.
         */
        public Builder systemDiskProvisionedIops(final com.aliyun.ros.cdk.core.IResolvable systemDiskProvisionedIops) {
            this.props.systemDiskProvisionedIops(systemDiskProvisionedIops);
            return this;
        }

        /**
         * Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster.
         * <p>
         * If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
         * <p>
         * @return {@code this}
         * @param systemDiskStorageClusterId Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. This parameter is required.
         */
        public Builder systemDiskStorageClusterId(final java.lang.String systemDiskStorageClusterId) {
            this.props.systemDiskStorageClusterId(systemDiskStorageClusterId);
            return this;
        }
        /**
         * Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster.
         * <p>
         * If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
         * <p>
         * @return {@code this}
         * @param systemDiskStorageClusterId Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster. This parameter is required.
         */
        public Builder systemDiskStorageClusterId(final com.aliyun.ros.cdk.core.IResolvable systemDiskStorageClusterId) {
            this.props.systemDiskStorageClusterId(systemDiskStorageClusterId);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property updatePolicy: Specify the policy at update.
         * <p>
         * The value can be 'ForNewInstances' or 'ForAllInstances'.
         * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
         * The default is 'ForNewInstances'
         * <p>
         * @return {@code this}
         * @param updatePolicy Property updatePolicy: Specify the policy at update. This parameter is required.
         */
        public Builder updatePolicy(final java.lang.String updatePolicy) {
            this.props.updatePolicy(updatePolicy);
            return this;
        }
        /**
         * Property updatePolicy: Specify the policy at update.
         * <p>
         * The value can be 'ForNewInstances' or 'ForAllInstances'.
         * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
         * The default is 'ForNewInstances'
         * <p>
         * @return {@code this}
         * @param updatePolicy Property updatePolicy: Specify the policy at update. This parameter is required.
         */
        public Builder updatePolicy(final com.aliyun.ros.cdk.core.IResolvable updatePolicy) {
            this.props.updatePolicy(updatePolicy);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.InstanceGroupClone}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.InstanceGroupClone build() {
            return new com.aliyun.ros.cdk.ecs.InstanceGroupClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
