package com.aliyun.ros.cdk.cms;

/**
 * A ROS template type:  `ALIYUN::CMS::GroupMetricRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:28.118Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosGroupMetricRule")
public class RosGroupMetricRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGroupMetricRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGroupMetricRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosGroupMetricRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CMS::GroupMetricRule`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGroupMetricRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosGroupMetricRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCategory() {
        return software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "category", java.util.Objects.requireNonNull(value, "category is required"));
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "category", java.util.Objects.requireNonNull(value, "category is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEscalations() {
        return software.amazon.jsii.Kernel.get(this, "escalations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEscalations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "escalations", java.util.Objects.requireNonNull(value, "escalations is required"));
    }

    /**
     */
    public void setEscalations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosGroupMetricRule.EscalationsProperty value) {
        software.amazon.jsii.Kernel.set(this, "escalations", java.util.Objects.requireNonNull(value, "escalations is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMetricName() {
        return software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMetricName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "metricName", java.util.Objects.requireNonNull(value, "metricName is required"));
    }

    /**
     */
    public void setMetricName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "metricName", java.util.Objects.requireNonNull(value, "metricName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNamespace() {
        return software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespace", java.util.Objects.requireNonNull(value, "namespace is required"));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespace", java.util.Objects.requireNonNull(value, "namespace is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleId() {
        return software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleId", java.util.Objects.requireNonNull(value, "ruleId is required"));
    }

    /**
     */
    public void setRuleId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleId", java.util.Objects.requireNonNull(value, "ruleId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", java.util.Objects.requireNonNull(value, "ruleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDimensions() {
        return software.amazon.jsii.Kernel.get(this, "dimensions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDimensions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dimensions", value);
    }

    /**
     */
    public void setDimensions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dimensions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEffectiveInterval() {
        return software.amazon.jsii.Kernel.get(this, "effectiveInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEffectiveInterval(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "effectiveInterval", value);
    }

    /**
     */
    public void setEffectiveInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "effectiveInterval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEmailSubject() {
        return software.amazon.jsii.Kernel.get(this, "emailSubject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEmailSubject(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "emailSubject", value);
    }

    /**
     */
    public void setEmailSubject(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "emailSubject", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
        return software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "interval", value);
    }

    /**
     */
    public void setInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "interval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNoEffectiveInterval() {
        return software.amazon.jsii.Kernel.get(this, "noEffectiveInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNoEffectiveInterval(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "noEffectiveInterval", value);
    }

    /**
     */
    public void setNoEffectiveInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "noEffectiveInterval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSilenceTime() {
        return software.amazon.jsii.Kernel.get(this, "silenceTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSilenceTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "silenceTime", value);
    }

    /**
     */
    public void setSilenceTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "silenceTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebhook() {
        return software.amazon.jsii.Kernel.get(this, "webhook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebhook(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "webhook", value);
    }

    /**
     */
    public void setWebhook(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "webhook", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty")
    @software.amazon.jsii.Jsii.Proxy(CriticalProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CriticalProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getComparisonOperator();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStatistics();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getThreshold();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTimes();

        /**
         * @return a {@link Builder} of {@link CriticalProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CriticalProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CriticalProperty> {
            java.lang.Object comparisonOperator;
            java.lang.Object statistics;
            java.lang.Object threshold;
            java.lang.Object times;

            /**
             * Sets the value of {@link CriticalProperty#getComparisonOperator}
             * @param comparisonOperator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comparisonOperator(java.lang.String comparisonOperator) {
                this.comparisonOperator = comparisonOperator;
                return this;
            }

            /**
             * Sets the value of {@link CriticalProperty#getComparisonOperator}
             * @param comparisonOperator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comparisonOperator(com.aliyun.ros.cdk.core.IResolvable comparisonOperator) {
                this.comparisonOperator = comparisonOperator;
                return this;
            }

            /**
             * Sets the value of {@link CriticalProperty#getStatistics}
             * @param statistics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statistics(java.lang.String statistics) {
                this.statistics = statistics;
                return this;
            }

            /**
             * Sets the value of {@link CriticalProperty#getStatistics}
             * @param statistics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statistics(com.aliyun.ros.cdk.core.IResolvable statistics) {
                this.statistics = statistics;
                return this;
            }

            /**
             * Sets the value of {@link CriticalProperty#getThreshold}
             * @param threshold the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(java.lang.Number threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link CriticalProperty#getThreshold}
             * @param threshold the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(com.aliyun.ros.cdk.core.IResolvable threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link CriticalProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(java.lang.Number times) {
                this.times = times;
                return this;
            }

            /**
             * Sets the value of {@link CriticalProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(com.aliyun.ros.cdk.core.IResolvable times) {
                this.times = times;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CriticalProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CriticalProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CriticalProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CriticalProperty {
            private final java.lang.Object comparisonOperator;
            private final java.lang.Object statistics;
            private final java.lang.Object threshold;
            private final java.lang.Object times;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.comparisonOperator = software.amazon.jsii.Kernel.get(this, "comparisonOperator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.statistics = software.amazon.jsii.Kernel.get(this, "statistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.times = software.amazon.jsii.Kernel.get(this, "times", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.comparisonOperator = java.util.Objects.requireNonNull(builder.comparisonOperator, "comparisonOperator is required");
                this.statistics = java.util.Objects.requireNonNull(builder.statistics, "statistics is required");
                this.threshold = java.util.Objects.requireNonNull(builder.threshold, "threshold is required");
                this.times = java.util.Objects.requireNonNull(builder.times, "times is required");
            }

            @Override
            public final java.lang.Object getComparisonOperator() {
                return this.comparisonOperator;
            }

            @Override
            public final java.lang.Object getStatistics() {
                return this.statistics;
            }

            @Override
            public final java.lang.Object getThreshold() {
                return this.threshold;
            }

            @Override
            public final java.lang.Object getTimes() {
                return this.times;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("comparisonOperator", om.valueToTree(this.getComparisonOperator()));
                data.set("statistics", om.valueToTree(this.getStatistics()));
                data.set("threshold", om.valueToTree(this.getThreshold()));
                data.set("times", om.valueToTree(this.getTimes()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CriticalProperty.Jsii$Proxy that = (CriticalProperty.Jsii$Proxy) o;

                if (!comparisonOperator.equals(that.comparisonOperator)) return false;
                if (!statistics.equals(that.statistics)) return false;
                if (!threshold.equals(that.threshold)) return false;
                return this.times.equals(that.times);
            }

            @Override
            public final int hashCode() {
                int result = this.comparisonOperator.hashCode();
                result = 31 * result + (this.statistics.hashCode());
                result = 31 * result + (this.threshold.hashCode());
                result = 31 * result + (this.times.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosGroupMetricRule.EscalationsProperty")
    @software.amazon.jsii.Jsii.Proxy(EscalationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EscalationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCritical() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInfo() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWarn() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EscalationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EscalationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EscalationsProperty> {
            java.lang.Object critical;
            java.lang.Object info;
            java.lang.Object warn;

            /**
             * Sets the value of {@link EscalationsProperty#getCritical}
             * @param critical the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder critical(com.aliyun.ros.cdk.core.IResolvable critical) {
                this.critical = critical;
                return this;
            }

            /**
             * Sets the value of {@link EscalationsProperty#getCritical}
             * @param critical the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder critical(com.aliyun.ros.cdk.cms.RosGroupMetricRule.CriticalProperty critical) {
                this.critical = critical;
                return this;
            }

            /**
             * Sets the value of {@link EscalationsProperty#getInfo}
             * @param info the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder info(com.aliyun.ros.cdk.core.IResolvable info) {
                this.info = info;
                return this;
            }

            /**
             * Sets the value of {@link EscalationsProperty#getInfo}
             * @param info the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder info(com.aliyun.ros.cdk.cms.RosGroupMetricRule.InfoProperty info) {
                this.info = info;
                return this;
            }

            /**
             * Sets the value of {@link EscalationsProperty#getWarn}
             * @param warn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder warn(com.aliyun.ros.cdk.core.IResolvable warn) {
                this.warn = warn;
                return this;
            }

            /**
             * Sets the value of {@link EscalationsProperty#getWarn}
             * @param warn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder warn(com.aliyun.ros.cdk.cms.RosGroupMetricRule.WarnProperty warn) {
                this.warn = warn;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EscalationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EscalationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EscalationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EscalationsProperty {
            private final java.lang.Object critical;
            private final java.lang.Object info;
            private final java.lang.Object warn;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.critical = software.amazon.jsii.Kernel.get(this, "critical", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.info = software.amazon.jsii.Kernel.get(this, "info", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.warn = software.amazon.jsii.Kernel.get(this, "warn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.critical = builder.critical;
                this.info = builder.info;
                this.warn = builder.warn;
            }

            @Override
            public final java.lang.Object getCritical() {
                return this.critical;
            }

            @Override
            public final java.lang.Object getInfo() {
                return this.info;
            }

            @Override
            public final java.lang.Object getWarn() {
                return this.warn;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCritical() != null) {
                    data.set("critical", om.valueToTree(this.getCritical()));
                }
                if (this.getInfo() != null) {
                    data.set("info", om.valueToTree(this.getInfo()));
                }
                if (this.getWarn() != null) {
                    data.set("warn", om.valueToTree(this.getWarn()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosGroupMetricRule.EscalationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EscalationsProperty.Jsii$Proxy that = (EscalationsProperty.Jsii$Proxy) o;

                if (this.critical != null ? !this.critical.equals(that.critical) : that.critical != null) return false;
                if (this.info != null ? !this.info.equals(that.info) : that.info != null) return false;
                return this.warn != null ? this.warn.equals(that.warn) : that.warn == null;
            }

            @Override
            public final int hashCode() {
                int result = this.critical != null ? this.critical.hashCode() : 0;
                result = 31 * result + (this.info != null ? this.info.hashCode() : 0);
                result = 31 * result + (this.warn != null ? this.warn.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty")
    @software.amazon.jsii.Jsii.Proxy(InfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getComparisonOperator();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStatistics();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getThreshold();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTimes();

        /**
         * @return a {@link Builder} of {@link InfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InfoProperty> {
            java.lang.Object comparisonOperator;
            java.lang.Object statistics;
            java.lang.Object threshold;
            java.lang.Object times;

            /**
             * Sets the value of {@link InfoProperty#getComparisonOperator}
             * @param comparisonOperator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comparisonOperator(java.lang.String comparisonOperator) {
                this.comparisonOperator = comparisonOperator;
                return this;
            }

            /**
             * Sets the value of {@link InfoProperty#getComparisonOperator}
             * @param comparisonOperator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comparisonOperator(com.aliyun.ros.cdk.core.IResolvable comparisonOperator) {
                this.comparisonOperator = comparisonOperator;
                return this;
            }

            /**
             * Sets the value of {@link InfoProperty#getStatistics}
             * @param statistics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statistics(java.lang.String statistics) {
                this.statistics = statistics;
                return this;
            }

            /**
             * Sets the value of {@link InfoProperty#getStatistics}
             * @param statistics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statistics(com.aliyun.ros.cdk.core.IResolvable statistics) {
                this.statistics = statistics;
                return this;
            }

            /**
             * Sets the value of {@link InfoProperty#getThreshold}
             * @param threshold the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(java.lang.Number threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link InfoProperty#getThreshold}
             * @param threshold the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(com.aliyun.ros.cdk.core.IResolvable threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link InfoProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(java.lang.Number times) {
                this.times = times;
                return this;
            }

            /**
             * Sets the value of {@link InfoProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(com.aliyun.ros.cdk.core.IResolvable times) {
                this.times = times;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InfoProperty {
            private final java.lang.Object comparisonOperator;
            private final java.lang.Object statistics;
            private final java.lang.Object threshold;
            private final java.lang.Object times;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.comparisonOperator = software.amazon.jsii.Kernel.get(this, "comparisonOperator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.statistics = software.amazon.jsii.Kernel.get(this, "statistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.times = software.amazon.jsii.Kernel.get(this, "times", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.comparisonOperator = java.util.Objects.requireNonNull(builder.comparisonOperator, "comparisonOperator is required");
                this.statistics = java.util.Objects.requireNonNull(builder.statistics, "statistics is required");
                this.threshold = java.util.Objects.requireNonNull(builder.threshold, "threshold is required");
                this.times = java.util.Objects.requireNonNull(builder.times, "times is required");
            }

            @Override
            public final java.lang.Object getComparisonOperator() {
                return this.comparisonOperator;
            }

            @Override
            public final java.lang.Object getStatistics() {
                return this.statistics;
            }

            @Override
            public final java.lang.Object getThreshold() {
                return this.threshold;
            }

            @Override
            public final java.lang.Object getTimes() {
                return this.times;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("comparisonOperator", om.valueToTree(this.getComparisonOperator()));
                data.set("statistics", om.valueToTree(this.getStatistics()));
                data.set("threshold", om.valueToTree(this.getThreshold()));
                data.set("times", om.valueToTree(this.getTimes()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InfoProperty.Jsii$Proxy that = (InfoProperty.Jsii$Proxy) o;

                if (!comparisonOperator.equals(that.comparisonOperator)) return false;
                if (!statistics.equals(that.statistics)) return false;
                if (!threshold.equals(that.threshold)) return false;
                return this.times.equals(that.times);
            }

            @Override
            public final int hashCode() {
                int result = this.comparisonOperator.hashCode();
                result = 31 * result + (this.statistics.hashCode());
                result = 31 * result + (this.threshold.hashCode());
                result = 31 * result + (this.times.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty")
    @software.amazon.jsii.Jsii.Proxy(WarnProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WarnProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getComparisonOperator();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStatistics();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getThreshold();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTimes();

        /**
         * @return a {@link Builder} of {@link WarnProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WarnProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WarnProperty> {
            java.lang.Object comparisonOperator;
            java.lang.Object statistics;
            java.lang.Object threshold;
            java.lang.Object times;

            /**
             * Sets the value of {@link WarnProperty#getComparisonOperator}
             * @param comparisonOperator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comparisonOperator(java.lang.String comparisonOperator) {
                this.comparisonOperator = comparisonOperator;
                return this;
            }

            /**
             * Sets the value of {@link WarnProperty#getComparisonOperator}
             * @param comparisonOperator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comparisonOperator(com.aliyun.ros.cdk.core.IResolvable comparisonOperator) {
                this.comparisonOperator = comparisonOperator;
                return this;
            }

            /**
             * Sets the value of {@link WarnProperty#getStatistics}
             * @param statistics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statistics(java.lang.String statistics) {
                this.statistics = statistics;
                return this;
            }

            /**
             * Sets the value of {@link WarnProperty#getStatistics}
             * @param statistics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statistics(com.aliyun.ros.cdk.core.IResolvable statistics) {
                this.statistics = statistics;
                return this;
            }

            /**
             * Sets the value of {@link WarnProperty#getThreshold}
             * @param threshold the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(java.lang.Number threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link WarnProperty#getThreshold}
             * @param threshold the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(com.aliyun.ros.cdk.core.IResolvable threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link WarnProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(java.lang.Number times) {
                this.times = times;
                return this;
            }

            /**
             * Sets the value of {@link WarnProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(com.aliyun.ros.cdk.core.IResolvable times) {
                this.times = times;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WarnProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WarnProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WarnProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WarnProperty {
            private final java.lang.Object comparisonOperator;
            private final java.lang.Object statistics;
            private final java.lang.Object threshold;
            private final java.lang.Object times;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.comparisonOperator = software.amazon.jsii.Kernel.get(this, "comparisonOperator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.statistics = software.amazon.jsii.Kernel.get(this, "statistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.times = software.amazon.jsii.Kernel.get(this, "times", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.comparisonOperator = java.util.Objects.requireNonNull(builder.comparisonOperator, "comparisonOperator is required");
                this.statistics = java.util.Objects.requireNonNull(builder.statistics, "statistics is required");
                this.threshold = java.util.Objects.requireNonNull(builder.threshold, "threshold is required");
                this.times = java.util.Objects.requireNonNull(builder.times, "times is required");
            }

            @Override
            public final java.lang.Object getComparisonOperator() {
                return this.comparisonOperator;
            }

            @Override
            public final java.lang.Object getStatistics() {
                return this.statistics;
            }

            @Override
            public final java.lang.Object getThreshold() {
                return this.threshold;
            }

            @Override
            public final java.lang.Object getTimes() {
                return this.times;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("comparisonOperator", om.valueToTree(this.getComparisonOperator()));
                data.set("statistics", om.valueToTree(this.getStatistics()));
                data.set("threshold", om.valueToTree(this.getThreshold()));
                data.set("times", om.valueToTree(this.getTimes()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WarnProperty.Jsii$Proxy that = (WarnProperty.Jsii$Proxy) o;

                if (!comparisonOperator.equals(that.comparisonOperator)) return false;
                if (!statistics.equals(that.statistics)) return false;
                if (!threshold.equals(that.threshold)) return false;
                return this.times.equals(that.times);
            }

            @Override
            public final int hashCode() {
                int result = this.comparisonOperator.hashCode();
                result = 31 * result + (this.statistics.hashCode());
                result = 31 * result + (this.threshold.hashCode());
                result = 31 * result + (this.times.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosGroupMetricRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosGroupMetricRule> {
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
        private final com.aliyun.ros.cdk.cms.RosGroupMetricRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosGroupMetricRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param category This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * @return {@code this}
         * @param category This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * @return {@code this}
         * @param escalations This parameter is required.
         */
        public Builder escalations(final com.aliyun.ros.cdk.core.IResolvable escalations) {
            this.props.escalations(escalations);
            return this;
        }
        /**
         * @return {@code this}
         * @param escalations This parameter is required.
         */
        public Builder escalations(final com.aliyun.ros.cdk.cms.RosGroupMetricRule.EscalationsProperty escalations) {
            this.props.escalations(escalations);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param metricName This parameter is required.
         */
        public Builder metricName(final java.lang.String metricName) {
            this.props.metricName(metricName);
            return this;
        }
        /**
         * @return {@code this}
         * @param metricName This parameter is required.
         */
        public Builder metricName(final com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.props.metricName(metricName);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleId This parameter is required.
         */
        public Builder ruleId(final java.lang.String ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleId This parameter is required.
         */
        public Builder ruleId(final com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param dimensions This parameter is required.
         */
        public Builder dimensions(final java.lang.String dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }
        /**
         * @return {@code this}
         * @param dimensions This parameter is required.
         */
        public Builder dimensions(final com.aliyun.ros.cdk.core.IResolvable dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }

        /**
         * @return {@code this}
         * @param effectiveInterval This parameter is required.
         */
        public Builder effectiveInterval(final java.lang.String effectiveInterval) {
            this.props.effectiveInterval(effectiveInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param effectiveInterval This parameter is required.
         */
        public Builder effectiveInterval(final com.aliyun.ros.cdk.core.IResolvable effectiveInterval) {
            this.props.effectiveInterval(effectiveInterval);
            return this;
        }

        /**
         * @return {@code this}
         * @param emailSubject This parameter is required.
         */
        public Builder emailSubject(final java.lang.String emailSubject) {
            this.props.emailSubject(emailSubject);
            return this;
        }
        /**
         * @return {@code this}
         * @param emailSubject This parameter is required.
         */
        public Builder emailSubject(final com.aliyun.ros.cdk.core.IResolvable emailSubject) {
            this.props.emailSubject(emailSubject);
            return this;
        }

        /**
         * @return {@code this}
         * @param interval This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * @return {@code this}
         * @param interval This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * @return {@code this}
         * @param noEffectiveInterval This parameter is required.
         */
        public Builder noEffectiveInterval(final java.lang.String noEffectiveInterval) {
            this.props.noEffectiveInterval(noEffectiveInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param noEffectiveInterval This parameter is required.
         */
        public Builder noEffectiveInterval(final com.aliyun.ros.cdk.core.IResolvable noEffectiveInterval) {
            this.props.noEffectiveInterval(noEffectiveInterval);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param silenceTime This parameter is required.
         */
        public Builder silenceTime(final java.lang.Number silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param silenceTime This parameter is required.
         */
        public Builder silenceTime(final com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param webhook This parameter is required.
         */
        public Builder webhook(final java.lang.String webhook) {
            this.props.webhook(webhook);
            return this;
        }
        /**
         * @return {@code this}
         * @param webhook This parameter is required.
         */
        public Builder webhook(final com.aliyun.ros.cdk.core.IResolvable webhook) {
            this.props.webhook(webhook);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.RosGroupMetricRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosGroupMetricRule build() {
            return new com.aliyun.ros.cdk.cms.RosGroupMetricRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
