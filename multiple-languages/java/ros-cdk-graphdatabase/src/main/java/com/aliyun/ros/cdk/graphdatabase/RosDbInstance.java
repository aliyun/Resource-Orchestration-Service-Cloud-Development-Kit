package com.aliyun.ros.cdk.graphdatabase;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GraphDatabase::DbInstance</code>, which is used to create a Graph Database (GDB) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:27.842Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.RosDbInstance")
public class RosDbInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDbInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDbInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.graphdatabase.RosDbInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDbInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.RosDbInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCurrentMinorVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrCurrentMinorVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCategory", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCpu", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceIpArray() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArray", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceMemory() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceMemory", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceNetworkType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorageType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeClass() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEcsSecurityGroupRelations() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsSecurityGroupRelations", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExpired() {
        return software.amazon.jsii.Kernel.get(this, "attrExpired", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExpireTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLatestMinorVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrLatestMinorVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLockMode() {
        return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLockReason() {
        return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaintainTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReadOnlyDbInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceCategory() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceCategory(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceCategory", java.util.Objects.requireNonNull(value, "dbInstanceCategory is required"));
    }

    /**
     */
    public void setDbInstanceCategory(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceCategory", java.util.Objects.requireNonNull(value, "dbInstanceCategory is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceNetworkType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceNetworkType", java.util.Objects.requireNonNull(value, "dbInstanceNetworkType is required"));
    }

    /**
     */
    public void setDbInstanceNetworkType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceNetworkType", java.util.Objects.requireNonNull(value, "dbInstanceNetworkType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorageType() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceStorageType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorageType", java.util.Objects.requireNonNull(value, "dbInstanceStorageType is required"));
    }

    /**
     */
    public void setDbInstanceStorageType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorageType", java.util.Objects.requireNonNull(value, "dbInstanceStorageType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeClass() {
        return software.amazon.jsii.Kernel.get(this, "dbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbNodeClass(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbNodeClass", java.util.Objects.requireNonNull(value, "dbNodeClass is required"));
    }

    /**
     */
    public void setDbNodeClass(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbNodeClass", java.util.Objects.requireNonNull(value, "dbNodeClass is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeStorage() {
        return software.amazon.jsii.Kernel.get(this, "dbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbNodeStorage(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dbNodeStorage", java.util.Objects.requireNonNull(value, "dbNodeStorage is required"));
    }

    /**
     */
    public void setDbNodeStorage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbNodeStorage", java.util.Objects.requireNonNull(value, "dbNodeStorage is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupSetId() {
        return software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupSetId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupSetId", value);
    }

    /**
     */
    public void setBackupSetId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupSetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCreateType() {
        return software.amazon.jsii.Kernel.get(this, "createType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCreateType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "createType", value);
    }

    /**
     */
    public void setCreateType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "createType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceDescription", value);
    }

    /**
     */
    public void setDbInstanceDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIpArray() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceIpArray(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceIpArray", value);
    }

    /**
     */
    public void setDbInstanceIpArray(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.graphdatabase.RosDbInstance.DBInstanceIPArrayProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.graphdatabase.RosDbInstance.DBInstanceIPArrayProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "dbInstanceIpArray", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcsSecurityGroupRelations() {
        return software.amazon.jsii.Kernel.get(this, "ecsSecurityGroupRelations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsSecurityGroupRelations(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsSecurityGroupRelations", value);
    }

    /**
     */
    public void setEcsSecurityGroupRelations(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.graphdatabase.RosDbInstance.EcsSecurityGroupRelationsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.graphdatabase.RosDbInstance.EcsSecurityGroupRelationsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "ecsSecurityGroupRelations", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaintainTime() {
        return software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaintainTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "maintainTime", value);
    }

    /**
     */
    public void setMaintainTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maintainTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestoreType() {
        return software.amazon.jsii.Kernel.get(this, "restoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restoreType", value);
    }

    /**
     */
    public void setRestoreType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "sourceDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceDbInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceDbInstanceId", value);
    }

    /**
     */
    public void setSourceDbInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceDbInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.RosDbInstance.DBInstanceIPArrayProperty")
    @software.amazon.jsii.Jsii.Proxy(DBInstanceIPArrayProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DBInstanceIPArrayProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIps();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIpArrayName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DBInstanceIPArrayProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DBInstanceIPArrayProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DBInstanceIPArrayProperty> {
            java.lang.Object securityIps;
            java.lang.Object dbInstanceIpArrayName;

            /**
             * Sets the value of {@link DBInstanceIPArrayProperty#getSecurityIps}
             * @param securityIps the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityIps(java.lang.String securityIps) {
                this.securityIps = securityIps;
                return this;
            }

            /**
             * Sets the value of {@link DBInstanceIPArrayProperty#getSecurityIps}
             * @param securityIps the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityIps(com.aliyun.ros.cdk.core.IResolvable securityIps) {
                this.securityIps = securityIps;
                return this;
            }

            /**
             * Sets the value of {@link DBInstanceIPArrayProperty#getDbInstanceIpArrayName}
             * @param dbInstanceIpArrayName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbInstanceIpArrayName(java.lang.String dbInstanceIpArrayName) {
                this.dbInstanceIpArrayName = dbInstanceIpArrayName;
                return this;
            }

            /**
             * Sets the value of {@link DBInstanceIPArrayProperty#getDbInstanceIpArrayName}
             * @param dbInstanceIpArrayName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbInstanceIpArrayName(com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArrayName) {
                this.dbInstanceIpArrayName = dbInstanceIpArrayName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DBInstanceIPArrayProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DBInstanceIPArrayProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DBInstanceIPArrayProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBInstanceIPArrayProperty {
            private final java.lang.Object securityIps;
            private final java.lang.Object dbInstanceIpArrayName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.securityIps = software.amazon.jsii.Kernel.get(this, "securityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dbInstanceIpArrayName = software.amazon.jsii.Kernel.get(this, "dbInstanceIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.securityIps = java.util.Objects.requireNonNull(builder.securityIps, "securityIps is required");
                this.dbInstanceIpArrayName = builder.dbInstanceIpArrayName;
            }

            @Override
            public final java.lang.Object getSecurityIps() {
                return this.securityIps;
            }

            @Override
            public final java.lang.Object getDbInstanceIpArrayName() {
                return this.dbInstanceIpArrayName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("securityIps", om.valueToTree(this.getSecurityIps()));
                if (this.getDbInstanceIpArrayName() != null) {
                    data.set("dbInstanceIpArrayName", om.valueToTree(this.getDbInstanceIpArrayName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-graphdatabase.RosDbInstance.DBInstanceIPArrayProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DBInstanceIPArrayProperty.Jsii$Proxy that = (DBInstanceIPArrayProperty.Jsii$Proxy) o;

                if (!securityIps.equals(that.securityIps)) return false;
                return this.dbInstanceIpArrayName != null ? this.dbInstanceIpArrayName.equals(that.dbInstanceIpArrayName) : that.dbInstanceIpArrayName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.securityIps.hashCode();
                result = 31 * result + (this.dbInstanceIpArrayName != null ? this.dbInstanceIpArrayName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.RosDbInstance.EcsSecurityGroupRelationsProperty")
    @software.amazon.jsii.Jsii.Proxy(EcsSecurityGroupRelationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EcsSecurityGroupRelationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EcsSecurityGroupRelationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EcsSecurityGroupRelationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EcsSecurityGroupRelationsProperty> {
            java.lang.Object securityGroupId;
            java.lang.Object networkType;
            java.lang.Object regionId;

            /**
             * Sets the value of {@link EcsSecurityGroupRelationsProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link EcsSecurityGroupRelationsProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link EcsSecurityGroupRelationsProperty#getNetworkType}
             * @param networkType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkType(java.lang.String networkType) {
                this.networkType = networkType;
                return this;
            }

            /**
             * Sets the value of {@link EcsSecurityGroupRelationsProperty#getNetworkType}
             * @param networkType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
                this.networkType = networkType;
                return this;
            }

            /**
             * Sets the value of {@link EcsSecurityGroupRelationsProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link EcsSecurityGroupRelationsProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EcsSecurityGroupRelationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EcsSecurityGroupRelationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EcsSecurityGroupRelationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EcsSecurityGroupRelationsProperty {
            private final java.lang.Object securityGroupId;
            private final java.lang.Object networkType;
            private final java.lang.Object regionId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
                this.networkType = builder.networkType;
                this.regionId = builder.regionId;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getNetworkType() {
                return this.networkType;
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                if (this.getNetworkType() != null) {
                    data.set("networkType", om.valueToTree(this.getNetworkType()));
                }
                if (this.getRegionId() != null) {
                    data.set("regionId", om.valueToTree(this.getRegionId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-graphdatabase.RosDbInstance.EcsSecurityGroupRelationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EcsSecurityGroupRelationsProperty.Jsii$Proxy that = (EcsSecurityGroupRelationsProperty.Jsii$Proxy) o;

                if (!securityGroupId.equals(that.securityGroupId)) return false;
                if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
                return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.securityGroupId.hashCode();
                result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
                result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.RosDbInstance.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-graphdatabase.RosDbInstance.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.graphdatabase.RosDbInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.graphdatabase.RosDbInstance> {
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
        private final com.aliyun.ros.cdk.graphdatabase.RosDbInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.graphdatabase.RosDbInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbInstanceCategory This parameter is required.
         */
        public Builder dbInstanceCategory(final java.lang.String dbInstanceCategory) {
            this.props.dbInstanceCategory(dbInstanceCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceCategory This parameter is required.
         */
        public Builder dbInstanceCategory(final com.aliyun.ros.cdk.core.IResolvable dbInstanceCategory) {
            this.props.dbInstanceCategory(dbInstanceCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceNetworkType This parameter is required.
         */
        public Builder dbInstanceNetworkType(final java.lang.String dbInstanceNetworkType) {
            this.props.dbInstanceNetworkType(dbInstanceNetworkType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceNetworkType This parameter is required.
         */
        public Builder dbInstanceNetworkType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceNetworkType) {
            this.props.dbInstanceNetworkType(dbInstanceNetworkType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceStorageType This parameter is required.
         */
        public Builder dbInstanceStorageType(final java.lang.String dbInstanceStorageType) {
            this.props.dbInstanceStorageType(dbInstanceStorageType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceStorageType This parameter is required.
         */
        public Builder dbInstanceStorageType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.props.dbInstanceStorageType(dbInstanceStorageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbNodeClass This parameter is required.
         */
        public Builder dbNodeClass(final java.lang.String dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbNodeClass This parameter is required.
         */
        public Builder dbNodeClass(final com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbNodeStorage This parameter is required.
         */
        public Builder dbNodeStorage(final java.lang.Number dbNodeStorage) {
            this.props.dbNodeStorage(dbNodeStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbNodeStorage This parameter is required.
         */
        public Builder dbNodeStorage(final com.aliyun.ros.cdk.core.IResolvable dbNodeStorage) {
            this.props.dbNodeStorage(dbNodeStorage);
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
         * @param backupSetId This parameter is required.
         */
        public Builder backupSetId(final java.lang.String backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupSetId This parameter is required.
         */
        public Builder backupSetId(final com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param createType This parameter is required.
         */
        public Builder createType(final java.lang.String createType) {
            this.props.createType(createType);
            return this;
        }
        /**
         * @return {@code this}
         * @param createType This parameter is required.
         */
        public Builder createType(final com.aliyun.ros.cdk.core.IResolvable createType) {
            this.props.createType(createType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceDescription This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceDescription This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceIpArray This parameter is required.
         */
        public Builder dbInstanceIpArray(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArray) {
            this.props.dbInstanceIpArray(dbInstanceIpArray);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceIpArray This parameter is required.
         */
        public Builder dbInstanceIpArray(final java.util.List<? extends java.lang.Object> dbInstanceIpArray) {
            this.props.dbInstanceIpArray(dbInstanceIpArray);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsSecurityGroupRelations This parameter is required.
         */
        public Builder ecsSecurityGroupRelations(final com.aliyun.ros.cdk.core.IResolvable ecsSecurityGroupRelations) {
            this.props.ecsSecurityGroupRelations(ecsSecurityGroupRelations);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsSecurityGroupRelations This parameter is required.
         */
        public Builder ecsSecurityGroupRelations(final java.util.List<? extends java.lang.Object> ecsSecurityGroupRelations) {
            this.props.ecsSecurityGroupRelations(ecsSecurityGroupRelations);
            return this;
        }

        /**
         * @return {@code this}
         * @param maintainTime This parameter is required.
         */
        public Builder maintainTime(final java.lang.String maintainTime) {
            this.props.maintainTime(maintainTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param maintainTime This parameter is required.
         */
        public Builder maintainTime(final com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.props.maintainTime(maintainTime);
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
         * @param restoreType This parameter is required.
         */
        public Builder restoreType(final java.lang.String restoreType) {
            this.props.restoreType(restoreType);
            return this;
        }
        /**
         * @return {@code this}
         * @param restoreType This parameter is required.
         */
        public Builder restoreType(final com.aliyun.ros.cdk.core.IResolvable restoreType) {
            this.props.restoreType(restoreType);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceDbInstanceId This parameter is required.
         */
        public Builder sourceDbInstanceId(final java.lang.String sourceDbInstanceId) {
            this.props.sourceDbInstanceId(sourceDbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceDbInstanceId This parameter is required.
         */
        public Builder sourceDbInstanceId(final com.aliyun.ros.cdk.core.IResolvable sourceDbInstanceId) {
            this.props.sourceDbInstanceId(sourceDbInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.graphdatabase.RosDbInstance.TagsProperty> tags) {
            this.props.tags(tags);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.graphdatabase.RosDbInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.graphdatabase.RosDbInstance build() {
            return new com.aliyun.ros.cdk.graphdatabase.RosDbInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
