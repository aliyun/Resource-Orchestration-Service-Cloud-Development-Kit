package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>TrafficQosRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.975Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.ITrafficQosRule")
@software.amazon.jsii.Jsii.Proxy(ITrafficQosRule.Jsii$Proxy.class)
public interface ITrafficQosRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstCidr();

    /**
     * Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstIpv6Cidr();

    /**
     * Attribute DstPortRange: QoS rule traffic matches the destination port number range.
     * <p>
     * Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstPortRange();

    /**
     * Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule.
     * <p>
     * Value range: <strong>0</strong> to <strong>63</strong>. If not, the value is -1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatchDscp();

    /**
     * Attribute Priority: QoS rule priority.
     * <p>
     * Value range: <strong>1</strong> to <strong>9000</strong>. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPriority();

    /**
     * Attribute Protocol: QoS rule protocol type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol();

    /**
     * Attribute QosId: The QoS policy ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId();

    /**
     * Attribute QueueId: The QoS queue ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueId();

    /**
     * Attribute RemarkingDscp: Modify The DSCP value in the flow.
     * <p>
     * Value range: <strong>0</strong> to <strong>63</strong>. If the value is not modified, the value is -1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemarkingDscp();

    /**
     * Attribute RuleDescription: The description of the QoS rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleDescription();

    /**
     * Attribute RuleId: The ID of the QoS rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId();

    /**
     * Attribute RuleName: The name of the QoS rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcCidr();

    /**
     * Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcIpv6Cidr();

    /**
     * Attribute SrcPortRange: The source port number of the QoS rule traffic matching.
     * <p>
     * The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcPortRange();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.ITrafficQosRule.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrDstCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstIpv6Cidr() {
            return software.amazon.jsii.Kernel.get(this, "attrDstIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DstPortRange: QoS rule traffic matches the destination port number range.
         * <p>
         * Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstPortRange() {
            return software.amazon.jsii.Kernel.get(this, "attrDstPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule.
         * <p>
         * Value range: <strong>0</strong> to <strong>63</strong>. If not, the value is -1.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatchDscp() {
            return software.amazon.jsii.Kernel.get(this, "attrMatchDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Priority: QoS rule priority.
         * <p>
         * Value range: <strong>1</strong> to <strong>9000</strong>. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPriority() {
            return software.amazon.jsii.Kernel.get(this, "attrPriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Protocol: QoS rule protocol type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosId: The QoS policy ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId() {
            return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueId: The QoS queue ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueId() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemarkingDscp: Modify The DSCP value in the flow.
         * <p>
         * Value range: <strong>0</strong> to <strong>63</strong>. If the value is not modified, the value is -1.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemarkingDscp() {
            return software.amazon.jsii.Kernel.get(this, "attrRemarkingDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleDescription: The description of the QoS rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleId: The ID of the QoS rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the QoS rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSrcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcIpv6Cidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSrcIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SrcPortRange: The source port number of the QoS rule traffic matching.
         * <p>
         * The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcPortRange() {
            return software.amazon.jsii.Kernel.get(this, "attrSrcPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficQosRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITrafficQosRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITrafficQosRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrDstCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstIpv6Cidr() {
            return software.amazon.jsii.Kernel.get(this, "attrDstIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DstPortRange: QoS rule traffic matches the destination port number range.
         * <p>
         * Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDstPortRange() {
            return software.amazon.jsii.Kernel.get(this, "attrDstPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule.
         * <p>
         * Value range: <strong>0</strong> to <strong>63</strong>. If not, the value is -1.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatchDscp() {
            return software.amazon.jsii.Kernel.get(this, "attrMatchDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Priority: QoS rule priority.
         * <p>
         * Value range: <strong>1</strong> to <strong>9000</strong>. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPriority() {
            return software.amazon.jsii.Kernel.get(this, "attrPriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Protocol: QoS rule protocol type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosId: The QoS policy ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId() {
            return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueId: The QoS queue ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueId() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemarkingDscp: Modify The DSCP value in the flow.
         * <p>
         * Value range: <strong>0</strong> to <strong>63</strong>. If the value is not modified, the value is -1.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemarkingDscp() {
            return software.amazon.jsii.Kernel.get(this, "attrRemarkingDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleDescription: The description of the QoS rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleId: The ID of the QoS rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the QoS rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSrcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcIpv6Cidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSrcIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SrcPortRange: The source port number of the QoS rule traffic matching.
         * <p>
         * The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSrcPortRange() {
            return software.amazon.jsii.Kernel.get(this, "attrSrcPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficQosRuleProps.class));
        }
    }
}
