package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTargets`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.749Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMetricRuleTargetsProps")
@software.amazon.jsii.Jsii.Proxy(RosMetricRuleTargetsProps.Jsii$Proxy.class)
public interface RosMetricRuleTargetsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargets();

    /**
     * @return a {@link Builder} of {@link RosMetricRuleTargetsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMetricRuleTargetsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMetricRuleTargetsProps> {
        java.lang.Object ruleId;
        java.lang.Object targets;

        /**
         * Sets the value of {@link RosMetricRuleTargetsProps#getRuleId}
         * @param ruleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleId(java.lang.String ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RosMetricRuleTargetsProps#getRuleId}
         * @param ruleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleId(com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RosMetricRuleTargetsProps#getTargets}
         * @param targets the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targets(com.aliyun.ros.cdk.core.IResolvable targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Sets the value of {@link RosMetricRuleTargetsProps#getTargets}
         * @param targets the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targets(java.util.List<? extends java.lang.Object> targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMetricRuleTargetsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMetricRuleTargetsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMetricRuleTargetsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMetricRuleTargetsProps {
        private final java.lang.Object ruleId;
        private final java.lang.Object targets;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ruleId = software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targets = software.amazon.jsii.Kernel.get(this, "targets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ruleId = java.util.Objects.requireNonNull(builder.ruleId, "ruleId is required");
            this.targets = java.util.Objects.requireNonNull(builder.targets, "targets is required");
        }

        @Override
        public final java.lang.Object getRuleId() {
            return this.ruleId;
        }

        @Override
        public final java.lang.Object getTargets() {
            return this.targets;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ruleId", om.valueToTree(this.getRuleId()));
            data.set("targets", om.valueToTree(this.getTargets()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosMetricRuleTargetsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMetricRuleTargetsProps.Jsii$Proxy that = (RosMetricRuleTargetsProps.Jsii$Proxy) o;

            if (!ruleId.equals(that.ruleId)) return false;
            return this.targets.equals(that.targets);
        }

        @Override
        public final int hashCode() {
            int result = this.ruleId.hashCode();
            result = 31 * result + (this.targets.hashCode());
            return result;
        }
    }
}
