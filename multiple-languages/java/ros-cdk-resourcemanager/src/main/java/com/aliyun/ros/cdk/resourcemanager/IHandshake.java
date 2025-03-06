package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>Handshake</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.997Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IHandshake")
@software.amazon.jsii.Jsii.Proxy(IHandshake.Jsii$Proxy.class)
public interface IHandshake extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute HandshakeId: This ID of Resource Manager handshake.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHandshakeId();

    /**
     * Attribute MasterAccountId: Resource account master account ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountId();

    /**
     * Attribute MasterAccountName: The name of the main account of the resource directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountName();

    /**
     * Attribute Note: Remarks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNote();

    /**
     * Attribute ResourceDirectoryId: Resource directory ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId();

    /**
     * Attribute TargetEntity: Invited account ID or login email.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetEntity();

    /**
     * Attribute TargetType: Type of account being invited.
     * <p>
     * Valid values: Account, Email
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.HandshakeProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IHandshake.Jsii$Default {
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
         * Attribute HandshakeId: This ID of Resource Manager handshake.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHandshakeId() {
            return software.amazon.jsii.Kernel.get(this, "attrHandshakeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterAccountId: Resource account master account ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterAccountName: The name of the main account of the resource directory.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountName() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Note: Remarks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNote() {
            return software.amazon.jsii.Kernel.get(this, "attrNote", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceDirectoryId: Resource directory ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetEntity: Invited account ID or login email.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetEntity() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetEntity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetType: Type of account being invited.
         * <p>
         * Valid values: Account, Email
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetType() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.HandshakeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.HandshakeProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHandshake}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHandshake, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute HandshakeId: This ID of Resource Manager handshake.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHandshakeId() {
            return software.amazon.jsii.Kernel.get(this, "attrHandshakeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterAccountId: Resource account master account ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterAccountName: The name of the main account of the resource directory.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterAccountName() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Note: Remarks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNote() {
            return software.amazon.jsii.Kernel.get(this, "attrNote", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceDirectoryId: Resource directory ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDirectoryId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetEntity: Invited account ID or login email.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetEntity() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetEntity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetType: Type of account being invited.
         * <p>
         * Valid values: Account, Email
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetType() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.HandshakeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.HandshakeProps.class));
        }
    }
}
