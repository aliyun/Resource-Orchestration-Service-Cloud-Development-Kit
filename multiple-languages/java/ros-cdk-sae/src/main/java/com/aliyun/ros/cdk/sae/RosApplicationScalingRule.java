package com.aliyun.ros.cdk.sae;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SAE::ApplicationScalingRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.422Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplicationScalingRule")
public class RosApplicationScalingRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApplicationScalingRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApplicationScalingRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sae.RosApplicationScalingRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApplicationScalingRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.RosApplicationScalingRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppId() {
        return software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appId", java.util.Objects.requireNonNull(value, "appId is required"));
    }

    /**
     */
    public void setAppId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appId", java.util.Objects.requireNonNull(value, "appId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingRuleName() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleName", java.util.Objects.requireNonNull(value, "scalingRuleName is required"));
    }

    /**
     */
    public void setScalingRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleName", java.util.Objects.requireNonNull(value, "scalingRuleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingRuleType() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleType", java.util.Objects.requireNonNull(value, "scalingRuleType is required"));
    }

    /**
     */
    public void setScalingRuleType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleType", java.util.Objects.requireNonNull(value, "scalingRuleType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinReadyInstanceRatio() {
        return software.amazon.jsii.Kernel.get(this, "minReadyInstanceRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinReadyInstanceRatio(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minReadyInstanceRatio", value);
    }

    /**
     */
    public void setMinReadyInstanceRatio(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minReadyInstanceRatio", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinReadyInstances() {
        return software.amazon.jsii.Kernel.get(this, "minReadyInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinReadyInstances(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minReadyInstances", value);
    }

    /**
     */
    public void setMinReadyInstances(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minReadyInstances", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleEnable", value);
    }

    /**
     */
    public void setScalingRuleEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleMetric() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleMetric", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleMetric(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleMetric", value);
    }

    /**
     */
    public void setScalingRuleMetric(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScalingRuleMetricProperty value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleMetric", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleTimer() {
        return software.amazon.jsii.Kernel.get(this, "scalingRuleTimer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingRuleTimer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleTimer", value);
    }

    /**
     */
    public void setScalingRuleTimer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScalingRuleTimerProperty value) {
        software.amazon.jsii.Kernel.set(this, "scalingRuleTimer", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplicationScalingRule.MetricsProperty")
    @software.amazon.jsii.Jsii.Proxy(MetricsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MetricsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMetricTargetAverageUtilization();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMetricType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbLogstore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlbProject() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVport() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MetricsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MetricsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MetricsProperty> {
            java.lang.Object metricTargetAverageUtilization;
            java.lang.Object metricType;
            java.lang.Object slbId;
            java.lang.Object slbLogstore;
            java.lang.Object slbProject;
            java.lang.Object vport;

            /**
             * Sets the value of {@link MetricsProperty#getMetricTargetAverageUtilization}
             * @param metricTargetAverageUtilization the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricTargetAverageUtilization(java.lang.Number metricTargetAverageUtilization) {
                this.metricTargetAverageUtilization = metricTargetAverageUtilization;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getMetricTargetAverageUtilization}
             * @param metricTargetAverageUtilization the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricTargetAverageUtilization(com.aliyun.ros.cdk.core.IResolvable metricTargetAverageUtilization) {
                this.metricTargetAverageUtilization = metricTargetAverageUtilization;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getMetricType}
             * @param metricType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricType(java.lang.String metricType) {
                this.metricType = metricType;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getMetricType}
             * @param metricType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricType(com.aliyun.ros.cdk.core.IResolvable metricType) {
                this.metricType = metricType;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getSlbId}
             * @param slbId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbId(java.lang.String slbId) {
                this.slbId = slbId;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getSlbId}
             * @param slbId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbId(com.aliyun.ros.cdk.core.IResolvable slbId) {
                this.slbId = slbId;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getSlbLogstore}
             * @param slbLogstore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbLogstore(java.lang.String slbLogstore) {
                this.slbLogstore = slbLogstore;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getSlbLogstore}
             * @param slbLogstore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbLogstore(com.aliyun.ros.cdk.core.IResolvable slbLogstore) {
                this.slbLogstore = slbLogstore;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getSlbProject}
             * @param slbProject the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbProject(java.lang.String slbProject) {
                this.slbProject = slbProject;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getSlbProject}
             * @param slbProject the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slbProject(com.aliyun.ros.cdk.core.IResolvable slbProject) {
                this.slbProject = slbProject;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getVport}
             * @param vport the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vport(java.lang.String vport) {
                this.vport = vport;
                return this;
            }

            /**
             * Sets the value of {@link MetricsProperty#getVport}
             * @param vport the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vport(com.aliyun.ros.cdk.core.IResolvable vport) {
                this.vport = vport;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MetricsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MetricsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MetricsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetricsProperty {
            private final java.lang.Object metricTargetAverageUtilization;
            private final java.lang.Object metricType;
            private final java.lang.Object slbId;
            private final java.lang.Object slbLogstore;
            private final java.lang.Object slbProject;
            private final java.lang.Object vport;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.metricTargetAverageUtilization = software.amazon.jsii.Kernel.get(this, "metricTargetAverageUtilization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.metricType = software.amazon.jsii.Kernel.get(this, "metricType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbId = software.amazon.jsii.Kernel.get(this, "slbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbLogstore = software.amazon.jsii.Kernel.get(this, "slbLogstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slbProject = software.amazon.jsii.Kernel.get(this, "slbProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vport = software.amazon.jsii.Kernel.get(this, "vport", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.metricTargetAverageUtilization = java.util.Objects.requireNonNull(builder.metricTargetAverageUtilization, "metricTargetAverageUtilization is required");
                this.metricType = java.util.Objects.requireNonNull(builder.metricType, "metricType is required");
                this.slbId = builder.slbId;
                this.slbLogstore = builder.slbLogstore;
                this.slbProject = builder.slbProject;
                this.vport = builder.vport;
            }

            @Override
            public final java.lang.Object getMetricTargetAverageUtilization() {
                return this.metricTargetAverageUtilization;
            }

            @Override
            public final java.lang.Object getMetricType() {
                return this.metricType;
            }

            @Override
            public final java.lang.Object getSlbId() {
                return this.slbId;
            }

            @Override
            public final java.lang.Object getSlbLogstore() {
                return this.slbLogstore;
            }

            @Override
            public final java.lang.Object getSlbProject() {
                return this.slbProject;
            }

            @Override
            public final java.lang.Object getVport() {
                return this.vport;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("metricTargetAverageUtilization", om.valueToTree(this.getMetricTargetAverageUtilization()));
                data.set("metricType", om.valueToTree(this.getMetricType()));
                if (this.getSlbId() != null) {
                    data.set("slbId", om.valueToTree(this.getSlbId()));
                }
                if (this.getSlbLogstore() != null) {
                    data.set("slbLogstore", om.valueToTree(this.getSlbLogstore()));
                }
                if (this.getSlbProject() != null) {
                    data.set("slbProject", om.valueToTree(this.getSlbProject()));
                }
                if (this.getVport() != null) {
                    data.set("vport", om.valueToTree(this.getVport()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplicationScalingRule.MetricsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MetricsProperty.Jsii$Proxy that = (MetricsProperty.Jsii$Proxy) o;

                if (!metricTargetAverageUtilization.equals(that.metricTargetAverageUtilization)) return false;
                if (!metricType.equals(that.metricType)) return false;
                if (this.slbId != null ? !this.slbId.equals(that.slbId) : that.slbId != null) return false;
                if (this.slbLogstore != null ? !this.slbLogstore.equals(that.slbLogstore) : that.slbLogstore != null) return false;
                if (this.slbProject != null ? !this.slbProject.equals(that.slbProject) : that.slbProject != null) return false;
                return this.vport != null ? this.vport.equals(that.vport) : that.vport == null;
            }

            @Override
            public final int hashCode() {
                int result = this.metricTargetAverageUtilization.hashCode();
                result = 31 * result + (this.metricType.hashCode());
                result = 31 * result + (this.slbId != null ? this.slbId.hashCode() : 0);
                result = 31 * result + (this.slbLogstore != null ? this.slbLogstore.hashCode() : 0);
                result = 31 * result + (this.slbProject != null ? this.slbProject.hashCode() : 0);
                result = 31 * result + (this.vport != null ? this.vport.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleDownRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(ScaleDownRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScaleDownRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStep();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStabilizationWindowSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScaleDownRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScaleDownRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScaleDownRulesProperty> {
            java.lang.Object step;
            java.lang.Object disabled;
            java.lang.Object stabilizationWindowSeconds;

            /**
             * Sets the value of {@link ScaleDownRulesProperty#getStep}
             * @param step the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder step(java.lang.String step) {
                this.step = step;
                return this;
            }

            /**
             * Sets the value of {@link ScaleDownRulesProperty#getStep}
             * @param step the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder step(com.aliyun.ros.cdk.core.IResolvable step) {
                this.step = step;
                return this;
            }

            /**
             * Sets the value of {@link ScaleDownRulesProperty#getDisabled}
             * @param disabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder disabled(java.lang.Boolean disabled) {
                this.disabled = disabled;
                return this;
            }

            /**
             * Sets the value of {@link ScaleDownRulesProperty#getDisabled}
             * @param disabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder disabled(com.aliyun.ros.cdk.core.IResolvable disabled) {
                this.disabled = disabled;
                return this;
            }

            /**
             * Sets the value of {@link ScaleDownRulesProperty#getStabilizationWindowSeconds}
             * @param stabilizationWindowSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stabilizationWindowSeconds(java.lang.Number stabilizationWindowSeconds) {
                this.stabilizationWindowSeconds = stabilizationWindowSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ScaleDownRulesProperty#getStabilizationWindowSeconds}
             * @param stabilizationWindowSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stabilizationWindowSeconds(com.aliyun.ros.cdk.core.IResolvable stabilizationWindowSeconds) {
                this.stabilizationWindowSeconds = stabilizationWindowSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScaleDownRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScaleDownRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScaleDownRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScaleDownRulesProperty {
            private final java.lang.Object step;
            private final java.lang.Object disabled;
            private final java.lang.Object stabilizationWindowSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.step = software.amazon.jsii.Kernel.get(this, "step", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.disabled = software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stabilizationWindowSeconds = software.amazon.jsii.Kernel.get(this, "stabilizationWindowSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.step = java.util.Objects.requireNonNull(builder.step, "step is required");
                this.disabled = builder.disabled;
                this.stabilizationWindowSeconds = builder.stabilizationWindowSeconds;
            }

            @Override
            public final java.lang.Object getStep() {
                return this.step;
            }

            @Override
            public final java.lang.Object getDisabled() {
                return this.disabled;
            }

            @Override
            public final java.lang.Object getStabilizationWindowSeconds() {
                return this.stabilizationWindowSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("step", om.valueToTree(this.getStep()));
                if (this.getDisabled() != null) {
                    data.set("disabled", om.valueToTree(this.getDisabled()));
                }
                if (this.getStabilizationWindowSeconds() != null) {
                    data.set("stabilizationWindowSeconds", om.valueToTree(this.getStabilizationWindowSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleDownRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScaleDownRulesProperty.Jsii$Proxy that = (ScaleDownRulesProperty.Jsii$Proxy) o;

                if (!step.equals(that.step)) return false;
                if (this.disabled != null ? !this.disabled.equals(that.disabled) : that.disabled != null) return false;
                return this.stabilizationWindowSeconds != null ? this.stabilizationWindowSeconds.equals(that.stabilizationWindowSeconds) : that.stabilizationWindowSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.step.hashCode();
                result = 31 * result + (this.disabled != null ? this.disabled.hashCode() : 0);
                result = 31 * result + (this.stabilizationWindowSeconds != null ? this.stabilizationWindowSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleUpRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(ScaleUpRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScaleUpRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStep();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDisabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStabilizationWindowSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScaleUpRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScaleUpRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScaleUpRulesProperty> {
            java.lang.Object step;
            java.lang.Object disabled;
            java.lang.Object stabilizationWindowSeconds;

            /**
             * Sets the value of {@link ScaleUpRulesProperty#getStep}
             * @param step the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder step(java.lang.String step) {
                this.step = step;
                return this;
            }

            /**
             * Sets the value of {@link ScaleUpRulesProperty#getStep}
             * @param step the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder step(com.aliyun.ros.cdk.core.IResolvable step) {
                this.step = step;
                return this;
            }

            /**
             * Sets the value of {@link ScaleUpRulesProperty#getDisabled}
             * @param disabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder disabled(java.lang.Boolean disabled) {
                this.disabled = disabled;
                return this;
            }

            /**
             * Sets the value of {@link ScaleUpRulesProperty#getDisabled}
             * @param disabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder disabled(com.aliyun.ros.cdk.core.IResolvable disabled) {
                this.disabled = disabled;
                return this;
            }

            /**
             * Sets the value of {@link ScaleUpRulesProperty#getStabilizationWindowSeconds}
             * @param stabilizationWindowSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stabilizationWindowSeconds(java.lang.Number stabilizationWindowSeconds) {
                this.stabilizationWindowSeconds = stabilizationWindowSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ScaleUpRulesProperty#getStabilizationWindowSeconds}
             * @param stabilizationWindowSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stabilizationWindowSeconds(com.aliyun.ros.cdk.core.IResolvable stabilizationWindowSeconds) {
                this.stabilizationWindowSeconds = stabilizationWindowSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScaleUpRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScaleUpRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScaleUpRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScaleUpRulesProperty {
            private final java.lang.Object step;
            private final java.lang.Object disabled;
            private final java.lang.Object stabilizationWindowSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.step = software.amazon.jsii.Kernel.get(this, "step", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.disabled = software.amazon.jsii.Kernel.get(this, "disabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stabilizationWindowSeconds = software.amazon.jsii.Kernel.get(this, "stabilizationWindowSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.step = java.util.Objects.requireNonNull(builder.step, "step is required");
                this.disabled = builder.disabled;
                this.stabilizationWindowSeconds = builder.stabilizationWindowSeconds;
            }

            @Override
            public final java.lang.Object getStep() {
                return this.step;
            }

            @Override
            public final java.lang.Object getDisabled() {
                return this.disabled;
            }

            @Override
            public final java.lang.Object getStabilizationWindowSeconds() {
                return this.stabilizationWindowSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("step", om.valueToTree(this.getStep()));
                if (this.getDisabled() != null) {
                    data.set("disabled", om.valueToTree(this.getDisabled()));
                }
                if (this.getStabilizationWindowSeconds() != null) {
                    data.set("stabilizationWindowSeconds", om.valueToTree(this.getStabilizationWindowSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleUpRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScaleUpRulesProperty.Jsii$Proxy that = (ScaleUpRulesProperty.Jsii$Proxy) o;

                if (!step.equals(that.step)) return false;
                if (this.disabled != null ? !this.disabled.equals(that.disabled) : that.disabled != null) return false;
                return this.stabilizationWindowSeconds != null ? this.stabilizationWindowSeconds.equals(that.stabilizationWindowSeconds) : that.stabilizationWindowSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.step.hashCode();
                result = 31 * result + (this.disabled != null ? this.disabled.hashCode() : 0);
                result = 31 * result + (this.stabilizationWindowSeconds != null ? this.stabilizationWindowSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty")
    @software.amazon.jsii.Jsii.Proxy(ScalingRuleMetricProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScalingRuleMetricProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMaxReplicas();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMetrics();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMinReplicas();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScaleDownRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScaleUpRules() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScalingRuleMetricProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScalingRuleMetricProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScalingRuleMetricProperty> {
            java.lang.Object maxReplicas;
            java.lang.Object metrics;
            java.lang.Object minReplicas;
            java.lang.Object scaleDownRules;
            java.lang.Object scaleUpRules;

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getMaxReplicas}
             * @param maxReplicas the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxReplicas(java.lang.Number maxReplicas) {
                this.maxReplicas = maxReplicas;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getMaxReplicas}
             * @param maxReplicas the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxReplicas(com.aliyun.ros.cdk.core.IResolvable maxReplicas) {
                this.maxReplicas = maxReplicas;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getMetrics}
             * @param metrics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metrics(com.aliyun.ros.cdk.core.IResolvable metrics) {
                this.metrics = metrics;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getMetrics}
             * @param metrics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metrics(java.util.List<? extends java.lang.Object> metrics) {
                this.metrics = metrics;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getMinReplicas}
             * @param minReplicas the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minReplicas(java.lang.Number minReplicas) {
                this.minReplicas = minReplicas;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getMinReplicas}
             * @param minReplicas the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minReplicas(com.aliyun.ros.cdk.core.IResolvable minReplicas) {
                this.minReplicas = minReplicas;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getScaleDownRules}
             * @param scaleDownRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scaleDownRules(com.aliyun.ros.cdk.core.IResolvable scaleDownRules) {
                this.scaleDownRules = scaleDownRules;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getScaleDownRules}
             * @param scaleDownRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scaleDownRules(com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScaleDownRulesProperty scaleDownRules) {
                this.scaleDownRules = scaleDownRules;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getScaleUpRules}
             * @param scaleUpRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scaleUpRules(com.aliyun.ros.cdk.core.IResolvable scaleUpRules) {
                this.scaleUpRules = scaleUpRules;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleMetricProperty#getScaleUpRules}
             * @param scaleUpRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scaleUpRules(com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScaleUpRulesProperty scaleUpRules) {
                this.scaleUpRules = scaleUpRules;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScalingRuleMetricProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScalingRuleMetricProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScalingRuleMetricProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingRuleMetricProperty {
            private final java.lang.Object maxReplicas;
            private final java.lang.Object metrics;
            private final java.lang.Object minReplicas;
            private final java.lang.Object scaleDownRules;
            private final java.lang.Object scaleUpRules;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.maxReplicas = software.amazon.jsii.Kernel.get(this, "maxReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.metrics = software.amazon.jsii.Kernel.get(this, "metrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minReplicas = software.amazon.jsii.Kernel.get(this, "minReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scaleDownRules = software.amazon.jsii.Kernel.get(this, "scaleDownRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scaleUpRules = software.amazon.jsii.Kernel.get(this, "scaleUpRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.maxReplicas = java.util.Objects.requireNonNull(builder.maxReplicas, "maxReplicas is required");
                this.metrics = java.util.Objects.requireNonNull(builder.metrics, "metrics is required");
                this.minReplicas = java.util.Objects.requireNonNull(builder.minReplicas, "minReplicas is required");
                this.scaleDownRules = builder.scaleDownRules;
                this.scaleUpRules = builder.scaleUpRules;
            }

            @Override
            public final java.lang.Object getMaxReplicas() {
                return this.maxReplicas;
            }

            @Override
            public final java.lang.Object getMetrics() {
                return this.metrics;
            }

            @Override
            public final java.lang.Object getMinReplicas() {
                return this.minReplicas;
            }

            @Override
            public final java.lang.Object getScaleDownRules() {
                return this.scaleDownRules;
            }

            @Override
            public final java.lang.Object getScaleUpRules() {
                return this.scaleUpRules;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("maxReplicas", om.valueToTree(this.getMaxReplicas()));
                data.set("metrics", om.valueToTree(this.getMetrics()));
                data.set("minReplicas", om.valueToTree(this.getMinReplicas()));
                if (this.getScaleDownRules() != null) {
                    data.set("scaleDownRules", om.valueToTree(this.getScaleDownRules()));
                }
                if (this.getScaleUpRules() != null) {
                    data.set("scaleUpRules", om.valueToTree(this.getScaleUpRules()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScalingRuleMetricProperty.Jsii$Proxy that = (ScalingRuleMetricProperty.Jsii$Proxy) o;

                if (!maxReplicas.equals(that.maxReplicas)) return false;
                if (!metrics.equals(that.metrics)) return false;
                if (!minReplicas.equals(that.minReplicas)) return false;
                if (this.scaleDownRules != null ? !this.scaleDownRules.equals(that.scaleDownRules) : that.scaleDownRules != null) return false;
                return this.scaleUpRules != null ? this.scaleUpRules.equals(that.scaleUpRules) : that.scaleUpRules == null;
            }

            @Override
            public final int hashCode() {
                int result = this.maxReplicas.hashCode();
                result = 31 * result + (this.metrics.hashCode());
                result = 31 * result + (this.minReplicas.hashCode());
                result = 31 * result + (this.scaleDownRules != null ? this.scaleDownRules.hashCode() : 0);
                result = 31 * result + (this.scaleUpRules != null ? this.scaleUpRules.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty")
    @software.amazon.jsii.Jsii.Proxy(ScalingRuleTimerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScalingRuleTimerProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSchedules();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBeginDate() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndDate() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScalingRuleTimerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScalingRuleTimerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScalingRuleTimerProperty> {
            java.lang.Object period;
            java.lang.Object schedules;
            java.lang.Object beginDate;
            java.lang.Object endDate;

            /**
             * Sets the value of {@link ScalingRuleTimerProperty#getPeriod}
             * @param period the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.String period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleTimerProperty#getPeriod}
             * @param period the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleTimerProperty#getSchedules}
             * @param schedules the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schedules(com.aliyun.ros.cdk.core.IResolvable schedules) {
                this.schedules = schedules;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleTimerProperty#getSchedules}
             * @param schedules the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schedules(java.util.List<? extends java.lang.Object> schedules) {
                this.schedules = schedules;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleTimerProperty#getBeginDate}
             * @param beginDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder beginDate(java.lang.String beginDate) {
                this.beginDate = beginDate;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleTimerProperty#getBeginDate}
             * @param beginDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder beginDate(com.aliyun.ros.cdk.core.IResolvable beginDate) {
                this.beginDate = beginDate;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleTimerProperty#getEndDate}
             * @param endDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endDate(java.lang.String endDate) {
                this.endDate = endDate;
                return this;
            }

            /**
             * Sets the value of {@link ScalingRuleTimerProperty#getEndDate}
             * @param endDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endDate(com.aliyun.ros.cdk.core.IResolvable endDate) {
                this.endDate = endDate;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScalingRuleTimerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScalingRuleTimerProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScalingRuleTimerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingRuleTimerProperty {
            private final java.lang.Object period;
            private final java.lang.Object schedules;
            private final java.lang.Object beginDate;
            private final java.lang.Object endDate;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.schedules = software.amazon.jsii.Kernel.get(this, "schedules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.beginDate = software.amazon.jsii.Kernel.get(this, "beginDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endDate = software.amazon.jsii.Kernel.get(this, "endDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
                this.schedules = java.util.Objects.requireNonNull(builder.schedules, "schedules is required");
                this.beginDate = builder.beginDate;
                this.endDate = builder.endDate;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
            }

            @Override
            public final java.lang.Object getSchedules() {
                return this.schedules;
            }

            @Override
            public final java.lang.Object getBeginDate() {
                return this.beginDate;
            }

            @Override
            public final java.lang.Object getEndDate() {
                return this.endDate;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("period", om.valueToTree(this.getPeriod()));
                data.set("schedules", om.valueToTree(this.getSchedules()));
                if (this.getBeginDate() != null) {
                    data.set("beginDate", om.valueToTree(this.getBeginDate()));
                }
                if (this.getEndDate() != null) {
                    data.set("endDate", om.valueToTree(this.getEndDate()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScalingRuleTimerProperty.Jsii$Proxy that = (ScalingRuleTimerProperty.Jsii$Proxy) o;

                if (!period.equals(that.period)) return false;
                if (!schedules.equals(that.schedules)) return false;
                if (this.beginDate != null ? !this.beginDate.equals(that.beginDate) : that.beginDate != null) return false;
                return this.endDate != null ? this.endDate.equals(that.endDate) : that.endDate == null;
            }

            @Override
            public final int hashCode() {
                int result = this.period.hashCode();
                result = 31 * result + (this.schedules.hashCode());
                result = 31 * result + (this.beginDate != null ? this.beginDate.hashCode() : 0);
                result = 31 * result + (this.endDate != null ? this.endDate.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosApplicationScalingRule.SchedulesProperty")
    @software.amazon.jsii.Jsii.Proxy(SchedulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SchedulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAtTime();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTargetReplicas();

        /**
         * @return a {@link Builder} of {@link SchedulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SchedulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SchedulesProperty> {
            java.lang.Object atTime;
            java.lang.Object targetReplicas;

            /**
             * Sets the value of {@link SchedulesProperty#getAtTime}
             * @param atTime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder atTime(java.lang.String atTime) {
                this.atTime = atTime;
                return this;
            }

            /**
             * Sets the value of {@link SchedulesProperty#getAtTime}
             * @param atTime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder atTime(com.aliyun.ros.cdk.core.IResolvable atTime) {
                this.atTime = atTime;
                return this;
            }

            /**
             * Sets the value of {@link SchedulesProperty#getTargetReplicas}
             * @param targetReplicas the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetReplicas(java.lang.Number targetReplicas) {
                this.targetReplicas = targetReplicas;
                return this;
            }

            /**
             * Sets the value of {@link SchedulesProperty#getTargetReplicas}
             * @param targetReplicas the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetReplicas(com.aliyun.ros.cdk.core.IResolvable targetReplicas) {
                this.targetReplicas = targetReplicas;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SchedulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SchedulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SchedulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SchedulesProperty {
            private final java.lang.Object atTime;
            private final java.lang.Object targetReplicas;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.atTime = software.amazon.jsii.Kernel.get(this, "atTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetReplicas = software.amazon.jsii.Kernel.get(this, "targetReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.atTime = java.util.Objects.requireNonNull(builder.atTime, "atTime is required");
                this.targetReplicas = java.util.Objects.requireNonNull(builder.targetReplicas, "targetReplicas is required");
            }

            @Override
            public final java.lang.Object getAtTime() {
                return this.atTime;
            }

            @Override
            public final java.lang.Object getTargetReplicas() {
                return this.targetReplicas;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("atTime", om.valueToTree(this.getAtTime()));
                data.set("targetReplicas", om.valueToTree(this.getTargetReplicas()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosApplicationScalingRule.SchedulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SchedulesProperty.Jsii$Proxy that = (SchedulesProperty.Jsii$Proxy) o;

                if (!atTime.equals(that.atTime)) return false;
                return this.targetReplicas.equals(that.targetReplicas);
            }

            @Override
            public final int hashCode() {
                int result = this.atTime.hashCode();
                result = 31 * result + (this.targetReplicas.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.RosApplicationScalingRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.RosApplicationScalingRule> {
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
        private final com.aliyun.ros.cdk.sae.RosApplicationScalingRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.RosApplicationScalingRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appId This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props.appId(appId);
            return this;
        }
        /**
         * @return {@code this}
         * @param appId This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props.appId(appId);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleName This parameter is required.
         */
        public Builder scalingRuleName(final java.lang.String scalingRuleName) {
            this.props.scalingRuleName(scalingRuleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleName This parameter is required.
         */
        public Builder scalingRuleName(final com.aliyun.ros.cdk.core.IResolvable scalingRuleName) {
            this.props.scalingRuleName(scalingRuleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleType This parameter is required.
         */
        public Builder scalingRuleType(final java.lang.String scalingRuleType) {
            this.props.scalingRuleType(scalingRuleType);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleType This parameter is required.
         */
        public Builder scalingRuleType(final com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.props.scalingRuleType(scalingRuleType);
            return this;
        }

        /**
         * @return {@code this}
         * @param minReadyInstanceRatio This parameter is required.
         */
        public Builder minReadyInstanceRatio(final java.lang.Number minReadyInstanceRatio) {
            this.props.minReadyInstanceRatio(minReadyInstanceRatio);
            return this;
        }
        /**
         * @return {@code this}
         * @param minReadyInstanceRatio This parameter is required.
         */
        public Builder minReadyInstanceRatio(final com.aliyun.ros.cdk.core.IResolvable minReadyInstanceRatio) {
            this.props.minReadyInstanceRatio(minReadyInstanceRatio);
            return this;
        }

        /**
         * @return {@code this}
         * @param minReadyInstances This parameter is required.
         */
        public Builder minReadyInstances(final java.lang.Number minReadyInstances) {
            this.props.minReadyInstances(minReadyInstances);
            return this;
        }
        /**
         * @return {@code this}
         * @param minReadyInstances This parameter is required.
         */
        public Builder minReadyInstances(final com.aliyun.ros.cdk.core.IResolvable minReadyInstances) {
            this.props.minReadyInstances(minReadyInstances);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleEnable This parameter is required.
         */
        public Builder scalingRuleEnable(final java.lang.Boolean scalingRuleEnable) {
            this.props.scalingRuleEnable(scalingRuleEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleEnable This parameter is required.
         */
        public Builder scalingRuleEnable(final com.aliyun.ros.cdk.core.IResolvable scalingRuleEnable) {
            this.props.scalingRuleEnable(scalingRuleEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleMetric This parameter is required.
         */
        public Builder scalingRuleMetric(final com.aliyun.ros.cdk.core.IResolvable scalingRuleMetric) {
            this.props.scalingRuleMetric(scalingRuleMetric);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleMetric This parameter is required.
         */
        public Builder scalingRuleMetric(final com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScalingRuleMetricProperty scalingRuleMetric) {
            this.props.scalingRuleMetric(scalingRuleMetric);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleTimer This parameter is required.
         */
        public Builder scalingRuleTimer(final com.aliyun.ros.cdk.core.IResolvable scalingRuleTimer) {
            this.props.scalingRuleTimer(scalingRuleTimer);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleTimer This parameter is required.
         */
        public Builder scalingRuleTimer(final com.aliyun.ros.cdk.sae.RosApplicationScalingRule.ScalingRuleTimerProperty scalingRuleTimer) {
            this.props.scalingRuleTimer(scalingRuleTimer);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.RosApplicationScalingRule}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.RosApplicationScalingRule build() {
            return new com.aliyun.ros.cdk.sae.RosApplicationScalingRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
