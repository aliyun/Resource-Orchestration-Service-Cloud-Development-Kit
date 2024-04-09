package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::SecurityGroupEgress</code>, which is used to create an outbound access rule for a security group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.429Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SecurityGroupEgress")
public class SecurityGroupEgress extends com.aliyun.ros.cdk.core.Resource {

    protected SecurityGroupEgress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SecurityGroupEgress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SecurityGroupEgress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SecurityGroupEgress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.SecurityGroupEgress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.SecurityGroupEgress> {
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
        private final com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.SecurityGroupEgressProps.Builder();
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
         * Property destCidrIp: The destination IPv4 CIDR block to which you want to control access.
         * <p>
         * CIDR blocks and IPv4 addresses are supported.
         * <p>
         * @return {@code this}
         * @param destCidrIp Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. This parameter is required.
         */
        public Builder destCidrIp(final java.lang.String destCidrIp) {
            this.props.destCidrIp(destCidrIp);
            return this;
        }
        /**
         * Property destCidrIp: The destination IPv4 CIDR block to which you want to control access.
         * <p>
         * CIDR blocks and IPv4 addresses are supported.
         * <p>
         * @return {@code this}
         * @param destCidrIp Property destCidrIp: The destination IPv4 CIDR block to which you want to control access. This parameter is required.
         */
        public Builder destCidrIp(final com.aliyun.ros.cdk.core.IResolvable destCidrIp) {
            this.props.destCidrIp(destCidrIp);
            return this;
        }

        /**
         * Property destGroupId: The destination security group ID to which access permissions need to be set.
         * <p>
         * Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
         * <p>
         * <ul>
         * <li>If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.</li>
         * <li>If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
         * You should pay attention to:</li>
         * <li>Enterprise Security groups do not support authorized security group access.</li>
         * <li>The maximum number of authorized security groups supported by ordinary security groups is 20.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destGroupId Property destGroupId: The destination security group ID to which access permissions need to be set. This parameter is required.
         */
        public Builder destGroupId(final java.lang.String destGroupId) {
            this.props.destGroupId(destGroupId);
            return this;
        }
        /**
         * Property destGroupId: The destination security group ID to which access permissions need to be set.
         * <p>
         * Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
         * <p>
         * <ul>
         * <li>If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.</li>
         * <li>If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
         * You should pay attention to:</li>
         * <li>Enterprise Security groups do not support authorized security group access.</li>
         * <li>The maximum number of authorized security groups supported by ordinary security groups is 20.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destGroupId Property destGroupId: The destination security group ID to which access permissions need to be set. This parameter is required.
         */
        public Builder destGroupId(final com.aliyun.ros.cdk.core.IResolvable destGroupId) {
            this.props.destGroupId(destGroupId);
            return this;
        }

        /**
         * Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.
         * <p>
         * <ul>
         * <li>If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.</li>
         * <li>If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destGroupOwnerId Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group. This parameter is required.
         */
        public Builder destGroupOwnerId(final java.lang.String destGroupOwnerId) {
            this.props.destGroupOwnerId(destGroupOwnerId);
            return this;
        }
        /**
         * Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.
         * <p>
         * <ul>
         * <li>If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.</li>
         * <li>If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destGroupOwnerId Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group. This parameter is required.
         */
        public Builder destGroupOwnerId(final com.aliyun.ros.cdk.core.IResolvable destGroupOwnerId) {
            this.props.destGroupOwnerId(destGroupOwnerId);
            return this;
        }

        /**
         * Property destPrefixListId: The ID of the destination prefix list to which you want to control access.
         * <p>
         * You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
         * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
         * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
         * <p>
         * @return {@code this}
         * @param destPrefixListId Property destPrefixListId: The ID of the destination prefix list to which you want to control access. This parameter is required.
         */
        public Builder destPrefixListId(final java.lang.String destPrefixListId) {
            this.props.destPrefixListId(destPrefixListId);
            return this;
        }
        /**
         * Property destPrefixListId: The ID of the destination prefix list to which you want to control access.
         * <p>
         * You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
         * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
         * If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
         * <p>
         * @return {@code this}
         * @param destPrefixListId Property destPrefixListId: The ID of the destination prefix list to which you want to control access. This parameter is required.
         */
        public Builder destPrefixListId(final com.aliyun.ros.cdk.core.IResolvable destPrefixListId) {
            this.props.destPrefixListId(destPrefixListId);
            return this;
        }

        /**
         * Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set.
         * <p>
         * CIDR format and IPv6 format IP address range are supported.
         * <p>
         * @return {@code this}
         * @param ipv6DestCidrIp Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. This parameter is required.
         */
        public Builder ipv6DestCidrIp(final java.lang.String ipv6DestCidrIp) {
            this.props.ipv6DestCidrIp(ipv6DestCidrIp);
            return this;
        }
        /**
         * Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set.
         * <p>
         * CIDR format and IPv6 format IP address range are supported.
         * <p>
         * @return {@code this}
         * @param ipv6DestCidrIp Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set. This parameter is required.
         */
        public Builder ipv6DestCidrIp(final com.aliyun.ros.cdk.core.IResolvable ipv6DestCidrIp) {
            this.props.ipv6DestCidrIp(ipv6DestCidrIp);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.SecurityGroupEgress}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.SecurityGroupEgress build() {
            return new com.aliyun.ros.cdk.ecs.SecurityGroupEgress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
