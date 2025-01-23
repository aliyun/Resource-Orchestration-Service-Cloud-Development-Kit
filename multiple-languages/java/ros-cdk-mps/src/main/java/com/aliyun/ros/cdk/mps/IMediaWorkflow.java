package com.aliyun.ros.cdk.mps;

/**
 * Represents a <code>MediaWorkflow</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:41.450Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.IMediaWorkflow")
@software.amazon.jsii.Jsii.Proxy(IMediaWorkflow.Jsii$Proxy.class)
public interface IMediaWorkflow extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreationTime: The time when the media workflow was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime();

    /**
     * Attribute MediaWorkflowId: The ID of the media workflow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaWorkflowId();

    /**
     * Attribute Name: The name of the media workflow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute State: The state of the media workflow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrState();

    /**
     * Attribute Topology: The topology of the media workflow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopology();

    /**
     * Attribute TriggerMode: The trigger mode of the media workflow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerMode();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.MediaWorkflowProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mps.IMediaWorkflow.Jsii$Default {
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
         * Attribute CreationTime: The time when the media workflow was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MediaWorkflowId: The ID of the media workflow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaWorkflowId() {
            return software.amazon.jsii.Kernel.get(this, "attrMediaWorkflowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The name of the media workflow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: The state of the media workflow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Topology: The topology of the media workflow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopology() {
            return software.amazon.jsii.Kernel.get(this, "attrTopology", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TriggerMode: The trigger mode of the media workflow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerMode() {
            return software.amazon.jsii.Kernel.get(this, "attrTriggerMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.MediaWorkflowProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mps.MediaWorkflowProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IMediaWorkflow}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IMediaWorkflow, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreationTime: The time when the media workflow was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MediaWorkflowId: The ID of the media workflow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMediaWorkflowId() {
            return software.amazon.jsii.Kernel.get(this, "attrMediaWorkflowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The name of the media workflow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: The state of the media workflow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Topology: The topology of the media workflow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopology() {
            return software.amazon.jsii.Kernel.get(this, "attrTopology", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TriggerMode: The trigger mode of the media workflow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerMode() {
            return software.amazon.jsii.Kernel.get(this, "attrTriggerMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.MediaWorkflowProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mps.MediaWorkflowProps.class));
        }
    }
}
