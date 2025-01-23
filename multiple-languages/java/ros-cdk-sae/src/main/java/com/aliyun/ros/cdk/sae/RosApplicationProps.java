package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>RosApplication</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:44.006Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplicationProps")
@software.amazon.jsii.Jsii.Proxy(RosApplicationProps.Jsii$Proxy.class)
public interface RosApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCpu();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMemory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPackageType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicas();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcrAssumeRoleArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcrInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppSource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAssociateEip() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBaseAppId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandArgs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigMapMountDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomHostAlias() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdasContainerVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableEbpf() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImagePullSecrets() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJarStartArgs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJarStartOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJdk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKafkaConfigs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLiveness() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMicroRegistration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMicroRegistrationConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMountDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMountHost() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNasConfigs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNasId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssAkId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssAkSecret() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssMountDescs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhpArmsConfigLocation() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhpConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhpConfigLocation() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPostStart() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreStop() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProgrammingLanguage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPvtzDiscoverySvc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPython() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPythonModules() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReadiness() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSaeVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsConfigs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTerminationGracePeriodSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimezone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTomcatConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWarStartOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebContainer() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplicationProps> {
        java.lang.Object appName;
        java.lang.Object cpu;
        java.lang.Object memory;
        java.lang.Object namespaceId;
        java.lang.Object packageType;
        java.lang.Object replicas;
        java.lang.Object acrAssumeRoleArn;
        java.lang.Object acrInstanceId;
        java.lang.Object appDescription;
        java.lang.Object appSource;
        java.lang.Object associateEip;
        java.lang.Object autoConfig;
        java.lang.Object baseAppId;
        java.lang.Object command;
        java.lang.Object commandArgs;
        java.lang.Object configMapMountDesc;
        java.lang.Object customHostAlias;
        java.lang.Object deploy;
        java.lang.Object edasContainerVersion;
        java.lang.Object enableEbpf;
        java.lang.Object envs;
        java.lang.Object imagePullSecrets;
        java.lang.Object imageUrl;
        java.lang.Object jarStartArgs;
        java.lang.Object jarStartOptions;
        java.lang.Object jdk;
        java.lang.Object kafkaConfigs;
        java.lang.Object liveness;
        java.lang.Object microRegistration;
        java.lang.Object microRegistrationConfig;
        java.lang.Object mountDesc;
        java.lang.Object mountHost;
        java.lang.Object nasConfigs;
        java.lang.Object nasId;
        java.lang.Object ossAkId;
        java.lang.Object ossAkSecret;
        java.lang.Object ossMountDescs;
        java.lang.Object packageUrl;
        java.lang.Object packageVersion;
        java.lang.Object php;
        java.lang.Object phpArmsConfigLocation;
        java.lang.Object phpConfig;
        java.lang.Object phpConfigLocation;
        java.lang.Object postStart;
        java.lang.Object preStop;
        java.lang.Object programmingLanguage;
        java.lang.Object pvtzDiscoverySvc;
        java.lang.Object python;
        java.lang.Object pythonModules;
        java.lang.Object readiness;
        java.lang.Object saeVersion;
        java.lang.Object securityGroupId;
        java.lang.Object serviceTags;
        java.lang.Object slsConfigs;
        java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> tags;
        java.lang.Object terminationGracePeriodSeconds;
        java.lang.Object timezone;
        java.lang.Object tomcatConfig;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object warStartOptions;
        java.lang.Object webContainer;

        /**
         * Sets the value of {@link RosApplicationProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getCpu}
         * @param cpu the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getCpu}
         * @param cpu the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMemory}
         * @param memory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMemory}
         * @param memory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPackageType}
         * @param packageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPackageType}
         * @param packageType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder packageType(com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getReplicas}
         * @param replicas the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicas(java.lang.Number replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getReplicas}
         * @param replicas the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicas(com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAcrAssumeRoleArn}
         * @param acrAssumeRoleArn the value to be set.
         * @return {@code this}
         */
        public Builder acrAssumeRoleArn(java.lang.String acrAssumeRoleArn) {
            this.acrAssumeRoleArn = acrAssumeRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAcrAssumeRoleArn}
         * @param acrAssumeRoleArn the value to be set.
         * @return {@code this}
         */
        public Builder acrAssumeRoleArn(com.aliyun.ros.cdk.core.IResolvable acrAssumeRoleArn) {
            this.acrAssumeRoleArn = acrAssumeRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAcrInstanceId}
         * @param acrInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder acrInstanceId(java.lang.String acrInstanceId) {
            this.acrInstanceId = acrInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAcrInstanceId}
         * @param acrInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder acrInstanceId(com.aliyun.ros.cdk.core.IResolvable acrInstanceId) {
            this.acrInstanceId = acrInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAppDescription}
         * @param appDescription the value to be set.
         * @return {@code this}
         */
        public Builder appDescription(java.lang.String appDescription) {
            this.appDescription = appDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAppDescription}
         * @param appDescription the value to be set.
         * @return {@code this}
         */
        public Builder appDescription(com.aliyun.ros.cdk.core.IResolvable appDescription) {
            this.appDescription = appDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAppSource}
         * @param appSource the value to be set.
         * @return {@code this}
         */
        public Builder appSource(java.lang.String appSource) {
            this.appSource = appSource;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAppSource}
         * @param appSource the value to be set.
         * @return {@code this}
         */
        public Builder appSource(com.aliyun.ros.cdk.core.IResolvable appSource) {
            this.appSource = appSource;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAssociateEip}
         * @param associateEip the value to be set.
         * @return {@code this}
         */
        public Builder associateEip(java.lang.Boolean associateEip) {
            this.associateEip = associateEip;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAssociateEip}
         * @param associateEip the value to be set.
         * @return {@code this}
         */
        public Builder associateEip(com.aliyun.ros.cdk.core.IResolvable associateEip) {
            this.associateEip = associateEip;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAutoConfig}
         * @param autoConfig the value to be set.
         * @return {@code this}
         */
        public Builder autoConfig(java.lang.Boolean autoConfig) {
            this.autoConfig = autoConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAutoConfig}
         * @param autoConfig the value to be set.
         * @return {@code this}
         */
        public Builder autoConfig(com.aliyun.ros.cdk.core.IResolvable autoConfig) {
            this.autoConfig = autoConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getBaseAppId}
         * @param baseAppId the value to be set.
         * @return {@code this}
         */
        public Builder baseAppId(java.lang.String baseAppId) {
            this.baseAppId = baseAppId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getBaseAppId}
         * @param baseAppId the value to be set.
         * @return {@code this}
         */
        public Builder baseAppId(com.aliyun.ros.cdk.core.IResolvable baseAppId) {
            this.baseAppId = baseAppId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getCommand}
         * @param command the value to be set.
         * @return {@code this}
         */
        public Builder command(java.lang.String command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getCommand}
         * @param command the value to be set.
         * @return {@code this}
         */
        public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getCommandArgs}
         * @param commandArgs the value to be set.
         * @return {@code this}
         */
        public Builder commandArgs(java.lang.String commandArgs) {
            this.commandArgs = commandArgs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getCommandArgs}
         * @param commandArgs the value to be set.
         * @return {@code this}
         */
        public Builder commandArgs(com.aliyun.ros.cdk.core.IResolvable commandArgs) {
            this.commandArgs = commandArgs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getConfigMapMountDesc}
         * @param configMapMountDesc the value to be set.
         * @return {@code this}
         */
        public Builder configMapMountDesc(java.lang.String configMapMountDesc) {
            this.configMapMountDesc = configMapMountDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getConfigMapMountDesc}
         * @param configMapMountDesc the value to be set.
         * @return {@code this}
         */
        public Builder configMapMountDesc(com.aliyun.ros.cdk.core.IResolvable configMapMountDesc) {
            this.configMapMountDesc = configMapMountDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getCustomHostAlias}
         * @param customHostAlias the value to be set.
         * @return {@code this}
         */
        public Builder customHostAlias(java.lang.String customHostAlias) {
            this.customHostAlias = customHostAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getCustomHostAlias}
         * @param customHostAlias the value to be set.
         * @return {@code this}
         */
        public Builder customHostAlias(com.aliyun.ros.cdk.core.IResolvable customHostAlias) {
            this.customHostAlias = customHostAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getDeploy}
         * @param deploy the value to be set.
         * @return {@code this}
         */
        public Builder deploy(java.lang.Boolean deploy) {
            this.deploy = deploy;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getDeploy}
         * @param deploy the value to be set.
         * @return {@code this}
         */
        public Builder deploy(com.aliyun.ros.cdk.core.IResolvable deploy) {
            this.deploy = deploy;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getEdasContainerVersion}
         * @param edasContainerVersion the value to be set.
         * @return {@code this}
         */
        public Builder edasContainerVersion(java.lang.String edasContainerVersion) {
            this.edasContainerVersion = edasContainerVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getEdasContainerVersion}
         * @param edasContainerVersion the value to be set.
         * @return {@code this}
         */
        public Builder edasContainerVersion(com.aliyun.ros.cdk.core.IResolvable edasContainerVersion) {
            this.edasContainerVersion = edasContainerVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getEnableEbpf}
         * @param enableEbpf the value to be set.
         * @return {@code this}
         */
        public Builder enableEbpf(java.lang.String enableEbpf) {
            this.enableEbpf = enableEbpf;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getEnableEbpf}
         * @param enableEbpf the value to be set.
         * @return {@code this}
         */
        public Builder enableEbpf(com.aliyun.ros.cdk.core.IResolvable enableEbpf) {
            this.enableEbpf = enableEbpf;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getEnvs}
         * @param envs the value to be set.
         * @return {@code this}
         */
        public Builder envs(java.lang.String envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getEnvs}
         * @param envs the value to be set.
         * @return {@code this}
         */
        public Builder envs(com.aliyun.ros.cdk.core.IResolvable envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getImagePullSecrets}
         * @param imagePullSecrets the value to be set.
         * @return {@code this}
         */
        public Builder imagePullSecrets(java.lang.String imagePullSecrets) {
            this.imagePullSecrets = imagePullSecrets;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getImagePullSecrets}
         * @param imagePullSecrets the value to be set.
         * @return {@code this}
         */
        public Builder imagePullSecrets(com.aliyun.ros.cdk.core.IResolvable imagePullSecrets) {
            this.imagePullSecrets = imagePullSecrets;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getImageUrl}
         * @param imageUrl the value to be set.
         * @return {@code this}
         */
        public Builder imageUrl(java.lang.String imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getImageUrl}
         * @param imageUrl the value to be set.
         * @return {@code this}
         */
        public Builder imageUrl(com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getJarStartArgs}
         * @param jarStartArgs the value to be set.
         * @return {@code this}
         */
        public Builder jarStartArgs(java.lang.String jarStartArgs) {
            this.jarStartArgs = jarStartArgs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getJarStartArgs}
         * @param jarStartArgs the value to be set.
         * @return {@code this}
         */
        public Builder jarStartArgs(com.aliyun.ros.cdk.core.IResolvable jarStartArgs) {
            this.jarStartArgs = jarStartArgs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getJarStartOptions}
         * @param jarStartOptions the value to be set.
         * @return {@code this}
         */
        public Builder jarStartOptions(java.lang.String jarStartOptions) {
            this.jarStartOptions = jarStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getJarStartOptions}
         * @param jarStartOptions the value to be set.
         * @return {@code this}
         */
        public Builder jarStartOptions(com.aliyun.ros.cdk.core.IResolvable jarStartOptions) {
            this.jarStartOptions = jarStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getJdk}
         * @param jdk the value to be set.
         * @return {@code this}
         */
        public Builder jdk(java.lang.String jdk) {
            this.jdk = jdk;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getJdk}
         * @param jdk the value to be set.
         * @return {@code this}
         */
        public Builder jdk(com.aliyun.ros.cdk.core.IResolvable jdk) {
            this.jdk = jdk;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getKafkaConfigs}
         * @param kafkaConfigs the value to be set.
         * @return {@code this}
         */
        public Builder kafkaConfigs(java.lang.String kafkaConfigs) {
            this.kafkaConfigs = kafkaConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getKafkaConfigs}
         * @param kafkaConfigs the value to be set.
         * @return {@code this}
         */
        public Builder kafkaConfigs(com.aliyun.ros.cdk.core.IResolvable kafkaConfigs) {
            this.kafkaConfigs = kafkaConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getLiveness}
         * @param liveness the value to be set.
         * @return {@code this}
         */
        public Builder liveness(java.lang.String liveness) {
            this.liveness = liveness;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getLiveness}
         * @param liveness the value to be set.
         * @return {@code this}
         */
        public Builder liveness(com.aliyun.ros.cdk.core.IResolvable liveness) {
            this.liveness = liveness;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMicroRegistration}
         * @param microRegistration the value to be set.
         * @return {@code this}
         */
        public Builder microRegistration(java.lang.String microRegistration) {
            this.microRegistration = microRegistration;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMicroRegistration}
         * @param microRegistration the value to be set.
         * @return {@code this}
         */
        public Builder microRegistration(com.aliyun.ros.cdk.core.IResolvable microRegistration) {
            this.microRegistration = microRegistration;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMicroRegistrationConfig}
         * @param microRegistrationConfig the value to be set.
         * @return {@code this}
         */
        public Builder microRegistrationConfig(java.lang.String microRegistrationConfig) {
            this.microRegistrationConfig = microRegistrationConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMicroRegistrationConfig}
         * @param microRegistrationConfig the value to be set.
         * @return {@code this}
         */
        public Builder microRegistrationConfig(com.aliyun.ros.cdk.core.IResolvable microRegistrationConfig) {
            this.microRegistrationConfig = microRegistrationConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMountDesc}
         * @param mountDesc the value to be set.
         * @return {@code this}
         */
        public Builder mountDesc(java.lang.String mountDesc) {
            this.mountDesc = mountDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMountDesc}
         * @param mountDesc the value to be set.
         * @return {@code this}
         */
        public Builder mountDesc(com.aliyun.ros.cdk.core.IResolvable mountDesc) {
            this.mountDesc = mountDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMountHost}
         * @param mountHost the value to be set.
         * @return {@code this}
         */
        public Builder mountHost(java.lang.String mountHost) {
            this.mountHost = mountHost;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getMountHost}
         * @param mountHost the value to be set.
         * @return {@code this}
         */
        public Builder mountHost(com.aliyun.ros.cdk.core.IResolvable mountHost) {
            this.mountHost = mountHost;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getNasConfigs}
         * @param nasConfigs the value to be set.
         * @return {@code this}
         */
        public Builder nasConfigs(java.lang.String nasConfigs) {
            this.nasConfigs = nasConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getNasConfigs}
         * @param nasConfigs the value to be set.
         * @return {@code this}
         */
        public Builder nasConfigs(com.aliyun.ros.cdk.core.IResolvable nasConfigs) {
            this.nasConfigs = nasConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getNasId}
         * @param nasId the value to be set.
         * @return {@code this}
         */
        public Builder nasId(java.lang.String nasId) {
            this.nasId = nasId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getNasId}
         * @param nasId the value to be set.
         * @return {@code this}
         */
        public Builder nasId(com.aliyun.ros.cdk.core.IResolvable nasId) {
            this.nasId = nasId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getOssAkId}
         * @param ossAkId the value to be set.
         * @return {@code this}
         */
        public Builder ossAkId(java.lang.String ossAkId) {
            this.ossAkId = ossAkId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getOssAkId}
         * @param ossAkId the value to be set.
         * @return {@code this}
         */
        public Builder ossAkId(com.aliyun.ros.cdk.core.IResolvable ossAkId) {
            this.ossAkId = ossAkId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getOssAkSecret}
         * @param ossAkSecret the value to be set.
         * @return {@code this}
         */
        public Builder ossAkSecret(java.lang.String ossAkSecret) {
            this.ossAkSecret = ossAkSecret;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getOssAkSecret}
         * @param ossAkSecret the value to be set.
         * @return {@code this}
         */
        public Builder ossAkSecret(com.aliyun.ros.cdk.core.IResolvable ossAkSecret) {
            this.ossAkSecret = ossAkSecret;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getOssMountDescs}
         * @param ossMountDescs the value to be set.
         * @return {@code this}
         */
        public Builder ossMountDescs(java.util.List<? extends java.lang.Object> ossMountDescs) {
            this.ossMountDescs = ossMountDescs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getOssMountDescs}
         * @param ossMountDescs the value to be set.
         * @return {@code this}
         */
        public Builder ossMountDescs(com.aliyun.ros.cdk.core.IResolvable ossMountDescs) {
            this.ossMountDescs = ossMountDescs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPackageUrl}
         * @param packageUrl the value to be set.
         * @return {@code this}
         */
        public Builder packageUrl(java.lang.String packageUrl) {
            this.packageUrl = packageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPackageUrl}
         * @param packageUrl the value to be set.
         * @return {@code this}
         */
        public Builder packageUrl(com.aliyun.ros.cdk.core.IResolvable packageUrl) {
            this.packageUrl = packageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPackageVersion}
         * @param packageVersion the value to be set.
         * @return {@code this}
         */
        public Builder packageVersion(java.lang.String packageVersion) {
            this.packageVersion = packageVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPackageVersion}
         * @param packageVersion the value to be set.
         * @return {@code this}
         */
        public Builder packageVersion(com.aliyun.ros.cdk.core.IResolvable packageVersion) {
            this.packageVersion = packageVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPhp}
         * @param php the value to be set.
         * @return {@code this}
         */
        public Builder php(java.lang.String php) {
            this.php = php;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPhp}
         * @param php the value to be set.
         * @return {@code this}
         */
        public Builder php(com.aliyun.ros.cdk.core.IResolvable php) {
            this.php = php;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPhpArmsConfigLocation}
         * @param phpArmsConfigLocation the value to be set.
         * @return {@code this}
         */
        public Builder phpArmsConfigLocation(java.lang.String phpArmsConfigLocation) {
            this.phpArmsConfigLocation = phpArmsConfigLocation;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPhpArmsConfigLocation}
         * @param phpArmsConfigLocation the value to be set.
         * @return {@code this}
         */
        public Builder phpArmsConfigLocation(com.aliyun.ros.cdk.core.IResolvable phpArmsConfigLocation) {
            this.phpArmsConfigLocation = phpArmsConfigLocation;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPhpConfig}
         * @param phpConfig the value to be set.
         * @return {@code this}
         */
        public Builder phpConfig(java.lang.String phpConfig) {
            this.phpConfig = phpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPhpConfig}
         * @param phpConfig the value to be set.
         * @return {@code this}
         */
        public Builder phpConfig(com.aliyun.ros.cdk.core.IResolvable phpConfig) {
            this.phpConfig = phpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPhpConfigLocation}
         * @param phpConfigLocation the value to be set.
         * @return {@code this}
         */
        public Builder phpConfigLocation(java.lang.String phpConfigLocation) {
            this.phpConfigLocation = phpConfigLocation;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPhpConfigLocation}
         * @param phpConfigLocation the value to be set.
         * @return {@code this}
         */
        public Builder phpConfigLocation(com.aliyun.ros.cdk.core.IResolvable phpConfigLocation) {
            this.phpConfigLocation = phpConfigLocation;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPostStart}
         * @param postStart the value to be set.
         * @return {@code this}
         */
        public Builder postStart(java.lang.String postStart) {
            this.postStart = postStart;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPostStart}
         * @param postStart the value to be set.
         * @return {@code this}
         */
        public Builder postStart(com.aliyun.ros.cdk.core.IResolvable postStart) {
            this.postStart = postStart;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPreStop}
         * @param preStop the value to be set.
         * @return {@code this}
         */
        public Builder preStop(java.lang.String preStop) {
            this.preStop = preStop;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPreStop}
         * @param preStop the value to be set.
         * @return {@code this}
         */
        public Builder preStop(com.aliyun.ros.cdk.core.IResolvable preStop) {
            this.preStop = preStop;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getProgrammingLanguage}
         * @param programmingLanguage the value to be set.
         * @return {@code this}
         */
        public Builder programmingLanguage(java.lang.String programmingLanguage) {
            this.programmingLanguage = programmingLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getProgrammingLanguage}
         * @param programmingLanguage the value to be set.
         * @return {@code this}
         */
        public Builder programmingLanguage(com.aliyun.ros.cdk.core.IResolvable programmingLanguage) {
            this.programmingLanguage = programmingLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPvtzDiscoverySvc}
         * @param pvtzDiscoverySvc the value to be set.
         * @return {@code this}
         */
        public Builder pvtzDiscoverySvc(java.lang.String pvtzDiscoverySvc) {
            this.pvtzDiscoverySvc = pvtzDiscoverySvc;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPvtzDiscoverySvc}
         * @param pvtzDiscoverySvc the value to be set.
         * @return {@code this}
         */
        public Builder pvtzDiscoverySvc(com.aliyun.ros.cdk.core.IResolvable pvtzDiscoverySvc) {
            this.pvtzDiscoverySvc = pvtzDiscoverySvc;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPython}
         * @param python the value to be set.
         * @return {@code this}
         */
        public Builder python(java.lang.String python) {
            this.python = python;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPython}
         * @param python the value to be set.
         * @return {@code this}
         */
        public Builder python(com.aliyun.ros.cdk.core.IResolvable python) {
            this.python = python;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPythonModules}
         * @param pythonModules the value to be set.
         * @return {@code this}
         */
        public Builder pythonModules(java.lang.String pythonModules) {
            this.pythonModules = pythonModules;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPythonModules}
         * @param pythonModules the value to be set.
         * @return {@code this}
         */
        public Builder pythonModules(com.aliyun.ros.cdk.core.IResolvable pythonModules) {
            this.pythonModules = pythonModules;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getReadiness}
         * @param readiness the value to be set.
         * @return {@code this}
         */
        public Builder readiness(java.lang.String readiness) {
            this.readiness = readiness;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getReadiness}
         * @param readiness the value to be set.
         * @return {@code this}
         */
        public Builder readiness(com.aliyun.ros.cdk.core.IResolvable readiness) {
            this.readiness = readiness;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getSaeVersion}
         * @param saeVersion the value to be set.
         * @return {@code this}
         */
        public Builder saeVersion(java.lang.String saeVersion) {
            this.saeVersion = saeVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getSaeVersion}
         * @param saeVersion the value to be set.
         * @return {@code this}
         */
        public Builder saeVersion(com.aliyun.ros.cdk.core.IResolvable saeVersion) {
            this.saeVersion = saeVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getServiceTags}
         * @param serviceTags the value to be set.
         * @return {@code this}
         */
        public Builder serviceTags(java.lang.String serviceTags) {
            this.serviceTags = serviceTags;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getServiceTags}
         * @param serviceTags the value to be set.
         * @return {@code this}
         */
        public Builder serviceTags(com.aliyun.ros.cdk.core.IResolvable serviceTags) {
            this.serviceTags = serviceTags;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getSlsConfigs}
         * @param slsConfigs the value to be set.
         * @return {@code this}
         */
        public Builder slsConfigs(java.lang.String slsConfigs) {
            this.slsConfigs = slsConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getSlsConfigs}
         * @param slsConfigs the value to be set.
         * @return {@code this}
         */
        public Builder slsConfigs(com.aliyun.ros.cdk.core.IResolvable slsConfigs) {
            this.slsConfigs = slsConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds the value to be set.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(java.lang.Number terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds the value to be set.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTimezone}
         * @param timezone the value to be set.
         * @return {@code this}
         */
        public Builder timezone(java.lang.String timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTimezone}
         * @param timezone the value to be set.
         * @return {@code this}
         */
        public Builder timezone(com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTomcatConfig}
         * @param tomcatConfig the value to be set.
         * @return {@code this}
         */
        public Builder tomcatConfig(java.lang.String tomcatConfig) {
            this.tomcatConfig = tomcatConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getTomcatConfig}
         * @param tomcatConfig the value to be set.
         * @return {@code this}
         */
        public Builder tomcatConfig(com.aliyun.ros.cdk.core.IResolvable tomcatConfig) {
            this.tomcatConfig = tomcatConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getWarStartOptions}
         * @param warStartOptions the value to be set.
         * @return {@code this}
         */
        public Builder warStartOptions(java.lang.String warStartOptions) {
            this.warStartOptions = warStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getWarStartOptions}
         * @param warStartOptions the value to be set.
         * @return {@code this}
         */
        public Builder warStartOptions(com.aliyun.ros.cdk.core.IResolvable warStartOptions) {
            this.warStartOptions = warStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getWebContainer}
         * @param webContainer the value to be set.
         * @return {@code this}
         */
        public Builder webContainer(java.lang.String webContainer) {
            this.webContainer = webContainer;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getWebContainer}
         * @param webContainer the value to be set.
         * @return {@code this}
         */
        public Builder webContainer(com.aliyun.ros.cdk.core.IResolvable webContainer) {
            this.webContainer = webContainer;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplicationProps {
        private final java.lang.Object appName;
        private final java.lang.Object cpu;
        private final java.lang.Object memory;
        private final java.lang.Object namespaceId;
        private final java.lang.Object packageType;
        private final java.lang.Object replicas;
        private final java.lang.Object acrAssumeRoleArn;
        private final java.lang.Object acrInstanceId;
        private final java.lang.Object appDescription;
        private final java.lang.Object appSource;
        private final java.lang.Object associateEip;
        private final java.lang.Object autoConfig;
        private final java.lang.Object baseAppId;
        private final java.lang.Object command;
        private final java.lang.Object commandArgs;
        private final java.lang.Object configMapMountDesc;
        private final java.lang.Object customHostAlias;
        private final java.lang.Object deploy;
        private final java.lang.Object edasContainerVersion;
        private final java.lang.Object enableEbpf;
        private final java.lang.Object envs;
        private final java.lang.Object imagePullSecrets;
        private final java.lang.Object imageUrl;
        private final java.lang.Object jarStartArgs;
        private final java.lang.Object jarStartOptions;
        private final java.lang.Object jdk;
        private final java.lang.Object kafkaConfigs;
        private final java.lang.Object liveness;
        private final java.lang.Object microRegistration;
        private final java.lang.Object microRegistrationConfig;
        private final java.lang.Object mountDesc;
        private final java.lang.Object mountHost;
        private final java.lang.Object nasConfigs;
        private final java.lang.Object nasId;
        private final java.lang.Object ossAkId;
        private final java.lang.Object ossAkSecret;
        private final java.lang.Object ossMountDescs;
        private final java.lang.Object packageUrl;
        private final java.lang.Object packageVersion;
        private final java.lang.Object php;
        private final java.lang.Object phpArmsConfigLocation;
        private final java.lang.Object phpConfig;
        private final java.lang.Object phpConfigLocation;
        private final java.lang.Object postStart;
        private final java.lang.Object preStop;
        private final java.lang.Object programmingLanguage;
        private final java.lang.Object pvtzDiscoverySvc;
        private final java.lang.Object python;
        private final java.lang.Object pythonModules;
        private final java.lang.Object readiness;
        private final java.lang.Object saeVersion;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object serviceTags;
        private final java.lang.Object slsConfigs;
        private final java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> tags;
        private final java.lang.Object terminationGracePeriodSeconds;
        private final java.lang.Object timezone;
        private final java.lang.Object tomcatConfig;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object warStartOptions;
        private final java.lang.Object webContainer;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageType = software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicas = software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acrAssumeRoleArn = software.amazon.jsii.Kernel.get(this, "acrAssumeRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acrInstanceId = software.amazon.jsii.Kernel.get(this, "acrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appDescription = software.amazon.jsii.Kernel.get(this, "appDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appSource = software.amazon.jsii.Kernel.get(this, "appSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.associateEip = software.amazon.jsii.Kernel.get(this, "associateEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoConfig = software.amazon.jsii.Kernel.get(this, "autoConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.baseAppId = software.amazon.jsii.Kernel.get(this, "baseAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandArgs = software.amazon.jsii.Kernel.get(this, "commandArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configMapMountDesc = software.amazon.jsii.Kernel.get(this, "configMapMountDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customHostAlias = software.amazon.jsii.Kernel.get(this, "customHostAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploy = software.amazon.jsii.Kernel.get(this, "deploy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edasContainerVersion = software.amazon.jsii.Kernel.get(this, "edasContainerVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableEbpf = software.amazon.jsii.Kernel.get(this, "enableEbpf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envs = software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imagePullSecrets = software.amazon.jsii.Kernel.get(this, "imagePullSecrets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageUrl = software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jarStartArgs = software.amazon.jsii.Kernel.get(this, "jarStartArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jarStartOptions = software.amazon.jsii.Kernel.get(this, "jarStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jdk = software.amazon.jsii.Kernel.get(this, "jdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kafkaConfigs = software.amazon.jsii.Kernel.get(this, "kafkaConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.liveness = software.amazon.jsii.Kernel.get(this, "liveness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.microRegistration = software.amazon.jsii.Kernel.get(this, "microRegistration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.microRegistrationConfig = software.amazon.jsii.Kernel.get(this, "microRegistrationConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mountDesc = software.amazon.jsii.Kernel.get(this, "mountDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mountHost = software.amazon.jsii.Kernel.get(this, "mountHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nasConfigs = software.amazon.jsii.Kernel.get(this, "nasConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nasId = software.amazon.jsii.Kernel.get(this, "nasId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossAkId = software.amazon.jsii.Kernel.get(this, "ossAkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossAkSecret = software.amazon.jsii.Kernel.get(this, "ossAkSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossMountDescs = software.amazon.jsii.Kernel.get(this, "ossMountDescs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageUrl = software.amazon.jsii.Kernel.get(this, "packageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageVersion = software.amazon.jsii.Kernel.get(this, "packageVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.php = software.amazon.jsii.Kernel.get(this, "php", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phpArmsConfigLocation = software.amazon.jsii.Kernel.get(this, "phpArmsConfigLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phpConfig = software.amazon.jsii.Kernel.get(this, "phpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phpConfigLocation = software.amazon.jsii.Kernel.get(this, "phpConfigLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.postStart = software.amazon.jsii.Kernel.get(this, "postStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preStop = software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.programmingLanguage = software.amazon.jsii.Kernel.get(this, "programmingLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pvtzDiscoverySvc = software.amazon.jsii.Kernel.get(this, "pvtzDiscoverySvc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.python = software.amazon.jsii.Kernel.get(this, "python", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pythonModules = software.amazon.jsii.Kernel.get(this, "pythonModules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.readiness = software.amazon.jsii.Kernel.get(this, "readiness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.saeVersion = software.amazon.jsii.Kernel.get(this, "saeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceTags = software.amazon.jsii.Kernel.get(this, "serviceTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsConfigs = software.amazon.jsii.Kernel.get(this, "slsConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.RosApplication.TagsProperty.class)));
            this.terminationGracePeriodSeconds = software.amazon.jsii.Kernel.get(this, "terminationGracePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timezone = software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tomcatConfig = software.amazon.jsii.Kernel.get(this, "tomcatConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.warStartOptions = software.amazon.jsii.Kernel.get(this, "warStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webContainer = software.amazon.jsii.Kernel.get(this, "webContainer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.cpu = java.util.Objects.requireNonNull(builder.cpu, "cpu is required");
            this.memory = java.util.Objects.requireNonNull(builder.memory, "memory is required");
            this.namespaceId = java.util.Objects.requireNonNull(builder.namespaceId, "namespaceId is required");
            this.packageType = java.util.Objects.requireNonNull(builder.packageType, "packageType is required");
            this.replicas = java.util.Objects.requireNonNull(builder.replicas, "replicas is required");
            this.acrAssumeRoleArn = builder.acrAssumeRoleArn;
            this.acrInstanceId = builder.acrInstanceId;
            this.appDescription = builder.appDescription;
            this.appSource = builder.appSource;
            this.associateEip = builder.associateEip;
            this.autoConfig = builder.autoConfig;
            this.baseAppId = builder.baseAppId;
            this.command = builder.command;
            this.commandArgs = builder.commandArgs;
            this.configMapMountDesc = builder.configMapMountDesc;
            this.customHostAlias = builder.customHostAlias;
            this.deploy = builder.deploy;
            this.edasContainerVersion = builder.edasContainerVersion;
            this.enableEbpf = builder.enableEbpf;
            this.envs = builder.envs;
            this.imagePullSecrets = builder.imagePullSecrets;
            this.imageUrl = builder.imageUrl;
            this.jarStartArgs = builder.jarStartArgs;
            this.jarStartOptions = builder.jarStartOptions;
            this.jdk = builder.jdk;
            this.kafkaConfigs = builder.kafkaConfigs;
            this.liveness = builder.liveness;
            this.microRegistration = builder.microRegistration;
            this.microRegistrationConfig = builder.microRegistrationConfig;
            this.mountDesc = builder.mountDesc;
            this.mountHost = builder.mountHost;
            this.nasConfigs = builder.nasConfigs;
            this.nasId = builder.nasId;
            this.ossAkId = builder.ossAkId;
            this.ossAkSecret = builder.ossAkSecret;
            this.ossMountDescs = builder.ossMountDescs;
            this.packageUrl = builder.packageUrl;
            this.packageVersion = builder.packageVersion;
            this.php = builder.php;
            this.phpArmsConfigLocation = builder.phpArmsConfigLocation;
            this.phpConfig = builder.phpConfig;
            this.phpConfigLocation = builder.phpConfigLocation;
            this.postStart = builder.postStart;
            this.preStop = builder.preStop;
            this.programmingLanguage = builder.programmingLanguage;
            this.pvtzDiscoverySvc = builder.pvtzDiscoverySvc;
            this.python = builder.python;
            this.pythonModules = builder.pythonModules;
            this.readiness = builder.readiness;
            this.saeVersion = builder.saeVersion;
            this.securityGroupId = builder.securityGroupId;
            this.serviceTags = builder.serviceTags;
            this.slsConfigs = builder.slsConfigs;
            this.tags = (java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty>)builder.tags;
            this.terminationGracePeriodSeconds = builder.terminationGracePeriodSeconds;
            this.timezone = builder.timezone;
            this.tomcatConfig = builder.tomcatConfig;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.warStartOptions = builder.warStartOptions;
            this.webContainer = builder.webContainer;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getPackageType() {
            return this.packageType;
        }

        @Override
        public final java.lang.Object getReplicas() {
            return this.replicas;
        }

        @Override
        public final java.lang.Object getAcrAssumeRoleArn() {
            return this.acrAssumeRoleArn;
        }

        @Override
        public final java.lang.Object getAcrInstanceId() {
            return this.acrInstanceId;
        }

        @Override
        public final java.lang.Object getAppDescription() {
            return this.appDescription;
        }

        @Override
        public final java.lang.Object getAppSource() {
            return this.appSource;
        }

        @Override
        public final java.lang.Object getAssociateEip() {
            return this.associateEip;
        }

        @Override
        public final java.lang.Object getAutoConfig() {
            return this.autoConfig;
        }

        @Override
        public final java.lang.Object getBaseAppId() {
            return this.baseAppId;
        }

        @Override
        public final java.lang.Object getCommand() {
            return this.command;
        }

        @Override
        public final java.lang.Object getCommandArgs() {
            return this.commandArgs;
        }

        @Override
        public final java.lang.Object getConfigMapMountDesc() {
            return this.configMapMountDesc;
        }

        @Override
        public final java.lang.Object getCustomHostAlias() {
            return this.customHostAlias;
        }

        @Override
        public final java.lang.Object getDeploy() {
            return this.deploy;
        }

        @Override
        public final java.lang.Object getEdasContainerVersion() {
            return this.edasContainerVersion;
        }

        @Override
        public final java.lang.Object getEnableEbpf() {
            return this.enableEbpf;
        }

        @Override
        public final java.lang.Object getEnvs() {
            return this.envs;
        }

        @Override
        public final java.lang.Object getImagePullSecrets() {
            return this.imagePullSecrets;
        }

        @Override
        public final java.lang.Object getImageUrl() {
            return this.imageUrl;
        }

        @Override
        public final java.lang.Object getJarStartArgs() {
            return this.jarStartArgs;
        }

        @Override
        public final java.lang.Object getJarStartOptions() {
            return this.jarStartOptions;
        }

        @Override
        public final java.lang.Object getJdk() {
            return this.jdk;
        }

        @Override
        public final java.lang.Object getKafkaConfigs() {
            return this.kafkaConfigs;
        }

        @Override
        public final java.lang.Object getLiveness() {
            return this.liveness;
        }

        @Override
        public final java.lang.Object getMicroRegistration() {
            return this.microRegistration;
        }

        @Override
        public final java.lang.Object getMicroRegistrationConfig() {
            return this.microRegistrationConfig;
        }

        @Override
        public final java.lang.Object getMountDesc() {
            return this.mountDesc;
        }

        @Override
        public final java.lang.Object getMountHost() {
            return this.mountHost;
        }

        @Override
        public final java.lang.Object getNasConfigs() {
            return this.nasConfigs;
        }

        @Override
        public final java.lang.Object getNasId() {
            return this.nasId;
        }

        @Override
        public final java.lang.Object getOssAkId() {
            return this.ossAkId;
        }

        @Override
        public final java.lang.Object getOssAkSecret() {
            return this.ossAkSecret;
        }

        @Override
        public final java.lang.Object getOssMountDescs() {
            return this.ossMountDescs;
        }

        @Override
        public final java.lang.Object getPackageUrl() {
            return this.packageUrl;
        }

        @Override
        public final java.lang.Object getPackageVersion() {
            return this.packageVersion;
        }

        @Override
        public final java.lang.Object getPhp() {
            return this.php;
        }

        @Override
        public final java.lang.Object getPhpArmsConfigLocation() {
            return this.phpArmsConfigLocation;
        }

        @Override
        public final java.lang.Object getPhpConfig() {
            return this.phpConfig;
        }

        @Override
        public final java.lang.Object getPhpConfigLocation() {
            return this.phpConfigLocation;
        }

        @Override
        public final java.lang.Object getPostStart() {
            return this.postStart;
        }

        @Override
        public final java.lang.Object getPreStop() {
            return this.preStop;
        }

        @Override
        public final java.lang.Object getProgrammingLanguage() {
            return this.programmingLanguage;
        }

        @Override
        public final java.lang.Object getPvtzDiscoverySvc() {
            return this.pvtzDiscoverySvc;
        }

        @Override
        public final java.lang.Object getPython() {
            return this.python;
        }

        @Override
        public final java.lang.Object getPythonModules() {
            return this.pythonModules;
        }

        @Override
        public final java.lang.Object getReadiness() {
            return this.readiness;
        }

        @Override
        public final java.lang.Object getSaeVersion() {
            return this.saeVersion;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getServiceTags() {
            return this.serviceTags;
        }

        @Override
        public final java.lang.Object getSlsConfigs() {
            return this.slsConfigs;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTerminationGracePeriodSeconds() {
            return this.terminationGracePeriodSeconds;
        }

        @Override
        public final java.lang.Object getTimezone() {
            return this.timezone;
        }

        @Override
        public final java.lang.Object getTomcatConfig() {
            return this.tomcatConfig;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getWarStartOptions() {
            return this.warStartOptions;
        }

        @Override
        public final java.lang.Object getWebContainer() {
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
            if (this.getAcrAssumeRoleArn() != null) {
                data.set("acrAssumeRoleArn", om.valueToTree(this.getAcrAssumeRoleArn()));
            }
            if (this.getAcrInstanceId() != null) {
                data.set("acrInstanceId", om.valueToTree(this.getAcrInstanceId()));
            }
            if (this.getAppDescription() != null) {
                data.set("appDescription", om.valueToTree(this.getAppDescription()));
            }
            if (this.getAppSource() != null) {
                data.set("appSource", om.valueToTree(this.getAppSource()));
            }
            if (this.getAssociateEip() != null) {
                data.set("associateEip", om.valueToTree(this.getAssociateEip()));
            }
            if (this.getAutoConfig() != null) {
                data.set("autoConfig", om.valueToTree(this.getAutoConfig()));
            }
            if (this.getBaseAppId() != null) {
                data.set("baseAppId", om.valueToTree(this.getBaseAppId()));
            }
            if (this.getCommand() != null) {
                data.set("command", om.valueToTree(this.getCommand()));
            }
            if (this.getCommandArgs() != null) {
                data.set("commandArgs", om.valueToTree(this.getCommandArgs()));
            }
            if (this.getConfigMapMountDesc() != null) {
                data.set("configMapMountDesc", om.valueToTree(this.getConfigMapMountDesc()));
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
            if (this.getEnableEbpf() != null) {
                data.set("enableEbpf", om.valueToTree(this.getEnableEbpf()));
            }
            if (this.getEnvs() != null) {
                data.set("envs", om.valueToTree(this.getEnvs()));
            }
            if (this.getImagePullSecrets() != null) {
                data.set("imagePullSecrets", om.valueToTree(this.getImagePullSecrets()));
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
            if (this.getKafkaConfigs() != null) {
                data.set("kafkaConfigs", om.valueToTree(this.getKafkaConfigs()));
            }
            if (this.getLiveness() != null) {
                data.set("liveness", om.valueToTree(this.getLiveness()));
            }
            if (this.getMicroRegistration() != null) {
                data.set("microRegistration", om.valueToTree(this.getMicroRegistration()));
            }
            if (this.getMicroRegistrationConfig() != null) {
                data.set("microRegistrationConfig", om.valueToTree(this.getMicroRegistrationConfig()));
            }
            if (this.getMountDesc() != null) {
                data.set("mountDesc", om.valueToTree(this.getMountDesc()));
            }
            if (this.getMountHost() != null) {
                data.set("mountHost", om.valueToTree(this.getMountHost()));
            }
            if (this.getNasConfigs() != null) {
                data.set("nasConfigs", om.valueToTree(this.getNasConfigs()));
            }
            if (this.getNasId() != null) {
                data.set("nasId", om.valueToTree(this.getNasId()));
            }
            if (this.getOssAkId() != null) {
                data.set("ossAkId", om.valueToTree(this.getOssAkId()));
            }
            if (this.getOssAkSecret() != null) {
                data.set("ossAkSecret", om.valueToTree(this.getOssAkSecret()));
            }
            if (this.getOssMountDescs() != null) {
                data.set("ossMountDescs", om.valueToTree(this.getOssMountDescs()));
            }
            if (this.getPackageUrl() != null) {
                data.set("packageUrl", om.valueToTree(this.getPackageUrl()));
            }
            if (this.getPackageVersion() != null) {
                data.set("packageVersion", om.valueToTree(this.getPackageVersion()));
            }
            if (this.getPhp() != null) {
                data.set("php", om.valueToTree(this.getPhp()));
            }
            if (this.getPhpArmsConfigLocation() != null) {
                data.set("phpArmsConfigLocation", om.valueToTree(this.getPhpArmsConfigLocation()));
            }
            if (this.getPhpConfig() != null) {
                data.set("phpConfig", om.valueToTree(this.getPhpConfig()));
            }
            if (this.getPhpConfigLocation() != null) {
                data.set("phpConfigLocation", om.valueToTree(this.getPhpConfigLocation()));
            }
            if (this.getPostStart() != null) {
                data.set("postStart", om.valueToTree(this.getPostStart()));
            }
            if (this.getPreStop() != null) {
                data.set("preStop", om.valueToTree(this.getPreStop()));
            }
            if (this.getProgrammingLanguage() != null) {
                data.set("programmingLanguage", om.valueToTree(this.getProgrammingLanguage()));
            }
            if (this.getPvtzDiscoverySvc() != null) {
                data.set("pvtzDiscoverySvc", om.valueToTree(this.getPvtzDiscoverySvc()));
            }
            if (this.getPython() != null) {
                data.set("python", om.valueToTree(this.getPython()));
            }
            if (this.getPythonModules() != null) {
                data.set("pythonModules", om.valueToTree(this.getPythonModules()));
            }
            if (this.getReadiness() != null) {
                data.set("readiness", om.valueToTree(this.getReadiness()));
            }
            if (this.getSaeVersion() != null) {
                data.set("saeVersion", om.valueToTree(this.getSaeVersion()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getServiceTags() != null) {
                data.set("serviceTags", om.valueToTree(this.getServiceTags()));
            }
            if (this.getSlsConfigs() != null) {
                data.set("slsConfigs", om.valueToTree(this.getSlsConfigs()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTerminationGracePeriodSeconds() != null) {
                data.set("terminationGracePeriodSeconds", om.valueToTree(this.getTerminationGracePeriodSeconds()));
            }
            if (this.getTimezone() != null) {
                data.set("timezone", om.valueToTree(this.getTimezone()));
            }
            if (this.getTomcatConfig() != null) {
                data.set("tomcatConfig", om.valueToTree(this.getTomcatConfig()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplicationProps.Jsii$Proxy that = (RosApplicationProps.Jsii$Proxy) o;

            if (!appName.equals(that.appName)) return false;
            if (!cpu.equals(that.cpu)) return false;
            if (!memory.equals(that.memory)) return false;
            if (!namespaceId.equals(that.namespaceId)) return false;
            if (!packageType.equals(that.packageType)) return false;
            if (!replicas.equals(that.replicas)) return false;
            if (this.acrAssumeRoleArn != null ? !this.acrAssumeRoleArn.equals(that.acrAssumeRoleArn) : that.acrAssumeRoleArn != null) return false;
            if (this.acrInstanceId != null ? !this.acrInstanceId.equals(that.acrInstanceId) : that.acrInstanceId != null) return false;
            if (this.appDescription != null ? !this.appDescription.equals(that.appDescription) : that.appDescription != null) return false;
            if (this.appSource != null ? !this.appSource.equals(that.appSource) : that.appSource != null) return false;
            if (this.associateEip != null ? !this.associateEip.equals(that.associateEip) : that.associateEip != null) return false;
            if (this.autoConfig != null ? !this.autoConfig.equals(that.autoConfig) : that.autoConfig != null) return false;
            if (this.baseAppId != null ? !this.baseAppId.equals(that.baseAppId) : that.baseAppId != null) return false;
            if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
            if (this.commandArgs != null ? !this.commandArgs.equals(that.commandArgs) : that.commandArgs != null) return false;
            if (this.configMapMountDesc != null ? !this.configMapMountDesc.equals(that.configMapMountDesc) : that.configMapMountDesc != null) return false;
            if (this.customHostAlias != null ? !this.customHostAlias.equals(that.customHostAlias) : that.customHostAlias != null) return false;
            if (this.deploy != null ? !this.deploy.equals(that.deploy) : that.deploy != null) return false;
            if (this.edasContainerVersion != null ? !this.edasContainerVersion.equals(that.edasContainerVersion) : that.edasContainerVersion != null) return false;
            if (this.enableEbpf != null ? !this.enableEbpf.equals(that.enableEbpf) : that.enableEbpf != null) return false;
            if (this.envs != null ? !this.envs.equals(that.envs) : that.envs != null) return false;
            if (this.imagePullSecrets != null ? !this.imagePullSecrets.equals(that.imagePullSecrets) : that.imagePullSecrets != null) return false;
            if (this.imageUrl != null ? !this.imageUrl.equals(that.imageUrl) : that.imageUrl != null) return false;
            if (this.jarStartArgs != null ? !this.jarStartArgs.equals(that.jarStartArgs) : that.jarStartArgs != null) return false;
            if (this.jarStartOptions != null ? !this.jarStartOptions.equals(that.jarStartOptions) : that.jarStartOptions != null) return false;
            if (this.jdk != null ? !this.jdk.equals(that.jdk) : that.jdk != null) return false;
            if (this.kafkaConfigs != null ? !this.kafkaConfigs.equals(that.kafkaConfigs) : that.kafkaConfigs != null) return false;
            if (this.liveness != null ? !this.liveness.equals(that.liveness) : that.liveness != null) return false;
            if (this.microRegistration != null ? !this.microRegistration.equals(that.microRegistration) : that.microRegistration != null) return false;
            if (this.microRegistrationConfig != null ? !this.microRegistrationConfig.equals(that.microRegistrationConfig) : that.microRegistrationConfig != null) return false;
            if (this.mountDesc != null ? !this.mountDesc.equals(that.mountDesc) : that.mountDesc != null) return false;
            if (this.mountHost != null ? !this.mountHost.equals(that.mountHost) : that.mountHost != null) return false;
            if (this.nasConfigs != null ? !this.nasConfigs.equals(that.nasConfigs) : that.nasConfigs != null) return false;
            if (this.nasId != null ? !this.nasId.equals(that.nasId) : that.nasId != null) return false;
            if (this.ossAkId != null ? !this.ossAkId.equals(that.ossAkId) : that.ossAkId != null) return false;
            if (this.ossAkSecret != null ? !this.ossAkSecret.equals(that.ossAkSecret) : that.ossAkSecret != null) return false;
            if (this.ossMountDescs != null ? !this.ossMountDescs.equals(that.ossMountDescs) : that.ossMountDescs != null) return false;
            if (this.packageUrl != null ? !this.packageUrl.equals(that.packageUrl) : that.packageUrl != null) return false;
            if (this.packageVersion != null ? !this.packageVersion.equals(that.packageVersion) : that.packageVersion != null) return false;
            if (this.php != null ? !this.php.equals(that.php) : that.php != null) return false;
            if (this.phpArmsConfigLocation != null ? !this.phpArmsConfigLocation.equals(that.phpArmsConfigLocation) : that.phpArmsConfigLocation != null) return false;
            if (this.phpConfig != null ? !this.phpConfig.equals(that.phpConfig) : that.phpConfig != null) return false;
            if (this.phpConfigLocation != null ? !this.phpConfigLocation.equals(that.phpConfigLocation) : that.phpConfigLocation != null) return false;
            if (this.postStart != null ? !this.postStart.equals(that.postStart) : that.postStart != null) return false;
            if (this.preStop != null ? !this.preStop.equals(that.preStop) : that.preStop != null) return false;
            if (this.programmingLanguage != null ? !this.programmingLanguage.equals(that.programmingLanguage) : that.programmingLanguage != null) return false;
            if (this.pvtzDiscoverySvc != null ? !this.pvtzDiscoverySvc.equals(that.pvtzDiscoverySvc) : that.pvtzDiscoverySvc != null) return false;
            if (this.python != null ? !this.python.equals(that.python) : that.python != null) return false;
            if (this.pythonModules != null ? !this.pythonModules.equals(that.pythonModules) : that.pythonModules != null) return false;
            if (this.readiness != null ? !this.readiness.equals(that.readiness) : that.readiness != null) return false;
            if (this.saeVersion != null ? !this.saeVersion.equals(that.saeVersion) : that.saeVersion != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.serviceTags != null ? !this.serviceTags.equals(that.serviceTags) : that.serviceTags != null) return false;
            if (this.slsConfigs != null ? !this.slsConfigs.equals(that.slsConfigs) : that.slsConfigs != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.terminationGracePeriodSeconds != null ? !this.terminationGracePeriodSeconds.equals(that.terminationGracePeriodSeconds) : that.terminationGracePeriodSeconds != null) return false;
            if (this.timezone != null ? !this.timezone.equals(that.timezone) : that.timezone != null) return false;
            if (this.tomcatConfig != null ? !this.tomcatConfig.equals(that.tomcatConfig) : that.tomcatConfig != null) return false;
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
            result = 31 * result + (this.acrAssumeRoleArn != null ? this.acrAssumeRoleArn.hashCode() : 0);
            result = 31 * result + (this.acrInstanceId != null ? this.acrInstanceId.hashCode() : 0);
            result = 31 * result + (this.appDescription != null ? this.appDescription.hashCode() : 0);
            result = 31 * result + (this.appSource != null ? this.appSource.hashCode() : 0);
            result = 31 * result + (this.associateEip != null ? this.associateEip.hashCode() : 0);
            result = 31 * result + (this.autoConfig != null ? this.autoConfig.hashCode() : 0);
            result = 31 * result + (this.baseAppId != null ? this.baseAppId.hashCode() : 0);
            result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
            result = 31 * result + (this.commandArgs != null ? this.commandArgs.hashCode() : 0);
            result = 31 * result + (this.configMapMountDesc != null ? this.configMapMountDesc.hashCode() : 0);
            result = 31 * result + (this.customHostAlias != null ? this.customHostAlias.hashCode() : 0);
            result = 31 * result + (this.deploy != null ? this.deploy.hashCode() : 0);
            result = 31 * result + (this.edasContainerVersion != null ? this.edasContainerVersion.hashCode() : 0);
            result = 31 * result + (this.enableEbpf != null ? this.enableEbpf.hashCode() : 0);
            result = 31 * result + (this.envs != null ? this.envs.hashCode() : 0);
            result = 31 * result + (this.imagePullSecrets != null ? this.imagePullSecrets.hashCode() : 0);
            result = 31 * result + (this.imageUrl != null ? this.imageUrl.hashCode() : 0);
            result = 31 * result + (this.jarStartArgs != null ? this.jarStartArgs.hashCode() : 0);
            result = 31 * result + (this.jarStartOptions != null ? this.jarStartOptions.hashCode() : 0);
            result = 31 * result + (this.jdk != null ? this.jdk.hashCode() : 0);
            result = 31 * result + (this.kafkaConfigs != null ? this.kafkaConfigs.hashCode() : 0);
            result = 31 * result + (this.liveness != null ? this.liveness.hashCode() : 0);
            result = 31 * result + (this.microRegistration != null ? this.microRegistration.hashCode() : 0);
            result = 31 * result + (this.microRegistrationConfig != null ? this.microRegistrationConfig.hashCode() : 0);
            result = 31 * result + (this.mountDesc != null ? this.mountDesc.hashCode() : 0);
            result = 31 * result + (this.mountHost != null ? this.mountHost.hashCode() : 0);
            result = 31 * result + (this.nasConfigs != null ? this.nasConfigs.hashCode() : 0);
            result = 31 * result + (this.nasId != null ? this.nasId.hashCode() : 0);
            result = 31 * result + (this.ossAkId != null ? this.ossAkId.hashCode() : 0);
            result = 31 * result + (this.ossAkSecret != null ? this.ossAkSecret.hashCode() : 0);
            result = 31 * result + (this.ossMountDescs != null ? this.ossMountDescs.hashCode() : 0);
            result = 31 * result + (this.packageUrl != null ? this.packageUrl.hashCode() : 0);
            result = 31 * result + (this.packageVersion != null ? this.packageVersion.hashCode() : 0);
            result = 31 * result + (this.php != null ? this.php.hashCode() : 0);
            result = 31 * result + (this.phpArmsConfigLocation != null ? this.phpArmsConfigLocation.hashCode() : 0);
            result = 31 * result + (this.phpConfig != null ? this.phpConfig.hashCode() : 0);
            result = 31 * result + (this.phpConfigLocation != null ? this.phpConfigLocation.hashCode() : 0);
            result = 31 * result + (this.postStart != null ? this.postStart.hashCode() : 0);
            result = 31 * result + (this.preStop != null ? this.preStop.hashCode() : 0);
            result = 31 * result + (this.programmingLanguage != null ? this.programmingLanguage.hashCode() : 0);
            result = 31 * result + (this.pvtzDiscoverySvc != null ? this.pvtzDiscoverySvc.hashCode() : 0);
            result = 31 * result + (this.python != null ? this.python.hashCode() : 0);
            result = 31 * result + (this.pythonModules != null ? this.pythonModules.hashCode() : 0);
            result = 31 * result + (this.readiness != null ? this.readiness.hashCode() : 0);
            result = 31 * result + (this.saeVersion != null ? this.saeVersion.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceTags != null ? this.serviceTags.hashCode() : 0);
            result = 31 * result + (this.slsConfigs != null ? this.slsConfigs.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.terminationGracePeriodSeconds != null ? this.terminationGracePeriodSeconds.hashCode() : 0);
            result = 31 * result + (this.timezone != null ? this.timezone.hashCode() : 0);
            result = 31 * result + (this.tomcatConfig != null ? this.tomcatConfig.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.warStartOptions != null ? this.warStartOptions.hashCode() : 0);
            result = 31 * result + (this.webContainer != null ? this.webContainer.hashCode() : 0);
            return result;
        }
    }
}
