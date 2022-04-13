package com.aliyun.ros.cdk.cen;

/**
 * A ROS resource type:  `ALIYUN::CEN::CenRouteService`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:13.883Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenRouteService")
public class CenRouteService extends com.aliyun.ros.cdk.core.Resource {

    protected CenRouteService(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenRouteService(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CEN::CenRouteService`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CenRouteService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenRouteServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CEN::CenRouteService`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CenRouteService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenRouteServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Id: The ID of the cloud service.
     * <p>
     * It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.CenRouteService}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.CenRouteService> {
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
        private final com.aliyun.ros.cdk.cen.CenRouteServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.CenRouteServiceProps.Builder();
        }

        /**
         * Property accessRegionId: The region where the cloud service is deployed.
         * <p>
         * @return {@code this}
         * @param accessRegionId Property accessRegionId: The region where the cloud service is deployed. This parameter is required.
         */
        public Builder accessRegionId(final java.lang.String accessRegionId) {
            this.props.accessRegionId(accessRegionId);
            return this;
        }
        /**
         * Property accessRegionId: The region where the cloud service is deployed.
         * <p>
         * @return {@code this}
         * @param accessRegionId Property accessRegionId: The region where the cloud service is deployed. This parameter is required.
         */
        public Builder accessRegionId(final com.aliyun.ros.cdk.core.IResolvable accessRegionId) {
            this.props.accessRegionId(accessRegionId);
            return this;
        }

        /**
         * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property host: The domain or IP address of the cloud service.
         * <p>
         * @return {@code this}
         * @param host Property host: The domain or IP address of the cloud service. This parameter is required.
         */
        public Builder host(final java.lang.String host) {
            this.props.host(host);
            return this;
        }
        /**
         * Property host: The domain or IP address of the cloud service.
         * <p>
         * @return {@code this}
         * @param host Property host: The domain or IP address of the cloud service. This parameter is required.
         */
        public Builder host(final com.aliyun.ros.cdk.core.IResolvable host) {
            this.props.host(host);
            return this;
        }

        /**
         * Property hostRegionId: The region where the cloud service is deployed.
         * <p>
         * You can call the DescribeRegions operation to query region IDs.
         * Note The HostRegionId and AccessRegionIds.N must be set to the same value.
         * <p>
         * @return {@code this}
         * @param hostRegionId Property hostRegionId: The region where the cloud service is deployed. This parameter is required.
         */
        public Builder hostRegionId(final java.lang.String hostRegionId) {
            this.props.hostRegionId(hostRegionId);
            return this;
        }
        /**
         * Property hostRegionId: The region where the cloud service is deployed.
         * <p>
         * You can call the DescribeRegions operation to query region IDs.
         * Note The HostRegionId and AccessRegionIds.N must be set to the same value.
         * <p>
         * @return {@code this}
         * @param hostRegionId Property hostRegionId: The region where the cloud service is deployed. This parameter is required.
         */
        public Builder hostRegionId(final com.aliyun.ros.cdk.core.IResolvable hostRegionId) {
            this.props.hostRegionId(hostRegionId);
            return this;
        }

        /**
         * Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
         * <p>
         * @return {@code this}
         * @param hostVpcId Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service. This parameter is required.
         */
        public Builder hostVpcId(final java.lang.String hostVpcId) {
            this.props.hostVpcId(hostVpcId);
            return this;
        }
        /**
         * Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
         * <p>
         * @return {@code this}
         * @param hostVpcId Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service. This parameter is required.
         */
        public Builder hostVpcId(final com.aliyun.ros.cdk.core.IResolvable hostVpcId) {
            this.props.hostVpcId(hostVpcId);
            return this;
        }

        /**
         * Property description: The description of the cloud service.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the cloud service. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the cloud service.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the cloud service. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cen.CenRouteService}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.CenRouteService build() {
            return new com.aliyun.ros.cdk.cen.CenRouteService(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
