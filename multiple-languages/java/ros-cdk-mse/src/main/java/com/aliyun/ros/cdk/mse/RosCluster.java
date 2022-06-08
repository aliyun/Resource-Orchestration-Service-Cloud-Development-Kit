package com.aliyun.ros.cdk.mse;

/**
 * A ROS template type:  `ALIYUN::MSE::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:35.760Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosCluster")
public class RosCluster extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mse.RosCluster.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.RosClusterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclEntryList() {
        return software.amazon.jsii.Kernel.get(this, "attrAclEntryList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrAppVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterAliasName() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterAliasName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterName() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterSpecification() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterSpecification", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionType() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskCapacity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskType() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceCount() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetPort() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntranetAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntranetDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntranetPort() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemoryCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrMemoryCapacity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMseVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrMseVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPayInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrPayInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPubNetworkFlow() {
        return software.amazon.jsii.Kernel.get(this, "attrPubNetworkFlow", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterSpecification() {
        return software.amazon.jsii.Kernel.get(this, "clusterSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterSpecification(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterSpecification", java.util.Objects.requireNonNull(value, "clusterSpecification is required"));
    }

    /**
     */
    public void setClusterSpecification(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterSpecification", java.util.Objects.requireNonNull(value, "clusterSpecification is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterType() {
        return software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterType", java.util.Objects.requireNonNull(value, "clusterType is required"));
    }

    /**
     */
    public void setClusterType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterType", java.util.Objects.requireNonNull(value, "clusterType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterVersion() {
        return software.amazon.jsii.Kernel.get(this, "clusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterVersion", java.util.Objects.requireNonNull(value, "clusterVersion is required"));
    }

    /**
     */
    public void setClusterVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterVersion", java.util.Objects.requireNonNull(value, "clusterVersion is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceCount() {
        return software.amazon.jsii.Kernel.get(this, "instanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceCount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "instanceCount", java.util.Objects.requireNonNull(value, "instanceCount is required"));
    }

    /**
     */
    public void setInstanceCount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceCount", java.util.Objects.requireNonNull(value, "instanceCount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNetType() {
        return software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "netType", java.util.Objects.requireNonNull(value, "netType is required"));
    }

    /**
     */
    public void setNetType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "netType", java.util.Objects.requireNonNull(value, "netType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAcceptLanguage() {
        return software.amazon.jsii.Kernel.get(this, "acceptLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcceptLanguage(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acceptLanguage", value);
    }

    /**
     */
    public void setAcceptLanguage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acceptLanguage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAclEntryList() {
        return software.amazon.jsii.Kernel.get(this, "aclEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclEntryList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclEntryList", value);
    }

    /**
     */
    public void setAclEntryList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "aclEntryList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterAliasName() {
        return software.amazon.jsii.Kernel.get(this, "clusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterAliasName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterAliasName", value);
    }

    /**
     */
    public void setClusterAliasName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterAliasName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionType() {
        return software.amazon.jsii.Kernel.get(this, "connectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionType", value);
    }

    /**
     */
    public void setConnectionType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskType() {
        return software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "diskType", value);
    }

    /**
     */
    public void setDiskType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMseVersion() {
        return software.amazon.jsii.Kernel.get(this, "mseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMseVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mseVersion", value);
    }

    /**
     */
    public void setMseVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mseVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivateSlbSpecification() {
        return software.amazon.jsii.Kernel.get(this, "privateSlbSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivateSlbSpecification(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "privateSlbSpecification", value);
    }

    /**
     */
    public void setPrivateSlbSpecification(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privateSlbSpecification", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPubNetworkFlow() {
        return software.amazon.jsii.Kernel.get(this, "pubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPubNetworkFlow(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pubNetworkFlow", value);
    }

    /**
     */
    public void setPubNetworkFlow(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pubNetworkFlow", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPubSlbSpecification() {
        return software.amazon.jsii.Kernel.get(this, "pubSlbSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPubSlbSpecification(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pubSlbSpecification", value);
    }

    /**
     */
    public void setPubSlbSpecification(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pubSlbSpecification", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRequestPars() {
        return software.amazon.jsii.Kernel.get(this, "requestPars", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRequestPars(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "requestPars", value);
    }

    /**
     */
    public void setRequestPars(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "requestPars", value);
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.RosCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.RosCluster> {
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
        private final com.aliyun.ros.cdk.mse.RosClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.RosClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param clusterSpecification This parameter is required.
         */
        public Builder clusterSpecification(final java.lang.String clusterSpecification) {
            this.props.clusterSpecification(clusterSpecification);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterSpecification This parameter is required.
         */
        public Builder clusterSpecification(final com.aliyun.ros.cdk.core.IResolvable clusterSpecification) {
            this.props.clusterSpecification(clusterSpecification);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterVersion This parameter is required.
         */
        public Builder clusterVersion(final java.lang.String clusterVersion) {
            this.props.clusterVersion(clusterVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterVersion This parameter is required.
         */
        public Builder clusterVersion(final com.aliyun.ros.cdk.core.IResolvable clusterVersion) {
            this.props.clusterVersion(clusterVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceCount This parameter is required.
         */
        public Builder instanceCount(final java.lang.Number instanceCount) {
            this.props.instanceCount(instanceCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceCount This parameter is required.
         */
        public Builder instanceCount(final com.aliyun.ros.cdk.core.IResolvable instanceCount) {
            this.props.instanceCount(instanceCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param netType This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }
        /**
         * @return {@code this}
         * @param netType This parameter is required.
         */
        public Builder netType(final com.aliyun.ros.cdk.core.IResolvable netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * @return {@code this}
         * @param acceptLanguage This parameter is required.
         */
        public Builder acceptLanguage(final java.lang.String acceptLanguage) {
            this.props.acceptLanguage(acceptLanguage);
            return this;
        }
        /**
         * @return {@code this}
         * @param acceptLanguage This parameter is required.
         */
        public Builder acceptLanguage(final com.aliyun.ros.cdk.core.IResolvable acceptLanguage) {
            this.props.acceptLanguage(acceptLanguage);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclEntryList This parameter is required.
         */
        public Builder aclEntryList(final com.aliyun.ros.cdk.core.IResolvable aclEntryList) {
            this.props.aclEntryList(aclEntryList);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclEntryList This parameter is required.
         */
        public Builder aclEntryList(final java.util.List<? extends java.lang.Object> aclEntryList) {
            this.props.aclEntryList(aclEntryList);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterAliasName This parameter is required.
         */
        public Builder clusterAliasName(final java.lang.String clusterAliasName) {
            this.props.clusterAliasName(clusterAliasName);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterAliasName This parameter is required.
         */
        public Builder clusterAliasName(final com.aliyun.ros.cdk.core.IResolvable clusterAliasName) {
            this.props.clusterAliasName(clusterAliasName);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionType This parameter is required.
         */
        public Builder connectionType(final java.lang.String connectionType) {
            this.props.connectionType(connectionType);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionType This parameter is required.
         */
        public Builder connectionType(final com.aliyun.ros.cdk.core.IResolvable connectionType) {
            this.props.connectionType(connectionType);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskType This parameter is required.
         */
        public Builder diskType(final java.lang.String diskType) {
            this.props.diskType(diskType);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskType This parameter is required.
         */
        public Builder diskType(final com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.props.diskType(diskType);
            return this;
        }

        /**
         * @return {@code this}
         * @param mseVersion This parameter is required.
         */
        public Builder mseVersion(final java.lang.String mseVersion) {
            this.props.mseVersion(mseVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param mseVersion This parameter is required.
         */
        public Builder mseVersion(final com.aliyun.ros.cdk.core.IResolvable mseVersion) {
            this.props.mseVersion(mseVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param privateSlbSpecification This parameter is required.
         */
        public Builder privateSlbSpecification(final java.lang.String privateSlbSpecification) {
            this.props.privateSlbSpecification(privateSlbSpecification);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateSlbSpecification This parameter is required.
         */
        public Builder privateSlbSpecification(final com.aliyun.ros.cdk.core.IResolvable privateSlbSpecification) {
            this.props.privateSlbSpecification(privateSlbSpecification);
            return this;
        }

        /**
         * @return {@code this}
         * @param pubNetworkFlow This parameter is required.
         */
        public Builder pubNetworkFlow(final java.lang.String pubNetworkFlow) {
            this.props.pubNetworkFlow(pubNetworkFlow);
            return this;
        }
        /**
         * @return {@code this}
         * @param pubNetworkFlow This parameter is required.
         */
        public Builder pubNetworkFlow(final com.aliyun.ros.cdk.core.IResolvable pubNetworkFlow) {
            this.props.pubNetworkFlow(pubNetworkFlow);
            return this;
        }

        /**
         * @return {@code this}
         * @param pubSlbSpecification This parameter is required.
         */
        public Builder pubSlbSpecification(final java.lang.String pubSlbSpecification) {
            this.props.pubSlbSpecification(pubSlbSpecification);
            return this;
        }
        /**
         * @return {@code this}
         * @param pubSlbSpecification This parameter is required.
         */
        public Builder pubSlbSpecification(final com.aliyun.ros.cdk.core.IResolvable pubSlbSpecification) {
            this.props.pubSlbSpecification(pubSlbSpecification);
            return this;
        }

        /**
         * @return {@code this}
         * @param requestPars This parameter is required.
         */
        public Builder requestPars(final java.lang.String requestPars) {
            this.props.requestPars(requestPars);
            return this;
        }
        /**
         * @return {@code this}
         * @param requestPars This parameter is required.
         */
        public Builder requestPars(final com.aliyun.ros.cdk.core.IResolvable requestPars) {
            this.props.requestPars(requestPars);
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.mse.RosCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.RosCluster build() {
            return new com.aliyun.ros.cdk.mse.RosCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
