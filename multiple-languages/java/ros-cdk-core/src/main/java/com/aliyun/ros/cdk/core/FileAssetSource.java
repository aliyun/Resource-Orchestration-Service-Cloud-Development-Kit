package com.aliyun.ros.cdk.core;

/**
 * Represents the source for a file asset.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:26.055Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FileAssetSource")
@software.amazon.jsii.Jsii.Proxy(FileAssetSource.Jsii$Proxy.class)
public interface FileAssetSource extends software.amazon.jsii.JsiiSerializable {

    /**
     * A hash on the content source.
     * <p>
     * This hash is used to uniquely identify this
     * asset throughout the system. If this value doesn't change, the asset will
     * not be rebuilt or republished.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceHash();

    /**
     * Whether or not the asset needs to exist beyond deployment time;
     * <p>
     * i.e.
     * are copied over to a different location and not needed afterwards.
     * Setting this property to true has an impact on the lifecycle of the asset,
     * because we will assume that it is safe to delete after the ROS
     * deployment succeeds.
     * <p>
     * For example, FC Function assets are copied over to FC during
     * deployment. Therefore, it is not necessary to store the asset in OSS bucket, so
     * we consider those deployTime assets.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDeployTime() {
        return null;
    }

    /**
     * An external command that will produce the packaged asset.
     * <p>
     * The command should produce the location of a ZIP file on <code>stdout</code>.
     * <p>
     * Default: - Exactly one of `fileName` and `executable` is required
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExecutable() {
        return null;
    }

    /**
     * The path, relative to the root of the cloud assembly, in which this asset source resides.
     * <p>
     * This can be a path to a file or a directory, depending on the
     * packaging type.
     * <p>
     * Default: - Exactly one of `fileName` and `executable` is required
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFileName() {
        return null;
    }

    /**
     * Which type of packaging to perform.
     * <p>
     * Default: - Required if `fileName` is specified.
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.FileAssetPackaging getPackaging() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FileAssetSource}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FileAssetSource}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FileAssetSource> {
        java.lang.String sourceHash;
        java.lang.Boolean deployTime;
        java.util.List<java.lang.String> executable;
        java.lang.String fileName;
        com.aliyun.ros.cdk.core.FileAssetPackaging packaging;

        /**
         * Sets the value of {@link FileAssetSource#getSourceHash}
         * @param sourceHash A hash on the content source. This parameter is required.
         *                   This hash is used to uniquely identify this
         *                   asset throughout the system. If this value doesn't change, the asset will
         *                   not be rebuilt or republished.
         * @return {@code this}
         */
        public Builder sourceHash(java.lang.String sourceHash) {
            this.sourceHash = sourceHash;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetSource#getDeployTime}
         * @param deployTime Whether or not the asset needs to exist beyond deployment time;.
         *                   i.e.
         *                   are copied over to a different location and not needed afterwards.
         *                   Setting this property to true has an impact on the lifecycle of the asset,
         *                   because we will assume that it is safe to delete after the ROS
         *                   deployment succeeds.
         *                   <p>
         *                   For example, FC Function assets are copied over to FC during
         *                   deployment. Therefore, it is not necessary to store the asset in OSS bucket, so
         *                   we consider those deployTime assets.
         * @return {@code this}
         */
        public Builder deployTime(java.lang.Boolean deployTime) {
            this.deployTime = deployTime;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetSource#getExecutable}
         * @param executable An external command that will produce the packaged asset.
         *                   The command should produce the location of a ZIP file on <code>stdout</code>.
         * @return {@code this}
         */
        public Builder executable(java.util.List<java.lang.String> executable) {
            this.executable = executable;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetSource#getFileName}
         * @param fileName The path, relative to the root of the cloud assembly, in which this asset source resides.
         *                 This can be a path to a file or a directory, depending on the
         *                 packaging type.
         * @return {@code this}
         */
        public Builder fileName(java.lang.String fileName) {
            this.fileName = fileName;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetSource#getPackaging}
         * @param packaging Which type of packaging to perform.
         * @return {@code this}
         */
        public Builder packaging(com.aliyun.ros.cdk.core.FileAssetPackaging packaging) {
            this.packaging = packaging;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FileAssetSource}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FileAssetSource build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FileAssetSource}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FileAssetSource {
        private final java.lang.String sourceHash;
        private final java.lang.Boolean deployTime;
        private final java.util.List<java.lang.String> executable;
        private final java.lang.String fileName;
        private final com.aliyun.ros.cdk.core.FileAssetPackaging packaging;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.sourceHash = software.amazon.jsii.Kernel.get(this, "sourceHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.deployTime = software.amazon.jsii.Kernel.get(this, "deployTime", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.executable = software.amazon.jsii.Kernel.get(this, "executable", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.fileName = software.amazon.jsii.Kernel.get(this, "fileName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.packaging = software.amazon.jsii.Kernel.get(this, "packaging", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.FileAssetPackaging.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.sourceHash = java.util.Objects.requireNonNull(builder.sourceHash, "sourceHash is required");
            this.deployTime = builder.deployTime;
            this.executable = builder.executable;
            this.fileName = builder.fileName;
            this.packaging = builder.packaging;
        }

        @Override
        public final java.lang.String getSourceHash() {
            return this.sourceHash;
        }

        @Override
        public final java.lang.Boolean getDeployTime() {
            return this.deployTime;
        }

        @Override
        public final java.util.List<java.lang.String> getExecutable() {
            return this.executable;
        }

        @Override
        public final java.lang.String getFileName() {
            return this.fileName;
        }

        @Override
        public final com.aliyun.ros.cdk.core.FileAssetPackaging getPackaging() {
            return this.packaging;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("sourceHash", om.valueToTree(this.getSourceHash()));
            if (this.getDeployTime() != null) {
                data.set("deployTime", om.valueToTree(this.getDeployTime()));
            }
            if (this.getExecutable() != null) {
                data.set("executable", om.valueToTree(this.getExecutable()));
            }
            if (this.getFileName() != null) {
                data.set("fileName", om.valueToTree(this.getFileName()));
            }
            if (this.getPackaging() != null) {
                data.set("packaging", om.valueToTree(this.getPackaging()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.FileAssetSource"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FileAssetSource.Jsii$Proxy that = (FileAssetSource.Jsii$Proxy) o;

            if (!sourceHash.equals(that.sourceHash)) return false;
            if (this.deployTime != null ? !this.deployTime.equals(that.deployTime) : that.deployTime != null) return false;
            if (this.executable != null ? !this.executable.equals(that.executable) : that.executable != null) return false;
            if (this.fileName != null ? !this.fileName.equals(that.fileName) : that.fileName != null) return false;
            return this.packaging != null ? this.packaging.equals(that.packaging) : that.packaging == null;
        }

        @Override
        public final int hashCode() {
            int result = this.sourceHash.hashCode();
            result = 31 * result + (this.deployTime != null ? this.deployTime.hashCode() : 0);
            result = 31 * result + (this.executable != null ? this.executable.hashCode() : 0);
            result = 31 * result + (this.fileName != null ? this.fileName.hashCode() : 0);
            result = 31 * result + (this.packaging != null ? this.packaging.hashCode() : 0);
            return result;
        }
    }
}
