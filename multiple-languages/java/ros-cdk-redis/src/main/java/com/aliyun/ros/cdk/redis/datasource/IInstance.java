package com.aliyun.ros.cdk.redis.datasource;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.093Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.datasource.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ArchitectureType: Architecture type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitectureType();

    /**
     * Attribute Bandwidth: Bandwidth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute Capacity: Capacity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCapacity();

    /**
     * Attribute CloudType: Cloud category.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCloudType();

    /**
     * Attribute Config: Config.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig();

    /**
     * Attribute ConnectionDomain: Connection domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDomain();

    /**
     * Attribute CreateTime: Create time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DBInstanceId: Database instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId();

    /**
     * Attribute DBInstanceName: Instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceName();

    /**
     * Attribute EndTime: End time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime();

    /**
     * Attribute EngineVersion: Engine version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion();

    /**
     * Attribute HasRenewChangeOrder: Has renew change order.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasRenewChangeOrder();

    /**
     * Attribute InstanceClass: Instance class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass();

    /**
     * Attribute InstanceReleaseProtection: Instance release protection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceReleaseProtection();

    /**
     * Attribute InstanceType: Instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute IsRds: is RDS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsRds();

    /**
     * Attribute MaintainEndTime: Maintain end time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime();

    /**
     * Attribute MaintainStartTime: Maintain start time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime();

    /**
     * Attribute NetworkType: Network type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType();

    /**
     * Attribute PackageType: Package type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType();

    /**
     * Attribute PaymentType: Payment type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute Port: Port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort();

    /**
     * Attribute PrivateIp: Private IP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp();

    /**
     * Attribute Qps: QPS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQps();

    /**
     * Attribute ReadOnlyCount: The number of read-only nodes.
     * <p>
     * This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyCount();

    /**
     * Attribute ReplacateId: Replacate id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplacateId();

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecondaryZoneId: The ID of the standby zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryZoneId();

    /**
     * Attribute SecurityGroupId: Security group id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId();

    /**
     * Attribute SecurityIpGroupAttribute: Security IP group attribute.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupAttribute();

    /**
     * Attribute SecurityIpGroupName: Security IP group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupName();

    /**
     * Attribute SecurityIps: Security IPs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps();

    /**
     * Attribute ShardCount: The number of slices.
     * <p>
     * This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShardCount();

    /**
     * Attribute Tags: Tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcAuthMode: Vpc auth mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAuthMode();

    /**
     * Attribute VpcCloudInstanceId: Vpc cloud instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId();

    /**
     * Attribute VpcId: Vpc id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: Vswitch id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: Zone id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.redis.datasource.IInstance.Jsii$Default {
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
         * Attribute ArchitectureType: Architecture type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitectureType() {
            return software.amazon.jsii.Kernel.get(this, "attrArchitectureType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: Bandwidth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Capacity: Capacity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CloudType: Cloud category.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCloudType() {
            return software.amazon.jsii.Kernel.get(this, "attrCloudType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Config: Config.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionDomain: Connection domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Create time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: Database instance id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceName: Instance name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTime: End time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineVersion: Engine version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HasRenewChangeOrder: Has renew change order.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasRenewChangeOrder() {
            return software.amazon.jsii.Kernel.get(this, "attrHasRenewChangeOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceClass: Instance class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceReleaseProtection: Instance release protection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceReleaseProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceReleaseProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: Instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsRds: is RDS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsRds() {
            return software.amazon.jsii.Kernel.get(this, "attrIsRds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainEndTime: Maintain end time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainStartTime: Maintain start time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: Network type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PackageType: Package type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType() {
            return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Payment type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIp: Private IP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Qps: QPS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQps() {
            return software.amazon.jsii.Kernel.get(this, "attrQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadOnlyCount: The number of read-only nodes.
         * <p>
         * This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyCount() {
            return software.amazon.jsii.Kernel.get(this, "attrReadOnlyCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplacateId: Replacate id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplacateId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplacateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: Resource group id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryZoneId: The ID of the standby zone.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: Security group id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpGroupAttribute: Security IP group attribute.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupAttribute() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpGroupName: Security IP group name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIps: Security IPs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShardCount: The number of slices.
         * <p>
         * This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShardCount() {
            return software.amazon.jsii.Kernel.get(this, "attrShardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcAuthMode: Vpc auth mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAuthMode() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcAuthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: Vpc cloud instance id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: Vpc id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: Vswitch id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: Zone id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.datasource.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ArchitectureType: Architecture type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitectureType() {
            return software.amazon.jsii.Kernel.get(this, "attrArchitectureType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: Bandwidth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Capacity: Capacity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CloudType: Cloud category.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCloudType() {
            return software.amazon.jsii.Kernel.get(this, "attrCloudType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Config: Config.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionDomain: Connection domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Create time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: Database instance id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceName: Instance name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EndTime: End time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineVersion: Engine version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HasRenewChangeOrder: Has renew change order.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHasRenewChangeOrder() {
            return software.amazon.jsii.Kernel.get(this, "attrHasRenewChangeOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceClass: Instance class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceReleaseProtection: Instance release protection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceReleaseProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceReleaseProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: Instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsRds: is RDS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsRds() {
            return software.amazon.jsii.Kernel.get(this, "attrIsRds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainEndTime: Maintain end time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainStartTime: Maintain start time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: Network type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PackageType: Package type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType() {
            return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Payment type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: Port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIp: Private IP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Qps: QPS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQps() {
            return software.amazon.jsii.Kernel.get(this, "attrQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadOnlyCount: The number of read-only nodes.
         * <p>
         * This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyCount() {
            return software.amazon.jsii.Kernel.get(this, "attrReadOnlyCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplacateId: Replacate id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplacateId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplacateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: Resource group id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryZoneId: The ID of the standby zone.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: Security group id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpGroupAttribute: Security IP group attribute.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupAttribute() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpGroupName: Security IP group name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIps: Security IPs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShardCount: The number of slices.
         * <p>
         * This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShardCount() {
            return software.amazon.jsii.Kernel.get(this, "attrShardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcAuthMode: Vpc auth mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAuthMode() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcAuthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: Vpc cloud instance id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: Vpc id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: Vswitch id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: Zone id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.datasource.InstanceProps.class));
        }
    }
}
