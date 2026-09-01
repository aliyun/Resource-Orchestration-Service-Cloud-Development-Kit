package com.aliyun.ros.cdk.milvus;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Milvus::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:05:59.859Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.milvus.$Module.class, fqn = "@alicloud/ros-cdk-milvus.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.milvus.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.milvus.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getComponents() {
        return software.amazon.jsii.Kernel.get(this, "components", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComponents(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "components", java.util.Objects.requireNonNull(value, "components is required"));
    }

    /**
     */
    public void setComponents(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.milvus.RosInstance.ComponentsProperty)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.milvus.RosInstance.ComponentsProperty, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "components", java.util.Objects.requireNonNull(value, "components is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbAdminPassword() {
        return software.amazon.jsii.Kernel.get(this, "dbAdminPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbAdminPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbAdminPassword", java.util.Objects.requireNonNull(value, "dbAdminPassword is required"));
    }

    /**
     */
    public void setDbAdminPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbAdminPassword", java.util.Objects.requireNonNull(value, "dbAdminPassword is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbVersion() {
        return software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbVersion", java.util.Objects.requireNonNull(value, "dbVersion is required"));
    }

    /**
     */
    public void setDbVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbVersion", java.util.Objects.requireNonNull(value, "dbVersion is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", java.util.Objects.requireNonNull(value, "paymentType is required"));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", java.util.Objects.requireNonNull(value, "paymentType is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchIds", java.util.Objects.requireNonNull(value, "vSwitchIds is required"));
    }

    /**
     */
    public void setVSwitchIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.milvus.RosInstance.VSwitchIdsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.milvus.RosInstance.VSwitchIdsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "vSwitchIds", java.util.Objects.requireNonNull(value, "vSwitchIds is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAiFunction() {
        return software.amazon.jsii.Kernel.get(this, "aiFunction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAiFunction(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "aiFunction", value);
    }

    /**
     */
    public void setAiFunction(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aiFunction", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoBackup() {
        return software.amazon.jsii.Kernel.get(this, "autoBackup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoBackup(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoBackup", value);
    }

    /**
     */
    public void setAutoBackup(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoBackup", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupRestoreInfo() {
        return software.amazon.jsii.Kernel.get(this, "backupRestoreInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupRestoreInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupRestoreInfo", value);
    }

    /**
     */
    public void setBackupRestoreInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.milvus.RosInstance.BackupRestoreInfoProperty value) {
        software.amazon.jsii.Kernel.set(this, "backupRestoreInfo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfiguration(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "configuration", value);
    }

    /**
     */
    public void setConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configuration", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getHa() {
        return software.amazon.jsii.Kernel.get(this, "ha", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHa(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "ha", value);
    }

    /**
     */
    public void setHa(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ha", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsMultiAzStorage() {
        return software.amazon.jsii.Kernel.get(this, "isMultiAzStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsMultiAzStorage(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isMultiAzStorage", value);
    }

    /**
     */
    public void setIsMultiAzStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isMultiAzStorage", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadReplicas() {
        return software.amazon.jsii.Kernel.get(this, "loadReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadReplicas(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "loadReplicas", value);
    }

    /**
     */
    public void setLoadReplicas(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadReplicas", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMultiZoneMode() {
        return software.amazon.jsii.Kernel.get(this, "multiZoneMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiZoneMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "multiZoneMode", value);
    }

    /**
     */
    public void setMultiZoneMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiZoneMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDuration() {
        return software.amazon.jsii.Kernel.get(this, "paymentDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "paymentDuration", value);
    }

    /**
     */
    public void setPaymentDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentDurationUnit() {
        return software.amazon.jsii.Kernel.get(this, "paymentDurationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentDurationUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentDurationUnit", value);
    }

    /**
     */
    public void setPaymentDurationUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentDurationUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPromotionNo() {
        return software.amazon.jsii.Kernel.get(this, "promotionNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPromotionNo(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "promotionNo", value);
    }

    /**
     */
    public void setPromotionNo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "promotionNo", value);
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
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.milvus.$Module.class, fqn = "@alicloud/ros-cdk-milvus.RosInstance.BackupRestoreInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(BackupRestoreInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BackupRestoreInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackupName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceClusterId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BackupRestoreInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BackupRestoreInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BackupRestoreInfoProperty> {
            java.lang.Object backupId;
            java.lang.Object backupName;
            java.lang.Object sourceClusterId;

            /**
             * Sets the value of {@link BackupRestoreInfoProperty#getBackupId}
             * @param backupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupId(java.lang.String backupId) {
                this.backupId = backupId;
                return this;
            }

            /**
             * Sets the value of {@link BackupRestoreInfoProperty#getBackupId}
             * @param backupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupId(com.aliyun.ros.cdk.core.IResolvable backupId) {
                this.backupId = backupId;
                return this;
            }

            /**
             * Sets the value of {@link BackupRestoreInfoProperty#getBackupName}
             * @param backupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupName(java.lang.String backupName) {
                this.backupName = backupName;
                return this;
            }

            /**
             * Sets the value of {@link BackupRestoreInfoProperty#getBackupName}
             * @param backupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupName(com.aliyun.ros.cdk.core.IResolvable backupName) {
                this.backupName = backupName;
                return this;
            }

            /**
             * Sets the value of {@link BackupRestoreInfoProperty#getSourceClusterId}
             * @param sourceClusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceClusterId(java.lang.String sourceClusterId) {
                this.sourceClusterId = sourceClusterId;
                return this;
            }

            /**
             * Sets the value of {@link BackupRestoreInfoProperty#getSourceClusterId}
             * @param sourceClusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceClusterId(com.aliyun.ros.cdk.core.IResolvable sourceClusterId) {
                this.sourceClusterId = sourceClusterId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BackupRestoreInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BackupRestoreInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BackupRestoreInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BackupRestoreInfoProperty {
            private final java.lang.Object backupId;
            private final java.lang.Object backupName;
            private final java.lang.Object sourceClusterId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.backupId = software.amazon.jsii.Kernel.get(this, "backupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.backupName = software.amazon.jsii.Kernel.get(this, "backupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceClusterId = software.amazon.jsii.Kernel.get(this, "sourceClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.backupId = builder.backupId;
                this.backupName = builder.backupName;
                this.sourceClusterId = builder.sourceClusterId;
            }

            @Override
            public final java.lang.Object getBackupId() {
                return this.backupId;
            }

            @Override
            public final java.lang.Object getBackupName() {
                return this.backupName;
            }

            @Override
            public final java.lang.Object getSourceClusterId() {
                return this.sourceClusterId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBackupId() != null) {
                    data.set("backupId", om.valueToTree(this.getBackupId()));
                }
                if (this.getBackupName() != null) {
                    data.set("backupName", om.valueToTree(this.getBackupName()));
                }
                if (this.getSourceClusterId() != null) {
                    data.set("sourceClusterId", om.valueToTree(this.getSourceClusterId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-milvus.RosInstance.BackupRestoreInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BackupRestoreInfoProperty.Jsii$Proxy that = (BackupRestoreInfoProperty.Jsii$Proxy) o;

                if (this.backupId != null ? !this.backupId.equals(that.backupId) : that.backupId != null) return false;
                if (this.backupName != null ? !this.backupName.equals(that.backupName) : that.backupName != null) return false;
                return this.sourceClusterId != null ? this.sourceClusterId.equals(that.sourceClusterId) : that.sourceClusterId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.backupId != null ? this.backupId.hashCode() : 0;
                result = 31 * result + (this.backupName != null ? this.backupName.hashCode() : 0);
                result = 31 * result + (this.sourceClusterId != null ? this.sourceClusterId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.milvus.$Module.class, fqn = "@alicloud/ros-cdk-milvus.RosInstance.ComponentsProperty")
    @software.amazon.jsii.Jsii.Proxy(ComponentsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ComponentsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCuNum();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getReplica();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCuType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskSizeType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ComponentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ComponentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ComponentsProperty> {
            java.lang.Object cuNum;
            java.lang.Object replica;
            java.lang.Object type;
            java.lang.Object cuType;
            java.lang.Object diskSizeType;

            /**
             * Sets the value of {@link ComponentsProperty#getCuNum}
             * @param cuNum the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cuNum(java.lang.Number cuNum) {
                this.cuNum = cuNum;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getCuNum}
             * @param cuNum the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cuNum(com.aliyun.ros.cdk.core.IResolvable cuNum) {
                this.cuNum = cuNum;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getReplica}
             * @param replica the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replica(java.lang.Number replica) {
                this.replica = replica;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getReplica}
             * @param replica the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replica(com.aliyun.ros.cdk.core.IResolvable replica) {
                this.replica = replica;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getCuType}
             * @param cuType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cuType(java.lang.String cuType) {
                this.cuType = cuType;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getCuType}
             * @param cuType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cuType(com.aliyun.ros.cdk.core.IResolvable cuType) {
                this.cuType = cuType;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getDiskSizeType}
             * @param diskSizeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskSizeType(java.lang.String diskSizeType) {
                this.diskSizeType = diskSizeType;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getDiskSizeType}
             * @param diskSizeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskSizeType(com.aliyun.ros.cdk.core.IResolvable diskSizeType) {
                this.diskSizeType = diskSizeType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ComponentsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ComponentsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ComponentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ComponentsProperty {
            private final java.lang.Object cuNum;
            private final java.lang.Object replica;
            private final java.lang.Object type;
            private final java.lang.Object cuType;
            private final java.lang.Object diskSizeType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cuNum = software.amazon.jsii.Kernel.get(this, "cuNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replica = software.amazon.jsii.Kernel.get(this, "replica", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cuType = software.amazon.jsii.Kernel.get(this, "cuType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskSizeType = software.amazon.jsii.Kernel.get(this, "diskSizeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cuNum = java.util.Objects.requireNonNull(builder.cuNum, "cuNum is required");
                this.replica = java.util.Objects.requireNonNull(builder.replica, "replica is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.cuType = builder.cuType;
                this.diskSizeType = builder.diskSizeType;
            }

            @Override
            public final java.lang.Object getCuNum() {
                return this.cuNum;
            }

            @Override
            public final java.lang.Object getReplica() {
                return this.replica;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getCuType() {
                return this.cuType;
            }

            @Override
            public final java.lang.Object getDiskSizeType() {
                return this.diskSizeType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("cuNum", om.valueToTree(this.getCuNum()));
                data.set("replica", om.valueToTree(this.getReplica()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getCuType() != null) {
                    data.set("cuType", om.valueToTree(this.getCuType()));
                }
                if (this.getDiskSizeType() != null) {
                    data.set("diskSizeType", om.valueToTree(this.getDiskSizeType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-milvus.RosInstance.ComponentsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ComponentsProperty.Jsii$Proxy that = (ComponentsProperty.Jsii$Proxy) o;

                if (!cuNum.equals(that.cuNum)) return false;
                if (!replica.equals(that.replica)) return false;
                if (!type.equals(that.type)) return false;
                if (this.cuType != null ? !this.cuType.equals(that.cuType) : that.cuType != null) return false;
                return this.diskSizeType != null ? this.diskSizeType.equals(that.diskSizeType) : that.diskSizeType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cuNum.hashCode();
                result = 31 * result + (this.replica.hashCode());
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.cuType != null ? this.cuType.hashCode() : 0);
                result = 31 * result + (this.diskSizeType != null ? this.diskSizeType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.milvus.$Module.class, fqn = "@alicloud/ros-cdk-milvus.RosInstance.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-milvus.RosInstance.TagsProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.milvus.$Module.class, fqn = "@alicloud/ros-cdk-milvus.RosInstance.VSwitchIdsProperty")
    @software.amazon.jsii.Jsii.Proxy(VSwitchIdsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VSwitchIdsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVswId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

        /**
         * @return a {@link Builder} of {@link VSwitchIdsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VSwitchIdsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VSwitchIdsProperty> {
            java.lang.Object vswId;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link VSwitchIdsProperty#getVswId}
             * @param vswId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vswId(java.lang.String vswId) {
                this.vswId = vswId;
                return this;
            }

            /**
             * Sets the value of {@link VSwitchIdsProperty#getVswId}
             * @param vswId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vswId(com.aliyun.ros.cdk.core.IResolvable vswId) {
                this.vswId = vswId;
                return this;
            }

            /**
             * Sets the value of {@link VSwitchIdsProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link VSwitchIdsProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VSwitchIdsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VSwitchIdsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VSwitchIdsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VSwitchIdsProperty {
            private final java.lang.Object vswId;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vswId = software.amazon.jsii.Kernel.get(this, "vswId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vswId = java.util.Objects.requireNonNull(builder.vswId, "vswId is required");
                this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            }

            @Override
            public final java.lang.Object getVswId() {
                return this.vswId;
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

                data.set("vswId", om.valueToTree(this.getVswId()));
                data.set("zoneId", om.valueToTree(this.getZoneId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-milvus.RosInstance.VSwitchIdsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VSwitchIdsProperty.Jsii$Proxy that = (VSwitchIdsProperty.Jsii$Proxy) o;

                if (!vswId.equals(that.vswId)) return false;
                return this.zoneId.equals(that.zoneId);
            }

            @Override
            public final int hashCode() {
                int result = this.vswId.hashCode();
                result = 31 * result + (this.zoneId.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.milvus.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.milvus.RosInstance> {
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
        private final com.aliyun.ros.cdk.milvus.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.milvus.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param components This parameter is required.
         */
        public Builder components(final com.aliyun.ros.cdk.core.IResolvable components) {
            this.props.components(components);
            return this;
        }
        /**
         * @return {@code this}
         * @param components This parameter is required.
         */
        public Builder components(final java.util.List<? extends java.lang.Object> components) {
            this.props.components(components);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbAdminPassword This parameter is required.
         */
        public Builder dbAdminPassword(final java.lang.String dbAdminPassword) {
            this.props.dbAdminPassword(dbAdminPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbAdminPassword This parameter is required.
         */
        public Builder dbAdminPassword(final com.aliyun.ros.cdk.core.IResolvable dbAdminPassword) {
            this.props.dbAdminPassword(dbAdminPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbVersion This parameter is required.
         */
        public Builder dbVersion(final java.lang.String dbVersion) {
            this.props.dbVersion(dbVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbVersion This parameter is required.
         */
        public Builder dbVersion(final com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.props.dbVersion(dbVersion);
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
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
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
         * @param vSwitchIds This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchIds This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param aiFunction This parameter is required.
         */
        public Builder aiFunction(final java.lang.Boolean aiFunction) {
            this.props.aiFunction(aiFunction);
            return this;
        }
        /**
         * @return {@code this}
         * @param aiFunction This parameter is required.
         */
        public Builder aiFunction(final com.aliyun.ros.cdk.core.IResolvable aiFunction) {
            this.props.aiFunction(aiFunction);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoBackup This parameter is required.
         */
        public Builder autoBackup(final java.lang.Boolean autoBackup) {
            this.props.autoBackup(autoBackup);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoBackup This parameter is required.
         */
        public Builder autoBackup(final com.aliyun.ros.cdk.core.IResolvable autoBackup) {
            this.props.autoBackup(autoBackup);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
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
         * @param backupRestoreInfo This parameter is required.
         */
        public Builder backupRestoreInfo(final com.aliyun.ros.cdk.core.IResolvable backupRestoreInfo) {
            this.props.backupRestoreInfo(backupRestoreInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupRestoreInfo This parameter is required.
         */
        public Builder backupRestoreInfo(final com.aliyun.ros.cdk.milvus.RosInstance.BackupRestoreInfoProperty backupRestoreInfo) {
            this.props.backupRestoreInfo(backupRestoreInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param configuration This parameter is required.
         */
        public Builder configuration(final java.lang.String configuration) {
            this.props.configuration(configuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param configuration This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.props.configuration(configuration);
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
         * @param ha This parameter is required.
         */
        public Builder ha(final java.lang.Boolean ha) {
            this.props.ha(ha);
            return this;
        }
        /**
         * @return {@code this}
         * @param ha This parameter is required.
         */
        public Builder ha(final com.aliyun.ros.cdk.core.IResolvable ha) {
            this.props.ha(ha);
            return this;
        }

        /**
         * @return {@code this}
         * @param isMultiAzStorage This parameter is required.
         */
        public Builder isMultiAzStorage(final java.lang.Boolean isMultiAzStorage) {
            this.props.isMultiAzStorage(isMultiAzStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param isMultiAzStorage This parameter is required.
         */
        public Builder isMultiAzStorage(final com.aliyun.ros.cdk.core.IResolvable isMultiAzStorage) {
            this.props.isMultiAzStorage(isMultiAzStorage);
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
         * @param loadReplicas This parameter is required.
         */
        public Builder loadReplicas(final java.lang.Number loadReplicas) {
            this.props.loadReplicas(loadReplicas);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadReplicas This parameter is required.
         */
        public Builder loadReplicas(final com.aliyun.ros.cdk.core.IResolvable loadReplicas) {
            this.props.loadReplicas(loadReplicas);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiZoneMode This parameter is required.
         */
        public Builder multiZoneMode(final java.lang.String multiZoneMode) {
            this.props.multiZoneMode(multiZoneMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiZoneMode This parameter is required.
         */
        public Builder multiZoneMode(final com.aliyun.ros.cdk.core.IResolvable multiZoneMode) {
            this.props.multiZoneMode(multiZoneMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentDuration This parameter is required.
         */
        public Builder paymentDuration(final java.lang.Number paymentDuration) {
            this.props.paymentDuration(paymentDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentDuration This parameter is required.
         */
        public Builder paymentDuration(final com.aliyun.ros.cdk.core.IResolvable paymentDuration) {
            this.props.paymentDuration(paymentDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentDurationUnit This parameter is required.
         */
        public Builder paymentDurationUnit(final java.lang.String paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentDurationUnit This parameter is required.
         */
        public Builder paymentDurationUnit(final com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param promotionNo This parameter is required.
         */
        public Builder promotionNo(final java.lang.String promotionNo) {
            this.props.promotionNo(promotionNo);
            return this;
        }
        /**
         * @return {@code this}
         * @param promotionNo This parameter is required.
         */
        public Builder promotionNo(final com.aliyun.ros.cdk.core.IResolvable promotionNo) {
            this.props.promotionNo(promotionNo);
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
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.milvus.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.milvus.RosInstance build() {
            return new com.aliyun.ros.cdk.milvus.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
