package com.aliyun.ros.cdk.oss;

/**
 * Represents a <code>BucketCnameToken</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.857Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.IBucketCnameToken")
@software.amazon.jsii.Jsii.Proxy(IBucketCnameToken.Jsii$Proxy.class)
public interface IBucketCnameToken extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Bucket: The name of the bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBucket();

    /**
     * Attribute Domain: The custom domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain();

    /**
     * Attribute ExpireTime: Token Expiration Time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime();

    /**
     * Attribute Token: Token used to verify domain ownership.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrToken();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketCnameTokenProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oss.IBucketCnameToken.Jsii$Default {
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
         * Attribute Bucket: The name of the bucket.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBucket() {
            return software.amazon.jsii.Kernel.get(this, "attrBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domain: The custom domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: Token Expiration Time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Token: Token used to verify domain ownership.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrToken() {
            return software.amazon.jsii.Kernel.get(this, "attrToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketCnameTokenProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.BucketCnameTokenProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBucketCnameToken}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBucketCnameToken, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Bucket: The name of the bucket.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBucket() {
            return software.amazon.jsii.Kernel.get(this, "attrBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domain: The custom domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: Token Expiration Time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Token: Token used to verify domain ownership.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrToken() {
            return software.amazon.jsii.Kernel.get(this, "attrToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketCnameTokenProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.BucketCnameTokenProps.class));
        }
    }
}
