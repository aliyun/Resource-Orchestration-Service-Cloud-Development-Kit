package com.aliyun.ros.cdk.rds;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::RDS::DBInstanceClone</code>, which is used to restore historical data of an instance to a new instance.
 * <p>
 * The new instance is the clone of the instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:11.082Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstanceClone")
public class RosDBInstanceClone extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDBInstanceClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDBInstanceClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.rds.RosDBInstanceClone.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDBInstanceClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.RosDBInstanceCloneProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerPort() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicConnection() {
        return software.amazon.jsii.Kernel.get(this, "allocatePublicConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllocatePublicConnection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allocatePublicConnection", value);
    }

    /**
     */
    public void setAllocatePublicConnection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allocatePublicConnection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupId() {
        return software.amazon.jsii.Kernel.get(this, "backupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupId", value);
    }

    /**
     */
    public void setBackupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "backupRetentionPeriod", value);
    }

    /**
     */
    public void setBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupRetentionPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupType() {
        return software.amazon.jsii.Kernel.get(this, "backupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupType", value);
    }

    /**
     */
    public void setBackupType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "category", value);
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "category", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringPrefix() {
        return software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionStringPrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionStringPrefix", value);
    }

    /**
     */
    public void setConnectionStringPrefix(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionStringPrefix", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringType() {
        return software.amazon.jsii.Kernel.get(this, "connectionStringType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionStringType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionStringType", value);
    }

    /**
     */
    public void setConnectionStringType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionStringType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceClass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceClass", value);
    }

    /**
     */
    public void setDbInstanceClass(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceClass", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorage() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceStorage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorage", value);
    }

    /**
     */
    public void setDbInstanceStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorageType() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceStorageType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorageType", value);
    }

    /**
     */
    public void setDbInstanceStorageType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorageType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbMappings() {
        return software.amazon.jsii.Kernel.get(this, "dbMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbMappings(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbMappings", value);
    }

    /**
     */
    public void setDbMappings(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.rds.RosDBInstanceClone.DBMappingsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.rds.RosDBInstanceClone.DBMappingsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "dbMappings", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbNames() {
        return software.amazon.jsii.Kernel.get(this, "dbNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbNames(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbNames", value);
    }

    /**
     */
    public void setDbNames(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbNames", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDedicatedHostGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostGroupId", value);
    }

    /**
     */
    public void setDedicatedHostGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "instanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceNetworkType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceNetworkType", value);
    }

    /**
     */
    public void setInstanceNetworkType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceNetworkType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterUsername() {
        return software.amazon.jsii.Kernel.get(this, "masterUsername", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterUsername(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterUsername", value);
    }

    /**
     */
    public void setMasterUsername(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterUsername", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterUserPassword() {
        return software.amazon.jsii.Kernel.get(this, "masterUserPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterUserPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterUserPassword", value);
    }

    /**
     */
    public void setMasterUserPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterUserPassword", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterUserType() {
        return software.amazon.jsii.Kernel.get(this, "masterUserType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterUserType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterUserType", value);
    }

    /**
     */
    public void setMasterUserType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterUserType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodType() {
        return software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodType", value);
    }

    /**
     */
    public void setPeriodType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
        return software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "port", value);
    }

    /**
     */
    public void setPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "port", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupPeriod() {
        return software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreferredBackupPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupPeriod", value);
    }

    /**
     */
    public void setPreferredBackupPeriod(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "preferredBackupPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupTime() {
        return software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreferredBackupTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupTime", value);
    }

    /**
     */
    public void setPreferredBackupTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivateIpAddress(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "privateIpAddress", value);
    }

    /**
     */
    public void setPrivateIpAddress(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privateIpAddress", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTable() {
        return software.amazon.jsii.Kernel.get(this, "restoreTable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreTable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restoreTable", value);
    }

    /**
     */
    public void setRestoreTable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreTable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTime() {
        return software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restoreTime", value);
    }

    /**
     */
    public void setRestoreTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreTime", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityIpList(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityIpList", value);
    }

    /**
     */
    public void setSecurityIpList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityIpList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlaveZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "slaveZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlaveZoneIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slaveZoneIds", value);
    }

    /**
     */
    public void setSlaveZoneIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "slaveZoneIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSqlCollectorStatus() {
        return software.amazon.jsii.Kernel.get(this, "sqlCollectorStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSqlCollectorStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sqlCollectorStatus", value);
    }

    /**
     */
    public void setSqlCollectorStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sqlCollectorStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSslSetting() {
        return software.amazon.jsii.Kernel.get(this, "sslSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSslSetting(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sslSetting", value);
    }

    /**
     */
    public void setSslSetting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sslSetting", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTableMeta() {
        return software.amazon.jsii.Kernel.get(this, "tableMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTableMeta(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tableMeta", value);
    }

    /**
     */
    public void setTableMeta(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.rds.RosDBInstanceClone.TableMetaProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.rds.RosDBInstanceClone.TableMetaProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "tableMeta", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.Object>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutInMinutes() {
        return software.amazon.jsii.Kernel.get(this, "timeoutInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeoutInMinutes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeoutInMinutes", value);
    }

    /**
     */
    public void setTimeoutInMinutes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeoutInMinutes", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(DBMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DBMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCharacterSetName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDbDescription() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DBMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DBMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DBMappingsProperty> {
            java.lang.Object characterSetName;
            java.lang.Object dbName;
            java.lang.Object dbDescription;

            /**
             * Sets the value of {@link DBMappingsProperty#getCharacterSetName}
             * @param characterSetName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder characterSetName(java.lang.String characterSetName) {
                this.characterSetName = characterSetName;
                return this;
            }

            /**
             * Sets the value of {@link DBMappingsProperty#getCharacterSetName}
             * @param characterSetName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder characterSetName(com.aliyun.ros.cdk.core.IResolvable characterSetName) {
                this.characterSetName = characterSetName;
                return this;
            }

            /**
             * Sets the value of {@link DBMappingsProperty#getDbName}
             * @param dbName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbName(java.lang.String dbName) {
                this.dbName = dbName;
                return this;
            }

            /**
             * Sets the value of {@link DBMappingsProperty#getDbName}
             * @param dbName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
                this.dbName = dbName;
                return this;
            }

            /**
             * Sets the value of {@link DBMappingsProperty#getDbDescription}
             * @param dbDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbDescription(java.lang.String dbDescription) {
                this.dbDescription = dbDescription;
                return this;
            }

            /**
             * Sets the value of {@link DBMappingsProperty#getDbDescription}
             * @param dbDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbDescription(com.aliyun.ros.cdk.core.IResolvable dbDescription) {
                this.dbDescription = dbDescription;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DBMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DBMappingsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DBMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBMappingsProperty {
            private final java.lang.Object characterSetName;
            private final java.lang.Object dbName;
            private final java.lang.Object dbDescription;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dbDescription = software.amazon.jsii.Kernel.get(this, "dbDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.characterSetName = java.util.Objects.requireNonNull(builder.characterSetName, "characterSetName is required");
                this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
                this.dbDescription = builder.dbDescription;
            }

            @Override
            public final java.lang.Object getCharacterSetName() {
                return this.characterSetName;
            }

            @Override
            public final java.lang.Object getDbName() {
                return this.dbName;
            }

            @Override
            public final java.lang.Object getDbDescription() {
                return this.dbDescription;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("characterSetName", om.valueToTree(this.getCharacterSetName()));
                data.set("dbName", om.valueToTree(this.getDbName()));
                if (this.getDbDescription() != null) {
                    data.set("dbDescription", om.valueToTree(this.getDbDescription()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DBMappingsProperty.Jsii$Proxy that = (DBMappingsProperty.Jsii$Proxy) o;

                if (!characterSetName.equals(that.characterSetName)) return false;
                if (!dbName.equals(that.dbName)) return false;
                return this.dbDescription != null ? this.dbDescription.equals(that.dbDescription) : that.dbDescription == null;
            }

            @Override
            public final int hashCode() {
                int result = this.characterSetName.hashCode();
                result = 31 * result + (this.dbName.hashCode());
                result = 31 * result + (this.dbDescription != null ? this.dbDescription.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty")
    @software.amazon.jsii.Jsii.Proxy(TableMetaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TableMetaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNewName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTables() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TableMetaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TableMetaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TableMetaProperty> {
            java.lang.Object name;
            java.lang.Object newName;
            java.lang.Object tables;
            java.lang.Object type;

            /**
             * Sets the value of {@link TableMetaProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link TableMetaProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link TableMetaProperty#getNewName}
             * @param newName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newName(java.lang.String newName) {
                this.newName = newName;
                return this;
            }

            /**
             * Sets the value of {@link TableMetaProperty#getNewName}
             * @param newName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newName(com.aliyun.ros.cdk.core.IResolvable newName) {
                this.newName = newName;
                return this;
            }

            /**
             * Sets the value of {@link TableMetaProperty#getTables}
             * @param tables the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tables(com.aliyun.ros.cdk.core.IResolvable tables) {
                this.tables = tables;
                return this;
            }

            /**
             * Sets the value of {@link TableMetaProperty#getTables}
             * @param tables the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tables(java.util.List<? extends java.lang.Object> tables) {
                this.tables = tables;
                return this;
            }

            /**
             * Sets the value of {@link TableMetaProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link TableMetaProperty#getType}
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
             * @return a new instance of {@link TableMetaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TableMetaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TableMetaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TableMetaProperty {
            private final java.lang.Object name;
            private final java.lang.Object newName;
            private final java.lang.Object tables;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.newName = software.amazon.jsii.Kernel.get(this, "newName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tables = software.amazon.jsii.Kernel.get(this, "tables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.newName = builder.newName;
                this.tables = builder.tables;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getNewName() {
                return this.newName;
            }

            @Override
            public final java.lang.Object getTables() {
                return this.tables;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getNewName() != null) {
                    data.set("newName", om.valueToTree(this.getNewName()));
                }
                if (this.getTables() != null) {
                    data.set("tables", om.valueToTree(this.getTables()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TableMetaProperty.Jsii$Proxy that = (TableMetaProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.newName != null ? !this.newName.equals(that.newName) : that.newName != null) return false;
                if (this.tables != null ? !this.tables.equals(that.tables) : that.tables != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.newName != null ? this.newName.hashCode() : 0);
                result = 31 * result + (this.tables != null ? this.tables.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty")
    @software.amazon.jsii.Jsii.Proxy(TablesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TablesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNewName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TablesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TablesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TablesProperty> {
            java.lang.Object name;
            java.lang.Object newName;
            java.lang.Object type;

            /**
             * Sets the value of {@link TablesProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link TablesProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link TablesProperty#getNewName}
             * @param newName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newName(java.lang.String newName) {
                this.newName = newName;
                return this;
            }

            /**
             * Sets the value of {@link TablesProperty#getNewName}
             * @param newName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newName(com.aliyun.ros.cdk.core.IResolvable newName) {
                this.newName = newName;
                return this;
            }

            /**
             * Sets the value of {@link TablesProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link TablesProperty#getType}
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
             * @return a new instance of {@link TablesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TablesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TablesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TablesProperty {
            private final java.lang.Object name;
            private final java.lang.Object newName;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.newName = software.amazon.jsii.Kernel.get(this, "newName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.newName = builder.newName;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getNewName() {
                return this.newName;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getNewName() != null) {
                    data.set("newName", om.valueToTree(this.getNewName()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TablesProperty.Jsii$Proxy that = (TablesProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.newName != null ? !this.newName.equals(that.newName) : that.newName != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.newName != null ? this.newName.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.RosDBInstanceClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.RosDBInstanceClone> {
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
        private final com.aliyun.ros.cdk.rds.RosDBInstanceCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.RosDBInstanceCloneProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
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
         * @param allocatePublicConnection This parameter is required.
         */
        public Builder allocatePublicConnection(final java.lang.Boolean allocatePublicConnection) {
            this.props.allocatePublicConnection(allocatePublicConnection);
            return this;
        }
        /**
         * @return {@code this}
         * @param allocatePublicConnection This parameter is required.
         */
        public Builder allocatePublicConnection(final com.aliyun.ros.cdk.core.IResolvable allocatePublicConnection) {
            this.props.allocatePublicConnection(allocatePublicConnection);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupId This parameter is required.
         */
        public Builder backupId(final java.lang.String backupId) {
            this.props.backupId(backupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupId This parameter is required.
         */
        public Builder backupId(final com.aliyun.ros.cdk.core.IResolvable backupId) {
            this.props.backupId(backupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupRetentionPeriod This parameter is required.
         */
        public Builder backupRetentionPeriod(final java.lang.Number backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupRetentionPeriod This parameter is required.
         */
        public Builder backupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupType This parameter is required.
         */
        public Builder backupType(final java.lang.String backupType) {
            this.props.backupType(backupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupType This parameter is required.
         */
        public Builder backupType(final com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.props.backupType(backupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param category This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * @return {@code this}
         * @param category This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionStringPrefix This parameter is required.
         */
        public Builder connectionStringPrefix(final java.lang.String connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionStringPrefix This parameter is required.
         */
        public Builder connectionStringPrefix(final com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionStringType This parameter is required.
         */
        public Builder connectionStringType(final java.lang.String connectionStringType) {
            this.props.connectionStringType(connectionStringType);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionStringType This parameter is required.
         */
        public Builder connectionStringType(final com.aliyun.ros.cdk.core.IResolvable connectionStringType) {
            this.props.connectionStringType(connectionStringType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceClass This parameter is required.
         */
        public Builder dbInstanceClass(final java.lang.String dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceClass This parameter is required.
         */
        public Builder dbInstanceClass(final com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
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
         * @param dbInstanceStorage This parameter is required.
         */
        public Builder dbInstanceStorage(final java.lang.Number dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceStorage This parameter is required.
         */
        public Builder dbInstanceStorage(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
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
         * @param dbMappings This parameter is required.
         */
        public Builder dbMappings(final com.aliyun.ros.cdk.core.IResolvable dbMappings) {
            this.props.dbMappings(dbMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbMappings This parameter is required.
         */
        public Builder dbMappings(final java.util.List<? extends java.lang.Object> dbMappings) {
            this.props.dbMappings(dbMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbNames This parameter is required.
         */
        public Builder dbNames(final java.lang.String dbNames) {
            this.props.dbNames(dbNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbNames This parameter is required.
         */
        public Builder dbNames(final com.aliyun.ros.cdk.core.IResolvable dbNames) {
            this.props.dbNames(dbNames);
            return this;
        }

        /**
         * @return {@code this}
         * @param dedicatedHostGroupId This parameter is required.
         */
        public Builder dedicatedHostGroupId(final java.lang.String dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dedicatedHostGroupId This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceNetworkType This parameter is required.
         */
        public Builder instanceNetworkType(final java.lang.String instanceNetworkType) {
            this.props.instanceNetworkType(instanceNetworkType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceNetworkType This parameter is required.
         */
        public Builder instanceNetworkType(final com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.props.instanceNetworkType(instanceNetworkType);
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
         * @param masterUsername This parameter is required.
         */
        public Builder masterUsername(final java.lang.String masterUsername) {
            this.props.masterUsername(masterUsername);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterUsername This parameter is required.
         */
        public Builder masterUsername(final com.aliyun.ros.cdk.core.IResolvable masterUsername) {
            this.props.masterUsername(masterUsername);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterUserPassword This parameter is required.
         */
        public Builder masterUserPassword(final java.lang.String masterUserPassword) {
            this.props.masterUserPassword(masterUserPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterUserPassword This parameter is required.
         */
        public Builder masterUserPassword(final com.aliyun.ros.cdk.core.IResolvable masterUserPassword) {
            this.props.masterUserPassword(masterUserPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterUserType This parameter is required.
         */
        public Builder masterUserType(final java.lang.String masterUserType) {
            this.props.masterUserType(masterUserType);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterUserType This parameter is required.
         */
        public Builder masterUserType(final com.aliyun.ros.cdk.core.IResolvable masterUserType) {
            this.props.masterUserType(masterUserType);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodType This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodType This parameter is required.
         */
        public Builder periodType(final com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.props.periodType(periodType);
            return this;
        }

        /**
         * @return {@code this}
         * @param port This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
            return this;
        }
        /**
         * @return {@code this}
         * @param port This parameter is required.
         */
        public Builder port(final com.aliyun.ros.cdk.core.IResolvable port) {
            this.props.port(port);
            return this;
        }

        /**
         * @return {@code this}
         * @param preferredBackupPeriod This parameter is required.
         */
        public Builder preferredBackupPeriod(final com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param preferredBackupPeriod This parameter is required.
         */
        public Builder preferredBackupPeriod(final java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param preferredBackupTime This parameter is required.
         */
        public Builder preferredBackupTime(final java.lang.String preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param preferredBackupTime This parameter is required.
         */
        public Builder preferredBackupTime(final com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param privateIpAddress This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateIpAddress This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * @return {@code this}
         * @param restoreTable This parameter is required.
         */
        public Builder restoreTable(final java.lang.String restoreTable) {
            this.props.restoreTable(restoreTable);
            return this;
        }
        /**
         * @return {@code this}
         * @param restoreTable This parameter is required.
         */
        public Builder restoreTable(final com.aliyun.ros.cdk.core.IResolvable restoreTable) {
            this.props.restoreTable(restoreTable);
            return this;
        }

        /**
         * @return {@code this}
         * @param restoreTime This parameter is required.
         */
        public Builder restoreTime(final java.lang.String restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param restoreTime This parameter is required.
         */
        public Builder restoreTime(final com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.props.restoreTime(restoreTime);
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
         * @param securityIpList This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityIpList This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * @return {@code this}
         * @param slaveZoneIds This parameter is required.
         */
        public Builder slaveZoneIds(final com.aliyun.ros.cdk.core.IResolvable slaveZoneIds) {
            this.props.slaveZoneIds(slaveZoneIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param slaveZoneIds This parameter is required.
         */
        public Builder slaveZoneIds(final java.util.List<? extends java.lang.Object> slaveZoneIds) {
            this.props.slaveZoneIds(slaveZoneIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param sqlCollectorStatus This parameter is required.
         */
        public Builder sqlCollectorStatus(final java.lang.String sqlCollectorStatus) {
            this.props.sqlCollectorStatus(sqlCollectorStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param sqlCollectorStatus This parameter is required.
         */
        public Builder sqlCollectorStatus(final com.aliyun.ros.cdk.core.IResolvable sqlCollectorStatus) {
            this.props.sqlCollectorStatus(sqlCollectorStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param sslSetting This parameter is required.
         */
        public Builder sslSetting(final java.lang.String sslSetting) {
            this.props.sslSetting(sslSetting);
            return this;
        }
        /**
         * @return {@code this}
         * @param sslSetting This parameter is required.
         */
        public Builder sslSetting(final com.aliyun.ros.cdk.core.IResolvable sslSetting) {
            this.props.sslSetting(sslSetting);
            return this;
        }

        /**
         * @return {@code this}
         * @param tableMeta This parameter is required.
         */
        public Builder tableMeta(final com.aliyun.ros.cdk.core.IResolvable tableMeta) {
            this.props.tableMeta(tableMeta);
            return this;
        }
        /**
         * @return {@code this}
         * @param tableMeta This parameter is required.
         */
        public Builder tableMeta(final java.util.List<? extends java.lang.Object> tableMeta) {
            this.props.tableMeta(tableMeta);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeoutInMinutes This parameter is required.
         */
        public Builder timeoutInMinutes(final java.lang.Number timeoutInMinutes) {
            this.props.timeoutInMinutes(timeoutInMinutes);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeoutInMinutes This parameter is required.
         */
        public Builder timeoutInMinutes(final com.aliyun.ros.cdk.core.IResolvable timeoutInMinutes) {
            this.props.timeoutInMinutes(timeoutInMinutes);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.RosDBInstanceClone}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.RosDBInstanceClone build() {
            return new com.aliyun.ros.cdk.rds.RosDBInstanceClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
