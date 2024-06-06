package com.aliyun.ros.cdk.core;

/**
 * The location of the published docker image.
 * <p>
 * This is where the image can be
 * consumed at runtime.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:11.985Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DockerImageAssetLocation")
@software.amazon.jsii.Jsii.Proxy(DockerImageAssetLocation.Jsii$Proxy.class)
public interface DockerImageAssetLocation extends software.amazon.jsii.JsiiSerializable {

    /**
     * The URI of the image in Aliyun ACR (including a tag).
     */
    @org.jetbrains.annotations.NotNull java.lang.String getImageUri();

    /**
     * The name of the ACR repository.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRepositoryName();

    /**
     * The tag of the image in Aliyun ACR.
     * <p>
     * Default: - the hash of the asset, or the `dockerTagPrefix` concatenated with the asset hash if a `dockerTagPrefix` is specified in the stack synthesizer
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getImageTag() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DockerImageAssetLocation}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DockerImageAssetLocation}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DockerImageAssetLocation> {
        java.lang.String imageUri;
        java.lang.String repositoryName;
        java.lang.String imageTag;

        /**
         * Sets the value of {@link DockerImageAssetLocation#getImageUri}
         * @param imageUri The URI of the image in Aliyun ACR (including a tag). This parameter is required.
         * @return {@code this}
         */
        public Builder imageUri(java.lang.String imageUri) {
            this.imageUri = imageUri;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetLocation#getRepositoryName}
         * @param repositoryName The name of the ACR repository. This parameter is required.
         * @return {@code this}
         */
        public Builder repositoryName(java.lang.String repositoryName) {
            this.repositoryName = repositoryName;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetLocation#getImageTag}
         * @param imageTag The tag of the image in Aliyun ACR.
         * @return {@code this}
         */
        public Builder imageTag(java.lang.String imageTag) {
            this.imageTag = imageTag;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DockerImageAssetLocation}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DockerImageAssetLocation build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DockerImageAssetLocation}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DockerImageAssetLocation {
        private final java.lang.String imageUri;
        private final java.lang.String repositoryName;
        private final java.lang.String imageTag;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageUri = software.amazon.jsii.Kernel.get(this, "imageUri", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.repositoryName = software.amazon.jsii.Kernel.get(this, "repositoryName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.imageTag = software.amazon.jsii.Kernel.get(this, "imageTag", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageUri = java.util.Objects.requireNonNull(builder.imageUri, "imageUri is required");
            this.repositoryName = java.util.Objects.requireNonNull(builder.repositoryName, "repositoryName is required");
            this.imageTag = builder.imageTag;
        }

        @Override
        public final java.lang.String getImageUri() {
            return this.imageUri;
        }

        @Override
        public final java.lang.String getRepositoryName() {
            return this.repositoryName;
        }

        @Override
        public final java.lang.String getImageTag() {
            return this.imageTag;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageUri", om.valueToTree(this.getImageUri()));
            data.set("repositoryName", om.valueToTree(this.getRepositoryName()));
            if (this.getImageTag() != null) {
                data.set("imageTag", om.valueToTree(this.getImageTag()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.DockerImageAssetLocation"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DockerImageAssetLocation.Jsii$Proxy that = (DockerImageAssetLocation.Jsii$Proxy) o;

            if (!imageUri.equals(that.imageUri)) return false;
            if (!repositoryName.equals(that.repositoryName)) return false;
            return this.imageTag != null ? this.imageTag.equals(that.imageTag) : that.imageTag == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageUri.hashCode();
            result = 31 * result + (this.repositoryName.hashCode());
            result = 31 * result + (this.imageTag != null ? this.imageTag.hashCode() : 0);
            return result;
        }
    }
}
