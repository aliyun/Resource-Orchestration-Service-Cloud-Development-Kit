package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a `ALIYUN::SAE::Application`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.882Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.ApplicationProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationProps.Jsii$Proxy.class)
public interface ApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appName: Application Name.
     * <p>
     * Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     * Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.
     * <p>
     * Currently only supports fixed specifications instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCpu();

    /**
     * Property memory: Each instance of the required memory, in units of MB, can not be zero.
     * <p>
     * Currently only supports fixed specifications instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMemory();

    /**
     * Property namespaceId: EDAS namespace corresponding to ID.
     * <p>
     * Canada supports only the name of the scribe lowercase namespace must begin with a letter.
     * Namespace can interface to obtain from DescribeNamespaceList.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     * Property packageType: Application package type.
     * <p>
     * Support FatJar, War, Image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPackageType();

    /**
     * Property replicas: The initial number of instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicas();

    /**
     * Property appDescription: Application description.
     * <p>
     * No more than 1024 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppDescription() {
        return null;
    }

    /**
     * Property command: Mirroring the start command.
     * <p>
     * The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
        return null;
    }

    /**
     * Property commandArgs: Mirroring the start command parameters.
     * <p>
     * Parameters required for the start-command. For example: [ "1d"]
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandArgs() {
        return null;
    }

    /**
     * Property customHostAlias: Custom mapping host vessel.
     * <p>
     * For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomHostAlias() {
        return null;
    }

    /**
     * Property deploy: Whether deployed immediately take effect, the default is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploy() {
        return null;
    }

    /**
     * Property edasContainerVersion: EDAS pandora runtime environment used by the application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdasContainerVersion() {
        return null;
    }

    /**
     * Property envs: Container environment variable parameters.
     * <p>
     * For example: [{ "name": "envtmp", "value": "0"}]
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
        return null;
    }

    /**
     * Property imageUrl: Mirroring address.
     * <p>
     * Image only type of application can be configured to mirror address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageUrl() {
        return null;
    }

    /**
     * Property jarStartArgs: Jar package startup application parameters.
     * <p>
     * Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJarStartArgs() {
        return null;
    }

    /**
     * Property jarStartOptions: Jar start the application package option.
     * <p>
     * Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
     * $ JarStartArgs
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJarStartOptions() {
        return null;
    }

    /**
     * Property jdk: Deployment of JDK version of the package depends on.
     * <p>
     * Mirroring not supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJdk() {
        return null;
    }

    /**
     * Property liveness: Container health check, health check fails container will be killed and recovery.
     * <p>
     * Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLiveness() {
        return null;
    }

    /**
     * Property mountDesc: Mount Description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMountDesc() {
        return null;
    }

    /**
     * Property mountHost: nas mount point in the application of vpc.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMountHost() {
        return null;
    }

    /**
     * Property nasId: Mount the NAS ID, you must be in the same region and cluster.
     * <p>
     * It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNasId() {
        return null;
    }

    /**
     * Property packageUrl: Deployment packages address.
     * <p>
     * Only FatJar War or the type of application can be configured to deploy packet address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageUrl() {
        return null;
    }

    /**
     * Property packageVersion: The version number of the deployed package, War FatJar type required.
     * <p>
     * Please customize it meaning.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageVersion() {
        return null;
    }

    /**
     * Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPostStart() {
        return null;
    }

    /**
     * Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreStop() {
        return null;
    }

    /**
     * Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.
     * <p>
     * Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReadiness() {
        return null;
    }

    /**
     * Property securityGroupId: Security group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property slsConfigs: Log collection configuration file.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsConfigs() {
        return null;
    }

    /**
     * Property tags: Tags to attach to application.
     * <p>
     * Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property timezone: Application time zone.
     * <p>
     * Default Asia/Shanghai.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimezone() {
        return null;
    }

    /**
     * Property vpcId: EDAS namespace corresponding VPC.
     * <p>
     * In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: Application examples where the elastic card virtual switch.
     * <p>
     * The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property warStartOptions: War Start the application package option.
     * <p>
     * Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ &#64;" start
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWarStartOptions() {
        return null;
    }

    /**
     * Property webContainer: Tomcat deployment of the package depends on the version.
     * <p>
     * Mirroring not supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebContainer() {
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
        java.lang.Object appName;
        java.lang.Object cpu;
        java.lang.Object memory;
        java.lang.Object namespaceId;
        java.lang.Object packageType;
        java.lang.Object replicas;
        java.lang.Object appDescription;
        java.lang.Object command;
        java.lang.Object commandArgs;
        java.lang.Object customHostAlias;
        java.lang.Object deploy;
        java.lang.Object edasContainerVersion;
        java.lang.Object envs;
        java.lang.Object imageUrl;
        java.lang.Object jarStartArgs;
        java.lang.Object jarStartOptions;
        java.lang.Object jdk;
        java.lang.Object liveness;
        java.lang.Object mountDesc;
        java.lang.Object mountHost;
        java.lang.Object nasId;
        java.lang.Object packageUrl;
        java.lang.Object packageVersion;
        java.lang.Object postStart;
        java.lang.Object preStop;
        java.lang.Object readiness;
        java.lang.Object securityGroupId;
        java.lang.Object slsConfigs;
        java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> tags;
        java.lang.Object timezone;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object warStartOptions;
        java.lang.Object webContainer;

        /**
         * Sets the value of {@link ApplicationProps#getAppName}
         * @param appName Property appName: Application Name. This parameter is required.
         *                Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAppName}
         * @param appName Property appName: Application Name. This parameter is required.
         *                Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCpu}
         * @param cpu Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. This parameter is required.
         *            Currently only supports fixed specifications instance type.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCpu}
         * @param cpu Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. This parameter is required.
         *            Currently only supports fixed specifications instance type.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMemory}
         * @param memory Property memory: Each instance of the required memory, in units of MB, can not be zero. This parameter is required.
         *               Currently only supports fixed specifications instance type.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMemory}
         * @param memory Property memory: Each instance of the required memory, in units of MB, can not be zero. This parameter is required.
         *               Currently only supports fixed specifications instance type.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getNamespaceId}
         * @param namespaceId Property namespaceId: EDAS namespace corresponding to ID. This parameter is required.
         *                    Canada supports only the name of the scribe lowercase namespace must begin with a letter.
         *                    Namespace can interface to obtain from DescribeNamespaceList.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getNamespaceId}
         * @param namespaceId Property namespaceId: EDAS namespace corresponding to ID. This parameter is required.
         *                    Canada supports only the name of the scribe lowercase namespace must begin with a letter.
         *                    Namespace can interface to obtain from DescribeNamespaceList.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageType}
         * @param packageType Property packageType: Application package type. This parameter is required.
         *                    Support FatJar, War, Image.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageType}
         * @param packageType Property packageType: Application package type. This parameter is required.
         *                    Support FatJar, War, Image.
         * @return {@code this}
         */
        public Builder packageType(com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getReplicas}
         * @param replicas Property replicas: The initial number of instances. This parameter is required.
         * @return {@code this}
         */
        public Builder replicas(java.lang.Number replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getReplicas}
         * @param replicas Property replicas: The initial number of instances. This parameter is required.
         * @return {@code this}
         */
        public Builder replicas(com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAppDescription}
         * @param appDescription Property appDescription: Application description.
         *                       No more than 1024 characters.
         * @return {@code this}
         */
        public Builder appDescription(java.lang.String appDescription) {
            this.appDescription = appDescription;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAppDescription}
         * @param appDescription Property appDescription: Application description.
         *                       No more than 1024 characters.
         * @return {@code this}
         */
        public Builder appDescription(com.aliyun.ros.cdk.core.IResolvable appDescription) {
            this.appDescription = appDescription;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCommand}
         * @param command Property command: Mirroring the start command.
         *                The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
         * @return {@code this}
         */
        public Builder command(java.lang.String command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCommand}
         * @param command Property command: Mirroring the start command.
         *                The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
         * @return {@code this}
         */
        public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCommandArgs}
         * @param commandArgs Property commandArgs: Mirroring the start command parameters.
         *                    Parameters required for the start-command. For example: [ "1d"]
         * @return {@code this}
         */
        public Builder commandArgs(java.lang.String commandArgs) {
            this.commandArgs = commandArgs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCommandArgs}
         * @param commandArgs Property commandArgs: Mirroring the start command parameters.
         *                    Parameters required for the start-command. For example: [ "1d"]
         * @return {@code this}
         */
        public Builder commandArgs(com.aliyun.ros.cdk.core.IResolvable commandArgs) {
            this.commandArgs = commandArgs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCustomHostAlias}
         * @param customHostAlias Property customHostAlias: Custom mapping host vessel.
         *                        For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
         * @return {@code this}
         */
        public Builder customHostAlias(java.lang.String customHostAlias) {
            this.customHostAlias = customHostAlias;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getCustomHostAlias}
         * @param customHostAlias Property customHostAlias: Custom mapping host vessel.
         *                        For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
         * @return {@code this}
         */
        public Builder customHostAlias(com.aliyun.ros.cdk.core.IResolvable customHostAlias) {
            this.customHostAlias = customHostAlias;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDeploy}
         * @param deploy Property deploy: Whether deployed immediately take effect, the default is false.
         * @return {@code this}
         */
        public Builder deploy(java.lang.Boolean deploy) {
            this.deploy = deploy;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDeploy}
         * @param deploy Property deploy: Whether deployed immediately take effect, the default is false.
         * @return {@code this}
         */
        public Builder deploy(com.aliyun.ros.cdk.core.IResolvable deploy) {
            this.deploy = deploy;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getEdasContainerVersion}
         * @param edasContainerVersion Property edasContainerVersion: EDAS pandora runtime environment used by the application.
         * @return {@code this}
         */
        public Builder edasContainerVersion(java.lang.String edasContainerVersion) {
            this.edasContainerVersion = edasContainerVersion;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getEdasContainerVersion}
         * @param edasContainerVersion Property edasContainerVersion: EDAS pandora runtime environment used by the application.
         * @return {@code this}
         */
        public Builder edasContainerVersion(com.aliyun.ros.cdk.core.IResolvable edasContainerVersion) {
            this.edasContainerVersion = edasContainerVersion;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getEnvs}
         * @param envs Property envs: Container environment variable parameters.
         *             For example: [{ "name": "envtmp", "value": "0"}]
         * @return {@code this}
         */
        public Builder envs(java.lang.String envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getEnvs}
         * @param envs Property envs: Container environment variable parameters.
         *             For example: [{ "name": "envtmp", "value": "0"}]
         * @return {@code this}
         */
        public Builder envs(com.aliyun.ros.cdk.core.IResolvable envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getImageUrl}
         * @param imageUrl Property imageUrl: Mirroring address.
         *                 Image only type of application can be configured to mirror address.
         * @return {@code this}
         */
        public Builder imageUrl(java.lang.String imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getImageUrl}
         * @param imageUrl Property imageUrl: Mirroring address.
         *                 Image only type of application can be configured to mirror address.
         * @return {@code this}
         */
        public Builder imageUrl(com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJarStartArgs}
         * @param jarStartArgs Property jarStartArgs: Jar package startup application parameters.
         *                     Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
         *                     $ JarStartArgs
         * @return {@code this}
         */
        public Builder jarStartArgs(java.lang.String jarStartArgs) {
            this.jarStartArgs = jarStartArgs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJarStartArgs}
         * @param jarStartArgs Property jarStartArgs: Jar package startup application parameters.
         *                     Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
         *                     $ JarStartArgs
         * @return {@code this}
         */
        public Builder jarStartArgs(com.aliyun.ros.cdk.core.IResolvable jarStartArgs) {
            this.jarStartArgs = jarStartArgs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJarStartOptions}
         * @param jarStartOptions Property jarStartOptions: Jar start the application package option.
         *                        Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
         *                        $ JarStartArgs
         * @return {@code this}
         */
        public Builder jarStartOptions(java.lang.String jarStartOptions) {
            this.jarStartOptions = jarStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJarStartOptions}
         * @param jarStartOptions Property jarStartOptions: Jar start the application package option.
         *                        Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
         *                        $ JarStartArgs
         * @return {@code this}
         */
        public Builder jarStartOptions(com.aliyun.ros.cdk.core.IResolvable jarStartOptions) {
            this.jarStartOptions = jarStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJdk}
         * @param jdk Property jdk: Deployment of JDK version of the package depends on.
         *            Mirroring not supported.
         * @return {@code this}
         */
        public Builder jdk(java.lang.String jdk) {
            this.jdk = jdk;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getJdk}
         * @param jdk Property jdk: Deployment of JDK version of the package depends on.
         *            Mirroring not supported.
         * @return {@code this}
         */
        public Builder jdk(com.aliyun.ros.cdk.core.IResolvable jdk) {
            this.jdk = jdk;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getLiveness}
         * @param liveness Property liveness: Container health check, health check fails container will be killed and recovery.
         *                 Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
         * @return {@code this}
         */
        public Builder liveness(java.lang.String liveness) {
            this.liveness = liveness;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getLiveness}
         * @param liveness Property liveness: Container health check, health check fails container will be killed and recovery.
         *                 Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
         * @return {@code this}
         */
        public Builder liveness(com.aliyun.ros.cdk.core.IResolvable liveness) {
            this.liveness = liveness;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMountDesc}
         * @param mountDesc Property mountDesc: Mount Description.
         * @return {@code this}
         */
        public Builder mountDesc(java.lang.String mountDesc) {
            this.mountDesc = mountDesc;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMountDesc}
         * @param mountDesc Property mountDesc: Mount Description.
         * @return {@code this}
         */
        public Builder mountDesc(com.aliyun.ros.cdk.core.IResolvable mountDesc) {
            this.mountDesc = mountDesc;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMountHost}
         * @param mountHost Property mountHost: nas mount point in the application of vpc.
         * @return {@code this}
         */
        public Builder mountHost(java.lang.String mountHost) {
            this.mountHost = mountHost;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getMountHost}
         * @param mountHost Property mountHost: nas mount point in the application of vpc.
         * @return {@code this}
         */
        public Builder mountHost(com.aliyun.ros.cdk.core.IResolvable mountHost) {
            this.mountHost = mountHost;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getNasId}
         * @param nasId Property nasId: Mount the NAS ID, you must be in the same region and cluster.
         *              It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
         * @return {@code this}
         */
        public Builder nasId(java.lang.String nasId) {
            this.nasId = nasId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getNasId}
         * @param nasId Property nasId: Mount the NAS ID, you must be in the same region and cluster.
         *              It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
         * @return {@code this}
         */
        public Builder nasId(com.aliyun.ros.cdk.core.IResolvable nasId) {
            this.nasId = nasId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageUrl}
         * @param packageUrl Property packageUrl: Deployment packages address.
         *                   Only FatJar War or the type of application can be configured to deploy packet address.
         * @return {@code this}
         */
        public Builder packageUrl(java.lang.String packageUrl) {
            this.packageUrl = packageUrl;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageUrl}
         * @param packageUrl Property packageUrl: Deployment packages address.
         *                   Only FatJar War or the type of application can be configured to deploy packet address.
         * @return {@code this}
         */
        public Builder packageUrl(com.aliyun.ros.cdk.core.IResolvable packageUrl) {
            this.packageUrl = packageUrl;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageVersion}
         * @param packageVersion Property packageVersion: The version number of the deployed package, War FatJar type required.
         *                       Please customize it meaning.
         * @return {@code this}
         */
        public Builder packageVersion(java.lang.String packageVersion) {
            this.packageVersion = packageVersion;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageVersion}
         * @param packageVersion Property packageVersion: The version number of the deployed package, War FatJar type required.
         *                       Please customize it meaning.
         * @return {@code this}
         */
        public Builder packageVersion(com.aliyun.ros.cdk.core.IResolvable packageVersion) {
            this.packageVersion = packageVersion;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPostStart}
         * @param postStart Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.
         * @return {@code this}
         */
        public Builder postStart(java.lang.String postStart) {
            this.postStart = postStart;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPostStart}
         * @param postStart Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.
         * @return {@code this}
         */
        public Builder postStart(com.aliyun.ros.cdk.core.IResolvable postStart) {
            this.postStart = postStart;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPreStop}
         * @param preStop Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.
         * @return {@code this}
         */
        public Builder preStop(java.lang.String preStop) {
            this.preStop = preStop;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPreStop}
         * @param preStop Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.
         * @return {@code this}
         */
        public Builder preStop(com.aliyun.ros.cdk.core.IResolvable preStop) {
            this.preStop = preStop;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getReadiness}
         * @param readiness Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.
         *                  Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
         * @return {@code this}
         */
        public Builder readiness(java.lang.String readiness) {
            this.readiness = readiness;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getReadiness}
         * @param readiness Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.
         *                  Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
         * @return {@code this}
         */
        public Builder readiness(com.aliyun.ros.cdk.core.IResolvable readiness) {
            this.readiness = readiness;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group ID.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group ID.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSlsConfigs}
         * @param slsConfigs Property slsConfigs: Log collection configuration file.
         * @return {@code this}
         */
        public Builder slsConfigs(java.lang.String slsConfigs) {
            this.slsConfigs = slsConfigs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSlsConfigs}
         * @param slsConfigs Property slsConfigs: Log collection configuration file.
         * @return {@code this}
         */
        public Builder slsConfigs(com.aliyun.ros.cdk.core.IResolvable slsConfigs) {
            this.slsConfigs = slsConfigs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getTags}
         * @param tags Property tags: Tags to attach to application.
         *             Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getTimezone}
         * @param timezone Property timezone: Application time zone.
         *                 Default Asia/Shanghai.
         * @return {@code this}
         */
        public Builder timezone(java.lang.String timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getTimezone}
         * @param timezone Property timezone: Application time zone.
         *                 Default Asia/Shanghai.
         * @return {@code this}
         */
        public Builder timezone(com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVpcId}
         * @param vpcId Property vpcId: EDAS namespace corresponding VPC.
         *              In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVpcId}
         * @param vpcId Property vpcId: EDAS namespace corresponding VPC.
         *              In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: Application examples where the elastic card virtual switch.
         *                  The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: Application examples where the elastic card virtual switch.
         *                  The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getWarStartOptions}
         * @param warStartOptions Property warStartOptions: War Start the application package option.
         *                        Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ &#64;" start
         * @return {@code this}
         */
        public Builder warStartOptions(java.lang.String warStartOptions) {
            this.warStartOptions = warStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getWarStartOptions}
         * @param warStartOptions Property warStartOptions: War Start the application package option.
         *                        Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ &#64;" start
         * @return {@code this}
         */
        public Builder warStartOptions(com.aliyun.ros.cdk.core.IResolvable warStartOptions) {
            this.warStartOptions = warStartOptions;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getWebContainer}
         * @param webContainer Property webContainer: Tomcat deployment of the package depends on the version.
         *                     Mirroring not supported.
         * @return {@code this}
         */
        public Builder webContainer(java.lang.String webContainer) {
            this.webContainer = webContainer;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getWebContainer}
         * @param webContainer Property webContainer: Tomcat deployment of the package depends on the version.
         *                     Mirroring not supported.
         * @return {@code this}
         */
        public Builder webContainer(com.aliyun.ros.cdk.core.IResolvable webContainer) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationProps {
        private final java.lang.Object appName;
        private final java.lang.Object cpu;
        private final java.lang.Object memory;
        private final java.lang.Object namespaceId;
        private final java.lang.Object packageType;
        private final java.lang.Object replicas;
        private final java.lang.Object appDescription;
        private final java.lang.Object command;
        private final java.lang.Object commandArgs;
        private final java.lang.Object customHostAlias;
        private final java.lang.Object deploy;
        private final java.lang.Object edasContainerVersion;
        private final java.lang.Object envs;
        private final java.lang.Object imageUrl;
        private final java.lang.Object jarStartArgs;
        private final java.lang.Object jarStartOptions;
        private final java.lang.Object jdk;
        private final java.lang.Object liveness;
        private final java.lang.Object mountDesc;
        private final java.lang.Object mountHost;
        private final java.lang.Object nasId;
        private final java.lang.Object packageUrl;
        private final java.lang.Object packageVersion;
        private final java.lang.Object postStart;
        private final java.lang.Object preStop;
        private final java.lang.Object readiness;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object slsConfigs;
        private final java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> tags;
        private final java.lang.Object timezone;
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
            this.appDescription = software.amazon.jsii.Kernel.get(this, "appDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandArgs = software.amazon.jsii.Kernel.get(this, "commandArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customHostAlias = software.amazon.jsii.Kernel.get(this, "customHostAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploy = software.amazon.jsii.Kernel.get(this, "deploy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edasContainerVersion = software.amazon.jsii.Kernel.get(this, "edasContainerVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envs = software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageUrl = software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jarStartArgs = software.amazon.jsii.Kernel.get(this, "jarStartArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jarStartOptions = software.amazon.jsii.Kernel.get(this, "jarStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jdk = software.amazon.jsii.Kernel.get(this, "jdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.liveness = software.amazon.jsii.Kernel.get(this, "liveness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mountDesc = software.amazon.jsii.Kernel.get(this, "mountDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mountHost = software.amazon.jsii.Kernel.get(this, "mountHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nasId = software.amazon.jsii.Kernel.get(this, "nasId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageUrl = software.amazon.jsii.Kernel.get(this, "packageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageVersion = software.amazon.jsii.Kernel.get(this, "packageVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.postStart = software.amazon.jsii.Kernel.get(this, "postStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preStop = software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.readiness = software.amazon.jsii.Kernel.get(this, "readiness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsConfigs = software.amazon.jsii.Kernel.get(this, "slsConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.RosApplication.TagsProperty.class)));
            this.timezone = software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.appDescription = builder.appDescription;
            this.command = builder.command;
            this.commandArgs = builder.commandArgs;
            this.customHostAlias = builder.customHostAlias;
            this.deploy = builder.deploy;
            this.edasContainerVersion = builder.edasContainerVersion;
            this.envs = builder.envs;
            this.imageUrl = builder.imageUrl;
            this.jarStartArgs = builder.jarStartArgs;
            this.jarStartOptions = builder.jarStartOptions;
            this.jdk = builder.jdk;
            this.liveness = builder.liveness;
            this.mountDesc = builder.mountDesc;
            this.mountHost = builder.mountHost;
            this.nasId = builder.nasId;
            this.packageUrl = builder.packageUrl;
            this.packageVersion = builder.packageVersion;
            this.postStart = builder.postStart;
            this.preStop = builder.preStop;
            this.readiness = builder.readiness;
            this.securityGroupId = builder.securityGroupId;
            this.slsConfigs = builder.slsConfigs;
            this.tags = (java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty>)builder.tags;
            this.timezone = builder.timezone;
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
        public final java.lang.Object getAppDescription() {
            return this.appDescription;
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
        public final java.lang.Object getEnvs() {
            return this.envs;
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
        public final java.lang.Object getLiveness() {
            return this.liveness;
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
        public final java.lang.Object getNasId() {
            return this.nasId;
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
        public final java.lang.Object getPostStart() {
            return this.postStart;
        }

        @Override
        public final java.lang.Object getPreStop() {
            return this.preStop;
        }

        @Override
        public final java.lang.Object getReadiness() {
            return this.readiness;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
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
        public final java.lang.Object getTimezone() {
            return this.timezone;
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
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
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
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
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
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timezone != null ? this.timezone.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.warStartOptions != null ? this.warStartOptions.hashCode() : 0);
            result = 31 * result + (this.webContainer != null ? this.webContainer.hashCode() : 0);
            return result;
        }
    }
}
