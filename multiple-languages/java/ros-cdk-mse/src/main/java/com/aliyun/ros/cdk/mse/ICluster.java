package com.aliyun.ros.cdk.mse;

/**
 * Represents a <code>Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.214Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.ICluster")
@software.amazon.jsii.Jsii.Proxy(ICluster.Jsii$Proxy.class)
public interface ICluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AclEntryList: The list of ACL entries.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntryList();

    /**
     * Attribute AclId: The ID of the ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId();

    /**
     * Attribute AppVersion: The version of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppVersion();

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute ClusterAliasName: The alias name of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterAliasName();

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute ClusterName: The name of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName();

    /**
     * Attribute ClusterSpecification: The specification of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpecification();

    /**
     * Attribute ClusterType: The type of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType();

    /**
     * Attribute ClusterVersion: The version of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterVersion();

    /**
     * Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigAuthEnabled();

    /**
     * Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigSecretEnabled();

    /**
     * Attribute ConnectionType: The connection type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionType();

    /**
     * Attribute Cpu: The number of CPU cores.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu();

    /**
     * Attribute DiskCapacity: The disk capacity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCapacity();

    /**
     * Attribute DiskType: The disk type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType();

    /**
     * Attribute HealthStatus: The health status of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthStatus();

    /**
     * Attribute InstanceCount: The number of instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount();

    /**
     * Attribute InstanceId: The ID of the cluster instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InternetAddress: The public network address of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAddress();

    /**
     * Attribute InternetDomain: The public network domain of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetDomain();

    /**
     * Attribute InternetPort: The public network port of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPort();

    /**
     * Attribute IntranetAddress: The intranet address of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetAddress();

    /**
     * Attribute IntranetDomain: The intranet domain of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetDomain();

    /**
     * Attribute IntranetPort: The intranet port of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetPort();

    /**
     * Attribute MCPEnabled: Whether to enable the MCP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMcpEnabled();

    /**
     * Attribute MemoryCapacity: The memory capacity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryCapacity();

    /**
     * Attribute MseVersion: The MSE version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMseVersion();

    /**
     * Attribute NetType: The network type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetType();

    /**
     * Attribute PayInfo: The payment information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayInfo();

    /**
     * Attribute PubNetworkFlow: The public network flow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubNetworkFlow();

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mse.ICluster.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AclEntryList: The list of ACL entries.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntryList() {
            return software.amazon.jsii.Kernel.get(this, "attrAclEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclId: The ID of the ACL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppVersion: The version of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAppVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterAliasName: The alias name of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterAliasName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: The ID of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterName: The name of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterSpecification: The specification of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpecification() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: The type of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterVersion: The version of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigAuthEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigAuthEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigSecretEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigSecretEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionType: The connection type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionType() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: The number of CPU cores.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskCapacity: The disk capacity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskType: The disk type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthStatus: The health status of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceCount: The number of instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the cluster instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetAddress: The public network address of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetDomain: The public network domain of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetPort: The public network port of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetAddress: The intranet address of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetDomain: The intranet domain of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetPort: The intranet port of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MCPEnabled: Whether to enable the MCP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMcpEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrMcpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemoryCapacity: The memory capacity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrMemoryCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MseVersion: The MSE version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMseVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrMseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetType: The network type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PayInfo: The payment information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrPayInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubNetworkFlow: The public network flow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubNetworkFlow() {
            return software.amazon.jsii.Kernel.get(this, "attrPubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the VSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.ClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AclEntryList: The list of ACL entries.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntryList() {
            return software.amazon.jsii.Kernel.get(this, "attrAclEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclId: The ID of the ACL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppVersion: The version of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAppVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterAliasName: The alias name of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterAliasName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: The ID of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterName: The name of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterSpecification: The specification of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpecification() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: The type of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterVersion: The version of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigAuthEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigAuthEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigSecretEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigSecretEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionType: The connection type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionType() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: The number of CPU cores.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskCapacity: The disk capacity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskType: The disk type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthStatus: The health status of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceCount: The number of instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the cluster instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetAddress: The public network address of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetDomain: The public network domain of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetPort: The public network port of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetAddress: The intranet address of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetDomain: The intranet domain of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetPort: The intranet port of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MCPEnabled: Whether to enable the MCP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMcpEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrMcpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemoryCapacity: The memory capacity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrMemoryCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MseVersion: The MSE version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMseVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrMseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetType: The network type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PayInfo: The payment information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrPayInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubNetworkFlow: The public network flow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubNetworkFlow() {
            return software.amazon.jsii.Kernel.get(this, "attrPubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the VSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.ClusterProps.class));
        }
    }
}
