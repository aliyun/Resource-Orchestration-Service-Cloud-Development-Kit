package com.aliyun.ros.cdk.apig;

/**
 * Represents a <code>HttpApi</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.521Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.IHttpApi")
@software.amazon.jsii.Jsii.Proxy(IHttpApi.Jsii$Proxy.class)
public interface IHttpApi extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BasePath: The base path of the API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBasePath();

    /**
     * Attribute Description: Description of API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Environments: Published Environmental Information of the API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironments();

    /**
     * Attribute HttpApiId: The ID of the API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiId();

    /**
     * Attribute HttpApiName: The name of the API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiName();

    /**
     * Attribute Protocols: List of API Access Protocols.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocols();

    /**
     * Attribute Type: The type of HTTP API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.IHttpApi.Jsii$Default {
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
         * Attribute BasePath: The base path of the API.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBasePath() {
            return software.amazon.jsii.Kernel.get(this, "attrBasePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Description of API.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Environments: Published Environmental Information of the API.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironments() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpApiId: The ID of the API.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiId() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpApiName: The name of the API.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiName() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Protocols: List of API Access Protocols.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocols() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of HTTP API.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.HttpApiProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHttpApi}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHttpApi, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BasePath: The base path of the API.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBasePath() {
            return software.amazon.jsii.Kernel.get(this, "attrBasePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Description of API.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Environments: Published Environmental Information of the API.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironments() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpApiId: The ID of the API.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiId() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpApiName: The name of the API.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiName() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpApiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Protocols: List of API Access Protocols.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocols() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of HTTP API.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.HttpApiProps.class));
        }
    }
}
