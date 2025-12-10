package com.aliyun.ros.cdk.emr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EMR::StarRocksInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.287Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosStarRocksInstance")
public class RosStarRocksInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosStarRocksInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosStarRocksInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.emr.RosStarRocksInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosStarRocksInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.RosStarRocksInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArchitecture() {
        return software.amazon.jsii.Kernel.get(this, "attrArchitecture", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableAutoMinorVersionUpgrade() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableAutoMinorVersionUpgrade", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnabledAuditLoader() {
        return software.amazon.jsii.Kernel.get(this, "attrEnabledAuditLoader", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableSsl() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableSsl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEncrypted() {
        return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExpireTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsolateLeader() {
        return software.amazon.jsii.Kernel.get(this, "attrIsolateLeader", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "attrKmsKeyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaintainablePeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainablePeriod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMinorVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrMinorVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMonitorType() {
        return software.amazon.jsii.Kernel.get(this, "attrMonitorType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOssLocation() {
        return software.amazon.jsii.Kernel.get(this, "attrOssLocation", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPackageType() {
        return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPayType() {
        return software.amazon.jsii.Kernel.get(this, "attrPayType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRunMode() {
        return software.amazon.jsii.Kernel.get(this, "attrRunMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRunningTime() {
        return software.amazon.jsii.Kernel.get(this, "attrRunningTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupManaged() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupManaged", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSgId() {
        return software.amazon.jsii.Kernel.get(this, "attrSgId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVswitches() {
        return software.amazon.jsii.Kernel.get(this, "attrVswitches", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAdminPassword() {
        return software.amazon.jsii.Kernel.get(this, "adminPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdminPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "adminPassword", java.util.Objects.requireNonNull(value, "adminPassword is required"));
    }

    /**
     */
    public void setAdminPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "adminPassword", java.util.Objects.requireNonNull(value, "adminPassword is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterZoneId() {
        return software.amazon.jsii.Kernel.get(this, "clusterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterZoneId", java.util.Objects.requireNonNull(value, "clusterZoneId is required"));
    }

    /**
     */
    public void setClusterZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterZoneId", java.util.Objects.requireNonNull(value, "clusterZoneId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", java.util.Objects.requireNonNull(value, "payType is required"));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payType", java.util.Objects.requireNonNull(value, "payType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRunMode() {
        return software.amazon.jsii.Kernel.get(this, "runMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRunMode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "runMode", java.util.Objects.requireNonNull(value, "runMode is required"));
    }

    /**
     */
    public void setRunMode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "runMode", java.util.Objects.requireNonNull(value, "runMode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVersion() {
        return software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackendNodeGroups() {
        return software.amazon.jsii.Kernel.get(this, "backendNodeGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackendNodeGroups(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backendNodeGroups", value);
    }

    /**
     */
    public void setBackendNodeGroups(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosStarRocksInstance.BackendNodeGroupsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosStarRocksInstance.BackendNodeGroupsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "backendNodeGroups", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "duration", value);
    }

    /**
     */
    public void setDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "duration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncrypted(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "encrypted", value);
    }

    /**
     */
    public void setEncrypted(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encrypted", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFrontendNodeGroups() {
        return software.amazon.jsii.Kernel.get(this, "frontendNodeGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFrontendNodeGroups(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "frontendNodeGroups", value);
    }

    /**
     */
    public void setFrontendNodeGroups(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosStarRocksInstance.FrontendNodeGroupsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosStarRocksInstance.FrontendNodeGroupsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "frontendNodeGroups", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKmsKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "kmsKeyId", value);
    }

    /**
     */
    public void setKmsKeyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kmsKeyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getObserverNodeGroups() {
        return software.amazon.jsii.Kernel.get(this, "observerNodeGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setObserverNodeGroups(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "observerNodeGroups", value);
    }

    /**
     */
    public void setObserverNodeGroups(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosStarRocksInstance.ObserverNodeGroupsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosStarRocksInstance.ObserverNodeGroupsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "observerNodeGroups", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOrderId() {
        return software.amazon.jsii.Kernel.get(this, "orderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOrderId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "orderId", value);
    }

    /**
     */
    public void setOrderId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "orderId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssAccessingRoleName() {
        return software.amazon.jsii.Kernel.get(this, "ossAccessingRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssAccessingRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossAccessingRoleName", value);
    }

    /**
     */
    public void setOssAccessingRoleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossAccessingRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPricingCycle(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pricingCycle", value);
    }

    /**
     */
    public void setPricingCycle(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pricingCycle", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPromotionOptionNo() {
        return software.amazon.jsii.Kernel.get(this, "promotionOptionNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPromotionOptionNo(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "promotionOptionNo", value);
    }

    /**
     */
    public void setPromotionOptionNo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "promotionOptionNo", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceType", value);
    }

    /**
     */
    public void setResourceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVswitches() {
        return software.amazon.jsii.Kernel.get(this, "vswitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVswitches(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vswitches", value);
    }

    /**
     */
    public void setVswitches(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosStarRocksInstance.VswitchesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosStarRocksInstance.VswitchesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "vswitches", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosStarRocksInstance.BackendNodeGroupsProperty")
    @software.amazon.jsii.Jsii.Proxy(BackendNodeGroupsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BackendNodeGroupsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalStorageInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResidentNodeNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpecType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStoragePerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BackendNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BackendNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BackendNodeGroupsProperty> {
            java.lang.Object cu;
            java.lang.Object diskNumber;
            java.lang.Object localStorageInstanceType;
            java.lang.Object residentNodeNumber;
            java.lang.Object specType;
            java.lang.Object storagePerformanceLevel;
            java.lang.Object storageSize;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getCu}
             * @param cu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(java.lang.Number cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getCu}
             * @param cu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(com.aliyun.ros.cdk.core.IResolvable cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getDiskNumber}
             * @param diskNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskNumber(java.lang.Number diskNumber) {
                this.diskNumber = diskNumber;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getDiskNumber}
             * @param diskNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskNumber(com.aliyun.ros.cdk.core.IResolvable diskNumber) {
                this.diskNumber = diskNumber;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getLocalStorageInstanceType}
             * @param localStorageInstanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localStorageInstanceType(java.lang.String localStorageInstanceType) {
                this.localStorageInstanceType = localStorageInstanceType;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getLocalStorageInstanceType}
             * @param localStorageInstanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localStorageInstanceType(com.aliyun.ros.cdk.core.IResolvable localStorageInstanceType) {
                this.localStorageInstanceType = localStorageInstanceType;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getResidentNodeNumber}
             * @param residentNodeNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder residentNodeNumber(java.lang.Number residentNodeNumber) {
                this.residentNodeNumber = residentNodeNumber;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getResidentNodeNumber}
             * @param residentNodeNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder residentNodeNumber(com.aliyun.ros.cdk.core.IResolvable residentNodeNumber) {
                this.residentNodeNumber = residentNodeNumber;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getSpecType}
             * @param specType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specType(java.lang.String specType) {
                this.specType = specType;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getSpecType}
             * @param specType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specType(com.aliyun.ros.cdk.core.IResolvable specType) {
                this.specType = specType;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getStoragePerformanceLevel}
             * @param storagePerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storagePerformanceLevel(java.lang.String storagePerformanceLevel) {
                this.storagePerformanceLevel = storagePerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getStoragePerformanceLevel}
             * @param storagePerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storagePerformanceLevel(com.aliyun.ros.cdk.core.IResolvable storagePerformanceLevel) {
                this.storagePerformanceLevel = storagePerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getStorageSize}
             * @param storageSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageSize(java.lang.Number storageSize) {
                this.storageSize = storageSize;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getStorageSize}
             * @param storageSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
                this.storageSize = storageSize;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link BackendNodeGroupsProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BackendNodeGroupsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BackendNodeGroupsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BackendNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BackendNodeGroupsProperty {
            private final java.lang.Object cu;
            private final java.lang.Object diskNumber;
            private final java.lang.Object localStorageInstanceType;
            private final java.lang.Object residentNodeNumber;
            private final java.lang.Object specType;
            private final java.lang.Object storagePerformanceLevel;
            private final java.lang.Object storageSize;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cu = software.amazon.jsii.Kernel.get(this, "cu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskNumber = software.amazon.jsii.Kernel.get(this, "diskNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localStorageInstanceType = software.amazon.jsii.Kernel.get(this, "localStorageInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.residentNodeNumber = software.amazon.jsii.Kernel.get(this, "residentNodeNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.specType = software.amazon.jsii.Kernel.get(this, "specType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storagePerformanceLevel = software.amazon.jsii.Kernel.get(this, "storagePerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cu = builder.cu;
                this.diskNumber = builder.diskNumber;
                this.localStorageInstanceType = builder.localStorageInstanceType;
                this.residentNodeNumber = builder.residentNodeNumber;
                this.specType = builder.specType;
                this.storagePerformanceLevel = builder.storagePerformanceLevel;
                this.storageSize = builder.storageSize;
                this.zoneId = builder.zoneId;
            }

            @Override
            public final java.lang.Object getCu() {
                return this.cu;
            }

            @Override
            public final java.lang.Object getDiskNumber() {
                return this.diskNumber;
            }

            @Override
            public final java.lang.Object getLocalStorageInstanceType() {
                return this.localStorageInstanceType;
            }

            @Override
            public final java.lang.Object getResidentNodeNumber() {
                return this.residentNodeNumber;
            }

            @Override
            public final java.lang.Object getSpecType() {
                return this.specType;
            }

            @Override
            public final java.lang.Object getStoragePerformanceLevel() {
                return this.storagePerformanceLevel;
            }

            @Override
            public final java.lang.Object getStorageSize() {
                return this.storageSize;
            }

            @Override
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCu() != null) {
                    data.set("cu", om.valueToTree(this.getCu()));
                }
                if (this.getDiskNumber() != null) {
                    data.set("diskNumber", om.valueToTree(this.getDiskNumber()));
                }
                if (this.getLocalStorageInstanceType() != null) {
                    data.set("localStorageInstanceType", om.valueToTree(this.getLocalStorageInstanceType()));
                }
                if (this.getResidentNodeNumber() != null) {
                    data.set("residentNodeNumber", om.valueToTree(this.getResidentNodeNumber()));
                }
                if (this.getSpecType() != null) {
                    data.set("specType", om.valueToTree(this.getSpecType()));
                }
                if (this.getStoragePerformanceLevel() != null) {
                    data.set("storagePerformanceLevel", om.valueToTree(this.getStoragePerformanceLevel()));
                }
                if (this.getStorageSize() != null) {
                    data.set("storageSize", om.valueToTree(this.getStorageSize()));
                }
                if (this.getZoneId() != null) {
                    data.set("zoneId", om.valueToTree(this.getZoneId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosStarRocksInstance.BackendNodeGroupsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BackendNodeGroupsProperty.Jsii$Proxy that = (BackendNodeGroupsProperty.Jsii$Proxy) o;

                if (this.cu != null ? !this.cu.equals(that.cu) : that.cu != null) return false;
                if (this.diskNumber != null ? !this.diskNumber.equals(that.diskNumber) : that.diskNumber != null) return false;
                if (this.localStorageInstanceType != null ? !this.localStorageInstanceType.equals(that.localStorageInstanceType) : that.localStorageInstanceType != null) return false;
                if (this.residentNodeNumber != null ? !this.residentNodeNumber.equals(that.residentNodeNumber) : that.residentNodeNumber != null) return false;
                if (this.specType != null ? !this.specType.equals(that.specType) : that.specType != null) return false;
                if (this.storagePerformanceLevel != null ? !this.storagePerformanceLevel.equals(that.storagePerformanceLevel) : that.storagePerformanceLevel != null) return false;
                if (this.storageSize != null ? !this.storageSize.equals(that.storageSize) : that.storageSize != null) return false;
                return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cu != null ? this.cu.hashCode() : 0;
                result = 31 * result + (this.diskNumber != null ? this.diskNumber.hashCode() : 0);
                result = 31 * result + (this.localStorageInstanceType != null ? this.localStorageInstanceType.hashCode() : 0);
                result = 31 * result + (this.residentNodeNumber != null ? this.residentNodeNumber.hashCode() : 0);
                result = 31 * result + (this.specType != null ? this.specType.hashCode() : 0);
                result = 31 * result + (this.storagePerformanceLevel != null ? this.storagePerformanceLevel.hashCode() : 0);
                result = 31 * result + (this.storageSize != null ? this.storageSize.hashCode() : 0);
                result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosStarRocksInstance.FrontendNodeGroupsProperty")
    @software.amazon.jsii.Jsii.Proxy(FrontendNodeGroupsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FrontendNodeGroupsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalStorageInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResidentNodeNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpecType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStoragePerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FrontendNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FrontendNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FrontendNodeGroupsProperty> {
            java.lang.Object cu;
            java.lang.Object diskNumber;
            java.lang.Object localStorageInstanceType;
            java.lang.Object residentNodeNumber;
            java.lang.Object specType;
            java.lang.Object storagePerformanceLevel;
            java.lang.Object storageSize;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getCu}
             * @param cu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(java.lang.Number cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getCu}
             * @param cu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(com.aliyun.ros.cdk.core.IResolvable cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getDiskNumber}
             * @param diskNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskNumber(java.lang.Number diskNumber) {
                this.diskNumber = diskNumber;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getDiskNumber}
             * @param diskNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskNumber(com.aliyun.ros.cdk.core.IResolvable diskNumber) {
                this.diskNumber = diskNumber;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getLocalStorageInstanceType}
             * @param localStorageInstanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localStorageInstanceType(java.lang.String localStorageInstanceType) {
                this.localStorageInstanceType = localStorageInstanceType;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getLocalStorageInstanceType}
             * @param localStorageInstanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localStorageInstanceType(com.aliyun.ros.cdk.core.IResolvable localStorageInstanceType) {
                this.localStorageInstanceType = localStorageInstanceType;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getResidentNodeNumber}
             * @param residentNodeNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder residentNodeNumber(java.lang.Number residentNodeNumber) {
                this.residentNodeNumber = residentNodeNumber;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getResidentNodeNumber}
             * @param residentNodeNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder residentNodeNumber(com.aliyun.ros.cdk.core.IResolvable residentNodeNumber) {
                this.residentNodeNumber = residentNodeNumber;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getSpecType}
             * @param specType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specType(java.lang.String specType) {
                this.specType = specType;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getSpecType}
             * @param specType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specType(com.aliyun.ros.cdk.core.IResolvable specType) {
                this.specType = specType;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getStoragePerformanceLevel}
             * @param storagePerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storagePerformanceLevel(java.lang.String storagePerformanceLevel) {
                this.storagePerformanceLevel = storagePerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getStoragePerformanceLevel}
             * @param storagePerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storagePerformanceLevel(com.aliyun.ros.cdk.core.IResolvable storagePerformanceLevel) {
                this.storagePerformanceLevel = storagePerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getStorageSize}
             * @param storageSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageSize(java.lang.Number storageSize) {
                this.storageSize = storageSize;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getStorageSize}
             * @param storageSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
                this.storageSize = storageSize;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link FrontendNodeGroupsProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FrontendNodeGroupsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FrontendNodeGroupsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FrontendNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FrontendNodeGroupsProperty {
            private final java.lang.Object cu;
            private final java.lang.Object diskNumber;
            private final java.lang.Object localStorageInstanceType;
            private final java.lang.Object residentNodeNumber;
            private final java.lang.Object specType;
            private final java.lang.Object storagePerformanceLevel;
            private final java.lang.Object storageSize;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cu = software.amazon.jsii.Kernel.get(this, "cu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskNumber = software.amazon.jsii.Kernel.get(this, "diskNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localStorageInstanceType = software.amazon.jsii.Kernel.get(this, "localStorageInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.residentNodeNumber = software.amazon.jsii.Kernel.get(this, "residentNodeNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.specType = software.amazon.jsii.Kernel.get(this, "specType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storagePerformanceLevel = software.amazon.jsii.Kernel.get(this, "storagePerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cu = builder.cu;
                this.diskNumber = builder.diskNumber;
                this.localStorageInstanceType = builder.localStorageInstanceType;
                this.residentNodeNumber = builder.residentNodeNumber;
                this.specType = builder.specType;
                this.storagePerformanceLevel = builder.storagePerformanceLevel;
                this.storageSize = builder.storageSize;
                this.zoneId = builder.zoneId;
            }

            @Override
            public final java.lang.Object getCu() {
                return this.cu;
            }

            @Override
            public final java.lang.Object getDiskNumber() {
                return this.diskNumber;
            }

            @Override
            public final java.lang.Object getLocalStorageInstanceType() {
                return this.localStorageInstanceType;
            }

            @Override
            public final java.lang.Object getResidentNodeNumber() {
                return this.residentNodeNumber;
            }

            @Override
            public final java.lang.Object getSpecType() {
                return this.specType;
            }

            @Override
            public final java.lang.Object getStoragePerformanceLevel() {
                return this.storagePerformanceLevel;
            }

            @Override
            public final java.lang.Object getStorageSize() {
                return this.storageSize;
            }

            @Override
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCu() != null) {
                    data.set("cu", om.valueToTree(this.getCu()));
                }
                if (this.getDiskNumber() != null) {
                    data.set("diskNumber", om.valueToTree(this.getDiskNumber()));
                }
                if (this.getLocalStorageInstanceType() != null) {
                    data.set("localStorageInstanceType", om.valueToTree(this.getLocalStorageInstanceType()));
                }
                if (this.getResidentNodeNumber() != null) {
                    data.set("residentNodeNumber", om.valueToTree(this.getResidentNodeNumber()));
                }
                if (this.getSpecType() != null) {
                    data.set("specType", om.valueToTree(this.getSpecType()));
                }
                if (this.getStoragePerformanceLevel() != null) {
                    data.set("storagePerformanceLevel", om.valueToTree(this.getStoragePerformanceLevel()));
                }
                if (this.getStorageSize() != null) {
                    data.set("storageSize", om.valueToTree(this.getStorageSize()));
                }
                if (this.getZoneId() != null) {
                    data.set("zoneId", om.valueToTree(this.getZoneId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosStarRocksInstance.FrontendNodeGroupsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FrontendNodeGroupsProperty.Jsii$Proxy that = (FrontendNodeGroupsProperty.Jsii$Proxy) o;

                if (this.cu != null ? !this.cu.equals(that.cu) : that.cu != null) return false;
                if (this.diskNumber != null ? !this.diskNumber.equals(that.diskNumber) : that.diskNumber != null) return false;
                if (this.localStorageInstanceType != null ? !this.localStorageInstanceType.equals(that.localStorageInstanceType) : that.localStorageInstanceType != null) return false;
                if (this.residentNodeNumber != null ? !this.residentNodeNumber.equals(that.residentNodeNumber) : that.residentNodeNumber != null) return false;
                if (this.specType != null ? !this.specType.equals(that.specType) : that.specType != null) return false;
                if (this.storagePerformanceLevel != null ? !this.storagePerformanceLevel.equals(that.storagePerformanceLevel) : that.storagePerformanceLevel != null) return false;
                if (this.storageSize != null ? !this.storageSize.equals(that.storageSize) : that.storageSize != null) return false;
                return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cu != null ? this.cu.hashCode() : 0;
                result = 31 * result + (this.diskNumber != null ? this.diskNumber.hashCode() : 0);
                result = 31 * result + (this.localStorageInstanceType != null ? this.localStorageInstanceType.hashCode() : 0);
                result = 31 * result + (this.residentNodeNumber != null ? this.residentNodeNumber.hashCode() : 0);
                result = 31 * result + (this.specType != null ? this.specType.hashCode() : 0);
                result = 31 * result + (this.storagePerformanceLevel != null ? this.storagePerformanceLevel.hashCode() : 0);
                result = 31 * result + (this.storageSize != null ? this.storageSize.hashCode() : 0);
                result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosStarRocksInstance.ObserverNodeGroupsProperty")
    @software.amazon.jsii.Jsii.Proxy(ObserverNodeGroupsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ObserverNodeGroupsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalStorageInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResidentNodeNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpecType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStoragePerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ObserverNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ObserverNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ObserverNodeGroupsProperty> {
            java.lang.Object cu;
            java.lang.Object diskNumber;
            java.lang.Object localStorageInstanceType;
            java.lang.Object residentNodeNumber;
            java.lang.Object specType;
            java.lang.Object storagePerformanceLevel;
            java.lang.Object storageSize;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getCu}
             * @param cu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(java.lang.Number cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getCu}
             * @param cu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(com.aliyun.ros.cdk.core.IResolvable cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getDiskNumber}
             * @param diskNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskNumber(java.lang.Number diskNumber) {
                this.diskNumber = diskNumber;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getDiskNumber}
             * @param diskNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskNumber(com.aliyun.ros.cdk.core.IResolvable diskNumber) {
                this.diskNumber = diskNumber;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getLocalStorageInstanceType}
             * @param localStorageInstanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localStorageInstanceType(java.lang.String localStorageInstanceType) {
                this.localStorageInstanceType = localStorageInstanceType;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getLocalStorageInstanceType}
             * @param localStorageInstanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localStorageInstanceType(com.aliyun.ros.cdk.core.IResolvable localStorageInstanceType) {
                this.localStorageInstanceType = localStorageInstanceType;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getResidentNodeNumber}
             * @param residentNodeNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder residentNodeNumber(java.lang.Number residentNodeNumber) {
                this.residentNodeNumber = residentNodeNumber;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getResidentNodeNumber}
             * @param residentNodeNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder residentNodeNumber(com.aliyun.ros.cdk.core.IResolvable residentNodeNumber) {
                this.residentNodeNumber = residentNodeNumber;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getSpecType}
             * @param specType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specType(java.lang.String specType) {
                this.specType = specType;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getSpecType}
             * @param specType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specType(com.aliyun.ros.cdk.core.IResolvable specType) {
                this.specType = specType;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getStoragePerformanceLevel}
             * @param storagePerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storagePerformanceLevel(java.lang.String storagePerformanceLevel) {
                this.storagePerformanceLevel = storagePerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getStoragePerformanceLevel}
             * @param storagePerformanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storagePerformanceLevel(com.aliyun.ros.cdk.core.IResolvable storagePerformanceLevel) {
                this.storagePerformanceLevel = storagePerformanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getStorageSize}
             * @param storageSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageSize(java.lang.Number storageSize) {
                this.storageSize = storageSize;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getStorageSize}
             * @param storageSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
                this.storageSize = storageSize;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link ObserverNodeGroupsProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ObserverNodeGroupsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ObserverNodeGroupsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ObserverNodeGroupsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ObserverNodeGroupsProperty {
            private final java.lang.Object cu;
            private final java.lang.Object diskNumber;
            private final java.lang.Object localStorageInstanceType;
            private final java.lang.Object residentNodeNumber;
            private final java.lang.Object specType;
            private final java.lang.Object storagePerformanceLevel;
            private final java.lang.Object storageSize;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cu = software.amazon.jsii.Kernel.get(this, "cu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskNumber = software.amazon.jsii.Kernel.get(this, "diskNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localStorageInstanceType = software.amazon.jsii.Kernel.get(this, "localStorageInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.residentNodeNumber = software.amazon.jsii.Kernel.get(this, "residentNodeNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.specType = software.amazon.jsii.Kernel.get(this, "specType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storagePerformanceLevel = software.amazon.jsii.Kernel.get(this, "storagePerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cu = builder.cu;
                this.diskNumber = builder.diskNumber;
                this.localStorageInstanceType = builder.localStorageInstanceType;
                this.residentNodeNumber = builder.residentNodeNumber;
                this.specType = builder.specType;
                this.storagePerformanceLevel = builder.storagePerformanceLevel;
                this.storageSize = builder.storageSize;
                this.zoneId = builder.zoneId;
            }

            @Override
            public final java.lang.Object getCu() {
                return this.cu;
            }

            @Override
            public final java.lang.Object getDiskNumber() {
                return this.diskNumber;
            }

            @Override
            public final java.lang.Object getLocalStorageInstanceType() {
                return this.localStorageInstanceType;
            }

            @Override
            public final java.lang.Object getResidentNodeNumber() {
                return this.residentNodeNumber;
            }

            @Override
            public final java.lang.Object getSpecType() {
                return this.specType;
            }

            @Override
            public final java.lang.Object getStoragePerformanceLevel() {
                return this.storagePerformanceLevel;
            }

            @Override
            public final java.lang.Object getStorageSize() {
                return this.storageSize;
            }

            @Override
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCu() != null) {
                    data.set("cu", om.valueToTree(this.getCu()));
                }
                if (this.getDiskNumber() != null) {
                    data.set("diskNumber", om.valueToTree(this.getDiskNumber()));
                }
                if (this.getLocalStorageInstanceType() != null) {
                    data.set("localStorageInstanceType", om.valueToTree(this.getLocalStorageInstanceType()));
                }
                if (this.getResidentNodeNumber() != null) {
                    data.set("residentNodeNumber", om.valueToTree(this.getResidentNodeNumber()));
                }
                if (this.getSpecType() != null) {
                    data.set("specType", om.valueToTree(this.getSpecType()));
                }
                if (this.getStoragePerformanceLevel() != null) {
                    data.set("storagePerformanceLevel", om.valueToTree(this.getStoragePerformanceLevel()));
                }
                if (this.getStorageSize() != null) {
                    data.set("storageSize", om.valueToTree(this.getStorageSize()));
                }
                if (this.getZoneId() != null) {
                    data.set("zoneId", om.valueToTree(this.getZoneId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosStarRocksInstance.ObserverNodeGroupsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ObserverNodeGroupsProperty.Jsii$Proxy that = (ObserverNodeGroupsProperty.Jsii$Proxy) o;

                if (this.cu != null ? !this.cu.equals(that.cu) : that.cu != null) return false;
                if (this.diskNumber != null ? !this.diskNumber.equals(that.diskNumber) : that.diskNumber != null) return false;
                if (this.localStorageInstanceType != null ? !this.localStorageInstanceType.equals(that.localStorageInstanceType) : that.localStorageInstanceType != null) return false;
                if (this.residentNodeNumber != null ? !this.residentNodeNumber.equals(that.residentNodeNumber) : that.residentNodeNumber != null) return false;
                if (this.specType != null ? !this.specType.equals(that.specType) : that.specType != null) return false;
                if (this.storagePerformanceLevel != null ? !this.storagePerformanceLevel.equals(that.storagePerformanceLevel) : that.storagePerformanceLevel != null) return false;
                if (this.storageSize != null ? !this.storageSize.equals(that.storageSize) : that.storageSize != null) return false;
                return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cu != null ? this.cu.hashCode() : 0;
                result = 31 * result + (this.diskNumber != null ? this.diskNumber.hashCode() : 0);
                result = 31 * result + (this.localStorageInstanceType != null ? this.localStorageInstanceType.hashCode() : 0);
                result = 31 * result + (this.residentNodeNumber != null ? this.residentNodeNumber.hashCode() : 0);
                result = 31 * result + (this.specType != null ? this.specType.hashCode() : 0);
                result = 31 * result + (this.storagePerformanceLevel != null ? this.storagePerformanceLevel.hashCode() : 0);
                result = 31 * result + (this.storageSize != null ? this.storageSize.hashCode() : 0);
                result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosStarRocksInstance.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosStarRocksInstance.TagsProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosStarRocksInstance.VswitchesProperty")
    @software.amazon.jsii.Jsii.Proxy(VswitchesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VswitchesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VswitchesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VswitchesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VswitchesProperty> {
            java.lang.Object vSwitchId;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link VswitchesProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link VswitchesProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link VswitchesProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link VswitchesProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VswitchesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VswitchesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VswitchesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VswitchesProperty {
            private final java.lang.Object vSwitchId;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
                this.zoneId = builder.zoneId;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                if (this.getZoneId() != null) {
                    data.set("zoneId", om.valueToTree(this.getZoneId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosStarRocksInstance.VswitchesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VswitchesProperty.Jsii$Proxy that = (VswitchesProperty.Jsii$Proxy) o;

                if (!vSwitchId.equals(that.vSwitchId)) return false;
                return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.vSwitchId.hashCode();
                result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.RosStarRocksInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.RosStarRocksInstance> {
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
        private final com.aliyun.ros.cdk.emr.RosStarRocksInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.RosStarRocksInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param adminPassword This parameter is required.
         */
        public Builder adminPassword(final java.lang.String adminPassword) {
            this.props.adminPassword(adminPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param adminPassword This parameter is required.
         */
        public Builder adminPassword(final com.aliyun.ros.cdk.core.IResolvable adminPassword) {
            this.props.adminPassword(adminPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterZoneId This parameter is required.
         */
        public Builder clusterZoneId(final java.lang.String clusterZoneId) {
            this.props.clusterZoneId(clusterZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterZoneId This parameter is required.
         */
        public Builder clusterZoneId(final com.aliyun.ros.cdk.core.IResolvable clusterZoneId) {
            this.props.clusterZoneId(clusterZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
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
         * @param payType This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * @return {@code this}
         * @param runMode This parameter is required.
         */
        public Builder runMode(final java.lang.String runMode) {
            this.props.runMode(runMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param runMode This parameter is required.
         */
        public Builder runMode(final com.aliyun.ros.cdk.core.IResolvable runMode) {
            this.props.runMode(runMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
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
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param backendNodeGroups This parameter is required.
         */
        public Builder backendNodeGroups(final com.aliyun.ros.cdk.core.IResolvable backendNodeGroups) {
            this.props.backendNodeGroups(backendNodeGroups);
            return this;
        }
        /**
         * @return {@code this}
         * @param backendNodeGroups This parameter is required.
         */
        public Builder backendNodeGroups(final java.util.List<? extends java.lang.Object> backendNodeGroups) {
            this.props.backendNodeGroups(backendNodeGroups);
            return this;
        }

        /**
         * @return {@code this}
         * @param duration This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * @return {@code this}
         * @param duration This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * @return {@code this}
         * @param encrypted This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }
        /**
         * @return {@code this}
         * @param encrypted This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }

        /**
         * @return {@code this}
         * @param frontendNodeGroups This parameter is required.
         */
        public Builder frontendNodeGroups(final com.aliyun.ros.cdk.core.IResolvable frontendNodeGroups) {
            this.props.frontendNodeGroups(frontendNodeGroups);
            return this;
        }
        /**
         * @return {@code this}
         * @param frontendNodeGroups This parameter is required.
         */
        public Builder frontendNodeGroups(final java.util.List<? extends java.lang.Object> frontendNodeGroups) {
            this.props.frontendNodeGroups(frontendNodeGroups);
            return this;
        }

        /**
         * @return {@code this}
         * @param kmsKeyId This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param kmsKeyId This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param observerNodeGroups This parameter is required.
         */
        public Builder observerNodeGroups(final com.aliyun.ros.cdk.core.IResolvable observerNodeGroups) {
            this.props.observerNodeGroups(observerNodeGroups);
            return this;
        }
        /**
         * @return {@code this}
         * @param observerNodeGroups This parameter is required.
         */
        public Builder observerNodeGroups(final java.util.List<? extends java.lang.Object> observerNodeGroups) {
            this.props.observerNodeGroups(observerNodeGroups);
            return this;
        }

        /**
         * @return {@code this}
         * @param orderId This parameter is required.
         */
        public Builder orderId(final java.lang.Number orderId) {
            this.props.orderId(orderId);
            return this;
        }
        /**
         * @return {@code this}
         * @param orderId This parameter is required.
         */
        public Builder orderId(final com.aliyun.ros.cdk.core.IResolvable orderId) {
            this.props.orderId(orderId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossAccessingRoleName This parameter is required.
         */
        public Builder ossAccessingRoleName(final java.lang.String ossAccessingRoleName) {
            this.props.ossAccessingRoleName(ossAccessingRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossAccessingRoleName This parameter is required.
         */
        public Builder ossAccessingRoleName(final com.aliyun.ros.cdk.core.IResolvable ossAccessingRoleName) {
            this.props.ossAccessingRoleName(ossAccessingRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param pricingCycle This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * @return {@code this}
         * @param pricingCycle This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * @return {@code this}
         * @param promotionOptionNo This parameter is required.
         */
        public Builder promotionOptionNo(final java.lang.String promotionOptionNo) {
            this.props.promotionOptionNo(promotionOptionNo);
            return this;
        }
        /**
         * @return {@code this}
         * @param promotionOptionNo This parameter is required.
         */
        public Builder promotionOptionNo(final com.aliyun.ros.cdk.core.IResolvable promotionOptionNo) {
            this.props.promotionOptionNo(promotionOptionNo);
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
         * @param resourceType This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceType This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param vswitches This parameter is required.
         */
        public Builder vswitches(final com.aliyun.ros.cdk.core.IResolvable vswitches) {
            this.props.vswitches(vswitches);
            return this;
        }
        /**
         * @return {@code this}
         * @param vswitches This parameter is required.
         */
        public Builder vswitches(final java.util.List<? extends java.lang.Object> vswitches) {
            this.props.vswitches(vswitches);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.RosStarRocksInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.RosStarRocksInstance build() {
            return new com.aliyun.ros.cdk.emr.RosStarRocksInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
