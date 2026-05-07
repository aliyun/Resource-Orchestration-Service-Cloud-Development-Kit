package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>WaitingRoomRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.311Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.WaitingRoomRuleProps")
@software.amazon.jsii.Jsii.Proxy(WaitingRoomRuleProps.Jsii$Proxy.class)
public interface WaitingRoomRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property rule: The content of the rule, the implemented policy or conditional expression.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRule();

    /**
     * Property ruleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set. Value range:
     * <p>
     * <ul>
     * <li>on: open.</li>
     * <li>off: close.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleEnable();

    /**
     * Property ruleName: Rule name, optional, used to query by waiting room bypass rule name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
     * <p>
     * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWaitingRoomId();

    /**
     * @return a {@link Builder} of {@link WaitingRoomRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WaitingRoomRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WaitingRoomRuleProps> {
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object siteId;
        java.lang.Object waitingRoomId;

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getRule}
         * @param rule Property rule: The content of the rule, the implemented policy or conditional expression. This parameter is required.
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getRule}
         * @param rule Property rule: The content of the rule, the implemented policy or conditional expression. This parameter is required.
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li>on: open.</li>
         *                   <li>off: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li>on: open.</li>
         *                   <li>off: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name, optional, used to query by waiting room bypass rule name. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name, optional, used to query by waiting room bypass rule name. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getWaitingRoomId}
         * @param waitingRoomId Property waitingRoomId: Waiting room ID, used to identify a specific waiting room. This parameter is required.
         *                      It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         * @return {@code this}
         */
        public Builder waitingRoomId(java.lang.String waitingRoomId) {
            this.waitingRoomId = waitingRoomId;
            return this;
        }

        /**
         * Sets the value of {@link WaitingRoomRuleProps#getWaitingRoomId}
         * @param waitingRoomId Property waitingRoomId: Waiting room ID, used to identify a specific waiting room. This parameter is required.
         *                      It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         * @return {@code this}
         */
        public Builder waitingRoomId(com.aliyun.ros.cdk.core.IResolvable waitingRoomId) {
            this.waitingRoomId = waitingRoomId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WaitingRoomRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WaitingRoomRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WaitingRoomRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WaitingRoomRuleProps {
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object siteId;
        private final java.lang.Object waitingRoomId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitingRoomId = software.amazon.jsii.Kernel.get(this, "waitingRoomId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.rule = java.util.Objects.requireNonNull(builder.rule, "rule is required");
            this.ruleEnable = java.util.Objects.requireNonNull(builder.ruleEnable, "ruleEnable is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.waitingRoomId = java.util.Objects.requireNonNull(builder.waitingRoomId, "waitingRoomId is required");
        }

        @Override
        public final java.lang.Object getRule() {
            return this.rule;
        }

        @Override
        public final java.lang.Object getRuleEnable() {
            return this.ruleEnable;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getWaitingRoomId() {
            return this.waitingRoomId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("rule", om.valueToTree(this.getRule()));
            data.set("ruleEnable", om.valueToTree(this.getRuleEnable()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            data.set("waitingRoomId", om.valueToTree(this.getWaitingRoomId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.WaitingRoomRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WaitingRoomRuleProps.Jsii$Proxy that = (WaitingRoomRuleProps.Jsii$Proxy) o;

            if (!rule.equals(that.rule)) return false;
            if (!ruleEnable.equals(that.ruleEnable)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            if (!siteId.equals(that.siteId)) return false;
            return this.waitingRoomId.equals(that.waitingRoomId);
        }

        @Override
        public final int hashCode() {
            int result = this.rule.hashCode();
            result = 31 * result + (this.ruleEnable.hashCode());
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.waitingRoomId.hashCode());
            return result;
        }
    }
}
