package com.aliyun.ros.cdk.ecs;

/**
 * Represents a <code>LaunchTemplateVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:36:37.916Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ILaunchTemplateVersion")
@software.amazon.jsii.Jsii.Proxy(ILaunchTemplateVersion.Jsii$Proxy.class)
public interface ILaunchTemplateVersion extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy();

    /**
     * Attribute CreateTime: The time when the launch template version was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DefaultVersion: Indicates whether the launch template version is the default version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultVersion();

    /**
     * Attribute LaunchTemplateData: The configurations of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateData();

    /**
     * Attribute LaunchTemplateId: The ID of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateId();

    /**
     * Attribute LaunchTemplateName: The name of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateName();

    /**
     * Attribute ModifiedTime: The time when the launch template version was modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute VersionDescription: The description of the launch template version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription();

    /**
     * Attribute VersionNumber: The number of the created version of the launch template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionNumber();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.ILaunchTemplateVersion.Jsii$Default {
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
         * Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the launch template version was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultVersion: Indicates whether the launch template version is the default version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateData: The configurations of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateData() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateId: The ID of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateName: The name of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: The time when the launch template version was modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionDescription: The description of the launch template version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionNumber: The number of the created version of the launch template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ILaunchTemplateVersion}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ILaunchTemplateVersion, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the launch template version was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultVersion: Indicates whether the launch template version is the default version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateData: The configurations of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateData() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateId: The ID of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LaunchTemplateName: The name of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: The time when the launch template version was modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionDescription: The description of the launch template version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionNumber: The number of the created version of the launch template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps.class));
        }
    }
}
