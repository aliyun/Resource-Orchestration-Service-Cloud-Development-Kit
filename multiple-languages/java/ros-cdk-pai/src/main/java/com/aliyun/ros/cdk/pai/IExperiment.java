package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>Experiment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.679Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IExperiment")
@software.amazon.jsii.Jsii.Proxy(IExperiment.Jsii$Proxy.class)
public interface IExperiment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Accessibility: Experimental Visibility.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility();

    /**
     * Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArtifactUri();

    /**
     * Attribute CreateTime: GmtCreateTime is time when this entity is created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentId();

    /**
     * Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentName();

    /**
     * Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime();

    /**
     * Attribute Labels: Labels are tags of the experiment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels();

    /**
     * Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId();

    /**
     * Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTensorboardLogUri();

    /**
     * Attribute UserId: UserId is the user account id which created this entity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    /**
     * Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ExperimentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IExperiment.Jsii$Default {
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
         * Attribute Accessibility: Experimental Visibility.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArtifactUri() {
            return software.amazon.jsii.Kernel.get(this, "attrArtifactUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: GmtCreateTime is time when this entity is created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentId() {
            return software.amazon.jsii.Kernel.get(this, "attrExperimentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentName() {
            return software.amazon.jsii.Kernel.get(this, "attrExperimentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: Labels are tags of the experiment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTensorboardLogUri() {
            return software.amazon.jsii.Kernel.get(this, "attrTensorboardLogUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: UserId is the user account id which created this entity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ExperimentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ExperimentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IExperiment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IExperiment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Accessibility: Experimental Visibility.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArtifactUri() {
            return software.amazon.jsii.Kernel.get(this, "attrArtifactUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: GmtCreateTime is time when this entity is created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentId() {
            return software.amazon.jsii.Kernel.get(this, "attrExperimentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentName() {
            return software.amazon.jsii.Kernel.get(this, "attrExperimentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: Labels are tags of the experiment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTensorboardLogUri() {
            return software.amazon.jsii.Kernel.get(this, "attrTensorboardLogUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: UserId is the user account id which created this entity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ExperimentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ExperimentProps.class));
        }
    }
}
