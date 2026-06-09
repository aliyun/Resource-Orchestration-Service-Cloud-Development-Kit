package com.aliyun.ros.cdk.clickhouse;

/**
 * Represents a <code>EnterpriseDBClusterSecurityIP</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:46:45.062Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterSecurityIP")
@software.amazon.jsii.Jsii.Proxy(IEnterpriseDBClusterSecurityIP.Jsii$Proxy.class)
public interface IEnterpriseDBClusterSecurityIP extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute GroupName: The name of the whitelist whose settings you want to modify.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName();

    /**
     * Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList();

    /**
     * Attribute SecurityIpType: The type of IP address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpType();

    /**
     * Attribute WhitelistNetType: The network type of the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistNetType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.clickhouse.IEnterpriseDBClusterSecurityIP.Jsii$Default {
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
         * Attribute GroupName: The name of the whitelist whose settings you want to modify.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpType: The type of IP address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpType() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WhitelistNetType: The network type of the whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistNetType() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelistNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEnterpriseDBClusterSecurityIP}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEnterpriseDBClusterSecurityIP, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute GroupName: The name of the whitelist whose settings you want to modify.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpType: The type of IP address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpType() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WhitelistNetType: The network type of the whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistNetType() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelistNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterSecurityIPProps.class));
        }
    }
}
