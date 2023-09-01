package com.aliyun.ros.cdk.alb;

/**
 * A ROS template type:  <code>ALIYUN::ALB::HealthCheckTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:34.950Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosHealthCheckTemplate")
public class RosHealthCheckTemplate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHealthCheckTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHealthCheckTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.alb.RosHealthCheckTemplate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ALB::HealthCheckTemplate</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHealthCheckTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RosHealthCheckTemplateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

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
    public @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckTemplateName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckTemplateName", java.util.Objects.requireNonNull(value, "healthCheckTemplateName is required"));
    }

    /**
     */
    public void setHealthCheckTemplateName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckTemplateName", java.util.Objects.requireNonNull(value, "healthCheckTemplateName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckCodes() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckCodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckCodes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckCodes", value);
    }

    /**
     */
    public void setHealthCheckCodes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "healthCheckCodes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConnectPort() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckConnectPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConnectPort", value);
    }

    /**
     */
    public void setHealthCheckConnectPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConnectPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHost() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckHost(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckHost", value);
    }

    /**
     */
    public void setHealthCheckHost(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckHost", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckMethod() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckMethod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckMethod", value);
    }

    /**
     */
    public void setHealthCheckMethod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckMethod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPath() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckPath(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPath", value);
    }

    /**
     */
    public void setHealthCheckPath(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPath", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckProtocol() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckProtocol", value);
    }

    /**
     */
    public void setHealthCheckProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckProtocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckTimeout() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckTimeout", value);
    }

    /**
     */
    public void setHealthCheckTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckTimeout", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getUnhealthyThreshold() {
        return software.amazon.jsii.Kernel.get(this, "unhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUnhealthyThreshold(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "unhealthyThreshold", value);
    }

    /**
     */
    public void setUnhealthyThreshold(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "unhealthyThreshold", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.RosHealthCheckTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.RosHealthCheckTemplate> {
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
        private final com.aliyun.ros.cdk.alb.RosHealthCheckTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.RosHealthCheckTemplateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param healthCheckTemplateName This parameter is required.
         */
        public Builder healthCheckTemplateName(final java.lang.String healthCheckTemplateName) {
            this.props.healthCheckTemplateName(healthCheckTemplateName);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckTemplateName This parameter is required.
         */
        public Builder healthCheckTemplateName(final com.aliyun.ros.cdk.core.IResolvable healthCheckTemplateName) {
            this.props.healthCheckTemplateName(healthCheckTemplateName);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckCodes This parameter is required.
         */
        public Builder healthCheckCodes(final com.aliyun.ros.cdk.core.IResolvable healthCheckCodes) {
            this.props.healthCheckCodes(healthCheckCodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckCodes This parameter is required.
         */
        public Builder healthCheckCodes(final java.util.List<? extends java.lang.Object> healthCheckCodes) {
            this.props.healthCheckCodes(healthCheckCodes);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckConnectPort This parameter is required.
         */
        public Builder healthCheckConnectPort(final java.lang.Number healthCheckConnectPort) {
            this.props.healthCheckConnectPort(healthCheckConnectPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckConnectPort This parameter is required.
         */
        public Builder healthCheckConnectPort(final com.aliyun.ros.cdk.core.IResolvable healthCheckConnectPort) {
            this.props.healthCheckConnectPort(healthCheckConnectPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckHost This parameter is required.
         */
        public Builder healthCheckHost(final java.lang.String healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckHost This parameter is required.
         */
        public Builder healthCheckHost(final com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
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
         * @param healthCheckMethod This parameter is required.
         */
        public Builder healthCheckMethod(final java.lang.String healthCheckMethod) {
            this.props.healthCheckMethod(healthCheckMethod);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckMethod This parameter is required.
         */
        public Builder healthCheckMethod(final com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
            this.props.healthCheckMethod(healthCheckMethod);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckPath This parameter is required.
         */
        public Builder healthCheckPath(final java.lang.String healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckPath This parameter is required.
         */
        public Builder healthCheckPath(final com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckProtocol This parameter is required.
         */
        public Builder healthCheckProtocol(final java.lang.String healthCheckProtocol) {
            this.props.healthCheckProtocol(healthCheckProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckProtocol This parameter is required.
         */
        public Builder healthCheckProtocol(final com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
            this.props.healthCheckProtocol(healthCheckProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckTimeout This parameter is required.
         */
        public Builder healthCheckTimeout(final java.lang.Number healthCheckTimeout) {
            this.props.healthCheckTimeout(healthCheckTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckTimeout This parameter is required.
         */
        public Builder healthCheckTimeout(final com.aliyun.ros.cdk.core.IResolvable healthCheckTimeout) {
            this.props.healthCheckTimeout(healthCheckTimeout);
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
         * @param unhealthyThreshold This parameter is required.
         */
        public Builder unhealthyThreshold(final java.lang.Number unhealthyThreshold) {
            this.props.unhealthyThreshold(unhealthyThreshold);
            return this;
        }
        /**
         * @return {@code this}
         * @param unhealthyThreshold This parameter is required.
         */
        public Builder unhealthyThreshold(final com.aliyun.ros.cdk.core.IResolvable unhealthyThreshold) {
            this.props.unhealthyThreshold(unhealthyThreshold);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.RosHealthCheckTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.RosHealthCheckTemplate build() {
            return new com.aliyun.ros.cdk.alb.RosHealthCheckTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
