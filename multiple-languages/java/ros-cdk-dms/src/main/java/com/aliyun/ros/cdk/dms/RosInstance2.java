package com.aliyun.ros.cdk.dms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DMS::Instance2</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:38.003Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.RosInstance2")
public class RosInstance2 extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dms.RosInstance2.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.RosInstance2Props props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHost() {
        return software.amazon.jsii.Kernel.get(this, "attrHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDatabasePassword() {
        return software.amazon.jsii.Kernel.get(this, "databasePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatabasePassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "databasePassword", java.util.Objects.requireNonNull(value, "databasePassword is required"));
    }

    /**
     */
    public void setDatabasePassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "databasePassword", java.util.Objects.requireNonNull(value, "databasePassword is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDatabaseUser() {
        return software.amazon.jsii.Kernel.get(this, "databaseUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatabaseUser(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "databaseUser", java.util.Objects.requireNonNull(value, "databaseUser is required"));
    }

    /**
     */
    public void setDatabaseUser(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "databaseUser", java.util.Objects.requireNonNull(value, "databaseUser is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbaId() {
        return software.amazon.jsii.Kernel.get(this, "dbaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbaId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dbaId", java.util.Objects.requireNonNull(value, "dbaId is required"));
    }

    /**
     */
    public void setDbaId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbaId", java.util.Objects.requireNonNull(value, "dbaId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEnableSellTrust() {
        return software.amazon.jsii.Kernel.get(this, "enableSellTrust", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSellTrust(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enableSellTrust", java.util.Objects.requireNonNull(value, "enableSellTrust is required"));
    }

    /**
     */
    public void setEnableSellTrust(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSellTrust", java.util.Objects.requireNonNull(value, "enableSellTrust is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEnvType() {
        return software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "envType", java.util.Objects.requireNonNull(value, "envType is required"));
    }

    /**
     */
    public void setEnvType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "envType", java.util.Objects.requireNonNull(value, "envType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExportTimeout() {
        return software.amazon.jsii.Kernel.get(this, "exportTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExportTimeout(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "exportTimeout", java.util.Objects.requireNonNull(value, "exportTimeout is required"));
    }

    /**
     */
    public void setExportTimeout(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exportTimeout", java.util.Objects.requireNonNull(value, "exportTimeout is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHost() {
        return software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHost(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "host", java.util.Objects.requireNonNull(value, "host is required"));
    }

    /**
     */
    public void setHost(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "host", java.util.Objects.requireNonNull(value, "host is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceAlias() {
        return software.amazon.jsii.Kernel.get(this, "instanceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceAlias(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceAlias", java.util.Objects.requireNonNull(value, "instanceAlias is required"));
    }

    /**
     */
    public void setInstanceAlias(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceAlias", java.util.Objects.requireNonNull(value, "instanceAlias is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSource() {
        return software.amazon.jsii.Kernel.get(this, "instanceSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceSource(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceSource", java.util.Objects.requireNonNull(value, "instanceSource is required"));
    }

    /**
     */
    public void setInstanceSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceSource", java.util.Objects.requireNonNull(value, "instanceSource is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", java.util.Objects.requireNonNull(value, "instanceType is required"));
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", java.util.Objects.requireNonNull(value, "instanceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkType", java.util.Objects.requireNonNull(value, "networkType is required"));
    }

    /**
     */
    public void setNetworkType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkType", java.util.Objects.requireNonNull(value, "networkType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPort() {
        return software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPort(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "port", java.util.Objects.requireNonNull(value, "port is required"));
    }

    /**
     */
    public void setPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "port", java.util.Objects.requireNonNull(value, "port is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQueryTimeout() {
        return software.amazon.jsii.Kernel.get(this, "queryTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueryTimeout(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "queryTimeout", java.util.Objects.requireNonNull(value, "queryTimeout is required"));
    }

    /**
     */
    public void setQueryTimeout(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queryTimeout", java.util.Objects.requireNonNull(value, "queryTimeout is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSafeRule() {
        return software.amazon.jsii.Kernel.get(this, "safeRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSafeRule(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "safeRule", java.util.Objects.requireNonNull(value, "safeRule is required"));
    }

    /**
     */
    public void setSafeRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "safeRule", java.util.Objects.requireNonNull(value, "safeRule is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataLinkName() {
        return software.amazon.jsii.Kernel.get(this, "dataLinkName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataLinkName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataLinkName", value);
    }

    /**
     */
    public void setDataLinkName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataLinkName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDdlOnline() {
        return software.amazon.jsii.Kernel.get(this, "ddlOnline", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDdlOnline(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ddlOnline", value);
    }

    /**
     */
    public void setDdlOnline(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ddlOnline", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "ecsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsInstanceId", value);
    }

    /**
     */
    public void setEcsInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcsRegion() {
        return software.amazon.jsii.Kernel.get(this, "ecsRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsRegion", value);
    }

    /**
     */
    public void setEcsRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsRegion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableSellCommon() {
        return software.amazon.jsii.Kernel.get(this, "enableSellCommon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSellCommon(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enableSellCommon", value);
    }

    /**
     */
    public void setEnableSellCommon(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSellCommon", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableSellSitd() {
        return software.amazon.jsii.Kernel.get(this, "enableSellSitd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSellSitd(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enableSellSitd", value);
    }

    /**
     */
    public void setEnableSellSitd(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSellSitd", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableSellStable() {
        return software.amazon.jsii.Kernel.get(this, "enableSellStable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSellStable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enableSellStable", value);
    }

    /**
     */
    public void setEnableSellStable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSellStable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSid() {
        return software.amazon.jsii.Kernel.get(this, "sid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSid(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sid", value);
    }

    /**
     */
    public void setSid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sid", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSkipTest() {
        return software.amazon.jsii.Kernel.get(this, "skipTest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSkipTest(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "skipTest", value);
    }

    /**
     */
    public void setSkipTest(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "skipTest", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateType() {
        return software.amazon.jsii.Kernel.get(this, "templateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateType", value);
    }

    /**
     */
    public void setTemplateType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTid() {
        return software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTid(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "tid", value);
    }

    /**
     */
    public void setTid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tid", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUseDsql() {
        return software.amazon.jsii.Kernel.get(this, "useDsql", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUseDsql(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "useDsql", value);
    }

    /**
     */
    public void setUseDsql(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "useDsql", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUseSsl() {
        return software.amazon.jsii.Kernel.get(this, "useSsl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUseSsl(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "useSsl", value);
    }

    /**
     */
    public void setUseSsl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "useSsl", value);
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dms.RosInstance2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dms.RosInstance2> {
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
        private final com.aliyun.ros.cdk.dms.RosInstance2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dms.RosInstance2Props.Builder();
        }

        /**
         * @return {@code this}
         * @param databasePassword This parameter is required.
         */
        public Builder databasePassword(final java.lang.String databasePassword) {
            this.props.databasePassword(databasePassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param databasePassword This parameter is required.
         */
        public Builder databasePassword(final com.aliyun.ros.cdk.core.IResolvable databasePassword) {
            this.props.databasePassword(databasePassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param databaseUser This parameter is required.
         */
        public Builder databaseUser(final java.lang.String databaseUser) {
            this.props.databaseUser(databaseUser);
            return this;
        }
        /**
         * @return {@code this}
         * @param databaseUser This parameter is required.
         */
        public Builder databaseUser(final com.aliyun.ros.cdk.core.IResolvable databaseUser) {
            this.props.databaseUser(databaseUser);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbaId This parameter is required.
         */
        public Builder dbaId(final java.lang.Number dbaId) {
            this.props.dbaId(dbaId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbaId This parameter is required.
         */
        public Builder dbaId(final com.aliyun.ros.cdk.core.IResolvable dbaId) {
            this.props.dbaId(dbaId);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSellTrust This parameter is required.
         */
        public Builder enableSellTrust(final java.lang.String enableSellTrust) {
            this.props.enableSellTrust(enableSellTrust);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSellTrust This parameter is required.
         */
        public Builder enableSellTrust(final com.aliyun.ros.cdk.core.IResolvable enableSellTrust) {
            this.props.enableSellTrust(enableSellTrust);
            return this;
        }

        /**
         * @return {@code this}
         * @param envType This parameter is required.
         */
        public Builder envType(final java.lang.String envType) {
            this.props.envType(envType);
            return this;
        }
        /**
         * @return {@code this}
         * @param envType This parameter is required.
         */
        public Builder envType(final com.aliyun.ros.cdk.core.IResolvable envType) {
            this.props.envType(envType);
            return this;
        }

        /**
         * @return {@code this}
         * @param exportTimeout This parameter is required.
         */
        public Builder exportTimeout(final java.lang.Number exportTimeout) {
            this.props.exportTimeout(exportTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param exportTimeout This parameter is required.
         */
        public Builder exportTimeout(final com.aliyun.ros.cdk.core.IResolvable exportTimeout) {
            this.props.exportTimeout(exportTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param host This parameter is required.
         */
        public Builder host(final java.lang.String host) {
            this.props.host(host);
            return this;
        }
        /**
         * @return {@code this}
         * @param host This parameter is required.
         */
        public Builder host(final com.aliyun.ros.cdk.core.IResolvable host) {
            this.props.host(host);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceAlias This parameter is required.
         */
        public Builder instanceAlias(final java.lang.String instanceAlias) {
            this.props.instanceAlias(instanceAlias);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceAlias This parameter is required.
         */
        public Builder instanceAlias(final com.aliyun.ros.cdk.core.IResolvable instanceAlias) {
            this.props.instanceAlias(instanceAlias);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceSource This parameter is required.
         */
        public Builder instanceSource(final java.lang.String instanceSource) {
            this.props.instanceSource(instanceSource);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceSource This parameter is required.
         */
        public Builder instanceSource(final com.aliyun.ros.cdk.core.IResolvable instanceSource) {
            this.props.instanceSource(instanceSource);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
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
         * @param queryTimeout This parameter is required.
         */
        public Builder queryTimeout(final java.lang.Number queryTimeout) {
            this.props.queryTimeout(queryTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param queryTimeout This parameter is required.
         */
        public Builder queryTimeout(final com.aliyun.ros.cdk.core.IResolvable queryTimeout) {
            this.props.queryTimeout(queryTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param safeRule This parameter is required.
         */
        public Builder safeRule(final java.lang.String safeRule) {
            this.props.safeRule(safeRule);
            return this;
        }
        /**
         * @return {@code this}
         * @param safeRule This parameter is required.
         */
        public Builder safeRule(final com.aliyun.ros.cdk.core.IResolvable safeRule) {
            this.props.safeRule(safeRule);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataLinkName This parameter is required.
         */
        public Builder dataLinkName(final java.lang.String dataLinkName) {
            this.props.dataLinkName(dataLinkName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataLinkName This parameter is required.
         */
        public Builder dataLinkName(final com.aliyun.ros.cdk.core.IResolvable dataLinkName) {
            this.props.dataLinkName(dataLinkName);
            return this;
        }

        /**
         * @return {@code this}
         * @param ddlOnline This parameter is required.
         */
        public Builder ddlOnline(final java.lang.Number ddlOnline) {
            this.props.ddlOnline(ddlOnline);
            return this;
        }
        /**
         * @return {@code this}
         * @param ddlOnline This parameter is required.
         */
        public Builder ddlOnline(final com.aliyun.ros.cdk.core.IResolvable ddlOnline) {
            this.props.ddlOnline(ddlOnline);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsInstanceId This parameter is required.
         */
        public Builder ecsInstanceId(final java.lang.String ecsInstanceId) {
            this.props.ecsInstanceId(ecsInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsInstanceId This parameter is required.
         */
        public Builder ecsInstanceId(final com.aliyun.ros.cdk.core.IResolvable ecsInstanceId) {
            this.props.ecsInstanceId(ecsInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsRegion This parameter is required.
         */
        public Builder ecsRegion(final java.lang.String ecsRegion) {
            this.props.ecsRegion(ecsRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsRegion This parameter is required.
         */
        public Builder ecsRegion(final com.aliyun.ros.cdk.core.IResolvable ecsRegion) {
            this.props.ecsRegion(ecsRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSellCommon This parameter is required.
         */
        public Builder enableSellCommon(final java.lang.String enableSellCommon) {
            this.props.enableSellCommon(enableSellCommon);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSellCommon This parameter is required.
         */
        public Builder enableSellCommon(final com.aliyun.ros.cdk.core.IResolvable enableSellCommon) {
            this.props.enableSellCommon(enableSellCommon);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSellSitd This parameter is required.
         */
        public Builder enableSellSitd(final java.lang.String enableSellSitd) {
            this.props.enableSellSitd(enableSellSitd);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSellSitd This parameter is required.
         */
        public Builder enableSellSitd(final com.aliyun.ros.cdk.core.IResolvable enableSellSitd) {
            this.props.enableSellSitd(enableSellSitd);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSellStable This parameter is required.
         */
        public Builder enableSellStable(final java.lang.String enableSellStable) {
            this.props.enableSellStable(enableSellStable);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSellStable This parameter is required.
         */
        public Builder enableSellStable(final com.aliyun.ros.cdk.core.IResolvable enableSellStable) {
            this.props.enableSellStable(enableSellStable);
            return this;
        }

        /**
         * @return {@code this}
         * @param sid This parameter is required.
         */
        public Builder sid(final java.lang.String sid) {
            this.props.sid(sid);
            return this;
        }
        /**
         * @return {@code this}
         * @param sid This parameter is required.
         */
        public Builder sid(final com.aliyun.ros.cdk.core.IResolvable sid) {
            this.props.sid(sid);
            return this;
        }

        /**
         * @return {@code this}
         * @param skipTest This parameter is required.
         */
        public Builder skipTest(final java.lang.Boolean skipTest) {
            this.props.skipTest(skipTest);
            return this;
        }
        /**
         * @return {@code this}
         * @param skipTest This parameter is required.
         */
        public Builder skipTest(final com.aliyun.ros.cdk.core.IResolvable skipTest) {
            this.props.skipTest(skipTest);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final java.lang.Number templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateType This parameter is required.
         */
        public Builder templateType(final java.lang.String templateType) {
            this.props.templateType(templateType);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateType This parameter is required.
         */
        public Builder templateType(final com.aliyun.ros.cdk.core.IResolvable templateType) {
            this.props.templateType(templateType);
            return this;
        }

        /**
         * @return {@code this}
         * @param tid This parameter is required.
         */
        public Builder tid(final java.lang.Number tid) {
            this.props.tid(tid);
            return this;
        }
        /**
         * @return {@code this}
         * @param tid This parameter is required.
         */
        public Builder tid(final com.aliyun.ros.cdk.core.IResolvable tid) {
            this.props.tid(tid);
            return this;
        }

        /**
         * @return {@code this}
         * @param useDsql This parameter is required.
         */
        public Builder useDsql(final java.lang.Number useDsql) {
            this.props.useDsql(useDsql);
            return this;
        }
        /**
         * @return {@code this}
         * @param useDsql This parameter is required.
         */
        public Builder useDsql(final com.aliyun.ros.cdk.core.IResolvable useDsql) {
            this.props.useDsql(useDsql);
            return this;
        }

        /**
         * @return {@code this}
         * @param useSsl This parameter is required.
         */
        public Builder useSsl(final java.lang.Number useSsl) {
            this.props.useSsl(useSsl);
            return this;
        }
        /**
         * @return {@code this}
         * @param useSsl This parameter is required.
         */
        public Builder useSsl(final com.aliyun.ros.cdk.core.IResolvable useSsl) {
            this.props.useSsl(useSsl);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dms.RosInstance2}.
         */
        @Override
        public com.aliyun.ros.cdk.dms.RosInstance2 build() {
            return new com.aliyun.ros.cdk.dms.RosInstance2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
