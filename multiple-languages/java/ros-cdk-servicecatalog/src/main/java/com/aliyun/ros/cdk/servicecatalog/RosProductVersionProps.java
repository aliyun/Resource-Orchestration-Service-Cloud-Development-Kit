package com.aliyun.ros.cdk.servicecatalog;

/**
 * Properties for defining a <code>RosProductVersion</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.049Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.servicecatalog.$Module.class, fqn = "@alicloud/ros-cdk-servicecatalog.RosProductVersionProps")
@software.amazon.jsii.Jsii.Proxy(RosProductVersionProps.Jsii$Proxy.class)
public interface RosProductVersionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductVersionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateUrl();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActive() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGuidance() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosProductVersionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosProductVersionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosProductVersionProps> {
        java.lang.Object productId;
        java.lang.Object productVersionName;
        java.lang.Object templateType;
        java.lang.Object templateUrl;
        java.lang.Object active;
        java.lang.Object description;
        java.lang.Object guidance;

        /**
         * Sets the value of {@link RosProductVersionProps#getProductId}
         * @param productId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productId(java.lang.String productId) {
            this.productId = productId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getProductId}
         * @param productId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productId(com.aliyun.ros.cdk.core.IResolvable productId) {
            this.productId = productId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getProductVersionName}
         * @param productVersionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productVersionName(java.lang.String productVersionName) {
            this.productVersionName = productVersionName;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getProductVersionName}
         * @param productVersionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productVersionName(com.aliyun.ros.cdk.core.IResolvable productVersionName) {
            this.productVersionName = productVersionName;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getTemplateType}
         * @param templateType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateType(java.lang.String templateType) {
            this.templateType = templateType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getTemplateType}
         * @param templateType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateType(com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.templateType = templateType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getTemplateUrl}
         * @param templateUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateUrl(java.lang.String templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getTemplateUrl}
         * @param templateUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateUrl(com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getActive}
         * @param active the value to be set.
         * @return {@code this}
         */
        public Builder active(java.lang.Boolean active) {
            this.active = active;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getActive}
         * @param active the value to be set.
         * @return {@code this}
         */
        public Builder active(com.aliyun.ros.cdk.core.IResolvable active) {
            this.active = active;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getGuidance}
         * @param guidance the value to be set.
         * @return {@code this}
         */
        public Builder guidance(java.lang.String guidance) {
            this.guidance = guidance;
            return this;
        }

        /**
         * Sets the value of {@link RosProductVersionProps#getGuidance}
         * @param guidance the value to be set.
         * @return {@code this}
         */
        public Builder guidance(com.aliyun.ros.cdk.core.IResolvable guidance) {
            this.guidance = guidance;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosProductVersionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosProductVersionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosProductVersionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosProductVersionProps {
        private final java.lang.Object productId;
        private final java.lang.Object productVersionName;
        private final java.lang.Object templateType;
        private final java.lang.Object templateUrl;
        private final java.lang.Object active;
        private final java.lang.Object description;
        private final java.lang.Object guidance;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.productId = software.amazon.jsii.Kernel.get(this, "productId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productVersionName = software.amazon.jsii.Kernel.get(this, "productVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateType = software.amazon.jsii.Kernel.get(this, "templateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateUrl = software.amazon.jsii.Kernel.get(this, "templateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.active = software.amazon.jsii.Kernel.get(this, "active", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.guidance = software.amazon.jsii.Kernel.get(this, "guidance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.productId = java.util.Objects.requireNonNull(builder.productId, "productId is required");
            this.productVersionName = java.util.Objects.requireNonNull(builder.productVersionName, "productVersionName is required");
            this.templateType = java.util.Objects.requireNonNull(builder.templateType, "templateType is required");
            this.templateUrl = java.util.Objects.requireNonNull(builder.templateUrl, "templateUrl is required");
            this.active = builder.active;
            this.description = builder.description;
            this.guidance = builder.guidance;
        }

        @Override
        public final java.lang.Object getProductId() {
            return this.productId;
        }

        @Override
        public final java.lang.Object getProductVersionName() {
            return this.productVersionName;
        }

        @Override
        public final java.lang.Object getTemplateType() {
            return this.templateType;
        }

        @Override
        public final java.lang.Object getTemplateUrl() {
            return this.templateUrl;
        }

        @Override
        public final java.lang.Object getActive() {
            return this.active;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getGuidance() {
            return this.guidance;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("productId", om.valueToTree(this.getProductId()));
            data.set("productVersionName", om.valueToTree(this.getProductVersionName()));
            data.set("templateType", om.valueToTree(this.getTemplateType()));
            data.set("templateUrl", om.valueToTree(this.getTemplateUrl()));
            if (this.getActive() != null) {
                data.set("active", om.valueToTree(this.getActive()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getGuidance() != null) {
                data.set("guidance", om.valueToTree(this.getGuidance()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-servicecatalog.RosProductVersionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosProductVersionProps.Jsii$Proxy that = (RosProductVersionProps.Jsii$Proxy) o;

            if (!productId.equals(that.productId)) return false;
            if (!productVersionName.equals(that.productVersionName)) return false;
            if (!templateType.equals(that.templateType)) return false;
            if (!templateUrl.equals(that.templateUrl)) return false;
            if (this.active != null ? !this.active.equals(that.active) : that.active != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.guidance != null ? this.guidance.equals(that.guidance) : that.guidance == null;
        }

        @Override
        public final int hashCode() {
            int result = this.productId.hashCode();
            result = 31 * result + (this.productVersionName.hashCode());
            result = 31 * result + (this.templateType.hashCode());
            result = 31 * result + (this.templateUrl.hashCode());
            result = 31 * result + (this.active != null ? this.active.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.guidance != null ? this.guidance.hashCode() : 0);
            return result;
        }
    }
}
