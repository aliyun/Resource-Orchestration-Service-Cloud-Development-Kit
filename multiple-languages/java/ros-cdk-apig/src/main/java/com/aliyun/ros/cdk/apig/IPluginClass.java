package com.aliyun.ros.cdk.apig;

/**
 * Represents a <code>PluginClass</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.900Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.IPluginClass")
@software.amazon.jsii.Jsii.Proxy(IPluginClass.Jsii$Proxy.class)
public interface IPluginClass extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Alias: The alias of the plugin class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlias();

    /**
     * Attribute Description: The description of the plugin class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Document: The document of plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDocument();

    /**
     * Attribute PluginClassName: The name of the plugin class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassName();

    /**
     * Attribute Type: The type of the plugin class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute WasmLanguage: Wasm language.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWasmLanguage();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginClassProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.IPluginClass.Jsii$Default {
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
         * Attribute Alias: The alias of the plugin class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the plugin class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Document: The document of plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDocument() {
            return software.amazon.jsii.Kernel.get(this, "attrDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginClassName: The name of the plugin class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassName() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the plugin class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WasmLanguage: Wasm language.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWasmLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrWasmLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginClassProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PluginClassProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPluginClass}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPluginClass, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Alias: The alias of the plugin class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlias() {
            return software.amazon.jsii.Kernel.get(this, "attrAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the plugin class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Document: The document of plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDocument() {
            return software.amazon.jsii.Kernel.get(this, "attrDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginClassName: The name of the plugin class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassName() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the plugin class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WasmLanguage: Wasm language.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWasmLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrWasmLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginClassProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PluginClassProps.class));
        }
    }
}
