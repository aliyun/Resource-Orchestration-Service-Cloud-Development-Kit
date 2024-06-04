package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>PrefixLists</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:58.132Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.PrefixListsProps")
@software.amazon.jsii.Jsii.Proxy(PrefixListsProps.Jsii$Proxy.class)
public interface PrefixListsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property prefixListName: The name of the prefix list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrefixListName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PrefixListsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrefixListsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrefixListsProps> {
        java.lang.Object prefixListName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link PrefixListsProps#getPrefixListName}
         * @param prefixListName Property prefixListName: The name of the prefix list.
         * @return {@code this}
         */
        public Builder prefixListName(java.lang.String prefixListName) {
            this.prefixListName = prefixListName;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListsProps#getPrefixListName}
         * @param prefixListName Property prefixListName: The name of the prefix list.
         * @return {@code this}
         */
        public Builder prefixListName(com.aliyun.ros.cdk.core.IResolvable prefixListName) {
            this.prefixListName = prefixListName;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrefixListsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PrefixListsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrefixListsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PrefixListsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrefixListsProps {
        private final java.lang.Object prefixListName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.prefixListName = software.amazon.jsii.Kernel.get(this, "prefixListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.prefixListName = builder.prefixListName;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getPrefixListName() {
            return this.prefixListName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getPrefixListName() != null) {
                data.set("prefixListName", om.valueToTree(this.getPrefixListName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.PrefixListsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrefixListsProps.Jsii$Proxy that = (PrefixListsProps.Jsii$Proxy) o;

            if (this.prefixListName != null ? !this.prefixListName.equals(that.prefixListName) : that.prefixListName != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.prefixListName != null ? this.prefixListName.hashCode() : 0;
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
