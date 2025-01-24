package com.aliyun.ros.cdk.apigateway.datasource;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.863Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.datasource.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AclId: Access control ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId();

    /**
     * Attribute AclName: Access control name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclName();

    /**
     * Attribute AclStatus: Access control type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclStatus();

    /**
     * Attribute AclType: Access control type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclType();

    /**
     * Attribute ClassicEgressAddress: Classic network exit address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicEgressAddress();

    /**
     * Attribute CreateTime: Creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EgressIpv6Enable: Does IPV6 Capability Support.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEgressIpv6Enable();

    /**
     * Attribute ExpiredTime: Instance expiration time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute HttpsPolicy: Https policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsPolicy();

    /**
     * Attribute InstanceId: Instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: Instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute InstanceRpsLimit: Instance rps limits.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceRpsLimit();

    /**
     * Attribute InstanceSpec: Instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpec();

    /**
     * Attribute InstanceSpecAttributes: Instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpecAttributes();

    /**
     * Attribute InstanceType: Instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute InternetEgressAddress: Public network exit address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEgressAddress();

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute SupportIpv6: Does ipv6 support.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportIpv6();

    /**
     * Attribute UserVpcId: User's VpcID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVpcId();

    /**
     * Attribute UserVswitchId: DescribeInstances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVswitchId();

    /**
     * Attribute VipTypeList: Vip type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVipTypeList();

    /**
     * Attribute VpcEgressAddress: Intranet VPC exit network segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcEgressAddress();

    /**
     * Attribute VpcIntranetEnable: Whether Vpc allows authorization.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcIntranetEnable();

    /**
     * Attribute VpcOwnerId: Vpc licensor ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcOwnerId();

    /**
     * Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcSlbIntranetEnable();

    /**
     * Attribute ZoneId: Zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    /**
     * Attribute ZoneLocalName: Available area.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneLocalName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.datasource.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apigateway.datasource.IInstance.Jsii$Default {
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
         * Attribute AclId: Access control ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclName: Access control name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclName() {
            return software.amazon.jsii.Kernel.get(this, "attrAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclStatus: Access control type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrAclStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclType: Access control type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclType() {
            return software.amazon.jsii.Kernel.get(this, "attrAclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClassicEgressAddress: Classic network exit address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicEgressAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrClassicEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EgressIpv6Enable: Does IPV6 Capability Support.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEgressIpv6Enable() {
            return software.amazon.jsii.Kernel.get(this, "attrEgressIpv6Enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: Instance expiration time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsPolicy: Https policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Instance id.
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
         * Attribute InstanceRpsLimit: Instance rps limits.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceRpsLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceRpsLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSpec: Instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSpecAttributes: Instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpecAttributes() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSpecAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: Instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetEgressAddress: Public network exit address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEgressAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportIpv6: Does ipv6 support.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportIpv6() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportIpv6", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserVpcId: User's VpcID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserVswitchId: DescribeInstances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVswitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VipTypeList: Vip type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVipTypeList() {
            return software.amazon.jsii.Kernel.get(this, "attrVipTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcEgressAddress: Intranet VPC exit network segment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcEgressAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcIntranetEnable: Whether Vpc allows authorization.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcIntranetEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcIntranetEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcOwnerId: Vpc licensor ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcSlbIntranetEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcSlbIntranetEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: Zone.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneLocalName: Available area.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneLocalName() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneLocalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.datasource.InstanceProps.class));
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
         * Attribute AclId: Access control ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclName: Access control name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclName() {
            return software.amazon.jsii.Kernel.get(this, "attrAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclStatus: Access control type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrAclStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclType: Access control type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclType() {
            return software.amazon.jsii.Kernel.get(this, "attrAclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClassicEgressAddress: Classic network exit address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicEgressAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrClassicEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EgressIpv6Enable: Does IPV6 Capability Support.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEgressIpv6Enable() {
            return software.amazon.jsii.Kernel.get(this, "attrEgressIpv6Enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: Instance expiration time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsPolicy: Https policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Instance id.
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
         * Attribute InstanceRpsLimit: Instance rps limits.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceRpsLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceRpsLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSpec: Instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSpecAttributes: Instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpecAttributes() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSpecAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: Instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetEgressAddress: Public network exit address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEgressAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportIpv6: Does ipv6 support.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportIpv6() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportIpv6", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserVpcId: User's VpcID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserVswitchId: DescribeInstances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVswitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VipTypeList: Vip type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVipTypeList() {
            return software.amazon.jsii.Kernel.get(this, "attrVipTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcEgressAddress: Intranet VPC exit network segment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcEgressAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcIntranetEnable: Whether Vpc allows authorization.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcIntranetEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcIntranetEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcOwnerId: Vpc licensor ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcSlbIntranetEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcSlbIntranetEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: Zone.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneLocalName: Available area.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneLocalName() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneLocalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.datasource.InstanceProps.class));
        }
    }
}
