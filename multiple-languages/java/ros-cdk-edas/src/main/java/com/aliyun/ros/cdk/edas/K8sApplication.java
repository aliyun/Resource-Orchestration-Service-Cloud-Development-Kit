package com.aliyun.ros.cdk.edas;

/**
 * A ROS resource type:  `ALIYUN::EDAS::K8sApplication`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:19.504Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.K8sApplication")
public class K8sApplication extends com.aliyun.ros.cdk.core.Resource {

    protected K8sApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected K8sApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EDAS::K8sApplication`.
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
    public K8sApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EDAS::K8sApplication`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public K8sApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sApplicationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppId: The ID of the application.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AppName: The name of the application.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppName() {
        return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ChangeOrderId: The ID of the change process.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterId: The cluster ID of the application.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CsClusterId: The K8s cluster ID of the application.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCsClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrCsClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.K8sApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.K8sApplication> {
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
        private final com.aliyun.ros.cdk.edas.K8sApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.K8sApplicationProps.Builder();
        }

        /**
         * Property appName: The name of the application.
         * <p>
         * The name must start with a letter and can contain digits,
         * letters, and hyphens (-). It can be up to 36 characters in length.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the application. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: The name of the application.
         * <p>
         * The name must start with a letter and can contain digits,
         * letters, and hyphens (-). It can be up to 36 characters in length.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the application. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * Property clusterId: The cluster ID.
         * <p>
         * You can query the cluster ID by calling the ListCluster operation.
         * For more information, see ListCluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The cluster ID. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The cluster ID.
         * <p>
         * You can query the cluster ID by calling the ListCluster operation.
         * For more information, see ListCluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The cluster ID. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property applicationDescription: The description of the application.
         * <p>
         * @return {@code this}
         * @param applicationDescription Property applicationDescription: The description of the application. This parameter is required.
         */
        public Builder applicationDescription(final java.lang.String applicationDescription) {
            this.props.applicationDescription(applicationDescription);
            return this;
        }
        /**
         * Property applicationDescription: The description of the application.
         * <p>
         * @return {@code this}
         * @param applicationDescription Property applicationDescription: The description of the application. This parameter is required.
         */
        public Builder applicationDescription(final com.aliyun.ros.cdk.core.IResolvable applicationDescription) {
            this.props.applicationDescription(applicationDescription);
            return this;
        }

        /**
         * Property command: The command that is specified.
         * <p>
         * If it is specified, it replaces the startup command in the image when the image is started.
         * <p>
         * @return {@code this}
         * @param command Property command: The command that is specified. This parameter is required.
         */
        public Builder command(final java.lang.String command) {
            this.props.command(command);
            return this;
        }
        /**
         * Property command: The command that is specified.
         * <p>
         * If it is specified, it replaces the startup command in the image when the image is started.
         * <p>
         * @return {@code this}
         * @param command Property command: The command that is specified. This parameter is required.
         */
        public Builder command(final com.aliyun.ros.cdk.core.IResolvable command) {
            this.props.command(command);
            return this;
        }

        /**
         * Property commandArgs: The collection of commands.
         * <p>
         * For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
         * <p>
         * @return {@code this}
         * @param commandArgs Property commandArgs: The collection of commands. This parameter is required.
         */
        public Builder commandArgs(final com.aliyun.ros.cdk.core.IResolvable commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }
        /**
         * Property commandArgs: The collection of commands.
         * <p>
         * For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
         * <p>
         * @return {@code this}
         * @param commandArgs Property commandArgs: The collection of commands. This parameter is required.
         */
        public Builder commandArgs(final java.util.List<? extends java.lang.Object> commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }

        /**
         * Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes.
         * <p>
         * The value true indicates yes, whereas other values indicate no.
         * <p>
         * @return {@code this}
         * @param deployAcrossNodes Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. This parameter is required.
         */
        public Builder deployAcrossNodes(final java.lang.Boolean deployAcrossNodes) {
            this.props.deployAcrossNodes(deployAcrossNodes);
            return this;
        }
        /**
         * Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes.
         * <p>
         * The value true indicates yes, whereas other values indicate no.
         * <p>
         * @return {@code this}
         * @param deployAcrossNodes Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. This parameter is required.
         */
        public Builder deployAcrossNodes(final com.aliyun.ros.cdk.core.IResolvable deployAcrossNodes) {
            this.props.deployAcrossNodes(deployAcrossNodes);
            return this;
        }

        /**
         * Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones.
         * <p>
         * The value true indicates yes, whereas other values indicate no.
         * <p>
         * @return {@code this}
         * @param deployAcrossZones Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones. This parameter is required.
         */
        public Builder deployAcrossZones(final java.lang.Boolean deployAcrossZones) {
            this.props.deployAcrossZones(deployAcrossZones);
            return this;
        }
        /**
         * Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones.
         * <p>
         * The value true indicates yes, whereas other values indicate no.
         * <p>
         * @return {@code this}
         * @param deployAcrossZones Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones. This parameter is required.
         */
        public Builder deployAcrossZones(final com.aliyun.ros.cdk.core.IResolvable deployAcrossZones) {
            this.props.deployAcrossZones(deployAcrossZones);
            return this;
        }

        /**
         * Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
         * <p>
         * Note This parameter is not supported when you deploy an application by using images.
         * <p>
         * @return {@code this}
         * @param edasContainerVersion Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends. This parameter is required.
         */
        public Builder edasContainerVersion(final java.lang.String edasContainerVersion) {
            this.props.edasContainerVersion(edasContainerVersion);
            return this;
        }
        /**
         * Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
         * <p>
         * Note This parameter is not supported when you deploy an application by using images.
         * <p>
         * @return {@code this}
         * @param edasContainerVersion Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends. This parameter is required.
         */
        public Builder edasContainerVersion(final com.aliyun.ros.cdk.core.IResolvable edasContainerVersion) {
            this.props.edasContainerVersion(edasContainerVersion);
            return this;
        }

        /**
         * Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
         * <p>
         * @return {@code this}
         * @param enableAhas Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS). This parameter is required.
         */
        public Builder enableAhas(final java.lang.Boolean enableAhas) {
            this.props.enableAhas(enableAhas);
            return this;
        }
        /**
         * Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
         * <p>
         * @return {@code this}
         * @param enableAhas Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS). This parameter is required.
         */
        public Builder enableAhas(final com.aliyun.ros.cdk.core.IResolvable enableAhas) {
            this.props.enableAhas(enableAhas);
            return this;
        }

        /**
         * Property envs: The collection of deployment environment variables.
         * <p>
         * For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
         * <p>
         * @return {@code this}
         * @param envs Property envs: The collection of deployment environment variables. This parameter is required.
         */
        public Builder envs(final com.aliyun.ros.cdk.core.IResolvable envs) {
            this.props.envs(envs);
            return this;
        }
        /**
         * Property envs: The collection of deployment environment variables.
         * <p>
         * For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
         * <p>
         * @return {@code this}
         * @param envs Property envs: The collection of deployment environment variables. This parameter is required.
         */
        public Builder envs(final java.util.List<? extends java.lang.Object> envs) {
            this.props.envs(envs);
            return this;
        }

        /**
         * Property imageUrl: The image URL.
         * <p>
         * When PackageType is set to Image, this parameter is required.
         * <p>
         * @return {@code this}
         * @param imageUrl Property imageUrl: The image URL. This parameter is required.
         */
        public Builder imageUrl(final java.lang.String imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }
        /**
         * Property imageUrl: The image URL.
         * <p>
         * When PackageType is set to Image, this parameter is required.
         * <p>
         * @return {@code this}
         * @param imageUrl Property imageUrl: The image URL. This parameter is required.
         */
        public Builder imageUrl(final com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }

        /**
         * Property internetSlbId: The ID of the Internet-facing SLB instance.
         * <p>
         * If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
         * <p>
         * @return {@code this}
         * @param internetSlbId Property internetSlbId: The ID of the Internet-facing SLB instance. This parameter is required.
         */
        public Builder internetSlbId(final java.lang.String internetSlbId) {
            this.props.internetSlbId(internetSlbId);
            return this;
        }
        /**
         * Property internetSlbId: The ID of the Internet-facing SLB instance.
         * <p>
         * If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
         * <p>
         * @return {@code this}
         * @param internetSlbId Property internetSlbId: The ID of the Internet-facing SLB instance. This parameter is required.
         */
        public Builder internetSlbId(final com.aliyun.ros.cdk.core.IResolvable internetSlbId) {
            this.props.internetSlbId(internetSlbId);
            return this;
        }

        /**
         * Property internetSlbPort: The frontend port of the Internet-facing SLB instance.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param internetSlbPort Property internetSlbPort: The frontend port of the Internet-facing SLB instance. This parameter is required.
         */
        public Builder internetSlbPort(final java.lang.Number internetSlbPort) {
            this.props.internetSlbPort(internetSlbPort);
            return this;
        }
        /**
         * Property internetSlbPort: The frontend port of the Internet-facing SLB instance.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param internetSlbPort Property internetSlbPort: The frontend port of the Internet-facing SLB instance. This parameter is required.
         */
        public Builder internetSlbPort(final com.aliyun.ros.cdk.core.IResolvable internetSlbPort) {
            this.props.internetSlbPort(internetSlbPort);
            return this;
        }

        /**
         * Property internetSlbProtocol: The protocol of the Internet-facing SLB instance.
         * <p>
         * Valid values: TCP, HTTP, and HTTPS.
         * <p>
         * @return {@code this}
         * @param internetSlbProtocol Property internetSlbProtocol: The protocol of the Internet-facing SLB instance. This parameter is required.
         */
        public Builder internetSlbProtocol(final java.lang.String internetSlbProtocol) {
            this.props.internetSlbProtocol(internetSlbProtocol);
            return this;
        }
        /**
         * Property internetSlbProtocol: The protocol of the Internet-facing SLB instance.
         * <p>
         * Valid values: TCP, HTTP, and HTTPS.
         * <p>
         * @return {@code this}
         * @param internetSlbProtocol Property internetSlbProtocol: The protocol of the Internet-facing SLB instance. This parameter is required.
         */
        public Builder internetSlbProtocol(final com.aliyun.ros.cdk.core.IResolvable internetSlbProtocol) {
            this.props.internetSlbProtocol(internetSlbProtocol);
            return this;
        }

        /**
         * Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param internetTargetPort Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application. This parameter is required.
         */
        public Builder internetTargetPort(final java.lang.Number internetTargetPort) {
            this.props.internetTargetPort(internetTargetPort);
            return this;
        }
        /**
         * Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param internetTargetPort Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application. This parameter is required.
         */
        public Builder internetTargetPort(final com.aliyun.ros.cdk.core.IResolvable internetTargetPort) {
            this.props.internetTargetPort(internetTargetPort);
            return this;
        }

        /**
         * Property intranetSlbId: The ID of the internal-facing SLB instance.
         * <p>
         * If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
         * <p>
         * @return {@code this}
         * @param intranetSlbId Property intranetSlbId: The ID of the internal-facing SLB instance. This parameter is required.
         */
        public Builder intranetSlbId(final java.lang.String intranetSlbId) {
            this.props.intranetSlbId(intranetSlbId);
            return this;
        }
        /**
         * Property intranetSlbId: The ID of the internal-facing SLB instance.
         * <p>
         * If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
         * <p>
         * @return {@code this}
         * @param intranetSlbId Property intranetSlbId: The ID of the internal-facing SLB instance. This parameter is required.
         */
        public Builder intranetSlbId(final com.aliyun.ros.cdk.core.IResolvable intranetSlbId) {
            this.props.intranetSlbId(intranetSlbId);
            return this;
        }

        /**
         * Property intranetSlbPort: The frontend port of the internal-facing SLB instance.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param intranetSlbPort Property intranetSlbPort: The frontend port of the internal-facing SLB instance. This parameter is required.
         */
        public Builder intranetSlbPort(final java.lang.Number intranetSlbPort) {
            this.props.intranetSlbPort(intranetSlbPort);
            return this;
        }
        /**
         * Property intranetSlbPort: The frontend port of the internal-facing SLB instance.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param intranetSlbPort Property intranetSlbPort: The frontend port of the internal-facing SLB instance. This parameter is required.
         */
        public Builder intranetSlbPort(final com.aliyun.ros.cdk.core.IResolvable intranetSlbPort) {
            this.props.intranetSlbPort(intranetSlbPort);
            return this;
        }

        /**
         * Property intranetSlbProtocol: The protocol of the internal-facing SLB instance.
         * <p>
         * Valid values: TCP, HTTP, and HTTPS.
         * <p>
         * @return {@code this}
         * @param intranetSlbProtocol Property intranetSlbProtocol: The protocol of the internal-facing SLB instance. This parameter is required.
         */
        public Builder intranetSlbProtocol(final java.lang.String intranetSlbProtocol) {
            this.props.intranetSlbProtocol(intranetSlbProtocol);
            return this;
        }
        /**
         * Property intranetSlbProtocol: The protocol of the internal-facing SLB instance.
         * <p>
         * Valid values: TCP, HTTP, and HTTPS.
         * <p>
         * @return {@code this}
         * @param intranetSlbProtocol Property intranetSlbProtocol: The protocol of the internal-facing SLB instance. This parameter is required.
         */
        public Builder intranetSlbProtocol(final com.aliyun.ros.cdk.core.IResolvable intranetSlbProtocol) {
            this.props.intranetSlbProtocol(intranetSlbProtocol);
            return this;
        }

        /**
         * Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param intranetTargetPort Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. This parameter is required.
         */
        public Builder intranetTargetPort(final java.lang.Number intranetTargetPort) {
            this.props.intranetTargetPort(intranetTargetPort);
            return this;
        }
        /**
         * Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param intranetTargetPort Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. This parameter is required.
         */
        public Builder intranetTargetPort(final com.aliyun.ros.cdk.core.IResolvable intranetTargetPort) {
            this.props.intranetTargetPort(intranetTargetPort);
            return this;
        }

        /**
         * Property isMultilingualApp: Specifies whether the application is a multi-language application.
         * <p>
         * @return {@code this}
         * @param isMultilingualApp Property isMultilingualApp: Specifies whether the application is a multi-language application. This parameter is required.
         */
        public Builder isMultilingualApp(final java.lang.Boolean isMultilingualApp) {
            this.props.isMultilingualApp(isMultilingualApp);
            return this;
        }
        /**
         * Property isMultilingualApp: Specifies whether the application is a multi-language application.
         * <p>
         * @return {@code this}
         * @param isMultilingualApp Property isMultilingualApp: Specifies whether the application is a multi-language application. This parameter is required.
         */
        public Builder isMultilingualApp(final com.aliyun.ros.cdk.core.IResolvable isMultilingualApp) {
            this.props.isMultilingualApp(isMultilingualApp);
            return this;
        }

        /**
         * Property javaStartUpConfig: The configuration of Java startup parameters for a Java application.
         * <p>
         * These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
         * The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
         * <p>
         * @return {@code this}
         * @param javaStartUpConfig Property javaStartUpConfig: The configuration of Java startup parameters for a Java application. This parameter is required.
         */
        public Builder javaStartUpConfig(final com.aliyun.ros.cdk.core.IResolvable javaStartUpConfig) {
            this.props.javaStartUpConfig(javaStartUpConfig);
            return this;
        }
        /**
         * Property javaStartUpConfig: The configuration of Java startup parameters for a Java application.
         * <p>
         * These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
         * The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
         * <p>
         * @return {@code this}
         * @param javaStartUpConfig Property javaStartUpConfig: The configuration of Java startup parameters for a Java application. This parameter is required.
         */
        public Builder javaStartUpConfig(final com.aliyun.ros.cdk.edas.RosK8sApplication.JavaStartUpConfigProperty javaStartUpConfig) {
            this.props.javaStartUpConfig(javaStartUpConfig);
            return this;
        }

        /**
         * Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
         * <p>
         * Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
         * <p>
         * @return {@code this}
         * @param jdk Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends. This parameter is required.
         */
        public Builder jdk(final java.lang.String jdk) {
            this.props.jdk(jdk);
            return this;
        }
        /**
         * Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
         * <p>
         * Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
         * <p>
         * @return {@code this}
         * @param jdk Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends. This parameter is required.
         */
        public Builder jdk(final com.aliyun.ros.cdk.core.IResolvable jdk) {
            this.props.jdk(jdk);
            return this;
        }

        /**
         * Property limitCpu: The maximum number of CPUs allowed for each application instance when the application is running.
         * <p>
         * Unit: cores.
         * <p>
         * @return {@code this}
         * @param limitCpu Property limitCpu: The maximum number of CPUs allowed for each application instance when the application is running. This parameter is required.
         */
        public Builder limitCpu(final java.lang.Number limitCpu) {
            this.props.limitCpu(limitCpu);
            return this;
        }
        /**
         * Property limitCpu: The maximum number of CPUs allowed for each application instance when the application is running.
         * <p>
         * Unit: cores.
         * <p>
         * @return {@code this}
         * @param limitCpu Property limitCpu: The maximum number of CPUs allowed for each application instance when the application is running. This parameter is required.
         */
        public Builder limitCpu(final com.aliyun.ros.cdk.core.IResolvable limitCpu) {
            this.props.limitCpu(limitCpu);
            return this;
        }

        /**
         * Property limitMem: The maximum amount of memory allowed for each application instance when the application is running.
         * <p>
         * Unit: MB.
         * <p>
         * @return {@code this}
         * @param limitMem Property limitMem: The maximum amount of memory allowed for each application instance when the application is running. This parameter is required.
         */
        public Builder limitMem(final java.lang.Number limitMem) {
            this.props.limitMem(limitMem);
            return this;
        }
        /**
         * Property limitMem: The maximum amount of memory allowed for each application instance when the application is running.
         * <p>
         * Unit: MB.
         * <p>
         * @return {@code this}
         * @param limitMem Property limitMem: The maximum amount of memory allowed for each application instance when the application is running. This parameter is required.
         */
        public Builder limitMem(final com.aliyun.ros.cdk.core.IResolvable limitMem) {
            this.props.limitMem(limitMem);
            return this;
        }

        /**
         * Property liveness: The liveness check on the container.
         * <p>
         * @return {@code this}
         * @param liveness Property liveness: The liveness check on the container. This parameter is required.
         */
        public Builder liveness(final com.aliyun.ros.cdk.core.IResolvable liveness) {
            this.props.liveness(liveness);
            return this;
        }
        /**
         * Property liveness: The liveness check on the container.
         * <p>
         * @return {@code this}
         * @param liveness Property liveness: The liveness check on the container. This parameter is required.
         */
        public Builder liveness(final com.aliyun.ros.cdk.edas.RosK8sApplication.LivenessProperty liveness) {
            this.props.liveness(liveness);
            return this;
        }

        /**
         * Property localVolume: The configuration for mounting host files to the container where the application is running.
         * <p>
         * For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
         * <p>
         * @return {@code this}
         * @param localVolume Property localVolume: The configuration for mounting host files to the container where the application is running. This parameter is required.
         */
        public Builder localVolume(final com.aliyun.ros.cdk.core.IResolvable localVolume) {
            this.props.localVolume(localVolume);
            return this;
        }
        /**
         * Property localVolume: The configuration for mounting host files to the container where the application is running.
         * <p>
         * For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
         * <p>
         * @return {@code this}
         * @param localVolume Property localVolume: The configuration for mounting host files to the container where the application is running. This parameter is required.
         */
        public Builder localVolume(final java.util.List<? extends java.lang.Object> localVolume) {
            this.props.localVolume(localVolume);
            return this;
        }

        /**
         * Property logicalRegionId: The ID of the EDAS namespace.
         * <p>
         * This parameter is required for a non-default namespace.
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: The ID of the EDAS namespace. This parameter is required.
         */
        public Builder logicalRegionId(final java.lang.String logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }
        /**
         * Property logicalRegionId: The ID of the EDAS namespace.
         * <p>
         * This parameter is required for a non-default namespace.
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: The ID of the EDAS namespace. This parameter is required.
         */
        public Builder logicalRegionId(final com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }

        /**
         * Property mountDescs: The description of the NAS mounting configuration.
         * <p>
         * For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
         * <p>
         * @return {@code this}
         * @param mountDescs Property mountDescs: The description of the NAS mounting configuration. This parameter is required.
         */
        public Builder mountDescs(final com.aliyun.ros.cdk.core.IResolvable mountDescs) {
            this.props.mountDescs(mountDescs);
            return this;
        }
        /**
         * Property mountDescs: The description of the NAS mounting configuration.
         * <p>
         * For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
         * <p>
         * @return {@code this}
         * @param mountDescs Property mountDescs: The description of the NAS mounting configuration. This parameter is required.
         */
        public Builder mountDescs(final java.util.List<? extends java.lang.Object> mountDescs) {
            this.props.mountDescs(mountDescs);
            return this;
        }

        /**
         * Property namespace: The namespace of the Kubernetes cluster.
         * <p>
         * This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the Kubernetes cluster. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The namespace of the Kubernetes cluster.
         * <p>
         * This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the Kubernetes cluster. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running.
         * <p>
         * The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
         * target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
         * <p>
         * @return {@code this}
         * @param nasId Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. This parameter is required.
         */
        public Builder nasId(final java.lang.String nasId) {
            this.props.nasId(nasId);
            return this;
        }
        /**
         * Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running.
         * <p>
         * The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
         * target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
         * <p>
         * @return {@code this}
         * @param nasId Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. This parameter is required.
         */
        public Builder nasId(final com.aliyun.ros.cdk.core.IResolvable nasId) {
            this.props.nasId(nasId);
            return this;
        }

        /**
         * Property packageType: The type of the deployment package.
         * <p>
         * Valid values: FatJar, WAR, and Image.
         * <p>
         * @return {@code this}
         * @param packageType Property packageType: The type of the deployment package. This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }
        /**
         * Property packageType: The type of the deployment package.
         * <p>
         * Valid values: FatJar, WAR, and Image.
         * <p>
         * @return {@code this}
         * @param packageType Property packageType: The type of the deployment package. This parameter is required.
         */
        public Builder packageType(final com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * Property packageUrl: The URL of the deployment package.
         * <p>
         * This parameter must be set for the applications
         * that are deployed by using FatJar or WAR packages.
         * Note The version of SDK for Java or Python must be 2.44.0 or later.
         * <p>
         * @return {@code this}
         * @param packageUrl Property packageUrl: The URL of the deployment package. This parameter is required.
         */
        public Builder packageUrl(final java.lang.String packageUrl) {
            this.props.packageUrl(packageUrl);
            return this;
        }
        /**
         * Property packageUrl: The URL of the deployment package.
         * <p>
         * This parameter must be set for the applications
         * that are deployed by using FatJar or WAR packages.
         * Note The version of SDK for Java or Python must be 2.44.0 or later.
         * <p>
         * @return {@code this}
         * @param packageUrl Property packageUrl: The URL of the deployment package. This parameter is required.
         */
        public Builder packageUrl(final com.aliyun.ros.cdk.core.IResolvable packageUrl) {
            this.props.packageUrl(packageUrl);
            return this;
        }

        /**
         * Property packageVersion: The version of the deployment package.
         * <p>
         * This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
         * Note The version of SDK for Java or Python must be 2.44.0 or later.
         * <p>
         * @return {@code this}
         * @param packageVersion Property packageVersion: The version of the deployment package. This parameter is required.
         */
        public Builder packageVersion(final java.lang.String packageVersion) {
            this.props.packageVersion(packageVersion);
            return this;
        }
        /**
         * Property packageVersion: The version of the deployment package.
         * <p>
         * This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
         * Note The version of SDK for Java or Python must be 2.44.0 or later.
         * <p>
         * @return {@code this}
         * @param packageVersion Property packageVersion: The version of the deployment package. This parameter is required.
         */
        public Builder packageVersion(final com.aliyun.ros.cdk.core.IResolvable packageVersion) {
            this.props.packageVersion(packageVersion);
            return this;
        }

        /**
         * Property postStart: The post-start script.
         * <p>
         * For example, {"Exec": {"Command": ["ls", "/"]}}.
         * <p>
         * @return {@code this}
         * @param postStart Property postStart: The post-start script. This parameter is required.
         */
        public Builder postStart(final com.aliyun.ros.cdk.core.IResolvable postStart) {
            this.props.postStart(postStart);
            return this;
        }
        /**
         * Property postStart: The post-start script.
         * <p>
         * For example, {"Exec": {"Command": ["ls", "/"]}}.
         * <p>
         * @return {@code this}
         * @param postStart Property postStart: The post-start script. This parameter is required.
         */
        public Builder postStart(final com.aliyun.ros.cdk.edas.RosK8sApplication.PostStartProperty postStart) {
            this.props.postStart(postStart);
            return this;
        }

        /**
         * Property preStop: The pre-stop script.
         * <p>
         * For example, {"Exec": {"Command": ["ls", "/"]}}.
         * <p>
         * @return {@code this}
         * @param preStop Property preStop: The pre-stop script. This parameter is required.
         */
        public Builder preStop(final com.aliyun.ros.cdk.core.IResolvable preStop) {
            this.props.preStop(preStop);
            return this;
        }
        /**
         * Property preStop: The pre-stop script.
         * <p>
         * For example, {"Exec": {"Command": ["ls", "/"]}}.
         * <p>
         * @return {@code this}
         * @param preStop Property preStop: The pre-stop script. This parameter is required.
         */
        public Builder preStop(final com.aliyun.ros.cdk.edas.RosK8sApplication.PreStopProperty preStop) {
            this.props.preStop(preStop);
            return this;
        }

        /**
         * Property readiness: The readiness check on the container.
         * <p>
         * @return {@code this}
         * @param readiness Property readiness: The readiness check on the container. This parameter is required.
         */
        public Builder readiness(final com.aliyun.ros.cdk.core.IResolvable readiness) {
            this.props.readiness(readiness);
            return this;
        }
        /**
         * Property readiness: The readiness check on the container.
         * <p>
         * @return {@code this}
         * @param readiness Property readiness: The readiness check on the container. This parameter is required.
         */
        public Builder readiness(final com.aliyun.ros.cdk.edas.RosK8sApplication.ReadinessProperty readiness) {
            this.props.readiness(readiness);
            return this;
        }

        /**
         * Property replicas: The number of instances for the application that you want to create.
         * <p>
         * Default: 1
         * <p>
         * @return {@code this}
         * @param replicas Property replicas: The number of instances for the application that you want to create. This parameter is required.
         */
        public Builder replicas(final java.lang.Number replicas) {
            this.props.replicas(replicas);
            return this;
        }
        /**
         * Property replicas: The number of instances for the application that you want to create.
         * <p>
         * Default: 1
         * <p>
         * @return {@code this}
         * @param replicas Property replicas: The number of instances for the application that you want to create. This parameter is required.
         */
        public Builder replicas(final com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.props.replicas(replicas);
            return this;
        }

        /**
         * Property repoId: The ID of the image repository.
         * <p>
         * @return {@code this}
         * @param repoId Property repoId: The ID of the image repository. This parameter is required.
         */
        public Builder repoId(final java.lang.String repoId) {
            this.props.repoId(repoId);
            return this;
        }
        /**
         * Property repoId: The ID of the image repository.
         * <p>
         * @return {@code this}
         * @param repoId Property repoId: The ID of the image repository. This parameter is required.
         */
        public Builder repoId(final com.aliyun.ros.cdk.core.IResolvable repoId) {
            this.props.repoId(repoId);
            return this;
        }

        /**
         * Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created.
         * <p>
         * Unit: cores. The value 0 indicates no limit.
         * <p>
         * @return {@code this}
         * @param requestsCpu Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. This parameter is required.
         */
        public Builder requestsCpu(final java.lang.Number requestsCpu) {
            this.props.requestsCpu(requestsCpu);
            return this;
        }
        /**
         * Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created.
         * <p>
         * Unit: cores. The value 0 indicates no limit.
         * <p>
         * @return {@code this}
         * @param requestsCpu Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. This parameter is required.
         */
        public Builder requestsCpu(final com.aliyun.ros.cdk.core.IResolvable requestsCpu) {
            this.props.requestsCpu(requestsCpu);
            return this;
        }

        /**
         * Property requestsMem: The maximum amount of memory allowed for each application instance when the application is created.
         * <p>
         * Unit: MB. The value 0 indicates no limit.
         * <p>
         * @return {@code this}
         * @param requestsMem Property requestsMem: The maximum amount of memory allowed for each application instance when the application is created. This parameter is required.
         */
        public Builder requestsMem(final java.lang.Number requestsMem) {
            this.props.requestsMem(requestsMem);
            return this;
        }
        /**
         * Property requestsMem: The maximum amount of memory allowed for each application instance when the application is created.
         * <p>
         * Unit: MB. The value 0 indicates no limit.
         * <p>
         * @return {@code this}
         * @param requestsMem Property requestsMem: The maximum amount of memory allowed for each application instance when the application is created. This parameter is required.
         */
        public Builder requestsMem(final com.aliyun.ros.cdk.core.IResolvable requestsMem) {
            this.props.requestsMem(requestsMem);
            return this;
        }

        /**
         * Property runtimeClassName: The type of the container runtime.
         * <p>
         * This parameter is applicable only to clusters that use sandboxed containers.
         * <p>
         * @return {@code this}
         * @param runtimeClassName Property runtimeClassName: The type of the container runtime. This parameter is required.
         */
        public Builder runtimeClassName(final java.lang.String runtimeClassName) {
            this.props.runtimeClassName(runtimeClassName);
            return this;
        }
        /**
         * Property runtimeClassName: The type of the container runtime.
         * <p>
         * This parameter is applicable only to clusters that use sandboxed containers.
         * <p>
         * @return {@code this}
         * @param runtimeClassName Property runtimeClassName: The type of the container runtime. This parameter is required.
         */
        public Builder runtimeClassName(final com.aliyun.ros.cdk.core.IResolvable runtimeClassName) {
            this.props.runtimeClassName(runtimeClassName);
            return this;
        }

        /**
         * Property slsConfigs: The Logstore configurations.
         * <p>
         * @return {@code this}
         * @param slsConfigs Property slsConfigs: The Logstore configurations. This parameter is required.
         */
        public Builder slsConfigs(final com.aliyun.ros.cdk.core.IResolvable slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }
        /**
         * Property slsConfigs: The Logstore configurations.
         * <p>
         * @return {@code this}
         * @param slsConfigs Property slsConfigs: The Logstore configurations. This parameter is required.
         */
        public Builder slsConfigs(final java.util.List<? extends java.lang.Object> slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }

        /**
         * Property storageType: Only SSD is supported.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: Only SSD is supported. This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * Property storageType: Only SSD is supported.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: Only SSD is supported. This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
            return this;
        }

        /**
         * Property timeout: The timeout interval of the change process.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout interval of the change process. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout interval of the change process.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout interval of the change process. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property uriEncoding: The uniform resource identifier (URI) encoding scheme.
         * <p>
         * Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
         * Note If this parameter is not specified in application configuration, the default URI encoding
         * scheme in the Tomcat container is applied.
         * <p>
         * @return {@code this}
         * @param uriEncoding Property uriEncoding: The uniform resource identifier (URI) encoding scheme. This parameter is required.
         */
        public Builder uriEncoding(final java.lang.String uriEncoding) {
            this.props.uriEncoding(uriEncoding);
            return this;
        }
        /**
         * Property uriEncoding: The uniform resource identifier (URI) encoding scheme.
         * <p>
         * Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
         * Note If this parameter is not specified in application configuration, the default URI encoding
         * scheme in the Tomcat container is applied.
         * <p>
         * @return {@code this}
         * @param uriEncoding Property uriEncoding: The uniform resource identifier (URI) encoding scheme. This parameter is required.
         */
        public Builder uriEncoding(final com.aliyun.ros.cdk.core.IResolvable uriEncoding) {
            this.props.uriEncoding(uriEncoding);
            return this;
        }

        /**
         * Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
         * <p>
         * Note If this parameter is not specified in application configuration, the default value
         * false is applied.
         * <p>
         * @return {@code this}
         * @param useBodyEncoding Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled. This parameter is required.
         */
        public Builder useBodyEncoding(final java.lang.Boolean useBodyEncoding) {
            this.props.useBodyEncoding(useBodyEncoding);
            return this;
        }
        /**
         * Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
         * <p>
         * Note If this parameter is not specified in application configuration, the default value
         * false is applied.
         * <p>
         * @return {@code this}
         * @param useBodyEncoding Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled. This parameter is required.
         */
        public Builder useBodyEncoding(final com.aliyun.ros.cdk.core.IResolvable useBodyEncoding) {
            this.props.useBodyEncoding(useBodyEncoding);
            return this;
        }

        /**
         * Property webContainer: The version of the Tomcat container on which the deployment package of the application depends.
         * <p>
         * This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
         * <p>
         * @return {@code this}
         * @param webContainer Property webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is required.
         */
        public Builder webContainer(final java.lang.String webContainer) {
            this.props.webContainer(webContainer);
            return this;
        }
        /**
         * Property webContainer: The version of the Tomcat container on which the deployment package of the application depends.
         * <p>
         * This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
         * <p>
         * @return {@code this}
         * @param webContainer Property webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is required.
         */
        public Builder webContainer(final com.aliyun.ros.cdk.core.IResolvable webContainer) {
            this.props.webContainer(webContainer);
            return this;
        }

        /**
         * Property webContainerConfig: The Tomcat container configuration.
         * <p>
         * @return {@code this}
         * @param webContainerConfig Property webContainerConfig: The Tomcat container configuration. This parameter is required.
         */
        public Builder webContainerConfig(final com.aliyun.ros.cdk.core.IResolvable webContainerConfig) {
            this.props.webContainerConfig(webContainerConfig);
            return this;
        }
        /**
         * Property webContainerConfig: The Tomcat container configuration.
         * <p>
         * @return {@code this}
         * @param webContainerConfig Property webContainerConfig: The Tomcat container configuration. This parameter is required.
         */
        public Builder webContainerConfig(final com.aliyun.ros.cdk.edas.RosK8sApplication.WebContainerConfigProperty webContainerConfig) {
            this.props.webContainerConfig(webContainerConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.edas.K8sApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.K8sApplication build() {
            return new com.aliyun.ros.cdk.edas.K8sApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
