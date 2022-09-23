package com.aliyun.ros.cdk.cms;

/**
 * A ROS template type:  `ALIYUN::CMS::ResourceMetricRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:09.449Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule")
public class RosResourceMetricRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosResourceMetricRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosResourceMetricRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosResourceMetricRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CMS::ResourceMetricRule`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosResourceMetricRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosResourceMetricRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getContactGroups() {
        return software.amazon.jsii.Kernel.get(this, "contactGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContactGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "contactGroups", java.util.Objects.requireNonNull(value, "contactGroups is required"));
    }

    /**
     */
    public void setContactGroups(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "contactGroups", java.util.Objects.requireNonNull(value, "contactGroups is required"));
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
    public void setEscalations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosResourceMetricRule.EscalationsProperty value) {
        software.amazon.jsii.Kernel.set(this, "escalations", java.util.Objects.requireNonNull(value, "escalations is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getResources() {
        return software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResources(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resources", java.util.Objects.requireNonNull(value, "resources is required"));
    }

    /**
     */
    public void setResources(final @org.jetbrains.annotations.NotNull java.util.List<java.util.Map<java.lang.String, java.lang.Object>> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.util.Map<java.lang.String, java.lang.Object> __val_ac66f0 = value.get(__idx_ac66f0);
                if (!(__val_ac66f0.keySet().toArray()[0] instanceof String)) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")").append(".keySet()")
                            .append(" to contain class String; received ")
                            .append(__val_ac66f0.keySet().toArray()[0].getClass()).toString());
                }
                for (final java.util.Map.Entry<String, java.lang.Object> __item_58ec25: __val_ac66f0.entrySet()) {
                    final java.lang.Object __val_58ec25 = __item_58ec25.getValue();
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "resources", java.util.Objects.requireNonNull(value, "resources is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCompositeExpression() {
        return software.amazon.jsii.Kernel.get(this, "compositeExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCompositeExpression(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "compositeExpression", value);
    }

    /**
     */
    public void setCompositeExpression(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cms.RosResourceMetricRule.CompositeExpressionProperty value) {
        software.amazon.jsii.Kernel.set(this, "compositeExpression", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLabels(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "labels", value);
    }

    /**
     */
    public void setLabels(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cms.RosResourceMetricRule.LabelsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cms.RosResourceMetricRule.LabelsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "labels", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNoDataPolicy() {
        return software.amazon.jsii.Kernel.get(this, "noDataPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNoDataPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "noDataPolicy", value);
    }

    /**
     */
    public void setNoDataPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "noDataPolicy", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrometheus() {
        return software.amazon.jsii.Kernel.get(this, "prometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrometheus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "prometheus", value);
    }

    /**
     */
    public void setPrometheus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cms.RosResourceMetricRule.PrometheusProperty value) {
        software.amazon.jsii.Kernel.set(this, "prometheus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleId() {
        return software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleId", value);
    }

    /**
     */
    public void setRuleId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty")
    @software.amazon.jsii.Jsii.Proxy(AnnotationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AnnotationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AnnotationsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link AnnotationsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getValue}
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
             * @return a new instance of {@link AnnotationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AnnotationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AnnotationsProperty {
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
                this.key = builder.key;
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

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AnnotationsProperty.Jsii$Proxy that = (AnnotationsProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.CompositeExpressionProperty")
    @software.amazon.jsii.Jsii.Proxy(CompositeExpressionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CompositeExpressionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLevel();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTimes();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpressionList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpressionListJoin() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpressionRaw() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CompositeExpressionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CompositeExpressionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CompositeExpressionProperty> {
            java.lang.Object level;
            java.lang.Object times;
            java.lang.Object expressionList;
            java.lang.Object expressionListJoin;
            java.lang.Object expressionRaw;

            /**
             * Sets the value of {@link CompositeExpressionProperty#getLevel}
             * @param level the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getLevel}
             * @param level the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(java.lang.Number times) {
                this.times = times;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(com.aliyun.ros.cdk.core.IResolvable times) {
                this.times = times;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getExpressionList}
             * @param expressionList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expressionList(com.aliyun.ros.cdk.core.IResolvable expressionList) {
                this.expressionList = expressionList;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getExpressionList}
             * @param expressionList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expressionList(java.util.List<? extends java.lang.Object> expressionList) {
                this.expressionList = expressionList;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getExpressionListJoin}
             * @param expressionListJoin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expressionListJoin(java.lang.String expressionListJoin) {
                this.expressionListJoin = expressionListJoin;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getExpressionListJoin}
             * @param expressionListJoin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expressionListJoin(com.aliyun.ros.cdk.core.IResolvable expressionListJoin) {
                this.expressionListJoin = expressionListJoin;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getExpressionRaw}
             * @param expressionRaw the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expressionRaw(java.lang.String expressionRaw) {
                this.expressionRaw = expressionRaw;
                return this;
            }

            /**
             * Sets the value of {@link CompositeExpressionProperty#getExpressionRaw}
             * @param expressionRaw the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expressionRaw(com.aliyun.ros.cdk.core.IResolvable expressionRaw) {
                this.expressionRaw = expressionRaw;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CompositeExpressionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CompositeExpressionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CompositeExpressionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CompositeExpressionProperty {
            private final java.lang.Object level;
            private final java.lang.Object times;
            private final java.lang.Object expressionList;
            private final java.lang.Object expressionListJoin;
            private final java.lang.Object expressionRaw;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.times = software.amazon.jsii.Kernel.get(this, "times", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.expressionList = software.amazon.jsii.Kernel.get(this, "expressionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.expressionListJoin = software.amazon.jsii.Kernel.get(this, "expressionListJoin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.expressionRaw = software.amazon.jsii.Kernel.get(this, "expressionRaw", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.level = java.util.Objects.requireNonNull(builder.level, "level is required");
                this.times = java.util.Objects.requireNonNull(builder.times, "times is required");
                this.expressionList = builder.expressionList;
                this.expressionListJoin = builder.expressionListJoin;
                this.expressionRaw = builder.expressionRaw;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            public final java.lang.Object getTimes() {
                return this.times;
            }

            @Override
            public final java.lang.Object getExpressionList() {
                return this.expressionList;
            }

            @Override
            public final java.lang.Object getExpressionListJoin() {
                return this.expressionListJoin;
            }

            @Override
            public final java.lang.Object getExpressionRaw() {
                return this.expressionRaw;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("level", om.valueToTree(this.getLevel()));
                data.set("times", om.valueToTree(this.getTimes()));
                if (this.getExpressionList() != null) {
                    data.set("expressionList", om.valueToTree(this.getExpressionList()));
                }
                if (this.getExpressionListJoin() != null) {
                    data.set("expressionListJoin", om.valueToTree(this.getExpressionListJoin()));
                }
                if (this.getExpressionRaw() != null) {
                    data.set("expressionRaw", om.valueToTree(this.getExpressionRaw()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.CompositeExpressionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CompositeExpressionProperty.Jsii$Proxy that = (CompositeExpressionProperty.Jsii$Proxy) o;

                if (!level.equals(that.level)) return false;
                if (!times.equals(that.times)) return false;
                if (this.expressionList != null ? !this.expressionList.equals(that.expressionList) : that.expressionList != null) return false;
                if (this.expressionListJoin != null ? !this.expressionListJoin.equals(that.expressionListJoin) : that.expressionListJoin != null) return false;
                return this.expressionRaw != null ? this.expressionRaw.equals(that.expressionRaw) : that.expressionRaw == null;
            }

            @Override
            public final int hashCode() {
                int result = this.level.hashCode();
                result = 31 * result + (this.times.hashCode());
                result = 31 * result + (this.expressionList != null ? this.expressionList.hashCode() : 0);
                result = 31 * result + (this.expressionListJoin != null ? this.expressionListJoin.hashCode() : 0);
                result = 31 * result + (this.expressionRaw != null ? this.expressionRaw.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty")
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
            public Builder threshold(java.lang.String threshold) {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.EscalationsProperty")
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
            public Builder critical(com.aliyun.ros.cdk.cms.RosResourceMetricRule.CriticalProperty critical) {
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
            public Builder info(com.aliyun.ros.cdk.cms.RosResourceMetricRule.InfoProperty info) {
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
            public Builder warn(com.aliyun.ros.cdk.cms.RosResourceMetricRule.WarnProperty warn) {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.EscalationsProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty")
    @software.amazon.jsii.Jsii.Proxy(ExpressionListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ExpressionListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getComparisonOperator();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMetricName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStatistics();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getThreshold();

        /**
         * @return a {@link Builder} of {@link ExpressionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ExpressionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ExpressionListProperty> {
            java.lang.Object comparisonOperator;
            java.lang.Object metricName;
            java.lang.Object period;
            java.lang.Object statistics;
            java.lang.Object threshold;

            /**
             * Sets the value of {@link ExpressionListProperty#getComparisonOperator}
             * @param comparisonOperator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comparisonOperator(java.lang.String comparisonOperator) {
                this.comparisonOperator = comparisonOperator;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getComparisonOperator}
             * @param comparisonOperator the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comparisonOperator(com.aliyun.ros.cdk.core.IResolvable comparisonOperator) {
                this.comparisonOperator = comparisonOperator;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getMetricName}
             * @param metricName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricName(java.lang.String metricName) {
                this.metricName = metricName;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getMetricName}
             * @param metricName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricName(com.aliyun.ros.cdk.core.IResolvable metricName) {
                this.metricName = metricName;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getPeriod}
             * @param period the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.Number period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getPeriod}
             * @param period the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getStatistics}
             * @param statistics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statistics(java.lang.String statistics) {
                this.statistics = statistics;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getStatistics}
             * @param statistics the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder statistics(com.aliyun.ros.cdk.core.IResolvable statistics) {
                this.statistics = statistics;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getThreshold}
             * @param threshold the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(java.lang.String threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link ExpressionListProperty#getThreshold}
             * @param threshold the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(com.aliyun.ros.cdk.core.IResolvable threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ExpressionListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ExpressionListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ExpressionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExpressionListProperty {
            private final java.lang.Object comparisonOperator;
            private final java.lang.Object metricName;
            private final java.lang.Object period;
            private final java.lang.Object statistics;
            private final java.lang.Object threshold;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.comparisonOperator = software.amazon.jsii.Kernel.get(this, "comparisonOperator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.metricName = software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.statistics = software.amazon.jsii.Kernel.get(this, "statistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.comparisonOperator = java.util.Objects.requireNonNull(builder.comparisonOperator, "comparisonOperator is required");
                this.metricName = java.util.Objects.requireNonNull(builder.metricName, "metricName is required");
                this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
                this.statistics = java.util.Objects.requireNonNull(builder.statistics, "statistics is required");
                this.threshold = java.util.Objects.requireNonNull(builder.threshold, "threshold is required");
            }

            @Override
            public final java.lang.Object getComparisonOperator() {
                return this.comparisonOperator;
            }

            @Override
            public final java.lang.Object getMetricName() {
                return this.metricName;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
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
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("comparisonOperator", om.valueToTree(this.getComparisonOperator()));
                data.set("metricName", om.valueToTree(this.getMetricName()));
                data.set("period", om.valueToTree(this.getPeriod()));
                data.set("statistics", om.valueToTree(this.getStatistics()));
                data.set("threshold", om.valueToTree(this.getThreshold()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ExpressionListProperty.Jsii$Proxy that = (ExpressionListProperty.Jsii$Proxy) o;

                if (!comparisonOperator.equals(that.comparisonOperator)) return false;
                if (!metricName.equals(that.metricName)) return false;
                if (!period.equals(that.period)) return false;
                if (!statistics.equals(that.statistics)) return false;
                return this.threshold.equals(that.threshold);
            }

            @Override
            public final int hashCode() {
                int result = this.comparisonOperator.hashCode();
                result = 31 * result + (this.metricName.hashCode());
                result = 31 * result + (this.period.hashCode());
                result = 31 * result + (this.statistics.hashCode());
                result = 31 * result + (this.threshold.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty")
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
            public Builder threshold(java.lang.String threshold) {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.LabelsProperty")
    @software.amazon.jsii.Jsii.Proxy(LabelsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LabelsProperty extends software.amazon.jsii.JsiiSerializable {

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
         * @return a {@link Builder} of {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LabelsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link LabelsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getValue}
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
             * @return a new instance of {@link LabelsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LabelsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LabelsProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.LabelsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LabelsProperty.Jsii$Proxy that = (LabelsProperty.Jsii$Proxy) o;

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
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.PrometheusProperty")
    @software.amazon.jsii.Jsii.Proxy(PrometheusProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrometheusProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLevel();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPromQl();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTimes();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAnnotations() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PrometheusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrometheusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrometheusProperty> {
            java.lang.Object level;
            java.lang.Object promQl;
            java.lang.Object times;
            java.lang.Object annotations;

            /**
             * Sets the value of {@link PrometheusProperty#getLevel}
             * @param level the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link PrometheusProperty#getLevel}
             * @param level the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link PrometheusProperty#getPromQl}
             * @param promQl the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder promQl(java.lang.String promQl) {
                this.promQl = promQl;
                return this;
            }

            /**
             * Sets the value of {@link PrometheusProperty#getPromQl}
             * @param promQl the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder promQl(com.aliyun.ros.cdk.core.IResolvable promQl) {
                this.promQl = promQl;
                return this;
            }

            /**
             * Sets the value of {@link PrometheusProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(java.lang.Number times) {
                this.times = times;
                return this;
            }

            /**
             * Sets the value of {@link PrometheusProperty#getTimes}
             * @param times the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder times(com.aliyun.ros.cdk.core.IResolvable times) {
                this.times = times;
                return this;
            }

            /**
             * Sets the value of {@link PrometheusProperty#getAnnotations}
             * @param annotations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder annotations(com.aliyun.ros.cdk.core.IResolvable annotations) {
                this.annotations = annotations;
                return this;
            }

            /**
             * Sets the value of {@link PrometheusProperty#getAnnotations}
             * @param annotations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder annotations(java.util.List<? extends java.lang.Object> annotations) {
                this.annotations = annotations;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrometheusProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrometheusProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrometheusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrometheusProperty {
            private final java.lang.Object level;
            private final java.lang.Object promQl;
            private final java.lang.Object times;
            private final java.lang.Object annotations;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.promQl = software.amazon.jsii.Kernel.get(this, "promQl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.times = software.amazon.jsii.Kernel.get(this, "times", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.annotations = software.amazon.jsii.Kernel.get(this, "annotations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.level = java.util.Objects.requireNonNull(builder.level, "level is required");
                this.promQl = java.util.Objects.requireNonNull(builder.promQl, "promQl is required");
                this.times = java.util.Objects.requireNonNull(builder.times, "times is required");
                this.annotations = builder.annotations;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            public final java.lang.Object getPromQl() {
                return this.promQl;
            }

            @Override
            public final java.lang.Object getTimes() {
                return this.times;
            }

            @Override
            public final java.lang.Object getAnnotations() {
                return this.annotations;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("level", om.valueToTree(this.getLevel()));
                data.set("promQl", om.valueToTree(this.getPromQl()));
                data.set("times", om.valueToTree(this.getTimes()));
                if (this.getAnnotations() != null) {
                    data.set("annotations", om.valueToTree(this.getAnnotations()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.PrometheusProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrometheusProperty.Jsii$Proxy that = (PrometheusProperty.Jsii$Proxy) o;

                if (!level.equals(that.level)) return false;
                if (!promQl.equals(that.promQl)) return false;
                if (!times.equals(that.times)) return false;
                return this.annotations != null ? this.annotations.equals(that.annotations) : that.annotations == null;
            }

            @Override
            public final int hashCode() {
                int result = this.level.hashCode();
                result = 31 * result + (this.promQl.hashCode());
                result = 31 * result + (this.times.hashCode());
                result = 31 * result + (this.annotations != null ? this.annotations.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty")
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
            public Builder threshold(java.lang.String threshold) {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosResourceMetricRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosResourceMetricRule> {
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
        private final com.aliyun.ros.cdk.cms.RosResourceMetricRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosResourceMetricRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param contactGroups This parameter is required.
         */
        public Builder contactGroups(final com.aliyun.ros.cdk.core.IResolvable contactGroups) {
            this.props.contactGroups(contactGroups);
            return this;
        }
        /**
         * @return {@code this}
         * @param contactGroups This parameter is required.
         */
        public Builder contactGroups(final java.util.List<? extends java.lang.Object> contactGroups) {
            this.props.contactGroups(contactGroups);
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
        public Builder escalations(final com.aliyun.ros.cdk.cms.RosResourceMetricRule.EscalationsProperty escalations) {
            this.props.escalations(escalations);
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
         * @param resources This parameter is required.
         */
        public Builder resources(final com.aliyun.ros.cdk.core.IResolvable resources) {
            this.props.resources(resources);
            return this;
        }
        /**
         * @return {@code this}
         * @param resources This parameter is required.
         */
        public Builder resources(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> resources) {
            this.props.resources(resources);
            return this;
        }

        /**
         * @return {@code this}
         * @param compositeExpression This parameter is required.
         */
        public Builder compositeExpression(final com.aliyun.ros.cdk.core.IResolvable compositeExpression) {
            this.props.compositeExpression(compositeExpression);
            return this;
        }
        /**
         * @return {@code this}
         * @param compositeExpression This parameter is required.
         */
        public Builder compositeExpression(final com.aliyun.ros.cdk.cms.RosResourceMetricRule.CompositeExpressionProperty compositeExpression) {
            this.props.compositeExpression(compositeExpression);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
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
         * @param labels This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props.labels(labels);
            return this;
        }
        /**
         * @return {@code this}
         * @param labels This parameter is required.
         */
        public Builder labels(final java.util.List<? extends java.lang.Object> labels) {
            this.props.labels(labels);
            return this;
        }

        /**
         * @return {@code this}
         * @param noDataPolicy This parameter is required.
         */
        public Builder noDataPolicy(final java.lang.String noDataPolicy) {
            this.props.noDataPolicy(noDataPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param noDataPolicy This parameter is required.
         */
        public Builder noDataPolicy(final com.aliyun.ros.cdk.core.IResolvable noDataPolicy) {
            this.props.noDataPolicy(noDataPolicy);
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
         * @param prometheus This parameter is required.
         */
        public Builder prometheus(final com.aliyun.ros.cdk.core.IResolvable prometheus) {
            this.props.prometheus(prometheus);
            return this;
        }
        /**
         * @return {@code this}
         * @param prometheus This parameter is required.
         */
        public Builder prometheus(final com.aliyun.ros.cdk.cms.RosResourceMetricRule.PrometheusProperty prometheus) {
            this.props.prometheus(prometheus);
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.RosResourceMetricRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosResourceMetricRule build() {
            return new com.aliyun.ros.cdk.cms.RosResourceMetricRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
