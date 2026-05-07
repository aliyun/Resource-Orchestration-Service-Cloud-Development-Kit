package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>RosImage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.423Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RosImageProps")
@software.amazon.jsii.Jsii.Proxy(RosImageProps.Jsii$Proxy.class)
public interface RosImageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageUri();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessibility() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspaceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImageProps> {
        java.lang.Object imageName;
        java.lang.Object imageUri;
        java.lang.Object accessibility;
        java.lang.Object labels;
        java.lang.Object workspaceId;

        /**
         * Sets the value of {@link RosImageProps#getImageName}
         * @param imageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getImageName}
         * @param imageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getImageUri}
         * @param imageUri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageUri(java.lang.String imageUri) {
            this.imageUri = imageUri;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getImageUri}
         * @param imageUri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageUri(com.aliyun.ros.cdk.core.IResolvable imageUri) {
            this.imageUri = imageUri;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getAccessibility}
         * @param accessibility the value to be set.
         * @return {@code this}
         */
        public Builder accessibility(java.lang.String accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getAccessibility}
         * @param accessibility the value to be set.
         * @return {@code this}
         */
        public Builder accessibility(com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getLabels}
         * @param labels the value to be set.
         * @return {@code this}
         */
        public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getLabels}
         * @param labels the value to be set.
         * @return {@code this}
         */
        public Builder labels(java.util.List<? extends java.lang.Object> labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getWorkspaceId}
         * @param workspaceId the value to be set.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getWorkspaceId}
         * @param workspaceId the value to be set.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImageProps {
        private final java.lang.Object imageName;
        private final java.lang.Object imageUri;
        private final java.lang.Object accessibility;
        private final java.lang.Object labels;
        private final java.lang.Object workspaceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageName = software.amazon.jsii.Kernel.get(this, "imageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageUri = software.amazon.jsii.Kernel.get(this, "imageUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessibility = software.amazon.jsii.Kernel.get(this, "accessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageName = java.util.Objects.requireNonNull(builder.imageName, "imageName is required");
            this.imageUri = java.util.Objects.requireNonNull(builder.imageUri, "imageUri is required");
            this.accessibility = builder.accessibility;
            this.labels = builder.labels;
            this.workspaceId = builder.workspaceId;
        }

        @Override
        public final java.lang.Object getImageName() {
            return this.imageName;
        }

        @Override
        public final java.lang.Object getImageUri() {
            return this.imageUri;
        }

        @Override
        public final java.lang.Object getAccessibility() {
            return this.accessibility;
        }

        @Override
        public final java.lang.Object getLabels() {
            return this.labels;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageName", om.valueToTree(this.getImageName()));
            data.set("imageUri", om.valueToTree(this.getImageUri()));
            if (this.getAccessibility() != null) {
                data.set("accessibility", om.valueToTree(this.getAccessibility()));
            }
            if (this.getLabels() != null) {
                data.set("labels", om.valueToTree(this.getLabels()));
            }
            if (this.getWorkspaceId() != null) {
                data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.RosImageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImageProps.Jsii$Proxy that = (RosImageProps.Jsii$Proxy) o;

            if (!imageName.equals(that.imageName)) return false;
            if (!imageUri.equals(that.imageUri)) return false;
            if (this.accessibility != null ? !this.accessibility.equals(that.accessibility) : that.accessibility != null) return false;
            if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
            return this.workspaceId != null ? this.workspaceId.equals(that.workspaceId) : that.workspaceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageName.hashCode();
            result = 31 * result + (this.imageUri.hashCode());
            result = 31 * result + (this.accessibility != null ? this.accessibility.hashCode() : 0);
            result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
            result = 31 * result + (this.workspaceId != null ? this.workspaceId.hashCode() : 0);
            return result;
        }
    }
}
