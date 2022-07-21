package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a `ALIYUN::CR::Namespace`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:24.229Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.NamespaceProps")
@software.amazon.jsii.Jsii.Proxy(NamespaceProps.Jsii$Proxy.class)
public interface NamespaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property namespace: The name of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     * Property autoCreate: Specifies whether to automatically create an image repository.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreate() {
        return null;
    }

    /**
     * Property defaultVisibility: The default type of the repository that is automatically created.
     * <p>
     * Valid values: PUBLIC, PRIVATE.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultVisibility() {
        return null;
    }

    /**
     * Property instanceId: The ID of the enterprise edition instance which namespace belongs to.
     * <p>
     * If not provided, will use personal edition instance as default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NamespaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NamespaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NamespaceProps> {
        java.lang.Object namespace;
        java.lang.Object autoCreate;
        java.lang.Object defaultVisibility;
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link NamespaceProps#getNamespace}
         * @param namespace Property namespace: The name of the namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getNamespace}
         * @param namespace Property namespace: The name of the namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getAutoCreate}
         * @param autoCreate Property autoCreate: Specifies whether to automatically create an image repository.
         * @return {@code this}
         */
        public Builder autoCreate(java.lang.Boolean autoCreate) {
            this.autoCreate = autoCreate;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getAutoCreate}
         * @param autoCreate Property autoCreate: Specifies whether to automatically create an image repository.
         * @return {@code this}
         */
        public Builder autoCreate(com.aliyun.ros.cdk.core.IResolvable autoCreate) {
            this.autoCreate = autoCreate;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getDefaultVisibility}
         * @param defaultVisibility Property defaultVisibility: The default type of the repository that is automatically created.
         *                          Valid values: PUBLIC, PRIVATE.
         * @return {@code this}
         */
        public Builder defaultVisibility(java.lang.String defaultVisibility) {
            this.defaultVisibility = defaultVisibility;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getDefaultVisibility}
         * @param defaultVisibility Property defaultVisibility: The default type of the repository that is automatically created.
         *                          Valid values: PUBLIC, PRIVATE.
         * @return {@code this}
         */
        public Builder defaultVisibility(com.aliyun.ros.cdk.core.IResolvable defaultVisibility) {
            this.defaultVisibility = defaultVisibility;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the enterprise edition instance which namespace belongs to.
         *                   If not provided, will use personal edition instance as default.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the enterprise edition instance which namespace belongs to.
         *                   If not provided, will use personal edition instance as default.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NamespaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NamespaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NamespaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NamespaceProps {
        private final java.lang.Object namespace;
        private final java.lang.Object autoCreate;
        private final java.lang.Object defaultVisibility;
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoCreate = software.amazon.jsii.Kernel.get(this, "autoCreate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultVisibility = software.amazon.jsii.Kernel.get(this, "defaultVisibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.autoCreate = builder.autoCreate;
            this.defaultVisibility = builder.defaultVisibility;
            this.instanceId = builder.instanceId;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getAutoCreate() {
            return this.autoCreate;
        }

        @Override
        public final java.lang.Object getDefaultVisibility() {
            return this.defaultVisibility;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("namespace", om.valueToTree(this.getNamespace()));
            if (this.getAutoCreate() != null) {
                data.set("autoCreate", om.valueToTree(this.getAutoCreate()));
            }
            if (this.getDefaultVisibility() != null) {
                data.set("defaultVisibility", om.valueToTree(this.getDefaultVisibility()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.NamespaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NamespaceProps.Jsii$Proxy that = (NamespaceProps.Jsii$Proxy) o;

            if (!namespace.equals(that.namespace)) return false;
            if (this.autoCreate != null ? !this.autoCreate.equals(that.autoCreate) : that.autoCreate != null) return false;
            if (this.defaultVisibility != null ? !this.defaultVisibility.equals(that.defaultVisibility) : that.defaultVisibility != null) return false;
            return this.instanceId != null ? this.instanceId.equals(that.instanceId) : that.instanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.namespace.hashCode();
            result = 31 * result + (this.autoCreate != null ? this.autoCreate.hashCode() : 0);
            result = 31 * result + (this.defaultVisibility != null ? this.defaultVisibility.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            return result;
        }
    }
}
