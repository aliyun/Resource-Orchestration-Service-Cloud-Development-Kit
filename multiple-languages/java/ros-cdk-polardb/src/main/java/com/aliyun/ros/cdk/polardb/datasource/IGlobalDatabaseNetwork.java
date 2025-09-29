package com.aliyun.ros.cdk.polardb.datasource;

/**
 * Represents a <code>GlobalDatabaseNetwork</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:28.125Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.IGlobalDatabaseNetwork")
@software.amazon.jsii.Jsii.Proxy(IGlobalDatabaseNetwork.Jsii$Proxy.class)
public interface IGlobalDatabaseNetwork extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Connections: The information about the connection to the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnections();

    /**
     * Attribute CreateTime: The time at which the GDN was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DbClusters: The clusters that are included in the GDN.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusters();

    /**
     * Attribute DbType: The type of the database engine.
     * <p>
     * Only MySQL is supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType();

    /**
     * Attribute DbVersion: The version of the database engine.
     * <p>
     * Only version 8.0 is supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion();

    /**
     * Attribute GdnDescription: The description of the GDN.
     * <p>
     * The description must meet the following requirements:
     * It cannot start with http:// or https://.
     * It must start with a letter.
     * It can contain letters, digits, underscores (_), and hyphens (-).
     * It must be 2 to 126 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGdnDescription();

    /**
     * Attribute GdnId: The ID of the GDN.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGdnId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworkProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.polardb.datasource.IGlobalDatabaseNetwork.Jsii$Default {
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
         * Attribute Connections: The information about the connection to the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnections() {
            return software.amazon.jsii.Kernel.get(this, "attrConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time at which the GDN was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbClusters: The clusters that are included in the GDN.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusters() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbType: The type of the database engine.
         * <p>
         * Only MySQL is supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbVersion: The version of the database engine.
         * <p>
         * Only version 8.0 is supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GdnDescription: The description of the GDN.
         * <p>
         * The description must meet the following requirements:
         * It cannot start with http:// or https://.
         * It must start with a letter.
         * It can contain letters, digits, underscores (_), and hyphens (-).
         * It must be 2 to 126 characters in length.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGdnDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrGdnDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GdnId: The ID of the GDN.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGdnId() {
            return software.amazon.jsii.Kernel.get(this, "attrGdnId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworkProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworkProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IGlobalDatabaseNetwork}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IGlobalDatabaseNetwork, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Connections: The information about the connection to the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnections() {
            return software.amazon.jsii.Kernel.get(this, "attrConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time at which the GDN was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbClusters: The clusters that are included in the GDN.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusters() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbType: The type of the database engine.
         * <p>
         * Only MySQL is supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbVersion: The version of the database engine.
         * <p>
         * Only version 8.0 is supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GdnDescription: The description of the GDN.
         * <p>
         * The description must meet the following requirements:
         * It cannot start with http:// or https://.
         * It must start with a letter.
         * It can contain letters, digits, underscores (_), and hyphens (-).
         * It must be 2 to 126 characters in length.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGdnDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrGdnDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GdnId: The ID of the GDN.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGdnId() {
            return software.amazon.jsii.Kernel.get(this, "attrGdnId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworkProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworkProps.class));
        }
    }
}
