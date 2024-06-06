package com.aliyun.ros.cdk.ddospro;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DDoSPro::SchedulerRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:13.722Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.SchedulerRule")
public class SchedulerRule extends com.aliyun.ros.cdk.core.Resource {

    protected SchedulerRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SchedulerRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SchedulerRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.SchedulerRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SchedulerRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.SchedulerRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RuleName: The name of the rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.SchedulerRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddospro.SchedulerRuleProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.SchedulerRuleProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ddospro.SchedulerRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddospro.SchedulerRule> {
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
        private final com.aliyun.ros.cdk.ddospro.SchedulerRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ddospro.SchedulerRuleProps.Builder();
        }

        /**
         * Property ruleName: The name of the rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property rules: The details of the scheduling rule.
         * <p>
         * This parameter is a JSON string. The following list describes the fields in the value of the parameter:
         * Type: the address type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type. Valid values: A: IP address. CNAME: domain name
         * Value: the address of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type.
         * Priority: the priority of the scheduling rule. This field is required and must be of the integer type. Valid values: 0 to 100. A larger value indicates a higher priority.
         * ValueType: the type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the integer type. Valid values: 1: the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. 2: the IP address of the interaction resource in the tiered protection scenario. 3: the IP address that is used to accelerate access in the network acceleration scenario. 5: the domain name that is configured in Alibaba Cloud CDN (CDN) in the CDN interaction scenario. 6 the IP address of the interaction resource in the cloud service interaction scenario
         * RegionId: the region where the interaction resource is deployed. This parameter must be specified when ValueType is set to 2. The value must be of the string type.
         * <p>
         * @return {@code this}
         * @param rules Property rules: The details of the scheduling rule. This parameter is required.
         */
        public Builder rules(final java.lang.String rules) {
            this.props.rules(rules);
            return this;
        }
        /**
         * Property rules: The details of the scheduling rule.
         * <p>
         * This parameter is a JSON string. The following list describes the fields in the value of the parameter:
         * Type: the address type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type. Valid values: A: IP address. CNAME: domain name
         * Value: the address of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the string type.
         * Priority: the priority of the scheduling rule. This field is required and must be of the integer type. Valid values: 0 to 100. A larger value indicates a higher priority.
         * ValueType: the type of the interaction resource that you want to use in the scheduling rule. This field is required and must be of the integer type. Valid values: 1: the IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance. 2: the IP address of the interaction resource in the tiered protection scenario. 3: the IP address that is used to accelerate access in the network acceleration scenario. 5: the domain name that is configured in Alibaba Cloud CDN (CDN) in the CDN interaction scenario. 6 the IP address of the interaction resource in the cloud service interaction scenario
         * RegionId: the region where the interaction resource is deployed. This parameter must be specified when ValueType is set to 2. The value must be of the string type.
         * <p>
         * @return {@code this}
         * @param rules Property rules: The details of the scheduling rule. This parameter is required.
         */
        public Builder rules(final com.aliyun.ros.cdk.core.IResolvable rules) {
            this.props.rules(rules);
            return this;
        }

        /**
         * Property ruleType: The type of the custom defense rule.
         * <p>
         * Valid values:
         * 2: tiered protection
         * 3: network acceleration
         * 5: CDN interaction
         * 6: cloud service interaction
         * 8: secure acceleration
         * <p>
         * @return {@code this}
         * @param ruleType Property ruleType: The type of the custom defense rule. This parameter is required.
         */
        public Builder ruleType(final java.lang.Number ruleType) {
            this.props.ruleType(ruleType);
            return this;
        }
        /**
         * Property ruleType: The type of the custom defense rule.
         * <p>
         * Valid values:
         * 2: tiered protection
         * 3: network acceleration
         * 5: CDN interaction
         * 6: cloud service interaction
         * 8: secure acceleration
         * <p>
         * @return {@code this}
         * @param ruleType Property ruleType: The type of the custom defense rule. This parameter is required.
         */
        public Builder ruleType(final com.aliyun.ros.cdk.core.IResolvable ruleType) {
            this.props.ruleType(ruleType);
            return this;
        }

        /**
         * Property param: The details of the CDN interaction rule.
         * <p>
         * This parameter is a JSON string. The following list describes the fields in the value of the parameter:
         * ParamType: the type of the scheduling rule. This field is required and must be of the string type. Set the value to cdn. This indicates that you want to modify a CDN interaction rule.
         * ParamData: the values of parameters that you want to modify for the CDN interaction rule. This field is required and must be of the map type. ParamData contains the following parameters: Domain: the accelerated domain in CDN. This parameter is required and must be of the string type; Cname: the CNAME that is assigned to the accelerated domain. This parameter is required and must be of the string type; AccessQps: the queries per second (QPS) threshold that is used to switch service traffic to Anti-DDoS Pro or Anti-DDoS Premium. This parameter is required and must be of the integer type; UpstreamQps: the QPS threshold that is used to switch service traffic to CDN. This parameter is optional and must be of the integer type.
         * <p>
         * @return {@code this}
         * @param param Property param: The details of the CDN interaction rule. This parameter is required.
         */
        public Builder param(final java.lang.String param) {
            this.props.param(param);
            return this;
        }
        /**
         * Property param: The details of the CDN interaction rule.
         * <p>
         * This parameter is a JSON string. The following list describes the fields in the value of the parameter:
         * ParamType: the type of the scheduling rule. This field is required and must be of the string type. Set the value to cdn. This indicates that you want to modify a CDN interaction rule.
         * ParamData: the values of parameters that you want to modify for the CDN interaction rule. This field is required and must be of the map type. ParamData contains the following parameters: Domain: the accelerated domain in CDN. This parameter is required and must be of the string type; Cname: the CNAME that is assigned to the accelerated domain. This parameter is required and must be of the string type; AccessQps: the queries per second (QPS) threshold that is used to switch service traffic to Anti-DDoS Pro or Anti-DDoS Premium. This parameter is required and must be of the integer type; UpstreamQps: the QPS threshold that is used to switch service traffic to CDN. This parameter is optional and must be of the integer type.
         * <p>
         * @return {@code this}
         * @param param Property param: The details of the CDN interaction rule. This parameter is required.
         */
        public Builder param(final com.aliyun.ros.cdk.core.IResolvable param) {
            this.props.param(param);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
         * <p>
         * This parameter is empty by default, which indicates that the instance belongs to the default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
         * <p>
         * This parameter is empty by default, which indicates that the instance belongs to the default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddospro.SchedulerRule}.
         */
        @Override
        public com.aliyun.ros.cdk.ddospro.SchedulerRule build() {
            return new com.aliyun.ros.cdk.ddospro.SchedulerRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
