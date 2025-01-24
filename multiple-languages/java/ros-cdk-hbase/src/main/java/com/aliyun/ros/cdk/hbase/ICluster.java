package com.aliyun.ros.cdk.hbase;

/**
 * Represents a <code>Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.692Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbase.$Module.class, fqn = "@alicloud/ros-cdk-hbase.ICluster")
@software.amazon.jsii.Jsii.Proxy(ICluster.Jsii$Proxy.class)
public interface ICluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ClusterId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConnAddrs();

    /**
     * Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlbConnAddrs();

    /**
     * Attribute ThriftConn: Thrift Connection address list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrThriftConn();

    /**
     * Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUiProxyConnAddrInfo();

    /**
     * Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZkConnAddrs();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.ClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.hbase.ICluster.Jsii$Default {
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
         * Attribute ClusterId: The ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConnAddrs() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlbConnAddrs: LIST of SlbConnAddr.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlbConnAddrs() {
            return software.amazon.jsii.Kernel.get(this, "attrSlbConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ThriftConn: Thrift Connection address list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrThriftConn() {
            return software.amazon.jsii.Kernel.get(this, "attrThriftConn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UiProxyConnAddrInfo: WebUI connection information list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUiProxyConnAddrInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrUiProxyConnAddrInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZkConnAddrs: List of ZkConnAddr.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZkConnAddrs() {
            return software.amazon.jsii.Kernel.get(this, "attrZkConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.ClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbase.ClusterProps.class));
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
         * Attribute ClusterId: The ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConnAddrs() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlbConnAddrs: LIST of SlbConnAddr.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlbConnAddrs() {
            return software.amazon.jsii.Kernel.get(this, "attrSlbConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ThriftConn: Thrift Connection address list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrThriftConn() {
            return software.amazon.jsii.Kernel.get(this, "attrThriftConn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UiProxyConnAddrInfo: WebUI connection information list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUiProxyConnAddrInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrUiProxyConnAddrInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZkConnAddrs: List of ZkConnAddr.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZkConnAddrs() {
            return software.amazon.jsii.Kernel.get(this, "attrZkConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.ClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbase.ClusterProps.class));
        }
    }
}
