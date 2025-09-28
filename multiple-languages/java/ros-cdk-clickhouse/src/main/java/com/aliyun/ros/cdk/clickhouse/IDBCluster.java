package com.aliyun.ros.cdk.clickhouse;

/**
 * Represents a <code>DBCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.006Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.IDBCluster")
@software.amazon.jsii.Jsii.Proxy(IDBCluster.Jsii$Proxy.class)
public interface IDBCluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AliUid: AliUid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid();

    /**
     * Attribute Bid: BusinessID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid();

    /**
     * Attribute Category: The edition of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute CommodityCode: Product Code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode();

    /**
     * Attribute ConnectionString: ConnectionString.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString();

    /**
     * Attribute DBClusterDescription: The description of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterDescription();

    /**
     * Attribute DBClusterId: The id of DBCluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId();

    /**
     * Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNetworkType();

    /**
     * Attribute DBClusterType: The specification of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterType();

    /**
     * Attribute DBClusterVersion: Version, value:  19.15.2.2.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterVersion();

    /**
     * Attribute DBNodeClass: DBNodeClass.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass();

    /**
     * Attribute DBNodeCount: The number of nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount();

    /**
     * Attribute DBNodeStorage: The storage capacity of a single node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage();

    /**
     * Attribute DbNodeStorageType: Instance node storage type.
     * <p>
     * Valid values:  cloud_essd, cloud_efficiency.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorageType();

    /**
     * Attribute EncryptionKey: KMS key ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKey();

    /**
     * Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionType();

    /**
     * Attribute Engine: Engine.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine();

    /**
     * Attribute EngineVersion: EngineVersion.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion();

    /**
     * Attribute IsExpired: IsExpired.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsExpired();

    /**
     * Attribute LockMode: LockMode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode();

    /**
     * Attribute LockReason: Reason for lock.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason();

    /**
     * Attribute PaymentType: PayType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod();

    /**
     * Attribute Port: Connection port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort();

    /**
     * Attribute PublicConnectionString: Internet connection address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString();

    /**
     * Attribute PublicPort: PublicPort.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort();

    /**
     * Attribute StorageType: StorageType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType();

    /**
     * Attribute VpcCloudInstanceId: VpcCloudInstanceId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId();

    /**
     * Attribute VpcId: VpcId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: VSwitchId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: ZoneId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.DBClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.clickhouse.IDBCluster.Jsii$Default {
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
         * Attribute AliUid: AliUid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
            return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bid: BusinessID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
            return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The edition of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommodityCode: Product Code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionString: ConnectionString.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterDescription: The description of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterId: The id of DBCluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterType: The specification of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterVersion: Version, value:  19.15.2.2.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeClass: DBNodeClass.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeCount: The number of nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeStorage: The storage capacity of a single node.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeStorageType: Instance node storage type.
         * <p>
         * Valid values:  cloud_essd, cloud_efficiency.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionKey: KMS key ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKey() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
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
         * Attribute EngineVersion: EngineVersion.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsExpired: IsExpired.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsExpired() {
            return software.amazon.jsii.Kernel.get(this, "attrIsExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockMode: LockMode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockReason: Reason for lock.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
            return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: PayType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Connection port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: Internet connection address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicPort: PublicPort.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageType: StorageType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: VpcCloudInstanceId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VpcId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: VSwitchId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: ZoneId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.DBClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.DBClusterProps.class));
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
         * Attribute AliUid: AliUid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
            return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bid: BusinessID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
            return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The edition of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommodityCode: Product Code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionString: ConnectionString.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterDescription: The description of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterId: The id of DBCluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterType: The specification of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterVersion: Version, value:  19.15.2.2.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeClass: DBNodeClass.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeCount: The number of nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeStorage: The storage capacity of a single node.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeStorageType: Instance node storage type.
         * <p>
         * Valid values:  cloud_essd, cloud_efficiency.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionKey: KMS key ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptionKey() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
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
         * Attribute EngineVersion: EngineVersion.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsExpired: IsExpired.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsExpired() {
            return software.amazon.jsii.Kernel.get(this, "attrIsExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockMode: LockMode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockReason: Reason for lock.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
            return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: PayType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Connection port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: Internet connection address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicPort: PublicPort.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageType: StorageType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: VpcCloudInstanceId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VpcId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: VSwitchId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: ZoneId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.DBClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.DBClusterProps.class));
        }
    }
}
