package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>AntiBruteForceRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.003Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.AntiBruteForceRuleProps")
@software.amazon.jsii.Jsii.Proxy(AntiBruteForceRuleProps.Jsii$Proxy.class)
public interface AntiBruteForceRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property antiBruteForceRuleName: The name of the defense rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAntiBruteForceRuleName();

    /**
     * Property failCount: The maximum number of failed logon attempts from an account.
     * <p>
     * Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFailCount();

    /**
     * Property forbiddenTime: The period of time during which logons from an account are not allowed.
     * <p>
     * Unit: minutes. Valid values:
     * <p>
     * <ul>
     * <li>5: 5 minutes</li>
     * <li>15: 15 minutes</li>
     * <li>30: 30 minutes</li>
     * <li>60: 1 hour</li>
     * <li>120: 2 hours</li>
     * <li>360: 6 hours</li>
     * <li>720: 12 hours</li>
     * <li>1440: 24 hours</li>
     * <li>10080: 7 days</li>
     * <li>52560000: permanent</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getForbiddenTime();

    /**
     * Property span: The maximum period of time during which failed logon attempts from an account can occur.
     * <p>
     * Unit: minutes. Valid values:
     * <p>
     * <ul>
     * <li>1</li>
     * <li>2</li>
     * <li>5</li>
     * <li>10</li>
     * <li>15</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpan();

    /**
     * Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUuidList();

    /**
     * Property defaultRule: Specifies whether to set the defense rule as the default rule.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true: yes</li>
     * <li>false: no</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultRule() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AntiBruteForceRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AntiBruteForceRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AntiBruteForceRuleProps> {
        java.lang.Object antiBruteForceRuleName;
        java.lang.Object failCount;
        java.lang.Object forbiddenTime;
        java.lang.Object span;
        java.lang.Object uuidList;
        java.lang.Object defaultRule;

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getAntiBruteForceRuleName}
         * @param antiBruteForceRuleName Property antiBruteForceRuleName: The name of the defense rule. This parameter is required.
         * @return {@code this}
         */
        public Builder antiBruteForceRuleName(java.lang.String antiBruteForceRuleName) {
            this.antiBruteForceRuleName = antiBruteForceRuleName;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getAntiBruteForceRuleName}
         * @param antiBruteForceRuleName Property antiBruteForceRuleName: The name of the defense rule. This parameter is required.
         * @return {@code this}
         */
        public Builder antiBruteForceRuleName(com.aliyun.ros.cdk.core.IResolvable antiBruteForceRuleName) {
            this.antiBruteForceRuleName = antiBruteForceRuleName;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getFailCount}
         * @param failCount Property failCount: The maximum number of failed logon attempts from an account. This parameter is required.
         *                  Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
         * @return {@code this}
         */
        public Builder failCount(java.lang.Number failCount) {
            this.failCount = failCount;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getFailCount}
         * @param failCount Property failCount: The maximum number of failed logon attempts from an account. This parameter is required.
         *                  Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
         * @return {@code this}
         */
        public Builder failCount(com.aliyun.ros.cdk.core.IResolvable failCount) {
            this.failCount = failCount;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getForbiddenTime}
         * @param forbiddenTime Property forbiddenTime: The period of time during which logons from an account are not allowed. This parameter is required.
         *                      Unit: minutes. Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>5: 5 minutes</li>
         *                      <li>15: 15 minutes</li>
         *                      <li>30: 30 minutes</li>
         *                      <li>60: 1 hour</li>
         *                      <li>120: 2 hours</li>
         *                      <li>360: 6 hours</li>
         *                      <li>720: 12 hours</li>
         *                      <li>1440: 24 hours</li>
         *                      <li>10080: 7 days</li>
         *                      <li>52560000: permanent</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder forbiddenTime(java.lang.Number forbiddenTime) {
            this.forbiddenTime = forbiddenTime;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getForbiddenTime}
         * @param forbiddenTime Property forbiddenTime: The period of time during which logons from an account are not allowed. This parameter is required.
         *                      Unit: minutes. Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>5: 5 minutes</li>
         *                      <li>15: 15 minutes</li>
         *                      <li>30: 30 minutes</li>
         *                      <li>60: 1 hour</li>
         *                      <li>120: 2 hours</li>
         *                      <li>360: 6 hours</li>
         *                      <li>720: 12 hours</li>
         *                      <li>1440: 24 hours</li>
         *                      <li>10080: 7 days</li>
         *                      <li>52560000: permanent</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder forbiddenTime(com.aliyun.ros.cdk.core.IResolvable forbiddenTime) {
            this.forbiddenTime = forbiddenTime;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getSpan}
         * @param span Property span: The maximum period of time during which failed logon attempts from an account can occur. This parameter is required.
         *             Unit: minutes. Valid values:
         *             <p>
         *             <ul>
         *             <li>1</li>
         *             <li>2</li>
         *             <li>5</li>
         *             <li>10</li>
         *             <li>15</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder span(java.lang.Number span) {
            this.span = span;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getSpan}
         * @param span Property span: The maximum period of time during which failed logon attempts from an account can occur. This parameter is required.
         *             Unit: minutes. Valid values:
         *             <p>
         *             <ul>
         *             <li>1</li>
         *             <li>2</li>
         *             <li>5</li>
         *             <li>10</li>
         *             <li>15</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder span(com.aliyun.ros.cdk.core.IResolvable span) {
            this.span = span;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getUuidList}
         * @param uuidList Property uuidList: The UUIDs of the servers to which you want to apply the defense rule. This parameter is required.
         * @return {@code this}
         */
        public Builder uuidList(com.aliyun.ros.cdk.core.IResolvable uuidList) {
            this.uuidList = uuidList;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getUuidList}
         * @param uuidList Property uuidList: The UUIDs of the servers to which you want to apply the defense rule. This parameter is required.
         * @return {@code this}
         */
        public Builder uuidList(java.util.List<? extends java.lang.Object> uuidList) {
            this.uuidList = uuidList;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getDefaultRule}
         * @param defaultRule Property defaultRule: Specifies whether to set the defense rule as the default rule.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>true: yes</li>
         *                    <li>false: no</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder defaultRule(java.lang.Boolean defaultRule) {
            this.defaultRule = defaultRule;
            return this;
        }

        /**
         * Sets the value of {@link AntiBruteForceRuleProps#getDefaultRule}
         * @param defaultRule Property defaultRule: Specifies whether to set the defense rule as the default rule.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>true: yes</li>
         *                    <li>false: no</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder defaultRule(com.aliyun.ros.cdk.core.IResolvable defaultRule) {
            this.defaultRule = defaultRule;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AntiBruteForceRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AntiBruteForceRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AntiBruteForceRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AntiBruteForceRuleProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.AntiBruteForceRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AntiBruteForceRuleProps.Jsii$Proxy that = (AntiBruteForceRuleProps.Jsii$Proxy) o;

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
