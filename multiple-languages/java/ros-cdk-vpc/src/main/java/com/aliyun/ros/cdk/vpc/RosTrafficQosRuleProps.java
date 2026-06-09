package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosTrafficQosRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:04:31.627Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficQosRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficQosRuleProps.Jsii$Proxy.class)
public interface RosTrafficQosRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQosId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDstCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDstIpv6Cidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDstPortRange() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMatchDscp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemarkingDscp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSrcCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSrcIpv6Cidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSrcPortRange() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrafficQosRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficQosRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficQosRuleProps> {
        java.lang.Object priority;
        java.lang.Object protocol;
        java.lang.Object qosId;
        java.lang.Object queueId;
        java.lang.Object dstCidr;
        java.lang.Object dstIpv6Cidr;
        java.lang.Object dstPortRange;
        java.lang.Object matchDscp;
        java.lang.Object remarkingDscp;
        java.lang.Object ruleDescription;
        java.lang.Object ruleName;
        java.lang.Object srcCidr;
        java.lang.Object srcIpv6Cidr;
        java.lang.Object srcPortRange;

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getQosId}
         * @param qosId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(java.lang.String qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getQosId}
         * @param qosId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getQueueId}
         * @param queueId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueId(java.lang.String queueId) {
            this.queueId = queueId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getQueueId}
         * @param queueId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueId(com.aliyun.ros.cdk.core.IResolvable queueId) {
            this.queueId = queueId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getDstCidr}
         * @param dstCidr the value to be set.
         * @return {@code this}
         */
        public Builder dstCidr(java.lang.String dstCidr) {
            this.dstCidr = dstCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getDstCidr}
         * @param dstCidr the value to be set.
         * @return {@code this}
         */
        public Builder dstCidr(com.aliyun.ros.cdk.core.IResolvable dstCidr) {
            this.dstCidr = dstCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getDstIpv6Cidr}
         * @param dstIpv6Cidr the value to be set.
         * @return {@code this}
         */
        public Builder dstIpv6Cidr(java.lang.String dstIpv6Cidr) {
            this.dstIpv6Cidr = dstIpv6Cidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getDstIpv6Cidr}
         * @param dstIpv6Cidr the value to be set.
         * @return {@code this}
         */
        public Builder dstIpv6Cidr(com.aliyun.ros.cdk.core.IResolvable dstIpv6Cidr) {
            this.dstIpv6Cidr = dstIpv6Cidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getDstPortRange}
         * @param dstPortRange the value to be set.
         * @return {@code this}
         */
        public Builder dstPortRange(java.lang.String dstPortRange) {
            this.dstPortRange = dstPortRange;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getDstPortRange}
         * @param dstPortRange the value to be set.
         * @return {@code this}
         */
        public Builder dstPortRange(com.aliyun.ros.cdk.core.IResolvable dstPortRange) {
            this.dstPortRange = dstPortRange;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getMatchDscp}
         * @param matchDscp the value to be set.
         * @return {@code this}
         */
        public Builder matchDscp(java.lang.Number matchDscp) {
            this.matchDscp = matchDscp;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getMatchDscp}
         * @param matchDscp the value to be set.
         * @return {@code this}
         */
        public Builder matchDscp(com.aliyun.ros.cdk.core.IResolvable matchDscp) {
            this.matchDscp = matchDscp;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getRemarkingDscp}
         * @param remarkingDscp the value to be set.
         * @return {@code this}
         */
        public Builder remarkingDscp(java.lang.Number remarkingDscp) {
            this.remarkingDscp = remarkingDscp;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getRemarkingDscp}
         * @param remarkingDscp the value to be set.
         * @return {@code this}
         */
        public Builder remarkingDscp(com.aliyun.ros.cdk.core.IResolvable remarkingDscp) {
            this.remarkingDscp = remarkingDscp;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getRuleDescription}
         * @param ruleDescription the value to be set.
         * @return {@code this}
         */
        public Builder ruleDescription(java.lang.String ruleDescription) {
            this.ruleDescription = ruleDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getRuleDescription}
         * @param ruleDescription the value to be set.
         * @return {@code this}
         */
        public Builder ruleDescription(com.aliyun.ros.cdk.core.IResolvable ruleDescription) {
            this.ruleDescription = ruleDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getSrcCidr}
         * @param srcCidr the value to be set.
         * @return {@code this}
         */
        public Builder srcCidr(java.lang.String srcCidr) {
            this.srcCidr = srcCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getSrcCidr}
         * @param srcCidr the value to be set.
         * @return {@code this}
         */
        public Builder srcCidr(com.aliyun.ros.cdk.core.IResolvable srcCidr) {
            this.srcCidr = srcCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getSrcIpv6Cidr}
         * @param srcIpv6Cidr the value to be set.
         * @return {@code this}
         */
        public Builder srcIpv6Cidr(java.lang.String srcIpv6Cidr) {
            this.srcIpv6Cidr = srcIpv6Cidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getSrcIpv6Cidr}
         * @param srcIpv6Cidr the value to be set.
         * @return {@code this}
         */
        public Builder srcIpv6Cidr(com.aliyun.ros.cdk.core.IResolvable srcIpv6Cidr) {
            this.srcIpv6Cidr = srcIpv6Cidr;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getSrcPortRange}
         * @param srcPortRange the value to be set.
         * @return {@code this}
         */
        public Builder srcPortRange(java.lang.String srcPortRange) {
            this.srcPortRange = srcPortRange;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosRuleProps#getSrcPortRange}
         * @param srcPortRange the value to be set.
         * @return {@code this}
         */
        public Builder srcPortRange(com.aliyun.ros.cdk.core.IResolvable srcPortRange) {
            this.srcPortRange = srcPortRange;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficQosRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficQosRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrafficQosRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficQosRuleProps {
        private final java.lang.Object priority;
        private final java.lang.Object protocol;
        private final java.lang.Object qosId;
        private final java.lang.Object queueId;
        private final java.lang.Object dstCidr;
        private final java.lang.Object dstIpv6Cidr;
        private final java.lang.Object dstPortRange;
        private final java.lang.Object matchDscp;
        private final java.lang.Object remarkingDscp;
        private final java.lang.Object ruleDescription;
        private final java.lang.Object ruleName;
        private final java.lang.Object srcCidr;
        private final java.lang.Object srcIpv6Cidr;
        private final java.lang.Object srcPortRange;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qosId = software.amazon.jsii.Kernel.get(this, "qosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueId = software.amazon.jsii.Kernel.get(this, "queueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dstCidr = software.amazon.jsii.Kernel.get(this, "dstCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dstIpv6Cidr = software.amazon.jsii.Kernel.get(this, "dstIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dstPortRange = software.amazon.jsii.Kernel.get(this, "dstPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.matchDscp = software.amazon.jsii.Kernel.get(this, "matchDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remarkingDscp = software.amazon.jsii.Kernel.get(this, "remarkingDscp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleDescription = software.amazon.jsii.Kernel.get(this, "ruleDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.srcCidr = software.amazon.jsii.Kernel.get(this, "srcCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.srcIpv6Cidr = software.amazon.jsii.Kernel.get(this, "srcIpv6Cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.srcPortRange = software.amazon.jsii.Kernel.get(this, "srcPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
            this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
            this.qosId = java.util.Objects.requireNonNull(builder.qosId, "qosId is required");
            this.queueId = java.util.Objects.requireNonNull(builder.queueId, "queueId is required");
            this.dstCidr = builder.dstCidr;
            this.dstIpv6Cidr = builder.dstIpv6Cidr;
            this.dstPortRange = builder.dstPortRange;
            this.matchDscp = builder.matchDscp;
            this.remarkingDscp = builder.remarkingDscp;
            this.ruleDescription = builder.ruleDescription;
            this.ruleName = builder.ruleName;
            this.srcCidr = builder.srcCidr;
            this.srcIpv6Cidr = builder.srcIpv6Cidr;
            this.srcPortRange = builder.srcPortRange;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.Object getQosId() {
            return this.qosId;
        }

        @Override
        public final java.lang.Object getQueueId() {
            return this.queueId;
        }

        @Override
        public final java.lang.Object getDstCidr() {
            return this.dstCidr;
        }

        @Override
        public final java.lang.Object getDstIpv6Cidr() {
            return this.dstIpv6Cidr;
        }

        @Override
        public final java.lang.Object getDstPortRange() {
            return this.dstPortRange;
        }

        @Override
        public final java.lang.Object getMatchDscp() {
            return this.matchDscp;
        }

        @Override
        public final java.lang.Object getRemarkingDscp() {
            return this.remarkingDscp;
        }

        @Override
        public final java.lang.Object getRuleDescription() {
            return this.ruleDescription;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSrcCidr() {
            return this.srcCidr;
        }

        @Override
        public final java.lang.Object getSrcIpv6Cidr() {
            return this.srcIpv6Cidr;
        }

        @Override
        public final java.lang.Object getSrcPortRange() {
            return this.srcPortRange;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("priority", om.valueToTree(this.getPriority()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            data.set("qosId", om.valueToTree(this.getQosId()));
            data.set("queueId", om.valueToTree(this.getQueueId()));
            if (this.getDstCidr() != null) {
                data.set("dstCidr", om.valueToTree(this.getDstCidr()));
            }
            if (this.getDstIpv6Cidr() != null) {
                data.set("dstIpv6Cidr", om.valueToTree(this.getDstIpv6Cidr()));
            }
            if (this.getDstPortRange() != null) {
                data.set("dstPortRange", om.valueToTree(this.getDstPortRange()));
            }
            if (this.getMatchDscp() != null) {
                data.set("matchDscp", om.valueToTree(this.getMatchDscp()));
            }
            if (this.getRemarkingDscp() != null) {
                data.set("remarkingDscp", om.valueToTree(this.getRemarkingDscp()));
            }
            if (this.getRuleDescription() != null) {
                data.set("ruleDescription", om.valueToTree(this.getRuleDescription()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getSrcCidr() != null) {
                data.set("srcCidr", om.valueToTree(this.getSrcCidr()));
            }
            if (this.getSrcIpv6Cidr() != null) {
                data.set("srcIpv6Cidr", om.valueToTree(this.getSrcIpv6Cidr()));
            }
            if (this.getSrcPortRange() != null) {
                data.set("srcPortRange", om.valueToTree(this.getSrcPortRange()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficQosRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficQosRuleProps.Jsii$Proxy that = (RosTrafficQosRuleProps.Jsii$Proxy) o;

            if (!priority.equals(that.priority)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (!qosId.equals(that.qosId)) return false;
            if (!queueId.equals(that.queueId)) return false;
            if (this.dstCidr != null ? !this.dstCidr.equals(that.dstCidr) : that.dstCidr != null) return false;
            if (this.dstIpv6Cidr != null ? !this.dstIpv6Cidr.equals(that.dstIpv6Cidr) : that.dstIpv6Cidr != null) return false;
            if (this.dstPortRange != null ? !this.dstPortRange.equals(that.dstPortRange) : that.dstPortRange != null) return false;
            if (this.matchDscp != null ? !this.matchDscp.equals(that.matchDscp) : that.matchDscp != null) return false;
            if (this.remarkingDscp != null ? !this.remarkingDscp.equals(that.remarkingDscp) : that.remarkingDscp != null) return false;
            if (this.ruleDescription != null ? !this.ruleDescription.equals(that.ruleDescription) : that.ruleDescription != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.srcCidr != null ? !this.srcCidr.equals(that.srcCidr) : that.srcCidr != null) return false;
            if (this.srcIpv6Cidr != null ? !this.srcIpv6Cidr.equals(that.srcIpv6Cidr) : that.srcIpv6Cidr != null) return false;
            return this.srcPortRange != null ? this.srcPortRange.equals(that.srcPortRange) : that.srcPortRange == null;
        }

        @Override
        public final int hashCode() {
            int result = this.priority.hashCode();
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.qosId.hashCode());
            result = 31 * result + (this.queueId.hashCode());
            result = 31 * result + (this.dstCidr != null ? this.dstCidr.hashCode() : 0);
            result = 31 * result + (this.dstIpv6Cidr != null ? this.dstIpv6Cidr.hashCode() : 0);
            result = 31 * result + (this.dstPortRange != null ? this.dstPortRange.hashCode() : 0);
            result = 31 * result + (this.matchDscp != null ? this.matchDscp.hashCode() : 0);
            result = 31 * result + (this.remarkingDscp != null ? this.remarkingDscp.hashCode() : 0);
            result = 31 * result + (this.ruleDescription != null ? this.ruleDescription.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.srcCidr != null ? this.srcCidr.hashCode() : 0);
            result = 31 * result + (this.srcIpv6Cidr != null ? this.srcIpv6Cidr.hashCode() : 0);
            result = 31 * result + (this.srcPortRange != null ? this.srcPortRange.hashCode() : 0);
            return result;
        }
    }
}
