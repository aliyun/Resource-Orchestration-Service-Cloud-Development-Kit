package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>HpcClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.582Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.IHpcClusters")
@software.amazon.jsii.Jsii.Proxy(IHpcClusters.Jsii$Proxy.class)
public interface IHpcClusters extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute HpcClusterIds: the list of hpc cluster ids.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusterIds();

    /**
     * Attribute HpcClusters: The list of hpc clusters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusters();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.IHpcClusters.Jsii$Default {
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
         * Attribute HpcClusterIds: the list of hpc cluster ids.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusterIds() {
            return software.amazon.jsii.Kernel.get(this, "attrHpcClusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HpcClusters: The list of hpc clusters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusters() {
            return software.amazon.jsii.Kernel.get(this, "attrHpcClusters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHpcClusters}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHpcClusters, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute HpcClusterIds: the list of hpc cluster ids.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusterIds() {
            return software.amazon.jsii.Kernel.get(this, "attrHpcClusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HpcClusters: The list of hpc clusters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHpcClusters() {
            return software.amazon.jsii.Kernel.get(this, "attrHpcClusters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.HpcClustersProps.class));
        }
    }
}
