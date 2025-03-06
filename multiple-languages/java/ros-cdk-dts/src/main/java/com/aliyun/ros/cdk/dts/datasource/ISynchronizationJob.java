package com.aliyun.ros.cdk.dts.datasource;

/**
 * Represents a <code>SynchronizationJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.182Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.datasource.ISynchronizationJob")
@software.amazon.jsii.Jsii.Proxy(ISynchronizationJob.Jsii$Proxy.class)
public interface ISynchronizationJob extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DestinationEndpointEngineName: The target database engine type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationEndpointEngineName();

    /**
     * Attribute DestinationEndpointRegion: Region of source instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationEndpointRegion();

    /**
     * Attribute DtsInstanceId: Synchronization instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId();

    /**
     * Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass();

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute SourceEndpointEngineName: Source instance database engine type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointEngineName();

    /**
     * Attribute SourceEndpointRegion: Region of source instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointRegion();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.SynchronizationJobProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dts.datasource.ISynchronizationJob.Jsii$Default {
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
         * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationEndpointEngineName: The target database engine type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationEndpointEngineName() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationEndpointEngineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationEndpointRegion: Region of source instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationEndpointRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsInstanceId: Synchronization instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceClass: The specification of the migration or synchronization instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointEngineName: Source instance database engine type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointEngineName() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointEngineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointRegion: Region of source instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.SynchronizationJobProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.datasource.SynchronizationJobProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISynchronizationJob}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISynchronizationJob, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationEndpointEngineName: The target database engine type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationEndpointEngineName() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationEndpointEngineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationEndpointRegion: Region of source instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationEndpointRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsInstanceId: Synchronization instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceClass: The specification of the migration or synchronization instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointEngineName: Source instance database engine type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointEngineName() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointEngineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointRegion: Region of source instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.datasource.SynchronizationJobProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.datasource.SynchronizationJobProps.class));
        }
    }
}
