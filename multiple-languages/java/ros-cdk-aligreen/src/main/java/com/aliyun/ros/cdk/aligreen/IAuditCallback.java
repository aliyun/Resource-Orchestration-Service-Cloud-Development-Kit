package com.aliyun.ros.cdk.aligreen;

/**
 * Represents a <code>AuditCallback</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.712Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.IAuditCallback")
@software.amazon.jsii.Jsii.Proxy(IAuditCallback.Jsii$Proxy.class)
public interface IAuditCallback extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AuditCallbackName: The AuditCallback name defined by the customer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuditCallbackName();

    /**
     * Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackSuggestions();

    /**
     * Attribute CallbackTypes: A list of Callback types.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackTypes();

    /**
     * Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCryptType();

    /**
     * Attribute Url: The detection result will be called back to the url.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.AuditCallbackProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.aligreen.IAuditCallback.Jsii$Default {
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
         * Attribute AuditCallbackName: The AuditCallback name defined by the customer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuditCallbackName() {
            return software.amazon.jsii.Kernel.get(this, "attrAuditCallbackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackSuggestions: List of audit results supported by message notification.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackSuggestions() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackSuggestions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackTypes: A list of Callback types.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCryptType() {
            return software.amazon.jsii.Kernel.get(this, "attrCryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Url: The detection result will be called back to the url.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.AuditCallbackProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.AuditCallbackProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAuditCallback}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAuditCallback, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AuditCallbackName: The AuditCallback name defined by the customer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuditCallbackName() {
            return software.amazon.jsii.Kernel.get(this, "attrAuditCallbackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackSuggestions: List of audit results supported by message notification.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackSuggestions() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackSuggestions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackTypes: A list of Callback types.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCryptType() {
            return software.amazon.jsii.Kernel.get(this, "attrCryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Url: The detection result will be called back to the url.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.AuditCallbackProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.AuditCallbackProps.class));
        }
    }
}
