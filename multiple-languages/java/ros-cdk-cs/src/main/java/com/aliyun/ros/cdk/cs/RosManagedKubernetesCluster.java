package com.aliyun.ros.cdk.cs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CS::ManagedKubernetesCluster</code>, which is used to create a Container Service for Kubernetes (ACK) managed cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.519Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster")
public class RosManagedKubernetesCluster extends com.aliyun.ros.cdk.core.RosResource {

    protected RosManagedKubernetesCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosManagedKubernetesCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosManagedKubernetesCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.RosManagedKubernetesClusterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApiServerSlbId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiServerSlbId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDefaultUserKubeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultUserKubeConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIngressSlbId() {
        return software.amazon.jsii.Kernel.get(this, "attrIngressSlbId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodes() {
        return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateUserKubConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateUserKubConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkerRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkerRamRoleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddons(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addons", value);
    }

    /**
     */
    public void setAddons(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.AddonsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.AddonsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "addons", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCloudMonitorFlags() {
        return software.amazon.jsii.Kernel.get(this, "cloudMonitorFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCloudMonitorFlags(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "cloudMonitorFlags", value);
    }

    /**
     */
    public void setCloudMonitorFlags(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cloudMonitorFlags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterSpec", value);
    }

    /**
     */
    public void setClusterSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContainerCidr() {
        return software.amazon.jsii.Kernel.get(this, "containerCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainerCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "containerCidr", value);
    }

    /**
     */
    public void setContainerCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "containerCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogComponents() {
        return software.amazon.jsii.Kernel.get(this, "controlPlaneLogComponents", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setControlPlaneLogComponents(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogComponents", value);
    }

    /**
     */
    public void setControlPlaneLogComponents(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogComponents", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogProject() {
        return software.amazon.jsii.Kernel.get(this, "controlPlaneLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setControlPlaneLogProject(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogProject", value);
    }

    /**
     */
    public void setControlPlaneLogProject(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogProject", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogTtl() {
        return software.amazon.jsii.Kernel.get(this, "controlPlaneLogTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setControlPlaneLogTtl(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogTtl", value);
    }

    /**
     */
    public void setControlPlaneLogTtl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogTtl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeleteOptions() {
        return software.amazon.jsii.Kernel.get(this, "deleteOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeleteOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deleteOptions", value);
    }

    /**
     */
    public void setDeleteOptions(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.DeleteOptionsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.DeleteOptionsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "deleteOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    /**
     */
    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionProviderKey() {
        return software.amazon.jsii.Kernel.get(this, "encryptionProviderKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncryptionProviderKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "encryptionProviderKey", value);
    }

    /**
     */
    public void setEncryptionProviderKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encryptionProviderKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointPublicAccess() {
        return software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointPublicAccess(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "endpointPublicAccess", value);
    }

    /**
     */
    public void setEndpointPublicAccess(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointPublicAccess", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFormatDisk() {
        return software.amazon.jsii.Kernel.get(this, "formatDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFormatDisk(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "formatDisk", value);
    }

    /**
     */
    public void setFormatDisk(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "formatDisk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsEnterpriseSecurityGroup() {
        return software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsEnterpriseSecurityGroup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isEnterpriseSecurityGroup", value);
    }

    /**
     */
    public void setIsEnterpriseSecurityGroup(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isEnterpriseSecurityGroup", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKeepInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "keepInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKeepInstanceName(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "keepInstanceName", value);
    }

    /**
     */
    public void setKeepInstanceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "keepInstanceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKeyPair() {
        return software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKeyPair(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "keyPair", value);
    }

    /**
     */
    public void setKeyPair(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "keyPair", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKubernetesVersion() {
        return software.amazon.jsii.Kernel.get(this, "kubernetesVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKubernetesVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "kubernetesVersion", value);
    }

    /**
     */
    public void setKubernetesVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kubernetesVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerSpec() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerSpec", value);
    }

    /**
     */
    public void setLoadBalancerSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoginPassword() {
        return software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoginPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loginPassword", value);
    }

    /**
     */
    public void setLoginPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loginPassword", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaintenanceWindow() {
        return software.amazon.jsii.Kernel.get(this, "maintenanceWindow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaintenanceWindow(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maintenanceWindow", value);
    }

    /**
     */
    public void setMaintenanceWindow(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.MaintenanceWindowProperty value) {
        software.amazon.jsii.Kernel.set(this, "maintenanceWindow", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNodeCidrMask() {
        return software.amazon.jsii.Kernel.get(this, "nodeCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeCidrMask(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nodeCidrMask", value);
    }

    /**
     */
    public void setNodeCidrMask(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeCidrMask", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNodeNameMode() {
        return software.amazon.jsii.Kernel.get(this, "nodeNameMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeNameMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nodeNameMode", value);
    }

    /**
     */
    public void setNodeNameMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeNameMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNodePools() {
        return software.amazon.jsii.Kernel.get(this, "nodePools", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodePools(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodePools", value);
    }

    /**
     */
    public void setNodePools(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.NodePoolsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.NodePoolsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "nodePools", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOsType() {
        return software.amazon.jsii.Kernel.get(this, "osType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOsType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "osType", value);
    }

    /**
     */
    public void setOsType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "osType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPlatform() {
        return software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPlatform(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "platform", value);
    }

    /**
     */
    public void setPlatform(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "platform", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPodVswitchIds() {
        return software.amazon.jsii.Kernel.get(this, "podVswitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPodVswitchIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "podVswitchIds", value);
    }

    /**
     */
    public void setPodVswitchIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "podVswitchIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxyMode() {
        return software.amazon.jsii.Kernel.get(this, "proxyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxyMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "proxyMode", value);
    }

    /**
     */
    public void setProxyMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxyMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuntime() {
        return software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuntime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "runtime", value);
    }

    /**
     */
    public void setRuntime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.RuntimeProperty value) {
        software.amazon.jsii.Kernel.set(this, "runtime", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityHardeningOs() {
        return software.amazon.jsii.Kernel.get(this, "securityHardeningOs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityHardeningOs(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "securityHardeningOs", value);
    }

    /**
     */
    public void setSecurityHardeningOs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityHardeningOs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceCidr() {
        return software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceCidr", value);
    }

    /**
     */
    public void setServiceCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntry() {
        return software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSnatEntry(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "snatEntry", value);
    }

    /**
     */
    public void setSnatEntry(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "snatEntry", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSocEnabled() {
        return software.amazon.jsii.Kernel.get(this, "socEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSocEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "socEnabled", value);
    }

    /**
     */
    public void setSocEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "socEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTaint() {
        return software.amazon.jsii.Kernel.get(this, "taint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaint(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taint", value);
    }

    /**
     */
    public void setTaint(final @org.jetbrains.annotations.Nullable java.util.List<java.util.Map<java.lang.String, java.lang.Object>> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.util.Map<java.lang.String, java.lang.Object> __val_ac66f0 = value.get(__idx_ac66f0);
                if (!(__val_ac66f0.keySet().toArray()[0] instanceof String)) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")").append(".keySet()")
                            .append(" to contain class String; received ")
                            .append(__val_ac66f0.keySet().toArray()[0].getClass()).toString());
                }
                for (final java.util.Map.Entry<String, java.lang.Object> __item_58ec25: __val_ac66f0.entrySet()) {
                    final java.lang.Object __val_58ec25 = __item_58ec25.getValue();
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "taint", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMins() {
        return software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeoutMins(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeoutMins", value);
    }

    /**
     */
    public void setTimeoutMins(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeoutMins", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserData(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userData", value);
    }

    /**
     */
    public void setUserData(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userData", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "zoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneIds", value);
    }

    /**
     */
    public void setZoneIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "zoneIds", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.AddonsProperty")
    @software.amazon.jsii.Jsii.Proxy(AddonsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AddonsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AddonsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AddonsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AddonsProperty> {
            java.lang.Object name;
            java.lang.Object config;
            java.lang.Object disabled;
            java.lang.Object version;

            /**
             * Sets the value of {@link AddonsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getConfig}
             * @param config the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder config(java.lang.String config) {
                this.config = config;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getConfig}
             * @param config the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
                this.config = config;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getDisabled}
             * @param disabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder disabled(java.lang.Boolean disabled) {
                this.disabled = disabled;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getDisabled}
             * @param disabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder disabled(com.aliyun.ros.cdk.core.IResolvable disabled) {
                this.disabled = disabled;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link AddonsProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AddonsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AddonsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AddonsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AddonsProperty {
            private final java.lang.Object name;
            private final java.lang.Object config;
            private final java.lang.Object disabled;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.disabled = software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.config = builder.config;
                this.disabled = builder.disabled;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getConfig() {
                return this.config;
            }

            @Override
            public final java.lang.Object getDisabled() {
                return this.disabled;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                if (this.getConfig() != null) {
                    data.set("config", om.valueToTree(this.getConfig()));
                }
                if (this.getDisabled() != null) {
                    data.set("disabled", om.valueToTree(this.getDisabled()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.AddonsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AddonsProperty.Jsii$Proxy that = (AddonsProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
                if (this.disabled != null ? !this.disabled.equals(that.disabled) : that.disabled != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
                result = 31 * result + (this.disabled != null ? this.disabled.hashCode() : 0);
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.DataDisksProperty")
    @software.amazon.jsii.Jsii.Proxy(DataDisksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataDisksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSize() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataDisksProperty> {
            java.lang.Object autoSnapshotPolicyId;
            java.lang.Object category;
            java.lang.Object encrypted;
            java.lang.Object performanceLevel;
            java.lang.Object size;

            /**
             * Sets the value of {@link DataDisksProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(java.lang.Boolean encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DataDisksProperty#getSize}
             * @param size the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataDisksProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataDisksProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataDisksProperty {
            private final java.lang.Object autoSnapshotPolicyId;
            private final java.lang.Object category;
            private final java.lang.Object encrypted;
            private final java.lang.Object performanceLevel;
            private final java.lang.Object size;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoSnapshotPolicyId = builder.autoSnapshotPolicyId;
                this.category = builder.category;
                this.encrypted = builder.encrypted;
                this.performanceLevel = builder.performanceLevel;
                this.size = builder.size;
            }

            @Override
            public final java.lang.Object getAutoSnapshotPolicyId() {
                return this.autoSnapshotPolicyId;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getEncrypted() {
                return this.encrypted;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoSnapshotPolicyId() != null) {
                    data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));
                }
                if (this.getCategory() != null) {
                    data.set("category", om.valueToTree(this.getCategory()));
                }
                if (this.getEncrypted() != null) {
                    data.set("encrypted", om.valueToTree(this.getEncrypted()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }
                if (this.getSize() != null) {
                    data.set("size", om.valueToTree(this.getSize()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.DataDisksProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataDisksProperty.Jsii$Proxy that = (DataDisksProperty.Jsii$Proxy) o;

                if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
                if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
                if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
                if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
                return this.size != null ? this.size.equals(that.size) : that.size == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoSnapshotPolicyId != null ? this.autoSnapshotPolicyId.hashCode() : 0;
                result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
                result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                result = 31 * result + (this.size != null ? this.size.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.DeleteOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(DeleteOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DeleteOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DeleteOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DeleteOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DeleteOptionsProperty> {
            java.lang.Object deleteMode;
            java.lang.Object resourceType;

            /**
             * Sets the value of {@link DeleteOptionsProperty#getDeleteMode}
             * @param deleteMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteMode(java.lang.String deleteMode) {
                this.deleteMode = deleteMode;
                return this;
            }

            /**
             * Sets the value of {@link DeleteOptionsProperty#getDeleteMode}
             * @param deleteMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteMode(com.aliyun.ros.cdk.core.IResolvable deleteMode) {
                this.deleteMode = deleteMode;
                return this;
            }

            /**
             * Sets the value of {@link DeleteOptionsProperty#getResourceType}
             * @param resourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceType(java.lang.String resourceType) {
                this.resourceType = resourceType;
                return this;
            }

            /**
             * Sets the value of {@link DeleteOptionsProperty#getResourceType}
             * @param resourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
                this.resourceType = resourceType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DeleteOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DeleteOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DeleteOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeleteOptionsProperty {
            private final java.lang.Object deleteMode;
            private final java.lang.Object resourceType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.deleteMode = software.amazon.jsii.Kernel.get(this, "deleteMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.deleteMode = builder.deleteMode;
                this.resourceType = builder.resourceType;
            }

            @Override
            public final java.lang.Object getDeleteMode() {
                return this.deleteMode;
            }

            @Override
            public final java.lang.Object getResourceType() {
                return this.resourceType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDeleteMode() != null) {
                    data.set("deleteMode", om.valueToTree(this.getDeleteMode()));
                }
                if (this.getResourceType() != null) {
                    data.set("resourceType", om.valueToTree(this.getResourceType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.DeleteOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DeleteOptionsProperty.Jsii$Proxy that = (DeleteOptionsProperty.Jsii$Proxy) o;

                if (this.deleteMode != null ? !this.deleteMode.equals(that.deleteMode) : that.deleteMode != null) return false;
                return this.resourceType != null ? this.resourceType.equals(that.resourceType) : that.resourceType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.deleteMode != null ? this.deleteMode.hashCode() : 0;
                result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.KubernetesConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(KubernetesConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface KubernetesConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuntime();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuntimeVersion();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpuPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeNameMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTaints() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link KubernetesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link KubernetesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<KubernetesConfigProperty> {
            java.lang.Object runtime;
            java.lang.Object runtimeVersion;
            java.lang.Object cpuPolicy;
            java.lang.Object labels;
            java.lang.Object nodeNameMode;
            java.lang.Object taints;

            /**
             * Sets the value of {@link KubernetesConfigProperty#getRuntime}
             * @param runtime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runtime(java.lang.String runtime) {
                this.runtime = runtime;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getRuntime}
             * @param runtime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runtime(com.aliyun.ros.cdk.core.IResolvable runtime) {
                this.runtime = runtime;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getRuntimeVersion}
             * @param runtimeVersion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runtimeVersion(java.lang.String runtimeVersion) {
                this.runtimeVersion = runtimeVersion;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getRuntimeVersion}
             * @param runtimeVersion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runtimeVersion(com.aliyun.ros.cdk.core.IResolvable runtimeVersion) {
                this.runtimeVersion = runtimeVersion;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getCpuPolicy}
             * @param cpuPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpuPolicy(java.lang.String cpuPolicy) {
                this.cpuPolicy = cpuPolicy;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getCpuPolicy}
             * @param cpuPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpuPolicy(com.aliyun.ros.cdk.core.IResolvable cpuPolicy) {
                this.cpuPolicy = cpuPolicy;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getLabels}
             * @param labels the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
                this.labels = labels;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getLabels}
             * @param labels the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder labels(java.util.List<? extends java.lang.Object> labels) {
                this.labels = labels;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getNodeNameMode}
             * @param nodeNameMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeNameMode(java.lang.String nodeNameMode) {
                this.nodeNameMode = nodeNameMode;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getNodeNameMode}
             * @param nodeNameMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeNameMode(com.aliyun.ros.cdk.core.IResolvable nodeNameMode) {
                this.nodeNameMode = nodeNameMode;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getTaints}
             * @param taints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder taints(com.aliyun.ros.cdk.core.IResolvable taints) {
                this.taints = taints;
                return this;
            }

            /**
             * Sets the value of {@link KubernetesConfigProperty#getTaints}
             * @param taints the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder taints(java.util.List<? extends java.lang.Object> taints) {
                this.taints = taints;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link KubernetesConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public KubernetesConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link KubernetesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KubernetesConfigProperty {
            private final java.lang.Object runtime;
            private final java.lang.Object runtimeVersion;
            private final java.lang.Object cpuPolicy;
            private final java.lang.Object labels;
            private final java.lang.Object nodeNameMode;
            private final java.lang.Object taints;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.runtime = software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.runtimeVersion = software.amazon.jsii.Kernel.get(this, "runtimeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpuPolicy = software.amazon.jsii.Kernel.get(this, "cpuPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeNameMode = software.amazon.jsii.Kernel.get(this, "nodeNameMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.taints = software.amazon.jsii.Kernel.get(this, "taints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.runtime = java.util.Objects.requireNonNull(builder.runtime, "runtime is required");
                this.runtimeVersion = java.util.Objects.requireNonNull(builder.runtimeVersion, "runtimeVersion is required");
                this.cpuPolicy = builder.cpuPolicy;
                this.labels = builder.labels;
                this.nodeNameMode = builder.nodeNameMode;
                this.taints = builder.taints;
            }

            @Override
            public final java.lang.Object getRuntime() {
                return this.runtime;
            }

            @Override
            public final java.lang.Object getRuntimeVersion() {
                return this.runtimeVersion;
            }

            @Override
            public final java.lang.Object getCpuPolicy() {
                return this.cpuPolicy;
            }

            @Override
            public final java.lang.Object getLabels() {
                return this.labels;
            }

            @Override
            public final java.lang.Object getNodeNameMode() {
                return this.nodeNameMode;
            }

            @Override
            public final java.lang.Object getTaints() {
                return this.taints;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("runtime", om.valueToTree(this.getRuntime()));
                data.set("runtimeVersion", om.valueToTree(this.getRuntimeVersion()));
                if (this.getCpuPolicy() != null) {
                    data.set("cpuPolicy", om.valueToTree(this.getCpuPolicy()));
                }
                if (this.getLabels() != null) {
                    data.set("labels", om.valueToTree(this.getLabels()));
                }
                if (this.getNodeNameMode() != null) {
                    data.set("nodeNameMode", om.valueToTree(this.getNodeNameMode()));
                }
                if (this.getTaints() != null) {
                    data.set("taints", om.valueToTree(this.getTaints()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.KubernetesConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                KubernetesConfigProperty.Jsii$Proxy that = (KubernetesConfigProperty.Jsii$Proxy) o;

                if (!runtime.equals(that.runtime)) return false;
                if (!runtimeVersion.equals(that.runtimeVersion)) return false;
                if (this.cpuPolicy != null ? !this.cpuPolicy.equals(that.cpuPolicy) : that.cpuPolicy != null) return false;
                if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
                if (this.nodeNameMode != null ? !this.nodeNameMode.equals(that.nodeNameMode) : that.nodeNameMode != null) return false;
                return this.taints != null ? this.taints.equals(that.taints) : that.taints == null;
            }

            @Override
            public final int hashCode() {
                int result = this.runtime.hashCode();
                result = 31 * result + (this.runtimeVersion.hashCode());
                result = 31 * result + (this.cpuPolicy != null ? this.cpuPolicy.hashCode() : 0);
                result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
                result = 31 * result + (this.nodeNameMode != null ? this.nodeNameMode.hashCode() : 0);
                result = 31 * result + (this.taints != null ? this.taints.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.LabelsProperty")
    @software.amazon.jsii.Jsii.Proxy(LabelsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LabelsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LabelsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link LabelsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LabelsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LabelsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LabelsProperty {
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
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
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
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.LabelsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LabelsProperty.Jsii$Proxy that = (LabelsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.MaintenanceWindowProperty")
    @software.amazon.jsii.Jsii.Proxy(MaintenanceWindowProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MaintenanceWindowProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaintenanceTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRecurrence() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWeeklyPeriod() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MaintenanceWindowProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MaintenanceWindowProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MaintenanceWindowProperty> {
            java.lang.Object duration;
            java.lang.Object enable;
            java.lang.Object maintenanceTime;
            java.lang.Object recurrence;
            java.lang.Object weeklyPeriod;

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(java.lang.String duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getDuration}
             * @param duration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
                this.duration = duration;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getMaintenanceTime}
             * @param maintenanceTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maintenanceTime(java.lang.String maintenanceTime) {
                this.maintenanceTime = maintenanceTime;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getMaintenanceTime}
             * @param maintenanceTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maintenanceTime(com.aliyun.ros.cdk.core.IResolvable maintenanceTime) {
                this.maintenanceTime = maintenanceTime;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getRecurrence}
             * @param recurrence the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder recurrence(java.lang.String recurrence) {
                this.recurrence = recurrence;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getRecurrence}
             * @param recurrence the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder recurrence(com.aliyun.ros.cdk.core.IResolvable recurrence) {
                this.recurrence = recurrence;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getWeeklyPeriod}
             * @param weeklyPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weeklyPeriod(java.lang.String weeklyPeriod) {
                this.weeklyPeriod = weeklyPeriod;
                return this;
            }

            /**
             * Sets the value of {@link MaintenanceWindowProperty#getWeeklyPeriod}
             * @param weeklyPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weeklyPeriod(com.aliyun.ros.cdk.core.IResolvable weeklyPeriod) {
                this.weeklyPeriod = weeklyPeriod;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MaintenanceWindowProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MaintenanceWindowProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MaintenanceWindowProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MaintenanceWindowProperty {
            private final java.lang.Object duration;
            private final java.lang.Object enable;
            private final java.lang.Object maintenanceTime;
            private final java.lang.Object recurrence;
            private final java.lang.Object weeklyPeriod;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maintenanceTime = software.amazon.jsii.Kernel.get(this, "maintenanceTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.recurrence = software.amazon.jsii.Kernel.get(this, "recurrence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weeklyPeriod = software.amazon.jsii.Kernel.get(this, "weeklyPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.duration = builder.duration;
                this.enable = builder.enable;
                this.maintenanceTime = builder.maintenanceTime;
                this.recurrence = builder.recurrence;
                this.weeklyPeriod = builder.weeklyPeriod;
            }

            @Override
            public final java.lang.Object getDuration() {
                return this.duration;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getMaintenanceTime() {
                return this.maintenanceTime;
            }

            @Override
            public final java.lang.Object getRecurrence() {
                return this.recurrence;
            }

            @Override
            public final java.lang.Object getWeeklyPeriod() {
                return this.weeklyPeriod;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDuration() != null) {
                    data.set("duration", om.valueToTree(this.getDuration()));
                }
                if (this.getEnable() != null) {
                    data.set("enable", om.valueToTree(this.getEnable()));
                }
                if (this.getMaintenanceTime() != null) {
                    data.set("maintenanceTime", om.valueToTree(this.getMaintenanceTime()));
                }
                if (this.getRecurrence() != null) {
                    data.set("recurrence", om.valueToTree(this.getRecurrence()));
                }
                if (this.getWeeklyPeriod() != null) {
                    data.set("weeklyPeriod", om.valueToTree(this.getWeeklyPeriod()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.MaintenanceWindowProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MaintenanceWindowProperty.Jsii$Proxy that = (MaintenanceWindowProperty.Jsii$Proxy) o;

                if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
                if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
                if (this.maintenanceTime != null ? !this.maintenanceTime.equals(that.maintenanceTime) : that.maintenanceTime != null) return false;
                if (this.recurrence != null ? !this.recurrence.equals(that.recurrence) : that.recurrence != null) return false;
                return this.weeklyPeriod != null ? this.weeklyPeriod.equals(that.weeklyPeriod) : that.weeklyPeriod == null;
            }

            @Override
            public final int hashCode() {
                int result = this.duration != null ? this.duration.hashCode() : 0;
                result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
                result = 31 * result + (this.maintenanceTime != null ? this.maintenanceTime.hashCode() : 0);
                result = 31 * result + (this.recurrence != null ? this.recurrence.hashCode() : 0);
                result = 31 * result + (this.weeklyPeriod != null ? this.weeklyPeriod.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.NodePoolInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(NodePoolInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NodePoolInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NodePoolInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NodePoolInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NodePoolInfoProperty> {
            java.lang.Object name;
            java.lang.Object resourceGroupId;
            java.lang.Object type;

            /**
             * Sets the value of {@link NodePoolInfoProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolInfoProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolInfoProperty#getResourceGroupId}
             * @param resourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupId(java.lang.String resourceGroupId) {
                this.resourceGroupId = resourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolInfoProperty#getResourceGroupId}
             * @param resourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
                this.resourceGroupId = resourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolInfoProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolInfoProperty#getType}
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
             * @return a new instance of {@link NodePoolInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NodePoolInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NodePoolInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NodePoolInfoProperty {
            private final java.lang.Object name;
            private final java.lang.Object resourceGroupId;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.resourceGroupId = builder.resourceGroupId;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getResourceGroupId() {
                return this.resourceGroupId;
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

                data.set("name", om.valueToTree(this.getName()));
                if (this.getResourceGroupId() != null) {
                    data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.NodePoolInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NodePoolInfoProperty.Jsii$Proxy that = (NodePoolInfoProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.NodePoolsProperty")
    @software.amazon.jsii.Jsii.Proxy(NodePoolsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NodePoolsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroup();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKubernetesConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodePoolInfo() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NodePoolsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NodePoolsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NodePoolsProperty> {
            java.lang.Object scalingGroup;
            java.lang.Object kubernetesConfig;
            java.lang.Object nodePoolInfo;

            /**
             * Sets the value of {@link NodePoolsProperty#getScalingGroup}
             * @param scalingGroup the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scalingGroup(com.aliyun.ros.cdk.core.IResolvable scalingGroup) {
                this.scalingGroup = scalingGroup;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolsProperty#getScalingGroup}
             * @param scalingGroup the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scalingGroup(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupProperty scalingGroup) {
                this.scalingGroup = scalingGroup;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolsProperty#getKubernetesConfig}
             * @param kubernetesConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kubernetesConfig(com.aliyun.ros.cdk.core.IResolvable kubernetesConfig) {
                this.kubernetesConfig = kubernetesConfig;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolsProperty#getKubernetesConfig}
             * @param kubernetesConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kubernetesConfig(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.KubernetesConfigProperty kubernetesConfig) {
                this.kubernetesConfig = kubernetesConfig;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolsProperty#getNodePoolInfo}
             * @param nodePoolInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodePoolInfo(com.aliyun.ros.cdk.core.IResolvable nodePoolInfo) {
                this.nodePoolInfo = nodePoolInfo;
                return this;
            }

            /**
             * Sets the value of {@link NodePoolsProperty#getNodePoolInfo}
             * @param nodePoolInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodePoolInfo(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.NodePoolInfoProperty nodePoolInfo) {
                this.nodePoolInfo = nodePoolInfo;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NodePoolsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NodePoolsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NodePoolsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NodePoolsProperty {
            private final java.lang.Object scalingGroup;
            private final java.lang.Object kubernetesConfig;
            private final java.lang.Object nodePoolInfo;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.scalingGroup = software.amazon.jsii.Kernel.get(this, "scalingGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.kubernetesConfig = software.amazon.jsii.Kernel.get(this, "kubernetesConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodePoolInfo = software.amazon.jsii.Kernel.get(this, "nodePoolInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.scalingGroup = java.util.Objects.requireNonNull(builder.scalingGroup, "scalingGroup is required");
                this.kubernetesConfig = builder.kubernetesConfig;
                this.nodePoolInfo = builder.nodePoolInfo;
            }

            @Override
            public final java.lang.Object getScalingGroup() {
                return this.scalingGroup;
            }

            @Override
            public final java.lang.Object getKubernetesConfig() {
                return this.kubernetesConfig;
            }

            @Override
            public final java.lang.Object getNodePoolInfo() {
                return this.nodePoolInfo;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("scalingGroup", om.valueToTree(this.getScalingGroup()));
                if (this.getKubernetesConfig() != null) {
                    data.set("kubernetesConfig", om.valueToTree(this.getKubernetesConfig()));
                }
                if (this.getNodePoolInfo() != null) {
                    data.set("nodePoolInfo", om.valueToTree(this.getNodePoolInfo()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.NodePoolsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NodePoolsProperty.Jsii$Proxy that = (NodePoolsProperty.Jsii$Proxy) o;

                if (!scalingGroup.equals(that.scalingGroup)) return false;
                if (this.kubernetesConfig != null ? !this.kubernetesConfig.equals(that.kubernetesConfig) : that.kubernetesConfig != null) return false;
                return this.nodePoolInfo != null ? this.nodePoolInfo.equals(that.nodePoolInfo) : that.nodePoolInfo == null;
            }

            @Override
            public final int hashCode() {
                int result = this.scalingGroup.hashCode();
                result = 31 * result + (this.kubernetesConfig != null ? this.kubernetesConfig.hashCode() : 0);
                result = 31 * result + (this.nodePoolInfo != null ? this.nodePoolInfo.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.RuntimeProperty")
    @software.amazon.jsii.Jsii.Proxy(RuntimeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuntimeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuntimeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuntimeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuntimeProperty> {
            java.lang.Object name;
            java.lang.Object version;

            /**
             * Sets the value of {@link RuntimeProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link RuntimeProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link RuntimeProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link RuntimeProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuntimeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuntimeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RuntimeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuntimeProperty {
            private final java.lang.Object name;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.RuntimeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuntimeProperty.Jsii$Proxy that = (RuntimeProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.ScalingGroupProperty")
    @software.amazon.jsii.Jsii.Proxy(ScalingGroupProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScalingGroupProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceTypes();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSystemDiskSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchIds();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDataDisks() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDesiredSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsEnterpriseSecurityGroup() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPair() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLoginPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdsInstances() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty> getTags() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZoneIds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScalingGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScalingGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScalingGroupProperty> {
            java.lang.Object instanceTypes;
            java.lang.Object systemDiskSize;
            java.lang.Object vSwitchIds;
            java.lang.Object dataDisks;
            java.lang.Object desiredSize;
            java.lang.Object imageId;
            java.lang.Object instanceChargeType;
            java.lang.Object internetChargeType;
            java.lang.Object internetMaxBandwidthOut;
            java.lang.Object isEnterpriseSecurityGroup;
            java.lang.Object keyPair;
            java.lang.Object loginPassword;
            java.lang.Object period;
            java.lang.Object periodUnit;
            java.lang.Object rdsInstances;
            java.lang.Object systemDiskCategory;
            java.lang.Object systemDiskPerformanceLevel;
            java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty> tags;
            java.lang.Object zoneIds;

            /**
             * Sets the value of {@link ScalingGroupProperty#getInstanceTypes}
             * @param instanceTypes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
                this.instanceTypes = instanceTypes;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInstanceTypes}
             * @param instanceTypes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
                this.instanceTypes = instanceTypes;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(java.lang.Number systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskSize}
             * @param systemDiskSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
                this.systemDiskSize = systemDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(com.aliyun.ros.cdk.core.IResolvable dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getDataDisks}
             * @param dataDisks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dataDisks(java.util.List<? extends java.lang.Object> dataDisks) {
                this.dataDisks = dataDisks;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getDesiredSize}
             * @param desiredSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder desiredSize(java.lang.Number desiredSize) {
                this.desiredSize = desiredSize;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getDesiredSize}
             * @param desiredSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder desiredSize(com.aliyun.ros.cdk.core.IResolvable desiredSize) {
                this.desiredSize = desiredSize;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getImageId}
             * @param imageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(java.lang.String imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getImageId}
             * @param imageId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
                this.imageId = imageId;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(java.lang.String instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInstanceChargeType}
             * @param instanceChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
                this.instanceChargeType = instanceChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(java.lang.String internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInternetChargeType}
             * @param internetChargeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
                this.internetChargeType = internetChargeType;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInternetMaxBandwidthOut}
             * @param internetMaxBandwidthOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
                this.internetMaxBandwidthOut = internetMaxBandwidthOut;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getInternetMaxBandwidthOut}
             * @param internetMaxBandwidthOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
                this.internetMaxBandwidthOut = internetMaxBandwidthOut;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getIsEnterpriseSecurityGroup}
             * @param isEnterpriseSecurityGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isEnterpriseSecurityGroup(java.lang.Boolean isEnterpriseSecurityGroup) {
                this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getIsEnterpriseSecurityGroup}
             * @param isEnterpriseSecurityGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isEnterpriseSecurityGroup(com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
                this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getKeyPair}
             * @param keyPair the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPair(java.lang.String keyPair) {
                this.keyPair = keyPair;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getKeyPair}
             * @param keyPair the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPair(com.aliyun.ros.cdk.core.IResolvable keyPair) {
                this.keyPair = keyPair;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getLoginPassword}
             * @param loginPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loginPassword(java.lang.String loginPassword) {
                this.loginPassword = loginPassword;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getLoginPassword}
             * @param loginPassword the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loginPassword(com.aliyun.ros.cdk.core.IResolvable loginPassword) {
                this.loginPassword = loginPassword;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.Number period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPeriodUnit}
             * @param periodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodUnit(java.lang.String periodUnit) {
                this.periodUnit = periodUnit;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getPeriodUnit}
             * @param periodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
                this.periodUnit = periodUnit;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getRdsInstances}
             * @param rdsInstances the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsInstances(com.aliyun.ros.cdk.core.IResolvable rdsInstances) {
                this.rdsInstances = rdsInstances;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getRdsInstances}
             * @param rdsInstances the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdsInstances(java.util.List<? extends java.lang.Object> rdsInstances) {
                this.rdsInstances = rdsInstances;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskCategory}
             * @param systemDiskCategory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
                this.systemDiskCategory = systemDiskCategory;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskPerformanceLevel}
             * @param systemDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
                this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getSystemDiskPerformanceLevel}
             * @param systemDiskPerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
                this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getTags}
             * @param tags the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @SuppressWarnings("unchecked")
            public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty> tags) {
                this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty>)tags;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getZoneIds}
             * @param zoneIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneIds(com.aliyun.ros.cdk.core.IResolvable zoneIds) {
                this.zoneIds = zoneIds;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupProperty#getZoneIds}
             * @param zoneIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneIds(java.util.List<? extends java.lang.Object> zoneIds) {
                this.zoneIds = zoneIds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScalingGroupProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScalingGroupProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScalingGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingGroupProperty {
            private final java.lang.Object instanceTypes;
            private final java.lang.Object systemDiskSize;
            private final java.lang.Object vSwitchIds;
            private final java.lang.Object dataDisks;
            private final java.lang.Object desiredSize;
            private final java.lang.Object imageId;
            private final java.lang.Object instanceChargeType;
            private final java.lang.Object internetChargeType;
            private final java.lang.Object internetMaxBandwidthOut;
            private final java.lang.Object isEnterpriseSecurityGroup;
            private final java.lang.Object keyPair;
            private final java.lang.Object loginPassword;
            private final java.lang.Object period;
            private final java.lang.Object periodUnit;
            private final java.lang.Object rdsInstances;
            private final java.lang.Object systemDiskCategory;
            private final java.lang.Object systemDiskPerformanceLevel;
            private final java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty> tags;
            private final java.lang.Object zoneIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceTypes = software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dataDisks = software.amazon.jsii.Kernel.get(this, "dataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.desiredSize = software.amazon.jsii.Kernel.get(this, "desiredSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isEnterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rdsInstances = software.amazon.jsii.Kernel.get(this, "rdsInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty.class)));
                this.zoneIds = software.amazon.jsii.Kernel.get(this, "zoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            @SuppressWarnings("unchecked")
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceTypes = java.util.Objects.requireNonNull(builder.instanceTypes, "instanceTypes is required");
                this.systemDiskSize = java.util.Objects.requireNonNull(builder.systemDiskSize, "systemDiskSize is required");
                this.vSwitchIds = java.util.Objects.requireNonNull(builder.vSwitchIds, "vSwitchIds is required");
                this.dataDisks = builder.dataDisks;
                this.desiredSize = builder.desiredSize;
                this.imageId = builder.imageId;
                this.instanceChargeType = builder.instanceChargeType;
                this.internetChargeType = builder.internetChargeType;
                this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
                this.isEnterpriseSecurityGroup = builder.isEnterpriseSecurityGroup;
                this.keyPair = builder.keyPair;
                this.loginPassword = builder.loginPassword;
                this.period = builder.period;
                this.periodUnit = builder.periodUnit;
                this.rdsInstances = builder.rdsInstances;
                this.systemDiskCategory = builder.systemDiskCategory;
                this.systemDiskPerformanceLevel = builder.systemDiskPerformanceLevel;
                this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty>)builder.tags;
                this.zoneIds = builder.zoneIds;
            }

            @Override
            public final java.lang.Object getInstanceTypes() {
                return this.instanceTypes;
            }

            @Override
            public final java.lang.Object getSystemDiskSize() {
                return this.systemDiskSize;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            public final java.lang.Object getDataDisks() {
                return this.dataDisks;
            }

            @Override
            public final java.lang.Object getDesiredSize() {
                return this.desiredSize;
            }

            @Override
            public final java.lang.Object getImageId() {
                return this.imageId;
            }

            @Override
            public final java.lang.Object getInstanceChargeType() {
                return this.instanceChargeType;
            }

            @Override
            public final java.lang.Object getInternetChargeType() {
                return this.internetChargeType;
            }

            @Override
            public final java.lang.Object getInternetMaxBandwidthOut() {
                return this.internetMaxBandwidthOut;
            }

            @Override
            public final java.lang.Object getIsEnterpriseSecurityGroup() {
                return this.isEnterpriseSecurityGroup;
            }

            @Override
            public final java.lang.Object getKeyPair() {
                return this.keyPair;
            }

            @Override
            public final java.lang.Object getLoginPassword() {
                return this.loginPassword;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
            }

            @Override
            public final java.lang.Object getPeriodUnit() {
                return this.periodUnit;
            }

            @Override
            public final java.lang.Object getRdsInstances() {
                return this.rdsInstances;
            }

            @Override
            public final java.lang.Object getSystemDiskCategory() {
                return this.systemDiskCategory;
            }

            @Override
            public final java.lang.Object getSystemDiskPerformanceLevel() {
                return this.systemDiskPerformanceLevel;
            }

            @Override
            public final java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty> getTags() {
                return this.tags;
            }

            @Override
            public final java.lang.Object getZoneIds() {
                return this.zoneIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceTypes", om.valueToTree(this.getInstanceTypes()));
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                if (this.getDataDisks() != null) {
                    data.set("dataDisks", om.valueToTree(this.getDataDisks()));
                }
                if (this.getDesiredSize() != null) {
                    data.set("desiredSize", om.valueToTree(this.getDesiredSize()));
                }
                if (this.getImageId() != null) {
                    data.set("imageId", om.valueToTree(this.getImageId()));
                }
                if (this.getInstanceChargeType() != null) {
                    data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
                }
                if (this.getInternetChargeType() != null) {
                    data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
                }
                if (this.getInternetMaxBandwidthOut() != null) {
                    data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
                }
                if (this.getIsEnterpriseSecurityGroup() != null) {
                    data.set("isEnterpriseSecurityGroup", om.valueToTree(this.getIsEnterpriseSecurityGroup()));
                }
                if (this.getKeyPair() != null) {
                    data.set("keyPair", om.valueToTree(this.getKeyPair()));
                }
                if (this.getLoginPassword() != null) {
                    data.set("loginPassword", om.valueToTree(this.getLoginPassword()));
                }
                if (this.getPeriod() != null) {
                    data.set("period", om.valueToTree(this.getPeriod()));
                }
                if (this.getPeriodUnit() != null) {
                    data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
                }
                if (this.getRdsInstances() != null) {
                    data.set("rdsInstances", om.valueToTree(this.getRdsInstances()));
                }
                if (this.getSystemDiskCategory() != null) {
                    data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
                }
                if (this.getSystemDiskPerformanceLevel() != null) {
                    data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
                }
                if (this.getTags() != null) {
                    data.set("tags", om.valueToTree(this.getTags()));
                }
                if (this.getZoneIds() != null) {
                    data.set("zoneIds", om.valueToTree(this.getZoneIds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.ScalingGroupProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScalingGroupProperty.Jsii$Proxy that = (ScalingGroupProperty.Jsii$Proxy) o;

                if (!instanceTypes.equals(that.instanceTypes)) return false;
                if (!systemDiskSize.equals(that.systemDiskSize)) return false;
                if (!vSwitchIds.equals(that.vSwitchIds)) return false;
                if (this.dataDisks != null ? !this.dataDisks.equals(that.dataDisks) : that.dataDisks != null) return false;
                if (this.desiredSize != null ? !this.desiredSize.equals(that.desiredSize) : that.desiredSize != null) return false;
                if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
                if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
                if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
                if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
                if (this.isEnterpriseSecurityGroup != null ? !this.isEnterpriseSecurityGroup.equals(that.isEnterpriseSecurityGroup) : that.isEnterpriseSecurityGroup != null) return false;
                if (this.keyPair != null ? !this.keyPair.equals(that.keyPair) : that.keyPair != null) return false;
                if (this.loginPassword != null ? !this.loginPassword.equals(that.loginPassword) : that.loginPassword != null) return false;
                if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
                if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
                if (this.rdsInstances != null ? !this.rdsInstances.equals(that.rdsInstances) : that.rdsInstances != null) return false;
                if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
                if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
                if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
                return this.zoneIds != null ? this.zoneIds.equals(that.zoneIds) : that.zoneIds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceTypes.hashCode();
                result = 31 * result + (this.systemDiskSize.hashCode());
                result = 31 * result + (this.vSwitchIds.hashCode());
                result = 31 * result + (this.dataDisks != null ? this.dataDisks.hashCode() : 0);
                result = 31 * result + (this.desiredSize != null ? this.desiredSize.hashCode() : 0);
                result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
                result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
                result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
                result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
                result = 31 * result + (this.isEnterpriseSecurityGroup != null ? this.isEnterpriseSecurityGroup.hashCode() : 0);
                result = 31 * result + (this.keyPair != null ? this.keyPair.hashCode() : 0);
                result = 31 * result + (this.loginPassword != null ? this.loginPassword.hashCode() : 0);
                result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
                result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
                result = 31 * result + (this.rdsInstances != null ? this.rdsInstances.hashCode() : 0);
                result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
                result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
                result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
                result = 31 * result + (this.zoneIds != null ? this.zoneIds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty")
    @software.amazon.jsii.Jsii.Proxy(ScalingGroupTagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScalingGroupTagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link ScalingGroupTagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScalingGroupTagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScalingGroupTagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link ScalingGroupTagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupTagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupTagsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ScalingGroupTagsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScalingGroupTagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScalingGroupTagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScalingGroupTagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingGroupTagsProperty {
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
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
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
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScalingGroupTagsProperty.Jsii$Proxy that = (ScalingGroupTagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TagsProperty"));
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
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TaintsProperty")
    @software.amazon.jsii.Jsii.Proxy(TaintsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TaintsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEffect() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TaintsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TaintsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TaintsProperty> {
            java.lang.Object key;
            java.lang.Object value;
            java.lang.Object effect;

            /**
             * Sets the value of {@link TaintsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getEffect}
             * @param effect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(java.lang.String effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link TaintsProperty#getEffect}
             * @param effect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(com.aliyun.ros.cdk.core.IResolvable effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TaintsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TaintsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TaintsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TaintsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;
            private final java.lang.Object effect;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.effect = software.amazon.jsii.Kernel.get(this, "effect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
                this.effect = builder.effect;
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
            public final java.lang.Object getEffect() {
                return this.effect;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                data.set("value", om.valueToTree(this.getValue()));
                if (this.getEffect() != null) {
                    data.set("effect", om.valueToTree(this.getEffect()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TaintsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TaintsProperty.Jsii$Proxy that = (TaintsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                if (!value.equals(that.value)) return false;
                return this.effect != null ? this.effect.equals(that.effect) : that.effect == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                result = 31 * result + (this.effect != null ? this.effect.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster> {
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
        private final com.aliyun.ros.cdk.cs.RosManagedKubernetesClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.RosManagedKubernetesClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
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
         * @param addons This parameter is required.
         */
        public Builder addons(final com.aliyun.ros.cdk.core.IResolvable addons) {
            this.props.addons(addons);
            return this;
        }
        /**
         * @return {@code this}
         * @param addons This parameter is required.
         */
        public Builder addons(final java.util.List<? extends java.lang.Object> addons) {
            this.props.addons(addons);
            return this;
        }

        /**
         * @return {@code this}
         * @param cloudMonitorFlags This parameter is required.
         */
        public Builder cloudMonitorFlags(final java.lang.Boolean cloudMonitorFlags) {
            this.props.cloudMonitorFlags(cloudMonitorFlags);
            return this;
        }
        /**
         * @return {@code this}
         * @param cloudMonitorFlags This parameter is required.
         */
        public Builder cloudMonitorFlags(final com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.props.cloudMonitorFlags(cloudMonitorFlags);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterSpec This parameter is required.
         */
        public Builder clusterSpec(final java.lang.String clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterSpec This parameter is required.
         */
        public Builder clusterSpec(final com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param containerCidr This parameter is required.
         */
        public Builder containerCidr(final java.lang.String containerCidr) {
            this.props.containerCidr(containerCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param containerCidr This parameter is required.
         */
        public Builder containerCidr(final com.aliyun.ros.cdk.core.IResolvable containerCidr) {
            this.props.containerCidr(containerCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param controlPlaneLogComponents This parameter is required.
         */
        public Builder controlPlaneLogComponents(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogComponents) {
            this.props.controlPlaneLogComponents(controlPlaneLogComponents);
            return this;
        }
        /**
         * @return {@code this}
         * @param controlPlaneLogComponents This parameter is required.
         */
        public Builder controlPlaneLogComponents(final java.util.List<? extends java.lang.Object> controlPlaneLogComponents) {
            this.props.controlPlaneLogComponents(controlPlaneLogComponents);
            return this;
        }

        /**
         * @return {@code this}
         * @param controlPlaneLogProject This parameter is required.
         */
        public Builder controlPlaneLogProject(final java.lang.String controlPlaneLogProject) {
            this.props.controlPlaneLogProject(controlPlaneLogProject);
            return this;
        }
        /**
         * @return {@code this}
         * @param controlPlaneLogProject This parameter is required.
         */
        public Builder controlPlaneLogProject(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogProject) {
            this.props.controlPlaneLogProject(controlPlaneLogProject);
            return this;
        }

        /**
         * @return {@code this}
         * @param controlPlaneLogTtl This parameter is required.
         */
        public Builder controlPlaneLogTtl(final java.lang.Number controlPlaneLogTtl) {
            this.props.controlPlaneLogTtl(controlPlaneLogTtl);
            return this;
        }
        /**
         * @return {@code this}
         * @param controlPlaneLogTtl This parameter is required.
         */
        public Builder controlPlaneLogTtl(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogTtl) {
            this.props.controlPlaneLogTtl(controlPlaneLogTtl);
            return this;
        }

        /**
         * @return {@code this}
         * @param deleteOptions This parameter is required.
         */
        public Builder deleteOptions(final com.aliyun.ros.cdk.core.IResolvable deleteOptions) {
            this.props.deleteOptions(deleteOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param deleteOptions This parameter is required.
         */
        public Builder deleteOptions(final java.util.List<? extends java.lang.Object> deleteOptions) {
            this.props.deleteOptions(deleteOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionProtection This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionProtection This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param encryptionProviderKey This parameter is required.
         */
        public Builder encryptionProviderKey(final java.lang.String encryptionProviderKey) {
            this.props.encryptionProviderKey(encryptionProviderKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param encryptionProviderKey This parameter is required.
         */
        public Builder encryptionProviderKey(final com.aliyun.ros.cdk.core.IResolvable encryptionProviderKey) {
            this.props.encryptionProviderKey(encryptionProviderKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointPublicAccess This parameter is required.
         */
        public Builder endpointPublicAccess(final java.lang.Boolean endpointPublicAccess) {
            this.props.endpointPublicAccess(endpointPublicAccess);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointPublicAccess This parameter is required.
         */
        public Builder endpointPublicAccess(final com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.props.endpointPublicAccess(endpointPublicAccess);
            return this;
        }

        /**
         * @return {@code this}
         * @param formatDisk This parameter is required.
         */
        public Builder formatDisk(final java.lang.Boolean formatDisk) {
            this.props.formatDisk(formatDisk);
            return this;
        }
        /**
         * @return {@code this}
         * @param formatDisk This parameter is required.
         */
        public Builder formatDisk(final com.aliyun.ros.cdk.core.IResolvable formatDisk) {
            this.props.formatDisk(formatDisk);
            return this;
        }

        /**
         * @return {@code this}
         * @param isEnterpriseSecurityGroup This parameter is required.
         */
        public Builder isEnterpriseSecurityGroup(final java.lang.Boolean isEnterpriseSecurityGroup) {
            this.props.isEnterpriseSecurityGroup(isEnterpriseSecurityGroup);
            return this;
        }
        /**
         * @return {@code this}
         * @param isEnterpriseSecurityGroup This parameter is required.
         */
        public Builder isEnterpriseSecurityGroup(final com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
            this.props.isEnterpriseSecurityGroup(isEnterpriseSecurityGroup);
            return this;
        }

        /**
         * @return {@code this}
         * @param keepInstanceName This parameter is required.
         */
        public Builder keepInstanceName(final java.lang.Boolean keepInstanceName) {
            this.props.keepInstanceName(keepInstanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param keepInstanceName This parameter is required.
         */
        public Builder keepInstanceName(final com.aliyun.ros.cdk.core.IResolvable keepInstanceName) {
            this.props.keepInstanceName(keepInstanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyPair This parameter is required.
         */
        public Builder keyPair(final java.lang.String keyPair) {
            this.props.keyPair(keyPair);
            return this;
        }
        /**
         * @return {@code this}
         * @param keyPair This parameter is required.
         */
        public Builder keyPair(final com.aliyun.ros.cdk.core.IResolvable keyPair) {
            this.props.keyPair(keyPair);
            return this;
        }

        /**
         * @return {@code this}
         * @param kubernetesVersion This parameter is required.
         */
        public Builder kubernetesVersion(final java.lang.String kubernetesVersion) {
            this.props.kubernetesVersion(kubernetesVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param kubernetesVersion This parameter is required.
         */
        public Builder kubernetesVersion(final com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.props.kubernetesVersion(kubernetesVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerSpec This parameter is required.
         */
        public Builder loadBalancerSpec(final java.lang.String loadBalancerSpec) {
            this.props.loadBalancerSpec(loadBalancerSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerSpec This parameter is required.
         */
        public Builder loadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.props.loadBalancerSpec(loadBalancerSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param loginPassword This parameter is required.
         */
        public Builder loginPassword(final java.lang.String loginPassword) {
            this.props.loginPassword(loginPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param loginPassword This parameter is required.
         */
        public Builder loginPassword(final com.aliyun.ros.cdk.core.IResolvable loginPassword) {
            this.props.loginPassword(loginPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param maintenanceWindow This parameter is required.
         */
        public Builder maintenanceWindow(final com.aliyun.ros.cdk.core.IResolvable maintenanceWindow) {
            this.props.maintenanceWindow(maintenanceWindow);
            return this;
        }
        /**
         * @return {@code this}
         * @param maintenanceWindow This parameter is required.
         */
        public Builder maintenanceWindow(final com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.MaintenanceWindowProperty maintenanceWindow) {
            this.props.maintenanceWindow(maintenanceWindow);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeCidrMask This parameter is required.
         */
        public Builder nodeCidrMask(final java.lang.String nodeCidrMask) {
            this.props.nodeCidrMask(nodeCidrMask);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeCidrMask This parameter is required.
         */
        public Builder nodeCidrMask(final com.aliyun.ros.cdk.core.IResolvable nodeCidrMask) {
            this.props.nodeCidrMask(nodeCidrMask);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeNameMode This parameter is required.
         */
        public Builder nodeNameMode(final java.lang.String nodeNameMode) {
            this.props.nodeNameMode(nodeNameMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeNameMode This parameter is required.
         */
        public Builder nodeNameMode(final com.aliyun.ros.cdk.core.IResolvable nodeNameMode) {
            this.props.nodeNameMode(nodeNameMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodePools This parameter is required.
         */
        public Builder nodePools(final com.aliyun.ros.cdk.core.IResolvable nodePools) {
            this.props.nodePools(nodePools);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodePools This parameter is required.
         */
        public Builder nodePools(final java.util.List<? extends java.lang.Object> nodePools) {
            this.props.nodePools(nodePools);
            return this;
        }

        /**
         * @return {@code this}
         * @param osType This parameter is required.
         */
        public Builder osType(final java.lang.String osType) {
            this.props.osType(osType);
            return this;
        }
        /**
         * @return {@code this}
         * @param osType This parameter is required.
         */
        public Builder osType(final com.aliyun.ros.cdk.core.IResolvable osType) {
            this.props.osType(osType);
            return this;
        }

        /**
         * @return {@code this}
         * @param platform This parameter is required.
         */
        public Builder platform(final java.lang.String platform) {
            this.props.platform(platform);
            return this;
        }
        /**
         * @return {@code this}
         * @param platform This parameter is required.
         */
        public Builder platform(final com.aliyun.ros.cdk.core.IResolvable platform) {
            this.props.platform(platform);
            return this;
        }

        /**
         * @return {@code this}
         * @param podVswitchIds This parameter is required.
         */
        public Builder podVswitchIds(final com.aliyun.ros.cdk.core.IResolvable podVswitchIds) {
            this.props.podVswitchIds(podVswitchIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param podVswitchIds This parameter is required.
         */
        public Builder podVswitchIds(final java.util.List<? extends java.lang.Object> podVswitchIds) {
            this.props.podVswitchIds(podVswitchIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxyMode This parameter is required.
         */
        public Builder proxyMode(final java.lang.String proxyMode) {
            this.props.proxyMode(proxyMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxyMode This parameter is required.
         */
        public Builder proxyMode(final com.aliyun.ros.cdk.core.IResolvable proxyMode) {
            this.props.proxyMode(proxyMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param runtime This parameter is required.
         */
        public Builder runtime(final com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.props.runtime(runtime);
            return this;
        }
        /**
         * @return {@code this}
         * @param runtime This parameter is required.
         */
        public Builder runtime(final com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.RuntimeProperty runtime) {
            this.props.runtime(runtime);
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
         * @param securityHardeningOs This parameter is required.
         */
        public Builder securityHardeningOs(final java.lang.Boolean securityHardeningOs) {
            this.props.securityHardeningOs(securityHardeningOs);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityHardeningOs This parameter is required.
         */
        public Builder securityHardeningOs(final com.aliyun.ros.cdk.core.IResolvable securityHardeningOs) {
            this.props.securityHardeningOs(securityHardeningOs);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceCidr This parameter is required.
         */
        public Builder serviceCidr(final java.lang.String serviceCidr) {
            this.props.serviceCidr(serviceCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceCidr This parameter is required.
         */
        public Builder serviceCidr(final com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.props.serviceCidr(serviceCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param snatEntry This parameter is required.
         */
        public Builder snatEntry(final java.lang.Boolean snatEntry) {
            this.props.snatEntry(snatEntry);
            return this;
        }
        /**
         * @return {@code this}
         * @param snatEntry This parameter is required.
         */
        public Builder snatEntry(final com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.props.snatEntry(snatEntry);
            return this;
        }

        /**
         * @return {@code this}
         * @param socEnabled This parameter is required.
         */
        public Builder socEnabled(final java.lang.Boolean socEnabled) {
            this.props.socEnabled(socEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param socEnabled This parameter is required.
         */
        public Builder socEnabled(final com.aliyun.ros.cdk.core.IResolvable socEnabled) {
            this.props.socEnabled(socEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param taint This parameter is required.
         */
        public Builder taint(final com.aliyun.ros.cdk.core.IResolvable taint) {
            this.props.taint(taint);
            return this;
        }
        /**
         * @return {@code this}
         * @param taint This parameter is required.
         */
        public Builder taint(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> taint) {
            this.props.taint(taint);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeoutMins This parameter is required.
         */
        public Builder timeoutMins(final java.lang.Number timeoutMins) {
            this.props.timeoutMins(timeoutMins);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeoutMins This parameter is required.
         */
        public Builder timeoutMins(final com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.props.timeoutMins(timeoutMins);
            return this;
        }

        /**
         * @return {@code this}
         * @param userData This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * @return {@code this}
         * @param userData This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneIds This parameter is required.
         */
        public Builder zoneIds(final com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneIds This parameter is required.
         */
        public Builder zoneIds(final java.util.List<? extends java.lang.Object> zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster build() {
            return new com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
