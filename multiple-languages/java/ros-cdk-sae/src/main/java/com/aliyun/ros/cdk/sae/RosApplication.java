package com.aliyun.ros.cdk.sae;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SAE::Application</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.116Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplication")
public class RosApplication extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sae.RosApplication.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.RosApplicationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppName() {
        return software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCpu() {
        return software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpu", java.util.Objects.requireNonNull(value, "cpu is required"));
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpu", java.util.Objects.requireNonNull(value, "cpu is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMemory() {
        return software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memory", java.util.Objects.requireNonNull(value, "memory is required"));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memory", java.util.Objects.requireNonNull(value, "memory is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId() {
        return software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespaceId", java.util.Objects.requireNonNull(value, "namespaceId is required"));
    }

    /**
     */
    public void setNamespaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespaceId", java.util.Objects.requireNonNull(value, "namespaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPackageType() {
        return software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageType", java.util.Objects.requireNonNull(value, "packageType is required"));
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "packageType", java.util.Objects.requireNonNull(value, "packageType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReplicas() {
        return software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicas(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "replicas", java.util.Objects.requireNonNull(value, "replicas is required"));
    }

    /**
     */
    public void setReplicas(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicas", java.util.Objects.requireNonNull(value, "replicas is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAcrAssumeRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "acrAssumeRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcrAssumeRoleArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acrAssumeRoleArn", value);
    }

    /**
     */
    public void setAcrAssumeRoleArn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acrAssumeRoleArn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAcrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "acrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcrInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acrInstanceId", value);
    }

    /**
     */
    public void setAcrInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acrInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppDescription() {
        return software.amazon.jsii.Kernel.get(this, "appDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appDescription", value);
    }

    /**
     */
    public void setAppDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppSource() {
        return software.amazon.jsii.Kernel.get(this, "appSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppSource(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appSource", value);
    }

    /**
     */
    public void setAppSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appSource", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAssociateEip() {
        return software.amazon.jsii.Kernel.get(this, "associateEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAssociateEip(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "associateEip", value);
    }

    /**
     */
    public void setAssociateEip(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "associateEip", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoConfig() {
        return software.amazon.jsii.Kernel.get(this, "autoConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoConfig(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoConfig", value);
    }

    /**
     */
    public void setAutoConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBaseAppId() {
        return software.amazon.jsii.Kernel.get(this, "baseAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBaseAppId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "baseAppId", value);
    }

    /**
     */
    public void setBaseAppId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "baseAppId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
        return software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCommand(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "command", value);
    }

    /**
     */
    public void setCommand(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "command", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCommandArgs() {
        return software.amazon.jsii.Kernel.get(this, "commandArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCommandArgs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "commandArgs", value);
    }

    /**
     */
    public void setCommandArgs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "commandArgs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfigMapMountDesc() {
        return software.amazon.jsii.Kernel.get(this, "configMapMountDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigMapMountDesc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "configMapMountDesc", value);
    }

    /**
     */
    public void setConfigMapMountDesc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configMapMountDesc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomHostAlias() {
        return software.amazon.jsii.Kernel.get(this, "customHostAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomHostAlias(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "customHostAlias", value);
    }

    /**
     */
    public void setCustomHostAlias(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customHostAlias", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeploy() {
        return software.amazon.jsii.Kernel.get(this, "deploy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeploy(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deploy", value);
    }

    /**
     */
    public void setDeploy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deploy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEdasContainerVersion() {
        return software.amazon.jsii.Kernel.get(this, "edasContainerVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEdasContainerVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "edasContainerVersion", value);
    }

    /**
     */
    public void setEdasContainerVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "edasContainerVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableEbpf() {
        return software.amazon.jsii.Kernel.get(this, "enableEbpf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableEbpf(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enableEbpf", value);
    }

    /**
     */
    public void setEnableEbpf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableEbpf", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableNewArms() {
        return software.amazon.jsii.Kernel.get(this, "enableNewArms", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableNewArms(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableNewArms", value);
    }

    /**
     */
    public void setEnableNewArms(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableNewArms", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableSidecarResourceIsolated() {
        return software.amazon.jsii.Kernel.get(this, "enableSidecarResourceIsolated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSidecarResourceIsolated(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableSidecarResourceIsolated", value);
    }

    /**
     */
    public void setEnableSidecarResourceIsolated(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSidecarResourceIsolated", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
        return software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "envs", value);
    }

    /**
     */
    public void setEnvs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "envs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImagePullSecrets() {
        return software.amazon.jsii.Kernel.get(this, "imagePullSecrets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImagePullSecrets(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imagePullSecrets", value);
    }

    /**
     */
    public void setImagePullSecrets(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imagePullSecrets", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageUrl() {
        return software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageUrl", value);
    }

    /**
     */
    public void setImageUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInitContainersConfig() {
        return software.amazon.jsii.Kernel.get(this, "initContainersConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInitContainersConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "initContainersConfig", value);
    }

    /**
     */
    public void setInitContainersConfig(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.sae.RosApplication.InitContainersConfigProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.sae.RosApplication.InitContainersConfigProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "initContainersConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJarStartArgs() {
        return software.amazon.jsii.Kernel.get(this, "jarStartArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJarStartArgs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jarStartArgs", value);
    }

    /**
     */
    public void setJarStartArgs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jarStartArgs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJarStartOptions() {
        return software.amazon.jsii.Kernel.get(this, "jarStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJarStartOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jarStartOptions", value);
    }

    /**
     */
    public void setJarStartOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jarStartOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJdk() {
        return software.amazon.jsii.Kernel.get(this, "jdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJdk(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jdk", value);
    }

    /**
     */
    public void setJdk(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jdk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKafkaConfigs() {
        return software.amazon.jsii.Kernel.get(this, "kafkaConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKafkaConfigs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "kafkaConfigs", value);
    }

    /**
     */
    public void setKafkaConfigs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kafkaConfigs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLiveness() {
        return software.amazon.jsii.Kernel.get(this, "liveness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLiveness(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "liveness", value);
    }

    /**
     */
    public void setLiveness(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "liveness", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMicroRegistration() {
        return software.amazon.jsii.Kernel.get(this, "microRegistration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMicroRegistration(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "microRegistration", value);
    }

    /**
     */
    public void setMicroRegistration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "microRegistration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMicroRegistrationConfig() {
        return software.amazon.jsii.Kernel.get(this, "microRegistrationConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMicroRegistrationConfig(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "microRegistrationConfig", value);
    }

    /**
     */
    public void setMicroRegistrationConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "microRegistrationConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMountDesc() {
        return software.amazon.jsii.Kernel.get(this, "mountDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMountDesc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mountDesc", value);
    }

    /**
     */
    public void setMountDesc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mountDesc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMountHost() {
        return software.amazon.jsii.Kernel.get(this, "mountHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMountHost(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mountHost", value);
    }

    /**
     */
    public void setMountHost(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mountHost", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNasConfigs() {
        return software.amazon.jsii.Kernel.get(this, "nasConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNasConfigs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nasConfigs", value);
    }

    /**
     */
    public void setNasConfigs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nasConfigs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNasId() {
        return software.amazon.jsii.Kernel.get(this, "nasId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNasId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nasId", value);
    }

    /**
     */
    public void setNasId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nasId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNewSaeVersion() {
        return software.amazon.jsii.Kernel.get(this, "newSaeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNewSaeVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "newSaeVersion", value);
    }

    /**
     */
    public void setNewSaeVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "newSaeVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssAkId() {
        return software.amazon.jsii.Kernel.get(this, "ossAkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssAkId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossAkId", value);
    }

    /**
     */
    public void setOssAkId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossAkId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssAkSecret() {
        return software.amazon.jsii.Kernel.get(this, "ossAkSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssAkSecret(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossAkSecret", value);
    }

    /**
     */
    public void setOssAkSecret(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossAkSecret", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssMountDescs() {
        return software.amazon.jsii.Kernel.get(this, "ossMountDescs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssMountDescs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "ossMountDescs", value);
    }

    /**
     */
    public void setOssMountDescs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossMountDescs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPackageUrl() {
        return software.amazon.jsii.Kernel.get(this, "packageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPackageUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageUrl", value);
    }

    /**
     */
    public void setPackageUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "packageUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPackageVersion() {
        return software.amazon.jsii.Kernel.get(this, "packageVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPackageVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageVersion", value);
    }

    /**
     */
    public void setPackageVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "packageVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPhp() {
        return software.amazon.jsii.Kernel.get(this, "php", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPhp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "php", value);
    }

    /**
     */
    public void setPhp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "php", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPhpArmsConfigLocation() {
        return software.amazon.jsii.Kernel.get(this, "phpArmsConfigLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPhpArmsConfigLocation(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "phpArmsConfigLocation", value);
    }

    /**
     */
    public void setPhpArmsConfigLocation(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "phpArmsConfigLocation", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPhpConfig() {
        return software.amazon.jsii.Kernel.get(this, "phpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPhpConfig(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "phpConfig", value);
    }

    /**
     */
    public void setPhpConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "phpConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPhpConfigLocation() {
        return software.amazon.jsii.Kernel.get(this, "phpConfigLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPhpConfigLocation(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "phpConfigLocation", value);
    }

    /**
     */
    public void setPhpConfigLocation(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "phpConfigLocation", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPostStart() {
        return software.amazon.jsii.Kernel.get(this, "postStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPostStart(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "postStart", value);
    }

    /**
     */
    public void setPostStart(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "postStart", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreStop() {
        return software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreStop(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "preStop", value);
    }

    /**
     */
    public void setPreStop(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preStop", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProgrammingLanguage() {
        return software.amazon.jsii.Kernel.get(this, "programmingLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProgrammingLanguage(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "programmingLanguage", value);
    }

    /**
     */
    public void setProgrammingLanguage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "programmingLanguage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPvtzDiscoverySvc() {
        return software.amazon.jsii.Kernel.get(this, "pvtzDiscoverySvc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPvtzDiscoverySvc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pvtzDiscoverySvc", value);
    }

    /**
     */
    public void setPvtzDiscoverySvc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pvtzDiscoverySvc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPython() {
        return software.amazon.jsii.Kernel.get(this, "python", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPython(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "python", value);
    }

    /**
     */
    public void setPython(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "python", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPythonModules() {
        return software.amazon.jsii.Kernel.get(this, "pythonModules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPythonModules(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pythonModules", value);
    }

    /**
     */
    public void setPythonModules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pythonModules", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReadiness() {
        return software.amazon.jsii.Kernel.get(this, "readiness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReadiness(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "readiness", value);
    }

    /**
     */
    public void setReadiness(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "readiness", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSaeVersion() {
        return software.amazon.jsii.Kernel.get(this, "saeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSaeVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "saeVersion", value);
    }

    /**
     */
    public void setSaeVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "saeVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceTags() {
        return software.amazon.jsii.Kernel.get(this, "serviceTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceTags(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceTags", value);
    }

    /**
     */
    public void setServiceTags(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceTags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSidecarContainersConfig() {
        return software.amazon.jsii.Kernel.get(this, "sidecarContainersConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSidecarContainersConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sidecarContainersConfig", value);
    }

    /**
     */
    public void setSidecarContainersConfig(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.sae.RosApplication.SidecarContainersConfigProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.sae.RosApplication.SidecarContainersConfigProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "sidecarContainersConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlsConfigs() {
        return software.amazon.jsii.Kernel.get(this, "slsConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsConfigs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "slsConfigs", value);
    }

    /**
     */
    public void setSlsConfigs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsConfigs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sae.RosApplication.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTerminationGracePeriodSeconds() {
        return software.amazon.jsii.Kernel.get(this, "terminationGracePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTerminationGracePeriodSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "terminationGracePeriodSeconds", value);
    }

    /**
     */
    public void setTerminationGracePeriodSeconds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "terminationGracePeriodSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimezone() {
        return software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimezone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "timezone", value);
    }

    /**
     */
    public void setTimezone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timezone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTomcatConfig() {
        return software.amazon.jsii.Kernel.get(this, "tomcatConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTomcatConfig(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tomcatConfig", value);
    }

    /**
     */
    public void setTomcatConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tomcatConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWarStartOptions() {
        return software.amazon.jsii.Kernel.get(this, "warStartOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWarStartOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "warStartOptions", value);
    }

    /**
     */
    public void setWarStartOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "warStartOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebContainer() {
        return software.amazon.jsii.Kernel.get(this, "webContainer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebContainer(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "webContainer", value);
    }

    /**
     */
    public void setWebContainer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "webContainer", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplication.InitContainersConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(InitContainersConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InitContainersConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommandArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigMapMountDesc() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImageUrl() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InitContainersConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InitContainersConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InitContainersConfigProperty> {
            java.lang.Object name;
            java.lang.Object command;
            java.lang.Object commandArgs;
            java.lang.Object configMapMountDesc;
            java.lang.Object envs;
            java.lang.Object imageUrl;

            /**
             * Sets the value of {@link InitContainersConfigProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.lang.String command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getCommandArgs}
             * @param commandArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commandArgs(java.lang.String commandArgs) {
                this.commandArgs = commandArgs;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getCommandArgs}
             * @param commandArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commandArgs(com.aliyun.ros.cdk.core.IResolvable commandArgs) {
                this.commandArgs = commandArgs;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getConfigMapMountDesc}
             * @param configMapMountDesc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configMapMountDesc(java.lang.String configMapMountDesc) {
                this.configMapMountDesc = configMapMountDesc;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getConfigMapMountDesc}
             * @param configMapMountDesc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configMapMountDesc(com.aliyun.ros.cdk.core.IResolvable configMapMountDesc) {
                this.configMapMountDesc = configMapMountDesc;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getEnvs}
             * @param envs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder envs(java.lang.String envs) {
                this.envs = envs;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getEnvs}
             * @param envs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder envs(com.aliyun.ros.cdk.core.IResolvable envs) {
                this.envs = envs;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getImageUrl}
             * @param imageUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageUrl(java.lang.String imageUrl) {
                this.imageUrl = imageUrl;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersConfigProperty#getImageUrl}
             * @param imageUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageUrl(com.aliyun.ros.cdk.core.IResolvable imageUrl) {
                this.imageUrl = imageUrl;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InitContainersConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InitContainersConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InitContainersConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InitContainersConfigProperty {
            private final java.lang.Object name;
            private final java.lang.Object command;
            private final java.lang.Object commandArgs;
            private final java.lang.Object configMapMountDesc;
            private final java.lang.Object envs;
            private final java.lang.Object imageUrl;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.commandArgs = software.amazon.jsii.Kernel.get(this, "commandArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configMapMountDesc = software.amazon.jsii.Kernel.get(this, "configMapMountDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.envs = software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imageUrl = software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.command = builder.command;
                this.commandArgs = builder.commandArgs;
                this.configMapMountDesc = builder.configMapMountDesc;
                this.envs = builder.envs;
                this.imageUrl = builder.imageUrl;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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
            public final java.lang.Object getEnvs() {
                return this.envs;
            }

            @Override
            public final java.lang.Object getImageUrl() {
                return this.imageUrl;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }
                if (this.getCommandArgs() != null) {
                    data.set("commandArgs", om.valueToTree(this.getCommandArgs()));
                }
                if (this.getConfigMapMountDesc() != null) {
                    data.set("configMapMountDesc", om.valueToTree(this.getConfigMapMountDesc()));
                }
                if (this.getEnvs() != null) {
                    data.set("envs", om.valueToTree(this.getEnvs()));
                }
                if (this.getImageUrl() != null) {
                    data.set("imageUrl", om.valueToTree(this.getImageUrl()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplication.InitContainersConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InitContainersConfigProperty.Jsii$Proxy that = (InitContainersConfigProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
                if (this.commandArgs != null ? !this.commandArgs.equals(that.commandArgs) : that.commandArgs != null) return false;
                if (this.configMapMountDesc != null ? !this.configMapMountDesc.equals(that.configMapMountDesc) : that.configMapMountDesc != null) return false;
                if (this.envs != null ? !this.envs.equals(that.envs) : that.envs != null) return false;
                return this.imageUrl != null ? this.imageUrl.equals(that.imageUrl) : that.imageUrl == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                result = 31 * result + (this.commandArgs != null ? this.commandArgs.hashCode() : 0);
                result = 31 * result + (this.configMapMountDesc != null ? this.configMapMountDesc.hashCode() : 0);
                result = 31 * result + (this.envs != null ? this.envs.hashCode() : 0);
                result = 31 * result + (this.imageUrl != null ? this.imageUrl.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplication.SidecarContainersConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(SidecarContainersConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SidecarContainersConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCpu();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMemory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

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
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommandArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigMapMountDesc() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEmptyDirDesc() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImageUrl() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SidecarContainersConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SidecarContainersConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SidecarContainersConfigProperty> {
            java.lang.Object cpu;
            java.lang.Object memory;
            java.lang.Object name;
            java.lang.Object acrInstanceId;
            java.lang.Object command;
            java.lang.Object commandArgs;
            java.lang.Object configMapMountDesc;
            java.lang.Object emptyDirDesc;
            java.lang.Object envs;
            java.lang.Object imageUrl;

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getCpu}
             * @param cpu the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpu(java.lang.Number cpu) {
                this.cpu = cpu;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getCpu}
             * @param cpu the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
                this.cpu = cpu;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getMemory}
             * @param memory the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memory(java.lang.Number memory) {
                this.memory = memory;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getMemory}
             * @param memory the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
                this.memory = memory;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getAcrInstanceId}
             * @param acrInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder acrInstanceId(java.lang.String acrInstanceId) {
                this.acrInstanceId = acrInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getAcrInstanceId}
             * @param acrInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder acrInstanceId(com.aliyun.ros.cdk.core.IResolvable acrInstanceId) {
                this.acrInstanceId = acrInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.lang.String command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getCommandArgs}
             * @param commandArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commandArgs(java.lang.String commandArgs) {
                this.commandArgs = commandArgs;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getCommandArgs}
             * @param commandArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commandArgs(com.aliyun.ros.cdk.core.IResolvable commandArgs) {
                this.commandArgs = commandArgs;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getConfigMapMountDesc}
             * @param configMapMountDesc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configMapMountDesc(java.lang.String configMapMountDesc) {
                this.configMapMountDesc = configMapMountDesc;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getConfigMapMountDesc}
             * @param configMapMountDesc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configMapMountDesc(com.aliyun.ros.cdk.core.IResolvable configMapMountDesc) {
                this.configMapMountDesc = configMapMountDesc;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getEmptyDirDesc}
             * @param emptyDirDesc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emptyDirDesc(java.lang.String emptyDirDesc) {
                this.emptyDirDesc = emptyDirDesc;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getEmptyDirDesc}
             * @param emptyDirDesc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emptyDirDesc(com.aliyun.ros.cdk.core.IResolvable emptyDirDesc) {
                this.emptyDirDesc = emptyDirDesc;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getEnvs}
             * @param envs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder envs(java.lang.String envs) {
                this.envs = envs;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getEnvs}
             * @param envs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder envs(com.aliyun.ros.cdk.core.IResolvable envs) {
                this.envs = envs;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getImageUrl}
             * @param imageUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageUrl(java.lang.String imageUrl) {
                this.imageUrl = imageUrl;
                return this;
            }

            /**
             * Sets the value of {@link SidecarContainersConfigProperty#getImageUrl}
             * @param imageUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageUrl(com.aliyun.ros.cdk.core.IResolvable imageUrl) {
                this.imageUrl = imageUrl;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SidecarContainersConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SidecarContainersConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SidecarContainersConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SidecarContainersConfigProperty {
            private final java.lang.Object cpu;
            private final java.lang.Object memory;
            private final java.lang.Object name;
            private final java.lang.Object acrInstanceId;
            private final java.lang.Object command;
            private final java.lang.Object commandArgs;
            private final java.lang.Object configMapMountDesc;
            private final java.lang.Object emptyDirDesc;
            private final java.lang.Object envs;
            private final java.lang.Object imageUrl;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.acrInstanceId = software.amazon.jsii.Kernel.get(this, "acrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.commandArgs = software.amazon.jsii.Kernel.get(this, "commandArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configMapMountDesc = software.amazon.jsii.Kernel.get(this, "configMapMountDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.emptyDirDesc = software.amazon.jsii.Kernel.get(this, "emptyDirDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.envs = software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imageUrl = software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cpu = java.util.Objects.requireNonNull(builder.cpu, "cpu is required");
                this.memory = java.util.Objects.requireNonNull(builder.memory, "memory is required");
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.acrInstanceId = builder.acrInstanceId;
                this.command = builder.command;
                this.commandArgs = builder.commandArgs;
                this.configMapMountDesc = builder.configMapMountDesc;
                this.emptyDirDesc = builder.emptyDirDesc;
                this.envs = builder.envs;
                this.imageUrl = builder.imageUrl;
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
            public final java.lang.Object getName() {
                return this.name;
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
            public final java.lang.Object getCommandArgs() {
                return this.commandArgs;
            }

            @Override
            public final java.lang.Object getConfigMapMountDesc() {
                return this.configMapMountDesc;
            }

            @Override
            public final java.lang.Object getEmptyDirDesc() {
                return this.emptyDirDesc;
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
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("cpu", om.valueToTree(this.getCpu()));
                data.set("memory", om.valueToTree(this.getMemory()));
                data.set("name", om.valueToTree(this.getName()));
                if (this.getAcrInstanceId() != null) {
                    data.set("acrInstanceId", om.valueToTree(this.getAcrInstanceId()));
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
                if (this.getEmptyDirDesc() != null) {
                    data.set("emptyDirDesc", om.valueToTree(this.getEmptyDirDesc()));
                }
                if (this.getEnvs() != null) {
                    data.set("envs", om.valueToTree(this.getEnvs()));
                }
                if (this.getImageUrl() != null) {
                    data.set("imageUrl", om.valueToTree(this.getImageUrl()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplication.SidecarContainersConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SidecarContainersConfigProperty.Jsii$Proxy that = (SidecarContainersConfigProperty.Jsii$Proxy) o;

                if (!cpu.equals(that.cpu)) return false;
                if (!memory.equals(that.memory)) return false;
                if (!name.equals(that.name)) return false;
                if (this.acrInstanceId != null ? !this.acrInstanceId.equals(that.acrInstanceId) : that.acrInstanceId != null) return false;
                if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
                if (this.commandArgs != null ? !this.commandArgs.equals(that.commandArgs) : that.commandArgs != null) return false;
                if (this.configMapMountDesc != null ? !this.configMapMountDesc.equals(that.configMapMountDesc) : that.configMapMountDesc != null) return false;
                if (this.emptyDirDesc != null ? !this.emptyDirDesc.equals(that.emptyDirDesc) : that.emptyDirDesc != null) return false;
                if (this.envs != null ? !this.envs.equals(that.envs) : that.envs != null) return false;
                return this.imageUrl != null ? this.imageUrl.equals(that.imageUrl) : that.imageUrl == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cpu.hashCode();
                result = 31 * result + (this.memory.hashCode());
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.acrInstanceId != null ? this.acrInstanceId.hashCode() : 0);
                result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
                result = 31 * result + (this.commandArgs != null ? this.commandArgs.hashCode() : 0);
                result = 31 * result + (this.configMapMountDesc != null ? this.configMapMountDesc.hashCode() : 0);
                result = 31 * result + (this.emptyDirDesc != null ? this.emptyDirDesc.hashCode() : 0);
                result = 31 * result + (this.envs != null ? this.envs.hashCode() : 0);
                result = 31 * result + (this.imageUrl != null ? this.imageUrl.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplication.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplication.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.RosApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.RosApplication> {
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
        private final com.aliyun.ros.cdk.sae.RosApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.RosApplicationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
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
         * @param namespaceId This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespaceId This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageType This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }
        /**
         * @return {@code this}
         * @param packageType This parameter is required.
         */
        public Builder packageType(final com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param replicas This parameter is required.
         */
        public Builder replicas(final java.lang.Number replicas) {
            this.props.replicas(replicas);
            return this;
        }
        /**
         * @return {@code this}
         * @param replicas This parameter is required.
         */
        public Builder replicas(final com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.props.replicas(replicas);
            return this;
        }

        /**
         * @return {@code this}
         * @param acrAssumeRoleArn This parameter is required.
         */
        public Builder acrAssumeRoleArn(final java.lang.String acrAssumeRoleArn) {
            this.props.acrAssumeRoleArn(acrAssumeRoleArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param acrAssumeRoleArn This parameter is required.
         */
        public Builder acrAssumeRoleArn(final com.aliyun.ros.cdk.core.IResolvable acrAssumeRoleArn) {
            this.props.acrAssumeRoleArn(acrAssumeRoleArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param acrInstanceId This parameter is required.
         */
        public Builder acrInstanceId(final java.lang.String acrInstanceId) {
            this.props.acrInstanceId(acrInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param acrInstanceId This parameter is required.
         */
        public Builder acrInstanceId(final com.aliyun.ros.cdk.core.IResolvable acrInstanceId) {
            this.props.acrInstanceId(acrInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param appDescription This parameter is required.
         */
        public Builder appDescription(final java.lang.String appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param appDescription This parameter is required.
         */
        public Builder appDescription(final com.aliyun.ros.cdk.core.IResolvable appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param appSource This parameter is required.
         */
        public Builder appSource(final java.lang.String appSource) {
            this.props.appSource(appSource);
            return this;
        }
        /**
         * @return {@code this}
         * @param appSource This parameter is required.
         */
        public Builder appSource(final com.aliyun.ros.cdk.core.IResolvable appSource) {
            this.props.appSource(appSource);
            return this;
        }

        /**
         * @return {@code this}
         * @param associateEip This parameter is required.
         */
        public Builder associateEip(final java.lang.Boolean associateEip) {
            this.props.associateEip(associateEip);
            return this;
        }
        /**
         * @return {@code this}
         * @param associateEip This parameter is required.
         */
        public Builder associateEip(final com.aliyun.ros.cdk.core.IResolvable associateEip) {
            this.props.associateEip(associateEip);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoConfig This parameter is required.
         */
        public Builder autoConfig(final java.lang.Boolean autoConfig) {
            this.props.autoConfig(autoConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoConfig This parameter is required.
         */
        public Builder autoConfig(final com.aliyun.ros.cdk.core.IResolvable autoConfig) {
            this.props.autoConfig(autoConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param baseAppId This parameter is required.
         */
        public Builder baseAppId(final java.lang.String baseAppId) {
            this.props.baseAppId(baseAppId);
            return this;
        }
        /**
         * @return {@code this}
         * @param baseAppId This parameter is required.
         */
        public Builder baseAppId(final com.aliyun.ros.cdk.core.IResolvable baseAppId) {
            this.props.baseAppId(baseAppId);
            return this;
        }

        /**
         * @return {@code this}
         * @param command This parameter is required.
         */
        public Builder command(final java.lang.String command) {
            this.props.command(command);
            return this;
        }
        /**
         * @return {@code this}
         * @param command This parameter is required.
         */
        public Builder command(final com.aliyun.ros.cdk.core.IResolvable command) {
            this.props.command(command);
            return this;
        }

        /**
         * @return {@code this}
         * @param commandArgs This parameter is required.
         */
        public Builder commandArgs(final java.lang.String commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }
        /**
         * @return {@code this}
         * @param commandArgs This parameter is required.
         */
        public Builder commandArgs(final com.aliyun.ros.cdk.core.IResolvable commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }

        /**
         * @return {@code this}
         * @param configMapMountDesc This parameter is required.
         */
        public Builder configMapMountDesc(final java.lang.String configMapMountDesc) {
            this.props.configMapMountDesc(configMapMountDesc);
            return this;
        }
        /**
         * @return {@code this}
         * @param configMapMountDesc This parameter is required.
         */
        public Builder configMapMountDesc(final com.aliyun.ros.cdk.core.IResolvable configMapMountDesc) {
            this.props.configMapMountDesc(configMapMountDesc);
            return this;
        }

        /**
         * @return {@code this}
         * @param customHostAlias This parameter is required.
         */
        public Builder customHostAlias(final java.lang.String customHostAlias) {
            this.props.customHostAlias(customHostAlias);
            return this;
        }
        /**
         * @return {@code this}
         * @param customHostAlias This parameter is required.
         */
        public Builder customHostAlias(final com.aliyun.ros.cdk.core.IResolvable customHostAlias) {
            this.props.customHostAlias(customHostAlias);
            return this;
        }

        /**
         * @return {@code this}
         * @param deploy This parameter is required.
         */
        public Builder deploy(final java.lang.Boolean deploy) {
            this.props.deploy(deploy);
            return this;
        }
        /**
         * @return {@code this}
         * @param deploy This parameter is required.
         */
        public Builder deploy(final com.aliyun.ros.cdk.core.IResolvable deploy) {
            this.props.deploy(deploy);
            return this;
        }

        /**
         * @return {@code this}
         * @param edasContainerVersion This parameter is required.
         */
        public Builder edasContainerVersion(final java.lang.String edasContainerVersion) {
            this.props.edasContainerVersion(edasContainerVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param edasContainerVersion This parameter is required.
         */
        public Builder edasContainerVersion(final com.aliyun.ros.cdk.core.IResolvable edasContainerVersion) {
            this.props.edasContainerVersion(edasContainerVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableEbpf This parameter is required.
         */
        public Builder enableEbpf(final java.lang.String enableEbpf) {
            this.props.enableEbpf(enableEbpf);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableEbpf This parameter is required.
         */
        public Builder enableEbpf(final com.aliyun.ros.cdk.core.IResolvable enableEbpf) {
            this.props.enableEbpf(enableEbpf);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableNewArms This parameter is required.
         */
        public Builder enableNewArms(final java.lang.Boolean enableNewArms) {
            this.props.enableNewArms(enableNewArms);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableNewArms This parameter is required.
         */
        public Builder enableNewArms(final com.aliyun.ros.cdk.core.IResolvable enableNewArms) {
            this.props.enableNewArms(enableNewArms);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSidecarResourceIsolated This parameter is required.
         */
        public Builder enableSidecarResourceIsolated(final java.lang.Boolean enableSidecarResourceIsolated) {
            this.props.enableSidecarResourceIsolated(enableSidecarResourceIsolated);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSidecarResourceIsolated This parameter is required.
         */
        public Builder enableSidecarResourceIsolated(final com.aliyun.ros.cdk.core.IResolvable enableSidecarResourceIsolated) {
            this.props.enableSidecarResourceIsolated(enableSidecarResourceIsolated);
            return this;
        }

        /**
         * @return {@code this}
         * @param envs This parameter is required.
         */
        public Builder envs(final java.lang.String envs) {
            this.props.envs(envs);
            return this;
        }
        /**
         * @return {@code this}
         * @param envs This parameter is required.
         */
        public Builder envs(final com.aliyun.ros.cdk.core.IResolvable envs) {
            this.props.envs(envs);
            return this;
        }

        /**
         * @return {@code this}
         * @param imagePullSecrets This parameter is required.
         */
        public Builder imagePullSecrets(final java.lang.String imagePullSecrets) {
            this.props.imagePullSecrets(imagePullSecrets);
            return this;
        }
        /**
         * @return {@code this}
         * @param imagePullSecrets This parameter is required.
         */
        public Builder imagePullSecrets(final com.aliyun.ros.cdk.core.IResolvable imagePullSecrets) {
            this.props.imagePullSecrets(imagePullSecrets);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageUrl This parameter is required.
         */
        public Builder imageUrl(final java.lang.String imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageUrl This parameter is required.
         */
        public Builder imageUrl(final com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param initContainersConfig This parameter is required.
         */
        public Builder initContainersConfig(final com.aliyun.ros.cdk.core.IResolvable initContainersConfig) {
            this.props.initContainersConfig(initContainersConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param initContainersConfig This parameter is required.
         */
        public Builder initContainersConfig(final java.util.List<? extends java.lang.Object> initContainersConfig) {
            this.props.initContainersConfig(initContainersConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param jarStartArgs This parameter is required.
         */
        public Builder jarStartArgs(final java.lang.String jarStartArgs) {
            this.props.jarStartArgs(jarStartArgs);
            return this;
        }
        /**
         * @return {@code this}
         * @param jarStartArgs This parameter is required.
         */
        public Builder jarStartArgs(final com.aliyun.ros.cdk.core.IResolvable jarStartArgs) {
            this.props.jarStartArgs(jarStartArgs);
            return this;
        }

        /**
         * @return {@code this}
         * @param jarStartOptions This parameter is required.
         */
        public Builder jarStartOptions(final java.lang.String jarStartOptions) {
            this.props.jarStartOptions(jarStartOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param jarStartOptions This parameter is required.
         */
        public Builder jarStartOptions(final com.aliyun.ros.cdk.core.IResolvable jarStartOptions) {
            this.props.jarStartOptions(jarStartOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param jdk This parameter is required.
         */
        public Builder jdk(final java.lang.String jdk) {
            this.props.jdk(jdk);
            return this;
        }
        /**
         * @return {@code this}
         * @param jdk This parameter is required.
         */
        public Builder jdk(final com.aliyun.ros.cdk.core.IResolvable jdk) {
            this.props.jdk(jdk);
            return this;
        }

        /**
         * @return {@code this}
         * @param kafkaConfigs This parameter is required.
         */
        public Builder kafkaConfigs(final java.lang.String kafkaConfigs) {
            this.props.kafkaConfigs(kafkaConfigs);
            return this;
        }
        /**
         * @return {@code this}
         * @param kafkaConfigs This parameter is required.
         */
        public Builder kafkaConfigs(final com.aliyun.ros.cdk.core.IResolvable kafkaConfigs) {
            this.props.kafkaConfigs(kafkaConfigs);
            return this;
        }

        /**
         * @return {@code this}
         * @param liveness This parameter is required.
         */
        public Builder liveness(final java.lang.String liveness) {
            this.props.liveness(liveness);
            return this;
        }
        /**
         * @return {@code this}
         * @param liveness This parameter is required.
         */
        public Builder liveness(final com.aliyun.ros.cdk.core.IResolvable liveness) {
            this.props.liveness(liveness);
            return this;
        }

        /**
         * @return {@code this}
         * @param microRegistration This parameter is required.
         */
        public Builder microRegistration(final java.lang.String microRegistration) {
            this.props.microRegistration(microRegistration);
            return this;
        }
        /**
         * @return {@code this}
         * @param microRegistration This parameter is required.
         */
        public Builder microRegistration(final com.aliyun.ros.cdk.core.IResolvable microRegistration) {
            this.props.microRegistration(microRegistration);
            return this;
        }

        /**
         * @return {@code this}
         * @param microRegistrationConfig This parameter is required.
         */
        public Builder microRegistrationConfig(final java.lang.String microRegistrationConfig) {
            this.props.microRegistrationConfig(microRegistrationConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param microRegistrationConfig This parameter is required.
         */
        public Builder microRegistrationConfig(final com.aliyun.ros.cdk.core.IResolvable microRegistrationConfig) {
            this.props.microRegistrationConfig(microRegistrationConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param mountDesc This parameter is required.
         */
        public Builder mountDesc(final java.lang.String mountDesc) {
            this.props.mountDesc(mountDesc);
            return this;
        }
        /**
         * @return {@code this}
         * @param mountDesc This parameter is required.
         */
        public Builder mountDesc(final com.aliyun.ros.cdk.core.IResolvable mountDesc) {
            this.props.mountDesc(mountDesc);
            return this;
        }

        /**
         * @return {@code this}
         * @param mountHost This parameter is required.
         */
        public Builder mountHost(final java.lang.String mountHost) {
            this.props.mountHost(mountHost);
            return this;
        }
        /**
         * @return {@code this}
         * @param mountHost This parameter is required.
         */
        public Builder mountHost(final com.aliyun.ros.cdk.core.IResolvable mountHost) {
            this.props.mountHost(mountHost);
            return this;
        }

        /**
         * @return {@code this}
         * @param nasConfigs This parameter is required.
         */
        public Builder nasConfigs(final java.lang.String nasConfigs) {
            this.props.nasConfigs(nasConfigs);
            return this;
        }
        /**
         * @return {@code this}
         * @param nasConfigs This parameter is required.
         */
        public Builder nasConfigs(final com.aliyun.ros.cdk.core.IResolvable nasConfigs) {
            this.props.nasConfigs(nasConfigs);
            return this;
        }

        /**
         * @return {@code this}
         * @param nasId This parameter is required.
         */
        public Builder nasId(final java.lang.String nasId) {
            this.props.nasId(nasId);
            return this;
        }
        /**
         * @return {@code this}
         * @param nasId This parameter is required.
         */
        public Builder nasId(final com.aliyun.ros.cdk.core.IResolvable nasId) {
            this.props.nasId(nasId);
            return this;
        }

        /**
         * @return {@code this}
         * @param newSaeVersion This parameter is required.
         */
        public Builder newSaeVersion(final java.lang.String newSaeVersion) {
            this.props.newSaeVersion(newSaeVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param newSaeVersion This parameter is required.
         */
        public Builder newSaeVersion(final com.aliyun.ros.cdk.core.IResolvable newSaeVersion) {
            this.props.newSaeVersion(newSaeVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossAkId This parameter is required.
         */
        public Builder ossAkId(final java.lang.String ossAkId) {
            this.props.ossAkId(ossAkId);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossAkId This parameter is required.
         */
        public Builder ossAkId(final com.aliyun.ros.cdk.core.IResolvable ossAkId) {
            this.props.ossAkId(ossAkId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossAkSecret This parameter is required.
         */
        public Builder ossAkSecret(final java.lang.String ossAkSecret) {
            this.props.ossAkSecret(ossAkSecret);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossAkSecret This parameter is required.
         */
        public Builder ossAkSecret(final com.aliyun.ros.cdk.core.IResolvable ossAkSecret) {
            this.props.ossAkSecret(ossAkSecret);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossMountDescs This parameter is required.
         */
        public Builder ossMountDescs(final java.util.List<? extends java.lang.Object> ossMountDescs) {
            this.props.ossMountDescs(ossMountDescs);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossMountDescs This parameter is required.
         */
        public Builder ossMountDescs(final com.aliyun.ros.cdk.core.IResolvable ossMountDescs) {
            this.props.ossMountDescs(ossMountDescs);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageUrl This parameter is required.
         */
        public Builder packageUrl(final java.lang.String packageUrl) {
            this.props.packageUrl(packageUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param packageUrl This parameter is required.
         */
        public Builder packageUrl(final com.aliyun.ros.cdk.core.IResolvable packageUrl) {
            this.props.packageUrl(packageUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageVersion This parameter is required.
         */
        public Builder packageVersion(final java.lang.String packageVersion) {
            this.props.packageVersion(packageVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param packageVersion This parameter is required.
         */
        public Builder packageVersion(final com.aliyun.ros.cdk.core.IResolvable packageVersion) {
            this.props.packageVersion(packageVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param php This parameter is required.
         */
        public Builder php(final java.lang.String php) {
            this.props.php(php);
            return this;
        }
        /**
         * @return {@code this}
         * @param php This parameter is required.
         */
        public Builder php(final com.aliyun.ros.cdk.core.IResolvable php) {
            this.props.php(php);
            return this;
        }

        /**
         * @return {@code this}
         * @param phpArmsConfigLocation This parameter is required.
         */
        public Builder phpArmsConfigLocation(final java.lang.String phpArmsConfigLocation) {
            this.props.phpArmsConfigLocation(phpArmsConfigLocation);
            return this;
        }
        /**
         * @return {@code this}
         * @param phpArmsConfigLocation This parameter is required.
         */
        public Builder phpArmsConfigLocation(final com.aliyun.ros.cdk.core.IResolvable phpArmsConfigLocation) {
            this.props.phpArmsConfigLocation(phpArmsConfigLocation);
            return this;
        }

        /**
         * @return {@code this}
         * @param phpConfig This parameter is required.
         */
        public Builder phpConfig(final java.lang.String phpConfig) {
            this.props.phpConfig(phpConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param phpConfig This parameter is required.
         */
        public Builder phpConfig(final com.aliyun.ros.cdk.core.IResolvable phpConfig) {
            this.props.phpConfig(phpConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param phpConfigLocation This parameter is required.
         */
        public Builder phpConfigLocation(final java.lang.String phpConfigLocation) {
            this.props.phpConfigLocation(phpConfigLocation);
            return this;
        }
        /**
         * @return {@code this}
         * @param phpConfigLocation This parameter is required.
         */
        public Builder phpConfigLocation(final com.aliyun.ros.cdk.core.IResolvable phpConfigLocation) {
            this.props.phpConfigLocation(phpConfigLocation);
            return this;
        }

        /**
         * @return {@code this}
         * @param postStart This parameter is required.
         */
        public Builder postStart(final java.lang.String postStart) {
            this.props.postStart(postStart);
            return this;
        }
        /**
         * @return {@code this}
         * @param postStart This parameter is required.
         */
        public Builder postStart(final com.aliyun.ros.cdk.core.IResolvable postStart) {
            this.props.postStart(postStart);
            return this;
        }

        /**
         * @return {@code this}
         * @param preStop This parameter is required.
         */
        public Builder preStop(final java.lang.String preStop) {
            this.props.preStop(preStop);
            return this;
        }
        /**
         * @return {@code this}
         * @param preStop This parameter is required.
         */
        public Builder preStop(final com.aliyun.ros.cdk.core.IResolvable preStop) {
            this.props.preStop(preStop);
            return this;
        }

        /**
         * @return {@code this}
         * @param programmingLanguage This parameter is required.
         */
        public Builder programmingLanguage(final java.lang.String programmingLanguage) {
            this.props.programmingLanguage(programmingLanguage);
            return this;
        }
        /**
         * @return {@code this}
         * @param programmingLanguage This parameter is required.
         */
        public Builder programmingLanguage(final com.aliyun.ros.cdk.core.IResolvable programmingLanguage) {
            this.props.programmingLanguage(programmingLanguage);
            return this;
        }

        /**
         * @return {@code this}
         * @param pvtzDiscoverySvc This parameter is required.
         */
        public Builder pvtzDiscoverySvc(final java.lang.String pvtzDiscoverySvc) {
            this.props.pvtzDiscoverySvc(pvtzDiscoverySvc);
            return this;
        }
        /**
         * @return {@code this}
         * @param pvtzDiscoverySvc This parameter is required.
         */
        public Builder pvtzDiscoverySvc(final com.aliyun.ros.cdk.core.IResolvable pvtzDiscoverySvc) {
            this.props.pvtzDiscoverySvc(pvtzDiscoverySvc);
            return this;
        }

        /**
         * @return {@code this}
         * @param python This parameter is required.
         */
        public Builder python(final java.lang.String python) {
            this.props.python(python);
            return this;
        }
        /**
         * @return {@code this}
         * @param python This parameter is required.
         */
        public Builder python(final com.aliyun.ros.cdk.core.IResolvable python) {
            this.props.python(python);
            return this;
        }

        /**
         * @return {@code this}
         * @param pythonModules This parameter is required.
         */
        public Builder pythonModules(final java.lang.String pythonModules) {
            this.props.pythonModules(pythonModules);
            return this;
        }
        /**
         * @return {@code this}
         * @param pythonModules This parameter is required.
         */
        public Builder pythonModules(final com.aliyun.ros.cdk.core.IResolvable pythonModules) {
            this.props.pythonModules(pythonModules);
            return this;
        }

        /**
         * @return {@code this}
         * @param readiness This parameter is required.
         */
        public Builder readiness(final java.lang.String readiness) {
            this.props.readiness(readiness);
            return this;
        }
        /**
         * @return {@code this}
         * @param readiness This parameter is required.
         */
        public Builder readiness(final com.aliyun.ros.cdk.core.IResolvable readiness) {
            this.props.readiness(readiness);
            return this;
        }

        /**
         * @return {@code this}
         * @param saeVersion This parameter is required.
         */
        public Builder saeVersion(final java.lang.String saeVersion) {
            this.props.saeVersion(saeVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param saeVersion This parameter is required.
         */
        public Builder saeVersion(final com.aliyun.ros.cdk.core.IResolvable saeVersion) {
            this.props.saeVersion(saeVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceTags This parameter is required.
         */
        public Builder serviceTags(final java.lang.String serviceTags) {
            this.props.serviceTags(serviceTags);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceTags This parameter is required.
         */
        public Builder serviceTags(final com.aliyun.ros.cdk.core.IResolvable serviceTags) {
            this.props.serviceTags(serviceTags);
            return this;
        }

        /**
         * @return {@code this}
         * @param sidecarContainersConfig This parameter is required.
         */
        public Builder sidecarContainersConfig(final com.aliyun.ros.cdk.core.IResolvable sidecarContainersConfig) {
            this.props.sidecarContainersConfig(sidecarContainersConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param sidecarContainersConfig This parameter is required.
         */
        public Builder sidecarContainersConfig(final java.util.List<? extends java.lang.Object> sidecarContainersConfig) {
            this.props.sidecarContainersConfig(sidecarContainersConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsConfigs This parameter is required.
         */
        public Builder slsConfigs(final java.lang.String slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsConfigs This parameter is required.
         */
        public Builder slsConfigs(final com.aliyun.ros.cdk.core.IResolvable slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.sae.RosApplication.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param terminationGracePeriodSeconds This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final java.lang.Number terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }
        /**
         * @return {@code this}
         * @param terminationGracePeriodSeconds This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param timezone This parameter is required.
         */
        public Builder timezone(final java.lang.String timezone) {
            this.props.timezone(timezone);
            return this;
        }
        /**
         * @return {@code this}
         * @param timezone This parameter is required.
         */
        public Builder timezone(final com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.props.timezone(timezone);
            return this;
        }

        /**
         * @return {@code this}
         * @param tomcatConfig This parameter is required.
         */
        public Builder tomcatConfig(final java.lang.String tomcatConfig) {
            this.props.tomcatConfig(tomcatConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param tomcatConfig This parameter is required.
         */
        public Builder tomcatConfig(final com.aliyun.ros.cdk.core.IResolvable tomcatConfig) {
            this.props.tomcatConfig(tomcatConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param warStartOptions This parameter is required.
         */
        public Builder warStartOptions(final java.lang.String warStartOptions) {
            this.props.warStartOptions(warStartOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param warStartOptions This parameter is required.
         */
        public Builder warStartOptions(final com.aliyun.ros.cdk.core.IResolvable warStartOptions) {
            this.props.warStartOptions(warStartOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param webContainer This parameter is required.
         */
        public Builder webContainer(final java.lang.String webContainer) {
            this.props.webContainer(webContainer);
            return this;
        }
        /**
         * @return {@code this}
         * @param webContainer This parameter is required.
         */
        public Builder webContainer(final com.aliyun.ros.cdk.core.IResolvable webContainer) {
            this.props.webContainer(webContainer);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.RosApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.RosApplication build() {
            return new com.aliyun.ros.cdk.sae.RosApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
