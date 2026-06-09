package com.aliyun.ros.cdk.rocketmq5;

/**
 * Represents a <code>Acl</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:40:34.084Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.IAcl")
@software.amazon.jsii.Jsii.Proxy(IAcl.Jsii$Proxy.class)
public interface IAcl extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Actions: The type of operation authorized.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrActions();

    /**
     * Attribute Decision: The decision result of the authorization.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDecision();

    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute IpWhitelists: The IP addresses in the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpWhitelists();

    /**
     * Attribute ResourceName: The name of the resource on which you want to grant permissions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceName();

    /**
     * Attribute ResourceType: The type of the resource on which you want to grant permissions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType();

    /**
     * Attribute Username: The username of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsername();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.AclProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.rocketmq5.IAcl.Jsii$Default {
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
         * Attribute Actions: The type of operation authorized.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrActions() {
            return software.amazon.jsii.Kernel.get(this, "attrActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Decision: The decision result of the authorization.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDecision() {
            return software.amazon.jsii.Kernel.get(this, "attrDecision", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the RocketMQ instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpWhitelists: The IP addresses in the whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpWhitelists() {
            return software.amazon.jsii.Kernel.get(this, "attrIpWhitelists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceName: The name of the resource on which you want to grant permissions.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceName() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: The type of the resource on which you want to grant permissions.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Username: The username of the account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsername() {
            return software.amazon.jsii.Kernel.get(this, "attrUsername", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.AclProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rocketmq5.AclProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAcl}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAcl, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Actions: The type of operation authorized.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrActions() {
            return software.amazon.jsii.Kernel.get(this, "attrActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Decision: The decision result of the authorization.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDecision() {
            return software.amazon.jsii.Kernel.get(this, "attrDecision", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the RocketMQ instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpWhitelists: The IP addresses in the whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpWhitelists() {
            return software.amazon.jsii.Kernel.get(this, "attrIpWhitelists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceName: The name of the resource on which you want to grant permissions.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceName() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: The type of the resource on which you want to grant permissions.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Username: The username of the account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsername() {
            return software.amazon.jsii.Kernel.get(this, "attrUsername", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.AclProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rocketmq5.AclProps.class));
        }
    }
}
