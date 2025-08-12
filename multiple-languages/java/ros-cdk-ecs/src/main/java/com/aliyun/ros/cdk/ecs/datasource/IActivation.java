package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>Activation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.695Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.IActivation")
@software.amazon.jsii.Jsii.Proxy(IActivation.Jsii$Proxy.class)
public interface IActivation extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ActivationId: Activation code ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationId();

    /**
     * Attribute CreateTime: The time when the activation code was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeregisteredCount();

    /**
     * Attribute Description: The description of the activation code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Disabled: Indicates whether the activation code is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisabled();

    /**
     * Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount();

    /**
     * Attribute InstanceName: The default prefix of the instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddressRange();

    /**
     * Attribute RegisteredCount: The number of instances that were registered.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegisteredCount();

    /**
     * Attribute TimeToLiveInHours: The validity period of the activation code.
     * <p>
     * Unit: hours.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeToLiveInHours();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.ActivationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.IActivation.Jsii$Default {
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
         * Attribute ActivationId: Activation code ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationId() {
            return software.amazon.jsii.Kernel.get(this, "attrActivationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the activation code was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeregisteredCount: The number of instances that have been logged out.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeregisteredCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDeregisteredCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the activation code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Disabled: Indicates whether the activation code is disabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisabled() {
            return software.amazon.jsii.Kernel.get(this, "attrDisabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The default prefix of the instance name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddressRange() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddressRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegisteredCount: The number of instances that were registered.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegisteredCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRegisteredCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimeToLiveInHours: The validity period of the activation code.
         * <p>
         * Unit: hours.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeToLiveInHours() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeToLiveInHours", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.ActivationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.ActivationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IActivation}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IActivation, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ActivationId: Activation code ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationId() {
            return software.amazon.jsii.Kernel.get(this, "attrActivationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the activation code was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeregisteredCount: The number of instances that have been logged out.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeregisteredCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDeregisteredCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the activation code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Disabled: Indicates whether the activation code is disabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisabled() {
            return software.amazon.jsii.Kernel.get(this, "attrDisabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceCount() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The default prefix of the instance name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddressRange() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddressRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegisteredCount: The number of instances that were registered.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegisteredCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRegisteredCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimeToLiveInHours: The validity period of the activation code.
         * <p>
         * Unit: hours.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeToLiveInHours() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeToLiveInHours", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.ActivationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.ActivationProps.class));
        }
    }
}
