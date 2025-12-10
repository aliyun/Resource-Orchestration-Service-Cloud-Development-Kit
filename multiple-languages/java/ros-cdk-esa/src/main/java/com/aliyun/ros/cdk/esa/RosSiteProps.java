package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosSite</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-site
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.692Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteProps")
@software.amazon.jsii.Jsii.Proxy(RosSiteProps.Jsii$Proxy.class)
public interface RosSiteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCoverage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.esa.RosSite.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSiteProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSiteProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSiteProps> {
        java.lang.Object instanceId;
        java.lang.Object siteName;
        java.lang.Object accessType;
        java.lang.Object coverage;
        java.lang.Object paymentType;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.esa.RosSite.TagsProperty> tags;

        /**
         * Sets the value of {@link RosSiteProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getSiteName}
         * @param siteName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteName(java.lang.String siteName) {
            this.siteName = siteName;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getSiteName}
         * @param siteName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteName(com.aliyun.ros.cdk.core.IResolvable siteName) {
            this.siteName = siteName;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getAccessType}
         * @param accessType the value to be set.
         * @return {@code this}
         */
        public Builder accessType(java.lang.String accessType) {
            this.accessType = accessType;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getAccessType}
         * @param accessType the value to be set.
         * @return {@code this}
         */
        public Builder accessType(com.aliyun.ros.cdk.core.IResolvable accessType) {
            this.accessType = accessType;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getCoverage}
         * @param coverage the value to be set.
         * @return {@code this}
         */
        public Builder coverage(java.lang.String coverage) {
            this.coverage = coverage;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getCoverage}
         * @param coverage the value to be set.
         * @return {@code this}
         */
        public Builder coverage(com.aliyun.ros.cdk.core.IResolvable coverage) {
            this.coverage = coverage;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.esa.RosSite.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.esa.RosSite.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSiteProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSiteProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSiteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSiteProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object siteName;
        private final java.lang.Object accessType;
        private final java.lang.Object coverage;
        private final java.lang.Object paymentType;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.esa.RosSite.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteName = software.amazon.jsii.Kernel.get(this, "siteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessType = software.amazon.jsii.Kernel.get(this, "accessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coverage = software.amazon.jsii.Kernel.get(this, "coverage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RosSite.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.siteName = java.util.Objects.requireNonNull(builder.siteName, "siteName is required");
            this.accessType = builder.accessType;
            this.coverage = builder.coverage;
            this.paymentType = builder.paymentType;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.esa.RosSite.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getSiteName() {
            return this.siteName;
        }

        @Override
        public final java.lang.Object getAccessType() {
            return this.accessType;
        }

        @Override
        public final java.lang.Object getCoverage() {
            return this.coverage;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.esa.RosSite.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("siteName", om.valueToTree(this.getSiteName()));
            if (this.getAccessType() != null) {
                data.set("accessType", om.valueToTree(this.getAccessType()));
            }
            if (this.getCoverage() != null) {
                data.set("coverage", om.valueToTree(this.getCoverage()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSiteProps.Jsii$Proxy that = (RosSiteProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!siteName.equals(that.siteName)) return false;
            if (this.accessType != null ? !this.accessType.equals(that.accessType) : that.accessType != null) return false;
            if (this.coverage != null ? !this.coverage.equals(that.coverage) : that.coverage != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.siteName.hashCode());
            result = 31 * result + (this.accessType != null ? this.accessType.hashCode() : 0);
            result = 31 * result + (this.coverage != null ? this.coverage.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
