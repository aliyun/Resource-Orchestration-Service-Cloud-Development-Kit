package com.aliyun.ros.cdk.schedulerx;

/**
 * Represents a <code>WorkFlow</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:46:20.752Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.IWorkFlow")
@software.amazon.jsii.Jsii.Proxy(IWorkFlow.Jsii$Proxy.class)
public interface IWorkFlow extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Description: Workflow description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId();

    /**
     * Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.
     * <p>
     * The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxConcurrency();

    /**
     * Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace();

    /**
     * Attribute TimeExpression: Time expression, which is set based on the selected time type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeExpression();

    /**
     * Attribute TimeType: Time type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeType();

    /**
     * Attribute WorkFlowId: workflow id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkFlowId();

    /**
     * Attribute WorkflowName: Workflow Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkflowName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.WorkFlowProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.schedulerx.IWorkFlow.Jsii$Default {
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
         * Attribute Description: Workflow description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.
         * <p>
         * The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxConcurrency() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimeExpression: Time expression, which is set based on the selected time type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeExpression() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimeType: Time type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeType() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkFlowId: workflow id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkFlowId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkFlowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkflowName: Workflow Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkflowName() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkflowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.WorkFlowProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.schedulerx.WorkFlowProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWorkFlow}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWorkFlow, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Description: Workflow description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.
         * <p>
         * The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxConcurrency() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimeExpression: Time expression, which is set based on the selected time type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeExpression() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimeType: Time type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeType() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkFlowId: workflow id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkFlowId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkFlowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkflowName: Workflow Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkflowName() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkflowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.WorkFlowProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.schedulerx.WorkFlowProps.class));
        }
    }
}
