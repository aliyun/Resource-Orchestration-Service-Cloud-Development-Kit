package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::EdgeContainerApp</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.629Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosEdgeContainerApp")
public class RosEdgeContainerApp extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEdgeContainerApp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEdgeContainerApp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosEdgeContainerApp.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEdgeContainerApp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosEdgeContainerAppProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrAppStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEdgeContainerAppName() {
        return software.amazon.jsii.Kernel.get(this, "attrEdgeContainerAppName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayType() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckFailTimes() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckFailTimes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckHost() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckHttpCode() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckMethod() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckMethod", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckSuccTimes() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckSuccTimes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckTimeout() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTimeout", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckType() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckUri() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQuicCid() {
        return software.amazon.jsii.Kernel.get(this, "attrQuicCid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemarks() {
        return software.amazon.jsii.Kernel.get(this, "attrRemarks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServicePort() {
        return software.amazon.jsii.Kernel.get(this, "attrServicePort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetPort() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersionCount() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEdgeContainerAppName() {
        return software.amazon.jsii.Kernel.get(this, "edgeContainerAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEdgeContainerAppName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "edgeContainerAppName", java.util.Objects.requireNonNull(value, "edgeContainerAppName is required"));
    }

    /**
     */
    public void setEdgeContainerAppName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "edgeContainerAppName", java.util.Objects.requireNonNull(value, "edgeContainerAppName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getServicePort() {
        return software.amazon.jsii.Kernel.get(this, "servicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServicePort(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "servicePort", java.util.Objects.requireNonNull(value, "servicePort is required"));
    }

    /**
     */
    public void setServicePort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "servicePort", java.util.Objects.requireNonNull(value, "servicePort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetPort() {
        return software.amazon.jsii.Kernel.get(this, "targetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetPort(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "targetPort", java.util.Objects.requireNonNull(value, "targetPort is required"));
    }

    /**
     */
    public void setTargetPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetPort", java.util.Objects.requireNonNull(value, "targetPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckFailTimes() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckFailTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckFailTimes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckFailTimes", value);
    }

    /**
     */
    public void setHealthCheckFailTimes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckFailTimes", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHttpCode() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckHttpCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckHttpCode", value);
    }

    /**
     */
    public void setHealthCheckHttpCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckHttpCode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPort() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPort", value);
    }

    /**
     */
    public void setHealthCheckPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckSuccTimes() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckSuccTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckSuccTimes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckSuccTimes", value);
    }

    /**
     */
    public void setHealthCheckSuccTimes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckSuccTimes", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckType() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckType", value);
    }

    /**
     */
    public void setHealthCheckType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckUri() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckUri(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckUri", value);
    }

    /**
     */
    public void setHealthCheckUri(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckUri", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemarks() {
        return software.amazon.jsii.Kernel.get(this, "remarks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemarks(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remarks", value);
    }

    /**
     */
    public void setRemarks(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remarks", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosEdgeContainerApp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosEdgeContainerApp> {
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
        private final com.aliyun.ros.cdk.esa.RosEdgeContainerAppProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosEdgeContainerAppProps.Builder();
        }

        /**
         * @return {@code this}
         * @param edgeContainerAppName This parameter is required.
         */
        public Builder edgeContainerAppName(final java.lang.String edgeContainerAppName) {
            this.props.edgeContainerAppName(edgeContainerAppName);
            return this;
        }
        /**
         * @return {@code this}
         * @param edgeContainerAppName This parameter is required.
         */
        public Builder edgeContainerAppName(final com.aliyun.ros.cdk.core.IResolvable edgeContainerAppName) {
            this.props.edgeContainerAppName(edgeContainerAppName);
            return this;
        }

        /**
         * @return {@code this}
         * @param servicePort This parameter is required.
         */
        public Builder servicePort(final java.lang.Number servicePort) {
            this.props.servicePort(servicePort);
            return this;
        }
        /**
         * @return {@code this}
         * @param servicePort This parameter is required.
         */
        public Builder servicePort(final com.aliyun.ros.cdk.core.IResolvable servicePort) {
            this.props.servicePort(servicePort);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetPort This parameter is required.
         */
        public Builder targetPort(final java.lang.Number targetPort) {
            this.props.targetPort(targetPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetPort This parameter is required.
         */
        public Builder targetPort(final com.aliyun.ros.cdk.core.IResolvable targetPort) {
            this.props.targetPort(targetPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckFailTimes This parameter is required.
         */
        public Builder healthCheckFailTimes(final java.lang.Number healthCheckFailTimes) {
            this.props.healthCheckFailTimes(healthCheckFailTimes);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckFailTimes This parameter is required.
         */
        public Builder healthCheckFailTimes(final com.aliyun.ros.cdk.core.IResolvable healthCheckFailTimes) {
            this.props.healthCheckFailTimes(healthCheckFailTimes);
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
         * @param healthCheckHttpCode This parameter is required.
         */
        public Builder healthCheckHttpCode(final java.lang.String healthCheckHttpCode) {
            this.props.healthCheckHttpCode(healthCheckHttpCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckHttpCode This parameter is required.
         */
        public Builder healthCheckHttpCode(final com.aliyun.ros.cdk.core.IResolvable healthCheckHttpCode) {
            this.props.healthCheckHttpCode(healthCheckHttpCode);
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
         * @param healthCheckPort This parameter is required.
         */
        public Builder healthCheckPort(final java.lang.Number healthCheckPort) {
            this.props.healthCheckPort(healthCheckPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckPort This parameter is required.
         */
        public Builder healthCheckPort(final com.aliyun.ros.cdk.core.IResolvable healthCheckPort) {
            this.props.healthCheckPort(healthCheckPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckSuccTimes This parameter is required.
         */
        public Builder healthCheckSuccTimes(final java.lang.Number healthCheckSuccTimes) {
            this.props.healthCheckSuccTimes(healthCheckSuccTimes);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckSuccTimes This parameter is required.
         */
        public Builder healthCheckSuccTimes(final com.aliyun.ros.cdk.core.IResolvable healthCheckSuccTimes) {
            this.props.healthCheckSuccTimes(healthCheckSuccTimes);
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
         * @param healthCheckType This parameter is required.
         */
        public Builder healthCheckType(final java.lang.String healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckType This parameter is required.
         */
        public Builder healthCheckType(final com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckUri This parameter is required.
         */
        public Builder healthCheckUri(final java.lang.String healthCheckUri) {
            this.props.healthCheckUri(healthCheckUri);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckUri This parameter is required.
         */
        public Builder healthCheckUri(final com.aliyun.ros.cdk.core.IResolvable healthCheckUri) {
            this.props.healthCheckUri(healthCheckUri);
            return this;
        }

        /**
         * @return {@code this}
         * @param remarks This parameter is required.
         */
        public Builder remarks(final java.lang.String remarks) {
            this.props.remarks(remarks);
            return this;
        }
        /**
         * @return {@code this}
         * @param remarks This parameter is required.
         */
        public Builder remarks(final com.aliyun.ros.cdk.core.IResolvable remarks) {
            this.props.remarks(remarks);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosEdgeContainerApp}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosEdgeContainerApp build() {
            return new com.aliyun.ros.cdk.esa.RosEdgeContainerApp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
