package com.aliyun.ros.cdk.fc;

/**
 * Represents a <code>Service</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.621Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.IService")
@software.amazon.jsii.Jsii.Proxy(IService.Jsii$Proxy.class)
public interface IService extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute InternetAccess: Whether enable Internet access.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAccess();

    /**
     * Attribute LogProject: Log project of service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogProject();

    /**
     * Attribute Logstore: Log store of service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogstore();

    /**
     * Attribute Role: Role of service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole();

    /**
     * Attribute ServiceId: The service ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId();

    /**
     * Attribute ServiceName: The service name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName();

    /**
     * Attribute Tags: Tags of service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcId: VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.ServiceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.fc.IService.Jsii$Default {
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
         * Attribute InternetAccess: Whether enable Internet access.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAccess() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogProject: Log project of service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogProject() {
            return software.amazon.jsii.Kernel.get(this, "attrLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Logstore: Log store of service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogstore() {
            return software.amazon.jsii.Kernel.get(this, "attrLogstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Role: Role of service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole() {
            return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: The service ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: The service name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tags of service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.ServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.ServiceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IService}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IService, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute InternetAccess: Whether enable Internet access.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetAccess() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogProject: Log project of service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogProject() {
            return software.amazon.jsii.Kernel.get(this, "attrLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Logstore: Log store of service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogstore() {
            return software.amazon.jsii.Kernel.get(this, "attrLogstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Role: Role of service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRole() {
            return software.amazon.jsii.Kernel.get(this, "attrRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: The service ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: The service name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Tags of service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.ServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.ServiceProps.class));
        }
    }
}
