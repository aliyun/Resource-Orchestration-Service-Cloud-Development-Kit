package com.aliyun.ros.cdk.alb;

/**
 * A ROS template type:  `ALIYUN::ALB::ServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:40.323Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosServerGroup")
public class RosServerGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.alb.RosServerGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ALB::ServerGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RosServerGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckConfig() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConfig", java.util.Objects.requireNonNull(value, "healthCheckConfig is required"));
    }

    /**
     */
    public void setHealthCheckConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RosServerGroup.HealthCheckConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConfig", java.util.Objects.requireNonNull(value, "healthCheckConfig is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getStickySessionConfig() {
        return software.amazon.jsii.Kernel.get(this, "stickySessionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStickySessionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "stickySessionConfig", value);
    }

    /**
     */
    public void setStickySessionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.alb.RosServerGroup.StickySessionConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "stickySessionConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HealthCheckConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HealthCheckConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckEnabled();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckCodes() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHttpVersion() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckProtocol() {
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
            java.lang.Object healthCheckEnabled;
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
            java.lang.Object unhealthyThreshold;

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckEnabled}
             * @param healthCheckEnabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckEnabled(java.lang.Boolean healthCheckEnabled) {
                this.healthCheckEnabled = healthCheckEnabled;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckEnabled}
             * @param healthCheckEnabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckEnabled(com.aliyun.ros.cdk.core.IResolvable healthCheckEnabled) {
                this.healthCheckEnabled = healthCheckEnabled;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckCodes}
             * @param healthCheckCodes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckCodes(com.aliyun.ros.cdk.core.IResolvable healthCheckCodes) {
                this.healthCheckCodes = healthCheckCodes;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckCodes}
             * @param healthCheckCodes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckCodes(java.util.List<? extends java.lang.Object> healthCheckCodes) {
                this.healthCheckCodes = healthCheckCodes;
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
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckHost}
             * @param healthCheckHost the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckHost(java.lang.String healthCheckHost) {
                this.healthCheckHost = healthCheckHost;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckHost}
             * @param healthCheckHost the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckHost(com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
                this.healthCheckHost = healthCheckHost;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckHttpVersion}
             * @param healthCheckHttpVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckHttpVersion(java.lang.String healthCheckHttpVersion) {
                this.healthCheckHttpVersion = healthCheckHttpVersion;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckHttpVersion}
             * @param healthCheckHttpVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckHttpVersion(com.aliyun.ros.cdk.core.IResolvable healthCheckHttpVersion) {
                this.healthCheckHttpVersion = healthCheckHttpVersion;
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
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckMethod}
             * @param healthCheckMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckMethod(java.lang.String healthCheckMethod) {
                this.healthCheckMethod = healthCheckMethod;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckMethod}
             * @param healthCheckMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckMethod(com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
                this.healthCheckMethod = healthCheckMethod;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckPath}
             * @param healthCheckPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckPath(java.lang.String healthCheckPath) {
                this.healthCheckPath = healthCheckPath;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckPath}
             * @param healthCheckPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckPath(com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
                this.healthCheckPath = healthCheckPath;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckProtocol}
             * @param healthCheckProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckProtocol(java.lang.String healthCheckProtocol) {
                this.healthCheckProtocol = healthCheckProtocol;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckProtocol}
             * @param healthCheckProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckProtocol(com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
                this.healthCheckProtocol = healthCheckProtocol;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckTimeout}
             * @param healthCheckTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckTimeout(java.lang.Number healthCheckTimeout) {
                this.healthCheckTimeout = healthCheckTimeout;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getHealthCheckTimeout}
             * @param healthCheckTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckTimeout(com.aliyun.ros.cdk.core.IResolvable healthCheckTimeout) {
                this.healthCheckTimeout = healthCheckTimeout;
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
            private final java.lang.Object healthCheckEnabled;
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
            private final java.lang.Object unhealthyThreshold;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.healthCheckEnabled = software.amazon.jsii.Kernel.get(this, "healthCheckEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
                this.unhealthyThreshold = software.amazon.jsii.Kernel.get(this, "unhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.healthCheckEnabled = java.util.Objects.requireNonNull(builder.healthCheckEnabled, "healthCheckEnabled is required");
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
                this.unhealthyThreshold = builder.unhealthyThreshold;
            }

            @Override
            public final java.lang.Object getHealthCheckEnabled() {
                return this.healthCheckEnabled;
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
            public final java.lang.Object getUnhealthyThreshold() {
                return this.unhealthyThreshold;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("healthCheckEnabled", om.valueToTree(this.getHealthCheckEnabled()));
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
                if (this.getUnhealthyThreshold() != null) {
                    data.set("unhealthyThreshold", om.valueToTree(this.getUnhealthyThreshold()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty"));
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

                if (!healthCheckEnabled.equals(that.healthCheckEnabled)) return false;
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
                return this.unhealthyThreshold != null ? this.unhealthyThreshold.equals(that.unhealthyThreshold) : that.unhealthyThreshold == null;
            }

            @Override
            public final int hashCode() {
                int result = this.healthCheckEnabled.hashCode();
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
                result = 31 * result + (this.unhealthyThreshold != null ? this.unhealthyThreshold.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(StickySessionConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface StickySessionConfigProperty extends software.amazon.jsii.JsiiSerializable {

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
        default @org.jetbrains.annotations.Nullable java.lang.Object getStickySessionEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStickySessionType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link StickySessionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link StickySessionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<StickySessionConfigProperty> {
            java.lang.Object cookie;
            java.lang.Object cookieTimeout;
            java.lang.Object stickySessionEnabled;
            java.lang.Object stickySessionType;

            /**
             * Sets the value of {@link StickySessionConfigProperty#getCookie}
             * @param cookie the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookie(java.lang.String cookie) {
                this.cookie = cookie;
                return this;
            }

            /**
             * Sets the value of {@link StickySessionConfigProperty#getCookie}
             * @param cookie the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookie(com.aliyun.ros.cdk.core.IResolvable cookie) {
                this.cookie = cookie;
                return this;
            }

            /**
             * Sets the value of {@link StickySessionConfigProperty#getCookieTimeout}
             * @param cookieTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieTimeout(java.lang.Number cookieTimeout) {
                this.cookieTimeout = cookieTimeout;
                return this;
            }

            /**
             * Sets the value of {@link StickySessionConfigProperty#getCookieTimeout}
             * @param cookieTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieTimeout(com.aliyun.ros.cdk.core.IResolvable cookieTimeout) {
                this.cookieTimeout = cookieTimeout;
                return this;
            }

            /**
             * Sets the value of {@link StickySessionConfigProperty#getStickySessionEnabled}
             * @param stickySessionEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySessionEnabled(java.lang.Boolean stickySessionEnabled) {
                this.stickySessionEnabled = stickySessionEnabled;
                return this;
            }

            /**
             * Sets the value of {@link StickySessionConfigProperty#getStickySessionEnabled}
             * @param stickySessionEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySessionEnabled(com.aliyun.ros.cdk.core.IResolvable stickySessionEnabled) {
                this.stickySessionEnabled = stickySessionEnabled;
                return this;
            }

            /**
             * Sets the value of {@link StickySessionConfigProperty#getStickySessionType}
             * @param stickySessionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySessionType(java.lang.String stickySessionType) {
                this.stickySessionType = stickySessionType;
                return this;
            }

            /**
             * Sets the value of {@link StickySessionConfigProperty#getStickySessionType}
             * @param stickySessionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySessionType(com.aliyun.ros.cdk.core.IResolvable stickySessionType) {
                this.stickySessionType = stickySessionType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link StickySessionConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public StickySessionConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link StickySessionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StickySessionConfigProperty {
            private final java.lang.Object cookie;
            private final java.lang.Object cookieTimeout;
            private final java.lang.Object stickySessionEnabled;
            private final java.lang.Object stickySessionType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cookie = software.amazon.jsii.Kernel.get(this, "cookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cookieTimeout = software.amazon.jsii.Kernel.get(this, "cookieTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stickySessionEnabled = software.amazon.jsii.Kernel.get(this, "stickySessionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stickySessionType = software.amazon.jsii.Kernel.get(this, "stickySessionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cookie = builder.cookie;
                this.cookieTimeout = builder.cookieTimeout;
                this.stickySessionEnabled = builder.stickySessionEnabled;
                this.stickySessionType = builder.stickySessionType;
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
            public final java.lang.Object getStickySessionEnabled() {
                return this.stickySessionEnabled;
            }

            @Override
            public final java.lang.Object getStickySessionType() {
                return this.stickySessionType;
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
                if (this.getStickySessionEnabled() != null) {
                    data.set("stickySessionEnabled", om.valueToTree(this.getStickySessionEnabled()));
                }
                if (this.getStickySessionType() != null) {
                    data.set("stickySessionType", om.valueToTree(this.getStickySessionType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                StickySessionConfigProperty.Jsii$Proxy that = (StickySessionConfigProperty.Jsii$Proxy) o;

                if (this.cookie != null ? !this.cookie.equals(that.cookie) : that.cookie != null) return false;
                if (this.cookieTimeout != null ? !this.cookieTimeout.equals(that.cookieTimeout) : that.cookieTimeout != null) return false;
                if (this.stickySessionEnabled != null ? !this.stickySessionEnabled.equals(that.stickySessionEnabled) : that.stickySessionEnabled != null) return false;
                return this.stickySessionType != null ? this.stickySessionType.equals(that.stickySessionType) : that.stickySessionType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cookie != null ? this.cookie.hashCode() : 0;
                result = 31 * result + (this.cookieTimeout != null ? this.cookieTimeout.hashCode() : 0);
                result = 31 * result + (this.stickySessionEnabled != null ? this.stickySessionEnabled.hashCode() : 0);
                result = 31 * result + (this.stickySessionType != null ? this.stickySessionType.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.RosServerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.RosServerGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.alb.RosServerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.RosServerGroupProps.Builder();
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
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.alb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
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
         * @param stickySessionConfig This parameter is required.
         */
        public Builder stickySessionConfig(final com.aliyun.ros.cdk.core.IResolvable stickySessionConfig) {
            this.props.stickySessionConfig(stickySessionConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param stickySessionConfig This parameter is required.
         */
        public Builder stickySessionConfig(final com.aliyun.ros.cdk.alb.RosServerGroup.StickySessionConfigProperty stickySessionConfig) {
            this.props.stickySessionConfig(stickySessionConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.alb.RosServerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.RosServerGroup build() {
            return new com.aliyun.ros.cdk.alb.RosServerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
