package com.aliyun.ros.cdk.cen;

/**
 * A ROS template type:  `ALIYUN::CEN::CenVbrHealthCheck`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:08.649Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenVbrHealthCheck")
public class RosCenVbrHealthCheck extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCenVbrHealthCheck(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCenVbrHealthCheck(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.RosCenVbrHealthCheck.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CEN::CenVbrHealthCheck`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCenVbrHealthCheck(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RosCenVbrHealthCheckProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckSourceIp() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckSourceIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckTargetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTargetIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthyThreshold() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrInstanceOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceOwnerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrInstanceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrInstanceRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCenId() {
        return software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckTargetIp() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckTargetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckTargetIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckTargetIp", java.util.Objects.requireNonNull(value, "healthCheckTargetIp is required"));
    }

    /**
     */
    public void setHealthCheckTargetIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckTargetIp", java.util.Objects.requireNonNull(value, "healthCheckTargetIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVbrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "vbrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVbrInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vbrInstanceId", java.util.Objects.requireNonNull(value, "vbrInstanceId is required"));
    }

    /**
     */
    public void setVbrInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vbrInstanceId", java.util.Objects.requireNonNull(value, "vbrInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVbrInstanceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "vbrInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVbrInstanceRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vbrInstanceRegionId", java.util.Objects.requireNonNull(value, "vbrInstanceRegionId is required"));
    }

    /**
     */
    public void setVbrInstanceRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vbrInstanceRegionId", java.util.Objects.requireNonNull(value, "vbrInstanceRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckInterval() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckInterval", value);
    }

    /**
     */
    public void setHealthCheckInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckInterval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckSourceIp() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckSourceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckSourceIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckSourceIp", value);
    }

    /**
     */
    public void setHealthCheckSourceIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckSourceIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthyThreshold() {
        return software.amazon.jsii.Kernel.get(this, "healthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthyThreshold(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthyThreshold", value);
    }

    /**
     */
    public void setHealthyThreshold(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthyThreshold", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVbrInstanceOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "vbrInstanceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVbrInstanceOwnerId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "vbrInstanceOwnerId", value);
    }

    /**
     */
    public void setVbrInstanceOwnerId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vbrInstanceOwnerId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RosCenVbrHealthCheck}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RosCenVbrHealthCheck> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cen.RosCenVbrHealthCheckProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RosCenVbrHealthCheckProps.Builder();
        }

        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckTargetIp This parameter is required.
         */
        public Builder healthCheckTargetIp(final java.lang.String healthCheckTargetIp) {
            this.props.healthCheckTargetIp(healthCheckTargetIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckTargetIp This parameter is required.
         */
        public Builder healthCheckTargetIp(final com.aliyun.ros.cdk.core.IResolvable healthCheckTargetIp) {
            this.props.healthCheckTargetIp(healthCheckTargetIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param vbrInstanceId This parameter is required.
         */
        public Builder vbrInstanceId(final java.lang.String vbrInstanceId) {
            this.props.vbrInstanceId(vbrInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vbrInstanceId This parameter is required.
         */
        public Builder vbrInstanceId(final com.aliyun.ros.cdk.core.IResolvable vbrInstanceId) {
            this.props.vbrInstanceId(vbrInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vbrInstanceRegionId This parameter is required.
         */
        public Builder vbrInstanceRegionId(final java.lang.String vbrInstanceRegionId) {
            this.props.vbrInstanceRegionId(vbrInstanceRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vbrInstanceRegionId This parameter is required.
         */
        public Builder vbrInstanceRegionId(final com.aliyun.ros.cdk.core.IResolvable vbrInstanceRegionId) {
            this.props.vbrInstanceRegionId(vbrInstanceRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckInterval This parameter is required.
         */
        public Builder healthCheckInterval(final java.lang.Number healthCheckInterval) {
            this.props.healthCheckInterval(healthCheckInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckInterval This parameter is required.
         */
        public Builder healthCheckInterval(final com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.props.healthCheckInterval(healthCheckInterval);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckSourceIp This parameter is required.
         */
        public Builder healthCheckSourceIp(final java.lang.String healthCheckSourceIp) {
            this.props.healthCheckSourceIp(healthCheckSourceIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckSourceIp This parameter is required.
         */
        public Builder healthCheckSourceIp(final com.aliyun.ros.cdk.core.IResolvable healthCheckSourceIp) {
            this.props.healthCheckSourceIp(healthCheckSourceIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthyThreshold This parameter is required.
         */
        public Builder healthyThreshold(final java.lang.Number healthyThreshold) {
            this.props.healthyThreshold(healthyThreshold);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthyThreshold This parameter is required.
         */
        public Builder healthyThreshold(final com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
            this.props.healthyThreshold(healthyThreshold);
            return this;
        }

        /**
         * @return {@code this}
         * @param vbrInstanceOwnerId This parameter is required.
         */
        public Builder vbrInstanceOwnerId(final java.lang.Number vbrInstanceOwnerId) {
            this.props.vbrInstanceOwnerId(vbrInstanceOwnerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vbrInstanceOwnerId This parameter is required.
         */
        public Builder vbrInstanceOwnerId(final com.aliyun.ros.cdk.core.IResolvable vbrInstanceOwnerId) {
            this.props.vbrInstanceOwnerId(vbrInstanceOwnerId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cen.RosCenVbrHealthCheck}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RosCenVbrHealthCheck build() {
            return new com.aliyun.ros.cdk.cen.RosCenVbrHealthCheck(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
