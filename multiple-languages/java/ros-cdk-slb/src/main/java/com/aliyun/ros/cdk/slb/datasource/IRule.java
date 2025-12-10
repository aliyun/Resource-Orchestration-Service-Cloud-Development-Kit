package com.aliyun.ros.cdk.slb.datasource;

/**
 * Represents a <code>Rule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.460Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.IRule")
@software.amazon.jsii.Jsii.Proxy(IRule.Jsii$Proxy.class)
public interface IRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Cookie: The cookie to be configured on the backend server.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookie();

    /**
     * Attribute CookieTimeout: The timeout period of a cookie.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookieTimeout();

    /**
     * Attribute Domain: The domain name that is configured in the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain();

    /**
     * Attribute HealthCheck: Specifies whether to enable health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheck();

    /**
     * Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.
     * <p>
     * Valid values: 1 to 65535.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectPort();

    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks.
     * <p>
     * Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckDomain();

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.
     * <p>
     * Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode();

    /**
     * Attribute HealthCheckInterval: The time interval between two consecutive health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval();

    /**
     * Attribute HealthCheckTimeout: The timeout period of a health check response.
     * <p>
     * If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTimeout();

    /**
     * Attribute HealthCheckUri: The URI that is used for health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri();

    /**
     * Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.
     * <p>
     * In this case, the health check state is changed from fail to success.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold();

    /**
     * Attribute ListenerPort: The listener port that is used by the SLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort();

    /**
     * Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerSync();

    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId();

    /**
     * Attribute RuleId: The ID of the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId();

    /**
     * Attribute RuleName: The name of the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler();

    /**
     * Attribute StickySession: Indicates whether session persistence is enabled.
     * <p>
     * Valid values: on and off.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStickySession();

    /**
     * Attribute StickySessionType: The method that is used to handle a cookie.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStickySessionType();

    /**
     * Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.
     * <p>
     * In this case, the health check state is changed from success to fail.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUnhealthyThreshold();

    /**
     * Attribute Url: The URL that is configured in the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl();

    /**
     * Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVserverGroupId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.RuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.slb.datasource.IRule.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute Cookie: The cookie to be configured on the backend server.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookie() {
            return software.amazon.jsii.Kernel.get(this, "attrCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CookieTimeout: The timeout period of a cookie.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookieTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrCookieTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domain: The domain name that is configured in the forwarding rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheck: Specifies whether to enable health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheck() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.
         * <p>
         * Valid values: 1 to 65535.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckDomain: The domain name that is used for health checks.
         * <p>
         * Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.
         * <p>
         * Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckInterval: The time interval between two consecutive health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckTimeout: The timeout period of a health check response.
         * <p>
         * If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckUri: The URI that is used for health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.
         * <p>
         * In this case, the health check state is changed from fail to success.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPort: The listener port that is used by the SLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerSync() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerSync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the SLB instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleId: The ID of the forwarding rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the forwarding rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scheduler: The scheduling algorithm.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StickySession: Indicates whether session persistence is enabled.
         * <p>
         * Valid values: on and off.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStickySession() {
            return software.amazon.jsii.Kernel.get(this, "attrStickySession", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StickySessionType: The method that is used to handle a cookie.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStickySessionType() {
            return software.amazon.jsii.Kernel.get(this, "attrStickySessionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.
         * <p>
         * In this case, the health check state is changed from success to fail.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUnhealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrUnhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Url: The URL that is configured in the forwarding rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVserverGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrVserverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.RuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.RuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute Cookie: The cookie to be configured on the backend server.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookie() {
            return software.amazon.jsii.Kernel.get(this, "attrCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CookieTimeout: The timeout period of a cookie.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCookieTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrCookieTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domain: The domain name that is configured in the forwarding rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheck: Specifies whether to enable health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheck() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.
         * <p>
         * Valid values: 1 to 65535.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckDomain: The domain name that is used for health checks.
         * <p>
         * Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.
         * <p>
         * Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckInterval: The time interval between two consecutive health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckTimeout: The timeout period of a health check response.
         * <p>
         * If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckUri: The URI that is used for health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.
         * <p>
         * In this case, the health check state is changed from fail to success.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerPort: The listener port that is used by the SLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerSync() {
            return software.amazon.jsii.Kernel.get(this, "attrListenerSync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoadBalancerId: The ID of the SLB instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleId: The ID of the forwarding rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the forwarding rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scheduler: The scheduling algorithm.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler() {
            return software.amazon.jsii.Kernel.get(this, "attrScheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StickySession: Indicates whether session persistence is enabled.
         * <p>
         * Valid values: on and off.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStickySession() {
            return software.amazon.jsii.Kernel.get(this, "attrStickySession", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StickySessionType: The method that is used to handle a cookie.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStickySessionType() {
            return software.amazon.jsii.Kernel.get(this, "attrStickySessionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.
         * <p>
         * In this case, the health check state is changed from success to fail.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUnhealthyThreshold() {
            return software.amazon.jsii.Kernel.get(this, "attrUnhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Url: The URL that is configured in the forwarding rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVserverGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrVserverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.RuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.RuleProps.class));
        }
    }
}
