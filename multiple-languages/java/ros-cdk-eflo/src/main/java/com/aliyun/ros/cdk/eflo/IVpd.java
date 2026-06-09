package com.aliyun.ros.cdk.eflo;

/**
 * Represents a <code>Vpd</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:40:50.389Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eflo.$Module.class, fqn = "@alicloud/ros-cdk-eflo.IVpd")
@software.amazon.jsii.Jsii.Proxy(IVpd.Jsii$Proxy.class)
public interface IVpd extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Cidr: The CIDR block of the VPD.
     * <p>
     * <ul>
     * <li>We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute GmtModified: Modification time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified();

    /**
     * Attribute ResourceGroupId: System-defined parameter.
     * <p>
     * Value: <strong>ChangeResourceGroup</strong>.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecondaryCidrBlocks: List of additional network segment information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryCidrBlocks();

    /**
     * Attribute Tags: The tag of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpdId: The ID of the VPD.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpdId();

    /**
     * Attribute VpdName: Lingjun CIDR block instance name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpdName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eflo.VpdProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.eflo.IVpd.Jsii$Default {
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
         * Attribute Cidr: The CIDR block of the VPD.
         * <p>
         * <ul>
         * <li>We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModified: Modification time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: System-defined parameter.
         * <p>
         * Value: <strong>ChangeResourceGroup</strong>.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryCidrBlocks: List of additional network segment information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryCidrBlocks() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpdId: The ID of the VPD.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpdId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpdId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpdName: Lingjun CIDR block instance name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpdName() {
            return software.amazon.jsii.Kernel.get(this, "attrVpdName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eflo.VpdProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eflo.VpdProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVpd}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVpd, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Cidr: The CIDR block of the VPD.
         * <p>
         * <ul>
         * <li>We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModified: Modification time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: System-defined parameter.
         * <p>
         * Value: <strong>ChangeResourceGroup</strong>.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryCidrBlocks: List of additional network segment information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryCidrBlocks() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpdId: The ID of the VPD.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpdId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpdId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpdName: Lingjun CIDR block instance name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpdName() {
            return software.amazon.jsii.Kernel.get(this, "attrVpdName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eflo.VpdProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eflo.VpdProps.class));
        }
    }
}
