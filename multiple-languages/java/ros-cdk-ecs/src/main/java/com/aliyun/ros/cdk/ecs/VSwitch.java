package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::VSwitch</code>, which is used to create a vSwitch.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:06.506Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.VSwitch")
public class VSwitch extends com.aliyun.ros.cdk.core.Resource {

    protected VSwitch(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VSwitch(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.VSwitchProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.VSwitchProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CidrBlock: CIDR Block of created VSwitch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "attrCidrBlock", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6CidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6CidrBlock", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: Id of created VSwitch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.VSwitchProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.VSwitchProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.VSwitchProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.VSwitch}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.VSwitch> {
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
        private final com.aliyun.ros.cdk.ecs.VSwitchProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.VSwitchProps.Builder();
        }

        /**
         * Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block. This parameter is required.
         */
        public Builder cidrBlock(final java.lang.String cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }
        /**
         * Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block. This parameter is required.
         */
        public Builder cidrBlock(final com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }

        /**
         * Property vpcId: VPC id to create vswtich.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC id to create vswtich. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC id to create vswtich.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC id to create vswtich. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property zoneId: The availability zone in which the VSwitch will be created.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The availability zone in which the VSwitch will be created. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The availability zone in which the VSwitch will be created.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The availability zone in which the VSwitch will be created. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property description: Description of the VSwitch, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the VSwitch, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the VSwitch, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the VSwitch, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment.
         * <p>
         * Value: 0-255 (decimal).
         * The IPv6 segment mask of the switch defaults to 64 bits.
         * <p>
         * @return {@code this}
         * @param ipv6CidrBlock Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. This parameter is required.
         */
        public Builder ipv6CidrBlock(final java.lang.Number ipv6CidrBlock) {
            this.props.ipv6CidrBlock(ipv6CidrBlock);
            return this;
        }
        /**
         * Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment.
         * <p>
         * Value: 0-255 (decimal).
         * The IPv6 segment mask of the switch defaults to 64 bits.
         * <p>
         * @return {@code this}
         * @param ipv6CidrBlock Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. This parameter is required.
         */
        public Builder ipv6CidrBlock(final com.aliyun.ros.cdk.core.IResolvable ipv6CidrBlock) {
            this.props.ipv6CidrBlock(ipv6CidrBlock);
            return this;
        }

        /**
         * Property tags: Tags to attach to vswitch.
         * <p>
         * Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to vswitch. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosVSwitch.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcIpv6CidrBlock Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC. This parameter is required.
         */
        public Builder vpcIpv6CidrBlock(final java.lang.String vpcIpv6CidrBlock) {
            this.props.vpcIpv6CidrBlock(vpcIpv6CidrBlock);
            return this;
        }
        /**
         * Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcIpv6CidrBlock Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC. This parameter is required.
         */
        public Builder vpcIpv6CidrBlock(final com.aliyun.ros.cdk.core.IResolvable vpcIpv6CidrBlock) {
            this.props.vpcIpv6CidrBlock(vpcIpv6CidrBlock);
            return this;
        }

        /**
         * Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param vSwitchName Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder vSwitchName(final java.lang.String vSwitchName) {
            this.props.vSwitchName(vSwitchName);
            return this;
        }
        /**
         * Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param vSwitchName Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder vSwitchName(final com.aliyun.ros.cdk.core.IResolvable vSwitchName) {
            this.props.vSwitchName(vSwitchName);
            return this;
        }

        /**
         * Property zoneType: The type of the zones to be queried.
         * <p>
         * Default value: AvailabilityZone. This value indicates Alibaba Cloud zones.
         * <p>
         * @return {@code this}
         * @param zoneType Property zoneType: The type of the zones to be queried. This parameter is required.
         */
        public Builder zoneType(final java.lang.String zoneType) {
            this.props.zoneType(zoneType);
            return this;
        }
        /**
         * Property zoneType: The type of the zones to be queried.
         * <p>
         * Default value: AvailabilityZone. This value indicates Alibaba Cloud zones.
         * <p>
         * @return {@code this}
         * @param zoneType Property zoneType: The type of the zones to be queried. This parameter is required.
         */
        public Builder zoneType(final com.aliyun.ros.cdk.core.IResolvable zoneType) {
            this.props.zoneType(zoneType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.VSwitch}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.VSwitch build() {
            return new com.aliyun.ros.cdk.ecs.VSwitch(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
