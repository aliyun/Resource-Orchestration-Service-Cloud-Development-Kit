package com.aliyun.ros.cdk.gpdb;

/**
 * Represents a <code>StreamingDataService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.954Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.IStreamingDataService")
@software.amazon.jsii.Jsii.Proxy(IStreamingDataService.Jsii$Proxy.class)
public interface IStreamingDataService extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: Create time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute ModifyTime: Modify time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime();

    /**
     * Attribute ServiceDescription: The description of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDescription();

    /**
     * Attribute ServiceId: Service ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId();

    /**
     * Attribute ServiceIp: Service VIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceIp();

    /**
     * Attribute ServiceManaged: Service used by Cloud products, ture is used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged();

    /**
     * Attribute ServiceName: Service Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName();

    /**
     * Attribute ServiceOwnerId: Service id of Cloud products.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceOwnerId();

    /**
     * Attribute ServicePort: Service vPort.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServicePort();

    /**
     * Attribute ServiceSpec: Resource Specifications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceSpec();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.gpdb.IStreamingDataService.Jsii$Default {
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
         * Attribute CreateTime: Create time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifyTime: Modify time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceDescription: The description of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: Service ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceIp: Service VIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceIp() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceManaged: Service used by Cloud products, ture is used.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: Service Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceOwnerId: Service id of Cloud products.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServicePort: Service vPort.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServicePort() {
            return software.amazon.jsii.Kernel.get(this, "attrServicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceSpec: Resource Specifications.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IStreamingDataService}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IStreamingDataService, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: Create time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifyTime: Modify time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceDescription: The description of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: Service ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceIp: Service VIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceIp() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceManaged: Service used by Cloud products, ture is used.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceManaged() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceName: Service Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceOwnerId: Service id of Cloud products.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServicePort: Service vPort.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServicePort() {
            return software.amazon.jsii.Kernel.get(this, "attrServicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceSpec: Resource Specifications.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.StreamingDataServiceProps.class));
        }
    }
}
