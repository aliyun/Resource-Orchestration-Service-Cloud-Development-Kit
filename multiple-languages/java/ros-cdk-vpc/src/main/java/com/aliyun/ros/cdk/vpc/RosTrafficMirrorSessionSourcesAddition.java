package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::TrafficMirrorSessionSourcesAddition</code>, which is used to add traffic mirror sources to traffic mirror sessions.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.757Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionSourcesAddition")
public class RosTrafficMirrorSessionSourcesAddition extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrafficMirrorSessionSourcesAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrafficMirrorSessionSourcesAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAddition.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrafficMirrorSessionSourcesAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAdditionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorSessionId() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorSessionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorSessionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSessionId", java.util.Objects.requireNonNull(value, "trafficMirrorSessionId is required"));
    }

    /**
     */
    public void setTrafficMirrorSessionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSessionId", java.util.Objects.requireNonNull(value, "trafficMirrorSessionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorSourceIds() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorSourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorSourceIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSourceIds", java.util.Objects.requireNonNull(value, "trafficMirrorSourceIds is required"));
    }

    /**
     */
    public void setTrafficMirrorSourceIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSourceIds", java.util.Objects.requireNonNull(value, "trafficMirrorSourceIds is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAddition> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAdditionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param trafficMirrorSessionId This parameter is required.
         */
        public Builder trafficMirrorSessionId(final java.lang.String trafficMirrorSessionId) {
            this.props.trafficMirrorSessionId(trafficMirrorSessionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorSessionId This parameter is required.
         */
        public Builder trafficMirrorSessionId(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionId) {
            this.props.trafficMirrorSessionId(trafficMirrorSessionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorSourceIds This parameter is required.
         */
        public Builder trafficMirrorSourceIds(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSourceIds) {
            this.props.trafficMirrorSourceIds(trafficMirrorSourceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorSourceIds This parameter is required.
         */
        public Builder trafficMirrorSourceIds(final java.util.List<? extends java.lang.Object> trafficMirrorSourceIds) {
            this.props.trafficMirrorSourceIds(trafficMirrorSourceIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAddition build() {
            return new com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionSourcesAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
