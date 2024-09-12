package com.aliyun.ros.cdk.computenest;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ComputeNest::IntranetConnectorEndpoint</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:24.679Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.IntranetConnectorEndpoint")
public class IntranetConnectorEndpoint extends com.aliyun.ros.cdk.core.Resource {

    protected IntranetConnectorEndpoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected IntranetConnectorEndpoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public IntranetConnectorEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.IntranetConnectorEndpointProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public IntranetConnectorEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.IntranetConnectorEndpointProps props) {
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.IntranetConnectorEndpointProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.IntranetConnectorEndpointProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.IntranetConnectorEndpointProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.computenest.IntranetConnectorEndpoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.computenest.IntranetConnectorEndpoint> {
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
        private final com.aliyun.ros.cdk.computenest.IntranetConnectorEndpointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.computenest.IntranetConnectorEndpointProps.Builder();
        }

        /**
         * Property endpointRegionId: The region ID of the endpoint.
         * <p>
         * @return {@code this}
         * @param endpointRegionId Property endpointRegionId: The region ID of the endpoint. This parameter is required.
         */
        public Builder endpointRegionId(final java.lang.String endpointRegionId) {
            this.props.endpointRegionId(endpointRegionId);
            return this;
        }
        /**
         * Property endpointRegionId: The region ID of the endpoint.
         * <p>
         * @return {@code this}
         * @param endpointRegionId Property endpointRegionId: The region ID of the endpoint. This parameter is required.
         */
        public Builder endpointRegionId(final com.aliyun.ros.cdk.core.IResolvable endpointRegionId) {
            this.props.endpointRegionId(endpointRegionId);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC to which the endpoint belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which the endpoint belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC to which the endpoint belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which the endpoint belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property description: The description of the endpoint, supporting full character set.
         * <p>
         * The length must not exceed 500 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the endpoint, supporting full character set. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the endpoint, supporting full character set.
         * <p>
         * The length must not exceed 500 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the endpoint, supporting full character set. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property enablePrivateZone: Whether to enable the private zone.
         * <p>
         * This parameter is only valid when the access point type is Managed.
         * <p>
         * @return {@code this}
         * @param enablePrivateZone Property enablePrivateZone: Whether to enable the private zone. This parameter is required.
         */
        public Builder enablePrivateZone(final java.lang.Boolean enablePrivateZone) {
            this.props.enablePrivateZone(enablePrivateZone);
            return this;
        }
        /**
         * Property enablePrivateZone: Whether to enable the private zone.
         * <p>
         * This parameter is only valid when the access point type is Managed.
         * <p>
         * @return {@code this}
         * @param enablePrivateZone Property enablePrivateZone: Whether to enable the private zone. This parameter is required.
         */
        public Builder enablePrivateZone(final com.aliyun.ros.cdk.core.IResolvable enablePrivateZone) {
            this.props.enablePrivateZone(enablePrivateZone);
            return this;
        }

        /**
         * Property name: The name of the endpoint, supporting full character set except space.
         * <p>
         * The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the endpoint, supporting full character set except space. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the endpoint, supporting full character set except space.
         * <p>
         * The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the endpoint, supporting full character set except space. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.
         * <p>
         * Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
         * Hosted access points do not require incoming.
         * <p>
         * @return {@code this}
         * @param resourceIds Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. This parameter is required.
         */
        public Builder resourceIds(final com.aliyun.ros.cdk.core.IResolvable resourceIds) {
            this.props.resourceIds(resourceIds);
            return this;
        }
        /**
         * Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS.
         * <p>
         * Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
         * Hosted access points do not require incoming.
         * <p>
         * @return {@code this}
         * @param resourceIds Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. This parameter is required.
         */
        public Builder resourceIds(final java.util.List<? extends java.lang.Object> resourceIds) {
            this.props.resourceIds(resourceIds);
            return this;
        }

        /**
         * Property type: The type of the endpoint.
         * <p>
         * <ul>
         * <li>Private (default) : private access point</li>
         * <li>Managed: managed access point.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the endpoint. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the endpoint.
         * <p>
         * <ul>
         * <li>Private (default) : private access point</li>
         * <li>Managed: managed access point.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the endpoint. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.computenest.IntranetConnectorEndpoint}.
         */
        @Override
        public com.aliyun.ros.cdk.computenest.IntranetConnectorEndpoint build() {
            return new com.aliyun.ros.cdk.computenest.IntranetConnectorEndpoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
