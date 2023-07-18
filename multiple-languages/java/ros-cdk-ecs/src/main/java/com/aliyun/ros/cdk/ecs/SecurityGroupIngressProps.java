package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ALIYUN::ECS::SecurityGroupIngress</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:01.680Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SecurityGroupIngressProps")
@software.amazon.jsii.Jsii.Proxy(SecurityGroupIngressProps.Jsii$Proxy.class)
public interface SecurityGroupIngressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ipProtocol: Ip protocol for in rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol();

    /**
     * Property portRange: Ip protocol relative port range.
     * <p>
     * For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPortRange();

    /**
     * Property description: Description of the security group rule, [1, 512] characters.
     * <p>
     * The default is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
     * <p>
     * Supports IP address ranges in CIDR format and IPv6 format.
     * Note Only VPC type IP addresses are supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6SourceCidrIp() {
        return null;
    }

    /**
     * Property nicType: Network type, could be 'internet' or 'intranet'.
     * <p>
     * Default value is internet.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNicType() {
        return null;
    }

    /**
     * Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).
     * <p>
     * Default value is accept.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     * Property priority: Authorization policies priority range[1, 100].
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     * Property securityGroupId: Id of the security group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access.
     * <p>
     * CIDR blocks and IPv4 addresses are supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidrIp() {
        return null;
    }

    /**
     * Property sourceGroupId: Source Group Id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceGroupId() {
        return null;
    }

    /**
     * Property sourceGroupOwnerId: Source Group Owner Account ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceGroupOwnerId() {
        return null;
    }

    /**
     * Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol.
     * <p>
     * Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePortRange() {
        return null;
    }

    /**
     * Property sourcePrefixListId: The ID of the source prefix list to which you want to control access.
     * <p>
     * You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
     * If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" section in Limits.
     * If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourcePrefixListId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SecurityGroupIngressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecurityGroupIngressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecurityGroupIngressProps> {
        java.lang.Object ipProtocol;
        java.lang.Object portRange;
        java.lang.Object description;
        java.lang.Object ipv6SourceCidrIp;
        java.lang.Object nicType;
        java.lang.Object policy;
        java.lang.Object priority;
        java.lang.Object securityGroupId;
        java.lang.Object sourceCidrIp;
        java.lang.Object sourceGroupId;
        java.lang.Object sourceGroupOwnerId;
        java.lang.Object sourcePortRange;
        java.lang.Object sourcePrefixListId;

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getIpProtocol}
         * @param ipProtocol Property ipProtocol: Ip protocol for in rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getIpProtocol}
         * @param ipProtocol Property ipProtocol: Ip protocol for in rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getPortRange}
         * @param portRange Property portRange: Ip protocol relative port range. This parameter is required.
         *                  For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
         * @return {@code this}
         */
        public Builder portRange(java.lang.String portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getPortRange}
         * @param portRange Property portRange: Ip protocol relative port range. This parameter is required.
         *                  For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
         * @return {@code this}
         */
        public Builder portRange(com.aliyun.ros.cdk.core.IResolvable portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getDescription}
         * @param description Property description: Description of the security group rule, [1, 512] characters.
         *                    The default is empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getDescription}
         * @param description Property description: Description of the security group rule, [1, 512] characters.
         *                    The default is empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getIpv6SourceCidrIp}
         * @param ipv6SourceCidrIp Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
         *                         Supports IP address ranges in CIDR format and IPv6 format.
         *                         Note Only VPC type IP addresses are supported.
         * @return {@code this}
         */
        public Builder ipv6SourceCidrIp(java.lang.String ipv6SourceCidrIp) {
            this.ipv6SourceCidrIp = ipv6SourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getIpv6SourceCidrIp}
         * @param ipv6SourceCidrIp Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
         *                         Supports IP address ranges in CIDR format and IPv6 format.
         *                         Note Only VPC type IP addresses are supported.
         * @return {@code this}
         */
        public Builder ipv6SourceCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
            this.ipv6SourceCidrIp = ipv6SourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getNicType}
         * @param nicType Property nicType: Network type, could be 'internet' or 'intranet'.
         *                Default value is internet.
         * @return {@code this}
         */
        public Builder nicType(java.lang.String nicType) {
            this.nicType = nicType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getNicType}
         * @param nicType Property nicType: Network type, could be 'internet' or 'intranet'.
         *                Default value is internet.
         * @return {@code this}
         */
        public Builder nicType(com.aliyun.ros.cdk.core.IResolvable nicType) {
            this.nicType = nicType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getPolicy}
         * @param policy Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).
         *               Default value is accept.
         * @return {@code this}
         */
        public Builder policy(java.lang.String policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getPolicy}
         * @param policy Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).
         *               Default value is accept.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getPriority}
         * @param priority Property priority: Authorization policies priority range[1, 100].
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getPriority}
         * @param priority Property priority: Authorization policies priority range[1, 100].
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Id of the security group.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Id of the security group.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourceCidrIp}
         * @param sourceCidrIp Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access.
         *                     CIDR blocks and IPv4 addresses are supported.
         * @return {@code this}
         */
        public Builder sourceCidrIp(java.lang.String sourceCidrIp) {
            this.sourceCidrIp = sourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourceCidrIp}
         * @param sourceCidrIp Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access.
         *                     CIDR blocks and IPv4 addresses are supported.
         * @return {@code this}
         */
        public Builder sourceCidrIp(com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
            this.sourceCidrIp = sourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourceGroupId}
         * @param sourceGroupId Property sourceGroupId: Source Group Id.
         * @return {@code this}
         */
        public Builder sourceGroupId(java.lang.String sourceGroupId) {
            this.sourceGroupId = sourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourceGroupId}
         * @param sourceGroupId Property sourceGroupId: Source Group Id.
         * @return {@code this}
         */
        public Builder sourceGroupId(com.aliyun.ros.cdk.core.IResolvable sourceGroupId) {
            this.sourceGroupId = sourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourceGroupOwnerId}
         * @param sourceGroupOwnerId Property sourceGroupOwnerId: Source Group Owner Account ID.
         * @return {@code this}
         */
        public Builder sourceGroupOwnerId(java.lang.String sourceGroupOwnerId) {
            this.sourceGroupOwnerId = sourceGroupOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourceGroupOwnerId}
         * @param sourceGroupOwnerId Property sourceGroupOwnerId: Source Group Owner Account ID.
         * @return {@code this}
         */
        public Builder sourceGroupOwnerId(com.aliyun.ros.cdk.core.IResolvable sourceGroupOwnerId) {
            this.sourceGroupOwnerId = sourceGroupOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourcePortRange}
         * @param sourcePortRange Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol.
         *                        Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
         * @return {@code this}
         */
        public Builder sourcePortRange(java.lang.String sourcePortRange) {
            this.sourcePortRange = sourcePortRange;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourcePortRange}
         * @param sourcePortRange Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol.
         *                        Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
         * @return {@code this}
         */
        public Builder sourcePortRange(com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
            this.sourcePortRange = sourcePortRange;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourcePrefixListId}
         * @param sourcePrefixListId Property sourcePrefixListId: The ID of the source prefix list to which you want to control access.
         *                           You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
         *                           If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" section in Limits.
         *                           If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
         * @return {@code this}
         */
        public Builder sourcePrefixListId(java.lang.String sourcePrefixListId) {
            this.sourcePrefixListId = sourcePrefixListId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupIngressProps#getSourcePrefixListId}
         * @param sourcePrefixListId Property sourcePrefixListId: The ID of the source prefix list to which you want to control access.
         *                           You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
         *                           If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" section in Limits.
         *                           If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
         * @return {@code this}
         */
        public Builder sourcePrefixListId(com.aliyun.ros.cdk.core.IResolvable sourcePrefixListId) {
            this.sourcePrefixListId = sourcePrefixListId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecurityGroupIngressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecurityGroupIngressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecurityGroupIngressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityGroupIngressProps {
        private final java.lang.Object ipProtocol;
        private final java.lang.Object portRange;
        private final java.lang.Object description;
        private final java.lang.Object ipv6SourceCidrIp;
        private final java.lang.Object nicType;
        private final java.lang.Object policy;
        private final java.lang.Object priority;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object sourceCidrIp;
        private final java.lang.Object sourceGroupId;
        private final java.lang.Object sourceGroupOwnerId;
        private final java.lang.Object sourcePortRange;
        private final java.lang.Object sourcePrefixListId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6SourceCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6SourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nicType = software.amazon.jsii.Kernel.get(this, "nicType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceCidrIp = software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceGroupId = software.amazon.jsii.Kernel.get(this, "sourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceGroupOwnerId = software.amazon.jsii.Kernel.get(this, "sourceGroupOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourcePrefixListId = software.amazon.jsii.Kernel.get(this, "sourcePrefixListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
            this.portRange = java.util.Objects.requireNonNull(builder.portRange, "portRange is required");
            this.description = builder.description;
            this.ipv6SourceCidrIp = builder.ipv6SourceCidrIp;
            this.nicType = builder.nicType;
            this.policy = builder.policy;
            this.priority = builder.priority;
            this.securityGroupId = builder.securityGroupId;
            this.sourceCidrIp = builder.sourceCidrIp;
            this.sourceGroupId = builder.sourceGroupId;
            this.sourceGroupOwnerId = builder.sourceGroupOwnerId;
            this.sourcePortRange = builder.sourcePortRange;
            this.sourcePrefixListId = builder.sourcePrefixListId;
        }

        @Override
        public final java.lang.Object getIpProtocol() {
            return this.ipProtocol;
        }

        @Override
        public final java.lang.Object getPortRange() {
            return this.portRange;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIpv6SourceCidrIp() {
            return this.ipv6SourceCidrIp;
        }

        @Override
        public final java.lang.Object getNicType() {
            return this.nicType;
        }

        @Override
        public final java.lang.Object getPolicy() {
            return this.policy;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSourceCidrIp() {
            return this.sourceCidrIp;
        }

        @Override
        public final java.lang.Object getSourceGroupId() {
            return this.sourceGroupId;
        }

        @Override
        public final java.lang.Object getSourceGroupOwnerId() {
            return this.sourceGroupOwnerId;
        }

        @Override
        public final java.lang.Object getSourcePortRange() {
            return this.sourcePortRange;
        }

        @Override
        public final java.lang.Object getSourcePrefixListId() {
            return this.sourcePrefixListId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
            data.set("portRange", om.valueToTree(this.getPortRange()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIpv6SourceCidrIp() != null) {
                data.set("ipv6SourceCidrIp", om.valueToTree(this.getIpv6SourceCidrIp()));
            }
            if (this.getNicType() != null) {
                data.set("nicType", om.valueToTree(this.getNicType()));
            }
            if (this.getPolicy() != null) {
                data.set("policy", om.valueToTree(this.getPolicy()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSourceCidrIp() != null) {
                data.set("sourceCidrIp", om.valueToTree(this.getSourceCidrIp()));
            }
            if (this.getSourceGroupId() != null) {
                data.set("sourceGroupId", om.valueToTree(this.getSourceGroupId()));
            }
            if (this.getSourceGroupOwnerId() != null) {
                data.set("sourceGroupOwnerId", om.valueToTree(this.getSourceGroupOwnerId()));
            }
            if (this.getSourcePortRange() != null) {
                data.set("sourcePortRange", om.valueToTree(this.getSourcePortRange()));
            }
            if (this.getSourcePrefixListId() != null) {
                data.set("sourcePrefixListId", om.valueToTree(this.getSourcePrefixListId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.SecurityGroupIngressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecurityGroupIngressProps.Jsii$Proxy that = (SecurityGroupIngressProps.Jsii$Proxy) o;

            if (!ipProtocol.equals(that.ipProtocol)) return false;
            if (!portRange.equals(that.portRange)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ipv6SourceCidrIp != null ? !this.ipv6SourceCidrIp.equals(that.ipv6SourceCidrIp) : that.ipv6SourceCidrIp != null) return false;
            if (this.nicType != null ? !this.nicType.equals(that.nicType) : that.nicType != null) return false;
            if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.sourceCidrIp != null ? !this.sourceCidrIp.equals(that.sourceCidrIp) : that.sourceCidrIp != null) return false;
            if (this.sourceGroupId != null ? !this.sourceGroupId.equals(that.sourceGroupId) : that.sourceGroupId != null) return false;
            if (this.sourceGroupOwnerId != null ? !this.sourceGroupOwnerId.equals(that.sourceGroupOwnerId) : that.sourceGroupOwnerId != null) return false;
            if (this.sourcePortRange != null ? !this.sourcePortRange.equals(that.sourcePortRange) : that.sourcePortRange != null) return false;
            return this.sourcePrefixListId != null ? this.sourcePrefixListId.equals(that.sourcePrefixListId) : that.sourcePrefixListId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipProtocol.hashCode();
            result = 31 * result + (this.portRange.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ipv6SourceCidrIp != null ? this.ipv6SourceCidrIp.hashCode() : 0);
            result = 31 * result + (this.nicType != null ? this.nicType.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.sourceCidrIp != null ? this.sourceCidrIp.hashCode() : 0);
            result = 31 * result + (this.sourceGroupId != null ? this.sourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sourceGroupOwnerId != null ? this.sourceGroupOwnerId.hashCode() : 0);
            result = 31 * result + (this.sourcePortRange != null ? this.sourcePortRange.hashCode() : 0);
            result = 31 * result + (this.sourcePrefixListId != null ? this.sourcePrefixListId.hashCode() : 0);
            return result;
        }
    }
}
