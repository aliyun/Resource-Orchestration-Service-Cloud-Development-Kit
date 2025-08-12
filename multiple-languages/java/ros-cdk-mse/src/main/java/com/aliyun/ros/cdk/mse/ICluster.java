package com.aliyun.ros.cdk.mse;

/**
 * Represents a <code>Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.658Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.ICluster")
@software.amazon.jsii.Jsii.Proxy(ICluster.Jsii$Proxy.class)
public interface ICluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntryList();

    /**
     * Attribute AclId: acl id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId();

    /**
     * Attribute AppVersion: app version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppVersion();

    /**
     * Attribute ClusterAliasName: cluster alias name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterAliasName();

    /**
     * Attribute ClusterId: cluster id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute ClusterName: cluster name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName();

    /**
     * Attribute ClusterSpecification: Cluster specifications.
     * <p>
     * Note the msversion requirements of the version parameter,
     * Optional parameters:
     * "MSE_ SC <em>1_2_60_c",
     * "MSE</em> SC <em>2_4_60_c",
     * "MSE</em> SC <em>4_8_60_c",
     * "MSE</em> SC <em>8_16_60_c",
     * "MSE</em> SC _16_32_60_c"
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpecification();

    /**
     * Attribute ClusterType: cluster type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType();

    /**
     * Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterVersion();

    /**
     * Attribute ConfigAuthEnabled: Whether the configuration supports it.
     * <p>
     * Valid values: true: false: not supported
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigAuthEnabled();

    /**
     * Attribute ConfigSecretEnabled: Whether the configuration password takes effect.
     * <p>
     * The value is as follows: true: valid false: not valid
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigSecretEnabled();

    /**
     * Attribute ConnectionType: network connect type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionType();

    /**
     * Attribute Cpu: cpu core size.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu();

    /**
     * Attribute DiskCapacity: disk capacity, unit: G.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCapacity();

    /**
     * Attribute DiskType: disk type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType();

    /**
     * Attribute HealthStatus: health status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthStatus();

    /**
     * Attribute InstanceCount: instance count.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount();

    /**
     * Attribute InstanceId: instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InternetAddress: internet address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAddress();

    /**
     * Attribute InternetDomain: internet domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetDomain();

    /**
     * Attribute InternetPort: internet port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPort();

    /**
     * Attribute IntranetAddress: intranet address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetAddress();

    /**
     * Attribute IntranetDomain: intranet domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetDomain();

    /**
     * Attribute IntranetPort: intranet port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetPort();

    /**
     * Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMcpEnabled();

    /**
     * Attribute MemoryCapacity: memory capacity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryCapacity();

    /**
     * Attribute MseVersion: Required, the value is as follows:.
     * <p>
     * -'mse_dev': indicates the development version.
     * -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMseVersion();

    /**
     * Attribute NetType: Network type (whether private network is enabled or not).
     * <p>
     * privatenet indicates that private network is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetType();

    /**
     * Attribute PayInfo: pay info.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayInfo();

    /**
     * Attribute PubNetworkFlow: Public network bandwidth.
     * <p>
     * If the bandwidth is greater than 0, the public network is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubNetworkFlow();

    /**
     * Attribute VpcId: vpc id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: switcher Id.
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
         * Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntryList() {
            return software.amazon.jsii.Kernel.get(this, "attrAclEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclId: acl id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppVersion: app version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAppVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterAliasName: cluster alias name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterAliasName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: cluster id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterName: cluster name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterSpecification: Cluster specifications.
         * <p>
         * Note the msversion requirements of the version parameter,
         * Optional parameters:
         * "MSE_ SC <em>1_2_60_c",
         * "MSE</em> SC <em>2_4_60_c",
         * "MSE</em> SC <em>4_8_60_c",
         * "MSE</em> SC <em>8_16_60_c",
         * "MSE</em> SC _16_32_60_c"
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpecification() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: cluster type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigAuthEnabled: Whether the configuration supports it.
         * <p>
         * Valid values: true: false: not supported
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigAuthEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigAuthEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigSecretEnabled: Whether the configuration password takes effect.
         * <p>
         * The value is as follows: true: valid false: not valid
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigSecretEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigSecretEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionType: network connect type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionType() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: cpu core size.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskCapacity: disk capacity, unit: G.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskType: disk type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthStatus: health status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceCount: instance count.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: instance id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetAddress: internet address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetDomain: internet domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetPort: internet port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetAddress: intranet address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetDomain: intranet domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetPort: intranet port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMcpEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrMcpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemoryCapacity: memory capacity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrMemoryCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MseVersion: Required, the value is as follows:.
         * <p>
         * -'mse_dev': indicates the development version.
         * -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMseVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrMseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetType: Network type (whether private network is enabled or not).
         * <p>
         * privatenet indicates that private network is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PayInfo: pay info.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrPayInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubNetworkFlow: Public network bandwidth.
         * <p>
         * If the bandwidth is greater than 0, the public network is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubNetworkFlow() {
            return software.amazon.jsii.Kernel.get(this, "attrPubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: vpc id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: switcher Id.
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
         * Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntryList() {
            return software.amazon.jsii.Kernel.get(this, "attrAclEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclId: acl id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppVersion: app version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAppVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterAliasName: cluster alias name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterAliasName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: cluster id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterName: cluster name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterSpecification: Cluster specifications.
         * <p>
         * Note the msversion requirements of the version parameter,
         * Optional parameters:
         * "MSE_ SC <em>1_2_60_c",
         * "MSE</em> SC <em>2_4_60_c",
         * "MSE</em> SC <em>4_8_60_c",
         * "MSE</em> SC <em>8_16_60_c",
         * "MSE</em> SC _16_32_60_c"
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpecification() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: cluster type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigAuthEnabled: Whether the configuration supports it.
         * <p>
         * Valid values: true: false: not supported
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigAuthEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigAuthEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigSecretEnabled: Whether the configuration password takes effect.
         * <p>
         * The value is as follows: true: valid false: not valid
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigSecretEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigSecretEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionType: network connect type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionType() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: cpu core size.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskCapacity: disk capacity, unit: G.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskType: disk type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskType() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthStatus: health status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceCount: instance count.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: instance id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetAddress: internet address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetDomain: internet domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetPort: internet port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetAddress: intranet address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetDomain: intranet domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetPort: intranet port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMcpEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrMcpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemoryCapacity: memory capacity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrMemoryCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MseVersion: Required, the value is as follows:.
         * <p>
         * -'mse_dev': indicates the development version.
         * -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMseVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrMseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetType: Network type (whether private network is enabled or not).
         * <p>
         * privatenet indicates that private network is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PayInfo: pay info.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrPayInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubNetworkFlow: Public network bandwidth.
         * <p>
         * If the bandwidth is greater than 0, the public network is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubNetworkFlow() {
            return software.amazon.jsii.Kernel.get(this, "attrPubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: vpc id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: switcher Id.
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
