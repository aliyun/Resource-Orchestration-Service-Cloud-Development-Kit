package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>AclsListenerAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:11.212Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.AclsListenerAssociationProps")
@software.amazon.jsii.Jsii.Proxy(AclsListenerAssociationProps.Jsii$Proxy.class)
public interface AclsListenerAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aclIds: The ID of the ACL.
     * <p>
     * You can associate up to two ACL IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclIds();

    /**
     * Property aclType: The type of ACL.
     * <p>
     * Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
     * black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclType();

    /**
     * Property listenerId: The ID of the listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * @return a {@link Builder} of {@link AclsListenerAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AclsListenerAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AclsListenerAssociationProps> {
        java.lang.Object aclIds;
        java.lang.Object aclType;
        java.lang.Object listenerId;

        /**
         * Sets the value of {@link AclsListenerAssociationProps#getAclIds}
         * @param aclIds Property aclIds: The ID of the ACL. This parameter is required.
         *               You can associate up to two ACL IDs.
         * @return {@code this}
         */
        public Builder aclIds(com.aliyun.ros.cdk.core.IResolvable aclIds) {
            this.aclIds = aclIds;
            return this;
        }

        /**
         * Sets the value of {@link AclsListenerAssociationProps#getAclIds}
         * @param aclIds Property aclIds: The ID of the ACL. This parameter is required.
         *               You can associate up to two ACL IDs.
         * @return {@code this}
         */
        public Builder aclIds(java.util.List<? extends java.lang.Object> aclIds) {
            this.aclIds = aclIds;
            return this;
        }

        /**
         * Sets the value of {@link AclsListenerAssociationProps#getAclType}
         * @param aclType Property aclType: The type of ACL. This parameter is required.
         *                Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
         *                black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
         * @return {@code this}
         */
        public Builder aclType(java.lang.String aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link AclsListenerAssociationProps#getAclType}
         * @param aclType Property aclType: The type of ACL. This parameter is required.
         *                Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
         *                black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
         * @return {@code this}
         */
        public Builder aclType(com.aliyun.ros.cdk.core.IResolvable aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link AclsListenerAssociationProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the listener. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link AclsListenerAssociationProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the listener. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AclsListenerAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AclsListenerAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AclsListenerAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AclsListenerAssociationProps {
        private final java.lang.Object aclIds;
        private final java.lang.Object aclType;
        private final java.lang.Object listenerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclIds = software.amazon.jsii.Kernel.get(this, "aclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclType = software.amazon.jsii.Kernel.get(this, "aclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclIds = java.util.Objects.requireNonNull(builder.aclIds, "aclIds is required");
            this.aclType = java.util.Objects.requireNonNull(builder.aclType, "aclType is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
        }

        @Override
        public final java.lang.Object getAclIds() {
            return this.aclIds;
        }

        @Override
        public final java.lang.Object getAclType() {
            return this.aclType;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclIds", om.valueToTree(this.getAclIds()));
            data.set("aclType", om.valueToTree(this.getAclType()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.AclsListenerAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AclsListenerAssociationProps.Jsii$Proxy that = (AclsListenerAssociationProps.Jsii$Proxy) o;

            if (!aclIds.equals(that.aclIds)) return false;
            if (!aclType.equals(that.aclType)) return false;
            return this.listenerId.equals(that.listenerId);
        }

        @Override
        public final int hashCode() {
            int result = this.aclIds.hashCode();
            result = 31 * result + (this.aclType.hashCode());
            result = 31 * result + (this.listenerId.hashCode());
            return result;
        }
    }
}
