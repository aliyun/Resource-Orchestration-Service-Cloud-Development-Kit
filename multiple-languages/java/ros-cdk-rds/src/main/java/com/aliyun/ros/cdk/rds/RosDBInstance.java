package com.aliyun.ros.cdk.rds;

/**
 * A ROS template type:  `ALIYUN::RDS::DBInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.437Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstance")
public class RosDBInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDBInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDBInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.rds.RosDBInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::RDS::DBInstance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.RosDBInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerPort() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
        return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDbInstanceClass(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceClass", java.util.Objects.requireNonNull(value, "dbInstanceClass is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getDbInstanceStorage() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setDbInstanceStorage(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorage", java.util.Objects.requireNonNull(value, "dbInstanceStorage is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getEngine() {
        return software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engine", java.util.Objects.requireNonNull(value, "engine is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setEngineVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", java.util.Objects.requireNonNull(value, "engineVersion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSecurityIpList(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityIpList", java.util.Objects.requireNonNull(value, "securityIpList is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Number getBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "backupRetentionPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getCategory() {
        return software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "category", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getConnectionMode() {
        return software.amazon.jsii.Kernel.get(this, "connectionMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setConnectionMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getConnectionStringPrefix() {
        return software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setConnectionStringPrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionStringPrefix", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getConnectionStringType() {
        return software.amazon.jsii.Kernel.get(this, "connectionStringType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setConnectionStringType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionStringType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceDescription() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDbInstanceDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceNetType() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceNetType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDbInstanceNetType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceNetType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceStorageType() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDbInstanceStorageType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorageType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getDbIsIgnoreCase() {
        return software.amazon.jsii.Kernel.get(this, "dbIsIgnoreCase", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setDbIsIgnoreCase(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dbIsIgnoreCase", value);
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
        software.amazon.jsii.Kernel.set(this, "dbMappings", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDbParamGroupId() {
        return software.amazon.jsii.Kernel.get(this, "dbParamGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDbParamGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbParamGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDbTimeZone() {
        return software.amazon.jsii.Kernel.get(this, "dbTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDbTimeZone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbTimeZone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDedicatedHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDedicatedHostGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getEncryptionKey() {
        return software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setEncryptionKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "encryptionKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getMaintainTime() {
        return software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setMaintainTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "maintainTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getMasterUsername() {
        return software.amazon.jsii.Kernel.get(this, "masterUsername", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setMasterUsername(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterUsername", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getMasterUserPassword() {
        return software.amazon.jsii.Kernel.get(this, "masterUserPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setMasterUserPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterUserPassword", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getMasterUserType() {
        return software.amazon.jsii.Kernel.get(this, "masterUserType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setMasterUserType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterUserType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMultiAz() {
        return software.amazon.jsii.Kernel.get(this, "multiAz", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiAz(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "multiAz", value);
    }

    /**
     */
    public void setMultiAz(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiAz", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPeriodType() {
        return software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPeriodType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getPort() {
        return software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "port", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupPeriod() {
        return software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreferredBackupPeriod(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupPeriod", value);
    }

    /**
     */
    public void setPreferredBackupPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPreferredBackupTime() {
        return software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPreferredBackupTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "preferredBackupTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPrivateIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPrivateIpAddress(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "privateIpAddress", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRoleArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "roleArn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getSlaveZoneIds() {
        return java.util.Optional.ofNullable((java.util.List<java.lang.String>)(software.amazon.jsii.Kernel.get(this, "slaveZoneIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setSlaveZoneIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> value) {
        software.amazon.jsii.Kernel.set(this, "slaveZoneIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSqlCollectorStatus() {
        return software.amazon.jsii.Kernel.get(this, "sqlCollectorStatus", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSqlCollectorStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sqlCollectorStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSslSetting() {
        return software.amazon.jsii.Kernel.get(this, "sslSetting", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSslSetting(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sslSetting", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getTargetDedicatedHostIdForLog() {
        return software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForLog", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setTargetDedicatedHostIdForLog(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForLog", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getTargetDedicatedHostIdForMaster() {
        return software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForMaster", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setTargetDedicatedHostIdForMaster(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForMaster", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getTargetDedicatedHostIdForSlave() {
        return software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForSlave", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setTargetDedicatedHostIdForSlave(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForSlave", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstance.DBMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(DBMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DBMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getCharacterSetName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getDbName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDbDescription() {
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
            private java.lang.String characterSetName;
            private java.lang.String dbName;
            private java.lang.String dbDescription;

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
             * Builds the configured instance.
             * @return a new instance of {@link DBMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DBMappingsProperty build() {
                return new Jsii$Proxy(characterSetName, dbName, dbDescription);
            }
        }

        /**
         * An implementation for {@link DBMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBMappingsProperty {
            private final java.lang.String characterSetName;
            private final java.lang.String dbName;
            private final java.lang.String dbDescription;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.dbDescription = software.amazon.jsii.Kernel.get(this, "dbDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String characterSetName, final java.lang.String dbName, final java.lang.String dbDescription) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.characterSetName = java.util.Objects.requireNonNull(characterSetName, "characterSetName is required");
                this.dbName = java.util.Objects.requireNonNull(dbName, "dbName is required");
                this.dbDescription = dbDescription;
            }

            @Override
            public final java.lang.String getCharacterSetName() {
                return this.characterSetName;
            }

            @Override
            public final java.lang.String getDbName() {
                return this.dbName;
            }

            @Override
            public final java.lang.String getDbDescription() {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDBInstance.DBMappingsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.RosDBInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.RosDBInstance> {
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
        private final com.aliyun.ros.cdk.rds.RosDBInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.RosDBInstanceProps.Builder();
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
         * @param dbInstanceStorage This parameter is required.
         */
        public Builder dbInstanceStorage(final java.lang.Number dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param engine This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * @return {@code this}
         * @param engineVersion This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
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
         * @param backupRetentionPeriod This parameter is required.
         */
        public Builder backupRetentionPeriod(final java.lang.Number backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
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
         * @param connectionMode This parameter is required.
         */
        public Builder connectionMode(final java.lang.String connectionMode) {
            this.props.connectionMode(connectionMode);
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
         * @param connectionStringType This parameter is required.
         */
        public Builder connectionStringType(final java.lang.String connectionStringType) {
            this.props.connectionStringType(connectionStringType);
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
         * @param dbInstanceNetType This parameter is required.
         */
        public Builder dbInstanceNetType(final java.lang.String dbInstanceNetType) {
            this.props.dbInstanceNetType(dbInstanceNetType);
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
         * @param dbIsIgnoreCase This parameter is required.
         */
        public Builder dbIsIgnoreCase(final java.lang.Number dbIsIgnoreCase) {
            this.props.dbIsIgnoreCase(dbIsIgnoreCase);
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
         * @param dbParamGroupId This parameter is required.
         */
        public Builder dbParamGroupId(final java.lang.String dbParamGroupId) {
            this.props.dbParamGroupId(dbParamGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbTimeZone This parameter is required.
         */
        public Builder dbTimeZone(final java.lang.String dbTimeZone) {
            this.props.dbTimeZone(dbTimeZone);
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
         * @param encryptionKey This parameter is required.
         */
        public Builder encryptionKey(final java.lang.String encryptionKey) {
            this.props.encryptionKey(encryptionKey);
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
         * @param masterUsername This parameter is required.
         */
        public Builder masterUsername(final java.lang.String masterUsername) {
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
         * @param masterUserType This parameter is required.
         */
        public Builder masterUserType(final java.lang.String masterUserType) {
            this.props.masterUserType(masterUserType);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiAz This parameter is required.
         */
        public Builder multiAz(final java.lang.Boolean multiAz) {
            this.props.multiAz(multiAz);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiAz This parameter is required.
         */
        public Builder multiAz(final com.aliyun.ros.cdk.core.IResolvable multiAz) {
            this.props.multiAz(multiAz);
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
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
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
         * @param port This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
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
         * @param preferredBackupPeriod This parameter is required.
         */
        public Builder preferredBackupPeriod(final com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
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
         * @param privateIpAddress This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
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
         * @param roleArn This parameter is required.
         */
        public Builder roleArn(final java.lang.String roleArn) {
            this.props.roleArn(roleArn);
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
         * @param slaveZoneIds This parameter is required.
         */
        public Builder slaveZoneIds(final java.util.List<java.lang.String> slaveZoneIds) {
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
         * @param sslSetting This parameter is required.
         */
        public Builder sslSetting(final java.lang.String sslSetting) {
            this.props.sslSetting(sslSetting);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetDedicatedHostIdForLog This parameter is required.
         */
        public Builder targetDedicatedHostIdForLog(final java.lang.String targetDedicatedHostIdForLog) {
            this.props.targetDedicatedHostIdForLog(targetDedicatedHostIdForLog);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetDedicatedHostIdForMaster This parameter is required.
         */
        public Builder targetDedicatedHostIdForMaster(final java.lang.String targetDedicatedHostIdForMaster) {
            this.props.targetDedicatedHostIdForMaster(targetDedicatedHostIdForMaster);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetDedicatedHostIdForSlave This parameter is required.
         */
        public Builder targetDedicatedHostIdForSlave(final java.lang.String targetDedicatedHostIdForSlave) {
            this.props.targetDedicatedHostIdForSlave(targetDedicatedHostIdForSlave);
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
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.rds.RosDBInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.RosDBInstance build() {
            return new com.aliyun.ros.cdk.rds.RosDBInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
