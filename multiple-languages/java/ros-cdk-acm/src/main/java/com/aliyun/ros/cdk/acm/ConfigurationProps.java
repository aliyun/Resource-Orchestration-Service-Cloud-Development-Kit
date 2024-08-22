package com.aliyun.ros.cdk.acm;

/**
 * Properties for defining a <code>Configuration</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-configuration
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:17.104Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acm.$Module.class, fqn = "@alicloud/ros-cdk-acm.ConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(ConfigurationProps.Jsii$Proxy.class)
public interface ConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property content: The contents of the configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContent();

    /**
     * Property dataId: The ID of the configuration.
     * <p>
     * Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
     * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
     * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataId();

    /**
     * Property namespaceId: ID of namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     * Property appName: Configuration application name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppName() {
        return null;
    }

    /**
     * Property desc: Configuration description explains.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesc() {
        return null;
    }

    /**
     * Property group: Group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroup() {
        return null;
    }

    /**
     * Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTags() {
        return null;
    }

    /**
     * Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConfigurationProps> {
        java.lang.Object content;
        java.lang.Object dataId;
        java.lang.Object namespaceId;
        java.lang.Object appName;
        java.lang.Object desc;
        java.lang.Object group;
        java.lang.String tags;
        java.lang.Object type;

        /**
         * Sets the value of {@link ConfigurationProps#getContent}
         * @param content Property content: The contents of the configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getContent}
         * @param content Property content: The contents of the configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getDataId}
         * @param dataId Property dataId: The ID of the configuration. This parameter is required.
         *               Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
         *               The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
         *               The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
         * @return {@code this}
         */
        public Builder dataId(java.lang.String dataId) {
            this.dataId = dataId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getDataId}
         * @param dataId Property dataId: The ID of the configuration. This parameter is required.
         *               Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
         *               The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
         *               The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
         * @return {@code this}
         */
        public Builder dataId(com.aliyun.ros.cdk.core.IResolvable dataId) {
            this.dataId = dataId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getNamespaceId}
         * @param namespaceId Property namespaceId: ID of namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getNamespaceId}
         * @param namespaceId Property namespaceId: ID of namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getAppName}
         * @param appName Property appName: Configuration application name.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getAppName}
         * @param appName Property appName: Configuration application name.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getDesc}
         * @param desc Property desc: Configuration description explains.
         * @return {@code this}
         */
        public Builder desc(java.lang.String desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getDesc}
         * @param desc Property desc: Configuration description explains.
         * @return {@code this}
         */
        public Builder desc(com.aliyun.ros.cdk.core.IResolvable desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getGroup}
         * @param group Property group: Group.
         * @return {@code this}
         */
        public Builder group(java.lang.String group) {
            this.group = group;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getGroup}
         * @param group Property group: Group.
         * @return {@code this}
         */
        public Builder group(com.aliyun.ros.cdk.core.IResolvable group) {
            this.group = group;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getTags}
         * @param tags Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.
         * @return {@code this}
         */
        public Builder tags(java.lang.String tags) {
            this.tags = tags;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getType}
         * @param type Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationProps#getType}
         * @param type Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigurationProps {
        private final java.lang.Object content;
        private final java.lang.Object dataId;
        private final java.lang.Object namespaceId;
        private final java.lang.Object appName;
        private final java.lang.Object desc;
        private final java.lang.Object group;
        private final java.lang.String tags;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataId = software.amazon.jsii.Kernel.get(this, "dataId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desc = software.amazon.jsii.Kernel.get(this, "desc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.group = software.amazon.jsii.Kernel.get(this, "group", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.content = java.util.Objects.requireNonNull(builder.content, "content is required");
            this.dataId = java.util.Objects.requireNonNull(builder.dataId, "dataId is required");
            this.namespaceId = java.util.Objects.requireNonNull(builder.namespaceId, "namespaceId is required");
            this.appName = builder.appName;
            this.desc = builder.desc;
            this.group = builder.group;
            this.tags = builder.tags;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getDataId() {
            return this.dataId;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getDesc() {
            return this.desc;
        }

        @Override
        public final java.lang.Object getGroup() {
            return this.group;
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

            data.set("content", om.valueToTree(this.getContent()));
            data.set("dataId", om.valueToTree(this.getDataId()));
            data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            if (this.getAppName() != null) {
                data.set("appName", om.valueToTree(this.getAppName()));
            }
            if (this.getDesc() != null) {
                data.set("desc", om.valueToTree(this.getDesc()));
            }
            if (this.getGroup() != null) {
                data.set("group", om.valueToTree(this.getGroup()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acm.ConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConfigurationProps.Jsii$Proxy that = (ConfigurationProps.Jsii$Proxy) o;

            if (!content.equals(that.content)) return false;
            if (!dataId.equals(that.dataId)) return false;
            if (!namespaceId.equals(that.namespaceId)) return false;
            if (this.appName != null ? !this.appName.equals(that.appName) : that.appName != null) return false;
            if (this.desc != null ? !this.desc.equals(that.desc) : that.desc != null) return false;
            if (this.group != null ? !this.group.equals(that.group) : that.group != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.content.hashCode();
            result = 31 * result + (this.dataId.hashCode());
            result = 31 * result + (this.namespaceId.hashCode());
            result = 31 * result + (this.appName != null ? this.appName.hashCode() : 0);
            result = 31 * result + (this.desc != null ? this.desc.hashCode() : 0);
            result = 31 * result + (this.group != null ? this.group.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
