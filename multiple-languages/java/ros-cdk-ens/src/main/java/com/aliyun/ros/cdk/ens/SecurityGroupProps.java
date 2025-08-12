package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>SecurityGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.310Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.SecurityGroupProps")
@software.amazon.jsii.Jsii.Proxy(SecurityGroupProps.Jsii$Proxy.class)
public interface SecurityGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: The description of the security group.
     * <p>
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property permissions: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPermissions() {
        return null;
    }

    /**
     * Property securityGroupName: The name of the security group.
     * <p>
     * The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SecurityGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecurityGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecurityGroupProps> {
        java.lang.Object description;
        java.lang.Object permissions;
        java.lang.Object securityGroupName;

        /**
         * Sets the value of {@link SecurityGroupProps#getDescription}
         * @param description Property description: The description of the security group.
         *                    The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getDescription}
         * @param description Property description: The description of the security group.
         *                    The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getPermissions}
         * @param permissions Property permissions: undefined.
         * @return {@code this}
         */
        public Builder permissions(com.aliyun.ros.cdk.core.IResolvable permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getPermissions}
         * @param permissions Property permissions: undefined.
         * @return {@code this}
         */
        public Builder permissions(java.util.List<? extends java.lang.Object> permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: The name of the security group.
         *                          The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link SecurityGroupProps#getSecurityGroupName}
         * @param securityGroupName Property securityGroupName: The name of the security group.
         *                          The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
         * @return {@code this}
         */
        public Builder securityGroupName(com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecurityGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecurityGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecurityGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityGroupProps {
        private final java.lang.Object description;
        private final java.lang.Object permissions;
        private final java.lang.Object securityGroupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permissions = software.amazon.jsii.Kernel.get(this, "permissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.permissions = builder.permissions;
            this.securityGroupName = builder.securityGroupName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getPermissions() {
            return this.permissions;
        }

        @Override
        public final java.lang.Object getSecurityGroupName() {
            return this.securityGroupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getPermissions() != null) {
                data.set("permissions", om.valueToTree(this.getPermissions()));
            }
            if (this.getSecurityGroupName() != null) {
                data.set("securityGroupName", om.valueToTree(this.getSecurityGroupName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.SecurityGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecurityGroupProps.Jsii$Proxy that = (SecurityGroupProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.permissions != null ? !this.permissions.equals(that.permissions) : that.permissions != null) return false;
            return this.securityGroupName != null ? this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.permissions != null ? this.permissions.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            return result;
        }
    }
}
