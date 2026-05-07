package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>AttackPathWhitelist</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.638Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IAttackPathWhitelist")
@software.amazon.jsii.Jsii.Proxy(IAttackPathWhitelist.Jsii$Proxy.class)
public interface IAttackPathWhitelist extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AttackPathAssetList: List of attack path assets.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathAssetList();

    /**
     * Attribute AttackPathWhitelistId: The attack path whitelist ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathWhitelistId();

    /**
     * Attribute PathName: The whitelist path name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPathName();

    /**
     * Attribute PathType: The whitelist path type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPathType();

    /**
     * Attribute Remark: Remark information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark();

    /**
     * Attribute WhitelistName: The whitelist name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistName();

    /**
     * Attribute WhitelistType: The whitelist type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IAttackPathWhitelist.Jsii$Default {
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
         * Attribute AttackPathAssetList: List of attack path assets.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathAssetList() {
            return software.amazon.jsii.Kernel.get(this, "attrAttackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttackPathWhitelistId: The attack path whitelist ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathWhitelistId() {
            return software.amazon.jsii.Kernel.get(this, "attrAttackPathWhitelistId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PathName: The whitelist path name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPathName() {
            return software.amazon.jsii.Kernel.get(this, "attrPathName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PathType: The whitelist path type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPathType() {
            return software.amazon.jsii.Kernel.get(this, "attrPathType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: Remark information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WhitelistName: The whitelist name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistName() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelistName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WhitelistType: The whitelist type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistType() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelistType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAttackPathWhitelist}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAttackPathWhitelist, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AttackPathAssetList: List of attack path assets.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathAssetList() {
            return software.amazon.jsii.Kernel.get(this, "attrAttackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttackPathWhitelistId: The attack path whitelist ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttackPathWhitelistId() {
            return software.amazon.jsii.Kernel.get(this, "attrAttackPathWhitelistId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PathName: The whitelist path name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPathName() {
            return software.amazon.jsii.Kernel.get(this, "attrPathName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PathType: The whitelist path type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPathType() {
            return software.amazon.jsii.Kernel.get(this, "attrPathType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: Remark information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WhitelistName: The whitelist name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistName() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelistName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WhitelistType: The whitelist type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelistType() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelistType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AttackPathWhitelistProps.class));
        }
    }
}
