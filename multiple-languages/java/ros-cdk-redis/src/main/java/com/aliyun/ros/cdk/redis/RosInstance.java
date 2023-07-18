package com.aliyun.ros.cdk.redis;

/**
 * A ROS template type:  <code>ALIYUN::REDIS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:03.365Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.redis.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::REDIS::Instance</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArchitectureType() {
        return software.amazon.jsii.Kernel.get(this, "attrArchitectureType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrCapacity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClassicInnerConnectionPort() {
        return software.amazon.jsii.Kernel.get(this, "attrClassicInnerConnectionPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClassicInnerConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrClassicInnerConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnections() {
        return software.amazon.jsii.Kernel.get(this, "attrConnections", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDirectConnectionPort() {
        return software.amazon.jsii.Kernel.get(this, "attrDirectConnectionPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDirectConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrDirectConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHasRenewChangeOrder() {
        return software.amazon.jsii.Kernel.get(this, "attrHasRenewChangeOrder", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodeType() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPackageType() {
        return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicConnectionPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQps() {
        return software.amazon.jsii.Kernel.get(this, "attrQps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcPrivateConnectionPort() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcPrivateConnectionPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcPrivateConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcPrivateConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewDuration() {
        return software.amazon.jsii.Kernel.get(this, "autoRenewDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenewDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewDuration", value);
    }

    /**
     */
    public void setAutoRenewDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupPolicy() {
        return software.amazon.jsii.Kernel.get(this, "backupPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupPolicy", value);
    }

    /**
     */
    public void setBackupPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.RosInstance.BackupPolicyProperty value) {
        software.amazon.jsii.Kernel.set(this, "backupPolicy", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnections() {
        return software.amazon.jsii.Kernel.get(this, "connections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnections(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connections", value);
    }

    /**
     */
    public void setConnections(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.RosInstance.ConnectionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "connections", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEvictionPolicy() {
        return software.amazon.jsii.Kernel.get(this, "evictionPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEvictionPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "evictionPolicy", value);
    }

    /**
     */
    public void setEvictionPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "evictionPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceClass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceClass", value);
    }

    /**
     */
    public void setInstanceClass(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceClass", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceMaintainTime() {
        return software.amazon.jsii.Kernel.get(this, "instanceMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceMaintainTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceMaintainTime", value);
    }

    /**
     */
    public void setInstanceMaintainTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.RosInstance.InstanceMaintainTimeProperty value) {
        software.amazon.jsii.Kernel.set(this, "instanceMaintainTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProductType() {
        return software.amazon.jsii.Kernel.get(this, "productType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productType", value);
    }

    /**
     */
    public void setProductType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSslEnabled() {
        return software.amazon.jsii.Kernel.get(this, "sslEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSslEnabled(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sslEnabled", value);
    }

    /**
     */
    public void setSslEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sslEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.RosInstance.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.redis.RosInstance.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTairConfig() {
        return software.amazon.jsii.Kernel.get(this, "tairConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTairConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tairConfig", value);
    }

    /**
     */
    public void setTairConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.RosInstance.TairConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "tairConfig", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty")
    @software.amazon.jsii.Jsii.Proxy(BackupPolicyProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BackupPolicyProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPreferredBackupPeriod();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPreferredBackupTime();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableBackupLog() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BackupPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BackupPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BackupPolicyProperty> {
            java.lang.Object preferredBackupPeriod;
            java.lang.Object preferredBackupTime;
            java.lang.Object enableBackupLog;

            /**
             * Sets the value of {@link BackupPolicyProperty#getPreferredBackupPeriod}
             * @param preferredBackupPeriod the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preferredBackupPeriod(java.lang.String preferredBackupPeriod) {
                this.preferredBackupPeriod = preferredBackupPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyProperty#getPreferredBackupPeriod}
             * @param preferredBackupPeriod the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preferredBackupPeriod(com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
                this.preferredBackupPeriod = preferredBackupPeriod;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyProperty#getPreferredBackupTime}
             * @param preferredBackupTime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preferredBackupTime(java.lang.String preferredBackupTime) {
                this.preferredBackupTime = preferredBackupTime;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyProperty#getPreferredBackupTime}
             * @param preferredBackupTime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder preferredBackupTime(com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
                this.preferredBackupTime = preferredBackupTime;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyProperty#getEnableBackupLog}
             * @param enableBackupLog the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableBackupLog(java.lang.Number enableBackupLog) {
                this.enableBackupLog = enableBackupLog;
                return this;
            }

            /**
             * Sets the value of {@link BackupPolicyProperty#getEnableBackupLog}
             * @param enableBackupLog the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableBackupLog(com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
                this.enableBackupLog = enableBackupLog;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BackupPolicyProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BackupPolicyProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BackupPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BackupPolicyProperty {
            private final java.lang.Object preferredBackupPeriod;
            private final java.lang.Object preferredBackupTime;
            private final java.lang.Object enableBackupLog;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.preferredBackupPeriod = software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.preferredBackupTime = software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableBackupLog = software.amazon.jsii.Kernel.get(this, "enableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.preferredBackupPeriod = java.util.Objects.requireNonNull(builder.preferredBackupPeriod, "preferredBackupPeriod is required");
                this.preferredBackupTime = java.util.Objects.requireNonNull(builder.preferredBackupTime, "preferredBackupTime is required");
                this.enableBackupLog = builder.enableBackupLog;
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
            public final java.lang.Object getEnableBackupLog() {
                return this.enableBackupLog;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("preferredBackupPeriod", om.valueToTree(this.getPreferredBackupPeriod()));
                data.set("preferredBackupTime", om.valueToTree(this.getPreferredBackupTime()));
                if (this.getEnableBackupLog() != null) {
                    data.set("enableBackupLog", om.valueToTree(this.getEnableBackupLog()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BackupPolicyProperty.Jsii$Proxy that = (BackupPolicyProperty.Jsii$Proxy) o;

                if (!preferredBackupPeriod.equals(that.preferredBackupPeriod)) return false;
                if (!preferredBackupTime.equals(that.preferredBackupTime)) return false;
                return this.enableBackupLog != null ? this.enableBackupLog.equals(that.enableBackupLog) : that.enableBackupLog == null;
            }

            @Override
            public final int hashCode() {
                int result = this.preferredBackupPeriod.hashCode();
                result = 31 * result + (this.preferredBackupTime.hashCode());
                result = 31 * result + (this.enableBackupLog != null ? this.enableBackupLog.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty")
    @software.amazon.jsii.Jsii.Proxy(ClassicInnerConnectionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ClassicInnerConnectionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionString();

        /**
         * @return a {@link Builder} of {@link ClassicInnerConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ClassicInnerConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ClassicInnerConnectionProperty> {
            java.lang.Object connectionPort;
            java.lang.Object connectionString;

            /**
             * Sets the value of {@link ClassicInnerConnectionProperty#getConnectionPort}
             * @param connectionPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(java.lang.Number connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link ClassicInnerConnectionProperty#getConnectionPort}
             * @param connectionPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(com.aliyun.ros.cdk.core.IResolvable connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link ClassicInnerConnectionProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(java.lang.String connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Sets the value of {@link ClassicInnerConnectionProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(com.aliyun.ros.cdk.core.IResolvable connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ClassicInnerConnectionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ClassicInnerConnectionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ClassicInnerConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClassicInnerConnectionProperty {
            private final java.lang.Object connectionPort;
            private final java.lang.Object connectionString;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.connectionPort = software.amazon.jsii.Kernel.get(this, "connectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.connectionString = software.amazon.jsii.Kernel.get(this, "connectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.connectionPort = java.util.Objects.requireNonNull(builder.connectionPort, "connectionPort is required");
                this.connectionString = java.util.Objects.requireNonNull(builder.connectionString, "connectionString is required");
            }

            @Override
            public final java.lang.Object getConnectionPort() {
                return this.connectionPort;
            }

            @Override
            public final java.lang.Object getConnectionString() {
                return this.connectionString;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("connectionPort", om.valueToTree(this.getConnectionPort()));
                data.set("connectionString", om.valueToTree(this.getConnectionString()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ClassicInnerConnectionProperty.Jsii$Proxy that = (ClassicInnerConnectionProperty.Jsii$Proxy) o;

                if (!connectionPort.equals(that.connectionPort)) return false;
                return this.connectionString.equals(that.connectionString);
            }

            @Override
            public final int hashCode() {
                int result = this.connectionPort.hashCode();
                result = 31 * result + (this.connectionString.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.ConnectionsProperty")
    @software.amazon.jsii.Jsii.Proxy(ConnectionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConnectionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getClassicInnerConnection() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDirectConnection() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPublicConnection() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcPrivateConnection() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConnectionsProperty> {
            java.lang.Object classicInnerConnection;
            java.lang.Object directConnection;
            java.lang.Object publicConnection;
            java.lang.Object vpcPrivateConnection;

            /**
             * Sets the value of {@link ConnectionsProperty#getClassicInnerConnection}
             * @param classicInnerConnection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder classicInnerConnection(com.aliyun.ros.cdk.core.IResolvable classicInnerConnection) {
                this.classicInnerConnection = classicInnerConnection;
                return this;
            }

            /**
             * Sets the value of {@link ConnectionsProperty#getClassicInnerConnection}
             * @param classicInnerConnection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder classicInnerConnection(com.aliyun.ros.cdk.redis.RosInstance.ClassicInnerConnectionProperty classicInnerConnection) {
                this.classicInnerConnection = classicInnerConnection;
                return this;
            }

            /**
             * Sets the value of {@link ConnectionsProperty#getDirectConnection}
             * @param directConnection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder directConnection(com.aliyun.ros.cdk.core.IResolvable directConnection) {
                this.directConnection = directConnection;
                return this;
            }

            /**
             * Sets the value of {@link ConnectionsProperty#getDirectConnection}
             * @param directConnection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder directConnection(com.aliyun.ros.cdk.redis.RosInstance.DirectConnectionProperty directConnection) {
                this.directConnection = directConnection;
                return this;
            }

            /**
             * Sets the value of {@link ConnectionsProperty#getPublicConnection}
             * @param publicConnection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder publicConnection(com.aliyun.ros.cdk.core.IResolvable publicConnection) {
                this.publicConnection = publicConnection;
                return this;
            }

            /**
             * Sets the value of {@link ConnectionsProperty#getPublicConnection}
             * @param publicConnection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder publicConnection(com.aliyun.ros.cdk.redis.RosInstance.PublicConnectionProperty publicConnection) {
                this.publicConnection = publicConnection;
                return this;
            }

            /**
             * Sets the value of {@link ConnectionsProperty#getVpcPrivateConnection}
             * @param vpcPrivateConnection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcPrivateConnection(com.aliyun.ros.cdk.core.IResolvable vpcPrivateConnection) {
                this.vpcPrivateConnection = vpcPrivateConnection;
                return this;
            }

            /**
             * Sets the value of {@link ConnectionsProperty#getVpcPrivateConnection}
             * @param vpcPrivateConnection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcPrivateConnection(com.aliyun.ros.cdk.redis.RosInstance.VpcPrivateConnectionProperty vpcPrivateConnection) {
                this.vpcPrivateConnection = vpcPrivateConnection;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConnectionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConnectionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConnectionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConnectionsProperty {
            private final java.lang.Object classicInnerConnection;
            private final java.lang.Object directConnection;
            private final java.lang.Object publicConnection;
            private final java.lang.Object vpcPrivateConnection;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.classicInnerConnection = software.amazon.jsii.Kernel.get(this, "classicInnerConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.directConnection = software.amazon.jsii.Kernel.get(this, "directConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.publicConnection = software.amazon.jsii.Kernel.get(this, "publicConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcPrivateConnection = software.amazon.jsii.Kernel.get(this, "vpcPrivateConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.classicInnerConnection = builder.classicInnerConnection;
                this.directConnection = builder.directConnection;
                this.publicConnection = builder.publicConnection;
                this.vpcPrivateConnection = builder.vpcPrivateConnection;
            }

            @Override
            public final java.lang.Object getClassicInnerConnection() {
                return this.classicInnerConnection;
            }

            @Override
            public final java.lang.Object getDirectConnection() {
                return this.directConnection;
            }

            @Override
            public final java.lang.Object getPublicConnection() {
                return this.publicConnection;
            }

            @Override
            public final java.lang.Object getVpcPrivateConnection() {
                return this.vpcPrivateConnection;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getClassicInnerConnection() != null) {
                    data.set("classicInnerConnection", om.valueToTree(this.getClassicInnerConnection()));
                }
                if (this.getDirectConnection() != null) {
                    data.set("directConnection", om.valueToTree(this.getDirectConnection()));
                }
                if (this.getPublicConnection() != null) {
                    data.set("publicConnection", om.valueToTree(this.getPublicConnection()));
                }
                if (this.getVpcPrivateConnection() != null) {
                    data.set("vpcPrivateConnection", om.valueToTree(this.getVpcPrivateConnection()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.ConnectionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConnectionsProperty.Jsii$Proxy that = (ConnectionsProperty.Jsii$Proxy) o;

                if (this.classicInnerConnection != null ? !this.classicInnerConnection.equals(that.classicInnerConnection) : that.classicInnerConnection != null) return false;
                if (this.directConnection != null ? !this.directConnection.equals(that.directConnection) : that.directConnection != null) return false;
                if (this.publicConnection != null ? !this.publicConnection.equals(that.publicConnection) : that.publicConnection != null) return false;
                return this.vpcPrivateConnection != null ? this.vpcPrivateConnection.equals(that.vpcPrivateConnection) : that.vpcPrivateConnection == null;
            }

            @Override
            public final int hashCode() {
                int result = this.classicInnerConnection != null ? this.classicInnerConnection.hashCode() : 0;
                result = 31 * result + (this.directConnection != null ? this.directConnection.hashCode() : 0);
                result = 31 * result + (this.publicConnection != null ? this.publicConnection.hashCode() : 0);
                result = 31 * result + (this.vpcPrivateConnection != null ? this.vpcPrivateConnection.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty")
    @software.amazon.jsii.Jsii.Proxy(DirectConnectionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DirectConnectionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionString();

        /**
         * @return a {@link Builder} of {@link DirectConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DirectConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DirectConnectionProperty> {
            java.lang.Object connectionPort;
            java.lang.Object connectionString;

            /**
             * Sets the value of {@link DirectConnectionProperty#getConnectionPort}
             * @param connectionPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(java.lang.Number connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link DirectConnectionProperty#getConnectionPort}
             * @param connectionPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(com.aliyun.ros.cdk.core.IResolvable connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link DirectConnectionProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(java.lang.String connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Sets the value of {@link DirectConnectionProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(com.aliyun.ros.cdk.core.IResolvable connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DirectConnectionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DirectConnectionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DirectConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DirectConnectionProperty {
            private final java.lang.Object connectionPort;
            private final java.lang.Object connectionString;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.connectionPort = software.amazon.jsii.Kernel.get(this, "connectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.connectionString = software.amazon.jsii.Kernel.get(this, "connectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.connectionPort = java.util.Objects.requireNonNull(builder.connectionPort, "connectionPort is required");
                this.connectionString = java.util.Objects.requireNonNull(builder.connectionString, "connectionString is required");
            }

            @Override
            public final java.lang.Object getConnectionPort() {
                return this.connectionPort;
            }

            @Override
            public final java.lang.Object getConnectionString() {
                return this.connectionString;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("connectionPort", om.valueToTree(this.getConnectionPort()));
                data.set("connectionString", om.valueToTree(this.getConnectionString()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DirectConnectionProperty.Jsii$Proxy that = (DirectConnectionProperty.Jsii$Proxy) o;

                if (!connectionPort.equals(that.connectionPort)) return false;
                return this.connectionString.equals(that.connectionString);
            }

            @Override
            public final int hashCode() {
                int result = this.connectionPort.hashCode();
                result = 31 * result + (this.connectionString.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty")
    @software.amazon.jsii.Jsii.Proxy(InstanceMaintainTimeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InstanceMaintainTimeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaintainEndTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaintainStartTime() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InstanceMaintainTimeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InstanceMaintainTimeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InstanceMaintainTimeProperty> {
            java.lang.Object maintainEndTime;
            java.lang.Object maintainStartTime;

            /**
             * Sets the value of {@link InstanceMaintainTimeProperty#getMaintainEndTime}
             * @param maintainEndTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maintainEndTime(java.lang.String maintainEndTime) {
                this.maintainEndTime = maintainEndTime;
                return this;
            }

            /**
             * Sets the value of {@link InstanceMaintainTimeProperty#getMaintainEndTime}
             * @param maintainEndTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maintainEndTime(com.aliyun.ros.cdk.core.IResolvable maintainEndTime) {
                this.maintainEndTime = maintainEndTime;
                return this;
            }

            /**
             * Sets the value of {@link InstanceMaintainTimeProperty#getMaintainStartTime}
             * @param maintainStartTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maintainStartTime(java.lang.String maintainStartTime) {
                this.maintainStartTime = maintainStartTime;
                return this;
            }

            /**
             * Sets the value of {@link InstanceMaintainTimeProperty#getMaintainStartTime}
             * @param maintainStartTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maintainStartTime(com.aliyun.ros.cdk.core.IResolvable maintainStartTime) {
                this.maintainStartTime = maintainStartTime;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InstanceMaintainTimeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InstanceMaintainTimeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InstanceMaintainTimeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceMaintainTimeProperty {
            private final java.lang.Object maintainEndTime;
            private final java.lang.Object maintainStartTime;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.maintainEndTime = software.amazon.jsii.Kernel.get(this, "maintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maintainStartTime = software.amazon.jsii.Kernel.get(this, "maintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.maintainEndTime = builder.maintainEndTime;
                this.maintainStartTime = builder.maintainStartTime;
            }

            @Override
            public final java.lang.Object getMaintainEndTime() {
                return this.maintainEndTime;
            }

            @Override
            public final java.lang.Object getMaintainStartTime() {
                return this.maintainStartTime;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMaintainEndTime() != null) {
                    data.set("maintainEndTime", om.valueToTree(this.getMaintainEndTime()));
                }
                if (this.getMaintainStartTime() != null) {
                    data.set("maintainStartTime", om.valueToTree(this.getMaintainStartTime()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InstanceMaintainTimeProperty.Jsii$Proxy that = (InstanceMaintainTimeProperty.Jsii$Proxy) o;

                if (this.maintainEndTime != null ? !this.maintainEndTime.equals(that.maintainEndTime) : that.maintainEndTime != null) return false;
                return this.maintainStartTime != null ? this.maintainStartTime.equals(that.maintainStartTime) : that.maintainStartTime == null;
            }

            @Override
            public final int hashCode() {
                int result = this.maintainEndTime != null ? this.maintainEndTime.hashCode() : 0;
                result = 31 * result + (this.maintainStartTime != null ? this.maintainStartTime.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty")
    @software.amazon.jsii.Jsii.Proxy(PublicConnectionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PublicConnectionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionString();

        /**
         * @return a {@link Builder} of {@link PublicConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PublicConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PublicConnectionProperty> {
            java.lang.Object connectionPort;
            java.lang.Object connectionString;

            /**
             * Sets the value of {@link PublicConnectionProperty#getConnectionPort}
             * @param connectionPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(java.lang.Number connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link PublicConnectionProperty#getConnectionPort}
             * @param connectionPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(com.aliyun.ros.cdk.core.IResolvable connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link PublicConnectionProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(java.lang.String connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Sets the value of {@link PublicConnectionProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(com.aliyun.ros.cdk.core.IResolvable connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PublicConnectionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PublicConnectionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PublicConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PublicConnectionProperty {
            private final java.lang.Object connectionPort;
            private final java.lang.Object connectionString;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.connectionPort = software.amazon.jsii.Kernel.get(this, "connectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.connectionString = software.amazon.jsii.Kernel.get(this, "connectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.connectionPort = java.util.Objects.requireNonNull(builder.connectionPort, "connectionPort is required");
                this.connectionString = java.util.Objects.requireNonNull(builder.connectionString, "connectionString is required");
            }

            @Override
            public final java.lang.Object getConnectionPort() {
                return this.connectionPort;
            }

            @Override
            public final java.lang.Object getConnectionString() {
                return this.connectionString;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("connectionPort", om.valueToTree(this.getConnectionPort()));
                data.set("connectionString", om.valueToTree(this.getConnectionString()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PublicConnectionProperty.Jsii$Proxy that = (PublicConnectionProperty.Jsii$Proxy) o;

                if (!connectionPort.equals(that.connectionPort)) return false;
                return this.connectionString.equals(that.connectionString);
            }

            @Override
            public final int hashCode() {
                int result = this.connectionPort.hashCode();
                result = 31 * result + (this.connectionString.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.TagsProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.TairConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TairConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TairConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStorage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStorageType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TairConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TairConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TairConfigProperty> {
            java.lang.Object shardCount;
            java.lang.Object storage;
            java.lang.Object storageType;

            /**
             * Sets the value of {@link TairConfigProperty#getShardCount}
             * @param shardCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder shardCount(java.lang.Number shardCount) {
                this.shardCount = shardCount;
                return this;
            }

            /**
             * Sets the value of {@link TairConfigProperty#getShardCount}
             * @param shardCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder shardCount(com.aliyun.ros.cdk.core.IResolvable shardCount) {
                this.shardCount = shardCount;
                return this;
            }

            /**
             * Sets the value of {@link TairConfigProperty#getStorage}
             * @param storage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storage(java.lang.Number storage) {
                this.storage = storage;
                return this;
            }

            /**
             * Sets the value of {@link TairConfigProperty#getStorage}
             * @param storage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storage(com.aliyun.ros.cdk.core.IResolvable storage) {
                this.storage = storage;
                return this;
            }

            /**
             * Sets the value of {@link TairConfigProperty#getStorageType}
             * @param storageType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageType(java.lang.String storageType) {
                this.storageType = storageType;
                return this;
            }

            /**
             * Sets the value of {@link TairConfigProperty#getStorageType}
             * @param storageType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageType(com.aliyun.ros.cdk.core.IResolvable storageType) {
                this.storageType = storageType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TairConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TairConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TairConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TairConfigProperty {
            private final java.lang.Object shardCount;
            private final java.lang.Object storage;
            private final java.lang.Object storageType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.shardCount = software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storage = software.amazon.jsii.Kernel.get(this, "storage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.shardCount = builder.shardCount;
                this.storage = builder.storage;
                this.storageType = builder.storageType;
            }

            @Override
            public final java.lang.Object getShardCount() {
                return this.shardCount;
            }

            @Override
            public final java.lang.Object getStorage() {
                return this.storage;
            }

            @Override
            public final java.lang.Object getStorageType() {
                return this.storageType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getShardCount() != null) {
                    data.set("shardCount", om.valueToTree(this.getShardCount()));
                }
                if (this.getStorage() != null) {
                    data.set("storage", om.valueToTree(this.getStorage()));
                }
                if (this.getStorageType() != null) {
                    data.set("storageType", om.valueToTree(this.getStorageType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.TairConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TairConfigProperty.Jsii$Proxy that = (TairConfigProperty.Jsii$Proxy) o;

                if (this.shardCount != null ? !this.shardCount.equals(that.shardCount) : that.shardCount != null) return false;
                if (this.storage != null ? !this.storage.equals(that.storage) : that.storage != null) return false;
                return this.storageType != null ? this.storageType.equals(that.storageType) : that.storageType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.shardCount != null ? this.shardCount.hashCode() : 0;
                result = 31 * result + (this.storage != null ? this.storage.hashCode() : 0);
                result = 31 * result + (this.storageType != null ? this.storageType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty")
    @software.amazon.jsii.Jsii.Proxy(VpcPrivateConnectionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VpcPrivateConnectionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionString();

        /**
         * @return a {@link Builder} of {@link VpcPrivateConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VpcPrivateConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VpcPrivateConnectionProperty> {
            java.lang.Object connectionPort;
            java.lang.Object connectionString;

            /**
             * Sets the value of {@link VpcPrivateConnectionProperty#getConnectionPort}
             * @param connectionPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(java.lang.Number connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link VpcPrivateConnectionProperty#getConnectionPort}
             * @param connectionPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPort(com.aliyun.ros.cdk.core.IResolvable connectionPort) {
                this.connectionPort = connectionPort;
                return this;
            }

            /**
             * Sets the value of {@link VpcPrivateConnectionProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(java.lang.String connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Sets the value of {@link VpcPrivateConnectionProperty#getConnectionString}
             * @param connectionString the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionString(com.aliyun.ros.cdk.core.IResolvable connectionString) {
                this.connectionString = connectionString;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VpcPrivateConnectionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VpcPrivateConnectionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VpcPrivateConnectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcPrivateConnectionProperty {
            private final java.lang.Object connectionPort;
            private final java.lang.Object connectionString;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.connectionPort = software.amazon.jsii.Kernel.get(this, "connectionPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.connectionString = software.amazon.jsii.Kernel.get(this, "connectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.connectionPort = java.util.Objects.requireNonNull(builder.connectionPort, "connectionPort is required");
                this.connectionString = java.util.Objects.requireNonNull(builder.connectionString, "connectionString is required");
            }

            @Override
            public final java.lang.Object getConnectionPort() {
                return this.connectionPort;
            }

            @Override
            public final java.lang.Object getConnectionString() {
                return this.connectionString;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("connectionPort", om.valueToTree(this.getConnectionPort()));
                data.set("connectionString", om.valueToTree(this.getConnectionString()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VpcPrivateConnectionProperty.Jsii$Proxy that = (VpcPrivateConnectionProperty.Jsii$Proxy) o;

                if (!connectionPort.equals(that.connectionPort)) return false;
                return this.connectionString.equals(that.connectionString);
            }

            @Override
            public final int hashCode() {
                int result = this.connectionPort.hashCode();
                result = 31 * result + (this.connectionString.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.RosInstance> {
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
        private final com.aliyun.ros.cdk.redis.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.redis.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param autoRenewDuration This parameter is required.
         */
        public Builder autoRenewDuration(final java.lang.Number autoRenewDuration) {
            this.props.autoRenewDuration(autoRenewDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenewDuration This parameter is required.
         */
        public Builder autoRenewDuration(final com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
            this.props.autoRenewDuration(autoRenewDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param backupPolicy This parameter is required.
         */
        public Builder backupPolicy(final com.aliyun.ros.cdk.core.IResolvable backupPolicy) {
            this.props.backupPolicy(backupPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupPolicy This parameter is required.
         */
        public Builder backupPolicy(final com.aliyun.ros.cdk.redis.RosInstance.BackupPolicyProperty backupPolicy) {
            this.props.backupPolicy(backupPolicy);
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
         * @param connections This parameter is required.
         */
        public Builder connections(final com.aliyun.ros.cdk.core.IResolvable connections) {
            this.props.connections(connections);
            return this;
        }
        /**
         * @return {@code this}
         * @param connections This parameter is required.
         */
        public Builder connections(final com.aliyun.ros.cdk.redis.RosInstance.ConnectionsProperty connections) {
            this.props.connections(connections);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
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
         * @param evictionPolicy This parameter is required.
         */
        public Builder evictionPolicy(final java.lang.String evictionPolicy) {
            this.props.evictionPolicy(evictionPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param evictionPolicy This parameter is required.
         */
        public Builder evictionPolicy(final com.aliyun.ros.cdk.core.IResolvable evictionPolicy) {
            this.props.evictionPolicy(evictionPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceClass This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.props.instanceClass(instanceClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceClass This parameter is required.
         */
        public Builder instanceClass(final com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.props.instanceClass(instanceClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceMaintainTime This parameter is required.
         */
        public Builder instanceMaintainTime(final com.aliyun.ros.cdk.core.IResolvable instanceMaintainTime) {
            this.props.instanceMaintainTime(instanceMaintainTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceMaintainTime This parameter is required.
         */
        public Builder instanceMaintainTime(final com.aliyun.ros.cdk.redis.RosInstance.InstanceMaintainTimeProperty instanceMaintainTime) {
            this.props.instanceMaintainTime(instanceMaintainTime);
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
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
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
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param productType This parameter is required.
         */
        public Builder productType(final java.lang.String productType) {
            this.props.productType(productType);
            return this;
        }
        /**
         * @return {@code this}
         * @param productType This parameter is required.
         */
        public Builder productType(final com.aliyun.ros.cdk.core.IResolvable productType) {
            this.props.productType(productType);
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
         * @param sslEnabled This parameter is required.
         */
        public Builder sslEnabled(final java.lang.String sslEnabled) {
            this.props.sslEnabled(sslEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param sslEnabled This parameter is required.
         */
        public Builder sslEnabled(final com.aliyun.ros.cdk.core.IResolvable sslEnabled) {
            this.props.sslEnabled(sslEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.redis.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param tairConfig This parameter is required.
         */
        public Builder tairConfig(final com.aliyun.ros.cdk.core.IResolvable tairConfig) {
            this.props.tairConfig(tairConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param tairConfig This parameter is required.
         */
        public Builder tairConfig(final com.aliyun.ros.cdk.redis.RosInstance.TairConfigProperty tairConfig) {
            this.props.tairConfig(tairConfig);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.RosInstance build() {
            return new com.aliyun.ros.cdk.redis.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
