package com.aliyun.ros.cdk.aligreen;

/**
 * Properties for defining a <code>RosImageLib</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.120Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.RosImageLibProps")
@software.amazon.jsii.Jsii.Proxy(RosImageLibProps.Jsii$Proxy.class)
public interface RosImageLibProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageLibName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScene();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBizTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImageLibProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImageLibProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImageLibProps> {
        java.lang.Object category;
        java.lang.Object imageLibName;
        java.lang.Object scene;
        java.lang.Object bizTypes;
        java.lang.Object enable;

        /**
         * Sets the value of {@link RosImageLibProps#getCategory}
         * @param category the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getCategory}
         * @param category the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getImageLibName}
         * @param imageLibName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageLibName(java.lang.String imageLibName) {
            this.imageLibName = imageLibName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getImageLibName}
         * @param imageLibName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageLibName(com.aliyun.ros.cdk.core.IResolvable imageLibName) {
            this.imageLibName = imageLibName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getScene}
         * @param scene the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scene(java.lang.String scene) {
            this.scene = scene;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getScene}
         * @param scene the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scene(com.aliyun.ros.cdk.core.IResolvable scene) {
            this.scene = scene;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getBizTypes}
         * @param bizTypes the value to be set.
         * @return {@code this}
         */
        public Builder bizTypes(com.aliyun.ros.cdk.core.IResolvable bizTypes) {
            this.bizTypes = bizTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getBizTypes}
         * @param bizTypes the value to be set.
         * @return {@code this}
         */
        public Builder bizTypes(java.util.List<? extends java.lang.Object> bizTypes) {
            this.bizTypes = bizTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosImageLibProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImageLibProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImageLibProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImageLibProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImageLibProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-aligreen.RosImageLibProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImageLibProps.Jsii$Proxy that = (RosImageLibProps.Jsii$Proxy) o;

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
