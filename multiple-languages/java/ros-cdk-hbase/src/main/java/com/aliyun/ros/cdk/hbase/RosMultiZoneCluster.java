package com.aliyun.ros.cdk.hbase;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::HBase::MultiZoneCluster</code>, which is used to create an ApsaraDB for HBase cluster that resides in multiple zones.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:40.291Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbase.$Module.class, fqn = "@alicloud/ros-cdk-hbase.RosMultiZoneCluster")
public class RosMultiZoneCluster extends com.aliyun.ros.cdk.core.RosResource {

    protected RosMultiZoneCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMultiZoneCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.hbase.RosMultiZoneCluster.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosMultiZoneCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.RosMultiZoneClusterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceConnAddrs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlbConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrSlbConnAddrs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrThriftConn() {
        return software.amazon.jsii.Kernel.get(this, "attrThriftConn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUiProxyConnAddrInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrUiProxyConnAddrInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZkConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrZkConnAddrs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getArbiterVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "arbiterVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArbiterVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "arbiterVSwitchId", java.util.Objects.requireNonNull(value, "arbiterVSwitchId is required"));
    }

    /**
     */
    public void setArbiterVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "arbiterVSwitchId", java.util.Objects.requireNonNull(value, "arbiterVSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getArbiterZoneId() {
        return software.amazon.jsii.Kernel.get(this, "arbiterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArbiterZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "arbiterZoneId", java.util.Objects.requireNonNull(value, "arbiterZoneId is required"));
    }

    /**
     */
    public void setArbiterZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "arbiterZoneId", java.util.Objects.requireNonNull(value, "arbiterZoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getArchVersion() {
        return software.amazon.jsii.Kernel.get(this, "archVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArchVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "archVersion", java.util.Objects.requireNonNull(value, "archVersion is required"));
    }

    /**
     */
    public void setArchVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "archVersion", java.util.Objects.requireNonNull(value, "archVersion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCoreDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "coreDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCoreDiskSize(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "coreDiskSize", java.util.Objects.requireNonNull(value, "coreDiskSize is required"));
    }

    /**
     */
    public void setCoreDiskSize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "coreDiskSize", java.util.Objects.requireNonNull(value, "coreDiskSize is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCoreDiskType() {
        return software.amazon.jsii.Kernel.get(this, "coreDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCoreDiskType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "coreDiskType", java.util.Objects.requireNonNull(value, "coreDiskType is required"));
    }

    /**
     */
    public void setCoreDiskType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "coreDiskType", java.util.Objects.requireNonNull(value, "coreDiskType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCoreInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "coreInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCoreInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "coreInstanceType", java.util.Objects.requireNonNull(value, "coreInstanceType is required"));
    }

    /**
     */
    public void setCoreInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "coreInstanceType", java.util.Objects.requireNonNull(value, "coreInstanceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCoreNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "coreNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCoreNodeCount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "coreNodeCount", java.util.Objects.requireNonNull(value, "coreNodeCount is required"));
    }

    /**
     */
    public void setCoreNodeCount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "coreNodeCount", java.util.Objects.requireNonNull(value, "coreNodeCount is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "logDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogDiskSize(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "logDiskSize", java.util.Objects.requireNonNull(value, "logDiskSize is required"));
    }

    /**
     */
    public void setLogDiskSize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logDiskSize", java.util.Objects.requireNonNull(value, "logDiskSize is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogDiskType() {
        return software.amazon.jsii.Kernel.get(this, "logDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogDiskType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logDiskType", java.util.Objects.requireNonNull(value, "logDiskType is required"));
    }

    /**
     */
    public void setLogDiskType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logDiskType", java.util.Objects.requireNonNull(value, "logDiskType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "logInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logInstanceType", java.util.Objects.requireNonNull(value, "logInstanceType is required"));
    }

    /**
     */
    public void setLogInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logInstanceType", java.util.Objects.requireNonNull(value, "logInstanceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "logNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogNodeCount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "logNodeCount", java.util.Objects.requireNonNull(value, "logNodeCount is required"));
    }

    /**
     */
    public void setLogNodeCount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logNodeCount", java.util.Objects.requireNonNull(value, "logNodeCount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMultiZoneCombination() {
        return software.amazon.jsii.Kernel.get(this, "multiZoneCombination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiZoneCombination(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "multiZoneCombination", java.util.Objects.requireNonNull(value, "multiZoneCombination is required"));
    }

    /**
     */
    public void setMultiZoneCombination(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiZoneCombination", java.util.Objects.requireNonNull(value, "multiZoneCombination is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "primaryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrimaryVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "primaryVSwitchId", java.util.Objects.requireNonNull(value, "primaryVSwitchId is required"));
    }

    /**
     */
    public void setPrimaryVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "primaryVSwitchId", java.util.Objects.requireNonNull(value, "primaryVSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryZoneId() {
        return software.amazon.jsii.Kernel.get(this, "primaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrimaryZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "primaryZoneId", java.util.Objects.requireNonNull(value, "primaryZoneId is required"));
    }

    /**
     */
    public void setPrimaryZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "primaryZoneId", java.util.Objects.requireNonNull(value, "primaryZoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStandbyVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "standbyVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStandbyVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "standbyVSwitchId", java.util.Objects.requireNonNull(value, "standbyVSwitchId is required"));
    }

    /**
     */
    public void setStandbyVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "standbyVSwitchId", java.util.Objects.requireNonNull(value, "standbyVSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStandbyZoneId() {
        return software.amazon.jsii.Kernel.get(this, "standbyZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStandbyZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "standbyZoneId", java.util.Objects.requireNonNull(value, "standbyZoneId is required"));
    }

    /**
     */
    public void setStandbyZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "standbyZoneId", java.util.Objects.requireNonNull(value, "standbyZoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterName() {
        return software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterName", value);
    }

    /**
     */
    public void setClusterName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "masterInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterInstanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterInstanceType", value);
    }

    /**
     */
    public void setMasterInstanceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterInstanceType", value);
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
     * A fluent builder for {@link com.aliyun.ros.cdk.hbase.RosMultiZoneCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbase.RosMultiZoneCluster> {
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
        private final com.aliyun.ros.cdk.hbase.RosMultiZoneClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbase.RosMultiZoneClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param arbiterVSwitchId This parameter is required.
         */
        public Builder arbiterVSwitchId(final java.lang.String arbiterVSwitchId) {
            this.props.arbiterVSwitchId(arbiterVSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param arbiterVSwitchId This parameter is required.
         */
        public Builder arbiterVSwitchId(final com.aliyun.ros.cdk.core.IResolvable arbiterVSwitchId) {
            this.props.arbiterVSwitchId(arbiterVSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param arbiterZoneId This parameter is required.
         */
        public Builder arbiterZoneId(final java.lang.String arbiterZoneId) {
            this.props.arbiterZoneId(arbiterZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param arbiterZoneId This parameter is required.
         */
        public Builder arbiterZoneId(final com.aliyun.ros.cdk.core.IResolvable arbiterZoneId) {
            this.props.arbiterZoneId(arbiterZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param archVersion This parameter is required.
         */
        public Builder archVersion(final java.lang.String archVersion) {
            this.props.archVersion(archVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param archVersion This parameter is required.
         */
        public Builder archVersion(final com.aliyun.ros.cdk.core.IResolvable archVersion) {
            this.props.archVersion(archVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param coreDiskSize This parameter is required.
         */
        public Builder coreDiskSize(final java.lang.Number coreDiskSize) {
            this.props.coreDiskSize(coreDiskSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param coreDiskSize This parameter is required.
         */
        public Builder coreDiskSize(final com.aliyun.ros.cdk.core.IResolvable coreDiskSize) {
            this.props.coreDiskSize(coreDiskSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param coreDiskType This parameter is required.
         */
        public Builder coreDiskType(final java.lang.String coreDiskType) {
            this.props.coreDiskType(coreDiskType);
            return this;
        }
        /**
         * @return {@code this}
         * @param coreDiskType This parameter is required.
         */
        public Builder coreDiskType(final com.aliyun.ros.cdk.core.IResolvable coreDiskType) {
            this.props.coreDiskType(coreDiskType);
            return this;
        }

        /**
         * @return {@code this}
         * @param coreInstanceType This parameter is required.
         */
        public Builder coreInstanceType(final java.lang.String coreInstanceType) {
            this.props.coreInstanceType(coreInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param coreInstanceType This parameter is required.
         */
        public Builder coreInstanceType(final com.aliyun.ros.cdk.core.IResolvable coreInstanceType) {
            this.props.coreInstanceType(coreInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param coreNodeCount This parameter is required.
         */
        public Builder coreNodeCount(final java.lang.Number coreNodeCount) {
            this.props.coreNodeCount(coreNodeCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param coreNodeCount This parameter is required.
         */
        public Builder coreNodeCount(final com.aliyun.ros.cdk.core.IResolvable coreNodeCount) {
            this.props.coreNodeCount(coreNodeCount);
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
         * @param logDiskSize This parameter is required.
         */
        public Builder logDiskSize(final java.lang.Number logDiskSize) {
            this.props.logDiskSize(logDiskSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param logDiskSize This parameter is required.
         */
        public Builder logDiskSize(final com.aliyun.ros.cdk.core.IResolvable logDiskSize) {
            this.props.logDiskSize(logDiskSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param logDiskType This parameter is required.
         */
        public Builder logDiskType(final java.lang.String logDiskType) {
            this.props.logDiskType(logDiskType);
            return this;
        }
        /**
         * @return {@code this}
         * @param logDiskType This parameter is required.
         */
        public Builder logDiskType(final com.aliyun.ros.cdk.core.IResolvable logDiskType) {
            this.props.logDiskType(logDiskType);
            return this;
        }

        /**
         * @return {@code this}
         * @param logInstanceType This parameter is required.
         */
        public Builder logInstanceType(final java.lang.String logInstanceType) {
            this.props.logInstanceType(logInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param logInstanceType This parameter is required.
         */
        public Builder logInstanceType(final com.aliyun.ros.cdk.core.IResolvable logInstanceType) {
            this.props.logInstanceType(logInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param logNodeCount This parameter is required.
         */
        public Builder logNodeCount(final java.lang.Number logNodeCount) {
            this.props.logNodeCount(logNodeCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param logNodeCount This parameter is required.
         */
        public Builder logNodeCount(final com.aliyun.ros.cdk.core.IResolvable logNodeCount) {
            this.props.logNodeCount(logNodeCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiZoneCombination This parameter is required.
         */
        public Builder multiZoneCombination(final java.lang.String multiZoneCombination) {
            this.props.multiZoneCombination(multiZoneCombination);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiZoneCombination This parameter is required.
         */
        public Builder multiZoneCombination(final com.aliyun.ros.cdk.core.IResolvable multiZoneCombination) {
            this.props.multiZoneCombination(multiZoneCombination);
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
         * @param primaryVSwitchId This parameter is required.
         */
        public Builder primaryVSwitchId(final java.lang.String primaryVSwitchId) {
            this.props.primaryVSwitchId(primaryVSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param primaryVSwitchId This parameter is required.
         */
        public Builder primaryVSwitchId(final com.aliyun.ros.cdk.core.IResolvable primaryVSwitchId) {
            this.props.primaryVSwitchId(primaryVSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param primaryZoneId This parameter is required.
         */
        public Builder primaryZoneId(final java.lang.String primaryZoneId) {
            this.props.primaryZoneId(primaryZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param primaryZoneId This parameter is required.
         */
        public Builder primaryZoneId(final com.aliyun.ros.cdk.core.IResolvable primaryZoneId) {
            this.props.primaryZoneId(primaryZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param standbyVSwitchId This parameter is required.
         */
        public Builder standbyVSwitchId(final java.lang.String standbyVSwitchId) {
            this.props.standbyVSwitchId(standbyVSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param standbyVSwitchId This parameter is required.
         */
        public Builder standbyVSwitchId(final com.aliyun.ros.cdk.core.IResolvable standbyVSwitchId) {
            this.props.standbyVSwitchId(standbyVSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param standbyZoneId This parameter is required.
         */
        public Builder standbyZoneId(final java.lang.String standbyZoneId) {
            this.props.standbyZoneId(standbyZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param standbyZoneId This parameter is required.
         */
        public Builder standbyZoneId(final com.aliyun.ros.cdk.core.IResolvable standbyZoneId) {
            this.props.standbyZoneId(standbyZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterName This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterName This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterInstanceType This parameter is required.
         */
        public Builder masterInstanceType(final java.lang.String masterInstanceType) {
            this.props.masterInstanceType(masterInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterInstanceType This parameter is required.
         */
        public Builder masterInstanceType(final com.aliyun.ros.cdk.core.IResolvable masterInstanceType) {
            this.props.masterInstanceType(masterInstanceType);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbase.RosMultiZoneCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.hbase.RosMultiZoneCluster build() {
            return new com.aliyun.ros.cdk.hbase.RosMultiZoneCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
