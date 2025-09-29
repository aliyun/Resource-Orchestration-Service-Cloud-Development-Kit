package com.aliyun.ros.cdk.hbr;

/**
 * Represents a <code>DbAgent</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.424Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.IDbAgent")
@software.amazon.jsii.Jsii.Proxy(IDbAgent.Jsii$Proxy.class)
public interface IDbAgent extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute InstanceIds: Uni backup agent instance ids.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds();

    /**
     * Attribute TaskId: Uni backup agent install task id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId();

    /**
     * Attribute UniBackupInstanceDetails: Uni backup agent instance info details.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniBackupInstanceDetails();

    /**
     * Attribute UniBackupInstances: Uni backup agent instance info.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniBackupInstances();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbAgentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.hbr.IDbAgent.Jsii$Default {
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
         * Attribute InstanceIds: Uni backup agent instance ids.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskId: Uni backup agent install task id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UniBackupInstanceDetails: Uni backup agent instance info details.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniBackupInstanceDetails() {
            return software.amazon.jsii.Kernel.get(this, "attrUniBackupInstanceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UniBackupInstances: Uni backup agent instance info.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniBackupInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrUniBackupInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbAgentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.DbAgentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDbAgent}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDbAgent, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute InstanceIds: Uni backup agent instance ids.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TaskId: Uni backup agent install task id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
            return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UniBackupInstanceDetails: Uni backup agent instance info details.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniBackupInstanceDetails() {
            return software.amazon.jsii.Kernel.get(this, "attrUniBackupInstanceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UniBackupInstances: Uni backup agent instance info.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUniBackupInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrUniBackupInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbAgentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.DbAgentProps.class));
        }
    }
}
