package com.aliyun.ros.cdk.nas.datasource;

/**
 * Represents a <code>AccessGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.259Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.datasource.IAccessGroup")
@software.amazon.jsii.Jsii.Proxy(IAccessGroup.Jsii$Proxy.class)
public interface IAccessGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccessGroupName: The name of the permission group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessGroupName();

    /**
     * Attribute AccessGroupType: Permission group types, including VPC and Classic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessGroupType();

    /**
     * Attribute Description: Permission group description information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute MountTargetCount: The number of Mount points to which this permission group is applied.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountTargetCount();

    /**
     * Attribute RuleCount: The number of permission group rules contained in this permission group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleCount();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.datasource.AccessGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.nas.datasource.IAccessGroup.Jsii$Default {
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
         * Attribute AccessGroupName: The name of the permission group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AccessGroupType: Permission group types, including VPC and Classic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Permission group description information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MountTargetCount: The number of Mount points to which this permission group is applied.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountTargetCount() {
            return software.amazon.jsii.Kernel.get(this, "attrMountTargetCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleCount: The number of permission group rules contained in this permission group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.datasource.AccessGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.datasource.AccessGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAccessGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAccessGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccessGroupName: The name of the permission group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AccessGroupType: Permission group types, including VPC and Classic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Permission group description information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MountTargetCount: The number of Mount points to which this permission group is applied.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountTargetCount() {
            return software.amazon.jsii.Kernel.get(this, "attrMountTargetCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleCount: The number of permission group rules contained in this permission group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.datasource.AccessGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.datasource.AccessGroupProps.class));
        }
    }
}
