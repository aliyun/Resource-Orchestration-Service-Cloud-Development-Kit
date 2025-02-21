package com.aliyun.ros.cdk.sae;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SAE::Application</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:20.220Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.Application")
public class Application extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.sae.IApplication {

    protected Application(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Application(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.ApplicationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.ApplicationProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
         * <p>
         * @return {@code this}
         * @param acrAssumeRoleArn Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts. This parameter is required.
         */
        public Builder acrAssumeRoleArn(final java.lang.String acrAssumeRoleArn) {
            this.props.acrAssumeRoleArn(acrAssumeRoleArn);
            return this;
        }
        /**
         * Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts.
         * <p>
         * @return {@code this}
         * @param acrAssumeRoleArn Property acrAssumeRoleArn: The ARN of the RAM role required when pulling the image across accounts. This parameter is required.
         */
        public Builder acrAssumeRoleArn(final com.aliyun.ros.cdk.core.IResolvable acrAssumeRoleArn) {
            this.props.acrAssumeRoleArn(acrAssumeRoleArn);
            return this;
        }

        /**
         * Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID.
         * <p>
         * Required when ImageUrl serves enterprise edition for container images.
         * <p>
         * @return {@code this}
         * @param acrInstanceId Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID. This parameter is required.
         */
        public Builder acrInstanceId(final java.lang.String acrInstanceId) {
            this.props.acrInstanceId(acrInstanceId);
            return this;
        }
        /**
         * Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID.
         * <p>
         * Required when ImageUrl serves enterprise edition for container images.
         * <p>
         * @return {@code this}
         * @param acrInstanceId Property acrInstanceId: Container Image service ACR Enterprise Edition instance ID. This parameter is required.
         */
        public Builder acrInstanceId(final com.aliyun.ros.cdk.core.IResolvable acrInstanceId) {
            this.props.acrInstanceId(acrInstanceId);
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
         * Property appSource: Application source.
         * <p>
         * @return {@code this}
         * @param appSource Property appSource: Application source. This parameter is required.
         */
        public Builder appSource(final java.lang.String appSource) {
            this.props.appSource(appSource);
            return this;
        }
        /**
         * Property appSource: Application source.
         * <p>
         * @return {@code this}
         * @param appSource Property appSource: Application source. This parameter is required.
         */
        public Builder appSource(final com.aliyun.ros.cdk.core.IResolvable appSource) {
            this.props.appSource(appSource);
            return this;
        }

        /**
         * Property associateEip: Whether to bind EIP.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>true: Binding.</li>
         * <li>false: No binding</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param associateEip Property associateEip: Whether to bind EIP. This parameter is required.
         */
        public Builder associateEip(final java.lang.Boolean associateEip) {
            this.props.associateEip(associateEip);
            return this;
        }
        /**
         * Property associateEip: Whether to bind EIP.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>true: Binding.</li>
         * <li>false: No binding</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param associateEip Property associateEip: Whether to bind EIP. This parameter is required.
         */
        public Builder associateEip(final com.aliyun.ros.cdk.core.IResolvable associateEip) {
            this.props.associateEip(associateEip);
            return this;
        }

        /**
         * Property autoConfig: Whether to automatically configure the network environment.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.</li>
         * <li>false: SAE manually config the network environment when creating the application.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoConfig Property autoConfig: Whether to automatically configure the network environment. This parameter is required.
         */
        public Builder autoConfig(final java.lang.Boolean autoConfig) {
            this.props.autoConfig(autoConfig);
            return this;
        }
        /**
         * Property autoConfig: Whether to automatically configure the network environment.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>true: SAE automatically config the network environment when creating the application. The values for NamespaceId, VpcId, vSwitchId, and SecurityGroupId are ignored.</li>
         * <li>false: SAE manually config the network environment when creating the application.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoConfig Property autoConfig: Whether to automatically configure the network environment. This parameter is required.
         */
        public Builder autoConfig(final com.aliyun.ros.cdk.core.IResolvable autoConfig) {
            this.props.autoConfig(autoConfig);
            return this;
        }

        /**
         * Property baseAppId: Base application ID.
         * <p>
         * @return {@code this}
         * @param baseAppId Property baseAppId: Base application ID. This parameter is required.
         */
        public Builder baseAppId(final java.lang.String baseAppId) {
            this.props.baseAppId(baseAppId);
            return this;
        }
        /**
         * Property baseAppId: Base application ID.
         * <p>
         * @return {@code this}
         * @param baseAppId Property baseAppId: Base application ID. This parameter is required.
         */
        public Builder baseAppId(final com.aliyun.ros.cdk.core.IResolvable baseAppId) {
            this.props.baseAppId(baseAppId);
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
         * Property configMapMountDesc: ConfigMap mount description.
         * <p>
         * Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
         * <p>
         * @return {@code this}
         * @param configMapMountDesc Property configMapMountDesc: ConfigMap mount description. This parameter is required.
         */
        public Builder configMapMountDesc(final java.lang.String configMapMountDesc) {
            this.props.configMapMountDesc(configMapMountDesc);
            return this;
        }
        /**
         * Property configMapMountDesc: ConfigMap mount description.
         * <p>
         * Use the configuration items created on the namespace configuration items page to inject configuration information into the container.
         * <p>
         * @return {@code this}
         * @param configMapMountDesc Property configMapMountDesc: ConfigMap mount description. This parameter is required.
         */
        public Builder configMapMountDesc(final com.aliyun.ros.cdk.core.IResolvable configMapMountDesc) {
            this.props.configMapMountDesc(configMapMountDesc);
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
         * Property enableEbpf: Whether to enable EBPF.
         * <p>
         * Enable application monitoring for non-Java applications. The values are explained as follows:
         * <p>
         * <ul>
         * <li>true: Enable.</li>
         * <li>false: Disable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableEbpf Property enableEbpf: Whether to enable EBPF. This parameter is required.
         */
        public Builder enableEbpf(final java.lang.String enableEbpf) {
            this.props.enableEbpf(enableEbpf);
            return this;
        }
        /**
         * Property enableEbpf: Whether to enable EBPF.
         * <p>
         * Enable application monitoring for non-Java applications. The values are explained as follows:
         * <p>
         * <ul>
         * <li>true: Enable.</li>
         * <li>false: Disable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enableEbpf Property enableEbpf: Whether to enable EBPF. This parameter is required.
         */
        public Builder enableEbpf(final com.aliyun.ros.cdk.core.IResolvable enableEbpf) {
            this.props.enableEbpf(enableEbpf);
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
         * Property imagePullSecrets: Corresponding to the secret dictionary ID.
         * <p>
         * @return {@code this}
         * @param imagePullSecrets Property imagePullSecrets: Corresponding to the secret dictionary ID. This parameter is required.
         */
        public Builder imagePullSecrets(final java.lang.String imagePullSecrets) {
            this.props.imagePullSecrets(imagePullSecrets);
            return this;
        }
        /**
         * Property imagePullSecrets: Corresponding to the secret dictionary ID.
         * <p>
         * @return {@code this}
         * @param imagePullSecrets Property imagePullSecrets: Corresponding to the secret dictionary ID. This parameter is required.
         */
        public Builder imagePullSecrets(final com.aliyun.ros.cdk.core.IResolvable imagePullSecrets) {
            this.props.imagePullSecrets(imagePullSecrets);
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
         * Property kafkaConfigs: Logs are ingested to Kafka configuration summary information.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>kafkaEndpoint: The service access address for the Kafka API</li>
         * <li>kafkaInstanceId: Kafka instance ID</li>
         * <li>kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param kafkaConfigs Property kafkaConfigs: Logs are ingested to Kafka configuration summary information. This parameter is required.
         */
        public Builder kafkaConfigs(final java.lang.String kafkaConfigs) {
            this.props.kafkaConfigs(kafkaConfigs);
            return this;
        }
        /**
         * Property kafkaConfigs: Logs are ingested to Kafka configuration summary information.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>kafkaEndpoint: The service access address for the Kafka API</li>
         * <li>kafkaInstanceId: Kafka instance ID</li>
         * <li>kafkaConfigs: Configuration summary information for one or more logs See Request parameters kafkaConfigs for a description of these values.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param kafkaConfigs Property kafkaConfigs: Logs are ingested to Kafka configuration summary information. This parameter is required.
         */
        public Builder kafkaConfigs(final com.aliyun.ros.cdk.core.IResolvable kafkaConfigs) {
            this.props.kafkaConfigs(kafkaConfigs);
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
         * Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos.
         * <p>
         * <ul>
         * <li>1: User-built Nacos.</li>
         * <li>2: MSE commercial version of Nacos.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param microRegistration Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos. This parameter is required.
         */
        public Builder microRegistration(final java.lang.String microRegistration) {
            this.props.microRegistration(microRegistration);
            return this;
        }
        /**
         * Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos.
         * <p>
         * <ul>
         * <li>1: User-built Nacos.</li>
         * <li>2: MSE commercial version of Nacos.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param microRegistration Property microRegistration: Select the Nacos registry with the following values: - 0: SAE built-in Nacos. This parameter is required.
         */
        public Builder microRegistration(final com.aliyun.ros.cdk.core.IResolvable microRegistration) {
            this.props.microRegistration(microRegistration);
            return this;
        }

        /**
         * Property microRegistrationConfig: Registry configuration information.
         * <p>
         * @return {@code this}
         * @param microRegistrationConfig Property microRegistrationConfig: Registry configuration information. This parameter is required.
         */
        public Builder microRegistrationConfig(final java.lang.String microRegistrationConfig) {
            this.props.microRegistrationConfig(microRegistrationConfig);
            return this;
        }
        /**
         * Property microRegistrationConfig: Registry configuration information.
         * <p>
         * @return {@code this}
         * @param microRegistrationConfig Property microRegistrationConfig: Registry configuration information. This parameter is required.
         */
        public Builder microRegistrationConfig(final com.aliyun.ros.cdk.core.IResolvable microRegistrationConfig) {
            this.props.microRegistrationConfig(microRegistrationConfig);
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
         * Property nasConfigs: Configuration to mount the NAS.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>mountPath: The container mount path</li>
         * <li>readOnly: A value of false indicates read and write permission.</li>
         * <li>nasId: NAS ID</li>
         * <li>mountDomain: The container mount point address For more information, see DescribeMountTargets.</li>
         * <li>nasPath: NAS relative file directory</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param nasConfigs Property nasConfigs: Configuration to mount the NAS. This parameter is required.
         */
        public Builder nasConfigs(final java.lang.String nasConfigs) {
            this.props.nasConfigs(nasConfigs);
            return this;
        }
        /**
         * Property nasConfigs: Configuration to mount the NAS.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>mountPath: The container mount path</li>
         * <li>readOnly: A value of false indicates read and write permission.</li>
         * <li>nasId: NAS ID</li>
         * <li>mountDomain: The container mount point address For more information, see DescribeMountTargets.</li>
         * <li>nasPath: NAS relative file directory</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param nasConfigs Property nasConfigs: Configuration to mount the NAS. This parameter is required.
         */
        public Builder nasConfigs(final com.aliyun.ros.cdk.core.IResolvable nasConfigs) {
            this.props.nasConfigs(nasConfigs);
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
         * Property ossAkId: AccessKey ID of the OSS.
         * <p>
         * @return {@code this}
         * @param ossAkId Property ossAkId: AccessKey ID of the OSS. This parameter is required.
         */
        public Builder ossAkId(final java.lang.String ossAkId) {
            this.props.ossAkId(ossAkId);
            return this;
        }
        /**
         * Property ossAkId: AccessKey ID of the OSS.
         * <p>
         * @return {@code this}
         * @param ossAkId Property ossAkId: AccessKey ID of the OSS. This parameter is required.
         */
        public Builder ossAkId(final com.aliyun.ros.cdk.core.IResolvable ossAkId) {
            this.props.ossAkId(ossAkId);
            return this;
        }

        /**
         * Property ossAkSecret: AccessKey Secret of the OSS.
         * <p>
         * @return {@code this}
         * @param ossAkSecret Property ossAkSecret: AccessKey Secret of the OSS. This parameter is required.
         */
        public Builder ossAkSecret(final java.lang.String ossAkSecret) {
            this.props.ossAkSecret(ossAkSecret);
            return this;
        }
        /**
         * Property ossAkSecret: AccessKey Secret of the OSS.
         * <p>
         * @return {@code this}
         * @param ossAkSecret Property ossAkSecret: AccessKey Secret of the OSS. This parameter is required.
         */
        public Builder ossAkSecret(final com.aliyun.ros.cdk.core.IResolvable ossAkSecret) {
            this.props.ossAkSecret(ossAkSecret);
            return this;
        }

        /**
         * Property ossMountDescs: OSS mount description information.
         * <p>
         * The parameters are described as follows:
         * <p>
         * <ul>
         * <li>bucketName: The name of the Bucket</li>
         * <li>bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.</li>
         * <li>mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.</li>
         * <li>readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
         * <p>
         * <ul>
         * <li>true: Read-only permission</li>
         * <li>false: Read and write permissions</li>
         * </ul></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ossMountDescs Property ossMountDescs: OSS mount description information. This parameter is required.
         */
        public Builder ossMountDescs(final java.util.List<? extends java.lang.Object> ossMountDescs) {
            this.props.ossMountDescs(ossMountDescs);
            return this;
        }
        /**
         * Property ossMountDescs: OSS mount description information.
         * <p>
         * The parameters are described as follows:
         * <p>
         * <ul>
         * <li>bucketName: The name of the Bucket</li>
         * <li>bucketPath: The directory or OSS object you created in OSS that will raise an exception if the OSS mount directory does not exist.</li>
         * <li>mountPath: Your container path in SAE. If the path already exists, it is a covering relationship. If the path doesn't exist, it will be created.</li>
         * <li>readOnly: This specifies whether the container path has read-only permissions for mount directory resources:
         * <p>
         * <ul>
         * <li>true: Read-only permission</li>
         * <li>false: Read and write permissions</li>
         * </ul></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ossMountDescs Property ossMountDescs: OSS mount description information. This parameter is required.
         */
        public Builder ossMountDescs(final com.aliyun.ros.cdk.core.IResolvable ossMountDescs) {
            this.props.ossMountDescs(ossMountDescs);
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
         * Property php: PHP version.
         * <p>
         * @return {@code this}
         * @param php Property php: PHP version. This parameter is required.
         */
        public Builder php(final java.lang.String php) {
            this.props.php(php);
            return this;
        }
        /**
         * Property php: PHP version.
         * <p>
         * @return {@code this}
         * @param php Property php: PHP version. This parameter is required.
         */
        public Builder php(final com.aliyun.ros.cdk.core.IResolvable php) {
            this.props.php(php);
            return this;
        }

        /**
         * Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path.
         * <p>
         * You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
         * <p>
         * @return {@code this}
         * @param phpArmsConfigLocation Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. This parameter is required.
         */
        public Builder phpArmsConfigLocation(final java.lang.String phpArmsConfigLocation) {
            this.props.phpArmsConfigLocation(phpArmsConfigLocation);
            return this;
        }
        /**
         * Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path.
         * <p>
         * You don't need to worry about the configuration content; SAE will automatically render the correct configuration file.
         * <p>
         * @return {@code this}
         * @param phpArmsConfigLocation Property phpArmsConfigLocation: The PHP application monitors the mount path and requires you to ensure that the PHP server loads the configuration file for this path. This parameter is required.
         */
        public Builder phpArmsConfigLocation(final com.aliyun.ros.cdk.core.IResolvable phpArmsConfigLocation) {
            this.props.phpArmsConfigLocation(phpArmsConfigLocation);
            return this;
        }

        /**
         * Property phpConfig: PHP configuration file contents.
         * <p>
         * @return {@code this}
         * @param phpConfig Property phpConfig: PHP configuration file contents. This parameter is required.
         */
        public Builder phpConfig(final java.lang.String phpConfig) {
            this.props.phpConfig(phpConfig);
            return this;
        }
        /**
         * Property phpConfig: PHP configuration file contents.
         * <p>
         * @return {@code this}
         * @param phpConfig Property phpConfig: PHP configuration file contents. This parameter is required.
         */
        public Builder phpConfig(final com.aliyun.ros.cdk.core.IResolvable phpConfig) {
            this.props.phpConfig(phpConfig);
            return this;
        }

        /**
         * Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
         * <p>
         * @return {@code this}
         * @param phpConfigLocation Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file. This parameter is required.
         */
        public Builder phpConfigLocation(final java.lang.String phpConfigLocation) {
            this.props.phpConfigLocation(phpConfigLocation);
            return this;
        }
        /**
         * Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file.
         * <p>
         * @return {@code this}
         * @param phpConfigLocation Property phpConfigLocation: PHP application launch configuration mount path, you need to ensure that the PHP server will be started with this configuration file. This parameter is required.
         */
        public Builder phpConfigLocation(final com.aliyun.ros.cdk.core.IResolvable phpConfigLocation) {
            this.props.phpConfigLocation(phpConfigLocation);
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
         * Property programmingLanguage: Create the stack language for the application.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>java: The Java language</li>
         * <li>php: PHP language.</li>
         * <li>other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param programmingLanguage Property programmingLanguage: Create the stack language for the application. This parameter is required.
         */
        public Builder programmingLanguage(final java.lang.String programmingLanguage) {
            this.props.programmingLanguage(programmingLanguage);
            return this;
        }
        /**
         * Property programmingLanguage: Create the stack language for the application.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>java: The Java language</li>
         * <li>php: PHP language.</li>
         * <li>other: Multiple languages such as Python, C++, Go,.NET, Node.js, etc.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param programmingLanguage Property programmingLanguage: Create the stack language for the application. This parameter is required.
         */
        public Builder programmingLanguage(final com.aliyun.ros.cdk.core.IResolvable programmingLanguage) {
            this.props.programmingLanguage(programmingLanguage);
            return this;
        }

        /**
         * Property pvtzDiscoverySvc: Enable K8s Service registration discovery.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.</li>
         * <li>namespaceId: The namespace ID</li>
         * <li>portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.</li>
         * <li>portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.</li>
         * <li>enable: Enable K8s Service registration discovery.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param pvtzDiscoverySvc Property pvtzDiscoverySvc: Enable K8s Service registration discovery. This parameter is required.
         */
        public Builder pvtzDiscoverySvc(final java.lang.String pvtzDiscoverySvc) {
            this.props.pvtzDiscoverySvc(pvtzDiscoverySvc);
            return this;
        }
        /**
         * Property pvtzDiscoverySvc: Enable K8s Service registration discovery.
         * <p>
         * The values are explained as follows:
         * <p>
         * <ul>
         * <li>serviceName: The name of the service The format is custom-namespace ID, in which the postfix-namespace ID does not support customization and needs to be filled in according to the namespace of the application. For example, choosing the default namespace for the North China 2 (Beijing) region would be -cn-beijing-default.</li>
         * <li>namespaceId: The namespace ID</li>
         * <li>portProtocols: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols.</li>
         * <li>portAndProtocol: Ports and protocols The port is in the range [1,65535] and supports both TCP and UDP protocols. portProtocols is preferred. If portProtocols is set, only portProtocols will take effect.</li>
         * <li>enable: Enable K8s Service registration discovery.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param pvtzDiscoverySvc Property pvtzDiscoverySvc: Enable K8s Service registration discovery. This parameter is required.
         */
        public Builder pvtzDiscoverySvc(final com.aliyun.ros.cdk.core.IResolvable pvtzDiscoverySvc) {
            this.props.pvtzDiscoverySvc(pvtzDiscoverySvc);
            return this;
        }

        /**
         * Property python: Python version.
         * <p>
         * Supports PYTHON 3.9.15
         * <p>
         * @return {@code this}
         * @param python Property python: Python version. This parameter is required.
         */
        public Builder python(final java.lang.String python) {
            this.props.python(python);
            return this;
        }
        /**
         * Property python: Python version.
         * <p>
         * Supports PYTHON 3.9.15
         * <p>
         * @return {@code this}
         * @param python Property python: Python version. This parameter is required.
         */
        public Builder python(final com.aliyun.ros.cdk.core.IResolvable python) {
            this.props.python(python);
            return this;
        }

        /**
         * Property pythonModules: Install custom module dependencies.
         * <p>
         * The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
         * <p>
         * @return {@code this}
         * @param pythonModules Property pythonModules: Install custom module dependencies. This parameter is required.
         */
        public Builder pythonModules(final java.lang.String pythonModules) {
            this.props.pythonModules(pythonModules);
            return this;
        }
        /**
         * Property pythonModules: Install custom module dependencies.
         * <p>
         * The dependencies defined in requirements.txt in the root directory are installed by default. If the package is not configured or customized, you can specify the dependencies to install.
         * <p>
         * @return {@code this}
         * @param pythonModules Property pythonModules: Install custom module dependencies. This parameter is required.
         */
        public Builder pythonModules(final com.aliyun.ros.cdk.core.IResolvable pythonModules) {
            this.props.pythonModules(pythonModules);
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
         * Property saeVersion: SAE version.
         * <p>
         * @return {@code this}
         * @param saeVersion Property saeVersion: SAE version. This parameter is required.
         */
        public Builder saeVersion(final java.lang.String saeVersion) {
            this.props.saeVersion(saeVersion);
            return this;
        }
        /**
         * Property saeVersion: SAE version.
         * <p>
         * @return {@code this}
         * @param saeVersion Property saeVersion: SAE version. This parameter is required.
         */
        public Builder saeVersion(final com.aliyun.ros.cdk.core.IResolvable saeVersion) {
            this.props.saeVersion(saeVersion);
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
         * Property serviceTags: Service tags.
         * <p>
         * @return {@code this}
         * @param serviceTags Property serviceTags: Service tags. This parameter is required.
         */
        public Builder serviceTags(final java.lang.String serviceTags) {
            this.props.serviceTags(serviceTags);
            return this;
        }
        /**
         * Property serviceTags: Service tags.
         * <p>
         * @return {@code this}
         * @param serviceTags Property serviceTags: Service tags. This parameter is required.
         */
        public Builder serviceTags(final com.aliyun.ros.cdk.core.IResolvable serviceTags) {
            this.props.serviceTags(serviceTags);
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
         * Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds.
         * <p>
         * The value ranges from 1 to 300.
         * <p>
         * @return {@code this}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final java.lang.Number terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }
        /**
         * Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds.
         * <p>
         * The value ranges from 1 to 300.
         * <p>
         * @return {@code this}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: Graceful offline timeout, default 30, unit of seconds. This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
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
         * Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024.
         * <p>
         * If not configured, it defaults to 8080.
         * <p>
         * <ul>
         * <li>contextPath: The access path, defaults to the root directory "/"</li>
         * <li>maxThreads: This config the number of connections in the pool; the default is 400.</li>
         * <li>uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.</li>
         * <li>useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param tomcatConfig Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. This parameter is required.
         */
        public Builder tomcatConfig(final java.lang.String tomcatConfig) {
            this.props.tomcatConfig(tomcatConfig);
            return this;
        }
        /**
         * Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024.
         * <p>
         * If not configured, it defaults to 8080.
         * <p>
         * <ul>
         * <li>contextPath: The access path, defaults to the root directory "/"</li>
         * <li>maxThreads: This config the number of connections in the pool; the default is 400.</li>
         * <li>uriEncoding: Tomcat's encoding formats, including UTF-8, ISO-8859-1, GBK, and GB2312 If not set, it defaults to ISO-8859-1.</li>
         * <li>useBodyEncodingForUri: Whether to useBodyEncoding for URL (defaults to true).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param tomcatConfig Property tomcatConfig: Tomcat file configuration, set to "" or "{}" to delete the configuration: - port: Ports in the range of 1024 to 65535 require Root privileges to operate on ports below 1024 Because the container is configured with Admin access, please specify a port greater than 1024. This parameter is required.
         */
        public Builder tomcatConfig(final com.aliyun.ros.cdk.core.IResolvable tomcatConfig) {
            this.props.tomcatConfig(tomcatConfig);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.Application}.
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
