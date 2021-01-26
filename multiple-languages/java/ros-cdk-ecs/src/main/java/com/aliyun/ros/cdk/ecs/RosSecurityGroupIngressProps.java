package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupIngress`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:10.057Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroupIngressProps")
@software.amazon.jsii.Jsii.Proxy(RosSecurityGroupIngressProps.Jsii$Proxy.class)
public interface RosSecurityGroupIngressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getIpProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPortRange();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIpv6SourceCidrIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNicType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourceCidrIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourceGroupOwnerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourcePortRange() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSecurityGroupIngressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecurityGroupIngressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecurityGroupIngressProps> {
        private java.lang.String ipProtocol;
        private java.lang.String portRange;
        private java.lang.String description;
        private java.lang.String ipv6SourceCidrIp;
        private java.lang.String nicType;
        private java.lang.String policy;
        private java.lang.Number priority;
        private java.lang.String securityGroupId;
        private java.lang.String sourceCidrIp;
        private java.lang.String sourceGroupId;
        private java.lang.String sourceGroupOwnerId;
        private java.lang.String sourcePortRange;

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getIpProtocol}
         * @param ipProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getPortRange}
         * @param portRange the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portRange(java.lang.String portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getIpv6SourceCidrIp}
         * @param ipv6SourceCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6SourceCidrIp(java.lang.String ipv6SourceCidrIp) {
            this.ipv6SourceCidrIp = ipv6SourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getNicType}
         * @param nicType the value to be set.
         * @return {@code this}
         */
        public Builder nicType(java.lang.String nicType) {
            this.nicType = nicType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(java.lang.String policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getSourceCidrIp}
         * @param sourceCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder sourceCidrIp(java.lang.String sourceCidrIp) {
            this.sourceCidrIp = sourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getSourceGroupId}
         * @param sourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder sourceGroupId(java.lang.String sourceGroupId) {
            this.sourceGroupId = sourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getSourceGroupOwnerId}
         * @param sourceGroupOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder sourceGroupOwnerId(java.lang.String sourceGroupOwnerId) {
            this.sourceGroupOwnerId = sourceGroupOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupIngressProps#getSourcePortRange}
         * @param sourcePortRange the value to be set.
         * @return {@code this}
         */
        public Builder sourcePortRange(java.lang.String sourcePortRange) {
            this.sourcePortRange = sourcePortRange;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecurityGroupIngressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecurityGroupIngressProps build() {
            return new Jsii$Proxy(ipProtocol, portRange, description, ipv6SourceCidrIp, nicType, policy, priority, securityGroupId, sourceCidrIp, sourceGroupId, sourceGroupOwnerId, sourcePortRange);
        }
    }

    /**
     * An implementation for {@link RosSecurityGroupIngressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecurityGroupIngressProps {
        private final java.lang.String ipProtocol;
        private final java.lang.String portRange;
        private final java.lang.String description;
        private final java.lang.String ipv6SourceCidrIp;
        private final java.lang.String nicType;
        private final java.lang.String policy;
        private final java.lang.Number priority;
        private final java.lang.String securityGroupId;
        private final java.lang.String sourceCidrIp;
        private final java.lang.String sourceGroupId;
        private final java.lang.String sourceGroupOwnerId;
        private final java.lang.String sourcePortRange;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipv6SourceCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6SourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.nicType = software.amazon.jsii.Kernel.get(this, "nicType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceCidrIp = software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceGroupId = software.amazon.jsii.Kernel.get(this, "sourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceGroupOwnerId = software.amazon.jsii.Kernel.get(this, "sourceGroupOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String ipProtocol, final java.lang.String portRange, final java.lang.String description, final java.lang.String ipv6SourceCidrIp, final java.lang.String nicType, final java.lang.String policy, final java.lang.Number priority, final java.lang.String securityGroupId, final java.lang.String sourceCidrIp, final java.lang.String sourceGroupId, final java.lang.String sourceGroupOwnerId, final java.lang.String sourcePortRange) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipProtocol = java.util.Objects.requireNonNull(ipProtocol, "ipProtocol is required");
            this.portRange = java.util.Objects.requireNonNull(portRange, "portRange is required");
            this.description = description;
            this.ipv6SourceCidrIp = ipv6SourceCidrIp;
            this.nicType = nicType;
            this.policy = policy;
            this.priority = priority;
            this.securityGroupId = securityGroupId;
            this.sourceCidrIp = sourceCidrIp;
            this.sourceGroupId = sourceGroupId;
            this.sourceGroupOwnerId = sourceGroupOwnerId;
            this.sourcePortRange = sourcePortRange;
        }

        @Override
        public final java.lang.String getIpProtocol() {
            return this.ipProtocol;
        }

        @Override
        public final java.lang.String getPortRange() {
            return this.portRange;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getIpv6SourceCidrIp() {
            return this.ipv6SourceCidrIp;
        }

        @Override
        public final java.lang.String getNicType() {
            return this.nicType;
        }

        @Override
        public final java.lang.String getPolicy() {
            return this.policy;
        }

        @Override
        public final java.lang.Number getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.String getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.String getSourceCidrIp() {
            return this.sourceCidrIp;
        }

        @Override
        public final java.lang.String getSourceGroupId() {
            return this.sourceGroupId;
        }

        @Override
        public final java.lang.String getSourceGroupOwnerId() {
            return this.sourceGroupOwnerId;
        }

        @Override
        public final java.lang.String getSourcePortRange() {
            return this.sourcePortRange;
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

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroupIngressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecurityGroupIngressProps.Jsii$Proxy that = (RosSecurityGroupIngressProps.Jsii$Proxy) o;

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
            return this.sourcePortRange != null ? this.sourcePortRange.equals(that.sourcePortRange) : that.sourcePortRange == null;
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
            return result;
        }
    }
}
