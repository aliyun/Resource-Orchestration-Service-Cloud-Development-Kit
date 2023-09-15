package com.aliyun.ros.cdk.assembly.schema;

/**
 * A manifest for a single artifact within the cloud assembly.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:22.918Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.ArtifactManifest")
@software.amazon.jsii.Jsii.Proxy(ArtifactManifest.Jsii$Proxy.class)
public interface ArtifactManifest extends software.amazon.jsii.JsiiSerializable {

    /**
     * The type of artifact.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ArtifactType getType();

    /**
     * IDs of artifacts that must be deployed before this artifact.
     * <p>
     * Default: - no dependencies.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDependencies() {
        return null;
    }

    /**
     * Associated metadata.
     * <p>
     * Default: - no metadata.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.util.List<com.aliyun.ros.cdk.assembly.schema.MetadataEntry>> getMetadata() {
        return null;
    }

    /**
     * The set of properties for this artifact (depends on type).
     * <p>
     * Default: - no properties.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProperties() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ArtifactManifest}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ArtifactManifest}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ArtifactManifest> {
        com.aliyun.ros.cdk.assembly.schema.ArtifactType type;
        java.util.List<java.lang.String> dependencies;
        java.util.Map<java.lang.String, java.util.List<com.aliyun.ros.cdk.assembly.schema.MetadataEntry>> metadata;
        java.lang.Object properties;

        /**
         * Sets the value of {@link ArtifactManifest#getType}
         * @param type The type of artifact. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.assembly.schema.ArtifactType type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ArtifactManifest#getDependencies}
         * @param dependencies IDs of artifacts that must be deployed before this artifact.
         * @return {@code this}
         */
        public Builder dependencies(java.util.List<java.lang.String> dependencies) {
            this.dependencies = dependencies;
            return this;
        }

        /**
         * Sets the value of {@link ArtifactManifest#getMetadata}
         * @param metadata Associated metadata.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder metadata(java.util.Map<java.lang.String, ? extends java.util.List<? extends com.aliyun.ros.cdk.assembly.schema.MetadataEntry>> metadata) {
            this.metadata = (java.util.Map<java.lang.String, java.util.List<com.aliyun.ros.cdk.assembly.schema.MetadataEntry>>)metadata;
            return this;
        }

        /**
         * Sets the value of {@link ArtifactManifest#getProperties}
         * @param properties The set of properties for this artifact (depends on type).
         * @return {@code this}
         */
        public Builder properties(com.aliyun.ros.cdk.assembly.schema.AliyunRosStackProperties properties) {
            this.properties = properties;
            return this;
        }

        /**
         * Sets the value of {@link ArtifactManifest#getProperties}
         * @param properties The set of properties for this artifact (depends on type).
         * @return {@code this}
         */
        public Builder properties(com.aliyun.ros.cdk.assembly.schema.TreeArtifactProperties properties) {
            this.properties = properties;
            return this;
        }

        /**
         * Sets the value of {@link ArtifactManifest#getProperties}
         * @param properties The set of properties for this artifact (depends on type).
         * @return {@code this}
         */
        public Builder properties(com.aliyun.ros.cdk.assembly.schema.NestedCloudAssemblyProperties properties) {
            this.properties = properties;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ArtifactManifest}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ArtifactManifest build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ArtifactManifest}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ArtifactManifest {
        private final com.aliyun.ros.cdk.assembly.schema.ArtifactType type;
        private final java.util.List<java.lang.String> dependencies;
        private final java.util.Map<java.lang.String, java.util.List<com.aliyun.ros.cdk.assembly.schema.MetadataEntry>> metadata;
        private final java.lang.Object properties;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.ArtifactType.class));
            this.dependencies = software.amazon.jsii.Kernel.get(this, "dependencies", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.metadata = software.amazon.jsii.Kernel.get(this, "metadata", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.MetadataEntry.class))));
            this.properties = software.amazon.jsii.Kernel.get(this, "properties", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.dependencies = builder.dependencies;
            this.metadata = (java.util.Map<java.lang.String, java.util.List<com.aliyun.ros.cdk.assembly.schema.MetadataEntry>>)builder.metadata;
            this.properties = builder.properties;
        }

        @Override
        public final com.aliyun.ros.cdk.assembly.schema.ArtifactType getType() {
            return this.type;
        }

        @Override
        public final java.util.List<java.lang.String> getDependencies() {
            return this.dependencies;
        }

        @Override
        public final java.util.Map<java.lang.String, java.util.List<com.aliyun.ros.cdk.assembly.schema.MetadataEntry>> getMetadata() {
            return this.metadata;
        }

        @Override
        public final java.lang.Object getProperties() {
            return this.properties;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("type", om.valueToTree(this.getType()));
            if (this.getDependencies() != null) {
                data.set("dependencies", om.valueToTree(this.getDependencies()));
            }
            if (this.getMetadata() != null) {
                data.set("metadata", om.valueToTree(this.getMetadata()));
            }
            if (this.getProperties() != null) {
                data.set("properties", om.valueToTree(this.getProperties()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.ArtifactManifest"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ArtifactManifest.Jsii$Proxy that = (ArtifactManifest.Jsii$Proxy) o;

            if (!type.equals(that.type)) return false;
            if (this.dependencies != null ? !this.dependencies.equals(that.dependencies) : that.dependencies != null) return false;
            if (this.metadata != null ? !this.metadata.equals(that.metadata) : that.metadata != null) return false;
            return this.properties != null ? this.properties.equals(that.properties) : that.properties == null;
        }

        @Override
        public final int hashCode() {
            int result = this.type.hashCode();
            result = 31 * result + (this.dependencies != null ? this.dependencies.hashCode() : 0);
            result = 31 * result + (this.metadata != null ? this.metadata.hashCode() : 0);
            result = 31 * result + (this.properties != null ? this.properties.hashCode() : 0);
            return result;
        }
    }
}
