package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>Ipam</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.202Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IIpam")
@software.amazon.jsii.Jsii.Proxy(IIpam.Jsii$Proxy.class)
public interface IIpam extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the IPAM.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultResourceDiscoveryAssociationId();

    /**
     * Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultResourceDiscoveryId();

    /**
     * Attribute IpamDescription: The description of IPAM.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamDescription();

    /**
     * Attribute IpamId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamId();

    /**
     * Attribute IpamName: The name of the IPAM.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamName();

    /**
     * Attribute OperatingRegionList: List of IPAM effective regions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperatingRegionList();

    /**
     * Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateDefaultScopeId();

    /**
     * Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicDefaultScopeId();

    /**
     * Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDiscoveryAssociationCount();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Tags: The tag of the IPAM.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IIpam.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the IPAM.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultResourceDiscoveryAssociationId() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultResourceDiscoveryAssociationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultResourceDiscoveryId() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultResourceDiscoveryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamDescription: The description of IPAM.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamName: The name of the IPAM.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperatingRegionList: List of IPAM effective regions.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperatingRegionList() {
            return software.amazon.jsii.Kernel.get(this, "attrOperatingRegionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateDefaultScopeId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateDefaultScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicDefaultScopeId() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicDefaultScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDiscoveryAssociationCount() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceDiscoveryAssociationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the IPAM.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IIpam}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IIpam, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the IPAM.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultResourceDiscoveryAssociationId() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultResourceDiscoveryAssociationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultResourceDiscoveryId() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultResourceDiscoveryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamDescription: The description of IPAM.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamName: The name of the IPAM.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperatingRegionList: List of IPAM effective regions.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperatingRegionList() {
            return software.amazon.jsii.Kernel.get(this, "attrOperatingRegionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateDefaultScopeId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateDefaultScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicDefaultScopeId() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicDefaultScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDiscoveryAssociationCount() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceDiscoveryAssociationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the IPAM.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamProps.class));
        }
    }
}
