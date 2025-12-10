package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:55.250Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IInstance {

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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Add one or more security groups to an ECS instance.
     * <p>
     * @param securityGroups Security groups or security group IDs. This parameter is required.
     */
    public void addSecurityGroups(final @org.jetbrains.annotations.NotNull java.lang.Object... securityGroups) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            final java.util.List<java.lang.Object> __securityGroups__asList = java.util.Arrays.asList(securityGroups);
            for (int __idx_504f7b = 0; __idx_504f7b < __securityGroups__asList.size(); __idx_504f7b++) {
                final java.lang.Object __val_504f7b = __securityGroups__asList.get(__idx_504f7b);
                if (
                     !(__val_504f7b instanceof java.lang.String)
                    && !(__val_504f7b instanceof com.aliyun.ros.cdk.ecs.SecurityGroup)
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("securityGroups").append("[").append(__idx_504f7b).append("]")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.ecs.SecurityGroup; received ")
                            .append(__val_504f7b.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.call(this, "addSecurityGroups", software.amazon.jsii.NativeType.VOID, java.util.Arrays.<Object>stream(securityGroups).toArray(Object[]::new));
    }

    /**
     * Add one or more commands to the userdata of an ECS instance.
     * <p>
     * @param commands Commands to be added. This parameter is required.
     */
    public void addUserDataCommands(final @org.jetbrains.annotations.NotNull java.lang.Object... commands) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            final java.util.List<java.lang.Object> __commands__asList = java.util.Arrays.asList(commands);
            for (int __idx_e76cb8 = 0; __idx_e76cb8 < __commands__asList.size(); __idx_e76cb8++) {
                final java.lang.Object __val_e76cb8 = __commands__asList.get(__idx_e76cb8);
                if (
                     !(__val_e76cb8 instanceof java.lang.String)
                    && !(__val_e76cb8 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_e76cb8.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("commands").append("[").append(__idx_e76cb8).append("]")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_e76cb8.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.call(this, "addUserDataCommands", software.amazon.jsii.NativeType.VOID, java.util.Arrays.<Object>stream(commands).toArray(Object[]::new));
    }

    /**
     * Create prerequisite resource(s) required to an ECS instance: VPC, VSwitch, and(or) security group.
     * <p>
     * @param zoneId Required when creating a VSwitch.
     * @param vpcCidrBlock Optional when creating a VPC.
     * @param vSwitchCidrBlock Optional when creating a VSwitch.
     * @param whetherCreateSecurityGroup Whether to create a security group.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> autoCreateDependencies(final @org.jetbrains.annotations.Nullable java.lang.Object zoneId, final @org.jetbrains.annotations.Nullable java.lang.String vpcCidrBlock, final @org.jetbrains.annotations.Nullable java.lang.String vSwitchCidrBlock, final @org.jetbrains.annotations.Nullable java.lang.Boolean whetherCreateSecurityGroup) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(zoneId instanceof java.lang.String)
                && !(zoneId instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(zoneId.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("zoneId")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(zoneId.getClass()).toString());
            }
        }
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "autoCreateDependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { zoneId, vpcCidrBlock, vSwitchCidrBlock, whetherCreateSecurityGroup }));
    }

    /**
     * Create prerequisite resource(s) required to an ECS instance: VPC, VSwitch, and(or) security group.
     * <p>
     * @param zoneId Required when creating a VSwitch.
     * @param vpcCidrBlock Optional when creating a VPC.
     * @param vSwitchCidrBlock Optional when creating a VSwitch.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> autoCreateDependencies(final @org.jetbrains.annotations.Nullable java.lang.Object zoneId, final @org.jetbrains.annotations.Nullable java.lang.String vpcCidrBlock, final @org.jetbrains.annotations.Nullable java.lang.String vSwitchCidrBlock) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(zoneId instanceof java.lang.String)
                && !(zoneId instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(zoneId.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("zoneId")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(zoneId.getClass()).toString());
            }
        }
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "autoCreateDependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { zoneId, vpcCidrBlock, vSwitchCidrBlock }));
    }

    /**
     * Create prerequisite resource(s) required to an ECS instance: VPC, VSwitch, and(or) security group.
     * <p>
     * @param zoneId Required when creating a VSwitch.
     * @param vpcCidrBlock Optional when creating a VPC.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> autoCreateDependencies(final @org.jetbrains.annotations.Nullable java.lang.Object zoneId, final @org.jetbrains.annotations.Nullable java.lang.String vpcCidrBlock) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(zoneId instanceof java.lang.String)
                && !(zoneId instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(zoneId.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("zoneId")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(zoneId.getClass()).toString());
            }
        }
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "autoCreateDependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { zoneId, vpcCidrBlock }));
    }

    /**
     * Create prerequisite resource(s) required to an ECS instance: VPC, VSwitch, and(or) security group.
     * <p>
     * @param zoneId Required when creating a VSwitch.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> autoCreateDependencies(final @org.jetbrains.annotations.Nullable java.lang.Object zoneId) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(zoneId instanceof java.lang.String)
                && !(zoneId instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(zoneId.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("zoneId")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(zoneId.getClass()).toString());
            }
        }
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "autoCreateDependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { zoneId }));
    }

    /**
     * Create prerequisite resource(s) required to an ECS instance: VPC, VSwitch, and(or) security group.
     */
    public @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> autoCreateDependencies() {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.Kernel.call(this, "autoCreateDependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     * Attribute HostName: Host name of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
        return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InnerIp: Inner IP address of the specified instance.
     * <p>
     * Only for classical instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIp() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The instance ID of created ecs instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateIp: Private IP address of created ecs instance.
     * <p>
     * Only for VPC instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicIp: Public IP address of created ecs instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityGroupIds: Security group ID list of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: Zone ID of created instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.Instance> {
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
        private final com.aliyun.ros.cdk.ecs.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.InstanceProps.Builder();
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
         * Property autoRenew: Whether renew the fee automatically?
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
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
         * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
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
         * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
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
         * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
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
         * Property hostName: Host name of created ecs instance.
         * <p>
         * at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
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
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: Host name of created ecs instance. This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
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
         * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         * <p>
         * Default value is Month.
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
         * Default value is Month.
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
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.ecs.RosInstance.PrivatePoolOptionsProperty privatePoolOptions) {
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
         * Property securityGroupIds: The ID list of security group to which to assign the instance.
         * <p>
         * The max length is based on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in Limits.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The ID list of security group to which to assign the instance. This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * Property securityGroupIds: The ID list of security group to which to assign the instance.
         * <p>
         * The max length is based on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in Limits.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The ID list of security group to which to assign the instance. This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
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
         * Property subscriptionDeletionForce: This option is only applicable to subscription instances.
         * <p>
         * For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
         * <p>
         * @return {@code this}
         * @param subscriptionDeletionForce Property subscriptionDeletionForce: This option is only applicable to subscription instances. This parameter is required.
         */
        public Builder subscriptionDeletionForce(final java.lang.Boolean subscriptionDeletionForce) {
            this.props.subscriptionDeletionForce(subscriptionDeletionForce);
            return this;
        }
        /**
         * Property subscriptionDeletionForce: This option is only applicable to subscription instances.
         * <p>
         * For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
         * <p>
         * @return {@code this}
         * @param subscriptionDeletionForce Property subscriptionDeletionForce: This option is only applicable to subscription instances. This parameter is required.
         */
        public Builder subscriptionDeletionForce(final com.aliyun.ros.cdk.core.IResolvable subscriptionDeletionForce) {
            this.props.subscriptionDeletionForce(subscriptionDeletionForce);
            return this;
        }

        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry
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
         * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * Property systemDiskDescription: Description of created system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk. This parameter is required.
         */
        public Builder systemDiskDescription(final java.lang.String systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }
        /**
         * Property systemDiskDescription: Description of created system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk. This parameter is required.
         */
        public Builder systemDiskDescription(final com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }

        /**
         * Property systemDiskDiskName: Name of created system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk. This parameter is required.
         */
        public Builder systemDiskDiskName(final java.lang.String systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }
        /**
         * Property systemDiskDiskName: Name of created system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk. This parameter is required.
         */
        public Builder systemDiskDiskName(final com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
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
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInstance.TagsProperty> tags) {
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.Instance build() {
            return new com.aliyun.ros.cdk.ecs.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
