package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::TrafficMirrorSessionSourcesAddition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.570Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.TrafficMirrorSessionSourcesAddition")
public class TrafficMirrorSessionSourcesAddition extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.ITrafficMirrorSessionSourcesAddition {

    protected TrafficMirrorSessionSourcesAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrafficMirrorSessionSourcesAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TrafficMirrorSessionSourcesAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAdditionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TrafficMirrorSessionSourcesAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAdditionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAdditionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAdditionProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAddition> {
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
        private final com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAdditionProps.Builder();
        }

        /**
         * Property trafficMirrorSessionId: The ID of the traffic mirror session.
         * <p>
         * @return {@code this}
         * @param trafficMirrorSessionId Property trafficMirrorSessionId: The ID of the traffic mirror session. This parameter is required.
         */
        public Builder trafficMirrorSessionId(final java.lang.String trafficMirrorSessionId) {
            this.props.trafficMirrorSessionId(trafficMirrorSessionId);
            return this;
        }
        /**
         * Property trafficMirrorSessionId: The ID of the traffic mirror session.
         * <p>
         * @return {@code this}
         * @param trafficMirrorSessionId Property trafficMirrorSessionId: The ID of the traffic mirror session. This parameter is required.
         */
        public Builder trafficMirrorSessionId(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionId) {
            this.props.trafficMirrorSessionId(trafficMirrorSessionId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAddition build() {
            return new com.aliyun.ros.cdk.vpc.TrafficMirrorSessionSourcesAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
