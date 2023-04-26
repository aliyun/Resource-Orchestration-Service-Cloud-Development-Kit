package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a `ALIYUN::MSE::NacosConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:20.310Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.NacosConfigProps")
@software.amazon.jsii.Jsii.Proxy(NacosConfigProps.Jsii$Proxy.class)
public interface NacosConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dataId: The data ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataId();

    /**
     * Property group: The ID of the group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroup();

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property appName: The name of the application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppName() {
        return null;
    }

    /**
     * Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBetaIps() {
        return null;
    }

    /**
     * Property content: The content of the configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
        return null;
    }

    /**
     * Property desc: The description of the configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesc() {
        return null;
    }

    /**
     * Property namespaceId: The ID of the namespace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceId() {
        return null;
    }

    /**
     * Property tags: The tag of the configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTags() {
        return null;
    }

    /**
     * Property type: The format of the configuration.
     * <p>
     * Supported formats include TEXT, JSON, and XML.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NacosConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NacosConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NacosConfigProps> {
        java.lang.Object dataId;
        java.lang.Object group;
        java.lang.Object instanceId;
        java.lang.Object appName;
        java.lang.Object betaIps;
        java.lang.Object content;
        java.lang.Object desc;
        java.lang.Object namespaceId;
        java.lang.String tags;
        java.lang.Object type;

        /**
         * Sets the value of {@link NacosConfigProps#getDataId}
         * @param dataId Property dataId: The data ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dataId(java.lang.String dataId) {
            this.dataId = dataId;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getDataId}
         * @param dataId Property dataId: The data ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dataId(com.aliyun.ros.cdk.core.IResolvable dataId) {
            this.dataId = dataId;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getGroup}
         * @param group Property group: The ID of the group. This parameter is required.
         * @return {@code this}
         */
        public Builder group(java.lang.String group) {
            this.group = group;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getGroup}
         * @param group Property group: The ID of the group. This parameter is required.
         * @return {@code this}
         */
        public Builder group(com.aliyun.ros.cdk.core.IResolvable group) {
            this.group = group;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getAppName}
         * @param appName Property appName: The name of the application.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getAppName}
         * @param appName Property appName: The name of the application.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getBetaIps}
         * @param betaIps Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
         * @return {@code this}
         */
        public Builder betaIps(java.lang.String betaIps) {
            this.betaIps = betaIps;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getBetaIps}
         * @param betaIps Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
         * @return {@code this}
         */
        public Builder betaIps(com.aliyun.ros.cdk.core.IResolvable betaIps) {
            this.betaIps = betaIps;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getContent}
         * @param content Property content: The content of the configuration.
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getContent}
         * @param content Property content: The content of the configuration.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getDesc}
         * @param desc Property desc: The description of the configuration.
         * @return {@code this}
         */
        public Builder desc(java.lang.String desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getDesc}
         * @param desc Property desc: The description of the configuration.
         * @return {@code this}
         */
        public Builder desc(com.aliyun.ros.cdk.core.IResolvable desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of the namespace.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of the namespace.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getTags}
         * @param tags Property tags: The tag of the configuration.
         * @return {@code this}
         */
        public Builder tags(java.lang.String tags) {
            this.tags = tags;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getType}
         * @param type Property type: The format of the configuration.
         *             Supported formats include TEXT, JSON, and XML.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link NacosConfigProps#getType}
         * @param type Property type: The format of the configuration.
         *             Supported formats include TEXT, JSON, and XML.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NacosConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NacosConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NacosConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NacosConfigProps {
        private final java.lang.Object dataId;
        private final java.lang.Object group;
        private final java.lang.Object instanceId;
        private final java.lang.Object appName;
        private final java.lang.Object betaIps;
        private final java.lang.Object content;
        private final java.lang.Object desc;
        private final java.lang.Object namespaceId;
        private final java.lang.String tags;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dataId = software.amazon.jsii.Kernel.get(this, "dataId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.group = software.amazon.jsii.Kernel.get(this, "group", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.betaIps = software.amazon.jsii.Kernel.get(this, "betaIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desc = software.amazon.jsii.Kernel.get(this, "desc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dataId = java.util.Objects.requireNonNull(builder.dataId, "dataId is required");
            this.group = java.util.Objects.requireNonNull(builder.group, "group is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.appName = builder.appName;
            this.betaIps = builder.betaIps;
            this.content = builder.content;
            this.desc = builder.desc;
            this.namespaceId = builder.namespaceId;
            this.tags = builder.tags;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getDataId() {
            return this.dataId;
        }

        @Override
        public final java.lang.Object getGroup() {
            return this.group;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getBetaIps() {
            return this.betaIps;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getDesc() {
            return this.desc;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.String getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dataId", om.valueToTree(this.getDataId()));
            data.set("group", om.valueToTree(this.getGroup()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getAppName() != null) {
                data.set("appName", om.valueToTree(this.getAppName()));
            }
            if (this.getBetaIps() != null) {
                data.set("betaIps", om.valueToTree(this.getBetaIps()));
            }
            if (this.getContent() != null) {
                data.set("content", om.valueToTree(this.getContent()));
            }
            if (this.getDesc() != null) {
                data.set("desc", om.valueToTree(this.getDesc()));
            }
            if (this.getNamespaceId() != null) {
                data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.NacosConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NacosConfigProps.Jsii$Proxy that = (NacosConfigProps.Jsii$Proxy) o;

            if (!dataId.equals(that.dataId)) return false;
            if (!group.equals(that.group)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (this.appName != null ? !this.appName.equals(that.appName) : that.appName != null) return false;
            if (this.betaIps != null ? !this.betaIps.equals(that.betaIps) : that.betaIps != null) return false;
            if (this.content != null ? !this.content.equals(that.content) : that.content != null) return false;
            if (this.desc != null ? !this.desc.equals(that.desc) : that.desc != null) return false;
            if (this.namespaceId != null ? !this.namespaceId.equals(that.namespaceId) : that.namespaceId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dataId.hashCode();
            result = 31 * result + (this.group.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.appName != null ? this.appName.hashCode() : 0);
            result = 31 * result + (this.betaIps != null ? this.betaIps.hashCode() : 0);
            result = 31 * result + (this.content != null ? this.content.hashCode() : 0);
            result = 31 * result + (this.desc != null ? this.desc.hashCode() : 0);
            result = 31 * result + (this.namespaceId != null ? this.namespaceId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
