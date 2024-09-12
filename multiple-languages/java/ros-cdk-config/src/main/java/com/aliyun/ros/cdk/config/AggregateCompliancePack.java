package com.aliyun.ros.cdk.config;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Config::AggregateCompliancePack</code>, which is used to create a compliance package for an account group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:24.720Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.AggregateCompliancePack")
public class AggregateCompliancePack extends com.aliyun.ros.cdk.core.Resource {

    protected AggregateCompliancePack(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AggregateCompliancePack(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AggregateCompliancePack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.AggregateCompliancePackProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AggregateCompliancePack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.AggregateCompliancePackProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CompliancePackId: The ID of the compliance pack id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompliancePackId() {
        return software.amazon.jsii.Kernel.get(this, "attrCompliancePackId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.AggregateCompliancePackProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.AggregateCompliancePackProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.AggregateCompliancePackProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.AggregateCompliancePack}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.AggregateCompliancePack> {
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
        private final com.aliyun.ros.cdk.config.AggregateCompliancePackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.AggregateCompliancePackProps.Builder();
        }

        /**
         * Property aggregatorId: Aggregator id.
         * <p>
         * @return {@code this}
         * @param aggregatorId Property aggregatorId: Aggregator id. This parameter is required.
         */
        public Builder aggregatorId(final java.lang.String aggregatorId) {
            this.props.aggregatorId(aggregatorId);
            return this;
        }
        /**
         * Property aggregatorId: Aggregator id.
         * <p>
         * @return {@code this}
         * @param aggregatorId Property aggregatorId: Aggregator id. This parameter is required.
         */
        public Builder aggregatorId(final com.aliyun.ros.cdk.core.IResolvable aggregatorId) {
            this.props.aggregatorId(aggregatorId);
            return this;
        }

        /**
         * Property compliancePackName: Compliance package name.
         * <p>
         * @return {@code this}
         * @param compliancePackName Property compliancePackName: Compliance package name. This parameter is required.
         */
        public Builder compliancePackName(final java.lang.String compliancePackName) {
            this.props.compliancePackName(compliancePackName);
            return this;
        }
        /**
         * Property compliancePackName: Compliance package name.
         * <p>
         * @return {@code this}
         * @param compliancePackName Property compliancePackName: Compliance package name. This parameter is required.
         */
        public Builder compliancePackName(final com.aliyun.ros.cdk.core.IResolvable compliancePackName) {
            this.props.compliancePackName(compliancePackName);
            return this;
        }

        /**
         * Property configRules: List of rules in the compliance package.
         * <p>
         * @return {@code this}
         * @param configRules Property configRules: List of rules in the compliance package. This parameter is required.
         */
        public Builder configRules(final com.aliyun.ros.cdk.core.IResolvable configRules) {
            this.props.configRules(configRules);
            return this;
        }
        /**
         * Property configRules: List of rules in the compliance package.
         * <p>
         * @return {@code this}
         * @param configRules Property configRules: List of rules in the compliance package. This parameter is required.
         */
        public Builder configRules(final java.util.List<? extends java.lang.Object> configRules) {
            this.props.configRules(configRules);
            return this;
        }

        /**
         * Property description: The description of compliance pack.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of compliance pack. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of compliance pack.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of compliance pack. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property riskLevel: Compliance package risk level.
         * <p>
         * Value:
         * 1: High risk.
         * 2: Medium risk.
         * 3: Low risk.
         * <p>
         * @return {@code this}
         * @param riskLevel Property riskLevel: Compliance package risk level. This parameter is required.
         */
        public Builder riskLevel(final java.lang.Number riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }
        /**
         * Property riskLevel: Compliance package risk level.
         * <p>
         * Value:
         * 1: High risk.
         * 2: Medium risk.
         * 3: Low risk.
         * <p>
         * @return {@code this}
         * @param riskLevel Property riskLevel: Compliance package risk level. This parameter is required.
         */
        public Builder riskLevel(final com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }

        /**
         * Property compliancePackTemplateId: Compliance package template ID.
         * <p>
         * @return {@code this}
         * @param compliancePackTemplateId Property compliancePackTemplateId: Compliance package template ID. This parameter is required.
         */
        public Builder compliancePackTemplateId(final java.lang.String compliancePackTemplateId) {
            this.props.compliancePackTemplateId(compliancePackTemplateId);
            return this;
        }
        /**
         * Property compliancePackTemplateId: Compliance package template ID.
         * <p>
         * @return {@code this}
         * @param compliancePackTemplateId Property compliancePackTemplateId: Compliance package template ID. This parameter is required.
         */
        public Builder compliancePackTemplateId(final com.aliyun.ros.cdk.core.IResolvable compliancePackTemplateId) {
            this.props.compliancePackTemplateId(compliancePackTemplateId);
            return this;
        }

        /**
         * Property defaultEnable: Whether the rule supports quick activation.
         * <p>
         * Value:
         * true: This rule will be enabled when the compliance package is quickly enabled.
         * false (default): disable
         * <p>
         * @return {@code this}
         * @param defaultEnable Property defaultEnable: Whether the rule supports quick activation. This parameter is required.
         */
        public Builder defaultEnable(final java.lang.Boolean defaultEnable) {
            this.props.defaultEnable(defaultEnable);
            return this;
        }
        /**
         * Property defaultEnable: Whether the rule supports quick activation.
         * <p>
         * Value:
         * true: This rule will be enabled when the compliance package is quickly enabled.
         * false (default): disable
         * <p>
         * @return {@code this}
         * @param defaultEnable Property defaultEnable: Whether the rule supports quick activation. This parameter is required.
         */
        public Builder defaultEnable(final com.aliyun.ros.cdk.core.IResolvable defaultEnable) {
            this.props.defaultEnable(defaultEnable);
            return this;
        }

        /**
         * Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
         * <p>
         * @return {@code this}
         * @param excludeResourceIdsScope Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource. This parameter is required.
         */
        public Builder excludeResourceIdsScope(final com.aliyun.ros.cdk.core.IResolvable excludeResourceIdsScope) {
            this.props.excludeResourceIdsScope(excludeResourceIdsScope);
            return this;
        }
        /**
         * Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
         * <p>
         * @return {@code this}
         * @param excludeResourceIdsScope Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource. This parameter is required.
         */
        public Builder excludeResourceIdsScope(final java.util.List<? extends java.lang.Object> excludeResourceIdsScope) {
            this.props.excludeResourceIdsScope(excludeResourceIdsScope);
            return this;
        }

        /**
         * Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
         * <p>
         * @return {@code this}
         * @param regionIdsScope Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID. This parameter is required.
         */
        public Builder regionIdsScope(final com.aliyun.ros.cdk.core.IResolvable regionIdsScope) {
            this.props.regionIdsScope(regionIdsScope);
            return this;
        }
        /**
         * Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
         * <p>
         * @return {@code this}
         * @param regionIdsScope Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID. This parameter is required.
         */
        public Builder regionIdsScope(final java.util.List<? extends java.lang.Object> regionIdsScope) {
            this.props.regionIdsScope(regionIdsScope);
            return this;
        }

        /**
         * Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupIdsScope Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID. This parameter is required.
         */
        public Builder resourceGroupIdsScope(final com.aliyun.ros.cdk.core.IResolvable resourceGroupIdsScope) {
            this.props.resourceGroupIdsScope(resourceGroupIdsScope);
            return this;
        }
        /**
         * Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupIdsScope Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID. This parameter is required.
         */
        public Builder resourceGroupIdsScope(final java.util.List<? extends java.lang.Object> resourceGroupIdsScope) {
            this.props.resourceGroupIdsScope(resourceGroupIdsScope);
            return this;
        }

        /**
         * Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
         * <p>
         * @return {@code this}
         * @param tagKeyScope Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key. This parameter is required.
         */
        public Builder tagKeyScope(final java.lang.String tagKeyScope) {
            this.props.tagKeyScope(tagKeyScope);
            return this;
        }
        /**
         * Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
         * <p>
         * @return {@code this}
         * @param tagKeyScope Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key. This parameter is required.
         */
        public Builder tagKeyScope(final com.aliyun.ros.cdk.core.IResolvable tagKeyScope) {
            this.props.tagKeyScope(tagKeyScope);
            return this;
        }

        /**
         * Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
         * <p>
         * @return {@code this}
         * @param tagValueScope Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope. This parameter is required.
         */
        public Builder tagValueScope(final java.lang.String tagValueScope) {
            this.props.tagValueScope(tagValueScope);
            return this;
        }
        /**
         * Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
         * <p>
         * @return {@code this}
         * @param tagValueScope Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope. This parameter is required.
         */
        public Builder tagValueScope(final com.aliyun.ros.cdk.core.IResolvable tagValueScope) {
            this.props.tagValueScope(tagValueScope);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.AggregateCompliancePack}.
         */
        @Override
        public com.aliyun.ros.cdk.config.AggregateCompliancePack build() {
            return new com.aliyun.ros.cdk.config.AggregateCompliancePack(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
