package com.aliyun.ros.cdk.aligreen;

/**
 * Properties for defining a <code>RosBizType</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.779Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.RosBizTypeProps")
@software.amazon.jsii.Jsii.Proxy(RosBizTypeProps.Jsii$Proxy.class)
public interface RosBizTypeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBizTypeName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCiteTemplate();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBizTypeImport() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIndustryInfo() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBizTypeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBizTypeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBizTypeProps> {
        java.lang.Object bizTypeName;
        java.lang.Object citeTemplate;
        java.lang.Object bizTypeImport;
        java.lang.Object description;
        java.lang.Object industryInfo;

        /**
         * Sets the value of {@link RosBizTypeProps#getBizTypeName}
         * @param bizTypeName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bizTypeName(java.lang.String bizTypeName) {
            this.bizTypeName = bizTypeName;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getBizTypeName}
         * @param bizTypeName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bizTypeName(com.aliyun.ros.cdk.core.IResolvable bizTypeName) {
            this.bizTypeName = bizTypeName;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getCiteTemplate}
         * @param citeTemplate the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder citeTemplate(java.lang.Boolean citeTemplate) {
            this.citeTemplate = citeTemplate;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getCiteTemplate}
         * @param citeTemplate the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder citeTemplate(com.aliyun.ros.cdk.core.IResolvable citeTemplate) {
            this.citeTemplate = citeTemplate;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getBizTypeImport}
         * @param bizTypeImport the value to be set.
         * @return {@code this}
         */
        public Builder bizTypeImport(java.lang.String bizTypeImport) {
            this.bizTypeImport = bizTypeImport;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getBizTypeImport}
         * @param bizTypeImport the value to be set.
         * @return {@code this}
         */
        public Builder bizTypeImport(com.aliyun.ros.cdk.core.IResolvable bizTypeImport) {
            this.bizTypeImport = bizTypeImport;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getIndustryInfo}
         * @param industryInfo the value to be set.
         * @return {@code this}
         */
        public Builder industryInfo(java.lang.String industryInfo) {
            this.industryInfo = industryInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosBizTypeProps#getIndustryInfo}
         * @param industryInfo the value to be set.
         * @return {@code this}
         */
        public Builder industryInfo(com.aliyun.ros.cdk.core.IResolvable industryInfo) {
            this.industryInfo = industryInfo;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBizTypeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBizTypeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBizTypeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBizTypeProps {
        private final java.lang.Object bizTypeName;
        private final java.lang.Object citeTemplate;
        private final java.lang.Object bizTypeImport;
        private final java.lang.Object description;
        private final java.lang.Object industryInfo;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bizTypeName = software.amazon.jsii.Kernel.get(this, "bizTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.citeTemplate = software.amazon.jsii.Kernel.get(this, "citeTemplate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bizTypeImport = software.amazon.jsii.Kernel.get(this, "bizTypeImport", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.industryInfo = software.amazon.jsii.Kernel.get(this, "industryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bizTypeName = java.util.Objects.requireNonNull(builder.bizTypeName, "bizTypeName is required");
            this.citeTemplate = java.util.Objects.requireNonNull(builder.citeTemplate, "citeTemplate is required");
            this.bizTypeImport = builder.bizTypeImport;
            this.description = builder.description;
            this.industryInfo = builder.industryInfo;
        }

        @Override
        public final java.lang.Object getBizTypeName() {
            return this.bizTypeName;
        }

        @Override
        public final java.lang.Object getCiteTemplate() {
            return this.citeTemplate;
        }

        @Override
        public final java.lang.Object getBizTypeImport() {
            return this.bizTypeImport;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIndustryInfo() {
            return this.industryInfo;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bizTypeName", om.valueToTree(this.getBizTypeName()));
            data.set("citeTemplate", om.valueToTree(this.getCiteTemplate()));
            if (this.getBizTypeImport() != null) {
                data.set("bizTypeImport", om.valueToTree(this.getBizTypeImport()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIndustryInfo() != null) {
                data.set("industryInfo", om.valueToTree(this.getIndustryInfo()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-aligreen.RosBizTypeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBizTypeProps.Jsii$Proxy that = (RosBizTypeProps.Jsii$Proxy) o;

            if (!bizTypeName.equals(that.bizTypeName)) return false;
            if (!citeTemplate.equals(that.citeTemplate)) return false;
            if (this.bizTypeImport != null ? !this.bizTypeImport.equals(that.bizTypeImport) : that.bizTypeImport != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.industryInfo != null ? this.industryInfo.equals(that.industryInfo) : that.industryInfo == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bizTypeName.hashCode();
            result = 31 * result + (this.citeTemplate.hashCode());
            result = 31 * result + (this.bizTypeImport != null ? this.bizTypeImport.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.industryInfo != null ? this.industryInfo.hashCode() : 0);
            return result;
        }
    }
}
