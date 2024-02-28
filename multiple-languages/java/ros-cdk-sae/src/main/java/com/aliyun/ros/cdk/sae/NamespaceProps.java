package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>Namespace</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:30.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.NamespaceProps")
@software.amazon.jsii.Jsii.Proxy(NamespaceProps.Jsii$Proxy.class)
public interface NamespaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property namespaceId: Namespace ID.
     * <p>
     * Format: "regionId:logicalId" or "logicalId"
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     * Property namespaceName: Namespace name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceName();

    /**
     * Property namespaceDescription: Namespace description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceDescription() {
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
        java.lang.Object namespaceId;
        java.lang.Object namespaceName;
        java.lang.Object namespaceDescription;

        /**
         * Sets the value of {@link NamespaceProps#getNamespaceId}
         * @param namespaceId Property namespaceId: Namespace ID. This parameter is required.
         *                    Format: "regionId:logicalId" or "logicalId"
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getNamespaceId}
         * @param namespaceId Property namespaceId: Namespace ID. This parameter is required.
         *                    Format: "regionId:logicalId" or "logicalId"
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getNamespaceName}
         * @param namespaceName Property namespaceName: Namespace name. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceName(java.lang.String namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getNamespaceName}
         * @param namespaceName Property namespaceName: Namespace name. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceName(com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getNamespaceDescription}
         * @param namespaceDescription Property namespaceDescription: Namespace description.
         * @return {@code this}
         */
        public Builder namespaceDescription(java.lang.String namespaceDescription) {
            this.namespaceDescription = namespaceDescription;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getNamespaceDescription}
         * @param namespaceDescription Property namespaceDescription: Namespace description.
         * @return {@code this}
         */
        public Builder namespaceDescription(com.aliyun.ros.cdk.core.IResolvable namespaceDescription) {
            this.namespaceDescription = namespaceDescription;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.NamespaceProps"));
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
