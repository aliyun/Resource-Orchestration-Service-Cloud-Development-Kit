package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>SecurityGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.827Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ISecurityGroup")
@software.amazon.jsii.Jsii.Proxy(ISecurityGroup.Jsii$Proxy.class)
public interface ISecurityGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The create time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute InnerAccessPolicy: Network connectivity policy within the security group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerAccessPolicy();

    /**
     * Attribute Permissions: A collection of Security Group permission rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPermissions();

    /**
     * Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId();

    /**
     * Attribute SecurityGroupName: The security group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupName();

    /**
     * Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupReferences();

    /**
     * Attribute SecurityGroupType: Security group type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupType();

    /**
     * Attribute ServiceId: The virtual quotient ID corresponding to the security group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId();

    /**
     * Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged();

    /**
     * Attribute Tags: The tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcId: Secure the group's proprietary network.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SecurityGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.ISecurityGroup.Jsii$Default {
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
         * Attribute CreateTime: The create time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerAccessPolicy: Network connectivity policy within the security group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerAccessPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerAccessPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Permissions: A collection of Security Group permission rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPermissions() {
            return software.amazon.jsii.Kernel.get(this, "attrPermissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: Security group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupName: The security group name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupReferences() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupReferences", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupType: Security group type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: The virtual quotient ID corresponding to the security group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: Secure the group's proprietary network.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SecurityGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.SecurityGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISecurityGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISecurityGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The create time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerAccessPolicy: Network connectivity policy within the security group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerAccessPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerAccessPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Permissions: A collection of Security Group permission rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPermissions() {
            return software.amazon.jsii.Kernel.get(this, "attrPermissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: Security group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupName: The security group name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupReferences() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupReferences", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupType: Security group type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: The virtual quotient ID corresponding to the security group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: Secure the group's proprietary network.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SecurityGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.SecurityGroupProps.class));
        }
    }
}
