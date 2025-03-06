package com.aliyun.ros.cdk.fc;

/**
 * Represents a <code>FunctionInvoker</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:12.213Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.IFunctionInvoker")
@software.amazon.jsii.Jsii.Proxy(IFunctionInvoker.Jsii$Proxy.class)
public interface IFunctionInvoker extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Result: Depends on result type: NoResult: Async invoke has no result.
     * <p>
     * Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
     * Failure: Error Message.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResult();

    /**
     * Attribute ResultType: Result type: NoResult: Async invoke has no result.
     * <p>
     * Success: Sync invoke succeeds.
     * Failure: Sync invoke fails.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResultType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionInvokerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.fc.IFunctionInvoker.Jsii$Default {
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
         * Attribute Result: Depends on result type: NoResult: Async invoke has no result.
         * <p>
         * Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
         * Failure: Error Message.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResult() {
            return software.amazon.jsii.Kernel.get(this, "attrResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResultType: Result type: NoResult: Async invoke has no result.
         * <p>
         * Success: Sync invoke succeeds.
         * Failure: Sync invoke fails.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResultType() {
            return software.amazon.jsii.Kernel.get(this, "attrResultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionInvokerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.FunctionInvokerProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IFunctionInvoker}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IFunctionInvoker, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Result: Depends on result type: NoResult: Async invoke has no result.
         * <p>
         * Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
         * Failure: Error Message.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResult() {
            return software.amazon.jsii.Kernel.get(this, "attrResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResultType: Result type: NoResult: Async invoke has no result.
         * <p>
         * Success: Sync invoke succeeds.
         * Failure: Sync invoke fails.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResultType() {
            return software.amazon.jsii.Kernel.get(this, "attrResultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.FunctionInvokerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.FunctionInvokerProps.class));
        }
    }
}
