package com.aliyun.ros.cdk.nlb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::NLB::ServerGroup</code>, which is used to create a server group for a Network Load Balancer (NLB) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:12.296Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosServerGroup")
public class RosServerGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.nlb.RosServerGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.RosServerGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrServerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "serverGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServerGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serverGroupName", java.util.Objects.requireNonNull(value, "serverGroupName is required"));
    }

    /**
     */
    public void setServerGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serverGroupName", java.util.Objects.requireNonNull(value, "serverGroupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddressIpVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addressIpVersion", value);
    }

    /**
     */
    public void setAddressIpVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addressIpVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAnyPortEnabled() {
        return software.amazon.jsii.Kernel.get(this, "anyPortEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAnyPortEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "anyPortEnabled", value);
    }

    /**
     */
    public void setAnyPortEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "anyPortEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDrainEnabled() {
        return software.amazon.jsii.Kernel.get(this, "connectionDrainEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionDrainEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "connectionDrainEnabled", value);
    }

    /**
     */
    public void setConnectionDrainEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionDrainEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDrainTimeout() {
        return software.amazon.jsii.Kernel.get(this, "connectionDrainTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionDrainTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "connectionDrainTimeout", value);
    }

    /**
     */
    public void setConnectionDrainTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionDrainTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConfig", value);
    }

    /**
     */
    public void setHealthCheckConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.nlb.RosServerGroup.HealthCheckConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPersistenceEnabled() {
        return software.amazon.jsii.Kernel.get(this, "persistenceEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPersistenceEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "persistenceEnabled", value);
    }

    /**
     */
    public void setPersistenceEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "persistenceEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPersistenceTimeout() {
        return software.amazon.jsii.Kernel.get(this, "persistenceTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPersistenceTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "persistenceTimeout", value);
    }

    /**
     */
    public void setPersistenceTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "persistenceTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreserveClientIpEnabled() {
        return software.amazon.jsii.Kernel.get(this, "preserveClientIpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreserveClientIpEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "preserveClientIpEnabled", value);
    }

    /**
     */
    public void setPreserveClientIpEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preserveClientIpEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
        return software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocol", value);
    }

    /**
     */
    public void setProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduler(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scheduler", value);
    }

    /**
     */
    public void setScheduler(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduler", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupType() {
        return software.amazon.jsii.Kernel.get(this, "serverGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServerGroupType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serverGroupType", value);
    }

    /**
     */
    public void setServerGroupType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serverGroupType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServers() {
        return software.amazon.jsii.Kernel.get(this, "servers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "servers", value);
    }

    /**
     */
    public void setServers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.nlb.RosServerGroup.ServersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.nlb.RosServerGroup.ServersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "servers", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosServerGroup.HealthCheckConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HealthCheckConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HealthCheckConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getHttpCheckMethod();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConnectPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConnectTimeout() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckEnabled() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckUrl() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getUnhealthyThreshold() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HealthCheckConfigProperty> {
            java.lang.Object httpCheckMethod;
            java.lang.Object healthCheckConnectPort;
            java.lang.Object healthCheckConnectTimeout;
            java.lang.Object healthCheckDomain;
            java.lang.Object healthCheckEnabled;
            java.lang.Object healthCheckHttpCode;
            java.lang.Object healthCheckInterval;
            java.lang.Object healthCheckType;
            java.lang.Object healthCheckUrl;
            java.lang.Object healthyThreshold;
            java.lang.Object unhealthyThreshold;

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHttpCheckMethod}
             * @param httpCheckMethod the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCheckMethod(java.lang.String httpCheckMethod) {
                this.httpCheckMethod = httpCheckMethod;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHttpCheckMethod}
             * @param httpCheckMethod the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCheckMethod(com.aliyun.ros.cdk.core.IResolvable httpCheckMethod) {
                this.httpCheckMethod = httpCheckMethod;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckConnectPort}
             * @param healthCheckConnectPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConnectPort(java.lang.Number healthCheckConnectPort) {
                this.healthCheckConnectPort = healthCheckConnectPort;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckConnectPort}
             * @param healthCheckConnectPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConnectPort(com.aliyun.ros.cdk.core.IResolvable healthCheckConnectPort) {
                this.healthCheckConnectPort = healthCheckConnectPort;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckConnectTimeout}
             * @param healthCheckConnectTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConnectTimeout(java.lang.Number healthCheckConnectTimeout) {
                this.healthCheckConnectTimeout = healthCheckConnectTimeout;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckConnectTimeout}
             * @param healthCheckConnectTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckConnectTimeout(com.aliyun.ros.cdk.core.IResolvable healthCheckConnectTimeout) {
                this.healthCheckConnectTimeout = healthCheckConnectTimeout;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckDomain}
             * @param healthCheckDomain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckDomain(java.lang.String healthCheckDomain) {
                this.healthCheckDomain = healthCheckDomain;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckDomain}
             * @param healthCheckDomain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckDomain(com.aliyun.ros.cdk.core.IResolvable healthCheckDomain) {
                this.healthCheckDomain = healthCheckDomain;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckEnabled}
             * @param healthCheckEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckEnabled(java.lang.Boolean healthCheckEnabled) {
                this.healthCheckEnabled = healthCheckEnabled;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckEnabled}
             * @param healthCheckEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckEnabled(com.aliyun.ros.cdk.core.IResolvable healthCheckEnabled) {
                this.healthCheckEnabled = healthCheckEnabled;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckHttpCode}
             * @param healthCheckHttpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckHttpCode(com.aliyun.ros.cdk.core.IResolvable healthCheckHttpCode) {
                this.healthCheckHttpCode = healthCheckHttpCode;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckHttpCode}
             * @param healthCheckHttpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckHttpCode(java.util.List<? extends java.lang.Object> healthCheckHttpCode) {
                this.healthCheckHttpCode = healthCheckHttpCode;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckInterval}
             * @param healthCheckInterval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckInterval(java.lang.Number healthCheckInterval) {
                this.healthCheckInterval = healthCheckInterval;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckInterval}
             * @param healthCheckInterval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckInterval(com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
                this.healthCheckInterval = healthCheckInterval;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckType}
             * @param healthCheckType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckType(java.lang.String healthCheckType) {
                this.healthCheckType = healthCheckType;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckType}
             * @param healthCheckType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckType(com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
                this.healthCheckType = healthCheckType;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckUrl}
             * @param healthCheckUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckUrl(java.lang.String healthCheckUrl) {
                this.healthCheckUrl = healthCheckUrl;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckUrl}
             * @param healthCheckUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckUrl(com.aliyun.ros.cdk.core.IResolvable healthCheckUrl) {
                this.healthCheckUrl = healthCheckUrl;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthyThreshold}
             * @param healthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthyThreshold(java.lang.Number healthyThreshold) {
                this.healthyThreshold = healthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthyThreshold}
             * @param healthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthyThreshold(com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
                this.healthyThreshold = healthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getUnhealthyThreshold}
             * @param unhealthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder unhealthyThreshold(java.lang.Number unhealthyThreshold) {
                this.unhealthyThreshold = unhealthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getUnhealthyThreshold}
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
             * @return a new instance of {@link HealthCheckConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HealthCheckConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HealthCheckConfigProperty {
            private final java.lang.Object httpCheckMethod;
            private final java.lang.Object healthCheckConnectPort;
            private final java.lang.Object healthCheckConnectTimeout;
            private final java.lang.Object healthCheckDomain;
            private final java.lang.Object healthCheckEnabled;
            private final java.lang.Object healthCheckHttpCode;
            private final java.lang.Object healthCheckInterval;
            private final java.lang.Object healthCheckType;
            private final java.lang.Object healthCheckUrl;
            private final java.lang.Object healthyThreshold;
            private final java.lang.Object unhealthyThreshold;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.httpCheckMethod = software.amazon.jsii.Kernel.get(this, "httpCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckConnectPort = software.amazon.jsii.Kernel.get(this, "healthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckConnectTimeout = software.amazon.jsii.Kernel.get(this, "healthCheckConnectTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckDomain = software.amazon.jsii.Kernel.get(this, "healthCheckDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckEnabled = software.amazon.jsii.Kernel.get(this, "healthCheckEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckHttpCode = software.amazon.jsii.Kernel.get(this, "healthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckInterval = software.amazon.jsii.Kernel.get(this, "healthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckType = software.amazon.jsii.Kernel.get(this, "healthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckUrl = software.amazon.jsii.Kernel.get(this, "healthCheckUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthyThreshold = software.amazon.jsii.Kernel.get(this, "healthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.unhealthyThreshold = software.amazon.jsii.Kernel.get(this, "unhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.httpCheckMethod = java.util.Objects.requireNonNull(builder.httpCheckMethod, "httpCheckMethod is required");
                this.healthCheckConnectPort = builder.healthCheckConnectPort;
                this.healthCheckConnectTimeout = builder.healthCheckConnectTimeout;
                this.healthCheckDomain = builder.healthCheckDomain;
                this.healthCheckEnabled = builder.healthCheckEnabled;
                this.healthCheckHttpCode = builder.healthCheckHttpCode;
                this.healthCheckInterval = builder.healthCheckInterval;
                this.healthCheckType = builder.healthCheckType;
                this.healthCheckUrl = builder.healthCheckUrl;
                this.healthyThreshold = builder.healthyThreshold;
                this.unhealthyThreshold = builder.unhealthyThreshold;
            }

            @Override
            public final java.lang.Object getHttpCheckMethod() {
                return this.httpCheckMethod;
            }

            @Override
            public final java.lang.Object getHealthCheckConnectPort() {
                return this.healthCheckConnectPort;
            }

            @Override
            public final java.lang.Object getHealthCheckConnectTimeout() {
                return this.healthCheckConnectTimeout;
            }

            @Override
            public final java.lang.Object getHealthCheckDomain() {
                return this.healthCheckDomain;
            }

            @Override
            public final java.lang.Object getHealthCheckEnabled() {
                return this.healthCheckEnabled;
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
            public final java.lang.Object getHealthCheckType() {
                return this.healthCheckType;
            }

            @Override
            public final java.lang.Object getHealthCheckUrl() {
                return this.healthCheckUrl;
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

                data.set("httpCheckMethod", om.valueToTree(this.getHttpCheckMethod()));
                if (this.getHealthCheckConnectPort() != null) {
                    data.set("healthCheckConnectPort", om.valueToTree(this.getHealthCheckConnectPort()));
                }
                if (this.getHealthCheckConnectTimeout() != null) {
                    data.set("healthCheckConnectTimeout", om.valueToTree(this.getHealthCheckConnectTimeout()));
                }
                if (this.getHealthCheckDomain() != null) {
                    data.set("healthCheckDomain", om.valueToTree(this.getHealthCheckDomain()));
                }
                if (this.getHealthCheckEnabled() != null) {
                    data.set("healthCheckEnabled", om.valueToTree(this.getHealthCheckEnabled()));
                }
                if (this.getHealthCheckHttpCode() != null) {
                    data.set("healthCheckHttpCode", om.valueToTree(this.getHealthCheckHttpCode()));
                }
                if (this.getHealthCheckInterval() != null) {
                    data.set("healthCheckInterval", om.valueToTree(this.getHealthCheckInterval()));
                }
                if (this.getHealthCheckType() != null) {
                    data.set("healthCheckType", om.valueToTree(this.getHealthCheckType()));
                }
                if (this.getHealthCheckUrl() != null) {
                    data.set("healthCheckUrl", om.valueToTree(this.getHealthCheckUrl()));
                }
                if (this.getHealthyThreshold() != null) {
                    data.set("healthyThreshold", om.valueToTree(this.getHealthyThreshold()));
                }
                if (this.getUnhealthyThreshold() != null) {
                    data.set("unhealthyThreshold", om.valueToTree(this.getUnhealthyThreshold()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosServerGroup.HealthCheckConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HealthCheckConfigProperty.Jsii$Proxy that = (HealthCheckConfigProperty.Jsii$Proxy) o;

                if (!httpCheckMethod.equals(that.httpCheckMethod)) return false;
                if (this.healthCheckConnectPort != null ? !this.healthCheckConnectPort.equals(that.healthCheckConnectPort) : that.healthCheckConnectPort != null) return false;
                if (this.healthCheckConnectTimeout != null ? !this.healthCheckConnectTimeout.equals(that.healthCheckConnectTimeout) : that.healthCheckConnectTimeout != null) return false;
                if (this.healthCheckDomain != null ? !this.healthCheckDomain.equals(that.healthCheckDomain) : that.healthCheckDomain != null) return false;
                if (this.healthCheckEnabled != null ? !this.healthCheckEnabled.equals(that.healthCheckEnabled) : that.healthCheckEnabled != null) return false;
                if (this.healthCheckHttpCode != null ? !this.healthCheckHttpCode.equals(that.healthCheckHttpCode) : that.healthCheckHttpCode != null) return false;
                if (this.healthCheckInterval != null ? !this.healthCheckInterval.equals(that.healthCheckInterval) : that.healthCheckInterval != null) return false;
                if (this.healthCheckType != null ? !this.healthCheckType.equals(that.healthCheckType) : that.healthCheckType != null) return false;
                if (this.healthCheckUrl != null ? !this.healthCheckUrl.equals(that.healthCheckUrl) : that.healthCheckUrl != null) return false;
                if (this.healthyThreshold != null ? !this.healthyThreshold.equals(that.healthyThreshold) : that.healthyThreshold != null) return false;
                return this.unhealthyThreshold != null ? this.unhealthyThreshold.equals(that.unhealthyThreshold) : that.unhealthyThreshold == null;
            }

            @Override
            public final int hashCode() {
                int result = this.httpCheckMethod.hashCode();
                result = 31 * result + (this.healthCheckConnectPort != null ? this.healthCheckConnectPort.hashCode() : 0);
                result = 31 * result + (this.healthCheckConnectTimeout != null ? this.healthCheckConnectTimeout.hashCode() : 0);
                result = 31 * result + (this.healthCheckDomain != null ? this.healthCheckDomain.hashCode() : 0);
                result = 31 * result + (this.healthCheckEnabled != null ? this.healthCheckEnabled.hashCode() : 0);
                result = 31 * result + (this.healthCheckHttpCode != null ? this.healthCheckHttpCode.hashCode() : 0);
                result = 31 * result + (this.healthCheckInterval != null ? this.healthCheckInterval.hashCode() : 0);
                result = 31 * result + (this.healthCheckType != null ? this.healthCheckType.hashCode() : 0);
                result = 31 * result + (this.healthCheckUrl != null ? this.healthCheckUrl.hashCode() : 0);
                result = 31 * result + (this.healthyThreshold != null ? this.healthyThreshold.hashCode() : 0);
                result = 31 * result + (this.unhealthyThreshold != null ? this.unhealthyThreshold.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosServerGroup.ServersProperty")
    @software.amazon.jsii.Jsii.Proxy(ServersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServerId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServerType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWeight() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServersProperty> {
            java.lang.Object serverId;
            java.lang.Object serverType;
            java.lang.Object description;
            java.lang.Object port;
            java.lang.Object serverIp;
            java.lang.Object weight;

            /**
             * Sets the value of {@link ServersProperty#getServerId}
             * @param serverId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverId(java.lang.String serverId) {
                this.serverId = serverId;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getServerId}
             * @param serverId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverId(com.aliyun.ros.cdk.core.IResolvable serverId) {
                this.serverId = serverId;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getServerType}
             * @param serverType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverType(java.lang.String serverType) {
                this.serverType = serverType;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getServerType}
             * @param serverType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverType(com.aliyun.ros.cdk.core.IResolvable serverType) {
                this.serverType = serverType;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getServerIp}
             * @param serverIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverIp(java.lang.String serverIp) {
                this.serverIp = serverIp;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getServerIp}
             * @param serverIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverIp(com.aliyun.ros.cdk.core.IResolvable serverIp) {
                this.serverIp = serverIp;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(java.lang.Number weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Sets the value of {@link ServersProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServersProperty {
            private final java.lang.Object serverId;
            private final java.lang.Object serverType;
            private final java.lang.Object description;
            private final java.lang.Object port;
            private final java.lang.Object serverIp;
            private final java.lang.Object weight;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverId = software.amazon.jsii.Kernel.get(this, "serverId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serverType = software.amazon.jsii.Kernel.get(this, "serverType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serverIp = software.amazon.jsii.Kernel.get(this, "serverIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverId = java.util.Objects.requireNonNull(builder.serverId, "serverId is required");
                this.serverType = java.util.Objects.requireNonNull(builder.serverType, "serverType is required");
                this.description = builder.description;
                this.port = builder.port;
                this.serverIp = builder.serverIp;
                this.weight = builder.weight;
            }

            @Override
            public final java.lang.Object getServerId() {
                return this.serverId;
            }

            @Override
            public final java.lang.Object getServerType() {
                return this.serverType;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getServerIp() {
                return this.serverIp;
            }

            @Override
            public final java.lang.Object getWeight() {
                return this.weight;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("serverId", om.valueToTree(this.getServerId()));
                data.set("serverType", om.valueToTree(this.getServerType()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getServerIp() != null) {
                    data.set("serverIp", om.valueToTree(this.getServerIp()));
                }
                if (this.getWeight() != null) {
                    data.set("weight", om.valueToTree(this.getWeight()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosServerGroup.ServersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServersProperty.Jsii$Proxy that = (ServersProperty.Jsii$Proxy) o;

                if (!serverId.equals(that.serverId)) return false;
                if (!serverType.equals(that.serverType)) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.serverIp != null ? !this.serverIp.equals(that.serverIp) : that.serverIp != null) return false;
                return this.weight != null ? this.weight.equals(that.weight) : that.weight == null;
            }

            @Override
            public final int hashCode() {
                int result = this.serverId.hashCode();
                result = 31 * result + (this.serverType.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.serverIp != null ? this.serverIp.hashCode() : 0);
                result = 31 * result + (this.weight != null ? this.weight.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosServerGroup.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosServerGroup.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.RosServerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.RosServerGroup> {
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
        private final com.aliyun.ros.cdk.nlb.RosServerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlb.RosServerGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param serverGroupName This parameter is required.
         */
        public Builder serverGroupName(final java.lang.String serverGroupName) {
            this.props.serverGroupName(serverGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param serverGroupName This parameter is required.
         */
        public Builder serverGroupName(final com.aliyun.ros.cdk.core.IResolvable serverGroupName) {
            this.props.serverGroupName(serverGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param addressIpVersion This parameter is required.
         */
        public Builder addressIpVersion(final java.lang.String addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param addressIpVersion This parameter is required.
         */
        public Builder addressIpVersion(final com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.props.addressIpVersion(addressIpVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param anyPortEnabled This parameter is required.
         */
        public Builder anyPortEnabled(final java.lang.Boolean anyPortEnabled) {
            this.props.anyPortEnabled(anyPortEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param anyPortEnabled This parameter is required.
         */
        public Builder anyPortEnabled(final com.aliyun.ros.cdk.core.IResolvable anyPortEnabled) {
            this.props.anyPortEnabled(anyPortEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionDrainEnabled This parameter is required.
         */
        public Builder connectionDrainEnabled(final java.lang.Boolean connectionDrainEnabled) {
            this.props.connectionDrainEnabled(connectionDrainEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionDrainEnabled This parameter is required.
         */
        public Builder connectionDrainEnabled(final com.aliyun.ros.cdk.core.IResolvable connectionDrainEnabled) {
            this.props.connectionDrainEnabled(connectionDrainEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionDrainTimeout This parameter is required.
         */
        public Builder connectionDrainTimeout(final java.lang.Number connectionDrainTimeout) {
            this.props.connectionDrainTimeout(connectionDrainTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionDrainTimeout This parameter is required.
         */
        public Builder connectionDrainTimeout(final com.aliyun.ros.cdk.core.IResolvable connectionDrainTimeout) {
            this.props.connectionDrainTimeout(connectionDrainTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckConfig This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckConfig This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.nlb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param persistenceEnabled This parameter is required.
         */
        public Builder persistenceEnabled(final java.lang.Boolean persistenceEnabled) {
            this.props.persistenceEnabled(persistenceEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param persistenceEnabled This parameter is required.
         */
        public Builder persistenceEnabled(final com.aliyun.ros.cdk.core.IResolvable persistenceEnabled) {
            this.props.persistenceEnabled(persistenceEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param persistenceTimeout This parameter is required.
         */
        public Builder persistenceTimeout(final java.lang.Number persistenceTimeout) {
            this.props.persistenceTimeout(persistenceTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param persistenceTimeout This parameter is required.
         */
        public Builder persistenceTimeout(final com.aliyun.ros.cdk.core.IResolvable persistenceTimeout) {
            this.props.persistenceTimeout(persistenceTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param preserveClientIpEnabled This parameter is required.
         */
        public Builder preserveClientIpEnabled(final java.lang.Boolean preserveClientIpEnabled) {
            this.props.preserveClientIpEnabled(preserveClientIpEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param preserveClientIpEnabled This parameter is required.
         */
        public Builder preserveClientIpEnabled(final com.aliyun.ros.cdk.core.IResolvable preserveClientIpEnabled) {
            this.props.preserveClientIpEnabled(preserveClientIpEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduler This parameter is required.
         */
        public Builder scheduler(final java.lang.String scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduler This parameter is required.
         */
        public Builder scheduler(final com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }

        /**
         * @return {@code this}
         * @param serverGroupType This parameter is required.
         */
        public Builder serverGroupType(final java.lang.String serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param serverGroupType This parameter is required.
         */
        public Builder serverGroupType(final com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param servers This parameter is required.
         */
        public Builder servers(final com.aliyun.ros.cdk.core.IResolvable servers) {
            this.props.servers(servers);
            return this;
        }
        /**
         * @return {@code this}
         * @param servers This parameter is required.
         */
        public Builder servers(final java.util.List<? extends java.lang.Object> servers) {
            this.props.servers(servers);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.RosServerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.RosServerGroup build() {
            return new com.aliyun.ros.cdk.nlb.RosServerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
