package com.aliyun.ros.cdk.privatelink;

/**
 * A ROS resource type:  <code>ALIYUN::PrivateLink::VpcEndpointService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:47.066Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.VpcEndpointService")
public class VpcEndpointService extends com.aliyun.ros.cdk.core.Resource {

    protected VpcEndpointService(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcEndpointService(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::PrivateLink::VpcEndpointService</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public VpcEndpointService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::PrivateLink::VpcEndpointService</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public VpcEndpointService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>ALIYUN::PrivateLink::VpcEndpointService</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public VpcEndpointService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMinBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrMinBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceDescription: The description of the endpoint service.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceDomain: The domain name of the endpoint service.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceId: The ID of the endpoint service.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceName: The name of the endpoint service.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.privatelink.VpcEndpointService}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.privatelink.VpcEndpointService> {
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
        private com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
         * <p>
         * Valid values:
         * true: automatically accepts endpoint connection requests.
         * false: does not automatically accept endpoint connection requests.
         * <p>
         * @return {@code this}
         * @param autoAcceptEnabled Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. This parameter is required.
         */
        public Builder autoAcceptEnabled(final java.lang.Boolean autoAcceptEnabled) {
            this.props().autoAcceptEnabled(autoAcceptEnabled);
            return this;
        }
        /**
         * Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
         * <p>
         * Valid values:
         * true: automatically accepts endpoint connection requests.
         * false: does not automatically accept endpoint connection requests.
         * <p>
         * @return {@code this}
         * @param autoAcceptEnabled Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. This parameter is required.
         */
        public Builder autoAcceptEnabled(final com.aliyun.ros.cdk.core.IResolvable autoAcceptEnabled) {
            this.props().autoAcceptEnabled(autoAcceptEnabled);
            return this;
        }

        /**
         * Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
         * <p>
         * Valid values: 100 to 1024. Unit: Mbit/s.
         * <p>
         * @return {@code this}
         * @param connectBandwidth Property connectBandwidth: The default maximum bandwidth of the endpoint connection. This parameter is required.
         */
        public Builder connectBandwidth(final java.lang.Number connectBandwidth) {
            this.props().connectBandwidth(connectBandwidth);
            return this;
        }
        /**
         * Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
         * <p>
         * Valid values: 100 to 1024. Unit: Mbit/s.
         * <p>
         * @return {@code this}
         * @param connectBandwidth Property connectBandwidth: The default maximum bandwidth of the endpoint connection. This parameter is required.
         */
        public Builder connectBandwidth(final com.aliyun.ros.cdk.core.IResolvable connectBandwidth) {
            this.props().connectBandwidth(connectBandwidth);
            return this;
        }

        /**
         * Property payer: The payer of the endpoint service.
         * <p>
         * Valid values:
         * Endpoint: the service consumer.
         * EndpointService: the service provider.
         * <p>
         * @return {@code this}
         * @param payer Property payer: The payer of the endpoint service. This parameter is required.
         */
        public Builder payer(final java.lang.String payer) {
            this.props().payer(payer);
            return this;
        }
        /**
         * Property payer: The payer of the endpoint service.
         * <p>
         * Valid values:
         * Endpoint: the service consumer.
         * EndpointService: the service provider.
         * <p>
         * @return {@code this}
         * @param payer Property payer: The payer of the endpoint service. This parameter is required.
         */
        public Builder payer(final com.aliyun.ros.cdk.core.IResolvable payer) {
            this.props().payer(payer);
            return this;
        }

        /**
         * Property resource:.
         * <p>
         * @return {@code this}
         * @param resource Property resource:. This parameter is required.
         */
        public Builder resource(final com.aliyun.ros.cdk.core.IResolvable resource) {
            this.props().resource(resource);
            return this;
        }
        /**
         * Property resource:.
         * <p>
         * @return {@code this}
         * @param resource Property resource:. This parameter is required.
         */
        public Builder resource(final java.util.List<? extends java.lang.Object> resource) {
            this.props().resource(resource);
            return this;
        }

        /**
         * Property serviceDescription: The description for the endpoint service.
         * <p>
         * @return {@code this}
         * @param serviceDescription Property serviceDescription: The description for the endpoint service. This parameter is required.
         */
        public Builder serviceDescription(final java.lang.String serviceDescription) {
            this.props().serviceDescription(serviceDescription);
            return this;
        }
        /**
         * Property serviceDescription: The description for the endpoint service.
         * <p>
         * @return {@code this}
         * @param serviceDescription Property serviceDescription: The description for the endpoint service. This parameter is required.
         */
        public Builder serviceDescription(final com.aliyun.ros.cdk.core.IResolvable serviceDescription) {
            this.props().serviceDescription(serviceDescription);
            return this;
        }

        /**
         * Property serviceResourceType: Service resource type.
         * <p>
         * @return {@code this}
         * @param serviceResourceType Property serviceResourceType: Service resource type. This parameter is required.
         */
        public Builder serviceResourceType(final java.lang.String serviceResourceType) {
            this.props().serviceResourceType(serviceResourceType);
            return this;
        }
        /**
         * Property serviceResourceType: Service resource type.
         * <p>
         * @return {@code this}
         * @param serviceResourceType Property serviceResourceType: Service resource type. This parameter is required.
         */
        public Builder serviceResourceType(final com.aliyun.ros.cdk.core.IResolvable serviceResourceType) {
            this.props().serviceResourceType(serviceResourceType);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property user: Account IDs to the whitelist of an endpoint service.
         * <p>
         * @return {@code this}
         * @param user Property user: Account IDs to the whitelist of an endpoint service. This parameter is required.
         */
        public Builder user(final com.aliyun.ros.cdk.core.IResolvable user) {
            this.props().user(user);
            return this;
        }
        /**
         * Property user: Account IDs to the whitelist of an endpoint service.
         * <p>
         * @return {@code this}
         * @param user Property user: Account IDs to the whitelist of an endpoint service. This parameter is required.
         */
        public Builder user(final java.util.List<? extends java.lang.Object> user) {
            this.props().user(user);
            return this;
        }

        /**
         * Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
         * <p>
         * true: yes.
         * false (default): no
         * <p>
         * @return {@code this}
         * @param zoneAffinityEnabled Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone. This parameter is required.
         */
        public Builder zoneAffinityEnabled(final java.lang.Boolean zoneAffinityEnabled) {
            this.props().zoneAffinityEnabled(zoneAffinityEnabled);
            return this;
        }
        /**
         * Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
         * <p>
         * true: yes.
         * false (default): no
         * <p>
         * @return {@code this}
         * @param zoneAffinityEnabled Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone. This parameter is required.
         */
        public Builder zoneAffinityEnabled(final com.aliyun.ros.cdk.core.IResolvable zoneAffinityEnabled) {
            this.props().zoneAffinityEnabled(zoneAffinityEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.privatelink.VpcEndpointService}.
         */
        @Override
        public com.aliyun.ros.cdk.privatelink.VpcEndpointService build() {
            return new com.aliyun.ros.cdk.privatelink.VpcEndpointService(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.privatelink.VpcEndpointServiceProps.Builder();
            }
            return this.props;
        }
    }
}
