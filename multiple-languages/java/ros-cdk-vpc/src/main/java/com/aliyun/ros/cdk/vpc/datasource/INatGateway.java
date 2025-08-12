package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>NatGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.567Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.INatGateway")
@software.amazon.jsii.Jsii.Proxy(INatGateway.Jsii$Proxy.class)
public interface INatGateway extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AutoPay: Indicates whether automatic payment is enabled.
     * <p>
     * Valid values:
     * false: no
     * true: yes
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay();

    /**
     * Attribute BusinessStatus: The status of the NAT gateway.
     * <p>
     * Valid values:
     * Normal: normal
     * FinancialLocked: locked due to overdue payments
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus();

    /**
     * Attribute CreateTime: The time when the NAT gateway was created.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled.
     * <p>
     * Valid values:
     * true: yes
     * false: no
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection();

    /**
     * Attribute Description: The description of the NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP).
     * <p>
     * Valid values:
     * MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipBindMode();

    /**
     * Attribute ExpiredTime: The time when the NAT gateway expires.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardTableIds();

    /**
     * Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled.
     * <p>
     * Valid values:
     * true: yes
     * false: no
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcmpReplyEnabled();

    /**
     * Attribute InternetChargeType: The metering method of the NAT gateway.
     * <p>
     * Valid values:
     * PayBySpec: pay-by-specification
     * PayByLcu: pay-by-CU
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType();

    /**
     * Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpLists();

    /**
     * Attribute NatGatewayId: The ID of the NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId();

    /**
     * Attribute NatGatewayName: The name of the NAT gateway.
     * <p>
     * The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayName();

    /**
     * Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayPrivateInfo();

    /**
     * Attribute NatType: The type of the NAT gateway.
     * <p>
     * The value is set to Enhanced (enhanced NAT gateway).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatType();

    /**
     * Attribute NetworkType: The type of NAT gateway.
     * <p>
     * Valid values:
     * internet: an Internet NAT gateway
     * intranet: a VPC NAT gateway
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType();

    /**
     * Attribute PaymentType: The billing method of the NAT gateway.
     * <p>
     * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled.
     * <p>
     * Valid values:
     * false: no
     * true: yes
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityProtectionEnabled();

    /**
     * Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnatTableIds();

    /**
     * Attribute Spec: The size of the NAT gateway.
     * <p>
     * An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec();

    /**
     * Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.INatGateway.Jsii$Default {
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
         * Attribute AutoPay: Indicates whether automatic payment is enabled.
         * <p>
         * Valid values:
         * false: no
         * true: yes
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BusinessStatus: The status of the NAT gateway.
         * <p>
         * Valid values:
         * Normal: normal
         * FinancialLocked: locked due to overdue payments
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the NAT gateway was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled.
         * <p>
         * Valid values:
         * true: yes
         * false: no
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the NAT gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP).
         * <p>
         * Valid values:
         * MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipBindMode() {
            return software.amazon.jsii.Kernel.get(this, "attrEipBindMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The time when the NAT gateway expires.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardTableIds() {
            return software.amazon.jsii.Kernel.get(this, "attrForwardTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled.
         * <p>
         * Valid values:
         * true: yes
         * false: no
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcmpReplyEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrIcmpReplyEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The metering method of the NAT gateway.
         * <p>
         * Valid values:
         * PayBySpec: pay-by-specification
         * PayByLcu: pay-by-CU
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpLists() {
            return software.amazon.jsii.Kernel.get(this, "attrIpLists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayId: The ID of the NAT gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayName: The name of the NAT gateway.
         * <p>
         * The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayPrivateInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayPrivateInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatType: The type of the NAT gateway.
         * <p>
         * The value is set to Enhanced (enhanced NAT gateway).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatType() {
            return software.amazon.jsii.Kernel.get(this, "attrNatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: The type of NAT gateway.
         * <p>
         * Valid values:
         * internet: an Internet NAT gateway
         * intranet: a VPC NAT gateway
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the NAT gateway.
         * <p>
         * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled.
         * <p>
         * Valid values:
         * false: no
         * true: yes
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityProtectionEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityProtectionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnatTableIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSnatTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: The size of the NAT gateway.
         * <p>
         * An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps.class));
        }
    }

    /**
     * Internal default implementation for {@link INatGateway}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INatGateway, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AutoPay: Indicates whether automatic payment is enabled.
         * <p>
         * Valid values:
         * false: no
         * true: yes
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BusinessStatus: The status of the NAT gateway.
         * <p>
         * Valid values:
         * Normal: normal
         * FinancialLocked: locked due to overdue payments
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the NAT gateway was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled.
         * <p>
         * Valid values:
         * true: yes
         * false: no
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the NAT gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP).
         * <p>
         * Valid values:
         * MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipBindMode() {
            return software.amazon.jsii.Kernel.get(this, "attrEipBindMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The time when the NAT gateway expires.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardTableIds() {
            return software.amazon.jsii.Kernel.get(this, "attrForwardTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled.
         * <p>
         * Valid values:
         * true: yes
         * false: no
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcmpReplyEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrIcmpReplyEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetChargeType: The metering method of the NAT gateway.
         * <p>
         * Valid values:
         * PayBySpec: pay-by-specification
         * PayByLcu: pay-by-CU
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpLists() {
            return software.amazon.jsii.Kernel.get(this, "attrIpLists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayId: The ID of the NAT gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayName: The name of the NAT gateway.
         * <p>
         * The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayPrivateInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrNatGatewayPrivateInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NatType: The type of the NAT gateway.
         * <p>
         * The value is set to Enhanced (enhanced NAT gateway).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatType() {
            return software.amazon.jsii.Kernel.get(this, "attrNatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: The type of NAT gateway.
         * <p>
         * Valid values:
         * internet: an Internet NAT gateway
         * intranet: a VPC NAT gateway
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the NAT gateway.
         * <p>
         * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled.
         * <p>
         * Valid values:
         * false: no
         * true: yes
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityProtectionEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityProtectionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnatTableIds() {
            return software.amazon.jsii.Kernel.get(this, "attrSnatTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: The size of the NAT gateway.
         * <p>
         * An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps.class));
        }
    }
}
