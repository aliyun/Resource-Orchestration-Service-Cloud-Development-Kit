package com.aliyun.ros.cdk.core;

/**
 * Docker build options.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:42.909Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.DockerBuildOptions")
@software.amazon.jsii.Jsii.Proxy(DockerBuildOptions.Jsii$Proxy.class)
public interface DockerBuildOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * Build args.
     * <p>
     * Default: - no build args
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getBuildArgs() {
        return null;
    }

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
     * Default: - no cache from args are passed
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption> getCacheFrom() {
        return null;
    }

    /**
     * Cache to options to pass to the <code>docker build</code> command.
     * <p>
     * Default: - no cache to args are passed
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.DockerCacheOption getCacheTo() {
        return null;
    }

    /**
     * Name of the Dockerfile, must relative to the docker build path.
     * <p>
     * Default: `Dockerfile`
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFile() {
        return null;
    }

    /**
     * Set platform if server is multi-platform capable. <em>Requires Docker Engine API v1.38+</em>.
     * <p>
     * Example value: <code>linux/amd64</code>
     * <p>
     * Default: - no platform specified
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPlatform() {
        return null;
    }

    /**
     * Set build target for multi-stage container builds. Any stage defined afterwards will be ignored.
     * <p>
     * Example value: <code>build-env</code>
     * <p>
     * Default: - Build all stages defined in the Dockerfile
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTargetStage() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DockerBuildOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DockerBuildOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DockerBuildOptions> {
        java.util.Map<java.lang.String, java.lang.String> buildArgs;
        java.lang.Boolean cacheDisabled;
        java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption> cacheFrom;
        com.aliyun.ros.cdk.core.DockerCacheOption cacheTo;
        java.lang.String file;
        java.lang.String platform;
        java.lang.String targetStage;

        /**
         * Sets the value of {@link DockerBuildOptions#getBuildArgs}
         * @param buildArgs Build args.
         * @return {@code this}
         */
        public Builder buildArgs(java.util.Map<java.lang.String, java.lang.String> buildArgs) {
            this.buildArgs = buildArgs;
            return this;
        }

        /**
         * Sets the value of {@link DockerBuildOptions#getCacheDisabled}
         * @param cacheDisabled Disable the cache and pass <code>--no-cache</code> to the <code>docker build</code> command.
         * @return {@code this}
         */
        public Builder cacheDisabled(java.lang.Boolean cacheDisabled) {
            this.cacheDisabled = cacheDisabled;
            return this;
        }

        /**
         * Sets the value of {@link DockerBuildOptions#getCacheFrom}
         * @param cacheFrom Cache from options to pass to the <code>docker build</code> command.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder cacheFrom(java.util.List<? extends com.aliyun.ros.cdk.core.DockerCacheOption> cacheFrom) {
            this.cacheFrom = (java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption>)cacheFrom;
            return this;
        }

        /**
         * Sets the value of {@link DockerBuildOptions#getCacheTo}
         * @param cacheTo Cache to options to pass to the <code>docker build</code> command.
         * @return {@code this}
         */
        public Builder cacheTo(com.aliyun.ros.cdk.core.DockerCacheOption cacheTo) {
            this.cacheTo = cacheTo;
            return this;
        }

        /**
         * Sets the value of {@link DockerBuildOptions#getFile}
         * @param file Name of the Dockerfile, must relative to the docker build path.
         * @return {@code this}
         */
        public Builder file(java.lang.String file) {
            this.file = file;
            return this;
        }

        /**
         * Sets the value of {@link DockerBuildOptions#getPlatform}
         * @param platform Set platform if server is multi-platform capable. <em>Requires Docker Engine API v1.38+</em>.
         *                 Example value: <code>linux/amd64</code>
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link DockerBuildOptions#getTargetStage}
         * @param targetStage Set build target for multi-stage container builds. Any stage defined afterwards will be ignored.
         *                    Example value: <code>build-env</code>
         * @return {@code this}
         */
        public Builder targetStage(java.lang.String targetStage) {
            this.targetStage = targetStage;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DockerBuildOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DockerBuildOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DockerBuildOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DockerBuildOptions {
        private final java.util.Map<java.lang.String, java.lang.String> buildArgs;
        private final java.lang.Boolean cacheDisabled;
        private final java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption> cacheFrom;
        private final com.aliyun.ros.cdk.core.DockerCacheOption cacheTo;
        private final java.lang.String file;
        private final java.lang.String platform;
        private final java.lang.String targetStage;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.buildArgs = software.amazon.jsii.Kernel.get(this, "buildArgs", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.cacheDisabled = software.amazon.jsii.Kernel.get(this, "cacheDisabled", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.cacheFrom = software.amazon.jsii.Kernel.get(this, "cacheFrom", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerCacheOption.class)));
            this.cacheTo = software.amazon.jsii.Kernel.get(this, "cacheTo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.DockerCacheOption.class));
            this.file = software.amazon.jsii.Kernel.get(this, "file", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.targetStage = software.amazon.jsii.Kernel.get(this, "targetStage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.buildArgs = builder.buildArgs;
            this.cacheDisabled = builder.cacheDisabled;
            this.cacheFrom = (java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption>)builder.cacheFrom;
            this.cacheTo = builder.cacheTo;
            this.file = builder.file;
            this.platform = builder.platform;
            this.targetStage = builder.targetStage;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getBuildArgs() {
            return this.buildArgs;
        }

        @Override
        public final java.lang.Boolean getCacheDisabled() {
            return this.cacheDisabled;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.DockerCacheOption> getCacheFrom() {
            return this.cacheFrom;
        }

        @Override
        public final com.aliyun.ros.cdk.core.DockerCacheOption getCacheTo() {
            return this.cacheTo;
        }

        @Override
        public final java.lang.String getFile() {
            return this.file;
        }

        @Override
        public final java.lang.String getPlatform() {
            return this.platform;
        }

        @Override
        public final java.lang.String getTargetStage() {
            return this.targetStage;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getBuildArgs() != null) {
                data.set("buildArgs", om.valueToTree(this.getBuildArgs()));
            }
            if (this.getCacheDisabled() != null) {
                data.set("cacheDisabled", om.valueToTree(this.getCacheDisabled()));
            }
            if (this.getCacheFrom() != null) {
                data.set("cacheFrom", om.valueToTree(this.getCacheFrom()));
            }
            if (this.getCacheTo() != null) {
                data.set("cacheTo", om.valueToTree(this.getCacheTo()));
            }
            if (this.getFile() != null) {
                data.set("file", om.valueToTree(this.getFile()));
            }
            if (this.getPlatform() != null) {
                data.set("platform", om.valueToTree(this.getPlatform()));
            }
            if (this.getTargetStage() != null) {
                data.set("targetStage", om.valueToTree(this.getTargetStage()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.DockerBuildOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DockerBuildOptions.Jsii$Proxy that = (DockerBuildOptions.Jsii$Proxy) o;

            if (this.buildArgs != null ? !this.buildArgs.equals(that.buildArgs) : that.buildArgs != null) return false;
            if (this.cacheDisabled != null ? !this.cacheDisabled.equals(that.cacheDisabled) : that.cacheDisabled != null) return false;
            if (this.cacheFrom != null ? !this.cacheFrom.equals(that.cacheFrom) : that.cacheFrom != null) return false;
            if (this.cacheTo != null ? !this.cacheTo.equals(that.cacheTo) : that.cacheTo != null) return false;
            if (this.file != null ? !this.file.equals(that.file) : that.file != null) return false;
            if (this.platform != null ? !this.platform.equals(that.platform) : that.platform != null) return false;
            return this.targetStage != null ? this.targetStage.equals(that.targetStage) : that.targetStage == null;
        }

        @Override
        public final int hashCode() {
            int result = this.buildArgs != null ? this.buildArgs.hashCode() : 0;
            result = 31 * result + (this.cacheDisabled != null ? this.cacheDisabled.hashCode() : 0);
            result = 31 * result + (this.cacheFrom != null ? this.cacheFrom.hashCode() : 0);
            result = 31 * result + (this.cacheTo != null ? this.cacheTo.hashCode() : 0);
            result = 31 * result + (this.file != null ? this.file.hashCode() : 0);
            result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
            result = 31 * result + (this.targetStage != null ? this.targetStage.hashCode() : 0);
            return result;
        }
    }
}
