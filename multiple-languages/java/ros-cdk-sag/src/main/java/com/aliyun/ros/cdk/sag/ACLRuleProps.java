package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>ALIYUN::SAG::ACLRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:39.504Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.ACLRuleProps")
@software.amazon.jsii.Jsii.Proxy(ACLRuleProps.Jsii$Proxy.class)
public interface ACLRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aclId: Access control ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclId();

    /**
     * Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestCidr();

    /**
     * Property destPortRange: Destination port range, 80/80.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestPortRange();

    /**
     * Property direction: Regular direction.
     * <p>
     * Value: in|out
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirection();

    /**
     * Property ipProtocol: Protocol, not case sensitive.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol();

    /**
     * Property policy: Access: accept|drop.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicy();

    /**
     * Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceCidr();

    /**
     * Property sourcePortRange: Source port range, 80/80.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourcePortRange();

    /**
     * Property description: Rule description information, ranging from 1 to 512 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property dpiGroupIds: The ID of the application group.
     * <p>
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDpiGroupIds() {
        return null;
    }

    /**
     * Property dpiSignatureIds: The ID of the application.
     * <p>
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDpiSignatureIds() {
        return null;
    }

    /**
     * Property name: The name of the ACL rule.
     * <p>
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property priority: Priority, ranging from 1 to 100.
     * <p>
     * Default: 1
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     * Property type: The type of the ACL rule: Valid values: LAN: The ACL rule controls traffic of private IP addresses.
     * <p>
     * This is the default value.
     * WAN: The ACL rule controls traffic of public IP addresses.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
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
        java.lang.Object aclId;
        java.lang.Object destCidr;
        java.lang.Object destPortRange;
        java.lang.Object direction;
        java.lang.Object ipProtocol;
        java.lang.Object policy;
        java.lang.Object sourceCidr;
        java.lang.Object sourcePortRange;
        java.lang.Object description;
        java.lang.Object dpiGroupIds;
        java.lang.Object dpiSignatureIds;
        java.lang.Object name;
        java.lang.Object priority;
        java.lang.Object type;

        /**
         * Sets the value of {@link ACLRuleProps#getAclId}
         * @param aclId Property aclId: Access control ID. This parameter is required.
         * @return {@code this}
         */
        public Builder aclId(java.lang.String aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getAclId}
         * @param aclId Property aclId: Access control ID. This parameter is required.
         * @return {@code this}
         */
        public Builder aclId(com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDestCidr}
         * @param destCidr Property destCidr: Destination address, CIDR format and IP address range in IPv4 format. This parameter is required.
         * @return {@code this}
         */
        public Builder destCidr(java.lang.String destCidr) {
            this.destCidr = destCidr;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDestCidr}
         * @param destCidr Property destCidr: Destination address, CIDR format and IP address range in IPv4 format. This parameter is required.
         * @return {@code this}
         */
        public Builder destCidr(com.aliyun.ros.cdk.core.IResolvable destCidr) {
            this.destCidr = destCidr;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDestPortRange}
         * @param destPortRange Property destPortRange: Destination port range, 80/80. This parameter is required.
         * @return {@code this}
         */
        public Builder destPortRange(java.lang.String destPortRange) {
            this.destPortRange = destPortRange;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDestPortRange}
         * @param destPortRange Property destPortRange: Destination port range, 80/80. This parameter is required.
         * @return {@code this}
         */
        public Builder destPortRange(com.aliyun.ros.cdk.core.IResolvable destPortRange) {
            this.destPortRange = destPortRange;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDirection}
         * @param direction Property direction: Regular direction. This parameter is required.
         *                  Value: in|out
         * @return {@code this}
         */
        public Builder direction(java.lang.String direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDirection}
         * @param direction Property direction: Regular direction. This parameter is required.
         *                  Value: in|out
         * @return {@code this}
         */
        public Builder direction(com.aliyun.ros.cdk.core.IResolvable direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getIpProtocol}
         * @param ipProtocol Property ipProtocol: Protocol, not case sensitive. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getIpProtocol}
         * @param ipProtocol Property ipProtocol: Protocol, not case sensitive. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getPolicy}
         * @param policy Property policy: Access: accept|drop. This parameter is required.
         * @return {@code this}
         */
        public Builder policy(java.lang.String policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getPolicy}
         * @param policy Property policy: Access: accept|drop. This parameter is required.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getSourceCidr}
         * @param sourceCidr Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceCidr(java.lang.String sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getSourceCidr}
         * @param sourceCidr Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceCidr(com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getSourcePortRange}
         * @param sourcePortRange Property sourcePortRange: Source port range, 80/80. This parameter is required.
         * @return {@code this}
         */
        public Builder sourcePortRange(java.lang.String sourcePortRange) {
            this.sourcePortRange = sourcePortRange;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getSourcePortRange}
         * @param sourcePortRange Property sourcePortRange: Source port range, 80/80. This parameter is required.
         * @return {@code this}
         */
        public Builder sourcePortRange(com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
            this.sourcePortRange = sourcePortRange;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDescription}
         * @param description Property description: Rule description information, ranging from 1 to 512 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDescription}
         * @param description Property description: Rule description information, ranging from 1 to 512 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDpiGroupIds}
         * @param dpiGroupIds Property dpiGroupIds: The ID of the application group.
         *                    You can enter at most 100 application group IDs at a time.
         *                    You can call the ListDpiGroups operation to query application group IDs and information about the applications.
         * @return {@code this}
         */
        public Builder dpiGroupIds(com.aliyun.ros.cdk.core.IResolvable dpiGroupIds) {
            this.dpiGroupIds = dpiGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDpiGroupIds}
         * @param dpiGroupIds Property dpiGroupIds: The ID of the application group.
         *                    You can enter at most 100 application group IDs at a time.
         *                    You can call the ListDpiGroups operation to query application group IDs and information about the applications.
         * @return {@code this}
         */
        public Builder dpiGroupIds(java.util.List<? extends java.lang.Object> dpiGroupIds) {
            this.dpiGroupIds = dpiGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDpiSignatureIds}
         * @param dpiSignatureIds Property dpiSignatureIds: The ID of the application.
         *                        You can enter at most 100 application IDs at a time.
         *                        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
         * @return {@code this}
         */
        public Builder dpiSignatureIds(com.aliyun.ros.cdk.core.IResolvable dpiSignatureIds) {
            this.dpiSignatureIds = dpiSignatureIds;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getDpiSignatureIds}
         * @param dpiSignatureIds Property dpiSignatureIds: The ID of the application.
         *                        You can enter at most 100 application IDs at a time.
         *                        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
         * @return {@code this}
         */
        public Builder dpiSignatureIds(java.util.List<? extends java.lang.Object> dpiSignatureIds) {
            this.dpiSignatureIds = dpiSignatureIds;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getName}
         * @param name Property name: The name of the ACL rule.
         *             The name must be 2 to 100 characters in length, and can contain digits, underscores
         *             (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getName}
         * @param name Property name: The name of the ACL rule.
         *             The name must be 2 to 100 characters in length, and can contain digits, underscores
         *             (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getPriority}
         * @param priority Property priority: Priority, ranging from 1 to 100.
         *                 Default: 1
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getPriority}
         * @param priority Property priority: Priority, ranging from 1 to 100.
         *                 Default: 1
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getType}
         * @param type Property type: The type of the ACL rule: Valid values: LAN: The ACL rule controls traffic of private IP addresses.
         *             This is the default value.
         *             WAN: The ACL rule controls traffic of public IP addresses.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ACLRuleProps#getType}
         * @param type Property type: The type of the ACL rule: Valid values: LAN: The ACL rule controls traffic of private IP addresses.
         *             This is the default value.
         *             WAN: The ACL rule controls traffic of public IP addresses.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ACLRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ACLRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ACLRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ACLRuleProps {
        private final java.lang.Object aclId;
        private final java.lang.Object destCidr;
        private final java.lang.Object destPortRange;
        private final java.lang.Object direction;
        private final java.lang.Object ipProtocol;
        private final java.lang.Object policy;
        private final java.lang.Object sourceCidr;
        private final java.lang.Object sourcePortRange;
        private final java.lang.Object description;
        private final java.lang.Object dpiGroupIds;
        private final java.lang.Object dpiSignatureIds;
        private final java.lang.Object name;
        private final java.lang.Object priority;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclId = software.amazon.jsii.Kernel.get(this, "aclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destCidr = software.amazon.jsii.Kernel.get(this, "destCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPortRange = software.amazon.jsii.Kernel.get(this, "destPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.direction = software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceCidr = software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dpiGroupIds = software.amazon.jsii.Kernel.get(this, "dpiGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dpiSignatureIds = software.amazon.jsii.Kernel.get(this, "dpiSignatureIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclId = java.util.Objects.requireNonNull(builder.aclId, "aclId is required");
            this.destCidr = java.util.Objects.requireNonNull(builder.destCidr, "destCidr is required");
            this.destPortRange = java.util.Objects.requireNonNull(builder.destPortRange, "destPortRange is required");
            this.direction = java.util.Objects.requireNonNull(builder.direction, "direction is required");
            this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
            this.policy = java.util.Objects.requireNonNull(builder.policy, "policy is required");
            this.sourceCidr = java.util.Objects.requireNonNull(builder.sourceCidr, "sourceCidr is required");
            this.sourcePortRange = java.util.Objects.requireNonNull(builder.sourcePortRange, "sourcePortRange is required");
            this.description = builder.description;
            this.dpiGroupIds = builder.dpiGroupIds;
            this.dpiSignatureIds = builder.dpiSignatureIds;
            this.name = builder.name;
            this.priority = builder.priority;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getAclId() {
            return this.aclId;
        }

        @Override
        public final java.lang.Object getDestCidr() {
            return this.destCidr;
        }

        @Override
        public final java.lang.Object getDestPortRange() {
            return this.destPortRange;
        }

        @Override
        public final java.lang.Object getDirection() {
            return this.direction;
        }

        @Override
        public final java.lang.Object getIpProtocol() {
            return this.ipProtocol;
        }

        @Override
        public final java.lang.Object getPolicy() {
            return this.policy;
        }

        @Override
        public final java.lang.Object getSourceCidr() {
            return this.sourceCidr;
        }

        @Override
        public final java.lang.Object getSourcePortRange() {
            return this.sourcePortRange;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDpiGroupIds() {
            return this.dpiGroupIds;
        }

        @Override
        public final java.lang.Object getDpiSignatureIds() {
            return this.dpiSignatureIds;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
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
            if (this.getDpiGroupIds() != null) {
                data.set("dpiGroupIds", om.valueToTree(this.getDpiGroupIds()));
            }
            if (this.getDpiSignatureIds() != null) {
                data.set("dpiSignatureIds", om.valueToTree(this.getDpiSignatureIds()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
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
            if (this.dpiGroupIds != null ? !this.dpiGroupIds.equals(that.dpiGroupIds) : that.dpiGroupIds != null) return false;
            if (this.dpiSignatureIds != null ? !this.dpiSignatureIds.equals(that.dpiSignatureIds) : that.dpiSignatureIds != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
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
            result = 31 * result + (this.dpiGroupIds != null ? this.dpiGroupIds.hashCode() : 0);
            result = 31 * result + (this.dpiSignatureIds != null ? this.dpiSignatureIds.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
