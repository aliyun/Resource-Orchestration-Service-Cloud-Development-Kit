package com.aliyun.ros.cdk.sae.datasource;

/**
 * Properties for defining a <code>RosNamespace</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespace
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.489Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.datasource.RosNamespaceProps")
@software.amazon.jsii.Jsii.Proxy(RosNamespaceProps.Jsii$Proxy.class)
public interface RosNamespaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNameSpaceShortId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
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
        java.lang.Object nameSpaceShortId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespaceId}
         * @param namespaceId the value to be set.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNamespaceId}
         * @param namespaceId the value to be set.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNameSpaceShortId}
         * @param nameSpaceShortId the value to be set.
         * @return {@code this}
         */
        public Builder nameSpaceShortId(java.lang.String nameSpaceShortId) {
            this.nameSpaceShortId = nameSpaceShortId;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getNameSpaceShortId}
         * @param nameSpaceShortId the value to be set.
         * @return {@code this}
         */
        public Builder nameSpaceShortId(com.aliyun.ros.cdk.core.IResolvable nameSpaceShortId) {
            this.nameSpaceShortId = nameSpaceShortId;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosNamespaceProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
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
        private final java.lang.Object nameSpaceShortId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nameSpaceShortId = software.amazon.jsii.Kernel.get(this, "nameSpaceShortId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.namespaceId = builder.namespaceId;
            this.nameSpaceShortId = builder.nameSpaceShortId;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getNameSpaceShortId() {
            return this.nameSpaceShortId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getNamespaceId() != null) {
                data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            }
            if (this.getNameSpaceShortId() != null) {
                data.set("nameSpaceShortId", om.valueToTree(this.getNameSpaceShortId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.datasource.RosNamespaceProps"));
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

            if (this.namespaceId != null ? !this.namespaceId.equals(that.namespaceId) : that.namespaceId != null) return false;
            if (this.nameSpaceShortId != null ? !this.nameSpaceShortId.equals(that.nameSpaceShortId) : that.nameSpaceShortId != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.namespaceId != null ? this.namespaceId.hashCode() : 0;
            result = 31 * result + (this.nameSpaceShortId != null ? this.nameSpaceShortId.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
