package com.aliyun.ros.cdk.ecd;

/**
 * Represents a <code>Desktops</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.996Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.IDesktops")
@software.amazon.jsii.Jsii.Proxy(IDesktops.Jsii$Proxy.class)
public interface IDesktops extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DesktopId: The ID of the cloud desktop.
     * <p>
     * If multiple cloud desktops are created in a call, the
     * IDs of the cloud desktops are returned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDesktopId();

    /**
     * Attribute OrderId: The ID of the order.
     * <p>
     * Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecd.IDesktops.Jsii$Default {
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
         * Attribute DesktopId: The ID of the cloud desktop.
         * <p>
         * If multiple cloud desktops are created in a call, the
         * IDs of the cloud desktops are returned.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDesktopId() {
            return software.amazon.jsii.Kernel.get(this, "attrDesktopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The ID of the order.
         * <p>
         * Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.DesktopsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDesktops}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDesktops, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DesktopId: The ID of the cloud desktop.
         * <p>
         * If multiple cloud desktops are created in a call, the
         * IDs of the cloud desktops are returned.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDesktopId() {
            return software.amazon.jsii.Kernel.get(this, "attrDesktopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: The ID of the order.
         * <p>
         * Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.DesktopsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.DesktopsProps.class));
        }
    }
}
