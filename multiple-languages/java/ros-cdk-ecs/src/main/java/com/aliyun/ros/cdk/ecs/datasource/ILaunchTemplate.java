package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>LaunchTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.628Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ILaunchTemplate")
@software.amazon.jsii.Jsii.Proxy(ILaunchTemplate.Jsii$Proxy.class)
public interface ILaunchTemplate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AutoReleaseTime: Automatic release time (UTC).
     * <p>
     * The format is: yyyy-MM-ddTHH:mm:ssZ.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime();

    /**
     * Attribute CreatedBy: The creator of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy();

    /**
     * Attribute CreateTime: The time when the instance launch template was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DataDisk: Data disk information list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataDisk();

    /**
     * Attribute DefaultVersionNumber: The default version number of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultVersionNumber();

    /**
     * Attribute DeletionProtection: Instance deletion protection attribute.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection();

    /**
     * Attribute DeploymentSetId: The ID of the deployment set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId();

    /**
     * Attribute Description: Instance description.
     * <p>
     * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute HostName: The hostname of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName();

    /**
     * Attribute ImageId: The ID of the image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId();

    /**
     * Attribute ImageOwnerAlias: The source of the image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOwnerAlias();

    /**
     * Attribute InstanceChargeType: The billing method of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType();

    /**
     * Attribute InstanceName: The name of the instance.
     * <p>
     * The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute InstanceType: The instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute InternetChargeType: Network billing method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType();

    /**
     * Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthIn();

    /**
     * Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network.
     * <p>
     * The unit is Mbit/s. The value range is 0~100.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthOut();

    /**
     * Attribute IoOptimized: Whether to optimize the instance for I/O.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoOptimized();

    /**
     * Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card.
     * <p>
     * The value range is 1 to 10.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressCount();

    /**
     * Attribute KeyPairName: The name of the key pair.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName();

    /**
     * Attribute LatestVersionNumber: The latest version number of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersionNumber();

    /**
     * Attribute LaunchTemplateId: The ID of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateId();

    /**
     * Attribute LaunchTemplateName: The name of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateName();

    /**
     * Attribute ModifiedTime: The time when the launch template was modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime();

    /**
     * Attribute NetworkInterface: The elastic network interfaces (ENIs).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterface();

    /**
     * Attribute NetworkType: The network type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType();

    /**
     * Attribute PasswordInherit: Whether to use the password preset by the image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPasswordInherit();

    /**
     * Attribute Period: The duration of the purchase of resources, in months.
     * <p>
     * When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod();

    /**
     * Attribute PrivateIpAddress: The private IP address of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress();

    /**
     * Attribute RamRoleName: The instance RAM role name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRamRoleName();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityEnhancementStrategy();

    /**
     * Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds();

    /**
     * Attribute SpotPriceLimit: Set the maximum price per hour for the instance.
     * <p>
     * The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotPriceLimit();

    /**
     * Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance.
     * <p>
     * This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotStrategy();

    /**
     * Attribute SystemDisk: System disk configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemDisk();

    /**
     * Attribute Tags: The tags of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TemplateResourceGroupId: Q.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateResourceGroupId();

    /**
     * Attribute TemplateTag: The tags of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateTag();

    /**
     * Attribute UserData: The user-defined data of the instance must be encoded in Base64.
     * <p>
     * The maximum original data is 16KB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData();

    /**
     * Attribute VersionDescription: Instance launch template version description.
     * <p>
     * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription();

    /**
     * Attribute VpcId: VPC Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: The ID of the zone to which the instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.LaunchTemplateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.ILaunchTemplate.Jsii$Default {
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
         * Attribute AutoReleaseTime: Automatic release time (UTC).
         * <p>
         * The format is: yyyy-MM-ddTHH:mm:ssZ.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The creator of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the instance launch template was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataDisk: Data disk information list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataDisk() {
            return software.amazon.jsii.Kernel.get(this, "attrDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultVersionNumber: The default version number of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultVersionNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Instance deletion protection attribute.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetId: The ID of the deployment set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Instance description.
         * <p>
         * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostName: The hostname of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The ID of the image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageOwnerAlias: The source of the image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOwnerAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrImageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceChargeType: The billing method of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the instance.
         * <p>
         * The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: The instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: Network billing method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthIn() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network.
         * <p>
         * The unit is Mbit/s. The value range is 0~100.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthOut() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IoOptimized: Whether to optimize the instance for I/O.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoOptimized() {
            return software.amazon.jsii.Kernel.get(this, "attrIoOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card.
         * <p>
         * The value range is 1 to 10.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressCount() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: The name of the key pair.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestVersionNumber: The latest version number of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersionNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateId: The ID of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateName: The name of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: The time when the launch template was modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkInterface: The elastic network interfaces (ENIs).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterface() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkInterface", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: The network type of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PasswordInherit: Whether to use the password preset by the image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPasswordInherit() {
            return software.amazon.jsii.Kernel.get(this, "attrPasswordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: The duration of the purchase of resources, in months.
         * <p>
         * When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIpAddress: The private IP address of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RamRoleName: The instance RAM role name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRamRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityEnhancementStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotPriceLimit: Set the maximum price per hour for the instance.
         * <p>
         * The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotPriceLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance.
         * <p>
         * This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SystemDisk: System disk configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemDisk() {
            return software.amazon.jsii.Kernel.get(this, "attrSystemDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateResourceGroupId: Q.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateTag: The tags of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateTag() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserData: The user-defined data of the instance must be encoded in Base64.
         * <p>
         * The maximum original data is 16KB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData() {
            return software.amazon.jsii.Kernel.get(this, "attrUserData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionDescription: Instance launch template version description.
         * <p>
         * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the vSwitch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone to which the instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.LaunchTemplateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.LaunchTemplateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ILaunchTemplate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ILaunchTemplate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AutoReleaseTime: Automatic release time (UTC).
         * <p>
         * The format is: yyyy-MM-ddTHH:mm:ssZ.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoReleaseTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedBy: The creator of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the instance launch template was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataDisk: Data disk information list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataDisk() {
            return software.amazon.jsii.Kernel.get(this, "attrDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultVersionNumber: The default version number of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultVersionNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Instance deletion protection attribute.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeploymentSetId: The ID of the deployment set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeploymentSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Instance description.
         * <p>
         * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostName: The hostname of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The ID of the image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageOwnerAlias: The source of the image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageOwnerAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrImageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceChargeType: The billing method of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the instance.
         * <p>
         * The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: The instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: Network billing method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthIn() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network.
         * <p>
         * The unit is Mbit/s. The value range is 0~100.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetMaxBandwidthOut() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IoOptimized: Whether to optimize the instance for I/O.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIoOptimized() {
            return software.amazon.jsii.Kernel.get(this, "attrIoOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card.
         * <p>
         * The value range is 1 to 10.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6AddressCount() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: The name of the key pair.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestVersionNumber: The latest version number of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestVersionNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateId: The ID of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateName: The name of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: The time when the launch template was modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkInterface: The elastic network interfaces (ENIs).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkInterface() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkInterface", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: The network type of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PasswordInherit: Whether to use the password preset by the image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPasswordInherit() {
            return software.amazon.jsii.Kernel.get(this, "attrPasswordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: The duration of the purchase of resources, in months.
         * <p>
         * When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIpAddress: The private IP address of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RamRoleName: The instance RAM role name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRamRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityEnhancementStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotPriceLimit: Set the maximum price per hour for the instance.
         * <p>
         * The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotPriceLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance.
         * <p>
         * This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpotStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SystemDisk: System disk configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemDisk() {
            return software.amazon.jsii.Kernel.get(this, "attrSystemDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateResourceGroupId: Q.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateTag: The tags of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateTag() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserData: The user-defined data of the instance must be encoded in Base64.
         * <p>
         * The maximum original data is 16KB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData() {
            return software.amazon.jsii.Kernel.get(this, "attrUserData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionDescription: Instance launch template version description.
         * <p>
         * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the vSwitch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone to which the instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.LaunchTemplateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.LaunchTemplateProps.class));
        }
    }
}
