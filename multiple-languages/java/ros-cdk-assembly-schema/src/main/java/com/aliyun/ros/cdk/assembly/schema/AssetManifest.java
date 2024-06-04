package com.aliyun.ros.cdk.assembly.schema;

/**
 * Definitions for the asset manifest.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.099Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.AssetManifest")
@software.amazon.jsii.Jsii.Proxy(AssetManifest.Jsii$Proxy.class)
public interface AssetManifest extends software.amazon.jsii.JsiiSerializable {

    /**
     * Version of the manifest.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVersion();

    /**
     * The Docker image assets in this manifest.
     * <p>
     * Default: - No Docker images
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.DockerImageAsset> getDockerImages() {
        return null;
    }

    /**
     * The file assets in this manifest.
     * <p>
     * Default: - No files
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileAsset> getFiles() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AssetManifest}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AssetManifest}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AssetManifest> {
        java.lang.String version;
        java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.DockerImageAsset> dockerImages;
        java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileAsset> files;

        /**
         * Sets the value of {@link AssetManifest#getVersion}
         * @param version Version of the manifest. This parameter is required.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link AssetManifest#getDockerImages}
         * @param dockerImages The Docker image assets in this manifest.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder dockerImages(java.util.Map<java.lang.String, ? extends com.aliyun.ros.cdk.assembly.schema.DockerImageAsset> dockerImages) {
            this.dockerImages = (java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.DockerImageAsset>)dockerImages;
            return this;
        }

        /**
         * Sets the value of {@link AssetManifest#getFiles}
         * @param files The file assets in this manifest.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder files(java.util.Map<java.lang.String, ? extends com.aliyun.ros.cdk.assembly.schema.FileAsset> files) {
            this.files = (java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileAsset>)files;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AssetManifest}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AssetManifest build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AssetManifest}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssetManifest {
        private final java.lang.String version;
        private final java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.DockerImageAsset> dockerImages;
        private final java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileAsset> files;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerImages = software.amazon.jsii.Kernel.get(this, "dockerImages", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.DockerImageAsset.class)));
            this.files = software.amazon.jsii.Kernel.get(this, "files", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.FileAsset.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            this.dockerImages = (java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.DockerImageAsset>)builder.dockerImages;
            this.files = (java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileAsset>)builder.files;
        }

        @Override
        public final java.lang.String getVersion() {
            return this.version;
        }

        @Override
        public final java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.DockerImageAsset> getDockerImages() {
            return this.dockerImages;
        }

        @Override
        public final java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.FileAsset> getFiles() {
            return this.files;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("version", om.valueToTree(this.getVersion()));
            if (this.getDockerImages() != null) {
                data.set("dockerImages", om.valueToTree(this.getDockerImages()));
            }
            if (this.getFiles() != null) {
                data.set("files", om.valueToTree(this.getFiles()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.AssetManifest"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AssetManifest.Jsii$Proxy that = (AssetManifest.Jsii$Proxy) o;

            if (!version.equals(that.version)) return false;
            if (this.dockerImages != null ? !this.dockerImages.equals(that.dockerImages) : that.dockerImages != null) return false;
            return this.files != null ? this.files.equals(that.files) : that.files == null;
        }

        @Override
        public final int hashCode() {
            int result = this.version.hashCode();
            result = 31 * result + (this.dockerImages != null ? this.dockerImages.hashCode() : 0);
            result = 31 * result + (this.files != null ? this.files.hashCode() : 0);
            return result;
        }
    }
}
