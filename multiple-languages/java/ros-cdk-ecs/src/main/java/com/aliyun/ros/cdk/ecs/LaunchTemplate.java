package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::LaunchTemplate`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:09.487Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.LaunchTemplate")
public class LaunchTemplate extends com.aliyun.ros.cdk.core.Resource {

    protected LaunchTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LaunchTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public LaunchTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.LaunchTemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public LaunchTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.LaunchTemplateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DefaultVersionNumber: The default version number of launch template.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDefaultVersionNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultVersionNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LatestVersionNumber: The latest version number of launch template.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLatestVersionNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrLatestVersionNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LaunchTemplateId: The id of launch template.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LaunchTemplateName: The name of launch template.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLaunchTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.LaunchTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.LaunchTemplate> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.LaunchTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.LaunchTemplateProps.Builder();
        }

        /**
         * Property launchTemplateName: The name of launch template.
         * <p>
         * @return {@code this}
         * @param launchTemplateName Property launchTemplateName: The name of launch template. This parameter is required.
         */
        public Builder launchTemplateName(final java.lang.String launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }
        /**
         * Property launchTemplateName: The name of launch template.
         * <p>
         * @return {@code this}
         * @param launchTemplateName Property launchTemplateName: The name of launch template. This parameter is required.
         */
        public Builder launchTemplateName(final com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }

        /**
         * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
         * <p>
         * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * <p>
         * @return {@code this}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. This parameter is required.
         */
        public Builder autoReleaseTime(final java.lang.String autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }
        /**
         * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
         * <p>
         * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * <p>
         * @return {@code this}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time. This parameter is required.
         */
        public Builder autoReleaseTime(final com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }

        /**
         * Property deploymentSetId: The ID of the deployment set.
         * <p>
         * @return {@code this}
         * @param deploymentSetId Property deploymentSetId: The ID of the deployment set. This parameter is required.
         */
        public Builder deploymentSetId(final java.lang.String deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }
        /**
         * Property deploymentSetId: The ID of the deployment set.
         * <p>
         * @return {@code this}
         * @param deploymentSetId Property deploymentSetId: The ID of the deployment set. This parameter is required.
         */
        public Builder deploymentSetId(final com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }

        /**
         * Property description: Description of the instance, [2, 256] characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the instance, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the instance, [2, 256] characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the instance, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property diskMappings: Disk mappings to attach to instance.
         * <p>
         * Max support 16 disks.
         * <p>
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }
        /**
         * Property diskMappings: Disk mappings to attach to instance.
         * <p>
         * Max support 16 disks.
         * <p>
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * Property hostName: Host name of created ecs instance.
         * <p>
         * at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: Host name of created ecs instance. This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * Property hostName: Host name of created ecs instance.
         * <p>
         * at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: Host name of created ecs instance. This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * Property imageId: Image ID to create ecs instance.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: Image ID to create ecs instance.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property imageOwnerAlias: The source of the image.
         * <p>
         * Valid values:
         * system: public images provided by Alibaba Cloud.
         * self: your custom images.
         * others: shared images from other Alibaba Cloud accounts.
         * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are found, you can use these images without prior subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
         * <p>
         * @return {@code this}
         * @param imageOwnerAlias Property imageOwnerAlias: The source of the image. This parameter is required.
         */
        public Builder imageOwnerAlias(final java.lang.String imageOwnerAlias) {
            this.props.imageOwnerAlias(imageOwnerAlias);
            return this;
        }
        /**
         * Property imageOwnerAlias: The source of the image.
         * <p>
         * Valid values:
         * system: public images provided by Alibaba Cloud.
         * self: your custom images.
         * others: shared images from other Alibaba Cloud accounts.
         * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are found, you can use these images without prior subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
         * <p>
         * @return {@code this}
         * @param imageOwnerAlias Property imageOwnerAlias: The source of the image. This parameter is required.
         */
        public Builder imageOwnerAlias(final com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
            this.props.imageOwnerAlias(imageOwnerAlias);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports payment by credit. Otherwise, an InvalidPayMethod error is returned.
         * PostPaid: pay-as-you-go.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports payment by credit. Otherwise, an InvalidPayMethod error is returned.
         * PostPaid: pay-as-you-go.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Ecs instance supported instance type, make sure it should be correct. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Ecs instance supported instance type, make sure it should be correct. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second).
         * <p>
         * Range is [0,200].While the property is not 0, public ip will be assigned for instance.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second).
         * <p>
         * Range is [0,200].While the property is not 0, public ip will be assigned for instance.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property ioOptimized: The 'optimized' instance can provide better IO performance.
         * <p>
         * Support 'none' and 'optimized' only.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance. This parameter is required.
         */
        public Builder ioOptimized(final java.lang.String ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }
        /**
         * Property ioOptimized: The 'optimized' instance can provide better IO performance.
         * <p>
         * Support 'none' and 'optimized' only.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance. This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI.
         * <p>
         * Valid values: 1 to 10.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI. This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI.
         * <p>
         * Valid values: 1 to 10.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI. This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property networkInterfaces: Elastic network interfaces to be attached to instance.
         * <p>
         * @return {@code this}
         * @param networkInterfaces Property networkInterfaces: Elastic network interfaces to be attached to instance. This parameter is required.
         */
        public Builder networkInterfaces(final com.aliyun.ros.cdk.core.IResolvable networkInterfaces) {
            this.props.networkInterfaces(networkInterfaces);
            return this;
        }
        /**
         * Property networkInterfaces: Elastic network interfaces to be attached to instance.
         * <p>
         * @return {@code this}
         * @param networkInterfaces Property networkInterfaces: Elastic network interfaces to be attached to instance. This parameter is required.
         */
        public Builder networkInterfaces(final java.util.List<? extends java.lang.Object> networkInterfaces) {
            this.props.networkInterfaces(networkInterfaces);
            return this;
        }

        /**
         * Property networkType: Instance network type.
         * <p>
         * Support 'vpc' and 'classic'
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: Instance network type. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: Instance network type.
         * <p>
         * Support 'vpc' and 'classic'
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: Instance network type. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property passwordInherit: Specifies whether to use the password preset in the image.
         * <p>
         * Note When you use this parameter, leave Password empty and make sure that the selected image has a password preset.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image. This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * Property passwordInherit: Specifies whether to use the password preset in the image.
         * <p>
         * Note When you use this parameter, leave Password empty and make sure that the selected image has a password preset.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image. This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * Property period: The subscription period of the instance.
         * <p>
         * Unit: months.
         * This parameter is valid and required only when InstanceChargeType is set to PrePaid.
         * Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the instance. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the instance.
         * <p>
         * Unit: months.
         * This parameter is valid and required only when InstanceChargeType is set to PrePaid.
         * Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the instance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property privateIpAddress: The private IP address of the instance.
         * <p>
         * To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the instance. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: The private IP address of the instance.
         * <p>
         * To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the instance. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * Property ramRoleName: Instance RAM role name.
         * <p>
         * The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: Instance RAM role name. This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * Property ramRoleName: Instance RAM role name.
         * <p>
         * The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: Instance RAM role name. This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI). This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI). This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive".
         * <p>
         * @return {@code this}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive". This parameter is required.
         */
        public Builder securityEnhancementStrategy(final java.lang.String securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
            return this;
        }
        /**
         * Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive".
         * <p>
         * @return {@code this}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive". This parameter is required.
         */
        public Builder securityEnhancementStrategy(final com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
            return this;
        }

        /**
         * Property securityGroupId: Security group to create ecs instance.
         * <p>
         * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security group to create ecs instance.
         * <p>
         * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityGroupIds: The ID of security group list to which to assign the instance.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The ID of security group list to which to assign the instance. This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * Property securityGroupIds: The ID of security group list to which to assign the instance.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The ID of security group list to which to assign the instance. This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }

        /**
         * Property spotDuration: The protection period of the preemptible instance.
         * <p>
         * Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
         * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
         * If this parameter is set to 0, no protection period is configured for the preemptible instance.
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param spotDuration Property spotDuration: The protection period of the preemptible instance. This parameter is required.
         */
        public Builder spotDuration(final java.lang.Number spotDuration) {
            this.props.spotDuration(spotDuration);
            return this;
        }
        /**
         * Property spotDuration: The protection period of the preemptible instance.
         * <p>
         * Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
         * Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
         * If this parameter is set to 0, no protection period is configured for the preemptible instance.
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param spotDuration Property spotDuration: The protection period of the preemptible instance. This parameter is required.
         */
        public Builder spotDuration(final com.aliyun.ros.cdk.core.IResolvable spotDuration) {
            this.props.spotDuration(spotDuration);
            return this;
        }

        /**
         * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         * <p>
         * Three decimals is allowed at most.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.String spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         * <p>
         * Three decimals is allowed at most.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid. This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         * <p>
         * Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         * <p>
         * Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }
        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released.
         * <p>
         * Valid values:
         * true: releases the system disk when the instance is released.
         * false: does not release the system disk when the instance is released.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param systemDiskDeleteWithInstance Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released. This parameter is required.
         */
        public Builder systemDiskDeleteWithInstance(final java.lang.Boolean systemDiskDeleteWithInstance) {
            this.props.systemDiskDeleteWithInstance(systemDiskDeleteWithInstance);
            return this;
        }
        /**
         * Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released.
         * <p>
         * Valid values:
         * true: releases the system disk when the instance is released.
         * false: does not release the system disk when the instance is released.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param systemDiskDeleteWithInstance Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released. This parameter is required.
         */
        public Builder systemDiskDeleteWithInstance(final com.aliyun.ros.cdk.core.IResolvable systemDiskDeleteWithInstance) {
            this.props.systemDiskDeleteWithInstance(systemDiskDeleteWithInstance);
            return this;
        }

        /**
         * Property systemDiskDescription: Description of created system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk. This parameter is required.
         */
        public Builder systemDiskDescription(final java.lang.String systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }
        /**
         * Property systemDiskDescription: Description of created system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk. This parameter is required.
         */
        public Builder systemDiskDescription(final com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }

        /**
         * Property systemDiskDiskName: Name of created system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk. This parameter is required.
         */
        public Builder systemDiskDiskName(final java.lang.String systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }
        /**
         * Property systemDiskDiskName: Name of created system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk. This parameter is required.
         */
        public Builder systemDiskDiskName(final com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }

        /**
         * Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk.
         * <p>
         * Valid values:
         * PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
         * PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
         * PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
         * PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
         * <p>
         * @return {@code this}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk. This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final java.lang.String systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }
        /**
         * Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk.
         * <p>
         * Valid values:
         * PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
         * PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
         * PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
         * PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
         * <p>
         * @return {@code this}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk. This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }

        /**
         * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         * <p>
         * If you specify with your own image, make sure the system disk size bigger than image size.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }
        /**
         * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         * <p>
         * If you specify with your own image, make sure the system disk size bigger than image size.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB. This parameter is required.
         */
        public Builder systemDiskSize(final com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance, security group, disk and network interface.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance, security group, disk and network interface. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property templateResourceGroupId: The ID of the resource group to which to assign the launch template.
         * <p>
         * @return {@code this}
         * @param templateResourceGroupId Property templateResourceGroupId: The ID of the resource group to which to assign the launch template. This parameter is required.
         */
        public Builder templateResourceGroupId(final java.lang.String templateResourceGroupId) {
            this.props.templateResourceGroupId(templateResourceGroupId);
            return this;
        }
        /**
         * Property templateResourceGroupId: The ID of the resource group to which to assign the launch template.
         * <p>
         * @return {@code this}
         * @param templateResourceGroupId Property templateResourceGroupId: The ID of the resource group to which to assign the launch template. This parameter is required.
         */
        public Builder templateResourceGroupId(final com.aliyun.ros.cdk.core.IResolvable templateResourceGroupId) {
            this.props.templateResourceGroupId(templateResourceGroupId);
            return this;
        }

        /**
         * Property templateTags: Template tags to attach to launch template.
         * <p>
         * @return {@code this}
         * @param templateTags Property templateTags: Template tags to attach to launch template. This parameter is required.
         */
        public Builder templateTags(final com.aliyun.ros.cdk.core.IResolvable templateTags) {
            this.props.templateTags(templateTags);
            return this;
        }
        /**
         * Property templateTags: Template tags to attach to launch template.
         * <p>
         * @return {@code this}
         * @param templateTags Property templateTags: Template tags to attach to launch template. This parameter is required.
         */
        public Builder templateTags(final java.util.List<? extends java.lang.Object> templateTags) {
            this.props.templateTags(templateTags);
            return this;
        }

        /**
         * Property userData: User data to pass to instance.
         * <p>
         * [1, 16KB] characters.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User data to pass to instance. This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * Property userData: User data to pass to instance.
         * <p>
         * [1, 16KB] characters.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User data to pass to instance. This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * Property versionDescription: Description for version 1 of launch template.
         * <p>
         * @return {@code this}
         * @param versionDescription Property versionDescription: Description for version 1 of launch template. This parameter is required.
         */
        public Builder versionDescription(final java.lang.String versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }
        /**
         * Property versionDescription: Description for version 1 of launch template.
         * <p>
         * @return {@code this}
         * @param versionDescription Property versionDescription: Description for version 1 of launch template. This parameter is required.
         */
        public Builder versionDescription(final com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch Id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch Id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: Current zone to create the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Current zone to create the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Current zone to create the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Current zone to create the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.LaunchTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.LaunchTemplate build() {
            return new com.aliyun.ros.cdk.ecs.LaunchTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
