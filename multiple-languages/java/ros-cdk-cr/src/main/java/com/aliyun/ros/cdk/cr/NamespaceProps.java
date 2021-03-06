package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a `ALIYUN::CR::Namespace`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.642Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.NamespaceProps")
@software.amazon.jsii.Jsii.Proxy(NamespaceProps.Jsii$Proxy.class)
public interface NamespaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property namespace: domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     * Property autoCreate: whether auto create repository.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreate() {
        return null;
    }

    /**
     * Property defaultVisibility: repository default visibility, public or private.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultVisibility() {
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
        private java.lang.Object namespace;
        private java.lang.Object autoCreate;
        private java.lang.Object defaultVisibility;

        /**
         * Sets the value of {@link NamespaceProps#getNamespace}
         * @param namespace Property namespace: domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getNamespace}
         * @param namespace Property namespace: domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getAutoCreate}
         * @param autoCreate Property autoCreate: whether auto create repository.
         * @return {@code this}
         */
        public Builder autoCreate(java.lang.Boolean autoCreate) {
            this.autoCreate = autoCreate;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getAutoCreate}
         * @param autoCreate Property autoCreate: whether auto create repository.
         * @return {@code this}
         */
        public Builder autoCreate(com.aliyun.ros.cdk.core.IResolvable autoCreate) {
            this.autoCreate = autoCreate;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getDefaultVisibility}
         * @param defaultVisibility Property defaultVisibility: repository default visibility, public or private.
         * @return {@code this}
         */
        public Builder defaultVisibility(java.lang.String defaultVisibility) {
            this.defaultVisibility = defaultVisibility;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getDefaultVisibility}
         * @param defaultVisibility Property defaultVisibility: repository default visibility, public or private.
         * @return {@code this}
         */
        public Builder defaultVisibility(com.aliyun.ros.cdk.core.IResolvable defaultVisibility) {
            this.defaultVisibility = defaultVisibility;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NamespaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NamespaceProps build() {
            return new Jsii$Proxy(namespace, autoCreate, defaultVisibility);
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

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoCreate = software.amazon.jsii.Kernel.get(this, "autoCreate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultVisibility = software.amazon.jsii.Kernel.get(this, "defaultVisibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object namespace, final java.lang.Object autoCreate, final java.lang.Object defaultVisibility) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.namespace = java.util.Objects.requireNonNull(namespace, "namespace is required");
            this.autoCreate = autoCreate;
            this.defaultVisibility = defaultVisibility;
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
            return this.defaultVisibility != null ? this.defaultVisibility.equals(that.defaultVisibility) : that.defaultVisibility == null;
        }

        @Override
        public final int hashCode() {
            int result = this.namespace.hashCode();
            result = 31 * result + (this.autoCreate != null ? this.autoCreate.hashCode() : 0);
            result = 31 * result + (this.defaultVisibility != null ? this.defaultVisibility.hashCode() : 0);
            return result;
        }
    }
}
