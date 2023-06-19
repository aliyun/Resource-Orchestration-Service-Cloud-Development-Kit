package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ALIYUN::ECS::SecurityGroupEgress</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:09.635Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroupEgressProps")
@software.amazon.jsii.Jsii.Proxy(RosSecurityGroupEgressProps.Jsii$Proxy.class)
public interface RosSecurityGroupEgressProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPortRange();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestCidrIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestGroupOwnerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPrefixListId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6DestCidrIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNicType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSecurityGroupEgressProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecurityGroupEgressProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecurityGroupEgressProps> {
        java.lang.Object ipProtocol;
        java.lang.Object portRange;
        java.lang.Object description;
        java.lang.Object destCidrIp;
        java.lang.Object destGroupId;
        java.lang.Object destGroupOwnerId;
        java.lang.Object destPrefixListId;
        java.lang.Object ipv6DestCidrIp;
        java.lang.Object nicType;
        java.lang.Object policy;
        java.lang.Object priority;
        java.lang.Object securityGroupId;

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getIpProtocol}
         * @param ipProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getIpProtocol}
         * @param ipProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getPortRange}
         * @param portRange the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portRange(java.lang.String portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getPortRange}
         * @param portRange the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portRange(com.aliyun.ros.cdk.core.IResolvable portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDestCidrIp}
         * @param destCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder destCidrIp(java.lang.String destCidrIp) {
            this.destCidrIp = destCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDestCidrIp}
         * @param destCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder destCidrIp(com.aliyun.ros.cdk.core.IResolvable destCidrIp) {
            this.destCidrIp = destCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDestGroupId}
         * @param destGroupId the value to be set.
         * @return {@code this}
         */
        public Builder destGroupId(java.lang.String destGroupId) {
            this.destGroupId = destGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDestGroupId}
         * @param destGroupId the value to be set.
         * @return {@code this}
         */
        public Builder destGroupId(com.aliyun.ros.cdk.core.IResolvable destGroupId) {
            this.destGroupId = destGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDestGroupOwnerId}
         * @param destGroupOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder destGroupOwnerId(java.lang.String destGroupOwnerId) {
            this.destGroupOwnerId = destGroupOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDestGroupOwnerId}
         * @param destGroupOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder destGroupOwnerId(com.aliyun.ros.cdk.core.IResolvable destGroupOwnerId) {
            this.destGroupOwnerId = destGroupOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDestPrefixListId}
         * @param destPrefixListId the value to be set.
         * @return {@code this}
         */
        public Builder destPrefixListId(java.lang.String destPrefixListId) {
            this.destPrefixListId = destPrefixListId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getDestPrefixListId}
         * @param destPrefixListId the value to be set.
         * @return {@code this}
         */
        public Builder destPrefixListId(com.aliyun.ros.cdk.core.IResolvable destPrefixListId) {
            this.destPrefixListId = destPrefixListId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getIpv6DestCidrIp}
         * @param ipv6DestCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6DestCidrIp(java.lang.String ipv6DestCidrIp) {
            this.ipv6DestCidrIp = ipv6DestCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getIpv6DestCidrIp}
         * @param ipv6DestCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6DestCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6DestCidrIp) {
            this.ipv6DestCidrIp = ipv6DestCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getNicType}
         * @param nicType the value to be set.
         * @return {@code this}
         */
        public Builder nicType(java.lang.String nicType) {
            this.nicType = nicType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getNicType}
         * @param nicType the value to be set.
         * @return {@code this}
         */
        public Builder nicType(com.aliyun.ros.cdk.core.IResolvable nicType) {
            this.nicType = nicType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(java.lang.String policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecurityGroupEgressProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecurityGroupEgressProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSecurityGroupEgressProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecurityGroupEgressProps {
        private final java.lang.Object ipProtocol;
        private final java.lang.Object portRange;
        private final java.lang.Object description;
        private final java.lang.Object destCidrIp;
        private final java.lang.Object destGroupId;
        private final java.lang.Object destGroupOwnerId;
        private final java.lang.Object destPrefixListId;
        private final java.lang.Object ipv6DestCidrIp;
        private final java.lang.Object nicType;
        private final java.lang.Object policy;
        private final java.lang.Object priority;
        private final java.lang.Object securityGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destCidrIp = software.amazon.jsii.Kernel.get(this, "destCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destGroupId = software.amazon.jsii.Kernel.get(this, "destGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destGroupOwnerId = software.amazon.jsii.Kernel.get(this, "destGroupOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPrefixListId = software.amazon.jsii.Kernel.get(this, "destPrefixListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6DestCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6DestCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nicType = software.amazon.jsii.Kernel.get(this, "nicType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
            this.portRange = java.util.Objects.requireNonNull(builder.portRange, "portRange is required");
            this.description = builder.description;
            this.destCidrIp = builder.destCidrIp;
            this.destGroupId = builder.destGroupId;
            this.destGroupOwnerId = builder.destGroupOwnerId;
            this.destPrefixListId = builder.destPrefixListId;
            this.ipv6DestCidrIp = builder.ipv6DestCidrIp;
            this.nicType = builder.nicType;
            this.policy = builder.policy;
            this.priority = builder.priority;
            this.securityGroupId = builder.securityGroupId;
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
        public final java.lang.Object getDestCidrIp() {
            return this.destCidrIp;
        }

        @Override
        public final java.lang.Object getDestGroupId() {
            return this.destGroupId;
        }

        @Override
        public final java.lang.Object getDestGroupOwnerId() {
            return this.destGroupOwnerId;
        }

        @Override
        public final java.lang.Object getDestPrefixListId() {
            return this.destPrefixListId;
        }

        @Override
        public final java.lang.Object getIpv6DestCidrIp() {
            return this.ipv6DestCidrIp;
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
            if (this.getDestPrefixListId() != null) {
                data.set("destPrefixListId", om.valueToTree(this.getDestPrefixListId()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroupEgressProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecurityGroupEgressProps.Jsii$Proxy that = (RosSecurityGroupEgressProps.Jsii$Proxy) o;

            if (!ipProtocol.equals(that.ipProtocol)) return false;
            if (!portRange.equals(that.portRange)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.destCidrIp != null ? !this.destCidrIp.equals(that.destCidrIp) : that.destCidrIp != null) return false;
            if (this.destGroupId != null ? !this.destGroupId.equals(that.destGroupId) : that.destGroupId != null) return false;
            if (this.destGroupOwnerId != null ? !this.destGroupOwnerId.equals(that.destGroupOwnerId) : that.destGroupOwnerId != null) return false;
            if (this.destPrefixListId != null ? !this.destPrefixListId.equals(that.destPrefixListId) : that.destPrefixListId != null) return false;
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
            result = 31 * result + (this.destPrefixListId != null ? this.destPrefixListId.hashCode() : 0);
            result = 31 * result + (this.ipv6DestCidrIp != null ? this.ipv6DestCidrIp.hashCode() : 0);
            result = 31 * result + (this.nicType != null ? this.nicType.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            return result;
        }
    }
}
