package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>PluginAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.350Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.PluginAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(PluginAttachmentProps.Jsii$Proxy.class)
public interface PluginAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property pluginInfo: The information about the association of plugin with gateway instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginInfo();

    /**
     * Property attachResourceId: The resource ID to be attached by the plugin.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAttachResourceId() {
        return null;
    }

    /**
     * Property attachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAttachResourceIds() {
        return null;
    }

    /**
     * Property attachResourceType: The type of the resource to be attached by the plugin.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAttachResourceType() {
        return null;
    }

    /**
     * Property enable: Whether to enable this plugin, default value is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     * Property environmentId: The ID of the environment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PluginAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PluginAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PluginAttachmentProps> {
        java.lang.Object pluginInfo;
        java.lang.Object attachResourceId;
        java.lang.Object attachResourceIds;
        java.lang.Object attachResourceType;
        java.lang.Object enable;
        java.lang.Object environmentId;

        /**
         * Sets the value of {@link PluginAttachmentProps#getPluginInfo}
         * @param pluginInfo Property pluginInfo: The information about the association of plugin with gateway instance. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginInfo(com.aliyun.ros.cdk.core.IResolvable pluginInfo) {
            this.pluginInfo = pluginInfo;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getPluginInfo}
         * @param pluginInfo Property pluginInfo: The information about the association of plugin with gateway instance. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginInfo(com.aliyun.ros.cdk.apig.RosPluginAttachment.PluginInfoProperty pluginInfo) {
            this.pluginInfo = pluginInfo;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getAttachResourceId}
         * @param attachResourceId Property attachResourceId: The resource ID to be attached by the plugin.
         * @return {@code this}
         */
        public Builder attachResourceId(java.lang.String attachResourceId) {
            this.attachResourceId = attachResourceId;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getAttachResourceId}
         * @param attachResourceId Property attachResourceId: The resource ID to be attached by the plugin.
         * @return {@code this}
         */
        public Builder attachResourceId(com.aliyun.ros.cdk.core.IResolvable attachResourceId) {
            this.attachResourceId = attachResourceId;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getAttachResourceIds}
         * @param attachResourceIds Property attachResourceIds: The list of resource IDs to be attached by the plugin.
         * @return {@code this}
         */
        public Builder attachResourceIds(com.aliyun.ros.cdk.core.IResolvable attachResourceIds) {
            this.attachResourceIds = attachResourceIds;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getAttachResourceIds}
         * @param attachResourceIds Property attachResourceIds: The list of resource IDs to be attached by the plugin.
         * @return {@code this}
         */
        public Builder attachResourceIds(java.util.List<? extends java.lang.Object> attachResourceIds) {
            this.attachResourceIds = attachResourceIds;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getAttachResourceType}
         * @param attachResourceType Property attachResourceType: The type of the resource to be attached by the plugin.
         * @return {@code this}
         */
        public Builder attachResourceType(java.lang.String attachResourceType) {
            this.attachResourceType = attachResourceType;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getAttachResourceType}
         * @param attachResourceType Property attachResourceType: The type of the resource to be attached by the plugin.
         * @return {@code this}
         */
        public Builder attachResourceType(com.aliyun.ros.cdk.core.IResolvable attachResourceType) {
            this.attachResourceType = attachResourceType;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getEnable}
         * @param enable Property enable: Whether to enable this plugin, default value is false.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getEnable}
         * @param enable Property enable: Whether to enable this plugin, default value is false.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getEnvironmentId}
         * @param environmentId Property environmentId: The ID of the environment.
         * @return {@code this}
         */
        public Builder environmentId(java.lang.String environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link PluginAttachmentProps#getEnvironmentId}
         * @param environmentId Property environmentId: The ID of the environment.
         * @return {@code this}
         */
        public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PluginAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PluginAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PluginAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PluginAttachmentProps {
        private final java.lang.Object pluginInfo;
        private final java.lang.Object attachResourceId;
        private final java.lang.Object attachResourceIds;
        private final java.lang.Object attachResourceType;
        private final java.lang.Object enable;
        private final java.lang.Object environmentId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.pluginInfo = software.amazon.jsii.Kernel.get(this, "pluginInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attachResourceId = software.amazon.jsii.Kernel.get(this, "attachResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attachResourceIds = software.amazon.jsii.Kernel.get(this, "attachResourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attachResourceType = software.amazon.jsii.Kernel.get(this, "attachResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.pluginInfo = java.util.Objects.requireNonNull(builder.pluginInfo, "pluginInfo is required");
            this.attachResourceId = builder.attachResourceId;
            this.attachResourceIds = builder.attachResourceIds;
            this.attachResourceType = builder.attachResourceType;
            this.enable = builder.enable;
            this.environmentId = builder.environmentId;
        }

        @Override
        public final java.lang.Object getPluginInfo() {
            return this.pluginInfo;
        }

        @Override
        public final java.lang.Object getAttachResourceId() {
            return this.attachResourceId;
        }

        @Override
        public final java.lang.Object getAttachResourceIds() {
            return this.attachResourceIds;
        }

        @Override
        public final java.lang.Object getAttachResourceType() {
            return this.attachResourceType;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.Object getEnvironmentId() {
            return this.environmentId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("pluginInfo", om.valueToTree(this.getPluginInfo()));
            if (this.getAttachResourceId() != null) {
                data.set("attachResourceId", om.valueToTree(this.getAttachResourceId()));
            }
            if (this.getAttachResourceIds() != null) {
                data.set("attachResourceIds", om.valueToTree(this.getAttachResourceIds()));
            }
            if (this.getAttachResourceType() != null) {
                data.set("attachResourceType", om.valueToTree(this.getAttachResourceType()));
            }
            if (this.getEnable() != null) {
                data.set("enable", om.valueToTree(this.getEnable()));
            }
            if (this.getEnvironmentId() != null) {
                data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.PluginAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PluginAttachmentProps.Jsii$Proxy that = (PluginAttachmentProps.Jsii$Proxy) o;

            if (!pluginInfo.equals(that.pluginInfo)) return false;
            if (this.attachResourceId != null ? !this.attachResourceId.equals(that.attachResourceId) : that.attachResourceId != null) return false;
            if (this.attachResourceIds != null ? !this.attachResourceIds.equals(that.attachResourceIds) : that.attachResourceIds != null) return false;
            if (this.attachResourceType != null ? !this.attachResourceType.equals(that.attachResourceType) : that.attachResourceType != null) return false;
            if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
            return this.environmentId != null ? this.environmentId.equals(that.environmentId) : that.environmentId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.pluginInfo.hashCode();
            result = 31 * result + (this.attachResourceId != null ? this.attachResourceId.hashCode() : 0);
            result = 31 * result + (this.attachResourceIds != null ? this.attachResourceIds.hashCode() : 0);
            result = 31 * result + (this.attachResourceType != null ? this.attachResourceType.hashCode() : 0);
            result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
            result = 31 * result + (this.environmentId != null ? this.environmentId.hashCode() : 0);
            return result;
        }
    }
}
