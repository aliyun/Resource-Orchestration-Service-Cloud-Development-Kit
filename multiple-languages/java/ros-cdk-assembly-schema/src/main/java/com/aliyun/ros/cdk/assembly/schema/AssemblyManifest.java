package com.aliyun.ros.cdk.assembly.schema;

/**
 * A manifest which describes the cloud assembly.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:14.158Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.AssemblyManifest")
@software.amazon.jsii.Jsii.Proxy(AssemblyManifest.Jsii$Proxy.class)
public interface AssemblyManifest extends software.amazon.jsii.JsiiSerializable {

    /**
     * Protocol version.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVersion();

    /**
     * The set of artifacts in this assembly.
     * <p>
     * Default: - no artifacts.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.ArtifactManifest> getArtifacts() {
        return null;
    }

    /**
     * Missing context information.
     * <p>
     * If this field has values, it means that the
     * cloud assembly is not complete and should not be deployed.
     * <p>
     * Default: - no missing context.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.assembly.schema.MissingContext> getMissing() {
        return null;
    }

    /**
     * Runtime information.
     * <p>
     * Default: - no info.
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.assembly.schema.RuntimeInfo getRuntime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AssemblyManifest}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AssemblyManifest}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AssemblyManifest> {
        java.lang.String version;
        java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.ArtifactManifest> artifacts;
        java.util.List<com.aliyun.ros.cdk.assembly.schema.MissingContext> missing;
        com.aliyun.ros.cdk.assembly.schema.RuntimeInfo runtime;

        /**
         * Sets the value of {@link AssemblyManifest#getVersion}
         * @param version Protocol version. This parameter is required.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link AssemblyManifest#getArtifacts}
         * @param artifacts The set of artifacts in this assembly.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder artifacts(java.util.Map<java.lang.String, ? extends com.aliyun.ros.cdk.assembly.schema.ArtifactManifest> artifacts) {
            this.artifacts = (java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.ArtifactManifest>)artifacts;
            return this;
        }

        /**
         * Sets the value of {@link AssemblyManifest#getMissing}
         * @param missing Missing context information.
         *                If this field has values, it means that the
         *                cloud assembly is not complete and should not be deployed.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder missing(java.util.List<? extends com.aliyun.ros.cdk.assembly.schema.MissingContext> missing) {
            this.missing = (java.util.List<com.aliyun.ros.cdk.assembly.schema.MissingContext>)missing;
            return this;
        }

        /**
         * Sets the value of {@link AssemblyManifest#getRuntime}
         * @param runtime Runtime information.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.assembly.schema.RuntimeInfo runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AssemblyManifest}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AssemblyManifest build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AssemblyManifest}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssemblyManifest {
        private final java.lang.String version;
        private final java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.ArtifactManifest> artifacts;
        private final java.util.List<com.aliyun.ros.cdk.assembly.schema.MissingContext> missing;
        private final com.aliyun.ros.cdk.assembly.schema.RuntimeInfo runtime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.artifacts = software.amazon.jsii.Kernel.get(this, "artifacts", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.ArtifactManifest.class)));
            this.missing = software.amazon.jsii.Kernel.get(this, "missing", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.MissingContext.class)));
            this.runtime = software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.RuntimeInfo.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            this.artifacts = (java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.ArtifactManifest>)builder.artifacts;
            this.missing = (java.util.List<com.aliyun.ros.cdk.assembly.schema.MissingContext>)builder.missing;
            this.runtime = builder.runtime;
        }

        @Override
        public final java.lang.String getVersion() {
            return this.version;
        }

        @Override
        public final java.util.Map<java.lang.String, com.aliyun.ros.cdk.assembly.schema.ArtifactManifest> getArtifacts() {
            return this.artifacts;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.assembly.schema.MissingContext> getMissing() {
            return this.missing;
        }

        @Override
        public final com.aliyun.ros.cdk.assembly.schema.RuntimeInfo getRuntime() {
            return this.runtime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("version", om.valueToTree(this.getVersion()));
            if (this.getArtifacts() != null) {
                data.set("artifacts", om.valueToTree(this.getArtifacts()));
            }
            if (this.getMissing() != null) {
                data.set("missing", om.valueToTree(this.getMissing()));
            }
            if (this.getRuntime() != null) {
                data.set("runtime", om.valueToTree(this.getRuntime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.AssemblyManifest"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AssemblyManifest.Jsii$Proxy that = (AssemblyManifest.Jsii$Proxy) o;

            if (!version.equals(that.version)) return false;
            if (this.artifacts != null ? !this.artifacts.equals(that.artifacts) : that.artifacts != null) return false;
            if (this.missing != null ? !this.missing.equals(that.missing) : that.missing != null) return false;
            return this.runtime != null ? this.runtime.equals(that.runtime) : that.runtime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.version.hashCode();
            result = 31 * result + (this.artifacts != null ? this.artifacts.hashCode() : 0);
            result = 31 * result + (this.missing != null ? this.missing.hashCode() : 0);
            result = 31 * result + (this.runtime != null ? this.runtime.hashCode() : 0);
            return result;
        }
    }
}
