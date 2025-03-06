package com.aliyun.ros.cdk.polardb;

/**
 * Represents a <code>DBClusterEndpoint</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.971Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.IDBClusterEndpoint")
@software.amazon.jsii.Jsii.Proxy(IDBClusterEndpoint.Jsii$Proxy.class)
public interface IDBClusterEndpoint extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Addresses: The address items of the db cluster endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddresses();

    /**
     * Attribute ConnectionString: The first connection string of the db cluster endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString();

    /**
     * Attribute DBEndpointId: DB cluster endpoint ID.
     * <p>
     * E.g. pe-xxxxxxxx.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbEndpointId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.polardb.IDBClusterEndpoint.Jsii$Default {
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
         * Attribute Addresses: The address items of the db cluster endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionString: The first connection string of the db cluster endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBEndpointId: DB cluster endpoint ID.
         * <p>
         * E.g. pe-xxxxxxxx.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DBClusterEndpointProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDBClusterEndpoint}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDBClusterEndpoint, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Addresses: The address items of the db cluster endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionString: The first connection string of the db cluster endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBEndpointId: DB cluster endpoint ID.
         * <p>
         * E.g. pe-xxxxxxxx.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbEndpointId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterEndpointProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DBClusterEndpointProps.class));
        }
    }
}
