package com.aliyun.ros.cdk.clickhouse.datasource;

/**
 * Represents a <code>DBCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.043Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.datasource.IDBCluster")
@software.amazon.jsii.Jsii.Proxy(IDBCluster.Jsii$Proxy.class)
public interface IDBCluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AliUid: Alibaba Cloud account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid();

    /**
     * Attribute Bid: The ID of the business process flow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid();

    /**
     * Attribute Category: Copy configuration, value description:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute CommodityCode: Buy Product Code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode();

    /**
     * Attribute ConnectionString: Connection string.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DBClusterId: Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId();

    /**
     * Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterIpArrayName();

    /**
     * Attribute DBClusterName: The cluster description information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterName();

    /**
     * Attribute DbClusterNetworkType: Network type.
     * <p>
     * Currently, only VPC is supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNetworkType();

    /**
     * Attribute DBClusterType: Instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterType();

    /**
     * Attribute DbNodeClass: Set the node type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass();

    /**
     * Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount();

    /**
     * Attribute DbNodeStorage: Single-node storage space.
     * <p>
     * Value range: 100 GB to 32000GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage();

    /**
     * Attribute EncryptionKey: Key management service KMS key ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKey();

    /**
     * Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionType();

    /**
     * Attribute Engine: Engine.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine();

    /**
     * Attribute EngineVersion: The engine version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion();

    /**
     * Attribute ExpireTime: The expiration time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime();

    /**
     * Attribute IsExpired: If the instance has expired.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsExpired();

    /**
     * Attribute LockMode: The lock mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode();

    /**
     * Attribute LockReason: Lock reason.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason();

    /**
     * Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime();

    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute Port: Connection port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort();

    /**
     * Attribute PublicConnectionString: A public IP address for the connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString();

    /**
     * Attribute PublicIpAddr: Public IP address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddr();

    /**
     * Attribute PublicPort: Public network port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute ScaleOutStatus: Scale state.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleOutStatus();

    /**
     * Attribute SecurityIps: The whitelist supports the following two formats:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps();

    /**
     * Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType();

    /**
     * Attribute SupportBackup: Support fallback scheme.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportBackup();

    /**
     * Attribute SupportHttpsPort: The system supports http port number.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportHttpsPort();

    /**
     * Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportMysqlPort();

    /**
     * Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportOss();

    /**
     * Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId();

    /**
     * Attribute VpcId: VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VpcIpAddr: VPC IP address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcIpAddr();

    /**
     * Attribute VSwitchId: Switch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: On behalf of the zone resource attribute field.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.DBClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.clickhouse.datasource.IDBCluster.Jsii$Default {
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
         * Attribute AliUid: Alibaba Cloud account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
            return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bid: The ID of the business process flow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
            return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: Copy configuration, value description:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommodityCode: Buy Product Code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionString: Connection string.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterId: Instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterIpArrayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterName: The cluster description information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbClusterNetworkType: Network type.
         * <p>
         * Currently, only VPC is supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterType: Instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeClass: Set the node type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeStorage: Single-node storage space.
         * <p>
         * Value range: 100 GB to 32000GB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionKey: Key management service KMS key ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKey() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionType() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: Engine.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineVersion: The engine version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The expiration time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsExpired: If the instance has expired.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsExpired() {
            return software.amazon.jsii.Kernel.get(this, "attrIsExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockMode: The lock mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockReason: Lock reason.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
            return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The paymen type of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Connection port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: A public IP address for the connection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddr: Public IP address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddr() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicPort: Public network port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleOutStatus: Scale state.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleOutStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleOutStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIps: The whitelist supports the following two formats:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportBackup: Support fallback scheme.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportBackup() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportBackup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportHttpsPort: The system supports http port number.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportHttpsPort() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportMysqlPort() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportMysqlPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportOss() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportOss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcIpAddr: VPC IP address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcIpAddr() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcIpAddr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: Switch ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: On behalf of the zone resource attribute field.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.DBClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.datasource.DBClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDBCluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDBCluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AliUid: Alibaba Cloud account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
            return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bid: The ID of the business process flow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
            return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: Copy configuration, value description:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommodityCode: Buy Product Code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionString: Connection string.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterId: Instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterIpArrayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterName: The cluster description information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbClusterNetworkType: Network type.
         * <p>
         * Currently, only VPC is supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterType: Instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeClass: Set the node type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeStorage: Single-node storage space.
         * <p>
         * Value range: 100 GB to 32000GB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionKey: Key management service KMS key ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKey() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionType() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: Engine.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineVersion: The engine version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The expiration time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsExpired: If the instance has expired.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsExpired() {
            return software.amazon.jsii.Kernel.get(this, "attrIsExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockMode: The lock mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockReason: Lock reason.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
            return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The paymen type of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Connection port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: A public IP address for the connection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddr: Public IP address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddr() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicPort: Public network port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleOutStatus: Scale state.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleOutStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleOutStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIps: The whitelist supports the following two formats:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportBackup: Support fallback scheme.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportBackup() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportBackup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportHttpsPort: The system supports http port number.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportHttpsPort() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportMysqlPort() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportMysqlPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportOss() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportOss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcIpAddr: VPC IP address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcIpAddr() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcIpAddr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: Switch ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: On behalf of the zone resource attribute field.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.DBClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.datasource.DBClusterProps.class));
        }
    }
}
