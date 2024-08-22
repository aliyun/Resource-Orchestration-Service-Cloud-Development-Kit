package com.aliyun.ros.cdk.core;

/**
 * Bundling options.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:16.912Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.BundlingOptions")
@software.amazon.jsii.Jsii.Proxy(BundlingOptions.Jsii$Proxy.class)
public interface BundlingOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * The Docker image where the command will run.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.DockerImage getImage();

    /**
     * The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.
     * <p>
     * Default: - BundlingFileAccess.BIND_MOUNT
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.BundlingFileAccess getBundlingFileAccess() {
        return null;
    }

    /**
     * The command to run in the Docker container.
     * <p>
     * Example value: <code>['npm', 'install']</code>
     * <p>
     * Default: - run the command defined in the image
     * <p>
     * @see <a href="https://docs.docker.com/engine/reference/run/">https://docs.docker.com/engine/reference/run/</a>
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getCommand() {
        return null;
    }

    /**
     * The entrypoint to run in the Docker container.
     * <p>
     * Example value: <code>['/bin/sh', '-c']</code>
     * <p>
     * Default: - run the entrypoint defined in the image
     * <p>
     * @see <a href="https://docs.docker.com/engine/reference/builder/#entrypoint">https://docs.docker.com/engine/reference/builder/#entrypoint</a>
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getEntrypoint() {
        return null;
    }

    /**
     * The environment variables to pass to the Docker container.
     * <p>
     * Default: - no environment variables.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getEnvironment() {
        return null;
    }

    /**
     * Local bundling provider.
     * <p>
     * The provider implements a method <code>tryBundle()</code> which should return <code>true</code>
     * if local bundling was performed. If <code>false</code> is returned, docker bundling
     * will be done.
     * <p>
     * Default: - bundling will only be performed in a Docker container
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.ILocalBundling getLocal() {
        return null;
    }

    /**
     * Docker <a href="https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network">Networking options</a>.
     * <p>
     * Default: - no networking options
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNetwork() {
        return null;
    }

    /**
     * The type of output that this bundling operation is producing.
     * <p>
     * Default: BundlingOutput.AUTO_DISCOVER
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.BundlingOutput getOutputType() {
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
     * <a href="https://docs.docker.com/engine/reference/run/#security-configuration">Security configuration</a> when running the docker container.
     * <p>
     * Default: - no security options
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityOpt() {
        return null;
    }

    /**
     * The user to use when running the Docker container.
     * <p>
     * user | user:group | uid | uid:gid | user:gid | uid:group
     * <p>
     * Default: - uid:gid of the current user or 1000:1000 on Windows
     * <p>
     * @see <a href="https://docs.docker.com/engine/reference/run/#user">https://docs.docker.com/engine/reference/run/#user</a>
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getUser() {
        return null;
    }

    /**
     * Additional Docker volumes to mount.
     * <p>
     * Default: - no additional volumes are mounted
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.DockerVolume> getVolumes() {
        return null;
    }

    /**
     * Where to mount the specified volumes from.
     * <p>
     * Default: - no containers are specified to mount volumes from
     * <p>
     * @see <a href="https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from">https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from</a>
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getVolumesFrom() {
        return null;
    }

    /**
     * Working directory inside the Docker container.
     * <p>
     * Default: /asset-input
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getWorkingDirectory() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BundlingOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BundlingOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BundlingOptions> {
        com.aliyun.ros.cdk.core.DockerImage image;
        com.aliyun.ros.cdk.core.BundlingFileAccess bundlingFileAccess;
        java.util.List<java.lang.String> command;
        java.util.List<java.lang.String> entrypoint;
        java.util.Map<java.lang.String, java.lang.String> environment;
        com.aliyun.ros.cdk.core.ILocalBundling local;
        java.lang.String network;
        com.aliyun.ros.cdk.core.BundlingOutput outputType;
        java.lang.String platform;
        java.lang.String securityOpt;
        java.lang.String user;
        java.util.List<com.aliyun.ros.cdk.core.DockerVolume> volumes;
        java.util.List<java.lang.String> volumesFrom;
        java.lang.String workingDirectory;

        /**
         * Sets the value of {@link BundlingOptions#getImage}
         * @param image The Docker image where the command will run. This parameter is required.
         * @return {@code this}
         */
        public Builder image(com.aliyun.ros.cdk.core.DockerImage image) {
            this.image = image;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getBundlingFileAccess}
         * @param bundlingFileAccess The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.
         * @return {@code this}
         */
        public Builder bundlingFileAccess(com.aliyun.ros.cdk.core.BundlingFileAccess bundlingFileAccess) {
            this.bundlingFileAccess = bundlingFileAccess;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getCommand}
         * @param command The command to run in the Docker container.
         *                Example value: <code>['npm', 'install']</code>
         * @return {@code this}
         */
        public Builder command(java.util.List<java.lang.String> command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getEntrypoint}
         * @param entrypoint The entrypoint to run in the Docker container.
         *                   Example value: <code>['/bin/sh', '-c']</code>
         * @return {@code this}
         */
        public Builder entrypoint(java.util.List<java.lang.String> entrypoint) {
            this.entrypoint = entrypoint;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getEnvironment}
         * @param environment The environment variables to pass to the Docker container.
         * @return {@code this}
         */
        public Builder environment(java.util.Map<java.lang.String, java.lang.String> environment) {
            this.environment = environment;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getLocal}
         * @param local Local bundling provider.
         *              The provider implements a method <code>tryBundle()</code> which should return <code>true</code>
         *              if local bundling was performed. If <code>false</code> is returned, docker bundling
         *              will be done.
         * @return {@code this}
         */
        public Builder local(com.aliyun.ros.cdk.core.ILocalBundling local) {
            this.local = local;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getNetwork}
         * @param network Docker <a href="https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network">Networking options</a>.
         * @return {@code this}
         */
        public Builder network(java.lang.String network) {
            this.network = network;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getOutputType}
         * @param outputType The type of output that this bundling operation is producing.
         * @return {@code this}
         */
        public Builder outputType(com.aliyun.ros.cdk.core.BundlingOutput outputType) {
            this.outputType = outputType;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getPlatform}
         * @param platform Platform to build for. <em>Requires Docker Buildx</em>.
         *                 Specify this property to build images on a specific platform.
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getSecurityOpt}
         * @param securityOpt <a href="https://docs.docker.com/engine/reference/run/#security-configuration">Security configuration</a> when running the docker container.
         * @return {@code this}
         */
        public Builder securityOpt(java.lang.String securityOpt) {
            this.securityOpt = securityOpt;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getUser}
         * @param user The user to use when running the Docker container.
         *             user | user:group | uid | uid:gid | user:gid | uid:group
         * @return {@code this}
         */
        public Builder user(java.lang.String user) {
            this.user = user;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getVolumes}
         * @param volumes Additional Docker volumes to mount.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder volumes(java.util.List<? extends com.aliyun.ros.cdk.core.DockerVolume> volumes) {
            this.volumes = (java.util.List<com.aliyun.ros.cdk.core.DockerVolume>)volumes;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getVolumesFrom}
         * @param volumesFrom Where to mount the specified volumes from.
         * @return {@code this}
         */
        public Builder volumesFrom(java.util.List<java.lang.String> volumesFrom) {
            this.volumesFrom = volumesFrom;
            return this;
        }

        /**
         * Sets the value of {@link BundlingOptions#getWorkingDirectory}
         * @param workingDirectory Working directory inside the Docker container.
         * @return {@code this}
         */
        public Builder workingDirectory(java.lang.String workingDirectory) {
            this.workingDirectory = workingDirectory;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BundlingOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BundlingOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BundlingOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BundlingOptions {
        private final com.aliyun.ros.cdk.core.DockerImage image;
        private final com.aliyun.ros.cdk.core.BundlingFileAccess bundlingFileAccess;
        private final java.util.List<java.lang.String> command;
        private final java.util.List<java.lang.String> entrypoint;
        private final java.util.Map<java.lang.String, java.lang.String> environment;
        private final com.aliyun.ros.cdk.core.ILocalBundling local;
        private final java.lang.String network;
        private final com.aliyun.ros.cdk.core.BundlingOutput outputType;
        private final java.lang.String platform;
        private final java.lang.String securityOpt;
        private final java.lang.String user;
        private final java.util.List<com.aliyun.ros.cdk.core.DockerVolume> volumes;
        private final java.util.List<java.lang.String> volumesFrom;
        private final java.lang.String workingDirectory;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerImage.class));
            this.bundlingFileAccess = software.amazon.jsii.Kernel.get(this, "bundlingFileAccess", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.BundlingFileAccess.class));
            this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.entrypoint = software.amazon.jsii.Kernel.get(this, "entrypoint", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.environment = software.amazon.jsii.Kernel.get(this, "environment", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.local = software.amazon.jsii.Kernel.get(this, "local", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ILocalBundling.class));
            this.network = software.amazon.jsii.Kernel.get(this, "network", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.outputType = software.amazon.jsii.Kernel.get(this, "outputType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.BundlingOutput.class));
            this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityOpt = software.amazon.jsii.Kernel.get(this, "securityOpt", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.user = software.amazon.jsii.Kernel.get(this, "user", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.volumes = software.amazon.jsii.Kernel.get(this, "volumes", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerVolume.class)));
            this.volumesFrom = software.amazon.jsii.Kernel.get(this, "volumesFrom", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.workingDirectory = software.amazon.jsii.Kernel.get(this, "workingDirectory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.image = java.util.Objects.requireNonNull(builder.image, "image is required");
            this.bundlingFileAccess = builder.bundlingFileAccess;
            this.command = builder.command;
            this.entrypoint = builder.entrypoint;
            this.environment = builder.environment;
            this.local = builder.local;
            this.network = builder.network;
            this.outputType = builder.outputType;
            this.platform = builder.platform;
            this.securityOpt = builder.securityOpt;
            this.user = builder.user;
            this.volumes = (java.util.List<com.aliyun.ros.cdk.core.DockerVolume>)builder.volumes;
            this.volumesFrom = builder.volumesFrom;
            this.workingDirectory = builder.workingDirectory;
        }

        @Override
        public final com.aliyun.ros.cdk.core.DockerImage getImage() {
            return this.image;
        }

        @Override
        public final com.aliyun.ros.cdk.core.BundlingFileAccess getBundlingFileAccess() {
            return this.bundlingFileAccess;
        }

        @Override
        public final java.util.List<java.lang.String> getCommand() {
            return this.command;
        }

        @Override
        public final java.util.List<java.lang.String> getEntrypoint() {
            return this.entrypoint;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getEnvironment() {
            return this.environment;
        }

        @Override
        public final com.aliyun.ros.cdk.core.ILocalBundling getLocal() {
            return this.local;
        }

        @Override
        public final java.lang.String getNetwork() {
            return this.network;
        }

        @Override
        public final com.aliyun.ros.cdk.core.BundlingOutput getOutputType() {
            return this.outputType;
        }

        @Override
        public final java.lang.String getPlatform() {
            return this.platform;
        }

        @Override
        public final java.lang.String getSecurityOpt() {
            return this.securityOpt;
        }

        @Override
        public final java.lang.String getUser() {
            return this.user;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.DockerVolume> getVolumes() {
            return this.volumes;
        }

        @Override
        public final java.util.List<java.lang.String> getVolumesFrom() {
            return this.volumesFrom;
        }

        @Override
        public final java.lang.String getWorkingDirectory() {
            return this.workingDirectory;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("image", om.valueToTree(this.getImage()));
            if (this.getBundlingFileAccess() != null) {
                data.set("bundlingFileAccess", om.valueToTree(this.getBundlingFileAccess()));
            }
            if (this.getCommand() != null) {
                data.set("command", om.valueToTree(this.getCommand()));
            }
            if (this.getEntrypoint() != null) {
                data.set("entrypoint", om.valueToTree(this.getEntrypoint()));
            }
            if (this.getEnvironment() != null) {
                data.set("environment", om.valueToTree(this.getEnvironment()));
            }
            if (this.getLocal() != null) {
                data.set("local", om.valueToTree(this.getLocal()));
            }
            if (this.getNetwork() != null) {
                data.set("network", om.valueToTree(this.getNetwork()));
            }
            if (this.getOutputType() != null) {
                data.set("outputType", om.valueToTree(this.getOutputType()));
            }
            if (this.getPlatform() != null) {
                data.set("platform", om.valueToTree(this.getPlatform()));
            }
            if (this.getSecurityOpt() != null) {
                data.set("securityOpt", om.valueToTree(this.getSecurityOpt()));
            }
            if (this.getUser() != null) {
                data.set("user", om.valueToTree(this.getUser()));
            }
            if (this.getVolumes() != null) {
                data.set("volumes", om.valueToTree(this.getVolumes()));
            }
            if (this.getVolumesFrom() != null) {
                data.set("volumesFrom", om.valueToTree(this.getVolumesFrom()));
            }
            if (this.getWorkingDirectory() != null) {
                data.set("workingDirectory", om.valueToTree(this.getWorkingDirectory()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.BundlingOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BundlingOptions.Jsii$Proxy that = (BundlingOptions.Jsii$Proxy) o;

            if (!image.equals(that.image)) return false;
            if (this.bundlingFileAccess != null ? !this.bundlingFileAccess.equals(that.bundlingFileAccess) : that.bundlingFileAccess != null) return false;
            if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
            if (this.entrypoint != null ? !this.entrypoint.equals(that.entrypoint) : that.entrypoint != null) return false;
            if (this.environment != null ? !this.environment.equals(that.environment) : that.environment != null) return false;
            if (this.local != null ? !this.local.equals(that.local) : that.local != null) return false;
            if (this.network != null ? !this.network.equals(that.network) : that.network != null) return false;
            if (this.outputType != null ? !this.outputType.equals(that.outputType) : that.outputType != null) return false;
            if (this.platform != null ? !this.platform.equals(that.platform) : that.platform != null) return false;
            if (this.securityOpt != null ? !this.securityOpt.equals(that.securityOpt) : that.securityOpt != null) return false;
            if (this.user != null ? !this.user.equals(that.user) : that.user != null) return false;
            if (this.volumes != null ? !this.volumes.equals(that.volumes) : that.volumes != null) return false;
            if (this.volumesFrom != null ? !this.volumesFrom.equals(that.volumesFrom) : that.volumesFrom != null) return false;
            return this.workingDirectory != null ? this.workingDirectory.equals(that.workingDirectory) : that.workingDirectory == null;
        }

        @Override
        public final int hashCode() {
            int result = this.image.hashCode();
            result = 31 * result + (this.bundlingFileAccess != null ? this.bundlingFileAccess.hashCode() : 0);
            result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
            result = 31 * result + (this.entrypoint != null ? this.entrypoint.hashCode() : 0);
            result = 31 * result + (this.environment != null ? this.environment.hashCode() : 0);
            result = 31 * result + (this.local != null ? this.local.hashCode() : 0);
            result = 31 * result + (this.network != null ? this.network.hashCode() : 0);
            result = 31 * result + (this.outputType != null ? this.outputType.hashCode() : 0);
            result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
            result = 31 * result + (this.securityOpt != null ? this.securityOpt.hashCode() : 0);
            result = 31 * result + (this.user != null ? this.user.hashCode() : 0);
            result = 31 * result + (this.volumes != null ? this.volumes.hashCode() : 0);
            result = 31 * result + (this.volumesFrom != null ? this.volumesFrom.hashCode() : 0);
            result = 31 * result + (this.workingDirectory != null ? this.workingDirectory.hashCode() : 0);
            return result;
        }
    }
}
