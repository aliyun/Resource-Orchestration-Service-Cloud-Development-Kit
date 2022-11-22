package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a `ALIYUN::SAE::Namespace`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:30.280Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosNamespaceProps")
@software.amazon.jsii.Jsii.Proxy(RosNamespaceProps.Jsii$Proxy.class)
public interface RosNamespaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNamespaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNamespaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNamespaceProps> {
        java.lang.Object namespaceId;
        java.lang.Object namespaceName;
        java.lang.Object namespaceDescription;

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespaceName}
         * @param namespaceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceName(java.lang.String namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespaceName}
         * @param namespaceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceName(com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespaceDescription}
         * @param namespaceDescription the value to be set.
         * @return {@code this}
         */
        public Builder namespaceDescription(java.lang.String namespaceDescription) {
            this.namespaceDescription = namespaceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespaceDescription}
         * @param namespaceDescription the value to be set.
         * @return {@code this}
         */
        public Builder namespaceDescription(com.aliyun.ros.cdk.core.IResolvable namespaceDescription) {
            this.namespaceDescription = namespaceDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNamespaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNamespaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNamespaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNamespaceProps {
        private final java.lang.Object namespaceId;
        private final java.lang.Object namespaceName;
        private final java.lang.Object namespaceDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceName = software.amazon.jsii.Kernel.get(this, "namespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceDescription = software.amazon.jsii.Kernel.get(this, "namespaceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.namespaceId = java.util.Objects.requireNonNull(builder.namespaceId, "namespaceId is required");
            this.namespaceName = java.util.Objects.requireNonNull(builder.namespaceName, "namespaceName is required");
            this.namespaceDescription = builder.namespaceDescription;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getNamespaceName() {
            return this.namespaceName;
        }

        @Override
        public final java.lang.Object getNamespaceDescription() {
            return this.namespaceDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            data.set("namespaceName", om.valueToTree(this.getNamespaceName()));
            if (this.getNamespaceDescription() != null) {
                data.set("namespaceDescription", om.valueToTree(this.getNamespaceDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosNamespaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNamespaceProps.Jsii$Proxy that = (RosNamespaceProps.Jsii$Proxy) o;

            if (!namespaceId.equals(that.namespaceId)) return false;
            if (!namespaceName.equals(that.namespaceName)) return false;
            return this.namespaceDescription != null ? this.namespaceDescription.equals(that.namespaceDescription) : that.namespaceDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.namespaceId.hashCode();
            result = 31 * result + (this.namespaceName.hashCode());
            result = 31 * result + (this.namespaceDescription != null ? this.namespaceDescription.hashCode() : 0);
            return result;
        }
    }
}
