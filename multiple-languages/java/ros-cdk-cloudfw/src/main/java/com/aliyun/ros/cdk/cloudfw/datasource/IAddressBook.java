package com.aliyun.ros.cdk.cloudfw.datasource;

/**
 * Represents a <code>AddressBook</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.505Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.datasource.IAddressBook")
@software.amazon.jsii.Jsii.Proxy(IAddressBook.Jsii$Proxy.class)
public interface IAddressBook extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AddressList: The addresses in the address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressList();

    /**
     * Attribute AddressListCount: The number of addresses in the address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressListCount();

    /**
     * Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoAddTagEcs();

    /**
     * Attribute Description: The description of the address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute GroupName: The name of the address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName();

    /**
     * Attribute GroupType: The type of the address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupType();

    /**
     * Attribute GroupUuid: The UUID of the address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupUuid();

    /**
     * Attribute ReferenceCount: The number of times that the address book is referenced.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferenceCount();

    /**
     * Attribute TagRelation: The logical relationship among ECS tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagRelation();

    /**
     * Attribute Tags: The details about the ECS tags that can be automatically added to the address book.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.datasource.AddressBookProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cloudfw.datasource.IAddressBook.Jsii$Default {
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
         * Attribute AddressList: The addresses in the address book.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressList() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressListCount: The number of addresses in the address book.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressListCount() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressListCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoAddTagEcs() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoAddTagEcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the address book.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupName: The name of the address book.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupType: The type of the address book.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupUuid: The UUID of the address book.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReferenceCount: The number of times that the address book is referenced.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferenceCount() {
            return software.amazon.jsii.Kernel.get(this, "attrReferenceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TagRelation: The logical relationship among ECS tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagRelation() {
            return software.amazon.jsii.Kernel.get(this, "attrTagRelation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The details about the ECS tags that can be automatically added to the address book.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.datasource.AddressBookProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.datasource.AddressBookProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAddressBook}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAddressBook, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AddressList: The addresses in the address book.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressList() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressListCount: The number of addresses in the address book.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressListCount() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressListCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoAddTagEcs() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoAddTagEcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the address book.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupName: The name of the address book.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupType: The type of the address book.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupType() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GroupUuid: The UUID of the address book.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrGroupUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReferenceCount: The number of times that the address book is referenced.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReferenceCount() {
            return software.amazon.jsii.Kernel.get(this, "attrReferenceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TagRelation: The logical relationship among ECS tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagRelation() {
            return software.amazon.jsii.Kernel.get(this, "attrTagRelation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The details about the ECS tags that can be automatically added to the address book.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.datasource.AddressBookProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.datasource.AddressBookProps.class));
        }
    }
}
