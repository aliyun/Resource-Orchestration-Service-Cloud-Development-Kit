package com.aliyun.ros.cdk.edas;

/**
 * Represents a <code>ClusterMember</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.868Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.IClusterMember")
@software.amazon.jsii.Jsii.Proxy(IClusterMember.Jsii$Proxy.class)
public interface IClusterMember extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ClusterId: Cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterMemberIds();

    /**
     * Attribute EcuIds: ECU IDs corresponding to the ECS instance IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcuIds();

    /**
     * Attribute InstanceIds: ECS instance IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.ClusterMemberProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.edas.IClusterMember.Jsii$Default {
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
         * Attribute ClusterId: Cluster ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterMemberIds() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterMemberIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcuIds: ECU IDs corresponding to the ECS instance IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcuIds() {
            return software.amazon.jsii.Kernel.get(this, "attrEcuIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceIds: ECS instance IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.ClusterMemberProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.ClusterMemberProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IClusterMember}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IClusterMember, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ClusterId: Cluster ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterMemberIds() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterMemberIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcuIds: ECU IDs corresponding to the ECS instance IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcuIds() {
            return software.amazon.jsii.Kernel.get(this, "attrEcuIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceIds: ECS instance IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.ClusterMemberProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.ClusterMemberProps.class));
        }
    }
}
