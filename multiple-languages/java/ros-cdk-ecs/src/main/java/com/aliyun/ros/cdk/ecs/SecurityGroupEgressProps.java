package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::SecurityGroupEgress`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.845Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SecurityGroupEgressProps")
@software.amazon.jsii.Jsii.Proxy(SecurityGroupEgressProps.Jsii$Proxy.class)
public interface SecurityGroupEgressProps extends software.amazon.jsii.JsiiSerializable {

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
    default @org.jetbrains.annotations.Nullable java.lang.String getDestCidrIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestGroupOwnerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIpv6DestCidrIp() {
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
     * @return a {@link Builder} of {@link SecurityGroupEgressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecurityGroupEgressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecurityGroupEgressProps> {
        private java.lang.String ipProtocol;
        private java.lang.String portRange;
        private java.lang.String description;
        private java.lang.String destCidrIp;
        private java.lang.String destGroupId;
        private java.lang.String destGroupOwnerId;
        private java.lang.String ipv6DestCidrIp;
        private java.lang.String nicType;
        private java.lang.String policy;
        private java.lang.Number priority;
        private java.lang.String securityGroupId;

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getIpProtocol}
         * @param ipProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getPortRange}
         * @param portRange the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portRange(java.lang.String portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getDestCidrIp}
         * @param destCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder destCidrIp(java.lang.String destCidrIp) {
            this.destCidrIp = destCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getDestGroupId}
         * @param destGroupId the value to be set.
         * @return {@code this}
         */
        public Builder destGroupId(java.lang.String destGroupId) {
            this.destGroupId = destGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getDestGroupOwnerId}
         * @param destGroupOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder destGroupOwnerId(java.lang.String destGroupOwnerId) {
            this.destGroupOwnerId = destGroupOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getIpv6DestCidrIp}
         * @param ipv6DestCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6DestCidrIp(java.lang.String ipv6DestCidrIp) {
            this.ipv6DestCidrIp = ipv6DestCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getNicType}
         * @param nicType the value to be set.
         * @return {@code this}
         */
        public Builder nicType(java.lang.String nicType) {
            this.nicType = nicType;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(java.lang.String policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupEgressProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecurityGroupEgressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecurityGroupEgressProps build() {
            return new Jsii$Proxy(ipProtocol, portRange, description, destCidrIp, destGroupId, destGroupOwnerId, ipv6DestCidrIp, nicType, policy, priority, securityGroupId);
        }
    }

    /**
     * An implementation for {@link SecurityGroupEgressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityGroupEgressProps {
        private final java.lang.String ipProtocol;
        private final java.lang.String portRange;
        private final java.lang.String description;
        private final java.lang.String destCidrIp;
        private final java.lang.String destGroupId;
        private final java.lang.String destGroupOwnerId;
        private final java.lang.String ipv6DestCidrIp;
        private final java.lang.String nicType;
        private final java.lang.String policy;
        private final java.lang.Number priority;
        private final java.lang.String securityGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destCidrIp = software.amazon.jsii.Kernel.get(this, "destCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destGroupId = software.amazon.jsii.Kernel.get(this, "destGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destGroupOwnerId = software.amazon.jsii.Kernel.get(this, "destGroupOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipv6DestCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6DestCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.nicType = software.amazon.jsii.Kernel.get(this, "nicType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String ipProtocol, final java.lang.String portRange, final java.lang.String description, final java.lang.String destCidrIp, final java.lang.String destGroupId, final java.lang.String destGroupOwnerId, final java.lang.String ipv6DestCidrIp, final java.lang.String nicType, final java.lang.String policy, final java.lang.Number priority, final java.lang.String securityGroupId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipProtocol = java.util.Objects.requireNonNull(ipProtocol, "ipProtocol is required");
            this.portRange = java.util.Objects.requireNonNull(portRange, "portRange is required");
            this.description = description;
            this.destCidrIp = destCidrIp;
            this.destGroupId = destGroupId;
            this.destGroupOwnerId = destGroupOwnerId;
            this.ipv6DestCidrIp = ipv6DestCidrIp;
            this.nicType = nicType;
            this.policy = policy;
            this.priority = priority;
            this.securityGroupId = securityGroupId;
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
        public final java.lang.String getDestCidrIp() {
            return this.destCidrIp;
        }

        @Override
        public final java.lang.String getDestGroupId() {
            return this.destGroupId;
        }

        @Override
        public final java.lang.String getDestGroupOwnerId() {
            return this.destGroupOwnerId;
        }

        @Override
        public final java.lang.String getIpv6DestCidrIp() {
            return this.ipv6DestCidrIp;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
            data.set("portRange", om.valueToTree(this.getPortRange()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDestCidrIp() != null) {
                data.set("destCidrIp", om.valueToTree(this.getDestCidrIp()));
            }
            if (this.getDestGroupId() != null) {
                data.set("destGroupId", om.valueToTree(this.getDestGroupId()));
            }
            if (this.getDestGroupOwnerId() != null) {
                data.set("destGroupOwnerId", om.valueToTree(this.getDestGroupOwnerId()));
            }
            if (this.getIpv6DestCidrIp() != null) {
                data.set("ipv6DestCidrIp", om.valueToTree(this.getIpv6DestCidrIp()));
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

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.SecurityGroupEgressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecurityGroupEgressProps.Jsii$Proxy that = (SecurityGroupEgressProps.Jsii$Proxy) o;

            if (!ipProtocol.equals(that.ipProtocol)) return false;
            if (!portRange.equals(that.portRange)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.destCidrIp != null ? !this.destCidrIp.equals(that.destCidrIp) : that.destCidrIp != null) return false;
            if (this.destGroupId != null ? !this.destGroupId.equals(that.destGroupId) : that.destGroupId != null) return false;
            if (this.destGroupOwnerId != null ? !this.destGroupOwnerId.equals(that.destGroupOwnerId) : that.destGroupOwnerId != null) return false;
            if (this.ipv6DestCidrIp != null ? !this.ipv6DestCidrIp.equals(that.ipv6DestCidrIp) : that.ipv6DestCidrIp != null) return false;
            if (this.nicType != null ? !this.nicType.equals(that.nicType) : that.nicType != null) return false;
            if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            return this.securityGroupId != null ? this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipProtocol.hashCode();
            result = 31 * result + (this.portRange.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.destCidrIp != null ? this.destCidrIp.hashCode() : 0);
            result = 31 * result + (this.destGroupId != null ? this.destGroupId.hashCode() : 0);
            result = 31 * result + (this.destGroupOwnerId != null ? this.destGroupOwnerId.hashCode() : 0);
            result = 31 * result + (this.ipv6DestCidrIp != null ? this.ipv6DestCidrIp.hashCode() : 0);
            result = 31 * result + (this.nicType != null ? this.nicType.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            return result;
        }
    }
}
