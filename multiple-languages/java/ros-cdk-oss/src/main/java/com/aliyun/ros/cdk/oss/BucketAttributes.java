package com.aliyun.ros.cdk.oss;

/**
 * A reference to a bucket outside this stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:16.424Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.BucketAttributes")
@software.amazon.jsii.Jsii.Proxy(BucketAttributes.Jsii$Proxy.class)
public interface BucketAttributes extends software.amazon.jsii.JsiiSerializable {

    /**
     * The domain name of the bucket.
     * <p>
     * Default: - Inferred from bucket name and region
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBucketDomainName() {
        return null;
    }

    /**
     * The endpoint of the bucket.
     * <p>
     * Default: - Inferred from region
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBucketEndpoint() {
        return null;
    }

    /**
     * The name of the bucket.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBucketName() {
        return null;
    }

    /**
     * The website URL of the bucket (if static web hosting is enabled).
     * <p>
     * Default: - Inferred from bucket name and region
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBucketWebsiteUrl() {
        return null;
    }

    /**
     * If this bucket has been configured for static website hosting.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getIsWebsite() {
        return null;
    }

    /**
     * The region this existing bucket is in.
     * <p>
     * Features that require the region (e.g. <code>bucketWebsiteUrl</code>) won't fully work
     * if the region cannot be correctly inferred.
     * <p>
     * Default: - it's assumed the bucket is in the same region as the scope it's being imported into
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BucketAttributes}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BucketAttributes}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BucketAttributes> {
        java.lang.String bucketDomainName;
        java.lang.String bucketEndpoint;
        java.lang.String bucketName;
        java.lang.String bucketWebsiteUrl;
        java.lang.Boolean isWebsite;
        java.lang.String region;

        /**
         * Sets the value of {@link BucketAttributes#getBucketDomainName}
         * @param bucketDomainName The domain name of the bucket.
         * @return {@code this}
         */
        public Builder bucketDomainName(java.lang.String bucketDomainName) {
            this.bucketDomainName = bucketDomainName;
            return this;
        }

        /**
         * Sets the value of {@link BucketAttributes#getBucketEndpoint}
         * @param bucketEndpoint The endpoint of the bucket.
         * @return {@code this}
         */
        public Builder bucketEndpoint(java.lang.String bucketEndpoint) {
            this.bucketEndpoint = bucketEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link BucketAttributes#getBucketName}
         * @param bucketName The name of the bucket.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link BucketAttributes#getBucketWebsiteUrl}
         * @param bucketWebsiteUrl The website URL of the bucket (if static web hosting is enabled).
         * @return {@code this}
         */
        public Builder bucketWebsiteUrl(java.lang.String bucketWebsiteUrl) {
            this.bucketWebsiteUrl = bucketWebsiteUrl;
            return this;
        }

        /**
         * Sets the value of {@link BucketAttributes#getIsWebsite}
         * @param isWebsite If this bucket has been configured for static website hosting.
         * @return {@code this}
         */
        public Builder isWebsite(java.lang.Boolean isWebsite) {
            this.isWebsite = isWebsite;
            return this;
        }

        /**
         * Sets the value of {@link BucketAttributes#getRegion}
         * @param region The region this existing bucket is in.
         *               Features that require the region (e.g. <code>bucketWebsiteUrl</code>) won't fully work
         *               if the region cannot be correctly inferred.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BucketAttributes}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BucketAttributes build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BucketAttributes}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BucketAttributes {
        private final java.lang.String bucketDomainName;
        private final java.lang.String bucketEndpoint;
        private final java.lang.String bucketName;
        private final java.lang.String bucketWebsiteUrl;
        private final java.lang.Boolean isWebsite;
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketDomainName = software.amazon.jsii.Kernel.get(this, "bucketDomainName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.bucketEndpoint = software.amazon.jsii.Kernel.get(this, "bucketEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.bucketWebsiteUrl = software.amazon.jsii.Kernel.get(this, "bucketWebsiteUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.isWebsite = software.amazon.jsii.Kernel.get(this, "isWebsite", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketDomainName = builder.bucketDomainName;
            this.bucketEndpoint = builder.bucketEndpoint;
            this.bucketName = builder.bucketName;
            this.bucketWebsiteUrl = builder.bucketWebsiteUrl;
            this.isWebsite = builder.isWebsite;
            this.region = builder.region;
        }

        @Override
        public final java.lang.String getBucketDomainName() {
            return this.bucketDomainName;
        }

        @Override
        public final java.lang.String getBucketEndpoint() {
            return this.bucketEndpoint;
        }

        @Override
        public final java.lang.String getBucketName() {
            return this.bucketName;
        }

        @Override
        public final java.lang.String getBucketWebsiteUrl() {
            return this.bucketWebsiteUrl;
        }

        @Override
        public final java.lang.Boolean getIsWebsite() {
            return this.isWebsite;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getBucketDomainName() != null) {
                data.set("bucketDomainName", om.valueToTree(this.getBucketDomainName()));
            }
            if (this.getBucketEndpoint() != null) {
                data.set("bucketEndpoint", om.valueToTree(this.getBucketEndpoint()));
            }
            if (this.getBucketName() != null) {
                data.set("bucketName", om.valueToTree(this.getBucketName()));
            }
            if (this.getBucketWebsiteUrl() != null) {
                data.set("bucketWebsiteUrl", om.valueToTree(this.getBucketWebsiteUrl()));
            }
            if (this.getIsWebsite() != null) {
                data.set("isWebsite", om.valueToTree(this.getIsWebsite()));
            }
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.BucketAttributes"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BucketAttributes.Jsii$Proxy that = (BucketAttributes.Jsii$Proxy) o;

            if (this.bucketDomainName != null ? !this.bucketDomainName.equals(that.bucketDomainName) : that.bucketDomainName != null) return false;
            if (this.bucketEndpoint != null ? !this.bucketEndpoint.equals(that.bucketEndpoint) : that.bucketEndpoint != null) return false;
            if (this.bucketName != null ? !this.bucketName.equals(that.bucketName) : that.bucketName != null) return false;
            if (this.bucketWebsiteUrl != null ? !this.bucketWebsiteUrl.equals(that.bucketWebsiteUrl) : that.bucketWebsiteUrl != null) return false;
            if (this.isWebsite != null ? !this.isWebsite.equals(that.isWebsite) : that.isWebsite != null) return false;
            return this.region != null ? this.region.equals(that.region) : that.region == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucketDomainName != null ? this.bucketDomainName.hashCode() : 0;
            result = 31 * result + (this.bucketEndpoint != null ? this.bucketEndpoint.hashCode() : 0);
            result = 31 * result + (this.bucketName != null ? this.bucketName.hashCode() : 0);
            result = 31 * result + (this.bucketWebsiteUrl != null ? this.bucketWebsiteUrl.hashCode() : 0);
            result = 31 * result + (this.isWebsite != null ? this.isWebsite.hashCode() : 0);
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            return result;
        }
    }
}
