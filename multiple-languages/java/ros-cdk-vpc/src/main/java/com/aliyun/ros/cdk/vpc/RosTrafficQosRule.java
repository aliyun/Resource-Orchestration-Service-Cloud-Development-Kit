package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::TrafficQosRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.196Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficQosRule")
public class RosTrafficQosRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrafficQosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrafficQosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosTrafficQosRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrafficQosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosTrafficQosRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDstCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrDstCidr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDstIpv6Cidr() {
        return software.amazon.jsii.Kernel.get(this, "attrDstIpv6Cidr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDstPortRange() {
        return software.amazon.jsii.Kernel.get(this, "attrDstPortRange", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMatchDscp() {
        return software.amazon.jsii.Kernel.get(this, "attrMatchDscp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPriority() {
        return software.amazon.jsii.Kernel.get(this, "attrPriority", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProtocol() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQosId() {
        return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueueId() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemarkingDscp() {
        return software.amazon.jsii.Kernel.get(this, "attrRemarkingDscp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSrcCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrSrcCidr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSrcIpv6Cidr() {
        return software.amazon.jsii.Kernel.get(this, "attrSrcIpv6Cidr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSrcPortRange() {
        return software.amazon.jsii.Kernel.get(this, "attrSrcPortRange", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProtocol() {
        return software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocol", java.util.Objects.requireNonNull(value, "protocol is required"));
    }

    /**
     */
    public void setProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocol", java.util.Objects.requireNonNull(value, "protocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQosId() {
        return software.amazon.jsii.Kernel.get(this, "qosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQosId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "qosId", java.util.Objects.requireNonNull(value, "qosId is required"));
    }

    /**
     */
    public void setQosId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "qosId", java.util.Objects.requireNonNull(value, "qosId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQueueId() {
        return software.amazon.jsii.Kernel.get(this, "queueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueueId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queueId", java.util.Objects.requireNonNull(value, "queueId is required"));
    }

    /**
     */
    public void setQueueId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queueId", java.util.Objects.requireNonNull(value, "queueId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDstCidr() {
        return software.amazon.jsii.Kernel.get(this, "dstCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDstCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dstCidr", value);
    }

    /**
     */
    public void setDstCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dstCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDstIpv6Cidr() {
        return software.amazon.jsii.Kernel.get(this, "dstIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDstIpv6Cidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dstIpv6Cidr", value);
    }

    /**
     */
    public void setDstIpv6Cidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dstIpv6Cidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDstPortRange() {
        return software.amazon.jsii.Kernel.get(this, "dstPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDstPortRange(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dstPortRange", value);
    }

    /**
     */
    public void setDstPortRange(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dstPortRange", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMatchDscp() {
        return software.amazon.jsii.Kernel.get(this, "matchDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMatchDscp(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "matchDscp", value);
    }

    /**
     */
    public void setMatchDscp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "matchDscp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemarkingDscp() {
        return software.amazon.jsii.Kernel.get(this, "remarkingDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemarkingDscp(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "remarkingDscp", value);
    }

    /**
     */
    public void setRemarkingDscp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remarkingDscp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleDescription() {
        return software.amazon.jsii.Kernel.get(this, "ruleDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleDescription", value);
    }

    /**
     */
    public void setRuleDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSrcCidr() {
        return software.amazon.jsii.Kernel.get(this, "srcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSrcCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "srcCidr", value);
    }

    /**
     */
    public void setSrcCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "srcCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSrcIpv6Cidr() {
        return software.amazon.jsii.Kernel.get(this, "srcIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSrcIpv6Cidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "srcIpv6Cidr", value);
    }

    /**
     */
    public void setSrcIpv6Cidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "srcIpv6Cidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSrcPortRange() {
        return software.amazon.jsii.Kernel.get(this, "srcPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSrcPortRange(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "srcPortRange", value);
    }

    /**
     */
    public void setSrcPortRange(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "srcPortRange", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosTrafficQosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosTrafficQosRule> {
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
        private final com.aliyun.ros.cdk.vpc.RosTrafficQosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosTrafficQosRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param qosId This parameter is required.
         */
        public Builder qosId(final java.lang.String qosId) {
            this.props.qosId(qosId);
            return this;
        }
        /**
         * @return {@code this}
         * @param qosId This parameter is required.
         */
        public Builder qosId(final com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.props.qosId(qosId);
            return this;
        }

        /**
         * @return {@code this}
         * @param queueId This parameter is required.
         */
        public Builder queueId(final java.lang.String queueId) {
            this.props.queueId(queueId);
            return this;
        }
        /**
         * @return {@code this}
         * @param queueId This parameter is required.
         */
        public Builder queueId(final com.aliyun.ros.cdk.core.IResolvable queueId) {
            this.props.queueId(queueId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dstCidr This parameter is required.
         */
        public Builder dstCidr(final java.lang.String dstCidr) {
            this.props.dstCidr(dstCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param dstCidr This parameter is required.
         */
        public Builder dstCidr(final com.aliyun.ros.cdk.core.IResolvable dstCidr) {
            this.props.dstCidr(dstCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param dstIpv6Cidr This parameter is required.
         */
        public Builder dstIpv6Cidr(final java.lang.String dstIpv6Cidr) {
            this.props.dstIpv6Cidr(dstIpv6Cidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param dstIpv6Cidr This parameter is required.
         */
        public Builder dstIpv6Cidr(final com.aliyun.ros.cdk.core.IResolvable dstIpv6Cidr) {
            this.props.dstIpv6Cidr(dstIpv6Cidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param dstPortRange This parameter is required.
         */
        public Builder dstPortRange(final java.lang.String dstPortRange) {
            this.props.dstPortRange(dstPortRange);
            return this;
        }
        /**
         * @return {@code this}
         * @param dstPortRange This parameter is required.
         */
        public Builder dstPortRange(final com.aliyun.ros.cdk.core.IResolvable dstPortRange) {
            this.props.dstPortRange(dstPortRange);
            return this;
        }

        /**
         * @return {@code this}
         * @param matchDscp This parameter is required.
         */
        public Builder matchDscp(final java.lang.Number matchDscp) {
            this.props.matchDscp(matchDscp);
            return this;
        }
        /**
         * @return {@code this}
         * @param matchDscp This parameter is required.
         */
        public Builder matchDscp(final com.aliyun.ros.cdk.core.IResolvable matchDscp) {
            this.props.matchDscp(matchDscp);
            return this;
        }

        /**
         * @return {@code this}
         * @param remarkingDscp This parameter is required.
         */
        public Builder remarkingDscp(final java.lang.Number remarkingDscp) {
            this.props.remarkingDscp(remarkingDscp);
            return this;
        }
        /**
         * @return {@code this}
         * @param remarkingDscp This parameter is required.
         */
        public Builder remarkingDscp(final com.aliyun.ros.cdk.core.IResolvable remarkingDscp) {
            this.props.remarkingDscp(remarkingDscp);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleDescription This parameter is required.
         */
        public Builder ruleDescription(final java.lang.String ruleDescription) {
            this.props.ruleDescription(ruleDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleDescription This parameter is required.
         */
        public Builder ruleDescription(final com.aliyun.ros.cdk.core.IResolvable ruleDescription) {
            this.props.ruleDescription(ruleDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param srcCidr This parameter is required.
         */
        public Builder srcCidr(final java.lang.String srcCidr) {
            this.props.srcCidr(srcCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param srcCidr This parameter is required.
         */
        public Builder srcCidr(final com.aliyun.ros.cdk.core.IResolvable srcCidr) {
            this.props.srcCidr(srcCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param srcIpv6Cidr This parameter is required.
         */
        public Builder srcIpv6Cidr(final java.lang.String srcIpv6Cidr) {
            this.props.srcIpv6Cidr(srcIpv6Cidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param srcIpv6Cidr This parameter is required.
         */
        public Builder srcIpv6Cidr(final com.aliyun.ros.cdk.core.IResolvable srcIpv6Cidr) {
            this.props.srcIpv6Cidr(srcIpv6Cidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param srcPortRange This parameter is required.
         */
        public Builder srcPortRange(final java.lang.String srcPortRange) {
            this.props.srcPortRange(srcPortRange);
            return this;
        }
        /**
         * @return {@code this}
         * @param srcPortRange This parameter is required.
         */
        public Builder srcPortRange(final com.aliyun.ros.cdk.core.IResolvable srcPortRange) {
            this.props.srcPortRange(srcPortRange);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosTrafficQosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosTrafficQosRule build() {
            return new com.aliyun.ros.cdk.vpc.RosTrafficQosRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
