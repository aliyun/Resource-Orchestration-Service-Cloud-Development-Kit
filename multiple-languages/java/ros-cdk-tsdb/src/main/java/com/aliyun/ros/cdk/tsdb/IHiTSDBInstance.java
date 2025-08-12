package com.aliyun.ros.cdk.tsdb;

/**
 * Represents a <code>HiTSDBInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.051Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.tsdb.$Module.class, fqn = "@alicloud/ros-cdk-tsdb.IHiTSDBInstance")
@software.amazon.jsii.Jsii.Proxy(IHiTSDBInstance.Jsii$Proxy.class)
public interface IHiTSDBInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConnectionString: Connection string of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString();

    /**
     * Attribute EngineType: Engine type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineType();

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute OrderId: Order id of created instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId();

    /**
     * Attribute PublicConnectionString: Public connection string of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString();

    /**
     * Attribute ReverseVpcIp: Reverse vpc ip of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReverseVpcIp();

    /**
     * Attribute ReverseVpcPort: Reverse vpc port of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReverseVpcPort();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.tsdb.IHiTSDBInstance.Jsii$Default {
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
         * Attribute ConnectionString: Connection string of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineType: Engine type of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineType() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: Order id of created instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: Public connection string of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReverseVpcIp: Reverse vpc ip of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReverseVpcIp() {
            return software.amazon.jsii.Kernel.get(this, "attrReverseVpcIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReverseVpcPort: Reverse vpc port of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReverseVpcPort() {
            return software.amazon.jsii.Kernel.get(this, "attrReverseVpcPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHiTSDBInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHiTSDBInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConnectionString: Connection string of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineType: Engine type of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineType() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: Order id of created instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: Public connection string of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReverseVpcIp: Reverse vpc ip of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReverseVpcIp() {
            return software.amazon.jsii.Kernel.get(this, "attrReverseVpcIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReverseVpcPort: Reverse vpc port of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReverseVpcPort() {
            return software.amazon.jsii.Kernel.get(this, "attrReverseVpcPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps.class));
        }
    }
}
