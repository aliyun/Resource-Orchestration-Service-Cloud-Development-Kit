package com.aliyun.ros.cdk.rds;

/**
 * Represents a <code>DBInstanceClone</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.826Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.IDBInstanceClone")
@software.amazon.jsii.Jsii.Proxy(IDBInstanceClone.Jsii$Proxy.class)
public interface IDBInstanceClone extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId();

    /**
     * Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerConnectionString();

    /**
     * Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddress();

    /**
     * Attribute InnerPort: Intranet port of created DB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerPort();

    /**
     * Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString();

    /**
     * Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress();

    /**
     * Attribute PublicPort: Internet port of created DB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceCloneProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.rds.IDBInstanceClone.Jsii$Default {
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
         * Attribute DBInstanceId: The instance id of created database instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerConnectionString: DB instance connection url by Intranet.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerPort: Intranet port of created DB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: DB instance connection url by Internet.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIPAddress: IP Address for created DB instance of Internet.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicPort: Internet port of created DB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceCloneProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.DBInstanceCloneProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDBInstanceClone}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDBInstanceClone, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DBInstanceId: The instance id of created database instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerConnectionString: DB instance connection url by Intranet.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerPort: Intranet port of created DB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicConnectionString: DB instance connection url by Internet.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIPAddress: IP Address for created DB instance of Internet.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicPort: Internet port of created DB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceCloneProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.DBInstanceCloneProps.class));
        }
    }
}
