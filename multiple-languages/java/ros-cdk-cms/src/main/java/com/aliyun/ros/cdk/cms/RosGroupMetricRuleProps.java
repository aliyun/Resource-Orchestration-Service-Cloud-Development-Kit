package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>ALIYUN::CMS::GroupMetricRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:58.645Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosGroupMetricRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosGroupMetricRuleProps.Jsii$Proxy.class)
public interface RosGroupMetricRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEscalations();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMetricName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDimensions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEffectiveInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmailSubject() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNoEffectiveInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSilenceTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebhook() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGroupMetricRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGroupMetricRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGroupMetricRuleProps> {
        java.lang.Object category;
        java.lang.Object escalations;
        java.lang.Object groupId;
        java.lang.Object metricName;
        java.lang.Object namespace;
        java.lang.Object ruleId;
        java.lang.Object ruleName;
        java.lang.Object dimensions;
        java.lang.Object effectiveInterval;
        java.lang.Object emailSubject;
        java.lang.Object interval;
        java.lang.Object noEffectiveInterval;
        java.lang.Object period;
        java.lang.Object silenceTime;
        java.lang.Object webhook;

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getCategory}
         * @param category the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getCategory}
         * @param category the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getEscalations}
         * @param escalations the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder escalations(com.aliyun.ros.cdk.core.IResolvable escalations) {
            this.escalations = escalations;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getEscalations}
         * @param escalations the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder escalations(com.aliyun.ros.cdk.cms.RosGroupMetricRule.EscalationsProperty escalations) {
            this.escalations = escalations;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getMetricName}
         * @param metricName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder metricName(java.lang.String metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getMetricName}
         * @param metricName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder metricName(com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getRuleId}
         * @param ruleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleId(java.lang.String ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getRuleId}
         * @param ruleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleId(com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getDimensions}
         * @param dimensions the value to be set.
         * @return {@code this}
         */
        public Builder dimensions(java.lang.String dimensions) {
            this.dimensions = dimensions;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getDimensions}
         * @param dimensions the value to be set.
         * @return {@code this}
         */
        public Builder dimensions(com.aliyun.ros.cdk.core.IResolvable dimensions) {
            this.dimensions = dimensions;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getEffectiveInterval}
         * @param effectiveInterval the value to be set.
         * @return {@code this}
         */
        public Builder effectiveInterval(java.lang.String effectiveInterval) {
            this.effectiveInterval = effectiveInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getEffectiveInterval}
         * @param effectiveInterval the value to be set.
         * @return {@code this}
         */
        public Builder effectiveInterval(com.aliyun.ros.cdk.core.IResolvable effectiveInterval) {
            this.effectiveInterval = effectiveInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getEmailSubject}
         * @param emailSubject the value to be set.
         * @return {@code this}
         */
        public Builder emailSubject(java.lang.String emailSubject) {
            this.emailSubject = emailSubject;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getEmailSubject}
         * @param emailSubject the value to be set.
         * @return {@code this}
         */
        public Builder emailSubject(com.aliyun.ros.cdk.core.IResolvable emailSubject) {
            this.emailSubject = emailSubject;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getInterval}
         * @param interval the value to be set.
         * @return {@code this}
         */
        public Builder interval(java.lang.Number interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getInterval}
         * @param interval the value to be set.
         * @return {@code this}
         */
        public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getNoEffectiveInterval}
         * @param noEffectiveInterval the value to be set.
         * @return {@code this}
         */
        public Builder noEffectiveInterval(java.lang.String noEffectiveInterval) {
            this.noEffectiveInterval = noEffectiveInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getNoEffectiveInterval}
         * @param noEffectiveInterval the value to be set.
         * @return {@code this}
         */
        public Builder noEffectiveInterval(com.aliyun.ros.cdk.core.IResolvable noEffectiveInterval) {
            this.noEffectiveInterval = noEffectiveInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getSilenceTime}
         * @param silenceTime the value to be set.
         * @return {@code this}
         */
        public Builder silenceTime(java.lang.Number silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getSilenceTime}
         * @param silenceTime the value to be set.
         * @return {@code this}
         */
        public Builder silenceTime(com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getWebhook}
         * @param webhook the value to be set.
         * @return {@code this}
         */
        public Builder webhook(java.lang.String webhook) {
            this.webhook = webhook;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupMetricRuleProps#getWebhook}
         * @param webhook the value to be set.
         * @return {@code this}
         */
        public Builder webhook(com.aliyun.ros.cdk.core.IResolvable webhook) {
            this.webhook = webhook;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGroupMetricRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGroupMetricRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGroupMetricRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGroupMetricRuleProps {
        private final java.lang.Object category;
        private final java.lang.Object escalations;
        private final java.lang.Object groupId;
        private final java.lang.Object metricName;
        private final java.lang.Object namespace;
        private final java.lang.Object ruleId;
        private final java.lang.Object ruleName;
        private final java.lang.Object dimensions;
        private final java.lang.Object effectiveInterval;
        private final java.lang.Object emailSubject;
        private final java.lang.Object interval;
        private final java.lang.Object noEffectiveInterval;
        private final java.lang.Object period;
        private final java.lang.Object silenceTime;
        private final java.lang.Object webhook;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.escalations = software.amazon.jsii.Kernel.get(this, "escalations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metricName = software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleId = software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dimensions = software.amazon.jsii.Kernel.get(this, "dimensions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectiveInterval = software.amazon.jsii.Kernel.get(this, "effectiveInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.emailSubject = software.amazon.jsii.Kernel.get(this, "emailSubject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.noEffectiveInterval = software.amazon.jsii.Kernel.get(this, "noEffectiveInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.silenceTime = software.amazon.jsii.Kernel.get(this, "silenceTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webhook = software.amazon.jsii.Kernel.get(this, "webhook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.category = java.util.Objects.requireNonNull(builder.category, "category is required");
            this.escalations = java.util.Objects.requireNonNull(builder.escalations, "escalations is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.metricName = java.util.Objects.requireNonNull(builder.metricName, "metricName is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.ruleId = java.util.Objects.requireNonNull(builder.ruleId, "ruleId is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.dimensions = builder.dimensions;
            this.effectiveInterval = builder.effectiveInterval;
            this.emailSubject = builder.emailSubject;
            this.interval = builder.interval;
            this.noEffectiveInterval = builder.noEffectiveInterval;
            this.period = builder.period;
            this.silenceTime = builder.silenceTime;
            this.webhook = builder.webhook;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getEscalations() {
            return this.escalations;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
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
        public final java.lang.Object getRuleId() {
            return this.ruleId;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getDimensions() {
            return this.dimensions;
        }

        @Override
        public final java.lang.Object getEffectiveInterval() {
            return this.effectiveInterval;
        }

        @Override
        public final java.lang.Object getEmailSubject() {
            return this.emailSubject;
        }

        @Override
        public final java.lang.Object getInterval() {
            return this.interval;
        }

        @Override
        public final java.lang.Object getNoEffectiveInterval() {
            return this.noEffectiveInterval;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getSilenceTime() {
            return this.silenceTime;
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
            data.set("escalations", om.valueToTree(this.getEscalations()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("metricName", om.valueToTree(this.getMetricName()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            data.set("ruleId", om.valueToTree(this.getRuleId()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            if (this.getDimensions() != null) {
                data.set("dimensions", om.valueToTree(this.getDimensions()));
            }
            if (this.getEffectiveInterval() != null) {
                data.set("effectiveInterval", om.valueToTree(this.getEffectiveInterval()));
            }
            if (this.getEmailSubject() != null) {
                data.set("emailSubject", om.valueToTree(this.getEmailSubject()));
            }
            if (this.getInterval() != null) {
                data.set("interval", om.valueToTree(this.getInterval()));
            }
            if (this.getNoEffectiveInterval() != null) {
                data.set("noEffectiveInterval", om.valueToTree(this.getNoEffectiveInterval()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getSilenceTime() != null) {
                data.set("silenceTime", om.valueToTree(this.getSilenceTime()));
            }
            if (this.getWebhook() != null) {
                data.set("webhook", om.valueToTree(this.getWebhook()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosGroupMetricRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGroupMetricRuleProps.Jsii$Proxy that = (RosGroupMetricRuleProps.Jsii$Proxy) o;

            if (!category.equals(that.category)) return false;
            if (!escalations.equals(that.escalations)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!metricName.equals(that.metricName)) return false;
            if (!namespace.equals(that.namespace)) return false;
            if (!ruleId.equals(that.ruleId)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            if (this.dimensions != null ? !this.dimensions.equals(that.dimensions) : that.dimensions != null) return false;
            if (this.effectiveInterval != null ? !this.effectiveInterval.equals(that.effectiveInterval) : that.effectiveInterval != null) return false;
            if (this.emailSubject != null ? !this.emailSubject.equals(that.emailSubject) : that.emailSubject != null) return false;
            if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
            if (this.noEffectiveInterval != null ? !this.noEffectiveInterval.equals(that.noEffectiveInterval) : that.noEffectiveInterval != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.silenceTime != null ? !this.silenceTime.equals(that.silenceTime) : that.silenceTime != null) return false;
            return this.webhook != null ? this.webhook.equals(that.webhook) : that.webhook == null;
        }

        @Override
        public final int hashCode() {
            int result = this.category.hashCode();
            result = 31 * result + (this.escalations.hashCode());
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.metricName.hashCode());
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.ruleId.hashCode());
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.dimensions != null ? this.dimensions.hashCode() : 0);
            result = 31 * result + (this.effectiveInterval != null ? this.effectiveInterval.hashCode() : 0);
            result = 31 * result + (this.emailSubject != null ? this.emailSubject.hashCode() : 0);
            result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
            result = 31 * result + (this.noEffectiveInterval != null ? this.noEffectiveInterval.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.silenceTime != null ? this.silenceTime.hashCode() : 0);
            result = 31 * result + (this.webhook != null ? this.webhook.hashCode() : 0);
            return result;
        }
    }
}
