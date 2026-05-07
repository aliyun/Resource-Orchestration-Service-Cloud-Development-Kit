package com.aliyun.ros.cdk.cr;

/**
 * Represents a <code>ArtifactLifecycleRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.285Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.IArtifactLifecycleRule")
@software.amazon.jsii.Jsii.Proxy(IArtifactLifecycleRule.Jsii$Proxy.class)
public interface IArtifactLifecycleRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArtifactLifecycleRuleId();

    /**
     * Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuto();

    /**
     * Attribute CreateTime: Creation time of the lifecycle management rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute InstanceId: ACR Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute ModifiedTime: Change time of the lifecycle management rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime();

    /**
     * Attribute NamespaceName: The name of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceName();

    /**
     * Attribute RepoName: The name of the image repository.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoName();

    /**
     * Attribute RetentionTagCount: The number of images that you want to retain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionTagCount();

    /**
     * Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleTime();

    /**
     * Attribute Scope: The deletion scope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope();

    /**
     * Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagRegexp();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cr.IArtifactLifecycleRule.Jsii$Default {
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
         * Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArtifactLifecycleRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrArtifactLifecycleRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuto() {
            return software.amazon.jsii.Kernel.get(this, "attrAuto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time of the lifecycle management rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: ACR Instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: Change time of the lifecycle management rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NamespaceName: The name of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceName() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoName: The name of the image repository.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoName() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RetentionTagCount: The number of images that you want to retain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionTagCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRetentionTagCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleTime() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scope: The deletion scope.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope() {
            return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagRegexp() {
            return software.amazon.jsii.Kernel.get(this, "attrTagRegexp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IArtifactLifecycleRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IArtifactLifecycleRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArtifactLifecycleRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrArtifactLifecycleRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuto() {
            return software.amazon.jsii.Kernel.get(this, "attrAuto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time of the lifecycle management rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: ACR Instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: Change time of the lifecycle management rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NamespaceName: The name of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceName() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoName: The name of the image repository.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoName() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RetentionTagCount: The number of images that you want to retain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionTagCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRetentionTagCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleTime() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scope: The deletion scope.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope() {
            return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagRegexp() {
            return software.amazon.jsii.Kernel.get(this, "attrTagRegexp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps.class));
        }
    }
}
