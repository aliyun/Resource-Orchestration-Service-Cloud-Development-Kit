package com.aliyun.ros.cdk.vod.datasource;

/**
 * Represents a <code>EditingProject</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.127Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.datasource.IEditingProject")
@software.amazon.jsii.Jsii.Proxy(IEditingProject.Jsii$Proxy.class)
public interface IEditingProject extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the online editing project was created.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EditingProjectId: The ID of the online editing project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEditingProjectId();

    /**
     * Attribute EditingProjectName: The name of the online editing project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEditingProjectName();

    /**
     * Attribute ModifiedTime: The last time when the online editing project was modified.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime();

    /**
     * Attribute Timeline: The timeline of the online editing project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeline();

    /**
     * Attribute Title: The title of the online editing project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTitle();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.datasource.EditingProjectProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vod.datasource.IEditingProject.Jsii$Default {
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
         * Attribute CreateTime: The time when the online editing project was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EditingProjectId: The ID of the online editing project.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEditingProjectId() {
            return software.amazon.jsii.Kernel.get(this, "attrEditingProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EditingProjectName: The name of the online editing project.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEditingProjectName() {
            return software.amazon.jsii.Kernel.get(this, "attrEditingProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: The last time when the online editing project was modified.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Timeline: The timeline of the online editing project.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeline() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeline", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Title: The title of the online editing project.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTitle() {
            return software.amazon.jsii.Kernel.get(this, "attrTitle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.datasource.EditingProjectProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vod.datasource.EditingProjectProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEditingProject}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEditingProject, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the online editing project was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EditingProjectId: The ID of the online editing project.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEditingProjectId() {
            return software.amazon.jsii.Kernel.get(this, "attrEditingProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EditingProjectName: The name of the online editing project.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEditingProjectName() {
            return software.amazon.jsii.Kernel.get(this, "attrEditingProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: The last time when the online editing project was modified.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Timeline: The timeline of the online editing project.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeline() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeline", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Title: The title of the online editing project.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTitle() {
            return software.amazon.jsii.Kernel.get(this, "attrTitle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.datasource.EditingProjectProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vod.datasource.EditingProjectProps.class));
        }
    }
}
