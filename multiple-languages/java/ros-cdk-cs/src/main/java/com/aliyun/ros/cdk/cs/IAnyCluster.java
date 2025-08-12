package com.aliyun.ros.cdk.cs;

/**
 * Represents a <code>AnyCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.149Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.IAnyCluster")
@software.amazon.jsii.Jsii.Proxy(IAnyCluster.Jsii$Proxy.class)
public interface IAnyCluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute APIServerSLBId: The id of API server SLB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiServerSlbId();

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultUserKubeConfig();

    /**
     * Attribute IngressSLBId: The id of ingress SLB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressSlbId();

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes();

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateUserKubConfig();

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationId();

    /**
     * Attribute ScalingGroupId: Scaling group id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId();

    /**
     * Attribute ScalingRuleId: Scaling rule id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId();

    /**
     * Attribute TaskId: Task ID.
     * <p>
     * Automatically assigned by the system, the user queries the task status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId();

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkerRamRoleName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.AnyClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cs.IAnyCluster.Jsii$Default {
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
         * Attribute APIServerSLBId: The id of API server SLB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiServerSlbId() {
            return software.amazon.jsii.Kernel.get(this, "attrApiServerSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: Cluster instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultUserKubeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultUserKubeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IngressSLBId: The id of ingress SLB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressSlbId() {
            return software.amazon.jsii.Kernel.get(this, "attrIngressSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Nodes: The list of cluster nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes() {
            return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateUserKubConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateUserKubConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingConfigurationId: Scaling configuration id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingGroupId: Scaling group id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleId: Scaling rule id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskId: Task ID.
         * <p>
         * Automatically assigned by the system, the user queries the task status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkerRamRoleName: Worker ram role name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkerRamRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkerRamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.AnyClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.AnyClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAnyCluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAnyCluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute APIServerSLBId: The id of API server SLB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiServerSlbId() {
            return software.amazon.jsii.Kernel.get(this, "attrApiServerSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: Cluster instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultUserKubeConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrDefaultUserKubeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IngressSLBId: The id of ingress SLB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressSlbId() {
            return software.amazon.jsii.Kernel.get(this, "attrIngressSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Nodes: The list of cluster nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes() {
            return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateUserKubConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateUserKubConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingConfigurationId: Scaling configuration id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingGroupId: Scaling group id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScalingRuleId: Scaling rule id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskId: Task ID.
         * <p>
         * Automatically assigned by the system, the user queries the task status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkerRamRoleName: Worker ram role name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkerRamRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkerRamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.AnyClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.AnyClusterProps.class));
        }
    }
}
