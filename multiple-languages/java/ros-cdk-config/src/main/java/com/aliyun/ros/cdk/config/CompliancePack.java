package com.aliyun.ros.cdk.config;

/**
 * A ROS resource type:  `ALIYUN::Config::CompliancePack`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:18.630Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.CompliancePack")
public class CompliancePack extends com.aliyun.ros.cdk.core.Resource {

    protected CompliancePack(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CompliancePack(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::Config::CompliancePack`.
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
    public CompliancePack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.CompliancePackProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::Config::CompliancePack`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CompliancePack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.CompliancePackProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccountId: Aliyun User Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccountId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CompliancePackId: Compliance Package ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompliancePackId() {
        return software.amazon.jsii.Kernel.get(this, "attrCompliancePackId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CompliancePackName: Compliance Package Name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompliancePackName() {
        return software.amazon.jsii.Kernel.get(this, "attrCompliancePackName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CompliancePackTemplateId: Compliance Package Template Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompliancePackTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrCompliancePackTemplateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: Description.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RiskLevel: Ris Level.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRiskLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.CompliancePack}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.CompliancePack> {
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
        private final com.aliyun.ros.cdk.config.CompliancePackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.CompliancePackProps.Builder();
        }

        /**
         * Property compliancePackName: Compliance Package Name.
         * <p>
         * @return {@code this}
         * @param compliancePackName Property compliancePackName: Compliance Package Name. This parameter is required.
         */
        public Builder compliancePackName(final java.lang.String compliancePackName) {
            this.props.compliancePackName(compliancePackName);
            return this;
        }
        /**
         * Property compliancePackName: Compliance Package Name.
         * <p>
         * @return {@code this}
         * @param compliancePackName Property compliancePackName: Compliance Package Name. This parameter is required.
         */
        public Builder compliancePackName(final com.aliyun.ros.cdk.core.IResolvable compliancePackName) {
            this.props.compliancePackName(compliancePackName);
            return this;
        }

        /**
         * Property description: Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property riskLevel: Ris Level.
         * <p>
         * @return {@code this}
         * @param riskLevel Property riskLevel: Ris Level. This parameter is required.
         */
        public Builder riskLevel(final java.lang.Number riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }
        /**
         * Property riskLevel: Ris Level.
         * <p>
         * @return {@code this}
         * @param riskLevel Property riskLevel: Ris Level. This parameter is required.
         */
        public Builder riskLevel(final com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }

        /**
         * Property compliancePackTemplateId: Compliance Package Template Id.
         * <p>
         * @return {@code this}
         * @param compliancePackTemplateId Property compliancePackTemplateId: Compliance Package Template Id. This parameter is required.
         */
        public Builder compliancePackTemplateId(final java.lang.String compliancePackTemplateId) {
            this.props.compliancePackTemplateId(compliancePackTemplateId);
            return this;
        }
        /**
         * Property compliancePackTemplateId: Compliance Package Template Id.
         * <p>
         * @return {@code this}
         * @param compliancePackTemplateId Property compliancePackTemplateId: Compliance Package Template Id. This parameter is required.
         */
        public Builder compliancePackTemplateId(final com.aliyun.ros.cdk.core.IResolvable compliancePackTemplateId) {
            this.props.compliancePackTemplateId(compliancePackTemplateId);
            return this;
        }

        /**
         * Property configRules: Config Rule List.
         * <p>
         * @return {@code this}
         * @param configRules Property configRules: Config Rule List. This parameter is required.
         */
        public Builder configRules(final com.aliyun.ros.cdk.core.IResolvable configRules) {
            this.props.configRules(configRules);
            return this;
        }
        /**
         * Property configRules: Config Rule List.
         * <p>
         * @return {@code this}
         * @param configRules Property configRules: Config Rule List. This parameter is required.
         */
        public Builder configRules(final java.util.List<? extends java.lang.Object> configRules) {
            this.props.configRules(configRules);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.config.CompliancePack}.
         */
        @Override
        public com.aliyun.ros.cdk.config.CompliancePack build() {
            return new com.aliyun.ros.cdk.config.CompliancePack(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
