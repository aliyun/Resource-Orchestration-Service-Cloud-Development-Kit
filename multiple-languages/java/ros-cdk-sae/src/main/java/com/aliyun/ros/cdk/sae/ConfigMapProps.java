package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>ConfigMap</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:20.266Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.ConfigMapProps")
@software.amazon.jsii.Jsii.Proxy(ConfigMapProps.Jsii$Proxy.class)
public interface ConfigMapProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property data: Configmap key value pairs of data, json format.The format is as follows: {"k1":"v1", "k2":"v2"} K means key, V represents value.For more information about configuration items, see management and use of configuration items.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getData();

    /**
     * Property name: The name of the config map.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property namespaceId: The ID of the namespace to which this config map instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     * Property description: Describe information, do not enter the space without more than 255 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ConfigMapProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConfigMapProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConfigMapProps> {
        java.lang.Object data;
        java.lang.Object name;
        java.lang.Object namespaceId;
        java.lang.Object description;

        /**
         * Sets the value of {@link ConfigMapProps#getData}
         * @param data Property data: Configmap key value pairs of data, json format.The format is as follows: {"k1":"v1", "k2":"v2"} K means key, V represents value.For more information about configuration items, see management and use of configuration items. This parameter is required.
         * @return {@code this}
         */
        public Builder data(com.aliyun.ros.cdk.core.IResolvable data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link ConfigMapProps#getData}
         * @param data Property data: Configmap key value pairs of data, json format.The format is as follows: {"k1":"v1", "k2":"v2"} K means key, V represents value.For more information about configuration items, see management and use of configuration items. This parameter is required.
         * @return {@code this}
         */
        public Builder data(java.util.Map<java.lang.String, ? extends java.lang.Object> data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link ConfigMapProps#getName}
         * @param name Property name: The name of the config map. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ConfigMapProps#getName}
         * @param name Property name: The name of the config map. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ConfigMapProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of the namespace to which this config map instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigMapProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of the namespace to which this config map instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ConfigMapProps#getDescription}
         * @param description Property description: Describe information, do not enter the space without more than 255 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ConfigMapProps#getDescription}
         * @param description Property description: Describe information, do not enter the space without more than 255 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConfigMapProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConfigMapProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConfigMapProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigMapProps {
        private final java.lang.Object data;
        private final java.lang.Object name;
        private final java.lang.Object namespaceId;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.data = software.amazon.jsii.Kernel.get(this, "data", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.data = java.util.Objects.requireNonNull(builder.data, "data is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.namespaceId = java.util.Objects.requireNonNull(builder.namespaceId, "namespaceId is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getData() {
            return this.data;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("data", om.valueToTree(this.getData()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.ConfigMapProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConfigMapProps.Jsii$Proxy that = (ConfigMapProps.Jsii$Proxy) o;

            if (!data.equals(that.data)) return false;
            if (!name.equals(that.name)) return false;
            if (!namespaceId.equals(that.namespaceId)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.data.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.namespaceId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
