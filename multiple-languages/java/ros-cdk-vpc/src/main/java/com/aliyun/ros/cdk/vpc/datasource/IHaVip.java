package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Represents a <code>HaVip</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.353Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.IHaVip")
@software.amazon.jsii.Jsii.Proxy(IHaVip.Jsii$Proxy.class)
public interface IHaVip extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AssociatedEipAddresses: EIP bound to HaVip.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedEipAddresses();

    /**
     * Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedInstances();

    /**
     * Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedInstanceType();

    /**
     * Attribute CreateTime: The creation time of the  resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: Dependence of a HaVip instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute HaVipId: The  ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHaVipId();

    /**
     * Attribute HaVipName: The name of the HaVip instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHaVipName();

    /**
     * Attribute IpAddress: IP address of private network.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress();

    /**
     * Attribute MasterInstanceId: The primary instance ID bound to HaVip.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId();

    /**
     * Attribute VpcId: The VPC ID to which the HaVip instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.HaVipProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.datasource.IHaVip.Jsii$Default {
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
         * Attribute AssociatedEipAddresses: EIP bound to HaVip.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedEipAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrAssociatedEipAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrAssociatedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrAssociatedInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the  resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Dependence of a HaVip instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HaVipId: The  ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHaVipId() {
            return software.amazon.jsii.Kernel.get(this, "attrHaVipId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HaVipName: The name of the HaVip instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHaVipName() {
            return software.amazon.jsii.Kernel.get(this, "attrHaVipName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: IP address of private network.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterInstanceId: The primary instance ID bound to HaVip.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID to which the HaVip instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.HaVipProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.HaVipProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHaVip}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHaVip, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AssociatedEipAddresses: EIP bound to HaVip.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedEipAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrAssociatedEipAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrAssociatedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssociatedInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrAssociatedInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the  resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Dependence of a HaVip instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HaVipId: The  ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHaVipId() {
            return software.amazon.jsii.Kernel.get(this, "attrHaVipId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HaVipName: The name of the HaVip instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHaVipName() {
            return software.amazon.jsii.Kernel.get(this, "attrHaVipName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: IP address of private network.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterInstanceId: The primary instance ID bound to HaVip.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID to which the HaVip instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.HaVipProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.HaVipProps.class));
        }
    }
}
