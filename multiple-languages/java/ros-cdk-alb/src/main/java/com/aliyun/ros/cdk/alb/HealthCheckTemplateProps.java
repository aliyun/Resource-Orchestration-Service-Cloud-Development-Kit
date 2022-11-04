package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a `ALIYUN::ALB::HealthCheckTemplate`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:40.903Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.HealthCheckTemplateProps")
@software.amazon.jsii.Jsii.Proxy(HealthCheckTemplateProps.Jsii$Proxy.class)
public interface HealthCheckTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property healthCheckTemplateName: The name of the health check template.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckTemplateName();

    /**
     * Property healthCheckCodes: The HTTP status code for a successful health check.
     * <p>
     * If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
     * If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
     * them with commas (,).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckCodes() {
        return null;
    }

    /**
     * Property healthCheckConnectPort: The port that is used for health checks.
     * <p>
     * Valid values: 0 to 65535.
     * Default value: 0. This value indicates that the port on a backend server is used for health checks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConnectPort() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHost() {
        return null;
    }

    /**
     * Property healthCheckInterval: The interval between two consecutive health checks.
     * <p>
     * Unit: seconds.
     * Valid values: 1 to 50.
     * Default value: 2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckInterval() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckMethod() {
        return null;
    }

    /**
     * Property healthCheckPath: The URL path that is used for health checks.
     * <p>
     * It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
     * (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
     * signs (#), and ampersands (&amp;). It can also contain the following extended characters:
     * _ ; ~ ! ( ) * [ ] &#64; $ ^ : ' , +. The URL path must start with a forward slash (/).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPath() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckProtocol() {
        return null;
    }

    /**
     * Property healthCheckTimeout: The timeout period of a health check.
     * <p>
     * Unit: seconds. If a backend server does not
     * respond within the specified timeout period, the backend server fails the health check.
     * Valid values: 1 to 300.
     * Default value: 5.
     * Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckTimeout() {
        return null;
    }

    /**
     * Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
     * <p>
     * In this case, the health status is changed from
     * fail to success.
     * Valid values: 2 to 10.
     * Default value: 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthyThreshold() {
        return null;
    }

    /**
     * Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
     * <p>
     * In this case, the health status is changed from success to fail.
     * Valid values: 2 to 10.
     * Default value: 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUnhealthyThreshold() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HealthCheckTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HealthCheckTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HealthCheckTemplateProps> {
        java.lang.Object healthCheckTemplateName;
        java.lang.Object healthCheckCodes;
        java.lang.Object healthCheckConnectPort;
        java.lang.Object healthCheckHost;
        java.lang.Object healthCheckInterval;
        java.lang.Object healthCheckMethod;
        java.lang.Object healthCheckPath;
        java.lang.Object healthCheckProtocol;
        java.lang.Object healthCheckTimeout;
        java.lang.Object healthyThreshold;
        java.lang.Object unhealthyThreshold;

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckTemplateName}
         * @param healthCheckTemplateName Property healthCheckTemplateName: The name of the health check template. This parameter is required.
         *                                The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         *                                (.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder healthCheckTemplateName(java.lang.String healthCheckTemplateName) {
            this.healthCheckTemplateName = healthCheckTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckTemplateName}
         * @param healthCheckTemplateName Property healthCheckTemplateName: The name of the health check template. This parameter is required.
         *                                The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         *                                (.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder healthCheckTemplateName(com.aliyun.ros.cdk.core.IResolvable healthCheckTemplateName) {
            this.healthCheckTemplateName = healthCheckTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckCodes}
         * @param healthCheckCodes Property healthCheckCodes: The HTTP status code for a successful health check.
         *                         If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
         *                         If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
         *                         them with commas (,).
         *                         Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * @return {@code this}
         */
        public Builder healthCheckCodes(com.aliyun.ros.cdk.core.IResolvable healthCheckCodes) {
            this.healthCheckCodes = healthCheckCodes;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckCodes}
         * @param healthCheckCodes Property healthCheckCodes: The HTTP status code for a successful health check.
         *                         If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
         *                         If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
         *                         them with commas (,).
         *                         Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * @return {@code this}
         */
        public Builder healthCheckCodes(java.util.List<? extends java.lang.Object> healthCheckCodes) {
            this.healthCheckCodes = healthCheckCodes;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckConnectPort}
         * @param healthCheckConnectPort Property healthCheckConnectPort: The port that is used for health checks.
         *                               Valid values: 0 to 65535.
         *                               Default value: 0. This value indicates that the port on a backend server is used for health checks.
         * @return {@code this}
         */
        public Builder healthCheckConnectPort(java.lang.Number healthCheckConnectPort) {
            this.healthCheckConnectPort = healthCheckConnectPort;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckConnectPort}
         * @param healthCheckConnectPort Property healthCheckConnectPort: The port that is used for health checks.
         *                               Valid values: 0 to 65535.
         *                               Default value: 0. This value indicates that the port on a backend server is used for health checks.
         * @return {@code this}
         */
        public Builder healthCheckConnectPort(com.aliyun.ros.cdk.core.IResolvable healthCheckConnectPort) {
            this.healthCheckConnectPort = healthCheckConnectPort;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckHost}
         * @param healthCheckHost Property healthCheckHost: The domain name that is used for health checks.
         *                        Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
         *                        CIDR block meets the following requirements:
         *                        The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
         *                        The domain name contains at least one period (.) but does not start or end with a
         *                        period (.).
         *                        The rightmost domain label can contain only letters, and cannot contain digits or
         *                        hyphens (-).
         *                        Other domain labels cannot start or end with a hyphen (-).
         *                        This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * @return {@code this}
         */
        public Builder healthCheckHost(java.lang.String healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckHost}
         * @param healthCheckHost Property healthCheckHost: The domain name that is used for health checks.
         *                        Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
         *                        CIDR block meets the following requirements:
         *                        The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
         *                        The domain name contains at least one period (.) but does not start or end with a
         *                        period (.).
         *                        The rightmost domain label can contain only letters, and cannot contain digits or
         *                        hyphens (-).
         *                        Other domain labels cannot start or end with a hyphen (-).
         *                        This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * @return {@code this}
         */
        public Builder healthCheckHost(com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckInterval}
         * @param healthCheckInterval Property healthCheckInterval: The interval between two consecutive health checks.
         *                            Unit: seconds.
         *                            Valid values: 1 to 50.
         *                            Default value: 2.
         * @return {@code this}
         */
        public Builder healthCheckInterval(java.lang.Number healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckInterval}
         * @param healthCheckInterval Property healthCheckInterval: The interval between two consecutive health checks.
         *                            Unit: seconds.
         *                            Valid values: 1 to 50.
         *                            Default value: 2.
         * @return {@code this}
         */
        public Builder healthCheckInterval(com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckMethod}
         * @param healthCheckMethod Property healthCheckMethod: The HTTP method that is used for health checks.
         *                          Valid values:
         *                          HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
         *                          HTTP health checks.
         *                          POST: By default, gRPC health checks use the POST method.
         *                          GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
         *                          health check result is not affected.
         *                          Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * @return {@code this}
         */
        public Builder healthCheckMethod(java.lang.String healthCheckMethod) {
            this.healthCheckMethod = healthCheckMethod;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckMethod}
         * @param healthCheckMethod Property healthCheckMethod: The HTTP method that is used for health checks.
         *                          Valid values:
         *                          HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
         *                          HTTP health checks.
         *                          POST: By default, gRPC health checks use the POST method.
         *                          GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
         *                          health check result is not affected.
         *                          Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * @return {@code this}
         */
        public Builder healthCheckMethod(com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
            this.healthCheckMethod = healthCheckMethod;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckPath}
         * @param healthCheckPath Property healthCheckPath: The URL path that is used for health checks.
         *                        It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
         *                        (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
         *                        signs (#), and ampersands (&amp;). It can also contain the following extended characters:
         *                        _ ; ~ ! ( ) * [ ] &#64; $ ^ : ' , +. The URL path must start with a forward slash (/).
         *                        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * @return {@code this}
         */
        public Builder healthCheckPath(java.lang.String healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckPath}
         * @param healthCheckPath Property healthCheckPath: The URL path that is used for health checks.
         *                        It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
         *                        (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
         *                        signs (#), and ampersands (&amp;). It can also contain the following extended characters:
         *                        _ ; ~ ! ( ) * [ ] &#64; $ ^ : ' , +. The URL path must start with a forward slash (/).
         *                        Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         * @return {@code this}
         */
        public Builder healthCheckPath(com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckProtocol}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol that is used for health checks.
         *                            Valid values:
         *                            HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
         *                            from a browser and check whether the backend server is healthy. This is the default
         *                            protocol.
         *                            TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
         *                            whether the port of the backend server is available to receive requests.
         *                            GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
         *                            to check whether the backend server is healthy.
         * @return {@code this}
         */
        public Builder healthCheckProtocol(java.lang.String healthCheckProtocol) {
            this.healthCheckProtocol = healthCheckProtocol;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckProtocol}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol that is used for health checks.
         *                            Valid values:
         *                            HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
         *                            from a browser and check whether the backend server is healthy. This is the default
         *                            protocol.
         *                            TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
         *                            whether the port of the backend server is available to receive requests.
         *                            GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
         *                            to check whether the backend server is healthy.
         * @return {@code this}
         */
        public Builder healthCheckProtocol(com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
            this.healthCheckProtocol = healthCheckProtocol;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckTimeout}
         * @param healthCheckTimeout Property healthCheckTimeout: The timeout period of a health check.
         *                           Unit: seconds. If a backend server does not
         *                           respond within the specified timeout period, the backend server fails the health check.
         *                           Valid values: 1 to 300.
         *                           Default value: 5.
         *                           Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
         * @return {@code this}
         */
        public Builder healthCheckTimeout(java.lang.Number healthCheckTimeout) {
            this.healthCheckTimeout = healthCheckTimeout;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckTimeout}
         * @param healthCheckTimeout Property healthCheckTimeout: The timeout period of a health check.
         *                           Unit: seconds. If a backend server does not
         *                           respond within the specified timeout period, the backend server fails the health check.
         *                           Valid values: 1 to 300.
         *                           Default value: 5.
         *                           Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
         * @return {@code this}
         */
        public Builder healthCheckTimeout(com.aliyun.ros.cdk.core.IResolvable healthCheckTimeout) {
            this.healthCheckTimeout = healthCheckTimeout;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthyThreshold}
         * @param healthyThreshold Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
         *                         In this case, the health status is changed from
         *                         fail to success.
         *                         Valid values: 2 to 10.
         *                         Default value: 3.
         * @return {@code this}
         */
        public Builder healthyThreshold(java.lang.Number healthyThreshold) {
            this.healthyThreshold = healthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthyThreshold}
         * @param healthyThreshold Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
         *                         In this case, the health status is changed from
         *                         fail to success.
         *                         Valid values: 2 to 10.
         *                         Default value: 3.
         * @return {@code this}
         */
        public Builder healthyThreshold(com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
            this.healthyThreshold = healthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getUnhealthyThreshold}
         * @param unhealthyThreshold Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
         *                           In this case, the health status is changed from success to fail.
         *                           Valid values: 2 to 10.
         *                           Default value: 3.
         * @return {@code this}
         */
        public Builder unhealthyThreshold(java.lang.Number unhealthyThreshold) {
            this.unhealthyThreshold = unhealthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getUnhealthyThreshold}
         * @param unhealthyThreshold Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
         *                           In this case, the health status is changed from success to fail.
         *                           Valid values: 2 to 10.
         *                           Default value: 3.
         * @return {@code this}
         */
        public Builder unhealthyThreshold(com.aliyun.ros.cdk.core.IResolvable unhealthyThreshold) {
            this.unhealthyThreshold = unhealthyThreshold;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HealthCheckTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HealthCheckTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HealthCheckTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HealthCheckTemplateProps {
        private final java.lang.Object healthCheckTemplateName;
        private final java.lang.Object healthCheckCodes;
        private final java.lang.Object healthCheckConnectPort;
        private final java.lang.Object healthCheckHost;
        private final java.lang.Object healthCheckInterval;
        private final java.lang.Object healthCheckMethod;
        private final java.lang.Object healthCheckPath;
        private final java.lang.Object healthCheckProtocol;
        private final java.lang.Object healthCheckTimeout;
        private final java.lang.Object healthyThreshold;
        private final java.lang.Object unhealthyThreshold;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.healthCheckTemplateName = software.amazon.jsii.Kernel.get(this, "healthCheckTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckCodes = software.amazon.jsii.Kernel.get(this, "healthCheckCodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckConnectPort = software.amazon.jsii.Kernel.get(this, "healthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckHost = software.amazon.jsii.Kernel.get(this, "healthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckInterval = software.amazon.jsii.Kernel.get(this, "healthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckMethod = software.amazon.jsii.Kernel.get(this, "healthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckPath = software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckProtocol = software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckTimeout = software.amazon.jsii.Kernel.get(this, "healthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthyThreshold = software.amazon.jsii.Kernel.get(this, "healthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.unhealthyThreshold = software.amazon.jsii.Kernel.get(this, "unhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.healthCheckTemplateName = java.util.Objects.requireNonNull(builder.healthCheckTemplateName, "healthCheckTemplateName is required");
            this.healthCheckCodes = builder.healthCheckCodes;
            this.healthCheckConnectPort = builder.healthCheckConnectPort;
            this.healthCheckHost = builder.healthCheckHost;
            this.healthCheckInterval = builder.healthCheckInterval;
            this.healthCheckMethod = builder.healthCheckMethod;
            this.healthCheckPath = builder.healthCheckPath;
            this.healthCheckProtocol = builder.healthCheckProtocol;
            this.healthCheckTimeout = builder.healthCheckTimeout;
            this.healthyThreshold = builder.healthyThreshold;
            this.unhealthyThreshold = builder.unhealthyThreshold;
        }

        @Override
        public final java.lang.Object getHealthCheckTemplateName() {
            return this.healthCheckTemplateName;
        }

        @Override
        public final java.lang.Object getHealthCheckCodes() {
            return this.healthCheckCodes;
        }

        @Override
        public final java.lang.Object getHealthCheckConnectPort() {
            return this.healthCheckConnectPort;
        }

        @Override
        public final java.lang.Object getHealthCheckHost() {
            return this.healthCheckHost;
        }

        @Override
        public final java.lang.Object getHealthCheckInterval() {
            return this.healthCheckInterval;
        }

        @Override
        public final java.lang.Object getHealthCheckMethod() {
            return this.healthCheckMethod;
        }

        @Override
        public final java.lang.Object getHealthCheckPath() {
            return this.healthCheckPath;
        }

        @Override
        public final java.lang.Object getHealthCheckProtocol() {
            return this.healthCheckProtocol;
        }

        @Override
        public final java.lang.Object getHealthCheckTimeout() {
            return this.healthCheckTimeout;
        }

        @Override
        public final java.lang.Object getHealthyThreshold() {
            return this.healthyThreshold;
        }

        @Override
        public final java.lang.Object getUnhealthyThreshold() {
            return this.unhealthyThreshold;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("healthCheckTemplateName", om.valueToTree(this.getHealthCheckTemplateName()));
            if (this.getHealthCheckCodes() != null) {
                data.set("healthCheckCodes", om.valueToTree(this.getHealthCheckCodes()));
            }
            if (this.getHealthCheckConnectPort() != null) {
                data.set("healthCheckConnectPort", om.valueToTree(this.getHealthCheckConnectPort()));
            }
            if (this.getHealthCheckHost() != null) {
                data.set("healthCheckHost", om.valueToTree(this.getHealthCheckHost()));
            }
            if (this.getHealthCheckInterval() != null) {
                data.set("healthCheckInterval", om.valueToTree(this.getHealthCheckInterval()));
            }
            if (this.getHealthCheckMethod() != null) {
                data.set("healthCheckMethod", om.valueToTree(this.getHealthCheckMethod()));
            }
            if (this.getHealthCheckPath() != null) {
                data.set("healthCheckPath", om.valueToTree(this.getHealthCheckPath()));
            }
            if (this.getHealthCheckProtocol() != null) {
                data.set("healthCheckProtocol", om.valueToTree(this.getHealthCheckProtocol()));
            }
            if (this.getHealthCheckTimeout() != null) {
                data.set("healthCheckTimeout", om.valueToTree(this.getHealthCheckTimeout()));
            }
            if (this.getHealthyThreshold() != null) {
                data.set("healthyThreshold", om.valueToTree(this.getHealthyThreshold()));
            }
            if (this.getUnhealthyThreshold() != null) {
                data.set("unhealthyThreshold", om.valueToTree(this.getUnhealthyThreshold()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.HealthCheckTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HealthCheckTemplateProps.Jsii$Proxy that = (HealthCheckTemplateProps.Jsii$Proxy) o;

            if (!healthCheckTemplateName.equals(that.healthCheckTemplateName)) return false;
            if (this.healthCheckCodes != null ? !this.healthCheckCodes.equals(that.healthCheckCodes) : that.healthCheckCodes != null) return false;
            if (this.healthCheckConnectPort != null ? !this.healthCheckConnectPort.equals(that.healthCheckConnectPort) : that.healthCheckConnectPort != null) return false;
            if (this.healthCheckHost != null ? !this.healthCheckHost.equals(that.healthCheckHost) : that.healthCheckHost != null) return false;
            if (this.healthCheckInterval != null ? !this.healthCheckInterval.equals(that.healthCheckInterval) : that.healthCheckInterval != null) return false;
            if (this.healthCheckMethod != null ? !this.healthCheckMethod.equals(that.healthCheckMethod) : that.healthCheckMethod != null) return false;
            if (this.healthCheckPath != null ? !this.healthCheckPath.equals(that.healthCheckPath) : that.healthCheckPath != null) return false;
            if (this.healthCheckProtocol != null ? !this.healthCheckProtocol.equals(that.healthCheckProtocol) : that.healthCheckProtocol != null) return false;
            if (this.healthCheckTimeout != null ? !this.healthCheckTimeout.equals(that.healthCheckTimeout) : that.healthCheckTimeout != null) return false;
            if (this.healthyThreshold != null ? !this.healthyThreshold.equals(that.healthyThreshold) : that.healthyThreshold != null) return false;
            return this.unhealthyThreshold != null ? this.unhealthyThreshold.equals(that.unhealthyThreshold) : that.unhealthyThreshold == null;
        }

        @Override
        public final int hashCode() {
            int result = this.healthCheckTemplateName.hashCode();
            result = 31 * result + (this.healthCheckCodes != null ? this.healthCheckCodes.hashCode() : 0);
            result = 31 * result + (this.healthCheckConnectPort != null ? this.healthCheckConnectPort.hashCode() : 0);
            result = 31 * result + (this.healthCheckHost != null ? this.healthCheckHost.hashCode() : 0);
            result = 31 * result + (this.healthCheckInterval != null ? this.healthCheckInterval.hashCode() : 0);
            result = 31 * result + (this.healthCheckMethod != null ? this.healthCheckMethod.hashCode() : 0);
            result = 31 * result + (this.healthCheckPath != null ? this.healthCheckPath.hashCode() : 0);
            result = 31 * result + (this.healthCheckProtocol != null ? this.healthCheckProtocol.hashCode() : 0);
            result = 31 * result + (this.healthCheckTimeout != null ? this.healthCheckTimeout.hashCode() : 0);
            result = 31 * result + (this.healthyThreshold != null ? this.healthyThreshold.hashCode() : 0);
            result = 31 * result + (this.unhealthyThreshold != null ? this.unhealthyThreshold.hashCode() : 0);
            return result;
        }
    }
}
