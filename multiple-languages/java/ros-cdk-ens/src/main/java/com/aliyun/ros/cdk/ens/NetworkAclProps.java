package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>NetworkAcl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:52.063Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.NetworkAclProps")
@software.amazon.jsii.Jsii.Proxy(NetworkAclProps.Jsii$Proxy.class)
public interface NetworkAclProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aclEntries: The entry of Network ACL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntries() {
        return null;
    }

    /**
     * Property description: The description of the network ACL.
     * <p>
     * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property networkAclName: Enter a name for the network ACL.
     * <p>
     * The name must be 1 to 128 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAclName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkAclProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkAclProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkAclProps> {
        java.lang.Object aclEntries;
        java.lang.Object description;
        java.lang.Object networkAclName;

        /**
         * Sets the value of {@link NetworkAclProps#getAclEntries}
         * @param aclEntries Property aclEntries: The entry of Network ACL.
         * @return {@code this}
         */
        public Builder aclEntries(com.aliyun.ros.cdk.core.IResolvable aclEntries) {
            this.aclEntries = aclEntries;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getAclEntries}
         * @param aclEntries Property aclEntries: The entry of Network ACL.
         * @return {@code this}
         */
        public Builder aclEntries(java.util.List<? extends java.lang.Object> aclEntries) {
            this.aclEntries = aclEntries;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getDescription}
         * @param description Property description: The description of the network ACL.
         *                    The description must be 1 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getDescription}
         * @param description Property description: The description of the network ACL.
         *                    The description must be 1 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getNetworkAclName}
         * @param networkAclName Property networkAclName: Enter a name for the network ACL.
         *                       The name must be 1 to 128 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder networkAclName(java.lang.String networkAclName) {
            this.networkAclName = networkAclName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getNetworkAclName}
         * @param networkAclName Property networkAclName: Enter a name for the network ACL.
         *                       The name must be 1 to 128 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder networkAclName(com.aliyun.ros.cdk.core.IResolvable networkAclName) {
            this.networkAclName = networkAclName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkAclProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkAclProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkAclProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkAclProps {
        private final java.lang.Object aclEntries;
        private final java.lang.Object description;
        private final java.lang.Object networkAclName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclEntries = software.amazon.jsii.Kernel.get(this, "aclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkAclName = software.amazon.jsii.Kernel.get(this, "networkAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclEntries = builder.aclEntries;
            this.description = builder.description;
            this.networkAclName = builder.networkAclName;
        }

        @Override
        public final java.lang.Object getAclEntries() {
            return this.aclEntries;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getNetworkAclName() {
            return this.networkAclName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAclEntries() != null) {
                data.set("aclEntries", om.valueToTree(this.getAclEntries()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getNetworkAclName() != null) {
                data.set("networkAclName", om.valueToTree(this.getNetworkAclName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.NetworkAclProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkAclProps.Jsii$Proxy that = (NetworkAclProps.Jsii$Proxy) o;

            if (this.aclEntries != null ? !this.aclEntries.equals(that.aclEntries) : that.aclEntries != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.networkAclName != null ? this.networkAclName.equals(that.networkAclName) : that.networkAclName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclEntries != null ? this.aclEntries.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.networkAclName != null ? this.networkAclName.hashCode() : 0);
            return result;
        }
    }
}
