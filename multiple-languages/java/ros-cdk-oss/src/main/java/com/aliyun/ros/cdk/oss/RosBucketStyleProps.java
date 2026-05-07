package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>RosBucketStyle</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketstyle
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.888Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketStyleProps")
@software.amazon.jsii.Jsii.Proxy(RosBucketStyleProps.Jsii$Proxy.class)
public interface RosBucketStyleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContent();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStyleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBucketStyleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBucketStyleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBucketStyleProps> {
        java.lang.Object bucket;
        java.lang.Object content;
        java.lang.Object styleName;
        java.lang.Object category;

        /**
         * Sets the value of {@link RosBucketStyleProps#getBucket}
         * @param bucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(java.lang.String bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketStyleProps#getBucket}
         * @param bucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketStyleProps#getContent}
         * @param content the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketStyleProps#getContent}
         * @param content the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketStyleProps#getStyleName}
         * @param styleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder styleName(java.lang.String styleName) {
            this.styleName = styleName;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketStyleProps#getStyleName}
         * @param styleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder styleName(com.aliyun.ros.cdk.core.IResolvable styleName) {
            this.styleName = styleName;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketStyleProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketStyleProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBucketStyleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBucketStyleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBucketStyleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBucketStyleProps {
        private final java.lang.Object bucket;
        private final java.lang.Object content;
        private final java.lang.Object styleName;
        private final java.lang.Object category;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.styleName = software.amazon.jsii.Kernel.get(this, "styleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
            this.content = java.util.Objects.requireNonNull(builder.content, "content is required");
            this.styleName = java.util.Objects.requireNonNull(builder.styleName, "styleName is required");
            this.category = builder.category;
        }

        @Override
        public final java.lang.Object getBucket() {
            return this.bucket;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getStyleName() {
            return this.styleName;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucket", om.valueToTree(this.getBucket()));
            data.set("content", om.valueToTree(this.getContent()));
            data.set("styleName", om.valueToTree(this.getStyleName()));
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketStyleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBucketStyleProps.Jsii$Proxy that = (RosBucketStyleProps.Jsii$Proxy) o;

            if (!bucket.equals(that.bucket)) return false;
            if (!content.equals(that.content)) return false;
            if (!styleName.equals(that.styleName)) return false;
            return this.category != null ? this.category.equals(that.category) : that.category == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucket.hashCode();
            result = 31 * result + (this.content.hashCode());
            result = 31 * result + (this.styleName.hashCode());
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            return result;
        }
    }
}
