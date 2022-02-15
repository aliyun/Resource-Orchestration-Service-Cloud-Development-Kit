package com.aliyun.ros.cdk.sae;

/**
 * A ROS resource type:  `ALIYUN::SAE::Application`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.424Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.Application")
public class Application extends com.aliyun.ros.cdk.core.Resource {

    protected Application(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Application(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SAE::Application`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.ApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SAE::Application`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.ApplicationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppId: Creating successful application ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.Application}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.Application> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sae.ApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.ApplicationProps.Builder();
        }

        /**
         * Property appName: Application Name.
         * <p>
         * Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
         * <p>
         * @return {@code this}
         * @param appName Property appName: Application Name. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: Application Name.
         * <p>
         * Allowed numbers, letters and underlined combinations thereof. We must begin with the letters, the maximum length of 36 characters.
         * <p>
         * @return {@code this}
         * @param appName Property appName: Application Name. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.
         * <p>
         * Currently only supports fixed specifications instance type.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: Each instance of the CPU required, in units of milli core, can not be zero.
         * <p>
         * Currently only supports fixed specifications instance type.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: Each instance of the CPU required, in units of milli core, can not be zero. This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * Property memory: Each instance of the required memory, in units of MB, can not be zero.
         * <p>
         * Currently only supports fixed specifications instance type.
         * <p>
         * @return {@code this}
         * @param memory Property memory: Each instance of the required memory, in units of MB, can not be zero. This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * Property memory: Each instance of the required memory, in units of MB, can not be zero.
         * <p>
         * Currently only supports fixed specifications instance type.
         * <p>
         * @return {@code this}
         * @param memory Property memory: Each instance of the required memory, in units of MB, can not be zero. This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * Property namespaceId: EDAS namespace corresponding to ID.
         * <p>
         * Canada supports only the name of the scribe lowercase namespace must begin with a letter.
         * Namespace can interface to obtain from DescribeNamespaceList.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: EDAS namespace corresponding to ID. This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * Property namespaceId: EDAS namespace corresponding to ID.
         * <p>
         * Canada supports only the name of the scribe lowercase namespace must begin with a letter.
         * Namespace can interface to obtain from DescribeNamespaceList.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: EDAS namespace corresponding to ID. This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * Property packageType: Application package type.
         * <p>
         * Support FatJar, War, Image.
         * <p>
         * @return {@code this}
         * @param packageType Property packageType: Application package type. This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }
        /**
         * Property packageType: Application package type.
         * <p>
         * Support FatJar, War, Image.
         * <p>
         * @return {@code this}
         * @param packageType Property packageType: Application package type. This parameter is required.
         */
        public Builder packageType(final com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * Property replicas: The initial number of instances.
         * <p>
         * @return {@code this}
         * @param replicas Property replicas: The initial number of instances. This parameter is required.
         */
        public Builder replicas(final java.lang.Number replicas) {
            this.props.replicas(replicas);
            return this;
        }
        /**
         * Property replicas: The initial number of instances.
         * <p>
         * @return {@code this}
         * @param replicas Property replicas: The initial number of instances. This parameter is required.
         */
        public Builder replicas(final com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.props.replicas(replicas);
            return this;
        }

        /**
         * Property appDescription: Application description.
         * <p>
         * No more than 1024 characters.
         * <p>
         * @return {@code this}
         * @param appDescription Property appDescription: Application description. This parameter is required.
         */
        public Builder appDescription(final java.lang.String appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }
        /**
         * Property appDescription: Application description.
         * <p>
         * No more than 1024 characters.
         * <p>
         * @return {@code this}
         * @param appDescription Property appDescription: Application description. This parameter is required.
         */
        public Builder appDescription(final com.aliyun.ros.cdk.core.IResolvable appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }

        /**
         * Property command: Mirroring the start command.
         * <p>
         * The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
         * <p>
         * @return {@code this}
         * @param command Property command: Mirroring the start command. This parameter is required.
         */
        public Builder command(final java.lang.String command) {
            this.props.command(command);
            return this;
        }
        /**
         * Property command: Mirroring the start command.
         * <p>
         * The command object in memory executable container must be. For example: sleep. This command will cause the image to set the original startup command failure.
         * <p>
         * @return {@code this}
         * @param command Property command: Mirroring the start command. This parameter is required.
         */
        public Builder command(final com.aliyun.ros.cdk.core.IResolvable command) {
            this.props.command(command);
            return this;
        }

        /**
         * Property commandArgs: Mirroring the start command parameters.
         * <p>
         * Parameters required for the start-command. For example: [ "1d"]
         * <p>
         * @return {@code this}
         * @param commandArgs Property commandArgs: Mirroring the start command parameters. This parameter is required.
         */
        public Builder commandArgs(final java.lang.String commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }
        /**
         * Property commandArgs: Mirroring the start command parameters.
         * <p>
         * Parameters required for the start-command. For example: [ "1d"]
         * <p>
         * @return {@code this}
         * @param commandArgs Property commandArgs: Mirroring the start command parameters. This parameter is required.
         */
        public Builder commandArgs(final com.aliyun.ros.cdk.core.IResolvable commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }

        /**
         * Property customHostAlias: Custom mapping host vessel.
         * <p>
         * For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
         * <p>
         * @return {@code this}
         * @param customHostAlias Property customHostAlias: Custom mapping host vessel. This parameter is required.
         */
        public Builder customHostAlias(final java.lang.String customHostAlias) {
            this.props.customHostAlias(customHostAlias);
            return this;
        }
        /**
         * Property customHostAlias: Custom mapping host vessel.
         * <p>
         * For example: [{ "hostName": "samplehost", "ip": "127.0.0.1"}]
         * <p>
         * @return {@code this}
         * @param customHostAlias Property customHostAlias: Custom mapping host vessel. This parameter is required.
         */
        public Builder customHostAlias(final com.aliyun.ros.cdk.core.IResolvable customHostAlias) {
            this.props.customHostAlias(customHostAlias);
            return this;
        }

        /**
         * Property deploy: Whether deployed immediately take effect, the default is false.
         * <p>
         * @return {@code this}
         * @param deploy Property deploy: Whether deployed immediately take effect, the default is false. This parameter is required.
         */
        public Builder deploy(final java.lang.Boolean deploy) {
            this.props.deploy(deploy);
            return this;
        }
        /**
         * Property deploy: Whether deployed immediately take effect, the default is false.
         * <p>
         * @return {@code this}
         * @param deploy Property deploy: Whether deployed immediately take effect, the default is false. This parameter is required.
         */
        public Builder deploy(final com.aliyun.ros.cdk.core.IResolvable deploy) {
            this.props.deploy(deploy);
            return this;
        }

        /**
         * Property edasContainerVersion: EDAS pandora runtime environment used by the application.
         * <p>
         * @return {@code this}
         * @param edasContainerVersion Property edasContainerVersion: EDAS pandora runtime environment used by the application. This parameter is required.
         */
        public Builder edasContainerVersion(final java.lang.String edasContainerVersion) {
            this.props.edasContainerVersion(edasContainerVersion);
            return this;
        }
        /**
         * Property edasContainerVersion: EDAS pandora runtime environment used by the application.
         * <p>
         * @return {@code this}
         * @param edasContainerVersion Property edasContainerVersion: EDAS pandora runtime environment used by the application. This parameter is required.
         */
        public Builder edasContainerVersion(final com.aliyun.ros.cdk.core.IResolvable edasContainerVersion) {
            this.props.edasContainerVersion(edasContainerVersion);
            return this;
        }

        /**
         * Property envs: Container environment variable parameters.
         * <p>
         * For example: [{ "name": "envtmp", "value": "0"}]
         * <p>
         * @return {@code this}
         * @param envs Property envs: Container environment variable parameters. This parameter is required.
         */
        public Builder envs(final java.lang.String envs) {
            this.props.envs(envs);
            return this;
        }
        /**
         * Property envs: Container environment variable parameters.
         * <p>
         * For example: [{ "name": "envtmp", "value": "0"}]
         * <p>
         * @return {@code this}
         * @param envs Property envs: Container environment variable parameters. This parameter is required.
         */
        public Builder envs(final com.aliyun.ros.cdk.core.IResolvable envs) {
            this.props.envs(envs);
            return this;
        }

        /**
         * Property imageUrl: Mirroring address.
         * <p>
         * Image only type of application can be configured to mirror address.
         * <p>
         * @return {@code this}
         * @param imageUrl Property imageUrl: Mirroring address. This parameter is required.
         */
        public Builder imageUrl(final java.lang.String imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }
        /**
         * Property imageUrl: Mirroring address.
         * <p>
         * Image only type of application can be configured to mirror address.
         * <p>
         * @return {@code this}
         * @param imageUrl Property imageUrl: Mirroring address. This parameter is required.
         */
        public Builder imageUrl(final com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }

        /**
         * Property jarStartArgs: Jar package startup application parameters.
         * <p>
         * Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
         * $ JarStartArgs
         * <p>
         * @return {@code this}
         * @param jarStartArgs Property jarStartArgs: Jar package startup application parameters. This parameter is required.
         */
        public Builder jarStartArgs(final java.lang.String jarStartArgs) {
            this.props.jarStartArgs(jarStartArgs);
            return this;
        }
        /**
         * Property jarStartArgs: Jar package startup application parameters.
         * <p>
         * Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
         * $ JarStartArgs
         * <p>
         * @return {@code this}
         * @param jarStartArgs Property jarStartArgs: Jar package startup application parameters. This parameter is required.
         */
        public Builder jarStartArgs(final com.aliyun.ros.cdk.core.IResolvable jarStartArgs) {
            this.props.jarStartArgs(jarStartArgs);
            return this;
        }

        /**
         * Property jarStartOptions: Jar start the application package option.
         * <p>
         * Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
         * $ JarStartArgs
         * <p>
         * @return {@code this}
         * @param jarStartOptions Property jarStartOptions: Jar start the application package option. This parameter is required.
         */
        public Builder jarStartOptions(final java.lang.String jarStartOptions) {
            this.props.jarStartOptions(jarStartOptions);
            return this;
        }
        /**
         * Property jarStartOptions: Jar start the application package option.
         * <p>
         * Apply the default startup command: $ JAVA_HOME / bin / java $ JarStartOptions -jar $ CATALINA_OPTS "$ package_path"
         * $ JarStartArgs
         * <p>
         * @return {@code this}
         * @param jarStartOptions Property jarStartOptions: Jar start the application package option. This parameter is required.
         */
        public Builder jarStartOptions(final com.aliyun.ros.cdk.core.IResolvable jarStartOptions) {
            this.props.jarStartOptions(jarStartOptions);
            return this;
        }

        /**
         * Property jdk: Deployment of JDK version of the package depends on.
         * <p>
         * Mirroring not supported.
         * <p>
         * @return {@code this}
         * @param jdk Property jdk: Deployment of JDK version of the package depends on. This parameter is required.
         */
        public Builder jdk(final java.lang.String jdk) {
            this.props.jdk(jdk);
            return this;
        }
        /**
         * Property jdk: Deployment of JDK version of the package depends on.
         * <p>
         * Mirroring not supported.
         * <p>
         * @return {@code this}
         * @param jdk Property jdk: Deployment of JDK version of the package depends on. This parameter is required.
         */
        public Builder jdk(final com.aliyun.ros.cdk.core.IResolvable jdk) {
            this.props.jdk(jdk);
            return this;
        }

        /**
         * Property liveness: Container health check, health check fails container will be killed and recovery.
         * <p>
         * Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
         * <p>
         * @return {@code this}
         * @param liveness Property liveness: Container health check, health check fails container will be killed and recovery. This parameter is required.
         */
        public Builder liveness(final java.lang.String liveness) {
            this.props.liveness(liveness);
            return this;
        }
        /**
         * Property liveness: Container health check, health check fails container will be killed and recovery.
         * <p>
         * Currently only supports mode command issued in the container. The columns: { "exec": { "command": [ "sleep", "5s"]}, "initialDelaySeconds": 10, "timeoutSeconds": 11}
         * <p>
         * @return {@code this}
         * @param liveness Property liveness: Container health check, health check fails container will be killed and recovery. This parameter is required.
         */
        public Builder liveness(final com.aliyun.ros.cdk.core.IResolvable liveness) {
            this.props.liveness(liveness);
            return this;
        }

        /**
         * Property mountDesc: Mount Description.
         * <p>
         * @return {@code this}
         * @param mountDesc Property mountDesc: Mount Description. This parameter is required.
         */
        public Builder mountDesc(final java.lang.String mountDesc) {
            this.props.mountDesc(mountDesc);
            return this;
        }
        /**
         * Property mountDesc: Mount Description.
         * <p>
         * @return {@code this}
         * @param mountDesc Property mountDesc: Mount Description. This parameter is required.
         */
        public Builder mountDesc(final com.aliyun.ros.cdk.core.IResolvable mountDesc) {
            this.props.mountDesc(mountDesc);
            return this;
        }

        /**
         * Property mountHost: nas mount point in the application of vpc.
         * <p>
         * @return {@code this}
         * @param mountHost Property mountHost: nas mount point in the application of vpc. This parameter is required.
         */
        public Builder mountHost(final java.lang.String mountHost) {
            this.props.mountHost(mountHost);
            return this;
        }
        /**
         * Property mountHost: nas mount point in the application of vpc.
         * <p>
         * @return {@code this}
         * @param mountHost Property mountHost: nas mount point in the application of vpc. This parameter is required.
         */
        public Builder mountHost(final com.aliyun.ros.cdk.core.IResolvable mountHost) {
            this.props.mountHost(mountHost);
            return this;
        }

        /**
         * Property nasId: Mount the NAS ID, you must be in the same region and cluster.
         * <p>
         * It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
         * <p>
         * @return {@code this}
         * @param nasId Property nasId: Mount the NAS ID, you must be in the same region and cluster. This parameter is required.
         */
        public Builder nasId(final java.lang.String nasId) {
            this.props.nasId(nasId);
            return this;
        }
        /**
         * Property nasId: Mount the NAS ID, you must be in the same region and cluster.
         * <p>
         * It must be available to create a mount point limit, or switch on its mount point already in the VPC. If you do not fill, and there mountDescs field, the default will automatically purchase a NAS and mount it onto the switch within the VPC.
         * <p>
         * @return {@code this}
         * @param nasId Property nasId: Mount the NAS ID, you must be in the same region and cluster. This parameter is required.
         */
        public Builder nasId(final com.aliyun.ros.cdk.core.IResolvable nasId) {
            this.props.nasId(nasId);
            return this;
        }

        /**
         * Property packageUrl: Deployment packages address.
         * <p>
         * Only FatJar War or the type of application can be configured to deploy packet address.
         * <p>
         * @return {@code this}
         * @param packageUrl Property packageUrl: Deployment packages address. This parameter is required.
         */
        public Builder packageUrl(final java.lang.String packageUrl) {
            this.props.packageUrl(packageUrl);
            return this;
        }
        /**
         * Property packageUrl: Deployment packages address.
         * <p>
         * Only FatJar War or the type of application can be configured to deploy packet address.
         * <p>
         * @return {@code this}
         * @param packageUrl Property packageUrl: Deployment packages address. This parameter is required.
         */
        public Builder packageUrl(final com.aliyun.ros.cdk.core.IResolvable packageUrl) {
            this.props.packageUrl(packageUrl);
            return this;
        }

        /**
         * Property packageVersion: The version number of the deployed package, War FatJar type required.
         * <p>
         * Please customize it meaning.
         * <p>
         * @return {@code this}
         * @param packageVersion Property packageVersion: The version number of the deployed package, War FatJar type required. This parameter is required.
         */
        public Builder packageVersion(final java.lang.String packageVersion) {
            this.props.packageVersion(packageVersion);
            return this;
        }
        /**
         * Property packageVersion: The version number of the deployed package, War FatJar type required.
         * <p>
         * Please customize it meaning.
         * <p>
         * @return {@code this}
         * @param packageVersion Property packageVersion: The version number of the deployed package, War FatJar type required. This parameter is required.
         */
        public Builder packageVersion(final com.aliyun.ros.cdk.core.IResolvable packageVersion) {
            this.props.packageVersion(packageVersion);
            return this;
        }

        /**
         * Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.
         * <p>
         * @return {@code this}
         * @param postStart Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}. This parameter is required.
         */
        public Builder postStart(final java.lang.String postStart) {
            this.props.postStart(postStart);
            return this;
        }
        /**
         * Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}.
         * <p>
         * @return {@code this}
         * @param postStart Property postStart: Executing the script, such as after starting the format: { "exec": { "command": "cat", "/ etc / group"}}. This parameter is required.
         */
        public Builder postStart(final com.aliyun.ros.cdk.core.IResolvable postStart) {
            this.props.postStart(postStart);
            return this;
        }

        /**
         * Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.
         * <p>
         * @return {@code this}
         * @param preStop Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}. This parameter is required.
         */
        public Builder preStop(final java.lang.String preStop) {
            this.props.preStop(preStop);
            return this;
        }
        /**
         * Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}.
         * <p>
         * @return {@code this}
         * @param preStop Property preStop: Script is executed before stopping the format as: { "exec": { "command": "cat", "/ etc / group"}}. This parameter is required.
         */
        public Builder preStop(final com.aliyun.ros.cdk.core.IResolvable preStop) {
            this.props.preStop(preStop);
            return this;
        }

        /**
         * Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.
         * <p>
         * Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
         * <p>
         * @return {@code this}
         * @param readiness Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. This parameter is required.
         */
        public Builder readiness(final java.lang.String readiness) {
            this.props.readiness(readiness);
            return this;
        }
        /**
         * Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted.
         * <p>
         * Do not pass health check of the vessel will not have to enter SLB traffic. For example: { "exec": { "command": [ "sleep", "6s"]}, "initialDelaySeconds": 15, "timeoutSeconds": 12}
         * <p>
         * @return {@code this}
         * @param readiness Property readiness: Application launch status check, health check fails repeatedly container will be killed and restarted. This parameter is required.
         */
        public Builder readiness(final com.aliyun.ros.cdk.core.IResolvable readiness) {
            this.props.readiness(readiness);
            return this;
        }

        /**
         * Property securityGroupId: Security group ID.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group ID. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security group ID.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group ID. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property slsConfigs: Log collection configuration file.
         * <p>
         * @return {@code this}
         * @param slsConfigs Property slsConfigs: Log collection configuration file. This parameter is required.
         */
        public Builder slsConfigs(final java.lang.String slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }
        /**
         * Property slsConfigs: Log collection configuration file.
         * <p>
         * @return {@code this}
         * @param slsConfigs Property slsConfigs: Log collection configuration file. This parameter is required.
         */
        public Builder slsConfigs(final com.aliyun.ros.cdk.core.IResolvable slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }

        /**
         * Property tags: Tags to attach to application.
         * <p>
         * Max support 20 tags to add during create application. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to application. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property timezone: Application time zone.
         * <p>
         * Default Asia/Shanghai.
         * <p>
         * @return {@code this}
         * @param timezone Property timezone: Application time zone. This parameter is required.
         */
        public Builder timezone(final java.lang.String timezone) {
            this.props.timezone(timezone);
            return this;
        }
        /**
         * Property timezone: Application time zone.
         * <p>
         * Default Asia/Shanghai.
         * <p>
         * @return {@code this}
         * @param timezone Property timezone: Application time zone. This parameter is required.
         */
        public Builder timezone(final com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.props.timezone(timezone);
            return this;
        }

        /**
         * Property vpcId: EDAS namespace corresponding VPC.
         * <p>
         * In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: EDAS namespace corresponding VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: EDAS namespace corresponding VPC.
         * <p>
         * In Serverless in a corresponding one of the VPC namespace only, and can not be modified. Serverless first created in the application name space will form a binding relationship. You may correspond to a plurality of namespaces VPC. Do not fill was VpcId namespace binding.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: EDAS namespace corresponding VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: Application examples where the elastic card virtual switch.
         * <p>
         * The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Application examples where the elastic card virtual switch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: Application examples where the elastic card virtual switch.
         * <p>
         * The switch must be located above the VPC. The same switch with EDAS namespace binding relationship. Do not fill was VSwitchId namespace binding.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Application examples where the elastic card virtual switch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property warStartOptions: War Start the application package option.
         * <p>
         * Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ &#64;" start
         * <p>
         * @return {@code this}
         * @param warStartOptions Property warStartOptions: War Start the application package option. This parameter is required.
         */
        public Builder warStartOptions(final java.lang.String warStartOptions) {
            this.props.warStartOptions(warStartOptions);
            return this;
        }
        /**
         * Property warStartOptions: War Start the application package option.
         * <p>
         * Apply the default startup command: java $ JAVA_OPTS $ CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$ &#64;" start
         * <p>
         * @return {@code this}
         * @param warStartOptions Property warStartOptions: War Start the application package option. This parameter is required.
         */
        public Builder warStartOptions(final com.aliyun.ros.cdk.core.IResolvable warStartOptions) {
            this.props.warStartOptions(warStartOptions);
            return this;
        }

        /**
         * Property webContainer: Tomcat deployment of the package depends on the version.
         * <p>
         * Mirroring not supported.
         * <p>
         * @return {@code this}
         * @param webContainer Property webContainer: Tomcat deployment of the package depends on the version. This parameter is required.
         */
        public Builder webContainer(final java.lang.String webContainer) {
            this.props.webContainer(webContainer);
            return this;
        }
        /**
         * Property webContainer: Tomcat deployment of the package depends on the version.
         * <p>
         * Mirroring not supported.
         * <p>
         * @return {@code this}
         * @param webContainer Property webContainer: Tomcat deployment of the package depends on the version. This parameter is required.
         */
        public Builder webContainer(final com.aliyun.ros.cdk.core.IResolvable webContainer) {
            this.props.webContainer(webContainer);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sae.Application}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.Application build() {
            return new com.aliyun.ros.cdk.sae.Application(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
