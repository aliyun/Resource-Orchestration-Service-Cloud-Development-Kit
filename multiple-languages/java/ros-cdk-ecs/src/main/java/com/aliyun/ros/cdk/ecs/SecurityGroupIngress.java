package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::SecurityGroupIngress</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.194Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SecurityGroupIngress")
public class SecurityGroupIngress extends com.aliyun.ros.cdk.core.Resource {

    protected SecurityGroupIngress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SecurityGroupIngress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::SecurityGroupIngress</code>.
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
    public SecurityGroupIngress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupIngressProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECS::SecurityGroupIngress</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SecurityGroupIngress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupIngressProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.SecurityGroupIngress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.SecurityGroupIngress> {
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
        private final com.aliyun.ros.cdk.ecs.SecurityGroupIngressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.SecurityGroupIngressProps.Builder();
        }

        /**
         * Property ipProtocol: Ip protocol for in rule.
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: Ip protocol for in rule. This parameter is required.
         */
        public Builder ipProtocol(final java.lang.String ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }
        /**
         * Property ipProtocol: Ip protocol for in rule.
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: Ip protocol for in rule. This parameter is required.
         */
        public Builder ipProtocol(final com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }

        /**
         * Property portRange: Ip protocol relative port range.
         * <p>
         * For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
         * <p>
         * @return {@code this}
         * @param portRange Property portRange: Ip protocol relative port range. This parameter is required.
         */
        public Builder portRange(final java.lang.String portRange) {
            this.props.portRange(portRange);
            return this;
        }
        /**
         * Property portRange: Ip protocol relative port range.
         * <p>
         * For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
         * <p>
         * @return {@code this}
         * @param portRange Property portRange: Ip protocol relative port range. This parameter is required.
         */
        public Builder portRange(final com.aliyun.ros.cdk.core.IResolvable portRange) {
            this.props.portRange(portRange);
            return this;
        }

        /**
         * Property description: Description of the security group rule, [1, 512] characters.
         * <p>
         * The default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the security group rule, [1, 512] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the security group rule, [1, 512] characters.
         * <p>
         * The default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the security group rule, [1, 512] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
         * <p>
         * Supports IP address ranges in CIDR format and IPv6 format.
         * Note Only VPC type IP addresses are supported.
         * <p>
         * @return {@code this}
         * @param ipv6SourceCidrIp Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. This parameter is required.
         */
        public Builder ipv6SourceCidrIp(final java.lang.String ipv6SourceCidrIp) {
            this.props.ipv6SourceCidrIp(ipv6SourceCidrIp);
            return this;
        }
        /**
         * Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
         * <p>
         * Supports IP address ranges in CIDR format and IPv6 format.
         * Note Only VPC type IP addresses are supported.
         * <p>
         * @return {@code this}
         * @param ipv6SourceCidrIp Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. This parameter is required.
         */
        public Builder ipv6SourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
            this.props.ipv6SourceCidrIp(ipv6SourceCidrIp);
            return this;
        }

        /**
         * Property nicType: Network type, could be 'internet' or 'intranet'.
         * <p>
         * Default value is internet.
         * <p>
         * @return {@code this}
         * @param nicType Property nicType: Network type, could be 'internet' or 'intranet'. This parameter is required.
         */
        public Builder nicType(final java.lang.String nicType) {
            this.props.nicType(nicType);
            return this;
        }
        /**
         * Property nicType: Network type, could be 'internet' or 'intranet'.
         * <p>
         * Default value is internet.
         * <p>
         * @return {@code this}
         * @param nicType Property nicType: Network type, could be 'internet' or 'intranet'. This parameter is required.
         */
        public Builder nicType(final com.aliyun.ros.cdk.core.IResolvable nicType) {
            this.props.nicType(nicType);
            return this;
        }

        /**
         * Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).
         * <p>
         * Default value is accept.
         * <p>
         * @return {@code this}
         * @param policy Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). This parameter is required.
         */
        public Builder policy(final java.lang.String policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).
         * <p>
         * Default value is accept.
         * <p>
         * @return {@code this}
         * @param policy Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * Property priority: Authorization policies priority range[1, 100].
         * <p>
         * @return {@code this}
         * @param priority Property priority: Authorization policies priority range[1, 100]. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: Authorization policies priority range[1, 100].
         * <p>
         * @return {@code this}
         * @param priority Property priority: Authorization policies priority range[1, 100]. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property securityGroupId: Id of the security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Id of the security group. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Id of the security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Id of the security group. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access.
         * <p>
         * CIDR blocks and IPv4 addresses are supported.
         * <p>
         * @return {@code this}
         * @param sourceCidrIp Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. This parameter is required.
         */
        public Builder sourceCidrIp(final java.lang.String sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }
        /**
         * Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access.
         * <p>
         * CIDR blocks and IPv4 addresses are supported.
         * <p>
         * @return {@code this}
         * @param sourceCidrIp Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access. This parameter is required.
         */
        public Builder sourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }

        /**
         * Property sourceGroupId: Source Group Id.
         * <p>
         * @return {@code this}
         * @param sourceGroupId Property sourceGroupId: Source Group Id. This parameter is required.
         */
        public Builder sourceGroupId(final java.lang.String sourceGroupId) {
            this.props.sourceGroupId(sourceGroupId);
            return this;
        }
        /**
         * Property sourceGroupId: Source Group Id.
         * <p>
         * @return {@code this}
         * @param sourceGroupId Property sourceGroupId: Source Group Id. This parameter is required.
         */
        public Builder sourceGroupId(final com.aliyun.ros.cdk.core.IResolvable sourceGroupId) {
            this.props.sourceGroupId(sourceGroupId);
            return this;
        }

        /**
         * Property sourceGroupOwnerId: Source Group Owner Account ID.
         * <p>
         * @return {@code this}
         * @param sourceGroupOwnerId Property sourceGroupOwnerId: Source Group Owner Account ID. This parameter is required.
         */
        public Builder sourceGroupOwnerId(final java.lang.String sourceGroupOwnerId) {
            this.props.sourceGroupOwnerId(sourceGroupOwnerId);
            return this;
        }
        /**
         * Property sourceGroupOwnerId: Source Group Owner Account ID.
         * <p>
         * @return {@code this}
         * @param sourceGroupOwnerId Property sourceGroupOwnerId: Source Group Owner Account ID. This parameter is required.
         */
        public Builder sourceGroupOwnerId(final com.aliyun.ros.cdk.core.IResolvable sourceGroupOwnerId) {
            this.props.sourceGroupOwnerId(sourceGroupOwnerId);
            return this;
        }

        /**
         * Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol.
         * <p>
         * Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
         * <p>
         * @return {@code this}
         * @param sourcePortRange Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. This parameter is required.
         */
        public Builder sourcePortRange(final java.lang.String sourcePortRange) {
            this.props.sourcePortRange(sourcePortRange);
            return this;
        }
        /**
         * Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol.
         * <p>
         * Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
         * <p>
         * @return {@code this}
         * @param sourcePortRange Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. This parameter is required.
         */
        public Builder sourcePortRange(final com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
            this.props.sourcePortRange(sourcePortRange);
            return this;
        }

        /**
         * Property sourcePrefixListId: The ID of the source prefix list to which you want to control access.
         * <p>
         * You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
         * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" section in Limits.
         * If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
         * <p>
         * @return {@code this}
         * @param sourcePrefixListId Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. This parameter is required.
         */
        public Builder sourcePrefixListId(final java.lang.String sourcePrefixListId) {
            this.props.sourcePrefixListId(sourcePrefixListId);
            return this;
        }
        /**
         * Property sourcePrefixListId: The ID of the source prefix list to which you want to control access.
         * <p>
         * You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
         * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" section in Limits.
         * If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
         * <p>
         * @return {@code this}
         * @param sourcePrefixListId Property sourcePrefixListId: The ID of the source prefix list to which you want to control access. This parameter is required.
         */
        public Builder sourcePrefixListId(final com.aliyun.ros.cdk.core.IResolvable sourcePrefixListId) {
            this.props.sourcePrefixListId(sourcePrefixListId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.SecurityGroupIngress}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.SecurityGroupIngress build() {
            return new com.aliyun.ros.cdk.ecs.SecurityGroupIngress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
