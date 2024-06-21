package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::AntiBruteForceRule</code>, which is used to create a defense rule against brute-force attacks.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.542Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRule")
public class RosAntiBruteForceRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAntiBruteForceRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAntiBruteForceRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAntiBruteForceRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAntiBruteForceRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAntiBruteForceRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrAntiBruteForceRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDefaultRule() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultRule", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFailCount() {
        return software.amazon.jsii.Kernel.get(this, "attrFailCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrForbiddenTime() {
        return software.amazon.jsii.Kernel.get(this, "attrForbiddenTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSpan() {
        return software.amazon.jsii.Kernel.get(this, "attrSpan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUuidList() {
        return software.amazon.jsii.Kernel.get(this, "attrUuidList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAntiBruteForceRuleName() {
        return software.amazon.jsii.Kernel.get(this, "antiBruteForceRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAntiBruteForceRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "antiBruteForceRuleName", java.util.Objects.requireNonNull(value, "antiBruteForceRuleName is required"));
    }

    /**
     */
    public void setAntiBruteForceRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "antiBruteForceRuleName", java.util.Objects.requireNonNull(value, "antiBruteForceRuleName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFailCount() {
        return software.amazon.jsii.Kernel.get(this, "failCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailCount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "failCount", java.util.Objects.requireNonNull(value, "failCount is required"));
    }

    /**
     */
    public void setFailCount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failCount", java.util.Objects.requireNonNull(value, "failCount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getForbiddenTime() {
        return software.amazon.jsii.Kernel.get(this, "forbiddenTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setForbiddenTime(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "forbiddenTime", java.util.Objects.requireNonNull(value, "forbiddenTime is required"));
    }

    /**
     */
    public void setForbiddenTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "forbiddenTime", java.util.Objects.requireNonNull(value, "forbiddenTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSpan() {
        return software.amazon.jsii.Kernel.get(this, "span", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpan(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "span", java.util.Objects.requireNonNull(value, "span is required"));
    }

    /**
     */
    public void setSpan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "span", java.util.Objects.requireNonNull(value, "span is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUuidList() {
        return software.amazon.jsii.Kernel.get(this, "uuidList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUuidList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "uuidList", java.util.Objects.requireNonNull(value, "uuidList is required"));
    }

    /**
     */
    public void setUuidList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "uuidList", java.util.Objects.requireNonNull(value, "uuidList is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultRule() {
        return software.amazon.jsii.Kernel.get(this, "defaultRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultRule(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "defaultRule", value);
    }

    /**
     */
    public void setDefaultRule(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultRule", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRule> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param antiBruteForceRuleName This parameter is required.
         */
        public Builder antiBruteForceRuleName(final java.lang.String antiBruteForceRuleName) {
            this.props.antiBruteForceRuleName(antiBruteForceRuleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param antiBruteForceRuleName This parameter is required.
         */
        public Builder antiBruteForceRuleName(final com.aliyun.ros.cdk.core.IResolvable antiBruteForceRuleName) {
            this.props.antiBruteForceRuleName(antiBruteForceRuleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param failCount This parameter is required.
         */
        public Builder failCount(final java.lang.Number failCount) {
            this.props.failCount(failCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param failCount This parameter is required.
         */
        public Builder failCount(final com.aliyun.ros.cdk.core.IResolvable failCount) {
            this.props.failCount(failCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param forbiddenTime This parameter is required.
         */
        public Builder forbiddenTime(final java.lang.Number forbiddenTime) {
            this.props.forbiddenTime(forbiddenTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param forbiddenTime This parameter is required.
         */
        public Builder forbiddenTime(final com.aliyun.ros.cdk.core.IResolvable forbiddenTime) {
            this.props.forbiddenTime(forbiddenTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param span This parameter is required.
         */
        public Builder span(final java.lang.Number span) {
            this.props.span(span);
            return this;
        }
        /**
         * @return {@code this}
         * @param span This parameter is required.
         */
        public Builder span(final com.aliyun.ros.cdk.core.IResolvable span) {
            this.props.span(span);
            return this;
        }

        /**
         * @return {@code this}
         * @param uuidList This parameter is required.
         */
        public Builder uuidList(final com.aliyun.ros.cdk.core.IResolvable uuidList) {
            this.props.uuidList(uuidList);
            return this;
        }
        /**
         * @return {@code this}
         * @param uuidList This parameter is required.
         */
        public Builder uuidList(final java.util.List<? extends java.lang.Object> uuidList) {
            this.props.uuidList(uuidList);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultRule This parameter is required.
         */
        public Builder defaultRule(final java.lang.Boolean defaultRule) {
            this.props.defaultRule(defaultRule);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultRule This parameter is required.
         */
        public Builder defaultRule(final com.aliyun.ros.cdk.core.IResolvable defaultRule) {
            this.props.defaultRule(defaultRule);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRule}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRule build() {
            return new com.aliyun.ros.cdk.threatdetection.RosAntiBruteForceRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
