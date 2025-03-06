package com.aliyun.ros.cdk.polardb;

/**
 * Represents a <code>DBCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.955Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.IDBCluster")
@software.amazon.jsii.Jsii.Proxy(IDBCluster.Jsii$Proxy.class)
public interface IDBCluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterConnectionString();

    /**
     * Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterEndpointId();

    /**
     * Attribute ColdStorageInstanceId: The ID of the cold storage instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrColdStorageInstanceId();

    /**
     * Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomConnectionStrings();

    /**
     * Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomEndpointIds();

    /**
     * Attribute DBClusterDescription: The description of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterDescription();

    /**
     * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId();

    /**
     * Attribute DBNodeIds: The ID list of cluster nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeIds();

    /**
     * Attribute OrderId: The Order ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId();

    /**
     * Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryConnectionString();

    /**
     * Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryConnectionStrings();

    /**
     * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryEndpointId();

    /**
     * Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryEndpointIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.polardb.IDBCluster.Jsii$Default {
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
         * Attribute ClusterConnectionString: The cluster connection string of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ColdStorageInstanceId: The ID of the cold storage instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrColdStorageInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrColdStorageInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomConnectionStrings() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomConnectionStrings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomEndpointIds() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomEndpointIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterDescription: The description of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeIds: The ID list of cluster nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The Order ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryConnectionString: The primary connection string of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryConnectionStrings() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryConnectionStrings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryEndpointIds() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DBClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDBCluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDBCluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ClusterConnectionString: The cluster connection string of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ColdStorageInstanceId: The ID of the cold storage instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrColdStorageInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrColdStorageInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomConnectionStrings() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomConnectionStrings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomEndpointIds() {
            return software.amazon.jsii.Kernel.get(this, "attrCustomEndpointIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterDescription: The description of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeIds: The ID list of cluster nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The Order ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryConnectionString: The primary connection string of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryConnectionStrings() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryConnectionStrings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryEndpointIds() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DBClusterProps.class));
        }
    }
}
