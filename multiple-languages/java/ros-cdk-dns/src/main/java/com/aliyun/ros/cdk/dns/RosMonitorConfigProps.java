package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>RosMonitorConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.980Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosMonitorConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosMonitorConfigProps.Jsii$Proxy.class)
public interface RosMonitorConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddrPoolId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEvaluationCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInterval();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIspCityNode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMonitorExtendInfo();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocolType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimeout();

    /**
     * @return a {@link Builder} of {@link RosMonitorConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMonitorConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMonitorConfigProps> {
        java.lang.Object addrPoolId;
        java.lang.Object evaluationCount;
        java.lang.Object interval;
        java.lang.Object ispCityNode;
        java.lang.Object monitorExtendInfo;
        java.lang.Object protocolType;
        java.lang.Object timeout;

        /**
         * Sets the value of {@link RosMonitorConfigProps#getAddrPoolId}
         * @param addrPoolId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addrPoolId(java.lang.String addrPoolId) {
            this.addrPoolId = addrPoolId;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getAddrPoolId}
         * @param addrPoolId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addrPoolId(com.aliyun.ros.cdk.core.IResolvable addrPoolId) {
            this.addrPoolId = addrPoolId;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getEvaluationCount}
         * @param evaluationCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder evaluationCount(java.lang.Number evaluationCount) {
            this.evaluationCount = evaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getEvaluationCount}
         * @param evaluationCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder evaluationCount(com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.evaluationCount = evaluationCount;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getInterval}
         * @param interval the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder interval(java.lang.Number interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getInterval}
         * @param interval the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getIspCityNode}
         * @param ispCityNode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ispCityNode(com.aliyun.ros.cdk.core.IResolvable ispCityNode) {
            this.ispCityNode = ispCityNode;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getIspCityNode}
         * @param ispCityNode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ispCityNode(java.util.List<? extends java.lang.Object> ispCityNode) {
            this.ispCityNode = ispCityNode;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getMonitorExtendInfo}
         * @param monitorExtendInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder monitorExtendInfo(com.aliyun.ros.cdk.core.IResolvable monitorExtendInfo) {
            this.monitorExtendInfo = monitorExtendInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getMonitorExtendInfo}
         * @param monitorExtendInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder monitorExtendInfo(java.util.Map<java.lang.String, ? extends java.lang.Object> monitorExtendInfo) {
            this.monitorExtendInfo = monitorExtendInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getProtocolType}
         * @param protocolType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getProtocolType}
         * @param protocolType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getTimeout}
         * @param timeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitorConfigProps#getTimeout}
         * @param timeout the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMonitorConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMonitorConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMonitorConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMonitorConfigProps {
        private final java.lang.Object addrPoolId;
        private final java.lang.Object evaluationCount;
        private final java.lang.Object interval;
        private final java.lang.Object ispCityNode;
        private final java.lang.Object monitorExtendInfo;
        private final java.lang.Object protocolType;
        private final java.lang.Object timeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addrPoolId = software.amazon.jsii.Kernel.get(this, "addrPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.evaluationCount = software.amazon.jsii.Kernel.get(this, "evaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ispCityNode = software.amazon.jsii.Kernel.get(this, "ispCityNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.monitorExtendInfo = software.amazon.jsii.Kernel.get(this, "monitorExtendInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addrPoolId = java.util.Objects.requireNonNull(builder.addrPoolId, "addrPoolId is required");
            this.evaluationCount = java.util.Objects.requireNonNull(builder.evaluationCount, "evaluationCount is required");
            this.interval = java.util.Objects.requireNonNull(builder.interval, "interval is required");
            this.ispCityNode = java.util.Objects.requireNonNull(builder.ispCityNode, "ispCityNode is required");
            this.monitorExtendInfo = java.util.Objects.requireNonNull(builder.monitorExtendInfo, "monitorExtendInfo is required");
            this.protocolType = java.util.Objects.requireNonNull(builder.protocolType, "protocolType is required");
            this.timeout = java.util.Objects.requireNonNull(builder.timeout, "timeout is required");
        }

        @Override
        public final java.lang.Object getAddrPoolId() {
            return this.addrPoolId;
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

            data.set("addrPoolId", om.valueToTree(this.getAddrPoolId()));
            data.set("evaluationCount", om.valueToTree(this.getEvaluationCount()));
            data.set("interval", om.valueToTree(this.getInterval()));
            data.set("ispCityNode", om.valueToTree(this.getIspCityNode()));
            data.set("monitorExtendInfo", om.valueToTree(this.getMonitorExtendInfo()));
            data.set("protocolType", om.valueToTree(this.getProtocolType()));
            data.set("timeout", om.valueToTree(this.getTimeout()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.RosMonitorConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMonitorConfigProps.Jsii$Proxy that = (RosMonitorConfigProps.Jsii$Proxy) o;

            if (!addrPoolId.equals(that.addrPoolId)) return false;
            if (!evaluationCount.equals(that.evaluationCount)) return false;
            if (!interval.equals(that.interval)) return false;
            if (!ispCityNode.equals(that.ispCityNode)) return false;
            if (!monitorExtendInfo.equals(that.monitorExtendInfo)) return false;
            if (!protocolType.equals(that.protocolType)) return false;
            return this.timeout.equals(that.timeout);
        }

        @Override
        public final int hashCode() {
            int result = this.addrPoolId.hashCode();
            result = 31 * result + (this.evaluationCount.hashCode());
            result = 31 * result + (this.interval.hashCode());
            result = 31 * result + (this.ispCityNode.hashCode());
            result = 31 * result + (this.monitorExtendInfo.hashCode());
            result = 31 * result + (this.protocolType.hashCode());
            result = 31 * result + (this.timeout.hashCode());
            return result;
        }
    }
}
