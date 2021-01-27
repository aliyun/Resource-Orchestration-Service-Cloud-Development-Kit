package com.aliyun.ros.cdk.sae;

/**
 * A ROS template type:  `ALIYUN::SAE::Application`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.538Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplication")
public class RosApplication extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sae.RosApplication.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SAE::Application`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.RosApplicationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getAppName() {
        return software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getCpu() {
        return software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpu", java.util.Objects.requireNonNull(value, "cpu is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getMemory() {
        return software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memory", java.util.Objects.requireNonNull(value, "memory is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getNamespaceId() {
        return software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setNamespaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespaceId", java.util.Objects.requireNonNull(value, "namespaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getPackageType() {
        return software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageType", java.util.Objects.requireNonNull(value, "packageType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getReplicas() {
        return software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setReplicas(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "replicas", java.util.Objects.requireNonNull(value, "replicas is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAppDescription() {
        return software.amazon.jsii.Kernel.get(this, "appDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAppDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getCommand() {
        return software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setCommand(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "command", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getCommandArgs() {
        return software.amazon.jsii.Kernel.get(this, "commandArgs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setCommandArgs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "commandArgs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getCustomHostAlias() {
        return software.amazon.jsii.Kernel.get(this, "customHostAlias", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setCustomHostAlias(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "customHostAlias", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeploy() {
        return software.amazon.jsii.Kernel.get(this, "deploy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeploy(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deploy", value);
    }

    /**
     */
    public void setDeploy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deploy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getEdasContainerVersion() {
        return software.amazon.jsii.Kernel.get(this, "edasContainerVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setEdasContainerVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "edasContainerVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getEnvs() {
        return software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setEnvs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "envs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getImageUrl() {
        return software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setImageUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getJarStartArgs() {
        return software.amazon.jsii.Kernel.get(this, "jarStartArgs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setJarStartArgs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jarStartArgs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getJarStartOptions() {
        return software.amazon.jsii.Kernel.get(this, "jarStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setJarStartOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jarStartOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getJdk() {
        return software.amazon.jsii.Kernel.get(this, "jdk", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setJdk(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jdk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getLiveness() {
        return software.amazon.jsii.Kernel.get(this, "liveness", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLiveness(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "liveness", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getMountDesc() {
        return software.amazon.jsii.Kernel.get(this, "mountDesc", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setMountDesc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mountDesc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getMountHost() {
        return software.amazon.jsii.Kernel.get(this, "mountHost", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setMountHost(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mountHost", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getNasId() {
        return software.amazon.jsii.Kernel.get(this, "nasId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setNasId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nasId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPackageUrl() {
        return software.amazon.jsii.Kernel.get(this, "packageUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPackageUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPackageVersion() {
        return software.amazon.jsii.Kernel.get(this, "packageVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPackageVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPostStart() {
        return software.amazon.jsii.Kernel.get(this, "postStart", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPostStart(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "postStart", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPreStop() {
        return software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPreStop(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "preStop", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getReadiness() {
        return software.amazon.jsii.Kernel.get(this, "readiness", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setReadiness(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "readiness", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSlsConfigs() {
        return software.amazon.jsii.Kernel.get(this, "slsConfigs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSlsConfigs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "slsConfigs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getTimezone() {
        return software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setTimezone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "timezone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getWarStartOptions() {
        return software.amazon.jsii.Kernel.get(this, "warStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setWarStartOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "warStartOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getWebContainer() {
        return software.amazon.jsii.Kernel.get(this, "webContainer", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setWebContainer(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "webContainer", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.RosApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.RosApplication> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sae.RosApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.RosApplicationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpu This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespaceId This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageType This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param replicas This parameter is required.
         */
        public Builder replicas(final java.lang.Number replicas) {
            this.props.replicas(replicas);
            return this;
        }

        /**
         * @return {@code this}
         * @param appDescription This parameter is required.
         */
        public Builder appDescription(final java.lang.String appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param command This parameter is required.
         */
        public Builder command(final java.lang.String command) {
            this.props.command(command);
            return this;
        }

        /**
         * @return {@code this}
         * @param commandArgs This parameter is required.
         */
        public Builder commandArgs(final java.lang.String commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }

        /**
         * @return {@code this}
         * @param customHostAlias This parameter is required.
         */
        public Builder customHostAlias(final java.lang.String customHostAlias) {
            this.props.customHostAlias(customHostAlias);
            return this;
        }

        /**
         * @return {@code this}
         * @param deploy This parameter is required.
         */
        public Builder deploy(final java.lang.Boolean deploy) {
            this.props.deploy(deploy);
            return this;
        }
        /**
         * @return {@code this}
         * @param deploy This parameter is required.
         */
        public Builder deploy(final com.aliyun.ros.cdk.core.IResolvable deploy) {
            this.props.deploy(deploy);
            return this;
        }

        /**
         * @return {@code this}
         * @param edasContainerVersion This parameter is required.
         */
        public Builder edasContainerVersion(final java.lang.String edasContainerVersion) {
            this.props.edasContainerVersion(edasContainerVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param envs This parameter is required.
         */
        public Builder envs(final java.lang.String envs) {
            this.props.envs(envs);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageUrl This parameter is required.
         */
        public Builder imageUrl(final java.lang.String imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param jarStartArgs This parameter is required.
         */
        public Builder jarStartArgs(final java.lang.String jarStartArgs) {
            this.props.jarStartArgs(jarStartArgs);
            return this;
        }

        /**
         * @return {@code this}
         * @param jarStartOptions This parameter is required.
         */
        public Builder jarStartOptions(final java.lang.String jarStartOptions) {
            this.props.jarStartOptions(jarStartOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param jdk This parameter is required.
         */
        public Builder jdk(final java.lang.String jdk) {
            this.props.jdk(jdk);
            return this;
        }

        /**
         * @return {@code this}
         * @param liveness This parameter is required.
         */
        public Builder liveness(final java.lang.String liveness) {
            this.props.liveness(liveness);
            return this;
        }

        /**
         * @return {@code this}
         * @param mountDesc This parameter is required.
         */
        public Builder mountDesc(final java.lang.String mountDesc) {
            this.props.mountDesc(mountDesc);
            return this;
        }

        /**
         * @return {@code this}
         * @param mountHost This parameter is required.
         */
        public Builder mountHost(final java.lang.String mountHost) {
            this.props.mountHost(mountHost);
            return this;
        }

        /**
         * @return {@code this}
         * @param nasId This parameter is required.
         */
        public Builder nasId(final java.lang.String nasId) {
            this.props.nasId(nasId);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageUrl This parameter is required.
         */
        public Builder packageUrl(final java.lang.String packageUrl) {
            this.props.packageUrl(packageUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageVersion This parameter is required.
         */
        public Builder packageVersion(final java.lang.String packageVersion) {
            this.props.packageVersion(packageVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param postStart This parameter is required.
         */
        public Builder postStart(final java.lang.String postStart) {
            this.props.postStart(postStart);
            return this;
        }

        /**
         * @return {@code this}
         * @param preStop This parameter is required.
         */
        public Builder preStop(final java.lang.String preStop) {
            this.props.preStop(preStop);
            return this;
        }

        /**
         * @return {@code this}
         * @param readiness This parameter is required.
         */
        public Builder readiness(final java.lang.String readiness) {
            this.props.readiness(readiness);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsConfigs This parameter is required.
         */
        public Builder slsConfigs(final java.lang.String slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }

        /**
         * @return {@code this}
         * @param timezone This parameter is required.
         */
        public Builder timezone(final java.lang.String timezone) {
            this.props.timezone(timezone);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param warStartOptions This parameter is required.
         */
        public Builder warStartOptions(final java.lang.String warStartOptions) {
            this.props.warStartOptions(warStartOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param webContainer This parameter is required.
         */
        public Builder webContainer(final java.lang.String webContainer) {
            this.props.webContainer(webContainer);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sae.RosApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.RosApplication build() {
            return new com.aliyun.ros.cdk.sae.RosApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
