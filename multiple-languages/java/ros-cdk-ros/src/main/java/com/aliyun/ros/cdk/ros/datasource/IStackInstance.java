package com.aliyun.ros.cdk.ros.datasource;

/**
 * Represents a <code>StackInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.051Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.datasource.IStackInstance")
@software.amazon.jsii.Jsii.Proxy(IStackInstance.Jsii$Proxy.class)
public interface IStackInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountId: The account id of the stack.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId();

    /**
     * Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDriftDetectionTime();

    /**
     * Attribute Outputs: The outputs of the stack instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs();

    /**
     * Attribute ParameterOverrides: Override parameter list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterOverrides();

    /**
     * Attribute RdFolderId: The resource folder ID of the resource directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRdFolderId();

    /**
     * Attribute RegionId: The region id of the stack.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId();

    /**
     * Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackDriftStatus();

    /**
     * Attribute StackGroupId: The resource stack group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackGroupId();

    /**
     * Attribute StackGroupName: The resource stack group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackGroupName();

    /**
     * Attribute StackId: The stack id of stack instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackId();

    /**
     * Attribute Status: Resource stack status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    /**
     * Attribute StatusReason: Status reason description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusReason();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.datasource.StackInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ros.datasource.IStackInstance.Jsii$Default {
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
         * Attribute AccountId: The account id of the stack.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDriftDetectionTime() {
            return software.amazon.jsii.Kernel.get(this, "attrDriftDetectionTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Outputs: The outputs of the stack instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
            return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterOverrides: Override parameter list.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterOverrides() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RdFolderId: The resource folder ID of the resource directory.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRdFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrRdFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The region id of the stack.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackDriftStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStackDriftStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StackGroupId: The resource stack group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrStackGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StackGroupName: The resource stack group name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrStackGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StackId: The stack id of stack instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackId() {
            return software.amazon.jsii.Kernel.get(this, "attrStackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: Resource stack status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusReason: Status reason description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusReason() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.datasource.StackInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.datasource.StackInstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IStackInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IStackInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccountId: The account id of the stack.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDriftDetectionTime() {
            return software.amazon.jsii.Kernel.get(this, "attrDriftDetectionTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Outputs: The outputs of the stack instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOutputs() {
            return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ParameterOverrides: Override parameter list.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameterOverrides() {
            return software.amazon.jsii.Kernel.get(this, "attrParameterOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RdFolderId: The resource folder ID of the resource directory.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRdFolderId() {
            return software.amazon.jsii.Kernel.get(this, "attrRdFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The region id of the stack.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackDriftStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStackDriftStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StackGroupId: The resource stack group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrStackGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StackGroupName: The resource stack group name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrStackGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StackId: The stack id of stack instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStackId() {
            return software.amazon.jsii.Kernel.get(this, "attrStackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: Resource stack status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusReason: Status reason description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusReason() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.datasource.StackInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.datasource.StackInstanceProps.class));
        }
    }
}
