package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>AccessControl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-accesscontrol
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.609Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.AccessControlProps")
@software.amazon.jsii.Jsii.Proxy(AccessControlProps.Jsii$Proxy.class)
public interface AccessControlProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessControlListName: The name of the ACL.
     * <p>
     * The name must be 1 to 30 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (_). The name must be unique within the region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessControlListName();

    /**
     * Property aclEntrys: Information list of access control policies.
     * <p>
     * You can add at most 50 IP addresses or CIDR blocks to an ACL in each call. If the IP address or CIDR block that you want to add to an ACL already exists, the IP address or CIDR block is not added. The entries that you add must be CIDR blocks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntrys() {
        return null;
    }

    /**
     * Property addressIpVersion: The IP version.
     * <p>
     * Valid values: ipv4 and ipv6.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccessControlProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessControlProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessControlProps> {
        java.lang.Object accessControlListName;
        java.lang.Object aclEntrys;
        java.lang.Object addressIpVersion;

        /**
         * Sets the value of {@link AccessControlProps#getAccessControlListName}
         * @param accessControlListName Property accessControlListName: The name of the ACL. This parameter is required.
         *                              The name must be 1 to 30 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (_). The name must be unique within the region.
         * @return {@code this}
         */
        public Builder accessControlListName(java.lang.String accessControlListName) {
            this.accessControlListName = accessControlListName;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAccessControlListName}
         * @param accessControlListName Property accessControlListName: The name of the ACL. This parameter is required.
         *                              The name must be 1 to 30 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (_). The name must be unique within the region.
         * @return {@code this}
         */
        public Builder accessControlListName(com.aliyun.ros.cdk.core.IResolvable accessControlListName) {
            this.accessControlListName = accessControlListName;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAclEntrys}
         * @param aclEntrys Property aclEntrys: Information list of access control policies.
         *                  You can add at most 50 IP addresses or CIDR blocks to an ACL in each call. If the IP address or CIDR block that you want to add to an ACL already exists, the IP address or CIDR block is not added. The entries that you add must be CIDR blocks.
         * @return {@code this}
         */
        public Builder aclEntrys(com.aliyun.ros.cdk.core.IResolvable aclEntrys) {
            this.aclEntrys = aclEntrys;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAclEntrys}
         * @param aclEntrys Property aclEntrys: Information list of access control policies.
         *                  You can add at most 50 IP addresses or CIDR blocks to an ACL in each call. If the IP address or CIDR block that you want to add to an ACL already exists, the IP address or CIDR block is not added. The entries that you add must be CIDR blocks.
         * @return {@code this}
         */
        public Builder aclEntrys(java.util.List<? extends java.lang.Object> aclEntrys) {
            this.aclEntrys = aclEntrys;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: The IP version.
         *                         Valid values: ipv4 and ipv6.
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link AccessControlProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: The IP version.
         *                         Valid values: ipv4 and ipv6.
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessControlProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessControlProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessControlProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessControlProps {
        private final java.lang.Object accessControlListName;
        private final java.lang.Object aclEntrys;
        private final java.lang.Object addressIpVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessControlListName = software.amazon.jsii.Kernel.get(this, "accessControlListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclEntrys = software.amazon.jsii.Kernel.get(this, "aclEntrys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessControlListName = java.util.Objects.requireNonNull(builder.accessControlListName, "accessControlListName is required");
            this.aclEntrys = builder.aclEntrys;
            this.addressIpVersion = builder.addressIpVersion;
        }

        @Override
        public final java.lang.Object getAccessControlListName() {
            return this.accessControlListName;
        }

        @Override
        public final java.lang.Object getAclEntrys() {
            return this.aclEntrys;
        }

        @Override
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessControlListName", om.valueToTree(this.getAccessControlListName()));
            if (this.getAclEntrys() != null) {
                data.set("aclEntrys", om.valueToTree(this.getAclEntrys()));
            }
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.AccessControlProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessControlProps.Jsii$Proxy that = (AccessControlProps.Jsii$Proxy) o;

            if (!accessControlListName.equals(that.accessControlListName)) return false;
            if (this.aclEntrys != null ? !this.aclEntrys.equals(that.aclEntrys) : that.aclEntrys != null) return false;
            return this.addressIpVersion != null ? this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessControlListName.hashCode();
            result = 31 * result + (this.aclEntrys != null ? this.aclEntrys.hashCode() : 0);
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            return result;
        }
    }
}
