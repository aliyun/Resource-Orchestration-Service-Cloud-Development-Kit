package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>Vpc</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.596Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.IVpc")
@software.amazon.jsii.Jsii.Proxy(IVpc.Jsii$Proxy.class)
public interface IVpc extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CidrBlock: The IPv4 CIDR block of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidrBlock();

    /**
     * Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicLinkEnabled();

    /**
     * Attribute CreateTime: The time at which the VPC was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP option set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDhcpOptionsSetId();

    /**
     * Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlock();

    /**
     * Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlocks();

    /**
     * Attribute IsDefault: Indicates whether to query the default VPC in the specified region.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true (default): All VPCs in the specified region are queried.</li>
     * <li>false: The default VPC is not queried.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute RouterId: The ID of the VRouter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouterId();

    /**
     * Attribute SecondaryCidrBlocks: Additional network segment information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryCidrBlocks();

    /**
     * Attribute Tags: The tags of Vpc.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute UserCidrs: A list of user CIDRs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserCidrs();

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VpcName: The name of the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcName();

    /**
     * Attribute VSwitchIds: A list of VSwitches in the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.VpcProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.IVpc.Jsii$Default {
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
         * Attribute CidrBlock: The IPv4 CIDR block of the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicLinkEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrClassicLinkEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time at which the VPC was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DhcpOptionsSetId: The ID of the DHCP option set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDhcpOptionsSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDhcpOptionsSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlocks() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6CidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsDefault: Indicates whether to query the default VPC in the specified region.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true (default): All VPCs in the specified region are queried.</li>
         * <li>false: The default VPC is not queried.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
            return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouterId: The ID of the VRouter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryCidrBlocks: Additional network segment information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryCidrBlocks() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of Vpc.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserCidrs: A list of user CIDRs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserCidrs() {
            return software.amazon.jsii.Kernel.get(this, "attrUserCidrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcName: The name of the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcName() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchIds: A list of VSwitches in the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.VpcProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.VpcProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVpc}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVpc, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CidrBlock: The IPv4 CIDR block of the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicLinkEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrClassicLinkEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time at which the VPC was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DhcpOptionsSetId: The ID of the DHCP option set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDhcpOptionsSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrDhcpOptionsSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6CidrBlocks() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6CidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsDefault: Indicates whether to query the default VPC in the specified region.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true (default): All VPCs in the specified region are queried.</li>
         * <li>false: The default VPC is not queried.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
            return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouterId: The ID of the VRouter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryCidrBlocks: Additional network segment information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryCidrBlocks() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of Vpc.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserCidrs: A list of user CIDRs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserCidrs() {
            return software.amazon.jsii.Kernel.get(this, "attrUserCidrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcName: The name of the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcName() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchIds: A list of VSwitches in the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.VpcProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.VpcProps.class));
        }
    }
}
