package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.715Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DockerImageAssetSource")
@software.amazon.jsii.Jsii.Proxy(DockerImageAssetSource.Jsii$Proxy.class)
public interface DockerImageAssetSource extends software.amazon.jsii.JsiiSerializable {

    /**
     * The hash of the contents of the docker build context.
     * <p>
     * This hash is used
     * throughout the system to identify this image and avoid duplicate work
     * in case the source did not change.
     * <p>
     * NOTE: this means that if you wish to update your docker image, you
     * must make a modification to the source (e.g. add some metadata to your Dockerfile).
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceHash();

    /**
     * Unique identifier of the docker image asset and its potential revisions.
     * <p>
     * Required if using AppScopedStagingSynthesizer.
     * <p>
     * Default: - no asset name
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAssetName() {
        return null;
    }

    /**
     * The directory where the Dockerfile is stored, must be relative to the cloud assembly root.
     * <p>
     * Default: - Exactly one of `directoryName` and `executable` is required
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDirectoryName() {
        return null;
    }

    /**
     * Build args to pass to the <code>docker build</code> command.
     * <p>
     * Since Docker build arguments are resolved before deployment, keys and
     * values cannot refer to unresolved tokens.
     * <p>
     * Only allowed when <code>directoryName</code> is specified.
     * <p>
     * Default: - no build args are passed
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDockerBuildArgs() {
        return null;
    }

    /**
     * Build sACRets to pass to the <code>docker build</code> command.
     * <p>
     * Since Docker build sACRets are resolved before deployment, keys and
     * values cannot refer to unresolved tokens.
     * <p>
     * Only allowed when <code>directoryName</code> is specified.
     * <p>
     * Default: - no build sACRets are passed
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getDockerBuildSACRets() {
        return null;
    }

    /**
     * SSH agent socket or keys to pass to the <code>docker buildx</code> command.
     * <p>
     * Default: - no ssh arg is passed
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDockerBuildSsh() {
        return null;
    }

    /**
     * Docker target to build to.
     * <p>
     * Only allowed when <code>directoryName</code> is specified.
     * <p>
     * Default: - no target
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDockerBuildTarget() {
        return null;
    }

    /**
     * Disable the cache and pass <code>--no-cache</code> to the <code>docker build</code> command.
     * <p>
     * Default: - cache is used
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getDockerCacheDisabled() {
        return null;
    }

    /**
     * Cache from options to pass to the <code>docker build</code> command.
     * <p>
     * Default: - no cache from args are passed
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption> getDockerCacheFrom() {
        return null;
    }

    /**
     * Cache to options to pass to the <code>docker build</code> command.
     * <p>
     * Default: - no cache to args are passed
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.DockerCacheOption getDockerCacheTo() {
        return null;
    }

    /**
     * Path to the Dockerfile (relative to the directory).
     * <p>
     * Only allowed when <code>directoryName</code> is specified.
     * <p>
     * Default: - no file
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDockerFile() {
        return null;
    }

    /**
     * Outputs to pass to the <code>docker build</code> command.
     * <p>
     * Default: - no build args are passed
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getDockerOutputs() {
        return null;
    }

    /**
     * An external command that will produce the packaged asset.
     * <p>
     * The command should produce the name of a local Docker image on <code>stdout</code>.
     * <p>
     * Default: - Exactly one of `directoryName` and `executable` is required
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
     * Specify this property to build images on a specific platform.
     * <p>
     * Default: - no platform specified (the current machine architecture will be used)
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPlatform() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DockerImageAssetSource}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DockerImageAssetSource}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DockerImageAssetSource> {
        java.lang.String sourceHash;
        java.lang.String assetName;
        java.lang.String directoryName;
        java.util.Map<java.lang.String, java.lang.String> dockerBuildArgs;
        java.util.Map<java.lang.String, java.lang.String> dockerBuildSacRets;
        java.lang.String dockerBuildSsh;
        java.lang.String dockerBuildTarget;
        java.lang.Boolean dockerCacheDisabled;
        java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption> dockerCacheFrom;
        com.aliyun.ros.cdk.core.DockerCacheOption dockerCacheTo;
        java.lang.String dockerFile;
        java.util.List<java.lang.String> dockerOutputs;
        java.util.List<java.lang.String> executable;
        java.lang.String networkMode;
        java.lang.String platform;

        /**
         * Sets the value of {@link DockerImageAssetSource#getSourceHash}
         * @param sourceHash The hash of the contents of the docker build context. This parameter is required.
         *                   This hash is used
         *                   throughout the system to identify this image and avoid duplicate work
         *                   in case the source did not change.
         *                   <p>
         *                   NOTE: this means that if you wish to update your docker image, you
         *                   must make a modification to the source (e.g. add some metadata to your Dockerfile).
         * @return {@code this}
         */
        public Builder sourceHash(java.lang.String sourceHash) {
            this.sourceHash = sourceHash;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getAssetName}
         * @param assetName Unique identifier of the docker image asset and its potential revisions.
         *                  Required if using AppScopedStagingSynthesizer.
         * @return {@code this}
         */
        public Builder assetName(java.lang.String assetName) {
            this.assetName = assetName;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDirectoryName}
         * @param directoryName The directory where the Dockerfile is stored, must be relative to the cloud assembly root.
         * @return {@code this}
         */
        public Builder directoryName(java.lang.String directoryName) {
            this.directoryName = directoryName;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerBuildArgs}
         * @param dockerBuildArgs Build args to pass to the <code>docker build</code> command.
         *                        Since Docker build arguments are resolved before deployment, keys and
         *                        values cannot refer to unresolved tokens.
         *                        <p>
         *                        Only allowed when <code>directoryName</code> is specified.
         * @return {@code this}
         */
        public Builder dockerBuildArgs(java.util.Map<java.lang.String, java.lang.String> dockerBuildArgs) {
            this.dockerBuildArgs = dockerBuildArgs;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerBuildSacRets}
         * @param dockerBuildSacRets Build sACRets to pass to the <code>docker build</code> command.
         *                           Since Docker build sACRets are resolved before deployment, keys and
         *                           values cannot refer to unresolved tokens.
         *                           <p>
         *                           Only allowed when <code>directoryName</code> is specified.
         * @return {@code this}
         */
        public Builder dockerBuildSacRets(java.util.Map<java.lang.String, java.lang.String> dockerBuildSacRets) {
            this.dockerBuildSacRets = dockerBuildSacRets;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerBuildSsh}
         * @param dockerBuildSsh SSH agent socket or keys to pass to the <code>docker buildx</code> command.
         * @return {@code this}
         */
        public Builder dockerBuildSsh(java.lang.String dockerBuildSsh) {
            this.dockerBuildSsh = dockerBuildSsh;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerBuildTarget}
         * @param dockerBuildTarget Docker target to build to.
         *                          Only allowed when <code>directoryName</code> is specified.
         * @return {@code this}
         */
        public Builder dockerBuildTarget(java.lang.String dockerBuildTarget) {
            this.dockerBuildTarget = dockerBuildTarget;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerCacheDisabled}
         * @param dockerCacheDisabled Disable the cache and pass <code>--no-cache</code> to the <code>docker build</code> command.
         * @return {@code this}
         */
        public Builder dockerCacheDisabled(java.lang.Boolean dockerCacheDisabled) {
            this.dockerCacheDisabled = dockerCacheDisabled;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerCacheFrom}
         * @param dockerCacheFrom Cache from options to pass to the <code>docker build</code> command.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder dockerCacheFrom(java.util.List<? extends com.aliyun.ros.cdk.core.DockerCacheOption> dockerCacheFrom) {
            this.dockerCacheFrom = (java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption>)dockerCacheFrom;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerCacheTo}
         * @param dockerCacheTo Cache to options to pass to the <code>docker build</code> command.
         * @return {@code this}
         */
        public Builder dockerCacheTo(com.aliyun.ros.cdk.core.DockerCacheOption dockerCacheTo) {
            this.dockerCacheTo = dockerCacheTo;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerFile}
         * @param dockerFile Path to the Dockerfile (relative to the directory).
         *                   Only allowed when <code>directoryName</code> is specified.
         * @return {@code this}
         */
        public Builder dockerFile(java.lang.String dockerFile) {
            this.dockerFile = dockerFile;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getDockerOutputs}
         * @param dockerOutputs Outputs to pass to the <code>docker build</code> command.
         * @return {@code this}
         */
        public Builder dockerOutputs(java.util.List<java.lang.String> dockerOutputs) {
            this.dockerOutputs = dockerOutputs;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getExecutable}
         * @param executable An external command that will produce the packaged asset.
         *                   The command should produce the name of a local Docker image on <code>stdout</code>.
         * @return {@code this}
         */
        public Builder executable(java.util.List<java.lang.String> executable) {
            this.executable = executable;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getNetworkMode}
         * @param networkMode Networking mode for the RUN commands during build. <em>Requires Docker Engine API v1.25+</em>.
         *                    Specify this property to build images on a specific networking mode.
         * @return {@code this}
         */
        public Builder networkMode(java.lang.String networkMode) {
            this.networkMode = networkMode;
            return this;
        }

        /**
         * Sets the value of {@link DockerImageAssetSource#getPlatform}
         * @param platform Platform to build for. <em>Requires Docker Buildx</em>.
         *                 Specify this property to build images on a specific platform.
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DockerImageAssetSource}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DockerImageAssetSource build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DockerImageAssetSource}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DockerImageAssetSource {
        private final java.lang.String sourceHash;
        private final java.lang.String assetName;
        private final java.lang.String directoryName;
        private final java.util.Map<java.lang.String, java.lang.String> dockerBuildArgs;
        private final java.util.Map<java.lang.String, java.lang.String> dockerBuildSacRets;
        private final java.lang.String dockerBuildSsh;
        private final java.lang.String dockerBuildTarget;
        private final java.lang.Boolean dockerCacheDisabled;
        private final java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption> dockerCacheFrom;
        private final com.aliyun.ros.cdk.core.DockerCacheOption dockerCacheTo;
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
            this.sourceHash = software.amazon.jsii.Kernel.get(this, "sourceHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.assetName = software.amazon.jsii.Kernel.get(this, "assetName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.directoryName = software.amazon.jsii.Kernel.get(this, "directoryName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerBuildArgs = software.amazon.jsii.Kernel.get(this, "dockerBuildArgs", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dockerBuildSacRets = software.amazon.jsii.Kernel.get(this, "dockerBuildSACRets", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.dockerBuildSsh = software.amazon.jsii.Kernel.get(this, "dockerBuildSsh", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerBuildTarget = software.amazon.jsii.Kernel.get(this, "dockerBuildTarget", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dockerCacheDisabled = software.amazon.jsii.Kernel.get(this, "dockerCacheDisabled", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.dockerCacheFrom = software.amazon.jsii.Kernel.get(this, "dockerCacheFrom", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerCacheOption.class)));
            this.dockerCacheTo = software.amazon.jsii.Kernel.get(this, "dockerCacheTo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerCacheOption.class));
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
            this.sourceHash = java.util.Objects.requireNonNull(builder.sourceHash, "sourceHash is required");
            this.assetName = builder.assetName;
            this.directoryName = builder.directoryName;
            this.dockerBuildArgs = builder.dockerBuildArgs;
            this.dockerBuildSacRets = builder.dockerBuildSacRets;
            this.dockerBuildSsh = builder.dockerBuildSsh;
            this.dockerBuildTarget = builder.dockerBuildTarget;
            this.dockerCacheDisabled = builder.dockerCacheDisabled;
            this.dockerCacheFrom = (java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption>)builder.dockerCacheFrom;
            this.dockerCacheTo = builder.dockerCacheTo;
            this.dockerFile = builder.dockerFile;
            this.dockerOutputs = builder.dockerOutputs;
            this.executable = builder.executable;
            this.networkMode = builder.networkMode;
            this.platform = builder.platform;
        }

        @Override
        public final java.lang.String getSourceHash() {
            return this.sourceHash;
        }

        @Override
        public final java.lang.String getAssetName() {
            return this.assetName;
        }

        @Override
        public final java.lang.String getDirectoryName() {
            return this.directoryName;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDockerBuildArgs() {
            return this.dockerBuildArgs;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getDockerBuildSACRets() {
            return this.dockerBuildSacRets;
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
        public final java.lang.Boolean getDockerCacheDisabled() {
            return this.dockerCacheDisabled;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption> getDockerCacheFrom() {
            return this.dockerCacheFrom;
        }

        @Override
        public final com.aliyun.ros.cdk.core.DockerCacheOption getDockerCacheTo() {
            return this.dockerCacheTo;
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

            data.set("sourceHash", om.valueToTree(this.getSourceHash()));
            if (this.getAssetName() != null) {
                data.set("assetName", om.valueToTree(this.getAssetName()));
            }
            if (this.getDirectoryName() != null) {
                data.set("directoryName", om.valueToTree(this.getDirectoryName()));
            }
            if (this.getDockerBuildArgs() != null) {
                data.set("dockerBuildArgs", om.valueToTree(this.getDockerBuildArgs()));
            }
            if (this.getDockerBuildSACRets() != null) {
                data.set("dockerBuildSACRets", om.valueToTree(this.getDockerBuildSACRets()));
            }
            if (this.getDockerBuildSsh() != null) {
                data.set("dockerBuildSsh", om.valueToTree(this.getDockerBuildSsh()));
            }
            if (this.getDockerBuildTarget() != null) {
                data.set("dockerBuildTarget", om.valueToTree(this.getDockerBuildTarget()));
            }
            if (this.getDockerCacheDisabled() != null) {
                data.set("dockerCacheDisabled", om.valueToTree(this.getDockerCacheDisabled()));
            }
            if (this.getDockerCacheFrom() != null) {
                data.set("dockerCacheFrom", om.valueToTree(this.getDockerCacheFrom()));
            }
            if (this.getDockerCacheTo() != null) {
                data.set("dockerCacheTo", om.valueToTree(this.getDockerCacheTo()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.DockerImageAssetSource"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DockerImageAssetSource.Jsii$Proxy that = (DockerImageAssetSource.Jsii$Proxy) o;

            if (!sourceHash.equals(that.sourceHash)) return false;
            if (this.assetName != null ? !this.assetName.equals(that.assetName) : that.assetName != null) return false;
            if (this.directoryName != null ? !this.directoryName.equals(that.directoryName) : that.directoryName != null) return false;
            if (this.dockerBuildArgs != null ? !this.dockerBuildArgs.equals(that.dockerBuildArgs) : that.dockerBuildArgs != null) return false;
            if (this.dockerBuildSacRets != null ? !this.dockerBuildSacRets.equals(that.dockerBuildSacRets) : that.dockerBuildSacRets != null) return false;
            if (this.dockerBuildSsh != null ? !this.dockerBuildSsh.equals(that.dockerBuildSsh) : that.dockerBuildSsh != null) return false;
            if (this.dockerBuildTarget != null ? !this.dockerBuildTarget.equals(that.dockerBuildTarget) : that.dockerBuildTarget != null) return false;
            if (this.dockerCacheDisabled != null ? !this.dockerCacheDisabled.equals(that.dockerCacheDisabled) : that.dockerCacheDisabled != null) return false;
            if (this.dockerCacheFrom != null ? !this.dockerCacheFrom.equals(that.dockerCacheFrom) : that.dockerCacheFrom != null) return false;
            if (this.dockerCacheTo != null ? !this.dockerCacheTo.equals(that.dockerCacheTo) : that.dockerCacheTo != null) return false;
            if (this.dockerFile != null ? !this.dockerFile.equals(that.dockerFile) : that.dockerFile != null) return false;
            if (this.dockerOutputs != null ? !this.dockerOutputs.equals(that.dockerOutputs) : that.dockerOutputs != null) return false;
            if (this.executable != null ? !this.executable.equals(that.executable) : that.executable != null) return false;
            if (this.networkMode != null ? !this.networkMode.equals(that.networkMode) : that.networkMode != null) return false;
            return this.platform != null ? this.platform.equals(that.platform) : that.platform == null;
        }

        @Override
        public final int hashCode() {
            int result = this.sourceHash.hashCode();
            result = 31 * result + (this.assetName != null ? this.assetName.hashCode() : 0);
            result = 31 * result + (this.directoryName != null ? this.directoryName.hashCode() : 0);
            result = 31 * result + (this.dockerBuildArgs != null ? this.dockerBuildArgs.hashCode() : 0);
            result = 31 * result + (this.dockerBuildSacRets != null ? this.dockerBuildSacRets.hashCode() : 0);
            result = 31 * result + (this.dockerBuildSsh != null ? this.dockerBuildSsh.hashCode() : 0);
            result = 31 * result + (this.dockerBuildTarget != null ? this.dockerBuildTarget.hashCode() : 0);
            result = 31 * result + (this.dockerCacheDisabled != null ? this.dockerCacheDisabled.hashCode() : 0);
            result = 31 * result + (this.dockerCacheFrom != null ? this.dockerCacheFrom.hashCode() : 0);
            result = 31 * result + (this.dockerCacheTo != null ? this.dockerCacheTo.hashCode() : 0);
            result = 31 * result + (this.dockerFile != null ? this.dockerFile.hashCode() : 0);
            result = 31 * result + (this.dockerOutputs != null ? this.dockerOutputs.hashCode() : 0);
            result = 31 * result + (this.executable != null ? this.executable.hashCode() : 0);
            result = 31 * result + (this.networkMode != null ? this.networkMode.hashCode() : 0);
            result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
            return result;
        }
    }
}
