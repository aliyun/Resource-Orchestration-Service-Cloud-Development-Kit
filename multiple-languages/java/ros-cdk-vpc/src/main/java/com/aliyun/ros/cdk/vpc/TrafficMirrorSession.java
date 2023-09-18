package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  <code>ALIYUN::VPC::TrafficMirrorSession</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:28.914Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.TrafficMirrorSession")
public class TrafficMirrorSession extends com.aliyun.ros.cdk.core.Resource {

    protected TrafficMirrorSession(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrafficMirrorSession(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VPC::TrafficMirrorSession</code>.
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
    public TrafficMirrorSession(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficMirrorSessionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VPC::TrafficMirrorSession</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TrafficMirrorSession(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficMirrorSessionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TrafficMirrorSessionId: The ID of the traffic mirror session.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficMirrorSessionId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorSessionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.TrafficMirrorSession}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.TrafficMirrorSession> {
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
        private final com.aliyun.ros.cdk.vpc.TrafficMirrorSessionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.TrafficMirrorSessionProps.Builder();
        }

        /**
         * Property priority: The priority of the traffic mirror session.
         * <p>
         * Valid values: <strong>1 to 32766</strong>.
         * A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the traffic mirror session. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the traffic mirror session.
         * <p>
         * Valid values: <strong>1 to 32766</strong>.
         * A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the traffic mirror session. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property trafficMirrorFilterId: The ID of the filter.
         * <p>
         * @return {@code this}
         * @param trafficMirrorFilterId Property trafficMirrorFilterId: The ID of the filter. This parameter is required.
         */
        public Builder trafficMirrorFilterId(final java.lang.String trafficMirrorFilterId) {
            this.props.trafficMirrorFilterId(trafficMirrorFilterId);
            return this;
        }
        /**
         * Property trafficMirrorFilterId: The ID of the filter.
         * <p>
         * @return {@code this}
         * @param trafficMirrorFilterId Property trafficMirrorFilterId: The ID of the filter. This parameter is required.
         */
        public Builder trafficMirrorFilterId(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterId) {
            this.props.trafficMirrorFilterId(trafficMirrorFilterId);
            return this;
        }

        /**
         * Property trafficMirrorSourceIds: undefined.
         * <p>
         * @return {@code this}
         * @param trafficMirrorSourceIds Property trafficMirrorSourceIds: undefined. This parameter is required.
         */
        public Builder trafficMirrorSourceIds(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSourceIds) {
            this.props.trafficMirrorSourceIds(trafficMirrorSourceIds);
            return this;
        }
        /**
         * Property trafficMirrorSourceIds: undefined.
         * <p>
         * @return {@code this}
         * @param trafficMirrorSourceIds Property trafficMirrorSourceIds: undefined. This parameter is required.
         */
        public Builder trafficMirrorSourceIds(final java.util.List<? extends java.lang.Object> trafficMirrorSourceIds) {
            this.props.trafficMirrorSourceIds(trafficMirrorSourceIds);
            return this;
        }

        /**
         * Property trafficMirrorTargetId: The ID of the traffic mirror destination.
         * <p>
         * You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
         * <p>
         * @return {@code this}
         * @param trafficMirrorTargetId Property trafficMirrorTargetId: The ID of the traffic mirror destination. This parameter is required.
         */
        public Builder trafficMirrorTargetId(final java.lang.String trafficMirrorTargetId) {
            this.props.trafficMirrorTargetId(trafficMirrorTargetId);
            return this;
        }
        /**
         * Property trafficMirrorTargetId: The ID of the traffic mirror destination.
         * <p>
         * You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
         * <p>
         * @return {@code this}
         * @param trafficMirrorTargetId Property trafficMirrorTargetId: The ID of the traffic mirror destination. This parameter is required.
         */
        public Builder trafficMirrorTargetId(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorTargetId) {
            this.props.trafficMirrorTargetId(trafficMirrorTargetId);
            return this;
        }

        /**
         * Property trafficMirrorTargetType: The type of the traffic mirror destination.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>NetworkInterface</strong>: an ENI</li>
         * <li><strong>SLB</strong>: an SLB instance</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param trafficMirrorTargetType Property trafficMirrorTargetType: The type of the traffic mirror destination. This parameter is required.
         */
        public Builder trafficMirrorTargetType(final java.lang.String trafficMirrorTargetType) {
            this.props.trafficMirrorTargetType(trafficMirrorTargetType);
            return this;
        }
        /**
         * Property trafficMirrorTargetType: The type of the traffic mirror destination.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>NetworkInterface</strong>: an ENI</li>
         * <li><strong>SLB</strong>: an SLB instance</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param trafficMirrorTargetType Property trafficMirrorTargetType: The type of the traffic mirror destination. This parameter is required.
         */
        public Builder trafficMirrorTargetType(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorTargetType) {
            this.props.trafficMirrorTargetType(trafficMirrorTargetType);
            return this;
        }

        /**
         * Property enabled: Specifies whether to enable the traffic mirror session.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>false</strong> (default): does not enable the traffic mirror session.</li>
         * <li><strong>true</strong>: enables the traffic mirror session.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enabled Property enabled: Specifies whether to enable the traffic mirror session. This parameter is required.
         */
        public Builder enabled(final java.lang.Boolean enabled) {
            this.props.enabled(enabled);
            return this;
        }
        /**
         * Property enabled: Specifies whether to enable the traffic mirror session.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>false</strong> (default): does not enable the traffic mirror session.</li>
         * <li><strong>true</strong>: enables the traffic mirror session.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param enabled Property enabled: Specifies whether to enable the traffic mirror session. This parameter is required.
         */
        public Builder enabled(final com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.props.enabled(enabled);
            return this;
        }

        /**
         * Property packetLength: The maximum transmission unit (MTU).
         * <p>
         * Default value: <strong>1500</strong>.
         * <p>
         * @return {@code this}
         * @param packetLength Property packetLength: The maximum transmission unit (MTU). This parameter is required.
         */
        public Builder packetLength(final java.lang.Number packetLength) {
            this.props.packetLength(packetLength);
            return this;
        }
        /**
         * Property packetLength: The maximum transmission unit (MTU).
         * <p>
         * Default value: <strong>1500</strong>.
         * <p>
         * @return {@code this}
         * @param packetLength Property packetLength: The maximum transmission unit (MTU). This parameter is required.
         */
        public Builder packetLength(final com.aliyun.ros.cdk.core.IResolvable packetLength) {
            this.props.packetLength(packetLength);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tag:.
         * <p>
         * @return {@code this}
         * @param tag Property tag:. This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * Property tag:.
         * <p>
         * @return {@code this}
         * @param tag Property tag:. This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * Property trafficMirrorSessionDescription: The description of the traffic mirror session.
         * <p>
         * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param trafficMirrorSessionDescription Property trafficMirrorSessionDescription: The description of the traffic mirror session. This parameter is required.
         */
        public Builder trafficMirrorSessionDescription(final java.lang.String trafficMirrorSessionDescription) {
            this.props.trafficMirrorSessionDescription(trafficMirrorSessionDescription);
            return this;
        }
        /**
         * Property trafficMirrorSessionDescription: The description of the traffic mirror session.
         * <p>
         * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param trafficMirrorSessionDescription Property trafficMirrorSessionDescription: The description of the traffic mirror session. This parameter is required.
         */
        public Builder trafficMirrorSessionDescription(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionDescription) {
            this.props.trafficMirrorSessionDescription(trafficMirrorSessionDescription);
            return this;
        }

        /**
         * Property trafficMirrorSessionName: The name of the traffic mirror session.
         * <p>
         * The name must be 1 to 128 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param trafficMirrorSessionName Property trafficMirrorSessionName: The name of the traffic mirror session. This parameter is required.
         */
        public Builder trafficMirrorSessionName(final java.lang.String trafficMirrorSessionName) {
            this.props.trafficMirrorSessionName(trafficMirrorSessionName);
            return this;
        }
        /**
         * Property trafficMirrorSessionName: The name of the traffic mirror session.
         * <p>
         * The name must be 1 to 128 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param trafficMirrorSessionName Property trafficMirrorSessionName: The name of the traffic mirror session. This parameter is required.
         */
        public Builder trafficMirrorSessionName(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionName) {
            this.props.trafficMirrorSessionName(trafficMirrorSessionName);
            return this;
        }

        /**
         * Property virtualNetworkId: The VXLAN network identifier (VNI).
         * <p>
         * Valid values: <strong>0 to 16777215</strong>.
         * You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
         * <p>
         * @return {@code this}
         * @param virtualNetworkId Property virtualNetworkId: The VXLAN network identifier (VNI). This parameter is required.
         */
        public Builder virtualNetworkId(final java.lang.Number virtualNetworkId) {
            this.props.virtualNetworkId(virtualNetworkId);
            return this;
        }
        /**
         * Property virtualNetworkId: The VXLAN network identifier (VNI).
         * <p>
         * Valid values: <strong>0 to 16777215</strong>.
         * You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
         * <p>
         * @return {@code this}
         * @param virtualNetworkId Property virtualNetworkId: The VXLAN network identifier (VNI). This parameter is required.
         */
        public Builder virtualNetworkId(final com.aliyun.ros.cdk.core.IResolvable virtualNetworkId) {
            this.props.virtualNetworkId(virtualNetworkId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.TrafficMirrorSession}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.TrafficMirrorSession build() {
            return new com.aliyun.ros.cdk.vpc.TrafficMirrorSession(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
