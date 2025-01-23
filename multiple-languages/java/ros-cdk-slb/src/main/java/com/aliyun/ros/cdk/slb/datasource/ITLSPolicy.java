package com.aliyun.ros.cdk.slb.datasource;

/**
 * Represents a <code>TLSPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:44.388Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.ITLSPolicy")
@software.amazon.jsii.Jsii.Proxy(ITLSPolicy.Jsii$Proxy.class)
public interface ITLSPolicy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Ciphers: The cipher suites supported by the TLS version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphers();

    /**
     * Attribute CreateTime: The timestamp generated when the TLS policy is created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute InstanceId: The ID of the TLS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute TLSPolicyName: The name of the TLS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsPolicyName();

    /**
     * Attribute TlsVersions: The version of the TLS protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsVersions();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.TLSPolicyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.slb.datasource.ITLSPolicy.Jsii$Default {
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
         * Attribute Ciphers: The cipher suites supported by the TLS version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphers() {
            return software.amazon.jsii.Kernel.get(this, "attrCiphers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The timestamp generated when the TLS policy is created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the TLS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TLSPolicyName: The name of the TLS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlsVersions: The version of the TLS protocol.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsVersions() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.TLSPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.TLSPolicyProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITLSPolicy}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITLSPolicy, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Ciphers: The cipher suites supported by the TLS version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphers() {
            return software.amazon.jsii.Kernel.get(this, "attrCiphers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The timestamp generated when the TLS policy is created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the TLS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TLSPolicyName: The name of the TLS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TlsVersions: The version of the TLS protocol.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsVersions() {
            return software.amazon.jsii.Kernel.get(this, "attrTlsVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.TLSPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.TLSPolicyProps.class));
        }
    }
}
