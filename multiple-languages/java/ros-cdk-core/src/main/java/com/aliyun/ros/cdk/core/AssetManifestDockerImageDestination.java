package com.aliyun.ros.cdk.core;

/**
 * The destination for a docker image asset, when it is given to the AssetManifestBuilder.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:42.886Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.AssetManifestDockerImageDestination")
@software.amazon.jsii.Jsii.Proxy(AssetManifestDockerImageDestination.Jsii$Proxy.class)
public interface AssetManifestDockerImageDestination extends software.amazon.jsii.JsiiSerializable {

    /**
     * Repository name where the docker image asset should be written.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRepositoryName();

    /**
     * Prefix to add to the asset hash to make the Docker image tag.
     * <p>
     * Default: ''
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDockerTagPrefix() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AssetManifestDockerImageDestination}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AssetManifestDockerImageDestination}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AssetManifestDockerImageDestination> {
        java.lang.String repositoryName;
        java.lang.String dockerTagPrefix;

        /**
         * Sets the value of {@link AssetManifestDockerImageDestination#getRepositoryName}
         * @param repositoryName Repository name where the docker image asset should be written. This parameter is required.
         * @return {@code this}
         */
        public Builder repositoryName(java.lang.String repositoryName) {
            this.repositoryName = repositoryName;
            return this;
        }

        /**
         * Sets the value of {@link AssetManifestDockerImageDestination#getDockerTagPrefix}
         * @param dockerTagPrefix Prefix to add to the asset hash to make the Docker image tag.
         * @return {@code this}
         */
        public Builder dockerTagPrefix(java.lang.String dockerTagPrefix) {
            this.dockerTagPrefix = dockerTagPrefix;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AssetManifestDockerImageDestination}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AssetManifestDockerImageDestination build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AssetManifestDockerImageDestination}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AssetManifestDockerImageDestination {
        private final java.lang.String repositoryName;
        private final java.lang.String dockerTagPrefix;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.repositoryName = software.amazon.jsii.Kernel.get(this, "repositoryName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerTagPrefix = software.amazon.jsii.Kernel.get(this, "dockerTagPrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.repositoryName = java.util.Objects.requireNonNull(builder.repositoryName, "repositoryName is required");
            this.dockerTagPrefix = builder.dockerTagPrefix;
        }

        @Override
        public final java.lang.String getRepositoryName() {
            return this.repositoryName;
        }

        @Override
        public final java.lang.String getDockerTagPrefix() {
            return this.dockerTagPrefix;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("repositoryName", om.valueToTree(this.getRepositoryName()));
            if (this.getDockerTagPrefix() != null) {
                data.set("dockerTagPrefix", om.valueToTree(this.getDockerTagPrefix()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.AssetManifestDockerImageDestination"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AssetManifestDockerImageDestination.Jsii$Proxy that = (AssetManifestDockerImageDestination.Jsii$Proxy) o;

            if (!repositoryName.equals(that.repositoryName)) return false;
            return this.dockerTagPrefix != null ? this.dockerTagPrefix.equals(that.dockerTagPrefix) : that.dockerTagPrefix == null;
        }

        @Override
        public final int hashCode() {
            int result = this.repositoryName.hashCode();
            result = 31 * result + (this.dockerTagPrefix != null ? this.dockerTagPrefix.hashCode() : 0);
            return result;
        }
    }
}
