package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>AnycastEipAddress</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.786Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.IAnycastEipAddress")
@software.amazon.jsii.Jsii.Proxy(IAnycastEipAddress.Jsii$Proxy.class)
public interface IAnycastEipAddress extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AliUid: The ID of the account to which the Anycast EIP belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid();

    /**
     * Attribute AnycastEipAddressName: The name of the Anycast EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastEipAddressName();

    /**
     * Attribute AnycastId: The ID of the Anycast EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastId();

    /**
     * Attribute Bandwidth: The maximum bandwidth of the Anycast EIP.
     * <p>
     * Unit: Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute Bid: The BID of the account to which the Anycast EIP belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid();

    /**
     * Attribute CreateTime: The point in time at which the Anycast EIP was created.
     * <p>
     * The time follows the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute InternetChargeType: The billing method of the Anycast EIP.
     * <p>
     * Only PostPaid may be returned, which indicates the pay-as-you-go billing method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType();

    /**
     * Attribute IpAddress: The IP address of the Anycast EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress();

    /**
     * Attribute PaymentType: The billing method of the Anycast EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute ServiceLocation: The access area of the Anycast EIP.
     * <p>
     * Only international may be returned, which indicates the areas outside the Chinese mainland.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceLocation();

    /**
     * Attribute Status: The status of the Anycast EIP.
     * <p>
     * Valid values:
     * Associating
     * Unassociating
     * Allocated
     * Associated
     * Modifying
     * Releasing
     * Released
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    /**
     * Attribute Tags: The tags of the EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.AnycastEipAddressProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.IAnycastEipAddress.Jsii$Default {
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
         * Attribute AliUid: The ID of the account to which the Anycast EIP belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
            return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AnycastEipAddressName: The name of the Anycast EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastEipAddressName() {
            return software.amazon.jsii.Kernel.get(this, "attrAnycastEipAddressName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AnycastId: The ID of the Anycast EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastId() {
            return software.amazon.jsii.Kernel.get(this, "attrAnycastId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The maximum bandwidth of the Anycast EIP.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bid: The BID of the account to which the Anycast EIP belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
            return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The point in time at which the Anycast EIP was created.
         * <p>
         * The time follows the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The billing method of the Anycast EIP.
         * <p>
         * Only PostPaid may be returned, which indicates the pay-as-you-go billing method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: The IP address of the Anycast EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the Anycast EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceLocation: The access area of the Anycast EIP.
         * <p>
         * Only international may be returned, which indicates the areas outside the Chinese mainland.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceLocation() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the Anycast EIP.
         * <p>
         * Valid values:
         * Associating
         * Unassociating
         * Allocated
         * Associated
         * Modifying
         * Releasing
         * Released
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.AnycastEipAddressProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.AnycastEipAddressProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAnycastEipAddress}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAnycastEipAddress, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AliUid: The ID of the account to which the Anycast EIP belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
            return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AnycastEipAddressName: The name of the Anycast EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastEipAddressName() {
            return software.amazon.jsii.Kernel.get(this, "attrAnycastEipAddressName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AnycastId: The ID of the Anycast EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAnycastId() {
            return software.amazon.jsii.Kernel.get(this, "attrAnycastId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bandwidth: The maximum bandwidth of the Anycast EIP.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Bid: The BID of the account to which the Anycast EIP belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBid() {
            return software.amazon.jsii.Kernel.get(this, "attrBid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The point in time at which the Anycast EIP was created.
         * <p>
         * The time follows the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The billing method of the Anycast EIP.
         * <p>
         * Only PostPaid may be returned, which indicates the pay-as-you-go billing method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: The IP address of the Anycast EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the Anycast EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceLocation: The access area of the Anycast EIP.
         * <p>
         * Only international may be returned, which indicates the areas outside the Chinese mainland.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceLocation() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the Anycast EIP.
         * <p>
         * Valid values:
         * Associating
         * Unassociating
         * Allocated
         * Associated
         * Modifying
         * Releasing
         * Released
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.AnycastEipAddressProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.AnycastEipAddressProps.class));
        }
    }
}
