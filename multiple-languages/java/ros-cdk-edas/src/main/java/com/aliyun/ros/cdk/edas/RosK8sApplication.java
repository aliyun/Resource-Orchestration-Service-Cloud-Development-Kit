package com.aliyun.ros.cdk.edas;

/**
 * A ROS template type:  <code>ALIYUN::EDAS::K8sApplication</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.152Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication")
public class RosK8sApplication extends com.aliyun.ros.cdk.core.RosResource {

    protected RosK8sApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosK8sApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.edas.RosK8sApplication.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::EDAS::K8sApplication</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosK8sApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.RosK8sApplicationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppName() {
        return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChangeOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCsClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrCsClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterId() {
        return software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApplicationDescription() {
        return software.amazon.jsii.Kernel.get(this, "applicationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApplicationDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "applicationDescription", value);
    }

    /**
     */
    public void setApplicationDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "applicationDescription", value);
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
    public void setCommandArgs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "commandArgs", value);
    }

    /**
     */
    public void setCommandArgs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.edas.RosK8sApplication.CommandArgsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.edas.RosK8sApplication.CommandArgsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "commandArgs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeployAcrossNodes() {
        return software.amazon.jsii.Kernel.get(this, "deployAcrossNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeployAcrossNodes(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deployAcrossNodes", value);
    }

    /**
     */
    public void setDeployAcrossNodes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deployAcrossNodes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeployAcrossZones() {
        return software.amazon.jsii.Kernel.get(this, "deployAcrossZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeployAcrossZones(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deployAcrossZones", value);
    }

    /**
     */
    public void setDeployAcrossZones(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deployAcrossZones", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAhas() {
        return software.amazon.jsii.Kernel.get(this, "enableAhas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAhas(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAhas", value);
    }

    /**
     */
    public void setEnableAhas(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAhas", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
        return software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "envs", value);
    }

    /**
     */
    public void setEnvs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.edas.RosK8sApplication.EnvsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.edas.RosK8sApplication.EnvsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "envs", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbId() {
        return software.amazon.jsii.Kernel.get(this, "internetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetSlbId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbId", value);
    }

    /**
     */
    public void setInternetSlbId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbPort() {
        return software.amazon.jsii.Kernel.get(this, "internetSlbPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetSlbPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbPort", value);
    }

    /**
     */
    public void setInternetSlbPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbProtocol() {
        return software.amazon.jsii.Kernel.get(this, "internetSlbProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetSlbProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbProtocol", value);
    }

    /**
     */
    public void setInternetSlbProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetSlbProtocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetTargetPort() {
        return software.amazon.jsii.Kernel.get(this, "internetTargetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetTargetPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "internetTargetPort", value);
    }

    /**
     */
    public void setInternetTargetPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetTargetPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIntranetSlbId() {
        return software.amazon.jsii.Kernel.get(this, "intranetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIntranetSlbId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "intranetSlbId", value);
    }

    /**
     */
    public void setIntranetSlbId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "intranetSlbId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIntranetSlbPort() {
        return software.amazon.jsii.Kernel.get(this, "intranetSlbPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIntranetSlbPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "intranetSlbPort", value);
    }

    /**
     */
    public void setIntranetSlbPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "intranetSlbPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIntranetSlbProtocol() {
        return software.amazon.jsii.Kernel.get(this, "intranetSlbProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIntranetSlbProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "intranetSlbProtocol", value);
    }

    /**
     */
    public void setIntranetSlbProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "intranetSlbProtocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIntranetTargetPort() {
        return software.amazon.jsii.Kernel.get(this, "intranetTargetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIntranetTargetPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "intranetTargetPort", value);
    }

    /**
     */
    public void setIntranetTargetPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "intranetTargetPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsMultilingualApp() {
        return software.amazon.jsii.Kernel.get(this, "isMultilingualApp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsMultilingualApp(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isMultilingualApp", value);
    }

    /**
     */
    public void setIsMultilingualApp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isMultilingualApp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJavaStartUpConfig() {
        return software.amazon.jsii.Kernel.get(this, "javaStartUpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJavaStartUpConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "javaStartUpConfig", value);
    }

    /**
     */
    public void setJavaStartUpConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.RosK8sApplication.JavaStartUpConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "javaStartUpConfig", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getLimitCpu() {
        return software.amazon.jsii.Kernel.get(this, "limitCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLimitCpu(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "limitCpu", value);
    }

    /**
     */
    public void setLimitCpu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "limitCpu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLimitMem() {
        return software.amazon.jsii.Kernel.get(this, "limitMem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLimitMem(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "limitMem", value);
    }

    /**
     */
    public void setLimitMem(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "limitMem", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLiveness() {
        return software.amazon.jsii.Kernel.get(this, "liveness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLiveness(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "liveness", value);
    }

    /**
     */
    public void setLiveness(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.RosK8sApplication.LivenessProperty value) {
        software.amazon.jsii.Kernel.set(this, "liveness", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLocalVolume() {
        return software.amazon.jsii.Kernel.get(this, "localVolume", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalVolume(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localVolume", value);
    }

    /**
     */
    public void setLocalVolume(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.edas.RosK8sApplication.LocalVolumeProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.edas.RosK8sApplication.LocalVolumeProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "localVolume", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogicalRegionId() {
        return software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogicalRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logicalRegionId", value);
    }

    /**
     */
    public void setLogicalRegionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logicalRegionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMountDescs() {
        return software.amazon.jsii.Kernel.get(this, "mountDescs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMountDescs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mountDescs", value);
    }

    /**
     */
    public void setMountDescs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.edas.RosK8sApplication.MountDescsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.edas.RosK8sApplication.MountDescsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "mountDescs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
        return software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespace", value);
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespace", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPackageType() {
        return software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageType", value);
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "packageType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPostStart() {
        return software.amazon.jsii.Kernel.get(this, "postStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPostStart(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "postStart", value);
    }

    /**
     */
    public void setPostStart(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.RosK8sApplication.PostStartProperty value) {
        software.amazon.jsii.Kernel.set(this, "postStart", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreStop() {
        return software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreStop(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preStop", value);
    }

    /**
     */
    public void setPreStop(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.RosK8sApplication.PreStopProperty value) {
        software.amazon.jsii.Kernel.set(this, "preStop", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReadiness() {
        return software.amazon.jsii.Kernel.get(this, "readiness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReadiness(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "readiness", value);
    }

    /**
     */
    public void setReadiness(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.RosK8sApplication.ReadinessProperty value) {
        software.amazon.jsii.Kernel.set(this, "readiness", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReplicas() {
        return software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicas(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "replicas", value);
    }

    /**
     */
    public void setReplicas(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicas", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRepoId() {
        return software.amazon.jsii.Kernel.get(this, "repoId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRepoId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "repoId", value);
    }

    /**
     */
    public void setRepoId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "repoId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRequestsCpu() {
        return software.amazon.jsii.Kernel.get(this, "requestsCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRequestsCpu(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "requestsCpu", value);
    }

    /**
     */
    public void setRequestsCpu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "requestsCpu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRequestsMem() {
        return software.amazon.jsii.Kernel.get(this, "requestsMem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRequestsMem(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "requestsMem", value);
    }

    /**
     */
    public void setRequestsMem(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "requestsMem", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuntimeClassName() {
        return software.amazon.jsii.Kernel.get(this, "runtimeClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuntimeClassName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "runtimeClassName", value);
    }

    /**
     */
    public void setRuntimeClassName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "runtimeClassName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlsConfigs() {
        return software.amazon.jsii.Kernel.get(this, "slsConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsConfigs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsConfigs", value);
    }

    /**
     */
    public void setSlsConfigs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.edas.RosK8sApplication.SlsConfigsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.edas.RosK8sApplication.SlsConfigsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "slsConfigs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageType() {
        return software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageType", value);
    }

    /**
     */
    public void setStorageType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUriEncoding() {
        return software.amazon.jsii.Kernel.get(this, "uriEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUriEncoding(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "uriEncoding", value);
    }

    /**
     */
    public void setUriEncoding(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "uriEncoding", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUseBodyEncoding() {
        return software.amazon.jsii.Kernel.get(this, "useBodyEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUseBodyEncoding(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "useBodyEncoding", value);
    }

    /**
     */
    public void setUseBodyEncoding(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "useBodyEncoding", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebContainerConfig() {
        return software.amazon.jsii.Kernel.get(this, "webContainerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebContainerConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "webContainerConfig", value);
    }

    /**
     */
    public void setWebContainerConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.RosK8sApplication.WebContainerConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "webContainerConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.CommandArgsProperty")
    @software.amazon.jsii.Jsii.Proxy(CommandArgsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CommandArgsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArgument() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CommandArgsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CommandArgsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CommandArgsProperty> {
            java.lang.Object argument;

            /**
             * Sets the value of {@link CommandArgsProperty#getArgument}
             * @param argument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder argument(java.lang.String argument) {
                this.argument = argument;
                return this;
            }

            /**
             * Sets the value of {@link CommandArgsProperty#getArgument}
             * @param argument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder argument(com.aliyun.ros.cdk.core.IResolvable argument) {
                this.argument = argument;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CommandArgsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CommandArgsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CommandArgsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CommandArgsProperty {
            private final java.lang.Object argument;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.argument = software.amazon.jsii.Kernel.get(this, "argument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.argument = builder.argument;
            }

            @Override
            public final java.lang.Object getArgument() {
                return this.argument;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getArgument() != null) {
                    data.set("argument", om.valueToTree(this.getArgument()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.CommandArgsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CommandArgsProperty.Jsii$Proxy that = (CommandArgsProperty.Jsii$Proxy) o;

                return this.argument != null ? this.argument.equals(that.argument) : that.argument == null;
            }

            @Override
            public final int hashCode() {
                int result = this.argument != null ? this.argument.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty")
    @software.amazon.jsii.Jsii.Proxy(ConcGCThreadsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConcGCThreadsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConcGCThreadsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConcGCThreadsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConcGCThreadsProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link ConcGCThreadsProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link ConcGCThreadsProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link ConcGCThreadsProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link ConcGCThreadsProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConcGCThreadsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConcGCThreadsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConcGCThreadsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConcGCThreadsProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConcGCThreadsProperty.Jsii$Proxy that = (ConcGCThreadsProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomParamsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomParamsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CustomParamsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomParamsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomParamsProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link CustomParamsProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.String original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link CustomParamsProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link CustomParamsProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link CustomParamsProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CustomParamsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomParamsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomParamsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomParamsProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomParamsProperty.Jsii$Proxy that = (CustomParamsProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.EnvsProperty")
    @software.amazon.jsii.Jsii.Proxy(EnvsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EnvsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EnvsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EnvsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EnvsProperty> {
            java.lang.Object name;
            java.lang.Object value;

            /**
             * Sets the value of {@link EnvsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link EnvsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link EnvsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link EnvsProperty#getValue}
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
             * @return a new instance of {@link EnvsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EnvsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EnvsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnvsProperty {
            private final java.lang.Object name;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.EnvsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EnvsProperty.Jsii$Proxy that = (EnvsProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty")
    @software.amazon.jsii.Jsii.Proxy(ExecProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ExecProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ExecProperty> {
            java.lang.Object command;

            /**
             * Sets the value of {@link ExecProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link ExecProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<? extends java.lang.Object> command) {
                this.command = command;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ExecProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ExecProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExecProperty {
            private final java.lang.Object command;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.command = builder.command;
            }

            @Override
            public final java.lang.Object getCommand() {
                return this.command;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ExecProperty.Jsii$Proxy that = (ExecProperty.Jsii$Proxy) o;

                return this.command != null ? this.command.equals(that.command) : that.command == null;
            }

            @Override
            public final int hashCode() {
                int result = this.command != null ? this.command.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(G1HeapRegionSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface G1HeapRegionSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link G1HeapRegionSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link G1HeapRegionSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<G1HeapRegionSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link G1HeapRegionSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link G1HeapRegionSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link G1HeapRegionSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link G1HeapRegionSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link G1HeapRegionSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public G1HeapRegionSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link G1HeapRegionSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements G1HeapRegionSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                G1HeapRegionSizeProperty.Jsii$Proxy that = (G1HeapRegionSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty")
    @software.amazon.jsii.Jsii.Proxy(GCLogFilePathProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GCLogFilePathProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GCLogFilePathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GCLogFilePathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GCLogFilePathProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link GCLogFilePathProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.String original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link GCLogFilePathProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link GCLogFilePathProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link GCLogFilePathProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GCLogFilePathProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GCLogFilePathProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GCLogFilePathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GCLogFilePathProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GCLogFilePathProperty.Jsii$Proxy that = (GCLogFilePathProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(GCLogFileSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GCLogFileSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GCLogFileSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GCLogFileSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GCLogFileSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link GCLogFileSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link GCLogFileSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link GCLogFileSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link GCLogFileSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GCLogFileSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GCLogFileSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GCLogFileSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GCLogFileSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GCLogFileSizeProperty.Jsii$Proxy that = (GCLogFileSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty")
    @software.amazon.jsii.Jsii.Proxy(HeapDumpOnOutOfMemoryErrorProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HeapDumpOnOutOfMemoryErrorProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HeapDumpOnOutOfMemoryErrorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HeapDumpOnOutOfMemoryErrorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HeapDumpOnOutOfMemoryErrorProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link HeapDumpOnOutOfMemoryErrorProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Boolean original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link HeapDumpOnOutOfMemoryErrorProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link HeapDumpOnOutOfMemoryErrorProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link HeapDumpOnOutOfMemoryErrorProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HeapDumpOnOutOfMemoryErrorProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HeapDumpOnOutOfMemoryErrorProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HeapDumpOnOutOfMemoryErrorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HeapDumpOnOutOfMemoryErrorProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HeapDumpOnOutOfMemoryErrorProperty.Jsii$Proxy that = (HeapDumpOnOutOfMemoryErrorProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty")
    @software.amazon.jsii.Jsii.Proxy(HeapDumpPathProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HeapDumpPathProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HeapDumpPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HeapDumpPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HeapDumpPathProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link HeapDumpPathProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.String original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link HeapDumpPathProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link HeapDumpPathProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link HeapDumpPathProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HeapDumpPathProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HeapDumpPathProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HeapDumpPathProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HeapDumpPathProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HeapDumpPathProperty.Jsii$Proxy that = (HeapDumpPathProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(HttpGetHttpHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HttpGetHttpHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HttpGetHttpHeadersProperty> {
            java.lang.Object name;
            java.lang.Object value;

            /**
             * Sets the value of {@link HttpGetHttpHeadersProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetHttpHeadersProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetHttpHeadersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetHttpHeadersProperty#getValue}
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
             * @return a new instance of {@link HttpGetHttpHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HttpGetHttpHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpGetHttpHeadersProperty {
            private final java.lang.Object name;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HttpGetHttpHeadersProperty.Jsii$Proxy that = (HttpGetHttpHeadersProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty")
    @software.amazon.jsii.Jsii.Proxy(HttpGetProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HttpGetProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScheme() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HttpGetProperty> {
            java.lang.Object host;
            java.lang.Object httpHeaders;
            java.lang.Object path;
            java.lang.Object port;
            java.lang.Object scheme;

            /**
             * Sets the value of {@link HttpGetProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getHttpHeaders}
             * @param httpHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpHeaders(com.aliyun.ros.cdk.core.IResolvable httpHeaders) {
                this.httpHeaders = httpHeaders;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getHttpHeaders}
             * @param httpHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpHeaders(java.util.List<? extends java.lang.Object> httpHeaders) {
                this.httpHeaders = httpHeaders;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(java.lang.String scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Sets the value of {@link HttpGetProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(com.aliyun.ros.cdk.core.IResolvable scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HttpGetProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HttpGetProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpGetProperty {
            private final java.lang.Object host;
            private final java.lang.Object httpHeaders;
            private final java.lang.Object path;
            private final java.lang.Object port;
            private final java.lang.Object scheme;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpHeaders = software.amazon.jsii.Kernel.get(this, "httpHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scheme = software.amazon.jsii.Kernel.get(this, "scheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.httpHeaders = builder.httpHeaders;
                this.path = builder.path;
                this.port = builder.port;
                this.scheme = builder.scheme;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getHttpHeaders() {
                return this.httpHeaders;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getScheme() {
                return this.scheme;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getHttpHeaders() != null) {
                    data.set("httpHeaders", om.valueToTree(this.getHttpHeaders()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getScheme() != null) {
                    data.set("scheme", om.valueToTree(this.getScheme()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HttpGetProperty.Jsii$Proxy that = (HttpGetProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.httpHeaders != null ? !this.httpHeaders.equals(that.httpHeaders) : that.httpHeaders != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                return this.scheme != null ? this.scheme.equals(that.scheme) : that.scheme == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.httpHeaders != null ? this.httpHeaders.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.scheme != null ? this.scheme.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(HttpHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HttpHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HttpHeadersProperty> {
            java.lang.Object name;
            java.lang.Object value;

            /**
             * Sets the value of {@link HttpHeadersProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link HttpHeadersProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link HttpHeadersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link HttpHeadersProperty#getValue}
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
             * @return a new instance of {@link HttpHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HttpHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpHeadersProperty {
            private final java.lang.Object name;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HttpHeadersProperty.Jsii$Proxy that = (HttpHeadersProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(InitialHeapSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InitialHeapSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InitialHeapSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InitialHeapSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InitialHeapSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link InitialHeapSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link InitialHeapSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link InitialHeapSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link InitialHeapSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InitialHeapSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InitialHeapSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InitialHeapSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InitialHeapSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InitialHeapSizeProperty.Jsii$Proxy that = (InitialHeapSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.JavaStartUpConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(JavaStartUpConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface JavaStartUpConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConcGcThreads() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomParams() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getG1HeapRegionSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGcLogFilePath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGcLogFileSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeapDumpOnOutOfMemoryError() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeapDumpPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInitialHeapSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxDirectMemorySize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxHeapSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxNewSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxPermSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNacosUseCloudNamespaceParsing() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNacosUseEndpointParsingRule() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNewRatio() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNewSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOldGarbageCollector() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getParallelGcThreads() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPermSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrintGc() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrintGcDateStamps() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSurvivorRatio() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getThreadStackSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUseGcLogFileRotation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getYoungGarbageCollector() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link JavaStartUpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link JavaStartUpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<JavaStartUpConfigProperty> {
            java.lang.Object concGcThreads;
            java.lang.Object customParams;
            java.lang.Object g1HeapRegionSize;
            java.lang.Object gcLogFilePath;
            java.lang.Object gcLogFileSize;
            java.lang.Object heapDumpOnOutOfMemoryError;
            java.lang.Object heapDumpPath;
            java.lang.Object initialHeapSize;
            java.lang.Object maxDirectMemorySize;
            java.lang.Object maxHeapSize;
            java.lang.Object maxNewSize;
            java.lang.Object maxPermSize;
            java.lang.Object nacosUseCloudNamespaceParsing;
            java.lang.Object nacosUseEndpointParsingRule;
            java.lang.Object newRatio;
            java.lang.Object newSize;
            java.lang.Object oldGarbageCollector;
            java.lang.Object parallelGcThreads;
            java.lang.Object permSize;
            java.lang.Object printGc;
            java.lang.Object printGcDateStamps;
            java.lang.Object survivorRatio;
            java.lang.Object threadStackSize;
            java.lang.Object useGcLogFileRotation;
            java.lang.Object youngGarbageCollector;

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getConcGcThreads}
             * @param concGcThreads the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder concGcThreads(com.aliyun.ros.cdk.core.IResolvable concGcThreads) {
                this.concGcThreads = concGcThreads;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getConcGcThreads}
             * @param concGcThreads the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder concGcThreads(com.aliyun.ros.cdk.edas.RosK8sApplication.ConcGCThreadsProperty concGcThreads) {
                this.concGcThreads = concGcThreads;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getCustomParams}
             * @param customParams the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customParams(com.aliyun.ros.cdk.core.IResolvable customParams) {
                this.customParams = customParams;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getCustomParams}
             * @param customParams the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customParams(com.aliyun.ros.cdk.edas.RosK8sApplication.CustomParamsProperty customParams) {
                this.customParams = customParams;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getG1HeapRegionSize}
             * @param g1HeapRegionSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder g1HeapRegionSize(com.aliyun.ros.cdk.core.IResolvable g1HeapRegionSize) {
                this.g1HeapRegionSize = g1HeapRegionSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getG1HeapRegionSize}
             * @param g1HeapRegionSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder g1HeapRegionSize(com.aliyun.ros.cdk.edas.RosK8sApplication.G1HeapRegionSizeProperty g1HeapRegionSize) {
                this.g1HeapRegionSize = g1HeapRegionSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getGcLogFilePath}
             * @param gcLogFilePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gcLogFilePath(com.aliyun.ros.cdk.core.IResolvable gcLogFilePath) {
                this.gcLogFilePath = gcLogFilePath;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getGcLogFilePath}
             * @param gcLogFilePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gcLogFilePath(com.aliyun.ros.cdk.edas.RosK8sApplication.GCLogFilePathProperty gcLogFilePath) {
                this.gcLogFilePath = gcLogFilePath;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getGcLogFileSize}
             * @param gcLogFileSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gcLogFileSize(com.aliyun.ros.cdk.core.IResolvable gcLogFileSize) {
                this.gcLogFileSize = gcLogFileSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getGcLogFileSize}
             * @param gcLogFileSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gcLogFileSize(com.aliyun.ros.cdk.edas.RosK8sApplication.GCLogFileSizeProperty gcLogFileSize) {
                this.gcLogFileSize = gcLogFileSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getHeapDumpOnOutOfMemoryError}
             * @param heapDumpOnOutOfMemoryError the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder heapDumpOnOutOfMemoryError(com.aliyun.ros.cdk.core.IResolvable heapDumpOnOutOfMemoryError) {
                this.heapDumpOnOutOfMemoryError = heapDumpOnOutOfMemoryError;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getHeapDumpOnOutOfMemoryError}
             * @param heapDumpOnOutOfMemoryError the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder heapDumpOnOutOfMemoryError(com.aliyun.ros.cdk.edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty heapDumpOnOutOfMemoryError) {
                this.heapDumpOnOutOfMemoryError = heapDumpOnOutOfMemoryError;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getHeapDumpPath}
             * @param heapDumpPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder heapDumpPath(com.aliyun.ros.cdk.core.IResolvable heapDumpPath) {
                this.heapDumpPath = heapDumpPath;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getHeapDumpPath}
             * @param heapDumpPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder heapDumpPath(com.aliyun.ros.cdk.edas.RosK8sApplication.HeapDumpPathProperty heapDumpPath) {
                this.heapDumpPath = heapDumpPath;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getInitialHeapSize}
             * @param initialHeapSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialHeapSize(com.aliyun.ros.cdk.core.IResolvable initialHeapSize) {
                this.initialHeapSize = initialHeapSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getInitialHeapSize}
             * @param initialHeapSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialHeapSize(com.aliyun.ros.cdk.edas.RosK8sApplication.InitialHeapSizeProperty initialHeapSize) {
                this.initialHeapSize = initialHeapSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getMaxDirectMemorySize}
             * @param maxDirectMemorySize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxDirectMemorySize(com.aliyun.ros.cdk.core.IResolvable maxDirectMemorySize) {
                this.maxDirectMemorySize = maxDirectMemorySize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getMaxDirectMemorySize}
             * @param maxDirectMemorySize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxDirectMemorySize(com.aliyun.ros.cdk.edas.RosK8sApplication.MaxDirectMemorySizeProperty maxDirectMemorySize) {
                this.maxDirectMemorySize = maxDirectMemorySize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getMaxHeapSize}
             * @param maxHeapSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxHeapSize(com.aliyun.ros.cdk.core.IResolvable maxHeapSize) {
                this.maxHeapSize = maxHeapSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getMaxHeapSize}
             * @param maxHeapSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxHeapSize(com.aliyun.ros.cdk.edas.RosK8sApplication.MaxHeapSizeProperty maxHeapSize) {
                this.maxHeapSize = maxHeapSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getMaxNewSize}
             * @param maxNewSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxNewSize(com.aliyun.ros.cdk.core.IResolvable maxNewSize) {
                this.maxNewSize = maxNewSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getMaxNewSize}
             * @param maxNewSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxNewSize(com.aliyun.ros.cdk.edas.RosK8sApplication.MaxNewSizeProperty maxNewSize) {
                this.maxNewSize = maxNewSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getMaxPermSize}
             * @param maxPermSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxPermSize(com.aliyun.ros.cdk.core.IResolvable maxPermSize) {
                this.maxPermSize = maxPermSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getMaxPermSize}
             * @param maxPermSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxPermSize(com.aliyun.ros.cdk.edas.RosK8sApplication.MaxPermSizeProperty maxPermSize) {
                this.maxPermSize = maxPermSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getNacosUseCloudNamespaceParsing}
             * @param nacosUseCloudNamespaceParsing the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nacosUseCloudNamespaceParsing(com.aliyun.ros.cdk.core.IResolvable nacosUseCloudNamespaceParsing) {
                this.nacosUseCloudNamespaceParsing = nacosUseCloudNamespaceParsing;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getNacosUseCloudNamespaceParsing}
             * @param nacosUseCloudNamespaceParsing the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nacosUseCloudNamespaceParsing(com.aliyun.ros.cdk.edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty nacosUseCloudNamespaceParsing) {
                this.nacosUseCloudNamespaceParsing = nacosUseCloudNamespaceParsing;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getNacosUseEndpointParsingRule}
             * @param nacosUseEndpointParsingRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nacosUseEndpointParsingRule(com.aliyun.ros.cdk.core.IResolvable nacosUseEndpointParsingRule) {
                this.nacosUseEndpointParsingRule = nacosUseEndpointParsingRule;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getNacosUseEndpointParsingRule}
             * @param nacosUseEndpointParsingRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nacosUseEndpointParsingRule(com.aliyun.ros.cdk.edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty nacosUseEndpointParsingRule) {
                this.nacosUseEndpointParsingRule = nacosUseEndpointParsingRule;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getNewRatio}
             * @param newRatio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newRatio(com.aliyun.ros.cdk.core.IResolvable newRatio) {
                this.newRatio = newRatio;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getNewRatio}
             * @param newRatio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newRatio(com.aliyun.ros.cdk.edas.RosK8sApplication.NewRatioProperty newRatio) {
                this.newRatio = newRatio;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getNewSize}
             * @param newSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newSize(com.aliyun.ros.cdk.core.IResolvable newSize) {
                this.newSize = newSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getNewSize}
             * @param newSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newSize(com.aliyun.ros.cdk.edas.RosK8sApplication.NewSizeProperty newSize) {
                this.newSize = newSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getOldGarbageCollector}
             * @param oldGarbageCollector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oldGarbageCollector(com.aliyun.ros.cdk.core.IResolvable oldGarbageCollector) {
                this.oldGarbageCollector = oldGarbageCollector;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getOldGarbageCollector}
             * @param oldGarbageCollector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oldGarbageCollector(com.aliyun.ros.cdk.edas.RosK8sApplication.OldGarbageCollectorProperty oldGarbageCollector) {
                this.oldGarbageCollector = oldGarbageCollector;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getParallelGcThreads}
             * @param parallelGcThreads the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parallelGcThreads(com.aliyun.ros.cdk.core.IResolvable parallelGcThreads) {
                this.parallelGcThreads = parallelGcThreads;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getParallelGcThreads}
             * @param parallelGcThreads the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parallelGcThreads(com.aliyun.ros.cdk.edas.RosK8sApplication.ParallelGCThreadsProperty parallelGcThreads) {
                this.parallelGcThreads = parallelGcThreads;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getPermSize}
             * @param permSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder permSize(com.aliyun.ros.cdk.core.IResolvable permSize) {
                this.permSize = permSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getPermSize}
             * @param permSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder permSize(com.aliyun.ros.cdk.edas.RosK8sApplication.PermSizeProperty permSize) {
                this.permSize = permSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getPrintGc}
             * @param printGc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder printGc(com.aliyun.ros.cdk.core.IResolvable printGc) {
                this.printGc = printGc;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getPrintGc}
             * @param printGc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder printGc(com.aliyun.ros.cdk.edas.RosK8sApplication.PrintGCProperty printGc) {
                this.printGc = printGc;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getPrintGcDateStamps}
             * @param printGcDateStamps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder printGcDateStamps(com.aliyun.ros.cdk.core.IResolvable printGcDateStamps) {
                this.printGcDateStamps = printGcDateStamps;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getPrintGcDateStamps}
             * @param printGcDateStamps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder printGcDateStamps(com.aliyun.ros.cdk.edas.RosK8sApplication.PrintGCDateStampsProperty printGcDateStamps) {
                this.printGcDateStamps = printGcDateStamps;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getSurvivorRatio}
             * @param survivorRatio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder survivorRatio(com.aliyun.ros.cdk.core.IResolvable survivorRatio) {
                this.survivorRatio = survivorRatio;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getSurvivorRatio}
             * @param survivorRatio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder survivorRatio(com.aliyun.ros.cdk.edas.RosK8sApplication.SurvivorRatioProperty survivorRatio) {
                this.survivorRatio = survivorRatio;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getThreadStackSize}
             * @param threadStackSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threadStackSize(com.aliyun.ros.cdk.core.IResolvable threadStackSize) {
                this.threadStackSize = threadStackSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getThreadStackSize}
             * @param threadStackSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threadStackSize(com.aliyun.ros.cdk.edas.RosK8sApplication.ThreadStackSizeProperty threadStackSize) {
                this.threadStackSize = threadStackSize;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getUseGcLogFileRotation}
             * @param useGcLogFileRotation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useGcLogFileRotation(com.aliyun.ros.cdk.core.IResolvable useGcLogFileRotation) {
                this.useGcLogFileRotation = useGcLogFileRotation;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getUseGcLogFileRotation}
             * @param useGcLogFileRotation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useGcLogFileRotation(com.aliyun.ros.cdk.edas.RosK8sApplication.UseGCLogFileRotationProperty useGcLogFileRotation) {
                this.useGcLogFileRotation = useGcLogFileRotation;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getYoungGarbageCollector}
             * @param youngGarbageCollector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder youngGarbageCollector(com.aliyun.ros.cdk.core.IResolvable youngGarbageCollector) {
                this.youngGarbageCollector = youngGarbageCollector;
                return this;
            }

            /**
             * Sets the value of {@link JavaStartUpConfigProperty#getYoungGarbageCollector}
             * @param youngGarbageCollector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder youngGarbageCollector(com.aliyun.ros.cdk.edas.RosK8sApplication.YoungGarbageCollectorProperty youngGarbageCollector) {
                this.youngGarbageCollector = youngGarbageCollector;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link JavaStartUpConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public JavaStartUpConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link JavaStartUpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JavaStartUpConfigProperty {
            private final java.lang.Object concGcThreads;
            private final java.lang.Object customParams;
            private final java.lang.Object g1HeapRegionSize;
            private final java.lang.Object gcLogFilePath;
            private final java.lang.Object gcLogFileSize;
            private final java.lang.Object heapDumpOnOutOfMemoryError;
            private final java.lang.Object heapDumpPath;
            private final java.lang.Object initialHeapSize;
            private final java.lang.Object maxDirectMemorySize;
            private final java.lang.Object maxHeapSize;
            private final java.lang.Object maxNewSize;
            private final java.lang.Object maxPermSize;
            private final java.lang.Object nacosUseCloudNamespaceParsing;
            private final java.lang.Object nacosUseEndpointParsingRule;
            private final java.lang.Object newRatio;
            private final java.lang.Object newSize;
            private final java.lang.Object oldGarbageCollector;
            private final java.lang.Object parallelGcThreads;
            private final java.lang.Object permSize;
            private final java.lang.Object printGc;
            private final java.lang.Object printGcDateStamps;
            private final java.lang.Object survivorRatio;
            private final java.lang.Object threadStackSize;
            private final java.lang.Object useGcLogFileRotation;
            private final java.lang.Object youngGarbageCollector;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.concGcThreads = software.amazon.jsii.Kernel.get(this, "concGcThreads", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.customParams = software.amazon.jsii.Kernel.get(this, "customParams", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.g1HeapRegionSize = software.amazon.jsii.Kernel.get(this, "g1HeapRegionSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gcLogFilePath = software.amazon.jsii.Kernel.get(this, "gcLogFilePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gcLogFileSize = software.amazon.jsii.Kernel.get(this, "gcLogFileSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.heapDumpOnOutOfMemoryError = software.amazon.jsii.Kernel.get(this, "heapDumpOnOutOfMemoryError", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.heapDumpPath = software.amazon.jsii.Kernel.get(this, "heapDumpPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.initialHeapSize = software.amazon.jsii.Kernel.get(this, "initialHeapSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxDirectMemorySize = software.amazon.jsii.Kernel.get(this, "maxDirectMemorySize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxHeapSize = software.amazon.jsii.Kernel.get(this, "maxHeapSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxNewSize = software.amazon.jsii.Kernel.get(this, "maxNewSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxPermSize = software.amazon.jsii.Kernel.get(this, "maxPermSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nacosUseCloudNamespaceParsing = software.amazon.jsii.Kernel.get(this, "nacosUseCloudNamespaceParsing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nacosUseEndpointParsingRule = software.amazon.jsii.Kernel.get(this, "nacosUseEndpointParsingRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.newRatio = software.amazon.jsii.Kernel.get(this, "newRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.newSize = software.amazon.jsii.Kernel.get(this, "newSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.oldGarbageCollector = software.amazon.jsii.Kernel.get(this, "oldGarbageCollector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parallelGcThreads = software.amazon.jsii.Kernel.get(this, "parallelGcThreads", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.permSize = software.amazon.jsii.Kernel.get(this, "permSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.printGc = software.amazon.jsii.Kernel.get(this, "printGc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.printGcDateStamps = software.amazon.jsii.Kernel.get(this, "printGcDateStamps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.survivorRatio = software.amazon.jsii.Kernel.get(this, "survivorRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threadStackSize = software.amazon.jsii.Kernel.get(this, "threadStackSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.useGcLogFileRotation = software.amazon.jsii.Kernel.get(this, "useGcLogFileRotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.youngGarbageCollector = software.amazon.jsii.Kernel.get(this, "youngGarbageCollector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.concGcThreads = builder.concGcThreads;
                this.customParams = builder.customParams;
                this.g1HeapRegionSize = builder.g1HeapRegionSize;
                this.gcLogFilePath = builder.gcLogFilePath;
                this.gcLogFileSize = builder.gcLogFileSize;
                this.heapDumpOnOutOfMemoryError = builder.heapDumpOnOutOfMemoryError;
                this.heapDumpPath = builder.heapDumpPath;
                this.initialHeapSize = builder.initialHeapSize;
                this.maxDirectMemorySize = builder.maxDirectMemorySize;
                this.maxHeapSize = builder.maxHeapSize;
                this.maxNewSize = builder.maxNewSize;
                this.maxPermSize = builder.maxPermSize;
                this.nacosUseCloudNamespaceParsing = builder.nacosUseCloudNamespaceParsing;
                this.nacosUseEndpointParsingRule = builder.nacosUseEndpointParsingRule;
                this.newRatio = builder.newRatio;
                this.newSize = builder.newSize;
                this.oldGarbageCollector = builder.oldGarbageCollector;
                this.parallelGcThreads = builder.parallelGcThreads;
                this.permSize = builder.permSize;
                this.printGc = builder.printGc;
                this.printGcDateStamps = builder.printGcDateStamps;
                this.survivorRatio = builder.survivorRatio;
                this.threadStackSize = builder.threadStackSize;
                this.useGcLogFileRotation = builder.useGcLogFileRotation;
                this.youngGarbageCollector = builder.youngGarbageCollector;
            }

            @Override
            public final java.lang.Object getConcGcThreads() {
                return this.concGcThreads;
            }

            @Override
            public final java.lang.Object getCustomParams() {
                return this.customParams;
            }

            @Override
            public final java.lang.Object getG1HeapRegionSize() {
                return this.g1HeapRegionSize;
            }

            @Override
            public final java.lang.Object getGcLogFilePath() {
                return this.gcLogFilePath;
            }

            @Override
            public final java.lang.Object getGcLogFileSize() {
                return this.gcLogFileSize;
            }

            @Override
            public final java.lang.Object getHeapDumpOnOutOfMemoryError() {
                return this.heapDumpOnOutOfMemoryError;
            }

            @Override
            public final java.lang.Object getHeapDumpPath() {
                return this.heapDumpPath;
            }

            @Override
            public final java.lang.Object getInitialHeapSize() {
                return this.initialHeapSize;
            }

            @Override
            public final java.lang.Object getMaxDirectMemorySize() {
                return this.maxDirectMemorySize;
            }

            @Override
            public final java.lang.Object getMaxHeapSize() {
                return this.maxHeapSize;
            }

            @Override
            public final java.lang.Object getMaxNewSize() {
                return this.maxNewSize;
            }

            @Override
            public final java.lang.Object getMaxPermSize() {
                return this.maxPermSize;
            }

            @Override
            public final java.lang.Object getNacosUseCloudNamespaceParsing() {
                return this.nacosUseCloudNamespaceParsing;
            }

            @Override
            public final java.lang.Object getNacosUseEndpointParsingRule() {
                return this.nacosUseEndpointParsingRule;
            }

            @Override
            public final java.lang.Object getNewRatio() {
                return this.newRatio;
            }

            @Override
            public final java.lang.Object getNewSize() {
                return this.newSize;
            }

            @Override
            public final java.lang.Object getOldGarbageCollector() {
                return this.oldGarbageCollector;
            }

            @Override
            public final java.lang.Object getParallelGcThreads() {
                return this.parallelGcThreads;
            }

            @Override
            public final java.lang.Object getPermSize() {
                return this.permSize;
            }

            @Override
            public final java.lang.Object getPrintGc() {
                return this.printGc;
            }

            @Override
            public final java.lang.Object getPrintGcDateStamps() {
                return this.printGcDateStamps;
            }

            @Override
            public final java.lang.Object getSurvivorRatio() {
                return this.survivorRatio;
            }

            @Override
            public final java.lang.Object getThreadStackSize() {
                return this.threadStackSize;
            }

            @Override
            public final java.lang.Object getUseGcLogFileRotation() {
                return this.useGcLogFileRotation;
            }

            @Override
            public final java.lang.Object getYoungGarbageCollector() {
                return this.youngGarbageCollector;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConcGcThreads() != null) {
                    data.set("concGcThreads", om.valueToTree(this.getConcGcThreads()));
                }
                if (this.getCustomParams() != null) {
                    data.set("customParams", om.valueToTree(this.getCustomParams()));
                }
                if (this.getG1HeapRegionSize() != null) {
                    data.set("g1HeapRegionSize", om.valueToTree(this.getG1HeapRegionSize()));
                }
                if (this.getGcLogFilePath() != null) {
                    data.set("gcLogFilePath", om.valueToTree(this.getGcLogFilePath()));
                }
                if (this.getGcLogFileSize() != null) {
                    data.set("gcLogFileSize", om.valueToTree(this.getGcLogFileSize()));
                }
                if (this.getHeapDumpOnOutOfMemoryError() != null) {
                    data.set("heapDumpOnOutOfMemoryError", om.valueToTree(this.getHeapDumpOnOutOfMemoryError()));
                }
                if (this.getHeapDumpPath() != null) {
                    data.set("heapDumpPath", om.valueToTree(this.getHeapDumpPath()));
                }
                if (this.getInitialHeapSize() != null) {
                    data.set("initialHeapSize", om.valueToTree(this.getInitialHeapSize()));
                }
                if (this.getMaxDirectMemorySize() != null) {
                    data.set("maxDirectMemorySize", om.valueToTree(this.getMaxDirectMemorySize()));
                }
                if (this.getMaxHeapSize() != null) {
                    data.set("maxHeapSize", om.valueToTree(this.getMaxHeapSize()));
                }
                if (this.getMaxNewSize() != null) {
                    data.set("maxNewSize", om.valueToTree(this.getMaxNewSize()));
                }
                if (this.getMaxPermSize() != null) {
                    data.set("maxPermSize", om.valueToTree(this.getMaxPermSize()));
                }
                if (this.getNacosUseCloudNamespaceParsing() != null) {
                    data.set("nacosUseCloudNamespaceParsing", om.valueToTree(this.getNacosUseCloudNamespaceParsing()));
                }
                if (this.getNacosUseEndpointParsingRule() != null) {
                    data.set("nacosUseEndpointParsingRule", om.valueToTree(this.getNacosUseEndpointParsingRule()));
                }
                if (this.getNewRatio() != null) {
                    data.set("newRatio", om.valueToTree(this.getNewRatio()));
                }
                if (this.getNewSize() != null) {
                    data.set("newSize", om.valueToTree(this.getNewSize()));
                }
                if (this.getOldGarbageCollector() != null) {
                    data.set("oldGarbageCollector", om.valueToTree(this.getOldGarbageCollector()));
                }
                if (this.getParallelGcThreads() != null) {
                    data.set("parallelGcThreads", om.valueToTree(this.getParallelGcThreads()));
                }
                if (this.getPermSize() != null) {
                    data.set("permSize", om.valueToTree(this.getPermSize()));
                }
                if (this.getPrintGc() != null) {
                    data.set("printGc", om.valueToTree(this.getPrintGc()));
                }
                if (this.getPrintGcDateStamps() != null) {
                    data.set("printGcDateStamps", om.valueToTree(this.getPrintGcDateStamps()));
                }
                if (this.getSurvivorRatio() != null) {
                    data.set("survivorRatio", om.valueToTree(this.getSurvivorRatio()));
                }
                if (this.getThreadStackSize() != null) {
                    data.set("threadStackSize", om.valueToTree(this.getThreadStackSize()));
                }
                if (this.getUseGcLogFileRotation() != null) {
                    data.set("useGcLogFileRotation", om.valueToTree(this.getUseGcLogFileRotation()));
                }
                if (this.getYoungGarbageCollector() != null) {
                    data.set("youngGarbageCollector", om.valueToTree(this.getYoungGarbageCollector()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.JavaStartUpConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                JavaStartUpConfigProperty.Jsii$Proxy that = (JavaStartUpConfigProperty.Jsii$Proxy) o;

                if (this.concGcThreads != null ? !this.concGcThreads.equals(that.concGcThreads) : that.concGcThreads != null) return false;
                if (this.customParams != null ? !this.customParams.equals(that.customParams) : that.customParams != null) return false;
                if (this.g1HeapRegionSize != null ? !this.g1HeapRegionSize.equals(that.g1HeapRegionSize) : that.g1HeapRegionSize != null) return false;
                if (this.gcLogFilePath != null ? !this.gcLogFilePath.equals(that.gcLogFilePath) : that.gcLogFilePath != null) return false;
                if (this.gcLogFileSize != null ? !this.gcLogFileSize.equals(that.gcLogFileSize) : that.gcLogFileSize != null) return false;
                if (this.heapDumpOnOutOfMemoryError != null ? !this.heapDumpOnOutOfMemoryError.equals(that.heapDumpOnOutOfMemoryError) : that.heapDumpOnOutOfMemoryError != null) return false;
                if (this.heapDumpPath != null ? !this.heapDumpPath.equals(that.heapDumpPath) : that.heapDumpPath != null) return false;
                if (this.initialHeapSize != null ? !this.initialHeapSize.equals(that.initialHeapSize) : that.initialHeapSize != null) return false;
                if (this.maxDirectMemorySize != null ? !this.maxDirectMemorySize.equals(that.maxDirectMemorySize) : that.maxDirectMemorySize != null) return false;
                if (this.maxHeapSize != null ? !this.maxHeapSize.equals(that.maxHeapSize) : that.maxHeapSize != null) return false;
                if (this.maxNewSize != null ? !this.maxNewSize.equals(that.maxNewSize) : that.maxNewSize != null) return false;
                if (this.maxPermSize != null ? !this.maxPermSize.equals(that.maxPermSize) : that.maxPermSize != null) return false;
                if (this.nacosUseCloudNamespaceParsing != null ? !this.nacosUseCloudNamespaceParsing.equals(that.nacosUseCloudNamespaceParsing) : that.nacosUseCloudNamespaceParsing != null) return false;
                if (this.nacosUseEndpointParsingRule != null ? !this.nacosUseEndpointParsingRule.equals(that.nacosUseEndpointParsingRule) : that.nacosUseEndpointParsingRule != null) return false;
                if (this.newRatio != null ? !this.newRatio.equals(that.newRatio) : that.newRatio != null) return false;
                if (this.newSize != null ? !this.newSize.equals(that.newSize) : that.newSize != null) return false;
                if (this.oldGarbageCollector != null ? !this.oldGarbageCollector.equals(that.oldGarbageCollector) : that.oldGarbageCollector != null) return false;
                if (this.parallelGcThreads != null ? !this.parallelGcThreads.equals(that.parallelGcThreads) : that.parallelGcThreads != null) return false;
                if (this.permSize != null ? !this.permSize.equals(that.permSize) : that.permSize != null) return false;
                if (this.printGc != null ? !this.printGc.equals(that.printGc) : that.printGc != null) return false;
                if (this.printGcDateStamps != null ? !this.printGcDateStamps.equals(that.printGcDateStamps) : that.printGcDateStamps != null) return false;
                if (this.survivorRatio != null ? !this.survivorRatio.equals(that.survivorRatio) : that.survivorRatio != null) return false;
                if (this.threadStackSize != null ? !this.threadStackSize.equals(that.threadStackSize) : that.threadStackSize != null) return false;
                if (this.useGcLogFileRotation != null ? !this.useGcLogFileRotation.equals(that.useGcLogFileRotation) : that.useGcLogFileRotation != null) return false;
                return this.youngGarbageCollector != null ? this.youngGarbageCollector.equals(that.youngGarbageCollector) : that.youngGarbageCollector == null;
            }

            @Override
            public final int hashCode() {
                int result = this.concGcThreads != null ? this.concGcThreads.hashCode() : 0;
                result = 31 * result + (this.customParams != null ? this.customParams.hashCode() : 0);
                result = 31 * result + (this.g1HeapRegionSize != null ? this.g1HeapRegionSize.hashCode() : 0);
                result = 31 * result + (this.gcLogFilePath != null ? this.gcLogFilePath.hashCode() : 0);
                result = 31 * result + (this.gcLogFileSize != null ? this.gcLogFileSize.hashCode() : 0);
                result = 31 * result + (this.heapDumpOnOutOfMemoryError != null ? this.heapDumpOnOutOfMemoryError.hashCode() : 0);
                result = 31 * result + (this.heapDumpPath != null ? this.heapDumpPath.hashCode() : 0);
                result = 31 * result + (this.initialHeapSize != null ? this.initialHeapSize.hashCode() : 0);
                result = 31 * result + (this.maxDirectMemorySize != null ? this.maxDirectMemorySize.hashCode() : 0);
                result = 31 * result + (this.maxHeapSize != null ? this.maxHeapSize.hashCode() : 0);
                result = 31 * result + (this.maxNewSize != null ? this.maxNewSize.hashCode() : 0);
                result = 31 * result + (this.maxPermSize != null ? this.maxPermSize.hashCode() : 0);
                result = 31 * result + (this.nacosUseCloudNamespaceParsing != null ? this.nacosUseCloudNamespaceParsing.hashCode() : 0);
                result = 31 * result + (this.nacosUseEndpointParsingRule != null ? this.nacosUseEndpointParsingRule.hashCode() : 0);
                result = 31 * result + (this.newRatio != null ? this.newRatio.hashCode() : 0);
                result = 31 * result + (this.newSize != null ? this.newSize.hashCode() : 0);
                result = 31 * result + (this.oldGarbageCollector != null ? this.oldGarbageCollector.hashCode() : 0);
                result = 31 * result + (this.parallelGcThreads != null ? this.parallelGcThreads.hashCode() : 0);
                result = 31 * result + (this.permSize != null ? this.permSize.hashCode() : 0);
                result = 31 * result + (this.printGc != null ? this.printGc.hashCode() : 0);
                result = 31 * result + (this.printGcDateStamps != null ? this.printGcDateStamps.hashCode() : 0);
                result = 31 * result + (this.survivorRatio != null ? this.survivorRatio.hashCode() : 0);
                result = 31 * result + (this.threadStackSize != null ? this.threadStackSize.hashCode() : 0);
                result = 31 * result + (this.useGcLogFileRotation != null ? this.useGcLogFileRotation.hashCode() : 0);
                result = 31 * result + (this.youngGarbageCollector != null ? this.youngGarbageCollector.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.LivenessProperty")
    @software.amazon.jsii.Jsii.Proxy(LivenessProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LivenessProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExec() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFailureThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpGet() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInitialDelaySeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSuccessThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTcpSocket() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LivenessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LivenessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LivenessProperty> {
            java.lang.Object exec;
            java.lang.Object failureThreshold;
            java.lang.Object httpGet;
            java.lang.Object initialDelaySeconds;
            java.lang.Object periodSeconds;
            java.lang.Object successThreshold;
            java.lang.Object tcpSocket;
            java.lang.Object timeoutSeconds;

            /**
             * Sets the value of {@link LivenessProperty#getExec}
             * @param exec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exec(com.aliyun.ros.cdk.core.IResolvable exec) {
                this.exec = exec;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getExec}
             * @param exec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exec(com.aliyun.ros.cdk.edas.RosK8sApplication.ExecProperty exec) {
                this.exec = exec;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(java.lang.Number failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(com.aliyun.ros.cdk.core.IResolvable failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getHttpGet}
             * @param httpGet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGet(com.aliyun.ros.cdk.core.IResolvable httpGet) {
                this.httpGet = httpGet;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getHttpGet}
             * @param httpGet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGet(com.aliyun.ros.cdk.edas.RosK8sApplication.HttpGetProperty httpGet) {
                this.httpGet = httpGet;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(java.lang.Number initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(com.aliyun.ros.cdk.core.IResolvable initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(java.lang.Number periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(com.aliyun.ros.cdk.core.IResolvable periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(java.lang.Number successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(com.aliyun.ros.cdk.core.IResolvable successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getTcpSocket}
             * @param tcpSocket the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tcpSocket(com.aliyun.ros.cdk.core.IResolvable tcpSocket) {
                this.tcpSocket = tcpSocket;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getTcpSocket}
             * @param tcpSocket the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tcpSocket(com.aliyun.ros.cdk.edas.RosK8sApplication.TcpSocketProperty tcpSocket) {
                this.tcpSocket = tcpSocket;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(java.lang.Number timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link LivenessProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(com.aliyun.ros.cdk.core.IResolvable timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LivenessProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LivenessProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LivenessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LivenessProperty {
            private final java.lang.Object exec;
            private final java.lang.Object failureThreshold;
            private final java.lang.Object httpGet;
            private final java.lang.Object initialDelaySeconds;
            private final java.lang.Object periodSeconds;
            private final java.lang.Object successThreshold;
            private final java.lang.Object tcpSocket;
            private final java.lang.Object timeoutSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.exec = software.amazon.jsii.Kernel.get(this, "exec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.failureThreshold = software.amazon.jsii.Kernel.get(this, "failureThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpGet = software.amazon.jsii.Kernel.get(this, "httpGet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.initialDelaySeconds = software.amazon.jsii.Kernel.get(this, "initialDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.periodSeconds = software.amazon.jsii.Kernel.get(this, "periodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.successThreshold = software.amazon.jsii.Kernel.get(this, "successThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tcpSocket = software.amazon.jsii.Kernel.get(this, "tcpSocket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeoutSeconds = software.amazon.jsii.Kernel.get(this, "timeoutSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.exec = builder.exec;
                this.failureThreshold = builder.failureThreshold;
                this.httpGet = builder.httpGet;
                this.initialDelaySeconds = builder.initialDelaySeconds;
                this.periodSeconds = builder.periodSeconds;
                this.successThreshold = builder.successThreshold;
                this.tcpSocket = builder.tcpSocket;
                this.timeoutSeconds = builder.timeoutSeconds;
            }

            @Override
            public final java.lang.Object getExec() {
                return this.exec;
            }

            @Override
            public final java.lang.Object getFailureThreshold() {
                return this.failureThreshold;
            }

            @Override
            public final java.lang.Object getHttpGet() {
                return this.httpGet;
            }

            @Override
            public final java.lang.Object getInitialDelaySeconds() {
                return this.initialDelaySeconds;
            }

            @Override
            public final java.lang.Object getPeriodSeconds() {
                return this.periodSeconds;
            }

            @Override
            public final java.lang.Object getSuccessThreshold() {
                return this.successThreshold;
            }

            @Override
            public final java.lang.Object getTcpSocket() {
                return this.tcpSocket;
            }

            @Override
            public final java.lang.Object getTimeoutSeconds() {
                return this.timeoutSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getExec() != null) {
                    data.set("exec", om.valueToTree(this.getExec()));
                }
                if (this.getFailureThreshold() != null) {
                    data.set("failureThreshold", om.valueToTree(this.getFailureThreshold()));
                }
                if (this.getHttpGet() != null) {
                    data.set("httpGet", om.valueToTree(this.getHttpGet()));
                }
                if (this.getInitialDelaySeconds() != null) {
                    data.set("initialDelaySeconds", om.valueToTree(this.getInitialDelaySeconds()));
                }
                if (this.getPeriodSeconds() != null) {
                    data.set("periodSeconds", om.valueToTree(this.getPeriodSeconds()));
                }
                if (this.getSuccessThreshold() != null) {
                    data.set("successThreshold", om.valueToTree(this.getSuccessThreshold()));
                }
                if (this.getTcpSocket() != null) {
                    data.set("tcpSocket", om.valueToTree(this.getTcpSocket()));
                }
                if (this.getTimeoutSeconds() != null) {
                    data.set("timeoutSeconds", om.valueToTree(this.getTimeoutSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.LivenessProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LivenessProperty.Jsii$Proxy that = (LivenessProperty.Jsii$Proxy) o;

                if (this.exec != null ? !this.exec.equals(that.exec) : that.exec != null) return false;
                if (this.failureThreshold != null ? !this.failureThreshold.equals(that.failureThreshold) : that.failureThreshold != null) return false;
                if (this.httpGet != null ? !this.httpGet.equals(that.httpGet) : that.httpGet != null) return false;
                if (this.initialDelaySeconds != null ? !this.initialDelaySeconds.equals(that.initialDelaySeconds) : that.initialDelaySeconds != null) return false;
                if (this.periodSeconds != null ? !this.periodSeconds.equals(that.periodSeconds) : that.periodSeconds != null) return false;
                if (this.successThreshold != null ? !this.successThreshold.equals(that.successThreshold) : that.successThreshold != null) return false;
                if (this.tcpSocket != null ? !this.tcpSocket.equals(that.tcpSocket) : that.tcpSocket != null) return false;
                return this.timeoutSeconds != null ? this.timeoutSeconds.equals(that.timeoutSeconds) : that.timeoutSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.exec != null ? this.exec.hashCode() : 0;
                result = 31 * result + (this.failureThreshold != null ? this.failureThreshold.hashCode() : 0);
                result = 31 * result + (this.httpGet != null ? this.httpGet.hashCode() : 0);
                result = 31 * result + (this.initialDelaySeconds != null ? this.initialDelaySeconds.hashCode() : 0);
                result = 31 * result + (this.periodSeconds != null ? this.periodSeconds.hashCode() : 0);
                result = 31 * result + (this.successThreshold != null ? this.successThreshold.hashCode() : 0);
                result = 31 * result + (this.tcpSocket != null ? this.tcpSocket.hashCode() : 0);
                result = 31 * result + (this.timeoutSeconds != null ? this.timeoutSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.LocalVolumeProperty")
    @software.amazon.jsii.Jsii.Proxy(LocalVolumeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LocalVolumeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodePath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LocalVolumeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LocalVolumeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LocalVolumeProperty> {
            java.lang.Object mountPath;
            java.lang.Object nodePath;
            java.lang.Object type;

            /**
             * Sets the value of {@link LocalVolumeProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(java.lang.String mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link LocalVolumeProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(com.aliyun.ros.cdk.core.IResolvable mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link LocalVolumeProperty#getNodePath}
             * @param nodePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodePath(java.lang.String nodePath) {
                this.nodePath = nodePath;
                return this;
            }

            /**
             * Sets the value of {@link LocalVolumeProperty#getNodePath}
             * @param nodePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodePath(com.aliyun.ros.cdk.core.IResolvable nodePath) {
                this.nodePath = nodePath;
                return this;
            }

            /**
             * Sets the value of {@link LocalVolumeProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link LocalVolumeProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LocalVolumeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LocalVolumeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LocalVolumeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LocalVolumeProperty {
            private final java.lang.Object mountPath;
            private final java.lang.Object nodePath;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.mountPath = software.amazon.jsii.Kernel.get(this, "mountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodePath = software.amazon.jsii.Kernel.get(this, "nodePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.mountPath = builder.mountPath;
                this.nodePath = builder.nodePath;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getMountPath() {
                return this.mountPath;
            }

            @Override
            public final java.lang.Object getNodePath() {
                return this.nodePath;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMountPath() != null) {
                    data.set("mountPath", om.valueToTree(this.getMountPath()));
                }
                if (this.getNodePath() != null) {
                    data.set("nodePath", om.valueToTree(this.getNodePath()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.LocalVolumeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LocalVolumeProperty.Jsii$Proxy that = (LocalVolumeProperty.Jsii$Proxy) o;

                if (this.mountPath != null ? !this.mountPath.equals(that.mountPath) : that.mountPath != null) return false;
                if (this.nodePath != null ? !this.nodePath.equals(that.nodePath) : that.nodePath != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.mountPath != null ? this.mountPath.hashCode() : 0;
                result = 31 * result + (this.nodePath != null ? this.nodePath.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty")
    @software.amazon.jsii.Jsii.Proxy(MaxDirectMemorySizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MaxDirectMemorySizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MaxDirectMemorySizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MaxDirectMemorySizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MaxDirectMemorySizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link MaxDirectMemorySizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link MaxDirectMemorySizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link MaxDirectMemorySizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link MaxDirectMemorySizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MaxDirectMemorySizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MaxDirectMemorySizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MaxDirectMemorySizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MaxDirectMemorySizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MaxDirectMemorySizeProperty.Jsii$Proxy that = (MaxDirectMemorySizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(MaxHeapSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MaxHeapSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MaxHeapSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MaxHeapSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MaxHeapSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link MaxHeapSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link MaxHeapSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link MaxHeapSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link MaxHeapSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MaxHeapSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MaxHeapSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MaxHeapSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MaxHeapSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MaxHeapSizeProperty.Jsii$Proxy that = (MaxHeapSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(MaxNewSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MaxNewSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MaxNewSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MaxNewSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MaxNewSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link MaxNewSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link MaxNewSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link MaxNewSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link MaxNewSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MaxNewSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MaxNewSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MaxNewSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MaxNewSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MaxNewSizeProperty.Jsii$Proxy that = (MaxNewSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(MaxPermSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MaxPermSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MaxPermSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MaxPermSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MaxPermSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link MaxPermSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link MaxPermSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link MaxPermSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link MaxPermSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MaxPermSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MaxPermSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MaxPermSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MaxPermSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MaxPermSizeProperty.Jsii$Proxy that = (MaxPermSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.MountDescsProperty")
    @software.amazon.jsii.Jsii.Proxy(MountDescsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MountDescsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNasPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MountDescsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MountDescsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MountDescsProperty> {
            java.lang.Object mountPath;
            java.lang.Object nasPath;

            /**
             * Sets the value of {@link MountDescsProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(java.lang.String mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link MountDescsProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(com.aliyun.ros.cdk.core.IResolvable mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link MountDescsProperty#getNasPath}
             * @param nasPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasPath(java.lang.String nasPath) {
                this.nasPath = nasPath;
                return this;
            }

            /**
             * Sets the value of {@link MountDescsProperty#getNasPath}
             * @param nasPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nasPath(com.aliyun.ros.cdk.core.IResolvable nasPath) {
                this.nasPath = nasPath;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MountDescsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MountDescsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MountDescsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MountDescsProperty {
            private final java.lang.Object mountPath;
            private final java.lang.Object nasPath;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.mountPath = software.amazon.jsii.Kernel.get(this, "mountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nasPath = software.amazon.jsii.Kernel.get(this, "nasPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.mountPath = builder.mountPath;
                this.nasPath = builder.nasPath;
            }

            @Override
            public final java.lang.Object getMountPath() {
                return this.mountPath;
            }

            @Override
            public final java.lang.Object getNasPath() {
                return this.nasPath;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMountPath() != null) {
                    data.set("mountPath", om.valueToTree(this.getMountPath()));
                }
                if (this.getNasPath() != null) {
                    data.set("nasPath", om.valueToTree(this.getNasPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.MountDescsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MountDescsProperty.Jsii$Proxy that = (MountDescsProperty.Jsii$Proxy) o;

                if (this.mountPath != null ? !this.mountPath.equals(that.mountPath) : that.mountPath != null) return false;
                return this.nasPath != null ? this.nasPath.equals(that.nasPath) : that.nasPath == null;
            }

            @Override
            public final int hashCode() {
                int result = this.mountPath != null ? this.mountPath.hashCode() : 0;
                result = 31 * result + (this.nasPath != null ? this.nasPath.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty")
    @software.amazon.jsii.Jsii.Proxy(NacosUseCloudNamespaceParsingProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NacosUseCloudNamespaceParsingProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NacosUseCloudNamespaceParsingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NacosUseCloudNamespaceParsingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NacosUseCloudNamespaceParsingProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link NacosUseCloudNamespaceParsingProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Boolean original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link NacosUseCloudNamespaceParsingProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link NacosUseCloudNamespaceParsingProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link NacosUseCloudNamespaceParsingProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NacosUseCloudNamespaceParsingProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NacosUseCloudNamespaceParsingProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NacosUseCloudNamespaceParsingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NacosUseCloudNamespaceParsingProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NacosUseCloudNamespaceParsingProperty.Jsii$Proxy that = (NacosUseCloudNamespaceParsingProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty")
    @software.amazon.jsii.Jsii.Proxy(NacosUseEndpointParsingRuleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NacosUseEndpointParsingRuleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NacosUseEndpointParsingRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NacosUseEndpointParsingRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NacosUseEndpointParsingRuleProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link NacosUseEndpointParsingRuleProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Boolean original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link NacosUseEndpointParsingRuleProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link NacosUseEndpointParsingRuleProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link NacosUseEndpointParsingRuleProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NacosUseEndpointParsingRuleProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NacosUseEndpointParsingRuleProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NacosUseEndpointParsingRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NacosUseEndpointParsingRuleProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NacosUseEndpointParsingRuleProperty.Jsii$Proxy that = (NacosUseEndpointParsingRuleProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty")
    @software.amazon.jsii.Jsii.Proxy(NewRatioProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NewRatioProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NewRatioProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NewRatioProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NewRatioProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link NewRatioProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link NewRatioProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link NewRatioProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link NewRatioProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NewRatioProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NewRatioProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NewRatioProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NewRatioProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NewRatioProperty.Jsii$Proxy that = (NewRatioProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(NewSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NewSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NewSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NewSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NewSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link NewSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link NewSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link NewSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link NewSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NewSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NewSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NewSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NewSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NewSizeProperty.Jsii$Proxy that = (NewSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty")
    @software.amazon.jsii.Jsii.Proxy(OldGarbageCollectorProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OldGarbageCollectorProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OldGarbageCollectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OldGarbageCollectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OldGarbageCollectorProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link OldGarbageCollectorProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.String original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link OldGarbageCollectorProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link OldGarbageCollectorProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link OldGarbageCollectorProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OldGarbageCollectorProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OldGarbageCollectorProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OldGarbageCollectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OldGarbageCollectorProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OldGarbageCollectorProperty.Jsii$Proxy that = (OldGarbageCollectorProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty")
    @software.amazon.jsii.Jsii.Proxy(ParallelGCThreadsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ParallelGCThreadsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ParallelGCThreadsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ParallelGCThreadsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ParallelGCThreadsProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link ParallelGCThreadsProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link ParallelGCThreadsProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link ParallelGCThreadsProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link ParallelGCThreadsProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ParallelGCThreadsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ParallelGCThreadsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ParallelGCThreadsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ParallelGCThreadsProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ParallelGCThreadsProperty.Jsii$Proxy that = (ParallelGCThreadsProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(PermSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PermSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PermSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PermSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PermSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link PermSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link PermSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link PermSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link PermSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PermSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PermSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PermSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PermSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PermSizeProperty.Jsii$Proxy that = (PermSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty")
    @software.amazon.jsii.Jsii.Proxy(PostStartExecProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PostStartExecProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PostStartExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PostStartExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PostStartExecProperty> {
            java.lang.Object command;

            /**
             * Sets the value of {@link PostStartExecProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link PostStartExecProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<? extends java.lang.Object> command) {
                this.command = command;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PostStartExecProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PostStartExecProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PostStartExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PostStartExecProperty {
            private final java.lang.Object command;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.command = builder.command;
            }

            @Override
            public final java.lang.Object getCommand() {
                return this.command;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PostStartExecProperty.Jsii$Proxy that = (PostStartExecProperty.Jsii$Proxy) o;

                return this.command != null ? this.command.equals(that.command) : that.command == null;
            }

            @Override
            public final int hashCode() {
                int result = this.command != null ? this.command.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty")
    @software.amazon.jsii.Jsii.Proxy(PostStartHttpGetProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PostStartHttpGetProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScheme() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PostStartHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PostStartHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PostStartHttpGetProperty> {
            java.lang.Object host;
            java.lang.Object httpHeaders;
            java.lang.Object path;
            java.lang.Object port;
            java.lang.Object scheme;

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getHttpHeaders}
             * @param httpHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpHeaders(com.aliyun.ros.cdk.core.IResolvable httpHeaders) {
                this.httpHeaders = httpHeaders;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getHttpHeaders}
             * @param httpHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpHeaders(java.util.List<? extends java.lang.Object> httpHeaders) {
                this.httpHeaders = httpHeaders;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(java.lang.String scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Sets the value of {@link PostStartHttpGetProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(com.aliyun.ros.cdk.core.IResolvable scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PostStartHttpGetProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PostStartHttpGetProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PostStartHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PostStartHttpGetProperty {
            private final java.lang.Object host;
            private final java.lang.Object httpHeaders;
            private final java.lang.Object path;
            private final java.lang.Object port;
            private final java.lang.Object scheme;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpHeaders = software.amazon.jsii.Kernel.get(this, "httpHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scheme = software.amazon.jsii.Kernel.get(this, "scheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.httpHeaders = builder.httpHeaders;
                this.path = builder.path;
                this.port = builder.port;
                this.scheme = builder.scheme;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getHttpHeaders() {
                return this.httpHeaders;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getScheme() {
                return this.scheme;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getHttpHeaders() != null) {
                    data.set("httpHeaders", om.valueToTree(this.getHttpHeaders()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getScheme() != null) {
                    data.set("scheme", om.valueToTree(this.getScheme()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PostStartHttpGetProperty.Jsii$Proxy that = (PostStartHttpGetProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.httpHeaders != null ? !this.httpHeaders.equals(that.httpHeaders) : that.httpHeaders != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                return this.scheme != null ? this.scheme.equals(that.scheme) : that.scheme == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.httpHeaders != null ? this.httpHeaders.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.scheme != null ? this.scheme.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartProperty")
    @software.amazon.jsii.Jsii.Proxy(PostStartProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PostStartProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExec() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpGet() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PostStartProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PostStartProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PostStartProperty> {
            java.lang.Object exec;
            java.lang.Object httpGet;

            /**
             * Sets the value of {@link PostStartProperty#getExec}
             * @param exec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exec(com.aliyun.ros.cdk.core.IResolvable exec) {
                this.exec = exec;
                return this;
            }

            /**
             * Sets the value of {@link PostStartProperty#getExec}
             * @param exec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exec(com.aliyun.ros.cdk.edas.RosK8sApplication.PostStartExecProperty exec) {
                this.exec = exec;
                return this;
            }

            /**
             * Sets the value of {@link PostStartProperty#getHttpGet}
             * @param httpGet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGet(com.aliyun.ros.cdk.core.IResolvable httpGet) {
                this.httpGet = httpGet;
                return this;
            }

            /**
             * Sets the value of {@link PostStartProperty#getHttpGet}
             * @param httpGet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGet(com.aliyun.ros.cdk.edas.RosK8sApplication.PostStartHttpGetProperty httpGet) {
                this.httpGet = httpGet;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PostStartProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PostStartProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PostStartProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PostStartProperty {
            private final java.lang.Object exec;
            private final java.lang.Object httpGet;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.exec = software.amazon.jsii.Kernel.get(this, "exec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpGet = software.amazon.jsii.Kernel.get(this, "httpGet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.exec = builder.exec;
                this.httpGet = builder.httpGet;
            }

            @Override
            public final java.lang.Object getExec() {
                return this.exec;
            }

            @Override
            public final java.lang.Object getHttpGet() {
                return this.httpGet;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getExec() != null) {
                    data.set("exec", om.valueToTree(this.getExec()));
                }
                if (this.getHttpGet() != null) {
                    data.set("httpGet", om.valueToTree(this.getHttpGet()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PostStartProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PostStartProperty.Jsii$Proxy that = (PostStartProperty.Jsii$Proxy) o;

                if (this.exec != null ? !this.exec.equals(that.exec) : that.exec != null) return false;
                return this.httpGet != null ? this.httpGet.equals(that.httpGet) : that.httpGet == null;
            }

            @Override
            public final int hashCode() {
                int result = this.exec != null ? this.exec.hashCode() : 0;
                result = 31 * result + (this.httpGet != null ? this.httpGet.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty")
    @software.amazon.jsii.Jsii.Proxy(PreStopExecProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PreStopExecProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PreStopExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PreStopExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PreStopExecProperty> {
            java.lang.Object command;

            /**
             * Sets the value of {@link PreStopExecProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link PreStopExecProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<? extends java.lang.Object> command) {
                this.command = command;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PreStopExecProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PreStopExecProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PreStopExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PreStopExecProperty {
            private final java.lang.Object command;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.command = builder.command;
            }

            @Override
            public final java.lang.Object getCommand() {
                return this.command;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PreStopExecProperty.Jsii$Proxy that = (PreStopExecProperty.Jsii$Proxy) o;

                return this.command != null ? this.command.equals(that.command) : that.command == null;
            }

            @Override
            public final int hashCode() {
                int result = this.command != null ? this.command.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(PreStopHttpGetHttpHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PreStopHttpGetHttpHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PreStopHttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PreStopHttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PreStopHttpGetHttpHeadersProperty> {
            java.lang.Object name;
            java.lang.Object value;

            /**
             * Sets the value of {@link PreStopHttpGetHttpHeadersProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetHttpHeadersProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetHttpHeadersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetHttpHeadersProperty#getValue}
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
             * @return a new instance of {@link PreStopHttpGetHttpHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PreStopHttpGetHttpHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PreStopHttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PreStopHttpGetHttpHeadersProperty {
            private final java.lang.Object name;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PreStopHttpGetHttpHeadersProperty.Jsii$Proxy that = (PreStopHttpGetHttpHeadersProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty")
    @software.amazon.jsii.Jsii.Proxy(PreStopHttpGetProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PreStopHttpGetProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScheme() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PreStopHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PreStopHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PreStopHttpGetProperty> {
            java.lang.Object host;
            java.lang.Object httpHeaders;
            java.lang.Object path;
            java.lang.Object port;
            java.lang.Object scheme;

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getHttpHeaders}
             * @param httpHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpHeaders(com.aliyun.ros.cdk.core.IResolvable httpHeaders) {
                this.httpHeaders = httpHeaders;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getHttpHeaders}
             * @param httpHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpHeaders(java.util.List<? extends java.lang.Object> httpHeaders) {
                this.httpHeaders = httpHeaders;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(java.lang.String scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Sets the value of {@link PreStopHttpGetProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(com.aliyun.ros.cdk.core.IResolvable scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PreStopHttpGetProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PreStopHttpGetProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PreStopHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PreStopHttpGetProperty {
            private final java.lang.Object host;
            private final java.lang.Object httpHeaders;
            private final java.lang.Object path;
            private final java.lang.Object port;
            private final java.lang.Object scheme;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpHeaders = software.amazon.jsii.Kernel.get(this, "httpHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scheme = software.amazon.jsii.Kernel.get(this, "scheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.httpHeaders = builder.httpHeaders;
                this.path = builder.path;
                this.port = builder.port;
                this.scheme = builder.scheme;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getHttpHeaders() {
                return this.httpHeaders;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getScheme() {
                return this.scheme;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getHttpHeaders() != null) {
                    data.set("httpHeaders", om.valueToTree(this.getHttpHeaders()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getScheme() != null) {
                    data.set("scheme", om.valueToTree(this.getScheme()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PreStopHttpGetProperty.Jsii$Proxy that = (PreStopHttpGetProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.httpHeaders != null ? !this.httpHeaders.equals(that.httpHeaders) : that.httpHeaders != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                return this.scheme != null ? this.scheme.equals(that.scheme) : that.scheme == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.httpHeaders != null ? this.httpHeaders.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.scheme != null ? this.scheme.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopProperty")
    @software.amazon.jsii.Jsii.Proxy(PreStopProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PreStopProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExec() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpGet() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PreStopProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PreStopProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PreStopProperty> {
            java.lang.Object exec;
            java.lang.Object httpGet;

            /**
             * Sets the value of {@link PreStopProperty#getExec}
             * @param exec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exec(com.aliyun.ros.cdk.core.IResolvable exec) {
                this.exec = exec;
                return this;
            }

            /**
             * Sets the value of {@link PreStopProperty#getExec}
             * @param exec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exec(com.aliyun.ros.cdk.edas.RosK8sApplication.PreStopExecProperty exec) {
                this.exec = exec;
                return this;
            }

            /**
             * Sets the value of {@link PreStopProperty#getHttpGet}
             * @param httpGet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGet(com.aliyun.ros.cdk.core.IResolvable httpGet) {
                this.httpGet = httpGet;
                return this;
            }

            /**
             * Sets the value of {@link PreStopProperty#getHttpGet}
             * @param httpGet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGet(com.aliyun.ros.cdk.edas.RosK8sApplication.PreStopHttpGetProperty httpGet) {
                this.httpGet = httpGet;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PreStopProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PreStopProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PreStopProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PreStopProperty {
            private final java.lang.Object exec;
            private final java.lang.Object httpGet;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.exec = software.amazon.jsii.Kernel.get(this, "exec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpGet = software.amazon.jsii.Kernel.get(this, "httpGet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.exec = builder.exec;
                this.httpGet = builder.httpGet;
            }

            @Override
            public final java.lang.Object getExec() {
                return this.exec;
            }

            @Override
            public final java.lang.Object getHttpGet() {
                return this.httpGet;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getExec() != null) {
                    data.set("exec", om.valueToTree(this.getExec()));
                }
                if (this.getHttpGet() != null) {
                    data.set("httpGet", om.valueToTree(this.getHttpGet()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PreStopProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PreStopProperty.Jsii$Proxy that = (PreStopProperty.Jsii$Proxy) o;

                if (this.exec != null ? !this.exec.equals(that.exec) : that.exec != null) return false;
                return this.httpGet != null ? this.httpGet.equals(that.httpGet) : that.httpGet == null;
            }

            @Override
            public final int hashCode() {
                int result = this.exec != null ? this.exec.hashCode() : 0;
                result = 31 * result + (this.httpGet != null ? this.httpGet.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty")
    @software.amazon.jsii.Jsii.Proxy(PrintGCDateStampsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrintGCDateStampsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PrintGCDateStampsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrintGCDateStampsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrintGCDateStampsProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link PrintGCDateStampsProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Boolean original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link PrintGCDateStampsProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link PrintGCDateStampsProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link PrintGCDateStampsProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrintGCDateStampsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrintGCDateStampsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrintGCDateStampsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrintGCDateStampsProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrintGCDateStampsProperty.Jsii$Proxy that = (PrintGCDateStampsProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty")
    @software.amazon.jsii.Jsii.Proxy(PrintGCProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrintGCProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PrintGCProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrintGCProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrintGCProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link PrintGCProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Boolean original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link PrintGCProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link PrintGCProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link PrintGCProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrintGCProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrintGCProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrintGCProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrintGCProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrintGCProperty.Jsii$Proxy that = (PrintGCProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty")
    @software.amazon.jsii.Jsii.Proxy(ReadinessExecProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReadinessExecProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ReadinessExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReadinessExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReadinessExecProperty> {
            java.lang.Object command;

            /**
             * Sets the value of {@link ReadinessExecProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
                this.command = command;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessExecProperty#getCommand}
             * @param command the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder command(java.util.List<? extends java.lang.Object> command) {
                this.command = command;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReadinessExecProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReadinessExecProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ReadinessExecProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReadinessExecProperty {
            private final java.lang.Object command;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.command = builder.command;
            }

            @Override
            public final java.lang.Object getCommand() {
                return this.command;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCommand() != null) {
                    data.set("command", om.valueToTree(this.getCommand()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReadinessExecProperty.Jsii$Proxy that = (ReadinessExecProperty.Jsii$Proxy) o;

                return this.command != null ? this.command.equals(that.command) : that.command == null;
            }

            @Override
            public final int hashCode() {
                int result = this.command != null ? this.command.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(ReadinessHttpGetHttpHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReadinessHttpGetHttpHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ReadinessHttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReadinessHttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReadinessHttpGetHttpHeadersProperty> {
            java.lang.Object name;
            java.lang.Object value;

            /**
             * Sets the value of {@link ReadinessHttpGetHttpHeadersProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetHttpHeadersProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetHttpHeadersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetHttpHeadersProperty#getValue}
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
             * @return a new instance of {@link ReadinessHttpGetHttpHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReadinessHttpGetHttpHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ReadinessHttpGetHttpHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReadinessHttpGetHttpHeadersProperty {
            private final java.lang.Object name;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReadinessHttpGetHttpHeadersProperty.Jsii$Proxy that = (ReadinessHttpGetHttpHeadersProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty")
    @software.amazon.jsii.Jsii.Proxy(ReadinessHttpGetProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReadinessHttpGetProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScheme() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ReadinessHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReadinessHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReadinessHttpGetProperty> {
            java.lang.Object host;
            java.lang.Object httpHeaders;
            java.lang.Object path;
            java.lang.Object port;
            java.lang.Object scheme;

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getHttpHeaders}
             * @param httpHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpHeaders(com.aliyun.ros.cdk.core.IResolvable httpHeaders) {
                this.httpHeaders = httpHeaders;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getHttpHeaders}
             * @param httpHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpHeaders(java.util.List<? extends java.lang.Object> httpHeaders) {
                this.httpHeaders = httpHeaders;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(java.lang.String scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessHttpGetProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(com.aliyun.ros.cdk.core.IResolvable scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReadinessHttpGetProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReadinessHttpGetProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ReadinessHttpGetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReadinessHttpGetProperty {
            private final java.lang.Object host;
            private final java.lang.Object httpHeaders;
            private final java.lang.Object path;
            private final java.lang.Object port;
            private final java.lang.Object scheme;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpHeaders = software.amazon.jsii.Kernel.get(this, "httpHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scheme = software.amazon.jsii.Kernel.get(this, "scheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.httpHeaders = builder.httpHeaders;
                this.path = builder.path;
                this.port = builder.port;
                this.scheme = builder.scheme;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getHttpHeaders() {
                return this.httpHeaders;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getScheme() {
                return this.scheme;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getHttpHeaders() != null) {
                    data.set("httpHeaders", om.valueToTree(this.getHttpHeaders()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getScheme() != null) {
                    data.set("scheme", om.valueToTree(this.getScheme()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReadinessHttpGetProperty.Jsii$Proxy that = (ReadinessHttpGetProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.httpHeaders != null ? !this.httpHeaders.equals(that.httpHeaders) : that.httpHeaders != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                return this.scheme != null ? this.scheme.equals(that.scheme) : that.scheme == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.httpHeaders != null ? this.httpHeaders.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.scheme != null ? this.scheme.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessProperty")
    @software.amazon.jsii.Jsii.Proxy(ReadinessProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReadinessProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExec() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFailureThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpGet() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInitialDelaySeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSuccessThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTcpSocket() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ReadinessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReadinessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReadinessProperty> {
            java.lang.Object exec;
            java.lang.Object failureThreshold;
            java.lang.Object httpGet;
            java.lang.Object initialDelaySeconds;
            java.lang.Object periodSeconds;
            java.lang.Object successThreshold;
            java.lang.Object tcpSocket;
            java.lang.Object timeoutSeconds;

            /**
             * Sets the value of {@link ReadinessProperty#getExec}
             * @param exec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exec(com.aliyun.ros.cdk.core.IResolvable exec) {
                this.exec = exec;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getExec}
             * @param exec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exec(com.aliyun.ros.cdk.edas.RosK8sApplication.ReadinessExecProperty exec) {
                this.exec = exec;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(java.lang.Number failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getFailureThreshold}
             * @param failureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureThreshold(com.aliyun.ros.cdk.core.IResolvable failureThreshold) {
                this.failureThreshold = failureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getHttpGet}
             * @param httpGet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGet(com.aliyun.ros.cdk.core.IResolvable httpGet) {
                this.httpGet = httpGet;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getHttpGet}
             * @param httpGet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpGet(com.aliyun.ros.cdk.edas.RosK8sApplication.ReadinessHttpGetProperty httpGet) {
                this.httpGet = httpGet;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(java.lang.Number initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getInitialDelaySeconds}
             * @param initialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initialDelaySeconds(com.aliyun.ros.cdk.core.IResolvable initialDelaySeconds) {
                this.initialDelaySeconds = initialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(java.lang.Number periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getPeriodSeconds}
             * @param periodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodSeconds(com.aliyun.ros.cdk.core.IResolvable periodSeconds) {
                this.periodSeconds = periodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(java.lang.Number successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getSuccessThreshold}
             * @param successThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder successThreshold(com.aliyun.ros.cdk.core.IResolvable successThreshold) {
                this.successThreshold = successThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getTcpSocket}
             * @param tcpSocket the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tcpSocket(com.aliyun.ros.cdk.core.IResolvable tcpSocket) {
                this.tcpSocket = tcpSocket;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getTcpSocket}
             * @param tcpSocket the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tcpSocket(com.aliyun.ros.cdk.edas.RosK8sApplication.ReadinessTcpSocketProperty tcpSocket) {
                this.tcpSocket = tcpSocket;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(java.lang.Number timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessProperty#getTimeoutSeconds}
             * @param timeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutSeconds(com.aliyun.ros.cdk.core.IResolvable timeoutSeconds) {
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReadinessProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReadinessProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ReadinessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReadinessProperty {
            private final java.lang.Object exec;
            private final java.lang.Object failureThreshold;
            private final java.lang.Object httpGet;
            private final java.lang.Object initialDelaySeconds;
            private final java.lang.Object periodSeconds;
            private final java.lang.Object successThreshold;
            private final java.lang.Object tcpSocket;
            private final java.lang.Object timeoutSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.exec = software.amazon.jsii.Kernel.get(this, "exec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.failureThreshold = software.amazon.jsii.Kernel.get(this, "failureThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpGet = software.amazon.jsii.Kernel.get(this, "httpGet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.initialDelaySeconds = software.amazon.jsii.Kernel.get(this, "initialDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.periodSeconds = software.amazon.jsii.Kernel.get(this, "periodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.successThreshold = software.amazon.jsii.Kernel.get(this, "successThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tcpSocket = software.amazon.jsii.Kernel.get(this, "tcpSocket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeoutSeconds = software.amazon.jsii.Kernel.get(this, "timeoutSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.exec = builder.exec;
                this.failureThreshold = builder.failureThreshold;
                this.httpGet = builder.httpGet;
                this.initialDelaySeconds = builder.initialDelaySeconds;
                this.periodSeconds = builder.periodSeconds;
                this.successThreshold = builder.successThreshold;
                this.tcpSocket = builder.tcpSocket;
                this.timeoutSeconds = builder.timeoutSeconds;
            }

            @Override
            public final java.lang.Object getExec() {
                return this.exec;
            }

            @Override
            public final java.lang.Object getFailureThreshold() {
                return this.failureThreshold;
            }

            @Override
            public final java.lang.Object getHttpGet() {
                return this.httpGet;
            }

            @Override
            public final java.lang.Object getInitialDelaySeconds() {
                return this.initialDelaySeconds;
            }

            @Override
            public final java.lang.Object getPeriodSeconds() {
                return this.periodSeconds;
            }

            @Override
            public final java.lang.Object getSuccessThreshold() {
                return this.successThreshold;
            }

            @Override
            public final java.lang.Object getTcpSocket() {
                return this.tcpSocket;
            }

            @Override
            public final java.lang.Object getTimeoutSeconds() {
                return this.timeoutSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getExec() != null) {
                    data.set("exec", om.valueToTree(this.getExec()));
                }
                if (this.getFailureThreshold() != null) {
                    data.set("failureThreshold", om.valueToTree(this.getFailureThreshold()));
                }
                if (this.getHttpGet() != null) {
                    data.set("httpGet", om.valueToTree(this.getHttpGet()));
                }
                if (this.getInitialDelaySeconds() != null) {
                    data.set("initialDelaySeconds", om.valueToTree(this.getInitialDelaySeconds()));
                }
                if (this.getPeriodSeconds() != null) {
                    data.set("periodSeconds", om.valueToTree(this.getPeriodSeconds()));
                }
                if (this.getSuccessThreshold() != null) {
                    data.set("successThreshold", om.valueToTree(this.getSuccessThreshold()));
                }
                if (this.getTcpSocket() != null) {
                    data.set("tcpSocket", om.valueToTree(this.getTcpSocket()));
                }
                if (this.getTimeoutSeconds() != null) {
                    data.set("timeoutSeconds", om.valueToTree(this.getTimeoutSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReadinessProperty.Jsii$Proxy that = (ReadinessProperty.Jsii$Proxy) o;

                if (this.exec != null ? !this.exec.equals(that.exec) : that.exec != null) return false;
                if (this.failureThreshold != null ? !this.failureThreshold.equals(that.failureThreshold) : that.failureThreshold != null) return false;
                if (this.httpGet != null ? !this.httpGet.equals(that.httpGet) : that.httpGet != null) return false;
                if (this.initialDelaySeconds != null ? !this.initialDelaySeconds.equals(that.initialDelaySeconds) : that.initialDelaySeconds != null) return false;
                if (this.periodSeconds != null ? !this.periodSeconds.equals(that.periodSeconds) : that.periodSeconds != null) return false;
                if (this.successThreshold != null ? !this.successThreshold.equals(that.successThreshold) : that.successThreshold != null) return false;
                if (this.tcpSocket != null ? !this.tcpSocket.equals(that.tcpSocket) : that.tcpSocket != null) return false;
                return this.timeoutSeconds != null ? this.timeoutSeconds.equals(that.timeoutSeconds) : that.timeoutSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.exec != null ? this.exec.hashCode() : 0;
                result = 31 * result + (this.failureThreshold != null ? this.failureThreshold.hashCode() : 0);
                result = 31 * result + (this.httpGet != null ? this.httpGet.hashCode() : 0);
                result = 31 * result + (this.initialDelaySeconds != null ? this.initialDelaySeconds.hashCode() : 0);
                result = 31 * result + (this.periodSeconds != null ? this.periodSeconds.hashCode() : 0);
                result = 31 * result + (this.successThreshold != null ? this.successThreshold.hashCode() : 0);
                result = 31 * result + (this.tcpSocket != null ? this.tcpSocket.hashCode() : 0);
                result = 31 * result + (this.timeoutSeconds != null ? this.timeoutSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty")
    @software.amazon.jsii.Jsii.Proxy(ReadinessTcpSocketProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReadinessTcpSocketProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ReadinessTcpSocketProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReadinessTcpSocketProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReadinessTcpSocketProperty> {
            java.lang.Object host;
            java.lang.Object port;

            /**
             * Sets the value of {@link ReadinessTcpSocketProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessTcpSocketProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessTcpSocketProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ReadinessTcpSocketProperty#getPort}
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
             * @return a new instance of {@link ReadinessTcpSocketProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReadinessTcpSocketProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ReadinessTcpSocketProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReadinessTcpSocketProperty {
            private final java.lang.Object host;
            private final java.lang.Object port;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.port = builder.port;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
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

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReadinessTcpSocketProperty.Jsii$Proxy that = (ReadinessTcpSocketProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                return this.port != null ? this.port.equals(that.port) : that.port == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.SlsConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(SlsConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SlsConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogDir() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogstore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SlsConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SlsConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SlsConfigsProperty> {
            java.lang.Object logDir;
            java.lang.Object logstore;
            java.lang.Object type;

            /**
             * Sets the value of {@link SlsConfigsProperty#getLogDir}
             * @param logDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logDir(java.lang.String logDir) {
                this.logDir = logDir;
                return this;
            }

            /**
             * Sets the value of {@link SlsConfigsProperty#getLogDir}
             * @param logDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logDir(com.aliyun.ros.cdk.core.IResolvable logDir) {
                this.logDir = logDir;
                return this;
            }

            /**
             * Sets the value of {@link SlsConfigsProperty#getLogstore}
             * @param logstore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(java.lang.String logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link SlsConfigsProperty#getLogstore}
             * @param logstore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link SlsConfigsProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link SlsConfigsProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SlsConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SlsConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SlsConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SlsConfigsProperty {
            private final java.lang.Object logDir;
            private final java.lang.Object logstore;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logDir = software.amazon.jsii.Kernel.get(this, "logDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logDir = builder.logDir;
                this.logstore = builder.logstore;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getLogDir() {
                return this.logDir;
            }

            @Override
            public final java.lang.Object getLogstore() {
                return this.logstore;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLogDir() != null) {
                    data.set("logDir", om.valueToTree(this.getLogDir()));
                }
                if (this.getLogstore() != null) {
                    data.set("logstore", om.valueToTree(this.getLogstore()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.SlsConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SlsConfigsProperty.Jsii$Proxy that = (SlsConfigsProperty.Jsii$Proxy) o;

                if (this.logDir != null ? !this.logDir.equals(that.logDir) : that.logDir != null) return false;
                if (this.logstore != null ? !this.logstore.equals(that.logstore) : that.logstore != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.logDir != null ? this.logDir.hashCode() : 0;
                result = 31 * result + (this.logstore != null ? this.logstore.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty")
    @software.amazon.jsii.Jsii.Proxy(SurvivorRatioProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SurvivorRatioProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SurvivorRatioProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SurvivorRatioProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SurvivorRatioProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link SurvivorRatioProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link SurvivorRatioProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link SurvivorRatioProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link SurvivorRatioProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SurvivorRatioProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SurvivorRatioProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SurvivorRatioProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SurvivorRatioProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SurvivorRatioProperty.Jsii$Proxy that = (SurvivorRatioProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty")
    @software.amazon.jsii.Jsii.Proxy(TcpSocketProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TcpSocketProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TcpSocketProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TcpSocketProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TcpSocketProperty> {
            java.lang.Object host;
            java.lang.Object port;

            /**
             * Sets the value of {@link TcpSocketProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link TcpSocketProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link TcpSocketProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link TcpSocketProperty#getPort}
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
             * @return a new instance of {@link TcpSocketProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TcpSocketProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TcpSocketProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TcpSocketProperty {
            private final java.lang.Object host;
            private final java.lang.Object port;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.host = builder.host;
                this.port = builder.port;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
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

                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TcpSocketProperty.Jsii$Proxy that = (TcpSocketProperty.Jsii$Proxy) o;

                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                return this.port != null ? this.port.equals(that.port) : that.port == null;
            }

            @Override
            public final int hashCode() {
                int result = this.host != null ? this.host.hashCode() : 0;
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty")
    @software.amazon.jsii.Jsii.Proxy(ThreadStackSizeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ThreadStackSizeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ThreadStackSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ThreadStackSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ThreadStackSizeProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link ThreadStackSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Number original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link ThreadStackSizeProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link ThreadStackSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link ThreadStackSizeProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ThreadStackSizeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ThreadStackSizeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ThreadStackSizeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ThreadStackSizeProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ThreadStackSizeProperty.Jsii$Proxy that = (ThreadStackSizeProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty")
    @software.amazon.jsii.Jsii.Proxy(UseGCLogFileRotationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface UseGCLogFileRotationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link UseGCLogFileRotationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link UseGCLogFileRotationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<UseGCLogFileRotationProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link UseGCLogFileRotationProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.Boolean original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link UseGCLogFileRotationProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link UseGCLogFileRotationProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link UseGCLogFileRotationProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link UseGCLogFileRotationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public UseGCLogFileRotationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link UseGCLogFileRotationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UseGCLogFileRotationProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                UseGCLogFileRotationProperty.Jsii$Proxy that = (UseGCLogFileRotationProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.WebContainerConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(WebContainerConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WebContainerConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContextInputType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContextPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxThreads() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerXml() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUriEncoding() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUseAdvancedServerXml() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUseBodyEncoding() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUseDefaultConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WebContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WebContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WebContainerConfigProperty> {
            java.lang.Object contextInputType;
            java.lang.Object contextPath;
            java.lang.Object httpPort;
            java.lang.Object maxThreads;
            java.lang.Object serverXml;
            java.lang.Object uriEncoding;
            java.lang.Object useAdvancedServerXml;
            java.lang.Object useBodyEncoding;
            java.lang.Object useDefaultConfig;

            /**
             * Sets the value of {@link WebContainerConfigProperty#getContextInputType}
             * @param contextInputType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contextInputType(java.lang.String contextInputType) {
                this.contextInputType = contextInputType;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getContextInputType}
             * @param contextInputType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contextInputType(com.aliyun.ros.cdk.core.IResolvable contextInputType) {
                this.contextInputType = contextInputType;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getContextPath}
             * @param contextPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contextPath(java.lang.String contextPath) {
                this.contextPath = contextPath;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getContextPath}
             * @param contextPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contextPath(com.aliyun.ros.cdk.core.IResolvable contextPath) {
                this.contextPath = contextPath;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getHttpPort}
             * @param httpPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpPort(java.lang.Number httpPort) {
                this.httpPort = httpPort;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getHttpPort}
             * @param httpPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpPort(com.aliyun.ros.cdk.core.IResolvable httpPort) {
                this.httpPort = httpPort;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getMaxThreads}
             * @param maxThreads the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxThreads(java.lang.Number maxThreads) {
                this.maxThreads = maxThreads;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getMaxThreads}
             * @param maxThreads the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxThreads(com.aliyun.ros.cdk.core.IResolvable maxThreads) {
                this.maxThreads = maxThreads;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getServerXml}
             * @param serverXml the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverXml(java.lang.String serverXml) {
                this.serverXml = serverXml;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getServerXml}
             * @param serverXml the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverXml(com.aliyun.ros.cdk.core.IResolvable serverXml) {
                this.serverXml = serverXml;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getUriEncoding}
             * @param uriEncoding the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder uriEncoding(java.lang.String uriEncoding) {
                this.uriEncoding = uriEncoding;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getUriEncoding}
             * @param uriEncoding the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder uriEncoding(com.aliyun.ros.cdk.core.IResolvable uriEncoding) {
                this.uriEncoding = uriEncoding;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getUseAdvancedServerXml}
             * @param useAdvancedServerXml the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useAdvancedServerXml(java.lang.Boolean useAdvancedServerXml) {
                this.useAdvancedServerXml = useAdvancedServerXml;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getUseAdvancedServerXml}
             * @param useAdvancedServerXml the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useAdvancedServerXml(com.aliyun.ros.cdk.core.IResolvable useAdvancedServerXml) {
                this.useAdvancedServerXml = useAdvancedServerXml;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getUseBodyEncoding}
             * @param useBodyEncoding the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useBodyEncoding(java.lang.Boolean useBodyEncoding) {
                this.useBodyEncoding = useBodyEncoding;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getUseBodyEncoding}
             * @param useBodyEncoding the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useBodyEncoding(com.aliyun.ros.cdk.core.IResolvable useBodyEncoding) {
                this.useBodyEncoding = useBodyEncoding;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getUseDefaultConfig}
             * @param useDefaultConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useDefaultConfig(java.lang.Boolean useDefaultConfig) {
                this.useDefaultConfig = useDefaultConfig;
                return this;
            }

            /**
             * Sets the value of {@link WebContainerConfigProperty#getUseDefaultConfig}
             * @param useDefaultConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useDefaultConfig(com.aliyun.ros.cdk.core.IResolvable useDefaultConfig) {
                this.useDefaultConfig = useDefaultConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WebContainerConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WebContainerConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WebContainerConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WebContainerConfigProperty {
            private final java.lang.Object contextInputType;
            private final java.lang.Object contextPath;
            private final java.lang.Object httpPort;
            private final java.lang.Object maxThreads;
            private final java.lang.Object serverXml;
            private final java.lang.Object uriEncoding;
            private final java.lang.Object useAdvancedServerXml;
            private final java.lang.Object useBodyEncoding;
            private final java.lang.Object useDefaultConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.contextInputType = software.amazon.jsii.Kernel.get(this, "contextInputType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contextPath = software.amazon.jsii.Kernel.get(this, "contextPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpPort = software.amazon.jsii.Kernel.get(this, "httpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxThreads = software.amazon.jsii.Kernel.get(this, "maxThreads", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serverXml = software.amazon.jsii.Kernel.get(this, "serverXml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.uriEncoding = software.amazon.jsii.Kernel.get(this, "uriEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.useAdvancedServerXml = software.amazon.jsii.Kernel.get(this, "useAdvancedServerXml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.useBodyEncoding = software.amazon.jsii.Kernel.get(this, "useBodyEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.useDefaultConfig = software.amazon.jsii.Kernel.get(this, "useDefaultConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.contextInputType = builder.contextInputType;
                this.contextPath = builder.contextPath;
                this.httpPort = builder.httpPort;
                this.maxThreads = builder.maxThreads;
                this.serverXml = builder.serverXml;
                this.uriEncoding = builder.uriEncoding;
                this.useAdvancedServerXml = builder.useAdvancedServerXml;
                this.useBodyEncoding = builder.useBodyEncoding;
                this.useDefaultConfig = builder.useDefaultConfig;
            }

            @Override
            public final java.lang.Object getContextInputType() {
                return this.contextInputType;
            }

            @Override
            public final java.lang.Object getContextPath() {
                return this.contextPath;
            }

            @Override
            public final java.lang.Object getHttpPort() {
                return this.httpPort;
            }

            @Override
            public final java.lang.Object getMaxThreads() {
                return this.maxThreads;
            }

            @Override
            public final java.lang.Object getServerXml() {
                return this.serverXml;
            }

            @Override
            public final java.lang.Object getUriEncoding() {
                return this.uriEncoding;
            }

            @Override
            public final java.lang.Object getUseAdvancedServerXml() {
                return this.useAdvancedServerXml;
            }

            @Override
            public final java.lang.Object getUseBodyEncoding() {
                return this.useBodyEncoding;
            }

            @Override
            public final java.lang.Object getUseDefaultConfig() {
                return this.useDefaultConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getContextInputType() != null) {
                    data.set("contextInputType", om.valueToTree(this.getContextInputType()));
                }
                if (this.getContextPath() != null) {
                    data.set("contextPath", om.valueToTree(this.getContextPath()));
                }
                if (this.getHttpPort() != null) {
                    data.set("httpPort", om.valueToTree(this.getHttpPort()));
                }
                if (this.getMaxThreads() != null) {
                    data.set("maxThreads", om.valueToTree(this.getMaxThreads()));
                }
                if (this.getServerXml() != null) {
                    data.set("serverXml", om.valueToTree(this.getServerXml()));
                }
                if (this.getUriEncoding() != null) {
                    data.set("uriEncoding", om.valueToTree(this.getUriEncoding()));
                }
                if (this.getUseAdvancedServerXml() != null) {
                    data.set("useAdvancedServerXml", om.valueToTree(this.getUseAdvancedServerXml()));
                }
                if (this.getUseBodyEncoding() != null) {
                    data.set("useBodyEncoding", om.valueToTree(this.getUseBodyEncoding()));
                }
                if (this.getUseDefaultConfig() != null) {
                    data.set("useDefaultConfig", om.valueToTree(this.getUseDefaultConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.WebContainerConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WebContainerConfigProperty.Jsii$Proxy that = (WebContainerConfigProperty.Jsii$Proxy) o;

                if (this.contextInputType != null ? !this.contextInputType.equals(that.contextInputType) : that.contextInputType != null) return false;
                if (this.contextPath != null ? !this.contextPath.equals(that.contextPath) : that.contextPath != null) return false;
                if (this.httpPort != null ? !this.httpPort.equals(that.httpPort) : that.httpPort != null) return false;
                if (this.maxThreads != null ? !this.maxThreads.equals(that.maxThreads) : that.maxThreads != null) return false;
                if (this.serverXml != null ? !this.serverXml.equals(that.serverXml) : that.serverXml != null) return false;
                if (this.uriEncoding != null ? !this.uriEncoding.equals(that.uriEncoding) : that.uriEncoding != null) return false;
                if (this.useAdvancedServerXml != null ? !this.useAdvancedServerXml.equals(that.useAdvancedServerXml) : that.useAdvancedServerXml != null) return false;
                if (this.useBodyEncoding != null ? !this.useBodyEncoding.equals(that.useBodyEncoding) : that.useBodyEncoding != null) return false;
                return this.useDefaultConfig != null ? this.useDefaultConfig.equals(that.useDefaultConfig) : that.useDefaultConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.contextInputType != null ? this.contextInputType.hashCode() : 0;
                result = 31 * result + (this.contextPath != null ? this.contextPath.hashCode() : 0);
                result = 31 * result + (this.httpPort != null ? this.httpPort.hashCode() : 0);
                result = 31 * result + (this.maxThreads != null ? this.maxThreads.hashCode() : 0);
                result = 31 * result + (this.serverXml != null ? this.serverXml.hashCode() : 0);
                result = 31 * result + (this.uriEncoding != null ? this.uriEncoding.hashCode() : 0);
                result = 31 * result + (this.useAdvancedServerXml != null ? this.useAdvancedServerXml.hashCode() : 0);
                result = 31 * result + (this.useBodyEncoding != null ? this.useBodyEncoding.hashCode() : 0);
                result = 31 * result + (this.useDefaultConfig != null ? this.useDefaultConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty")
    @software.amazon.jsii.Jsii.Proxy(YoungGarbageCollectorProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface YoungGarbageCollectorProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOriginal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStartup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link YoungGarbageCollectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link YoungGarbageCollectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<YoungGarbageCollectorProperty> {
            java.lang.Object original;
            java.lang.Object startup;

            /**
             * Sets the value of {@link YoungGarbageCollectorProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(java.lang.String original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link YoungGarbageCollectorProperty#getOriginal}
             * @param original the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder original(com.aliyun.ros.cdk.core.IResolvable original) {
                this.original = original;
                return this;
            }

            /**
             * Sets the value of {@link YoungGarbageCollectorProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(java.lang.String startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Sets the value of {@link YoungGarbageCollectorProperty#getStartup}
             * @param startup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startup(com.aliyun.ros.cdk.core.IResolvable startup) {
                this.startup = startup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link YoungGarbageCollectorProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public YoungGarbageCollectorProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link YoungGarbageCollectorProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements YoungGarbageCollectorProperty {
            private final java.lang.Object original;
            private final java.lang.Object startup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.original = software.amazon.jsii.Kernel.get(this, "original", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startup = software.amazon.jsii.Kernel.get(this, "startup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.original = builder.original;
                this.startup = builder.startup;
            }

            @Override
            public final java.lang.Object getOriginal() {
                return this.original;
            }

            @Override
            public final java.lang.Object getStartup() {
                return this.startup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOriginal() != null) {
                    data.set("original", om.valueToTree(this.getOriginal()));
                }
                if (this.getStartup() != null) {
                    data.set("startup", om.valueToTree(this.getStartup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                YoungGarbageCollectorProperty.Jsii$Proxy that = (YoungGarbageCollectorProperty.Jsii$Proxy) o;

                if (this.original != null ? !this.original.equals(that.original) : that.original != null) return false;
                return this.startup != null ? this.startup.equals(that.startup) : that.startup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.original != null ? this.original.hashCode() : 0;
                result = 31 * result + (this.startup != null ? this.startup.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.RosK8sApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.RosK8sApplication> {
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
        private final com.aliyun.ros.cdk.edas.RosK8sApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.RosK8sApplicationProps.Builder();
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
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param applicationDescription This parameter is required.
         */
        public Builder applicationDescription(final java.lang.String applicationDescription) {
            this.props.applicationDescription(applicationDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param applicationDescription This parameter is required.
         */
        public Builder applicationDescription(final com.aliyun.ros.cdk.core.IResolvable applicationDescription) {
            this.props.applicationDescription(applicationDescription);
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
        public Builder commandArgs(final com.aliyun.ros.cdk.core.IResolvable commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }
        /**
         * @return {@code this}
         * @param commandArgs This parameter is required.
         */
        public Builder commandArgs(final java.util.List<? extends java.lang.Object> commandArgs) {
            this.props.commandArgs(commandArgs);
            return this;
        }

        /**
         * @return {@code this}
         * @param deployAcrossNodes This parameter is required.
         */
        public Builder deployAcrossNodes(final java.lang.Boolean deployAcrossNodes) {
            this.props.deployAcrossNodes(deployAcrossNodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param deployAcrossNodes This parameter is required.
         */
        public Builder deployAcrossNodes(final com.aliyun.ros.cdk.core.IResolvable deployAcrossNodes) {
            this.props.deployAcrossNodes(deployAcrossNodes);
            return this;
        }

        /**
         * @return {@code this}
         * @param deployAcrossZones This parameter is required.
         */
        public Builder deployAcrossZones(final java.lang.Boolean deployAcrossZones) {
            this.props.deployAcrossZones(deployAcrossZones);
            return this;
        }
        /**
         * @return {@code this}
         * @param deployAcrossZones This parameter is required.
         */
        public Builder deployAcrossZones(final com.aliyun.ros.cdk.core.IResolvable deployAcrossZones) {
            this.props.deployAcrossZones(deployAcrossZones);
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
         * @param enableAhas This parameter is required.
         */
        public Builder enableAhas(final java.lang.Boolean enableAhas) {
            this.props.enableAhas(enableAhas);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAhas This parameter is required.
         */
        public Builder enableAhas(final com.aliyun.ros.cdk.core.IResolvable enableAhas) {
            this.props.enableAhas(enableAhas);
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
         * @param envs This parameter is required.
         */
        public Builder envs(final java.util.List<? extends java.lang.Object> envs) {
            this.props.envs(envs);
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
         * @param internetSlbId This parameter is required.
         */
        public Builder internetSlbId(final java.lang.String internetSlbId) {
            this.props.internetSlbId(internetSlbId);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetSlbId This parameter is required.
         */
        public Builder internetSlbId(final com.aliyun.ros.cdk.core.IResolvable internetSlbId) {
            this.props.internetSlbId(internetSlbId);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetSlbPort This parameter is required.
         */
        public Builder internetSlbPort(final java.lang.Number internetSlbPort) {
            this.props.internetSlbPort(internetSlbPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetSlbPort This parameter is required.
         */
        public Builder internetSlbPort(final com.aliyun.ros.cdk.core.IResolvable internetSlbPort) {
            this.props.internetSlbPort(internetSlbPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetSlbProtocol This parameter is required.
         */
        public Builder internetSlbProtocol(final java.lang.String internetSlbProtocol) {
            this.props.internetSlbProtocol(internetSlbProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetSlbProtocol This parameter is required.
         */
        public Builder internetSlbProtocol(final com.aliyun.ros.cdk.core.IResolvable internetSlbProtocol) {
            this.props.internetSlbProtocol(internetSlbProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetTargetPort This parameter is required.
         */
        public Builder internetTargetPort(final java.lang.Number internetTargetPort) {
            this.props.internetTargetPort(internetTargetPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetTargetPort This parameter is required.
         */
        public Builder internetTargetPort(final com.aliyun.ros.cdk.core.IResolvable internetTargetPort) {
            this.props.internetTargetPort(internetTargetPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param intranetSlbId This parameter is required.
         */
        public Builder intranetSlbId(final java.lang.String intranetSlbId) {
            this.props.intranetSlbId(intranetSlbId);
            return this;
        }
        /**
         * @return {@code this}
         * @param intranetSlbId This parameter is required.
         */
        public Builder intranetSlbId(final com.aliyun.ros.cdk.core.IResolvable intranetSlbId) {
            this.props.intranetSlbId(intranetSlbId);
            return this;
        }

        /**
         * @return {@code this}
         * @param intranetSlbPort This parameter is required.
         */
        public Builder intranetSlbPort(final java.lang.Number intranetSlbPort) {
            this.props.intranetSlbPort(intranetSlbPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param intranetSlbPort This parameter is required.
         */
        public Builder intranetSlbPort(final com.aliyun.ros.cdk.core.IResolvable intranetSlbPort) {
            this.props.intranetSlbPort(intranetSlbPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param intranetSlbProtocol This parameter is required.
         */
        public Builder intranetSlbProtocol(final java.lang.String intranetSlbProtocol) {
            this.props.intranetSlbProtocol(intranetSlbProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param intranetSlbProtocol This parameter is required.
         */
        public Builder intranetSlbProtocol(final com.aliyun.ros.cdk.core.IResolvable intranetSlbProtocol) {
            this.props.intranetSlbProtocol(intranetSlbProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param intranetTargetPort This parameter is required.
         */
        public Builder intranetTargetPort(final java.lang.Number intranetTargetPort) {
            this.props.intranetTargetPort(intranetTargetPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param intranetTargetPort This parameter is required.
         */
        public Builder intranetTargetPort(final com.aliyun.ros.cdk.core.IResolvable intranetTargetPort) {
            this.props.intranetTargetPort(intranetTargetPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param isMultilingualApp This parameter is required.
         */
        public Builder isMultilingualApp(final java.lang.Boolean isMultilingualApp) {
            this.props.isMultilingualApp(isMultilingualApp);
            return this;
        }
        /**
         * @return {@code this}
         * @param isMultilingualApp This parameter is required.
         */
        public Builder isMultilingualApp(final com.aliyun.ros.cdk.core.IResolvable isMultilingualApp) {
            this.props.isMultilingualApp(isMultilingualApp);
            return this;
        }

        /**
         * @return {@code this}
         * @param javaStartUpConfig This parameter is required.
         */
        public Builder javaStartUpConfig(final com.aliyun.ros.cdk.core.IResolvable javaStartUpConfig) {
            this.props.javaStartUpConfig(javaStartUpConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param javaStartUpConfig This parameter is required.
         */
        public Builder javaStartUpConfig(final com.aliyun.ros.cdk.edas.RosK8sApplication.JavaStartUpConfigProperty javaStartUpConfig) {
            this.props.javaStartUpConfig(javaStartUpConfig);
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
         * @param limitCpu This parameter is required.
         */
        public Builder limitCpu(final java.lang.Number limitCpu) {
            this.props.limitCpu(limitCpu);
            return this;
        }
        /**
         * @return {@code this}
         * @param limitCpu This parameter is required.
         */
        public Builder limitCpu(final com.aliyun.ros.cdk.core.IResolvable limitCpu) {
            this.props.limitCpu(limitCpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param limitMem This parameter is required.
         */
        public Builder limitMem(final java.lang.Number limitMem) {
            this.props.limitMem(limitMem);
            return this;
        }
        /**
         * @return {@code this}
         * @param limitMem This parameter is required.
         */
        public Builder limitMem(final com.aliyun.ros.cdk.core.IResolvable limitMem) {
            this.props.limitMem(limitMem);
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
         * @param liveness This parameter is required.
         */
        public Builder liveness(final com.aliyun.ros.cdk.edas.RosK8sApplication.LivenessProperty liveness) {
            this.props.liveness(liveness);
            return this;
        }

        /**
         * @return {@code this}
         * @param localVolume This parameter is required.
         */
        public Builder localVolume(final com.aliyun.ros.cdk.core.IResolvable localVolume) {
            this.props.localVolume(localVolume);
            return this;
        }
        /**
         * @return {@code this}
         * @param localVolume This parameter is required.
         */
        public Builder localVolume(final java.util.List<? extends java.lang.Object> localVolume) {
            this.props.localVolume(localVolume);
            return this;
        }

        /**
         * @return {@code this}
         * @param logicalRegionId This parameter is required.
         */
        public Builder logicalRegionId(final java.lang.String logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param logicalRegionId This parameter is required.
         */
        public Builder logicalRegionId(final com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param mountDescs This parameter is required.
         */
        public Builder mountDescs(final com.aliyun.ros.cdk.core.IResolvable mountDescs) {
            this.props.mountDescs(mountDescs);
            return this;
        }
        /**
         * @return {@code this}
         * @param mountDescs This parameter is required.
         */
        public Builder mountDescs(final java.util.List<? extends java.lang.Object> mountDescs) {
            this.props.mountDescs(mountDescs);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
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
         * @param postStart This parameter is required.
         */
        public Builder postStart(final com.aliyun.ros.cdk.core.IResolvable postStart) {
            this.props.postStart(postStart);
            return this;
        }
        /**
         * @return {@code this}
         * @param postStart This parameter is required.
         */
        public Builder postStart(final com.aliyun.ros.cdk.edas.RosK8sApplication.PostStartProperty postStart) {
            this.props.postStart(postStart);
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
         * @param preStop This parameter is required.
         */
        public Builder preStop(final com.aliyun.ros.cdk.edas.RosK8sApplication.PreStopProperty preStop) {
            this.props.preStop(preStop);
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
         * @param readiness This parameter is required.
         */
        public Builder readiness(final com.aliyun.ros.cdk.edas.RosK8sApplication.ReadinessProperty readiness) {
            this.props.readiness(readiness);
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
         * @param repoId This parameter is required.
         */
        public Builder repoId(final java.lang.String repoId) {
            this.props.repoId(repoId);
            return this;
        }
        /**
         * @return {@code this}
         * @param repoId This parameter is required.
         */
        public Builder repoId(final com.aliyun.ros.cdk.core.IResolvable repoId) {
            this.props.repoId(repoId);
            return this;
        }

        /**
         * @return {@code this}
         * @param requestsCpu This parameter is required.
         */
        public Builder requestsCpu(final java.lang.Number requestsCpu) {
            this.props.requestsCpu(requestsCpu);
            return this;
        }
        /**
         * @return {@code this}
         * @param requestsCpu This parameter is required.
         */
        public Builder requestsCpu(final com.aliyun.ros.cdk.core.IResolvable requestsCpu) {
            this.props.requestsCpu(requestsCpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param requestsMem This parameter is required.
         */
        public Builder requestsMem(final java.lang.Number requestsMem) {
            this.props.requestsMem(requestsMem);
            return this;
        }
        /**
         * @return {@code this}
         * @param requestsMem This parameter is required.
         */
        public Builder requestsMem(final com.aliyun.ros.cdk.core.IResolvable requestsMem) {
            this.props.requestsMem(requestsMem);
            return this;
        }

        /**
         * @return {@code this}
         * @param runtimeClassName This parameter is required.
         */
        public Builder runtimeClassName(final java.lang.String runtimeClassName) {
            this.props.runtimeClassName(runtimeClassName);
            return this;
        }
        /**
         * @return {@code this}
         * @param runtimeClassName This parameter is required.
         */
        public Builder runtimeClassName(final com.aliyun.ros.cdk.core.IResolvable runtimeClassName) {
            this.props.runtimeClassName(runtimeClassName);
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
         * @param slsConfigs This parameter is required.
         */
        public Builder slsConfigs(final java.util.List<? extends java.lang.Object> slsConfigs) {
            this.props.slsConfigs(slsConfigs);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageType This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageType This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param uriEncoding This parameter is required.
         */
        public Builder uriEncoding(final java.lang.String uriEncoding) {
            this.props.uriEncoding(uriEncoding);
            return this;
        }
        /**
         * @return {@code this}
         * @param uriEncoding This parameter is required.
         */
        public Builder uriEncoding(final com.aliyun.ros.cdk.core.IResolvable uriEncoding) {
            this.props.uriEncoding(uriEncoding);
            return this;
        }

        /**
         * @return {@code this}
         * @param useBodyEncoding This parameter is required.
         */
        public Builder useBodyEncoding(final java.lang.Boolean useBodyEncoding) {
            this.props.useBodyEncoding(useBodyEncoding);
            return this;
        }
        /**
         * @return {@code this}
         * @param useBodyEncoding This parameter is required.
         */
        public Builder useBodyEncoding(final com.aliyun.ros.cdk.core.IResolvable useBodyEncoding) {
            this.props.useBodyEncoding(useBodyEncoding);
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
         * @return {@code this}
         * @param webContainerConfig This parameter is required.
         */
        public Builder webContainerConfig(final com.aliyun.ros.cdk.core.IResolvable webContainerConfig) {
            this.props.webContainerConfig(webContainerConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param webContainerConfig This parameter is required.
         */
        public Builder webContainerConfig(final com.aliyun.ros.cdk.edas.RosK8sApplication.WebContainerConfigProperty webContainerConfig) {
            this.props.webContainerConfig(webContainerConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edas.RosK8sApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.RosK8sApplication build() {
            return new com.aliyun.ros.cdk.edas.RosK8sApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
