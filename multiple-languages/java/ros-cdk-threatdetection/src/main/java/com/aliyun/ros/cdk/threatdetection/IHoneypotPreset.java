package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>HoneypotPreset</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.652Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IHoneypotPreset")
@software.amazon.jsii.Jsii.Proxy(IHoneypotPreset.Jsii$Proxy.class)
public interface IHoneypotPreset extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute HoneypotImageName: The name of the honeypot image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotImageName();

    /**
     * Attribute HoneypotPresetId: The ID of the honeypot template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotPresetId();

    /**
     * Attribute Meta: The custom configurations of the honeypot template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMeta();

    /**
     * Attribute NodeId: The ID of the management node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId();

    /**
     * Attribute PresetName: The custom name of the honeypot template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPresetName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IHoneypotPreset.Jsii$Default {
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
         * Attribute HoneypotImageName: The name of the honeypot image.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotImageName() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HoneypotPresetId: The ID of the honeypot template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotPresetId() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotPresetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Meta: The custom configurations of the honeypot template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMeta() {
            return software.amazon.jsii.Kernel.get(this, "attrMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeId: The ID of the management node.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PresetName: The custom name of the honeypot template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPresetName() {
            return software.amazon.jsii.Kernel.get(this, "attrPresetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHoneypotPreset}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHoneypotPreset, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute HoneypotImageName: The name of the honeypot image.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotImageName() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HoneypotPresetId: The ID of the honeypot template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHoneypotPresetId() {
            return software.amazon.jsii.Kernel.get(this, "attrHoneypotPresetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Meta: The custom configurations of the honeypot template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMeta() {
            return software.amazon.jsii.Kernel.get(this, "attrMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeId: The ID of the management node.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeId() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PresetName: The custom name of the honeypot template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPresetName() {
            return software.amazon.jsii.Kernel.get(this, "attrPresetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.HoneypotPresetProps.class));
        }
    }
}
