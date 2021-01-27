package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::ACLRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.547Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.ACLRuleProps")
@software.amazon.jsii.Jsii.Proxy(ACLRuleProps.Jsii$Proxy.class)
public interface ACLRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAclId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestCidr();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestPortRange();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDirection();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getIpProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPolicy();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceCidr();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourcePortRange();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPriority() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ACLRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ACLRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ACLRuleProps> {
        private java.lang.String aclId;
        private java.lang.String destCidr;
        private java.lang.String destPortRange;
        private java.lang.String direction;
        private java.lang.String ipProtocol;
        private java.lang.String policy;
        private java.lang.String sourceCidr;
        private java.lang.String sourcePortRange;
        private java.lang.String description;
        private java.lang.Number priority;

        /**
         * Sets the value of {@link ACLRuleProps#getAclId}
         * @param aclId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclId(java.lang.String aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDestCidr}
         * @param destCidr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destCidr(java.lang.String destCidr) {
            this.destCidr = destCidr;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDestPortRange}
         * @param destPortRange the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destPortRange(java.lang.String destPortRange) {
            this.destPortRange = destPortRange;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDirection}
         * @param direction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder direction(java.lang.String direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getIpProtocol}
         * @param ipProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getPolicy}
         * @param policy the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policy(java.lang.String policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getSourceCidr}
         * @param sourceCidr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceCidr(java.lang.String sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getSourcePortRange}
         * @param sourcePortRange the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourcePortRange(java.lang.String sourcePortRange) {
            this.sourcePortRange = sourcePortRange;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ACLRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ACLRuleProps build() {
            return new Jsii$Proxy(aclId, destCidr, destPortRange, direction, ipProtocol, policy, sourceCidr, sourcePortRange, description, priority);
        }
    }

    /**
     * An implementation for {@link ACLRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ACLRuleProps {
        private final java.lang.String aclId;
        private final java.lang.String destCidr;
        private final java.lang.String destPortRange;
        private final java.lang.String direction;
        private final java.lang.String ipProtocol;
        private final java.lang.String policy;
        private final java.lang.String sourceCidr;
        private final java.lang.String sourcePortRange;
        private final java.lang.String description;
        private final java.lang.Number priority;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclId = software.amazon.jsii.Kernel.get(this, "aclId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destCidr = software.amazon.jsii.Kernel.get(this, "destCidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destPortRange = software.amazon.jsii.Kernel.get(this, "destPortRange", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.direction = software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceCidr = software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String aclId, final java.lang.String destCidr, final java.lang.String destPortRange, final java.lang.String direction, final java.lang.String ipProtocol, final java.lang.String policy, final java.lang.String sourceCidr, final java.lang.String sourcePortRange, final java.lang.String description, final java.lang.Number priority) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclId = java.util.Objects.requireNonNull(aclId, "aclId is required");
            this.destCidr = java.util.Objects.requireNonNull(destCidr, "destCidr is required");
            this.destPortRange = java.util.Objects.requireNonNull(destPortRange, "destPortRange is required");
            this.direction = java.util.Objects.requireNonNull(direction, "direction is required");
            this.ipProtocol = java.util.Objects.requireNonNull(ipProtocol, "ipProtocol is required");
            this.policy = java.util.Objects.requireNonNull(policy, "policy is required");
            this.sourceCidr = java.util.Objects.requireNonNull(sourceCidr, "sourceCidr is required");
            this.sourcePortRange = java.util.Objects.requireNonNull(sourcePortRange, "sourcePortRange is required");
            this.description = description;
            this.priority = priority;
        }

        @Override
        public final java.lang.String getAclId() {
            return this.aclId;
        }

        @Override
        public final java.lang.String getDestCidr() {
            return this.destCidr;
        }

        @Override
        public final java.lang.String getDestPortRange() {
            return this.destPortRange;
        }

        @Override
        public final java.lang.String getDirection() {
            return this.direction;
        }

        @Override
        public final java.lang.String getIpProtocol() {
            return this.ipProtocol;
        }

        @Override
        public final java.lang.String getPolicy() {
            return this.policy;
        }

        @Override
        public final java.lang.String getSourceCidr() {
            return this.sourceCidr;
        }

        @Override
        public final java.lang.String getSourcePortRange() {
            return this.sourcePortRange;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Number getPriority() {
            return this.priority;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclId", om.valueToTree(this.getAclId()));
            data.set("destCidr", om.valueToTree(this.getDestCidr()));
            data.set("destPortRange", om.valueToTree(this.getDestPortRange()));
            data.set("direction", om.valueToTree(this.getDirection()));
            data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
            data.set("policy", om.valueToTree(this.getPolicy()));
            data.set("sourceCidr", om.valueToTree(this.getSourceCidr()));
            data.set("sourcePortRange", om.valueToTree(this.getSourcePortRange()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.ACLRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ACLRuleProps.Jsii$Proxy that = (ACLRuleProps.Jsii$Proxy) o;

            if (!aclId.equals(that.aclId)) return false;
            if (!destCidr.equals(that.destCidr)) return false;
            if (!destPortRange.equals(that.destPortRange)) return false;
            if (!direction.equals(that.direction)) return false;
            if (!ipProtocol.equals(that.ipProtocol)) return false;
            if (!policy.equals(that.policy)) return false;
            if (!sourceCidr.equals(that.sourceCidr)) return false;
            if (!sourcePortRange.equals(that.sourcePortRange)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.priority != null ? this.priority.equals(that.priority) : that.priority == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclId.hashCode();
            result = 31 * result + (this.destCidr.hashCode());
            result = 31 * result + (this.destPortRange.hashCode());
            result = 31 * result + (this.direction.hashCode());
            result = 31 * result + (this.ipProtocol.hashCode());
            result = 31 * result + (this.policy.hashCode());
            result = 31 * result + (this.sourceCidr.hashCode());
            result = 31 * result + (this.sourcePortRange.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            return result;
        }
    }
}
