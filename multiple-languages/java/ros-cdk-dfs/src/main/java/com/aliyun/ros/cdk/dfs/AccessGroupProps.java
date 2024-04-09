package com.aliyun.ros.cdk.dfs;

/**
 * Properties for defining a <code>AccessGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:31.586Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.AccessGroupProps")
@software.amazon.jsii.Jsii.Proxy(AccessGroupProps.Jsii$Proxy.class)
public interface AccessGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessGroupName: The Name of Access Group.
     * <p>
     * The naming rules are as follows:
     * The value contains 6 to 100 characters.
     * Globally unique and cannot be an empty string.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessGroupName() {
        return null;
    }

    /**
     * Property description: The description of the access_group.
     * <p>
     * The value contains 0 to 100 characters
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property networkType: The NetworkType of Access Group.
     * <p>
     * Valid values: VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccessGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessGroupProps> {
        java.lang.Object accessGroupName;
        java.lang.Object description;
        java.lang.Object networkType;

        /**
         * Sets the value of {@link AccessGroupProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: The Name of Access Group.
         *                        The naming rules are as follows:
         *                        The value contains 6 to 100 characters.
         *                        Globally unique and cannot be an empty string.
         * @return {@code this}
         */
        public Builder accessGroupName(java.lang.String accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link AccessGroupProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: The Name of Access Group.
         *                        The naming rules are as follows:
         *                        The value contains 6 to 100 characters.
         *                        Globally unique and cannot be an empty string.
         * @return {@code this}
         */
        public Builder accessGroupName(com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link AccessGroupProps#getDescription}
         * @param description Property description: The description of the access_group.
         *                    The value contains 0 to 100 characters
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AccessGroupProps#getDescription}
         * @param description Property description: The description of the access_group.
         *                    The value contains 0 to 100 characters
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AccessGroupProps#getNetworkType}
         * @param networkType Property networkType: The NetworkType of Access Group.
         *                    Valid values: VPC.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link AccessGroupProps#getNetworkType}
         * @param networkType Property networkType: The NetworkType of Access Group.
         *                    Valid values: VPC.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessGroupProps {
        private final java.lang.Object accessGroupName;
        private final java.lang.Object description;
        private final java.lang.Object networkType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupName = builder.accessGroupName;
            this.description = builder.description;
            this.networkType = builder.networkType;
        }

        @Override
        public final java.lang.Object getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAccessGroupName() != null) {
                data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dfs.AccessGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessGroupProps.Jsii$Proxy that = (AccessGroupProps.Jsii$Proxy) o;

            if (this.accessGroupName != null ? !this.accessGroupName.equals(that.accessGroupName) : that.accessGroupName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.networkType != null ? this.networkType.equals(that.networkType) : that.networkType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupName != null ? this.accessGroupName.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            return result;
        }
    }
}
