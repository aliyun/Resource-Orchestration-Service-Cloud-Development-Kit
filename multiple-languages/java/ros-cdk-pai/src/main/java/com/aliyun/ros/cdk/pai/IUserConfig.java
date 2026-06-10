package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>UserConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:20:13.794Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IUserConfig")
@software.amazon.jsii.Jsii.Proxy(IUserConfig.Jsii$Proxy.class)
public interface IUserConfig extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CategoryName: Represents a resource attribute for a configuration category.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategoryName();

    /**
     * Attribute ConfigKey: Represents the resource attribute of the configuration Key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigKey();

    /**
     * Attribute Configs: Represents a resource property for the configuration list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigs();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.UserConfigProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IUserConfig.Jsii$Default {
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
         * Attribute CategoryName: Represents a resource attribute for a configuration category.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategoryName() {
            return software.amazon.jsii.Kernel.get(this, "attrCategoryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigKey: Represents the resource attribute of the configuration Key.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigKey() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Configs: Represents a resource property for the configuration list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigs() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.UserConfigProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.UserConfigProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IUserConfig}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IUserConfig, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CategoryName: Represents a resource attribute for a configuration category.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategoryName() {
            return software.amazon.jsii.Kernel.get(this, "attrCategoryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigKey: Represents the resource attribute of the configuration Key.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigKey() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Configs: Represents a resource property for the configuration list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigs() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.UserConfigProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.UserConfigProps.class));
        }
    }
}
