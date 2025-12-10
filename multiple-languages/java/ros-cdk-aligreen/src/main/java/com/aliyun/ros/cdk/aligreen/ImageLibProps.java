package com.aliyun.ros.cdk.aligreen;

/**
 * Properties for defining a <code>ImageLib</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.193Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.ImageLibProps")
@software.amazon.jsii.Jsii.Proxy(ImageLibProps.Jsii$Proxy.class)
public interface ImageLibProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property category: The category of the image library.
     * <p>
     * Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

    /**
     * Property imageLibName: The name of the image library defined by the customer.
     * <p>
     * It can contain no more than 20 characters in Chinese, English, and underscore (_).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageLibName();

    /**
     * Property scene: The moderation scenario to which the custom image library applies.
     * <p>
     * Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScene();

    /**
     * Property bizTypes: List of business scenarios.
     * <p>
     * For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBizTypes() {
        return null;
    }

    /**
     * Property enable: Specifies whether to enable the image library.
     * <p>
     * Valid values:
     * true: Enable the image library. This is the default value. false: Disable the image library.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ImageLibProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ImageLibProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ImageLibProps> {
        java.lang.Object category;
        java.lang.Object imageLibName;
        java.lang.Object scene;
        java.lang.Object bizTypes;
        java.lang.Object enable;

        /**
         * Sets the value of {@link ImageLibProps#getCategory}
         * @param category Property category: The category of the image library. This parameter is required.
         *                 Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getCategory}
         * @param category Property category: The category of the image library. This parameter is required.
         *                 Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getImageLibName}
         * @param imageLibName Property imageLibName: The name of the image library defined by the customer. This parameter is required.
         *                     It can contain no more than 20 characters in Chinese, English, and underscore (_).
         * @return {@code this}
         */
        public Builder imageLibName(java.lang.String imageLibName) {
            this.imageLibName = imageLibName;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getImageLibName}
         * @param imageLibName Property imageLibName: The name of the image library defined by the customer. This parameter is required.
         *                     It can contain no more than 20 characters in Chinese, English, and underscore (_).
         * @return {@code this}
         */
        public Builder imageLibName(com.aliyun.ros.cdk.core.IResolvable imageLibName) {
            this.imageLibName = imageLibName;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getScene}
         * @param scene Property scene: The moderation scenario to which the custom image library applies. This parameter is required.
         *              Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
         * @return {@code this}
         */
        public Builder scene(java.lang.String scene) {
            this.scene = scene;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getScene}
         * @param scene Property scene: The moderation scenario to which the custom image library applies. This parameter is required.
         *              Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
         * @return {@code this}
         */
        public Builder scene(com.aliyun.ros.cdk.core.IResolvable scene) {
            this.scene = scene;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getBizTypes}
         * @param bizTypes Property bizTypes: List of business scenarios.
         *                 For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
         * @return {@code this}
         */
        public Builder bizTypes(com.aliyun.ros.cdk.core.IResolvable bizTypes) {
            this.bizTypes = bizTypes;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getBizTypes}
         * @param bizTypes Property bizTypes: List of business scenarios.
         *                 For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
         * @return {@code this}
         */
        public Builder bizTypes(java.util.List<? extends java.lang.Object> bizTypes) {
            this.bizTypes = bizTypes;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getEnable}
         * @param enable Property enable: Specifies whether to enable the image library.
         *               Valid values:
         *               true: Enable the image library. This is the default value. false: Disable the image library.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link ImageLibProps#getEnable}
         * @param enable Property enable: Specifies whether to enable the image library.
         *               Valid values:
         *               true: Enable the image library. This is the default value. false: Disable the image library.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ImageLibProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ImageLibProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ImageLibProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageLibProps {
        private final java.lang.Object category;
        private final java.lang.Object imageLibName;
        private final java.lang.Object scene;
        private final java.lang.Object bizTypes;
        private final java.lang.Object enable;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageLibName = software.amazon.jsii.Kernel.get(this, "imageLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scene = software.amazon.jsii.Kernel.get(this, "scene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bizTypes = software.amazon.jsii.Kernel.get(this, "bizTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
            this.imageLibName = java.util.Objects.requireNonNull(builder.imageLibName, "imageLibName is required");
            this.scene = java.util.Objects.requireNonNull(builder.scene, "scene is required");
            this.bizTypes = builder.bizTypes;
            this.enable = builder.enable;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getImageLibName() {
            return this.imageLibName;
        }

        @Override
        public final java.lang.Object getScene() {
            return this.scene;
        }

        @Override
        public final java.lang.Object getBizTypes() {
            return this.bizTypes;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("category", om.valueToTree(this.getCategory()));
            data.set("imageLibName", om.valueToTree(this.getImageLibName()));
            data.set("scene", om.valueToTree(this.getScene()));
            if (this.getBizTypes() != null) {
                data.set("bizTypes", om.valueToTree(this.getBizTypes()));
            }
            if (this.getEnable() != null) {
                data.set("enable", om.valueToTree(this.getEnable()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-aligreen.ImageLibProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ImageLibProps.Jsii$Proxy that = (ImageLibProps.Jsii$Proxy) o;

            if (!category.equals(that.category)) return false;
            if (!imageLibName.equals(that.imageLibName)) return false;
            if (!scene.equals(that.scene)) return false;
            if (this.bizTypes != null ? !this.bizTypes.equals(that.bizTypes) : that.bizTypes != null) return false;
            return this.enable != null ? this.enable.equals(that.enable) : that.enable == null;
        }

        @Override
        public final int hashCode() {
            int result = this.category.hashCode();
            result = 31 * result + (this.imageLibName.hashCode());
            result = 31 * result + (this.scene.hashCode());
            result = 31 * result + (this.bizTypes != null ? this.bizTypes.hashCode() : 0);
            result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
            return result;
        }
    }
}
