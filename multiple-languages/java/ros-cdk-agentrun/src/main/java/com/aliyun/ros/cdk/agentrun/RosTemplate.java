package com.aliyun.ros.cdk.agentrun;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::AgentRun::Template</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:20:40.744Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate")
public class RosTemplate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.agentrun.RosTemplate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.agentrun.RosTemplateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateArn() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateName", java.util.Objects.requireNonNull(value, "templateName is required"));
    }

    /**
     */
    public void setTemplateName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateName", java.util.Objects.requireNonNull(value, "templateName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowAnonymousManage() {
        return software.amazon.jsii.Kernel.get(this, "allowAnonymousManage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowAnonymousManage(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allowAnonymousManage", value);
    }

    /**
     */
    public void setAllowAnonymousManage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowAnonymousManage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getArmsConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "armsConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArmsConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "armsConfiguration", value);
    }

    /**
     */
    public void setArmsConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.agentrun.RosTemplate.ArmsConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "armsConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContainerConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "containerConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainerConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "containerConfiguration", value);
    }

    /**
     */
    public void setContainerConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.agentrun.RosTemplate.ContainerConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "containerConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpu", value);
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCredentialConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "credentialConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCredentialConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "credentialConfiguration", value);
    }

    /**
     */
    public void setCredentialConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.agentrun.RosTemplate.CredentialConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "credentialConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "diskSize", value);
    }

    /**
     */
    public void setDiskSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAgent() {
        return software.amazon.jsii.Kernel.get(this, "enableAgent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAgent(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAgent", value);
    }

    /**
     */
    public void setEnableAgent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAgent", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVariables() {
        return software.amazon.jsii.Kernel.get(this, "environmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvironmentVariables(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "environmentVariables", value);
    }

    /**
     */
    public void setEnvironmentVariables(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "environmentVariables", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExecutionRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "executionRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExecutionRoleArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "executionRoleArn", value);
    }

    /**
     */
    public void setExecutionRoleArn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "executionRoleArn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "logConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logConfiguration", value);
    }

    /**
     */
    public void setLogConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.agentrun.RosTemplate.LogConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "logConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memory", value);
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNasConfig() {
        return software.amazon.jsii.Kernel.get(this, "nasConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNasConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nasConfig", value);
    }

    /**
     */
    public void setNasConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.agentrun.RosTemplate.NasConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "nasConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetworkConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "networkConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkConfiguration", value);
    }

    /**
     */
    public void setNetworkConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.agentrun.RosTemplate.NetworkConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "networkConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "ossConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossConfiguration", value);
    }

    /**
     */
    public void setOssConfiguration(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.agentrun.RosTemplate.OssConfigurationProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.agentrun.RosTemplate.OssConfigurationProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "ossConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSandboxIdleTimeoutInSeconds() {
        return software.amazon.jsii.Kernel.get(this, "sandboxIdleTimeoutInSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSandboxIdleTimeoutInSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "sandboxIdleTimeoutInSeconds", value);
    }

    /**
     */
    public void setSandboxIdleTimeoutInSeconds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sandboxIdleTimeoutInSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "templateConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateConfiguration", value);
    }

    /**
     */
    public void setTemplateConfiguration(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "templateConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateType() {
        return software.amazon.jsii.Kernel.get(this, "templateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateType", value);
    }

    /**
     */
    public void setTemplateType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", value);
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate.ArmsConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ArmsConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ArmsConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getArmsLicenseKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnableArms();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCmsWorkspace() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ArmsConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ArmsConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ArmsConfigurationProperty> {
            java.lang.Object armsLicenseKey;
            java.lang.Object enableArms;
            java.lang.Object cmsWorkspace;

            /**
             * Sets the value of {@link ArmsConfigurationProperty#getArmsLicenseKey}
             * @param armsLicenseKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder armsLicenseKey(java.lang.String armsLicenseKey) {
                this.armsLicenseKey = armsLicenseKey;
                return this;
            }

            /**
             * Sets the value of {@link ArmsConfigurationProperty#getArmsLicenseKey}
             * @param armsLicenseKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder armsLicenseKey(com.aliyun.ros.cdk.core.IResolvable armsLicenseKey) {
                this.armsLicenseKey = armsLicenseKey;
                return this;
            }

            /**
             * Sets the value of {@link ArmsConfigurationProperty#getEnableArms}
             * @param enableArms the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableArms(java.lang.Boolean enableArms) {
                this.enableArms = enableArms;
                return this;
            }

            /**
             * Sets the value of {@link ArmsConfigurationProperty#getEnableArms}
             * @param enableArms the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableArms(com.aliyun.ros.cdk.core.IResolvable enableArms) {
                this.enableArms = enableArms;
                return this;
            }

            /**
             * Sets the value of {@link ArmsConfigurationProperty#getCmsWorkspace}
             * @param cmsWorkspace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cmsWorkspace(java.lang.String cmsWorkspace) {
                this.cmsWorkspace = cmsWorkspace;
                return this;
            }

            /**
             * Sets the value of {@link ArmsConfigurationProperty#getCmsWorkspace}
             * @param cmsWorkspace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cmsWorkspace(com.aliyun.ros.cdk.core.IResolvable cmsWorkspace) {
                this.cmsWorkspace = cmsWorkspace;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ArmsConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ArmsConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ArmsConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ArmsConfigurationProperty {
            private final java.lang.Object armsLicenseKey;
            private final java.lang.Object enableArms;
            private final java.lang.Object cmsWorkspace;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.armsLicenseKey = software.amazon.jsii.Kernel.get(this, "armsLicenseKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableArms = software.amazon.jsii.Kernel.get(this, "enableArms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cmsWorkspace = software.amazon.jsii.Kernel.get(this, "cmsWorkspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.armsLicenseKey = java.util.Objects.requireNonNull(builder.armsLicenseKey, "armsLicenseKey is required");
                this.enableArms = java.util.Objects.requireNonNull(builder.enableArms, "enableArms is required");
                this.cmsWorkspace = builder.cmsWorkspace;
            }

            @Override
            public final java.lang.Object getArmsLicenseKey() {
                return this.armsLicenseKey;
            }

            @Override
            public final java.lang.Object getEnableArms() {
                return this.enableArms;
            }

            @Override
            public final java.lang.Object getCmsWorkspace() {
                return this.cmsWorkspace;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("armsLicenseKey", om.valueToTree(this.getArmsLicenseKey()));
                data.set("enableArms", om.valueToTree(this.getEnableArms()));
                if (this.getCmsWorkspace() != null) {
                    data.set("cmsWorkspace", om.valueToTree(this.getCmsWorkspace()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplate.ArmsConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ArmsConfigurationProperty.Jsii$Proxy that = (ArmsConfigurationProperty.Jsii$Proxy) o;

                if (!armsLicenseKey.equals(that.armsLicenseKey)) return false;
                if (!enableArms.equals(that.enableArms)) return false;
                return this.cmsWorkspace != null ? this.cmsWorkspace.equals(that.cmsWorkspace) : that.cmsWorkspace == null;
            }

            @Override
            public final int hashCode() {
                int result = this.armsLicenseKey.hashCode();
                result = 31 * result + (this.enableArms.hashCode());
                result = 31 * result + (this.cmsWorkspace != null ? this.cmsWorkspace.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate.ContainerConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ContainerConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ContainerConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getImageRegistryType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAcrInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ContainerConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ContainerConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ContainerConfigurationProperty> {
            java.lang.Object imageRegistryType;
            java.lang.Object acrInstanceId;
            java.lang.Object command;
            java.lang.Object image;
            java.lang.Object port;

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getImageRegistryType}
             * @param imageRegistryType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageRegistryType(java.lang.String imageRegistryType) {
                this.imageRegistryType = imageRegistryType;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getImageRegistryType}
             * @param imageRegistryType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageRegistryType(com.aliyun.ros.cdk.core.IResolvable imageRegistryType) {
                this.imageRegistryType = imageRegistryType;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getAcrInstanceId}
             * @param acrInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder acrInstanceId(java.lang.String acrInstanceId) {
                this.acrInstanceId = acrInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getAcrInstanceId}
             * @param acrInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder acrInstanceId(com.aliyun.ros.cdk.core.IResolvable acrInstanceId) {
                this.acrInstanceId = acrInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<? extends java.lang.Object> command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getImage}
             * @param image the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getImage}
             * @param image the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ContainerConfigurationProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ContainerConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ContainerConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ContainerConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ContainerConfigurationProperty {
            private final java.lang.Object imageRegistryType;
            private final java.lang.Object acrInstanceId;
            private final java.lang.Object command;
            private final java.lang.Object image;
            private final java.lang.Object port;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.imageRegistryType = software.amazon.jsii.Kernel.get(this, "imageRegistryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.acrInstanceId = software.amazon.jsii.Kernel.get(this, "acrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.imageRegistryType = java.util.Objects.requireNonNull(builder.imageRegistryType, "imageRegistryType is required");
                this.acrInstanceId = builder.acrInstanceId;
                this.command = builder.command;
                this.image = builder.image;
                this.port = builder.port;
            }

            @Override
            public final java.lang.Object getImageRegistryType() {
                return this.imageRegistryType;
            }

            @Override
            public final java.lang.Object getAcrInstanceId() {
                return this.acrInstanceId;
            }

            @Override
            public final java.lang.Object getCommand() {
                return this.command;
            }

            @Override
            public final java.lang.Object getImage() {
                return this.image;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("imageRegistryType", om.valueToTree(this.getImageRegistryType()));
                if (this.getAcrInstanceId() != null) {
                    data.set("acrInstanceId", om.valueToTree(this.getAcrInstanceId()));
                }
                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }
                if (this.getImage() != null) {
                    data.set("image", om.valueToTree(this.getImage()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplate.ContainerConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ContainerConfigurationProperty.Jsii$Proxy that = (ContainerConfigurationProperty.Jsii$Proxy) o;

                if (!imageRegistryType.equals(that.imageRegistryType)) return false;
                if (this.acrInstanceId != null ? !this.acrInstanceId.equals(that.acrInstanceId) : that.acrInstanceId != null) return false;
                if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
                if (this.image != null ? !this.image.equals(that.image) : that.image != null) return false;
                return this.port != null ? this.port.equals(that.port) : that.port == null;
            }

            @Override
            public final int hashCode() {
                int result = this.imageRegistryType.hashCode();
                result = 31 * result + (this.acrInstanceId != null ? this.acrInstanceId.hashCode() : 0);
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                result = 31 * result + (this.image != null ? this.image.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate.CredentialConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(CredentialConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CredentialConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCredentialName();

        /**
         * @return a {@link Builder} of {@link CredentialConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CredentialConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CredentialConfigurationProperty> {
            java.lang.Object credentialName;

            /**
             * Sets the value of {@link CredentialConfigurationProperty#getCredentialName}
             * @param credentialName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder credentialName(java.lang.String credentialName) {
                this.credentialName = credentialName;
                return this;
            }

            /**
             * Sets the value of {@link CredentialConfigurationProperty#getCredentialName}
             * @param credentialName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder credentialName(com.aliyun.ros.cdk.core.IResolvable credentialName) {
                this.credentialName = credentialName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CredentialConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CredentialConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CredentialConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CredentialConfigurationProperty {
            private final java.lang.Object credentialName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.credentialName = software.amazon.jsii.Kernel.get(this, "credentialName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.credentialName = java.util.Objects.requireNonNull(builder.credentialName, "credentialName is required");
            }

            @Override
            public final java.lang.Object getCredentialName() {
                return this.credentialName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("credentialName", om.valueToTree(this.getCredentialName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplate.CredentialConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CredentialConfigurationProperty.Jsii$Proxy that = (CredentialConfigurationProperty.Jsii$Proxy) o;

                return this.credentialName.equals(that.credentialName);
            }

            @Override
            public final int hashCode() {
                int result = this.credentialName.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate.LogConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(LogConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LogConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLogstore();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProject();

        /**
         * @return a {@link Builder} of {@link LogConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LogConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LogConfigurationProperty> {
            java.lang.Object logstore;
            java.lang.Object project;

            /**
             * Sets the value of {@link LogConfigurationProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(java.lang.String logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigurationProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigurationProperty#getProject}
             * @param project the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(java.lang.String project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigurationProperty#getProject}
             * @param project the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
                this.project = project;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LogConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LogConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LogConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogConfigurationProperty {
            private final java.lang.Object logstore;
            private final java.lang.Object project;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logstore = java.util.Objects.requireNonNull(builder.logstore, "logstore is required");
                this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
            }

            @Override
            public final java.lang.Object getLogstore() {
                return this.logstore;
            }

            @Override
            public final java.lang.Object getProject() {
                return this.project;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("logstore", om.valueToTree(this.getLogstore()));
                data.set("project", om.valueToTree(this.getProject()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplate.LogConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LogConfigurationProperty.Jsii$Proxy that = (LogConfigurationProperty.Jsii$Proxy) o;

                if (!logstore.equals(that.logstore)) return false;
                return this.project.equals(that.project);
            }

            @Override
            public final int hashCode() {
                int result = this.logstore.hashCode();
                result = 31 * result + (this.project.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate.MountPointsProperty")
    @software.amazon.jsii.Jsii.Proxy(MountPointsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MountPointsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableTls() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountDir() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerAddr() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MountPointsProperty> {
            java.lang.Object enableTls;
            java.lang.Object mountDir;
            java.lang.Object serverAddr;

            /**
             * Sets the value of {@link MountPointsProperty#getEnableTls}
             * @param enableTls the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableTls(java.lang.Boolean enableTls) {
                this.enableTls = enableTls;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getEnableTls}
             * @param enableTls the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableTls(com.aliyun.ros.cdk.core.IResolvable enableTls) {
                this.enableTls = enableTls;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(java.lang.String mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getMountDir}
             * @param mountDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(com.aliyun.ros.cdk.core.IResolvable mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getServerAddr}
             * @param serverAddr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverAddr(java.lang.String serverAddr) {
                this.serverAddr = serverAddr;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getServerAddr}
             * @param serverAddr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverAddr(com.aliyun.ros.cdk.core.IResolvable serverAddr) {
                this.serverAddr = serverAddr;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MountPointsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MountPointsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MountPointsProperty {
            private final java.lang.Object enableTls;
            private final java.lang.Object mountDir;
            private final java.lang.Object serverAddr;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableTls = software.amazon.jsii.Kernel.get(this, "enableTls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountDir = software.amazon.jsii.Kernel.get(this, "mountDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serverAddr = software.amazon.jsii.Kernel.get(this, "serverAddr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableTls = builder.enableTls;
                this.mountDir = builder.mountDir;
                this.serverAddr = builder.serverAddr;
            }

            @Override
            public final java.lang.Object getEnableTls() {
                return this.enableTls;
            }

            @Override
            public final java.lang.Object getMountDir() {
                return this.mountDir;
            }

            @Override
            public final java.lang.Object getServerAddr() {
                return this.serverAddr;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableTls() != null) {
                    data.set("enableTls", om.valueToTree(this.getEnableTls()));
                }
                if (this.getMountDir() != null) {
                    data.set("mountDir", om.valueToTree(this.getMountDir()));
                }
                if (this.getServerAddr() != null) {
                    data.set("serverAddr", om.valueToTree(this.getServerAddr()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplate.MountPointsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MountPointsProperty.Jsii$Proxy that = (MountPointsProperty.Jsii$Proxy) o;

                if (this.enableTls != null ? !this.enableTls.equals(that.enableTls) : that.enableTls != null) return false;
                if (this.mountDir != null ? !this.mountDir.equals(that.mountDir) : that.mountDir != null) return false;
                return this.serverAddr != null ? this.serverAddr.equals(that.serverAddr) : that.serverAddr == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableTls != null ? this.enableTls.hashCode() : 0;
                result = 31 * result + (this.mountDir != null ? this.mountDir.hashCode() : 0);
                result = 31 * result + (this.serverAddr != null ? this.serverAddr.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate.NasConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(NasConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NasConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPoints() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NasConfigProperty> {
            java.lang.Object groupId;
            java.lang.Object mountPoints;
            java.lang.Object userId;

            /**
             * Sets the value of {@link NasConfigProperty#getGroupId}
             * @param groupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(java.lang.Number groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getGroupId}
             * @param groupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getMountPoints}
             * @param mountPoints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoints(com.aliyun.ros.cdk.core.IResolvable mountPoints) {
                this.mountPoints = mountPoints;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getMountPoints}
             * @param mountPoints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoints(java.util.List<? extends java.lang.Object> mountPoints) {
                this.mountPoints = mountPoints;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getUserId}
             * @param userId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userId(java.lang.Number userId) {
                this.userId = userId;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getUserId}
             * @param userId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userId(com.aliyun.ros.cdk.core.IResolvable userId) {
                this.userId = userId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NasConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NasConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NasConfigProperty {
            private final java.lang.Object groupId;
            private final java.lang.Object mountPoints;
            private final java.lang.Object userId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountPoints = software.amazon.jsii.Kernel.get(this, "mountPoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userId = software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.groupId = builder.groupId;
                this.mountPoints = builder.mountPoints;
                this.userId = builder.userId;
            }

            @Override
            public final java.lang.Object getGroupId() {
                return this.groupId;
            }

            @Override
            public final java.lang.Object getMountPoints() {
                return this.mountPoints;
            }

            @Override
            public final java.lang.Object getUserId() {
                return this.userId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getGroupId() != null) {
                    data.set("groupId", om.valueToTree(this.getGroupId()));
                }
                if (this.getMountPoints() != null) {
                    data.set("mountPoints", om.valueToTree(this.getMountPoints()));
                }
                if (this.getUserId() != null) {
                    data.set("userId", om.valueToTree(this.getUserId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplate.NasConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NasConfigProperty.Jsii$Proxy that = (NasConfigProperty.Jsii$Proxy) o;

                if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
                if (this.mountPoints != null ? !this.mountPoints.equals(that.mountPoints) : that.mountPoints != null) return false;
                return this.userId != null ? this.userId.equals(that.userId) : that.userId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.groupId != null ? this.groupId.hashCode() : 0;
                result = 31 * result + (this.mountPoints != null ? this.mountPoints.hashCode() : 0);
                result = 31 * result + (this.userId != null ? this.userId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate.NetworkConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(NetworkConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NetworkConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNetworkMode();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NetworkConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NetworkConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NetworkConfigurationProperty> {
            java.lang.Object networkMode;
            java.lang.Object securityGroupId;
            java.lang.Object vpcId;
            java.lang.Object vSwitchIds;

            /**
             * Sets the value of {@link NetworkConfigurationProperty#getNetworkMode}
             * @param networkMode the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkMode(java.lang.String networkMode) {
                this.networkMode = networkMode;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigurationProperty#getNetworkMode}
             * @param networkMode the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkMode(com.aliyun.ros.cdk.core.IResolvable networkMode) {
                this.networkMode = networkMode;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigurationProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigurationProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigurationProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigurationProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigurationProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link NetworkConfigurationProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NetworkConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NetworkConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NetworkConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkConfigurationProperty {
            private final java.lang.Object networkMode;
            private final java.lang.Object securityGroupId;
            private final java.lang.Object vpcId;
            private final java.lang.Object vSwitchIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.networkMode = software.amazon.jsii.Kernel.get(this, "networkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.networkMode = java.util.Objects.requireNonNull(builder.networkMode, "networkMode is required");
                this.securityGroupId = builder.securityGroupId;
                this.vpcId = builder.vpcId;
                this.vSwitchIds = builder.vSwitchIds;
            }

            @Override
            public final java.lang.Object getNetworkMode() {
                return this.networkMode;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("networkMode", om.valueToTree(this.getNetworkMode()));
                if (this.getSecurityGroupId() != null) {
                    data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                }
                if (this.getVpcId() != null) {
                    data.set("vpcId", om.valueToTree(this.getVpcId()));
                }
                if (this.getVSwitchIds() != null) {
                    data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplate.NetworkConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NetworkConfigurationProperty.Jsii$Proxy that = (NetworkConfigurationProperty.Jsii$Proxy) o;

                if (!networkMode.equals(that.networkMode)) return false;
                if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
                if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
                return this.vSwitchIds != null ? this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.networkMode.hashCode();
                result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
                result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
                result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.RosTemplate.OssConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(OssConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OssConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getBucketName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMountPoint();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPermission();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPrefix();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRegion();

        /**
         * @return a {@link Builder} of {@link OssConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OssConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OssConfigurationProperty> {
            java.lang.Object bucketName;
            java.lang.Object mountPoint;
            java.lang.Object permission;
            java.lang.Object prefix;
            java.lang.Object region;

            /**
             * Sets the value of {@link OssConfigurationProperty#getBucketName}
             * @param bucketName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketName(java.lang.String bucketName) {
                this.bucketName = bucketName;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getBucketName}
             * @param bucketName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
                this.bucketName = bucketName;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getMountPoint}
             * @param mountPoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoint(java.lang.String mountPoint) {
                this.mountPoint = mountPoint;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getMountPoint}
             * @param mountPoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoint(com.aliyun.ros.cdk.core.IResolvable mountPoint) {
                this.mountPoint = mountPoint;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getPermission}
             * @param permission the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder permission(java.lang.String permission) {
                this.permission = permission;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getPermission}
             * @param permission the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder permission(com.aliyun.ros.cdk.core.IResolvable permission) {
                this.permission = permission;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getPrefix}
             * @param prefix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(java.lang.String prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getPrefix}
             * @param prefix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(com.aliyun.ros.cdk.core.IResolvable prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getRegion}
             * @param region the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link OssConfigurationProperty#getRegion}
             * @param region the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
                this.region = region;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OssConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OssConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OssConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OssConfigurationProperty {
            private final java.lang.Object bucketName;
            private final java.lang.Object mountPoint;
            private final java.lang.Object permission;
            private final java.lang.Object prefix;
            private final java.lang.Object region;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountPoint = software.amazon.jsii.Kernel.get(this, "mountPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.permission = software.amazon.jsii.Kernel.get(this, "permission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bucketName = java.util.Objects.requireNonNull(builder.bucketName, "bucketName is required");
                this.mountPoint = java.util.Objects.requireNonNull(builder.mountPoint, "mountPoint is required");
                this.permission = java.util.Objects.requireNonNull(builder.permission, "permission is required");
                this.prefix = java.util.Objects.requireNonNull(builder.prefix, "prefix is required");
                this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
            }

            @Override
            public final java.lang.Object getBucketName() {
                return this.bucketName;
            }

            @Override
            public final java.lang.Object getMountPoint() {
                return this.mountPoint;
            }

            @Override
            public final java.lang.Object getPermission() {
                return this.permission;
            }

            @Override
            public final java.lang.Object getPrefix() {
                return this.prefix;
            }

            @Override
            public final java.lang.Object getRegion() {
                return this.region;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("bucketName", om.valueToTree(this.getBucketName()));
                data.set("mountPoint", om.valueToTree(this.getMountPoint()));
                data.set("permission", om.valueToTree(this.getPermission()));
                data.set("prefix", om.valueToTree(this.getPrefix()));
                data.set("region", om.valueToTree(this.getRegion()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-agentrun.RosTemplate.OssConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OssConfigurationProperty.Jsii$Proxy that = (OssConfigurationProperty.Jsii$Proxy) o;

                if (!bucketName.equals(that.bucketName)) return false;
                if (!mountPoint.equals(that.mountPoint)) return false;
                if (!permission.equals(that.permission)) return false;
                if (!prefix.equals(that.prefix)) return false;
                return this.region.equals(that.region);
            }

            @Override
            public final int hashCode() {
                int result = this.bucketName.hashCode();
                result = 31 * result + (this.mountPoint.hashCode());
                result = 31 * result + (this.permission.hashCode());
                result = 31 * result + (this.prefix.hashCode());
                result = 31 * result + (this.region.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.agentrun.RosTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.agentrun.RosTemplate> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.agentrun.RosTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.agentrun.RosTemplateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param templateName This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props.templateName(templateName);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateName This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props.templateName(templateName);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowAnonymousManage This parameter is required.
         */
        public Builder allowAnonymousManage(final java.lang.Boolean allowAnonymousManage) {
            this.props.allowAnonymousManage(allowAnonymousManage);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowAnonymousManage This parameter is required.
         */
        public Builder allowAnonymousManage(final com.aliyun.ros.cdk.core.IResolvable allowAnonymousManage) {
            this.props.allowAnonymousManage(allowAnonymousManage);
            return this;
        }

        /**
         * @return {@code this}
         * @param armsConfiguration This parameter is required.
         */
        public Builder armsConfiguration(final com.aliyun.ros.cdk.core.IResolvable armsConfiguration) {
            this.props.armsConfiguration(armsConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param armsConfiguration This parameter is required.
         */
        public Builder armsConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.ArmsConfigurationProperty armsConfiguration) {
            this.props.armsConfiguration(armsConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param containerConfiguration This parameter is required.
         */
        public Builder containerConfiguration(final com.aliyun.ros.cdk.core.IResolvable containerConfiguration) {
            this.props.containerConfiguration(containerConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param containerConfiguration This parameter is required.
         */
        public Builder containerConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.ContainerConfigurationProperty containerConfiguration) {
            this.props.containerConfiguration(containerConfiguration);
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
         * @param cpu This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param credentialConfiguration This parameter is required.
         */
        public Builder credentialConfiguration(final com.aliyun.ros.cdk.core.IResolvable credentialConfiguration) {
            this.props.credentialConfiguration(credentialConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param credentialConfiguration This parameter is required.
         */
        public Builder credentialConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.CredentialConfigurationProperty credentialConfiguration) {
            this.props.credentialConfiguration(credentialConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskSize This parameter is required.
         */
        public Builder diskSize(final java.lang.Number diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskSize This parameter is required.
         */
        public Builder diskSize(final com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.props.diskSize(diskSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAgent This parameter is required.
         */
        public Builder enableAgent(final java.lang.Boolean enableAgent) {
            this.props.enableAgent(enableAgent);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAgent This parameter is required.
         */
        public Builder enableAgent(final com.aliyun.ros.cdk.core.IResolvable enableAgent) {
            this.props.enableAgent(enableAgent);
            return this;
        }

        /**
         * @return {@code this}
         * @param environmentVariables This parameter is required.
         */
        public Builder environmentVariables(final com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }
        /**
         * @return {@code this}
         * @param environmentVariables This parameter is required.
         */
        public Builder environmentVariables(final java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }

        /**
         * @return {@code this}
         * @param executionRoleArn This parameter is required.
         */
        public Builder executionRoleArn(final java.lang.String executionRoleArn) {
            this.props.executionRoleArn(executionRoleArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param executionRoleArn This parameter is required.
         */
        public Builder executionRoleArn(final com.aliyun.ros.cdk.core.IResolvable executionRoleArn) {
            this.props.executionRoleArn(executionRoleArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param logConfiguration This parameter is required.
         */
        public Builder logConfiguration(final com.aliyun.ros.cdk.core.IResolvable logConfiguration) {
            this.props.logConfiguration(logConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param logConfiguration This parameter is required.
         */
        public Builder logConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.LogConfigurationProperty logConfiguration) {
            this.props.logConfiguration(logConfiguration);
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
         * @param memory This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * @return {@code this}
         * @param nasConfig This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param nasConfig This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.agentrun.RosTemplate.NasConfigProperty nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkConfiguration This parameter is required.
         */
        public Builder networkConfiguration(final com.aliyun.ros.cdk.core.IResolvable networkConfiguration) {
            this.props.networkConfiguration(networkConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkConfiguration This parameter is required.
         */
        public Builder networkConfiguration(final com.aliyun.ros.cdk.agentrun.RosTemplate.NetworkConfigurationProperty networkConfiguration) {
            this.props.networkConfiguration(networkConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossConfiguration This parameter is required.
         */
        public Builder ossConfiguration(final com.aliyun.ros.cdk.core.IResolvable ossConfiguration) {
            this.props.ossConfiguration(ossConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossConfiguration This parameter is required.
         */
        public Builder ossConfiguration(final java.util.List<? extends java.lang.Object> ossConfiguration) {
            this.props.ossConfiguration(ossConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param sandboxIdleTimeoutInSeconds This parameter is required.
         */
        public Builder sandboxIdleTimeoutInSeconds(final java.lang.Number sandboxIdleTimeoutInSeconds) {
            this.props.sandboxIdleTimeoutInSeconds(sandboxIdleTimeoutInSeconds);
            return this;
        }
        /**
         * @return {@code this}
         * @param sandboxIdleTimeoutInSeconds This parameter is required.
         */
        public Builder sandboxIdleTimeoutInSeconds(final com.aliyun.ros.cdk.core.IResolvable sandboxIdleTimeoutInSeconds) {
            this.props.sandboxIdleTimeoutInSeconds(sandboxIdleTimeoutInSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateConfiguration This parameter is required.
         */
        public Builder templateConfiguration(final com.aliyun.ros.cdk.core.IResolvable templateConfiguration) {
            this.props.templateConfiguration(templateConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateConfiguration This parameter is required.
         */
        public Builder templateConfiguration(final java.util.Map<java.lang.String, ? extends java.lang.Object> templateConfiguration) {
            this.props.templateConfiguration(templateConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateType This parameter is required.
         */
        public Builder templateType(final java.lang.String templateType) {
            this.props.templateType(templateType);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateType This parameter is required.
         */
        public Builder templateType(final com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.props.templateType(templateType);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.agentrun.RosTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.agentrun.RosTemplate build() {
            return new com.aliyun.ros.cdk.agentrun.RosTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
