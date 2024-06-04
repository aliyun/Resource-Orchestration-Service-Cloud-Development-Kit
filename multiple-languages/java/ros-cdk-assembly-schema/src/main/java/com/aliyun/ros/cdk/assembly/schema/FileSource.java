package com.aliyun.ros.cdk.assembly.schema;

/**
 * Describe the source of a file asset.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.106Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.FileSource")
@software.amazon.jsii.Jsii.Proxy(FileSource.Jsii$Proxy.class)
public interface FileSource extends software.amazon.jsii.JsiiSerializable {

    /**
     * External command which will produce the file asset to upload.
     * <p>
     * Default: - Exactly one of `executable` and `path` is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExecutable() {
        return null;
    }

    /**
     * Packaging method.
     * <p>
     * Only allowed when <code>path</code> is specified.
     * <p>
     * Default: FILE
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.assembly.schema.FileAssetPackaging getPackaging() {
        return null;
    }

    /**
     * The filesystem object to upload.
     * <p>
     * This path is relative to the asset manifest location.
     * <p>
     * Default: - Exactly one of `executable` and `path` is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPath() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FileSource}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FileSource}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FileSource> {
        java.util.List<java.lang.String> executable;
        com.aliyun.ros.cdk.assembly.schema.FileAssetPackaging packaging;
        java.lang.String path;

        /**
         * Sets the value of {@link FileSource#getExecutable}
         * @param executable External command which will produce the file asset to upload.
         * @return {@code this}
         */
        public Builder executable(java.util.List<java.lang.String> executable) {
            this.executable = executable;
            return this;
        }

        /**
         * Sets the value of {@link FileSource#getPackaging}
         * @param packaging Packaging method.
         *                  Only allowed when <code>path</code> is specified.
         * @return {@code this}
         */
        public Builder packaging(com.aliyun.ros.cdk.assembly.schema.FileAssetPackaging packaging) {
            this.packaging = packaging;
            return this;
        }

        /**
         * Sets the value of {@link FileSource#getPath}
         * @param path The filesystem object to upload.
         *             This path is relative to the asset manifest location.
         * @return {@code this}
         */
        public Builder path(java.lang.String path) {
            this.path = path;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FileSource}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FileSource build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FileSource}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FileSource {
        private final java.util.List<java.lang.String> executable;
        private final com.aliyun.ros.cdk.assembly.schema.FileAssetPackaging packaging;
        private final java.lang.String path;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.executable = software.amazon.jsii.Kernel.get(this, "executable", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.packaging = software.amazon.jsii.Kernel.get(this, "packaging", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.FileAssetPackaging.class));
            this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.executable = builder.executable;
            this.packaging = builder.packaging;
            this.path = builder.path;
        }

        @Override
        public final java.util.List<java.lang.String> getExecutable() {
            return this.executable;
        }

        @Override
        public final com.aliyun.ros.cdk.assembly.schema.FileAssetPackaging getPackaging() {
            return this.packaging;
        }

        @Override
        public final java.lang.String getPath() {
            return this.path;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getExecutable() != null) {
                data.set("executable", om.valueToTree(this.getExecutable()));
            }
            if (this.getPackaging() != null) {
                data.set("packaging", om.valueToTree(this.getPackaging()));
            }
            if (this.getPath() != null) {
                data.set("path", om.valueToTree(this.getPath()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.FileSource"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FileSource.Jsii$Proxy that = (FileSource.Jsii$Proxy) o;

            if (this.executable != null ? !this.executable.equals(that.executable) : that.executable != null) return false;
            if (this.packaging != null ? !this.packaging.equals(that.packaging) : that.packaging != null) return false;
            return this.path != null ? this.path.equals(that.path) : that.path == null;
        }

        @Override
        public final int hashCode() {
            int result = this.executable != null ? this.executable.hashCode() : 0;
            result = 31 * result + (this.packaging != null ? this.packaging.hashCode() : 0);
            result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
            return result;
        }
    }
}
