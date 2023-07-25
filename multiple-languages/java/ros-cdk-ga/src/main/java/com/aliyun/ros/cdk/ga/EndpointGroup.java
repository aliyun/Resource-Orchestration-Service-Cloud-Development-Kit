package com.aliyun.ros.cdk.ga;

/**
 * A ROS resource type:  <code>ALIYUN::GA::EndpointGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.514Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.EndpointGroup")
public class EndpointGroup extends com.aliyun.ros.cdk.core.Resource {

    protected EndpointGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EndpointGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::GA::EndpointGroup</code>.
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
    public EndpointGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.EndpointGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::GA::EndpointGroup</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public EndpointGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.EndpointGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EndpointGroupId: The ID of the endpoint group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.EndpointGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.EndpointGroup> {
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
        private final com.aliyun.ros.cdk.ga.EndpointGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.EndpointGroupProps.Builder();
        }

        /**
         * Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated. This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated. This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * Property endpointConfigurations:.
         * <p>
         * @return {@code this}
         * @param endpointConfigurations Property endpointConfigurations:. This parameter is required.
         */
        public Builder endpointConfigurations(final com.aliyun.ros.cdk.core.IResolvable endpointConfigurations) {
            this.props.endpointConfigurations(endpointConfigurations);
            return this;
        }
        /**
         * Property endpointConfigurations:.
         * <p>
         * @return {@code this}
         * @param endpointConfigurations Property endpointConfigurations:. This parameter is required.
         */
        public Builder endpointConfigurations(final java.util.List<? extends java.lang.Object> endpointConfigurations) {
            this.props.endpointConfigurations(endpointConfigurations);
            return this;
        }

        /**
         * Property endpointGroupRegion: The region ID of the endpoint group.
         * <p>
         * @return {@code this}
         * @param endpointGroupRegion Property endpointGroupRegion: The region ID of the endpoint group. This parameter is required.
         */
        public Builder endpointGroupRegion(final java.lang.String endpointGroupRegion) {
            this.props.endpointGroupRegion(endpointGroupRegion);
            return this;
        }
        /**
         * Property endpointGroupRegion: The region ID of the endpoint group.
         * <p>
         * @return {@code this}
         * @param endpointGroupRegion Property endpointGroupRegion: The region ID of the endpoint group. This parameter is required.
         */
        public Builder endpointGroupRegion(final com.aliyun.ros.cdk.core.IResolvable endpointGroupRegion) {
            this.props.endpointGroupRegion(endpointGroupRegion);
            return this;
        }

        /**
         * Property listenerId: The ID of the listener to be associated with the endpoint group.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The ID of the listener to be associated with the endpoint group. This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * Property listenerId: The ID of the listener to be associated with the endpoint group.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The ID of the listener to be associated with the endpoint group. This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * Property description: The description of the endpoint group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the endpoint group. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the endpoint group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the endpoint group. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property endpointGroupType: The type of the endpoint group.
         * <p>
         * Valid values:
         * default: The endpoint group is a default endpoint group. This is the default value.
         * virtual: The endpoint group is a virtual endpoint group.
         * Note Only HTTP and HTTPS listeners support virtual endpoint groups.
         * <p>
         * @return {@code this}
         * @param endpointGroupType Property endpointGroupType: The type of the endpoint group. This parameter is required.
         */
        public Builder endpointGroupType(final java.lang.String endpointGroupType) {
            this.props.endpointGroupType(endpointGroupType);
            return this;
        }
        /**
         * Property endpointGroupType: The type of the endpoint group.
         * <p>
         * Valid values:
         * default: The endpoint group is a default endpoint group. This is the default value.
         * virtual: The endpoint group is a virtual endpoint group.
         * Note Only HTTP and HTTPS listeners support virtual endpoint groups.
         * <p>
         * @return {@code this}
         * @param endpointGroupType Property endpointGroupType: The type of the endpoint group. This parameter is required.
         */
        public Builder endpointGroupType(final com.aliyun.ros.cdk.core.IResolvable endpointGroupType) {
            this.props.endpointGroupType(endpointGroupType);
            return this;
        }

        /**
         * Property endpointRequestProtocol: The protocol used by the backend service.
         * <p>
         * Valid values:
         * http: This is the default value.
         * https
         * Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
         * For an HTTP listener, the backend service protocol must be HTTP.
         * <p>
         * @return {@code this}
         * @param endpointRequestProtocol Property endpointRequestProtocol: The protocol used by the backend service. This parameter is required.
         */
        public Builder endpointRequestProtocol(final java.lang.String endpointRequestProtocol) {
            this.props.endpointRequestProtocol(endpointRequestProtocol);
            return this;
        }
        /**
         * Property endpointRequestProtocol: The protocol used by the backend service.
         * <p>
         * Valid values:
         * http: This is the default value.
         * https
         * Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
         * For an HTTP listener, the backend service protocol must be HTTP.
         * <p>
         * @return {@code this}
         * @param endpointRequestProtocol Property endpointRequestProtocol: The protocol used by the backend service. This parameter is required.
         */
        public Builder endpointRequestProtocol(final com.aliyun.ros.cdk.core.IResolvable endpointRequestProtocol) {
            this.props.endpointRequestProtocol(endpointRequestProtocol);
            return this;
        }

        /**
         * Property healthCheckEnabled: Specifies whether to enable the health check feature.
         * <p>
         * @return {@code this}
         * @param healthCheckEnabled Property healthCheckEnabled: Specifies whether to enable the health check feature. This parameter is required.
         */
        public Builder healthCheckEnabled(final java.lang.Boolean healthCheckEnabled) {
            this.props.healthCheckEnabled(healthCheckEnabled);
            return this;
        }
        /**
         * Property healthCheckEnabled: Specifies whether to enable the health check feature.
         * <p>
         * @return {@code this}
         * @param healthCheckEnabled Property healthCheckEnabled: Specifies whether to enable the health check feature. This parameter is required.
         */
        public Builder healthCheckEnabled(final com.aliyun.ros.cdk.core.IResolvable healthCheckEnabled) {
            this.props.healthCheckEnabled(healthCheckEnabled);
            return this;
        }

        /**
         * Property healthCheckIntervalSeconds: The interval between two consecutive health checks.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param healthCheckIntervalSeconds Property healthCheckIntervalSeconds: The interval between two consecutive health checks. This parameter is required.
         */
        public Builder healthCheckIntervalSeconds(final java.lang.Number healthCheckIntervalSeconds) {
            this.props.healthCheckIntervalSeconds(healthCheckIntervalSeconds);
            return this;
        }
        /**
         * Property healthCheckIntervalSeconds: The interval between two consecutive health checks.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param healthCheckIntervalSeconds Property healthCheckIntervalSeconds: The interval between two consecutive health checks. This parameter is required.
         */
        public Builder healthCheckIntervalSeconds(final com.aliyun.ros.cdk.core.IResolvable healthCheckIntervalSeconds) {
            this.props.healthCheckIntervalSeconds(healthCheckIntervalSeconds);
            return this;
        }

        /**
         * Property healthCheckPath: The path set as the destination on the targets for health checks.
         * <p>
         * @return {@code this}
         * @param healthCheckPath Property healthCheckPath: The path set as the destination on the targets for health checks. This parameter is required.
         */
        public Builder healthCheckPath(final java.lang.String healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }
        /**
         * Property healthCheckPath: The path set as the destination on the targets for health checks.
         * <p>
         * @return {@code this}
         * @param healthCheckPath Property healthCheckPath: The path set as the destination on the targets for health checks. This parameter is required.
         */
        public Builder healthCheckPath(final com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }

        /**
         * Property healthCheckPort: The port that is used to connect with the targets for health checks.
         * <p>
         * @return {@code this}
         * @param healthCheckPort Property healthCheckPort: The port that is used to connect with the targets for health checks. This parameter is required.
         */
        public Builder healthCheckPort(final java.lang.Number healthCheckPort) {
            this.props.healthCheckPort(healthCheckPort);
            return this;
        }
        /**
         * Property healthCheckPort: The port that is used to connect with the targets for health checks.
         * <p>
         * @return {@code this}
         * @param healthCheckPort Property healthCheckPort: The port that is used to connect with the targets for health checks. This parameter is required.
         */
        public Builder healthCheckPort(final com.aliyun.ros.cdk.core.IResolvable healthCheckPort) {
            this.props.healthCheckPort(healthCheckPort);
            return this;
        }

        /**
         * Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
         * <p>
         * tcp: TCP protocol
         * http: HTTP protocol
         * https: HTTPS protocol
         * <p>
         * @return {@code this}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks. This parameter is required.
         */
        public Builder healthCheckProtocol(final java.lang.String healthCheckProtocol) {
            this.props.healthCheckProtocol(healthCheckProtocol);
            return this;
        }
        /**
         * Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
         * <p>
         * tcp: TCP protocol
         * http: HTTP protocol
         * https: HTTPS protocol
         * <p>
         * @return {@code this}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks. This parameter is required.
         */
        public Builder healthCheckProtocol(final com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
            this.props.healthCheckProtocol(healthCheckProtocol);
            return this;
        }

        /**
         * Property name: The name of the endpoint group.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the endpoint group. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the endpoint group.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the endpoint group. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
         * <p>
         * Valid values: 2 to 10. Default value: 3.
         * <p>
         * @return {@code this}
         * @param thresholdCount Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy. This parameter is required.
         */
        public Builder thresholdCount(final java.lang.Number thresholdCount) {
            this.props.thresholdCount(thresholdCount);
            return this;
        }
        /**
         * Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
         * <p>
         * Valid values: 2 to 10. Default value: 3.
         * <p>
         * @return {@code this}
         * @param thresholdCount Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy. This parameter is required.
         */
        public Builder thresholdCount(final com.aliyun.ros.cdk.core.IResolvable thresholdCount) {
            this.props.thresholdCount(thresholdCount);
            return this;
        }

        /**
         * Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.
         * <p>
         * @return {@code this}
         * @param trafficPercentage Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups. This parameter is required.
         */
        public Builder trafficPercentage(final java.lang.Number trafficPercentage) {
            this.props.trafficPercentage(trafficPercentage);
            return this;
        }
        /**
         * Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.
         * <p>
         * @return {@code this}
         * @param trafficPercentage Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups. This parameter is required.
         */
        public Builder trafficPercentage(final com.aliyun.ros.cdk.core.IResolvable trafficPercentage) {
            this.props.trafficPercentage(trafficPercentage);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.EndpointGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.EndpointGroup build() {
            return new com.aliyun.ros.cdk.ga.EndpointGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
