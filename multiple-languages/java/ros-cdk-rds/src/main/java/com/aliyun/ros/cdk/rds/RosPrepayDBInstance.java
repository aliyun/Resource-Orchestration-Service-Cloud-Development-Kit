package com.aliyun.ros.cdk.rds;

/**
 * A ROS template type:  `ALIYUN::RDS::PrepayDBInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.367Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosPrepayDBInstance")
public class RosPrepayDBInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPrepayDBInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPrepayDBInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.rds.RosPrepayDBInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::RDS::PrepayDBInstance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPrepayDBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.RosPrepayDBInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getCommodityCode() {
        return software.amazon.jsii.Kernel.get(this, "commodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCommodityCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "commodityCode", java.util.Objects.requireNonNull(value, "commodityCode is required"));
    }

    /**
     */
    public void setCommodityCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "commodityCode", java.util.Objects.requireNonNull(value, "commodityCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceClass(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceClass", java.util.Objects.requireNonNull(value, "dbInstanceClass is required"));
    }

    /**
     */
    public void setDbInstanceClass(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceClass", java.util.Objects.requireNonNull(value, "dbInstanceClass is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorage() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceStorage(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceStorage", java.util.Objects.requireNonNull(value, "dbInstanceStorage is required"));
    }

    /**
     */
    public void setDbInstanceStorage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getEngine() {
        return software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engine", java.util.Objects.requireNonNull(value, "engine is required"));
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "engine", java.util.Objects.requireNonNull(value, "engine is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEngineVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", java.util.Objects.requireNonNull(value, "engineVersion is required"));
    }

    /**
     */
    public void setEngineVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", java.util.Objects.requireNonNull(value, "engineVersion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeriodType() {
        return software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodType", java.util.Objects.requireNonNull(value, "periodType is required"));
    }

    /**
     */
    public void setPeriodType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodType", java.util.Objects.requireNonNull(value, "periodType is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupKeepCount() {
        return software.amazon.jsii.Kernel.get(this, "archiveBackupKeepCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArchiveBackupKeepCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "archiveBackupKeepCount", value);
    }

    /**
     */
    public void setArchiveBackupKeepCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "archiveBackupKeepCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupKeepPolicy() {
        return software.amazon.jsii.Kernel.get(this, "archiveBackupKeepPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArchiveBackupKeepPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "archiveBackupKeepPolicy", value);
    }

    /**
     */
    public void setArchiveBackupKeepPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "archiveBackupKeepPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "archiveBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArchiveBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "archiveBackupRetentionPeriod", value);
    }

    /**
     */
    public void setArchiveBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "archiveBackupRetentionPeriod", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackUpCategory() {
        return software.amazon.jsii.Kernel.get(this, "backUpCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackUpCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backUpCategory", value);
    }

    /**
     */
    public void setBackUpCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backUpCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupPolicyMode() {
        return software.amazon.jsii.Kernel.get(this, "backupPolicyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupPolicyMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupPolicyMode", value);
    }

    /**
     */
    public void setBackupPolicyMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupPolicyMode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getCompressType() {
        return software.amazon.jsii.Kernel.get(this, "compressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCompressType(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "compressType", value);
    }

    /**
     */
    public void setCompressType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "compressType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionMode() {
        return software.amazon.jsii.Kernel.get(this, "connectionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionMode", value);
    }

    /**
     */
    public void setConnectionMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionMode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getCouponCode() {
        return software.amazon.jsii.Kernel.get(this, "couponCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCouponCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "couponCode", value);
    }

    /**
     */
    public void setCouponCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "couponCode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceNetType() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceNetType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceNetType", value);
    }

    /**
     */
    public void setDbInstanceNetType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceNetType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbIsIgnoreCase() {
        return software.amazon.jsii.Kernel.get(this, "dbIsIgnoreCase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbIsIgnoreCase(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dbIsIgnoreCase", value);
    }

    /**
     */
    public void setDbIsIgnoreCase(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbParamGroupId() {
        return software.amazon.jsii.Kernel.get(this, "dbParamGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbParamGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbParamGroupId", value);
    }

    /**
     */
    public void setDbParamGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbParamGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbTimeZone() {
        return software.amazon.jsii.Kernel.get(this, "dbTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbTimeZone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbTimeZone", value);
    }

    /**
     */
    public void setDbTimeZone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbTimeZone", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableBackupLog() {
        return software.amazon.jsii.Kernel.get(this, "enableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableBackupLog(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableBackupLog", value);
    }

    /**
     */
    public void setEnableBackupLog(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableBackupLog", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKey() {
        return software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncryptionKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "encryptionKey", value);
    }

    /**
     */
    public void setEncryptionKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encryptionKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHighSpaceUsageProtection() {
        return software.amazon.jsii.Kernel.get(this, "highSpaceUsageProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHighSpaceUsageProtection(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "highSpaceUsageProtection", value);
    }

    /**
     */
    public void setHighSpaceUsageProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "highSpaceUsageProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLocalLogRetentionHours() {
        return software.amazon.jsii.Kernel.get(this, "localLogRetentionHours", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalLogRetentionHours(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "localLogRetentionHours", value);
    }

    /**
     */
    public void setLocalLogRetentionHours(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localLogRetentionHours", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLocalLogRetentionSpace() {
        return software.amazon.jsii.Kernel.get(this, "localLogRetentionSpace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalLogRetentionSpace(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "localLogRetentionSpace", value);
    }

    /**
     */
    public void setLocalLogRetentionSpace(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localLogRetentionSpace", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupFrequency() {
        return software.amazon.jsii.Kernel.get(this, "logBackupFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogBackupFrequency(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logBackupFrequency", value);
    }

    /**
     */
    public void setLogBackupFrequency(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logBackupFrequency", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupLocalRetentionNumber() {
        return software.amazon.jsii.Kernel.get(this, "logBackupLocalRetentionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogBackupLocalRetentionNumber(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "logBackupLocalRetentionNumber", value);
    }

    /**
     */
    public void setLogBackupLocalRetentionNumber(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logBackupLocalRetentionNumber", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "logBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "logBackupRetentionPeriod", value);
    }

    /**
     */
    public void setLogBackupRetentionPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logBackupRetentionPeriod", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuantity() {
        return software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuantity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quantity", value);
    }

    /**
     */
    public void setQuantity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quantity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReleasedKeepPolicy() {
        return software.amazon.jsii.Kernel.get(this, "releasedKeepPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReleasedKeepPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "releasedKeepPolicy", value);
    }

    /**
     */
    public void setReleasedKeepPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "releasedKeepPolicy", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRoleArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "roleArn", value);
    }

    /**
     */
    public void setRoleArn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "roleArn", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForLog() {
        return software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetDedicatedHostIdForLog(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForLog", value);
    }

    /**
     */
    public void setTargetDedicatedHostIdForLog(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForLog", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForMaster() {
        return software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForMaster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetDedicatedHostIdForMaster(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForMaster", value);
    }

    /**
     */
    public void setTargetDedicatedHostIdForMaster(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForMaster", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForSlave() {
        return software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForSlave", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetDedicatedHostIdForSlave(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForSlave", value);
    }

    /**
     */
    public void setTargetDedicatedHostIdForSlave(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetDedicatedHostIdForSlave", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.RosPrepayDBInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.RosPrepayDBInstance> {
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
        private final com.aliyun.ros.cdk.rds.RosPrepayDBInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.RosPrepayDBInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param commodityCode This parameter is required.
         */
        public Builder commodityCode(final java.lang.String commodityCode) {
            this.props.commodityCode(commodityCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param commodityCode This parameter is required.
         */
        public Builder commodityCode(final com.aliyun.ros.cdk.core.IResolvable commodityCode) {
            this.props.commodityCode(commodityCode);
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
         * @param engine This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * @return {@code this}
         * @param engine This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
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
         * @param engineVersion This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
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
         * @param archiveBackupKeepCount This parameter is required.
         */
        public Builder archiveBackupKeepCount(final java.lang.Number archiveBackupKeepCount) {
            this.props.archiveBackupKeepCount(archiveBackupKeepCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param archiveBackupKeepCount This parameter is required.
         */
        public Builder archiveBackupKeepCount(final com.aliyun.ros.cdk.core.IResolvable archiveBackupKeepCount) {
            this.props.archiveBackupKeepCount(archiveBackupKeepCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param archiveBackupKeepPolicy This parameter is required.
         */
        public Builder archiveBackupKeepPolicy(final java.lang.String archiveBackupKeepPolicy) {
            this.props.archiveBackupKeepPolicy(archiveBackupKeepPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param archiveBackupKeepPolicy This parameter is required.
         */
        public Builder archiveBackupKeepPolicy(final com.aliyun.ros.cdk.core.IResolvable archiveBackupKeepPolicy) {
            this.props.archiveBackupKeepPolicy(archiveBackupKeepPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param archiveBackupRetentionPeriod This parameter is required.
         */
        public Builder archiveBackupRetentionPeriod(final java.lang.Number archiveBackupRetentionPeriod) {
            this.props.archiveBackupRetentionPeriod(archiveBackupRetentionPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param archiveBackupRetentionPeriod This parameter is required.
         */
        public Builder archiveBackupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable archiveBackupRetentionPeriod) {
            this.props.archiveBackupRetentionPeriod(archiveBackupRetentionPeriod);
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
         * @param backUpCategory This parameter is required.
         */
        public Builder backUpCategory(final java.lang.String backUpCategory) {
            this.props.backUpCategory(backUpCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param backUpCategory This parameter is required.
         */
        public Builder backUpCategory(final com.aliyun.ros.cdk.core.IResolvable backUpCategory) {
            this.props.backUpCategory(backUpCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupPolicyMode This parameter is required.
         */
        public Builder backupPolicyMode(final java.lang.String backupPolicyMode) {
            this.props.backupPolicyMode(backupPolicyMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupPolicyMode This parameter is required.
         */
        public Builder backupPolicyMode(final com.aliyun.ros.cdk.core.IResolvable backupPolicyMode) {
            this.props.backupPolicyMode(backupPolicyMode);
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
         * @param compressType This parameter is required.
         */
        public Builder compressType(final java.lang.Number compressType) {
            this.props.compressType(compressType);
            return this;
        }
        /**
         * @return {@code this}
         * @param compressType This parameter is required.
         */
        public Builder compressType(final com.aliyun.ros.cdk.core.IResolvable compressType) {
            this.props.compressType(compressType);
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
         * @param connectionMode This parameter is required.
         */
        public Builder connectionMode(final com.aliyun.ros.cdk.core.IResolvable connectionMode) {
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
         * @param couponCode This parameter is required.
         */
        public Builder couponCode(final java.lang.String couponCode) {
            this.props.couponCode(couponCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param couponCode This parameter is required.
         */
        public Builder couponCode(final com.aliyun.ros.cdk.core.IResolvable couponCode) {
            this.props.couponCode(couponCode);
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
         * @param dbInstanceNetType This parameter is required.
         */
        public Builder dbInstanceNetType(final java.lang.String dbInstanceNetType) {
            this.props.dbInstanceNetType(dbInstanceNetType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceNetType This parameter is required.
         */
        public Builder dbInstanceNetType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceNetType) {
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
         * @param dbInstanceStorageType This parameter is required.
         */
        public Builder dbInstanceStorageType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
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
         * @param dbIsIgnoreCase This parameter is required.
         */
        public Builder dbIsIgnoreCase(final com.aliyun.ros.cdk.core.IResolvable dbIsIgnoreCase) {
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
         * @param dbParamGroupId This parameter is required.
         */
        public Builder dbParamGroupId(final com.aliyun.ros.cdk.core.IResolvable dbParamGroupId) {
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
         * @param dbTimeZone This parameter is required.
         */
        public Builder dbTimeZone(final com.aliyun.ros.cdk.core.IResolvable dbTimeZone) {
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
         * @param dedicatedHostGroupId This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableBackupLog This parameter is required.
         */
        public Builder enableBackupLog(final java.lang.Boolean enableBackupLog) {
            this.props.enableBackupLog(enableBackupLog);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableBackupLog This parameter is required.
         */
        public Builder enableBackupLog(final com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
            this.props.enableBackupLog(enableBackupLog);
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
         * @param encryptionKey This parameter is required.
         */
        public Builder encryptionKey(final com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param highSpaceUsageProtection This parameter is required.
         */
        public Builder highSpaceUsageProtection(final java.lang.String highSpaceUsageProtection) {
            this.props.highSpaceUsageProtection(highSpaceUsageProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param highSpaceUsageProtection This parameter is required.
         */
        public Builder highSpaceUsageProtection(final com.aliyun.ros.cdk.core.IResolvable highSpaceUsageProtection) {
            this.props.highSpaceUsageProtection(highSpaceUsageProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param localLogRetentionHours This parameter is required.
         */
        public Builder localLogRetentionHours(final java.lang.Number localLogRetentionHours) {
            this.props.localLogRetentionHours(localLogRetentionHours);
            return this;
        }
        /**
         * @return {@code this}
         * @param localLogRetentionHours This parameter is required.
         */
        public Builder localLogRetentionHours(final com.aliyun.ros.cdk.core.IResolvable localLogRetentionHours) {
            this.props.localLogRetentionHours(localLogRetentionHours);
            return this;
        }

        /**
         * @return {@code this}
         * @param localLogRetentionSpace This parameter is required.
         */
        public Builder localLogRetentionSpace(final java.lang.Number localLogRetentionSpace) {
            this.props.localLogRetentionSpace(localLogRetentionSpace);
            return this;
        }
        /**
         * @return {@code this}
         * @param localLogRetentionSpace This parameter is required.
         */
        public Builder localLogRetentionSpace(final com.aliyun.ros.cdk.core.IResolvable localLogRetentionSpace) {
            this.props.localLogRetentionSpace(localLogRetentionSpace);
            return this;
        }

        /**
         * @return {@code this}
         * @param logBackupFrequency This parameter is required.
         */
        public Builder logBackupFrequency(final java.lang.String logBackupFrequency) {
            this.props.logBackupFrequency(logBackupFrequency);
            return this;
        }
        /**
         * @return {@code this}
         * @param logBackupFrequency This parameter is required.
         */
        public Builder logBackupFrequency(final com.aliyun.ros.cdk.core.IResolvable logBackupFrequency) {
            this.props.logBackupFrequency(logBackupFrequency);
            return this;
        }

        /**
         * @return {@code this}
         * @param logBackupLocalRetentionNumber This parameter is required.
         */
        public Builder logBackupLocalRetentionNumber(final java.lang.Number logBackupLocalRetentionNumber) {
            this.props.logBackupLocalRetentionNumber(logBackupLocalRetentionNumber);
            return this;
        }
        /**
         * @return {@code this}
         * @param logBackupLocalRetentionNumber This parameter is required.
         */
        public Builder logBackupLocalRetentionNumber(final com.aliyun.ros.cdk.core.IResolvable logBackupLocalRetentionNumber) {
            this.props.logBackupLocalRetentionNumber(logBackupLocalRetentionNumber);
            return this;
        }

        /**
         * @return {@code this}
         * @param logBackupRetentionPeriod This parameter is required.
         */
        public Builder logBackupRetentionPeriod(final java.lang.Number logBackupRetentionPeriod) {
            this.props.logBackupRetentionPeriod(logBackupRetentionPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param logBackupRetentionPeriod This parameter is required.
         */
        public Builder logBackupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable logBackupRetentionPeriod) {
            this.props.logBackupRetentionPeriod(logBackupRetentionPeriod);
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
         * @param quantity This parameter is required.
         */
        public Builder quantity(final java.lang.Number quantity) {
            this.props.quantity(quantity);
            return this;
        }
        /**
         * @return {@code this}
         * @param quantity This parameter is required.
         */
        public Builder quantity(final com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.props.quantity(quantity);
            return this;
        }

        /**
         * @return {@code this}
         * @param releasedKeepPolicy This parameter is required.
         */
        public Builder releasedKeepPolicy(final java.lang.String releasedKeepPolicy) {
            this.props.releasedKeepPolicy(releasedKeepPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param releasedKeepPolicy This parameter is required.
         */
        public Builder releasedKeepPolicy(final com.aliyun.ros.cdk.core.IResolvable releasedKeepPolicy) {
            this.props.releasedKeepPolicy(releasedKeepPolicy);
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
         * @param roleArn This parameter is required.
         */
        public Builder roleArn(final java.lang.String roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param roleArn This parameter is required.
         */
        public Builder roleArn(final com.aliyun.ros.cdk.core.IResolvable roleArn) {
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
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
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
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
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
         * @param targetDedicatedHostIdForLog This parameter is required.
         */
        public Builder targetDedicatedHostIdForLog(final com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForLog) {
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
         * @param targetDedicatedHostIdForMaster This parameter is required.
         */
        public Builder targetDedicatedHostIdForMaster(final com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForMaster) {
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
         * @param targetDedicatedHostIdForSlave This parameter is required.
         */
        public Builder targetDedicatedHostIdForSlave(final com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForSlave) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.rds.RosPrepayDBInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.RosPrepayDBInstance build() {
            return new com.aliyun.ros.cdk.rds.RosPrepayDBInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
