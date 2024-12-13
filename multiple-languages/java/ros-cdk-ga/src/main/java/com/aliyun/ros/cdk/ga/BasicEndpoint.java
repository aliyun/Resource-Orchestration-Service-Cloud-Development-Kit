package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::BasicEndpoint</code>, which is used to create an endpoint for a basic Global Accelerator (GA) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:08.607Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.BasicEndpoint")
public class BasicEndpoint extends com.aliyun.ros.cdk.core.Resource {

    protected BasicEndpoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BasicEndpoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public BasicEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicEndpointProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public BasicEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicEndpointProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicEndpointProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.BasicEndpointProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicEndpointProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.BasicEndpoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.BasicEndpoint> {
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
        private final com.aliyun.ros.cdk.ga.BasicEndpointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.BasicEndpointProps.Builder();
        }

        /**
         * Property acceleratorId: The ID of the basic GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * Property acceleratorId: The ID of the basic GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * Property endpointAddress: The address of the endpoint.
         * <p>
         * @return {@code this}
         * @param endpointAddress Property endpointAddress: The address of the endpoint. This parameter is required.
         */
        public Builder endpointAddress(final java.lang.String endpointAddress) {
            this.props.endpointAddress(endpointAddress);
            return this;
        }
        /**
         * Property endpointAddress: The address of the endpoint.
         * <p>
         * @return {@code this}
         * @param endpointAddress Property endpointAddress: The address of the endpoint. This parameter is required.
         */
        public Builder endpointAddress(final com.aliyun.ros.cdk.core.IResolvable endpointAddress) {
            this.props.endpointAddress(endpointAddress);
            return this;
        }

        /**
         * Property endpointGroupId: The ID of the endpoint group.
         * <p>
         * @return {@code this}
         * @param endpointGroupId Property endpointGroupId: The ID of the endpoint group. This parameter is required.
         */
        public Builder endpointGroupId(final java.lang.String endpointGroupId) {
            this.props.endpointGroupId(endpointGroupId);
            return this;
        }
        /**
         * Property endpointGroupId: The ID of the endpoint group.
         * <p>
         * @return {@code this}
         * @param endpointGroupId Property endpointGroupId: The ID of the endpoint group. This parameter is required.
         */
        public Builder endpointGroupId(final com.aliyun.ros.cdk.core.IResolvable endpointGroupId) {
            this.props.endpointGroupId(endpointGroupId);
            return this;
        }

        /**
         * Property endpointSubAddress: The secondary address of the endpoint.
         * <p>
         * This parameter is required if the endpoint type is ECS, ENI, or NLB.
         * If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
         * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
         * This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
         * <p>
         * @return {@code this}
         * @param endpointSubAddress Property endpointSubAddress: The secondary address of the endpoint. This parameter is required.
         */
        public Builder endpointSubAddress(final java.lang.String endpointSubAddress) {
            this.props.endpointSubAddress(endpointSubAddress);
            return this;
        }
        /**
         * Property endpointSubAddress: The secondary address of the endpoint.
         * <p>
         * This parameter is required if the endpoint type is ECS, ENI, or NLB.
         * If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
         * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
         * This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
         * <p>
         * @return {@code this}
         * @param endpointSubAddress Property endpointSubAddress: The secondary address of the endpoint. This parameter is required.
         */
        public Builder endpointSubAddress(final com.aliyun.ros.cdk.core.IResolvable endpointSubAddress) {
            this.props.endpointSubAddress(endpointSubAddress);
            return this;
        }

        /**
         * Property endpointSubAddressType: The type of the secondary address of the endpoint.
         * <p>
         * Valid values:
         * primary: a primary private IP address.
         * secondary: a secondary private IP address.
         * This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
         * <p>
         * @return {@code this}
         * @param endpointSubAddressType Property endpointSubAddressType: The type of the secondary address of the endpoint. This parameter is required.
         */
        public Builder endpointSubAddressType(final java.lang.String endpointSubAddressType) {
            this.props.endpointSubAddressType(endpointSubAddressType);
            return this;
        }
        /**
         * Property endpointSubAddressType: The type of the secondary address of the endpoint.
         * <p>
         * Valid values:
         * primary: a primary private IP address.
         * secondary: a secondary private IP address.
         * This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
         * <p>
         * @return {@code this}
         * @param endpointSubAddressType Property endpointSubAddressType: The type of the secondary address of the endpoint. This parameter is required.
         */
        public Builder endpointSubAddressType(final com.aliyun.ros.cdk.core.IResolvable endpointSubAddressType) {
            this.props.endpointSubAddressType(endpointSubAddressType);
            return this;
        }

        /**
         * Property endpointType: The type of the endpoint.
         * <p>
         * Valid values:
         * ENI: elastic network interface (ENI)
         * SLB: Classic Load Balancer (CLB)
         * NLB: Network Load Balancer (NLB)
         * ECS: Elastic Compute Service (ECS)
         * <p>
         * @return {@code this}
         * @param endpointType Property endpointType: The type of the endpoint. This parameter is required.
         */
        public Builder endpointType(final java.lang.String endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }
        /**
         * Property endpointType: The type of the endpoint.
         * <p>
         * Valid values:
         * ENI: elastic network interface (ENI)
         * SLB: Classic Load Balancer (CLB)
         * NLB: Network Load Balancer (NLB)
         * ECS: Elastic Compute Service (ECS)
         * <p>
         * @return {@code this}
         * @param endpointType Property endpointType: The type of the endpoint. This parameter is required.
         */
        public Builder endpointType(final com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }

        /**
         * Property endpointZoneId: The zone ID of the endpoint.
         * <p>
         * This parameter is required only if the endpoint type is NLB.
         * <p>
         * @return {@code this}
         * @param endpointZoneId Property endpointZoneId: The zone ID of the endpoint. This parameter is required.
         */
        public Builder endpointZoneId(final java.lang.String endpointZoneId) {
            this.props.endpointZoneId(endpointZoneId);
            return this;
        }
        /**
         * Property endpointZoneId: The zone ID of the endpoint.
         * <p>
         * This parameter is required only if the endpoint type is NLB.
         * <p>
         * @return {@code this}
         * @param endpointZoneId Property endpointZoneId: The zone ID of the endpoint. This parameter is required.
         */
        public Builder endpointZoneId(final com.aliyun.ros.cdk.core.IResolvable endpointZoneId) {
            this.props.endpointZoneId(endpointZoneId);
            return this;
        }

        /**
         * Property name: The name of the endpoint that is associated with the basic GA instance.
         * <p>
         * The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the endpoint that is associated with the basic GA instance. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the endpoint that is associated with the basic GA instance.
         * <p>
         * The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the endpoint that is associated with the basic GA instance. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.BasicEndpoint}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.BasicEndpoint build() {
            return new com.aliyun.ros.cdk.ga.BasicEndpoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
