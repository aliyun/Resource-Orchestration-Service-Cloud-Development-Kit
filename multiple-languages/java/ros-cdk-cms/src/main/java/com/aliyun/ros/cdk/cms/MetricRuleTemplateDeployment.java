package com.aliyun.ros.cdk.cms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS::MetricRuleTemplateDeployment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.714Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.MetricRuleTemplateDeployment")
public class MetricRuleTemplateDeployment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cms.IMetricRuleTemplateDeployment {

    protected MetricRuleTemplateDeployment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MetricRuleTemplateDeployment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public MetricRuleTemplateDeployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.MetricRuleTemplateDeploymentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public MetricRuleTemplateDeployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.MetricRuleTemplateDeploymentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupId: The ID of the group that applied the template to.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleIds: The IDs of rhe generated rules.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.MetricRuleTemplateDeploymentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.MetricRuleTemplateDeploymentProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.MetricRuleTemplateDeployment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.MetricRuleTemplateDeployment> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms.MetricRuleTemplateDeploymentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.MetricRuleTemplateDeploymentProps.Builder();
        }

        /**
         * Property groupId: Apply group ID.
         * <p>
         * For how to get the application group ID, see DescribeMonitorGroups.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: Apply group ID. This parameter is required.
         */
        public Builder groupId(final java.lang.Number groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: Apply group ID.
         * <p>
         * For how to get the application group ID, see DescribeMonitorGroups.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: Apply group ID. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property templateIds: The ID list of the Alarm Template to be applied.
         * <p>
         * For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
         * <p>
         * @return {@code this}
         * @param templateIds Property templateIds: The ID list of the Alarm Template to be applied. This parameter is required.
         */
        public Builder templateIds(final com.aliyun.ros.cdk.core.IResolvable templateIds) {
            this.props.templateIds(templateIds);
            return this;
        }
        /**
         * Property templateIds: The ID list of the Alarm Template to be applied.
         * <p>
         * For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
         * <p>
         * @return {@code this}
         * @param templateIds Property templateIds: The ID list of the Alarm Template to be applied. This parameter is required.
         */
        public Builder templateIds(final java.util.List<? extends java.lang.Object> templateIds) {
            this.props.templateIds(templateIds);
            return this;
        }

        /**
         * Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
         * <p>
         * @return {@code this}
         * @param appendMode Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template. This parameter is required.
         */
        public Builder appendMode(final java.lang.String appendMode) {
            this.props.appendMode(appendMode);
            return this;
        }
        /**
         * Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
         * <p>
         * @return {@code this}
         * @param appendMode Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template. This parameter is required.
         */
        public Builder appendMode(final com.aliyun.ros.cdk.core.IResolvable appendMode) {
            this.props.appendMode(appendMode);
            return this;
        }

        /**
         * Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
         * <p>
         * @return {@code this}
         * @param applyMode Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group. This parameter is required.
         */
        public Builder applyMode(final java.lang.String applyMode) {
            this.props.applyMode(applyMode);
            return this;
        }
        /**
         * Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
         * <p>
         * @return {@code this}
         * @param applyMode Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group. This parameter is required.
         */
        public Builder applyMode(final com.aliyun.ros.cdk.core.IResolvable applyMode) {
            this.props.applyMode(applyMode);
            return this;
        }

        /**
         * Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
         * <p>
         * @return {@code this}
         * @param enableEndTime Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59. This parameter is required.
         */
        public Builder enableEndTime(final java.lang.Number enableEndTime) {
            this.props.enableEndTime(enableEndTime);
            return this;
        }
        /**
         * Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
         * <p>
         * @return {@code this}
         * @param enableEndTime Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59. This parameter is required.
         */
        public Builder enableEndTime(final com.aliyun.ros.cdk.core.IResolvable enableEndTime) {
            this.props.enableEndTime(enableEndTime);
            return this;
        }

        /**
         * Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
         * <p>
         * @return {@code this}
         * @param enableStartTime Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00. This parameter is required.
         */
        public Builder enableStartTime(final java.lang.Number enableStartTime) {
            this.props.enableStartTime(enableStartTime);
            return this;
        }
        /**
         * Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
         * <p>
         * @return {@code this}
         * @param enableStartTime Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00. This parameter is required.
         */
        public Builder enableStartTime(final com.aliyun.ros.cdk.core.IResolvable enableStartTime) {
            this.props.enableStartTime(enableStartTime);
            return this;
        }

        /**
         * Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot.
         * <p>
         * @return {@code this}
         * @param notifyLevel Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot. This parameter is required.
         */
        public Builder notifyLevel(final java.lang.Number notifyLevel) {
            this.props.notifyLevel(notifyLevel);
            return this;
        }
        /**
         * Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot.
         * <p>
         * @return {@code this}
         * @param notifyLevel Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot. This parameter is required.
         */
        public Builder notifyLevel(final com.aliyun.ros.cdk.core.IResolvable notifyLevel) {
            this.props.notifyLevel(notifyLevel);
            return this;
        }

        /**
         * Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
         * <p>
         * @return {@code this}
         * @param silenceTime Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle. This parameter is required.
         */
        public Builder silenceTime(final java.lang.Number silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }
        /**
         * Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
         * <p>
         * @return {@code this}
         * @param silenceTime Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle. This parameter is required.
         */
        public Builder silenceTime(final com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }

        /**
         * Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
         * <p>
         * @return {@code this}
         * @param webhook Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent. This parameter is required.
         */
        public Builder webhook(final java.lang.String webhook) {
            this.props.webhook(webhook);
            return this;
        }
        /**
         * Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
         * <p>
         * @return {@code this}
         * @param webhook Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent. This parameter is required.
         */
        public Builder webhook(final com.aliyun.ros.cdk.core.IResolvable webhook) {
            this.props.webhook(webhook);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.MetricRuleTemplateDeployment}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.MetricRuleTemplateDeployment build() {
            return new com.aliyun.ros.cdk.cms.MetricRuleTemplateDeployment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
