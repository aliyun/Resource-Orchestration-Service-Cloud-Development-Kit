package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>MetricRuleTemplateDeployment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.715Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.MetricRuleTemplateDeploymentProps")
@software.amazon.jsii.Jsii.Proxy(MetricRuleTemplateDeploymentProps.Jsii$Proxy.class)
public interface MetricRuleTemplateDeploymentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupId: Apply group ID.
     * <p>
     * For how to get the application group ID, see DescribeMonitorGroups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     * Property templateIds: The ID list of the Alarm Template to be applied.
     * <p>
     * For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateIds();

    /**
     * Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppendMode() {
        return null;
    }

    /**
     * Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApplyMode() {
        return null;
    }

    /**
     * Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableEndTime() {
        return null;
    }

    /**
     * Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableStartTime() {
        return null;
    }

    /**
     * Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotifyLevel() {
        return null;
    }

    /**
     * Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSilenceTime() {
        return null;
    }

    /**
     * Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebhook() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MetricRuleTemplateDeploymentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MetricRuleTemplateDeploymentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MetricRuleTemplateDeploymentProps> {
        java.lang.Object groupId;
        java.lang.Object templateIds;
        java.lang.Object appendMode;
        java.lang.Object applyMode;
        java.lang.Object enableEndTime;
        java.lang.Object enableStartTime;
        java.lang.Object notifyLevel;
        java.lang.Object silenceTime;
        java.lang.Object webhook;

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getGroupId}
         * @param groupId Property groupId: Apply group ID. This parameter is required.
         *                For how to get the application group ID, see DescribeMonitorGroups.
         * @return {@code this}
         */
        public Builder groupId(java.lang.Number groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getGroupId}
         * @param groupId Property groupId: Apply group ID. This parameter is required.
         *                For how to get the application group ID, see DescribeMonitorGroups.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getTemplateIds}
         * @param templateIds Property templateIds: The ID list of the Alarm Template to be applied. This parameter is required.
         *                    For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
         * @return {@code this}
         */
        public Builder templateIds(com.aliyun.ros.cdk.core.IResolvable templateIds) {
            this.templateIds = templateIds;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getTemplateIds}
         * @param templateIds Property templateIds: The ID list of the Alarm Template to be applied. This parameter is required.
         *                    For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
         * @return {@code this}
         */
        public Builder templateIds(java.util.List<? extends java.lang.Object> templateIds) {
            this.templateIds = templateIds;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getAppendMode}
         * @param appendMode Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
         * @return {@code this}
         */
        public Builder appendMode(java.lang.String appendMode) {
            this.appendMode = appendMode;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getAppendMode}
         * @param appendMode Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
         * @return {@code this}
         */
        public Builder appendMode(com.aliyun.ros.cdk.core.IResolvable appendMode) {
            this.appendMode = appendMode;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getApplyMode}
         * @param applyMode Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
         * @return {@code this}
         */
        public Builder applyMode(java.lang.String applyMode) {
            this.applyMode = applyMode;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getApplyMode}
         * @param applyMode Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
         * @return {@code this}
         */
        public Builder applyMode(com.aliyun.ros.cdk.core.IResolvable applyMode) {
            this.applyMode = applyMode;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getEnableEndTime}
         * @param enableEndTime Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
         * @return {@code this}
         */
        public Builder enableEndTime(java.lang.Number enableEndTime) {
            this.enableEndTime = enableEndTime;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getEnableEndTime}
         * @param enableEndTime Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
         * @return {@code this}
         */
        public Builder enableEndTime(com.aliyun.ros.cdk.core.IResolvable enableEndTime) {
            this.enableEndTime = enableEndTime;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getEnableStartTime}
         * @param enableStartTime Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
         * @return {@code this}
         */
        public Builder enableStartTime(java.lang.Number enableStartTime) {
            this.enableStartTime = enableStartTime;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getEnableStartTime}
         * @param enableStartTime Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
         * @return {@code this}
         */
        public Builder enableStartTime(com.aliyun.ros.cdk.core.IResolvable enableStartTime) {
            this.enableStartTime = enableStartTime;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getNotifyLevel}
         * @param notifyLevel Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot.
         * @return {@code this}
         */
        public Builder notifyLevel(java.lang.Number notifyLevel) {
            this.notifyLevel = notifyLevel;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getNotifyLevel}
         * @param notifyLevel Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot.
         * @return {@code this}
         */
        public Builder notifyLevel(com.aliyun.ros.cdk.core.IResolvable notifyLevel) {
            this.notifyLevel = notifyLevel;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getSilenceTime}
         * @param silenceTime Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
         * @return {@code this}
         */
        public Builder silenceTime(java.lang.Number silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getSilenceTime}
         * @param silenceTime Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
         * @return {@code this}
         */
        public Builder silenceTime(com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getWebhook}
         * @param webhook Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
         * @return {@code this}
         */
        public Builder webhook(java.lang.String webhook) {
            this.webhook = webhook;
            return this;
        }

        /**
         * Sets the value of {@link MetricRuleTemplateDeploymentProps#getWebhook}
         * @param webhook Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
         * @return {@code this}
         */
        public Builder webhook(com.aliyun.ros.cdk.core.IResolvable webhook) {
            this.webhook = webhook;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MetricRuleTemplateDeploymentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MetricRuleTemplateDeploymentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MetricRuleTemplateDeploymentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetricRuleTemplateDeploymentProps {
        private final java.lang.Object groupId;
        private final java.lang.Object templateIds;
        private final java.lang.Object appendMode;
        private final java.lang.Object applyMode;
        private final java.lang.Object enableEndTime;
        private final java.lang.Object enableStartTime;
        private final java.lang.Object notifyLevel;
        private final java.lang.Object silenceTime;
        private final java.lang.Object webhook;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateIds = software.amazon.jsii.Kernel.get(this, "templateIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appendMode = software.amazon.jsii.Kernel.get(this, "appendMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.applyMode = software.amazon.jsii.Kernel.get(this, "applyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableEndTime = software.amazon.jsii.Kernel.get(this, "enableEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableStartTime = software.amazon.jsii.Kernel.get(this, "enableStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notifyLevel = software.amazon.jsii.Kernel.get(this, "notifyLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.silenceTime = software.amazon.jsii.Kernel.get(this, "silenceTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webhook = software.amazon.jsii.Kernel.get(this, "webhook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.templateIds = java.util.Objects.requireNonNull(builder.templateIds, "templateIds is required");
            this.appendMode = builder.appendMode;
            this.applyMode = builder.applyMode;
            this.enableEndTime = builder.enableEndTime;
            this.enableStartTime = builder.enableStartTime;
            this.notifyLevel = builder.notifyLevel;
            this.silenceTime = builder.silenceTime;
            this.webhook = builder.webhook;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getTemplateIds() {
            return this.templateIds;
        }

        @Override
        public final java.lang.Object getAppendMode() {
            return this.appendMode;
        }

        @Override
        public final java.lang.Object getApplyMode() {
            return this.applyMode;
        }

        @Override
        public final java.lang.Object getEnableEndTime() {
            return this.enableEndTime;
        }

        @Override
        public final java.lang.Object getEnableStartTime() {
            return this.enableStartTime;
        }

        @Override
        public final java.lang.Object getNotifyLevel() {
            return this.notifyLevel;
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

            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("templateIds", om.valueToTree(this.getTemplateIds()));
            if (this.getAppendMode() != null) {
                data.set("appendMode", om.valueToTree(this.getAppendMode()));
            }
            if (this.getApplyMode() != null) {
                data.set("applyMode", om.valueToTree(this.getApplyMode()));
            }
            if (this.getEnableEndTime() != null) {
                data.set("enableEndTime", om.valueToTree(this.getEnableEndTime()));
            }
            if (this.getEnableStartTime() != null) {
                data.set("enableStartTime", om.valueToTree(this.getEnableStartTime()));
            }
            if (this.getNotifyLevel() != null) {
                data.set("notifyLevel", om.valueToTree(this.getNotifyLevel()));
            }
            if (this.getSilenceTime() != null) {
                data.set("silenceTime", om.valueToTree(this.getSilenceTime()));
            }
            if (this.getWebhook() != null) {
                data.set("webhook", om.valueToTree(this.getWebhook()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.MetricRuleTemplateDeploymentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MetricRuleTemplateDeploymentProps.Jsii$Proxy that = (MetricRuleTemplateDeploymentProps.Jsii$Proxy) o;

            if (!groupId.equals(that.groupId)) return false;
            if (!templateIds.equals(that.templateIds)) return false;
            if (this.appendMode != null ? !this.appendMode.equals(that.appendMode) : that.appendMode != null) return false;
            if (this.applyMode != null ? !this.applyMode.equals(that.applyMode) : that.applyMode != null) return false;
            if (this.enableEndTime != null ? !this.enableEndTime.equals(that.enableEndTime) : that.enableEndTime != null) return false;
            if (this.enableStartTime != null ? !this.enableStartTime.equals(that.enableStartTime) : that.enableStartTime != null) return false;
            if (this.notifyLevel != null ? !this.notifyLevel.equals(that.notifyLevel) : that.notifyLevel != null) return false;
            if (this.silenceTime != null ? !this.silenceTime.equals(that.silenceTime) : that.silenceTime != null) return false;
            return this.webhook != null ? this.webhook.equals(that.webhook) : that.webhook == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupId.hashCode();
            result = 31 * result + (this.templateIds.hashCode());
            result = 31 * result + (this.appendMode != null ? this.appendMode.hashCode() : 0);
            result = 31 * result + (this.applyMode != null ? this.applyMode.hashCode() : 0);
            result = 31 * result + (this.enableEndTime != null ? this.enableEndTime.hashCode() : 0);
            result = 31 * result + (this.enableStartTime != null ? this.enableStartTime.hashCode() : 0);
            result = 31 * result + (this.notifyLevel != null ? this.notifyLevel.hashCode() : 0);
            result = 31 * result + (this.silenceTime != null ? this.silenceTime.hashCode() : 0);
            result = 31 * result + (this.webhook != null ? this.webhook.hashCode() : 0);
            return result;
        }
    }
}
