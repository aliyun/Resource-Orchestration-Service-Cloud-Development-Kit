package com.aliyun.ros.cdk.graphdatabase;

/**
 * Represents a <code>DbInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.634Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.graphdatabase.$Module.class, fqn = "@alicloud/ros-cdk-graphdatabase.IDbInstance")
@software.amazon.jsii.Jsii.Proxy(IDbInstance.Jsii$Proxy.class)
public interface IDbInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString();

    /**
     * Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CurrentMinorVersion: The current kernel image version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentMinorVersion();

    /**
     * Attribute DbInstanceCategory: The category of the db instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCategory();

    /**
     * Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCpu();

    /**
     * Attribute DbInstanceDescription: According to the practical example or notes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription();

    /**
     * Attribute DbInstanceId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId();

    /**
     * Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArray();

    /**
     * Attribute DbInstanceMemory: Instance memory, which is measured in MB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceMemory();

    /**
     * Attribute DbInstanceNetworkType: The network type of the db instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceNetworkType();

    /**
     * Attribute DbInstanceStorageType: Cloud Disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorageType();

    /**
     * Attribute DbInstanceType: The type of the db instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType();

    /**
     * Attribute DbNodeClass: The class of the db node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass();

    /**
     * Attribute DbNodeCount: The count of the db node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount();

    /**
     * Attribute DbNodeStorage: Instance storage space, which is measured in GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage();

    /**
     * Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion();

    /**
     * Attribute EcsSecurityGroupRelations: Security group information array.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsSecurityGroupRelations();

    /**
     * Attribute Expired: The expire status of the db instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpired();

    /**
     * Attribute ExpireTime: The instance after it expires time for subscription instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime();

    /**
     * Attribute LatestMinorVersion: The latest kernel image version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestMinorVersion();

    /**
     * Attribute LockMode: Instance lock state.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode();

    /**
     * Attribute LockReason: An instance is locked the reason.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason();

    /**
     * Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime();

    /**
     * Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute Port: Application Port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort();

    /**
     * Attribute PublicConnectionString: The public connection string ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString();

    /**
     * Attribute PublicPort: The public port ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort();

    /**
     * Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds();

    /**
     * Attribute ResourceGroupId: Resource Group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Tags: resource Tag group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcId: The vpc id of the db instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: The vpc switch id of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: ZoneId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.DbInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.graphdatabase.IDbInstance.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentMinorVersion: The current kernel image version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceCategory: The category of the db instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceDescription: According to the practical example or notes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArray() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceMemory: Instance memory, which is measured in MB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceNetworkType: The network type of the db instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceStorageType: Cloud Disk.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceType: The type of the db instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeClass: The class of the db node.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeCount: The count of the db node.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeStorage: Instance storage space, which is measured in GB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcsSecurityGroupRelations: Security group information array.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsSecurityGroupRelations() {
            return software.amazon.jsii.Kernel.get(this, "attrEcsSecurityGroupRelations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Expired: The expire status of the db instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpired() {
            return software.amazon.jsii.Kernel.get(this, "attrExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The instance after it expires time for subscription instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestMinorVersion: The latest kernel image version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockMode: Instance lock state.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockReason: An instance is locked the reason.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
            return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Application Port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: The public connection string ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicPort: The public port ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: Resource Group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: resource Tag group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The vpc id of the db instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The vpc switch id of the resource.
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.DbInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.graphdatabase.DbInstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDbInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDbInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentMinorVersion: The current kernel image version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceCategory: The category of the db instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceDescription: According to the practical example or notes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArray() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceMemory: Instance memory, which is measured in MB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceNetworkType: The network type of the db instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceStorageType: Cloud Disk.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceType: The type of the db instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeClass: The class of the db node.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeCount: The count of the db node.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbNodeStorage: Instance storage space, which is measured in GB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcsSecurityGroupRelations: Security group information array.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsSecurityGroupRelations() {
            return software.amazon.jsii.Kernel.get(this, "attrEcsSecurityGroupRelations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Expired: The expire status of the db instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpired() {
            return software.amazon.jsii.Kernel.get(this, "attrExpired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The instance after it expires time for subscription instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestMinorVersion: The latest kernel image version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockMode: Instance lock state.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockReason: An instance is locked the reason.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
            return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Application Port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: The public connection string ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicPort: The public port ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: Resource Group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: resource Tag group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The vpc id of the db instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The vpc switch id of the resource.
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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.graphdatabase.DbInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.graphdatabase.DbInstanceProps.class));
        }
    }
}
