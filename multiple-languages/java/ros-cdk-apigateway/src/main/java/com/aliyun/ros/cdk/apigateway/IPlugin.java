package com.aliyun.ros.cdk.apigateway;

/**
 * Represents a <code>Plugin</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.561Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.IPlugin")
@software.amazon.jsii.Jsii.Proxy(IPlugin.Jsii$Proxy.class)
public interface IPlugin extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute PluginData: The definition statement of the plug-in.
     * <p>
     * Plug-in definition statements in the JSON and YAML formats are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginData();

    /**
     * Attribute PluginId: The generated plugin ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginId();

    /**
     * Attribute PluginName: The name of the plug-in that you want to create.
     * <p>
     * It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginName();

    /**
     * Attribute PluginType: The type of the plug-in.
     * <p>
     * Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.PluginProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apigateway.IPlugin.Jsii$Default {
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
         * Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginData: The definition statement of the plug-in.
         * <p>
         * Plug-in definition statements in the JSON and YAML formats are supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginData() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginId: The generated plugin ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginId() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginName: The name of the plug-in that you want to create.
         * <p>
         * It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginName() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginType: The type of the plug-in.
         * <p>
         * Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginType() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.PluginProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.PluginProps.class));
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
         * Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginData: The definition statement of the plug-in.
         * <p>
         * Plug-in definition statements in the JSON and YAML formats are supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginData() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginId: The generated plugin ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginId() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginName: The name of the plug-in that you want to create.
         * <p>
         * It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginName() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginType: The type of the plug-in.
         * <p>
         * Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginType() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.PluginProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.PluginProps.class));
        }
    }
}
