package com.aliyun.ros.cdk.nlb;

/**
 * Properties for defining a <code>SecurityGroupAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.452Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.SecurityGroupAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(SecurityGroupAttachmentProps.Jsii$Proxy.class)
public interface SecurityGroupAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     * Property securityGroupIds: List of security group id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupIds();

    /**
     * @return a {@link Builder} of {@link SecurityGroupAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecurityGroupAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecurityGroupAttachmentProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object securityGroupIds;

        /**
         * Sets the value of {@link SecurityGroupAttachmentProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupAttachmentProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupAttachmentProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: List of security group id. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupAttachmentProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: List of security group id. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecurityGroupAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecurityGroupAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecurityGroupAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityGroupAttachmentProps {
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object securityGroupIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.securityGroupIds = java.util.Objects.requireNonNull(builder.securityGroupIds, "securityGroupIds is required");
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.SecurityGroupAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecurityGroupAttachmentProps.Jsii$Proxy that = (SecurityGroupAttachmentProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            return this.securityGroupIds.equals(that.securityGroupIds);
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.securityGroupIds.hashCode());
            return result;
        }
    }
}
