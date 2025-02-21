package com.aliyun.ros.cdk.ros;

/**
 * Represents a <code>WaitCondition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:20.139Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.IWaitCondition")
@software.amazon.jsii.Jsii.Proxy(IWaitCondition.Jsii$Proxy.class)
public interface IWaitCondition extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrData();

    /**
     * Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrErrorData();

    /**
     * Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJoinedErrorData();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ros.IWaitCondition.Jsii$Default {
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
         * Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrData() {
            return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrErrorData() {
            return software.amazon.jsii.Kernel.get(this, "attrErrorData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJoinedErrorData() {
            return software.amazon.jsii.Kernel.get(this, "attrJoinedErrorData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.WaitConditionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWaitCondition}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWaitCondition, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrData() {
            return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrErrorData() {
            return software.amazon.jsii.Kernel.get(this, "attrErrorData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJoinedErrorData() {
            return software.amazon.jsii.Kernel.get(this, "attrJoinedErrorData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.WaitConditionProps.class));
        }
    }
}
