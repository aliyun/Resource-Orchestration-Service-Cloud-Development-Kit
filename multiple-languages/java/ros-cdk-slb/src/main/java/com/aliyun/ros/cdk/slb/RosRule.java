package com.aliyun.ros.cdk.slb;

/**
 * A ROS template type:  <code>ALIYUN::SLB::Rule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.417Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosRule")
public class RosRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.slb.RosRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::SLB::Rule</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.RosRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRules() {
        return software.amazon.jsii.Kernel.get(this, "attrRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleList() {
        return software.amazon.jsii.Kernel.get(this, "ruleList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleList", java.util.Objects.requireNonNull(value, "ruleList is required"));
    }

    /**
     */
    public void setRuleList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.slb.RosRule.RuleListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.slb.RosRule.RuleListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "ruleList", java.util.Objects.requireNonNull(value, "ruleList is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getListenerProtocol() {
        return software.amazon.jsii.Kernel.get(this, "listenerProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerProtocol", value);
    }

    /**
     */
    public void setListenerProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerProtocol", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosRule.AdvancedSettingsProperty")
    @software.amazon.jsii.Jsii.Proxy(AdvancedSettingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AdvancedSettingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCookie() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCookieTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheck() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConnectPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckDomain() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHttpCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckInterval() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckUri() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthyThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getListenerSync() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStickySession() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStickySessionType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUnhealthyThreshold() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AdvancedSettingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AdvancedSettingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AdvancedSettingsProperty> {
            java.lang.Object cookie;
            java.lang.Object cookieTimeout;
            java.lang.Object healthCheck;
            java.lang.Object healthCheckConnectPort;
            java.lang.Object healthCheckDomain;
            java.lang.Object healthCheckHttpCode;
            java.lang.Object healthCheckInterval;
            java.lang.Object healthCheckTimeout;
            java.lang.Object healthCheckUri;
            java.lang.Object healthyThreshold;
            java.lang.Object listenerSync;
            java.lang.Object scheduler;
            java.lang.Object stickySession;
            java.lang.Object stickySessionType;
            java.lang.Object unhealthyThreshold;

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getCookie}
             * @param cookie the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookie(java.lang.String cookie) {
                this.cookie = cookie;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getCookie}
             * @param cookie the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookie(com.aliyun.ros.cdk.core.IResolvable cookie) {
                this.cookie = cookie;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getCookieTimeout}
             * @param cookieTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieTimeout(java.lang.Number cookieTimeout) {
                this.cookieTimeout = cookieTimeout;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getCookieTimeout}
             * @param cookieTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieTimeout(com.aliyun.ros.cdk.core.IResolvable cookieTimeout) {
                this.cookieTimeout = cookieTimeout;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheck}
             * @param healthCheck the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheck(java.lang.String healthCheck) {
                this.healthCheck = healthCheck;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheck}
             * @param healthCheck the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheck(com.aliyun.ros.cdk.core.IResolvable healthCheck) {
                this.healthCheck = healthCheck;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckConnectPort}
             * @param healthCheckConnectPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConnectPort(java.lang.Number healthCheckConnectPort) {
                this.healthCheckConnectPort = healthCheckConnectPort;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckConnectPort}
             * @param healthCheckConnectPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConnectPort(com.aliyun.ros.cdk.core.IResolvable healthCheckConnectPort) {
                this.healthCheckConnectPort = healthCheckConnectPort;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckDomain}
             * @param healthCheckDomain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckDomain(java.lang.String healthCheckDomain) {
                this.healthCheckDomain = healthCheckDomain;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckDomain}
             * @param healthCheckDomain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckDomain(com.aliyun.ros.cdk.core.IResolvable healthCheckDomain) {
                this.healthCheckDomain = healthCheckDomain;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckHttpCode}
             * @param healthCheckHttpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckHttpCode(java.lang.String healthCheckHttpCode) {
                this.healthCheckHttpCode = healthCheckHttpCode;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckHttpCode}
             * @param healthCheckHttpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckHttpCode(com.aliyun.ros.cdk.core.IResolvable healthCheckHttpCode) {
                this.healthCheckHttpCode = healthCheckHttpCode;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckInterval}
             * @param healthCheckInterval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckInterval(java.lang.Number healthCheckInterval) {
                this.healthCheckInterval = healthCheckInterval;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckInterval}
             * @param healthCheckInterval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckInterval(com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
                this.healthCheckInterval = healthCheckInterval;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckTimeout}
             * @param healthCheckTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckTimeout(java.lang.Number healthCheckTimeout) {
                this.healthCheckTimeout = healthCheckTimeout;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckTimeout}
             * @param healthCheckTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckTimeout(com.aliyun.ros.cdk.core.IResolvable healthCheckTimeout) {
                this.healthCheckTimeout = healthCheckTimeout;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckUri}
             * @param healthCheckUri the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckUri(java.lang.String healthCheckUri) {
                this.healthCheckUri = healthCheckUri;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthCheckUri}
             * @param healthCheckUri the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckUri(com.aliyun.ros.cdk.core.IResolvable healthCheckUri) {
                this.healthCheckUri = healthCheckUri;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthyThreshold}
             * @param healthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthyThreshold(java.lang.Number healthyThreshold) {
                this.healthyThreshold = healthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getHealthyThreshold}
             * @param healthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthyThreshold(com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
                this.healthyThreshold = healthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getListenerSync}
             * @param listenerSync the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder listenerSync(java.lang.String listenerSync) {
                this.listenerSync = listenerSync;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getListenerSync}
             * @param listenerSync the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder listenerSync(com.aliyun.ros.cdk.core.IResolvable listenerSync) {
                this.listenerSync = listenerSync;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getScheduler}
             * @param scheduler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheduler(java.lang.String scheduler) {
                this.scheduler = scheduler;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getScheduler}
             * @param scheduler the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
                this.scheduler = scheduler;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getStickySession}
             * @param stickySession the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySession(java.lang.String stickySession) {
                this.stickySession = stickySession;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getStickySession}
             * @param stickySession the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySession(com.aliyun.ros.cdk.core.IResolvable stickySession) {
                this.stickySession = stickySession;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getStickySessionType}
             * @param stickySessionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySessionType(java.lang.String stickySessionType) {
                this.stickySessionType = stickySessionType;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getStickySessionType}
             * @param stickySessionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySessionType(com.aliyun.ros.cdk.core.IResolvable stickySessionType) {
                this.stickySessionType = stickySessionType;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getUnhealthyThreshold}
             * @param unhealthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder unhealthyThreshold(java.lang.Number unhealthyThreshold) {
                this.unhealthyThreshold = unhealthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link AdvancedSettingsProperty#getUnhealthyThreshold}
             * @param unhealthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder unhealthyThreshold(com.aliyun.ros.cdk.core.IResolvable unhealthyThreshold) {
                this.unhealthyThreshold = unhealthyThreshold;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AdvancedSettingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AdvancedSettingsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AdvancedSettingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AdvancedSettingsProperty {
            private final java.lang.Object cookie;
            private final java.lang.Object cookieTimeout;
            private final java.lang.Object healthCheck;
            private final java.lang.Object healthCheckConnectPort;
            private final java.lang.Object healthCheckDomain;
            private final java.lang.Object healthCheckHttpCode;
            private final java.lang.Object healthCheckInterval;
            private final java.lang.Object healthCheckTimeout;
            private final java.lang.Object healthCheckUri;
            private final java.lang.Object healthyThreshold;
            private final java.lang.Object listenerSync;
            private final java.lang.Object scheduler;
            private final java.lang.Object stickySession;
            private final java.lang.Object stickySessionType;
            private final java.lang.Object unhealthyThreshold;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cookie = software.amazon.jsii.Kernel.get(this, "cookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cookieTimeout = software.amazon.jsii.Kernel.get(this, "cookieTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheck = software.amazon.jsii.Kernel.get(this, "healthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckConnectPort = software.amazon.jsii.Kernel.get(this, "healthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckDomain = software.amazon.jsii.Kernel.get(this, "healthCheckDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckHttpCode = software.amazon.jsii.Kernel.get(this, "healthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckInterval = software.amazon.jsii.Kernel.get(this, "healthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckTimeout = software.amazon.jsii.Kernel.get(this, "healthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckUri = software.amazon.jsii.Kernel.get(this, "healthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthyThreshold = software.amazon.jsii.Kernel.get(this, "healthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.listenerSync = software.amazon.jsii.Kernel.get(this, "listenerSync", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stickySession = software.amazon.jsii.Kernel.get(this, "stickySession", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stickySessionType = software.amazon.jsii.Kernel.get(this, "stickySessionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.unhealthyThreshold = software.amazon.jsii.Kernel.get(this, "unhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cookie = builder.cookie;
                this.cookieTimeout = builder.cookieTimeout;
                this.healthCheck = builder.healthCheck;
                this.healthCheckConnectPort = builder.healthCheckConnectPort;
                this.healthCheckDomain = builder.healthCheckDomain;
                this.healthCheckHttpCode = builder.healthCheckHttpCode;
                this.healthCheckInterval = builder.healthCheckInterval;
                this.healthCheckTimeout = builder.healthCheckTimeout;
                this.healthCheckUri = builder.healthCheckUri;
                this.healthyThreshold = builder.healthyThreshold;
                this.listenerSync = builder.listenerSync;
                this.scheduler = builder.scheduler;
                this.stickySession = builder.stickySession;
                this.stickySessionType = builder.stickySessionType;
                this.unhealthyThreshold = builder.unhealthyThreshold;
            }

            @Override
            public final java.lang.Object getCookie() {
                return this.cookie;
            }

            @Override
            public final java.lang.Object getCookieTimeout() {
                return this.cookieTimeout;
            }

            @Override
            public final java.lang.Object getHealthCheck() {
                return this.healthCheck;
            }

            @Override
            public final java.lang.Object getHealthCheckConnectPort() {
                return this.healthCheckConnectPort;
            }

            @Override
            public final java.lang.Object getHealthCheckDomain() {
                return this.healthCheckDomain;
            }

            @Override
            public final java.lang.Object getHealthCheckHttpCode() {
                return this.healthCheckHttpCode;
            }

            @Override
            public final java.lang.Object getHealthCheckInterval() {
                return this.healthCheckInterval;
            }

            @Override
            public final java.lang.Object getHealthCheckTimeout() {
                return this.healthCheckTimeout;
            }

            @Override
            public final java.lang.Object getHealthCheckUri() {
                return this.healthCheckUri;
            }

            @Override
            public final java.lang.Object getHealthyThreshold() {
                return this.healthyThreshold;
            }

            @Override
            public final java.lang.Object getListenerSync() {
                return this.listenerSync;
            }

            @Override
            public final java.lang.Object getScheduler() {
                return this.scheduler;
            }

            @Override
            public final java.lang.Object getStickySession() {
                return this.stickySession;
            }

            @Override
            public final java.lang.Object getStickySessionType() {
                return this.stickySessionType;
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

                if (this.getCookie() != null) {
                    data.set("cookie", om.valueToTree(this.getCookie()));
                }
                if (this.getCookieTimeout() != null) {
                    data.set("cookieTimeout", om.valueToTree(this.getCookieTimeout()));
                }
                if (this.getHealthCheck() != null) {
                    data.set("healthCheck", om.valueToTree(this.getHealthCheck()));
                }
                if (this.getHealthCheckConnectPort() != null) {
                    data.set("healthCheckConnectPort", om.valueToTree(this.getHealthCheckConnectPort()));
                }
                if (this.getHealthCheckDomain() != null) {
                    data.set("healthCheckDomain", om.valueToTree(this.getHealthCheckDomain()));
                }
                if (this.getHealthCheckHttpCode() != null) {
                    data.set("healthCheckHttpCode", om.valueToTree(this.getHealthCheckHttpCode()));
                }
                if (this.getHealthCheckInterval() != null) {
                    data.set("healthCheckInterval", om.valueToTree(this.getHealthCheckInterval()));
                }
                if (this.getHealthCheckTimeout() != null) {
                    data.set("healthCheckTimeout", om.valueToTree(this.getHealthCheckTimeout()));
                }
                if (this.getHealthCheckUri() != null) {
                    data.set("healthCheckUri", om.valueToTree(this.getHealthCheckUri()));
                }
                if (this.getHealthyThreshold() != null) {
                    data.set("healthyThreshold", om.valueToTree(this.getHealthyThreshold()));
                }
                if (this.getListenerSync() != null) {
                    data.set("listenerSync", om.valueToTree(this.getListenerSync()));
                }
                if (this.getScheduler() != null) {
                    data.set("scheduler", om.valueToTree(this.getScheduler()));
                }
                if (this.getStickySession() != null) {
                    data.set("stickySession", om.valueToTree(this.getStickySession()));
                }
                if (this.getStickySessionType() != null) {
                    data.set("stickySessionType", om.valueToTree(this.getStickySessionType()));
                }
                if (this.getUnhealthyThreshold() != null) {
                    data.set("unhealthyThreshold", om.valueToTree(this.getUnhealthyThreshold()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosRule.AdvancedSettingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AdvancedSettingsProperty.Jsii$Proxy that = (AdvancedSettingsProperty.Jsii$Proxy) o;

                if (this.cookie != null ? !this.cookie.equals(that.cookie) : that.cookie != null) return false;
                if (this.cookieTimeout != null ? !this.cookieTimeout.equals(that.cookieTimeout) : that.cookieTimeout != null) return false;
                if (this.healthCheck != null ? !this.healthCheck.equals(that.healthCheck) : that.healthCheck != null) return false;
                if (this.healthCheckConnectPort != null ? !this.healthCheckConnectPort.equals(that.healthCheckConnectPort) : that.healthCheckConnectPort != null) return false;
                if (this.healthCheckDomain != null ? !this.healthCheckDomain.equals(that.healthCheckDomain) : that.healthCheckDomain != null) return false;
                if (this.healthCheckHttpCode != null ? !this.healthCheckHttpCode.equals(that.healthCheckHttpCode) : that.healthCheckHttpCode != null) return false;
                if (this.healthCheckInterval != null ? !this.healthCheckInterval.equals(that.healthCheckInterval) : that.healthCheckInterval != null) return false;
                if (this.healthCheckTimeout != null ? !this.healthCheckTimeout.equals(that.healthCheckTimeout) : that.healthCheckTimeout != null) return false;
                if (this.healthCheckUri != null ? !this.healthCheckUri.equals(that.healthCheckUri) : that.healthCheckUri != null) return false;
                if (this.healthyThreshold != null ? !this.healthyThreshold.equals(that.healthyThreshold) : that.healthyThreshold != null) return false;
                if (this.listenerSync != null ? !this.listenerSync.equals(that.listenerSync) : that.listenerSync != null) return false;
                if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
                if (this.stickySession != null ? !this.stickySession.equals(that.stickySession) : that.stickySession != null) return false;
                if (this.stickySessionType != null ? !this.stickySessionType.equals(that.stickySessionType) : that.stickySessionType != null) return false;
                return this.unhealthyThreshold != null ? this.unhealthyThreshold.equals(that.unhealthyThreshold) : that.unhealthyThreshold == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cookie != null ? this.cookie.hashCode() : 0;
                result = 31 * result + (this.cookieTimeout != null ? this.cookieTimeout.hashCode() : 0);
                result = 31 * result + (this.healthCheck != null ? this.healthCheck.hashCode() : 0);
                result = 31 * result + (this.healthCheckConnectPort != null ? this.healthCheckConnectPort.hashCode() : 0);
                result = 31 * result + (this.healthCheckDomain != null ? this.healthCheckDomain.hashCode() : 0);
                result = 31 * result + (this.healthCheckHttpCode != null ? this.healthCheckHttpCode.hashCode() : 0);
                result = 31 * result + (this.healthCheckInterval != null ? this.healthCheckInterval.hashCode() : 0);
                result = 31 * result + (this.healthCheckTimeout != null ? this.healthCheckTimeout.hashCode() : 0);
                result = 31 * result + (this.healthCheckUri != null ? this.healthCheckUri.hashCode() : 0);
                result = 31 * result + (this.healthyThreshold != null ? this.healthyThreshold.hashCode() : 0);
                result = 31 * result + (this.listenerSync != null ? this.listenerSync.hashCode() : 0);
                result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
                result = 31 * result + (this.stickySession != null ? this.stickySession.hashCode() : 0);
                result = 31 * result + (this.stickySessionType != null ? this.stickySessionType.hashCode() : 0);
                result = 31 * result + (this.unhealthyThreshold != null ? this.unhealthyThreshold.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosRule.RuleListProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVServerGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAdvancedSettings() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDomain() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUrl() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuleListProperty> {
            java.lang.Object ruleName;
            java.lang.Object vServerGroupId;
            java.lang.Object advancedSettings;
            java.lang.Object domain;
            java.lang.Object url;

            /**
             * Sets the value of {@link RuleListProperty#getRuleName}
             * @param ruleName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleName(java.lang.String ruleName) {
                this.ruleName = ruleName;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getRuleName}
             * @param ruleName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
                this.ruleName = ruleName;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getVServerGroupId}
             * @param vServerGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vServerGroupId(java.lang.String vServerGroupId) {
                this.vServerGroupId = vServerGroupId;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getVServerGroupId}
             * @param vServerGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vServerGroupId(com.aliyun.ros.cdk.core.IResolvable vServerGroupId) {
                this.vServerGroupId = vServerGroupId;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getAdvancedSettings}
             * @param advancedSettings the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder advancedSettings(com.aliyun.ros.cdk.core.IResolvable advancedSettings) {
                this.advancedSettings = advancedSettings;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getAdvancedSettings}
             * @param advancedSettings the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder advancedSettings(com.aliyun.ros.cdk.slb.RosRule.AdvancedSettingsProperty advancedSettings) {
                this.advancedSettings = advancedSettings;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getDomain}
             * @param domain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(java.lang.String domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getDomain}
             * @param domain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getUrl}
             * @param url the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder url(java.lang.String url) {
                this.url = url;
                return this;
            }

            /**
             * Sets the value of {@link RuleListProperty#getUrl}
             * @param url the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder url(com.aliyun.ros.cdk.core.IResolvable url) {
                this.url = url;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuleListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuleListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RuleListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleListProperty {
            private final java.lang.Object ruleName;
            private final java.lang.Object vServerGroupId;
            private final java.lang.Object advancedSettings;
            private final java.lang.Object domain;
            private final java.lang.Object url;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vServerGroupId = software.amazon.jsii.Kernel.get(this, "vServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.advancedSettings = software.amazon.jsii.Kernel.get(this, "advancedSettings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.url = software.amazon.jsii.Kernel.get(this, "url", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
                this.vServerGroupId = java.util.Objects.requireNonNull(builder.vServerGroupId, "vServerGroupId is required");
                this.advancedSettings = builder.advancedSettings;
                this.domain = builder.domain;
                this.url = builder.url;
            }

            @Override
            public final java.lang.Object getRuleName() {
                return this.ruleName;
            }

            @Override
            public final java.lang.Object getVServerGroupId() {
                return this.vServerGroupId;
            }

            @Override
            public final java.lang.Object getAdvancedSettings() {
                return this.advancedSettings;
            }

            @Override
            public final java.lang.Object getDomain() {
                return this.domain;
            }

            @Override
            public final java.lang.Object getUrl() {
                return this.url;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ruleName", om.valueToTree(this.getRuleName()));
                data.set("vServerGroupId", om.valueToTree(this.getVServerGroupId()));
                if (this.getAdvancedSettings() != null) {
                    data.set("advancedSettings", om.valueToTree(this.getAdvancedSettings()));
                }
                if (this.getDomain() != null) {
                    data.set("domain", om.valueToTree(this.getDomain()));
                }
                if (this.getUrl() != null) {
                    data.set("url", om.valueToTree(this.getUrl()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosRule.RuleListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuleListProperty.Jsii$Proxy that = (RuleListProperty.Jsii$Proxy) o;

                if (!ruleName.equals(that.ruleName)) return false;
                if (!vServerGroupId.equals(that.vServerGroupId)) return false;
                if (this.advancedSettings != null ? !this.advancedSettings.equals(that.advancedSettings) : that.advancedSettings != null) return false;
                if (this.domain != null ? !this.domain.equals(that.domain) : that.domain != null) return false;
                return this.url != null ? this.url.equals(that.url) : that.url == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ruleName.hashCode();
                result = 31 * result + (this.vServerGroupId.hashCode());
                result = 31 * result + (this.advancedSettings != null ? this.advancedSettings.hashCode() : 0);
                result = 31 * result + (this.domain != null ? this.domain.hashCode() : 0);
                result = 31 * result + (this.url != null ? this.url.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.RosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.RosRule> {
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
        private final com.aliyun.ros.cdk.slb.RosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.RosRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleList This parameter is required.
         */
        public Builder ruleList(final com.aliyun.ros.cdk.core.IResolvable ruleList) {
            this.props.ruleList(ruleList);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleList This parameter is required.
         */
        public Builder ruleList(final java.util.List<? extends java.lang.Object> ruleList) {
            this.props.ruleList(ruleList);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerProtocol This parameter is required.
         */
        public Builder listenerProtocol(final java.lang.String listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerProtocol This parameter is required.
         */
        public Builder listenerProtocol(final com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.RosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.RosRule build() {
            return new com.aliyun.ros.cdk.slb.RosRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
