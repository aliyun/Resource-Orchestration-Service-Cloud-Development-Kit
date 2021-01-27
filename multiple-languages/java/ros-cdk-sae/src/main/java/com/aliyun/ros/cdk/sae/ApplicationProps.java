package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a `ALIYUN::SAE::Application`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.535Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.ApplicationProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationProps.Jsii$Proxy.class)
public interface ApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getCpu();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getMemory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getNamespaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPackageType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getReplicas();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAppDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCommand() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCommandArgs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCustomHostAlias() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEdasContainerVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEnvs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getImageUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getJarStartArgs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getJarStartOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getJdk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLiveness() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMountDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMountHost() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNasId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPackageUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPackageVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPostStart() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPreStop() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getReadiness() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSlsConfigs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTimezone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getWarStartOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getWebContainer() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationProps> {
        private java.lang.String appName;
        private java.lang.Number cpu;
        private java.lang.Number memory;
        private java.lang.String namespaceId;
        private java.lang.String packageType;
        private java.lang.Number replicas;
        private java.lang.String appDescription;
        private java.lang.String command;
        private java.lang.String commandArgs;
        private java.lang.String customHostAlias;
        private java.lang.Object deploy;
        private java.lang.String edasContainerVersion;
        private java.lang.String envs;
        private java.lang.String imageUrl;
        private java.lang.String jarStartArgs;
        private java.lang.String jarStartOptions;
        private java.lang.String jdk;
        private java.lang.String liveness;
        private java.lang.String mountDesc;
        private java.lang.String mountHost;
        private java.lang.String nasId;
        private java.lang.String packageUrl;
        private java.lang.String packageVersion;
        private java.lang.String postStart;
        private java.lang.String preStop;
        private java.lang.String readiness;
        private java.lang.String securityGroupId;
        private java.lang.String slsConfigs;
        private java.lang.String timezone;
        private java.lang.String vpcId;
        private java.lang.String vSwitchId;
        private java.lang.String warStartOptions;
        private java.lang.String webContainer;

        /**
         * Sets the value of {@link ApplicationProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCpu}
         * @param cpu the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMemory}
         * @param memory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageType}
         * @param packageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getReplicas}
         * @param replicas the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicas(java.lang.Number replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAppDescription}
         * @param appDescription the value to be set.
         * @return {@code this}
         */
        public Builder appDescription(java.lang.String appDescription) {
            this.appDescription = appDescription;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCommand}
         * @param command the value to be set.
         * @return {@code this}
         */
        public Builder command(java.lang.String command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCommandArgs}
         * @param commandArgs the value to be set.
         * @return {@code this}
         */
        public Builder commandArgs(java.lang.String commandArgs) {
            this.commandArgs = commandArgs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCustomHostAlias}
         * @param customHostAlias the value to be set.
         * @return {@code this}
         */
        public Builder customHostAlias(java.lang.String customHostAlias) {
            this.customHostAlias = customHostAlias;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDeploy}
         * @param deploy the value to be set.
         * @return {@code this}
         */
        public Builder deploy(java.lang.Boolean deploy) {
            this.deploy = deploy;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDeploy}
         * @param deploy the value to be set.
         * @return {@code this}
         */
        public Builder deploy(com.aliyun.ros.cdk.core.IResolvable deploy) {
            this.deploy = deploy;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getEdasContainerVersion}
         * @param edasContainerVersion the value to be set.
         * @return {@code this}
         */
        public Builder edasContainerVersion(java.lang.String edasContainerVersion) {
            this.edasContainerVersion = edasContainerVersion;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getEnvs}
         * @param envs the value to be set.
         * @return {@code this}
         */
        public Builder envs(java.lang.String envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getImageUrl}
         * @param imageUrl the value to be set.
         * @return {@code this}
         */
        public Builder imageUrl(java.lang.String imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJarStartArgs}
         * @param jarStartArgs the value to be set.
         * @return {@code this}
         */
        public Builder jarStartArgs(java.lang.String jarStartArgs) {
            this.jarStartArgs = jarStartArgs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJarStartOptions}
         * @param jarStartOptions the value to be set.
         * @return {@code this}
         */
        public Builder jarStartOptions(java.lang.String jarStartOptions) {
            this.jarStartOptions = jarStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJdk}
         * @param jdk the value to be set.
         * @return {@code this}
         */
        public Builder jdk(java.lang.String jdk) {
            this.jdk = jdk;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getLiveness}
         * @param liveness the value to be set.
         * @return {@code this}
         */
        public Builder liveness(java.lang.String liveness) {
            this.liveness = liveness;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMountDesc}
         * @param mountDesc the value to be set.
         * @return {@code this}
         */
        public Builder mountDesc(java.lang.String mountDesc) {
            this.mountDesc = mountDesc;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMountHost}
         * @param mountHost the value to be set.
         * @return {@code this}
         */
        public Builder mountHost(java.lang.String mountHost) {
            this.mountHost = mountHost;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getNasId}
         * @param nasId the value to be set.
         * @return {@code this}
         */
        public Builder nasId(java.lang.String nasId) {
            this.nasId = nasId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageUrl}
         * @param packageUrl the value to be set.
         * @return {@code this}
         */
        public Builder packageUrl(java.lang.String packageUrl) {
            this.packageUrl = packageUrl;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageVersion}
         * @param packageVersion the value to be set.
         * @return {@code this}
         */
        public Builder packageVersion(java.lang.String packageVersion) {
            this.packageVersion = packageVersion;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPostStart}
         * @param postStart the value to be set.
         * @return {@code this}
         */
        public Builder postStart(java.lang.String postStart) {
            this.postStart = postStart;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPreStop}
         * @param preStop the value to be set.
         * @return {@code this}
         */
        public Builder preStop(java.lang.String preStop) {
            this.preStop = preStop;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getReadiness}
         * @param readiness the value to be set.
         * @return {@code this}
         */
        public Builder readiness(java.lang.String readiness) {
            this.readiness = readiness;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSlsConfigs}
         * @param slsConfigs the value to be set.
         * @return {@code this}
         */
        public Builder slsConfigs(java.lang.String slsConfigs) {
            this.slsConfigs = slsConfigs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getTimezone}
         * @param timezone the value to be set.
         * @return {@code this}
         */
        public Builder timezone(java.lang.String timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getWarStartOptions}
         * @param warStartOptions the value to be set.
         * @return {@code this}
         */
        public Builder warStartOptions(java.lang.String warStartOptions) {
            this.warStartOptions = warStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getWebContainer}
         * @param webContainer the value to be set.
         * @return {@code this}
         */
        public Builder webContainer(java.lang.String webContainer) {
            this.webContainer = webContainer;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationProps build() {
            return new Jsii$Proxy(appName, cpu, memory, namespaceId, packageType, replicas, appDescription, command, commandArgs, customHostAlias, deploy, edasContainerVersion, envs, imageUrl, jarStartArgs, jarStartOptions, jdk, liveness, mountDesc, mountHost, nasId, packageUrl, packageVersion, postStart, preStop, readiness, securityGroupId, slsConfigs, timezone, vpcId, vSwitchId, warStartOptions, webContainer);
        }
    }

    /**
     * An implementation for {@link ApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationProps {
        private final java.lang.String appName;
        private final java.lang.Number cpu;
        private final java.lang.Number memory;
        private final java.lang.String namespaceId;
        private final java.lang.String packageType;
        private final java.lang.Number replicas;
        private final java.lang.String appDescription;
        private final java.lang.String command;
        private final java.lang.String commandArgs;
        private final java.lang.String customHostAlias;
        private final java.lang.Object deploy;
        private final java.lang.String edasContainerVersion;
        private final java.lang.String envs;
        private final java.lang.String imageUrl;
        private final java.lang.String jarStartArgs;
        private final java.lang.String jarStartOptions;
        private final java.lang.String jdk;
        private final java.lang.String liveness;
        private final java.lang.String mountDesc;
        private final java.lang.String mountHost;
        private final java.lang.String nasId;
        private final java.lang.String packageUrl;
        private final java.lang.String packageVersion;
        private final java.lang.String postStart;
        private final java.lang.String preStop;
        private final java.lang.String readiness;
        private final java.lang.String securityGroupId;
        private final java.lang.String slsConfigs;
        private final java.lang.String timezone;
        private final java.lang.String vpcId;
        private final java.lang.String vSwitchId;
        private final java.lang.String warStartOptions;
        private final java.lang.String webContainer;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.packageType = software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.replicas = software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.appDescription = software.amazon.jsii.Kernel.get(this, "appDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.commandArgs = software.amazon.jsii.Kernel.get(this, "commandArgs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.customHostAlias = software.amazon.jsii.Kernel.get(this, "customHostAlias", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.deploy = software.amazon.jsii.Kernel.get(this, "deploy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edasContainerVersion = software.amazon.jsii.Kernel.get(this, "edasContainerVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.envs = software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.imageUrl = software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.jarStartArgs = software.amazon.jsii.Kernel.get(this, "jarStartArgs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.jarStartOptions = software.amazon.jsii.Kernel.get(this, "jarStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.jdk = software.amazon.jsii.Kernel.get(this, "jdk", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.liveness = software.amazon.jsii.Kernel.get(this, "liveness", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.mountDesc = software.amazon.jsii.Kernel.get(this, "mountDesc", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.mountHost = software.amazon.jsii.Kernel.get(this, "mountHost", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.nasId = software.amazon.jsii.Kernel.get(this, "nasId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.packageUrl = software.amazon.jsii.Kernel.get(this, "packageUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.packageVersion = software.amazon.jsii.Kernel.get(this, "packageVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.postStart = software.amazon.jsii.Kernel.get(this, "postStart", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.preStop = software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.readiness = software.amazon.jsii.Kernel.get(this, "readiness", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.slsConfigs = software.amazon.jsii.Kernel.get(this, "slsConfigs", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.timezone = software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.warStartOptions = software.amazon.jsii.Kernel.get(this, "warStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.webContainer = software.amazon.jsii.Kernel.get(this, "webContainer", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String appName, final java.lang.Number cpu, final java.lang.Number memory, final java.lang.String namespaceId, final java.lang.String packageType, final java.lang.Number replicas, final java.lang.String appDescription, final java.lang.String command, final java.lang.String commandArgs, final java.lang.String customHostAlias, final java.lang.Object deploy, final java.lang.String edasContainerVersion, final java.lang.String envs, final java.lang.String imageUrl, final java.lang.String jarStartArgs, final java.lang.String jarStartOptions, final java.lang.String jdk, final java.lang.String liveness, final java.lang.String mountDesc, final java.lang.String mountHost, final java.lang.String nasId, final java.lang.String packageUrl, final java.lang.String packageVersion, final java.lang.String postStart, final java.lang.String preStop, final java.lang.String readiness, final java.lang.String securityGroupId, final java.lang.String slsConfigs, final java.lang.String timezone, final java.lang.String vpcId, final java.lang.String vSwitchId, final java.lang.String warStartOptions, final java.lang.String webContainer) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(appName, "appName is required");
            this.cpu = java.util.Objects.requireNonNull(cpu, "cpu is required");
            this.memory = java.util.Objects.requireNonNull(memory, "memory is required");
            this.namespaceId = java.util.Objects.requireNonNull(namespaceId, "namespaceId is required");
            this.packageType = java.util.Objects.requireNonNull(packageType, "packageType is required");
            this.replicas = java.util.Objects.requireNonNull(replicas, "replicas is required");
            this.appDescription = appDescription;
            this.command = command;
            this.commandArgs = commandArgs;
            this.customHostAlias = customHostAlias;
            this.deploy = deploy;
            this.edasContainerVersion = edasContainerVersion;
            this.envs = envs;
            this.imageUrl = imageUrl;
            this.jarStartArgs = jarStartArgs;
            this.jarStartOptions = jarStartOptions;
            this.jdk = jdk;
            this.liveness = liveness;
            this.mountDesc = mountDesc;
            this.mountHost = mountHost;
            this.nasId = nasId;
            this.packageUrl = packageUrl;
            this.packageVersion = packageVersion;
            this.postStart = postStart;
            this.preStop = preStop;
            this.readiness = readiness;
            this.securityGroupId = securityGroupId;
            this.slsConfigs = slsConfigs;
            this.timezone = timezone;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
            this.warStartOptions = warStartOptions;
            this.webContainer = webContainer;
        }

        @Override
        public final java.lang.String getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Number getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Number getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.String getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.String getPackageType() {
            return this.packageType;
        }

        @Override
        public final java.lang.Number getReplicas() {
            return this.replicas;
        }

        @Override
        public final java.lang.String getAppDescription() {
            return this.appDescription;
        }

        @Override
        public final java.lang.String getCommand() {
            return this.command;
        }

        @Override
        public final java.lang.String getCommandArgs() {
            return this.commandArgs;
        }

        @Override
        public final java.lang.String getCustomHostAlias() {
            return this.customHostAlias;
        }

        @Override
        public final java.lang.Object getDeploy() {
            return this.deploy;
        }

        @Override
        public final java.lang.String getEdasContainerVersion() {
            return this.edasContainerVersion;
        }

        @Override
        public final java.lang.String getEnvs() {
            return this.envs;
        }

        @Override
        public final java.lang.String getImageUrl() {
            return this.imageUrl;
        }

        @Override
        public final java.lang.String getJarStartArgs() {
            return this.jarStartArgs;
        }

        @Override
        public final java.lang.String getJarStartOptions() {
            return this.jarStartOptions;
        }

        @Override
        public final java.lang.String getJdk() {
            return this.jdk;
        }

        @Override
        public final java.lang.String getLiveness() {
            return this.liveness;
        }

        @Override
        public final java.lang.String getMountDesc() {
            return this.mountDesc;
        }

        @Override
        public final java.lang.String getMountHost() {
            return this.mountHost;
        }

        @Override
        public final java.lang.String getNasId() {
            return this.nasId;
        }

        @Override
        public final java.lang.String getPackageUrl() {
            return this.packageUrl;
        }

        @Override
        public final java.lang.String getPackageVersion() {
            return this.packageVersion;
        }

        @Override
        public final java.lang.String getPostStart() {
            return this.postStart;
        }

        @Override
        public final java.lang.String getPreStop() {
            return this.preStop;
        }

        @Override
        public final java.lang.String getReadiness() {
            return this.readiness;
        }

        @Override
        public final java.lang.String getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.String getSlsConfigs() {
            return this.slsConfigs;
        }

        @Override
        public final java.lang.String getTimezone() {
            return this.timezone;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.String getWarStartOptions() {
            return this.warStartOptions;
        }

        @Override
        public final java.lang.String getWebContainer() {
            return this.webContainer;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appName", om.valueToTree(this.getAppName()));
            data.set("cpu", om.valueToTree(this.getCpu()));
            data.set("memory", om.valueToTree(this.getMemory()));
            data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            data.set("packageType", om.valueToTree(this.getPackageType()));
            data.set("replicas", om.valueToTree(this.getReplicas()));
            if (this.getAppDescription() != null) {
                data.set("appDescription", om.valueToTree(this.getAppDescription()));
            }
            if (this.getCommand() != null) {
                data.set("command", om.valueToTree(this.getCommand()));
            }
            if (this.getCommandArgs() != null) {
                data.set("commandArgs", om.valueToTree(this.getCommandArgs()));
            }
            if (this.getCustomHostAlias() != null) {
                data.set("customHostAlias", om.valueToTree(this.getCustomHostAlias()));
            }
            if (this.getDeploy() != null) {
                data.set("deploy", om.valueToTree(this.getDeploy()));
            }
            if (this.getEdasContainerVersion() != null) {
                data.set("edasContainerVersion", om.valueToTree(this.getEdasContainerVersion()));
            }
            if (this.getEnvs() != null) {
                data.set("envs", om.valueToTree(this.getEnvs()));
            }
            if (this.getImageUrl() != null) {
                data.set("imageUrl", om.valueToTree(this.getImageUrl()));
            }
            if (this.getJarStartArgs() != null) {
                data.set("jarStartArgs", om.valueToTree(this.getJarStartArgs()));
            }
            if (this.getJarStartOptions() != null) {
                data.set("jarStartOptions", om.valueToTree(this.getJarStartOptions()));
            }
            if (this.getJdk() != null) {
                data.set("jdk", om.valueToTree(this.getJdk()));
            }
            if (this.getLiveness() != null) {
                data.set("liveness", om.valueToTree(this.getLiveness()));
            }
            if (this.getMountDesc() != null) {
                data.set("mountDesc", om.valueToTree(this.getMountDesc()));
            }
            if (this.getMountHost() != null) {
                data.set("mountHost", om.valueToTree(this.getMountHost()));
            }
            if (this.getNasId() != null) {
                data.set("nasId", om.valueToTree(this.getNasId()));
            }
            if (this.getPackageUrl() != null) {
                data.set("packageUrl", om.valueToTree(this.getPackageUrl()));
            }
            if (this.getPackageVersion() != null) {
                data.set("packageVersion", om.valueToTree(this.getPackageVersion()));
            }
            if (this.getPostStart() != null) {
                data.set("postStart", om.valueToTree(this.getPostStart()));
            }
            if (this.getPreStop() != null) {
                data.set("preStop", om.valueToTree(this.getPreStop()));
            }
            if (this.getReadiness() != null) {
                data.set("readiness", om.valueToTree(this.getReadiness()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSlsConfigs() != null) {
                data.set("slsConfigs", om.valueToTree(this.getSlsConfigs()));
            }
            if (this.getTimezone() != null) {
                data.set("timezone", om.valueToTree(this.getTimezone()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getWarStartOptions() != null) {
                data.set("warStartOptions", om.valueToTree(this.getWarStartOptions()));
            }
            if (this.getWebContainer() != null) {
                data.set("webContainer", om.valueToTree(this.getWebContainer()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.ApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationProps.Jsii$Proxy that = (ApplicationProps.Jsii$Proxy) o;

            if (!appName.equals(that.appName)) return false;
            if (!cpu.equals(that.cpu)) return false;
            if (!memory.equals(that.memory)) return false;
            if (!namespaceId.equals(that.namespaceId)) return false;
            if (!packageType.equals(that.packageType)) return false;
            if (!replicas.equals(that.replicas)) return false;
            if (this.appDescription != null ? !this.appDescription.equals(that.appDescription) : that.appDescription != null) return false;
            if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
            if (this.commandArgs != null ? !this.commandArgs.equals(that.commandArgs) : that.commandArgs != null) return false;
            if (this.customHostAlias != null ? !this.customHostAlias.equals(that.customHostAlias) : that.customHostAlias != null) return false;
            if (this.deploy != null ? !this.deploy.equals(that.deploy) : that.deploy != null) return false;
            if (this.edasContainerVersion != null ? !this.edasContainerVersion.equals(that.edasContainerVersion) : that.edasContainerVersion != null) return false;
            if (this.envs != null ? !this.envs.equals(that.envs) : that.envs != null) return false;
            if (this.imageUrl != null ? !this.imageUrl.equals(that.imageUrl) : that.imageUrl != null) return false;
            if (this.jarStartArgs != null ? !this.jarStartArgs.equals(that.jarStartArgs) : that.jarStartArgs != null) return false;
            if (this.jarStartOptions != null ? !this.jarStartOptions.equals(that.jarStartOptions) : that.jarStartOptions != null) return false;
            if (this.jdk != null ? !this.jdk.equals(that.jdk) : that.jdk != null) return false;
            if (this.liveness != null ? !this.liveness.equals(that.liveness) : that.liveness != null) return false;
            if (this.mountDesc != null ? !this.mountDesc.equals(that.mountDesc) : that.mountDesc != null) return false;
            if (this.mountHost != null ? !this.mountHost.equals(that.mountHost) : that.mountHost != null) return false;
            if (this.nasId != null ? !this.nasId.equals(that.nasId) : that.nasId != null) return false;
            if (this.packageUrl != null ? !this.packageUrl.equals(that.packageUrl) : that.packageUrl != null) return false;
            if (this.packageVersion != null ? !this.packageVersion.equals(that.packageVersion) : that.packageVersion != null) return false;
            if (this.postStart != null ? !this.postStart.equals(that.postStart) : that.postStart != null) return false;
            if (this.preStop != null ? !this.preStop.equals(that.preStop) : that.preStop != null) return false;
            if (this.readiness != null ? !this.readiness.equals(that.readiness) : that.readiness != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.slsConfigs != null ? !this.slsConfigs.equals(that.slsConfigs) : that.slsConfigs != null) return false;
            if (this.timezone != null ? !this.timezone.equals(that.timezone) : that.timezone != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            if (this.warStartOptions != null ? !this.warStartOptions.equals(that.warStartOptions) : that.warStartOptions != null) return false;
            return this.webContainer != null ? this.webContainer.equals(that.webContainer) : that.webContainer == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName.hashCode();
            result = 31 * result + (this.cpu.hashCode());
            result = 31 * result + (this.memory.hashCode());
            result = 31 * result + (this.namespaceId.hashCode());
            result = 31 * result + (this.packageType.hashCode());
            result = 31 * result + (this.replicas.hashCode());
            result = 31 * result + (this.appDescription != null ? this.appDescription.hashCode() : 0);
            result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
            result = 31 * result + (this.commandArgs != null ? this.commandArgs.hashCode() : 0);
            result = 31 * result + (this.customHostAlias != null ? this.customHostAlias.hashCode() : 0);
            result = 31 * result + (this.deploy != null ? this.deploy.hashCode() : 0);
            result = 31 * result + (this.edasContainerVersion != null ? this.edasContainerVersion.hashCode() : 0);
            result = 31 * result + (this.envs != null ? this.envs.hashCode() : 0);
            result = 31 * result + (this.imageUrl != null ? this.imageUrl.hashCode() : 0);
            result = 31 * result + (this.jarStartArgs != null ? this.jarStartArgs.hashCode() : 0);
            result = 31 * result + (this.jarStartOptions != null ? this.jarStartOptions.hashCode() : 0);
            result = 31 * result + (this.jdk != null ? this.jdk.hashCode() : 0);
            result = 31 * result + (this.liveness != null ? this.liveness.hashCode() : 0);
            result = 31 * result + (this.mountDesc != null ? this.mountDesc.hashCode() : 0);
            result = 31 * result + (this.mountHost != null ? this.mountHost.hashCode() : 0);
            result = 31 * result + (this.nasId != null ? this.nasId.hashCode() : 0);
            result = 31 * result + (this.packageUrl != null ? this.packageUrl.hashCode() : 0);
            result = 31 * result + (this.packageVersion != null ? this.packageVersion.hashCode() : 0);
            result = 31 * result + (this.postStart != null ? this.postStart.hashCode() : 0);
            result = 31 * result + (this.preStop != null ? this.preStop.hashCode() : 0);
            result = 31 * result + (this.readiness != null ? this.readiness.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.slsConfigs != null ? this.slsConfigs.hashCode() : 0);
            result = 31 * result + (this.timezone != null ? this.timezone.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.warStartOptions != null ? this.warStartOptions.hashCode() : 0);
            result = 31 * result + (this.webContainer != null ? this.webContainer.hashCode() : 0);
            return result;
        }
    }
}
