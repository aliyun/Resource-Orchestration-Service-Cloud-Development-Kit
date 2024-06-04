package com.aliyun.ros.cdk.cms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CMS::MetricRuleTemplate</code>, which is used to create an alert template.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.288Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMetricRuleTemplate")
public class RosMetricRuleTemplate extends com.aliyun.ros.cdk.core.RosResource {

    protected RosMetricRuleTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMetricRuleTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosMetricRuleTemplate.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosMetricRuleTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosMetricRuleTemplateProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlertTemplates() {
        return software.amazon.jsii.Kernel.get(this, "alertTemplates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlertTemplates(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alertTemplates", value);
    }

    /**
     */
    public void setAlertTemplates(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cms.RosMetricRuleTemplate.AlertTemplatesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cms.RosMetricRuleTemplate.AlertTemplatesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "alertTemplates", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestVersion() {
        return software.amazon.jsii.Kernel.get(this, "restVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestVersion(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "restVersion", value);
    }

    /**
     */
    public void setRestVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty")
    @software.amazon.jsii.Jsii.Proxy(AlertTemplatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AlertTemplatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMetricName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEscalations() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSelector() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWebhook() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AlertTemplatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AlertTemplatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AlertTemplatesProperty> {
            java.lang.Object category;
            java.lang.Object metricName;
            java.lang.Object namespace;
            java.lang.Object ruleName;
            java.lang.Object escalations;
            java.lang.Object period;
            java.lang.Object selector;
            java.lang.Object webhook;

            /**
             * Sets the value of {@link AlertTemplatesProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getCategory}
             * @param category the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getMetricName}
             * @param metricName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricName(java.lang.String metricName) {
                this.metricName = metricName;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getMetricName}
             * @param metricName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder metricName(com.aliyun.ros.cdk.core.IResolvable metricName) {
                this.metricName = metricName;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getNamespace}
             * @param namespace the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(java.lang.String namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getNamespace}
             * @param namespace the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
                this.namespace = namespace;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getRuleName}
             * @param ruleName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleName(java.lang.String ruleName) {
                this.ruleName = ruleName;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getRuleName}
             * @param ruleName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
                this.ruleName = ruleName;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getEscalations}
             * @param escalations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder escalations(com.aliyun.ros.cdk.core.IResolvable escalations) {
                this.escalations = escalations;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getEscalations}
             * @param escalations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder escalations(com.aliyun.ros.cdk.cms.RosMetricRuleTemplate.EscalationsProperty escalations) {
                this.escalations = escalations;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(java.lang.Number period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getPeriod}
             * @param period the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
                this.period = period;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getSelector}
             * @param selector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder selector(java.lang.String selector) {
                this.selector = selector;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getSelector}
             * @param selector the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder selector(com.aliyun.ros.cdk.core.IResolvable selector) {
                this.selector = selector;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getWebhook}
             * @param webhook the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder webhook(java.lang.String webhook) {
                this.webhook = webhook;
                return this;
            }

            /**
             * Sets the value of {@link AlertTemplatesProperty#getWebhook}
             * @param webhook the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder webhook(com.aliyun.ros.cdk.core.IResolvable webhook) {
                this.webhook = webhook;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AlertTemplatesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AlertTemplatesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AlertTemplatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AlertTemplatesProperty {
            private final java.lang.Object category;
            private final java.lang.Object metricName;
            private final java.lang.Object namespace;
            private final java.lang.Object ruleName;
            private final java.lang.Object escalations;
            private final java.lang.Object period;
            private final java.lang.Object selector;
            private final java.lang.Object webhook;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.metricName = software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.escalations = software.amazon.jsii.Kernel.get(this, "escalations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.selector = software.amazon.jsii.Kernel.get(this, "selector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.webhook = software.amazon.jsii.Kernel.get(this, "webhook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
                this.metricName = java.util.Objects.requireNonNull(builder.metricName, "metricName is required");
                this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
                this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
                this.escalations = builder.escalations;
                this.period = builder.period;
                this.selector = builder.selector;
                this.webhook = builder.webhook;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getMetricName() {
                return this.metricName;
            }

            @Override
            public final java.lang.Object getNamespace() {
                return this.namespace;
            }

            @Override
            public final java.lang.Object getRuleName() {
                return this.ruleName;
            }

            @Override
            public final java.lang.Object getEscalations() {
                return this.escalations;
            }

            @Override
            public final java.lang.Object getPeriod() {
                return this.period;
            }

            @Override
            public final java.lang.Object getSelector() {
                return this.selector;
            }

            @Override
            public final java.lang.Object getWebhook() {
                return this.webhook;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("category", om.valueToTree(this.getCategory()));
                data.set("metricName", om.valueToTree(this.getMetricName()));
                data.set("namespace", om.valueToTree(this.getNamespace()));
                data.set("ruleName", om.valueToTree(this.getRuleName()));
                if (this.getEscalations() != null) {
                    data.set("escalations", om.valueToTree(this.getEscalations()));
                }
                if (this.getPeriod() != null) {
                    data.set("period", om.valueToTree(this.getPeriod()));
                }
                if (this.getSelector() != null) {
                    data.set("selector", om.valueToTree(this.getSelector()));
                }
                if (this.getWebhook() != null) {
                    data.set("webhook", om.valueToTree(this.getWebhook()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AlertTemplatesProperty.Jsii$Proxy that = (AlertTemplatesProperty.Jsii$Proxy) o;

                if (!category.equals(that.category)) return false;
                if (!metricName.equals(that.metricName)) return false;
                if (!namespace.equals(that.namespace)) return false;
                if (!ruleName.equals(that.ruleName)) return false;
                if (this.escalations != null ? !this.escalations.equals(that.escalations) : that.escalations != null) return false;
                if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
                if (this.selector != null ? !this.selector.equals(that.selector) : that.selector != null) return false;
                return this.webhook != null ? this.webhook.equals(that.webhook) : that.webhook == null;
            }

            @Override
            public final int hashCode() {
                int result = this.category.hashCode();
                result = 31 * result + (this.metricName.hashCode());
                result = 31 * result + (this.namespace.hashCode());
                result = 31 * result + (this.ruleName.hashCode());
                result = 31 * result + (this.escalations != null ? this.escalations.hashCode() : 0);
                result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
                result = 31 * result + (this.selector != null ? this.selector.hashCode() : 0);
                result = 31 * result + (this.webhook != null ? this.webhook.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty")
    @software.amazon.jsii.Jsii.Proxy(EscalationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EscalationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCritical();

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
             * @param critical the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder critical(com.aliyun.ros.cdk.core.IResolvable critical) {
                this.critical = critical;
                return this;
            }

            /**
             * Sets the value of {@link EscalationsProperty#getCritical}
             * @param critical the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder critical(com.aliyun.ros.cdk.cms.RosMetricRuleTemplate.CriticalProperty critical) {
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
            public Builder info(com.aliyun.ros.cdk.cms.RosMetricRuleTemplate.InfoProperty info) {
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
            public Builder warn(com.aliyun.ros.cdk.cms.RosMetricRuleTemplate.WarnProperty warn) {
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
                this.critical = java.util.Objects.requireNonNull(builder.critical, "critical is required");
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

                data.set("critical", om.valueToTree(this.getCritical()));
                if (this.getInfo() != null) {
                    data.set("info", om.valueToTree(this.getInfo()));
                }
                if (this.getWarn() != null) {
                    data.set("warn", om.valueToTree(this.getWarn()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty"));
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

                if (!critical.equals(that.critical)) return false;
                if (this.info != null ? !this.info.equals(that.info) : that.info != null) return false;
                return this.warn != null ? this.warn.equals(that.warn) : that.warn == null;
            }

            @Override
            public final int hashCode() {
                int result = this.critical.hashCode();
                result = 31 * result + (this.info != null ? this.info.hashCode() : 0);
                result = 31 * result + (this.warn != null ? this.warn.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosMetricRuleTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosMetricRuleTemplate> {
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
        private final com.aliyun.ros.cdk.cms.RosMetricRuleTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosMetricRuleTemplateProps.Builder();
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param alertTemplates This parameter is required.
         */
        public Builder alertTemplates(final com.aliyun.ros.cdk.core.IResolvable alertTemplates) {
            this.props.alertTemplates(alertTemplates);
            return this;
        }
        /**
         * @return {@code this}
         * @param alertTemplates This parameter is required.
         */
        public Builder alertTemplates(final java.util.List<? extends java.lang.Object> alertTemplates) {
            this.props.alertTemplates(alertTemplates);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param restVersion This parameter is required.
         */
        public Builder restVersion(final java.lang.Number restVersion) {
            this.props.restVersion(restVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param restVersion This parameter is required.
         */
        public Builder restVersion(final com.aliyun.ros.cdk.core.IResolvable restVersion) {
            this.props.restVersion(restVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final java.lang.Number templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.RosMetricRuleTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosMetricRuleTemplate build() {
            return new com.aliyun.ros.cdk.cms.RosMetricRuleTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
