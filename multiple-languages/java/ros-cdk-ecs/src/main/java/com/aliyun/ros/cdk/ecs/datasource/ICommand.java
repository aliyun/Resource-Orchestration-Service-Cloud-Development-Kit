package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>Command</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.770Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ICommand")
@software.amazon.jsii.Jsii.Proxy(ICommand.Jsii$Proxy.class)
public interface ICommand extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CommandContent: Command content, encoded in Base64 and transmitted.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandContent();

    /**
     * Attribute CommandId: Command ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandId();

    /**
     * Attribute CommandName: Command name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandName();

    /**
     * Attribute CreateTime: Command creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: Command description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute EnableParameter: Whether to use parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableParameter();

    /**
     * Attribute ParameterNames: Parameter name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterNames();

    /**
     * Attribute Tags: The label information of the command.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Timeout: Timeout.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeout();

    /**
     * Attribute Type: Command type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute WorkingDir: Execution path.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkingDir();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.CommandProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.ICommand.Jsii$Default {
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
         * Attribute CommandContent: Command content, encoded in Base64 and transmitted.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandContent() {
            return software.amazon.jsii.Kernel.get(this, "attrCommandContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommandId: Command ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandId() {
            return software.amazon.jsii.Kernel.get(this, "attrCommandId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommandName: Command name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommandName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Command creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Command description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableParameter: Whether to use parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableParameter() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableParameter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterNames: Parameter name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterNames() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The label information of the command.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Timeout: Timeout.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Command type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkingDir: Execution path.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkingDir() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.CommandProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.CommandProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICommand}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICommand, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CommandContent: Command content, encoded in Base64 and transmitted.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandContent() {
            return software.amazon.jsii.Kernel.get(this, "attrCommandContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommandId: Command ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandId() {
            return software.amazon.jsii.Kernel.get(this, "attrCommandId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommandName: Command name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommandName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommandName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Command creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Command description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableParameter: Whether to use parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableParameter() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableParameter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterNames: Parameter name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterNames() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The label information of the command.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Timeout: Timeout.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Command type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkingDir: Execution path.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkingDir() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.CommandProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.CommandProps.class));
        }
    }
}
