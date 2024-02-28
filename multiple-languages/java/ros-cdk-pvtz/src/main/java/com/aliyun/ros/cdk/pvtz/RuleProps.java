package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a <code>Rule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:30.127Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RuleProps")
@software.amazon.jsii.Jsii.Proxy(RuleProps.Jsii$Proxy.class)
public interface RuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property endpointId: The ID of the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointId();

    /**
     * Property forwardIp: The destination external server.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getForwardIp();

    /**
     * Property ruleName: The name of the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     * Property type: The type of the forwarding rule.
     * <p>
     * Valid value:
     * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property zoneName: The domain name that requires DNS traffic forwarding.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneName();

    /**
     * @return a {@link Builder} of {@link RuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RuleProps> {
        java.lang.Object endpointId;
        java.lang.Object forwardIp;
        java.lang.Object ruleName;
        java.lang.Object type;
        java.lang.Object zoneName;

        /**
         * Sets the value of {@link RuleProps#getEndpointId}
         * @param endpointId Property endpointId: The ID of the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointId(java.lang.String endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getEndpointId}
         * @param endpointId Property endpointId: The ID of the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointId(com.aliyun.ros.cdk.core.IResolvable endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getForwardIp}
         * @param forwardIp Property forwardIp: The destination external server. This parameter is required.
         * @return {@code this}
         */
        public Builder forwardIp(com.aliyun.ros.cdk.core.IResolvable forwardIp) {
            this.forwardIp = forwardIp;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getForwardIp}
         * @param forwardIp Property forwardIp: The destination external server. This parameter is required.
         * @return {@code this}
         */
        public Builder forwardIp(java.util.List<? extends java.lang.Object> forwardIp) {
            this.forwardIp = forwardIp;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleName}
         * @param ruleName Property ruleName: The name of the forwarding rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleName}
         * @param ruleName Property ruleName: The name of the forwarding rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getType}
         * @param type Property type: The type of the forwarding rule. This parameter is required.
         *             Valid value:
         *             OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getType}
         * @param type Property type: The type of the forwarding rule. This parameter is required.
         *             Valid value:
         *             OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getZoneName}
         * @param zoneName Property zoneName: The domain name that requires DNS traffic forwarding. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(java.lang.String zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getZoneName}
         * @param zoneName Property zoneName: The domain name that requires DNS traffic forwarding. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(com.aliyun.ros.cdk.core.IResolvable zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleProps {
        private final java.lang.Object endpointId;
        private final java.lang.Object forwardIp;
        private final java.lang.Object ruleName;
        private final java.lang.Object type;
        private final java.lang.Object zoneName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpointId = software.amazon.jsii.Kernel.get(this, "endpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forwardIp = software.amazon.jsii.Kernel.get(this, "forwardIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneName = software.amazon.jsii.Kernel.get(this, "zoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpointId = java.util.Objects.requireNonNull(builder.endpointId, "endpointId is required");
            this.forwardIp = java.util.Objects.requireNonNull(builder.forwardIp, "forwardIp is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.zoneName = java.util.Objects.requireNonNull(builder.zoneName, "zoneName is required");
        }

        @Override
        public final java.lang.Object getEndpointId() {
            return this.endpointId;
        }

        @Override
        public final java.lang.Object getForwardIp() {
            return this.forwardIp;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getZoneName() {
            return this.zoneName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endpointId", om.valueToTree(this.getEndpointId()));
            data.set("forwardIp", om.valueToTree(this.getForwardIp()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            data.set("type", om.valueToTree(this.getType()));
            data.set("zoneName", om.valueToTree(this.getZoneName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.RuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RuleProps.Jsii$Proxy that = (RuleProps.Jsii$Proxy) o;

            if (!endpointId.equals(that.endpointId)) return false;
            if (!forwardIp.equals(that.forwardIp)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            if (!type.equals(that.type)) return false;
            return this.zoneName.equals(that.zoneName);
        }

        @Override
        public final int hashCode() {
            int result = this.endpointId.hashCode();
            result = 31 * result + (this.forwardIp.hashCode());
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.zoneName.hashCode());
            return result;
        }
    }
}
