package com.aliyun.ros.cdk.apig;

/**
 * Represents a <code>Operation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.620Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.IOperation")
@software.amazon.jsii.Jsii.Proxy(IOperation.Jsii$Proxy.class)
public interface IOperation extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation timestamp of the operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Method: The method of http protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMethod();

    /**
     * Attribute Mock: Mock configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMock();

    /**
     * Attribute OperationId: The ID of the operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationId();

    /**
     * Attribute OperationName: The name of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationName();

    /**
     * Attribute Path: The interface path of the operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPath();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.OperationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.IOperation.Jsii$Default {
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
         * Attribute CreateTime: The creation timestamp of the operation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the operation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Method: The method of http protocol.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mock: Mock configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMock() {
            return software.amazon.jsii.Kernel.get(this, "attrMock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationId: The ID of the operation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationId() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationName: The name of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationName() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Path: The interface path of the operation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPath() {
            return software.amazon.jsii.Kernel.get(this, "attrPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.OperationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.OperationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IOperation}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IOperation, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation timestamp of the operation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the operation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Method: The method of http protocol.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mock: Mock configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMock() {
            return software.amazon.jsii.Kernel.get(this, "attrMock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationId: The ID of the operation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationId() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationName: The name of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationName() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Path: The interface path of the operation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPath() {
            return software.amazon.jsii.Kernel.get(this, "attrPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.OperationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.OperationProps.class));
        }
    }
}
