package com.aliyun.ros.cdk.cloudphone.datasource;

/**
 * Properties for defining a <code>Image</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:13.087Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.datasource.ImageProps")
@software.amazon.jsii.Jsii.Proxy(ImageProps.Jsii$Proxy.class)
public interface ImageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property imageId: Image ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     * @return a {@link Builder} of {@link ImageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ImageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ImageProps> {
        java.lang.Object imageId;

        /**
         * Sets the value of {@link ImageProps#getImageId}
         * @param imageId Property imageId: Image ID. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link ImageProps#getImageId}
         * @param imageId Property imageId: Image ID. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ImageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ImageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ImageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageProps {
        private final java.lang.Object imageId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageId", om.valueToTree(this.getImageId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudphone.datasource.ImageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ImageProps.Jsii$Proxy that = (ImageProps.Jsii$Proxy) o;

            return this.imageId.equals(that.imageId);
        }

        @Override
        public final int hashCode() {
            int result = this.imageId.hashCode();
            return result;
        }
    }
}
