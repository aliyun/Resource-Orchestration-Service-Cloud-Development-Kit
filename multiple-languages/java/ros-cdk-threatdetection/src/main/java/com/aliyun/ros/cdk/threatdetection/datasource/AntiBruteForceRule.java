package com.aliyun.ros.cdk.threatdetection.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ThreatDetection::AntiBruteForceRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.193Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.datasource.AntiBruteForceRule")
public class AntiBruteForceRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.datasource.IAntiBruteForceRule {

    protected AntiBruteForceRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AntiBruteForceRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AntiBruteForceRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AntiBruteForceRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAntiBruteForceRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DefaultRule: Indicates whether the defense rule is the default rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultRule() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FailCount: The threshold of logon failures that is specified in the defense rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailCount() {
        return software.amazon.jsii.Kernel.get(this, "attrFailCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.
     * <p>
     * Unit: minutes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrForbiddenTime() {
        return software.amazon.jsii.Kernel.get(this, "attrForbiddenTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Span: The period of time during which logon failures from an account are measured.
     * <p>
     * Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP address of attackers cannot be used to log on to the server in the specified period of time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpan() {
        return software.amazon.jsii.Kernel.get(this, "attrSpan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UuidList: An array consisting of the UUIDs of servers to which the defense rule is applied.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuidList() {
        return software.amazon.jsii.Kernel.get(this, "attrUuidList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRule> {
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
        private final com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRuleProps.Builder();
        }

        /**
         * Property antiBruteForceRuleId: The ID of the defense rule.
         * <p>
         * @return {@code this}
         * @param antiBruteForceRuleId Property antiBruteForceRuleId: The ID of the defense rule. This parameter is required.
         */
        public Builder antiBruteForceRuleId(final java.lang.Number antiBruteForceRuleId) {
            this.props.antiBruteForceRuleId(antiBruteForceRuleId);
            return this;
        }
        /**
         * Property antiBruteForceRuleId: The ID of the defense rule.
         * <p>
         * @return {@code this}
         * @param antiBruteForceRuleId Property antiBruteForceRuleId: The ID of the defense rule. This parameter is required.
         */
        public Builder antiBruteForceRuleId(final com.aliyun.ros.cdk.core.IResolvable antiBruteForceRuleId) {
            this.props.antiBruteForceRuleId(antiBruteForceRuleId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRule}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRule build() {
            return new com.aliyun.ros.cdk.threatdetection.datasource.AntiBruteForceRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
