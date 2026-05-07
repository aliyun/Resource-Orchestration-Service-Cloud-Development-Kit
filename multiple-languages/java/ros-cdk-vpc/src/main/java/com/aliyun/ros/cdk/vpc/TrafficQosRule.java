package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::TrafficQosRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.312Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.TrafficQosRule")
public class TrafficQosRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.ITrafficQosRule {

    protected TrafficQosRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrafficQosRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TrafficQosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TrafficQosRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrDstCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstIpv6Cidr() {
        return software.amazon.jsii.Kernel.get(this, "attrDstIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DstPortRange: QoS rule traffic matches the destination port number range.
     * <p>
     * Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstPortRange() {
        return software.amazon.jsii.Kernel.get(this, "attrDstPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule.
     * <p>
     * Value range: <strong>0</strong> to <strong>63</strong>. If not, the value is -1.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatchDscp() {
        return software.amazon.jsii.Kernel.get(this, "attrMatchDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Priority: QoS rule priority.
     * <p>
     * Value range: <strong>1</strong> to <strong>9000</strong>. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPriority() {
        return software.amazon.jsii.Kernel.get(this, "attrPriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Protocol: QoS rule protocol type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QosId: The QoS policy ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId() {
        return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueueId: The QoS queue ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueId() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemarkingDscp: Modify The DSCP value in the flow.
     * <p>
     * Value range: <strong>0</strong> to <strong>63</strong>. If the value is not modified, the value is -1.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemarkingDscp() {
        return software.amazon.jsii.Kernel.get(this, "attrRemarkingDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleDescription: The description of the QoS rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleId: The ID of the QoS rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: The name of the QoS rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrSrcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcIpv6Cidr() {
        return software.amazon.jsii.Kernel.get(this, "attrSrcIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SrcPortRange: The source port number of the QoS rule traffic matching.
     * <p>
     * The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcPortRange() {
        return software.amazon.jsii.Kernel.get(this, "attrSrcPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficQosRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.TrafficQosRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.TrafficQosRule> {
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
        private final com.aliyun.ros.cdk.vpc.TrafficQosRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.TrafficQosRuleProps.Builder();
        }

        /**
         * Property priority: The priority of the QoS rule.
         * <p>
         * Valid values: 1 to 9000. A larger value indicates a higher priority. The priority of each QoS rule must be unique in the same QoS policy.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the QoS rule. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the QoS rule.
         * <p>
         * Valid values: 1 to 9000. A larger value indicates a higher priority. The priority of each QoS rule must be unique in the same QoS policy.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the QoS rule. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property protocol: QoS rule protocol type, value: - <strong>ALL</strong> - <strong>ICMP(IPv4)</strong> - *<em>ICMPv6(IPv6)</em> * - <strong>TCP</strong> - <strong>UDP</strong> - <strong>GRE</strong> - <strong>SSH</strong> - <strong>Telnet</strong> - <strong>HTTP</strong> - <strong>HTTPS</strong> - <strong>MS SQL</strong> - <strong>Oracle</strong> - <strong>MySql</strong> - <strong>RDP</strong> - <strong>PostgreSQL</strong> - <strong>Redis</strong>.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: QoS rule protocol type, value: - <strong>ALL</strong> - <strong>ICMP(IPv4)</strong> - *<em>ICMPv6(IPv6)</em> * - <strong>TCP</strong> - <strong>UDP</strong> - <strong>GRE</strong> - <strong>SSH</strong> - <strong>Telnet</strong> - <strong>HTTP</strong> - <strong>HTTPS</strong> - <strong>MS SQL</strong> - <strong>Oracle</strong> - <strong>MySql</strong> - <strong>RDP</strong> - <strong>PostgreSQL</strong> - <strong>Redis</strong>. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: QoS rule protocol type, value: - <strong>ALL</strong> - <strong>ICMP(IPv4)</strong> - *<em>ICMPv6(IPv6)</em> * - <strong>TCP</strong> - <strong>UDP</strong> - <strong>GRE</strong> - <strong>SSH</strong> - <strong>Telnet</strong> - <strong>HTTP</strong> - <strong>HTTPS</strong> - <strong>MS SQL</strong> - <strong>Oracle</strong> - <strong>MySql</strong> - <strong>RDP</strong> - <strong>PostgreSQL</strong> - <strong>Redis</strong>.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: QoS rule protocol type, value: - <strong>ALL</strong> - <strong>ICMP(IPv4)</strong> - *<em>ICMPv6(IPv6)</em> * - <strong>TCP</strong> - <strong>UDP</strong> - <strong>GRE</strong> - <strong>SSH</strong> - <strong>Telnet</strong> - <strong>HTTP</strong> - <strong>HTTPS</strong> - <strong>MS SQL</strong> - <strong>Oracle</strong> - <strong>MySql</strong> - <strong>RDP</strong> - <strong>PostgreSQL</strong> - <strong>Redis</strong>. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property qosId: The QoS policy ID.
         * <p>
         * @return {@code this}
         * @param qosId Property qosId: The QoS policy ID. This parameter is required.
         */
        public Builder qosId(final java.lang.String qosId) {
            this.props.qosId(qosId);
            return this;
        }
        /**
         * Property qosId: The QoS policy ID.
         * <p>
         * @return {@code this}
         * @param qosId Property qosId: The QoS policy ID. This parameter is required.
         */
        public Builder qosId(final com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.props.qosId(qosId);
            return this;
        }

        /**
         * Property queueId: The QoS queue ID.
         * <p>
         * @return {@code this}
         * @param queueId Property queueId: The QoS queue ID. This parameter is required.
         */
        public Builder queueId(final java.lang.String queueId) {
            this.props.queueId(queueId);
            return this;
        }
        /**
         * Property queueId: The QoS queue ID.
         * <p>
         * @return {@code this}
         * @param queueId Property queueId: The QoS queue ID. This parameter is required.
         */
        public Builder queueId(final com.aliyun.ros.cdk.core.IResolvable queueId) {
            this.props.queueId(queueId);
            return this;
        }

        /**
         * Property dstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
         * <p>
         * <blockquote>
         * <p>
         * If this parameter is not supported, enter <strong>SrcIPv6Cidr</strong> or **DstIPv6Cidr * *.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dstCidr Property dstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic. This parameter is required.
         */
        public Builder dstCidr(final java.lang.String dstCidr) {
            this.props.dstCidr(dstCidr);
            return this;
        }
        /**
         * Property dstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
         * <p>
         * <blockquote>
         * <p>
         * If this parameter is not supported, enter <strong>SrcIPv6Cidr</strong> or **DstIPv6Cidr * *.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dstCidr Property dstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic. This parameter is required.
         */
        public Builder dstCidr(final com.aliyun.ros.cdk.core.IResolvable dstCidr) {
            this.props.dstCidr(dstCidr);
            return this;
        }

        /**
         * Property dstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
         * <p>
         * <blockquote>
         * <p>
         * If this parameter is not supported, enter <strong>SrcCidr</strong> or **DstCidr * *.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dstIpv6Cidr Property dstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment. This parameter is required.
         */
        public Builder dstIpv6Cidr(final java.lang.String dstIpv6Cidr) {
            this.props.dstIpv6Cidr(dstIpv6Cidr);
            return this;
        }
        /**
         * Property dstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
         * <p>
         * <blockquote>
         * <p>
         * If this parameter is not supported, enter <strong>SrcCidr</strong> or **DstCidr * *.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dstIpv6Cidr Property dstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment. This parameter is required.
         */
        public Builder dstIpv6Cidr(final com.aliyun.ros.cdk.core.IResolvable dstIpv6Cidr) {
            this.props.dstIpv6Cidr(dstIpv6Cidr);
            return this;
        }

        /**
         * Property dstPortRange: QoS rule traffic matches the destination port number range.
         * <p>
         * Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types. The values are as follows:
         * <p>
         * <ul>
         * <li><strong>ALL</strong>:-1/-1, not editable.</li>
         * <li><strong>ICMP(IPv4)</strong>:-1/-1, non-editable.</li>
         * <li><strong>ICMPv6(IPv6)</strong>:-1/-1, non-editable.</li>
         * <li><strong>TCP</strong>:-1/-1, editable.</li>
         * <li><strong>UDP</strong>:-1/-1, editable.</li>
         * <li><strong>GRE</strong>:-1/-1, not editable.</li>
         * <li><strong>SSH</strong>:22/22, not editable.</li>
         * <li><strong>Telnet</strong>:23/23, not editable.</li>
         * <li><strong>HTTP</strong>:80/80, non-editable.</li>
         * <li><strong>HTTPS</strong>:443/443, which cannot be edited.</li>
         * <li><strong>MS SQL</strong>:1443/1443, which cannot be edited.</li>
         * <li><strong>Oracle</strong>:1521/1521, non-editable.</li>
         * <li><strong>MySql</strong>:3306/3306, non-editable.</li>
         * <li><strong>RDP</strong>:3389/3389, non-editable.</li>
         * <li><strong>PostgreSQL</strong>:5432/5432, non-editable.</li>
         * <li><strong>Redis</strong>:6379/6379, non-editable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dstPortRange Property dstPortRange: QoS rule traffic matches the destination port number range. This parameter is required.
         */
        public Builder dstPortRange(final java.lang.String dstPortRange) {
            this.props.dstPortRange(dstPortRange);
            return this;
        }
        /**
         * Property dstPortRange: QoS rule traffic matches the destination port number range.
         * <p>
         * Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types. The values are as follows:
         * <p>
         * <ul>
         * <li><strong>ALL</strong>:-1/-1, not editable.</li>
         * <li><strong>ICMP(IPv4)</strong>:-1/-1, non-editable.</li>
         * <li><strong>ICMPv6(IPv6)</strong>:-1/-1, non-editable.</li>
         * <li><strong>TCP</strong>:-1/-1, editable.</li>
         * <li><strong>UDP</strong>:-1/-1, editable.</li>
         * <li><strong>GRE</strong>:-1/-1, not editable.</li>
         * <li><strong>SSH</strong>:22/22, not editable.</li>
         * <li><strong>Telnet</strong>:23/23, not editable.</li>
         * <li><strong>HTTP</strong>:80/80, non-editable.</li>
         * <li><strong>HTTPS</strong>:443/443, which cannot be edited.</li>
         * <li><strong>MS SQL</strong>:1443/1443, which cannot be edited.</li>
         * <li><strong>Oracle</strong>:1521/1521, non-editable.</li>
         * <li><strong>MySql</strong>:3306/3306, non-editable.</li>
         * <li><strong>RDP</strong>:3389/3389, non-editable.</li>
         * <li><strong>PostgreSQL</strong>:5432/5432, non-editable.</li>
         * <li><strong>Redis</strong>:6379/6379, non-editable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dstPortRange Property dstPortRange: QoS rule traffic matches the destination port number range. This parameter is required.
         */
        public Builder dstPortRange(final com.aliyun.ros.cdk.core.IResolvable dstPortRange) {
            this.props.dstPortRange(dstPortRange);
            return this;
        }

        /**
         * Property matchDscp: The DSCP value that matches the QoS rule traffic.
         * <p>
         * Valid values: 0 to 63. If no value is matched, the value is -1.
         * <p>
         * @return {@code this}
         * @param matchDscp Property matchDscp: The DSCP value that matches the QoS rule traffic. This parameter is required.
         */
        public Builder matchDscp(final java.lang.Number matchDscp) {
            this.props.matchDscp(matchDscp);
            return this;
        }
        /**
         * Property matchDscp: The DSCP value that matches the QoS rule traffic.
         * <p>
         * Valid values: 0 to 63. If no value is matched, the value is -1.
         * <p>
         * @return {@code this}
         * @param matchDscp Property matchDscp: The DSCP value that matches the QoS rule traffic. This parameter is required.
         */
        public Builder matchDscp(final com.aliyun.ros.cdk.core.IResolvable matchDscp) {
            this.props.matchDscp(matchDscp);
            return this;
        }

        /**
         * Property remarkingDscp: The new DSCP value.
         * <p>
         * Valid values: 0 to 63. If you do not change the value, set the value to -1.
         * <p>
         * @return {@code this}
         * @param remarkingDscp Property remarkingDscp: The new DSCP value. This parameter is required.
         */
        public Builder remarkingDscp(final java.lang.Number remarkingDscp) {
            this.props.remarkingDscp(remarkingDscp);
            return this;
        }
        /**
         * Property remarkingDscp: The new DSCP value.
         * <p>
         * Valid values: 0 to 63. If you do not change the value, set the value to -1.
         * <p>
         * @return {@code this}
         * @param remarkingDscp Property remarkingDscp: The new DSCP value. This parameter is required.
         */
        public Builder remarkingDscp(final com.aliyun.ros.cdk.core.IResolvable remarkingDscp) {
            this.props.remarkingDscp(remarkingDscp);
            return this;
        }

        /**
         * Property ruleDescription: The description of the QoS rule.
         * <p>
         * The length is 0 to 256 characters and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param ruleDescription Property ruleDescription: The description of the QoS rule. This parameter is required.
         */
        public Builder ruleDescription(final java.lang.String ruleDescription) {
            this.props.ruleDescription(ruleDescription);
            return this;
        }
        /**
         * Property ruleDescription: The description of the QoS rule.
         * <p>
         * The length is 0 to 256 characters and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param ruleDescription Property ruleDescription: The description of the QoS rule. This parameter is required.
         */
        public Builder ruleDescription(final com.aliyun.ros.cdk.core.IResolvable ruleDescription) {
            this.props.ruleDescription(ruleDescription);
            return this;
        }

        /**
         * Property ruleName: The name of the QoS rule.
         * <p>
         * The length is 0 to 128 characters and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the QoS rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the QoS rule.
         * <p>
         * The length is 0 to 128 characters and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the QoS rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property srcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
         * <p>
         * <blockquote>
         * <p>
         * If this parameter is not supported, enter <strong>SrcIPv6Cidr</strong> or **DstIPv6Cidr * *.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param srcCidr Property srcCidr: The source IPv4 CIDR block that matches the QoS rule traffic. This parameter is required.
         */
        public Builder srcCidr(final java.lang.String srcCidr) {
            this.props.srcCidr(srcCidr);
            return this;
        }
        /**
         * Property srcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
         * <p>
         * <blockquote>
         * <p>
         * If this parameter is not supported, enter <strong>SrcIPv6Cidr</strong> or **DstIPv6Cidr * *.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param srcCidr Property srcCidr: The source IPv4 CIDR block that matches the QoS rule traffic. This parameter is required.
         */
        public Builder srcCidr(final com.aliyun.ros.cdk.core.IResolvable srcCidr) {
            this.props.srcCidr(srcCidr);
            return this;
        }

        /**
         * Property srcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
         * <p>
         * <blockquote>
         * <p>
         * If this parameter is not supported, enter <strong>SrcCidr</strong> or **DstCidr * *.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param srcIpv6Cidr Property srcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment. This parameter is required.
         */
        public Builder srcIpv6Cidr(final java.lang.String srcIpv6Cidr) {
            this.props.srcIpv6Cidr(srcIpv6Cidr);
            return this;
        }
        /**
         * Property srcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
         * <p>
         * <blockquote>
         * <p>
         * If this parameter is not supported, enter <strong>SrcCidr</strong> or **DstCidr * *.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param srcIpv6Cidr Property srcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment. This parameter is required.
         */
        public Builder srcIpv6Cidr(final com.aliyun.ros.cdk.core.IResolvable srcIpv6Cidr) {
            this.props.srcIpv6Cidr(srcIpv6Cidr);
            return this;
        }

        /**
         * Property srcPortRange: The source port number of the QoS rule traffic matching.
         * <p>
         * The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
         * <p>
         * @return {@code this}
         * @param srcPortRange Property srcPortRange: The source port number of the QoS rule traffic matching. This parameter is required.
         */
        public Builder srcPortRange(final java.lang.String srcPortRange) {
            this.props.srcPortRange(srcPortRange);
            return this;
        }
        /**
         * Property srcPortRange: The source port number of the QoS rule traffic matching.
         * <p>
         * The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
         * <p>
         * @return {@code this}
         * @param srcPortRange Property srcPortRange: The source port number of the QoS rule traffic matching. This parameter is required.
         */
        public Builder srcPortRange(final com.aliyun.ros.cdk.core.IResolvable srcPortRange) {
            this.props.srcPortRange(srcPortRange);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.TrafficQosRule}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.TrafficQosRule build() {
            return new com.aliyun.ros.cdk.vpc.TrafficQosRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
