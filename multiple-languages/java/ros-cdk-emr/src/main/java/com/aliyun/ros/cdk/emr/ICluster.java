package com.aliyun.ros.cdk.emr;

/**
 * Represents a <code>Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.197Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.ICluster")
@software.amazon.jsii.Jsii.Proxy(ICluster.Jsii$Proxy.class)
public interface ICluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute HostGroups: The host group list of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostGroups();

    /**
     * Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterNodeInnerIps();

    /**
     * Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterNodePubIps();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.emr.ICluster.Jsii$Default {
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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: The ID of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostGroups: The host group list of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrHostGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterNodeInnerIps() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterNodeInnerIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterNodePubIps() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterNodePubIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.ClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: The ID of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostGroups: The host group list of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostGroups() {
            return software.amazon.jsii.Kernel.get(this, "attrHostGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterNodeInnerIps() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterNodeInnerIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterNodePubIps: The public ip list of the cluster master nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterNodePubIps() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterNodePubIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.ClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.ClusterProps.class));
        }
    }
}
