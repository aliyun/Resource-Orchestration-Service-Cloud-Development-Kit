package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>RosAddressPool</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.968Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosAddressPoolProps")
@software.amazon.jsii.Jsii.Proxy(RosAddressPoolProps.Jsii$Proxy.class)
public interface RosAddressPoolProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddr();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLbaStrategy();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEvaluationCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIspCityNode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMonitorExtendInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMonitorStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtocolType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAddressPoolProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAddressPoolProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAddressPoolProps> {
        java.lang.Object addr;
        java.lang.Object instanceId;
        java.lang.Object lbaStrategy;
        java.lang.Object name;
        java.lang.Object type;
        java.lang.Object evaluationCount;
        java.lang.Object interval;
        java.lang.Object ispCityNode;
        java.lang.Object monitorExtendInfo;
        java.lang.Object monitorStatus;
        java.lang.Object protocolType;
        java.lang.Object timeout;

        /**
         * Sets the value of {@link RosAddressPoolProps#getAddr}
         * @param addr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addr(com.aliyun.ros.cdk.core.IResolvable addr) {
            this.addr = addr;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getAddr}
         * @param addr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addr(java.util.List<? extends java.lang.Object> addr) {
            this.addr = addr;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getLbaStrategy}
         * @param lbaStrategy the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder lbaStrategy(java.lang.String lbaStrategy) {
            this.lbaStrategy = lbaStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getLbaStrategy}
         * @param lbaStrategy the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder lbaStrategy(com.aliyun.ros.cdk.core.IResolvable lbaStrategy) {
            this.lbaStrategy = lbaStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getEvaluationCount}
         * @param evaluationCount the value to be set.
         * @return {@code this}
         */
        public Builder evaluationCount(java.lang.Number evaluationCount) {
            this.evaluationCount = evaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getEvaluationCount}
         * @param evaluationCount the value to be set.
         * @return {@code this}
         */
        public Builder evaluationCount(com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.evaluationCount = evaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getInterval}
         * @param interval the value to be set.
         * @return {@code this}
         */
        public Builder interval(java.lang.Number interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getInterval}
         * @param interval the value to be set.
         * @return {@code this}
         */
        public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getIspCityNode}
         * @param ispCityNode the value to be set.
         * @return {@code this}
         */
        public Builder ispCityNode(com.aliyun.ros.cdk.core.IResolvable ispCityNode) {
            this.ispCityNode = ispCityNode;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getIspCityNode}
         * @param ispCityNode the value to be set.
         * @return {@code this}
         */
        public Builder ispCityNode(java.util.List<? extends java.lang.Object> ispCityNode) {
            this.ispCityNode = ispCityNode;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getMonitorExtendInfo}
         * @param monitorExtendInfo the value to be set.
         * @return {@code this}
         */
        public Builder monitorExtendInfo(com.aliyun.ros.cdk.core.IResolvable monitorExtendInfo) {
            this.monitorExtendInfo = monitorExtendInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getMonitorExtendInfo}
         * @param monitorExtendInfo the value to be set.
         * @return {@code this}
         */
        public Builder monitorExtendInfo(java.util.Map<java.lang.String, ? extends java.lang.Object> monitorExtendInfo) {
            this.monitorExtendInfo = monitorExtendInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getMonitorStatus}
         * @param monitorStatus the value to be set.
         * @return {@code this}
         */
        public Builder monitorStatus(java.lang.String monitorStatus) {
            this.monitorStatus = monitorStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getMonitorStatus}
         * @param monitorStatus the value to be set.
         * @return {@code this}
         */
        public Builder monitorStatus(com.aliyun.ros.cdk.core.IResolvable monitorStatus) {
            this.monitorStatus = monitorStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getProtocolType}
         * @param protocolType the value to be set.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getProtocolType}
         * @param protocolType the value to be set.
         * @return {@code this}
         */
        public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosAddressPoolProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAddressPoolProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAddressPoolProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAddressPoolProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAddressPoolProps {
        private final java.lang.Object addr;
        private final java.lang.Object instanceId;
        private final java.lang.Object lbaStrategy;
        private final java.lang.Object name;
        private final java.lang.Object type;
        private final java.lang.Object evaluationCount;
        private final java.lang.Object interval;
        private final java.lang.Object ispCityNode;
        private final java.lang.Object monitorExtendInfo;
        private final java.lang.Object monitorStatus;
        private final java.lang.Object protocolType;
        private final java.lang.Object timeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addr = software.amazon.jsii.Kernel.get(this, "addr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lbaStrategy = software.amazon.jsii.Kernel.get(this, "lbaStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.evaluationCount = software.amazon.jsii.Kernel.get(this, "evaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ispCityNode = software.amazon.jsii.Kernel.get(this, "ispCityNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.monitorExtendInfo = software.amazon.jsii.Kernel.get(this, "monitorExtendInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.monitorStatus = software.amazon.jsii.Kernel.get(this, "monitorStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addr = java.util.Objects.requireNonNull(builder.addr, "addr is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.lbaStrategy = java.util.Objects.requireNonNull(builder.lbaStrategy, "lbaStrategy is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.evaluationCount = builder.evaluationCount;
            this.interval = builder.interval;
            this.ispCityNode = builder.ispCityNode;
            this.monitorExtendInfo = builder.monitorExtendInfo;
            this.monitorStatus = builder.monitorStatus;
            this.protocolType = builder.protocolType;
            this.timeout = builder.timeout;
        }

        @Override
        public final java.lang.Object getAddr() {
            return this.addr;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getLbaStrategy() {
            return this.lbaStrategy;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getEvaluationCount() {
            return this.evaluationCount;
        }

        @Override
        public final java.lang.Object getInterval() {
            return this.interval;
        }

        @Override
        public final java.lang.Object getIspCityNode() {
            return this.ispCityNode;
        }

        @Override
        public final java.lang.Object getMonitorExtendInfo() {
            return this.monitorExtendInfo;
        }

        @Override
        public final java.lang.Object getMonitorStatus() {
            return this.monitorStatus;
        }

        @Override
        public final java.lang.Object getProtocolType() {
            return this.protocolType;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("addr", om.valueToTree(this.getAddr()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("lbaStrategy", om.valueToTree(this.getLbaStrategy()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getEvaluationCount() != null) {
                data.set("evaluationCount", om.valueToTree(this.getEvaluationCount()));
            }
            if (this.getInterval() != null) {
                data.set("interval", om.valueToTree(this.getInterval()));
            }
            if (this.getIspCityNode() != null) {
                data.set("ispCityNode", om.valueToTree(this.getIspCityNode()));
            }
            if (this.getMonitorExtendInfo() != null) {
                data.set("monitorExtendInfo", om.valueToTree(this.getMonitorExtendInfo()));
            }
            if (this.getMonitorStatus() != null) {
                data.set("monitorStatus", om.valueToTree(this.getMonitorStatus()));
            }
            if (this.getProtocolType() != null) {
                data.set("protocolType", om.valueToTree(this.getProtocolType()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.RosAddressPoolProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAddressPoolProps.Jsii$Proxy that = (RosAddressPoolProps.Jsii$Proxy) o;

            if (!addr.equals(that.addr)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!lbaStrategy.equals(that.lbaStrategy)) return false;
            if (!name.equals(that.name)) return false;
            if (!type.equals(that.type)) return false;
            if (this.evaluationCount != null ? !this.evaluationCount.equals(that.evaluationCount) : that.evaluationCount != null) return false;
            if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
            if (this.ispCityNode != null ? !this.ispCityNode.equals(that.ispCityNode) : that.ispCityNode != null) return false;
            if (this.monitorExtendInfo != null ? !this.monitorExtendInfo.equals(that.monitorExtendInfo) : that.monitorExtendInfo != null) return false;
            if (this.monitorStatus != null ? !this.monitorStatus.equals(that.monitorStatus) : that.monitorStatus != null) return false;
            if (this.protocolType != null ? !this.protocolType.equals(that.protocolType) : that.protocolType != null) return false;
            return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addr.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.lbaStrategy.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.evaluationCount != null ? this.evaluationCount.hashCode() : 0);
            result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
            result = 31 * result + (this.ispCityNode != null ? this.ispCityNode.hashCode() : 0);
            result = 31 * result + (this.monitorExtendInfo != null ? this.monitorExtendInfo.hashCode() : 0);
            result = 31 * result + (this.monitorStatus != null ? this.monitorStatus.hashCode() : 0);
            result = 31 * result + (this.protocolType != null ? this.protocolType.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            return result;
        }
    }
}
