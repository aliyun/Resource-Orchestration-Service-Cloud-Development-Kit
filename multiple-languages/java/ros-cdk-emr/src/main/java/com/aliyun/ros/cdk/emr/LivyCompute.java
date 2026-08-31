package com.aliyun.ros.cdk.emr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EMR::LivyCompute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:59:08.282Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.LivyCompute")
public class LivyCompute extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.emr.ILivyCompute {

    protected LivyCompute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LivyCompute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LivyCompute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.LivyComputeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LivyCompute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.LivyComputeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Endpoint: The public endpoint of the Livy Gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndpointInner: The internal endpoint of the Livy Gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointInner() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointInner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LivyComputeId: The ID of the Livy Gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLivyComputeId() {
        return software.amazon.jsii.Kernel.get(this, "attrLivyComputeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Status: The status of the Livy Gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.LivyComputeProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.LivyComputeProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.LivyCompute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.LivyCompute> {
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
        private final com.aliyun.ros.cdk.emr.LivyComputeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.LivyComputeProps.Builder();
        }

        /**
         * Property authType: The authentication method.
         * <p>
         * @return {@code this}
         * @param authType Property authType: The authentication method. This parameter is required.
         */
        public Builder authType(final java.lang.String authType) {
            this.props.authType(authType);
            return this;
        }
        /**
         * Property authType: The authentication method.
         * <p>
         * @return {@code this}
         * @param authType Property authType: The authentication method. This parameter is required.
         */
        public Builder authType(final com.aliyun.ros.cdk.core.IResolvable authType) {
            this.props.authType(authType);
            return this;
        }

        /**
         * Property cpuLimit: The number of CPU cores for the Livy server.
         * <p>
         * @return {@code this}
         * @param cpuLimit Property cpuLimit: The number of CPU cores for the Livy server. This parameter is required.
         */
        public Builder cpuLimit(final java.lang.String cpuLimit) {
            this.props.cpuLimit(cpuLimit);
            return this;
        }
        /**
         * Property cpuLimit: The number of CPU cores for the Livy server.
         * <p>
         * @return {@code this}
         * @param cpuLimit Property cpuLimit: The number of CPU cores for the Livy server. This parameter is required.
         */
        public Builder cpuLimit(final com.aliyun.ros.cdk.core.IResolvable cpuLimit) {
            this.props.cpuLimit(cpuLimit);
            return this;
        }

        /**
         * Property displayReleaseVersion: The version number of the Spark engine.
         * <p>
         * @return {@code this}
         * @param displayReleaseVersion Property displayReleaseVersion: The version number of the Spark engine. This parameter is required.
         */
        public Builder displayReleaseVersion(final java.lang.String displayReleaseVersion) {
            this.props.displayReleaseVersion(displayReleaseVersion);
            return this;
        }
        /**
         * Property displayReleaseVersion: The version number of the Spark engine.
         * <p>
         * @return {@code this}
         * @param displayReleaseVersion Property displayReleaseVersion: The version number of the Spark engine. This parameter is required.
         */
        public Builder displayReleaseVersion(final com.aliyun.ros.cdk.core.IResolvable displayReleaseVersion) {
            this.props.displayReleaseVersion(displayReleaseVersion);
            return this;
        }

        /**
         * Property livyVersion: The Livy version.
         * <p>
         * @return {@code this}
         * @param livyVersion Property livyVersion: The Livy version. This parameter is required.
         */
        public Builder livyVersion(final java.lang.String livyVersion) {
            this.props.livyVersion(livyVersion);
            return this;
        }
        /**
         * Property livyVersion: The Livy version.
         * <p>
         * @return {@code this}
         * @param livyVersion Property livyVersion: The Livy version. This parameter is required.
         */
        public Builder livyVersion(final com.aliyun.ros.cdk.core.IResolvable livyVersion) {
            this.props.livyVersion(livyVersion);
            return this;
        }

        /**
         * Property memoryLimit: The memory size of the Livy server.
         * <p>
         * @return {@code this}
         * @param memoryLimit Property memoryLimit: The memory size of the Livy server. This parameter is required.
         */
        public Builder memoryLimit(final java.lang.String memoryLimit) {
            this.props.memoryLimit(memoryLimit);
            return this;
        }
        /**
         * Property memoryLimit: The memory size of the Livy server.
         * <p>
         * @return {@code this}
         * @param memoryLimit Property memoryLimit: The memory size of the Livy server. This parameter is required.
         */
        public Builder memoryLimit(final com.aliyun.ros.cdk.core.IResolvable memoryLimit) {
            this.props.memoryLimit(memoryLimit);
            return this;
        }

        /**
         * Property name: The name of the Livy Gateway.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the Livy Gateway. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the Livy Gateway.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the Livy Gateway. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property queueName: The name of the submission queue.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: The name of the submission queue. This parameter is required.
         */
        public Builder queueName(final java.lang.String queueName) {
            this.props.queueName(queueName);
            return this;
        }
        /**
         * Property queueName: The name of the submission queue.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: The name of the submission queue. This parameter is required.
         */
        public Builder queueName(final com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.props.queueName(queueName);
            return this;
        }

        /**
         * Property workspaceBizId: The business ID of the workspace.
         * <p>
         * @return {@code this}
         * @param workspaceBizId Property workspaceBizId: The business ID of the workspace. This parameter is required.
         */
        public Builder workspaceBizId(final java.lang.String workspaceBizId) {
            this.props.workspaceBizId(workspaceBizId);
            return this;
        }
        /**
         * Property workspaceBizId: The business ID of the workspace.
         * <p>
         * @return {@code this}
         * @param workspaceBizId Property workspaceBizId: The business ID of the workspace. This parameter is required.
         */
        public Builder workspaceBizId(final com.aliyun.ros.cdk.core.IResolvable workspaceBizId) {
            this.props.workspaceBizId(workspaceBizId);
            return this;
        }

        /**
         * Property autoStartConfiguration: The automatic startup configuration.
         * <p>
         * @return {@code this}
         * @param autoStartConfiguration Property autoStartConfiguration: The automatic startup configuration. This parameter is required.
         */
        public Builder autoStartConfiguration(final com.aliyun.ros.cdk.core.IResolvable autoStartConfiguration) {
            this.props.autoStartConfiguration(autoStartConfiguration);
            return this;
        }
        /**
         * Property autoStartConfiguration: The automatic startup configuration.
         * <p>
         * @return {@code this}
         * @param autoStartConfiguration Property autoStartConfiguration: The automatic startup configuration. This parameter is required.
         */
        public Builder autoStartConfiguration(final com.aliyun.ros.cdk.emr.RosLivyCompute.AutoStartConfigurationProperty autoStartConfiguration) {
            this.props.autoStartConfiguration(autoStartConfiguration);
            return this;
        }

        /**
         * Property autoStopConfiguration: The automatic stop configuration.
         * <p>
         * @return {@code this}
         * @param autoStopConfiguration Property autoStopConfiguration: The automatic stop configuration. This parameter is required.
         */
        public Builder autoStopConfiguration(final com.aliyun.ros.cdk.core.IResolvable autoStopConfiguration) {
            this.props.autoStopConfiguration(autoStopConfiguration);
            return this;
        }
        /**
         * Property autoStopConfiguration: The automatic stop configuration.
         * <p>
         * @return {@code this}
         * @param autoStopConfiguration Property autoStopConfiguration: The automatic stop configuration. This parameter is required.
         */
        public Builder autoStopConfiguration(final com.aliyun.ros.cdk.emr.RosLivyCompute.AutoStopConfigurationProperty autoStopConfiguration) {
            this.props.autoStopConfiguration(autoStopConfiguration);
            return this;
        }

        /**
         * Property enablePublic: Whether to enable the public endpoint.
         * <p>
         * @return {@code this}
         * @param enablePublic Property enablePublic: Whether to enable the public endpoint. This parameter is required.
         */
        public Builder enablePublic(final java.lang.Boolean enablePublic) {
            this.props.enablePublic(enablePublic);
            return this;
        }
        /**
         * Property enablePublic: Whether to enable the public endpoint.
         * <p>
         * @return {@code this}
         * @param enablePublic Property enablePublic: Whether to enable the public endpoint. This parameter is required.
         */
        public Builder enablePublic(final com.aliyun.ros.cdk.core.IResolvable enablePublic) {
            this.props.enablePublic(enablePublic);
            return this;
        }

        /**
         * Property environmentId: The ID of the runtime environment.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The ID of the runtime environment. This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * Property environmentId: The ID of the runtime environment.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The ID of the runtime environment. This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }

        /**
         * Property fusion: Whether to enable acceleration with the Fusion engine.
         * <p>
         * @return {@code this}
         * @param fusion Property fusion: Whether to enable acceleration with the Fusion engine. This parameter is required.
         */
        public Builder fusion(final java.lang.Boolean fusion) {
            this.props.fusion(fusion);
            return this;
        }
        /**
         * Property fusion: Whether to enable acceleration with the Fusion engine.
         * <p>
         * @return {@code this}
         * @param fusion Property fusion: Whether to enable acceleration with the Fusion engine. This parameter is required.
         */
        public Builder fusion(final com.aliyun.ros.cdk.core.IResolvable fusion) {
            this.props.fusion(fusion);
            return this;
        }

        /**
         * Property livyServerConf: The Livy Gateway configuration.
         * <p>
         * The value must be a JSON-formatted string that supports sparkDefaultsConf, sparkBlackListConf, livyConf, and livyClientConf.
         * <p>
         * @return {@code this}
         * @param livyServerConf Property livyServerConf: The Livy Gateway configuration. This parameter is required.
         */
        public Builder livyServerConf(final java.lang.String livyServerConf) {
            this.props.livyServerConf(livyServerConf);
            return this;
        }
        /**
         * Property livyServerConf: The Livy Gateway configuration.
         * <p>
         * The value must be a JSON-formatted string that supports sparkDefaultsConf, sparkBlackListConf, livyConf, and livyClientConf.
         * <p>
         * @return {@code this}
         * @param livyServerConf Property livyServerConf: The Livy Gateway configuration. This parameter is required.
         */
        public Builder livyServerConf(final com.aliyun.ros.cdk.core.IResolvable livyServerConf) {
            this.props.livyServerConf(livyServerConf);
            return this;
        }

        /**
         * Property networkName: The name of the network connection.
         * <p>
         * @return {@code this}
         * @param networkName Property networkName: The name of the network connection. This parameter is required.
         */
        public Builder networkName(final java.lang.String networkName) {
            this.props.networkName(networkName);
            return this;
        }
        /**
         * Property networkName: The name of the network connection.
         * <p>
         * @return {@code this}
         * @param networkName Property networkName: The name of the network connection. This parameter is required.
         */
        public Builder networkName(final com.aliyun.ros.cdk.core.IResolvable networkName) {
            this.props.networkName(networkName);
            return this;
        }

        /**
         * Property releaseVersion: The deprecated Spark engine version.
         * <p>
         * Use DisplayReleaseVersion instead.
         * <p>
         * @return {@code this}
         * @param releaseVersion Property releaseVersion: The deprecated Spark engine version. This parameter is required.
         */
        public Builder releaseVersion(final java.lang.String releaseVersion) {
            this.props.releaseVersion(releaseVersion);
            return this;
        }
        /**
         * Property releaseVersion: The deprecated Spark engine version.
         * <p>
         * Use DisplayReleaseVersion instead.
         * <p>
         * @return {@code this}
         * @param releaseVersion Property releaseVersion: The deprecated Spark engine version. This parameter is required.
         */
        public Builder releaseVersion(final com.aliyun.ros.cdk.core.IResolvable releaseVersion) {
            this.props.releaseVersion(releaseVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.LivyCompute}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.LivyCompute build() {
            return new com.aliyun.ros.cdk.emr.LivyCompute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
