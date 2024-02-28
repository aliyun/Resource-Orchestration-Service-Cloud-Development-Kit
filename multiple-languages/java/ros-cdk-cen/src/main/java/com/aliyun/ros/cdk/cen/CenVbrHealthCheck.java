package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::CenVbrHealthCheck</code>, which is used to enable the health check feature or modify the health check configuration for a virtual border router (VBR).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:27.137Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenVbrHealthCheck")
public class CenVbrHealthCheck extends com.aliyun.ros.cdk.core.Resource {

    protected CenVbrHealthCheck(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenVbrHealthCheck(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CenVbrHealthCheck(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CenVbrHealthCheck(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
     * <p>
     * Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
     * <p>
     * Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckSourceIp() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckSourceIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.
     * <p>
     * The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckTargetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTargetIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.
     * <p>
     * Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthyThreshold() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VbrInstanceId: The ID of the VBR instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrInstanceOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceOwnerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
     * <p>
     * You can call the DescribeRegionsoperation to query region IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrInstanceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.CenVbrHealthCheck}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.CenVbrHealthCheck> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.CenVbrHealthCheckProps.Builder();
        }

        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property healthCheckTargetIp: Specifies the destination IP address of the health check.
         * <p>
         * The destination IP address is the IP address of the client-facing interface on the VBR instance.
         * <p>
         * @return {@code this}
         * @param healthCheckTargetIp Property healthCheckTargetIp: Specifies the destination IP address of the health check. This parameter is required.
         */
        public Builder healthCheckTargetIp(final java.lang.String healthCheckTargetIp) {
            this.props.healthCheckTargetIp(healthCheckTargetIp);
            return this;
        }
        /**
         * Property healthCheckTargetIp: Specifies the destination IP address of the health check.
         * <p>
         * The destination IP address is the IP address of the client-facing interface on the VBR instance.
         * <p>
         * @return {@code this}
         * @param healthCheckTargetIp Property healthCheckTargetIp: Specifies the destination IP address of the health check. This parameter is required.
         */
        public Builder healthCheckTargetIp(final com.aliyun.ros.cdk.core.IResolvable healthCheckTargetIp) {
            this.props.healthCheckTargetIp(healthCheckTargetIp);
            return this;
        }

        /**
         * Property vbrInstanceId: The ID of the VBR instance.
         * <p>
         * @return {@code this}
         * @param vbrInstanceId Property vbrInstanceId: The ID of the VBR instance. This parameter is required.
         */
        public Builder vbrInstanceId(final java.lang.String vbrInstanceId) {
            this.props.vbrInstanceId(vbrInstanceId);
            return this;
        }
        /**
         * Property vbrInstanceId: The ID of the VBR instance.
         * <p>
         * @return {@code this}
         * @param vbrInstanceId Property vbrInstanceId: The ID of the VBR instance. This parameter is required.
         */
        public Builder vbrInstanceId(final com.aliyun.ros.cdk.core.IResolvable vbrInstanceId) {
            this.props.vbrInstanceId(vbrInstanceId);
            return this;
        }

        /**
         * Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
         * <p>
         * You can call the DescribeRegionsoperation to query region IDs.
         * <p>
         * @return {@code this}
         * @param vbrInstanceRegionId Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. This parameter is required.
         */
        public Builder vbrInstanceRegionId(final java.lang.String vbrInstanceRegionId) {
            this.props.vbrInstanceRegionId(vbrInstanceRegionId);
            return this;
        }
        /**
         * Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
         * <p>
         * You can call the DescribeRegionsoperation to query region IDs.
         * <p>
         * @return {@code this}
         * @param vbrInstanceRegionId Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. This parameter is required.
         */
        public Builder vbrInstanceRegionId(final com.aliyun.ros.cdk.core.IResolvable vbrInstanceRegionId) {
            this.props.vbrInstanceRegionId(vbrInstanceRegionId);
            return this;
        }

        /**
         * Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
         * <p>
         * Default value: 2. Valid values: 2 to 3.  Unit: second.
         * <p>
         * @return {@code this}
         * @param healthCheckInterval Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check. This parameter is required.
         */
        public Builder healthCheckInterval(final java.lang.Number healthCheckInterval) {
            this.props.healthCheckInterval(healthCheckInterval);
            return this;
        }
        /**
         * Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
         * <p>
         * Default value: 2. Valid values: 2 to 3.  Unit: second.
         * <p>
         * @return {@code this}
         * @param healthCheckInterval Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check. This parameter is required.
         */
        public Builder healthCheckInterval(final com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.props.healthCheckInterval(healthCheckInterval);
            return this;
        }

        /**
         * Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
         * <p>
         * Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
         * <p>
         * @return {@code this}
         * @param healthCheckSourceIp Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check. This parameter is required.
         */
        public Builder healthCheckSourceIp(final java.lang.String healthCheckSourceIp) {
            this.props.healthCheckSourceIp(healthCheckSourceIp);
            return this;
        }
        /**
         * Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
         * <p>
         * Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
         * <p>
         * @return {@code this}
         * @param healthCheckSourceIp Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check. This parameter is required.
         */
        public Builder healthCheckSourceIp(final com.aliyun.ros.cdk.core.IResolvable healthCheckSourceIp) {
            this.props.healthCheckSourceIp(healthCheckSourceIp);
            return this;
        }

        /**
         * Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.
         * <p>
         * Default value: 8. Valid values: 3 to 8.  Unit: packet.
         * <p>
         * @return {@code this}
         * @param healthyThreshold Property healthyThreshold: Specifies the number of probe packets to be sent during the health check. This parameter is required.
         */
        public Builder healthyThreshold(final java.lang.Number healthyThreshold) {
            this.props.healthyThreshold(healthyThreshold);
            return this;
        }
        /**
         * Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.
         * <p>
         * Default value: 8. Valid values: 3 to 8.  Unit: packet.
         * <p>
         * @return {@code this}
         * @param healthyThreshold Property healthyThreshold: Specifies the number of probe packets to be sent during the health check. This parameter is required.
         */
        public Builder healthyThreshold(final com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
            this.props.healthyThreshold(healthyThreshold);
            return this;
        }

        /**
         * Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
         * <p>
         * @return {@code this}
         * @param vbrInstanceOwnerId Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs. This parameter is required.
         */
        public Builder vbrInstanceOwnerId(final java.lang.Number vbrInstanceOwnerId) {
            this.props.vbrInstanceOwnerId(vbrInstanceOwnerId);
            return this;
        }
        /**
         * Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
         * <p>
         * @return {@code this}
         * @param vbrInstanceOwnerId Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs. This parameter is required.
         */
        public Builder vbrInstanceOwnerId(final com.aliyun.ros.cdk.core.IResolvable vbrInstanceOwnerId) {
            this.props.vbrInstanceOwnerId(vbrInstanceOwnerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.CenVbrHealthCheck}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.CenVbrHealthCheck build() {
            return new com.aliyun.ros.cdk.cen.CenVbrHealthCheck(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
