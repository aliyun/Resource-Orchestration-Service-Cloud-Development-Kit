package com.aliyun.ros.cdk.ehpc;

/**
 * Represents a <code>Queue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:42:12.692Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.IQueue")
@software.amazon.jsii.Jsii.Proxy(IQueue.Jsii$Proxy.class)
public interface IQueue extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeNodes();

    /**
     * Attribute CreateTime: Queue creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableScaleIn();

    /**
     * Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableScaleOut();

    /**
     * Attribute HostnamePrefix: The hostname prefix of the added compute nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnamePrefix();

    /**
     * Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnameSuffix();

    /**
     * Attribute InitialCount: The initial number of compute nodes in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitialCount();

    /**
     * Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterConnect();

    /**
     * Attribute MaxCount: The maximum number of compute nodes that the queue can contain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxCount();

    /**
     * Attribute MinCount: The minimum number of compute nodes that the queue must contain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinCount();

    /**
     * Attribute QueueName: The queue name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName();

    /**
     * Attribute UpdateTime: Queue update time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.QueueProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ehpc.IQueue.Jsii$Default {
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
         * Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeNodes() {
            return software.amazon.jsii.Kernel.get(this, "attrComputeNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Queue creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableScaleIn() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableScaleOut() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableScaleOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostnamePrefix: The hostname prefix of the added compute nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnamePrefix() {
            return software.amazon.jsii.Kernel.get(this, "attrHostnamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnameSuffix() {
            return software.amazon.jsii.Kernel.get(this, "attrHostnameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InitialCount: The initial number of compute nodes in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitialCount() {
            return software.amazon.jsii.Kernel.get(this, "attrInitialCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterConnect() {
            return software.amazon.jsii.Kernel.get(this, "attrInterConnect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxCount: The maximum number of compute nodes that the queue can contain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxCount() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinCount: The minimum number of compute nodes that the queue must contain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinCount() {
            return software.amazon.jsii.Kernel.get(this, "attrMinCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueName: The queue name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Queue update time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.QueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ehpc.QueueProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IQueue}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IQueue, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeNodes() {
            return software.amazon.jsii.Kernel.get(this, "attrComputeNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Queue creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableScaleIn() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableScaleIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableScaleOut() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableScaleOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostnamePrefix: The hostname prefix of the added compute nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnamePrefix() {
            return software.amazon.jsii.Kernel.get(this, "attrHostnamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnameSuffix() {
            return software.amazon.jsii.Kernel.get(this, "attrHostnameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InitialCount: The initial number of compute nodes in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitialCount() {
            return software.amazon.jsii.Kernel.get(this, "attrInitialCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterConnect() {
            return software.amazon.jsii.Kernel.get(this, "attrInterConnect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxCount: The maximum number of compute nodes that the queue can contain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxCount() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinCount: The minimum number of compute nodes that the queue must contain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinCount() {
            return software.amazon.jsii.Kernel.get(this, "attrMinCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueName: The queue name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Queue update time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.QueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ehpc.QueueProps.class));
        }
    }
}
