package com.aliyun.ros.cdk.fnf.datasource;

/**
 * Represents a <code>Flow</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.743Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.datasource.IFlow")
@software.amazon.jsii.Jsii.Proxy(IFlow.Jsii$Proxy.class)
public interface IFlow extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the flow was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard.
     * <p>
     * Considering compatibility, the system supports the two flow definition specifications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefinition();

    /**
     * Attribute Description: The description of the flow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute FlowId: The unique ID of the flow.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowId();

    /**
     * Attribute FlowName: The name of the flow.
     * <p>
     * The name must be unique within a region for the same Alibaba Cloud account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowName();

    /**
     * Attribute LastModifiedTime: The time when the flow was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifiedTime();

    /**
     * Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies.
     * <p>
     * During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleArn();

    /**
     * Attribute Type: The type of the flow.
     * <p>
     * Valid values are FDL or DEFAULT.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.FlowProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.fnf.datasource.IFlow.Jsii$Default {
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
         * Attribute CreateTime: The time when the flow was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard.
         * <p>
         * Considering compatibility, the system supports the two flow definition specifications.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefinition() {
            return software.amazon.jsii.Kernel.get(this, "attrDefinition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the flow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowId: The unique ID of the flow.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowId() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowName: The name of the flow.
         * <p>
         * The name must be unique within a region for the same Alibaba Cloud account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowName() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifiedTime: The time when the flow was last modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies.
         * <p>
         * During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleArn() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the flow.
         * <p>
         * Valid values are FDL or DEFAULT.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.FlowProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fnf.datasource.FlowProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IFlow}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IFlow, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the flow was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard.
         * <p>
         * Considering compatibility, the system supports the two flow definition specifications.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefinition() {
            return software.amazon.jsii.Kernel.get(this, "attrDefinition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the flow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowId: The unique ID of the flow.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowId() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlowName: The name of the flow.
         * <p>
         * The name must be unique within a region for the same Alibaba Cloud account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowName() {
            return software.amazon.jsii.Kernel.get(this, "attrFlowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifiedTime: The time when the flow was last modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies.
         * <p>
         * During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleArn() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the flow.
         * <p>
         * Valid values are FDL or DEFAULT.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.datasource.FlowProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fnf.datasource.FlowProps.class));
        }
    }
}
