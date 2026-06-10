package com.aliyun.ros.cdk.eventbridge;

/**
 * Represents a <code>ApiDestination</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:01:25.393Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.IApiDestination")
@software.amazon.jsii.Jsii.Proxy(IApiDestination.Jsii$Proxy.class)
public interface IApiDestination extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ApiDestinationName: The name of the api.
     * <p>
     * The maximum length is 127 characters. Minimum length 2 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiDestinationName();

    /**
     * Attribute ConnectionName: The connection configuration name.
     * <p>
     * The maximum length is 127 characters. Minimum length 2 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionName();

    /**
     * Attribute CreateTime: Creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the api.
     * <p>
     * It must be no more than 255 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute HttpApiParameters: Configuration information for API endpoints.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiParameters();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ApiDestinationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.eventbridge.IApiDestination.Jsii$Default {
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
         * Attribute ApiDestinationName: The name of the api.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiDestinationName() {
            return software.amazon.jsii.Kernel.get(this, "attrApiDestinationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionName: The connection configuration name.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionName() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the api.
         * <p>
         * It must be no more than 255 characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpApiParameters: Configuration information for API endpoints.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ApiDestinationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eventbridge.ApiDestinationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IApiDestination}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IApiDestination, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ApiDestinationName: The name of the api.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiDestinationName() {
            return software.amazon.jsii.Kernel.get(this, "attrApiDestinationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionName: The connection configuration name.
         * <p>
         * The maximum length is 127 characters. Minimum length 2 characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionName() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the api.
         * <p>
         * It must be no more than 255 characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpApiParameters: Configuration information for API endpoints.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.ApiDestinationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eventbridge.ApiDestinationProps.class));
        }
    }
}
