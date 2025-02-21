package com.aliyun.ros.cdk.apig;

/**
 * Represents a <code>Plugin</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:11.688Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.IPlugin")
@software.amazon.jsii.Jsii.Proxy(IPlugin.Jsii$Proxy.class)
public interface IPlugin extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayId();

    /**
     * Attribute GatewayName: The name of the gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayName();

    /**
     * Attribute PluginClassId: The ID of the plugin class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassId();

    /**
     * Attribute PluginId: The ID of the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.IPlugin.Jsii$Default {
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
         * Attribute GatewayId: The ID of the Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayName: The name of the gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginClassId: The ID of the plugin class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassId() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginClassId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginId: The ID of the plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginId() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PluginProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPlugin}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPlugin, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute GatewayId: The ID of the Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayName: The name of the gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginClassId: The ID of the plugin class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassId() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginClassId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginId: The ID of the plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginId() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PluginProps.class));
        }
    }
}
