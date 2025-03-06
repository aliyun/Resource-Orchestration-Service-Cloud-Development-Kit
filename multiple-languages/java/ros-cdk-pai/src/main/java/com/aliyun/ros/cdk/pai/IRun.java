package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>Run</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.577Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IRun")
@software.amazon.jsii.Jsii.Proxy(IRun.Jsii$Proxy.class)
public interface IRun extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Accessibility: Resource attribute fields representing visibility.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility();

    /**
     * Attribute CreateTime: The creation time of the Run.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentId();

    /**
     * Attribute GmtModifiedTime: Resource attribute fields representing edit time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime();

    /**
     * Attribute Labels: Run attribute field representing the run tag.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels();

    /**
     * Attribute Metrics: Resource attribute field representing the run metric.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetrics();

    /**
     * Attribute OwnerId: Resource attribute field representing owner.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId();

    /**
     * Attribute Params: Resource attribute field representing the run parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParams();

    /**
     * Attribute RunId: The ID of the Run.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunId();

    /**
     * Attribute RunName: The name of the Run.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunName();

    /**
     * Attribute SourceId: Attribute Resource field representing the source task ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId();

    /**
     * Attribute SourceType: Run attribute fields representing the source type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType();

    /**
     * Attribute UserId: Run attribute field representing creator ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    /**
     * Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.RunProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IRun.Jsii$Default {
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
         * Attribute Accessibility: Resource attribute fields representing visibility.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the Run.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentId() {
            return software.amazon.jsii.Kernel.get(this, "attrExperimentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifiedTime: Resource attribute fields representing edit time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: Run attribute field representing the run tag.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Metrics: Resource attribute field representing the run metric.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetrics() {
            return software.amazon.jsii.Kernel.get(this, "attrMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: Resource attribute field representing owner.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Params: Resource attribute field representing the run parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParams() {
            return software.amazon.jsii.Kernel.get(this, "attrParams", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunId: The ID of the Run.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunId() {
            return software.amazon.jsii.Kernel.get(this, "attrRunId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunName: The name of the Run.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunName() {
            return software.amazon.jsii.Kernel.get(this, "attrRunName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceId: Attribute Resource field representing the source task ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: Run attribute fields representing the source type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: Run attribute field representing creator ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.RunProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.RunProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRun}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRun, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Accessibility: Resource attribute fields representing visibility.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the Run.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentId() {
            return software.amazon.jsii.Kernel.get(this, "attrExperimentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifiedTime: Resource attribute fields representing edit time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: Run attribute field representing the run tag.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Metrics: Resource attribute field representing the run metric.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetrics() {
            return software.amazon.jsii.Kernel.get(this, "attrMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: Resource attribute field representing owner.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Params: Resource attribute field representing the run parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParams() {
            return software.amazon.jsii.Kernel.get(this, "attrParams", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunId: The ID of the Run.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunId() {
            return software.amazon.jsii.Kernel.get(this, "attrRunId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RunName: The name of the Run.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunName() {
            return software.amazon.jsii.Kernel.get(this, "attrRunName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceId: Attribute Resource field representing the source task ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: Run attribute fields representing the source type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: Run attribute field representing creator ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.RunProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.RunProps.class));
        }
    }
}
