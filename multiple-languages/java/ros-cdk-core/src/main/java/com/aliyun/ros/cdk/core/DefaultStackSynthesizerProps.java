package com.aliyun.ros.cdk.core;

/**
 * Configuration properties for DefaultStackSynthesizer.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:11.973Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DefaultStackSynthesizerProps")
@software.amazon.jsii.Jsii.Proxy(DefaultStackSynthesizerProps.Jsii$Proxy.class)
public interface DefaultStackSynthesizerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * bucketPrefix to use while storing OSS Assets.
     * <p>
     * Default: - DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBucketPrefix() {
        return null;
    }

    /**
     * Name of the OSS bucket to hold file assets.
     * <p>
     * You must supply this if you have given a non-standard name to the staging bucket.
     * <p>
     * The placeholders <code>${Qualifier}</code>, <code>${ALIYUN::AccountId}</code> and <code>${ALIYUN::Region}</code> will
     * be replaced with the values of qualifier and the stack's account and region,
     * respectively.
     * <p>
     * Default: DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFileAssetsBucketName() {
        return null;
    }

    /**
     * Qualifier to disambiguate multiple environments in the same account.
     * <p>
     * You can use this and leave the other naming properties empty if you have deployed
     * the bootstrap environment with standard names but only differnet qualifiers.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getQualifier() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DefaultStackSynthesizerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DefaultStackSynthesizerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DefaultStackSynthesizerProps> {
        java.lang.String bucketPrefix;
        java.lang.String fileAssetsBucketName;
        java.lang.String qualifier;

        /**
         * Sets the value of {@link DefaultStackSynthesizerProps#getBucketPrefix}
         * @param bucketPrefix bucketPrefix to use while storing OSS Assets.
         * @return {@code this}
         */
        public Builder bucketPrefix(java.lang.String bucketPrefix) {
            this.bucketPrefix = bucketPrefix;
            return this;
        }

        /**
         * Sets the value of {@link DefaultStackSynthesizerProps#getFileAssetsBucketName}
         * @param fileAssetsBucketName Name of the OSS bucket to hold file assets.
         *                             You must supply this if you have given a non-standard name to the staging bucket.
         *                             <p>
         *                             The placeholders <code>${Qualifier}</code>, <code>${ALIYUN::AccountId}</code> and <code>${ALIYUN::Region}</code> will
         *                             be replaced with the values of qualifier and the stack's account and region,
         *                             respectively.
         * @return {@code this}
         */
        public Builder fileAssetsBucketName(java.lang.String fileAssetsBucketName) {
            this.fileAssetsBucketName = fileAssetsBucketName;
            return this;
        }

        /**
         * Sets the value of {@link DefaultStackSynthesizerProps#getQualifier}
         * @param qualifier Qualifier to disambiguate multiple environments in the same account.
         *                  You can use this and leave the other naming properties empty if you have deployed
         *                  the bootstrap environment with standard names but only differnet qualifiers.
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DefaultStackSynthesizerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DefaultStackSynthesizerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DefaultStackSynthesizerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DefaultStackSynthesizerProps {
        private final java.lang.String bucketPrefix;
        private final java.lang.String fileAssetsBucketName;
        private final java.lang.String qualifier;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketPrefix = software.amazon.jsii.Kernel.get(this, "bucketPrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.fileAssetsBucketName = software.amazon.jsii.Kernel.get(this, "fileAssetsBucketName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketPrefix = builder.bucketPrefix;
            this.fileAssetsBucketName = builder.fileAssetsBucketName;
            this.qualifier = builder.qualifier;
        }

        @Override
        public final java.lang.String getBucketPrefix() {
            return this.bucketPrefix;
        }

        @Override
        public final java.lang.String getFileAssetsBucketName() {
            return this.fileAssetsBucketName;
        }

        @Override
        public final java.lang.String getQualifier() {
            return this.qualifier;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getBucketPrefix() != null) {
                data.set("bucketPrefix", om.valueToTree(this.getBucketPrefix()));
            }
            if (this.getFileAssetsBucketName() != null) {
                data.set("fileAssetsBucketName", om.valueToTree(this.getFileAssetsBucketName()));
            }
            if (this.getQualifier() != null) {
                data.set("qualifier", om.valueToTree(this.getQualifier()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.DefaultStackSynthesizerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DefaultStackSynthesizerProps.Jsii$Proxy that = (DefaultStackSynthesizerProps.Jsii$Proxy) o;

            if (this.bucketPrefix != null ? !this.bucketPrefix.equals(that.bucketPrefix) : that.bucketPrefix != null) return false;
            if (this.fileAssetsBucketName != null ? !this.fileAssetsBucketName.equals(that.fileAssetsBucketName) : that.fileAssetsBucketName != null) return false;
            return this.qualifier != null ? this.qualifier.equals(that.qualifier) : that.qualifier == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucketPrefix != null ? this.bucketPrefix.hashCode() : 0;
            result = 31 * result + (this.fileAssetsBucketName != null ? this.fileAssetsBucketName.hashCode() : 0);
            result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
            return result;
        }
    }
}
