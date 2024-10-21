package com.aliyun.ros.cdk.cms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS::GroupMetricRule</code>, which is used to create an alert rule for an application group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.676Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.GroupMetricRule")
public class GroupMetricRule extends com.aliyun.ros.cdk.core.Resource {

    protected GroupMetricRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GroupMetricRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public GroupMetricRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.GroupMetricRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public GroupMetricRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.GroupMetricRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RuleId: Rule ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.GroupMetricRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.GroupMetricRuleProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.GroupMetricRuleProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.GroupMetricRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.GroupMetricRule> {
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
        private final com.aliyun.ros.cdk.cms.GroupMetricRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.GroupMetricRuleProps.Builder();
        }

        /**
         * Property category: The abbreviation of the service name.
         * <p>
         * Valid values:
         * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
         * RDS (ApsaraDB for RDS)
         * ADS (AnalyticDB)
         * SLB (Server Load Balancer)
         * VPC (Virtual Private Cloud)
         * APIGATEWAY (API Gateway)
         * CDN
         * CS (Container Service for Swarm)
         * DCDN (Dynamic Route for CDN)
         * DDoS (distributed denial of service)
         * EIP (Elastic IP)
         * ELASTICSEARCH (Elasticsearch)
         * EMR (E-MapReduce)
         * ESS (Auto Scaling)
         * HBASE (ApsaraDB for HBase)
         * IOT_EDGE (IoT Edge)
         * K8S_POD (k8s pod)
         * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
         * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
         * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
         * MEMCACHE (ApsaraDB for Memcache)
         * MNS (Message Service)
         * MONGODB (ApsaraDB for MongoDB replica set instances)
         * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
         * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
         * MQ_TOPIC (Message Service topic)
         * OCS (original version of ApsaraDB for Memcache)
         * OPENSEARCH (Open Search)
         * OSS (Object Storage Service)
         * POLARDB (ApsaraDB for POLARDB)
         * PETADATA (HybridDB for MySQL)
         * SCDN (Secure Content Delivery Network)
         * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
         * SLS (Log Service)
         * VPN (VPN Gateway)
         * <p>
         * @return {@code this}
         * @param category Property category: The abbreviation of the service name. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The abbreviation of the service name.
         * <p>
         * Valid values:
         * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
         * RDS (ApsaraDB for RDS)
         * ADS (AnalyticDB)
         * SLB (Server Load Balancer)
         * VPC (Virtual Private Cloud)
         * APIGATEWAY (API Gateway)
         * CDN
         * CS (Container Service for Swarm)
         * DCDN (Dynamic Route for CDN)
         * DDoS (distributed denial of service)
         * EIP (Elastic IP)
         * ELASTICSEARCH (Elasticsearch)
         * EMR (E-MapReduce)
         * ESS (Auto Scaling)
         * HBASE (ApsaraDB for HBase)
         * IOT_EDGE (IoT Edge)
         * K8S_POD (k8s pod)
         * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
         * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
         * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
         * MEMCACHE (ApsaraDB for Memcache)
         * MNS (Message Service)
         * MONGODB (ApsaraDB for MongoDB replica set instances)
         * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
         * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
         * MQ_TOPIC (Message Service topic)
         * OCS (original version of ApsaraDB for Memcache)
         * OPENSEARCH (Open Search)
         * OSS (Object Storage Service)
         * POLARDB (ApsaraDB for POLARDB)
         * PETADATA (HybridDB for MySQL)
         * SCDN (Secure Content Delivery Network)
         * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
         * SLS (Log Service)
         * VPN (VPN Gateway)
         * <p>
         * @return {@code this}
         * @param category Property category: The abbreviation of the service name. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property escalations: undefined.
         * <p>
         * @return {@code this}
         * @param escalations Property escalations: undefined. This parameter is required.
         */
        public Builder escalations(final com.aliyun.ros.cdk.core.IResolvable escalations) {
            this.props.escalations(escalations);
            return this;
        }
        /**
         * Property escalations: undefined.
         * <p>
         * @return {@code this}
         * @param escalations Property escalations: undefined. This parameter is required.
         */
        public Builder escalations(final com.aliyun.ros.cdk.cms.RosGroupMetricRule.EscalationsProperty escalations) {
            this.props.escalations(escalations);
            return this;
        }

        /**
         * Property groupId: The ID of application group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of application group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The ID of application group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The ID of application group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property metricName: The name of the metric.
         * <p>
         * For more information, call DescribeMetricMetaList or see Preset metrics reference.
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         */
        public Builder metricName(final java.lang.String metricName) {
            this.props.metricName(metricName);
            return this;
        }
        /**
         * Property metricName: The name of the metric.
         * <p>
         * For more information, call DescribeMetricMetaList or see Preset metrics reference.
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         */
        public Builder metricName(final com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.props.metricName(metricName);
            return this;
        }

        /**
         * Property namespace: The data namespace of the service.
         * <p>
         * For more information, call DescribeMetricMetaList
         * or see Preset metrics reference.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The data namespace of the service. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The data namespace of the service.
         * <p>
         * For more information, call DescribeMetricMetaList
         * or see Preset metrics reference.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The data namespace of the service. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property ruleId: The ID of the alert rule.
         * <p>
         * The IDs of alert rules are generated by callers to ensure
         * uniqueness.
         * <p>
         * @return {@code this}
         * @param ruleId Property ruleId: The ID of the alert rule. This parameter is required.
         */
        public Builder ruleId(final java.lang.String ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }
        /**
         * Property ruleId: The ID of the alert rule.
         * <p>
         * The IDs of alert rules are generated by callers to ensure
         * uniqueness.
         * <p>
         * @return {@code this}
         * @param ruleId Property ruleId: The ID of the alert rule. This parameter is required.
         */
        public Builder ruleId(final com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }

        /**
         * Property ruleName: The name of the alert rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the alert rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the alert rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the alert rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property dimensions: The expended resource dimensions.
         * <p>
         * @return {@code this}
         * @param dimensions Property dimensions: The expended resource dimensions. This parameter is required.
         */
        public Builder dimensions(final java.lang.String dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }
        /**
         * Property dimensions: The expended resource dimensions.
         * <p>
         * @return {@code this}
         * @param dimensions Property dimensions: The expended resource dimensions. This parameter is required.
         */
        public Builder dimensions(final com.aliyun.ros.cdk.core.IResolvable dimensions) {
            this.props.dimensions(dimensions);
            return this;
        }

        /**
         * Property effectiveInterval: The period when the alert rule is effective.
         * <p>
         * @return {@code this}
         * @param effectiveInterval Property effectiveInterval: The period when the alert rule is effective. This parameter is required.
         */
        public Builder effectiveInterval(final java.lang.String effectiveInterval) {
            this.props.effectiveInterval(effectiveInterval);
            return this;
        }
        /**
         * Property effectiveInterval: The period when the alert rule is effective.
         * <p>
         * @return {@code this}
         * @param effectiveInterval Property effectiveInterval: The period when the alert rule is effective. This parameter is required.
         */
        public Builder effectiveInterval(final com.aliyun.ros.cdk.core.IResolvable effectiveInterval) {
            this.props.effectiveInterval(effectiveInterval);
            return this;
        }

        /**
         * Property emailSubject: The subject of the alert notification email.
         * <p>
         * @return {@code this}
         * @param emailSubject Property emailSubject: The subject of the alert notification email. This parameter is required.
         */
        public Builder emailSubject(final java.lang.String emailSubject) {
            this.props.emailSubject(emailSubject);
            return this;
        }
        /**
         * Property emailSubject: The subject of the alert notification email.
         * <p>
         * @return {@code this}
         * @param emailSubject Property emailSubject: The subject of the alert notification email. This parameter is required.
         */
        public Builder emailSubject(final com.aliyun.ros.cdk.core.IResolvable emailSubject) {
            this.props.emailSubject(emailSubject);
            return this;
        }

        /**
         * Property interval: The detection period of alerts.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The detection period of alerts. This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * Property interval: The detection period of alerts.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The detection period of alerts. This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * Property noEffectiveInterval: The period when the alert rule is ineffective.
         * <p>
         * @return {@code this}
         * @param noEffectiveInterval Property noEffectiveInterval: The period when the alert rule is ineffective. This parameter is required.
         */
        public Builder noEffectiveInterval(final java.lang.String noEffectiveInterval) {
            this.props.noEffectiveInterval(noEffectiveInterval);
            return this;
        }
        /**
         * Property noEffectiveInterval: The period when the alert rule is ineffective.
         * <p>
         * @return {@code this}
         * @param noEffectiveInterval Property noEffectiveInterval: The period when the alert rule is ineffective. This parameter is required.
         */
        public Builder noEffectiveInterval(final com.aliyun.ros.cdk.core.IResolvable noEffectiveInterval) {
            this.props.noEffectiveInterval(noEffectiveInterval);
            return this;
        }

        /**
         * Property period: The aggregation period.
         * <p>
         * Unite: second.
         * <p>
         * @return {@code this}
         * @param period Property period: The aggregation period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The aggregation period.
         * <p>
         * Unite: second.
         * <p>
         * @return {@code this}
         * @param period Property period: The aggregation period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger conditions are met.
         * <p>
         * Unit: second. Default value: 86400. Minimum value: 60.
         * <p>
         * @return {@code this}
         * @param silenceTime Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger conditions are met. This parameter is required.
         */
        public Builder silenceTime(final java.lang.Number silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }
        /**
         * Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger conditions are met.
         * <p>
         * Unit: second. Default value: 86400. Minimum value: 60.
         * <p>
         * @return {@code this}
         * @param silenceTime Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger conditions are met. This parameter is required.
         */
        public Builder silenceTime(final com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }

        /**
         * Property webhook: The URL of the callback triggered when an alert occurs.
         * <p>
         * @return {@code this}
         * @param webhook Property webhook: The URL of the callback triggered when an alert occurs. This parameter is required.
         */
        public Builder webhook(final java.lang.String webhook) {
            this.props.webhook(webhook);
            return this;
        }
        /**
         * Property webhook: The URL of the callback triggered when an alert occurs.
         * <p>
         * @return {@code this}
         * @param webhook Property webhook: The URL of the callback triggered when an alert occurs. This parameter is required.
         */
        public Builder webhook(final com.aliyun.ros.cdk.core.IResolvable webhook) {
            this.props.webhook(webhook);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.GroupMetricRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.GroupMetricRule build() {
            return new com.aliyun.ros.cdk.cms.GroupMetricRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
