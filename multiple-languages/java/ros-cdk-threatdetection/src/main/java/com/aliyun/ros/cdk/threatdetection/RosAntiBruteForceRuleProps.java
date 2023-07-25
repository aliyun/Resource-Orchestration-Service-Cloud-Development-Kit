package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>ALIYUN::ThreatDetection::AntiBruteForceRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.590Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosAntiBruteForceRuleProps.Jsii$Proxy.class)
public interface RosAntiBruteForceRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAntiBruteForceRuleName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFailCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getForbiddenTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpan();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUuidList();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultRule() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAntiBruteForceRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAntiBruteForceRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAntiBruteForceRuleProps> {
        java.lang.Object antiBruteForceRuleName;
        java.lang.Object failCount;
        java.lang.Object forbiddenTime;
        java.lang.Object span;
        java.lang.Object uuidList;
        java.lang.Object defaultRule;

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getAntiBruteForceRuleName}
         * @param antiBruteForceRuleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder antiBruteForceRuleName(java.lang.String antiBruteForceRuleName) {
            this.antiBruteForceRuleName = antiBruteForceRuleName;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getAntiBruteForceRuleName}
         * @param antiBruteForceRuleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder antiBruteForceRuleName(com.aliyun.ros.cdk.core.IResolvable antiBruteForceRuleName) {
            this.antiBruteForceRuleName = antiBruteForceRuleName;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getFailCount}
         * @param failCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder failCount(java.lang.Number failCount) {
            this.failCount = failCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getFailCount}
         * @param failCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder failCount(com.aliyun.ros.cdk.core.IResolvable failCount) {
            this.failCount = failCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getForbiddenTime}
         * @param forbiddenTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder forbiddenTime(java.lang.Number forbiddenTime) {
            this.forbiddenTime = forbiddenTime;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getForbiddenTime}
         * @param forbiddenTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder forbiddenTime(com.aliyun.ros.cdk.core.IResolvable forbiddenTime) {
            this.forbiddenTime = forbiddenTime;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getSpan}
         * @param span the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder span(java.lang.Number span) {
            this.span = span;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getSpan}
         * @param span the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder span(com.aliyun.ros.cdk.core.IResolvable span) {
            this.span = span;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getUuidList}
         * @param uuidList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uuidList(com.aliyun.ros.cdk.core.IResolvable uuidList) {
            this.uuidList = uuidList;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getUuidList}
         * @param uuidList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uuidList(java.util.List<? extends java.lang.Object> uuidList) {
            this.uuidList = uuidList;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getDefaultRule}
         * @param defaultRule the value to be set.
         * @return {@code this}
         */
        public Builder defaultRule(java.lang.Boolean defaultRule) {
            this.defaultRule = defaultRule;
            return this;
        }

        /**
         * Sets the value of {@link RosAntiBruteForceRuleProps#getDefaultRule}
         * @param defaultRule the value to be set.
         * @return {@code this}
         */
        public Builder defaultRule(com.aliyun.ros.cdk.core.IResolvable defaultRule) {
            this.defaultRule = defaultRule;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAntiBruteForceRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAntiBruteForceRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAntiBruteForceRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAntiBruteForceRuleProps {
        private final java.lang.Object antiBruteForceRuleName;
        private final java.lang.Object failCount;
        private final java.lang.Object forbiddenTime;
        private final java.lang.Object span;
        private final java.lang.Object uuidList;
        private final java.lang.Object defaultRule;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.antiBruteForceRuleName = software.amazon.jsii.Kernel.get(this, "antiBruteForceRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failCount = software.amazon.jsii.Kernel.get(this, "failCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forbiddenTime = software.amazon.jsii.Kernel.get(this, "forbiddenTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.span = software.amazon.jsii.Kernel.get(this, "span", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uuidList = software.amazon.jsii.Kernel.get(this, "uuidList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultRule = software.amazon.jsii.Kernel.get(this, "defaultRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.antiBruteForceRuleName = java.util.Objects.requireNonNull(builder.antiBruteForceRuleName, "antiBruteForceRuleName is required");
            this.failCount = java.util.Objects.requireNonNull(builder.failCount, "failCount is required");
            this.forbiddenTime = java.util.Objects.requireNonNull(builder.forbiddenTime, "forbiddenTime is required");
            this.span = java.util.Objects.requireNonNull(builder.span, "span is required");
            this.uuidList = java.util.Objects.requireNonNull(builder.uuidList, "uuidList is required");
            this.defaultRule = builder.defaultRule;
        }

        @Override
        public final java.lang.Object getAntiBruteForceRuleName() {
            return this.antiBruteForceRuleName;
        }

        @Override
        public final java.lang.Object getFailCount() {
            return this.failCount;
        }

        @Override
        public final java.lang.Object getForbiddenTime() {
            return this.forbiddenTime;
        }

        @Override
        public final java.lang.Object getSpan() {
            return this.span;
        }

        @Override
        public final java.lang.Object getUuidList() {
            return this.uuidList;
        }

        @Override
        public final java.lang.Object getDefaultRule() {
            return this.defaultRule;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("antiBruteForceRuleName", om.valueToTree(this.getAntiBruteForceRuleName()));
            data.set("failCount", om.valueToTree(this.getFailCount()));
            data.set("forbiddenTime", om.valueToTree(this.getForbiddenTime()));
            data.set("span", om.valueToTree(this.getSpan()));
            data.set("uuidList", om.valueToTree(this.getUuidList()));
            if (this.getDefaultRule() != null) {
                data.set("defaultRule", om.valueToTree(this.getDefaultRule()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAntiBruteForceRuleProps.Jsii$Proxy that = (RosAntiBruteForceRuleProps.Jsii$Proxy) o;

            if (!antiBruteForceRuleName.equals(that.antiBruteForceRuleName)) return false;
            if (!failCount.equals(that.failCount)) return false;
            if (!forbiddenTime.equals(that.forbiddenTime)) return false;
            if (!span.equals(that.span)) return false;
            if (!uuidList.equals(that.uuidList)) return false;
            return this.defaultRule != null ? this.defaultRule.equals(that.defaultRule) : that.defaultRule == null;
        }

        @Override
        public final int hashCode() {
            int result = this.antiBruteForceRuleName.hashCode();
            result = 31 * result + (this.failCount.hashCode());
            result = 31 * result + (this.forbiddenTime.hashCode());
            result = 31 * result + (this.span.hashCode());
            result = 31 * result + (this.uuidList.hashCode());
            result = 31 * result + (this.defaultRule != null ? this.defaultRule.hashCode() : 0);
            return result;
        }
    }
}
