package com.aliyun.ros.cdk.slb.datasource;

/**
 * Represents a <code>AccessControl</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:20.832Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.IAccessControl")
@software.amazon.jsii.Jsii.Proxy(IAccessControl.Jsii$Proxy.class)
public interface IAccessControl extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AclEntries: The IP entries that you want to remove from the network ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntries();

    /**
     * Attribute AclId: The ID of the ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId();

    /**
     * Attribute AclName: The ACL name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclName();

    /**
     * Attribute AddressIpVersion: The IP version.
     * <p>
     * Valid values: ipv4 and ipv6.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion();

    /**
     * Attribute RelatedListeners: The listeners that are associated with the network ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRelatedListeners();

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Tags: The tags of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.AccessControlProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.slb.datasource.IAccessControl.Jsii$Default {
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
         * Attribute AclEntries: The IP entries that you want to remove from the network ACL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntries() {
            return software.amazon.jsii.Kernel.get(this, "attrAclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclId: The ID of the ACL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclName: The ACL name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclName() {
            return software.amazon.jsii.Kernel.get(this, "attrAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressIpVersion: The IP version.
         * <p>
         * Valid values: ipv4 and ipv6.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RelatedListeners: The listeners that are associated with the network ACL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRelatedListeners() {
            return software.amazon.jsii.Kernel.get(this, "attrRelatedListeners", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.AccessControlProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.AccessControlProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAccessControl}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAccessControl, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AclEntries: The IP entries that you want to remove from the network ACL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntries() {
            return software.amazon.jsii.Kernel.get(this, "attrAclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclId: The ID of the ACL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclName: The ACL name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclName() {
            return software.amazon.jsii.Kernel.get(this, "attrAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressIpVersion: The IP version.
         * <p>
         * Valid values: ipv4 and ipv6.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RelatedListeners: The listeners that are associated with the network ACL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRelatedListeners() {
            return software.amazon.jsii.Kernel.get(this, "attrRelatedListeners", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.AccessControlProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.AccessControlProps.class));
        }
    }
}
