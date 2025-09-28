package com.aliyun.ros.cdk.cms.datasource;

/**
 * Represents a <code>AlarmContacts</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.562Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.IAlarmContacts")
@software.amazon.jsii.Jsii.Proxy(IAlarmContacts.Jsii$Proxy.class)
public interface IAlarmContacts extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AlarmContactNames: The list of alarm contact names.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContactNames();

    /**
     * Attribute AlarmContacts: The list of alarm contacts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContacts();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cms.datasource.IAlarmContacts.Jsii$Default {
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
         * Attribute AlarmContactNames: The list of alarm contact names.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContactNames() {
            return software.amazon.jsii.Kernel.get(this, "attrAlarmContactNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AlarmContacts: The list of alarm contacts.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContacts() {
            return software.amazon.jsii.Kernel.get(this, "attrAlarmContacts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.datasource.AlarmContactsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAlarmContacts}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAlarmContacts, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AlarmContactNames: The list of alarm contact names.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContactNames() {
            return software.amazon.jsii.Kernel.get(this, "attrAlarmContactNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AlarmContacts: The list of alarm contacts.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlarmContacts() {
            return software.amazon.jsii.Kernel.get(this, "attrAlarmContacts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.datasource.AlarmContactsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.datasource.AlarmContactsProps.class));
        }
    }
}
