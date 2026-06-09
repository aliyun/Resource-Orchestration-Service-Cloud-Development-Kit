package com.aliyun.ros.cdk.mongodb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MONGODB::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:10:27.866Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mongodb.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionUri() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionUri", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplicaSetName() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaSetName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccountPassword() {
        return software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccountPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accountPassword", value);
    }

    /**
     */
    public void setAccountPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accountPassword", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuditPolicyOptions() {
        return software.amazon.jsii.Kernel.get(this, "auditPolicyOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuditPolicyOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "auditPolicyOptions", value);
    }

    /**
     */
    public void setAuditPolicyOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mongodb.RosInstance.AuditPolicyOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "auditPolicyOptions", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupPolicyOptions() {
        return software.amazon.jsii.Kernel.get(this, "backupPolicyOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupPolicyOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupPolicyOptions", value);
    }

    /**
     */
    public void setBackupPolicyOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mongodb.RosInstance.BackupPolicyOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "backupPolicyOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBusinessInfo() {
        return software.amazon.jsii.Kernel.get(this, "businessInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBusinessInfo(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "businessInfo", value);
    }

    /**
     */
    public void setBusinessInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "businessInfo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
        return software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", value);
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCouponNo() {
        return software.amazon.jsii.Kernel.get(this, "couponNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCouponNo(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "couponNo", value);
    }

    /**
     */
    public void setCouponNo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "couponNo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseNames() {
        return software.amazon.jsii.Kernel.get(this, "databaseNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatabaseNames(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "databaseNames", value);
    }

    /**
     */
    public void setDatabaseNames(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "databaseNames", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceReleaseProtection() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceReleaseProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceReleaseProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceReleaseProtection", value);
    }

    /**
     */
    public void setDbInstanceReleaseProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceReleaseProtection", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEngineVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", value);
    }

    /**
     */
    public void setEngineVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHiddenZoneId() {
        return software.amazon.jsii.Kernel.get(this, "hiddenZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHiddenZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hiddenZoneId", value);
    }

    /**
     */
    public void setHiddenZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hiddenZoneId", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivateConnections() {
        return software.amazon.jsii.Kernel.get(this, "privateConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivateConnections(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privateConnections", value);
    }

    /**
     */
    public void setPrivateConnections(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mongodb.RosInstance.PrivateConnectionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "privateConnections", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProvisionedIops() {
        return software.amazon.jsii.Kernel.get(this, "provisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProvisionedIops(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "provisionedIops", value);
    }

    /**
     */
    public void setProvisionedIops(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "provisionedIops", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReadonlyReplicas() {
        return software.amazon.jsii.Kernel.get(this, "readonlyReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReadonlyReplicas(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "readonlyReplicas", value);
    }

    /**
     */
    public void setReadonlyReplicas(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "readonlyReplicas", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReplicationFactor() {
        return software.amazon.jsii.Kernel.get(this, "replicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicationFactor(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "replicationFactor", value);
    }

    /**
     */
    public void setReplicationFactor(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicationFactor", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestoreType() {
        return software.amazon.jsii.Kernel.get(this, "restoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestoreType(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "restoreType", value);
    }

    /**
     */
    public void setRestoreType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restoreType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryZoneId() {
        return software.amazon.jsii.Kernel.get(this, "secondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondaryZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secondaryZoneId", value);
    }

    /**
     */
    public void setSecondaryZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondaryZoneId", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpArray() {
        return software.amazon.jsii.Kernel.get(this, "securityIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityIpArray(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityIpArray", value);
    }

    /**
     */
    public void setSecurityIpArray(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityIpArray", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSrcDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "srcDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSrcDbInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "srcDbInstanceId", value);
    }

    /**
     */
    public void setSrcDbInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "srcDbInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSrcRegion() {
        return software.amazon.jsii.Kernel.get(this, "srcRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSrcRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "srcRegion", value);
    }

    /**
     */
    public void setSrcRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "srcRegion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSslOptions() {
        return software.amazon.jsii.Kernel.get(this, "sslOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSslOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sslOptions", value);
    }

    /**
     */
    public void setSslOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mongodb.RosInstance.SSLOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "sslOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageEngine() {
        return software.amazon.jsii.Kernel.get(this, "storageEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageEngine(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageEngine", value);
    }

    /**
     */
    public void setStorageEngine(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageEngine", value);
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
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTdeStatus() {
        return software.amazon.jsii.Kernel.get(this, "tdeStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTdeStatus(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "tdeStatus", value);
    }

    /**
     */
    public void setTdeStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tdeStatus", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcPasswordFree() {
        return software.amazon.jsii.Kernel.get(this, "vpcPasswordFree", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcPasswordFree(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "vpcPasswordFree", value);
    }

    /**
     */
    public void setVpcPasswordFree(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcPasswordFree", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosInstance.AuditPolicyOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(AuditPolicyOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AuditPolicyOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAuditStatus();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuditLogSwitchSource() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStoragePeriod() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AuditPolicyOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AuditPolicyOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AuditPolicyOptionsProperty> {
            java.lang.Object auditStatus;
            java.lang.Object auditLogSwitchSource;
            java.lang.Object serviceType;
            java.lang.Object storagePeriod;

            /**
             * Sets the value of {@link AuditPolicyOptionsProperty#getAuditStatus}
             * @param auditStatus the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder auditStatus(java.lang.String auditStatus) {
                this.auditStatus = auditStatus;
                return this;
            }

            /**
             * Sets the value of {@link AuditPolicyOptionsProperty#getAuditStatus}
             * @param auditStatus the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder auditStatus(com.aliyun.ros.cdk.core.IResolvable auditStatus) {
                this.auditStatus = auditStatus;
                return this;
            }

            /**
             * Sets the value of {@link AuditPolicyOptionsProperty#getAuditLogSwitchSource}
             * @param auditLogSwitchSource the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder auditLogSwitchSource(java.lang.String auditLogSwitchSource) {
                this.auditLogSwitchSource = auditLogSwitchSource;
                return this;
            }

            /**
             * Sets the value of {@link AuditPolicyOptionsProperty#getAuditLogSwitchSource}
             * @param auditLogSwitchSource the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder auditLogSwitchSource(com.aliyun.ros.cdk.core.IResolvable auditLogSwitchSource) {
                this.auditLogSwitchSource = auditLogSwitchSource;
                return this;
            }

            /**
             * Sets the value of {@link AuditPolicyOptionsProperty#getServiceType}
             * @param serviceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceType(java.lang.String serviceType) {
                this.serviceType = serviceType;
                return this;
            }

            /**
             * Sets the value of {@link AuditPolicyOptionsProperty#getServiceType}
             * @param serviceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceType(com.aliyun.ros.cdk.core.IResolvable serviceType) {
                this.serviceType = serviceType;
                return this;
            }

            /**
             * Sets the value of {@link AuditPolicyOptionsProperty#getStoragePeriod}
             * @param storagePeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storagePeriod(java.lang.Number storagePeriod) {
                this.storagePeriod = storagePeriod;
                return this;
            }

            /**
             * Sets the value of {@link AuditPolicyOptionsProperty#getStoragePeriod}
             * @param storagePeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storagePeriod(com.aliyun.ros.cdk.core.IResolvable storagePeriod) {
                this.storagePeriod = storagePeriod;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AuditPolicyOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AuditPolicyOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AuditPolicyOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuditPolicyOptionsProperty {
            private final java.lang.Object auditStatus;
            private final java.lang.Object auditLogSwitchSource;
            private final java.lang.Object serviceType;
            private final java.lang.Object storagePeriod;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.auditStatus = software.amazon.jsii.Kernel.get(this, "auditStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.auditLogSwitchSource = software.amazon.jsii.Kernel.get(this, "auditLogSwitchSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceType = software.amazon.jsii.Kernel.get(this, "serviceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storagePeriod = software.amazon.jsii.Kernel.get(this, "storagePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.auditStatus = java.util.Objects.requireNonNull(builder.auditStatus, "auditStatus is required");
                this.auditLogSwitchSource = builder.auditLogSwitchSource;
                this.serviceType = builder.serviceType;
                this.storagePeriod = builder.storagePeriod;
            }

            @Override
            public final java.lang.Object getAuditStatus() {
                return this.auditStatus;
            }

            @Override
            public final java.lang.Object getAuditLogSwitchSource() {
                return this.auditLogSwitchSource;
            }

            @Override
            public final java.lang.Object getServiceType() {
                return this.serviceType;
            }

            @Override
            public final java.lang.Object getStoragePeriod() {
                return this.storagePeriod;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("auditStatus", om.valueToTree(this.getAuditStatus()));
                if (this.getAuditLogSwitchSource() != null) {
                    data.set("auditLogSwitchSource", om.valueToTree(this.getAuditLogSwitchSource()));
                }
                if (this.getServiceType() != null) {
                    data.set("serviceType", om.valueToTree(this.getServiceType()));
                }
                if (this.getStoragePeriod() != null) {
                    data.set("storagePeriod", om.valueToTree(this.getStoragePeriod()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosInstance.AuditPolicyOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AuditPolicyOptionsProperty.Jsii$Proxy that = (AuditPolicyOptionsProperty.Jsii$Proxy) o;

                if (!auditStatus.equals(that.auditStatus)) return false;
                if (this.auditLogSwitchSource != null ? !this.auditLogSwitchSource.equals(that.auditLogSwitchSource) : that.auditLogSwitchSource != null) return false;
                if (this.serviceType != null ? !this.serviceType.equals(that.serviceType) : that.serviceType != null) return false;
                return this.storagePeriod != null ? this.storagePeriod.equals(that.storagePeriod) : that.storagePeriod == null;
            }

            @Override
            public final int hashCode() {
                int result = this.auditStatus.hashCode();
                result = 31 * result + (this.auditLogSwitchSource != null ? this.auditLogSwitchSource.hashCode() : 0);
                result = 31 * result + (this.serviceType != null ? this.serviceType.hashCode() : 0);
                result = 31 * result + (this.storagePeriod != null ? this.storagePeriod.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosInstance.BackupPolicyOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(BackupPolicyOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BackupPolicyOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackupInterval() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPolicyOnClusterDeletion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossBackupPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossBackupType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossLogRetentionType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossLogRetentionValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossRetentionType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCrossRetentionValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestRegion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableBackupLog() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableCrossLogBackup() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHighFrequencyBackupRetention() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupRetentionPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPreserveOneEachHour() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotBackupType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSrcRegion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BackupPolicyOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BackupPolicyOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BackupPolicyOptionsProperty> {
            java.lang.Object backupInterval;
            java.lang.Object backupRetentionPeriod;
            java.lang.Object backupRetentionPolicyOnClusterDeletion;
            java.lang.Object crossBackupPeriod;
            java.lang.Object crossBackupType;
            java.lang.Object crossLogRetentionType;
            java.lang.Object crossLogRetentionValue;
            java.lang.Object crossRetentionType;
            java.lang.Object crossRetentionValue;
            java.lang.Object destRegion;
            java.lang.Object enableBackupLog;
            java.lang.Object enableCrossLogBackup;
            java.lang.Object highFrequencyBackupRetention;
            java.lang.Object instanceType;
            java.lang.Object logBackupRetentionPeriod;
            java.lang.Object preferredBackupPeriod;
            java.lang.Object preferredBackupTime;
            java.lang.Object preserveOneEachHour;
            java.lang.Object snapshotBackupType;
            java.lang.Object srcRegion;

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getBackupInterval}
             * @param backupInterval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupInterval(java.lang.Number backupInterval) {
                this.backupInterval = backupInterval;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getBackupInterval}
             * @param backupInterval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupInterval(com.aliyun.ros.cdk.core.IResolvable backupInterval) {
                this.backupInterval = backupInterval;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getBackupRetentionPeriod}
             * @param backupRetentionPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
                this.backupRetentionPeriod = backupRetentionPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getBackupRetentionPeriod}
             * @param backupRetentionPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
                this.backupRetentionPeriod = backupRetentionPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getBackupRetentionPolicyOnClusterDeletion}
             * @param backupRetentionPolicyOnClusterDeletion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupRetentionPolicyOnClusterDeletion(java.lang.Number backupRetentionPolicyOnClusterDeletion) {
                this.backupRetentionPolicyOnClusterDeletion = backupRetentionPolicyOnClusterDeletion;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getBackupRetentionPolicyOnClusterDeletion}
             * @param backupRetentionPolicyOnClusterDeletion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backupRetentionPolicyOnClusterDeletion(com.aliyun.ros.cdk.core.IResolvable backupRetentionPolicyOnClusterDeletion) {
                this.backupRetentionPolicyOnClusterDeletion = backupRetentionPolicyOnClusterDeletion;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossBackupPeriod}
             * @param crossBackupPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossBackupPeriod(java.lang.String crossBackupPeriod) {
                this.crossBackupPeriod = crossBackupPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossBackupPeriod}
             * @param crossBackupPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossBackupPeriod(com.aliyun.ros.cdk.core.IResolvable crossBackupPeriod) {
                this.crossBackupPeriod = crossBackupPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossBackupType}
             * @param crossBackupType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossBackupType(java.lang.String crossBackupType) {
                this.crossBackupType = crossBackupType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossBackupType}
             * @param crossBackupType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossBackupType(com.aliyun.ros.cdk.core.IResolvable crossBackupType) {
                this.crossBackupType = crossBackupType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossLogRetentionType}
             * @param crossLogRetentionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossLogRetentionType(java.lang.String crossLogRetentionType) {
                this.crossLogRetentionType = crossLogRetentionType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossLogRetentionType}
             * @param crossLogRetentionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossLogRetentionType(com.aliyun.ros.cdk.core.IResolvable crossLogRetentionType) {
                this.crossLogRetentionType = crossLogRetentionType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossLogRetentionValue}
             * @param crossLogRetentionValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossLogRetentionValue(java.lang.Number crossLogRetentionValue) {
                this.crossLogRetentionValue = crossLogRetentionValue;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossLogRetentionValue}
             * @param crossLogRetentionValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossLogRetentionValue(com.aliyun.ros.cdk.core.IResolvable crossLogRetentionValue) {
                this.crossLogRetentionValue = crossLogRetentionValue;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossRetentionType}
             * @param crossRetentionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossRetentionType(java.lang.String crossRetentionType) {
                this.crossRetentionType = crossRetentionType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossRetentionType}
             * @param crossRetentionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossRetentionType(com.aliyun.ros.cdk.core.IResolvable crossRetentionType) {
                this.crossRetentionType = crossRetentionType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossRetentionValue}
             * @param crossRetentionValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossRetentionValue(java.lang.Number crossRetentionValue) {
                this.crossRetentionValue = crossRetentionValue;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getCrossRetentionValue}
             * @param crossRetentionValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder crossRetentionValue(com.aliyun.ros.cdk.core.IResolvable crossRetentionValue) {
                this.crossRetentionValue = crossRetentionValue;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getDestRegion}
             * @param destRegion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destRegion(java.lang.String destRegion) {
                this.destRegion = destRegion;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getDestRegion}
             * @param destRegion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destRegion(com.aliyun.ros.cdk.core.IResolvable destRegion) {
                this.destRegion = destRegion;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getEnableBackupLog}
             * @param enableBackupLog the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableBackupLog(java.lang.Number enableBackupLog) {
                this.enableBackupLog = enableBackupLog;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getEnableBackupLog}
             * @param enableBackupLog the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableBackupLog(com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
                this.enableBackupLog = enableBackupLog;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getEnableCrossLogBackup}
             * @param enableCrossLogBackup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableCrossLogBackup(java.lang.Number enableCrossLogBackup) {
                this.enableCrossLogBackup = enableCrossLogBackup;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getEnableCrossLogBackup}
             * @param enableCrossLogBackup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableCrossLogBackup(com.aliyun.ros.cdk.core.IResolvable enableCrossLogBackup) {
                this.enableCrossLogBackup = enableCrossLogBackup;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getHighFrequencyBackupRetention}
             * @param highFrequencyBackupRetention the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder highFrequencyBackupRetention(java.lang.Number highFrequencyBackupRetention) {
                this.highFrequencyBackupRetention = highFrequencyBackupRetention;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getHighFrequencyBackupRetention}
             * @param highFrequencyBackupRetention the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder highFrequencyBackupRetention(com.aliyun.ros.cdk.core.IResolvable highFrequencyBackupRetention) {
                this.highFrequencyBackupRetention = highFrequencyBackupRetention;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getLogBackupRetentionPeriod}
             * @param logBackupRetentionPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logBackupRetentionPeriod(java.lang.Number logBackupRetentionPeriod) {
                this.logBackupRetentionPeriod = logBackupRetentionPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getLogBackupRetentionPeriod}
             * @param logBackupRetentionPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logBackupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable logBackupRetentionPeriod) {
                this.logBackupRetentionPeriod = logBackupRetentionPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getPreferredBackupPeriod}
             * @param preferredBackupPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preferredBackupPeriod(java.lang.String preferredBackupPeriod) {
                this.preferredBackupPeriod = preferredBackupPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getPreferredBackupPeriod}
             * @param preferredBackupPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preferredBackupPeriod(com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
                this.preferredBackupPeriod = preferredBackupPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getPreferredBackupTime}
             * @param preferredBackupTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preferredBackupTime(java.lang.String preferredBackupTime) {
                this.preferredBackupTime = preferredBackupTime;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getPreferredBackupTime}
             * @param preferredBackupTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preferredBackupTime(com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
                this.preferredBackupTime = preferredBackupTime;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getPreserveOneEachHour}
             * @param preserveOneEachHour the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preserveOneEachHour(java.lang.Boolean preserveOneEachHour) {
                this.preserveOneEachHour = preserveOneEachHour;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getPreserveOneEachHour}
             * @param preserveOneEachHour the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preserveOneEachHour(com.aliyun.ros.cdk.core.IResolvable preserveOneEachHour) {
                this.preserveOneEachHour = preserveOneEachHour;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getSnapshotBackupType}
             * @param snapshotBackupType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotBackupType(java.lang.String snapshotBackupType) {
                this.snapshotBackupType = snapshotBackupType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getSnapshotBackupType}
             * @param snapshotBackupType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotBackupType(com.aliyun.ros.cdk.core.IResolvable snapshotBackupType) {
                this.snapshotBackupType = snapshotBackupType;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getSrcRegion}
             * @param srcRegion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcRegion(java.lang.String srcRegion) {
                this.srcRegion = srcRegion;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyOptionsProperty#getSrcRegion}
             * @param srcRegion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder srcRegion(com.aliyun.ros.cdk.core.IResolvable srcRegion) {
                this.srcRegion = srcRegion;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BackupPolicyOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BackupPolicyOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BackupPolicyOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BackupPolicyOptionsProperty {
            private final java.lang.Object backupInterval;
            private final java.lang.Object backupRetentionPeriod;
            private final java.lang.Object backupRetentionPolicyOnClusterDeletion;
            private final java.lang.Object crossBackupPeriod;
            private final java.lang.Object crossBackupType;
            private final java.lang.Object crossLogRetentionType;
            private final java.lang.Object crossLogRetentionValue;
            private final java.lang.Object crossRetentionType;
            private final java.lang.Object crossRetentionValue;
            private final java.lang.Object destRegion;
            private final java.lang.Object enableBackupLog;
            private final java.lang.Object enableCrossLogBackup;
            private final java.lang.Object highFrequencyBackupRetention;
            private final java.lang.Object instanceType;
            private final java.lang.Object logBackupRetentionPeriod;
            private final java.lang.Object preferredBackupPeriod;
            private final java.lang.Object preferredBackupTime;
            private final java.lang.Object preserveOneEachHour;
            private final java.lang.Object snapshotBackupType;
            private final java.lang.Object srcRegion;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.backupInterval = software.amazon.jsii.Kernel.get(this, "backupInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.backupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.backupRetentionPolicyOnClusterDeletion = software.amazon.jsii.Kernel.get(this, "backupRetentionPolicyOnClusterDeletion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossBackupPeriod = software.amazon.jsii.Kernel.get(this, "crossBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossBackupType = software.amazon.jsii.Kernel.get(this, "crossBackupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossLogRetentionType = software.amazon.jsii.Kernel.get(this, "crossLogRetentionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossLogRetentionValue = software.amazon.jsii.Kernel.get(this, "crossLogRetentionValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossRetentionType = software.amazon.jsii.Kernel.get(this, "crossRetentionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.crossRetentionValue = software.amazon.jsii.Kernel.get(this, "crossRetentionValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destRegion = software.amazon.jsii.Kernel.get(this, "destRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableBackupLog = software.amazon.jsii.Kernel.get(this, "enableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableCrossLogBackup = software.amazon.jsii.Kernel.get(this, "enableCrossLogBackup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.highFrequencyBackupRetention = software.amazon.jsii.Kernel.get(this, "highFrequencyBackupRetention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logBackupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "logBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.preferredBackupPeriod = software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.preferredBackupTime = software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.preserveOneEachHour = software.amazon.jsii.Kernel.get(this, "preserveOneEachHour", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.snapshotBackupType = software.amazon.jsii.Kernel.get(this, "snapshotBackupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.srcRegion = software.amazon.jsii.Kernel.get(this, "srcRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.backupInterval = builder.backupInterval;
                this.backupRetentionPeriod = builder.backupRetentionPeriod;
                this.backupRetentionPolicyOnClusterDeletion = builder.backupRetentionPolicyOnClusterDeletion;
                this.crossBackupPeriod = builder.crossBackupPeriod;
                this.crossBackupType = builder.crossBackupType;
                this.crossLogRetentionType = builder.crossLogRetentionType;
                this.crossLogRetentionValue = builder.crossLogRetentionValue;
                this.crossRetentionType = builder.crossRetentionType;
                this.crossRetentionValue = builder.crossRetentionValue;
                this.destRegion = builder.destRegion;
                this.enableBackupLog = builder.enableBackupLog;
                this.enableCrossLogBackup = builder.enableCrossLogBackup;
                this.highFrequencyBackupRetention = builder.highFrequencyBackupRetention;
                this.instanceType = builder.instanceType;
                this.logBackupRetentionPeriod = builder.logBackupRetentionPeriod;
                this.preferredBackupPeriod = builder.preferredBackupPeriod;
                this.preferredBackupTime = builder.preferredBackupTime;
                this.preserveOneEachHour = builder.preserveOneEachHour;
                this.snapshotBackupType = builder.snapshotBackupType;
                this.srcRegion = builder.srcRegion;
            }

            @Override
            public final java.lang.Object getBackupInterval() {
                return this.backupInterval;
            }

            @Override
            public final java.lang.Object getBackupRetentionPeriod() {
                return this.backupRetentionPeriod;
            }

            @Override
            public final java.lang.Object getBackupRetentionPolicyOnClusterDeletion() {
                return this.backupRetentionPolicyOnClusterDeletion;
            }

            @Override
            public final java.lang.Object getCrossBackupPeriod() {
                return this.crossBackupPeriod;
            }

            @Override
            public final java.lang.Object getCrossBackupType() {
                return this.crossBackupType;
            }

            @Override
            public final java.lang.Object getCrossLogRetentionType() {
                return this.crossLogRetentionType;
            }

            @Override
            public final java.lang.Object getCrossLogRetentionValue() {
                return this.crossLogRetentionValue;
            }

            @Override
            public final java.lang.Object getCrossRetentionType() {
                return this.crossRetentionType;
            }

            @Override
            public final java.lang.Object getCrossRetentionValue() {
                return this.crossRetentionValue;
            }

            @Override
            public final java.lang.Object getDestRegion() {
                return this.destRegion;
            }

            @Override
            public final java.lang.Object getEnableBackupLog() {
                return this.enableBackupLog;
            }

            @Override
            public final java.lang.Object getEnableCrossLogBackup() {
                return this.enableCrossLogBackup;
            }

            @Override
            public final java.lang.Object getHighFrequencyBackupRetention() {
                return this.highFrequencyBackupRetention;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getLogBackupRetentionPeriod() {
                return this.logBackupRetentionPeriod;
            }

            @Override
            public final java.lang.Object getPreferredBackupPeriod() {
                return this.preferredBackupPeriod;
            }

            @Override
            public final java.lang.Object getPreferredBackupTime() {
                return this.preferredBackupTime;
            }

            @Override
            public final java.lang.Object getPreserveOneEachHour() {
                return this.preserveOneEachHour;
            }

            @Override
            public final java.lang.Object getSnapshotBackupType() {
                return this.snapshotBackupType;
            }

            @Override
            public final java.lang.Object getSrcRegion() {
                return this.srcRegion;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBackupInterval() != null) {
                    data.set("backupInterval", om.valueToTree(this.getBackupInterval()));
                }
                if (this.getBackupRetentionPeriod() != null) {
                    data.set("backupRetentionPeriod", om.valueToTree(this.getBackupRetentionPeriod()));
                }
                if (this.getBackupRetentionPolicyOnClusterDeletion() != null) {
                    data.set("backupRetentionPolicyOnClusterDeletion", om.valueToTree(this.getBackupRetentionPolicyOnClusterDeletion()));
                }
                if (this.getCrossBackupPeriod() != null) {
                    data.set("crossBackupPeriod", om.valueToTree(this.getCrossBackupPeriod()));
                }
                if (this.getCrossBackupType() != null) {
                    data.set("crossBackupType", om.valueToTree(this.getCrossBackupType()));
                }
                if (this.getCrossLogRetentionType() != null) {
                    data.set("crossLogRetentionType", om.valueToTree(this.getCrossLogRetentionType()));
                }
                if (this.getCrossLogRetentionValue() != null) {
                    data.set("crossLogRetentionValue", om.valueToTree(this.getCrossLogRetentionValue()));
                }
                if (this.getCrossRetentionType() != null) {
                    data.set("crossRetentionType", om.valueToTree(this.getCrossRetentionType()));
                }
                if (this.getCrossRetentionValue() != null) {
                    data.set("crossRetentionValue", om.valueToTree(this.getCrossRetentionValue()));
                }
                if (this.getDestRegion() != null) {
                    data.set("destRegion", om.valueToTree(this.getDestRegion()));
                }
                if (this.getEnableBackupLog() != null) {
                    data.set("enableBackupLog", om.valueToTree(this.getEnableBackupLog()));
                }
                if (this.getEnableCrossLogBackup() != null) {
                    data.set("enableCrossLogBackup", om.valueToTree(this.getEnableCrossLogBackup()));
                }
                if (this.getHighFrequencyBackupRetention() != null) {
                    data.set("highFrequencyBackupRetention", om.valueToTree(this.getHighFrequencyBackupRetention()));
                }
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }
                if (this.getLogBackupRetentionPeriod() != null) {
                    data.set("logBackupRetentionPeriod", om.valueToTree(this.getLogBackupRetentionPeriod()));
                }
                if (this.getPreferredBackupPeriod() != null) {
                    data.set("preferredBackupPeriod", om.valueToTree(this.getPreferredBackupPeriod()));
                }
                if (this.getPreferredBackupTime() != null) {
                    data.set("preferredBackupTime", om.valueToTree(this.getPreferredBackupTime()));
                }
                if (this.getPreserveOneEachHour() != null) {
                    data.set("preserveOneEachHour", om.valueToTree(this.getPreserveOneEachHour()));
                }
                if (this.getSnapshotBackupType() != null) {
                    data.set("snapshotBackupType", om.valueToTree(this.getSnapshotBackupType()));
                }
                if (this.getSrcRegion() != null) {
                    data.set("srcRegion", om.valueToTree(this.getSrcRegion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosInstance.BackupPolicyOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BackupPolicyOptionsProperty.Jsii$Proxy that = (BackupPolicyOptionsProperty.Jsii$Proxy) o;

                if (this.backupInterval != null ? !this.backupInterval.equals(that.backupInterval) : that.backupInterval != null) return false;
                if (this.backupRetentionPeriod != null ? !this.backupRetentionPeriod.equals(that.backupRetentionPeriod) : that.backupRetentionPeriod != null) return false;
                if (this.backupRetentionPolicyOnClusterDeletion != null ? !this.backupRetentionPolicyOnClusterDeletion.equals(that.backupRetentionPolicyOnClusterDeletion) : that.backupRetentionPolicyOnClusterDeletion != null) return false;
                if (this.crossBackupPeriod != null ? !this.crossBackupPeriod.equals(that.crossBackupPeriod) : that.crossBackupPeriod != null) return false;
                if (this.crossBackupType != null ? !this.crossBackupType.equals(that.crossBackupType) : that.crossBackupType != null) return false;
                if (this.crossLogRetentionType != null ? !this.crossLogRetentionType.equals(that.crossLogRetentionType) : that.crossLogRetentionType != null) return false;
                if (this.crossLogRetentionValue != null ? !this.crossLogRetentionValue.equals(that.crossLogRetentionValue) : that.crossLogRetentionValue != null) return false;
                if (this.crossRetentionType != null ? !this.crossRetentionType.equals(that.crossRetentionType) : that.crossRetentionType != null) return false;
                if (this.crossRetentionValue != null ? !this.crossRetentionValue.equals(that.crossRetentionValue) : that.crossRetentionValue != null) return false;
                if (this.destRegion != null ? !this.destRegion.equals(that.destRegion) : that.destRegion != null) return false;
                if (this.enableBackupLog != null ? !this.enableBackupLog.equals(that.enableBackupLog) : that.enableBackupLog != null) return false;
                if (this.enableCrossLogBackup != null ? !this.enableCrossLogBackup.equals(that.enableCrossLogBackup) : that.enableCrossLogBackup != null) return false;
                if (this.highFrequencyBackupRetention != null ? !this.highFrequencyBackupRetention.equals(that.highFrequencyBackupRetention) : that.highFrequencyBackupRetention != null) return false;
                if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
                if (this.logBackupRetentionPeriod != null ? !this.logBackupRetentionPeriod.equals(that.logBackupRetentionPeriod) : that.logBackupRetentionPeriod != null) return false;
                if (this.preferredBackupPeriod != null ? !this.preferredBackupPeriod.equals(that.preferredBackupPeriod) : that.preferredBackupPeriod != null) return false;
                if (this.preferredBackupTime != null ? !this.preferredBackupTime.equals(that.preferredBackupTime) : that.preferredBackupTime != null) return false;
                if (this.preserveOneEachHour != null ? !this.preserveOneEachHour.equals(that.preserveOneEachHour) : that.preserveOneEachHour != null) return false;
                if (this.snapshotBackupType != null ? !this.snapshotBackupType.equals(that.snapshotBackupType) : that.snapshotBackupType != null) return false;
                return this.srcRegion != null ? this.srcRegion.equals(that.srcRegion) : that.srcRegion == null;
            }

            @Override
            public final int hashCode() {
                int result = this.backupInterval != null ? this.backupInterval.hashCode() : 0;
                result = 31 * result + (this.backupRetentionPeriod != null ? this.backupRetentionPeriod.hashCode() : 0);
                result = 31 * result + (this.backupRetentionPolicyOnClusterDeletion != null ? this.backupRetentionPolicyOnClusterDeletion.hashCode() : 0);
                result = 31 * result + (this.crossBackupPeriod != null ? this.crossBackupPeriod.hashCode() : 0);
                result = 31 * result + (this.crossBackupType != null ? this.crossBackupType.hashCode() : 0);
                result = 31 * result + (this.crossLogRetentionType != null ? this.crossLogRetentionType.hashCode() : 0);
                result = 31 * result + (this.crossLogRetentionValue != null ? this.crossLogRetentionValue.hashCode() : 0);
                result = 31 * result + (this.crossRetentionType != null ? this.crossRetentionType.hashCode() : 0);
                result = 31 * result + (this.crossRetentionValue != null ? this.crossRetentionValue.hashCode() : 0);
                result = 31 * result + (this.destRegion != null ? this.destRegion.hashCode() : 0);
                result = 31 * result + (this.enableBackupLog != null ? this.enableBackupLog.hashCode() : 0);
                result = 31 * result + (this.enableCrossLogBackup != null ? this.enableCrossLogBackup.hashCode() : 0);
                result = 31 * result + (this.highFrequencyBackupRetention != null ? this.highFrequencyBackupRetention.hashCode() : 0);
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                result = 31 * result + (this.logBackupRetentionPeriod != null ? this.logBackupRetentionPeriod.hashCode() : 0);
                result = 31 * result + (this.preferredBackupPeriod != null ? this.preferredBackupPeriod.hashCode() : 0);
                result = 31 * result + (this.preferredBackupTime != null ? this.preferredBackupTime.hashCode() : 0);
                result = 31 * result + (this.preserveOneEachHour != null ? this.preserveOneEachHour.hashCode() : 0);
                result = 31 * result + (this.snapshotBackupType != null ? this.snapshotBackupType.hashCode() : 0);
                result = 31 * result + (this.srcRegion != null ? this.srcRegion.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosInstance.PrivateConnectionsProperty")
    @software.amazon.jsii.Jsii.Proxy(PrivateConnectionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrivateConnectionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getReplicaConnections();

        /**
         * @return a {@link Builder} of {@link PrivateConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrivateConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrivateConnectionsProperty> {
            java.lang.Object replicaConnections;

            /**
             * Sets the value of {@link PrivateConnectionsProperty#getReplicaConnections}
             * @param replicaConnections the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicaConnections(com.aliyun.ros.cdk.core.IResolvable replicaConnections) {
                this.replicaConnections = replicaConnections;
                return this;
            }

            /**
             * Sets the value of {@link PrivateConnectionsProperty#getReplicaConnections}
             * @param replicaConnections the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicaConnections(java.util.List<? extends java.lang.Object> replicaConnections) {
                this.replicaConnections = replicaConnections;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrivateConnectionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrivateConnectionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrivateConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrivateConnectionsProperty {
            private final java.lang.Object replicaConnections;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.replicaConnections = software.amazon.jsii.Kernel.get(this, "replicaConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.replicaConnections = java.util.Objects.requireNonNull(builder.replicaConnections, "replicaConnections is required");
            }

            @Override
            public final java.lang.Object getReplicaConnections() {
                return this.replicaConnections;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("replicaConnections", om.valueToTree(this.getReplicaConnections()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosInstance.PrivateConnectionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrivateConnectionsProperty.Jsii$Proxy that = (PrivateConnectionsProperty.Jsii$Proxy) o;

                return this.replicaConnections.equals(that.replicaConnections);
            }

            @Override
            public final int hashCode() {
                int result = this.replicaConnections.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosInstance.ReplicaConnectionsProperty")
    @software.amazon.jsii.Jsii.Proxy(ReplicaConnectionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReplicaConnectionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionString();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionPort() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ReplicaConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReplicaConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReplicaConnectionsProperty> {
            java.lang.Object connectionString;
            java.lang.Object connectionPort;

            /**
             * Sets the value of {@link ReplicaConnectionsProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(java.lang.String connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Sets the value of {@link ReplicaConnectionsProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(com.aliyun.ros.cdk.core.IResolvable connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Sets the value of {@link ReplicaConnectionsProperty#getConnectionPort}
             * @param connectionPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(java.lang.Number connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link ReplicaConnectionsProperty#getConnectionPort}
             * @param connectionPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(com.aliyun.ros.cdk.core.IResolvable connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReplicaConnectionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReplicaConnectionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ReplicaConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReplicaConnectionsProperty {
            private final java.lang.Object connectionString;
            private final java.lang.Object connectionPort;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.connectionString = software.amazon.jsii.Kernel.get(this, "connectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.connectionPort = software.amazon.jsii.Kernel.get(this, "connectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.connectionString = java.util.Objects.requireNonNull(builder.connectionString, "connectionString is required");
                this.connectionPort = builder.connectionPort;
            }

            @Override
            public final java.lang.Object getConnectionString() {
                return this.connectionString;
            }

            @Override
            public final java.lang.Object getConnectionPort() {
                return this.connectionPort;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("connectionString", om.valueToTree(this.getConnectionString()));
                if (this.getConnectionPort() != null) {
                    data.set("connectionPort", om.valueToTree(this.getConnectionPort()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosInstance.ReplicaConnectionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReplicaConnectionsProperty.Jsii$Proxy that = (ReplicaConnectionsProperty.Jsii$Proxy) o;

                if (!connectionString.equals(that.connectionString)) return false;
                return this.connectionPort != null ? this.connectionPort.equals(that.connectionPort) : that.connectionPort == null;
            }

            @Override
            public final int hashCode() {
                int result = this.connectionString.hashCode();
                result = 31 * result + (this.connectionPort != null ? this.connectionPort.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosInstance.SSLOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(SSLOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SSLOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSslAction();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getForceEncryption() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSwitchMode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SSLOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SSLOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SSLOptionsProperty> {
            java.lang.Object sslAction;
            java.lang.Object forceEncryption;
            java.lang.Object switchMode;

            /**
             * Sets the value of {@link SSLOptionsProperty#getSslAction}
             * @param sslAction the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sslAction(java.lang.String sslAction) {
                this.sslAction = sslAction;
                return this;
            }

            /**
             * Sets the value of {@link SSLOptionsProperty#getSslAction}
             * @param sslAction the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sslAction(com.aliyun.ros.cdk.core.IResolvable sslAction) {
                this.sslAction = sslAction;
                return this;
            }

            /**
             * Sets the value of {@link SSLOptionsProperty#getForceEncryption}
             * @param forceEncryption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forceEncryption(java.lang.Number forceEncryption) {
                this.forceEncryption = forceEncryption;
                return this;
            }

            /**
             * Sets the value of {@link SSLOptionsProperty#getForceEncryption}
             * @param forceEncryption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forceEncryption(com.aliyun.ros.cdk.core.IResolvable forceEncryption) {
                this.forceEncryption = forceEncryption;
                return this;
            }

            /**
             * Sets the value of {@link SSLOptionsProperty#getSwitchMode}
             * @param switchMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder switchMode(java.lang.Number switchMode) {
                this.switchMode = switchMode;
                return this;
            }

            /**
             * Sets the value of {@link SSLOptionsProperty#getSwitchMode}
             * @param switchMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder switchMode(com.aliyun.ros.cdk.core.IResolvable switchMode) {
                this.switchMode = switchMode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SSLOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SSLOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SSLOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SSLOptionsProperty {
            private final java.lang.Object sslAction;
            private final java.lang.Object forceEncryption;
            private final java.lang.Object switchMode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.sslAction = software.amazon.jsii.Kernel.get(this, "sslAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.forceEncryption = software.amazon.jsii.Kernel.get(this, "forceEncryption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.switchMode = software.amazon.jsii.Kernel.get(this, "switchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.sslAction = java.util.Objects.requireNonNull(builder.sslAction, "sslAction is required");
                this.forceEncryption = builder.forceEncryption;
                this.switchMode = builder.switchMode;
            }

            @Override
            public final java.lang.Object getSslAction() {
                return this.sslAction;
            }

            @Override
            public final java.lang.Object getForceEncryption() {
                return this.forceEncryption;
            }

            @Override
            public final java.lang.Object getSwitchMode() {
                return this.switchMode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("sslAction", om.valueToTree(this.getSslAction()));
                if (this.getForceEncryption() != null) {
                    data.set("forceEncryption", om.valueToTree(this.getForceEncryption()));
                }
                if (this.getSwitchMode() != null) {
                    data.set("switchMode", om.valueToTree(this.getSwitchMode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosInstance.SSLOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SSLOptionsProperty.Jsii$Proxy that = (SSLOptionsProperty.Jsii$Proxy) o;

                if (!sslAction.equals(that.sslAction)) return false;
                if (this.forceEncryption != null ? !this.forceEncryption.equals(that.forceEncryption) : that.forceEncryption != null) return false;
                return this.switchMode != null ? this.switchMode.equals(that.switchMode) : that.switchMode == null;
            }

            @Override
            public final int hashCode() {
                int result = this.sslAction.hashCode();
                result = 31 * result + (this.forceEncryption != null ? this.forceEncryption.hashCode() : 0);
                result = 31 * result + (this.switchMode != null ? this.switchMode.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosInstance.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosInstance.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.RosInstance> {
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
        private final com.aliyun.ros.cdk.mongodb.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.RosInstanceProps.Builder();
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
         * @param accountPassword This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param accountPassword This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param auditPolicyOptions This parameter is required.
         */
        public Builder auditPolicyOptions(final com.aliyun.ros.cdk.core.IResolvable auditPolicyOptions) {
            this.props.auditPolicyOptions(auditPolicyOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param auditPolicyOptions This parameter is required.
         */
        public Builder auditPolicyOptions(final com.aliyun.ros.cdk.mongodb.RosInstance.AuditPolicyOptionsProperty auditPolicyOptions) {
            this.props.auditPolicyOptions(auditPolicyOptions);
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
         * @param backupPolicyOptions This parameter is required.
         */
        public Builder backupPolicyOptions(final com.aliyun.ros.cdk.core.IResolvable backupPolicyOptions) {
            this.props.backupPolicyOptions(backupPolicyOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupPolicyOptions This parameter is required.
         */
        public Builder backupPolicyOptions(final com.aliyun.ros.cdk.mongodb.RosInstance.BackupPolicyOptionsProperty backupPolicyOptions) {
            this.props.backupPolicyOptions(backupPolicyOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param businessInfo This parameter is required.
         */
        public Builder businessInfo(final java.lang.String businessInfo) {
            this.props.businessInfo(businessInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param businessInfo This parameter is required.
         */
        public Builder businessInfo(final com.aliyun.ros.cdk.core.IResolvable businessInfo) {
            this.props.businessInfo(businessInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
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
         * @param couponNo This parameter is required.
         */
        public Builder couponNo(final java.lang.String couponNo) {
            this.props.couponNo(couponNo);
            return this;
        }
        /**
         * @return {@code this}
         * @param couponNo This parameter is required.
         */
        public Builder couponNo(final com.aliyun.ros.cdk.core.IResolvable couponNo) {
            this.props.couponNo(couponNo);
            return this;
        }

        /**
         * @return {@code this}
         * @param databaseNames This parameter is required.
         */
        public Builder databaseNames(final java.lang.String databaseNames) {
            this.props.databaseNames(databaseNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param databaseNames This parameter is required.
         */
        public Builder databaseNames(final com.aliyun.ros.cdk.core.IResolvable databaseNames) {
            this.props.databaseNames(databaseNames);
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
         * @param dbInstanceReleaseProtection This parameter is required.
         */
        public Builder dbInstanceReleaseProtection(final java.lang.Boolean dbInstanceReleaseProtection) {
            this.props.dbInstanceReleaseProtection(dbInstanceReleaseProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceReleaseProtection This parameter is required.
         */
        public Builder dbInstanceReleaseProtection(final com.aliyun.ros.cdk.core.IResolvable dbInstanceReleaseProtection) {
            this.props.dbInstanceReleaseProtection(dbInstanceReleaseProtection);
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
         * @param hiddenZoneId This parameter is required.
         */
        public Builder hiddenZoneId(final java.lang.String hiddenZoneId) {
            this.props.hiddenZoneId(hiddenZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param hiddenZoneId This parameter is required.
         */
        public Builder hiddenZoneId(final com.aliyun.ros.cdk.core.IResolvable hiddenZoneId) {
            this.props.hiddenZoneId(hiddenZoneId);
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
         * @param privateConnections This parameter is required.
         */
        public Builder privateConnections(final com.aliyun.ros.cdk.core.IResolvable privateConnections) {
            this.props.privateConnections(privateConnections);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateConnections This parameter is required.
         */
        public Builder privateConnections(final com.aliyun.ros.cdk.mongodb.RosInstance.PrivateConnectionsProperty privateConnections) {
            this.props.privateConnections(privateConnections);
            return this;
        }

        /**
         * @return {@code this}
         * @param provisionedIops This parameter is required.
         */
        public Builder provisionedIops(final java.lang.Number provisionedIops) {
            this.props.provisionedIops(provisionedIops);
            return this;
        }
        /**
         * @return {@code this}
         * @param provisionedIops This parameter is required.
         */
        public Builder provisionedIops(final com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
            this.props.provisionedIops(provisionedIops);
            return this;
        }

        /**
         * @return {@code this}
         * @param readonlyReplicas This parameter is required.
         */
        public Builder readonlyReplicas(final java.lang.Number readonlyReplicas) {
            this.props.readonlyReplicas(readonlyReplicas);
            return this;
        }
        /**
         * @return {@code this}
         * @param readonlyReplicas This parameter is required.
         */
        public Builder readonlyReplicas(final com.aliyun.ros.cdk.core.IResolvable readonlyReplicas) {
            this.props.readonlyReplicas(readonlyReplicas);
            return this;
        }

        /**
         * @return {@code this}
         * @param replicationFactor This parameter is required.
         */
        public Builder replicationFactor(final java.lang.Number replicationFactor) {
            this.props.replicationFactor(replicationFactor);
            return this;
        }
        /**
         * @return {@code this}
         * @param replicationFactor This parameter is required.
         */
        public Builder replicationFactor(final com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.props.replicationFactor(replicationFactor);
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
         * @param restoreType This parameter is required.
         */
        public Builder restoreType(final java.lang.Number restoreType) {
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
         * @param secondaryZoneId This parameter is required.
         */
        public Builder secondaryZoneId(final java.lang.String secondaryZoneId) {
            this.props.secondaryZoneId(secondaryZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondaryZoneId This parameter is required.
         */
        public Builder secondaryZoneId(final com.aliyun.ros.cdk.core.IResolvable secondaryZoneId) {
            this.props.secondaryZoneId(secondaryZoneId);
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
         * @param securityIpArray This parameter is required.
         */
        public Builder securityIpArray(final java.lang.String securityIpArray) {
            this.props.securityIpArray(securityIpArray);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityIpArray This parameter is required.
         */
        public Builder securityIpArray(final com.aliyun.ros.cdk.core.IResolvable securityIpArray) {
            this.props.securityIpArray(securityIpArray);
            return this;
        }

        /**
         * @return {@code this}
         * @param srcDbInstanceId This parameter is required.
         */
        public Builder srcDbInstanceId(final java.lang.String srcDbInstanceId) {
            this.props.srcDbInstanceId(srcDbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param srcDbInstanceId This parameter is required.
         */
        public Builder srcDbInstanceId(final com.aliyun.ros.cdk.core.IResolvable srcDbInstanceId) {
            this.props.srcDbInstanceId(srcDbInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param srcRegion This parameter is required.
         */
        public Builder srcRegion(final java.lang.String srcRegion) {
            this.props.srcRegion(srcRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param srcRegion This parameter is required.
         */
        public Builder srcRegion(final com.aliyun.ros.cdk.core.IResolvable srcRegion) {
            this.props.srcRegion(srcRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param sslOptions This parameter is required.
         */
        public Builder sslOptions(final com.aliyun.ros.cdk.core.IResolvable sslOptions) {
            this.props.sslOptions(sslOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param sslOptions This parameter is required.
         */
        public Builder sslOptions(final com.aliyun.ros.cdk.mongodb.RosInstance.SSLOptionsProperty sslOptions) {
            this.props.sslOptions(sslOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageEngine This parameter is required.
         */
        public Builder storageEngine(final java.lang.String storageEngine) {
            this.props.storageEngine(storageEngine);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageEngine This parameter is required.
         */
        public Builder storageEngine(final com.aliyun.ros.cdk.core.IResolvable storageEngine) {
            this.props.storageEngine(storageEngine);
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
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.mongodb.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param tdeStatus This parameter is required.
         */
        public Builder tdeStatus(final java.lang.Boolean tdeStatus) {
            this.props.tdeStatus(tdeStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param tdeStatus This parameter is required.
         */
        public Builder tdeStatus(final com.aliyun.ros.cdk.core.IResolvable tdeStatus) {
            this.props.tdeStatus(tdeStatus);
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
         * @param vpcPasswordFree This parameter is required.
         */
        public Builder vpcPasswordFree(final java.lang.Boolean vpcPasswordFree) {
            this.props.vpcPasswordFree(vpcPasswordFree);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcPasswordFree This parameter is required.
         */
        public Builder vpcPasswordFree(final com.aliyun.ros.cdk.core.IResolvable vpcPasswordFree) {
            this.props.vpcPasswordFree(vpcPasswordFree);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.RosInstance build() {
            return new com.aliyun.ros.cdk.mongodb.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
