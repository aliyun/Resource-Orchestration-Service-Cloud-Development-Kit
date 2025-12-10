package com.aliyun.ros.cdk.privatelink;

/**
 * Represents a <code>VpcEndpointService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.181Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.IVpcEndpointService")
@software.amazon.jsii.Jsii.Proxy(IVpcEndpointService.Jsii$Proxy.class)
public interface IVpcEndpointService extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxBandwidth();

    /**
     * Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinBandwidth();

    /**
     * Attribute ServiceDescription: The description of the endpoint service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDescription();

    /**
     * Attribute ServiceDomain: The domain name of the endpoint service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDomain();

    /**
     * Attribute ServiceId: The ID of the endpoint service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId();

    /**
     * Attribute ServiceName: The name of the endpoint service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.privatelink.IVpcEndpointService.Jsii$Default {
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
         * Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrMinBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceDescription: The description of the endpoint service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceDomain: The domain name of the endpoint service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: The ID of the endpoint service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: The name of the endpoint service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVpcEndpointService}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVpcEndpointService, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrMinBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceDescription: The description of the endpoint service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceDomain: The domain name of the endpoint service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: The ID of the endpoint service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: The name of the endpoint service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps.class));
        }
    }
}
