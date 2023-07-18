package com.aliyun.ros.cdk.alb;

/**
 * A ROS resource type:  <code>ALIYUN::ALB::HealthCheckTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:27:59.555Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.HealthCheckTemplate")
public class HealthCheckTemplate extends com.aliyun.ros.cdk.core.Resource {

    protected HealthCheckTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HealthCheckTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ALB::HealthCheckTemplate</code>.
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
    public HealthCheckTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.HealthCheckTemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ALB::HealthCheckTemplate</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHealthCheckTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). The name must start with a letter.
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
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param healthCheckTemplateName Property healthCheckTemplateName: The name of the health check template. This parameter is required.
         */
        public Builder healthCheckTemplateName(final com.aliyun.ros.cdk.core.IResolvable healthCheckTemplateName) {
            this.props.healthCheckTemplateName(healthCheckTemplateName);
            return this;
        }

        /**
         * Property healthCheckCodes: The HTTP status code for a successful health check.
         * <p>
         * If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
         * If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
         * them with commas (,).
         * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * <p>
         * @return {@code this}
         * @param healthCheckCodes Property healthCheckCodes: The HTTP status code for a successful health check. This parameter is required.
         */
        public Builder healthCheckCodes(final com.aliyun.ros.cdk.core.IResolvable healthCheckCodes) {
            this.props.healthCheckCodes(healthCheckCodes);
            return this;
        }
        /**
         * Property healthCheckCodes: The HTTP status code for a successful health check.
         * <p>
         * If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
         * If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
         * them with commas (,).
         * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * <p>
         * @return {@code this}
         * @param healthCheckCodes Property healthCheckCodes: The HTTP status code for a successful health check. This parameter is required.
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
         * Property healthCheckHost: The domain name that is used for health checks.
         * <p>
         * Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
         * CIDR block meets the following requirements:
         * The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
         * The domain name contains at least one period (.) but does not start or end with a
         * period (.).
         * The rightmost domain label can contain only letters, and cannot contain digits or
         * hyphens (-).
         * Other domain labels cannot start or end with a hyphen (-).
         * This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
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
         * Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
         * CIDR block meets the following requirements:
         * The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
         * The domain name contains at least one period (.) but does not start or end with a
         * period (.).
         * The rightmost domain label can contain only letters, and cannot contain digits or
         * hyphens (-).
         * Other domain labels cannot start or end with a hyphen (-).
         * This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * <p>
         * @return {@code this}
         * @param healthCheckHost Property healthCheckHost: The domain name that is used for health checks. This parameter is required.
         */
        public Builder healthCheckHost(final com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
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
         * Property healthCheckMethod: The HTTP method that is used for health checks.
         * <p>
         * Valid values:
         * HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
         * HTTP health checks.
         * POST: By default, gRPC health checks use the POST method.
         * GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
         * health check result is not affected.
         * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * <p>
         * @return {@code this}
         * @param healthCheckMethod Property healthCheckMethod: The HTTP method that is used for health checks. This parameter is required.
         */
        public Builder healthCheckMethod(final java.lang.String healthCheckMethod) {
            this.props.healthCheckMethod(healthCheckMethod);
            return this;
        }
        /**
         * Property healthCheckMethod: The HTTP method that is used for health checks.
         * <p>
         * Valid values:
         * HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
         * HTTP health checks.
         * POST: By default, gRPC health checks use the POST method.
         * GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
         * health check result is not affected.
         * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * <p>
         * @return {@code this}
         * @param healthCheckMethod Property healthCheckMethod: The HTTP method that is used for health checks. This parameter is required.
         */
        public Builder healthCheckMethod(final com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
            this.props.healthCheckMethod(healthCheckMethod);
            return this;
        }

        /**
         * Property healthCheckPath: The URL path that is used for health checks.
         * <p>
         * It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
         * (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
         * signs (#), and ampersands (&amp;). It can also contain the following extended characters:
         * _ ; ~ ! ( ) * [ ] &#64; $ ^ : ' , +. The URL path must start with a forward slash (/).
         * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * <p>
         * @return {@code this}
         * @param healthCheckPath Property healthCheckPath: The URL path that is used for health checks. This parameter is required.
         */
        public Builder healthCheckPath(final java.lang.String healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }
        /**
         * Property healthCheckPath: The URL path that is used for health checks.
         * <p>
         * It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
         * (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
         * signs (#), and ampersands (&amp;). It can also contain the following extended characters:
         * _ ; ~ ! ( ) * [ ] &#64; $ ^ : ' , +. The URL path must start with a forward slash (/).
         * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * <p>
         * @return {@code this}
         * @param healthCheckPath Property healthCheckPath: The URL path that is used for health checks. This parameter is required.
         */
        public Builder healthCheckPath(final com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }

        /**
         * Property healthCheckProtocol: The protocol that is used for health checks.
         * <p>
         * Valid values:
         * HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
         * from a browser and check whether the backend server is healthy. This is the default
         * protocol.
         * TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
         * whether the port of the backend server is available to receive requests.
         * GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
         * to check whether the backend server is healthy.
         * <p>
         * @return {@code this}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol that is used for health checks. This parameter is required.
         */
        public Builder healthCheckProtocol(final java.lang.String healthCheckProtocol) {
            this.props.healthCheckProtocol(healthCheckProtocol);
            return this;
        }
        /**
         * Property healthCheckProtocol: The protocol that is used for health checks.
         * <p>
         * Valid values:
         * HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
         * from a browser and check whether the backend server is healthy. This is the default
         * protocol.
         * TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
         * whether the port of the backend server is available to receive requests.
         * GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
         * to check whether the backend server is healthy.
         * <p>
         * @return {@code this}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol that is used for health checks. This parameter is required.
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
