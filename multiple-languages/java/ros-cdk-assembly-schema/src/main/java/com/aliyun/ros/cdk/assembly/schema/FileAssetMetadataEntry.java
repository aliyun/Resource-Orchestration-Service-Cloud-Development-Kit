package com.aliyun.ros.cdk.assembly.schema;

/**
 * Metadata Entry spec for files.
 * <p>
 * Example:
 * <p>
 * <blockquote><pre>
 * const entry = {
 *   packaging: 'file',
 *   ossBucketParameter: 'bucket-parameter',
 *   ossKeyParameter: 'key-parameter',
 *   artifactHashParameter: 'hash-parameter',
 * }
 * </pre></blockquote>
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.625Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.FileAssetMetadataEntry")
@software.amazon.jsii.Jsii.Proxy(FileAssetMetadataEntry.Jsii$Proxy.class)
public interface FileAssetMetadataEntry extends software.amazon.jsii.JsiiSerializable {

    /**
     * The name of the parameter where the hash of the bundled asset should be passed in.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getArtifactHashParameter();

    /**
     * Logical identifier for the asset.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getId();

    /**
     * Name of parameter where OSS bucket should be passed in.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOssBucketParameter();

    /**
     * Name of parameter where OSS object key should be passed in.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOssKeyParameter();

    /**
     * Requested packaging style.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPackaging();

    /**
     * Path on disk to the asset.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPath();

    /**
     * The hash of the asset source.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceHash();

    /**
     * @return a {@link Builder} of {@link FileAssetMetadataEntry}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FileAssetMetadataEntry}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FileAssetMetadataEntry> {
        java.lang.String artifactHashParameter;
        java.lang.String id;
        java.lang.String ossBucketParameter;
        java.lang.String ossKeyParameter;
        java.lang.String packaging;
        java.lang.String path;
        java.lang.String sourceHash;

        /**
         * Sets the value of {@link FileAssetMetadataEntry#getArtifactHashParameter}
         * @param artifactHashParameter The name of the parameter where the hash of the bundled asset should be passed in. This parameter is required.
         * @return {@code this}
         */
        public Builder artifactHashParameter(java.lang.String artifactHashParameter) {
            this.artifactHashParameter = artifactHashParameter;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetMetadataEntry#getId}
         * @param id Logical identifier for the asset. This parameter is required.
         * @return {@code this}
         */
        public Builder id(java.lang.String id) {
            this.id = id;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetMetadataEntry#getOssBucketParameter}
         * @param ossBucketParameter Name of parameter where OSS bucket should be passed in. This parameter is required.
         * @return {@code this}
         */
        public Builder ossBucketParameter(java.lang.String ossBucketParameter) {
            this.ossBucketParameter = ossBucketParameter;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetMetadataEntry#getOssKeyParameter}
         * @param ossKeyParameter Name of parameter where OSS object key should be passed in. This parameter is required.
         * @return {@code this}
         */
        public Builder ossKeyParameter(java.lang.String ossKeyParameter) {
            this.ossKeyParameter = ossKeyParameter;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetMetadataEntry#getPackaging}
         * @param packaging Requested packaging style. This parameter is required.
         * @return {@code this}
         */
        public Builder packaging(java.lang.String packaging) {
            this.packaging = packaging;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetMetadataEntry#getPath}
         * @param path Path on disk to the asset. This parameter is required.
         * @return {@code this}
         */
        public Builder path(java.lang.String path) {
            this.path = path;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetMetadataEntry#getSourceHash}
         * @param sourceHash The hash of the asset source. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceHash(java.lang.String sourceHash) {
            this.sourceHash = sourceHash;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FileAssetMetadataEntry}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FileAssetMetadataEntry build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FileAssetMetadataEntry}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FileAssetMetadataEntry {
        private final java.lang.String artifactHashParameter;
        private final java.lang.String id;
        private final java.lang.String ossBucketParameter;
        private final java.lang.String ossKeyParameter;
        private final java.lang.String packaging;
        private final java.lang.String path;
        private final java.lang.String sourceHash;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.artifactHashParameter = software.amazon.jsii.Kernel.get(this, "artifactHashParameter", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ossBucketParameter = software.amazon.jsii.Kernel.get(this, "ossBucketParameter", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ossKeyParameter = software.amazon.jsii.Kernel.get(this, "ossKeyParameter", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.packaging = software.amazon.jsii.Kernel.get(this, "packaging", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceHash = software.amazon.jsii.Kernel.get(this, "sourceHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.artifactHashParameter = java.util.Objects.requireNonNull(builder.artifactHashParameter, "artifactHashParameter is required");
            this.id = java.util.Objects.requireNonNull(builder.id, "id is required");
            this.ossBucketParameter = java.util.Objects.requireNonNull(builder.ossBucketParameter, "ossBucketParameter is required");
            this.ossKeyParameter = java.util.Objects.requireNonNull(builder.ossKeyParameter, "ossKeyParameter is required");
            this.packaging = java.util.Objects.requireNonNull(builder.packaging, "packaging is required");
            this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
            this.sourceHash = java.util.Objects.requireNonNull(builder.sourceHash, "sourceHash is required");
        }

        @Override
        public final java.lang.String getArtifactHashParameter() {
            return this.artifactHashParameter;
        }

        @Override
        public final java.lang.String getId() {
            return this.id;
        }

        @Override
        public final java.lang.String getOssBucketParameter() {
            return this.ossBucketParameter;
        }

        @Override
        public final java.lang.String getOssKeyParameter() {
            return this.ossKeyParameter;
        }

        @Override
        public final java.lang.String getPackaging() {
            return this.packaging;
        }

        @Override
        public final java.lang.String getPath() {
            return this.path;
        }

        @Override
        public final java.lang.String getSourceHash() {
            return this.sourceHash;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("artifactHashParameter", om.valueToTree(this.getArtifactHashParameter()));
            data.set("id", om.valueToTree(this.getId()));
            data.set("ossBucketParameter", om.valueToTree(this.getOssBucketParameter()));
            data.set("ossKeyParameter", om.valueToTree(this.getOssKeyParameter()));
            data.set("packaging", om.valueToTree(this.getPackaging()));
            data.set("path", om.valueToTree(this.getPath()));
            data.set("sourceHash", om.valueToTree(this.getSourceHash()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.FileAssetMetadataEntry"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FileAssetMetadataEntry.Jsii$Proxy that = (FileAssetMetadataEntry.Jsii$Proxy) o;

            if (!artifactHashParameter.equals(that.artifactHashParameter)) return false;
            if (!id.equals(that.id)) return false;
            if (!ossBucketParameter.equals(that.ossBucketParameter)) return false;
            if (!ossKeyParameter.equals(that.ossKeyParameter)) return false;
            if (!packaging.equals(that.packaging)) return false;
            if (!path.equals(that.path)) return false;
            return this.sourceHash.equals(that.sourceHash);
        }

        @Override
        public final int hashCode() {
            int result = this.artifactHashParameter.hashCode();
            result = 31 * result + (this.id.hashCode());
            result = 31 * result + (this.ossBucketParameter.hashCode());
            result = 31 * result + (this.ossKeyParameter.hashCode());
            result = 31 * result + (this.packaging.hashCode());
            result = 31 * result + (this.path.hashCode());
            result = 31 * result + (this.sourceHash.hashCode());
            return result;
        }
    }
}
