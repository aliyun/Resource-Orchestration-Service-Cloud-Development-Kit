package com.aliyun.ros.cdk.edas;

/**
 * Represents a <code>K8sCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.086Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.IK8sCluster")
@software.amazon.jsii.Jsii.Proxy(IK8sCluster.Jsii$Proxy.class)
public interface IK8sCluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute ClusterName: The name of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName();

    /**
     * Attribute ClusterType: The type of the cluster: 2: ECS cluster 5: Container Service K8s cluster or Serverless K8s cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType();

    /**
     * Attribute CsClusterId: The ID of the K8s cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCsClusterId();

    /**
     * Attribute NetworkMode: Network node: 1: Classic network 2: VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkMode();

    /**
     * Attribute NodeNum: Number of nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeNum();

    /**
     * Attribute SubNetCidr: Sub net CIDR.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubNetCidr();

    /**
     * Attribute VpcId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VswitchId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.edas.IK8sCluster.Jsii$Default {
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
         * Attribute ClusterId: The ID of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterName: The name of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: The type of the cluster: 2: ECS cluster 5: Container Service K8s cluster or Serverless K8s cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CsClusterId: The ID of the K8s cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCsClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrCsClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkMode: Network node: 1: Classic network 2: VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkMode() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeNum: Number of nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeNum() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubNetCidr: Sub net CIDR.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubNetCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSubNetCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VswitchId: The ID of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.K8sClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IK8sCluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IK8sCluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ClusterId: The ID of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterName: The name of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: The type of the cluster: 2: ECS cluster 5: Container Service K8s cluster or Serverless K8s cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CsClusterId: The ID of the K8s cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCsClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrCsClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkMode: Network node: 1: Classic network 2: VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkMode() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeNum: Number of nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeNum() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubNetCidr: Sub net CIDR.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubNetCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSubNetCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VswitchId: The ID of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.K8sClusterProps.class));
        }
    }
}
