package com.aliyun.ros.cdk.privatelink;

/**
 * A ROS resource type:  `ALIYUN::PrivateLink::VpcEndpoint`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:42.153Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.VpcEndpoint")
public class VpcEndpoint extends com.aliyun.ros.cdk.core.Resource {

    protected VpcEndpoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcEndpoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpoint`.
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
    public VpcEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpoint`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public VpcEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Bandwidth: The bandwidth of the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EndpointDomain: The domain name of the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EndpointName: The name of the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointName() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceName: The name of endpoint service that is associated with the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: The vpc ID of endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneDomains: The zone domains.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneDomains() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneDomains", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.privatelink.VpcEndpoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.privatelink.VpcEndpoint> {
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
        private final com.aliyun.ros.cdk.privatelink.VpcEndpointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.privatelink.VpcEndpointProps.Builder();
        }

        /**
         * Property securityGroupId: The security group associated with the endpoint network interface.
         * <p>
         * The security group can control the data communication from the VPC to the endpoint network interface.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The security group associated with the endpoint network interface. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The security group associated with the endpoint network interface.
         * <p>
         * The security group can control the data communication from the VPC to the endpoint network interface.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The security group associated with the endpoint network interface. This parameter is required.
         */
        public Builder securityGroupId(final java.util.List<? extends java.lang.Object> securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property vpcId: The VPC to which the endpoint belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC to which the endpoint belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC to which the endpoint belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC to which the endpoint belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property endpointDescription: The description of the endpoint.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param endpointDescription Property endpointDescription: The description of the endpoint. This parameter is required.
         */
        public Builder endpointDescription(final java.lang.String endpointDescription) {
            this.props.endpointDescription(endpointDescription);
            return this;
        }
        /**
         * Property endpointDescription: The description of the endpoint.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param endpointDescription Property endpointDescription: The description of the endpoint. This parameter is required.
         */
        public Builder endpointDescription(final com.aliyun.ros.cdk.core.IResolvable endpointDescription) {
            this.props.endpointDescription(endpointDescription);
            return this;
        }

        /**
         * Property endpointName: The name of the endpoint.
         * <p>
         * The name must be 2 to 128 characters in length and can contain digits, underscores
         * (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param endpointName Property endpointName: The name of the endpoint. This parameter is required.
         */
        public Builder endpointName(final java.lang.String endpointName) {
            this.props.endpointName(endpointName);
            return this;
        }
        /**
         * Property endpointName: The name of the endpoint.
         * <p>
         * The name must be 2 to 128 characters in length and can contain digits, underscores
         * (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param endpointName Property endpointName: The name of the endpoint. This parameter is required.
         */
        public Builder endpointName(final com.aliyun.ros.cdk.core.IResolvable endpointName) {
            this.props.endpointName(endpointName);
            return this;
        }

        /**
         * Property serviceId: The endpoint service that is associated with the endpoint.
         * <p>
         * One of ServiceId and ServiceName is required.
         * <p>
         * @return {@code this}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint. This parameter is required.
         */
        public Builder serviceId(final java.lang.String serviceId) {
            this.props.serviceId(serviceId);
            return this;
        }
        /**
         * Property serviceId: The endpoint service that is associated with the endpoint.
         * <p>
         * One of ServiceId and ServiceName is required.
         * <p>
         * @return {@code this}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint. This parameter is required.
         */
        public Builder serviceId(final com.aliyun.ros.cdk.core.IResolvable serviceId) {
            this.props.serviceId(serviceId);
            return this;
        }

        /**
         * Property serviceName: The name of the endpoint service that is associated with the endpoint.
         * <p>
         * One of ServiceId and ServiceName is required.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: The name of the endpoint service that is associated with the endpoint. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: The name of the endpoint service that is associated with the endpoint.
         * <p>
         * One of ServiceId and ServiceName is required.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: The name of the endpoint service that is associated with the endpoint. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property zone:.
         * <p>
         * @return {@code this}
         * @param zone Property zone:. This parameter is required.
         */
        public Builder zone(final com.aliyun.ros.cdk.core.IResolvable zone) {
            this.props.zone(zone);
            return this;
        }
        /**
         * Property zone:.
         * <p>
         * @return {@code this}
         * @param zone Property zone:. This parameter is required.
         */
        public Builder zone(final java.util.List<? extends java.lang.Object> zone) {
            this.props.zone(zone);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.privatelink.VpcEndpoint}.
         */
        @Override
        public com.aliyun.ros.cdk.privatelink.VpcEndpoint build() {
            return new com.aliyun.ros.cdk.privatelink.VpcEndpoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
