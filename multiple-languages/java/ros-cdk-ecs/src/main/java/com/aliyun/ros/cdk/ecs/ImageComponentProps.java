package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ImageComponent</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:38.514Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ImageComponentProps")
@software.amazon.jsii.Jsii.Proxy(ImageComponentProps.Jsii$Proxy.class)
public interface ImageComponentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property content: The content of the image component.
     * <p>
     * The content consists of up to 127 commands.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContent();

    /**
     * Property componentType: The type of the image component.
     * <p>
     * Only image build components are supported. Set the value to Build.Default value: Build.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComponentType() {
        return null;
    }

    /**
     * Property description: The description.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property name: The component name.
     * <p>
     * The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     * Note If you do not configure Name, the return value of ImageComponentId is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property systemType: The operating system type supported by the image component.
     * <p>
     * Only Linux is supported. Set the value to Linux.Default value: Linux.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemType() {
        return null;
    }

    /**
     * Property tags:.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosImageComponent.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ImageComponentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ImageComponentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ImageComponentProps> {
        java.lang.Object content;
        java.lang.Object componentType;
        java.lang.Object description;
        java.lang.Object name;
        java.lang.Object resourceGroupId;
        java.lang.Object systemType;
        java.util.List<com.aliyun.ros.cdk.ecs.RosImageComponent.TagsProperty> tags;

        /**
         * Sets the value of {@link ImageComponentProps#getContent}
         * @param content Property content: The content of the image component. This parameter is required.
         *                The content consists of up to 127 commands.
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getContent}
         * @param content Property content: The content of the image component. This parameter is required.
         *                The content consists of up to 127 commands.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getComponentType}
         * @param componentType Property componentType: The type of the image component.
         *                      Only image build components are supported. Set the value to Build.Default value: Build.
         * @return {@code this}
         */
        public Builder componentType(java.lang.String componentType) {
            this.componentType = componentType;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getComponentType}
         * @param componentType Property componentType: The type of the image component.
         *                      Only image build components are supported. Set the value to Build.Default value: Build.
         * @return {@code this}
         */
        public Builder componentType(com.aliyun.ros.cdk.core.IResolvable componentType) {
            this.componentType = componentType;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getDescription}
         * @param description Property description: The description.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getDescription}
         * @param description Property description: The description.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getName}
         * @param name Property name: The component name.
         *             The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         *             Note If you do not configure Name, the return value of ImageComponentId is used.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getName}
         * @param name Property name: The component name.
         *             The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://.The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         *             Note If you do not configure Name, the return value of ImageComponentId is used.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getSystemType}
         * @param systemType Property systemType: The operating system type supported by the image component.
         *                   Only Linux is supported. Set the value to Linux.Default value: Linux.
         * @return {@code this}
         */
        public Builder systemType(java.lang.String systemType) {
            this.systemType = systemType;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getSystemType}
         * @param systemType Property systemType: The operating system type supported by the image component.
         *                   Only Linux is supported. Set the value to Linux.Default value: Linux.
         * @return {@code this}
         */
        public Builder systemType(com.aliyun.ros.cdk.core.IResolvable systemType) {
            this.systemType = systemType;
            return this;
        }

        /**
         * Sets the value of {@link ImageComponentProps#getTags}
         * @param tags Property tags:.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosImageComponent.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosImageComponent.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ImageComponentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ImageComponentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ImageComponentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageComponentProps {
        private final java.lang.Object content;
        private final java.lang.Object componentType;
        private final java.lang.Object description;
        private final java.lang.Object name;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object systemType;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosImageComponent.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.componentType = software.amazon.jsii.Kernel.get(this, "componentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemType = software.amazon.jsii.Kernel.get(this, "systemType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosImageComponent.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.content = java.util.Objects.requireNonNull(builder.content, "content is required");
            this.componentType = builder.componentType;
            this.description = builder.description;
            this.name = builder.name;
            this.resourceGroupId = builder.resourceGroupId;
            this.systemType = builder.systemType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosImageComponent.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getComponentType() {
            return this.componentType;
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
        public final java.lang.Object getSystemType() {
            return this.systemType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosImageComponent.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("content", om.valueToTree(this.getContent()));
            if (this.getComponentType() != null) {
                data.set("componentType", om.valueToTree(this.getComponentType()));
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
            if (this.getSystemType() != null) {
                data.set("systemType", om.valueToTree(this.getSystemType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.ImageComponentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ImageComponentProps.Jsii$Proxy that = (ImageComponentProps.Jsii$Proxy) o;

            if (!content.equals(that.content)) return false;
            if (this.componentType != null ? !this.componentType.equals(that.componentType) : that.componentType != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.systemType != null ? !this.systemType.equals(that.systemType) : that.systemType != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.content.hashCode();
            result = 31 * result + (this.componentType != null ? this.componentType.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.systemType != null ? this.systemType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
