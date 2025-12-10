package com.aliyun.ros.cdk.edas;

/**
 * Represents a <code>K8sApplication</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:55.991Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.IK8sApplication")
@software.amazon.jsii.Jsii.Proxy(IK8sApplication.Jsii$Proxy.class)
public interface IK8sApplication extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AppId: The ID of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId();

    /**
     * Attribute AppName: The name of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppName();

    /**
     * Attribute ChangeOrderId: The ID of the change process.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChangeOrderId();

    /**
     * Attribute ClusterId: The cluster ID of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute CsClusterId: The K8s cluster ID of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCsClusterId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sApplicationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.edas.IK8sApplication.Jsii$Default {
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
         * Attribute AppId: The ID of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppName: The name of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppName() {
            return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChangeOrderId: The ID of the change process.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChangeOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: The cluster ID of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CsClusterId: The K8s cluster ID of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCsClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrCsClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sApplicationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.K8sApplicationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IK8sApplication}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IK8sApplication, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AppId: The ID of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppName: The name of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppName() {
            return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChangeOrderId: The ID of the change process.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChangeOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrChangeOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterId: The cluster ID of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CsClusterId: The K8s cluster ID of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCsClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrCsClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.K8sApplicationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.K8sApplicationProps.class));
        }
    }
}
