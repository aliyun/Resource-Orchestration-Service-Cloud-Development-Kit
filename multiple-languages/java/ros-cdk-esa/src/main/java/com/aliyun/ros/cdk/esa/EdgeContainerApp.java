package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::EdgeContainerApp</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.446Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.EdgeContainerApp")
public class EdgeContainerApp extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IEdgeContainerApp {

    protected EdgeContainerApp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EdgeContainerApp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EdgeContainerApp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.EdgeContainerAppProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EdgeContainerApp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.EdgeContainerAppProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppStatus: The status of the application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrAppStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the application was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainName: The domain name that is associated with the application.
     * <p>
     * If no domain name is associated with the application, the value is an empty string.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EdgeContainerAppName: The name of the application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeContainerAppName() {
        return software.amazon.jsii.Kernel.get(this, "attrEdgeContainerAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GatewayType: The type of the gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayType() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckFailTimes() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckFailTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckHost: The domain name that is used for health checks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHost() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks.
     * <p>
     * Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckMethod: The HTTP request method for health checks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckMethod() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckPort: The port used for health checks.
     * <p>
     * Valid values: 1 to 65535. Default value: 80.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckSuccTimes() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckSuccTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckTimeout: The timeout period of a health check response.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTimeout() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckType: The health check type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckType() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckUri: The URI used for health checks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QuicCid: Indicates whether QUIC is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQuicCid() {
        return software.amazon.jsii.Kernel.get(this, "attrQuicCid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Remarks: The remarks.
     * <p>
     * This parameter is empty by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemarks() {
        return software.amazon.jsii.Kernel.get(this, "attrRemarks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServicePort: The server port.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServicePort() {
        return software.amazon.jsii.Kernel.get(this, "attrServicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TargetPort: The backend port, which is also the service port of the application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetPort() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: The time when the application was last modified.
     * <p>
     * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VersionCount: The number of versions of the application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionCount() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.EdgeContainerAppProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.EdgeContainerAppProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.EdgeContainerApp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.EdgeContainerApp> {
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
        private final com.aliyun.ros.cdk.esa.EdgeContainerAppProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.EdgeContainerAppProps.Builder();
        }

        /**
         * Property edgeContainerAppName: The name of the application.
         * <p>
         * The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param edgeContainerAppName Property edgeContainerAppName: The name of the application. This parameter is required.
         */
        public Builder edgeContainerAppName(final java.lang.String edgeContainerAppName) {
            this.props.edgeContainerAppName(edgeContainerAppName);
            return this;
        }
        /**
         * Property edgeContainerAppName: The name of the application.
         * <p>
         * The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param edgeContainerAppName Property edgeContainerAppName: The name of the application. This parameter is required.
         */
        public Builder edgeContainerAppName(final com.aliyun.ros.cdk.core.IResolvable edgeContainerAppName) {
            this.props.edgeContainerAppName(edgeContainerAppName);
            return this;
        }

        /**
         * Property servicePort: The server port.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param servicePort Property servicePort: The server port. This parameter is required.
         */
        public Builder servicePort(final java.lang.Number servicePort) {
            this.props.servicePort(servicePort);
            return this;
        }
        /**
         * Property servicePort: The server port.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param servicePort Property servicePort: The server port. This parameter is required.
         */
        public Builder servicePort(final com.aliyun.ros.cdk.core.IResolvable servicePort) {
            this.props.servicePort(servicePort);
            return this;
        }

        /**
         * Property targetPort: The backend port, which is also the service port of the application.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param targetPort Property targetPort: The backend port, which is also the service port of the application. This parameter is required.
         */
        public Builder targetPort(final java.lang.Number targetPort) {
            this.props.targetPort(targetPort);
            return this;
        }
        /**
         * Property targetPort: The backend port, which is also the service port of the application.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param targetPort Property targetPort: The backend port, which is also the service port of the application. This parameter is required.
         */
        public Builder targetPort(final com.aliyun.ros.cdk.core.IResolvable targetPort) {
            this.props.targetPort(targetPort);
            return this;
        }

        /**
         * Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy.
         * <p>
         * Valid values: 1 to 10. Default value: 5.
         * <p>
         * @return {@code this}
         * @param healthCheckFailTimes Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. This parameter is required.
         */
        public Builder healthCheckFailTimes(final java.lang.Number healthCheckFailTimes) {
            this.props.healthCheckFailTimes(healthCheckFailTimes);
            return this;
        }
        /**
         * Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy.
         * <p>
         * Valid values: 1 to 10. Default value: 5.
         * <p>
         * @return {@code this}
         * @param healthCheckFailTimes Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. This parameter is required.
         */
        public Builder healthCheckFailTimes(final com.aliyun.ros.cdk.core.IResolvable healthCheckFailTimes) {
            this.props.healthCheckFailTimes(healthCheckFailTimes);
            return this;
        }

        /**
         * Property healthCheckHost: The domain name that is used for health checks.
         * <p>
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param healthCheckHost Property healthCheckHost: The domain name that is used for health checks. This parameter is required.
         */
        public Builder healthCheckHost(final java.lang.String healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
            return this;
        }
        /**
         * Property healthCheckHost: The domain name that is used for health checks.
         * <p>
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param healthCheckHost Property healthCheckHost: The domain name that is used for health checks. This parameter is required.
         */
        public Builder healthCheckHost(final com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
            return this;
        }

        /**
         * Property healthCheckHttpCode: The HTTP status code returned for a successful health check.
         * <p>
         * Valid values:
         * http_2xx (default)http_3xx
         * <p>
         * @return {@code this}
         * @param healthCheckHttpCode Property healthCheckHttpCode: The HTTP status code returned for a successful health check. This parameter is required.
         */
        public Builder healthCheckHttpCode(final java.lang.String healthCheckHttpCode) {
            this.props.healthCheckHttpCode(healthCheckHttpCode);
            return this;
        }
        /**
         * Property healthCheckHttpCode: The HTTP status code returned for a successful health check.
         * <p>
         * Valid values:
         * http_2xx (default)http_3xx
         * <p>
         * @return {@code this}
         * @param healthCheckHttpCode Property healthCheckHttpCode: The HTTP status code returned for a successful health check. This parameter is required.
         */
        public Builder healthCheckHttpCode(final com.aliyun.ros.cdk.core.IResolvable healthCheckHttpCode) {
            this.props.healthCheckHttpCode(healthCheckHttpCode);
            return this;
        }

        /**
         * Property healthCheckInterval: The interval between two consecutive health checks.
         * <p>
         * Unit: seconds. Valid values: 1 to 50. Default value: 5.
         * <p>
         * @return {@code this}
         * @param healthCheckInterval Property healthCheckInterval: The interval between two consecutive health checks. This parameter is required.
         */
        public Builder healthCheckInterval(final java.lang.Number healthCheckInterval) {
            this.props.healthCheckInterval(healthCheckInterval);
            return this;
        }
        /**
         * Property healthCheckInterval: The interval between two consecutive health checks.
         * <p>
         * Unit: seconds. Valid values: 1 to 50. Default value: 5.
         * <p>
         * @return {@code this}
         * @param healthCheckInterval Property healthCheckInterval: The interval between two consecutive health checks. This parameter is required.
         */
        public Builder healthCheckInterval(final com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.props.healthCheckInterval(healthCheckInterval);
            return this;
        }

        /**
         * Property healthCheckMethod: The HTTP request method for health checks.
         * <p>
         * Valid values:
         * HEAD (default): requests the headers of the resource.
         * GET: requests the specified resource and returns both the headers and entity body.
         * <p>
         * @return {@code this}
         * @param healthCheckMethod Property healthCheckMethod: The HTTP request method for health checks. This parameter is required.
         */
        public Builder healthCheckMethod(final java.lang.String healthCheckMethod) {
            this.props.healthCheckMethod(healthCheckMethod);
            return this;
        }
        /**
         * Property healthCheckMethod: The HTTP request method for health checks.
         * <p>
         * Valid values:
         * HEAD (default): requests the headers of the resource.
         * GET: requests the specified resource and returns both the headers and entity body.
         * <p>
         * @return {@code this}
         * @param healthCheckMethod Property healthCheckMethod: The HTTP request method for health checks. This parameter is required.
         */
        public Builder healthCheckMethod(final com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
            this.props.healthCheckMethod(healthCheckMethod);
            return this;
        }

        /**
         * Property healthCheckPort: The port used for health checks.
         * <p>
         * Valid values: 1 to 65535. Default value: 80.
         * <p>
         * @return {@code this}
         * @param healthCheckPort Property healthCheckPort: The port used for health checks. This parameter is required.
         */
        public Builder healthCheckPort(final java.lang.Number healthCheckPort) {
            this.props.healthCheckPort(healthCheckPort);
            return this;
        }
        /**
         * Property healthCheckPort: The port used for health checks.
         * <p>
         * Valid values: 1 to 65535. Default value: 80.
         * <p>
         * @return {@code this}
         * @param healthCheckPort Property healthCheckPort: The port used for health checks. This parameter is required.
         */
        public Builder healthCheckPort(final com.aliyun.ros.cdk.core.IResolvable healthCheckPort) {
            this.props.healthCheckPort(healthCheckPort);
            return this;
        }

        /**
         * Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
         * <p>
         * Valid values: 1 to 10. Default value: 2.
         * <p>
         * @return {@code this}
         * @param healthCheckSuccTimes Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. This parameter is required.
         */
        public Builder healthCheckSuccTimes(final java.lang.Number healthCheckSuccTimes) {
            this.props.healthCheckSuccTimes(healthCheckSuccTimes);
            return this;
        }
        /**
         * Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
         * <p>
         * Valid values: 1 to 10. Default value: 2.
         * <p>
         * @return {@code this}
         * @param healthCheckSuccTimes Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. This parameter is required.
         */
        public Builder healthCheckSuccTimes(final com.aliyun.ros.cdk.core.IResolvable healthCheckSuccTimes) {
            this.props.healthCheckSuccTimes(healthCheckSuccTimes);
            return this;
        }

        /**
         * Property healthCheckTimeout: The timeout period of a health check response.
         * <p>
         * If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
         * <p>
         * @return {@code this}
         * @param healthCheckTimeout Property healthCheckTimeout: The timeout period of a health check response. This parameter is required.
         */
        public Builder healthCheckTimeout(final java.lang.Number healthCheckTimeout) {
            this.props.healthCheckTimeout(healthCheckTimeout);
            return this;
        }
        /**
         * Property healthCheckTimeout: The timeout period of a health check response.
         * <p>
         * If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
         * <p>
         * @return {@code this}
         * @param healthCheckTimeout Property healthCheckTimeout: The timeout period of a health check response. This parameter is required.
         */
        public Builder healthCheckTimeout(final com.aliyun.ros.cdk.core.IResolvable healthCheckTimeout) {
            this.props.healthCheckTimeout(healthCheckTimeout);
            return this;
        }

        /**
         * Property healthCheckType: The health check type.
         * <p>
         * By default, this parameter is left empty. Valid values:
         * l4: Layer 4 health check.
         * l7: Layer 7 health check.
         * <p>
         * @return {@code this}
         * @param healthCheckType Property healthCheckType: The health check type. This parameter is required.
         */
        public Builder healthCheckType(final java.lang.String healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }
        /**
         * Property healthCheckType: The health check type.
         * <p>
         * By default, this parameter is left empty. Valid values:
         * l4: Layer 4 health check.
         * l7: Layer 7 health check.
         * <p>
         * @return {@code this}
         * @param healthCheckType Property healthCheckType: The health check type. This parameter is required.
         */
        public Builder healthCheckType(final com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }

        /**
         * Property healthCheckUri: The URI used for health checks.
         * <p>
         * The URI must be 1 to 80 characters in length. Default value: "/".
         * <p>
         * @return {@code this}
         * @param healthCheckUri Property healthCheckUri: The URI used for health checks. This parameter is required.
         */
        public Builder healthCheckUri(final java.lang.String healthCheckUri) {
            this.props.healthCheckUri(healthCheckUri);
            return this;
        }
        /**
         * Property healthCheckUri: The URI used for health checks.
         * <p>
         * The URI must be 1 to 80 characters in length. Default value: "/".
         * <p>
         * @return {@code this}
         * @param healthCheckUri Property healthCheckUri: The URI used for health checks. This parameter is required.
         */
        public Builder healthCheckUri(final com.aliyun.ros.cdk.core.IResolvable healthCheckUri) {
            this.props.healthCheckUri(healthCheckUri);
            return this;
        }

        /**
         * Property remarks: The remarks.
         * <p>
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param remarks Property remarks: The remarks. This parameter is required.
         */
        public Builder remarks(final java.lang.String remarks) {
            this.props.remarks(remarks);
            return this;
        }
        /**
         * Property remarks: The remarks.
         * <p>
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param remarks Property remarks: The remarks. This parameter is required.
         */
        public Builder remarks(final com.aliyun.ros.cdk.core.IResolvable remarks) {
            this.props.remarks(remarks);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.EdgeContainerApp}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.EdgeContainerApp build() {
            return new com.aliyun.ros.cdk.esa.EdgeContainerApp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
