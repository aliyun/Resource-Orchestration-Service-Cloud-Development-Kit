package com.aliyun.ros.cdk.agentrun;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AgentRun::Template</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:20:40.761Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.Template")
public class Template extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.agentrun.ITemplate {

    protected Template(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Template(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Template(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.agentrun.TemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Template(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.agentrun.TemplateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TemplateArn: The ARN of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateArn() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TemplateId: The ID of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TemplateName: The name of the template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.agentrun.TemplateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.agentrun.TemplateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.agentrun.Template}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.agentrun.Template> {
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
        private final com.aliyun.ros.cdk.agentrun.TemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.agentrun.TemplateProps.Builder();
        }

        /**
         * Property templateName: The name of the template.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props.templateName(templateName);
            return this;
        }
        /**
         * Property templateName: The name of the template.
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props.templateName(templateName);
            return this;
        }

        /**
         * Property allowAnonymousManage: Whether to allow anonymous management.
         * <p>
         * @return {@code this}
         * @param allowAnonymousManage Property allowAnonymousManage: Whether to allow anonymous management. This parameter is required.
         */
        public Builder allowAnonymousManage(final java.lang.Boolean allowAnonymousManage) {
            this.props.allowAnonymousManage(allowAnonymousManage);
            return this;
        }
        /**
         * Property allowAnonymousManage: Whether to allow anonymous management.
         * <p>
         * @return {@code this}
         * @param allowAnonymousManage Property allowAnonymousManage: Whether to allow anonymous management. This parameter is required.
         */
        public Builder allowAnonymousManage(final com.aliyun.ros.cdk.core.IResolvable allowAnonymousManage) {
            this.props.allowAnonymousManage(allowAnonymousManage);
            return this;
        }

        /**
         * Property armsConfiguration: The ARMS configuration.
         * <p>
         * @return {@code this}
         * @param armsConfiguration Property armsConfiguration: The ARMS configuration. This parameter is required.
         */
        public Builder armsConfiguration(final com.aliyun.ros.cdk.core.IResolvable armsConfiguration) {
            this.props.armsConfiguration(armsConfiguration);
            return this;
        }
        /**
         * Property armsConfiguration: The ARMS configuration.
         * <p>
         * @return {@code this}
         * @param armsConfiguration Property armsConfiguration: The ARMS configuration. This parameter is required.
         */
        public Builder armsConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.ArmsConfigurationProperty armsConfiguration) {
            this.props.armsConfiguration(armsConfiguration);
            return this;
        }

        /**
         * Property containerConfiguration: The container configuration.
         * <p>
         * Only images based on Browser/Code Interpreter base images are allowed.
         * <p>
         * @return {@code this}
         * @param containerConfiguration Property containerConfiguration: The container configuration. This parameter is required.
         */
        public Builder containerConfiguration(final com.aliyun.ros.cdk.core.IResolvable containerConfiguration) {
            this.props.containerConfiguration(containerConfiguration);
            return this;
        }
        /**
         * Property containerConfiguration: The container configuration.
         * <p>
         * Only images based on Browser/Code Interpreter base images are allowed.
         * <p>
         * @return {@code this}
         * @param containerConfiguration Property containerConfiguration: The container configuration. This parameter is required.
         */
        public Builder containerConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.ContainerConfigurationProperty containerConfiguration) {
            this.props.containerConfiguration(containerConfiguration);
            return this;
        }

        /**
         * Property cpu: The CPU resource configuration (unit: cores).
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The CPU resource configuration (unit: cores). This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: The CPU resource configuration (unit: cores).
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The CPU resource configuration (unit: cores). This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * Property credentialConfiguration: The credential configuration.
         * <p>
         * @return {@code this}
         * @param credentialConfiguration Property credentialConfiguration: The credential configuration. This parameter is required.
         */
        public Builder credentialConfiguration(final com.aliyun.ros.cdk.core.IResolvable credentialConfiguration) {
            this.props.credentialConfiguration(credentialConfiguration);
            return this;
        }
        /**
         * Property credentialConfiguration: The credential configuration.
         * <p>
         * @return {@code this}
         * @param credentialConfiguration Property credentialConfiguration: The credential configuration. This parameter is required.
         */
        public Builder credentialConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.CredentialConfigurationProperty credentialConfiguration) {
            this.props.credentialConfiguration(credentialConfiguration);
            return this;
        }

        /**
         * Property description: The description of the template.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the template. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the template.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the template. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property diskSize: The disk size (unit: MB).
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The disk size (unit: MB). This parameter is required.
         */
        public Builder diskSize(final java.lang.Number diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }
        /**
         * Property diskSize: The disk size (unit: MB).
         * <p>
         * @return {@code this}
         * @param diskSize Property diskSize: The disk size (unit: MB). This parameter is required.
         */
        public Builder diskSize(final com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }

        /**
         * Property enableAgent: Whether to enable the sandbox agent.
         * <p>
         * @return {@code this}
         * @param enableAgent Property enableAgent: Whether to enable the sandbox agent. This parameter is required.
         */
        public Builder enableAgent(final java.lang.Boolean enableAgent) {
            this.props.enableAgent(enableAgent);
            return this;
        }
        /**
         * Property enableAgent: Whether to enable the sandbox agent.
         * <p>
         * @return {@code this}
         * @param enableAgent Property enableAgent: Whether to enable the sandbox agent. This parameter is required.
         */
        public Builder enableAgent(final com.aliyun.ros.cdk.core.IResolvable enableAgent) {
            this.props.enableAgent(enableAgent);
            return this;
        }

        /**
         * Property environmentVariables: The environment variables.
         * <p>
         * @return {@code this}
         * @param environmentVariables Property environmentVariables: The environment variables. This parameter is required.
         */
        public Builder environmentVariables(final com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }
        /**
         * Property environmentVariables: The environment variables.
         * <p>
         * @return {@code this}
         * @param environmentVariables Property environmentVariables: The environment variables. This parameter is required.
         */
        public Builder environmentVariables(final java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }

        /**
         * Property executionRoleArn: The execution role ARN.
         * <p>
         * @return {@code this}
         * @param executionRoleArn Property executionRoleArn: The execution role ARN. This parameter is required.
         */
        public Builder executionRoleArn(final java.lang.String executionRoleArn) {
            this.props.executionRoleArn(executionRoleArn);
            return this;
        }
        /**
         * Property executionRoleArn: The execution role ARN.
         * <p>
         * @return {@code this}
         * @param executionRoleArn Property executionRoleArn: The execution role ARN. This parameter is required.
         */
        public Builder executionRoleArn(final com.aliyun.ros.cdk.core.IResolvable executionRoleArn) {
            this.props.executionRoleArn(executionRoleArn);
            return this;
        }

        /**
         * Property logConfiguration: The log configuration.
         * <p>
         * @return {@code this}
         * @param logConfiguration Property logConfiguration: The log configuration. This parameter is required.
         */
        public Builder logConfiguration(final com.aliyun.ros.cdk.core.IResolvable logConfiguration) {
            this.props.logConfiguration(logConfiguration);
            return this;
        }
        /**
         * Property logConfiguration: The log configuration.
         * <p>
         * @return {@code this}
         * @param logConfiguration Property logConfiguration: The log configuration. This parameter is required.
         */
        public Builder logConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.LogConfigurationProperty logConfiguration) {
            this.props.logConfiguration(logConfiguration);
            return this;
        }

        /**
         * Property memory: The memory resource configuration (unit: MB).
         * <p>
         * @return {@code this}
         * @param memory Property memory: The memory resource configuration (unit: MB). This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * Property memory: The memory resource configuration (unit: MB).
         * <p>
         * @return {@code this}
         * @param memory Property memory: The memory resource configuration (unit: MB). This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * Property nasConfig: The NAS configuration.
         * <p>
         * @return {@code this}
         * @param nasConfig Property nasConfig: The NAS configuration. This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }
        /**
         * Property nasConfig: The NAS configuration.
         * <p>
         * @return {@code this}
         * @param nasConfig Property nasConfig: The NAS configuration. This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.agentrun.RosTemplate.NasConfigProperty nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }

        /**
         * Property networkConfiguration: The network configuration.
         * <p>
         * @return {@code this}
         * @param networkConfiguration Property networkConfiguration: The network configuration. This parameter is required.
         */
        public Builder networkConfiguration(final com.aliyun.ros.cdk.core.IResolvable networkConfiguration) {
            this.props.networkConfiguration(networkConfiguration);
            return this;
        }
        /**
         * Property networkConfiguration: The network configuration.
         * <p>
         * @return {@code this}
         * @param networkConfiguration Property networkConfiguration: The network configuration. This parameter is required.
         */
        public Builder networkConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.NetworkConfigurationProperty networkConfiguration) {
            this.props.networkConfiguration(networkConfiguration);
            return this;
        }

        /**
         * Property ossConfiguration: The OSS configuration.
         * <p>
         * @return {@code this}
         * @param ossConfiguration Property ossConfiguration: The OSS configuration. This parameter is required.
         */
        public Builder ossConfiguration(final com.aliyun.ros.cdk.core.IResolvable ossConfiguration) {
            this.props.ossConfiguration(ossConfiguration);
            return this;
        }
        /**
         * Property ossConfiguration: The OSS configuration.
         * <p>
         * @return {@code this}
         * @param ossConfiguration Property ossConfiguration: The OSS configuration. This parameter is required.
         */
        public Builder ossConfiguration(final java.util.List<? extends java.lang.Object> ossConfiguration) {
            this.props.ossConfiguration(ossConfiguration);
            return this;
        }

        /**
         * Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
         * <p>
         * @return {@code this}
         * @param sandboxIdleTimeoutInSeconds Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds. This parameter is required.
         */
        public Builder sandboxIdleTimeoutInSeconds(final java.lang.Number sandboxIdleTimeoutInSeconds) {
            this.props.sandboxIdleTimeoutInSeconds(sandboxIdleTimeoutInSeconds);
            return this;
        }
        /**
         * Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
         * <p>
         * @return {@code this}
         * @param sandboxIdleTimeoutInSeconds Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds. This parameter is required.
         */
        public Builder sandboxIdleTimeoutInSeconds(final com.aliyun.ros.cdk.core.IResolvable sandboxIdleTimeoutInSeconds) {
            this.props.sandboxIdleTimeoutInSeconds(sandboxIdleTimeoutInSeconds);
            return this;
        }

        /**
         * Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).
         * <p>
         * @return {@code this}
         * @param templateConfiguration Property templateConfiguration: The template configuration (flexible object structure, varies by templateType). This parameter is required.
         */
        public Builder templateConfiguration(final com.aliyun.ros.cdk.core.IResolvable templateConfiguration) {
            this.props.templateConfiguration(templateConfiguration);
            return this;
        }
        /**
         * Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).
         * <p>
         * @return {@code this}
         * @param templateConfiguration Property templateConfiguration: The template configuration (flexible object structure, varies by templateType). This parameter is required.
         */
        public Builder templateConfiguration(final java.util.Map<java.lang.String, ? extends java.lang.Object> templateConfiguration) {
            this.props.templateConfiguration(templateConfiguration);
            return this;
        }

        /**
         * Property templateType: The type of the template.
         * <p>
         * @return {@code this}
         * @param templateType Property templateType: The type of the template. This parameter is required.
         */
        public Builder templateType(final java.lang.String templateType) {
            this.props.templateType(templateType);
            return this;
        }
        /**
         * Property templateType: The type of the template.
         * <p>
         * @return {@code this}
         * @param templateType Property templateType: The type of the template. This parameter is required.
         */
        public Builder templateType(final com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.props.templateType(templateType);
            return this;
        }

        /**
         * Property workspaceId: The workspace ID.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The workspace ID. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: The workspace ID.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The workspace ID. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.agentrun.Template}.
         */
        @Override
        public com.aliyun.ros.cdk.agentrun.Template build() {
            return new com.aliyun.ros.cdk.agentrun.Template(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
