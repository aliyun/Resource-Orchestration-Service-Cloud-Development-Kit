package com.aliyun.ros.cdk.ens;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:39.258Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew();

    /**
     * Attribute AutoRenewPeriod: The time period of auto renew.
     * <p>
     * it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewPeriod();

    /**
     * Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB.
     * <p>
     * If you specify with your own image, make sure the system disk size bigger than image size.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataDiskSize();

    /**
     * Attribute EnsRegionId: ENS Region Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnsRegionId();

    /**
     * Attribute HostName: The hostname of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName();

    /**
     * Attribute ImageId: Image ID to create ens instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId();

    /**
     * Attribute InstanceId: InstanceId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: Instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType();

    /**
     * Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpType();

    /**
     * Attribute KeyPairName: SSH key pair name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName();

    /**
     * Attribute PaymentType: Payment Type.only support value Subscription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute Period: Prepaid time period.
     * <p>
     * Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod();

    /**
     * Attribute PrivateIpAddress: Private IP for the instance created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress();

    /**
     * Attribute PrivateIps: Private IP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIps();

    /**
     * Attribute PublicIps: Public IP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIps();

    /**
     * Attribute Quantity: number of instances to create.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQuantity();

    /**
     * Attribute SystemDiskSize: Disk size of the system disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemDiskSize();

    /**
     * Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.
     * <p>
     * The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniqueSuffix();

    /**
     * Attribute UserData: User data to pass to instance.
     * <p>
     * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData();

    /**
     * Attribute VSwitchId: The vSwitch Id to create ens instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ens.IInstance.Jsii$Default {
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
         * Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoRenewPeriod: The time period of auto renew.
         * <p>
         * it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         * <p>
         * If you specify with your own image, make sure the system disk size bigger than image size.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataDiskSize() {
            return software.amazon.jsii.Kernel.get(this, "attrDataDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnsRegionId: ENS Region Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnsRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnsRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostName: The hostname of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: Image ID to create ens instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: InstanceId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: Instance name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpType() {
            return software.amazon.jsii.Kernel.get(this, "attrIpType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: SSH key pair name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Payment Type.only support value Subscription.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: Prepaid time period.
         * <p>
         * Unit is month, it could be from 1 to 9 or 12. Default value is 1.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIpAddress: Private IP for the instance created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIps: Private IP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIps() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIps: Public IP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIps() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Quantity: number of instances to create.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQuantity() {
            return software.amazon.jsii.Kernel.get(this, "attrQuantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SystemDiskSize: Disk size of the system disk.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemDiskSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.
         * <p>
         * The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniqueSuffix() {
            return software.amazon.jsii.Kernel.get(this, "attrUniqueSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserData: User data to pass to instance.
         * <p>
         * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData() {
            return software.amazon.jsii.Kernel.get(this, "attrUserData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The vSwitch Id to create ens instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.InstanceProps.class));
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
         * Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoRenewPeriod: The time period of auto renew.
         * <p>
         * it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         * <p>
         * If you specify with your own image, make sure the system disk size bigger than image size.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataDiskSize() {
            return software.amazon.jsii.Kernel.get(this, "attrDataDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnsRegionId: ENS Region Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnsRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnsRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostName: The hostname of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: Image ID to create ens instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: InstanceId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: Instance name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpType() {
            return software.amazon.jsii.Kernel.get(this, "attrIpType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: SSH key pair name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Payment Type.only support value Subscription.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Period: Prepaid time period.
         * <p>
         * Unit is month, it could be from 1 to 9 or 12. Default value is 1.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIpAddress: Private IP for the instance created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateIps: Private IP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIps() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIps: Public IP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIps() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Quantity: number of instances to create.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQuantity() {
            return software.amazon.jsii.Kernel.get(this, "attrQuantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SystemDiskSize: Disk size of the system disk.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemDiskSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.
         * <p>
         * The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniqueSuffix() {
            return software.amazon.jsii.Kernel.get(this, "attrUniqueSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserData: User data to pass to instance.
         * <p>
         * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserData() {
            return software.amazon.jsii.Kernel.get(this, "attrUserData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The vSwitch Id to create ens instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.InstanceProps.class));
        }
    }
}
