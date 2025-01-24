package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>CenVbrHealthCheck</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:35.410Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.ICenVbrHealthCheck")
@software.amazon.jsii.Jsii.Proxy(ICenVbrHealthCheck.Jsii$Proxy.class)
public interface ICenVbrHealthCheck extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId();

    /**
     * Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
     * <p>
     * Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval();

    /**
     * Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
     * <p>
     * Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckSourceIp();

    /**
     * Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.
     * <p>
     * The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTargetIp();

    /**
     * Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.
     * <p>
     * Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold();

    /**
     * Attribute VbrInstanceId: The ID of the VBR instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceId();

    /**
     * Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceOwnerId();

    /**
     * Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
     * <p>
     * You can call the DescribeRegionsoperation to query region IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceRegionId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.ICenVbrHealthCheck.Jsii$Default {
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
         * Attribute CenId: The ID of the CEN instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
            return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
         * <p>
         * Default value: 2. Valid values: 2 to 3.  Unit: second.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
         * <p>
         * Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckSourceIp() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckSourceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.
         * <p>
         * The destination IP address is the IP address of the client-facing interface on the VBR instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTargetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTargetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.
         * <p>
         * Default value: 8. Valid values: 3 to 8.  Unit: packet.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VbrInstanceId: The ID of the VBR instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
         * <p>
         * You can call the DescribeRegionsoperation to query region IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICenVbrHealthCheck}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICenVbrHealthCheck, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CenId: The ID of the CEN instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
            return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
         * <p>
         * Default value: 2. Valid values: 2 to 3.  Unit: second.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
         * <p>
         * Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckSourceIp() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckSourceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.
         * <p>
         * The destination IP address is the IP address of the client-facing interface on the VBR instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTargetIp() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTargetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.
         * <p>
         * Default value: 8. Valid values: 3 to 8.  Unit: packet.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VbrInstanceId: The ID of the VBR instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
         * <p>
         * You can call the DescribeRegionsoperation to query region IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrInstanceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps.class));
        }
    }
}
