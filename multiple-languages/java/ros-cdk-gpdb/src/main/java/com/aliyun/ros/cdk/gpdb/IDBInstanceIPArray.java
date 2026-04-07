package com.aliyun.ros.cdk.gpdb;

/**
 * Represents a <code>DBInstanceIPArray</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:27.005Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.IDBInstanceIPArray")
@software.amazon.jsii.Jsii.Proxy(IDBInstanceIPArray.Jsii$Proxy.class)
public interface IDBInstanceIPArray extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DBInstanceIPArrayAttribute: The default is empty.
     * <p>
     * To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArrayAttribute();

    /**
     * Attribute DBInstanceIPArrayName: The name of the IP address whitelist.
     * <p>
     * If you do not specify this parameter, the default whitelist is queried.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArrayName();

    /**
     * Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.gpdb.IDBInstanceIPArray.Jsii$Default {
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
         * Attribute DBInstanceIPArrayAttribute: The default is empty.
         * <p>
         * To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArrayAttribute() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArrayAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceIPArrayName: The name of the IP address whitelist.
         * <p>
         * If you do not specify this parameter, the default whitelist is queried.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArrayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDBInstanceIPArray}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDBInstanceIPArray, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute DBInstanceIPArrayAttribute: The default is empty.
         * <p>
         * To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArrayAttribute() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArrayAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceIPArrayName: The name of the IP address whitelist.
         * <p>
         * If you do not specify this parameter, the default whitelist is queried.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIpArrayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.DBInstanceIPArrayProps.class));
        }
    }
}
