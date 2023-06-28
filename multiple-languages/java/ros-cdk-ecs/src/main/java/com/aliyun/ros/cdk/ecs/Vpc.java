package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::VPC</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:28.487Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.Vpc")
public class Vpc extends com.aliyun.ros.cdk.core.Resource {

    protected Vpc(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Vpc(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::VPC</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Vpc(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.VPCProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECS::VPC</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Vpc(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.VPCProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>ALIYUN::ECS::VPC</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Vpc(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute RouteTableId: The router table id of created VPC.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: Id of created VPC.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VRouterId: Router id of created VPC.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrVRouterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.Vpc}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.Vpc> {
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
        private com.aliyun.ros.cdk.ecs.VPCProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property cidrBlock: The IP address range of the VPC in the CIDR block form.
         * <p>
         * You can use the following IP address ranges and their subnets:
         * 10.0.0.0/8
         * 172.16.0.0/12 (Default)
         * 192.168.0.0/16
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: The IP address range of the VPC in the CIDR block form. This parameter is required.
         */
        public Builder cidrBlock(final java.lang.String cidrBlock) {
            this.props().cidrBlock(cidrBlock);
            return this;
        }
        /**
         * Property cidrBlock: The IP address range of the VPC in the CIDR block form.
         * <p>
         * You can use the following IP address ranges and their subnets:
         * 10.0.0.0/8
         * 172.16.0.0/12 (Default)
         * 192.168.0.0/16
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: The IP address range of the VPC in the CIDR block form. This parameter is required.
         */
        public Builder cidrBlock(final com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.props().cidrBlock(cidrBlock);
            return this;
        }

        /**
         * Property description: Description of the vpc, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the vpc, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: Description of the vpc, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the vpc, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
         * <p>
         * @return {@code this}
         * @param enableIpv6 Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On. This parameter is required.
         */
        public Builder enableIpv6(final java.lang.Boolean enableIpv6) {
            this.props().enableIpv6(enableIpv6);
            return this;
        }
        /**
         * Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
         * <p>
         * @return {@code this}
         * @param enableIpv6 Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On. This parameter is required.
         */
        public Builder enableIpv6(final com.aliyun.ros.cdk.core.IResolvable enableIpv6) {
            this.props().enableIpv6(enableIpv6);
            return this;
        }

        /**
         * Property ipv6CidrBlock: IPv6 network cidr of the VPC.
         * <p>
         * @return {@code this}
         * @param ipv6CidrBlock Property ipv6CidrBlock: IPv6 network cidr of the VPC. This parameter is required.
         */
        public Builder ipv6CidrBlock(final java.lang.String ipv6CidrBlock) {
            this.props().ipv6CidrBlock(ipv6CidrBlock);
            return this;
        }
        /**
         * Property ipv6CidrBlock: IPv6 network cidr of the VPC.
         * <p>
         * @return {@code this}
         * @param ipv6CidrBlock Property ipv6CidrBlock: IPv6 network cidr of the VPC. This parameter is required.
         */
        public Builder ipv6CidrBlock(final com.aliyun.ros.cdk.core.IResolvable ipv6CidrBlock) {
            this.props().ipv6CidrBlock(ipv6CidrBlock);
            return this;
        }

        /**
         * Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC.
         * <p>
         * Valid values:
         * BGP(default): Alibaba Cloud BGP IPv6
         * ChinaMobile: China Mobile (single line)
         * ChinaUnicom: China Unicom (single line)
         * ChinaTelecom: China Telecom (single line)
         * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
         * <p>
         * @return {@code this}
         * @param ipv6Isp Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC. This parameter is required.
         */
        public Builder ipv6Isp(final java.lang.String ipv6Isp) {
            this.props().ipv6Isp(ipv6Isp);
            return this;
        }
        /**
         * Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC.
         * <p>
         * Valid values:
         * BGP(default): Alibaba Cloud BGP IPv6
         * ChinaMobile: China Mobile (single line)
         * ChinaUnicom: China Unicom (single line)
         * ChinaTelecom: China Telecom (single line)
         * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
         * <p>
         * @return {@code this}
         * @param ipv6Isp Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC. This parameter is required.
         */
        public Builder ipv6Isp(final com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.props().ipv6Isp(ipv6Isp);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.
         * <p>
         * @return {@code this}
         * @param secondaryCidrBlocks Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks. This parameter is required.
         */
        public Builder secondaryCidrBlocks(final com.aliyun.ros.cdk.core.IResolvable secondaryCidrBlocks) {
            this.props().secondaryCidrBlocks(secondaryCidrBlocks);
            return this;
        }
        /**
         * Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.
         * <p>
         * @return {@code this}
         * @param secondaryCidrBlocks Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks. This parameter is required.
         */
        public Builder secondaryCidrBlocks(final java.util.List<? extends java.lang.Object> secondaryCidrBlocks) {
            this.props().secondaryCidrBlocks(secondaryCidrBlocks);
            return this;
        }

        /**
         * Property tags: Tags to attach to vpc.
         * <p>
         * Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to vpc. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosVPC.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property userCidr: The user CIDR block.
         * <p>
         * Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
         * <p>
         * @return {@code this}
         * @param userCidr Property userCidr: The user CIDR block. This parameter is required.
         */
        public Builder userCidr(final java.lang.String userCidr) {
            this.props().userCidr(userCidr);
            return this;
        }
        /**
         * Property userCidr: The user CIDR block.
         * <p>
         * Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
         * <p>
         * @return {@code this}
         * @param userCidr Property userCidr: The user CIDR block. This parameter is required.
         */
        public Builder userCidr(final com.aliyun.ros.cdk.core.IResolvable userCidr) {
            this.props().userCidr(userCidr);
            return this;
        }

        /**
         * Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param vpcName Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder vpcName(final java.lang.String vpcName) {
            this.props().vpcName(vpcName);
            return this;
        }
        /**
         * Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param vpcName Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder vpcName(final com.aliyun.ros.cdk.core.IResolvable vpcName) {
            this.props().vpcName(vpcName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.Vpc}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.Vpc build() {
            return new com.aliyun.ros.cdk.ecs.Vpc(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.VPCProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.VPCProps.Builder();
            }
            return this.props;
        }
    }
}
