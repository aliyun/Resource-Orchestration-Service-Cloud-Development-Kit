package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>HealthCheckTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T06:59:20.378Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.HealthCheckTemplateProps")
@software.amazon.jsii.Jsii.Proxy(HealthCheckTemplateProps.Jsii$Proxy.class)
public interface HealthCheckTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property healthCheckTemplateName: The name of the health check template.
     * <p>
     * The name must be 2 to 128 characters in length, must start with a letter, a
     * digit, or a Chinese character, and can contain digits, periods (.), underscores
     * (_), hyphens (-), and spaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckTemplateName();

    /**
     * Property healthCheckCodes: The HTTP status codes that indicate a successful health check.
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHost() {
        return null;
    }

    /**
     * Property healthCheckHttpVersion: The HTTP version for health check protocol.
     * <p>
     * Valid values: HTTP1.0 or HTTP1.1.
     * Default value: HTTP 1.1.
     * This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHttpVersion() {
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckMethod() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPath() {
        return null;
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
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
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
        java.lang.Object healthCheckHttpVersion;
        java.lang.Object healthCheckInterval;
        java.lang.Object healthCheckMethod;
        java.lang.Object healthCheckPath;
        java.lang.Object healthCheckProtocol;
        java.lang.Object healthCheckTimeout;
        java.lang.Object healthyThreshold;
        java.lang.Object resourceGroupId;
        java.lang.Object unhealthyThreshold;

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckTemplateName}
         * @param healthCheckTemplateName Property healthCheckTemplateName: The name of the health check template. This parameter is required.
         *                                The name must be 2 to 128 characters in length, must start with a letter, a
         *                                digit, or a Chinese character, and can contain digits, periods (.), underscores
         *                                (_), hyphens (-), and spaces.
         * @return {@code this}
         */
        public Builder healthCheckTemplateName(java.lang.String healthCheckTemplateName) {
            this.healthCheckTemplateName = healthCheckTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckTemplateName}
         * @param healthCheckTemplateName Property healthCheckTemplateName: The name of the health check template. This parameter is required.
         *                                The name must be 2 to 128 characters in length, must start with a letter, a
         *                                digit, or a Chinese character, and can contain digits, periods (.), underscores
         *                                (_), hyphens (-), and spaces.
         * @return {@code this}
         */
        public Builder healthCheckTemplateName(com.aliyun.ros.cdk.core.IResolvable healthCheckTemplateName) {
            this.healthCheckTemplateName = healthCheckTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckCodes}
         * @param healthCheckCodes Property healthCheckCodes: The HTTP status codes that indicate a successful health check.
         * @return {@code this}
         */
        public Builder healthCheckCodes(com.aliyun.ros.cdk.core.IResolvable healthCheckCodes) {
            this.healthCheckCodes = healthCheckCodes;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckCodes}
         * @param healthCheckCodes Property healthCheckCodes: The HTTP status codes that indicate a successful health check.
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
         * @param healthCheckHost Property healthCheckHost: The domain name used for the health check.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>$SERVER_IP: The private IP address of a backend server. If you set this
         *                        parameter to <code>$SERVER_IP</code> or leave it empty, the load balancer uses the private
         *                        IP address of the backend server as the domain name for the health check.</li>
         *                        <li>domain: The domain name must be 1 to 80 characters in length and can contain
         *                        letters, digits, periods (.), and hyphens (-).</li>
         *                        </ul>
         *                        <p>
         *                        <blockquote>
         *                        <p>
         *                        This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         *                        set to HTTP or HTTPS.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder healthCheckHost(java.lang.String healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckHost}
         * @param healthCheckHost Property healthCheckHost: The domain name used for the health check.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>$SERVER_IP: The private IP address of a backend server. If you set this
         *                        parameter to <code>$SERVER_IP</code> or leave it empty, the load balancer uses the private
         *                        IP address of the backend server as the domain name for the health check.</li>
         *                        <li>domain: The domain name must be 1 to 80 characters in length and can contain
         *                        letters, digits, periods (.), and hyphens (-).</li>
         *                        </ul>
         *                        <p>
         *                        <blockquote>
         *                        <p>
         *                        This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         *                        set to HTTP or HTTPS.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder healthCheckHost(com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckHttpVersion}
         * @param healthCheckHttpVersion Property healthCheckHttpVersion: The HTTP version for health check protocol.
         *                               Valid values: HTTP1.0 or HTTP1.1.
         *                               Default value: HTTP 1.1.
         *                               This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
         * @return {@code this}
         */
        public Builder healthCheckHttpVersion(java.lang.String healthCheckHttpVersion) {
            this.healthCheckHttpVersion = healthCheckHttpVersion;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckHttpVersion}
         * @param healthCheckHttpVersion Property healthCheckHttpVersion: The HTTP version for health check protocol.
         *                               Valid values: HTTP1.0 or HTTP1.1.
         *                               Default value: HTTP 1.1.
         *                               This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
         * @return {@code this}
         */
        public Builder healthCheckHttpVersion(com.aliyun.ros.cdk.core.IResolvable healthCheckHttpVersion) {
            this.healthCheckHttpVersion = healthCheckHttpVersion;
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
         * @param healthCheckMethod Property healthCheckMethod: The method used for the health check.
         *                          Valid values:
         *                          <p>
         *                          <ul>
         *                          <li>HEAD (default): For HTTP and HTTPS listeners, the default health check method
         *                          is HEAD.</li>
         *                          <li>POST: For gRPC listeners, the default health check method is POST.</li>
         *                          <li>GET: If the response body exceeds 8 KB, it is truncated. This does not affect
         *                          the health check result.</li>
         *                          </ul>
         *                          <p>
         *                          <blockquote>
         *                          <p>
         *                          This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         *                          set to HTTP, HTTPS, or gRPC.
         *                          <p>
         *                          </blockquote>
         * @return {@code this}
         */
        public Builder healthCheckMethod(java.lang.String healthCheckMethod) {
            this.healthCheckMethod = healthCheckMethod;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckMethod}
         * @param healthCheckMethod Property healthCheckMethod: The method used for the health check.
         *                          Valid values:
         *                          <p>
         *                          <ul>
         *                          <li>HEAD (default): For HTTP and HTTPS listeners, the default health check method
         *                          is HEAD.</li>
         *                          <li>POST: For gRPC listeners, the default health check method is POST.</li>
         *                          <li>GET: If the response body exceeds 8 KB, it is truncated. This does not affect
         *                          the health check result.</li>
         *                          </ul>
         *                          <p>
         *                          <blockquote>
         *                          <p>
         *                          This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         *                          set to HTTP, HTTPS, or gRPC.
         *                          <p>
         *                          </blockquote>
         * @return {@code this}
         */
        public Builder healthCheckMethod(com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
            this.healthCheckMethod = healthCheckMethod;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckPath}
         * @param healthCheckPath Property healthCheckPath: The URL that is used for health checks.
         *                        The URL must be 1 to 80 characters in length. It must start with a forward slash
         *                        (/) and can contain letters, digits, and the following special characters: <code>- \/ . % ? # &amp; _;~!()*[]&#64;$^:',+</code>.
         *                        <p>
         *                        <blockquote>
         *                        <p>
         *                        This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         *                        set to HTTP or HTTPS.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder healthCheckPath(java.lang.String healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckPath}
         * @param healthCheckPath Property healthCheckPath: The URL that is used for health checks.
         *                        The URL must be 1 to 80 characters in length. It must start with a forward slash
         *                        (/) and can contain letters, digits, and the following special characters: <code>- \/ . % ? # &amp; _;~!()*[]&#64;$^:',+</code>.
         *                        <p>
         *                        <blockquote>
         *                        <p>
         *                        This parameter takes effect only when the <code>HealthCheckProtocol</code> parameter is
         *                        set to HTTP or HTTPS.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder healthCheckPath(com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckProtocol}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol used for the health check.
         *                            Valid values:
         *                            <p>
         *                            <ul>
         *                            <li>HTTP (default): simulates browser access by sending HEAD or GET requests to
         *                            check whether the server application is healthy.</li>
         *                            <li>HTTPS: simulates browser access by sending HEAD or GET requests to check
         *                            whether the server application is healthy. HTTPS provides encrypted data
         *                            transmission and is more secure than HTTP.</li>
         *                            <li>TCP: checks whether the server port is responsive by sending SYN packets.</li>
         *                            <li>gRPC: checks whether the server application is healthy by sending POST or GET
         *                            requests.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder healthCheckProtocol(java.lang.String healthCheckProtocol) {
            this.healthCheckProtocol = healthCheckProtocol;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getHealthCheckProtocol}
         * @param healthCheckProtocol Property healthCheckProtocol: The protocol used for the health check.
         *                            Valid values:
         *                            <p>
         *                            <ul>
         *                            <li>HTTP (default): simulates browser access by sending HEAD or GET requests to
         *                            check whether the server application is healthy.</li>
         *                            <li>HTTPS: simulates browser access by sending HEAD or GET requests to check
         *                            whether the server application is healthy. HTTPS provides encrypted data
         *                            transmission and is more secure than HTTP.</li>
         *                            <li>TCP: checks whether the server port is responsive by sending SYN packets.</li>
         *                            <li>gRPC: checks whether the server application is healthy by sending POST or GET
         *                            requests.</li>
         *                            </ul>
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
         * Sets the value of {@link HealthCheckTemplateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link HealthCheckTemplateProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
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
        private final java.lang.Object healthCheckHttpVersion;
        private final java.lang.Object healthCheckInterval;
        private final java.lang.Object healthCheckMethod;
        private final java.lang.Object healthCheckPath;
        private final java.lang.Object healthCheckProtocol;
        private final java.lang.Object healthCheckTimeout;
        private final java.lang.Object healthyThreshold;
        private final java.lang.Object resourceGroupId;
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
            this.healthCheckHttpVersion = software.amazon.jsii.Kernel.get(this, "healthCheckHttpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckInterval = software.amazon.jsii.Kernel.get(this, "healthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckMethod = software.amazon.jsii.Kernel.get(this, "healthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckPath = software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckProtocol = software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckTimeout = software.amazon.jsii.Kernel.get(this, "healthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthyThreshold = software.amazon.jsii.Kernel.get(this, "healthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.healthCheckHttpVersion = builder.healthCheckHttpVersion;
            this.healthCheckInterval = builder.healthCheckInterval;
            this.healthCheckMethod = builder.healthCheckMethod;
            this.healthCheckPath = builder.healthCheckPath;
            this.healthCheckProtocol = builder.healthCheckProtocol;
            this.healthCheckTimeout = builder.healthCheckTimeout;
            this.healthyThreshold = builder.healthyThreshold;
            this.resourceGroupId = builder.resourceGroupId;
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
        public final java.lang.Object getHealthCheckHttpVersion() {
            return this.healthCheckHttpVersion;
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
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
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
            if (this.getHealthCheckHttpVersion() != null) {
                data.set("healthCheckHttpVersion", om.valueToTree(this.getHealthCheckHttpVersion()));
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
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
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
            if (this.healthCheckHttpVersion != null ? !this.healthCheckHttpVersion.equals(that.healthCheckHttpVersion) : that.healthCheckHttpVersion != null) return false;
            if (this.healthCheckInterval != null ? !this.healthCheckInterval.equals(that.healthCheckInterval) : that.healthCheckInterval != null) return false;
            if (this.healthCheckMethod != null ? !this.healthCheckMethod.equals(that.healthCheckMethod) : that.healthCheckMethod != null) return false;
            if (this.healthCheckPath != null ? !this.healthCheckPath.equals(that.healthCheckPath) : that.healthCheckPath != null) return false;
            if (this.healthCheckProtocol != null ? !this.healthCheckProtocol.equals(that.healthCheckProtocol) : that.healthCheckProtocol != null) return false;
            if (this.healthCheckTimeout != null ? !this.healthCheckTimeout.equals(that.healthCheckTimeout) : that.healthCheckTimeout != null) return false;
            if (this.healthyThreshold != null ? !this.healthyThreshold.equals(that.healthyThreshold) : that.healthyThreshold != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.unhealthyThreshold != null ? this.unhealthyThreshold.equals(that.unhealthyThreshold) : that.unhealthyThreshold == null;
        }

        @Override
        public final int hashCode() {
            int result = this.healthCheckTemplateName.hashCode();
            result = 31 * result + (this.healthCheckCodes != null ? this.healthCheckCodes.hashCode() : 0);
            result = 31 * result + (this.healthCheckConnectPort != null ? this.healthCheckConnectPort.hashCode() : 0);
            result = 31 * result + (this.healthCheckHost != null ? this.healthCheckHost.hashCode() : 0);
            result = 31 * result + (this.healthCheckHttpVersion != null ? this.healthCheckHttpVersion.hashCode() : 0);
            result = 31 * result + (this.healthCheckInterval != null ? this.healthCheckInterval.hashCode() : 0);
            result = 31 * result + (this.healthCheckMethod != null ? this.healthCheckMethod.hashCode() : 0);
            result = 31 * result + (this.healthCheckPath != null ? this.healthCheckPath.hashCode() : 0);
            result = 31 * result + (this.healthCheckProtocol != null ? this.healthCheckProtocol.hashCode() : 0);
            result = 31 * result + (this.healthCheckTimeout != null ? this.healthCheckTimeout.hashCode() : 0);
            result = 31 * result + (this.healthyThreshold != null ? this.healthyThreshold.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.unhealthyThreshold != null ? this.unhealthyThreshold.hashCode() : 0);
            return result;
        }
    }
}
