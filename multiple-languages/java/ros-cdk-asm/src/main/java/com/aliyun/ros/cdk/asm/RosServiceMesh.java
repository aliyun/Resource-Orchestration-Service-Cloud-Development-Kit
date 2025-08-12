package com.aliyun.ros.cdk.asm;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ASM::ServiceMesh</code>, which is used to create a Service Mesh (ASM) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.089Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.asm.$Module.class, fqn = "@alicloud/ros-cdk-asm.RosServiceMesh")
public class RosServiceMesh extends com.aliyun.ros.cdk.core.RosResource {

    protected RosServiceMesh(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosServiceMesh(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.asm.RosServiceMesh.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosServiceMesh(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.asm.RosServiceMeshProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceMeshId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceMeshId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getVSwitches() {
        return software.amazon.jsii.Kernel.get(this, "vSwitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitches(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "vSwitches", java.util.Objects.requireNonNull(value, "vSwitches is required"));
    }

    /**
     */
    public void setVSwitches(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitches", java.util.Objects.requireNonNull(value, "vSwitches is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogEnabled() {
        return software.amazon.jsii.Kernel.get(this, "accessLogEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessLogEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "accessLogEnabled", value);
    }

    /**
     */
    public void setAccessLogEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessLogEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogFile() {
        return software.amazon.jsii.Kernel.get(this, "accessLogFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessLogFile(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessLogFile", value);
    }

    /**
     */
    public void setAccessLogFile(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessLogFile", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogFormat() {
        return software.amazon.jsii.Kernel.get(this, "accessLogFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessLogFormat(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessLogFormat", value);
    }

    /**
     */
    public void setAccessLogFormat(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessLogFormat", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogProject() {
        return software.amazon.jsii.Kernel.get(this, "accessLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessLogProject(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessLogProject", value);
    }

    /**
     */
    public void setAccessLogProject(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessLogProject", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogServiceEnabled() {
        return software.amazon.jsii.Kernel.get(this, "accessLogServiceEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessLogServiceEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "accessLogServiceEnabled", value);
    }

    /**
     */
    public void setAccessLogServiceEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessLogServiceEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogServiceHost() {
        return software.amazon.jsii.Kernel.get(this, "accessLogServiceHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessLogServiceHost(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessLogServiceHost", value);
    }

    /**
     */
    public void setAccessLogServiceHost(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessLogServiceHost", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessLogServicePort() {
        return software.amazon.jsii.Kernel.get(this, "accessLogServicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessLogServicePort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "accessLogServicePort", value);
    }

    /**
     */
    public void setAccessLogServicePort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessLogServicePort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApiServerLoadBalancerSpec() {
        return software.amazon.jsii.Kernel.get(this, "apiServerLoadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApiServerLoadBalancerSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "apiServerLoadBalancerSpec", value);
    }

    /**
     */
    public void setApiServerLoadBalancerSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "apiServerLoadBalancerSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApiServerPublicEip() {
        return software.amazon.jsii.Kernel.get(this, "apiServerPublicEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApiServerPublicEip(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "apiServerPublicEip", value);
    }

    /**
     */
    public void setApiServerPublicEip(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "apiServerPublicEip", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuditProject() {
        return software.amazon.jsii.Kernel.get(this, "auditProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuditProject(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "auditProject", value);
    }

    /**
     */
    public void setAuditProject(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "auditProject", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertChain() {
        return software.amazon.jsii.Kernel.get(this, "certChain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertChain(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "certChain", value);
    }

    /**
     */
    public void setCertChain(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certChain", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterSpec", value);
    }

    /**
     */
    public void setClusterSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfigSourceEnabled() {
        return software.amazon.jsii.Kernel.get(this, "configSourceEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigSourceEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "configSourceEnabled", value);
    }

    /**
     */
    public void setConfigSourceEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configSourceEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfigSourceNacosId() {
        return software.amazon.jsii.Kernel.get(this, "configSourceNacosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigSourceNacosId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "configSourceNacosId", value);
    }

    /**
     */
    public void setConfigSourceNacosId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configSourceNacosId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogEnabled() {
        return software.amazon.jsii.Kernel.get(this, "controlPlaneLogEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setControlPlaneLogEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogEnabled", value);
    }

    /**
     */
    public void setControlPlaneLogEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getControlPlaneLogProject() {
        return software.amazon.jsii.Kernel.get(this, "controlPlaneLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setControlPlaneLogProject(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogProject", value);
    }

    /**
     */
    public void setControlPlaneLogProject(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "controlPlaneLogProject", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrAggregationEnabled() {
        return software.amazon.jsii.Kernel.get(this, "crAggregationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrAggregationEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "crAggregationEnabled", value);
    }

    /**
     */
    public void setCrAggregationEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crAggregationEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomizedPrometheus() {
        return software.amazon.jsii.Kernel.get(this, "customizedPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomizedPrometheus(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "customizedPrometheus", value);
    }

    /**
     */
    public void setCustomizedPrometheus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customizedPrometheus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomizedZipkin() {
        return software.amazon.jsii.Kernel.get(this, "customizedZipkin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomizedZipkin(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "customizedZipkin", value);
    }

    /**
     */
    public void setCustomizedZipkin(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customizedZipkin", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDnsProxyingEnabled() {
        return software.amazon.jsii.Kernel.get(this, "dnsProxyingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDnsProxyingEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dnsProxyingEnabled", value);
    }

    /**
     */
    public void setDnsProxyingEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dnsProxyingEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDubboFilterEnabled() {
        return software.amazon.jsii.Kernel.get(this, "dubboFilterEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDubboFilterEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dubboFilterEnabled", value);
    }

    /**
     */
    public void setDubboFilterEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dubboFilterEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEdition() {
        return software.amazon.jsii.Kernel.get(this, "edition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEdition(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "edition", value);
    }

    /**
     */
    public void setEdition(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "edition", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAcmg() {
        return software.amazon.jsii.Kernel.get(this, "enableAcmg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAcmg(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAcmg", value);
    }

    /**
     */
    public void setEnableAcmg(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAcmg", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAmbient() {
        return software.amazon.jsii.Kernel.get(this, "enableAmbient", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAmbient(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAmbient", value);
    }

    /**
     */
    public void setEnableAmbient(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAmbient", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAudit() {
        return software.amazon.jsii.Kernel.get(this, "enableAudit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAudit(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAudit", value);
    }

    /**
     */
    public void setEnableAudit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAudit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableCrHistory() {
        return software.amazon.jsii.Kernel.get(this, "enableCrHistory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableCrHistory(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableCrHistory", value);
    }

    /**
     */
    public void setEnableCrHistory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableCrHistory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableSdsServer() {
        return software.amazon.jsii.Kernel.get(this, "enableSdsServer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSdsServer(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableSdsServer", value);
    }

    /**
     */
    public void setEnableSdsServer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSdsServer", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludeInboundPorts() {
        return software.amazon.jsii.Kernel.get(this, "excludeInboundPorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludeInboundPorts(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excludeInboundPorts", value);
    }

    /**
     */
    public void setExcludeInboundPorts(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludeInboundPorts", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludeIpRanges() {
        return software.amazon.jsii.Kernel.get(this, "excludeIpRanges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludeIpRanges(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excludeIpRanges", value);
    }

    /**
     */
    public void setExcludeIpRanges(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludeIpRanges", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludeOutboundPorts() {
        return software.amazon.jsii.Kernel.get(this, "excludeOutboundPorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludeOutboundPorts(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "excludeOutboundPorts", value);
    }

    /**
     */
    public void setExcludeOutboundPorts(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludeOutboundPorts", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExistingCaCert() {
        return software.amazon.jsii.Kernel.get(this, "existingCaCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExistingCaCert(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "existingCaCert", value);
    }

    /**
     */
    public void setExistingCaCert(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "existingCaCert", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExistingCaKey() {
        return software.amazon.jsii.Kernel.get(this, "existingCaKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExistingCaKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "existingCaKey", value);
    }

    /**
     */
    public void setExistingCaKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "existingCaKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExistingCaType() {
        return software.amazon.jsii.Kernel.get(this, "existingCaType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExistingCaType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "existingCaType", value);
    }

    /**
     */
    public void setExistingCaType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "existingCaType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExistingRootCaCert() {
        return software.amazon.jsii.Kernel.get(this, "existingRootCaCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExistingRootCaCert(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "existingRootCaCert", value);
    }

    /**
     */
    public void setExistingRootCaCert(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "existingRootCaCert", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExistingRootCaKey() {
        return software.amazon.jsii.Kernel.get(this, "existingRootCaKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExistingRootCaKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "existingRootCaKey", value);
    }

    /**
     */
    public void setExistingRootCaKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "existingRootCaKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFilterGatewayClusterConfig() {
        return software.amazon.jsii.Kernel.get(this, "filterGatewayClusterConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilterGatewayClusterConfig(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "filterGatewayClusterConfig", value);
    }

    /**
     */
    public void setFilterGatewayClusterConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filterGatewayClusterConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGatewayApiEnabled() {
        return software.amazon.jsii.Kernel.get(this, "gatewayApiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGatewayApiEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "gatewayApiEnabled", value);
    }

    /**
     */
    public void setGatewayApiEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gatewayApiEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGuestCluster() {
        return software.amazon.jsii.Kernel.get(this, "guestCluster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGuestCluster(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "guestCluster", value);
    }

    /**
     */
    public void setGuestCluster(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "guestCluster", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIncludeIpRanges() {
        return software.amazon.jsii.Kernel.get(this, "includeIpRanges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIncludeIpRanges(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "includeIpRanges", value);
    }

    /**
     */
    public void setIncludeIpRanges(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "includeIpRanges", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIstioVersion() {
        return software.amazon.jsii.Kernel.get(this, "istioVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIstioVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "istioVersion", value);
    }

    /**
     */
    public void setIstioVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "istioVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKialiEnabled() {
        return software.amazon.jsii.Kernel.get(this, "kialiEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKialiEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "kialiEnabled", value);
    }

    /**
     */
    public void setKialiEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kialiEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLocalityLbConf() {
        return software.amazon.jsii.Kernel.get(this, "localityLbConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalityLbConf(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localityLbConf", value);
    }

    /**
     */
    public void setLocalityLbConf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localityLbConf", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLocalityLoadBalancing() {
        return software.amazon.jsii.Kernel.get(this, "localityLoadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalityLoadBalancing(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "localityLoadBalancing", value);
    }

    /**
     */
    public void setLocalityLoadBalancing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localityLoadBalancing", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMseEnabled() {
        return software.amazon.jsii.Kernel.get(this, "mseEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMseEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "mseEnabled", value);
    }

    /**
     */
    public void setMseEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mseEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMultiBufferEnabled() {
        return software.amazon.jsii.Kernel.get(this, "multiBufferEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiBufferEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "multiBufferEnabled", value);
    }

    /**
     */
    public void setMultiBufferEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiBufferEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMultiBufferPollDelay() {
        return software.amazon.jsii.Kernel.get(this, "multiBufferPollDelay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiBufferPollDelay(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "multiBufferPollDelay", value);
    }

    /**
     */
    public void setMultiBufferPollDelay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiBufferPollDelay", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMysqlFilterEnabled() {
        return software.amazon.jsii.Kernel.get(this, "mysqlFilterEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMysqlFilterEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "mysqlFilterEnabled", value);
    }

    /**
     */
    public void setMysqlFilterEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mysqlFilterEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOpa() {
        return software.amazon.jsii.Kernel.get(this, "opa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOpa(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "opa", value);
    }

    /**
     */
    public void setOpa(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.asm.RosServiceMesh.OPAProperty value) {
        software.amazon.jsii.Kernel.set(this, "opa", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOpaEnabled() {
        return software.amazon.jsii.Kernel.get(this, "opaEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOpaEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "opaEnabled", value);
    }

    /**
     */
    public void setOpaEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "opaEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOutboundTrafficPolicy() {
        return software.amazon.jsii.Kernel.get(this, "outboundTrafficPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOutboundTrafficPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "outboundTrafficPolicy", value);
    }

    /**
     */
    public void setOutboundTrafficPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "outboundTrafficPolicy", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPilotLoadBalancerSpec() {
        return software.amazon.jsii.Kernel.get(this, "pilotLoadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPilotLoadBalancerSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pilotLoadBalancerSpec", value);
    }

    /**
     */
    public void setPilotLoadBalancerSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pilotLoadBalancerSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPilotPublicEip() {
        return software.amazon.jsii.Kernel.get(this, "pilotPublicEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPilotPublicEip(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "pilotPublicEip", value);
    }

    /**
     */
    public void setPilotPublicEip(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pilotPublicEip", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPlaygroundScene() {
        return software.amazon.jsii.Kernel.get(this, "playgroundScene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPlaygroundScene(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "playgroundScene", value);
    }

    /**
     */
    public void setPlaygroundScene(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "playgroundScene", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrometheusUrl() {
        return software.amazon.jsii.Kernel.get(this, "prometheusUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrometheusUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "prometheusUrl", value);
    }

    /**
     */
    public void setPrometheusUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "prometheusUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxy() {
        return software.amazon.jsii.Kernel.get(this, "proxy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxy", value);
    }

    /**
     */
    public void setProxy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.asm.RosServiceMesh.ProxyProperty value) {
        software.amazon.jsii.Kernel.set(this, "proxy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTelemetry() {
        return software.amazon.jsii.Kernel.get(this, "telemetry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTelemetry(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "telemetry", value);
    }

    /**
     */
    public void setTelemetry(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "telemetry", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTraceSampling() {
        return software.amazon.jsii.Kernel.get(this, "traceSampling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTraceSampling(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "traceSampling", value);
    }

    /**
     */
    public void setTraceSampling(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "traceSampling", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTracing() {
        return software.amazon.jsii.Kernel.get(this, "tracing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTracing(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "tracing", value);
    }

    /**
     */
    public void setTracing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tracing", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUseExistingCa() {
        return software.amazon.jsii.Kernel.get(this, "useExistingCa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUseExistingCa(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "useExistingCa", value);
    }

    /**
     */
    public void setUseExistingCa(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "useExistingCa", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebAssemblyFilterEnabled() {
        return software.amazon.jsii.Kernel.get(this, "webAssemblyFilterEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebAssemblyFilterEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "webAssemblyFilterEnabled", value);
    }

    /**
     */
    public void setWebAssemblyFilterEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "webAssemblyFilterEnabled", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.asm.$Module.class, fqn = "@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty")
    @software.amazon.jsii.Jsii.Proxy(OPAProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OPAProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOpaLimitCpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOpaLimitMemory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOpaLogLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOpaRequestCpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOpaRequestMemory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOpenAgentPolicy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OPAProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OPAProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OPAProperty> {
            java.lang.Object opaLimitCpu;
            java.lang.Object opaLimitMemory;
            java.lang.Object opaLogLevel;
            java.lang.Object opaRequestCpu;
            java.lang.Object opaRequestMemory;
            java.lang.Object openAgentPolicy;

            /**
             * Sets the value of {@link OPAProperty#getOpaLimitCpu}
             * @param opaLimitCpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaLimitCpu(java.lang.String opaLimitCpu) {
                this.opaLimitCpu = opaLimitCpu;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaLimitCpu}
             * @param opaLimitCpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaLimitCpu(com.aliyun.ros.cdk.core.IResolvable opaLimitCpu) {
                this.opaLimitCpu = opaLimitCpu;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaLimitMemory}
             * @param opaLimitMemory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaLimitMemory(java.lang.String opaLimitMemory) {
                this.opaLimitMemory = opaLimitMemory;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaLimitMemory}
             * @param opaLimitMemory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaLimitMemory(com.aliyun.ros.cdk.core.IResolvable opaLimitMemory) {
                this.opaLimitMemory = opaLimitMemory;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaLogLevel}
             * @param opaLogLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaLogLevel(java.lang.String opaLogLevel) {
                this.opaLogLevel = opaLogLevel;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaLogLevel}
             * @param opaLogLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaLogLevel(com.aliyun.ros.cdk.core.IResolvable opaLogLevel) {
                this.opaLogLevel = opaLogLevel;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaRequestCpu}
             * @param opaRequestCpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaRequestCpu(java.lang.String opaRequestCpu) {
                this.opaRequestCpu = opaRequestCpu;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaRequestCpu}
             * @param opaRequestCpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaRequestCpu(com.aliyun.ros.cdk.core.IResolvable opaRequestCpu) {
                this.opaRequestCpu = opaRequestCpu;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaRequestMemory}
             * @param opaRequestMemory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaRequestMemory(java.lang.String opaRequestMemory) {
                this.opaRequestMemory = opaRequestMemory;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpaRequestMemory}
             * @param opaRequestMemory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder opaRequestMemory(com.aliyun.ros.cdk.core.IResolvable opaRequestMemory) {
                this.opaRequestMemory = opaRequestMemory;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpenAgentPolicy}
             * @param openAgentPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder openAgentPolicy(java.lang.Boolean openAgentPolicy) {
                this.openAgentPolicy = openAgentPolicy;
                return this;
            }

            /**
             * Sets the value of {@link OPAProperty#getOpenAgentPolicy}
             * @param openAgentPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder openAgentPolicy(com.aliyun.ros.cdk.core.IResolvable openAgentPolicy) {
                this.openAgentPolicy = openAgentPolicy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OPAProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OPAProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OPAProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OPAProperty {
            private final java.lang.Object opaLimitCpu;
            private final java.lang.Object opaLimitMemory;
            private final java.lang.Object opaLogLevel;
            private final java.lang.Object opaRequestCpu;
            private final java.lang.Object opaRequestMemory;
            private final java.lang.Object openAgentPolicy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.opaLimitCpu = software.amazon.jsii.Kernel.get(this, "opaLimitCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.opaLimitMemory = software.amazon.jsii.Kernel.get(this, "opaLimitMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.opaLogLevel = software.amazon.jsii.Kernel.get(this, "opaLogLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.opaRequestCpu = software.amazon.jsii.Kernel.get(this, "opaRequestCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.opaRequestMemory = software.amazon.jsii.Kernel.get(this, "opaRequestMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.openAgentPolicy = software.amazon.jsii.Kernel.get(this, "openAgentPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.opaLimitCpu = builder.opaLimitCpu;
                this.opaLimitMemory = builder.opaLimitMemory;
                this.opaLogLevel = builder.opaLogLevel;
                this.opaRequestCpu = builder.opaRequestCpu;
                this.opaRequestMemory = builder.opaRequestMemory;
                this.openAgentPolicy = builder.openAgentPolicy;
            }

            @Override
            public final java.lang.Object getOpaLimitCpu() {
                return this.opaLimitCpu;
            }

            @Override
            public final java.lang.Object getOpaLimitMemory() {
                return this.opaLimitMemory;
            }

            @Override
            public final java.lang.Object getOpaLogLevel() {
                return this.opaLogLevel;
            }

            @Override
            public final java.lang.Object getOpaRequestCpu() {
                return this.opaRequestCpu;
            }

            @Override
            public final java.lang.Object getOpaRequestMemory() {
                return this.opaRequestMemory;
            }

            @Override
            public final java.lang.Object getOpenAgentPolicy() {
                return this.openAgentPolicy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOpaLimitCpu() != null) {
                    data.set("opaLimitCpu", om.valueToTree(this.getOpaLimitCpu()));
                }
                if (this.getOpaLimitMemory() != null) {
                    data.set("opaLimitMemory", om.valueToTree(this.getOpaLimitMemory()));
                }
                if (this.getOpaLogLevel() != null) {
                    data.set("opaLogLevel", om.valueToTree(this.getOpaLogLevel()));
                }
                if (this.getOpaRequestCpu() != null) {
                    data.set("opaRequestCpu", om.valueToTree(this.getOpaRequestCpu()));
                }
                if (this.getOpaRequestMemory() != null) {
                    data.set("opaRequestMemory", om.valueToTree(this.getOpaRequestMemory()));
                }
                if (this.getOpenAgentPolicy() != null) {
                    data.set("openAgentPolicy", om.valueToTree(this.getOpenAgentPolicy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OPAProperty.Jsii$Proxy that = (OPAProperty.Jsii$Proxy) o;

                if (this.opaLimitCpu != null ? !this.opaLimitCpu.equals(that.opaLimitCpu) : that.opaLimitCpu != null) return false;
                if (this.opaLimitMemory != null ? !this.opaLimitMemory.equals(that.opaLimitMemory) : that.opaLimitMemory != null) return false;
                if (this.opaLogLevel != null ? !this.opaLogLevel.equals(that.opaLogLevel) : that.opaLogLevel != null) return false;
                if (this.opaRequestCpu != null ? !this.opaRequestCpu.equals(that.opaRequestCpu) : that.opaRequestCpu != null) return false;
                if (this.opaRequestMemory != null ? !this.opaRequestMemory.equals(that.opaRequestMemory) : that.opaRequestMemory != null) return false;
                return this.openAgentPolicy != null ? this.openAgentPolicy.equals(that.openAgentPolicy) : that.openAgentPolicy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.opaLimitCpu != null ? this.opaLimitCpu.hashCode() : 0;
                result = 31 * result + (this.opaLimitMemory != null ? this.opaLimitMemory.hashCode() : 0);
                result = 31 * result + (this.opaLogLevel != null ? this.opaLogLevel.hashCode() : 0);
                result = 31 * result + (this.opaRequestCpu != null ? this.opaRequestCpu.hashCode() : 0);
                result = 31 * result + (this.opaRequestMemory != null ? this.opaRequestMemory.hashCode() : 0);
                result = 31 * result + (this.openAgentPolicy != null ? this.openAgentPolicy.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.asm.$Module.class, fqn = "@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty")
    @software.amazon.jsii.Jsii.Proxy(ProxyProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ProxyProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getClusterDomain() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProxyLimitCpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProxyLimitMemory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProxyRequestCpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProxyRequestMemory() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ProxyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ProxyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ProxyProperty> {
            java.lang.Object clusterDomain;
            java.lang.Object proxyLimitCpu;
            java.lang.Object proxyLimitMemory;
            java.lang.Object proxyRequestCpu;
            java.lang.Object proxyRequestMemory;

            /**
             * Sets the value of {@link ProxyProperty#getClusterDomain}
             * @param clusterDomain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterDomain(java.lang.String clusterDomain) {
                this.clusterDomain = clusterDomain;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getClusterDomain}
             * @param clusterDomain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterDomain(com.aliyun.ros.cdk.core.IResolvable clusterDomain) {
                this.clusterDomain = clusterDomain;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getProxyLimitCpu}
             * @param proxyLimitCpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyLimitCpu(java.lang.String proxyLimitCpu) {
                this.proxyLimitCpu = proxyLimitCpu;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getProxyLimitCpu}
             * @param proxyLimitCpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyLimitCpu(com.aliyun.ros.cdk.core.IResolvable proxyLimitCpu) {
                this.proxyLimitCpu = proxyLimitCpu;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getProxyLimitMemory}
             * @param proxyLimitMemory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyLimitMemory(java.lang.String proxyLimitMemory) {
                this.proxyLimitMemory = proxyLimitMemory;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getProxyLimitMemory}
             * @param proxyLimitMemory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyLimitMemory(com.aliyun.ros.cdk.core.IResolvable proxyLimitMemory) {
                this.proxyLimitMemory = proxyLimitMemory;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getProxyRequestCpu}
             * @param proxyRequestCpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyRequestCpu(java.lang.String proxyRequestCpu) {
                this.proxyRequestCpu = proxyRequestCpu;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getProxyRequestCpu}
             * @param proxyRequestCpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyRequestCpu(com.aliyun.ros.cdk.core.IResolvable proxyRequestCpu) {
                this.proxyRequestCpu = proxyRequestCpu;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getProxyRequestMemory}
             * @param proxyRequestMemory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyRequestMemory(java.lang.String proxyRequestMemory) {
                this.proxyRequestMemory = proxyRequestMemory;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProperty#getProxyRequestMemory}
             * @param proxyRequestMemory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyRequestMemory(com.aliyun.ros.cdk.core.IResolvable proxyRequestMemory) {
                this.proxyRequestMemory = proxyRequestMemory;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ProxyProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ProxyProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ProxyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProxyProperty {
            private final java.lang.Object clusterDomain;
            private final java.lang.Object proxyLimitCpu;
            private final java.lang.Object proxyLimitMemory;
            private final java.lang.Object proxyRequestCpu;
            private final java.lang.Object proxyRequestMemory;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.clusterDomain = software.amazon.jsii.Kernel.get(this, "clusterDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.proxyLimitCpu = software.amazon.jsii.Kernel.get(this, "proxyLimitCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.proxyLimitMemory = software.amazon.jsii.Kernel.get(this, "proxyLimitMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.proxyRequestCpu = software.amazon.jsii.Kernel.get(this, "proxyRequestCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.proxyRequestMemory = software.amazon.jsii.Kernel.get(this, "proxyRequestMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.clusterDomain = builder.clusterDomain;
                this.proxyLimitCpu = builder.proxyLimitCpu;
                this.proxyLimitMemory = builder.proxyLimitMemory;
                this.proxyRequestCpu = builder.proxyRequestCpu;
                this.proxyRequestMemory = builder.proxyRequestMemory;
            }

            @Override
            public final java.lang.Object getClusterDomain() {
                return this.clusterDomain;
            }

            @Override
            public final java.lang.Object getProxyLimitCpu() {
                return this.proxyLimitCpu;
            }

            @Override
            public final java.lang.Object getProxyLimitMemory() {
                return this.proxyLimitMemory;
            }

            @Override
            public final java.lang.Object getProxyRequestCpu() {
                return this.proxyRequestCpu;
            }

            @Override
            public final java.lang.Object getProxyRequestMemory() {
                return this.proxyRequestMemory;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getClusterDomain() != null) {
                    data.set("clusterDomain", om.valueToTree(this.getClusterDomain()));
                }
                if (this.getProxyLimitCpu() != null) {
                    data.set("proxyLimitCpu", om.valueToTree(this.getProxyLimitCpu()));
                }
                if (this.getProxyLimitMemory() != null) {
                    data.set("proxyLimitMemory", om.valueToTree(this.getProxyLimitMemory()));
                }
                if (this.getProxyRequestCpu() != null) {
                    data.set("proxyRequestCpu", om.valueToTree(this.getProxyRequestCpu()));
                }
                if (this.getProxyRequestMemory() != null) {
                    data.set("proxyRequestMemory", om.valueToTree(this.getProxyRequestMemory()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ProxyProperty.Jsii$Proxy that = (ProxyProperty.Jsii$Proxy) o;

                if (this.clusterDomain != null ? !this.clusterDomain.equals(that.clusterDomain) : that.clusterDomain != null) return false;
                if (this.proxyLimitCpu != null ? !this.proxyLimitCpu.equals(that.proxyLimitCpu) : that.proxyLimitCpu != null) return false;
                if (this.proxyLimitMemory != null ? !this.proxyLimitMemory.equals(that.proxyLimitMemory) : that.proxyLimitMemory != null) return false;
                if (this.proxyRequestCpu != null ? !this.proxyRequestCpu.equals(that.proxyRequestCpu) : that.proxyRequestCpu != null) return false;
                return this.proxyRequestMemory != null ? this.proxyRequestMemory.equals(that.proxyRequestMemory) : that.proxyRequestMemory == null;
            }

            @Override
            public final int hashCode() {
                int result = this.clusterDomain != null ? this.clusterDomain.hashCode() : 0;
                result = 31 * result + (this.proxyLimitCpu != null ? this.proxyLimitCpu.hashCode() : 0);
                result = 31 * result + (this.proxyLimitMemory != null ? this.proxyLimitMemory.hashCode() : 0);
                result = 31 * result + (this.proxyRequestCpu != null ? this.proxyRequestCpu.hashCode() : 0);
                result = 31 * result + (this.proxyRequestMemory != null ? this.proxyRequestMemory.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.asm.RosServiceMesh}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.asm.RosServiceMesh> {
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
        private final com.aliyun.ros.cdk.asm.RosServiceMeshProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.asm.RosServiceMeshProps.Builder();
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
         * @param vSwitches This parameter is required.
         */
        public Builder vSwitches(final java.util.List<? extends java.lang.Object> vSwitches) {
            this.props.vSwitches(vSwitches);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitches This parameter is required.
         */
        public Builder vSwitches(final com.aliyun.ros.cdk.core.IResolvable vSwitches) {
            this.props.vSwitches(vSwitches);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessLogEnabled This parameter is required.
         */
        public Builder accessLogEnabled(final java.lang.Boolean accessLogEnabled) {
            this.props.accessLogEnabled(accessLogEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessLogEnabled This parameter is required.
         */
        public Builder accessLogEnabled(final com.aliyun.ros.cdk.core.IResolvable accessLogEnabled) {
            this.props.accessLogEnabled(accessLogEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessLogFile This parameter is required.
         */
        public Builder accessLogFile(final java.lang.String accessLogFile) {
            this.props.accessLogFile(accessLogFile);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessLogFile This parameter is required.
         */
        public Builder accessLogFile(final com.aliyun.ros.cdk.core.IResolvable accessLogFile) {
            this.props.accessLogFile(accessLogFile);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessLogFormat This parameter is required.
         */
        public Builder accessLogFormat(final java.lang.String accessLogFormat) {
            this.props.accessLogFormat(accessLogFormat);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessLogFormat This parameter is required.
         */
        public Builder accessLogFormat(final com.aliyun.ros.cdk.core.IResolvable accessLogFormat) {
            this.props.accessLogFormat(accessLogFormat);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessLogProject This parameter is required.
         */
        public Builder accessLogProject(final java.lang.String accessLogProject) {
            this.props.accessLogProject(accessLogProject);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessLogProject This parameter is required.
         */
        public Builder accessLogProject(final com.aliyun.ros.cdk.core.IResolvable accessLogProject) {
            this.props.accessLogProject(accessLogProject);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessLogServiceEnabled This parameter is required.
         */
        public Builder accessLogServiceEnabled(final java.lang.Boolean accessLogServiceEnabled) {
            this.props.accessLogServiceEnabled(accessLogServiceEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessLogServiceEnabled This parameter is required.
         */
        public Builder accessLogServiceEnabled(final com.aliyun.ros.cdk.core.IResolvable accessLogServiceEnabled) {
            this.props.accessLogServiceEnabled(accessLogServiceEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessLogServiceHost This parameter is required.
         */
        public Builder accessLogServiceHost(final java.lang.String accessLogServiceHost) {
            this.props.accessLogServiceHost(accessLogServiceHost);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessLogServiceHost This parameter is required.
         */
        public Builder accessLogServiceHost(final com.aliyun.ros.cdk.core.IResolvable accessLogServiceHost) {
            this.props.accessLogServiceHost(accessLogServiceHost);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessLogServicePort This parameter is required.
         */
        public Builder accessLogServicePort(final java.lang.Number accessLogServicePort) {
            this.props.accessLogServicePort(accessLogServicePort);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessLogServicePort This parameter is required.
         */
        public Builder accessLogServicePort(final com.aliyun.ros.cdk.core.IResolvable accessLogServicePort) {
            this.props.accessLogServicePort(accessLogServicePort);
            return this;
        }

        /**
         * @return {@code this}
         * @param apiServerLoadBalancerSpec This parameter is required.
         */
        public Builder apiServerLoadBalancerSpec(final java.lang.String apiServerLoadBalancerSpec) {
            this.props.apiServerLoadBalancerSpec(apiServerLoadBalancerSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param apiServerLoadBalancerSpec This parameter is required.
         */
        public Builder apiServerLoadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable apiServerLoadBalancerSpec) {
            this.props.apiServerLoadBalancerSpec(apiServerLoadBalancerSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param apiServerPublicEip This parameter is required.
         */
        public Builder apiServerPublicEip(final java.lang.Boolean apiServerPublicEip) {
            this.props.apiServerPublicEip(apiServerPublicEip);
            return this;
        }
        /**
         * @return {@code this}
         * @param apiServerPublicEip This parameter is required.
         */
        public Builder apiServerPublicEip(final com.aliyun.ros.cdk.core.IResolvable apiServerPublicEip) {
            this.props.apiServerPublicEip(apiServerPublicEip);
            return this;
        }

        /**
         * @return {@code this}
         * @param auditProject This parameter is required.
         */
        public Builder auditProject(final java.lang.String auditProject) {
            this.props.auditProject(auditProject);
            return this;
        }
        /**
         * @return {@code this}
         * @param auditProject This parameter is required.
         */
        public Builder auditProject(final com.aliyun.ros.cdk.core.IResolvable auditProject) {
            this.props.auditProject(auditProject);
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
         * @param certChain This parameter is required.
         */
        public Builder certChain(final java.lang.String certChain) {
            this.props.certChain(certChain);
            return this;
        }
        /**
         * @return {@code this}
         * @param certChain This parameter is required.
         */
        public Builder certChain(final com.aliyun.ros.cdk.core.IResolvable certChain) {
            this.props.certChain(certChain);
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
         * @param clusterSpec This parameter is required.
         */
        public Builder clusterSpec(final java.lang.String clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterSpec This parameter is required.
         */
        public Builder clusterSpec(final com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param configSourceEnabled This parameter is required.
         */
        public Builder configSourceEnabled(final java.lang.Boolean configSourceEnabled) {
            this.props.configSourceEnabled(configSourceEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param configSourceEnabled This parameter is required.
         */
        public Builder configSourceEnabled(final com.aliyun.ros.cdk.core.IResolvable configSourceEnabled) {
            this.props.configSourceEnabled(configSourceEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param configSourceNacosId This parameter is required.
         */
        public Builder configSourceNacosId(final java.lang.String configSourceNacosId) {
            this.props.configSourceNacosId(configSourceNacosId);
            return this;
        }
        /**
         * @return {@code this}
         * @param configSourceNacosId This parameter is required.
         */
        public Builder configSourceNacosId(final com.aliyun.ros.cdk.core.IResolvable configSourceNacosId) {
            this.props.configSourceNacosId(configSourceNacosId);
            return this;
        }

        /**
         * @return {@code this}
         * @param controlPlaneLogEnabled This parameter is required.
         */
        public Builder controlPlaneLogEnabled(final java.lang.Boolean controlPlaneLogEnabled) {
            this.props.controlPlaneLogEnabled(controlPlaneLogEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param controlPlaneLogEnabled This parameter is required.
         */
        public Builder controlPlaneLogEnabled(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogEnabled) {
            this.props.controlPlaneLogEnabled(controlPlaneLogEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param controlPlaneLogProject This parameter is required.
         */
        public Builder controlPlaneLogProject(final java.lang.String controlPlaneLogProject) {
            this.props.controlPlaneLogProject(controlPlaneLogProject);
            return this;
        }
        /**
         * @return {@code this}
         * @param controlPlaneLogProject This parameter is required.
         */
        public Builder controlPlaneLogProject(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogProject) {
            this.props.controlPlaneLogProject(controlPlaneLogProject);
            return this;
        }

        /**
         * @return {@code this}
         * @param crAggregationEnabled This parameter is required.
         */
        public Builder crAggregationEnabled(final java.lang.Boolean crAggregationEnabled) {
            this.props.crAggregationEnabled(crAggregationEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param crAggregationEnabled This parameter is required.
         */
        public Builder crAggregationEnabled(final com.aliyun.ros.cdk.core.IResolvable crAggregationEnabled) {
            this.props.crAggregationEnabled(crAggregationEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param customizedPrometheus This parameter is required.
         */
        public Builder customizedPrometheus(final java.lang.Boolean customizedPrometheus) {
            this.props.customizedPrometheus(customizedPrometheus);
            return this;
        }
        /**
         * @return {@code this}
         * @param customizedPrometheus This parameter is required.
         */
        public Builder customizedPrometheus(final com.aliyun.ros.cdk.core.IResolvable customizedPrometheus) {
            this.props.customizedPrometheus(customizedPrometheus);
            return this;
        }

        /**
         * @return {@code this}
         * @param customizedZipkin This parameter is required.
         */
        public Builder customizedZipkin(final java.lang.Boolean customizedZipkin) {
            this.props.customizedZipkin(customizedZipkin);
            return this;
        }
        /**
         * @return {@code this}
         * @param customizedZipkin This parameter is required.
         */
        public Builder customizedZipkin(final com.aliyun.ros.cdk.core.IResolvable customizedZipkin) {
            this.props.customizedZipkin(customizedZipkin);
            return this;
        }

        /**
         * @return {@code this}
         * @param dnsProxyingEnabled This parameter is required.
         */
        public Builder dnsProxyingEnabled(final java.lang.Boolean dnsProxyingEnabled) {
            this.props.dnsProxyingEnabled(dnsProxyingEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsProxyingEnabled This parameter is required.
         */
        public Builder dnsProxyingEnabled(final com.aliyun.ros.cdk.core.IResolvable dnsProxyingEnabled) {
            this.props.dnsProxyingEnabled(dnsProxyingEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param dubboFilterEnabled This parameter is required.
         */
        public Builder dubboFilterEnabled(final java.lang.Boolean dubboFilterEnabled) {
            this.props.dubboFilterEnabled(dubboFilterEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param dubboFilterEnabled This parameter is required.
         */
        public Builder dubboFilterEnabled(final com.aliyun.ros.cdk.core.IResolvable dubboFilterEnabled) {
            this.props.dubboFilterEnabled(dubboFilterEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param edition This parameter is required.
         */
        public Builder edition(final java.lang.String edition) {
            this.props.edition(edition);
            return this;
        }
        /**
         * @return {@code this}
         * @param edition This parameter is required.
         */
        public Builder edition(final com.aliyun.ros.cdk.core.IResolvable edition) {
            this.props.edition(edition);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAcmg This parameter is required.
         */
        public Builder enableAcmg(final java.lang.Boolean enableAcmg) {
            this.props.enableAcmg(enableAcmg);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAcmg This parameter is required.
         */
        public Builder enableAcmg(final com.aliyun.ros.cdk.core.IResolvable enableAcmg) {
            this.props.enableAcmg(enableAcmg);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAmbient This parameter is required.
         */
        public Builder enableAmbient(final java.lang.Boolean enableAmbient) {
            this.props.enableAmbient(enableAmbient);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAmbient This parameter is required.
         */
        public Builder enableAmbient(final com.aliyun.ros.cdk.core.IResolvable enableAmbient) {
            this.props.enableAmbient(enableAmbient);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAudit This parameter is required.
         */
        public Builder enableAudit(final java.lang.Boolean enableAudit) {
            this.props.enableAudit(enableAudit);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAudit This parameter is required.
         */
        public Builder enableAudit(final com.aliyun.ros.cdk.core.IResolvable enableAudit) {
            this.props.enableAudit(enableAudit);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableCrHistory This parameter is required.
         */
        public Builder enableCrHistory(final java.lang.Boolean enableCrHistory) {
            this.props.enableCrHistory(enableCrHistory);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableCrHistory This parameter is required.
         */
        public Builder enableCrHistory(final com.aliyun.ros.cdk.core.IResolvable enableCrHistory) {
            this.props.enableCrHistory(enableCrHistory);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSdsServer This parameter is required.
         */
        public Builder enableSdsServer(final java.lang.Boolean enableSdsServer) {
            this.props.enableSdsServer(enableSdsServer);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSdsServer This parameter is required.
         */
        public Builder enableSdsServer(final com.aliyun.ros.cdk.core.IResolvable enableSdsServer) {
            this.props.enableSdsServer(enableSdsServer);
            return this;
        }

        /**
         * @return {@code this}
         * @param excludeInboundPorts This parameter is required.
         */
        public Builder excludeInboundPorts(final java.lang.String excludeInboundPorts) {
            this.props.excludeInboundPorts(excludeInboundPorts);
            return this;
        }
        /**
         * @return {@code this}
         * @param excludeInboundPorts This parameter is required.
         */
        public Builder excludeInboundPorts(final com.aliyun.ros.cdk.core.IResolvable excludeInboundPorts) {
            this.props.excludeInboundPorts(excludeInboundPorts);
            return this;
        }

        /**
         * @return {@code this}
         * @param excludeIpRanges This parameter is required.
         */
        public Builder excludeIpRanges(final java.lang.String excludeIpRanges) {
            this.props.excludeIpRanges(excludeIpRanges);
            return this;
        }
        /**
         * @return {@code this}
         * @param excludeIpRanges This parameter is required.
         */
        public Builder excludeIpRanges(final com.aliyun.ros.cdk.core.IResolvable excludeIpRanges) {
            this.props.excludeIpRanges(excludeIpRanges);
            return this;
        }

        /**
         * @return {@code this}
         * @param excludeOutboundPorts This parameter is required.
         */
        public Builder excludeOutboundPorts(final java.lang.String excludeOutboundPorts) {
            this.props.excludeOutboundPorts(excludeOutboundPorts);
            return this;
        }
        /**
         * @return {@code this}
         * @param excludeOutboundPorts This parameter is required.
         */
        public Builder excludeOutboundPorts(final com.aliyun.ros.cdk.core.IResolvable excludeOutboundPorts) {
            this.props.excludeOutboundPorts(excludeOutboundPorts);
            return this;
        }

        /**
         * @return {@code this}
         * @param existingCaCert This parameter is required.
         */
        public Builder existingCaCert(final java.lang.String existingCaCert) {
            this.props.existingCaCert(existingCaCert);
            return this;
        }
        /**
         * @return {@code this}
         * @param existingCaCert This parameter is required.
         */
        public Builder existingCaCert(final com.aliyun.ros.cdk.core.IResolvable existingCaCert) {
            this.props.existingCaCert(existingCaCert);
            return this;
        }

        /**
         * @return {@code this}
         * @param existingCaKey This parameter is required.
         */
        public Builder existingCaKey(final java.lang.String existingCaKey) {
            this.props.existingCaKey(existingCaKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param existingCaKey This parameter is required.
         */
        public Builder existingCaKey(final com.aliyun.ros.cdk.core.IResolvable existingCaKey) {
            this.props.existingCaKey(existingCaKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param existingCaType This parameter is required.
         */
        public Builder existingCaType(final java.lang.String existingCaType) {
            this.props.existingCaType(existingCaType);
            return this;
        }
        /**
         * @return {@code this}
         * @param existingCaType This parameter is required.
         */
        public Builder existingCaType(final com.aliyun.ros.cdk.core.IResolvable existingCaType) {
            this.props.existingCaType(existingCaType);
            return this;
        }

        /**
         * @return {@code this}
         * @param existingRootCaCert This parameter is required.
         */
        public Builder existingRootCaCert(final java.lang.String existingRootCaCert) {
            this.props.existingRootCaCert(existingRootCaCert);
            return this;
        }
        /**
         * @return {@code this}
         * @param existingRootCaCert This parameter is required.
         */
        public Builder existingRootCaCert(final com.aliyun.ros.cdk.core.IResolvable existingRootCaCert) {
            this.props.existingRootCaCert(existingRootCaCert);
            return this;
        }

        /**
         * @return {@code this}
         * @param existingRootCaKey This parameter is required.
         */
        public Builder existingRootCaKey(final java.lang.String existingRootCaKey) {
            this.props.existingRootCaKey(existingRootCaKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param existingRootCaKey This parameter is required.
         */
        public Builder existingRootCaKey(final com.aliyun.ros.cdk.core.IResolvable existingRootCaKey) {
            this.props.existingRootCaKey(existingRootCaKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param filterGatewayClusterConfig This parameter is required.
         */
        public Builder filterGatewayClusterConfig(final java.lang.Boolean filterGatewayClusterConfig) {
            this.props.filterGatewayClusterConfig(filterGatewayClusterConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param filterGatewayClusterConfig This parameter is required.
         */
        public Builder filterGatewayClusterConfig(final com.aliyun.ros.cdk.core.IResolvable filterGatewayClusterConfig) {
            this.props.filterGatewayClusterConfig(filterGatewayClusterConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param gatewayApiEnabled This parameter is required.
         */
        public Builder gatewayApiEnabled(final java.lang.Boolean gatewayApiEnabled) {
            this.props.gatewayApiEnabled(gatewayApiEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param gatewayApiEnabled This parameter is required.
         */
        public Builder gatewayApiEnabled(final com.aliyun.ros.cdk.core.IResolvable gatewayApiEnabled) {
            this.props.gatewayApiEnabled(gatewayApiEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param guestCluster This parameter is required.
         */
        public Builder guestCluster(final java.lang.String guestCluster) {
            this.props.guestCluster(guestCluster);
            return this;
        }
        /**
         * @return {@code this}
         * @param guestCluster This parameter is required.
         */
        public Builder guestCluster(final com.aliyun.ros.cdk.core.IResolvable guestCluster) {
            this.props.guestCluster(guestCluster);
            return this;
        }

        /**
         * @return {@code this}
         * @param includeIpRanges This parameter is required.
         */
        public Builder includeIpRanges(final java.lang.String includeIpRanges) {
            this.props.includeIpRanges(includeIpRanges);
            return this;
        }
        /**
         * @return {@code this}
         * @param includeIpRanges This parameter is required.
         */
        public Builder includeIpRanges(final com.aliyun.ros.cdk.core.IResolvable includeIpRanges) {
            this.props.includeIpRanges(includeIpRanges);
            return this;
        }

        /**
         * @return {@code this}
         * @param istioVersion This parameter is required.
         */
        public Builder istioVersion(final java.lang.String istioVersion) {
            this.props.istioVersion(istioVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param istioVersion This parameter is required.
         */
        public Builder istioVersion(final com.aliyun.ros.cdk.core.IResolvable istioVersion) {
            this.props.istioVersion(istioVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param kialiEnabled This parameter is required.
         */
        public Builder kialiEnabled(final java.lang.Boolean kialiEnabled) {
            this.props.kialiEnabled(kialiEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param kialiEnabled This parameter is required.
         */
        public Builder kialiEnabled(final com.aliyun.ros.cdk.core.IResolvable kialiEnabled) {
            this.props.kialiEnabled(kialiEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param localityLbConf This parameter is required.
         */
        public Builder localityLbConf(final java.lang.String localityLbConf) {
            this.props.localityLbConf(localityLbConf);
            return this;
        }
        /**
         * @return {@code this}
         * @param localityLbConf This parameter is required.
         */
        public Builder localityLbConf(final com.aliyun.ros.cdk.core.IResolvable localityLbConf) {
            this.props.localityLbConf(localityLbConf);
            return this;
        }

        /**
         * @return {@code this}
         * @param localityLoadBalancing This parameter is required.
         */
        public Builder localityLoadBalancing(final java.lang.Boolean localityLoadBalancing) {
            this.props.localityLoadBalancing(localityLoadBalancing);
            return this;
        }
        /**
         * @return {@code this}
         * @param localityLoadBalancing This parameter is required.
         */
        public Builder localityLoadBalancing(final com.aliyun.ros.cdk.core.IResolvable localityLoadBalancing) {
            this.props.localityLoadBalancing(localityLoadBalancing);
            return this;
        }

        /**
         * @return {@code this}
         * @param mseEnabled This parameter is required.
         */
        public Builder mseEnabled(final java.lang.Boolean mseEnabled) {
            this.props.mseEnabled(mseEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param mseEnabled This parameter is required.
         */
        public Builder mseEnabled(final com.aliyun.ros.cdk.core.IResolvable mseEnabled) {
            this.props.mseEnabled(mseEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiBufferEnabled This parameter is required.
         */
        public Builder multiBufferEnabled(final java.lang.Boolean multiBufferEnabled) {
            this.props.multiBufferEnabled(multiBufferEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiBufferEnabled This parameter is required.
         */
        public Builder multiBufferEnabled(final com.aliyun.ros.cdk.core.IResolvable multiBufferEnabled) {
            this.props.multiBufferEnabled(multiBufferEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiBufferPollDelay This parameter is required.
         */
        public Builder multiBufferPollDelay(final java.lang.String multiBufferPollDelay) {
            this.props.multiBufferPollDelay(multiBufferPollDelay);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiBufferPollDelay This parameter is required.
         */
        public Builder multiBufferPollDelay(final com.aliyun.ros.cdk.core.IResolvable multiBufferPollDelay) {
            this.props.multiBufferPollDelay(multiBufferPollDelay);
            return this;
        }

        /**
         * @return {@code this}
         * @param mysqlFilterEnabled This parameter is required.
         */
        public Builder mysqlFilterEnabled(final java.lang.Boolean mysqlFilterEnabled) {
            this.props.mysqlFilterEnabled(mysqlFilterEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param mysqlFilterEnabled This parameter is required.
         */
        public Builder mysqlFilterEnabled(final com.aliyun.ros.cdk.core.IResolvable mysqlFilterEnabled) {
            this.props.mysqlFilterEnabled(mysqlFilterEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param opa This parameter is required.
         */
        public Builder opa(final com.aliyun.ros.cdk.core.IResolvable opa) {
            this.props.opa(opa);
            return this;
        }
        /**
         * @return {@code this}
         * @param opa This parameter is required.
         */
        public Builder opa(final com.aliyun.ros.cdk.asm.RosServiceMesh.OPAProperty opa) {
            this.props.opa(opa);
            return this;
        }

        /**
         * @return {@code this}
         * @param opaEnabled This parameter is required.
         */
        public Builder opaEnabled(final java.lang.Boolean opaEnabled) {
            this.props.opaEnabled(opaEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param opaEnabled This parameter is required.
         */
        public Builder opaEnabled(final com.aliyun.ros.cdk.core.IResolvable opaEnabled) {
            this.props.opaEnabled(opaEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param outboundTrafficPolicy This parameter is required.
         */
        public Builder outboundTrafficPolicy(final java.lang.String outboundTrafficPolicy) {
            this.props.outboundTrafficPolicy(outboundTrafficPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param outboundTrafficPolicy This parameter is required.
         */
        public Builder outboundTrafficPolicy(final com.aliyun.ros.cdk.core.IResolvable outboundTrafficPolicy) {
            this.props.outboundTrafficPolicy(outboundTrafficPolicy);
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
         * @param pilotLoadBalancerSpec This parameter is required.
         */
        public Builder pilotLoadBalancerSpec(final java.lang.String pilotLoadBalancerSpec) {
            this.props.pilotLoadBalancerSpec(pilotLoadBalancerSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param pilotLoadBalancerSpec This parameter is required.
         */
        public Builder pilotLoadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable pilotLoadBalancerSpec) {
            this.props.pilotLoadBalancerSpec(pilotLoadBalancerSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param pilotPublicEip This parameter is required.
         */
        public Builder pilotPublicEip(final java.lang.Boolean pilotPublicEip) {
            this.props.pilotPublicEip(pilotPublicEip);
            return this;
        }
        /**
         * @return {@code this}
         * @param pilotPublicEip This parameter is required.
         */
        public Builder pilotPublicEip(final com.aliyun.ros.cdk.core.IResolvable pilotPublicEip) {
            this.props.pilotPublicEip(pilotPublicEip);
            return this;
        }

        /**
         * @return {@code this}
         * @param playgroundScene This parameter is required.
         */
        public Builder playgroundScene(final java.lang.String playgroundScene) {
            this.props.playgroundScene(playgroundScene);
            return this;
        }
        /**
         * @return {@code this}
         * @param playgroundScene This parameter is required.
         */
        public Builder playgroundScene(final com.aliyun.ros.cdk.core.IResolvable playgroundScene) {
            this.props.playgroundScene(playgroundScene);
            return this;
        }

        /**
         * @return {@code this}
         * @param prometheusUrl This parameter is required.
         */
        public Builder prometheusUrl(final java.lang.String prometheusUrl) {
            this.props.prometheusUrl(prometheusUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param prometheusUrl This parameter is required.
         */
        public Builder prometheusUrl(final com.aliyun.ros.cdk.core.IResolvable prometheusUrl) {
            this.props.prometheusUrl(prometheusUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxy This parameter is required.
         */
        public Builder proxy(final com.aliyun.ros.cdk.core.IResolvable proxy) {
            this.props.proxy(proxy);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxy This parameter is required.
         */
        public Builder proxy(final com.aliyun.ros.cdk.asm.RosServiceMesh.ProxyProperty proxy) {
            this.props.proxy(proxy);
            return this;
        }

        /**
         * @return {@code this}
         * @param telemetry This parameter is required.
         */
        public Builder telemetry(final java.lang.Boolean telemetry) {
            this.props.telemetry(telemetry);
            return this;
        }
        /**
         * @return {@code this}
         * @param telemetry This parameter is required.
         */
        public Builder telemetry(final com.aliyun.ros.cdk.core.IResolvable telemetry) {
            this.props.telemetry(telemetry);
            return this;
        }

        /**
         * @return {@code this}
         * @param traceSampling This parameter is required.
         */
        public Builder traceSampling(final java.lang.Number traceSampling) {
            this.props.traceSampling(traceSampling);
            return this;
        }
        /**
         * @return {@code this}
         * @param traceSampling This parameter is required.
         */
        public Builder traceSampling(final com.aliyun.ros.cdk.core.IResolvable traceSampling) {
            this.props.traceSampling(traceSampling);
            return this;
        }

        /**
         * @return {@code this}
         * @param tracing This parameter is required.
         */
        public Builder tracing(final java.lang.Boolean tracing) {
            this.props.tracing(tracing);
            return this;
        }
        /**
         * @return {@code this}
         * @param tracing This parameter is required.
         */
        public Builder tracing(final com.aliyun.ros.cdk.core.IResolvable tracing) {
            this.props.tracing(tracing);
            return this;
        }

        /**
         * @return {@code this}
         * @param useExistingCa This parameter is required.
         */
        public Builder useExistingCa(final java.lang.Boolean useExistingCa) {
            this.props.useExistingCa(useExistingCa);
            return this;
        }
        /**
         * @return {@code this}
         * @param useExistingCa This parameter is required.
         */
        public Builder useExistingCa(final com.aliyun.ros.cdk.core.IResolvable useExistingCa) {
            this.props.useExistingCa(useExistingCa);
            return this;
        }

        /**
         * @return {@code this}
         * @param webAssemblyFilterEnabled This parameter is required.
         */
        public Builder webAssemblyFilterEnabled(final java.lang.Boolean webAssemblyFilterEnabled) {
            this.props.webAssemblyFilterEnabled(webAssemblyFilterEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param webAssemblyFilterEnabled This parameter is required.
         */
        public Builder webAssemblyFilterEnabled(final com.aliyun.ros.cdk.core.IResolvable webAssemblyFilterEnabled) {
            this.props.webAssemblyFilterEnabled(webAssemblyFilterEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.asm.RosServiceMesh}.
         */
        @Override
        public com.aliyun.ros.cdk.asm.RosServiceMesh build() {
            return new com.aliyun.ros.cdk.asm.RosServiceMesh(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
