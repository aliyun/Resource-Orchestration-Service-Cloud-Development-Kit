package com.aliyun.ros.cdk.acm.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ACM::Configurations</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:34.842Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acm.$Module.class, fqn = "@alicloud/ros-cdk-acm.datasource.ConfigurationsProps")
@software.amazon.jsii.Jsii.Proxy(ConfigurationsProps.Jsii$Proxy.class)
public interface ConfigurationsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property namespaceId: The namespace ID of configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     * Property appName: The app name of configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppName() {
        return null;
    }

    /**
     * Property dataId: The data ID of configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataId() {
        return null;
    }

    /**
     * Property group: The group of configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroup() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ConfigurationsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConfigurationsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConfigurationsProps> {
        java.lang.Object namespaceId;
        java.lang.Object appName;
        java.lang.Object dataId;
        java.lang.Object group;

        /**
         * Sets the value of {@link ConfigurationsProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The namespace ID of configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationsProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The namespace ID of configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationsProps#getAppName}
         * @param appName Property appName: The app name of configuration.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationsProps#getAppName}
         * @param appName Property appName: The app name of configuration.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationsProps#getDataId}
         * @param dataId Property dataId: The data ID of configuration.
         * @return {@code this}
         */
        public Builder dataId(java.lang.String dataId) {
            this.dataId = dataId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationsProps#getDataId}
         * @param dataId Property dataId: The data ID of configuration.
         * @return {@code this}
         */
        public Builder dataId(com.aliyun.ros.cdk.core.IResolvable dataId) {
            this.dataId = dataId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationsProps#getGroup}
         * @param group Property group: The group of configuration.
         * @return {@code this}
         */
        public Builder group(java.lang.String group) {
            this.group = group;
            return this;
        }

        /**
         * Sets the value of {@link ConfigurationsProps#getGroup}
         * @param group Property group: The group of configuration.
         * @return {@code this}
         */
        public Builder group(com.aliyun.ros.cdk.core.IResolvable group) {
            this.group = group;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConfigurationsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConfigurationsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConfigurationsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigurationsProps {
        private final java.lang.Object namespaceId;
        private final java.lang.Object appName;
        private final java.lang.Object dataId;
        private final java.lang.Object group;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataId = software.amazon.jsii.Kernel.get(this, "dataId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.group = software.amazon.jsii.Kernel.get(this, "group", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.namespaceId = java.util.Objects.requireNonNull(builder.namespaceId, "namespaceId is required");
            this.appName = builder.appName;
            this.dataId = builder.dataId;
            this.group = builder.group;
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
        public final java.lang.Object getDataId() {
            return this.dataId;
        }

        @Override
        public final java.lang.Object getGroup() {
            return this.group;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            if (this.getAppName() != null) {
                data.set("appName", om.valueToTree(this.getAppName()));
            }
            if (this.getDataId() != null) {
                data.set("dataId", om.valueToTree(this.getDataId()));
            }
            if (this.getGroup() != null) {
                data.set("group", om.valueToTree(this.getGroup()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acm.datasource.ConfigurationsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConfigurationsProps.Jsii$Proxy that = (ConfigurationsProps.Jsii$Proxy) o;

            if (!namespaceId.equals(that.namespaceId)) return false;
            if (this.appName != null ? !this.appName.equals(that.appName) : that.appName != null) return false;
            if (this.dataId != null ? !this.dataId.equals(that.dataId) : that.dataId != null) return false;
            return this.group != null ? this.group.equals(that.group) : that.group == null;
        }

        @Override
        public final int hashCode() {
            int result = this.namespaceId.hashCode();
            result = 31 * result + (this.appName != null ? this.appName.hashCode() : 0);
            result = 31 * result + (this.dataId != null ? this.dataId.hashCode() : 0);
            result = 31 * result + (this.group != null ? this.group.hashCode() : 0);
            return result;
        }
    }
}
