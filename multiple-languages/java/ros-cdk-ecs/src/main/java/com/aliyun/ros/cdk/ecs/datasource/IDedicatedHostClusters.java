package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>DedicatedHostClusters</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.710Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.IDedicatedHostClusters")
@software.amazon.jsii.Jsii.Proxy(IDedicatedHostClusters.Jsii$Proxy.class)
public interface IDedicatedHostClusters extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostClusterIds();

    /**
     * Attribute DedicatedHostClusters: The list of dedicated host clusters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostClusters();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DedicatedHostClustersProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.IDedicatedHostClusters.Jsii$Default {
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
         * Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostClusterIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostClusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostClusters: The list of dedicated host clusters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostClusters() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostClusters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DedicatedHostClustersProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DedicatedHostClustersProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDedicatedHostClusters}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDedicatedHostClusters, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostClusterIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostClusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostClusters: The list of dedicated host clusters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostClusters() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostClusters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DedicatedHostClustersProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DedicatedHostClustersProps.class));
        }
    }
}
