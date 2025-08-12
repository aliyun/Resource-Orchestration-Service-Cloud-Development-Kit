package com.aliyun.ros.cdk.eci;

/**
 * Represents a <code>ContainerGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.042Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.IContainerGroup")
@software.amazon.jsii.Jsii.Proxy(IContainerGroup.Jsii$Proxy.class)
public interface IContainerGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ContainerGroupId: The ID of the container group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupId();

    /**
     * Attribute ContainerGroupName: The name of the container group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupName();

    /**
     * Attribute EniInstanceId: ENI instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEniInstanceId();

    /**
     * Attribute InternetIp: Internet IP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp();

    /**
     * Attribute IntranetIp: Intranet IP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetIp();

    /**
     * Attribute Ipv6Address: Ipv6 address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Address();

    /**
     * Attribute RegionId: The ID of the region in which the instance resides.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId();

    /**
     * Attribute SecurityGroupId: The ID of the security group to which the instance belongs.
     * <p>
     * Instances in the same security group can access one another.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId();

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     * <p>
     * Currently, ECI instances can only be deployed in VPCs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: The ID of the zone in which the instance resides.
     * <p>
     * If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ContainerGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.eci.IContainerGroup.Jsii$Default {
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
         * Attribute ContainerGroupId: The ID of the container group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContainerGroupName: The name of the container group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EniInstanceId: ENI instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEniInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrEniInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetIp: Internet IP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetIp: Intranet IP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6Address: Ipv6 address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Address() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6Address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The ID of the region in which the instance resides.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: The ID of the security group to which the instance belongs.
         * <p>
         * Instances in the same security group can access one another.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the VSwitch.
         * <p>
         * Currently, ECI instances can only be deployed in VPCs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone in which the instance resides.
         * <p>
         * If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ContainerGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eci.ContainerGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IContainerGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IContainerGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ContainerGroupId: The ID of the container group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContainerGroupName: The name of the container group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContainerGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrContainerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EniInstanceId: ENI instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEniInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrEniInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InternetIp: Internet IP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IntranetIp: Intranet IP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrIntranetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv6Address: Ipv6 address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6Address() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv6Address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The ID of the region in which the instance resides.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: The ID of the security group to which the instance belongs.
         * <p>
         * Instances in the same security group can access one another.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The ID of the VSwitch.
         * <p>
         * Currently, ECI instances can only be deployed in VPCs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone in which the instance resides.
         * <p>
         * If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ContainerGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eci.ContainerGroupProps.class));
        }
    }
}
