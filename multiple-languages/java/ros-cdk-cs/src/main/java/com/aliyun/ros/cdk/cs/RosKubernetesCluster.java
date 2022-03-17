package com.aliyun.ros.cdk.cs;

/**
 * A ROS template type:  `ALIYUN::CS::KubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:14.851Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosKubernetesCluster")
public class RosKubernetesCluster extends com.aliyun.ros.cdk.core.RosResource {

    protected RosKubernetesCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosKubernetesCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cs.RosKubernetesCluster.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosKubernetesCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.RosKubernetesClusterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getMasterInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "masterInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterInstanceTypes(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "masterInstanceTypes", java.util.Objects.requireNonNull(value, "masterInstanceTypes is required"));
    }

    /**
     */
    public void setMasterInstanceTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterInstanceTypes", java.util.Objects.requireNonNull(value, "masterInstanceTypes is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMasterVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "masterVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterVSwitchIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "masterVSwitchIds", java.util.Objects.requireNonNull(value, "masterVSwitchIds is required"));
    }

    /**
     */
    public void setMasterVSwitchIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterVSwitchIds", java.util.Objects.requireNonNull(value, "masterVSwitchIds is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getWorkerInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "workerInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerInstanceTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerInstanceTypes", java.util.Objects.requireNonNull(value, "workerInstanceTypes is required"));
    }

    /**
     */
    public void setWorkerInstanceTypes(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "workerInstanceTypes", java.util.Objects.requireNonNull(value, "workerInstanceTypes is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWorkerVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "workerVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerVSwitchIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "workerVSwitchIds", java.util.Objects.requireNonNull(value, "workerVSwitchIds is required"));
    }

    /**
     */
    public void setWorkerVSwitchIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerVSwitchIds", java.util.Objects.requireNonNull(value, "workerVSwitchIds is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getCpuPolicy() {
        return software.amazon.jsii.Kernel.get(this, "cpuPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpuPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cpuPolicy", value);
    }

    /**
     */
    public void setCpuPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpuPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisableRollback() {
        return software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisableRollback(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "disableRollback", value);
    }

    /**
     */
    public void setDisableRollback(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disableRollback", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "masterAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "masterAutoRenew", value);
    }

    /**
     */
    public void setMasterAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterAutoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterAutoRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "masterAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterAutoRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "masterAutoRenewPeriod", value);
    }

    /**
     */
    public void setMasterAutoRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterAutoRenewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterCount() {
        return software.amazon.jsii.Kernel.get(this, "masterCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "masterCount", value);
    }

    /**
     */
    public void setMasterCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterDataDisk() {
        return software.amazon.jsii.Kernel.get(this, "masterDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterDataDisk(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "masterDataDisk", value);
    }

    /**
     */
    public void setMasterDataDisk(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterDataDisk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterDataDisks() {
        return software.amazon.jsii.Kernel.get(this, "masterDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterDataDisks(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterDataDisks", value);
    }

    /**
     */
    public void setMasterDataDisks(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "masterDataDisks", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "masterInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterInstanceChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterInstanceChargeType", value);
    }

    /**
     */
    public void setMasterInstanceChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterInstanceChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterPeriod() {
        return software.amazon.jsii.Kernel.get(this, "masterPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "masterPeriod", value);
    }

    /**
     */
    public void setMasterPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "masterPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterPeriodUnit", value);
    }

    /**
     */
    public void setMasterPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterPeriodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterSystemDiskCategory() {
        return software.amazon.jsii.Kernel.get(this, "masterSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterSystemDiskCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterSystemDiskCategory", value);
    }

    /**
     */
    public void setMasterSystemDiskCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterSystemDiskCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterSystemDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "masterSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterSystemDiskSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "masterSystemDiskSize", value);
    }

    /**
     */
    public void setMasterSystemDiskSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterSystemDiskSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNodePortRange() {
        return software.amazon.jsii.Kernel.get(this, "nodePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodePortRange(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nodePortRange", value);
    }

    /**
     */
    public void setNodePortRange(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodePortRange", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNumOfNodes() {
        return software.amazon.jsii.Kernel.get(this, "numOfNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNumOfNodes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "numOfNodes", value);
    }

    /**
     */
    public void setNumOfNodes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "numOfNodes", value);
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
    public void setRuntime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cs.RosKubernetesCluster.RuntimeProperty value) {
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSshFlags() {
        return software.amazon.jsii.Kernel.get(this, "sshFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSshFlags(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "sshFlags", value);
    }

    /**
     */
    public void setSshFlags(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sshFlags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> value) {
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "workerAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "workerAutoRenew", value);
    }

    /**
     */
    public void setWorkerAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerAutoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerAutoRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "workerAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerAutoRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "workerAutoRenewPeriod", value);
    }

    /**
     */
    public void setWorkerAutoRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerAutoRenewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisk() {
        return software.amazon.jsii.Kernel.get(this, "workerDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerDataDisk(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "workerDataDisk", value);
    }

    /**
     */
    public void setWorkerDataDisk(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerDataDisk", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisks() {
        return software.amazon.jsii.Kernel.get(this, "workerDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerDataDisks(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerDataDisks", value);
    }

    /**
     */
    public void setWorkerDataDisks(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "workerDataDisks", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "workerInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerInstanceChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workerInstanceChargeType", value);
    }

    /**
     */
    public void setWorkerInstanceChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerInstanceChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerPeriod() {
        return software.amazon.jsii.Kernel.get(this, "workerPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "workerPeriod", value);
    }

    /**
     */
    public void setWorkerPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "workerPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workerPeriodUnit", value);
    }

    /**
     */
    public void setWorkerPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerPeriodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskCategory() {
        return software.amazon.jsii.Kernel.get(this, "workerSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerSystemDiskCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workerSystemDiskCategory", value);
    }

    /**
     */
    public void setWorkerSystemDiskCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerSystemDiskCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "workerSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkerSystemDiskSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "workerSystemDiskSize", value);
    }

    /**
     */
    public void setWorkerSystemDiskSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workerSystemDiskSize", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty")
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

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.disabled = software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.config = builder.config;
                this.disabled = builder.disabled;
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

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty"));
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
                return this.disabled != null ? this.disabled.equals(that.disabled) : that.disabled == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
                result = 31 * result + (this.disabled != null ? this.disabled.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty")
    @software.amazon.jsii.Jsii.Proxy(MasterDataDisksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MasterDataDisksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSize();

        /**
         * @return a {@link Builder} of {@link MasterDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MasterDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MasterDataDisksProperty> {
            java.lang.Object category;
            java.lang.Object size;

            /**
             * Sets the value of {@link MasterDataDisksProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link MasterDataDisksProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link MasterDataDisksProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link MasterDataDisksProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MasterDataDisksProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MasterDataDisksProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MasterDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MasterDataDisksProperty {
            private final java.lang.Object category;
            private final java.lang.Object size;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
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

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("size", om.valueToTree(this.getSize()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MasterDataDisksProperty.Jsii$Proxy that = (MasterDataDisksProperty.Jsii$Proxy) o;

                if (!category.equals(that.category)) return false;
                return this.size.equals(that.size);
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.size.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosKubernetesCluster.RuntimeProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosKubernetesCluster.RuntimeProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosKubernetesCluster.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosKubernetesCluster.TagsProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty")
    @software.amazon.jsii.Jsii.Proxy(WorkerDataDisksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WorkerDataDisksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSize();

        /**
         * @return a {@link Builder} of {@link WorkerDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WorkerDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WorkerDataDisksProperty> {
            java.lang.Object category;
            java.lang.Object size;

            /**
             * Sets the value of {@link WorkerDataDisksProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link WorkerDataDisksProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link WorkerDataDisksProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.Number size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link WorkerDataDisksProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WorkerDataDisksProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WorkerDataDisksProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WorkerDataDisksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WorkerDataDisksProperty {
            private final java.lang.Object category;
            private final java.lang.Object size;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
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

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("size", om.valueToTree(this.getSize()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WorkerDataDisksProperty.Jsii$Proxy that = (WorkerDataDisksProperty.Jsii$Proxy) o;

                if (!category.equals(that.category)) return false;
                return this.size.equals(that.size);
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.size.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.RosKubernetesCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.RosKubernetesCluster> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cs.RosKubernetesClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.RosKubernetesClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param masterInstanceTypes This parameter is required.
         */
        public Builder masterInstanceTypes(final java.util.List<? extends java.lang.Object> masterInstanceTypes) {
            this.props.masterInstanceTypes(masterInstanceTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterInstanceTypes This parameter is required.
         */
        public Builder masterInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable masterInstanceTypes) {
            this.props.masterInstanceTypes(masterInstanceTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterVSwitchIds This parameter is required.
         */
        public Builder masterVSwitchIds(final java.util.List<? extends java.lang.Object> masterVSwitchIds) {
            this.props.masterVSwitchIds(masterVSwitchIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterVSwitchIds This parameter is required.
         */
        public Builder masterVSwitchIds(final com.aliyun.ros.cdk.core.IResolvable masterVSwitchIds) {
            this.props.masterVSwitchIds(masterVSwitchIds);
            return this;
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
         * @param workerInstanceTypes This parameter is required.
         */
        public Builder workerInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable workerInstanceTypes) {
            this.props.workerInstanceTypes(workerInstanceTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerInstanceTypes This parameter is required.
         */
        public Builder workerInstanceTypes(final java.util.List<? extends java.lang.Object> workerInstanceTypes) {
            this.props.workerInstanceTypes(workerInstanceTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerVSwitchIds This parameter is required.
         */
        public Builder workerVSwitchIds(final java.util.List<? extends java.lang.Object> workerVSwitchIds) {
            this.props.workerVSwitchIds(workerVSwitchIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerVSwitchIds This parameter is required.
         */
        public Builder workerVSwitchIds(final com.aliyun.ros.cdk.core.IResolvable workerVSwitchIds) {
            this.props.workerVSwitchIds(workerVSwitchIds);
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
         * @param cpuPolicy This parameter is required.
         */
        public Builder cpuPolicy(final java.lang.String cpuPolicy) {
            this.props.cpuPolicy(cpuPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpuPolicy This parameter is required.
         */
        public Builder cpuPolicy(final com.aliyun.ros.cdk.core.IResolvable cpuPolicy) {
            this.props.cpuPolicy(cpuPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param disableRollback This parameter is required.
         */
        public Builder disableRollback(final java.lang.Boolean disableRollback) {
            this.props.disableRollback(disableRollback);
            return this;
        }
        /**
         * @return {@code this}
         * @param disableRollback This parameter is required.
         */
        public Builder disableRollback(final com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.props.disableRollback(disableRollback);
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
         * @param masterAutoRenew This parameter is required.
         */
        public Builder masterAutoRenew(final java.lang.Boolean masterAutoRenew) {
            this.props.masterAutoRenew(masterAutoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterAutoRenew This parameter is required.
         */
        public Builder masterAutoRenew(final com.aliyun.ros.cdk.core.IResolvable masterAutoRenew) {
            this.props.masterAutoRenew(masterAutoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterAutoRenewPeriod This parameter is required.
         */
        public Builder masterAutoRenewPeriod(final java.lang.Number masterAutoRenewPeriod) {
            this.props.masterAutoRenewPeriod(masterAutoRenewPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterAutoRenewPeriod This parameter is required.
         */
        public Builder masterAutoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable masterAutoRenewPeriod) {
            this.props.masterAutoRenewPeriod(masterAutoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterCount This parameter is required.
         */
        public Builder masterCount(final java.lang.Number masterCount) {
            this.props.masterCount(masterCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterCount This parameter is required.
         */
        public Builder masterCount(final com.aliyun.ros.cdk.core.IResolvable masterCount) {
            this.props.masterCount(masterCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterDataDisk This parameter is required.
         */
        public Builder masterDataDisk(final java.lang.Boolean masterDataDisk) {
            this.props.masterDataDisk(masterDataDisk);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterDataDisk This parameter is required.
         */
        public Builder masterDataDisk(final com.aliyun.ros.cdk.core.IResolvable masterDataDisk) {
            this.props.masterDataDisk(masterDataDisk);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterDataDisks This parameter is required.
         */
        public Builder masterDataDisks(final com.aliyun.ros.cdk.core.IResolvable masterDataDisks) {
            this.props.masterDataDisks(masterDataDisks);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterDataDisks This parameter is required.
         */
        public Builder masterDataDisks(final java.util.List<? extends java.lang.Object> masterDataDisks) {
            this.props.masterDataDisks(masterDataDisks);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterInstanceChargeType This parameter is required.
         */
        public Builder masterInstanceChargeType(final java.lang.String masterInstanceChargeType) {
            this.props.masterInstanceChargeType(masterInstanceChargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterInstanceChargeType This parameter is required.
         */
        public Builder masterInstanceChargeType(final com.aliyun.ros.cdk.core.IResolvable masterInstanceChargeType) {
            this.props.masterInstanceChargeType(masterInstanceChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterPeriod This parameter is required.
         */
        public Builder masterPeriod(final java.lang.Number masterPeriod) {
            this.props.masterPeriod(masterPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterPeriod This parameter is required.
         */
        public Builder masterPeriod(final com.aliyun.ros.cdk.core.IResolvable masterPeriod) {
            this.props.masterPeriod(masterPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterPeriodUnit This parameter is required.
         */
        public Builder masterPeriodUnit(final java.lang.String masterPeriodUnit) {
            this.props.masterPeriodUnit(masterPeriodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterPeriodUnit This parameter is required.
         */
        public Builder masterPeriodUnit(final com.aliyun.ros.cdk.core.IResolvable masterPeriodUnit) {
            this.props.masterPeriodUnit(masterPeriodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterSystemDiskCategory This parameter is required.
         */
        public Builder masterSystemDiskCategory(final java.lang.String masterSystemDiskCategory) {
            this.props.masterSystemDiskCategory(masterSystemDiskCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterSystemDiskCategory This parameter is required.
         */
        public Builder masterSystemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable masterSystemDiskCategory) {
            this.props.masterSystemDiskCategory(masterSystemDiskCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterSystemDiskSize This parameter is required.
         */
        public Builder masterSystemDiskSize(final java.lang.Number masterSystemDiskSize) {
            this.props.masterSystemDiskSize(masterSystemDiskSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterSystemDiskSize This parameter is required.
         */
        public Builder masterSystemDiskSize(final com.aliyun.ros.cdk.core.IResolvable masterSystemDiskSize) {
            this.props.masterSystemDiskSize(masterSystemDiskSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodePortRange This parameter is required.
         */
        public Builder nodePortRange(final java.lang.String nodePortRange) {
            this.props.nodePortRange(nodePortRange);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodePortRange This parameter is required.
         */
        public Builder nodePortRange(final com.aliyun.ros.cdk.core.IResolvable nodePortRange) {
            this.props.nodePortRange(nodePortRange);
            return this;
        }

        /**
         * @return {@code this}
         * @param numOfNodes This parameter is required.
         */
        public Builder numOfNodes(final java.lang.Number numOfNodes) {
            this.props.numOfNodes(numOfNodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param numOfNodes This parameter is required.
         */
        public Builder numOfNodes(final com.aliyun.ros.cdk.core.IResolvable numOfNodes) {
            this.props.numOfNodes(numOfNodes);
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
        public Builder runtime(final com.aliyun.ros.cdk.cs.RosKubernetesCluster.RuntimeProperty runtime) {
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
         * @param sshFlags This parameter is required.
         */
        public Builder sshFlags(final java.lang.Boolean sshFlags) {
            this.props.sshFlags(sshFlags);
            return this;
        }
        /**
         * @return {@code this}
         * @param sshFlags This parameter is required.
         */
        public Builder sshFlags(final com.aliyun.ros.cdk.core.IResolvable sshFlags) {
            this.props.sshFlags(sshFlags);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags) {
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
         * @param workerAutoRenew This parameter is required.
         */
        public Builder workerAutoRenew(final java.lang.Boolean workerAutoRenew) {
            this.props.workerAutoRenew(workerAutoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerAutoRenew This parameter is required.
         */
        public Builder workerAutoRenew(final com.aliyun.ros.cdk.core.IResolvable workerAutoRenew) {
            this.props.workerAutoRenew(workerAutoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerAutoRenewPeriod This parameter is required.
         */
        public Builder workerAutoRenewPeriod(final java.lang.Number workerAutoRenewPeriod) {
            this.props.workerAutoRenewPeriod(workerAutoRenewPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerAutoRenewPeriod This parameter is required.
         */
        public Builder workerAutoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable workerAutoRenewPeriod) {
            this.props.workerAutoRenewPeriod(workerAutoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerDataDisk This parameter is required.
         */
        public Builder workerDataDisk(final java.lang.Boolean workerDataDisk) {
            this.props.workerDataDisk(workerDataDisk);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerDataDisk This parameter is required.
         */
        public Builder workerDataDisk(final com.aliyun.ros.cdk.core.IResolvable workerDataDisk) {
            this.props.workerDataDisk(workerDataDisk);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerDataDisks This parameter is required.
         */
        public Builder workerDataDisks(final com.aliyun.ros.cdk.core.IResolvable workerDataDisks) {
            this.props.workerDataDisks(workerDataDisks);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerDataDisks This parameter is required.
         */
        public Builder workerDataDisks(final java.util.List<? extends java.lang.Object> workerDataDisks) {
            this.props.workerDataDisks(workerDataDisks);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerInstanceChargeType This parameter is required.
         */
        public Builder workerInstanceChargeType(final java.lang.String workerInstanceChargeType) {
            this.props.workerInstanceChargeType(workerInstanceChargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerInstanceChargeType This parameter is required.
         */
        public Builder workerInstanceChargeType(final com.aliyun.ros.cdk.core.IResolvable workerInstanceChargeType) {
            this.props.workerInstanceChargeType(workerInstanceChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerPeriod This parameter is required.
         */
        public Builder workerPeriod(final java.lang.Number workerPeriod) {
            this.props.workerPeriod(workerPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerPeriod This parameter is required.
         */
        public Builder workerPeriod(final com.aliyun.ros.cdk.core.IResolvable workerPeriod) {
            this.props.workerPeriod(workerPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerPeriodUnit This parameter is required.
         */
        public Builder workerPeriodUnit(final java.lang.String workerPeriodUnit) {
            this.props.workerPeriodUnit(workerPeriodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerPeriodUnit This parameter is required.
         */
        public Builder workerPeriodUnit(final com.aliyun.ros.cdk.core.IResolvable workerPeriodUnit) {
            this.props.workerPeriodUnit(workerPeriodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerSystemDiskCategory This parameter is required.
         */
        public Builder workerSystemDiskCategory(final java.lang.String workerSystemDiskCategory) {
            this.props.workerSystemDiskCategory(workerSystemDiskCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerSystemDiskCategory This parameter is required.
         */
        public Builder workerSystemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable workerSystemDiskCategory) {
            this.props.workerSystemDiskCategory(workerSystemDiskCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param workerSystemDiskSize This parameter is required.
         */
        public Builder workerSystemDiskSize(final java.lang.Number workerSystemDiskSize) {
            this.props.workerSystemDiskSize(workerSystemDiskSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param workerSystemDiskSize This parameter is required.
         */
        public Builder workerSystemDiskSize(final com.aliyun.ros.cdk.core.IResolvable workerSystemDiskSize) {
            this.props.workerSystemDiskSize(workerSystemDiskSize);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cs.RosKubernetesCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.RosKubernetesCluster build() {
            return new com.aliyun.ros.cdk.cs.RosKubernetesCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
