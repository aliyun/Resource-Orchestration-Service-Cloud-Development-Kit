package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>PrefixList</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.336Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.IPrefixList")
@software.amazon.jsii.Jsii.Proxy(IPrefixList.Jsii$Proxy.class)
public interface IPrefixList extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the prefix list was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Entries: The CIDR address block list of the prefix list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEntries();

    /**
     * Attribute IpVersion: The IP version of the prefix list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersion();

    /**
     * Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxEntries();

    /**
     * Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId();

    /**
     * Attribute PrefixListDescription: The description of the prefix list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListDescription();

    /**
     * Attribute PrefixListId: The ID of the query Prefix List.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListId();

    /**
     * Attribute PrefixListName: The name of the prefix list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListName();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute ShareType: The share type of the prefix list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType();

    /**
     * Attribute Tags: The tags of PrefixList.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.PrefixListProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.IPrefixList.Jsii$Default {
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
         * Attribute CreateTime: The time when the prefix list was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Entries: The CIDR address block list of the prefix list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEntries() {
            return software.amazon.jsii.Kernel.get(this, "attrEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpVersion: The IP version of the prefix list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxEntries() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrefixListDescription: The description of the prefix list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrPrefixListDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrefixListId: The ID of the query Prefix List.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrefixListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrefixListName: The name of the prefix list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListName() {
            return software.amazon.jsii.Kernel.get(this, "attrPrefixListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the prefix list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of PrefixList.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.PrefixListProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.PrefixListProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPrefixList}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPrefixList, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the prefix list was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Entries: The CIDR address block list of the prefix list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEntries() {
            return software.amazon.jsii.Kernel.get(this, "attrEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpVersion: The IP version of the prefix list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxEntries() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrefixListDescription: The description of the prefix list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrPrefixListDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrefixListId: The ID of the query Prefix List.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrefixListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrefixListName: The name of the prefix list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrefixListName() {
            return software.amazon.jsii.Kernel.get(this, "attrPrefixListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShareType: The share type of the prefix list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShareType() {
            return software.amazon.jsii.Kernel.get(this, "attrShareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of PrefixList.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.PrefixListProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.PrefixListProps.class));
        }
    }
}
