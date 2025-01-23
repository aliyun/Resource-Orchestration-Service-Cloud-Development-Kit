package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::InstanceGroup</code>, which is used to create Elastic Compute Service (ECS) instances that have the same configurations.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:38.007Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.InstanceGroup")
public class InstanceGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IInstanceGroup {

    protected InstanceGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public InstanceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public InstanceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HostNames: Host names of created instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNames() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InnerIps: Inner IP address list of the specified instances.
     * <p>
     * Only for classical instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIps() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceIds: The instance id list of created ecs instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ipv6Addresses: IPv6 addresses list of created ecs instances.
     * <p>
     * Note: The return type is a two-tier list. If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Addresses() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ipv6AddressIds: IPv6 address IDs list of created ecs instances.
     * <p>
     * Note: The return type is a two-tier list.If the instance does not have any IPv6 address, the element at the corresponding position in the list is null. If all instances does not have any IPv address, will return null.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressIds() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateIps: Private IP address list of created ecs instances.
     * <p>
     * Only for VPC instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicIps: Public IP address list of created ecs instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneIds: Zone id of created instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InstanceGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.InstanceGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.InstanceGroup> {
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
        private final com.aliyun.ros.cdk.ecs.InstanceGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.InstanceGroupProps.Builder();
        }

        /**
         * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Ecs instance supported instance type, make sure it should be correct. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Ecs instance supported instance type, make sure it should be correct. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
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
         * Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: does not associate the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.</li>
         * <li><strong>host</strong>: associates the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
         * Default value: <strong>default</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param affinity Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host. This parameter is required.
         */
        public Builder affinity(final java.lang.String affinity) {
            this.props.affinity(affinity);
            return this;
        }
        /**
         * Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: does not associate the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.</li>
         * <li><strong>host</strong>: associates the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
         * Default value: <strong>default</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param affinity Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host. This parameter is required.
         */
        public Builder affinity(final com.aliyun.ros.cdk.core.IResolvable affinity) {
            this.props.affinity(affinity);
            return this;
        }

        /**
         * Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip.
         * <p>
         * If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
         * <p>
         * @return {@code this}
         * @param allocatePublicIp Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. This parameter is required.
         */
        public Builder allocatePublicIp(final java.lang.Boolean allocatePublicIp) {
            this.props.allocatePublicIp(allocatePublicIp);
            return this;
        }
        /**
         * Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip.
         * <p>
         * If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
         * <p>
         * @return {@code this}
         * @param allocatePublicIp Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip. This parameter is required.
         */
        public Builder allocatePublicIp(final com.aliyun.ros.cdk.core.IResolvable allocatePublicIp) {
            this.props.allocatePublicIp(allocatePublicIp);
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
         * Property cpuOptions: Cpu options.
         * <p>
         * @return {@code this}
         * @param cpuOptions Property cpuOptions: Cpu options. This parameter is required.
         */
        public Builder cpuOptions(final com.aliyun.ros.cdk.core.IResolvable cpuOptions) {
            this.props.cpuOptions(cpuOptions);
            return this;
        }
        /**
         * Property cpuOptions: Cpu options.
         * <p>
         * @return {@code this}
         * @param cpuOptions Property cpuOptions: Cpu options. This parameter is required.
         */
        public Builder cpuOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.CpuOptionsProperty cpuOptions) {
            this.props.cpuOptions(cpuOptions);
            return this;
        }

        /**
         * Property creditSpecification: The performance mode of the burstable instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Standard</strong>: the standard mode.</li>
         * <li><strong>Unlimited</strong>: the unlimited mode.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param creditSpecification Property creditSpecification: The performance mode of the burstable instance. This parameter is required.
         */
        public Builder creditSpecification(final java.lang.String creditSpecification) {
            this.props.creditSpecification(creditSpecification);
            return this;
        }
        /**
         * Property creditSpecification: The performance mode of the burstable instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Standard</strong>: the standard mode.</li>
         * <li><strong>Unlimited</strong>: the unlimited mode.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param creditSpecification Property creditSpecification: The performance mode of the burstable instance. This parameter is required.
         */
        public Builder creditSpecification(final com.aliyun.ros.cdk.core.IResolvable creditSpecification) {
            this.props.creditSpecification(creditSpecification);
            return this;
        }

        /**
         * Property dedicatedHostId: which dedicated host will be deployed.
         * <p>
         * @return {@code this}
         * @param dedicatedHostId Property dedicatedHostId: which dedicated host will be deployed. This parameter is required.
         */
        public Builder dedicatedHostId(final java.lang.String dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }
        /**
         * Property dedicatedHostId: which dedicated host will be deployed.
         * <p>
         * @return {@code this}
         * @param dedicatedHostId Property dedicatedHostId: which dedicated host will be deployed. This parameter is required.
         */
        public Builder dedicatedHostId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }

        /**
         * Property deletionForce: Whether force delete the instance.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the instance. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force delete the instance.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the instance. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
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
         * Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance.
         * <p>
         * If the deployment set specified by <strong>DeploymentSetId</strong> uses the high availability group strategy (AvailabilityGroup), you can use <strong>DeploymentSetGroupNo</strong> to specify a deployment set group in the deployment set. Valid values: 1 to 7.
         * <p>
         * @return {@code this}
         * @param deploymentSetGroupNo Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance. This parameter is required.
         */
        public Builder deploymentSetGroupNo(final java.lang.Number deploymentSetGroupNo) {
            this.props.deploymentSetGroupNo(deploymentSetGroupNo);
            return this;
        }
        /**
         * Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance.
         * <p>
         * If the deployment set specified by <strong>DeploymentSetId</strong> uses the high availability group strategy (AvailabilityGroup), you can use <strong>DeploymentSetGroupNo</strong> to specify a deployment set group in the deployment set. Valid values: 1 to 7.
         * <p>
         * @return {@code this}
         * @param deploymentSetGroupNo Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance. This parameter is required.
         */
        public Builder deploymentSetGroupNo(final com.aliyun.ros.cdk.core.IResolvable deploymentSetGroupNo) {
            this.props.deploymentSetGroupNo(deploymentSetGroupNo);
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
         * Max support 2 ENIs.
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
         * Max support 2 ENIs.
         * <p>
         * @return {@code this}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance. This parameter is required.
         */
        public Builder eniMappings(final java.util.List<? extends java.lang.Object> eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }

        /**
         * Property hostName: Host name of created ecs instance.
         * <p>
         * at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
         * Support to use the regular expression to set the different instance name for each ECS instance. HostName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'host[123,4]tail'. If you creates 3 instances with hostname 'host[123,4]tail', all the host names of instances are host0123tail, host0124tail, host0125tail. The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:
         * <p>
         * <ol>
         * <li>'name_prefix' is required.</li>
         * <li>'name_suffix' is optional.</li>
         * <li>The name regular expression can't include any spaces.</li>
         * <li>The 'bits' must be in range [1, 6].</li>
         * <li>The 'begin_number' must be in range [0, 999999].</li>
         * <li>You could only specify 'begin_number'. The 'bits' will be set as 6 by default.</li>
         * <li>You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.</li>
         * <li>If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
         * The host name is specified by regular expression works after restart instance manually.</li>
         * </ol>
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: Host name of created ecs instance. This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * Property hostName: Host name of created ecs instance.
         * <p>
         * at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
         * Support to use the regular expression to set the different instance name for each ECS instance. HostName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'host[123,4]tail'. If you creates 3 instances with hostname 'host[123,4]tail', all the host names of instances are host0123tail, host0124tail, host0125tail. The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:
         * <p>
         * <ol>
         * <li>'name_prefix' is required.</li>
         * <li>'name_suffix' is optional.</li>
         * <li>The name regular expression can't include any spaces.</li>
         * <li>The 'bits' must be in range [1, 6].</li>
         * <li>The 'begin_number' must be in range [0, 999999].</li>
         * <li>You could only specify 'begin_number'. The 'bits' will be set as 6 by default.</li>
         * <li>You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.</li>
         * <li>If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
         * The host name is specified by regular expression works after restart instance manually.</li>
         * </ol>
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: Host name of created ecs instance. This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * Property hostNames: The hostname of instance N.
         * <p>
         * You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:
         * <p>
         * <ul>
         * <li>The maximum value of N must be the same as the Amount value. For example, if you set Amount to 2, you can use HostNames.1 and HostNames.2 to specify hostnames for the individual instances. Examples: HostNames.1=test1 and HostNames.2=test2.</li>
         * <li>You cannot specify both HostName and HostNames.N.</li>
         * <li>The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).</li>
         * <li>For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).</li>
         * <li>For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param hostNames Property hostNames: The hostname of instance N. This parameter is required.
         */
        public Builder hostNames(final com.aliyun.ros.cdk.core.IResolvable hostNames) {
            this.props.hostNames(hostNames);
            return this;
        }
        /**
         * Property hostNames: The hostname of instance N.
         * <p>
         * You can use this parameter to specify different hostnames for multiple instances. Take note of the following items:
         * <p>
         * <ul>
         * <li>The maximum value of N must be the same as the Amount value. For example, if you set Amount to 2, you can use HostNames.1 and HostNames.2 to specify hostnames for the individual instances. Examples: HostNames.1=test1 and HostNames.2=test2.</li>
         * <li>You cannot specify both HostName and HostNames.N.</li>
         * <li>The hostname cannot start or end with a period (.) or hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).</li>
         * <li>For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. The hostname can contain letters, digits, and hyphens (-).</li>
         * <li>For instances that run other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param hostNames Property hostNames: The hostname of instance N. This parameter is required.
         */
        public Builder hostNames(final java.util.List<? extends java.lang.Object> hostNames) {
            this.props.hostNames(hostNames);
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
         * Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>enabled</strong></li>
         * <li><strong>disabled</strong>
         * Default value: <strong>enabled</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param httpEndpoint Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata. This parameter is required.
         */
        public Builder httpEndpoint(final java.lang.String httpEndpoint) {
            this.props.httpEndpoint(httpEndpoint);
            return this;
        }
        /**
         * Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>enabled</strong></li>
         * <li><strong>disabled</strong>
         * Default value: <strong>enabled</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param httpEndpoint Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata. This parameter is required.
         */
        public Builder httpEndpoint(final com.aliyun.ros.cdk.core.IResolvable httpEndpoint) {
            this.props.httpEndpoint(httpEndpoint);
            return this;
        }

        /**
         * Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>optional</strong>: does not forcefully use the security-enhanced mode (IMDSv2).</li>
         * <li><strong>required</strong>: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
         * Default value: <strong>optional</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param httpTokens Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. This parameter is required.
         */
        public Builder httpTokens(final java.lang.String httpTokens) {
            this.props.httpTokens(httpTokens);
            return this;
        }
        /**
         * Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>optional</strong>: does not forcefully use the security-enhanced mode (IMDSv2).</li>
         * <li><strong>required</strong>: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
         * Default value: <strong>optional</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param httpTokens Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. This parameter is required.
         */
        public Builder httpTokens(final com.aliyun.ros.cdk.core.IResolvable httpTokens) {
            this.props.httpTokens(httpTokens);
            return this;
        }

        /**
         * Property imageFamily: The name of the image family.
         * <p>
         * You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
         * <p>
         * <ul>
         * <li><strong>ImageFamily</strong> must be empty if <strong>ImageId</strong> is specified.</li>
         * <li><strong>ImageFamily</strong> can be specified if <strong>ImageId</strong> is not specified.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family. This parameter is required.
         */
        public Builder imageFamily(final java.lang.String imageFamily) {
            this.props.imageFamily(imageFamily);
            return this;
        }
        /**
         * Property imageFamily: The name of the image family.
         * <p>
         * You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
         * <p>
         * <ul>
         * <li><strong>ImageFamily</strong> must be empty if <strong>ImageId</strong> is specified.</li>
         * <li><strong>ImageFamily</strong> can be specified if <strong>ImageId</strong> is not specified.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family. This parameter is required.
         */
        public Builder imageFamily(final com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.props.imageFamily(imageFamily);
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
         * Property imageOptions: Image options.
         * <p>
         * @return {@code this}
         * @param imageOptions Property imageOptions: Image options. This parameter is required.
         */
        public Builder imageOptions(final com.aliyun.ros.cdk.core.IResolvable imageOptions) {
            this.props.imageOptions(imageOptions);
            return this;
        }
        /**
         * Property imageOptions: Image options.
         * <p>
         * @return {@code this}
         * @param imageOptions Property imageOptions: Image options. This parameter is required.
         */
        public Builder imageOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.ImageOptionsProperty imageOptions) {
            this.props.imageOptions(imageOptions);
            return this;
        }

        /**
         * Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         * <p>
         * If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
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
         * If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
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
         * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
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
         * Property ioOptimized: The 'optimized' instance can provide better IO performance.
         * <p>
         * Support 'none' and 'optimized' only, default is 'optimized'.
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
         * Support 'none' and 'optimized' only, default is 'optimized'.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance. This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
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
         * Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI.
         * <p>
         * Take note of the following items:
         * <p>
         * <ul>
         * <li>The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.</li>
         * <li>The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type.</li>
         * <li>If NetworkInterface.N.InstanceType is set to Primary, you cannot specify NetworkInterfaceQueueNumber but can specify NetworkInterface.N.QueueNumber</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param networkInterfaceQueueNumber Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI. This parameter is required.
         */
        public Builder networkInterfaceQueueNumber(final java.lang.Number networkInterfaceQueueNumber) {
            this.props.networkInterfaceQueueNumber(networkInterfaceQueueNumber);
            return this;
        }
        /**
         * Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI.
         * <p>
         * Take note of the following items:
         * <p>
         * <ul>
         * <li>The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.</li>
         * <li>The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type.</li>
         * <li>If NetworkInterface.N.InstanceType is set to Primary, you cannot specify NetworkInterfaceQueueNumber but can specify NetworkInterface.N.QueueNumber</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param networkInterfaceQueueNumber Property networkInterfaceQueueNumber: The number of queues supported by the primary ENI. This parameter is required.
         */
        public Builder networkInterfaceQueueNumber(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceQueueNumber) {
            this.props.networkInterfaceQueueNumber(networkInterfaceQueueNumber);
            return this;
        }

        /**
         * Property networkOptions: Network options.
         * <p>
         * @return {@code this}
         * @param networkOptions Property networkOptions: Network options. This parameter is required.
         */
        public Builder networkOptions(final com.aliyun.ros.cdk.core.IResolvable networkOptions) {
            this.props.networkOptions(networkOptions);
            return this;
        }
        /**
         * Property networkOptions: Network options.
         * <p>
         * @return {@code this}
         * @param networkOptions Property networkOptions: Network options. This parameter is required.
         */
        public Builder networkOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.NetworkOptionsProperty networkOptions) {
            this.props.networkOptions(networkOptions);
            return this;
        }

        /**
         * Property networkType: Instance network type.
         * <p>
         * Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: Instance network type. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: Instance network type.
         * <p>
         * Support 'vpc' and 'classic', for compatible reason, default is 'classic'. If vswitch id and vpc id is specified, the property will be forced to be set to 'vpc'
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: Instance network type. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
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
         * Property privateIpAddress: Private IP for the instance created.
         * <p>
         * Only works for VPC instance and cannot duplicated with existing instance.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: Private IP for the instance created. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: Private IP for the instance created.
         * <p>
         * Only works for VPC instance and cannot duplicated with existing instance.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: Private IP for the instance created. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * Property privatePoolOptions: The options of the private pool.
         * <p>
         * @return {@code this}
         * @param privatePoolOptions Property privatePoolOptions: The options of the private pool. This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
            return this;
        }
        /**
         * Property privatePoolOptions: The options of the private pool.
         * <p>
         * @return {@code this}
         * @param privatePoolOptions Property privatePoolOptions: The options of the private pool. This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.PrivatePoolOptionsProperty privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
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
         * Property schedulerOptions: undefined.
         * <p>
         * @return {@code this}
         * @param schedulerOptions Property schedulerOptions: undefined. This parameter is required.
         */
        public Builder schedulerOptions(final com.aliyun.ros.cdk.core.IResolvable schedulerOptions) {
            this.props.schedulerOptions(schedulerOptions);
            return this;
        }
        /**
         * Property schedulerOptions: undefined.
         * <p>
         * @return {@code this}
         * @param schedulerOptions Property schedulerOptions: undefined. This parameter is required.
         */
        public Builder schedulerOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.SchedulerOptionsProperty schedulerOptions) {
            this.props.schedulerOptions(schedulerOptions);
            return this;
        }

        /**
         * Property securityEnhancementStrategy:.
         * <p>
         * @return {@code this}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy:. This parameter is required.
         */
        public Builder securityEnhancementStrategy(final java.lang.String securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
            return this;
        }
        /**
         * Property securityEnhancementStrategy:.
         * <p>
         * @return {@code this}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy:. This parameter is required.
         */
        public Builder securityEnhancementStrategy(final com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
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
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
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
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }

        /**
         * Property securityOptions: Security options.
         * <p>
         * @return {@code this}
         * @param securityOptions Property securityOptions: Security options. This parameter is required.
         */
        public Builder securityOptions(final com.aliyun.ros.cdk.core.IResolvable securityOptions) {
            this.props.securityOptions(securityOptions);
            return this;
        }
        /**
         * Property securityOptions: Security options.
         * <p>
         * @return {@code this}
         * @param securityOptions Property securityOptions: Security options. This parameter is required.
         */
        public Builder securityOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.SecurityOptionsProperty securityOptions) {
            this.props.securityOptions(securityOptions);
            return this;
        }

        /**
         * Property spotDuration: The protection period of the preemptible instance.
         * <p>
         * Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
         * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
         * If this parameter is set to 0, no protection period is configured for the preemptible instance.
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param spotDuration Property spotDuration: The protection period of the preemptible instance. This parameter is required.
         */
        public Builder spotDuration(final java.lang.Number spotDuration) {
            this.props.spotDuration(spotDuration);
            return this;
        }
        /**
         * Property spotDuration: The protection period of the preemptible instance.
         * <p>
         * Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
         * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
         * If this parameter is set to 0, no protection period is configured for the preemptible instance.
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param spotDuration Property spotDuration: The protection period of the preemptible instance. This parameter is required.
         */
        public Builder spotDuration(final com.aliyun.ros.cdk.core.IResolvable spotDuration) {
            this.props.spotDuration(spotDuration);
            return this;
        }

        /**
         * Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
         * <p>
         * Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
         * <p>
         * @return {@code this}
         * @param spotInterruptionBehavior Property spotInterruptionBehavior: The interruption mode of the preemptible instance. This parameter is required.
         */
        public Builder spotInterruptionBehavior(final java.lang.String spotInterruptionBehavior) {
            this.props.spotInterruptionBehavior(spotInterruptionBehavior);
            return this;
        }
        /**
         * Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
         * <p>
         * Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
         * <p>
         * @return {@code this}
         * @param spotInterruptionBehavior Property spotInterruptionBehavior: The interruption mode of the preemptible instance. This parameter is required.
         */
        public Builder spotInterruptionBehavior(final com.aliyun.ros.cdk.core.IResolvable spotInterruptionBehavior) {
            this.props.spotInterruptionBehavior(spotInterruptionBehavior);
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
         * Property storageSetId: The storage set ID.
         * <p>
         * @return {@code this}
         * @param storageSetId Property storageSetId: The storage set ID. This parameter is required.
         */
        public Builder storageSetId(final java.lang.String storageSetId) {
            this.props.storageSetId(storageSetId);
            return this;
        }
        /**
         * Property storageSetId: The storage set ID.
         * <p>
         * @return {@code this}
         * @param storageSetId Property storageSetId: The storage set ID. This parameter is required.
         */
        public Builder storageSetId(final com.aliyun.ros.cdk.core.IResolvable storageSetId) {
            this.props.storageSetId(storageSetId);
            return this;
        }

        /**
         * Property storageSetPartitionNumber: The maximum number of partitions in the storage set.
         * <p>
         * The value must be greater than or equal to 2.
         * <p>
         * @return {@code this}
         * @param storageSetPartitionNumber Property storageSetPartitionNumber: The maximum number of partitions in the storage set. This parameter is required.
         */
        public Builder storageSetPartitionNumber(final java.lang.Number storageSetPartitionNumber) {
            this.props.storageSetPartitionNumber(storageSetPartitionNumber);
            return this;
        }
        /**
         * Property storageSetPartitionNumber: The maximum number of partitions in the storage set.
         * <p>
         * The value must be greater than or equal to 2.
         * <p>
         * @return {@code this}
         * @param storageSetPartitionNumber Property storageSetPartitionNumber: The maximum number of partitions in the storage set. This parameter is required.
         */
        public Builder storageSetPartitionNumber(final com.aliyun.ros.cdk.core.IResolvable storageSetPartitionNumber) {
            this.props.storageSetPartitionNumber(storageSetPartitionNumber);
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
         * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
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
         * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
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
         * <li>aes-256</li>
         * <li>sm4-128
         * Default value: aes-256.</li>
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
         * <li>aes-256</li>
         * <li>sm4-128
         * Default value: aes-256.</li>
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
         * Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         * <p>
         * @return {@code this}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS. This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final java.lang.String systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }
        /**
         * Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         * <p>
         * @return {@code this}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS. This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
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
         * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         * <p>
         * If you specify with your own image, make sure the system disk size bigger than image size.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }
        /**
         * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         * <p>
         * If you specify with your own image, make sure the system disk size bigger than image size.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. This parameter is required.
         */
        public Builder systemDiskSize(final com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property tenancy: Specifies whether to create the instance on a dedicated host.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: creates the instance on a non-dedicated host.</li>
         * <li><strong>host</strong>: creates the instance on a dedicated host. If you do not specify <strong>DedicatedHostId</strong>, Alibaba Cloud selects a dedicated host for the instance.
         * Default value: <strong>default</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param tenancy Property tenancy: Specifies whether to create the instance on a dedicated host. This parameter is required.
         */
        public Builder tenancy(final java.lang.String tenancy) {
            this.props.tenancy(tenancy);
            return this;
        }
        /**
         * Property tenancy: Specifies whether to create the instance on a dedicated host.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: creates the instance on a non-dedicated host.</li>
         * <li><strong>host</strong>: creates the instance on a dedicated host. If you do not specify <strong>DedicatedHostId</strong>, Alibaba Cloud selects a dedicated host for the instance.
         * Default value: <strong>default</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param tenancy Property tenancy: Specifies whether to create the instance on a dedicated host. This parameter is required.
         */
        public Builder tenancy(final com.aliyun.ros.cdk.core.IResolvable tenancy) {
            this.props.tenancy(tenancy);
            return this;
        }

        /**
         * Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the <strong>HostName</strong> parameter and to the instance name specified by the <strong>InstanceName</strong> parameter when you batch create instances.
         * <p>
         * The incremental suffixes can range from 001 to 999. Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: appends incremental suffixes to the hostname and the instance name.</li>
         * <li><strong>false</strong>: does not append incremental suffixes to the hostname or the instance name.
         * Default value: <strong>false</strong>.
         * When the <strong>HostName</strong> or <strong>InstanceName</strong> value is set in the name_prefix[begin_number,bits] format without a suffix (name_suffix), the <strong>UniqueSuffix</strong> parameter does not take effect. The names are sorted in the specified sequence.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param uniqueSuffix Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the <strong>HostName</strong> parameter and to the instance name specified by the <strong>InstanceName</strong> parameter when you batch create instances. This parameter is required.
         */
        public Builder uniqueSuffix(final java.lang.Boolean uniqueSuffix) {
            this.props.uniqueSuffix(uniqueSuffix);
            return this;
        }
        /**
         * Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the <strong>HostName</strong> parameter and to the instance name specified by the <strong>InstanceName</strong> parameter when you batch create instances.
         * <p>
         * The incremental suffixes can range from 001 to 999. Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong>: appends incremental suffixes to the hostname and the instance name.</li>
         * <li><strong>false</strong>: does not append incremental suffixes to the hostname or the instance name.
         * Default value: <strong>false</strong>.
         * When the <strong>HostName</strong> or <strong>InstanceName</strong> value is set in the name_prefix[begin_number,bits] format without a suffix (name_suffix), the <strong>UniqueSuffix</strong> parameter does not take effect. The names are sorted in the specified sequence.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param uniqueSuffix Property uniqueSuffix: Specifies whether to automatically append incremental suffixes to the hostname specified by the <strong>HostName</strong> parameter and to the instance name specified by the <strong>InstanceName</strong> parameter when you batch create instances. This parameter is required.
         */
        public Builder uniqueSuffix(final com.aliyun.ros.cdk.core.IResolvable uniqueSuffix) {
            this.props.uniqueSuffix(uniqueSuffix);
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
         * Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud.
         * <p>
         * System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
         * <p>
         * @return {@code this}
         * @param useAdditionalService Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud. This parameter is required.
         */
        public Builder useAdditionalService(final java.lang.Boolean useAdditionalService) {
            this.props.useAdditionalService(useAdditionalService);
            return this;
        }
        /**
         * Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud.
         * <p>
         * System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
         * <p>
         * @return {@code this}
         * @param useAdditionalService Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud. This parameter is required.
         */
        public Builder useAdditionalService(final com.aliyun.ros.cdk.core.IResolvable useAdditionalService) {
            this.props.useAdditionalService(useAdditionalService);
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
         * Property vpcId: The VPC id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create ecs instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create ecs instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch Id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch Id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
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
         * Property zoneIds: Zone ids for query parameters.
         * <p>
         * @return {@code this}
         * @param zoneIds Property zoneIds: Zone ids for query parameters. This parameter is required.
         */
        public Builder zoneIds(final com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }
        /**
         * Property zoneIds: Zone ids for query parameters.
         * <p>
         * @return {@code this}
         * @param zoneIds Property zoneIds: Zone ids for query parameters. This parameter is required.
         */
        public Builder zoneIds(final java.util.List<? extends java.lang.Object> zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.InstanceGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.InstanceGroup build() {
            return new com.aliyun.ros.cdk.ecs.InstanceGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
