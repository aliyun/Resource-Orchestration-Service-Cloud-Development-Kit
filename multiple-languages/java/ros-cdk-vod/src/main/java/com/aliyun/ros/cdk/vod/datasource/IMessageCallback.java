package com.aliyun.ros.cdk.vod.datasource;

/**
 * Represents a <code>MessageCallback</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.092Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vod.$Module.class, fqn = "@alicloud/ros-cdk-vod.datasource.IMessageCallback")
@software.amazon.jsii.Jsii.Proxy(IMessageCallback.Jsii$Proxy.class)
public interface IMessageCallback extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AppId: The ID of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId();

    /**
     * Attribute AuthKey: The cryptographic key.
     * <p>
     * This parameter is returned only for HTTP callbacks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey();

    /**
     * Attribute AuthSwitch: Indicates whether callback authentication is enabled.
     * <p>
     * This parameter is returned only for HTTP callbacks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthSwitch();

    /**
     * Attribute CallbackType: The callback method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackType();

    /**
     * Attribute CallbackUrl: The callback URL.
     * <p>
     * This parameter is returned only for HTTP callbacks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackUrl();

    /**
     * Attribute EventTypeList: The type of the callback event.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventTypeList();

    /**
     * Attribute MnsEndpoint: The public endpoint of MNS.
     * <p>
     * This parameter is returned only for MNS callbacks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMnsEndpoint();

    /**
     * Attribute MnsQueueName: The name of the Message Service (MNS) queue.
     * <p>
     * This parameter is returned only for MNS callbacks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMnsQueueName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.datasource.MessageCallbackProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vod.datasource.IMessageCallback.Jsii$Default {
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
         * Attribute AppId: The ID of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthKey: The cryptographic key.
         * <p>
         * This parameter is returned only for HTTP callbacks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthSwitch: Indicates whether callback authentication is enabled.
         * <p>
         * This parameter is returned only for HTTP callbacks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackType: The callback method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackType() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackUrl: The callback URL.
         * <p>
         * This parameter is returned only for HTTP callbacks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventTypeList: The type of the callback event.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventTypeList() {
            return software.amazon.jsii.Kernel.get(this, "attrEventTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MnsEndpoint: The public endpoint of MNS.
         * <p>
         * This parameter is returned only for MNS callbacks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMnsEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrMnsEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MnsQueueName: The name of the Message Service (MNS) queue.
         * <p>
         * This parameter is returned only for MNS callbacks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMnsQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrMnsQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.datasource.MessageCallbackProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vod.datasource.MessageCallbackProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IMessageCallback}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IMessageCallback, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AppId: The ID of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthKey: The cryptographic key.
         * <p>
         * This parameter is returned only for HTTP callbacks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AuthSwitch: Indicates whether callback authentication is enabled.
         * <p>
         * This parameter is returned only for HTTP callbacks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackType: The callback method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackType() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CallbackUrl: The callback URL.
         * <p>
         * This parameter is returned only for HTTP callbacks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCallbackUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrCallbackUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventTypeList: The type of the callback event.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventTypeList() {
            return software.amazon.jsii.Kernel.get(this, "attrEventTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MnsEndpoint: The public endpoint of MNS.
         * <p>
         * This parameter is returned only for MNS callbacks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMnsEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrMnsEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MnsQueueName: The name of the Message Service (MNS) queue.
         * <p>
         * This parameter is returned only for MNS callbacks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMnsQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrMnsQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vod.datasource.MessageCallbackProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vod.datasource.MessageCallbackProps.class));
        }
    }
}
