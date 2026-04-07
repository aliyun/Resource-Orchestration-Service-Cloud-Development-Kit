package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>ImageEventOperation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.580Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IImageEventOperation")
@software.amazon.jsii.Jsii.Proxy(IImageEventOperation.Jsii$Proxy.class)
public interface IImageEventOperation extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Conditions: The rule conditions.
     * <p>
     * Specify a value in the JSON format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConditions();

    /**
     * Attribute EventKey: Image Event Key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventKey();

    /**
     * Attribute EventName: Image Event Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventName();

    /**
     * Attribute EventType: Image Event Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventType();

    /**
     * Attribute ImageEventOperationId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageEventOperationId();

    /**
     * Attribute Note: The remarks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNote();

    /**
     * Attribute OperationCode: Event Operation Code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationCode();

    /**
     * Attribute Scenarios: Event Scenarios.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScenarios();

    /**
     * Attribute Source: The source of the whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IImageEventOperation.Jsii$Default {
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
         * Attribute Conditions: The rule conditions.
         * <p>
         * Specify a value in the JSON format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConditions() {
            return software.amazon.jsii.Kernel.get(this, "attrConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventKey: Image Event Key.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventKey() {
            return software.amazon.jsii.Kernel.get(this, "attrEventKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventName: Image Event Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventName() {
            return software.amazon.jsii.Kernel.get(this, "attrEventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventType: Image Event Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventType() {
            return software.amazon.jsii.Kernel.get(this, "attrEventType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageEventOperationId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageEventOperationId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageEventOperationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Note: The remarks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNote() {
            return software.amazon.jsii.Kernel.get(this, "attrNote", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationCode: Event Operation Code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationCode() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scenarios: Event Scenarios.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScenarios() {
            return software.amazon.jsii.Kernel.get(this, "attrScenarios", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Source: The source of the whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource() {
            return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IImageEventOperation}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IImageEventOperation, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Conditions: The rule conditions.
         * <p>
         * Specify a value in the JSON format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConditions() {
            return software.amazon.jsii.Kernel.get(this, "attrConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventKey: Image Event Key.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventKey() {
            return software.amazon.jsii.Kernel.get(this, "attrEventKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventName: Image Event Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventName() {
            return software.amazon.jsii.Kernel.get(this, "attrEventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventType: Image Event Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventType() {
            return software.amazon.jsii.Kernel.get(this, "attrEventType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageEventOperationId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageEventOperationId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageEventOperationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Note: The remarks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNote() {
            return software.amazon.jsii.Kernel.get(this, "attrNote", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationCode: Event Operation Code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationCode() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scenarios: Event Scenarios.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScenarios() {
            return software.amazon.jsii.Kernel.get(this, "attrScenarios", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Source: The source of the whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource() {
            return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps.class));
        }
    }
}
