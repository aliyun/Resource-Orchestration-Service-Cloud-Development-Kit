package com.aliyun.ros.cdk.kms.datasource;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:41.087Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.datasource.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the KMS instance is created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute InstanceId: The ID of the KMS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: The name of the KMS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute KeyNum: The number of keys that can be created for the KMS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyNum();

    /**
     * Attribute SecretNum: The number of secrets that can be created for the KMS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretNum();

    /**
     * Attribute Spec: The computation performance level of the KMS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec();

    /**
     * Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VpcNum: The number of managed accesses.
     * <p>
     * The maximum number of VPCs that can access this KMS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcNum();

    /**
     * Attribute VswitchIds: The VSwitch in the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchIds();

    /**
     * Attribute ZoneIds: The zone with which the KMS instance is associated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.kms.datasource.IInstance.Jsii$Default {
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
         * Attribute CreateTime: The time when the KMS instance is created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the KMS instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the KMS instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyNum: The number of keys that can be created for the KMS instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyNum() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretNum: The number of secrets that can be created for the KMS instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretNum() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: The computation performance level of the KMS instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcNum: The number of managed accesses.
         * <p>
         * The maximum number of VPCs that can access this KMS instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcNum() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VswitchIds: The VSwitch in the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVswitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneIds: The zone with which the KMS instance is associated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIds() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.datasource.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the KMS instance is created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the KMS instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the KMS instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyNum: The number of keys that can be created for the KMS instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyNum() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecretNum: The number of secrets that can be created for the KMS instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecretNum() {
            return software.amazon.jsii.Kernel.get(this, "attrSecretNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Spec: The computation performance level of the KMS instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcNum: The number of managed accesses.
         * <p>
         * The maximum number of VPCs that can access this KMS instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcNum() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VswitchIds: The VSwitch in the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVswitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneIds: The zone with which the KMS instance is associated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIds() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kms.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kms.datasource.InstanceProps.class));
        }
    }
}
