package com.aliyun.ros.cdk.polardb.datasource;

/**
 * Represents a <code>DBNodeClasses</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:19.117Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.IDBNodeClasses")
@software.amazon.jsii.Jsii.Proxy(IDBNodeClasses.Jsii$Proxy.class)
public interface IDBNodeClasses extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DBNodeClasses: The list of db node classes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClasses();

    /**
     * Attribute DBNodeClassIds: The list of db node class ids.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClassIds();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.DBNodeClassesProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.polardb.datasource.IDBNodeClasses.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute DBNodeClasses: The list of db node classes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClasses() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClasses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeClassIds: The list of db node class ids.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClassIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClassIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.DBNodeClassesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.datasource.DBNodeClassesProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDBNodeClasses}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDBNodeClasses, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute DBNodeClasses: The list of db node classes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClasses() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClasses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBNodeClassIds: The list of db node class ids.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeClassIds() {
            return software.amazon.jsii.Kernel.get(this, "attrDbNodeClassIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.datasource.DBNodeClassesProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.datasource.DBNodeClassesProps.class));
        }
    }
}
