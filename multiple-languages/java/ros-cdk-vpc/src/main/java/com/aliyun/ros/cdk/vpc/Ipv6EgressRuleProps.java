package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>Ipv6EgressRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:04:31.483Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.Ipv6EgressRuleProps")
@software.amazon.jsii.Jsii.Proxy(Ipv6EgressRuleProps.Jsii$Proxy.class)
public interface Ipv6EgressRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property ipv6GatewayId: The ID of the IPv6 gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpv6GatewayId();

    /**
     * Property description: The description of the egress-only rule.
     * <p>
     * The description must be 0 to 256 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property instanceType: The type of the instance to which you want to apply the egress-only rule.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>IPv6Address (default)</li>
     * <li>IPv6Prefix.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property ipv6EgressRuleName: The name of the egress-only rule.
     * <p>
     * The name must be 0 to 128 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6EgressRuleName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link Ipv6EgressRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Ipv6EgressRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Ipv6EgressRuleProps> {
        java.lang.Object instanceId;
        java.lang.Object ipv6GatewayId;
        java.lang.Object description;
        java.lang.Object instanceType;
        java.lang.Object ipv6EgressRuleName;

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getIpv6GatewayId}
         * @param ipv6GatewayId Property ipv6GatewayId: The ID of the IPv6 gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv6GatewayId(java.lang.String ipv6GatewayId) {
            this.ipv6GatewayId = ipv6GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getIpv6GatewayId}
         * @param ipv6GatewayId Property ipv6GatewayId: The ID of the IPv6 gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv6GatewayId(com.aliyun.ros.cdk.core.IResolvable ipv6GatewayId) {
            this.ipv6GatewayId = ipv6GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getDescription}
         * @param description Property description: The description of the egress-only rule.
         *                    The description must be 0 to 256 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getDescription}
         * @param description Property description: The description of the egress-only rule.
         *                    The description must be 0 to 256 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the instance to which you want to apply the egress-only rule.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>IPv6Address (default)</li>
         *                     <li>IPv6Prefix.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the instance to which you want to apply the egress-only rule.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>IPv6Address (default)</li>
         *                     <li>IPv6Prefix.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getIpv6EgressRuleName}
         * @param ipv6EgressRuleName Property ipv6EgressRuleName: The name of the egress-only rule.
         *                           The name must be 0 to 128 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder ipv6EgressRuleName(java.lang.String ipv6EgressRuleName) {
            this.ipv6EgressRuleName = ipv6EgressRuleName;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6EgressRuleProps#getIpv6EgressRuleName}
         * @param ipv6EgressRuleName Property ipv6EgressRuleName: The name of the egress-only rule.
         *                           The name must be 0 to 128 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * @return {@code this}
         */
        public Builder ipv6EgressRuleName(com.aliyun.ros.cdk.core.IResolvable ipv6EgressRuleName) {
            this.ipv6EgressRuleName = ipv6EgressRuleName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Ipv6EgressRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Ipv6EgressRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Ipv6EgressRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Ipv6EgressRuleProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object ipv6GatewayId;
        private final java.lang.Object description;
        private final java.lang.Object instanceType;
        private final java.lang.Object ipv6EgressRuleName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6GatewayId = software.amazon.jsii.Kernel.get(this, "ipv6GatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6EgressRuleName = software.amazon.jsii.Kernel.get(this, "ipv6EgressRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.ipv6GatewayId = java.util.Objects.requireNonNull(builder.ipv6GatewayId, "ipv6GatewayId is required");
            this.description = builder.description;
            this.instanceType = builder.instanceType;
            this.ipv6EgressRuleName = builder.ipv6EgressRuleName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getIpv6GatewayId() {
            return this.ipv6GatewayId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getIpv6EgressRuleName() {
            return this.ipv6EgressRuleName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("ipv6GatewayId", om.valueToTree(this.getIpv6GatewayId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getIpv6EgressRuleName() != null) {
                data.set("ipv6EgressRuleName", om.valueToTree(this.getIpv6EgressRuleName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.Ipv6EgressRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Ipv6EgressRuleProps.Jsii$Proxy that = (Ipv6EgressRuleProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!ipv6GatewayId.equals(that.ipv6GatewayId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            return this.ipv6EgressRuleName != null ? this.ipv6EgressRuleName.equals(that.ipv6EgressRuleName) : that.ipv6EgressRuleName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.ipv6GatewayId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.ipv6EgressRuleName != null ? this.ipv6EgressRuleName.hashCode() : 0);
            return result;
        }
    }
}
