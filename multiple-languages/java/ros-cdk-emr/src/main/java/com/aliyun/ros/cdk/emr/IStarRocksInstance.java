package com.aliyun.ros.cdk.emr;

/**
 * Represents a <code>StarRocksInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.194Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.IStarRocksInstance")
@software.amazon.jsii.Jsii.Proxy(IStarRocksInstance.Jsii$Proxy.class)
public interface IStarRocksInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AclId: Access control ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId();

    /**
     * Attribute Architecture: Architecture of StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitecture();

    /**
     * Attribute CreateTime: The creation time of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutoMinorVersionUpgrade();

    /**
     * Attribute EnabledAuditLoader: Whether enable audit loader.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnabledAuditLoader();

    /**
     * Attribute EnableSsl: Enable SSL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableSsl();

    /**
     * Attribute Encrypted: Whether encrypted.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted();

    /**
     * Attribute ExpireTime: StarRocks Instance expire time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime();

    /**
     * Attribute InstanceId: The ID of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: The name of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute IsolateLeader: Whether leader FE is isolated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsolateLeader();

    /**
     * Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsKeyId();

    /**
     * Attribute MaintainablePeriod: StarRocks Instance maintainable period.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainablePeriod();

    /**
     * Attribute MinorVersion: StarRocks Instance minor version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinorVersion();

    /**
     * Attribute MonitorType: Monitor Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorType();

    /**
     * Attribute OssLocation: OSS Location.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOssLocation();

    /**
     * Attribute PackageType: The package type of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType();

    /**
     * Attribute PayType: The pay type of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayType();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute RunMode: The run mode of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunMode();

    /**
     * Attribute RunningTime: StarRocks Instance running time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningTime();

    /**
     * Attribute SecurityGroupManaged: Whether security group is managed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupManaged();

    /**
     * Attribute SgId: Security Group ID of StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSgId();

    /**
     * Attribute Tags: Tag list of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Version: The version of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion();

    /**
     * Attribute VpcId: The VPC ID of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute Vswitches: The VSwitches info of the StarRocks instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitches();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.StarRocksInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.emr.IStarRocksInstance.Jsii$Default {
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
         * Attribute AclId: Access control ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Architecture: Architecture of StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitecture() {
            return software.amazon.jsii.Kernel.get(this, "attrArchitecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutoMinorVersionUpgrade() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableAutoMinorVersionUpgrade", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnabledAuditLoader: Whether enable audit loader.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnabledAuditLoader() {
            return software.amazon.jsii.Kernel.get(this, "attrEnabledAuditLoader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableSsl: Enable SSL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableSsl() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableSsl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Encrypted: Whether encrypted.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
            return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: StarRocks Instance expire time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsolateLeader: Whether leader FE is isolated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsolateLeader() {
            return software.amazon.jsii.Kernel.get(this, "attrIsolateLeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsKeyId() {
            return software.amazon.jsii.Kernel.get(this, "attrKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainablePeriod: StarRocks Instance maintainable period.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainablePeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainablePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinorVersion: StarRocks Instance minor version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MonitorType: Monitor Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorType() {
            return software.amazon.jsii.Kernel.get(this, "attrMonitorType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OssLocation: OSS Location.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOssLocation() {
            return software.amazon.jsii.Kernel.get(this, "attrOssLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PackageType: The package type of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType() {
            return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PayType: The pay type of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayType() {
            return software.amazon.jsii.Kernel.get(this, "attrPayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunMode: The run mode of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunMode() {
            return software.amazon.jsii.Kernel.get(this, "attrRunMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunningTime: StarRocks Instance running time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningTime() {
            return software.amazon.jsii.Kernel.get(this, "attrRunningTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupManaged: Whether security group is managed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SgId: Security Group ID of StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSgId() {
            return software.amazon.jsii.Kernel.get(this, "attrSgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tag list of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The version of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vswitches: The VSwitches info of the StarRocks instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitches() {
            return software.amazon.jsii.Kernel.get(this, "attrVswitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.StarRocksInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.StarRocksInstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IStarRocksInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IStarRocksInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AclId: Access control ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Architecture: Architecture of StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitecture() {
            return software.amazon.jsii.Kernel.get(this, "attrArchitecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutoMinorVersionUpgrade() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableAutoMinorVersionUpgrade", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnabledAuditLoader: Whether enable audit loader.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnabledAuditLoader() {
            return software.amazon.jsii.Kernel.get(this, "attrEnabledAuditLoader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableSsl: Enable SSL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableSsl() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableSsl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Encrypted: Whether encrypted.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
            return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: StarRocks Instance expire time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsolateLeader: Whether leader FE is isolated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsolateLeader() {
            return software.amazon.jsii.Kernel.get(this, "attrIsolateLeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsKeyId() {
            return software.amazon.jsii.Kernel.get(this, "attrKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainablePeriod: StarRocks Instance maintainable period.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainablePeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainablePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinorVersion: StarRocks Instance minor version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MonitorType: Monitor Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorType() {
            return software.amazon.jsii.Kernel.get(this, "attrMonitorType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OssLocation: OSS Location.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOssLocation() {
            return software.amazon.jsii.Kernel.get(this, "attrOssLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PackageType: The package type of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType() {
            return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PayType: The pay type of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayType() {
            return software.amazon.jsii.Kernel.get(this, "attrPayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunMode: The run mode of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunMode() {
            return software.amazon.jsii.Kernel.get(this, "attrRunMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunningTime: StarRocks Instance running time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningTime() {
            return software.amazon.jsii.Kernel.get(this, "attrRunningTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupManaged: Whether security group is managed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SgId: Security Group ID of StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSgId() {
            return software.amazon.jsii.Kernel.get(this, "attrSgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tag list of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The version of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vswitches: The VSwitches info of the StarRocks instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitches() {
            return software.amazon.jsii.Kernel.get(this, "attrVswitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.StarRocksInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.StarRocksInstanceProps.class));
        }
    }
}
