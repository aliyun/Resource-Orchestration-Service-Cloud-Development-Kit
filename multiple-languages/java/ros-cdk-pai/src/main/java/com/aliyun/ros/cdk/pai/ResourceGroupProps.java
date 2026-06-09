package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>ResourceGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-resourcegroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:20:13.818Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.ResourceGroupProps")
@software.amazon.jsii.Jsii.Proxy(ResourceGroupProps.Jsii$Proxy.class)
public interface ResourceGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property computingResourceProvider: The computing resource provider of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputingResourceProvider() {
        return null;
    }

    /**
     * Property description: The description of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property name: The name of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property resourceType: The type of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     * Property tag: The tags of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     * Property userVpc: User VPC configuration containing network settings for the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserVpc() {
        return null;
    }

    /**
     * Property version: The version of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourceGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceGroupProps> {
        java.lang.Object computingResourceProvider;
        java.lang.Object description;
        java.lang.Object name;
        java.lang.Object resourceGroupId;
        java.lang.Object resourceType;
        java.lang.Object tag;
        java.lang.Object userVpc;
        java.lang.Object version;

        /**
         * Sets the value of {@link ResourceGroupProps#getComputingResourceProvider}
         * @param computingResourceProvider Property computingResourceProvider: The computing resource provider of the resource group.
         * @return {@code this}
         */
        public Builder computingResourceProvider(java.lang.String computingResourceProvider) {
            this.computingResourceProvider = computingResourceProvider;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getComputingResourceProvider}
         * @param computingResourceProvider Property computingResourceProvider: The computing resource provider of the resource group.
         * @return {@code this}
         */
        public Builder computingResourceProvider(com.aliyun.ros.cdk.core.IResolvable computingResourceProvider) {
            this.computingResourceProvider = computingResourceProvider;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getDescription}
         * @param description Property description: The description of the resource group.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getDescription}
         * @param description Property description: The description of the resource group.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getName}
         * @param name Property name: The name of the resource group.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getName}
         * @param name Property name: The name of the resource group.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getResourceType}
         * @param resourceType Property resourceType: The type of the resource group.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getResourceType}
         * @param resourceType Property resourceType: The type of the resource group.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getTag}
         * @param tag Property tag: The tags of the resource group.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getTag}
         * @param tag Property tag: The tags of the resource group.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getUserVpc}
         * @param userVpc Property userVpc: User VPC configuration containing network settings for the resource group.
         * @return {@code this}
         */
        public Builder userVpc(com.aliyun.ros.cdk.core.IResolvable userVpc) {
            this.userVpc = userVpc;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getUserVpc}
         * @param userVpc Property userVpc: User VPC configuration containing network settings for the resource group.
         * @return {@code this}
         */
        public Builder userVpc(com.aliyun.ros.cdk.pai.RosResourceGroup.UserVpcProperty userVpc) {
            this.userVpc = userVpc;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getVersion}
         * @param version Property version: The version of the resource group.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link ResourceGroupProps#getVersion}
         * @param version Property version: The version of the resource group.
         * @return {@code this}
         */
        public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
            this.version = version;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceGroupProps {
        private final java.lang.Object computingResourceProvider;
        private final java.lang.Object description;
        private final java.lang.Object name;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object resourceType;
        private final java.lang.Object tag;
        private final java.lang.Object userVpc;
        private final java.lang.Object version;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.computingResourceProvider = software.amazon.jsii.Kernel.get(this, "computingResourceProvider", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userVpc = software.amazon.jsii.Kernel.get(this, "userVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.computingResourceProvider = builder.computingResourceProvider;
            this.description = builder.description;
            this.name = builder.name;
            this.resourceGroupId = builder.resourceGroupId;
            this.resourceType = builder.resourceType;
            this.tag = builder.tag;
            this.userVpc = builder.userVpc;
            this.version = builder.version;
        }

        @Override
        public final java.lang.Object getComputingResourceProvider() {
            return this.computingResourceProvider;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        public final java.lang.Object getUserVpc() {
            return this.userVpc;
        }

        @Override
        public final java.lang.Object getVersion() {
            return this.version;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getComputingResourceProvider() != null) {
                data.set("computingResourceProvider", om.valueToTree(this.getComputingResourceProvider()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getResourceType() != null) {
                data.set("resourceType", om.valueToTree(this.getResourceType()));
            }
            if (this.getTag() != null) {
                data.set("tag", om.valueToTree(this.getTag()));
            }
            if (this.getUserVpc() != null) {
                data.set("userVpc", om.valueToTree(this.getUserVpc()));
            }
            if (this.getVersion() != null) {
                data.set("version", om.valueToTree(this.getVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.ResourceGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceGroupProps.Jsii$Proxy that = (ResourceGroupProps.Jsii$Proxy) o;

            if (this.computingResourceProvider != null ? !this.computingResourceProvider.equals(that.computingResourceProvider) : that.computingResourceProvider != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.resourceType != null ? !this.resourceType.equals(that.resourceType) : that.resourceType != null) return false;
            if (this.tag != null ? !this.tag.equals(that.tag) : that.tag != null) return false;
            if (this.userVpc != null ? !this.userVpc.equals(that.userVpc) : that.userVpc != null) return false;
            return this.version != null ? this.version.equals(that.version) : that.version == null;
        }

        @Override
        public final int hashCode() {
            int result = this.computingResourceProvider != null ? this.computingResourceProvider.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            result = 31 * result + (this.userVpc != null ? this.userVpc.hashCode() : 0);
            result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
            return result;
        }
    }
}
