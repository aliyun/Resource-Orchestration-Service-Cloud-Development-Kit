package com.aliyun.ros.cdk.cms;

/**
 * A ROS resource type:  <code>ALIYUN::CMS::MetricRuleTemplate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.908Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.MetricRuleTemplate")
public class MetricRuleTemplate extends com.aliyun.ros.cdk.core.Resource {

    protected MetricRuleTemplate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MetricRuleTemplate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::CMS::MetricRuleTemplate</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public MetricRuleTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.MetricRuleTemplateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::CMS::MetricRuleTemplate</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public MetricRuleTemplate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.MetricRuleTemplateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Id: Alarm template ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.MetricRuleTemplate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.MetricRuleTemplate> {
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
        private final com.aliyun.ros.cdk.cms.MetricRuleTemplateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.MetricRuleTemplateProps.Builder();
        }

        /**
         * Property name: The name of the alert template.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the alert template. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the alert template.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the alert template. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property alertTemplates: Valid values of N: 0 to 200.
         * <p>
         * @return {@code this}
         * @param alertTemplates Property alertTemplates: Valid values of N: 0 to 200. This parameter is required.
         */
        public Builder alertTemplates(final com.aliyun.ros.cdk.core.IResolvable alertTemplates) {
            this.props.alertTemplates(alertTemplates);
            return this;
        }
        /**
         * Property alertTemplates: Valid values of N: 0 to 200.
         * <p>
         * @return {@code this}
         * @param alertTemplates Property alertTemplates: Valid values of N: 0 to 200. This parameter is required.
         */
        public Builder alertTemplates(final java.util.List<? extends java.lang.Object> alertTemplates) {
            this.props.alertTemplates(alertTemplates);
            return this;
        }

        /**
         * Property description: The description of the alert template.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the alert template. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the alert template.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the alert template. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property restVersion: The version of the alert template.
         * <p>
         * Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
         * to obtain information about the alert templates. The combination of version and ID
         * uniquely identifies an alert template.
         * <p>
         * @return {@code this}
         * @param restVersion Property restVersion: The version of the alert template. This parameter is required.
         */
        public Builder restVersion(final java.lang.Number restVersion) {
            this.props.restVersion(restVersion);
            return this;
        }
        /**
         * Property restVersion: The version of the alert template.
         * <p>
         * Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
         * to obtain information about the alert templates. The combination of version and ID
         * uniquely identifies an alert template.
         * <p>
         * @return {@code this}
         * @param restVersion Property restVersion: The version of the alert template. This parameter is required.
         */
        public Builder restVersion(final com.aliyun.ros.cdk.core.IResolvable restVersion) {
            this.props.restVersion(restVersion);
            return this;
        }

        /**
         * Property templateId: The ID of the alert template.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the alert template. This parameter is required.
         */
        public Builder templateId(final java.lang.Number templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * Property templateId: The ID of the alert template.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the alert template. This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.MetricRuleTemplate}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.MetricRuleTemplate build() {
            return new com.aliyun.ros.cdk.cms.MetricRuleTemplate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
