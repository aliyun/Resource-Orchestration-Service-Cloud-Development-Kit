package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>Website</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:29.074Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.WebsiteProps")
@software.amazon.jsii.Jsii.Proxy(WebsiteProps.Jsii$Proxy.class)
public interface WebsiteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bucketName: Bucket name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucketName();

    /**
     * Property websiteConfiguration: Website configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebsiteConfiguration() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WebsiteProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WebsiteProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WebsiteProps> {
        java.lang.Object bucketName;
        java.lang.Object websiteConfiguration;

        /**
         * Sets the value of {@link WebsiteProps#getBucketName}
         * @param bucketName Property bucketName: Bucket name. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link WebsiteProps#getBucketName}
         * @param bucketName Property bucketName: Bucket name. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link WebsiteProps#getWebsiteConfiguration}
         * @param websiteConfiguration Property websiteConfiguration: Website configuration.
         * @return {@code this}
         */
        public Builder websiteConfiguration(com.aliyun.ros.cdk.core.IResolvable websiteConfiguration) {
            this.websiteConfiguration = websiteConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link WebsiteProps#getWebsiteConfiguration}
         * @param websiteConfiguration Property websiteConfiguration: Website configuration.
         * @return {@code this}
         */
        public Builder websiteConfiguration(com.aliyun.ros.cdk.oss.RosWebsite.WebsiteConfigurationProperty websiteConfiguration) {
            this.websiteConfiguration = websiteConfiguration;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WebsiteProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WebsiteProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WebsiteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WebsiteProps {
        private final java.lang.Object bucketName;
        private final java.lang.Object websiteConfiguration;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.websiteConfiguration = software.amazon.jsii.Kernel.get(this, "websiteConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketName = java.util.Objects.requireNonNull(builder.bucketName, "bucketName is required");
            this.websiteConfiguration = builder.websiteConfiguration;
        }

        @Override
        public final java.lang.Object getBucketName() {
            return this.bucketName;
        }

        @Override
        public final java.lang.Object getWebsiteConfiguration() {
            return this.websiteConfiguration;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucketName", om.valueToTree(this.getBucketName()));
            if (this.getWebsiteConfiguration() != null) {
                data.set("websiteConfiguration", om.valueToTree(this.getWebsiteConfiguration()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.WebsiteProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WebsiteProps.Jsii$Proxy that = (WebsiteProps.Jsii$Proxy) o;

            if (!bucketName.equals(that.bucketName)) return false;
            return this.websiteConfiguration != null ? this.websiteConfiguration.equals(that.websiteConfiguration) : that.websiteConfiguration == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucketName.hashCode();
            result = 31 * result + (this.websiteConfiguration != null ? this.websiteConfiguration.hashCode() : 0);
            return result;
        }
    }
}
