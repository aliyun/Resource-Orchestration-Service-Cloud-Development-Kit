package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ImageSharePermission</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagesharepermission
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.226Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ImageSharePermissionProps")
@software.amazon.jsii.Jsii.Proxy(ImageSharePermissionProps.Jsii$Proxy.class)
public interface ImageSharePermissionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property imageId: The shared custom image ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     * Property accounts: Alibaba Cloud account IDs authorized to share the image.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccounts() {
        return null;
    }

    /**
     * Property isPublic: Whether to publish or remove community mirrors.
     * <p>
     * If this property is not set, no changes will be made to the community image
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsPublic() {
        return null;
    }

    /**
     * Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeepPermission() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ImageSharePermissionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ImageSharePermissionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ImageSharePermissionProps> {
        java.lang.Object imageId;
        java.lang.Object accounts;
        java.lang.Object isPublic;
        java.lang.Object keepPermission;

        /**
         * Sets the value of {@link ImageSharePermissionProps#getImageId}
         * @param imageId Property imageId: The shared custom image ID. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link ImageSharePermissionProps#getImageId}
         * @param imageId Property imageId: The shared custom image ID. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link ImageSharePermissionProps#getAccounts}
         * @param accounts Property accounts: Alibaba Cloud account IDs authorized to share the image.
         * @return {@code this}
         */
        public Builder accounts(com.aliyun.ros.cdk.core.IResolvable accounts) {
            this.accounts = accounts;
            return this;
        }

        /**
         * Sets the value of {@link ImageSharePermissionProps#getAccounts}
         * @param accounts Property accounts: Alibaba Cloud account IDs authorized to share the image.
         * @return {@code this}
         */
        public Builder accounts(java.util.List<? extends java.lang.Object> accounts) {
            this.accounts = accounts;
            return this;
        }

        /**
         * Sets the value of {@link ImageSharePermissionProps#getIsPublic}
         * @param isPublic Property isPublic: Whether to publish or remove community mirrors.
         *                 If this property is not set, no changes will be made to the community image
         * @return {@code this}
         */
        public Builder isPublic(java.lang.Boolean isPublic) {
            this.isPublic = isPublic;
            return this;
        }

        /**
         * Sets the value of {@link ImageSharePermissionProps#getIsPublic}
         * @param isPublic Property isPublic: Whether to publish or remove community mirrors.
         *                 If this property is not set, no changes will be made to the community image
         * @return {@code this}
         */
        public Builder isPublic(com.aliyun.ros.cdk.core.IResolvable isPublic) {
            this.isPublic = isPublic;
            return this;
        }

        /**
         * Sets the value of {@link ImageSharePermissionProps#getKeepPermission}
         * @param keepPermission Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
         * @return {@code this}
         */
        public Builder keepPermission(java.lang.Boolean keepPermission) {
            this.keepPermission = keepPermission;
            return this;
        }

        /**
         * Sets the value of {@link ImageSharePermissionProps#getKeepPermission}
         * @param keepPermission Property keepPermission: Whether to keep the original sharing permissions when resource is deleted, default is true.If set to false, Accounts will be removed if Accounts is set and IsPublic will be changed if IsPublic is set.
         * @return {@code this}
         */
        public Builder keepPermission(com.aliyun.ros.cdk.core.IResolvable keepPermission) {
            this.keepPermission = keepPermission;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ImageSharePermissionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ImageSharePermissionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ImageSharePermissionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageSharePermissionProps {
        private final java.lang.Object imageId;
        private final java.lang.Object accounts;
        private final java.lang.Object isPublic;
        private final java.lang.Object keepPermission;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accounts = software.amazon.jsii.Kernel.get(this, "accounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isPublic = software.amazon.jsii.Kernel.get(this, "isPublic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keepPermission = software.amazon.jsii.Kernel.get(this, "keepPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
            this.accounts = builder.accounts;
            this.isPublic = builder.isPublic;
            this.keepPermission = builder.keepPermission;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getAccounts() {
            return this.accounts;
        }

        @Override
        public final java.lang.Object getIsPublic() {
            return this.isPublic;
        }

        @Override
        public final java.lang.Object getKeepPermission() {
            return this.keepPermission;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageId", om.valueToTree(this.getImageId()));
            if (this.getAccounts() != null) {
                data.set("accounts", om.valueToTree(this.getAccounts()));
            }
            if (this.getIsPublic() != null) {
                data.set("isPublic", om.valueToTree(this.getIsPublic()));
            }
            if (this.getKeepPermission() != null) {
                data.set("keepPermission", om.valueToTree(this.getKeepPermission()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.ImageSharePermissionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ImageSharePermissionProps.Jsii$Proxy that = (ImageSharePermissionProps.Jsii$Proxy) o;

            if (!imageId.equals(that.imageId)) return false;
            if (this.accounts != null ? !this.accounts.equals(that.accounts) : that.accounts != null) return false;
            if (this.isPublic != null ? !this.isPublic.equals(that.isPublic) : that.isPublic != null) return false;
            return this.keepPermission != null ? this.keepPermission.equals(that.keepPermission) : that.keepPermission == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageId.hashCode();
            result = 31 * result + (this.accounts != null ? this.accounts.hashCode() : 0);
            result = 31 * result + (this.isPublic != null ? this.isPublic.hashCode() : 0);
            result = 31 * result + (this.keepPermission != null ? this.keepPermission.hashCode() : 0);
            return result;
        }
    }
}
