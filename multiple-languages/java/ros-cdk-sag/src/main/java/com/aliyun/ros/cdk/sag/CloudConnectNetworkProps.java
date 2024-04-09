package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>CloudConnectNetwork</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:35.147Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.CloudConnectNetworkProps")
@software.amazon.jsii.Jsii.Proxy(CloudConnectNetworkProps.Jsii$Proxy.class)
public interface CloudConnectNetworkProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: The description of the CCN instance.
     * <p>
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property isDefault: Whether is created by system.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsDefault() {
        return null;
    }

    /**
     * Property name: The name of the CCN instance.
     * <p>
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CloudConnectNetworkProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CloudConnectNetworkProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CloudConnectNetworkProps> {
        java.lang.Object description;
        java.lang.Object isDefault;
        java.lang.Object name;
        java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> tags;

        /**
         * Sets the value of {@link CloudConnectNetworkProps#getDescription}
         * @param description Property description: The description of the CCN instance.
         *                    The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CloudConnectNetworkProps#getDescription}
         * @param description Property description: The description of the CCN instance.
         *                    The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CloudConnectNetworkProps#getIsDefault}
         * @param isDefault Property isDefault: Whether is created by system.
         * @return {@code this}
         */
        public Builder isDefault(java.lang.Boolean isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link CloudConnectNetworkProps#getIsDefault}
         * @param isDefault Property isDefault: Whether is created by system.
         * @return {@code this}
         */
        public Builder isDefault(com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link CloudConnectNetworkProps#getName}
         * @param name Property name: The name of the CCN instance.
         *             The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link CloudConnectNetworkProps#getName}
         * @param name Property name: The name of the CCN instance.
         *             The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link CloudConnectNetworkProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CloudConnectNetworkProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CloudConnectNetworkProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CloudConnectNetworkProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CloudConnectNetworkProps {
        private final java.lang.Object description;
        private final java.lang.Object isDefault;
        private final java.lang.Object name;
        private final java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isDefault = software.amazon.jsii.Kernel.get(this, "isDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.isDefault = builder.isDefault;
            this.name = builder.name;
            this.tags = (java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIsDefault() {
            return this.isDefault;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.sag.RosCloudConnectNetwork.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIsDefault() != null) {
                data.set("isDefault", om.valueToTree(this.getIsDefault()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.CloudConnectNetworkProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CloudConnectNetworkProps.Jsii$Proxy that = (CloudConnectNetworkProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.isDefault != null ? !this.isDefault.equals(that.isDefault) : that.isDefault != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.isDefault != null ? this.isDefault.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
