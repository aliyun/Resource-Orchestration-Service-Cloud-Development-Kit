package com.aliyun.ros.cdk.agentrun;

/**
 * Properties for defining a <code>RosTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.041Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplateProps")
@software.amazon.jsii.Jsii.Proxy(RosTemplateProps.Jsii$Proxy.class)
public interface RosTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowAnonymousManage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArmsConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCredentialConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAgent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVariables() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExecutionRoleArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNasConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSandboxIdleTimeoutInSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspaceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTemplateProps> {
        java.lang.Object templateName;
        java.lang.Object allowAnonymousManage;
        java.lang.Object armsConfiguration;
        java.lang.Object containerConfiguration;
        java.lang.Object cpu;
        java.lang.Object credentialConfiguration;
        java.lang.Object description;
        java.lang.Object diskSize;
        java.lang.Object enableAgent;
        java.lang.Object environmentVariables;
        java.lang.Object executionRoleArn;
        java.lang.Object logConfiguration;
        java.lang.Object memory;
        java.lang.Object nasConfig;
        java.lang.Object networkConfiguration;
        java.lang.Object ossConfiguration;
        java.lang.Object sandboxIdleTimeoutInSeconds;
        java.lang.Object templateConfiguration;
        java.lang.Object templateType;
        java.lang.Object workspaceId;

        /**
         * Sets the value of {@link RosTemplateProps#getTemplateName}
         * @param templateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getTemplateName}
         * @param templateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getAllowAnonymousManage}
         * @param allowAnonymousManage the value to be set.
         * @return {@code this}
         */
        public Builder allowAnonymousManage(java.lang.Boolean allowAnonymousManage) {
            this.allowAnonymousManage = allowAnonymousManage;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getAllowAnonymousManage}
         * @param allowAnonymousManage the value to be set.
         * @return {@code this}
         */
        public Builder allowAnonymousManage(com.aliyun.ros.cdk.core.IResolvable allowAnonymousManage) {
            this.allowAnonymousManage = allowAnonymousManage;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getArmsConfiguration}
         * @param armsConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder armsConfiguration(com.aliyun.ros.cdk.core.IResolvable armsConfiguration) {
            this.armsConfiguration = armsConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getArmsConfiguration}
         * @param armsConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder armsConfiguration(com.aliyun.ros.cdk.agentrun.RosTemplate.ArmsConfigurationProperty armsConfiguration) {
            this.armsConfiguration = armsConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getContainerConfiguration}
         * @param containerConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder containerConfiguration(com.aliyun.ros.cdk.core.IResolvable containerConfiguration) {
            this.containerConfiguration = containerConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getContainerConfiguration}
         * @param containerConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder containerConfiguration(com.aliyun.ros.cdk.agentrun.RosTemplate.ContainerConfigurationProperty containerConfiguration) {
            this.containerConfiguration = containerConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getCredentialConfiguration}
         * @param credentialConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder credentialConfiguration(com.aliyun.ros.cdk.core.IResolvable credentialConfiguration) {
            this.credentialConfiguration = credentialConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getCredentialConfiguration}
         * @param credentialConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder credentialConfiguration(com.aliyun.ros.cdk.agentrun.RosTemplate.CredentialConfigurationProperty credentialConfiguration) {
            this.credentialConfiguration = credentialConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getDiskSize}
         * @param diskSize the value to be set.
         * @return {@code this}
         */
        public Builder diskSize(java.lang.Number diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getDiskSize}
         * @param diskSize the value to be set.
         * @return {@code this}
         */
        public Builder diskSize(com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getEnableAgent}
         * @param enableAgent the value to be set.
         * @return {@code this}
         */
        public Builder enableAgent(java.lang.Boolean enableAgent) {
            this.enableAgent = enableAgent;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getEnableAgent}
         * @param enableAgent the value to be set.
         * @return {@code this}
         */
        public Builder enableAgent(com.aliyun.ros.cdk.core.IResolvable enableAgent) {
            this.enableAgent = enableAgent;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getEnvironmentVariables}
         * @param environmentVariables the value to be set.
         * @return {@code this}
         */
        public Builder environmentVariables(com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.environmentVariables = environmentVariables;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getEnvironmentVariables}
         * @param environmentVariables the value to be set.
         * @return {@code this}
         */
        public Builder environmentVariables(java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.environmentVariables = environmentVariables;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getExecutionRoleArn}
         * @param executionRoleArn the value to be set.
         * @return {@code this}
         */
        public Builder executionRoleArn(java.lang.String executionRoleArn) {
            this.executionRoleArn = executionRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getExecutionRoleArn}
         * @param executionRoleArn the value to be set.
         * @return {@code this}
         */
        public Builder executionRoleArn(com.aliyun.ros.cdk.core.IResolvable executionRoleArn) {
            this.executionRoleArn = executionRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getLogConfiguration}
         * @param logConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder logConfiguration(com.aliyun.ros.cdk.core.IResolvable logConfiguration) {
            this.logConfiguration = logConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getLogConfiguration}
         * @param logConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder logConfiguration(com.aliyun.ros.cdk.agentrun.RosTemplate.LogConfigurationProperty logConfiguration) {
            this.logConfiguration = logConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getNasConfig}
         * @param nasConfig the value to be set.
         * @return {@code this}
         */
        public Builder nasConfig(com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.nasConfig = nasConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getNasConfig}
         * @param nasConfig the value to be set.
         * @return {@code this}
         */
        public Builder nasConfig(com.aliyun.ros.cdk.agentrun.RosTemplate.NasConfigProperty nasConfig) {
            this.nasConfig = nasConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getNetworkConfiguration}
         * @param networkConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder networkConfiguration(com.aliyun.ros.cdk.core.IResolvable networkConfiguration) {
            this.networkConfiguration = networkConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getNetworkConfiguration}
         * @param networkConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder networkConfiguration(com.aliyun.ros.cdk.agentrun.RosTemplate.NetworkConfigurationProperty networkConfiguration) {
            this.networkConfiguration = networkConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getOssConfiguration}
         * @param ossConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder ossConfiguration(com.aliyun.ros.cdk.core.IResolvable ossConfiguration) {
            this.ossConfiguration = ossConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getOssConfiguration}
         * @param ossConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder ossConfiguration(java.util.List<? extends java.lang.Object> ossConfiguration) {
            this.ossConfiguration = ossConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getSandboxIdleTimeoutInSeconds}
         * @param sandboxIdleTimeoutInSeconds the value to be set.
         * @return {@code this}
         */
        public Builder sandboxIdleTimeoutInSeconds(java.lang.Number sandboxIdleTimeoutInSeconds) {
            this.sandboxIdleTimeoutInSeconds = sandboxIdleTimeoutInSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getSandboxIdleTimeoutInSeconds}
         * @param sandboxIdleTimeoutInSeconds the value to be set.
         * @return {@code this}
         */
        public Builder sandboxIdleTimeoutInSeconds(com.aliyun.ros.cdk.core.IResolvable sandboxIdleTimeoutInSeconds) {
            this.sandboxIdleTimeoutInSeconds = sandboxIdleTimeoutInSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getTemplateConfiguration}
         * @param templateConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder templateConfiguration(com.aliyun.ros.cdk.core.IResolvable templateConfiguration) {
            this.templateConfiguration = templateConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getTemplateConfiguration}
         * @param templateConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder templateConfiguration(java.util.Map<java.lang.String, ? extends java.lang.Object> templateConfiguration) {
            this.templateConfiguration = templateConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getTemplateType}
         * @param templateType the value to be set.
         * @return {@code this}
         */
        public Builder templateType(java.lang.String templateType) {
            this.templateType = templateType;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getTemplateType}
         * @param templateType the value to be set.
         * @return {@code this}
         */
        public Builder templateType(com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.templateType = templateType;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getWorkspaceId}
         * @param workspaceId the value to be set.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getWorkspaceId}
         * @param workspaceId the value to be set.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTemplateProps {
        private final java.lang.Object templateName;
        private final java.lang.Object allowAnonymousManage;
        private final java.lang.Object armsConfiguration;
        private final java.lang.Object containerConfiguration;
        private final java.lang.Object cpu;
        private final java.lang.Object credentialConfiguration;
        private final java.lang.Object description;
        private final java.lang.Object diskSize;
        private final java.lang.Object enableAgent;
        private final java.lang.Object environmentVariables;
        private final java.lang.Object executionRoleArn;
        private final java.lang.Object logConfiguration;
        private final java.lang.Object memory;
        private final java.lang.Object nasConfig;
        private final java.lang.Object networkConfiguration;
        private final java.lang.Object ossConfiguration;
        private final java.lang.Object sandboxIdleTimeoutInSeconds;
        private final java.lang.Object templateConfiguration;
        private final java.lang.Object templateType;
        private final java.lang.Object workspaceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowAnonymousManage = software.amazon.jsii.Kernel.get(this, "allowAnonymousManage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.armsConfiguration = software.amazon.jsii.Kernel.get(this, "armsConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerConfiguration = software.amazon.jsii.Kernel.get(this, "containerConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.credentialConfiguration = software.amazon.jsii.Kernel.get(this, "credentialConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAgent = software.amazon.jsii.Kernel.get(this, "enableAgent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentVariables = software.amazon.jsii.Kernel.get(this, "environmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.executionRoleArn = software.amazon.jsii.Kernel.get(this, "executionRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logConfiguration = software.amazon.jsii.Kernel.get(this, "logConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nasConfig = software.amazon.jsii.Kernel.get(this, "nasConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkConfiguration = software.amazon.jsii.Kernel.get(this, "networkConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossConfiguration = software.amazon.jsii.Kernel.get(this, "ossConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sandboxIdleTimeoutInSeconds = software.amazon.jsii.Kernel.get(this, "sandboxIdleTimeoutInSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateConfiguration = software.amazon.jsii.Kernel.get(this, "templateConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateType = software.amazon.jsii.Kernel.get(this, "templateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.templateName = java.util.Objects.requireNonNull(builder.templateName, "templateName is required");
            this.allowAnonymousManage = builder.allowAnonymousManage;
            this.armsConfiguration = builder.armsConfiguration;
            this.containerConfiguration = builder.containerConfiguration;
            this.cpu = builder.cpu;
            this.credentialConfiguration = builder.credentialConfiguration;
            this.description = builder.description;
            this.diskSize = builder.diskSize;
            this.enableAgent = builder.enableAgent;
            this.environmentVariables = builder.environmentVariables;
            this.executionRoleArn = builder.executionRoleArn;
            this.logConfiguration = builder.logConfiguration;
            this.memory = builder.memory;
            this.nasConfig = builder.nasConfig;
            this.networkConfiguration = builder.networkConfiguration;
            this.ossConfiguration = builder.ossConfiguration;
            this.sandboxIdleTimeoutInSeconds = builder.sandboxIdleTimeoutInSeconds;
            this.templateConfiguration = builder.templateConfiguration;
            this.templateType = builder.templateType;
            this.workspaceId = builder.workspaceId;
        }

        @Override
        public final java.lang.Object getTemplateName() {
            return this.templateName;
        }

        @Override
        public final java.lang.Object getAllowAnonymousManage() {
            return this.allowAnonymousManage;
        }

        @Override
        public final java.lang.Object getArmsConfiguration() {
            return this.armsConfiguration;
        }

        @Override
        public final java.lang.Object getContainerConfiguration() {
            return this.containerConfiguration;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getCredentialConfiguration() {
            return this.credentialConfiguration;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskSize() {
            return this.diskSize;
        }

        @Override
        public final java.lang.Object getEnableAgent() {
            return this.enableAgent;
        }

        @Override
        public final java.lang.Object getEnvironmentVariables() {
            return this.environmentVariables;
        }

        @Override
        public final java.lang.Object getExecutionRoleArn() {
            return this.executionRoleArn;
        }

        @Override
        public final java.lang.Object getLogConfiguration() {
            return this.logConfiguration;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getNasConfig() {
            return this.nasConfig;
        }

        @Override
        public final java.lang.Object getNetworkConfiguration() {
            return this.networkConfiguration;
        }

        @Override
        public final java.lang.Object getOssConfiguration() {
            return this.ossConfiguration;
        }

        @Override
        public final java.lang.Object getSandboxIdleTimeoutInSeconds() {
            return this.sandboxIdleTimeoutInSeconds;
        }

        @Override
        public final java.lang.Object getTemplateConfiguration() {
            return this.templateConfiguration;
        }

        @Override
        public final java.lang.Object getTemplateType() {
            return this.templateType;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("templateName", om.valueToTree(this.getTemplateName()));
            if (this.getAllowAnonymousManage() != null) {
                data.set("allowAnonymousManage", om.valueToTree(this.getAllowAnonymousManage()));
            }
            if (this.getArmsConfiguration() != null) {
                data.set("armsConfiguration", om.valueToTree(this.getArmsConfiguration()));
            }
            if (this.getContainerConfiguration() != null) {
                data.set("containerConfiguration", om.valueToTree(this.getContainerConfiguration()));
            }
            if (this.getCpu() != null) {
                data.set("cpu", om.valueToTree(this.getCpu()));
            }
            if (this.getCredentialConfiguration() != null) {
                data.set("credentialConfiguration", om.valueToTree(this.getCredentialConfiguration()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskSize() != null) {
                data.set("diskSize", om.valueToTree(this.getDiskSize()));
            }
            if (this.getEnableAgent() != null) {
                data.set("enableAgent", om.valueToTree(this.getEnableAgent()));
            }
            if (this.getEnvironmentVariables() != null) {
                data.set("environmentVariables", om.valueToTree(this.getEnvironmentVariables()));
            }
            if (this.getExecutionRoleArn() != null) {
                data.set("executionRoleArn", om.valueToTree(this.getExecutionRoleArn()));
            }
            if (this.getLogConfiguration() != null) {
                data.set("logConfiguration", om.valueToTree(this.getLogConfiguration()));
            }
            if (this.getMemory() != null) {
                data.set("memory", om.valueToTree(this.getMemory()));
            }
            if (this.getNasConfig() != null) {
                data.set("nasConfig", om.valueToTree(this.getNasConfig()));
            }
            if (this.getNetworkConfiguration() != null) {
                data.set("networkConfiguration", om.valueToTree(this.getNetworkConfiguration()));
            }
            if (this.getOssConfiguration() != null) {
                data.set("ossConfiguration", om.valueToTree(this.getOssConfiguration()));
            }
            if (this.getSandboxIdleTimeoutInSeconds() != null) {
                data.set("sandboxIdleTimeoutInSeconds", om.valueToTree(this.getSandboxIdleTimeoutInSeconds()));
            }
            if (this.getTemplateConfiguration() != null) {
                data.set("templateConfiguration", om.valueToTree(this.getTemplateConfiguration()));
            }
            if (this.getTemplateType() != null) {
                data.set("templateType", om.valueToTree(this.getTemplateType()));
            }
            if (this.getWorkspaceId() != null) {
                data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTemplateProps.Jsii$Proxy that = (RosTemplateProps.Jsii$Proxy) o;

            if (!templateName.equals(that.templateName)) return false;
            if (this.allowAnonymousManage != null ? !this.allowAnonymousManage.equals(that.allowAnonymousManage) : that.allowAnonymousManage != null) return false;
            if (this.armsConfiguration != null ? !this.armsConfiguration.equals(that.armsConfiguration) : that.armsConfiguration != null) return false;
            if (this.containerConfiguration != null ? !this.containerConfiguration.equals(that.containerConfiguration) : that.containerConfiguration != null) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.credentialConfiguration != null ? !this.credentialConfiguration.equals(that.credentialConfiguration) : that.credentialConfiguration != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskSize != null ? !this.diskSize.equals(that.diskSize) : that.diskSize != null) return false;
            if (this.enableAgent != null ? !this.enableAgent.equals(that.enableAgent) : that.enableAgent != null) return false;
            if (this.environmentVariables != null ? !this.environmentVariables.equals(that.environmentVariables) : that.environmentVariables != null) return false;
            if (this.executionRoleArn != null ? !this.executionRoleArn.equals(that.executionRoleArn) : that.executionRoleArn != null) return false;
            if (this.logConfiguration != null ? !this.logConfiguration.equals(that.logConfiguration) : that.logConfiguration != null) return false;
            if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
            if (this.nasConfig != null ? !this.nasConfig.equals(that.nasConfig) : that.nasConfig != null) return false;
            if (this.networkConfiguration != null ? !this.networkConfiguration.equals(that.networkConfiguration) : that.networkConfiguration != null) return false;
            if (this.ossConfiguration != null ? !this.ossConfiguration.equals(that.ossConfiguration) : that.ossConfiguration != null) return false;
            if (this.sandboxIdleTimeoutInSeconds != null ? !this.sandboxIdleTimeoutInSeconds.equals(that.sandboxIdleTimeoutInSeconds) : that.sandboxIdleTimeoutInSeconds != null) return false;
            if (this.templateConfiguration != null ? !this.templateConfiguration.equals(that.templateConfiguration) : that.templateConfiguration != null) return false;
            if (this.templateType != null ? !this.templateType.equals(that.templateType) : that.templateType != null) return false;
            return this.workspaceId != null ? this.workspaceId.equals(that.workspaceId) : that.workspaceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.templateName.hashCode();
            result = 31 * result + (this.allowAnonymousManage != null ? this.allowAnonymousManage.hashCode() : 0);
            result = 31 * result + (this.armsConfiguration != null ? this.armsConfiguration.hashCode() : 0);
            result = 31 * result + (this.containerConfiguration != null ? this.containerConfiguration.hashCode() : 0);
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.credentialConfiguration != null ? this.credentialConfiguration.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskSize != null ? this.diskSize.hashCode() : 0);
            result = 31 * result + (this.enableAgent != null ? this.enableAgent.hashCode() : 0);
            result = 31 * result + (this.environmentVariables != null ? this.environmentVariables.hashCode() : 0);
            result = 31 * result + (this.executionRoleArn != null ? this.executionRoleArn.hashCode() : 0);
            result = 31 * result + (this.logConfiguration != null ? this.logConfiguration.hashCode() : 0);
            result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
            result = 31 * result + (this.nasConfig != null ? this.nasConfig.hashCode() : 0);
            result = 31 * result + (this.networkConfiguration != null ? this.networkConfiguration.hashCode() : 0);
            result = 31 * result + (this.ossConfiguration != null ? this.ossConfiguration.hashCode() : 0);
            result = 31 * result + (this.sandboxIdleTimeoutInSeconds != null ? this.sandboxIdleTimeoutInSeconds.hashCode() : 0);
            result = 31 * result + (this.templateConfiguration != null ? this.templateConfiguration.hashCode() : 0);
            result = 31 * result + (this.templateType != null ? this.templateType.hashCode() : 0);
            result = 31 * result + (this.workspaceId != null ? this.workspaceId.hashCode() : 0);
            return result;
        }
    }
}
