package com.aliyun.ros.cdk.assembly.schema;

/**
 * Properties for how to produce a Docker image from a source.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.103Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.DockerImageSource")
@software.amazon.jsii.Jsii.Proxy(DockerImageSource.Jsii$Proxy.class)
public interface DockerImageSource extends software.amazon.jsii.JsiiSerializable {

    /**
     * Disable the cache and pass <code>--no-cache</code> to the <code>docker build</code> command.
     * <p>
     * Default: - cache is used
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getCacheDisabled() {
        return null;
    }

    /**
     * Cache from options to pass to the <code>docker build</code> command.
     * <p>
     * Default: - no cache from options are passed to the build command
     * <p>
     * @see <a href="https://docs.docker.com/build/cache/backends/">https://docs.docker.com/build/cache/backends/</a>
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.assembly.schema.DockerCacheOption> getCacheFrom() {
        return null;
    }

    /**
     * Cache to options to pass to the <code>docker build</code> command.
     * <p>
     * Default: - no cache to options are passed to the build command
     * <p>
     * @see <a href="https://docs.docker.com/build/cache/backends/">https://docs.docker.com/build/cache/backends/</a>
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.assembly.schema.DockerCacheOption getCacheTo() {
        return null;
    }

    /**
     * The directory containing the Docker image build instructions.
     * <p>
     * This path is relative to the asset manifest location.
     * <p>
     * Default: - Exactly one of `directory` and `executable` is required
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDirectory() {
        return null;
    }

    /**
     * Additional build arguments.
     * <p>
     * Only allowed when <code>directory</code> is set.
     * <p>
     * Default: - No additional build arguments
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDockerBuildArgs() {
        return null;
    }

    /**
     * Additional build secrets.
     * <p>
     * Only allowed when <code>directory</code> is set.
     * <p>
     * Default: - No additional build secrets
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDockerBuildSecrets() {
        return null;
    }

    /**
     * SSH agent socket or keys.
     * <p>
     * Requires building with docker buildkit.
     * <p>
     * Default: - No ssh flag is set
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDockerBuildSsh() {
        return null;
    }

    /**
     * Target build stage in a Dockerfile with multiple build stages.
     * <p>
     * Only allowed when <code>directory</code> is set.
     * <p>
     * Default: - The last stage in the Dockerfile
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDockerBuildTarget() {
        return null;
    }

    /**
     * The name of the file with build instructions.
     * <p>
     * Only allowed when <code>directory</code> is set.
     * <p>
     * Default: "Dockerfile"
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDockerFile() {
        return null;
    }

    /**
     * Outputs.
     * <p>
     * Default: - no outputs are passed to the build command (default outputs are used)
     * <p>
     * @see <a href="https://docs.docker.com/engine/reference/commandline/build/#custom-build-outputs">https://docs.docker.com/engine/reference/commandline/build/#custom-build-outputs</a>
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDockerOutputs() {
        return null;
    }

    /**
     * A command-line executable that returns the name of a local Docker image on stdout after being run.
     * <p>
     * Default: - Exactly one of `directory` and `executable` is required
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExecutable() {
        return null;
    }

    /**
     * Networking mode for the RUN commands during build. <em>Requires Docker Engine API v1.25+</em>.
     * <p>
     * Specify this property to build images on a specific networking mode.
     * <p>
     * Default: - no networking mode specified
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNetworkMode() {
        return null;
    }

    /**
     * Platform to build for. <em>Requires Docker Buildx</em>.
     * <p>
     * Specify this property to build images on a specific platform/architecture.
     * <p>
     * Default: - current machine platform
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPlatform() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DockerImageSource}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DockerImageSource}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DockerImageSource> {
        java.lang.Boolean cacheDisabled;
        java.util.List<com.aliyun.ros.cdk.assembly.schema.DockerCacheOption> cacheFrom;
        com.aliyun.ros.cdk.assembly.schema.DockerCacheOption cacheTo;
        java.lang.String directory;
        java.util.Map<java.lang.String, java.lang.String> dockerBuildArgs;
        java.util.Map<java.lang.String, java.lang.String> dockerBuildSecrets;
        java.lang.String dockerBuildSsh;
        java.lang.String dockerBuildTarget;
        java.lang.String dockerFile;
        java.util.List<java.lang.String> dockerOutputs;
        java.util.List<java.lang.String> executable;
        java.lang.String networkMode;
        java.lang.String platform;

        /**
         * Sets the value of {@link DockerImageSource#getCacheDisabled}
         * @param cacheDisabled Disable the cache and pass <code>--no-cache</code> to the <code>docker build</code> command.
         * @return {@code this}
         */
        public Builder cacheDisabled(java.lang.Boolean cacheDisabled) {
            this.cacheDisabled = cacheDisabled;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getCacheFrom}
         * @param cacheFrom Cache from options to pass to the <code>docker build</code> command.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder cacheFrom(java.util.List<? extends com.aliyun.ros.cdk.assembly.schema.DockerCacheOption> cacheFrom) {
            this.cacheFrom = (java.util.List<com.aliyun.ros.cdk.assembly.schema.DockerCacheOption>)cacheFrom;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getCacheTo}
         * @param cacheTo Cache to options to pass to the <code>docker build</code> command.
         * @return {@code this}
         */
        public Builder cacheTo(com.aliyun.ros.cdk.assembly.schema.DockerCacheOption cacheTo) {
            this.cacheTo = cacheTo;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getDirectory}
         * @param directory The directory containing the Docker image build instructions.
         *                  This path is relative to the asset manifest location.
         * @return {@code this}
         */
        public Builder directory(java.lang.String directory) {
            this.directory = directory;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getDockerBuildArgs}
         * @param dockerBuildArgs Additional build arguments.
         *                        Only allowed when <code>directory</code> is set.
         * @return {@code this}
         */
        public Builder dockerBuildArgs(java.util.Map<java.lang.String, java.lang.String> dockerBuildArgs) {
            this.dockerBuildArgs = dockerBuildArgs;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getDockerBuildSecrets}
         * @param dockerBuildSecrets Additional build secrets.
         *                           Only allowed when <code>directory</code> is set.
         * @return {@code this}
         */
        public Builder dockerBuildSecrets(java.util.Map<java.lang.String, java.lang.String> dockerBuildSecrets) {
            this.dockerBuildSecrets = dockerBuildSecrets;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getDockerBuildSsh}
         * @param dockerBuildSsh SSH agent socket or keys.
         *                       Requires building with docker buildkit.
         * @return {@code this}
         */
        public Builder dockerBuildSsh(java.lang.String dockerBuildSsh) {
            this.dockerBuildSsh = dockerBuildSsh;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getDockerBuildTarget}
         * @param dockerBuildTarget Target build stage in a Dockerfile with multiple build stages.
         *                          Only allowed when <code>directory</code> is set.
         * @return {@code this}
         */
        public Builder dockerBuildTarget(java.lang.String dockerBuildTarget) {
            this.dockerBuildTarget = dockerBuildTarget;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getDockerFile}
         * @param dockerFile The name of the file with build instructions.
         *                   Only allowed when <code>directory</code> is set.
         * @return {@code this}
         */
        public Builder dockerFile(java.lang.String dockerFile) {
            this.dockerFile = dockerFile;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getDockerOutputs}
         * @param dockerOutputs Outputs.
         * @return {@code this}
         */
        public Builder dockerOutputs(java.util.List<java.lang.String> dockerOutputs) {
            this.dockerOutputs = dockerOutputs;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getExecutable}
         * @param executable A command-line executable that returns the name of a local Docker image on stdout after being run.
         * @return {@code this}
         */
        public Builder executable(java.util.List<java.lang.String> executable) {
            this.executable = executable;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getNetworkMode}
         * @param networkMode Networking mode for the RUN commands during build. <em>Requires Docker Engine API v1.25+</em>.
         *                    Specify this property to build images on a specific networking mode.
         * @return {@code this}
         */
        public Builder networkMode(java.lang.String networkMode) {
            this.networkMode = networkMode;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageSource#getPlatform}
         * @param platform Platform to build for. <em>Requires Docker Buildx</em>.
         *                 Specify this property to build images on a specific platform/architecture.
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DockerImageSource}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DockerImageSource build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DockerImageSource}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DockerImageSource {
        private final java.lang.Boolean cacheDisabled;
        private final java.util.List<com.aliyun.ros.cdk.assembly.schema.DockerCacheOption> cacheFrom;
        private final com.aliyun.ros.cdk.assembly.schema.DockerCacheOption cacheTo;
        private final java.lang.String directory;
        private final java.util.Map<java.lang.String, java.lang.String> dockerBuildArgs;
        private final java.util.Map<java.lang.String, java.lang.String> dockerBuildSecrets;
        private final java.lang.String dockerBuildSsh;
        private final java.lang.String dockerBuildTarget;
        private final java.lang.String dockerFile;
        private final java.util.List<java.lang.String> dockerOutputs;
        private final java.util.List<java.lang.String> executable;
        private final java.lang.String networkMode;
        private final java.lang.String platform;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cacheDisabled = software.amazon.jsii.Kernel.get(this, "cacheDisabled", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.cacheFrom = software.amazon.jsii.Kernel.get(this, "cacheFrom", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.DockerCacheOption.class)));
            this.cacheTo = software.amazon.jsii.Kernel.get(this, "cacheTo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.DockerCacheOption.class));
            this.directory = software.amazon.jsii.Kernel.get(this, "directory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerBuildArgs = software.amazon.jsii.Kernel.get(this, "dockerBuildArgs", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dockerBuildSecrets = software.amazon.jsii.Kernel.get(this, "dockerBuildSecrets", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dockerBuildSsh = software.amazon.jsii.Kernel.get(this, "dockerBuildSsh", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerBuildTarget = software.amazon.jsii.Kernel.get(this, "dockerBuildTarget", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerFile = software.amazon.jsii.Kernel.get(this, "dockerFile", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerOutputs = software.amazon.jsii.Kernel.get(this, "dockerOutputs", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.executable = software.amazon.jsii.Kernel.get(this, "executable", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.networkMode = software.amazon.jsii.Kernel.get(this, "networkMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cacheDisabled = builder.cacheDisabled;
            this.cacheFrom = (java.util.List<com.aliyun.ros.cdk.assembly.schema.DockerCacheOption>)builder.cacheFrom;
            this.cacheTo = builder.cacheTo;
            this.directory = builder.directory;
            this.dockerBuildArgs = builder.dockerBuildArgs;
            this.dockerBuildSecrets = builder.dockerBuildSecrets;
            this.dockerBuildSsh = builder.dockerBuildSsh;
            this.dockerBuildTarget = builder.dockerBuildTarget;
            this.dockerFile = builder.dockerFile;
            this.dockerOutputs = builder.dockerOutputs;
            this.executable = builder.executable;
            this.networkMode = builder.networkMode;
            this.platform = builder.platform;
        }

        @Override
        public final java.lang.Boolean getCacheDisabled() {
            return this.cacheDisabled;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.assembly.schema.DockerCacheOption> getCacheFrom() {
            return this.cacheFrom;
        }

        @Override
        public final com.aliyun.ros.cdk.assembly.schema.DockerCacheOption getCacheTo() {
            return this.cacheTo;
        }

        @Override
        public final java.lang.String getDirectory() {
            return this.directory;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDockerBuildArgs() {
            return this.dockerBuildArgs;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDockerBuildSecrets() {
            return this.dockerBuildSecrets;
        }

        @Override
        public final java.lang.String getDockerBuildSsh() {
            return this.dockerBuildSsh;
        }

        @Override
        public final java.lang.String getDockerBuildTarget() {
            return this.dockerBuildTarget;
        }

        @Override
        public final java.lang.String getDockerFile() {
            return this.dockerFile;
        }

        @Override
        public final java.util.List<java.lang.String> getDockerOutputs() {
            return this.dockerOutputs;
        }

        @Override
        public final java.util.List<java.lang.String> getExecutable() {
            return this.executable;
        }

        @Override
        public final java.lang.String getNetworkMode() {
            return this.networkMode;
        }

        @Override
        public final java.lang.String getPlatform() {
            return this.platform;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCacheDisabled() != null) {
                data.set("cacheDisabled", om.valueToTree(this.getCacheDisabled()));
            }
            if (this.getCacheFrom() != null) {
                data.set("cacheFrom", om.valueToTree(this.getCacheFrom()));
            }
            if (this.getCacheTo() != null) {
                data.set("cacheTo", om.valueToTree(this.getCacheTo()));
            }
            if (this.getDirectory() != null) {
                data.set("directory", om.valueToTree(this.getDirectory()));
            }
            if (this.getDockerBuildArgs() != null) {
                data.set("dockerBuildArgs", om.valueToTree(this.getDockerBuildArgs()));
            }
            if (this.getDockerBuildSecrets() != null) {
                data.set("dockerBuildSecrets", om.valueToTree(this.getDockerBuildSecrets()));
            }
            if (this.getDockerBuildSsh() != null) {
                data.set("dockerBuildSsh", om.valueToTree(this.getDockerBuildSsh()));
            }
            if (this.getDockerBuildTarget() != null) {
                data.set("dockerBuildTarget", om.valueToTree(this.getDockerBuildTarget()));
            }
            if (this.getDockerFile() != null) {
                data.set("dockerFile", om.valueToTree(this.getDockerFile()));
            }
            if (this.getDockerOutputs() != null) {
                data.set("dockerOutputs", om.valueToTree(this.getDockerOutputs()));
            }
            if (this.getExecutable() != null) {
                data.set("executable", om.valueToTree(this.getExecutable()));
            }
            if (this.getNetworkMode() != null) {
                data.set("networkMode", om.valueToTree(this.getNetworkMode()));
            }
            if (this.getPlatform() != null) {
                data.set("platform", om.valueToTree(this.getPlatform()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.DockerImageSource"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DockerImageSource.Jsii$Proxy that = (DockerImageSource.Jsii$Proxy) o;

            if (this.cacheDisabled != null ? !this.cacheDisabled.equals(that.cacheDisabled) : that.cacheDisabled != null) return false;
            if (this.cacheFrom != null ? !this.cacheFrom.equals(that.cacheFrom) : that.cacheFrom != null) return false;
            if (this.cacheTo != null ? !this.cacheTo.equals(that.cacheTo) : that.cacheTo != null) return false;
            if (this.directory != null ? !this.directory.equals(that.directory) : that.directory != null) return false;
            if (this.dockerBuildArgs != null ? !this.dockerBuildArgs.equals(that.dockerBuildArgs) : that.dockerBuildArgs != null) return false;
            if (this.dockerBuildSecrets != null ? !this.dockerBuildSecrets.equals(that.dockerBuildSecrets) : that.dockerBuildSecrets != null) return false;
            if (this.dockerBuildSsh != null ? !this.dockerBuildSsh.equals(that.dockerBuildSsh) : that.dockerBuildSsh != null) return false;
            if (this.dockerBuildTarget != null ? !this.dockerBuildTarget.equals(that.dockerBuildTarget) : that.dockerBuildTarget != null) return false;
            if (this.dockerFile != null ? !this.dockerFile.equals(that.dockerFile) : that.dockerFile != null) return false;
            if (this.dockerOutputs != null ? !this.dockerOutputs.equals(that.dockerOutputs) : that.dockerOutputs != null) return false;
            if (this.executable != null ? !this.executable.equals(that.executable) : that.executable != null) return false;
            if (this.networkMode != null ? !this.networkMode.equals(that.networkMode) : that.networkMode != null) return false;
            return this.platform != null ? this.platform.equals(that.platform) : that.platform == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cacheDisabled != null ? this.cacheDisabled.hashCode() : 0;
            result = 31 * result + (this.cacheFrom != null ? this.cacheFrom.hashCode() : 0);
            result = 31 * result + (this.cacheTo != null ? this.cacheTo.hashCode() : 0);
            result = 31 * result + (this.directory != null ? this.directory.hashCode() : 0);
            result = 31 * result + (this.dockerBuildArgs != null ? this.dockerBuildArgs.hashCode() : 0);
            result = 31 * result + (this.dockerBuildSecrets != null ? this.dockerBuildSecrets.hashCode() : 0);
            result = 31 * result + (this.dockerBuildSsh != null ? this.dockerBuildSsh.hashCode() : 0);
            result = 31 * result + (this.dockerBuildTarget != null ? this.dockerBuildTarget.hashCode() : 0);
            result = 31 * result + (this.dockerFile != null ? this.dockerFile.hashCode() : 0);
            result = 31 * result + (this.dockerOutputs != null ? this.dockerOutputs.hashCode() : 0);
            result = 31 * result + (this.executable != null ? this.executable.hashCode() : 0);
            result = 31 * result + (this.networkMode != null ? this.networkMode.hashCode() : 0);
            result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
            return result;
        }
    }
}
