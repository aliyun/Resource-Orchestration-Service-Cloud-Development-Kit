package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>AttackPathSensitiveAssetConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IAttackPathSensitiveAssetConfig")
@software.amazon.jsii.Jsii.Proxy(IAttackPathSensitiveAssetConfig.Jsii$Proxy.class)
public interface IAttackPathSensitiveAssetConfig extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathAssetList();

    /**
     * Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathSensitiveAssetConfigId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IAttackPathSensitiveAssetConfig.Jsii$Default {
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
         * Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathAssetList() {
            return software.amazon.jsii.Kernel.get(this, "attrAttackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathSensitiveAssetConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrAttackPathSensitiveAssetConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAttackPathSensitiveAssetConfig}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAttackPathSensitiveAssetConfig, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AttackPathAssetList: The attack path sensitive asset configuration list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathAssetList() {
            return software.amazon.jsii.Kernel.get(this, "attrAttackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathSensitiveAssetConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrAttackPathSensitiveAssetConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AttackPathSensitiveAssetConfigProps.class));
        }
    }
}
