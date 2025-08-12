package com.aliyun.ros.cdk.fc3;

/**
 * Represents a <code>Trigger</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.666Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.ITrigger")
@software.amazon.jsii.Jsii.Proxy(ITrigger.Jsii$Proxy.class)
public interface ITrigger extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute FunctionName: Function name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionName();

    /**
     * Attribute TriggerId: The trigger ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerId();

    /**
     * Attribute TriggerName: Trigger name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerName();

    /**
     * Attribute UrlInternet: The public domain address.
     * <p>
     * You can access HTTP triggers over the Internet by using HTTP or HTTPS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlInternet();

    /**
     * Attribute UrlIntranet: The private endpoint.
     * <p>
     * In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlIntranet();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.TriggerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.fc3.ITrigger.Jsii$Default {
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
         * Attribute FunctionName: Function name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionName() {
            return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TriggerId: The trigger ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerId() {
            return software.amazon.jsii.Kernel.get(this, "attrTriggerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TriggerName: Trigger name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerName() {
            return software.amazon.jsii.Kernel.get(this, "attrTriggerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UrlInternet: The public domain address.
         * <p>
         * You can access HTTP triggers over the Internet by using HTTP or HTTPS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlInternet() {
            return software.amazon.jsii.Kernel.get(this, "attrUrlInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UrlIntranet: The private endpoint.
         * <p>
         * In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlIntranet() {
            return software.amazon.jsii.Kernel.get(this, "attrUrlIntranet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.TriggerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.TriggerProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITrigger}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITrigger, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute FunctionName: Function name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionName() {
            return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TriggerId: The trigger ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerId() {
            return software.amazon.jsii.Kernel.get(this, "attrTriggerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TriggerName: Trigger name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerName() {
            return software.amazon.jsii.Kernel.get(this, "attrTriggerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UrlInternet: The public domain address.
         * <p>
         * You can access HTTP triggers over the Internet by using HTTP or HTTPS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlInternet() {
            return software.amazon.jsii.Kernel.get(this, "attrUrlInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UrlIntranet: The private endpoint.
         * <p>
         * In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrlIntranet() {
            return software.amazon.jsii.Kernel.get(this, "attrUrlIntranet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.TriggerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.TriggerProps.class));
        }
    }
}
