package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>CaCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-cacertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:55:20.243Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.CaCertificateProps")
@software.amazon.jsii.Jsii.Proxy(CaCertificateProps.Jsii$Proxy.class)
public interface CaCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property caCertificate: The information about the CA certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCaCertificate();

    /**
     * Property caCertificateName: The CA certificate name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaCertificateName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of ca certificate.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosCaCertificate.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CaCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CaCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CaCertificateProps> {
        java.lang.Object caCertificate;
        java.lang.Object caCertificateName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.slb.RosCaCertificate.TagsProperty> tags;

        /**
         * Sets the value of {@link CaCertificateProps#getCaCertificate}
         * @param caCertificate Property caCertificate: The information about the CA certificate. This parameter is required.
         * @return {@code this}
         */
        public Builder caCertificate(java.lang.String caCertificate) {
            this.caCertificate = caCertificate;
            return this;
        }

        /**
         * Sets the value of {@link CaCertificateProps#getCaCertificate}
         * @param caCertificate Property caCertificate: The information about the CA certificate. This parameter is required.
         * @return {@code this}
         */
        public Builder caCertificate(com.aliyun.ros.cdk.core.IResolvable caCertificate) {
            this.caCertificate = caCertificate;
            return this;
        }

        /**
         * Sets the value of {@link CaCertificateProps#getCaCertificateName}
         * @param caCertificateName Property caCertificateName: The CA certificate name.
         * @return {@code this}
         */
        public Builder caCertificateName(java.lang.String caCertificateName) {
            this.caCertificateName = caCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link CaCertificateProps#getCaCertificateName}
         * @param caCertificateName Property caCertificateName: The CA certificate name.
         * @return {@code this}
         */
        public Builder caCertificateName(com.aliyun.ros.cdk.core.IResolvable caCertificateName) {
            this.caCertificateName = caCertificateName;
            return this;
        }

        /**
         * Sets the value of {@link CaCertificateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CaCertificateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CaCertificateProps#getTags}
         * @param tags Property tags: Tags of ca certificate.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.slb.RosCaCertificate.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosCaCertificate.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CaCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CaCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CaCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CaCertificateProps {
        private final java.lang.Object caCertificate;
        private final java.lang.Object caCertificateName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.slb.RosCaCertificate.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.caCertificate = software.amazon.jsii.Kernel.get(this, "caCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caCertificateName = software.amazon.jsii.Kernel.get(this, "caCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.RosCaCertificate.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.caCertificate = java.util.Objects.requireNonNull(builder.caCertificate, "caCertificate is required");
            this.caCertificateName = builder.caCertificateName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosCaCertificate.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getCaCertificate() {
            return this.caCertificate;
        }

        @Override
        public final java.lang.Object getCaCertificateName() {
            return this.caCertificateName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.slb.RosCaCertificate.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("caCertificate", om.valueToTree(this.getCaCertificate()));
            if (this.getCaCertificateName() != null) {
                data.set("caCertificateName", om.valueToTree(this.getCaCertificateName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.CaCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CaCertificateProps.Jsii$Proxy that = (CaCertificateProps.Jsii$Proxy) o;

            if (!caCertificate.equals(that.caCertificate)) return false;
            if (this.caCertificateName != null ? !this.caCertificateName.equals(that.caCertificateName) : that.caCertificateName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.caCertificate.hashCode();
            result = 31 * result + (this.caCertificateName != null ? this.caCertificateName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
