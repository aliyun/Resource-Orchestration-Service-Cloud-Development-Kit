package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::AntiBruteForceRule</code>, which is used to create a defense rule against brute-force attacks.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:57.699Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.AntiBruteForceRule")
public class AntiBruteForceRule extends com.aliyun.ros.cdk.core.Resource {

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
    public AntiBruteForceRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AntiBruteForceRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AntiBruteForceRuleId: The ID of the defense rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAntiBruteForceRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AntiBruteForceRuleName: The name of the defense rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAntiBruteForceRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true: yes</li>
     * <li>false: no</li>
     * </ul>
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDefaultRule() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultRule", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFailCount() {
        return software.amazon.jsii.Kernel.get(this, "attrFailCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.
     * <p>
     * Unit: minutes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrForbiddenTime() {
        return software.amazon.jsii.Kernel.get(this, "attrForbiddenTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Span: The period of time during which logon failures from an account are measured.
     * <p>
     * Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSpan() {
        return software.amazon.jsii.Kernel.get(this, "attrSpan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUuidList() {
        return software.amazon.jsii.Kernel.get(this, "attrUuidList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.AntiBruteForceRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.AntiBruteForceRule> {
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
        private final com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.AntiBruteForceRuleProps.Builder();
        }

        /**
         * Property antiBruteForceRuleName: The name of the defense rule.
         * <p>
         * @return {@code this}
         * @param antiBruteForceRuleName Property antiBruteForceRuleName: The name of the defense rule. This parameter is required.
         */
        public Builder antiBruteForceRuleName(final java.lang.String antiBruteForceRuleName) {
            this.props.antiBruteForceRuleName(antiBruteForceRuleName);
            return this;
        }
        /**
         * Property antiBruteForceRuleName: The name of the defense rule.
         * <p>
         * @return {@code this}
         * @param antiBruteForceRuleName Property antiBruteForceRuleName: The name of the defense rule. This parameter is required.
         */
        public Builder antiBruteForceRuleName(final com.aliyun.ros.cdk.core.IResolvable antiBruteForceRuleName) {
            this.props.antiBruteForceRuleName(antiBruteForceRuleName);
            return this;
        }

        /**
         * Property failCount: The maximum number of failed logon attempts from an account.
         * <p>
         * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
         * <p>
         * @return {@code this}
         * @param failCount Property failCount: The maximum number of failed logon attempts from an account. This parameter is required.
         */
        public Builder failCount(final java.lang.Number failCount) {
            this.props.failCount(failCount);
            return this;
        }
        /**
         * Property failCount: The maximum number of failed logon attempts from an account.
         * <p>
         * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
         * <p>
         * @return {@code this}
         * @param failCount Property failCount: The maximum number of failed logon attempts from an account. This parameter is required.
         */
        public Builder failCount(final com.aliyun.ros.cdk.core.IResolvable failCount) {
            this.props.failCount(failCount);
            return this;
        }

        /**
         * Property forbiddenTime: The period of time during which logons from an account are not allowed.
         * <p>
         * Unit: minutes. Valid values:
         * <p>
         * <ul>
         * <li>5: 5 minutes</li>
         * <li>15: 15 minutes</li>
         * <li>30: 30 minutes</li>
         * <li>60: 1 hour</li>
         * <li>120: 2 hours</li>
         * <li>360: 6 hours</li>
         * <li>720: 12 hours</li>
         * <li>1440: 24 hours</li>
         * <li>10080: 7 days</li>
         * <li>52560000: permanent</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param forbiddenTime Property forbiddenTime: The period of time during which logons from an account are not allowed. This parameter is required.
         */
        public Builder forbiddenTime(final java.lang.Number forbiddenTime) {
            this.props.forbiddenTime(forbiddenTime);
            return this;
        }
        /**
         * Property forbiddenTime: The period of time during which logons from an account are not allowed.
         * <p>
         * Unit: minutes. Valid values:
         * <p>
         * <ul>
         * <li>5: 5 minutes</li>
         * <li>15: 15 minutes</li>
         * <li>30: 30 minutes</li>
         * <li>60: 1 hour</li>
         * <li>120: 2 hours</li>
         * <li>360: 6 hours</li>
         * <li>720: 12 hours</li>
         * <li>1440: 24 hours</li>
         * <li>10080: 7 days</li>
         * <li>52560000: permanent</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param forbiddenTime Property forbiddenTime: The period of time during which logons from an account are not allowed. This parameter is required.
         */
        public Builder forbiddenTime(final com.aliyun.ros.cdk.core.IResolvable forbiddenTime) {
            this.props.forbiddenTime(forbiddenTime);
            return this;
        }

        /**
         * Property span: The maximum period of time during which failed logon attempts from an account can occur.
         * <p>
         * Unit: minutes. Valid values:
         * <p>
         * <ul>
         * <li>1</li>
         * <li>2</li>
         * <li>5</li>
         * <li>10</li>
         * <li>15</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param span Property span: The maximum period of time during which failed logon attempts from an account can occur. This parameter is required.
         */
        public Builder span(final java.lang.Number span) {
            this.props.span(span);
            return this;
        }
        /**
         * Property span: The maximum period of time during which failed logon attempts from an account can occur.
         * <p>
         * Unit: minutes. Valid values:
         * <p>
         * <ul>
         * <li>1</li>
         * <li>2</li>
         * <li>5</li>
         * <li>10</li>
         * <li>15</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param span Property span: The maximum period of time during which failed logon attempts from an account can occur. This parameter is required.
         */
        public Builder span(final com.aliyun.ros.cdk.core.IResolvable span) {
            this.props.span(span);
            return this;
        }

        /**
         * Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
         * <p>
         * @return {@code this}
         * @param uuidList Property uuidList: The UUIDs of the servers to which you want to apply the defense rule. This parameter is required.
         */
        public Builder uuidList(final com.aliyun.ros.cdk.core.IResolvable uuidList) {
            this.props.uuidList(uuidList);
            return this;
        }
        /**
         * Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
         * <p>
         * @return {@code this}
         * @param uuidList Property uuidList: The UUIDs of the servers to which you want to apply the defense rule. This parameter is required.
         */
        public Builder uuidList(final java.util.List<? extends java.lang.Object> uuidList) {
            this.props.uuidList(uuidList);
            return this;
        }

        /**
         * Property defaultRule: Specifies whether to set the defense rule as the default rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: yes</li>
         * <li>false: no</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param defaultRule Property defaultRule: Specifies whether to set the defense rule as the default rule. This parameter is required.
         */
        public Builder defaultRule(final java.lang.Boolean defaultRule) {
            this.props.defaultRule(defaultRule);
            return this;
        }
        /**
         * Property defaultRule: Specifies whether to set the defense rule as the default rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: yes</li>
         * <li>false: no</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param defaultRule Property defaultRule: Specifies whether to set the defense rule as the default rule. This parameter is required.
         */
        public Builder defaultRule(final com.aliyun.ros.cdk.core.IResolvable defaultRule) {
            this.props.defaultRule(defaultRule);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.AntiBruteForceRule}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.AntiBruteForceRule build() {
            return new com.aliyun.ros.cdk.threatdetection.AntiBruteForceRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
