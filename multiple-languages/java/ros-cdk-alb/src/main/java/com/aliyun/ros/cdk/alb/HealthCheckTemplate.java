package com.aliyun.ros.cdk.alb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ALB::HealthCheckTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T06:59:20.366Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.HealthCheckTemplate")
public class HealthCheckTemplate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.alb.IHealthCheckTemplate {

    protected HealthCheckTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HealthCheckTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HealthCheckTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.HealthCheckTemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HealthCheckTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.HealthCheckTemplateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HealthCheckTemplateId: The ID of the health check template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.HealthCheckTemplateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.alb.HealthCheckTemplateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.HealthCheckTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.HealthCheckTemplate> {
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
        private final com.aliyun.ros.cdk.alb.HealthCheckTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.HealthCheckTemplateProps.Builder();
        }

        /**
         * Property healthCheckTemplateName: The name of the health check template.
         * <p>
         * The name must be 2 to 128 characters in length, must start with a letter, a
         * digit, or a Chinese character, and can contain digits, periods (.), underscores
         * (_), hyphens (-), and spaces.
         * <p>
         * @return {@code this}
         * @param healthCheckTemplateName Property healthCheckTemplateName: The name of the health check template. This parameter is required.
         */
        public Builder healthCheckTemplateName(final java.lang.String healthCheckTemplateName) {
            this.props.healthCheckTemplateName(healthCheckTemplateName);
            return this;
        }
        /**
         * Property healthCheckTemplateName: The name of the health check template.
         * <p>
         * The name must be 2 to 128 characters in length, must start with a letter, a
         * digit, or a Chinese character, and can contain digits, periods (.), underscores
         * (_), hyphens (-), and spaces.
         * <p>
         * @return {@code this}
         * @param healthCheckTemplateName Property healthCheckTemplateName: The name of the health check template. This parameter is required.
         */
        public Builder healthCheckTemplateName(final com.aliyun.ros.cdk.core.IResolvable healthCheckTemplateName) {
            this.props.healthCheckTemplateName(healthCheckTemplateName);
            return this;
        }

        /**
         * Property healthCheckCodes: The HTTP status codes that indicate a successful health check.
         * <p>
         * @return {@code this}
         * @param healthCheckCodes Property healthCheckCodes: The HTTP status codes that indicate a successful health check. This parameter is required.
         */
        public Builder healthCheckCodes(final com.aliyun.ros.cdk.core.IResolvable healthCheckCodes) {
            this.props.healthCheckCodes(healthCheckCodes);
            return this;
        }
        /**
         * Property healthCheckCodes: The HTTP status codes that indicate a successful health check.
         * <p>
         * @return {@code this}
         * @param healthCheckCodes Property healthCheckCodes: The HTTP status codes that indicate a successful health check. This parameter is required.
         */
        public Builder healthCheckCodes(final java.util.List<? extends java.lang.Object> healthCheckCodes) {
            this.props.healthCheckCodes(healthCheckCodes);
            return this;
        }

        /**
         * Property healthCheckConnectPort: The port that is used for health checks.
         * <p>
         * Valid values: 0 to 65535.
         * Default value: 0. This value indicates that the port on a backend server is used for health checks.
         * <p>
         * @return {@code this}
         * @param healthCheckConnectPort Property healthCheckConnectPort: The port that is used for health checks. This parameter is required.
         */
        public Builder healthCheckConnectPort(final java.lang.Number healthCheckConnectPort) {
            this.props.healthCheckConnectPort(healthCheckConnectPort);
            return this;
        }
        /**
         * Property healthCheckConnectPort: The port that is used for health checks.
         * <p>
         * Valid values: 0 to 65535.
         * Default value: 0. This value indicates that the port on a backend server is used for health checks.
         * <p>
         * @return {@code this}
         * @param healthCheckConnectPort Property healthCheckConnectPort: The port that is used for health checks. This parameter is required.
         */
        public Builder healthCheckConnectPort(final com.aliyun.ros.cdk.core.IResolvable healthCheckConnectPort) {
            this.props.healthCheckConnectPort(healthCheckConnectPort);
            return this;
        }

        /**
         * Property healthCheckHost: The domain name used for the health check.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>$SERVER_IP: The private IP address of a backend server. If you set this
         * parameter to <code>$SERVER_IP</code> or leave it empty, the load balancer uses the private
         * IP address of the backend server as the domain name for the health check.</li>
         * <li>domain: The domain name must be 1 to 80 characters in length and can contain
         * letters, digits, periods (.), and hyphens (-).</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         * set to HTTP or HTTPS.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param healthCheckHost Property healthCheckHost: The domain name used for the health check. This parameter is required.
         */
        public Builder healthCheckHost(final java.lang.String healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
            return this;
        }
        /**
         * Property healthCheckHost: The domain name used for the health check.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>$SERVER_IP: The private IP address of a backend server. If you set this
         * parameter to <code>$SERVER_IP</code> or leave it empty, the load balancer uses the private
         * IP address of the backend server as the domain name for the health check.</li>
         * <li>domain: The domain name must be 1 to 80 characters in length and can contain
         * letters, digits, periods (.), and hyphens (-).</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         * set to HTTP or HTTPS.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param healthCheckHost Property healthCheckHost: The domain name used for the health check. This parameter is required.
         */
        public Builder healthCheckHost(final com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
            return this;
        }

        /**
         * Property healthCheckHttpVersion: The HTTP version for health check protocol.
         * <p>
         * Valid values: HTTP1.0 or HTTP1.1.
         * Default value: HTTP 1.1.
         * This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
         * <p>
         * @return {@code this}
         * @param healthCheckHttpVersion Property healthCheckHttpVersion: The HTTP version for health check protocol. This parameter is required.
         */
        public Builder healthCheckHttpVersion(final java.lang.String healthCheckHttpVersion) {
            this.props.healthCheckHttpVersion(healthCheckHttpVersion);
            return this;
        }
        /**
         * Property healthCheckHttpVersion: The HTTP version for health check protocol.
         * <p>
         * Valid values: HTTP1.0 or HTTP1.1.
         * Default value: HTTP 1.1.
         * This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
         * <p>
         * @return {@code this}
         * @param healthCheckHttpVersion Property healthCheckHttpVersion: The HTTP version for health check protocol. This parameter is required.
         */
        public Builder healthCheckHttpVersion(final com.aliyun.ros.cdk.core.IResolvable healthCheckHttpVersion) {
            this.props.healthCheckHttpVersion(healthCheckHttpVersion);
            return this;
        }

        /**
         * Property healthCheckInterval: The interval between two consecutive health checks.
         * <p>
         * Unit: seconds.
         * Valid values: 1 to 50.
         * Default value: 2.
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
         * Unit: seconds.
         * Valid values: 1 to 50.
         * Default value: 2.
         * <p>
         * @return {@code this}
         * @param healthCheckInterval Property healthCheckInterval: The interval between two consecutive health checks. This parameter is required.
         */
        public Builder healthCheckInterval(final com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.props.healthCheckInterval(healthCheckInterval);
            return this;
        }

        /**
         * Property healthCheckMethod: The method used for the health check.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HEAD (default): For HTTP and HTTPS listeners, the default health check method
         * is HEAD.</li>
         * <li>POST: For gRPC listeners, the default health check method is POST.</li>
         * <li>GET: If the response body exceeds 8 KB, it is truncated. This does not affect
         * the health check result.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         * set to HTTP, HTTPS, or gRPC.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param healthCheckMethod Property healthCheckMethod: The method used for the health check. This parameter is required.
         */
        public Builder healthCheckMethod(final java.lang.String healthCheckMethod) {
            this.props.healthCheckMethod(healthCheckMethod);
            return this;
        }
        /**
         * Property healthCheckMethod: The method used for the health check.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HEAD (default): For HTTP and HTTPS listeners, the default health check method
         * is HEAD.</li>
         * <li>POST: For gRPC listeners, the default health check method is POST.</li>
         * <li>GET: If the response body exceeds 8 KB, it is truncated. This does not affect
         * the health check result.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         * set to HTTP, HTTPS, or gRPC.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param healthCheckMethod Property healthCheckMethod: The method used for the health check. This parameter is required.
         */
        public Builder healthCheckMethod(final com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
            this.props.healthCheckMethod(healthCheckMethod);
            return this;
        }

        /**
         * Property healthCheckPath: The URL that is used for health checks.
         * <p>
         * The URL must be 1 to 80 characters in length. It must start with a forward slash
         * (/) and can contain letters, digits, and the following special characters: <code>- \/ . % ? # &amp; _;~!()*[]&#64;$^:',+</code>.
         * <p>
         * <blockquote>
         * <p>
         * This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         * set to HTTP or HTTPS.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param healthCheckPath Property healthCheckPath: The URL that is used for health checks. This parameter is required.
         */
        public Builder healthCheckPath(final java.lang.String healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }
        /**
         * Property healthCheckPath: The URL that is used for health checks.
         * <p>
         * The URL must be 1 to 80 characters in length. It must start with a forward slash
         * (/) and can contain letters, digits, and the following special characters: <code>- \/ . % ? # &amp; _;~!()*[]&#64;$^:',+</code>.
         * <p>
         * <blockquote>
         * <p>
         * This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         * set to HTTP or HTTPS.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param healthCheckPath Property healthCheckPath: The URL that is used for health checks. This parameter is required.
         */
        public Builder healthCheckPath(final com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }

        /**
         * Property healthCheckProtocol: The protocol used for the health check.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HTTP (default): simulates browser access by sending HEAD or GET requests to
         * check whether the server application is healthy.</li>
         * <li>HTTPS: simulates browser access by sending HEAD or GET requests to check
         * whether the server application is healthy. HTTPS provides encrypted data
         * transmission and is more secure than HTTP.</li>
         * <li>TCP: checks whether the server port is responsive by sending SYN packets.</li>
         * <li>gRPC: checks whether the server application is healthy by sending POST or GET
         * requests.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol used for the health check. This parameter is required.
         */
        public Builder healthCheckProtocol(final java.lang.String healthCheckProtocol) {
            this.props.healthCheckProtocol(healthCheckProtocol);
            return this;
        }
        /**
         * Property healthCheckProtocol: The protocol used for the health check.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HTTP (default): simulates browser access by sending HEAD or GET requests to
         * check whether the server application is healthy.</li>
         * <li>HTTPS: simulates browser access by sending HEAD or GET requests to check
         * whether the server application is healthy. HTTPS provides encrypted data
         * transmission and is more secure than HTTP.</li>
         * <li>TCP: checks whether the server port is responsive by sending SYN packets.</li>
         * <li>gRPC: checks whether the server application is healthy by sending POST or GET
         * requests.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol used for the health check. This parameter is required.
         */
        public Builder healthCheckProtocol(final com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
            this.props.healthCheckProtocol(healthCheckProtocol);
            return this;
        }

        /**
         * Property healthCheckTimeout: The timeout period of a health check.
         * <p>
         * Unit: seconds. If a backend server does not
         * respond within the specified timeout period, the backend server fails the health check.
         * Valid values: 1 to 300.
         * Default value: 5.
         * Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
         * <p>
         * @return {@code this}
         * @param healthCheckTimeout Property healthCheckTimeout: The timeout period of a health check. This parameter is required.
         */
        public Builder healthCheckTimeout(final java.lang.Number healthCheckTimeout) {
            this.props.healthCheckTimeout(healthCheckTimeout);
            return this;
        }
        /**
         * Property healthCheckTimeout: The timeout period of a health check.
         * <p>
         * Unit: seconds. If a backend server does not
         * respond within the specified timeout period, the backend server fails the health check.
         * Valid values: 1 to 300.
         * Default value: 5.
         * Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
         * <p>
         * @return {@code this}
         * @param healthCheckTimeout Property healthCheckTimeout: The timeout period of a health check. This parameter is required.
         */
        public Builder healthCheckTimeout(final com.aliyun.ros.cdk.core.IResolvable healthCheckTimeout) {
            this.props.healthCheckTimeout(healthCheckTimeout);
            return this;
        }

        /**
         * Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
         * <p>
         * In this case, the health status is changed from
         * fail to success.
         * Valid values: 2 to 10.
         * Default value: 3.
         * <p>
         * @return {@code this}
         * @param healthyThreshold Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. This parameter is required.
         */
        public Builder healthyThreshold(final java.lang.Number healthyThreshold) {
            this.props.healthyThreshold(healthyThreshold);
            return this;
        }
        /**
         * Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
         * <p>
         * In this case, the health status is changed from
         * fail to success.
         * Valid values: 2 to 10.
         * Default value: 3.
         * <p>
         * @return {@code this}
         * @param healthyThreshold Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. This parameter is required.
         */
        public Builder healthyThreshold(final com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
            this.props.healthyThreshold(healthyThreshold);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
         * <p>
         * In this case, the health status is changed from success to fail.
         * Valid values: 2 to 10.
         * Default value: 3.
         * <p>
         * @return {@code this}
         * @param unhealthyThreshold Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. This parameter is required.
         */
        public Builder unhealthyThreshold(final java.lang.Number unhealthyThreshold) {
            this.props.unhealthyThreshold(unhealthyThreshold);
            return this;
        }
        /**
         * Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
         * <p>
         * In this case, the health status is changed from success to fail.
         * Valid values: 2 to 10.
         * Default value: 3.
         * <p>
         * @return {@code this}
         * @param unhealthyThreshold Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. This parameter is required.
         */
        public Builder unhealthyThreshold(final com.aliyun.ros.cdk.core.IResolvable unhealthyThreshold) {
            this.props.unhealthyThreshold(unhealthyThreshold);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.HealthCheckTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.HealthCheckTemplate build() {
            return new com.aliyun.ros.cdk.alb.HealthCheckTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
