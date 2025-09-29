package com.aliyun.ros.cdk.elasticsearchserverless;

/**
 * Represents a <code>App</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.152Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.IApp")
@software.amazon.jsii.Jsii.Proxy(IApp.Jsii$Proxy.class)
public interface IApp extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute InstanceId: The Id of the ElasticSearch serverless instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute PrivateESDomain: The private network domain of the app.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateEsDomain();

    /**
     * Attribute PrivateKibanaDomain: The private network kibana domain of the app.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateKibanaDomain();

    /**
     * Attribute PublicESDomain: The public network domain of the app.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicEsDomain();

    /**
     * Attribute PublicKibanaDomain: The public network kibana domain of the app.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicKibanaDomain();

    /**
     * Attribute Username: The username of the app.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsername();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.AppProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.elasticsearchserverless.IApp.Jsii$Default {
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
         * Attribute InstanceId: The Id of the ElasticSearch serverless instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateESDomain: The private network domain of the app.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateEsDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateEsDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateKibanaDomain: The private network kibana domain of the app.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateKibanaDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicESDomain: The public network domain of the app.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicEsDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicEsDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicKibanaDomain: The public network kibana domain of the app.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicKibanaDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Username: The username of the app.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsername() {
            return software.amazon.jsii.Kernel.get(this, "attrUsername", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.AppProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.elasticsearchserverless.AppProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IApp}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IApp, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute InstanceId: The Id of the ElasticSearch serverless instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateESDomain: The private network domain of the app.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateEsDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateEsDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateKibanaDomain: The private network kibana domain of the app.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateKibanaDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicESDomain: The public network domain of the app.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicEsDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicEsDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicKibanaDomain: The public network kibana domain of the app.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicKibanaDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Username: The username of the app.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsername() {
            return software.amazon.jsii.Kernel.get(this, "attrUsername", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.AppProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.elasticsearchserverless.AppProps.class));
        }
    }
}
