package com.aliyun.ros.cdk.oos;

/**
 * Represents a <code>Execution</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.410Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.IExecution")
@software.amazon.jsii.Jsii.Proxy(IExecution.Jsii$Proxy.class)
public interface IExecution extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCounters();

    /**
     * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
     * You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurlCli();

    /**
     * Attribute ExecutionId: Execution ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExecutionId();

    /**
     * Attribute Outputs: Execution output.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs();

    /**
     * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPowerShellCurlCli();

    /**
     * Attribute Status: Execution status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    /**
     * Attribute StatusMessage: Execution status information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusMessage();

    /**
     * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
     * <p>
     * You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
     * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWindowsCurlCli();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ExecutionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oos.IExecution.Jsii$Default {
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
         * Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCounters() {
            return software.amazon.jsii.Kernel.get(this, "attrCounters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
         * <p>
         * You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
         * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
         * You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExecutionId: Execution ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExecutionId() {
            return software.amazon.jsii.Kernel.get(this, "attrExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Outputs: Execution output.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
            return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
         * <p>
         * You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
         * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPowerShellCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrPowerShellCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: Execution status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusMessage: Execution status information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
         * <p>
         * You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
         * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWindowsCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrWindowsCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ExecutionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.ExecutionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IExecution}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IExecution, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCounters() {
            return software.amazon.jsii.Kernel.get(this, "attrCounters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
         * <p>
         * You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
         * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
         * You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExecutionId: Execution ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExecutionId() {
            return software.amazon.jsii.Kernel.get(this, "attrExecutionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Outputs: Execution output.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
            return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
         * <p>
         * You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
         * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPowerShellCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrPowerShellCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: Execution status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusMessage: Execution status information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
         * <p>
         * You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
         * For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWindowsCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrWindowsCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ExecutionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.ExecutionProps.class));
        }
    }
}
