package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>IpamScope</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:21.854Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IIpamScope")
@software.amazon.jsii.Jsii.Proxy(IIpamScope.Jsii$Proxy.class)
public interface IIpamScope extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the IPAM scope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute IpamId: The id of the Ipam instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamId();

    /**
     * Attribute IpamScopeDescription: The description of the IPAM's scope of action.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeDescription();

    /**
     * Attribute IpamScopeId: The ID of the IPAM scope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeId();

    /**
     * Attribute IpamScopeName: The name of the IPAM scope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeName();

    /**
     * Attribute IpamScopeType: IPAM scope of action type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeType();

    /**
     * Attribute Tags: The tag of the IPAM scope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamScopeProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IIpamScope.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the IPAM scope.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamId: The id of the Ipam instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamScopeDescription: The description of the IPAM's scope of action.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamScopeDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamScopeId: The ID of the IPAM scope.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamScopeName: The name of the IPAM scope.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamScopeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamScopeType: IPAM scope of action type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeType() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamScopeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the IPAM scope.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamScopeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamScopeProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IIpamScope}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IIpamScope, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the IPAM scope.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamId: The id of the Ipam instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamScopeDescription: The description of the IPAM's scope of action.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamScopeDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamScopeId: The ID of the IPAM scope.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamScopeName: The name of the IPAM scope.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamScopeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamScopeType: IPAM scope of action type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamScopeType() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamScopeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the IPAM scope.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamScopeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamScopeProps.class));
        }
    }
}
